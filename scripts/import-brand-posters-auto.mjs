#!/usr/bin/env node
/**
 * 品牌页适配产品图 —— **自动匹配**导入（在 import-brand-fitment-posters.mjs 的手写字典
 * 之上补齐规模：34 品牌 / 1170 张不可能手抄）。
 *
 * 源：`供应商产品资料/_整理后/<品牌>/<车型>/成品图/**`（含 `webp/` 子目录优先）
 * 目标：`public/images/products/<brand-slug>/fitment/<model-slug>-<project-slug>.webp`
 *
 * 匹配规则（**全部严格，任一步不唯一即拒收**）：
 *   1. 品牌目录名 → slug，且**必须有对应 `src/lib/fitment/<slug>.ts`**（无适配库 = 无法校验，拒收）
 *   2. 文件名必须以该品牌某个**已知车型名**开头（模型名取自 fitment 数据，最长匹配优先）
 *   3. 车型名之后剩余部分必须**恰好等于某个已知项目名**（允许 `-N` / `_N` / `(N)` 变体后缀）
 *   4. 同名多后缀（.png 与 .webp 并存）→ **优先 webp**，其次 `webp/` 子目录里的那份
 *   5. 同一 (车型, 项目) 命中多张 → 只取第一张，其余记进 report（不静默丢）
 *
 * ⚠️ 源图是**带文字的信息图**（蓝辉 logo + 「适配 XX」徽章 + 标题 + 口号 + 材质标注），
 *    文字烤进像素；图上材质/年款可能与适配数据不一致 → 页面须配免责声明。
 *
 * 用法：
 *   node scripts/import-brand-posters-auto.mjs                # 全品牌 dry-run
 *   node scripts/import-brand-posters-auto.mjs 理想 问界       # 只跑指定品牌
 *   node scripts/import-brand-posters-auto.mjs --apply         # 实跑
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { basename, extname, join, relative, resolve } from "node:path";

const PROJECT_ROOT = resolve(import.meta.dirname, "..");
const SRC_ROOT = join(PROJECT_ROOT, "供应商产品资料", "_整理后");
const FIT_DIR = join(PROJECT_ROOT, "src", "lib", "fitment");
const MAX_EDGE = 720;
const QUALITY = 82;

/** 品牌中文目录名 → slug（取自 src/lib/product-routes.ts 的 brandSlug/brandName，已核对） */
const BRAND_SLUG = {
  问界: "wenjie", 小米: "xiaomi", 极氪: "zeekr", 理想: "li-auto", 特斯拉: "tesla",
  小鹏: "xpeng", 腾势: "denza", 岚图: "voyah", 乐道: "ledao", 智界: "zhijie",
  蔚来: "nio", 丰田: "toyota", 马自达: "mazda", 广汽传祺: "gac", 日产: "nissan",
  哈弗: "haval", iCAR: "icar", 尚界: "shangjie", 享界: "xiangjie", 宝马: "bmw",
  红旗: "hongqi", 大众: "volkswagen", 起亚: "kia", 昊铂: "haobo", 路虎: "land-rover",
  奇瑞: "chery", 长城: "great-wall", 雪佛兰: "chevrolet", 仰望: "yangwang", 别克: "buick",
  吉利: "geely", 坦克: "tank", 奔驰: "mercedes", 奥迪: "audi", 本田: "honda",
  极狐: "arcfox", 标致: "peugeot", 深蓝: "deepal", 零跑: "leapmotor", 魏牌: "wey",
  方程豹: "fangchengbao", 比亚迪: "byd", 阿维塔: "avatr", 凯迪拉克: "cadillac",
  北京汽车: "baic", 吉利银河: "geely-galaxy", 广汽埃安: "aion",
};

const IMG_EXT = /\.(webp|png|jpe?g)$/i;
const escapeRe = (c) => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * 受保护品牌：这些品牌由**手写映射表** `import-brand-fitment-posters.mjs` 负责
 * （它含刻意排除项与出处注释），auto 脚本**绝不写它们的映射表**，避免把手写成果覆盖掉。
 */
const PROTECTED = new Set(["wey", "buick"]);

