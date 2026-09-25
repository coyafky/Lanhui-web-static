#!/usr/bin/env node

/**
 * build-wheel-data.mjs
 *
 * 读取 U 盘两份轮毂源数据（旋压 + 锻造 8 个车系目录），按契约 §9.1 / §9.2 清洗，
 * 生成**类型化数据模块** `src/lib/wheels.data.ts`（生成物，必须进 git —— 站点是
 * `output: "export"` 静态导出，构建期不能读 U 盘）。
 *
 * 同时产出 `scripts/wheel-data-report.json`：计数 + 无法解析的条目
 * （任何无法解析的行都不静默丢弃）。
 *
 * 用法：
 *   node scripts/build-wheel-data.mjs
 *   WHEEL_DATA_ROOT=/path/to/轮毂 node scripts/build-wheel-data.mjs
 *
 * 退出码：0 = 生成成功；1 = U 盘不可读 / 源数据结构不符（**不伪造、不用占位数据顶替**）。
 */

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  WHEEL_IMAGE_PUBLIC_DIR,
  readWheelDataset,
  resolveWheelDataRoot,
  wheelSourcesAvailable,
} from "./lib/wheel-sources.mjs";

const ROOT_DIR = join(dirname(fileURLToPath(import.meta.url)), "..");
const DATA_MODULE_PATH = join(ROOT_DIR, "src", "lib", "wheels.data.ts");
const REPORT_PATH = join(ROOT_DIR, "scripts", "wheel-data-report.json");

function renderNumber(value) {
  return value === null || value === undefined ? "null" : String(value);
}

function renderString(value) {
  return value === null || value === undefined ? "null" : JSON.stringify(value);
}

function renderPcd(patterns) {
  if (patterns.length === 0) return "[]";
  return `[${patterns
    .map((pattern) => `{ lugCount: ${pattern.lugCount}, pcdMm: ${pattern.pcdMm} }`)
    .join(", ")}]`;
}

function renderModel(model) {
  const lines = [];
  lines.push("  {");
  lines.push(`    modelId: ${renderString(model.modelId)},`);
  lines.push(`    process: ${renderString(model.process)},`);
  lines.push(`    carSeries: ${renderString(model.carSeries)},`);
  if (model.colors.length === 0) {
    lines.push("    colors: [],");
  } else {
    lines.push("    colors: [");
    for (const color of model.colors) lines.push(`      ${renderString(color)},`);
    lines.push("    ],");
  }
  if (model.images.length === 0) {
    lines.push("    images: [],");
  } else {
    lines.push("    images: [");
    for (const image of model.images) lines.push(`      ${renderString(image)},`);
    lines.push("    ],");
  }
  lines.push("    variants: [");
  for (const variant of model.variants) {
    lines.push(
      "      { " +
        `diameterIn: ${renderNumber(variant.diameterIn)}, ` +
        `widthIn: ${renderNumber(variant.widthIn)}, ` +
        `pcd: ${renderPcd(variant.pcd)}, ` +
        `offsetMm: ${renderNumber(variant.offsetMm)}, ` +
        `centerBoreMm: ${renderNumber(variant.centerBoreMm)}, ` +
        `color: ${renderString(variant.color)} },`,
    );
  }
  lines.push("    ],");
  lines.push("  },");
  return lines.join("\n");
}

function buildDataModule(models, generatedAt) {
  const header = `/**
 * 轮毂数据模块 —— **生成物，请勿手改**。
 *
 * 由 \`scripts/build-wheel-data.mjs\` 从 U 盘两份供应商源数据（旋压 / 锻造）清洗生成。
 * 站点是 \`output: "export"\` 静态导出，构建期不能读 U 盘，因此本文件必须进 git。
 * 重新生成：\`npm run wheels:data\`；一致性校验：\`npm run wheels:verify\`。
 *
 * 只保留契约 §9.1 的公开字段；源表中的内部字段（进货/货位/供货商/来源表位置等）
 * 已在生成阶段剥离，逐项计数见 \`scripts/wheel-data-report.json\`。
 *
 * 生成时间：${generatedAt}
 * 编号数：${models.length}
 */

/** 工艺。 */
export type WheelProcess = "旋压" | "锻造";

/** 单条孔距：孔数 + 孔距（mm）。双孔距车型会给出两条。 */
export type WheelPcd = {
  lugCount: number;
  pcdMm: number;
};

/** 一条规格明细行 = 一条 variant。未知一律 \`null\`，绝不用 0 表示未知。 */
export type WheelVariant = {
  /** 直径（英寸） */
  diameterIn: number | null;
  /** 宽度（英寸，J 值） */
  widthIn: number | null;
  /** 孔距；源表无法解析时为 \`[]\` 且已记入报告 */
  pcd: readonly WheelPcd[];
  /** 偏距 ET（mm） */
  offsetMm: number | null;
  /** 中心孔 CB（mm） */
  centerBoreMm: number | null;
  /** 颜色（已去首尾杂字符） */
  color: string | null;
};

/** 一个轮毂编号（路由 key / 图片名的唯一主键）。 */
export type WheelModel = {
  modelId: string;
  process: WheelProcess;
  /** 车系标签（源表原文：旋压取源 Sheet，锻造取车系目录名） */
  carSeries: string;
  variants: readonly WheelVariant[];
  /** 该编号下所有 variant 的颜色去重（保持首次出现顺序） */
  colors: readonly string[];
  /** 详情图廊；无源图时为 \`[]\`（页面用中性占位块，禁止用别款图顶替） */
  images: readonly string[];
};

/** 轮毂图片 public 目录前缀。 */
export const WHEEL_IMAGE_DIR = ${renderString(WHEEL_IMAGE_PUBLIC_DIR)};

/** 全量轮毂编号（旋压 + 锻造）。 */
export const wheelModels: readonly WheelModel[] = [
`;

  const footer = `];

const wheelModelsById: ReadonlyMap<string, WheelModel> = new Map(
  wheelModels.map((model) => [model.modelId, model]),
);

/** 按编号取单个轮毂；不存在返回 \`undefined\`。 */
export function getWheelModel(modelId: string): WheelModel | undefined {
  return wheelModelsById.get(modelId);
}

/** 卡片图（480×480）公开路径。与 \`images\` 里的详情图廊分开命名。 */
export function wheelCardImagePath(modelId: string): string {
  return \`\${WHEEL_IMAGE_DIR}/\${modelId}-card.webp\`;
}
`;

  const body = models.map(renderModel).join("\n");
  return `${header}${body}\n${footer}`;
}

