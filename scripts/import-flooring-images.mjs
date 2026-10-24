#!/usr/bin/env node
/**
 * 地板成品图 → 规范 webp 入库
 *
 * 源：`供应商产品资料/地板成品图_webp/<车型>.webp`（1254×1254 营销成品图，38 张）
 * 目标：`public/images/products/flooring/poster/<slug>.webp`（长边 768，webp q82）
 *
 * 同时生成 `src/lib/flooring-fitment-images.ts`：车型名（与 flooringFitmentEntries 的
 * `model` 字段逐字一致）→ 图片路径。映射是硬编码的确定性字典，不做模糊匹配；
 * 任何源文件没配上、或某个适配表车型没图，都会在报告里点名。
 *
 * 用法：
 *   node scripts/import-flooring-images.mjs            # dry-run
 *   node scripts/import-flooring-images.mjs --apply    # 实跑
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { basename, extname, join, relative, resolve } from "node:path";

const PROJECT_ROOT = resolve(import.meta.dirname, "..");
const SRC_DIR = join(PROJECT_ROOT, "供应商产品资料", "地板成品图_webp");
const OUT_DIR = join(PROJECT_ROOT, "public", "images", "products", "flooring", "poster");
const MANIFEST_TS = join(PROJECT_ROOT, "src", "lib", "flooring-fitment-images.ts");
const REPORT_PATH = join(PROJECT_ROOT, "runs", "import-flooring-images.report.json");

const MAX_EDGE = 768;
const QUALITY = 82;
const PUBLIC_PREFIX = "/images/products/flooring/poster";

/**
 * 源文件名（去扩展名）→ { model, slug }
 * model 必须与 src/lib/flooring-products.ts 的 flooringFitmentEntries[].model 逐字一致。
 */
const MAP = {
  // ─── SUV 17 ───
  // 源文件名为 M7 / M8 / M9；按地板图片车型图编号（D001 问界M7 → D003 问界M9）确认归属
  M7: { model: "问界 M7", slug: "wenjie-m7" },
  M8: { model: "问界 M8", slug: "wenjie-m8" },
  问界M9: { model: "问界 M9", slug: "wenjie-m9" },
  极氪8X: { model: "极氪 8X", slug: "zeekr-8x" },
  极氪9X: { model: "极氪 9X", slug: "zeekr-9x" },
  腾势N8L: { model: "腾势 N8L", slug: "denza-n8l" },
  腾势N9: { model: "腾势 N9", slug: "denza-n9" },
  理想L8: { model: "理想 L8", slug: "li-l8" },
  理想L9: { model: "理想 L9", slug: "li-l9" },
  理想I8: { model: "理想 i8", slug: "li-i8" },
  小鹏GX: { model: "小鹏 GX", slug: "xpeng-gx" },
  岚图泰山: { model: "岚图泰山", slug: "voyah-taishan" },
  蔚来ES8: { model: "蔚来 ES8", slug: "nio-es8" },
  蔚来ES9: { model: "蔚来 ES9", slug: "nio-es9" },
  魏牌V9X: { model: "魏牌 V9X", slug: "wey-v9x" },
  领克900: { model: "领克 900", slug: "lynkco-900" },
  乐道L90: { model: "乐道 L90", slug: "onvo-l90" },
  // ─── MPV 21 ───
  智界V9: { model: "智界 V9", slug: "zhijie-v9" },
  魏牌高山7: { model: "高山 7", slug: "gaoshan-7" },
  魏牌高山8: { model: "高山 8", slug: "gaoshan-8" },
  魏牌高山9: { model: "高山 9", slug: "gaoshan-9" },
  理想MEGA: { model: "理想 MEGA", slug: "li-mega" },
  腾势D9: { model: "腾势 D9", slug: "denza-d9" },
  塞纳格瑞维亚: { model: "塞纳 / 格瑞维亚", slug: "sienna-granvia" },
  别克GL8世纪: { model: "别克至境世家", slug: "buick-century" },
  "别克 GL8 陆尊": { model: "GL8（陆尚/陆尊）", slug: "buick-gl8" },
  比亚迪夏: { model: "比亚迪·夏", slug: "byd-xia" },
  岚图梦想家: { model: "岚图·梦想家", slug: "voyah-dreamer" },
  极氪009: { model: "极氪 009", slug: "zeekr-009" },
  本田奥德赛: { model: "奥德赛 / 艾力绅", slug: "honda-odyssey" },
  奔驰V260: { model: "奔驰·威霆 V260", slug: "benz-v260" },
  奔驰V300: { model: "奔驰·威霆 V300", slug: "benz-v300" },
  埃尔法30: { model: "埃尔法 30 系", slug: "alphard-30" },
  丰田埃尔法40系: { model: "埃尔法 40 系", slug: "alphard-40" },
  // 源文件名为「丰田」；图上标题为「丰田塞纳高端定制地板」→ 归属塞纳/格瑞维亚
  丰田: { model: "塞纳 / 格瑞维亚", slug: "sienna-granvia" },
  小鹏X9: { model: "小鹏 X9", slug: "xpeng-x9" },
  传祺E8: { model: "传祺 E8", slug: "gac-e8" },
  传祺E9: { model: "传祺 E9", slug: "gac-e9" },
  传祺M8: { model: "传祺 M8", slug: "gac-m8" },
};

