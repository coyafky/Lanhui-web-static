#!/usr/bin/env node
/**
 * 品牌页适配产品图 → 规范 webp 入库
 *
 * 源：`供应商产品资料/_整理后/<品牌>/<车型>/成品图/webp/*.webp`
 * 目标：`public/images/products/<brand-slug>/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 这些源图是**带文字的信息图**（蓝辉 logo 横幅 + 「适配 XX」徽章 + 标题 + 口号 +
 * 车型/材质标注），文字是烤进像素里的，缩到小尺寸即不可读。因此：
 *   - 页面上必须按**可读尺寸**呈现，不得当小缩略图；
 *   - 图上文字可能与适配数据**不一致**（实测：蓝山图写「镁铝合金」，数据是
 *     「锰钢1.2mm；铝镁合金2.0mm」；高山踏板图写「23-25款」，数据是「2023+」），
 *     页面必须配免责声明，且**只把图上说法当作图示，不当权威**。
 *
 * 映射是硬编码确定性字典（brandslug + 车型 + 项目 → 源文件），不做模糊匹配；
 * 有任何对不上就拒绝写入。
 *
 * 用法：
 *   node scripts/import-brand-fitment-posters.mjs            # dry-run
 *   node scripts/import-brand-fitment-posters.mjs --apply    # 实跑
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { basename, dirname, extname, join, relative, resolve } from "node:path";

const PROJECT_ROOT = resolve(import.meta.dirname, "..");
const SRC_ROOT = join(PROJECT_ROOT, "供应商产品资料", "_整理后");
const MAX_EDGE = 720;
const QUALITY = 82;

/**
 * 每张图：源相对路径 → 归属（品牌 slug / 车系名 / 项目名 / 输出 slug / 别名）
 * 车系名与项目名必须与 src/lib/fitment/<brand>.ts 的 model 与 project name 逐字一致。
 */
const ENTRIES = [
  // ─── 魏牌（源：魏牌/<车型>/成品图/webp/）───
  {
    src: "魏牌/魏牌蓝山/成品图/webp/魏牌蓝山底盘护板.webp",
    brand: "wey", model: "蓝山", project: "底盘护板", out: "lanshan-skid-plate",
    label: "蓝山 底盘护板",
  },
  {
    src: "魏牌/魏牌高山/成品图/webp/魏牌高山底盘护板.webp",
    brand: "wey", model: "高山", project: "底盘护板", out: "gaoshan-skid-plate",
    label: "高山 底盘护板",
  },
  {
    src: "魏牌/魏牌摩卡/成品图/webp/魏牌摩卡底盘护板.webp",
    brand: "wey", model: "摩卡", project: "底盘护板", out: "mocha-skid-plate",
    label: "摩卡 底盘护板",
  },
  {
    src: "魏牌/魏牌V9X/成品图/webp/魏牌V9X底盘护板.webp",
    brand: "wey", model: "V9X", project: "底盘护板", out: "v9x-skid-plate",
    label: "V9X 底盘护板",
  },
  {
    src: "魏牌/魏牌VV5/成品图/webp/魏牌VV5底盘护板.webp",
    brand: "wey", model: "VV5", project: "底盘护板", out: "vv5-skid-plate",
    label: "VV5 底盘护板",
  },
  // ─── 别克（源：别克/webp/）───
  {
    src: "别克/webp/小桌板-别克至境.webp",
    brand: "buick", model: "至境E7", project: "小桌板", out: "zhijing-e7-tray-table",
    label: "至境E7 小桌板",
  },
];

