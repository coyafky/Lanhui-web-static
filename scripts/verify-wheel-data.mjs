#!/usr/bin/env node

/**
 * verify-wheel-data.mjs
 *
 * 轮毂数据 + 图片地基的一致性门禁（接进 `npm run check`，见 AGENTS.md「topic-page pattern」第 5 条）。
 *
 * 只读生成物，**不读 U 盘**（静态导出不能在 CI 依赖 U 盘挂载），也**不解码图片**
 * （只读文件头取尺寸，避免给 `npm run check` 增加秒级开销）。校验项：
 *   1. 生成物 `src/lib/wheels.data.ts` 与报告 `scripts/wheel-data-report.json` 存在且非空
 *   2. 编号全局唯一，数量与报告一致（报告来自源数据实测）
 *   3. variant 行数、有图/缺图编号数与报告一致
 *   4. 数据模块里的图片路径集合 == 报告的图片清单；且**一个编号只有一张主图**（§9.3）
 *   5. 每个有图编号的卡片图 / 详情图在 public 下真实存在；缺图编号不得有图
 *   6. 产出画布尺寸 == 契约档位（详情 800×800 / 卡片 480×480，§9.3）；编码器是 `cwebp`
 *   7. 目录里不得残留多角度图 `<编号>-N.webp`（N ≥ 2，§9.3 已废弃）
 *   8. 数据模块中不存在内部字段名（进货/货位/供货商/来源表位置/来源行/附注）
 *   9. 报告里每条未解析条目都必须带 reason（不得静默丢弃）
 *  10. 报告最终图片总体积
 *
 * 用法：
 *   node scripts/verify-wheel-data.mjs
 */

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { readWebpSize } from "./lib/image-size.mjs";
import {
  WHEEL_IMAGE_PUBLIC_DIR,
  cardImagePath,
} from "./lib/wheel-sources.mjs";

const PROJECT_ROOT = join(import.meta.dirname, "..");
const DATA_MODULE_PATH = join(PROJECT_ROOT, "src", "lib", "wheels.data.ts");
const DATA_REPORT_PATH = join(PROJECT_ROOT, "scripts", "wheel-data-report.json");
const IMAGE_REPORT_PATH = join(PROJECT_ROOT, "scripts", "wheel-images-report.json");
const IMAGE_DIR = join(PROJECT_ROOT, "public", "images", "products", "wheel");

/** 仓库既有素材（`1-N.webp`，21 张），不属于本管线。 */
const LEGACY_FILE_RE = /^1-\d+\.webp$/;

/** 契约 §9.3 的产出档位。与 `import-wheel-images.mjs` 必须一致，不一致即契约漂移。 */
const DETAIL_SIZE = 800;
const CARD_SIZE = 480;

/** 必须不出现在公开数据里的源表内部字段名（拼接写法与仓库既有自检惯例一致）。 */
const FORBIDDEN_FIELD_NAMES = ["库" + "存", "库" + "位", "厂家", "源" + "Sheet", "原表行", "备注", "款式名称"];

const failures = [];
const warnings = [];

function fail(message) {
  failures.push(message);
}

function warn(message) {
  warnings.push(message);
}

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function formatMb(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
}

function uniqueSorted(values) {
  return [...new Set(values)].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
}