/** 从 flooring-products.ts 抽出适配表车型名，用于反向核对覆盖 */
function readFitmentModels() {
  const src = join(PROJECT_ROOT, "src", "lib", "flooring-products.ts");
  const text = execFileSync(process.execPath, [
    "-e",
    `const fs=require("fs");
     const t=fs.readFileSync(${JSON.stringify(src)},"utf8");
     const body=t.split("export const flooringFitmentEntries")[1]??"";
     const re=/model:\\s*"([^"]+)"/g; const out=[]; let m;
     while((m=re.exec(body))) out.push(m[1]);
     process.stdout.write(JSON.stringify(out));`,
  ]).toString();
  return JSON.parse(text);
}

function main() {
  const APPLY = process.argv.includes("--apply");

  if (!existsSync(SRC_DIR)) {
    console.error(`✖ 源目录不存在：${relative(PROJECT_ROOT, SRC_DIR)}`);
    process.exit(1);
  }

  const sourceFiles = readdirSync(SRC_DIR).filter((f) => extname(f).toLowerCase() === ".webp" && !f.startsWith("."));
  const sourceNames = sourceFiles.map((f) => basename(f, extname(f)));

  const unmapped = sourceNames.filter((n) => !MAP[n]);
  const mapped = sourceNames.filter((n) => MAP[n]);

  // 反向：适配表里哪些车型没图
  const fitmentModels = readFitmentModels();
  const coveredModels = new Set(mapped.map((n) => MAP[n].model));
  const missingModels = fitmentModels.filter((m) => !coveredModels.has(m));
  const extraModels = [...coveredModels].filter((m) => !fitmentModels.includes(m));

  console.log(`源图：${sourceFiles.length} 个  ｜ 已映射：${mapped.length}  ｜ 未映射：${unmapped.length}`);
  console.log(`适配表车型：${fitmentModels.length}  ｜ 有图：${coveredModels.size}  ｜ 缺图：${missingModels.length}`);
  if (unmapped.length) console.log(`\n⚠️  源图未映射（需要补 MAP）：\n   ${unmapped.join("\n   ")}`);
  if (missingModels.length) console.log(`\n⚠️  适配表车型缺图：\n   ${missingModels.join("\n   ")}`);
  if (extraModels.length) console.log(`\n⚠️  MAP 里的车型不在适配表（model 字符串可能不符）：\n   ${extraModels.join("\n   ")}`);

  if (!APPLY) {
    console.log(`\n[dry-run] 未写入。加 --apply 实跑。`);
    return;
  }

  if (unmapped.length || missingModels.length || extraModels.length) {
    console.error(`\n✖ 映射不完整，拒绝写入（先修 MAP 字典）。`);
    process.exit(1);
  }

  // 清理旧产物（只删本目录，防残留）
  if (existsSync(OUT_DIR)) rmSync(OUT_DIR, { recursive: true, force: true });
  mkdirSync(OUT_DIR, { recursive: true });

  const rows = [];
  let totalBytes = 0;
  for (const name of mapped) {
    const { model, slug } = MAP[name];
    const srcPath = join(SRC_DIR, `${name}.webp`);
    const outPath = join(OUT_DIR, `${slug}.webp`);
    execFileSync("cwebp", ["-quiet", "-q", String(QUALITY), "-resize", String(MAX_EDGE), "0", srcPath, "-o", outPath], {
      stdio: "pipe",
    });
    const size = statSync(outPath).size;
    totalBytes += size;
    rows.push({ model, slug, source: `${name}.webp`, out: `${PUBLIC_PREFIX}/${slug}.webp`, bytes: size });
  }

  // 生成 TS 映射表（确定性，避免手抄）
  const lines = [
    "/**",
    " * 地板适配表 → 成品图映射（自动生成，勿手改）",
    " *",
    " * 生成：`node scripts/import-flooring-images.mjs --apply`",
    " * 源：`供应商产品资料/地板成品图_webp/`（供应商营销成品图，1254²）",
    " * 产物：`public/images/products/flooring/poster/<slug>.webp`（长边 768，webp q82）",
    " */",
    "",
    "export const FLOORING_POSTER_DIR = \"/images/products/flooring/poster\";",
    "",
    "/** 车型名（与 flooringFitmentEntries[].model 逐字一致）→ 成品图路径 */",
    "export const flooringFitmentPosterByModel: Record<string, string> = {",
  ];
  for (const r of rows.sort((a, b) => a.model.localeCompare(b.model, "zh"))) {
    lines.push(`  ${JSON.stringify(r.model)}: \`\${FLOORING_POSTER_DIR}/${r.slug}.webp\`,`);
  }
  lines.push("};", "");
  writeFileSync(MANIFEST_TS, lines.join("\n"));

  const report = {
    generated_at: new Date().toISOString(),
    source_dir: relative(PROJECT_ROOT, SRC_DIR),
    out_dir: relative(PROJECT_ROOT, OUT_DIR),
    max_edge: MAX_EDGE,
    quality: QUALITY,
    count: rows.length,
    output_bytes: totalBytes,
    entries: rows,
  };
  mkdirSync(join(PROJECT_ROOT, "runs"), { recursive: true });
  writeFileSync(REPORT_PATH, `${JSON.stringify(report, null, 2)}\n`);

  console.log(`\n✅ 入库 ${rows.length} 张 ｜ ${(totalBytes / 1048576).toFixed(2)} MB ｜ 平均 ${Math.round(totalBytes / rows.length / 1024)} KB`);
  console.log(`   产物：${relative(PROJECT_ROOT, OUT_DIR)}`);
  console.log(`   映射表：${relative(PROJECT_ROOT, MANIFEST_TS)}`);
  console.log(`   报告：${relative(PROJECT_ROOT, REPORT_PATH)}`);
}

main();
