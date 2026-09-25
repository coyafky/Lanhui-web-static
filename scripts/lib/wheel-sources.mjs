/**
 * wheel-sources.mjs — 轮毂源数据读取 + 清洗（共享模块，无副作用）
 *
 * 供 `scripts/build-wheel-data.mjs` 与 `scripts/import-wheel-images.mjs` 复用，
 * 保证「数据清单」与「图片清单」来自同一套解析规则。
 *
 * 契约：docs/plans/wheel-page-prototype-migration-2026-09-21.md §9.1 / §9.2 / §9.3
 *   - 源 A：旋压 旋压轮毂-轮毂家/json/旋压轮毂数据.json（单文件，`轮毂分组`）
 *   - 源 B：锻造 蓝辉轮毂家/<8 个车系目录>/json/*.json（每目录一份，同构 `轮毂分组`）
 *   - 逐条明细行 = 一条 variant；规格/PCD/偏距/中心孔/颜色 全部为公开字段
 *   - 内部字段（进货/货位/供货商/来源表位置）一律不进入结果对象
 *
 * 设计纪律：任何无法解析的值都**不静默丢弃** —— 写入 unresolved 列表，
 * 由调用方计数并落到 scripts/wheel-data-report.json。
 */

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

/** U 盘轮毂资料根目录（源 A / 源 B 的父目录，契约 §9.1）。 */
export const DEFAULT_WHEEL_DATA_ROOT =
  "/Volumes/usb/蓝辉轻改资料库/02-产品Product/轮毂";

/** 源 A 目录名（旋压）。 */
const SPIN_DIR_NAME = "旋压轮毂-轮毂家";
/** 源 A 数据文件名。 */
const SPIN_DATA_FILE = "旋压轮毂数据.json";
/** 源 B 目录名（锻造，内含 8 个车系目录）。 */
const FORGE_DIR_NAME = "蓝辉轮毂家";

/** 生成图片的 public 目录前缀。 */
export const WHEEL_IMAGE_PUBLIC_DIR = "/images/products/wheel";

/** exFAT 卷在 macOS 上随写随生的 AppleDouble 元数据前缀。 */
const APPLE_DOUBLE_PREFIX = "._";

/** 规格合理域（由源数据实测得出：直径 15–23、宽度 6–11.5）。 */
export const SPEC_DOMAIN = Object.freeze({
  DIAMETER_MIN: 15,
  DIAMETER_MAX: 24,
  WIDTH_MIN: 6,
  WIDTH_MAX: 12,
});

/**
 * 宽度「丢小数点」还原阈值：源表存在 `17*75` 这类写法（实为 17×7.5）。
 * 真实宽度域上限为 12，因此整数 ≥ 20 一律按 ÷10 还原（契约 §9.2 的 `15*70` = 15×7 同理）。
 */
const WIDTH_DECIMAL_SCALE_THRESHOLD = 20;

/** 解析 U 盘根目录，允许用环境变量覆盖（便于测试 / 换盘符）。 */
export function resolveWheelDataRoot() {
  const override = process.env.WHEEL_DATA_ROOT;
  return override && override.trim().length > 0 ? override : DEFAULT_WHEEL_DATA_ROOT;
}

export function sourceRoots() {
  const root = resolveWheelDataRoot();
  return {
    root,
    spinRoot: join(root, SPIN_DIR_NAME),
    forgeRoot: join(root, FORGE_DIR_NAME),
  };
}

/** 判断 U 盘两份源数据是否可读。 */
export function wheelSourcesAvailable() {
  const { spinRoot, forgeRoot } = sourceRoots();
  return existsSync(spinRoot) && existsSync(forgeRoot);
}

function isAppleDouble(name) {
  return name.startsWith(APPLE_DOUBLE_PREFIX);
}

/** 只读列出目录内的真实条目（跳过 exFAT 的 `._*` 元数据文件）。 */
export function listRealNames(dir) {
  return readdirSync(dir).filter((name) => !isAppleDouble(name));
}