/** 读某品牌的 (车型 → 项目集合)，模型与项目名逐字来自 fitment 数据 */
function readFitment(brand) {
  const src = join(FIT_DIR, `${brand}.ts`);
  if (!existsSync(src)) return null;
  const out = execFileSync(process.execPath, [
    "-e",
    `const fs=require("fs");
     const t=fs.readFileSync(${JSON.stringify(src)},"utf8");
     const parts=t.split(/model:\\s*"([^"]+)",/);
     const map={};
     for(let i=1;i<parts.length;i+=2){
       const seg=parts[i+1]||"";
       const re=/name:\\s*"([^"]+)",\\s*\\n?\\s*specs:/g; let m;
       map[parts[i]]=[];
       while((m=re.exec(seg))) map[parts[i]].push(m[1]);
     }
     process.stdout.write(JSON.stringify(map));`,
  ]).toString();
  return JSON.parse(out);
}

/** slug：中文转拼音不现实 → 用「车型名转 ASCII 化 + 项目名哈希后缀」保证唯一且可读 */
const PROJECT_ABBR = {
  "底盘护板": "skid-plate", "电动踏板": "step", "小桌板": "tray-table", "吸顶电视": "ceiling-tv",
  "地板": "flooring", "包围": "body-kit", "轮毂": "wheel", "尾翼": "spoiler",
  "平面尾箱垫": "trunk-flat", "360全包尾箱": "trunk-full", "360软包脚垫": "floor-mats",
  "后排娱乐屏": "rear-screen", "腿托": "leg-rest", "隐形车衣": "ppf", "车窗膜": "window-film",
};
const slugifyModel = (model) => {
  const ascii = model.replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase();
  if (ascii) return ascii;
  // 纯中文车型名 → 稳定短哈希，避免碰撞
  let h = 0;
  for (const ch of model) h = (h * 31 + ch.codePointAt(0)) >>> 0;
  return `m${h.toString(36)}`;
};
const slugifyProject = (project) => {
  if (PROJECT_ABBR[project]) return PROJECT_ABBR[project];
  let h = 0;
  for (const ch of project) h = (h * 31 + ch.codePointAt(0)) >>> 0;
  return `p${h.toString(36)}`;
};

/** 收集某品牌下所有成品图文件（排除 ._ 元数据） */
function collectPosters(brandDir) {
  const files = [];
  const walk = (dir) => {
    let entries;
    try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      if (e.name.startsWith("._") || e.name === ".DS_Store") continue;
      const full = join(dir, e.name);
      if (e.isDirectory()) { walk(full); continue; }
      if (!IMG_EXT.test(e.name)) continue;
      files.push(full);
    }
  };
  walk(brandDir);
  return files.filter((f) => /成品图/.test(f));
}

/** 同 (车型,项目) 择优：优先 webp/ 子目录、其次 .webp 扩展名 */
function preferRank(p) {
  const inWebpDir = /\/成品图\/webp\//.test(p);
  const isWebp = extname(p).toLowerCase() === ".webp";
  return (inWebpDir ? 0 : 10) + (isWebp ? 0 : 1);
}