/**
 * 刻意**不导入**的源图（拒绝理由留档，避免以后被当成"漏了"）：
 * - 小桌板-GL8路尚.webp：图上写「别克GL8陆尚小桌板」，但 buick.ts 里
 *   `25款别克GL8 陆尊/陆尚` 只收录「吸顶电视」，全库「小桌板」仅挂 `至境E7`
 *   → 嵌入会与适配矩阵矛盾，作为数据缺口回报，不落盘。
 * - 魏牌蓝山.jpg / 魏牌高山.jpeg / 魏牌摩卡.jpg / 魏牌V9X.jpg：
 *   聚合宣传拼版（非单项目产品图），无对应项目，不嵌。
 * - 魏牌高山腿托-装车*.jpeg / 去logo-*.jpeg：装车实拍，但「腿托」不在
 *   wey.ts 的项目列表里，无归属，不嵌。
 * - 原厂车型图-未归属/*：按用户 2026-10-24 明确指示不入库。
 */
const SKIPPED = [
  "别克/webp/小桌板-GL8路尚.webp",
];

/**
 * 源图存在、但**适配数据里没有对应项目** → 不导入（否则与适配矩阵自相矛盾）。
 * 这 4 张是本轮实测挖出的**数据缺口**，等数据补齐后把它们加回 ENTRIES 即可。
 */
const BLOCKED_BY_DATA = [
  { src: "魏牌/魏牌高山/成品图/webp/魏派高山电动踏板-单灯款.webp", need: "高山 × 电动踏板", why: "wey.ts 的「高山」只收录 底盘护板/360软包脚垫/平面尾箱垫，无电动踏板" },
  { src: "魏牌/魏牌高山/成品图/webp/魏派高山电动踏板-无灯款.webp", need: "高山 × 电动踏板", why: "同上" },
  { src: "魏牌/魏牌蓝山/成品图/webp/魏牌蓝山小桌板.webp", need: "蓝山 × 小桌板", why: "wey.ts 的「蓝山」收录到 电动踏板，但无小桌板" },
  { src: "别克/webp/小桌板-GL8路尚.webp", need: "GL8 陆尊/陆尚 × 小桌板", why: "buick.ts 的「25款别克GL8 陆尊/陆尚」只收录吸顶电视；全库小桌板仅挂「至境E7」" },
];

/** 校验：车系 + 项目是否真在 fitment 数据里 */
function readFitmentPairs(brand) {
  const src = join(PROJECT_ROOT, "src", "lib", "fitment", `${brand}.ts`);
  const text = execFileSync(process.execPath, [
    "-e",
    `const fs=require("fs");
     const t=fs.readFileSync(${JSON.stringify(src)},"utf8");
     const parts=t.split(/model:\\s*"([^"]+)",/);
     const pairs=[];
     for(let i=1;i<parts.length;i+=2){
       const seg=parts[i+1]||"";
       const re=/name:\\s*"([^"]+)",\\s*\\n?\\s*specs:/g; let m;
       while((m=re.exec(seg))) pairs.push(parts[i]+"||"+m[1]);
     }
     process.stdout.write(JSON.stringify(pairs));`,
  ]).toString();
  return new Set(JSON.parse(text));
}