function summarizeUnresolved(unresolved) {
  const byKind = {};
  for (const entry of unresolved) {
    byKind[entry.kind] = (byKind[entry.kind] ?? 0) + 1;
  }
  return byKind;
}

function main() {
  const root = resolveWheelDataRoot();
  console.log("[wheels:data] 读取源数据根目录：", root);
  if (!wheelSourcesAvailable()) {
    console.error(
      `[wheels:data] FAILED — U 盘源数据不可读：${root}\n` +
        "  期望存在：旋压轮毂-轮毂家/ 与 蓝辉轮毂家/\n" +
        "  挂载 U 盘后重跑，或用 WHEEL_DATA_ROOT 指向轮毂资料根目录。\n" +
        "  未做任何写入：不会伪造数据，也不会用占位数据顶替。",
    );
    process.exit(1);
  }

  const dataset = readWheelDataset();
  const { models, unresolved, counts } = dataset;

  if (models.length === 0) {
    console.error("[wheels:data] FAILED — 清洗结果为空，停止生成（不以空数据顶替源数据）。");
    process.exit(1);
  }

  const duplicateIds = unresolved.filter((entry) => entry.kind === "duplicate-model-id");
  if (duplicateIds.length > 0) {
    console.error(
      `[wheels:data] FAILED — 编号重复 ${duplicateIds.length} 条，主键不唯一，先修源数据：`,
    );
    for (const entry of duplicateIds.slice(0, 20)) {
      console.error(`  - ${entry.modelId} (${entry.reason})`);
    }
    process.exit(1);
  }

  const generatedAt = new Date().toISOString();
  const dataModule = buildDataModule(models, generatedAt);
  writeFileSync(DATA_MODULE_PATH, dataModule, "utf8");

  const detailImagePaths = models.flatMap((model) => [...model.images]);
  const report = {
    generatedAt,
    sourceRoot: root,
    counts: {
      ...counts,
      detailImagePaths: detailImagePaths.length,
      cardImagePaths: counts.modelsWithImages,
      unresolvedTotal: unresolved.length,
      unresolvedByKind: summarizeUnresolved(unresolved),
    },
    unresolved,
    missingImageModelIds: counts.missingImageModelIds,
    detailImagePaths,
  };
  writeFileSync(REPORT_PATH, `${JSON.stringify(report, null, 2)}\n`, "utf8");

  const unresolvedPreview = unresolved.slice(0, 30);
  console.log(`[wheels:data] 编号数（全局唯一）：${counts.models}`);
  console.log(
    `[wheels:data] 明细行数（= variant 数）：${counts.variants}` +
      `（旋压 ${counts.modelsByProcess["旋压"]} 编号 / 锻造 ${counts.modelsByProcess["锻造"]} 编号）`,
  );
  console.log(`[wheels:data] 有图编号：${counts.modelsWithImages}；缺图编号：${counts.modelsMissingImages}`);
  console.log(
    `[wheels:data] 源图文件：${counts.imageSourceFiles}` +
      `（旋压 ${counts.imageSourceFilesBySource["旋压轮毂-轮毂家"]} / 锻造 ${counts.imageSourceFilesBySource["蓝辉轮毂家"]}）`,
  );
  console.log(
    `[wheels:data] 规格来源：规格解析 ${counts.specFromDeclared} 行 / 回退解析 ${counts.specFromFallback} 行` +
      `；规格解析被拒 ${Math.max(0, counts.specFromFallback)} 行，冲突 ${counts.specDeclaredConflicts} 行`,
  );
  console.log(`[wheels:data] 未解析/异常条目：${unresolved.length} 条 ${JSON.stringify(report.counts.unresolvedByKind)}`);
  for (const entry of unresolvedPreview) {
    console.log(`  · ${entry.kind} ${entry.modelId} ${entry.field}=${JSON.stringify(entry.raw)} — ${entry.reason}`);
  }
  if (unresolved.length > unresolvedPreview.length) {
    console.log(`  · …另有 ${unresolved.length - unresolvedPreview.length} 条，见 ${REPORT_PATH}`);
  }
  console.log(`[wheels:data] 写入：${DATA_MODULE_PATH}（${(dataModule.length / 1024).toFixed(0)}KB）`);
  console.log(`[wheels:data] 写入：${REPORT_PATH}`);
  console.log(`[wheels:data] 卡片图待生成：${counts.modelsWithImages} 张；详情图待生成：${detailImagePaths.length} 张`);
  console.log("[wheels:data] OK");
}

main();