function readJsonFile(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

// ─────────────────────────── 数值清洗 ───────────────────────────

/**
 * 统一数字写法的杂字符：千分位逗号 → 小数点；数字之间的空格 → 小数点。
 * 实测脏法：`4X114 3`、`73 1`。
 */
export function normalizeNumericToken(raw) {
  return String(raw ?? "")
    .trim()
    .replace(/[,，]/g, ".")
    .replace(/(\d)\s+(\d)/g, "$1.$2");
}

/** 解析普通数值（偏距 / 中心孔）。无法解析 → null。 */
export function parsePlainNumber(raw) {
  if (typeof raw === "number") return Number.isFinite(raw) ? raw : null;
  const text = normalizeNumericToken(raw);
  if (!/^-?\d+(?:\.\d+)?$/.test(text)) return null;
  const value = Number(text);
  return Number.isFinite(value) ? value : null;
}

/**
 * 解析 PCD 的孔距数值（mm）。
 * 实测脏法：`114 3`（空格代小数点）、`1143`（丢小数点，4 位且 ≥1000 → 前三 + `.` + 末位）。
 */
function parsePcdMm(raw) {
  const text = normalizeNumericToken(raw);
  const decimal = text.match(/^(\d+)\.(\d+)$/);
  if (decimal) return Number(text);
  const integer = text.match(/^(\d+)$/);
  if (!integer) return null;
  const digits = integer[1];
  if (digits.length === 4 && Number(digits) >= 1000) {
    return Number(`${digits.slice(0, 3)}.${digits.slice(3)}`);
  }
  if (digits.length === 4) return null;
  return Number(digits);
}

/**
 * 解析 PCD 原始串 → `[{ lugCount, pcdMm }]`。
 * 实测分隔符：`5*100` / `5X100` / `5x100` / `5×100`；
 * 双孔距：`5*100/114.3`（后半段继承前半段的孔数）；
 * 无法解析 → null。
 */
export function parsePcd(raw) {
  const text = String(raw ?? "").trim();
  if (!text) return null;
  const patterns = [];
  let inheritedLugCount = null;
  for (const segment of text.split("/")) {
    const part = segment.trim();
    if (!part) continue;
    const withLug = part.match(/^(\d{1,2})\s*[*xX×]\s*(\S.*)$/);
    let lugCount;
    let mmText;
    if (withLug) {
      lugCount = Number(withLug[1]);
      mmText = withLug[2];
      inheritedLugCount = lugCount;
    } else {
      lugCount = inheritedLugCount;
      mmText = part;
    }
    if (lugCount === null || !Number.isInteger(lugCount)) return null;
    const pcdMm = parsePcdMm(mmText);
    if (pcdMm === null) return null;
    patterns.push({ lugCount, pcdMm });
  }
  return patterns.length > 0 ? patterns : null;
}

/** 解析宽度片段，处理「丢小数点」写法。 */
function parseWidthToken(raw) {
  const text = normalizeNumericToken(raw);
  const match = text.match(/^(\d+)(?:\.(\d+))?$/);
  if (!match) return null;
  if (match[2] !== undefined) return Number(`${match[1]}.${match[2]}`);
  const value = Number(match[1]);
  return value >= WIDTH_DECIMAL_SCALE_THRESHOLD ? value / 10 : value;
}

/**
 * 从 `规格` 原文解析 `{ diameterIn, widthIn }`。
 * 支持 `16*7` / `17*7.5` / `17*75`(=7.5) / `forged70`(=7.0，直径未知)。
 */
export function parseSpecText(raw) {
  const text = String(raw ?? "").trim();
  if (!text) return null;
  const forged = text.match(/^forged\s*(\d+(?:\.\d+)?)$/i);
  if (forged) {
    const widthIn = parseWidthToken(forged[1]);
    return widthIn === null ? null : { diameterIn: null, widthIn };
  }
  const match = text.match(/^(\d+(?:\.\d+)?)\s*[*xX×]\s*(\d+(?:\.\d+)?)$/);
  if (!match) return null;
  const widthIn = parseWidthToken(match[2]);
  if (widthIn === null) return null;
  return { diameterIn: Number(match[1]), widthIn };
}

/** 规格是否落在实测合理域内（未知直径放过，宽度必须已知且在域内）。 */
export function isSpecInDomain(spec) {
  if (!spec || spec.widthIn === null) return false;
  const { diameterIn, widthIn } = spec;
  if (diameterIn !== null) {
    if (!Number.isFinite(diameterIn)) return false;
    if (diameterIn < SPEC_DOMAIN.DIAMETER_MIN || diameterIn > SPEC_DOMAIN.DIAMETER_MAX) {
      return false;
    }
  }
  if (widthIn < SPEC_DOMAIN.WIDTH_MIN || widthIn > SPEC_DOMAIN.WIDTH_MAX) return false;
  return true;
}

/** 读取源表的 `规格解析` 条目（旋压是对象，锻造是 JSON 字符串）。 */
function readSpecParsedEntry(entry) {
  let value = entry;
  if (typeof value === "string") {
    try {
      value = JSON.parse(value);
    } catch {
      return null;
    }
  }
  if (typeof value !== "object" || value === null) return null;
  const diameterIn = Number(value["英寸"]);
  const widthIn = Number(value["宽度"]);
  if (!Number.isFinite(diameterIn) || !Number.isFinite(widthIn)) return null;
  return { diameterIn, widthIn };
}

/**
 * 规格解析总入口。
 *
 * 契约 §9.2 说「以 `规格解析` 字段为准」，但实测该字段本身是脏的：
 * `17*75` 被上游解析成宽度 75（正确值 7.5），共 7 种写法受影响。
 * 因此这里收紧为「`规格解析` 落在合理域内才采信，否则回退解析 `规格` 原文」
 * —— 与契约同段给出的 `15*70` = 15×7 回退规则一致。
 */
export function resolveSpec(specText, specParsedEntry) {
  const declared = readSpecParsedEntry(specParsedEntry);
  const fallback = parseSpecText(specText);
  if (declared && isSpecInDomain(declared)) {
    const conflict = fallback && isSpecInDomain(fallback) && fallback.widthIn !== declared.widthIn;
    return { spec: declared, source: "declared", conflict };
  }
  if (fallback && isSpecInDomain(fallback)) {
    return { spec: fallback, source: "fallback", conflict: false };
  }
  return null;
}

/** 颜色去首尾非中英数字符（实测 `°钛空银`）。 */
export function cleanColor(raw) {
  const text = String(raw ?? "").trim();
  if (!text) return null;
  const cleaned = text.replace(/^[^\p{L}\p{N}]+/u, "").replace(/[^\p{L}\p{N}]+$/u, "");
  return cleaned.length > 0 ? cleaned : null;
}

// ─────────────────────────── 源数据装配 ───────────────────────────

function assertGroupShape(modelId, group) {
  if (!group || typeof group !== "object") {
    throw new Error(`轮毂分组 ${modelId} 不是对象`);
  }
  if (!Array.isArray(group["明细"])) {
    throw new Error(`轮毂分组 ${modelId} 缺少 明细 数组`);
  }
}

/** 把一组（一个编号）装配成公开字段模型。 */
function buildModel({ modelId, group, process, carSeries, sourceLabel, unresolved }) {
  assertGroupShape(modelId, group);

  const specTexts = Array.isArray(group["规格"]) ? group["规格"] : [];
  const specParsedList = Array.isArray(group["规格解析"]) ? group["规格解析"] : [];
  const declaredByText = new Map();
  for (let i = 0; i < specTexts.length; i += 1) {
    const text = specTexts[i];
    if (text === null || text === undefined) continue;
    if (!declaredByText.has(text)) declaredByText.set(text, specParsedList[i]);
  }

  const variants = [];
  const colors = [];
  let specDeclared = 0;
  let specFallback = 0;
  let specConflicts = 0;

  for (const row of group["明细"]) {
    if (!row || typeof row !== "object") {
      unresolved.push({
        kind: "detail-row-invalid",
        modelId,
        source: sourceLabel,
        field: "明细",
        raw: JSON.stringify(row),
        reason: "明细行不是对象",
      });
      continue;
    }

    const rawSpec = row["规格"];
    const resolved = resolveSpec(rawSpec, declaredByText.get(rawSpec));
    let diameterIn = null;
    let widthIn = null;
    if (resolved) {
      diameterIn = resolved.spec.diameterIn;
      widthIn = resolved.spec.widthIn;
      if (resolved.source === "declared") specDeclared += 1;
      else specFallback += 1;
      if (resolved.conflict) {
        specConflicts += 1;
        unresolved.push({
          kind: "spec-declared-conflict",
          modelId,
          source: sourceLabel,
          field: "规格",
          raw: String(rawSpec),
          reason: `规格解析 与 规格 原文不一致，已采信 规格解析（宽度 ${widthIn}）`,
        });
      }
    } else {
      unresolved.push({
        kind: "spec-unresolved",
        modelId,
        source: sourceLabel,
        field: "规格",
        raw: rawSpec === null || rawSpec === undefined ? null : String(rawSpec),
        reason:
          rawSpec === null || rawSpec === undefined || String(rawSpec).trim() === ""
            ? "源表 规格 为空"
            : "规格 与 规格解析 都无法得到合理域内的直径/宽度",
      });
    }

    const pcd = parsePcd(row["PCD"]);
    if (pcd === null) {
      unresolved.push({
        kind: "pcd-unresolved",
        modelId,
        source: sourceLabel,
        field: "PCD",
        raw: row["PCD"] === null || row["PCD"] === undefined ? null : String(row["PCD"]),
        reason: "PCD 无法解析为 { lugCount, pcdMm }",
      });
    }

    const offsetMm = parsePlainNumber(row["偏距"]);
    if (offsetMm === null) {
      unresolved.push({
        kind: "offset-unresolved",
        modelId,
        source: sourceLabel,
        field: "偏距",
        raw: row["偏距"] === null || row["偏距"] === undefined ? null : String(row["偏距"]),
        reason: "偏距 无法解析为数值",
      });
    }

    const centerBoreMm = parsePlainNumber(row["中心孔"]);
    if (centerBoreMm === null) {
      unresolved.push({
        kind: "center-bore-unresolved",
        modelId,
        source: sourceLabel,
        field: "中心孔",
        raw: row["中心孔"] === null || row["中心孔"] === undefined ? null : String(row["中心孔"]),
        reason: "中心孔 无法解析为数值",
      });
    }

    const color = cleanColor(row["颜色"]);
    if (color === null) {
      unresolved.push({
        kind: "color-unresolved",
        modelId,
        source: sourceLabel,
        field: "颜色",
        raw: row["颜色"] === null || row["颜色"] === undefined ? null : String(row["颜色"]),
        reason: "颜色 为空",
      });
    } else if (!colors.includes(color)) {
      colors.push(color);
    }

    variants.push({
      diameterIn,
      widthIn,
      pcd: pcd ?? [],
      offsetMm,
      centerBoreMm,
      color,
    });
  }

  return {
    model: {
      modelId,
      process,
      carSeries,
      variants,
      colors,
      images: [],
    },
    stats: { specDeclared, specFallback, specConflicts },
  };
}

/** 源 A（旋压）分组，按 JSON 文件内顺序。 */
function readSpinGroups() {
  const { spinRoot } = sourceRoots();
  const dataPath = join(spinRoot, "json", SPIN_DATA_FILE);
  if (!existsSync(dataPath)) {
    throw new Error(`源 A 数据文件不存在：${dataPath}`);
  }
  const payload = readJsonFile(dataPath);
  const groups = payload["轮毂分组"];
  if (!groups || typeof groups !== "object") {
    throw new Error(`源 A 数据缺少 轮毂分组：${dataPath}`);
  }
  return { dataPath, groups };
}

/** 源 B（锻造）8 个车系目录，目录名按码位排序保证输出确定性。 */
function readForgeGroups() {
  const { forgeRoot } = sourceRoots();
  const dirNames = readdirSync(forgeRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !isAppleDouble(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  const result = [];
  for (const dirName of dirNames) {
    const jsonDir = join(forgeRoot, dirName, "json");
    if (!existsSync(jsonDir)) continue;
    const fileNames = listRealNames(jsonDir)
      .filter((name) => name.endsWith(".json"))
      .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    for (const fileName of fileNames) {
      const dataPath = join(jsonDir, fileName);
      const payload = readJsonFile(dataPath);
      const groups = payload["轮毂分组"];
      if (!groups || typeof groups !== "object") {
        throw new Error(`源 B 数据缺少 轮毂分组：${dataPath}`);
      }
      result.push({ dirName, dataPath, groups });
    }
  }
  return result;
}

/**
 * 采集图片：返回 `Map<modelId, string[]>`（源文件名，主图在前）。
 * `_N` 后缀为多角度，按 N 升序；`_1` 不存在，主图无后缀。
 * 注意：**采集仍保留全部源图**（计数需要），但 `model.images` 只登记主图（§9.3）。
 */
function collectImageFiles() {
  const { spinRoot, forgeRoot } = sourceRoots();
  const byModel = new Map();
  const sourceFiles = [];

  function ingest(dir, scope) {
    if (!existsSync(dir)) return 0;
    let count = 0;
    const names = listRealNames(dir)
      .filter((name) => /\.png$/i.test(name))
      .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    for (const name of names) {
      const match = name.match(/^(.+?)(?:_(\d+))?\.png$/i);
      if (!match) continue;
      const modelId = match[1];
      const angleIndex = match[2] ? Number(match[2]) : 1;
      const list = byModel.get(modelId) ?? [];
      list.push({ name, angleIndex, absPath: join(dir, name), scope });
      byModel.set(modelId, list);
      sourceFiles.push({ name, absPath: join(dir, name), scope });
      count += 1;
    }
    return count;
  }

  const spinCount = ingest(join(spinRoot, "图片"), SPIN_DIR_NAME);
  let forgeCount = 0;
  const forgeDirNames = readdirSync(forgeRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !isAppleDouble(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  for (const dirName of forgeDirNames) {
    forgeCount += ingest(join(forgeRoot, dirName, "图片"), dirName);
  }

  for (const [modelId, list] of byModel) {
    list.sort((a, b) => a.angleIndex - b.angleIndex);
    byModel.set(modelId, list);
  }

  return { byModel, sourceFiles, spinCount, forgeCount };
}

/** 生成详情主图路径。契约 §9.3：**一个编号只出一张主图**，多角度图不产出。 */
export function mainImagePath(modelId) {
  return `${WHEEL_IMAGE_PUBLIC_DIR}/${modelId}.webp`;
}

/** 生成卡片图路径。 */
export function cardImagePath(modelId) {
  return `${WHEEL_IMAGE_PUBLIC_DIR}/${modelId}-card.webp`;
}

/**
 * 读取并清洗两份源数据。
 *
 * @returns {{
 *   models: object[],
 *   unresolved: object[],
 *   imagesByModel: Map<string, object[]>,
 *   sourceFiles: object[],
 *   counts: object,
 * }}
 */
export function readWheelDataset() {
  if (!wheelSourcesAvailable()) {
    const { root } = sourceRoots();
    throw new Error(
      `轮毂源数据不可读：${root}\n` +
        "请确认 U 盘已挂载（或用 WHEEL_DATA_ROOT 指向轮毂资料根目录）后重跑。",
    );
  }

  const unresolved = [];
  const models = [];
  const seen = new Map();
  let variantCount = 0;
  let specDeclaredTotal = 0;
  let specFallbackTotal = 0;
  let specConflictTotal = 0;

  const spin = readSpinGroups();
  const spinKeys = Object.keys(spin.groups);
  for (const modelId of spinKeys) {
    const group = spin.groups[modelId];
    const sheet = Array.isArray(group["明细"])
      ? group["明细"].map((row) => row?.["源Sheet"]).find((value) => typeof value === "string" && value)
      : undefined;
    const { model, stats } = buildModel({
      modelId,
      group,
      process: "旋压",
      carSeries: sheet ?? "未标注",
      sourceLabel: SPIN_DATA_FILE,
      unresolved,
    });
    specDeclaredTotal += stats.specDeclared;
    specFallbackTotal += stats.specFallback;
    specConflictTotal += stats.specConflicts;
    variantCount += model.variants.length;
    if (seen.has(modelId)) {
      unresolved.push({
        kind: "duplicate-model-id",
        modelId,
        source: SPIN_DATA_FILE,
        field: "编号",
        raw: modelId,
        reason: `编号重复（首次出现于 ${seen.get(modelId)}）`,
      });
      continue;
    }
    seen.set(modelId, SPIN_DATA_FILE);
    models.push(model);
  }

  const forge = readForgeGroups();
  for (const entry of forge) {
    for (const modelId of Object.keys(entry.groups)) {
      const group = entry.groups[modelId];
      const { model, stats } = buildModel({
        modelId,
        group,
        process: "锻造",
        carSeries: entry.dirName,
        sourceLabel: `${entry.dirName}/${entry.dataPath.split("/").pop()}`,
        unresolved,
      });
      specDeclaredTotal += stats.specDeclared;
      specFallbackTotal += stats.specFallback;
      specConflictTotal += stats.specConflicts;
      variantCount += model.variants.length;
      if (seen.has(modelId)) {
        unresolved.push({
          kind: "duplicate-model-id",
          modelId,
          source: `${entry.dirName}/${entry.dataPath.split("/").pop()}`,
          field: "编号",
          raw: modelId,
          reason: `编号重复（首次出现于 ${seen.get(modelId)}）`,
        });
        continue;
      }
      seen.set(modelId, `${entry.dirName}（锻造）`);
      models.push(model);
    }
  }

  const imageFiles = collectImageFiles();
  const missingImageModelIds = [];
  let imagesLinked = 0;

  for (const model of models) {
    const files = imageFiles.byModel.get(model.modelId);
    // 契约 §9.3 只产出主图（无 `_N` 后缀）。只有多角度图、没有主图的编号无法产出，
    // 与「缺图」一样处理并记入 unresolved（不静默丢弃）。
    const hasMainImage = files !== undefined && files.some((file) => file.angleIndex === 1);
    if (!hasMainImage) {
      missingImageModelIds.push(model.modelId);
      if (files !== undefined && files.length > 0) {
        unresolved.push({
          kind: "image-main-missing",
          modelId: model.modelId,
          source: "图片/",
          field: "编号",
          raw: files.map((file) => file.name).join(", "),
          reason: "只有多角度图（`_N`）、没有主图，契约 §9.3 无法产出",
        });
      }
      continue;
    }
    model.images = [mainImagePath(model.modelId)];
    imagesLinked += 1;
  }

  for (const modelId of imageFiles.byModel.keys()) {
    if (!seen.has(modelId)) {
      unresolved.push({
        kind: "image-without-model",
        modelId,
        source: "图片/",
        field: "编号",
        raw: modelId,
        reason: "图片文件名对应的编号在数据中不存在",
      });
    }
  }

  const byProcess = { 旋压: 0, 锻造: 0 };
  const byCarSeries = {};
  for (const model of models) {
    byProcess[model.process] = (byProcess[model.process] ?? 0) + 1;
    byCarSeries[model.carSeries] = (byCarSeries[model.carSeries] ?? 0) + 1;
  }

  return {
    models,
    unresolved,
    imagesByModel: imageFiles.byModel,
    sourceFiles: imageFiles.sourceFiles,
    counts: {
      models: models.length,
      variants: variantCount,
      modelsByProcess: byProcess,
      modelsByCarSeries: byCarSeries,
      imageSourceFiles: imageFiles.sourceFiles.length,
      imageSourceFilesBySource: {
        [SPIN_DIR_NAME]: imageFiles.spinCount,
        [FORGE_DIR_NAME]: imageFiles.forgeCount,
      },
      modelsWithImages: models.length - missingImageModelIds.length,
      modelsMissingImages: missingImageModelIds.length,
      missingImageModelIds: [...missingImageModelIds].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)),
      imagesLinked,
      imageSourceFilesLinked: imageFiles.sourceFiles.length,
      specFromDeclared: specDeclaredTotal,
      specFromFallback: specFallbackTotal,
      specDeclaredConflicts: specConflictTotal,
    },
  };
}
