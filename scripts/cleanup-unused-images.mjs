/**
 * 图片死文件清理脚本 v4（安全版）
 * 白名单 = out/ 构建引用 ∪ src/ 源码引用 ∪ verify 脚本保护目录(zeekr)
 * 用法: node scripts/cleanup-unused-images.mjs            # 只列出
 *       node scripts/cleanup-unused-images.mjs --delete   # 执行删除
 */
import { readdirSync, statSync, readFileSync, rmSync } from "node:fs";
import { join, resolve } from "node:path";

const OUT_DIR = resolve("out");
const SRC_DIR = resolve("src");
const PUBLIC_IMAGES = resolve("public/images");

// verify 脚本保护的目录（质量门禁要求存在，绝不删除）
const PROTECTED_PREFIXES = [
  "/images/products/zeekr",     // verify-zeekr-images.mjs
];

const references = new Set();

function scanDir(dir, fileRe) {
  if (!statSync(dir).isDirectory()) return;
  const stack = [dir];
  while (stack.length) {
    const d = stack.pop();
    for (const name of readdirSync(d)) {
      const p = join(d, name);
      const st = statSync(p);
      if (st.isDirectory()) { stack.push(p); continue; }
      if (!fileRe.test(name)) continue;
      const content = readFileSync(p, "utf8");
      const re = /\/\\*images\/[^"')\s}]+?\.(webp|jpg|jpeg|png|avif|gif|svg)/g;
      let m;
      while ((m = re.exec(content)) !== null) references.add(m[0].replace(/\\/g, ""));
    }
  }
}
scanDir(OUT_DIR, /\.(html|txt|js|json)$/);
scanDir(SRC_DIR, /\.(ts|tsx|js|jsx|json)$/);

// 3. 收集 public/images 全部文件
const allFiles = [];
function collect(dir, prefix = "") {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) { collect(p, `${prefix}/${name}`); continue; }
    if (st.size === 0) continue;
    allFiles.push({ path: p, rel: `/images${prefix}/${name}`, size: st.size });
  }
}
collect(PUBLIC_IMAGES);

// 4. 判定未引用：不在白名单 且 不在保护目录 且 src 中无文件名级引用（防字符串拼接漏检）
// 预扫描 src 全部源码内容，按文件名（basename）做二次保护
const srcBasenames = new Set();
(function scanSrcForBasenames() {
  const stack = [SRC_DIR];
  while (stack.length) {
    const d = stack.pop();
    for (const name of readdirSync(d)) {
      const p = join(d, name);
      const st = statSync(p);
      if (st.isDirectory()) { stack.push(p); continue; }
      if (!/\.(ts|tsx|js|jsx)$/.test(name)) continue;
      const content = readFileSync(p, "utf8");
      // 提取所有 .webp/.jpg/.png 文件名（含拼接场景的片段）
      const re = /([a-zA-Z0-9\u4e00-\u9fa5_-]+\.(webp|jpg|jpeg|png|avif|gif|svg))/g;
      let m;
      while ((m = re.exec(content)) !== null) srcBasenames.add(m[1]);
    }
  }
})();

const unused = allFiles.filter((f) => {
  if (references.has(f.rel)) return false;
  if (PROTECTED_PREFIXES.some((p) => f.rel.startsWith(p))) return false;
  // 文件名级二次保护：src 里出现过该文件名则保留
  const base = f.rel.split("/").pop();
  if (srcBasenames.has(base)) return false;
  return true;
});
const used = allFiles.filter((f) => !unused.includes(f));
const usedSize = used.reduce((a, b) => a + b.size, 0);
const unusedSize = unused.reduce((a, b) => a + b.size, 0);

console.log(`白名单引用: ${references.size} (out ∪ src), 保护目录: ${PROTECTED_PREFIXES.length}`);
console.log(`public/images 总文件: ${allFiles.length} (${((usedSize + unusedSize) / 1024 / 1024).toFixed(1)}MB)`);
console.log(`被引用/保留: ${used.length} (${(usedSize / 1024 / 1024).toFixed(1)}MB)`);
console.log(`可删除: ${unused.length} (${(unusedSize / 1024 / 1024).toFixed(1)}MB)`);

const byType = {};
for (const f of unused) {
  const t = f.rel.split(".").pop();
  byType[t] = (byType[t] || 0) + 1;
}
console.log("\n=== 可删除类型分布 ===");
for (const [t, n] of Object.entries(byType).sort((a, b) => b[1] - a[1])) console.log(`${t}: ${n}`);

// 列出所有可删除文件（用于人工复核）
const allUnused = [...unused].sort((a, b) => b.size - a.size);
console.log("\n=== 全部可删除文件列表（大小降序）===");
for (const f of allUnused) console.log(`${(f.size / 1024).toFixed(0)}KB  ${f.rel}`);
console.log(`\n共 ${allUnused.length} 个文件，合计 ${(unusedSize / 1024 / 1024).toFixed(1)}MB`);

if (process.argv.includes("--delete")) {
  console.log("\n=== 执行删除 ===");
  let deleted = 0, freed = 0;
  for (const f of allUnused) {
    try { rmSync(f.path); deleted++; freed += f.size; } catch {}
  }
  console.log(`已删除 ${deleted} 个，释放 ${(freed / 1024 / 1024).toFixed(1)}MB`);
}