function main() {
  console.log("[wheels:verify] 校验轮毂数据 + 图片地基…\n");

  if (!existsSync(DATA_MODULE_PATH) || statSync(DATA_MODULE_PATH).size === 0) {
    fail(`生成物缺失或为空：src/lib/wheels.data.ts（先跑 npm run wheels:data）`);
    finishReport();
    return;
  }
  if (!existsSync(DATA_REPORT_PATH) || statSync(DATA_REPORT_PATH).size === 0) {
    fail(`数据报告缺失或为空：scripts/wheel-data-report.json（先跑 npm run wheels:data）`);
    finishReport();
    return;
  }

  const source = readFileSync(DATA_MODULE_PATH, "utf8");
  const report = readJson(DATA_REPORT_PATH);

  // 1. 编号与计数
  const modelIds = [...source.matchAll(/^ {4}modelId: "([^"]+)",$/gm)].map((match) => match[1]);
  const variantCount = (source.match(/^ {6}\{ diameterIn: /gm) ?? []).length;
  const imagePaths = [...source.matchAll(/^ {6}"(\/images\/products\/wheel\/[^"]+\.webp)",$/gm)].map(
    (match) => match[1],
  );

  if (modelIds.length === 0) fail("数据模块里解析不到任何 modelId");
  if (uniqueSorted(modelIds).length !== modelIds.length) {
    fail(`编号不唯一：${modelIds.length} 条记录里只有 ${uniqueSorted(modelIds).length} 个唯一编号`);
  }
  if (modelIds.length !== report.counts.models) {
    fail(`编号数与报告不一致：数据模块 ${modelIds.length} / 报告 ${report.counts.models}`);
  }
  if (variantCount !== report.counts.variants) {
    fail(`variant 行数与报告不一致：数据模块 ${variantCount} / 报告 ${report.counts.variants}`);
  }
  if (report.counts.modelsWithImages + report.counts.modelsMissingImages !== report.counts.models) {
    fail("报告里有图 + 缺图 != 编号总数");
  }
  if (report.counts.unresolvedTotal !== report.unresolved.length) {
    fail(`报告 unresolvedTotal ${report.counts.unresolvedTotal} != unresolved 条目数 ${report.unresolved.length}`);
  }
  // 契约 §9.3：一个编号只有一张主图，因此详情图数 == 有图编号数
  if (report.counts.detailImagePaths !== report.counts.modelsWithImages) {
    fail(
      `详情图数 ${report.counts.detailImagePaths} != 有图编号数 ${report.counts.modelsWithImages}` +
        "（契约 §9.3：一个编号只出一张主图）",
    );
  }

  // 2. 图片清单：数据模块 == 报告
  const expectedDetail = uniqueSorted(report.detailImagePaths ?? []);
  const actualDetail = uniqueSorted(imagePaths);
  if (expectedDetail.length !== actualDetail.length || expectedDetail.some((p, i) => p !== actualDetail[i])) {
    fail(
      `数据模块图片清单与报告不一致：数据模块 ${actualDetail.length} 条 / 报告 ${expectedDetail.length} 条`,
    );
  }

  // 3. 落盘图片：存在性 + 缺图编号不得有图
  const missingModelIds = new Set(report.missingImageModelIds ?? []);
  const expectedCards = [];
  let missingFiles = 0;
  for (const modelId of modelIds) {
    const cardPublic = cardImagePath(modelId);
    const cardAbs = join(PROJECT_ROOT, "public", cardPublic.replace(/^\//, ""));
    if (missingModelIds.has(modelId)) {
      if (existsSync(cardAbs)) fail(`缺图编号却存在卡片图：${publicPath(cardAbs)}`);
      continue;
    }
    expectedCards.push(cardPublic);
    if (!existsSync(cardAbs)) {
      missingFiles += 1;
      fail(`卡片图缺失：${publicPath(cardAbs)}`);
    }
  }
  let missingDetailFiles = 0;
  for (const publicPathValue of expectedDetail) {
    const abs = join(PROJECT_ROOT, "public", publicPathValue.replace(/^\//, ""));
    if (!existsSync(abs)) {
      missingDetailFiles += 1;
      fail(`详情图缺失：${publicPath(publicPathValue)}`);
    }
  }
  if (expectedCards.length !== report.counts.modelsWithImages) {
    fail(`卡片图数量 ${expectedCards.length} != 报告 modelsWithImages ${report.counts.modelsWithImages}`);
  }
  if (expectedDetail.length !== report.counts.detailImagePaths) {
    fail(`详情图数量 ${expectedDetail.length} != 报告 detailImagePaths ${report.counts.detailImagePaths}`);
  }

  // 4. 目录内不得有陈旧/多余的生成图，也不得有已废弃的多角度图
  let orphanCount = 0;
  let strayMetadata = 0;
  let angleLeftovers = 0;
  let imageTotalBytes = 0;
  if (existsSync(IMAGE_DIR)) {
    const expected = new Set([
      ...expectedDetail.map((p) => p.replace(`${WHEEL_IMAGE_PUBLIC_DIR}/`, "")),
      ...expectedCards.map((p) => p.replace(`${WHEEL_IMAGE_PUBLIC_DIR}/`, "")),
    ]);
    const knownIds = new Set(modelIds);
    for (const name of readdirSync(IMAGE_DIR)) {
      if (name.startsWith("._")) {
        strayMetadata += 1;
        continue;
      }
      if (LEGACY_FILE_RE.test(name)) continue;
      const abs = join(IMAGE_DIR, name);
      if (!statSync(abs).isFile()) continue;
      imageTotalBytes += statSync(abs).size;
      if (expected.has(name)) continue;
      orphanCount += 1;
      const angleMatch = name.match(/^(.+)-(\d+)\.webp$/);
      if (angleMatch && Number(angleMatch[2]) >= 2 && knownIds.has(angleMatch[1])) {
        angleLeftovers += 1;
        fail(`残留已废弃的多角度图：${name}（契约 §9.3 一个编号只出一张主图；npm run wheels:images 会清理）`);
        continue;
      }
      const idMatch = name.match(/^(.+?)(?:-card|-\d+)?\.webp$/);
      const modelId = idMatch ? idMatch[1] : null;
      if (modelId && knownIds.has(modelId)) {
        warn(`图片目录有数据里未登记的命名变体：${name}`);
      } else {
        fail(`图片目录有数据里不存在的陈旧生成图：${name}`);
      }
    }
  } else {
    fail(`图片目录不存在：public${WHEEL_IMAGE_PUBLIC_DIR}`);
  }
  if (strayMetadata > 0) {
    warn(`图片目录残留 exFAT 元数据文件 ._*：${strayMetadata} 个（npm run wheels:images 会清理）`);
  }

  // 5. 产出画布尺寸与编码器（契约 §9.3）—— 只读文件头，不解码
  let sizeMismatch = 0;
  let unreadableOutputs = 0;
  for (const publicPathValue of expectedDetail) {
    const size = readWebpSize(join(PROJECT_ROOT, "public", publicPathValue.replace(/^\//, "")));
    if (size === null) {
      unreadableOutputs += 1;
      fail(`详情图不是可识别的 WebP：${publicPath(publicPathValue)}`);
    } else if (size.width !== DETAIL_SIZE || size.height !== DETAIL_SIZE) {
      sizeMismatch += 1;
      fail(`详情图画布不是 ${DETAIL_SIZE}×${DETAIL_SIZE}：${publicPath(publicPathValue)} → ${size.width}×${size.height}`);
    }
  }
  for (const publicPathValue of expectedCards) {
    const size = readWebpSize(join(PROJECT_ROOT, "public", publicPathValue.replace(/^\//, "")));
    if (size === null) {
      unreadableOutputs += 1;
      fail(`卡片图不是可识别的 WebP：${publicPath(publicPathValue)}`);
    } else if (size.width !== CARD_SIZE || size.height !== CARD_SIZE) {
      sizeMismatch += 1;
      fail(`卡片图画布不是 ${CARD_SIZE}×${CARD_SIZE}：${publicPath(publicPathValue)} → ${size.width}×${size.height}`);
    }
  }
  if (existsSync(IMAGE_REPORT_PATH)) {
    const imageReport = readJson(IMAGE_REPORT_PATH);
    if (imageReport.encoder !== "cwebp") {
      fail(`图片报告 encoder 不是 cwebp：${String(imageReport.encoder)}`);
    }
    if (imageReport.tiers?.detail?.size !== DETAIL_SIZE || imageReport.tiers?.card?.size !== CARD_SIZE) {
      fail(
        `图片报告档位与契约 §9.3 不一致：详情 ${String(imageReport.tiers?.detail?.size)} /` +
          ` 卡片 ${String(imageReport.tiers?.card?.size)}`,
      );
    }
  }

  // 5. 内部字段不得进入公开数据
  for (const fieldName of FORBIDDEN_FIELD_NAMES) {
    if (source.includes(fieldName)) {
      fail(`数据模块出现内部字段名「${fieldName}」`);
    }
  }

  // 6. 未解析条目必须带 reason
  for (const entry of report.unresolved) {
    if (!entry.reason || typeof entry.reason !== "string" || entry.reason.trim() === "") {
      fail(`报告的未解析条目缺少 reason（疑似静默丢弃）：${JSON.stringify(entry)}`);
    }
  }

  // 汇总
  console.log(`  编号数（唯一）：${uniqueSorted(modelIds).length}`);
  console.log(`  variant 行数：${variantCount}`);
  console.log(
    `  有图编号：${report.counts.modelsWithImages}；缺图编号：${report.counts.modelsMissingImages}`,
  );
  console.log(
    `  详情主图：${expectedDetail.length} 张（${DETAIL_SIZE}×${DETAIL_SIZE}）；` +
      `卡片图：${expectedCards.length} 张（${CARD_SIZE}×${CARD_SIZE}）`,
  );
  console.log(`  未解析条目：${report.unresolved.length} 条（每条均带 reason）`);
  console.log(`  生成图片总体积：${formatMb(imageTotalBytes)}（不含既有 1-N.webp 素材）`);
  if (existsSync(IMAGE_REPORT_PATH)) {
    const imageReport = readJson(IMAGE_REPORT_PATH);
    console.log(
      `  图片报告：卡片 ${formatMb(imageReport.bytes.card)} + 详情 ${formatMb(imageReport.bytes.detail)}` +
        ` = ${formatMb(imageReport.bytes.generatedTotal)}；编码器 ${String(imageReport.encoder)}；` +
        `放大输出 ${imageReport.counts.upscaledOutputs} 个 / 非正方形被拉伸 ${imageReport.counts.stretchedOutputs ?? 0} 个`,
    );
  }
  if (missingFiles === 0 && missingDetailFiles === 0) {
    console.log("  落盘图片：全部存在");
  }
  console.log(
    `  画布尺寸不符：${sizeMismatch} 张；无法识别的 WebP：${unreadableOutputs} 张；` +
      `已废弃角度图残留：${angleLeftovers} 张`,
  );
  console.log(`  孤儿图片（数据里不存在的陈旧生成图）：${orphanCount}`);

  finishReport();
}

function publicPath(abs) {
  return abs.startsWith(PROJECT_ROOT) ? abs.slice(PROJECT_ROOT.length + 1) : abs;
}

function finishReport() {
  if (warnings.length > 0) {
    console.warn("\n⚠️  警告：");
    for (const message of warnings) console.warn(`  - ${message}`);
  }
  if (failures.length > 0) {
    console.error(`\n[wheels:verify] FAILED — ${failures.length} 项未通过：`);
    for (const message of failures) console.error(`  - ${message}`);
    process.exit(1);
  }
  console.log("\n[wheels:verify] OK — 数据模块与图片资产一致");
  process.exit(0);
}

main();