function main() {
  const APPLY = process.argv.includes("--apply");

  const pairsByBrand = { wey: readFitmentPairs("wey"), buick: readFitmentPairs("buick") };

  const problems = [];
  const rows = [];
  for (const e of ENTRIES) {
    const srcPath = join(SRC_ROOT, e.src);
    if (!existsSync(srcPath)) problems.push(`源文件不存在：${e.src}`);
    const key = `${e.model}||${e.project}`;
    if (!pairsByBrand[e.brand]?.has(key)) problems.push(`${e.brand}: 数据里没有「${e.model} × ${e.project}」→ ${e.src}`);
    rows.push({ ...e, srcPath });
  }

  const dupOut = rows.map((r) => `${r.brand}/${r.out}`).filter((v, i, a) => a.indexOf(v) !== i);
  if (dupOut.length) problems.push(`输出 slug 重复：${[...new Set(dupOut)].join(", ")}`);

  console.log(`待导入：${rows.length} 张（魏牌 ${rows.filter((r) => r.brand === "wey").length} ｜ 别克 ${rows.filter((r) => r.brand === "buick").length}）`);
  console.log(`刻意跳过：${SKIPPED.length} 张（理由见脚本 SKIPPED 注释）`);
  console.log(`数据缺口阻塞：${BLOCKED_BY_DATA.length} 张（源图在、适配数据无对应项目）：`);
  for (const b of BLOCKED_BY_DATA) console.log(`   · ${b.need} —— ${b.why}`);
  if (problems.length) {
    console.error(`\n✖ 校验不通过，拒绝写入：`);
    for (const p of problems) console.error(`   ${p}`);
    process.exit(1);
  }

  if (!APPLY) {
    console.log(`\n[dry-run] 未写入。加 --apply 实跑。`);
    for (const r of rows) console.log(`   ${r.brand}/${r.out}.webp  ←  ${r.src}`);
    return;
  }

  let total = 0;
  const manifest = { wey: [], buick: [] };
  for (const r of rows) {
    const outDir = join(PROJECT_ROOT, "public", "images", "products", r.brand, "fitment");
    mkdirSync(outDir, { recursive: true });
    const outPath = join(outDir, `${r.out}.webp`);
    execFileSync("cwebp", ["-quiet", "-q", String(QUALITY), "-resize", String(MAX_EDGE), "0", r.srcPath, "-o", outPath], { stdio: "pipe" });
    const bytes = statSync(outPath).size;
    total += bytes;
    manifest[r.brand].push({
      model: r.model,
      project: r.project,
      label: r.label,
      path: `/images/products/${r.brand}/fitment/${r.out}.webp`,
      source: r.src,
      bytes,
    });
  }

  // 生成映射表
  const writeTs = (brand, arr, title) => {
    const f = join(PROJECT_ROOT, "src", "lib", `fitment`, `${brand}-fitment-images.ts`);
    const lines = [
      "/**",
      ` * ${title} 适配产品图映射（自动生成，勿手改）`,
      " *",
      " * 生成：`node scripts/import-brand-fitment-posters.mjs --apply`",
      " * 源：`供应商产品资料/_整理后/<品牌>/<车型>/成品图/webp/`（**带文字的信息图**）",
      " * 产物：`public/images/products/<brand>/fitment/<slug>.webp`（长边 720，webp q82）",
      " *",
      " * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，",
      " *    权威口径是 src/lib/fitment/<brand>.ts，页面渲染时须配免责声明。",
      " */",
      "",
      `export type BrandFitmentImage = {`,
      `  readonly model: string;`,
      `  readonly project: string;`,
      `  readonly label: string;`,
      `  readonly path: string;`,
      `  readonly source: string;`,
      `};`,
      "",
      `export const ${brand}FitmentImages: readonly BrandFitmentImage[] = [`,
    ];
    for (const a of arr) {
      lines.push(`  {`);
      lines.push(`    model: ${JSON.stringify(a.model)},`);
      lines.push(`    project: ${JSON.stringify(a.project)},`);
      lines.push(`    label: ${JSON.stringify(a.label)},`);
      lines.push(`    path: ${JSON.stringify(a.path)},`);
      lines.push(`    source: ${JSON.stringify(a.source)},`);
      lines.push(`  },`);
    }
    lines.push("];", "");
    lines.push(`/** 该品牌可渲染的产品图张数（用于页面统计，避免手写数字） */`);
    lines.push(`export const ${brand.toUpperCase()}_FITMENT_IMAGE_COUNT = ${arr.length};`);
    lines.push("");
    writeFileSync(f, lines.join("\n"));
    return f;
  };

  const f1 = writeTs("wey", manifest.wey, "魏牌");
  const f2 = writeTs("buick", manifest.buick, "别克");

  console.log(`\n✅ 入库 ${rows.length} 张 ｜ ${(total / 1048576).toFixed(2)} MB ｜ 平均 ${Math.round(total / rows.length / 1024)} KB`);
  console.log(`   映射表：${relative(PROJECT_ROOT, f1)}`);
  console.log(`   映射表：${relative(PROJECT_ROOT, f2)}`);
}

main();