function main() {
  const argv = process.argv.slice(2);
  const APPLY = argv.includes("--apply");
  const only = argv.filter((a) => !a.startsWith("--"));

  const brands = readdirSync(SRC_ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("_"))
    .map((d) => d.name)
    .filter((b) => (only.length ? only.includes(b) : true));

  const accepted = [];
  const rejected = [];
  const reasons = {};

  for (const brandName of brands) {
    const slug = BRAND_SLUG[brandName];
    const brandDir = join(SRC_ROOT, brandName);
    const files = collectPosters(brandDir);
    if (files.length === 0) continue;

    if (!slug) {
      for (const f of files) rejected.push({ brand: brandName, file: f, why: "品牌目录名未映射到 slug" });
      continue;
    }
    if (PROTECTED.has(slug)) {
      for (const f of files) rejected.push({ brand: brandName, file: f, why: `受保护品牌：由手写映射表 import-brand-fitment-posters.mjs 负责（${slug}）` });
      continue;
    }

    const fitment = readFitment(slug);
    if (!fitment) {
      for (const f of files) rejected.push({ brand: brandName, file: f, why: `无适配库 src/lib/fitment/${slug}.ts` });
      continue;
    }

    // 车型名按长度降序（最长匹配优先，避免「理想L6」被「理想L」抢）
    const models = Object.keys(fitment).sort((a, b) => b.length - a.length);
    const projectsByModel = fitment;
    // 源文件名常带品牌前缀（「乐道L60小桌板」「小鹏X9底盘护板」），而 fitment 里是裸车型名（L60 / X9）
    // → 依次剥离候选前缀（品牌全名、去「汽车/牌」、slug 的 ASCII 形）后再匹配
    const brandPrefixes = [
      brandName,
      brandName.replace(/汽车|牌$/g, ""),
      slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()),
      slug,
    ].filter((v, i, a) => v && a.indexOf(v) === i).sort((a, b) => b.length - a.length);

    const byKey = new Map();
    for (const file of files) {
      const base = basename(file, extname(file));

      // 剥品牌前缀（只剥一层，且必须剩非空）
      let stripped = base;
      for (const pre of brandPrefixes) {
        if (stripped.startsWith(pre) && stripped.slice(pre.length).length > 0) {
          stripped = stripped.slice(pre.length).replace(/^[-_ ]+/, "");
          break;
        }
      }

      // 模型名比对时忽略空格（源写 «ModelY»，fitment 写 «Model Y»）
      const squash = (s) => s.replace(/\s+/g, "");
      const baseSq = squash(base);
      const strippedSq = squash(stripped);

      // 兜底：文件名不带车型名时，用父目录名（`小米/小米SU7/成品图/中控台案件.webp` → SU7）
      // 父目录同样要先剥品牌前缀
      let dirSq = "";
      {
        const parts = file.split("/");
        const posterIdx = parts.lastIndexOf("成品图");
        const dirName = posterIdx > 0 ? parts[posterIdx - 1] : "";
        let d = dirName;
        for (const pre of brandPrefixes) {
          if (d.startsWith(pre) && d.slice(pre.length).length > 0) { d = d.slice(pre.length).replace(/^[-_ ]+/, ""); break; }
        }
        dirSq = squash(d);
      }

      const model = models.find((m) =>
        baseSq.startsWith(squash(m)) || strippedSq.startsWith(squash(m)) || (dirSq.length > 0 && dirSq === squash(m)),
      );
      if (!model) {
        rejected.push({ brand: brandName, file, why: "文件名不以任何已知车型名开头（多为纯数字名或聚合图）" });
        continue;
      }
      // 取「车型名之后」的剩余部分。
      // 用容忍空格的 pattern 在候选串里找车型名，切在匹配结束处（兼容源写 ModelY / 数据写 Model Y）。
      const modelPattern = new RegExp(squash(model).split("").map(escapeRe).join("\\s*"), "i");
      let raw = "";
      for (const candidate of [base, stripped].filter(Boolean)) {
        const hit = modelPattern.exec(candidate);
        if (hit) { raw = candidate.slice(hit.index + hit[0].length); break; }
      }
      // 兜底：文件名里没有车型名（走的是父目录）→ 剩余部分取整个文件名
      if (!raw && dirSq === squash(model)) raw = base;
      // 变体/装车后缀一律去掉：-装车01 / -装车去logo-2 / -2 / _3 / (1)
      const rest = raw
        .replace(/^[-_ ]+/, "")
        .replace(/[-_ ]*(装车|去logo|去LOGO)?[-_ ]*\d*$/g, "")
        .replace(/[（(]\d+[）)]$/, "")
        .trim();
      const project = (projectsByModel[model] ?? []).find((p) => rest === p || rest.startsWith(p) || p.startsWith(rest));
      if (!project) {
        rejected.push({ brand: brandName, file, why: `车型「${model}」后剩余「${rest || "(空)"}」不匹配该车型已知项目 [${(projectsByModel[model] ?? []).join("/")}]` });
        continue;
      }

      const key = `${slug}|${model}|${project}`;
      const prev = byKey.get(key);
      if (!prev || preferRank(file) < preferRank(prev)) byKey.set(key, file);
    }

    for (const [key, file] of byKey) {
      const [, model, project] = key.split("|");
      const out = `${slugifyModel(model)}-${slugifyProject(project)}`;
      accepted.push({ brand: brandName, slug, model, project, file, out });
    }
  }

  for (const r of rejected) reasons[r.why] = (reasons[r.why] ?? 0) + 1;

  console.log(`品牌数：${brands.length}（有成品图的）`);
  console.log(`✅ 可导入：${accepted.length} 张`);
  console.log(`❌ 拒收：${rejected.length} 张`);
  console.log(`\n拒收原因分布：`);
  for (const [why, n] of Object.entries(reasons).sort((a, b) => b[1] - a[1])) console.log(`   ${String(n).padStart(4)}  ${why}`);

  const byBrand = {};
  for (const a of accepted) byBrand[a.slug] = (byBrand[a.slug] ?? 0) + 1;
  console.log(`\n可导入分布（按品牌）：`);
  for (const [s, n] of Object.entries(byBrand).sort((a, b) => b[1] - a[1])) console.log(`   ${String(n).padStart(4)}  ${s}`);

  console.log(`\n样例（前 20）：`);
  for (const a of accepted.slice(0, 20)) console.log(`   ${a.out}.webp  ←  ${relative(SRC_ROOT, a.file)}`);

  if (!APPLY) {
    console.log(`\n[dry-run] 未写入。加 --apply 实跑。`);
    const report = { accepted, rejected, reasons };
    mkdirSync(join(PROJECT_ROOT, "runs"), { recursive: true });
    writeFileSync(join(PROJECT_ROOT, "runs", "brand-posters-auto.plan.json"), JSON.stringify(report, null, 2));
    console.log(`计划已写：runs/brand-posters-auto.plan.json`);
    return;
  }

  // ---- 实跑 ----
  let total = 0;
  const manifest = {};
  for (const a of accepted) {
    const outDir = join(PROJECT_ROOT, "public", "images", "products", a.slug, "fitment");
    mkdirSync(outDir, { recursive: true });
    const outPath = join(outDir, `${a.out}.webp`);
    execFileSync("cwebp", ["-quiet", "-q", String(QUALITY), "-resize", String(MAX_EDGE), "0", a.file, "-o", outPath], { stdio: "pipe" });
    const bytes = statSync(outPath).size;
    total += bytes;
    (manifest[a.slug] ??= []).push({ model: a.model, project: a.project, path: `/images/products/${a.slug}/fitment/${a.out}.webp`, source: relative(SRC_ROOT, a.file), bytes });
  }

  for (const [slug, arr] of Object.entries(manifest)) {
    const f = join(FIT_DIR, `${slug}-fitment-images.ts`);
    const lines = [
      `/**`,
      ` * ${slug} 适配产品图映射（自动生成，勿手改）`,
      ` *`,
      ` * 生成：\`node scripts/import-brand-posters-auto.mjs ${slug} --apply\``,
      // ⚠️ 注释里绝不能出现 `/**/` —— 它会提前结束块注释，后续文字变成代码（tsc 报 Cannot find name）
      ` * 源：\`供应商产品资料/_整理后/{品牌}/{车型}/成品图/\`（**带文字的信息图**）`,
      ` * 产物：\`public/images/products/${slug}/fitment/<slug>.webp\`（长边 ${MAX_EDGE}，webp q${QUALITY}）`,
      ` *`,
      ` * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，`,
      ` *    权威口径是 src/lib/fitment/${slug}.ts，页面渲染时须配免责声明。`,
      ` */`,
      ``,
      `export type BrandFitmentImage = {`,
      `  readonly model: string;`,
      `  readonly project: string;`,
      `  readonly path: string;`,
      `  readonly source: string;`,
      `};`,
      ``,
      `export const ${slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}FitmentImages: readonly BrandFitmentImage[] = [`,
    ];
    for (const a of arr.sort((x, y) => x.model.localeCompare(y.model, "zh") || x.project.localeCompare(y.project, "zh"))) {
      lines.push(`  { model: ${JSON.stringify(a.model)}, project: ${JSON.stringify(a.project)}, path: ${JSON.stringify(a.path)}, source: ${JSON.stringify(a.source)} },`);
    }
    lines.push(`];`, ``);
    // 品牌专属常量名，避免 22 个映射表同名导出被导入错文件
    const camel = slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    lines.push(`export const ${camel}FitmentImageCount = ${arr.length};`, "");
    writeFileSync(f, lines.join("\n"));
  }

  console.log(`\n✅ 入库 ${accepted.length} 张 ｜ ${(total / 1048576).toFixed(2)} MB`);
  console.log(`   映射表：${Object.keys(manifest).length} 个 src/lib/fitment/*-fitment-images.ts`);
}

main();
