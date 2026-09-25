#!/usr/bin/env node

/**
 * import-wheel-images.mjs
 *
 * 图片管线（契约 §9.3）：把 U 盘两份轮毂源图（旋压 + 锻造）转成两档 WebP，输出到
 * `public/images/products/wheel/`：
 *   - 详情主图 800×800 q86 → `<编号>.webp`
 *   - 卡片图   480×480 q80 → `<编号>-card.webp`
 *
 * **编码器是 `cwebp` 命令行**（不再用 `sharp`）：
 *   `cwebp -q <q> -m 6 -pass 10 -metadata none -sharp_yuv -resize <S> <S> <in.png> -o <out.webp>`
 * `sharp` 仍是仓库既有依赖（7 月博客管线在用），因此**不从 package.json 移除**。
 *
 * **一个编号只出一张主图**：源图里的 `_2` / `_3` 多角度图**不产出**；已产出的
 * `<编号>-N.webp` 角度图会被本脚本清理（只清理真实编号的产物，不动既有 21 张
 * 无编号素材 `1-N.webp`）。
 *
 * 源图实测（不照抄契约里的「统一 1280×1280」）：513 个文件里 173 个实际是 JPEG
 * 内容（扩展名仍是 `.png`）、378 张主图里 267 张非正方形（长宽比 0.476–1.500）。
 * 因此这里：
 *   - 一律按**内容**解码（`cwebp` 按 magic bytes 识别，不信任扩展名）；
 *   - 按契约给的 `-resize S S` 编码，**长宽比不保**：非正方形源图会被拉伸到正方形，
 *     全部计入报告的 `stretched` 字段（不掩盖，见汇报的「契约外问题」）；
 *   - 短边小于目标画布的源图会被放大，计入 `upscaled`。
 *
 * 收尾清除 exFAT（macOS）随写随生的 `._*` AppleDouble 元数据文件。
 *
 * 用法：
 *   node scripts/import-wheel-images.mjs            # 增量（跳过尺寸/新鲜度都达标的产物）
 *   node scripts/import-wheel-images.mjs --force    # 全量重转
 *   node scripts/import-wheel-images.mjs --prune    # 额外删除数据里不存在的 wheel 图
 *
 * 管线配方（尺寸/质量/编码器）变化时会自动全量重转 —— 增量判断不能只看 mtime，
 * 否则换编码器/换画布后会一直留下旧的产物。
 */

import { execFile } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { readImageSize, readWebpSize } from "./lib/image-size.mjs";
import {
  cardImagePath,
  mainImagePath,
  readWheelDataset,
  resolveWheelDataRoot,
  sourceRoots,
  wheelSourcesAvailable,
} from "./lib/wheel-sources.mjs";

const run = promisify(execFile);

const ROOT_DIR = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT_DIR = join(ROOT_DIR, "public", "images", "products", "wheel");
const REPORT_PATH = join(ROOT_DIR, "scripts", "wheel-images-report.json");

const CWEBP_BIN = process.env.CWEBP_BIN?.trim() || "cwebp";
/** 契约 §9.3 给定的编码参数（`-resize` 由档位补上）。 */
const CWEBP_COMMON_ARGS = ["-m", "6", "-pass", "10", "-metadata", "none", "-sharp_yuv"];

const DETAIL_SIZE = 800;
const DETAIL_QUALITY = 86;
const CARD_SIZE = 480;
const CARD_QUALITY = 80;
const CONCURRENCY = 6;

/**
 * POSIX `st_blocks` 的单位恒为 512 字节。**不要**用 `stats.blocksize`：
 * 在 macOS 的 Node 上它是 `undefined`（实测 Node 24），会让算出来的已分配字节恒为 NaN。
 */
const STAT_BLOCK_BYTES = 512;

/** 管线配方指纹：与上一次报告不同 → 全量重转（避免换编码器/换画布后残留旧产物）。 */
const RECIPE = [
  `encoder=${CWEBP_BIN}`,
  `flags=${CWEBP_COMMON_ARGS.join(" ")}`,
  `detail=${DETAIL_SIZE}x${DETAIL_SIZE}@q${DETAIL_QUALITY}`,
  `card=${CARD_SIZE}x${CARD_SIZE}@q${CARD_QUALITY}`,
  "scope=one-main-image-per-model",
].join(" | ");

/** 与页面无关的既有素材（`1-N.webp`，21 张），永不纳入本管线、也永不删除。 */
const LEGACY_FILE_RE = /^1-\d+\.webp$/;
/** 产物里的多角度图命名：`<编号>-2.webp` / `-3.webp` …（契约 §9.3 已废弃）。 */
const ANGLE_FILE_RE = /^(.+)-(\d+)\.webp$/;

const argv = new Set(process.argv.slice(2));
const FORCE = argv.has("--force");
const PRUNE = argv.has("--prune");

function publicPathToDisk(publicPath) {
  return join(ROOT_DIR, "public", publicPath.replace(/^\//, ""));
}

function formatMb(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
}

/** 目录内所有 `._*` AppleDouble 文件（递归）。 */
function findAppleDoubleFiles(dir) {
  const found = [];
  if (!existsSync(dir)) return found;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...findAppleDoubleFiles(full));
    } else if (entry.name.startsWith("._")) {
      found.push(full);
    }
  }
  return found;
}

function cleanAppleDoubleFiles(dirs) {
  const files = dirs.flatMap((dir) => findAppleDoubleFiles(dir));
  let bytes = 0;
  let removed = 0;
  for (const file of files) {
    try {
      bytes += statSync(file).size;
      rmSync(file);
      removed += 1;
    } catch {
      // 已被系统回收 / 权限不足：忽略，不中断管线
    }
  }
  return { removed, bytes };
}

/**
 * 清理已废弃的角度图：`<编号>-N.webp`（N ≥ 2）且 `<编号>` 是真实编号。
 * 既有素材 `1-N.webp` 的 `<编号>` 是 `1`、不是任何真实编号，因此不会被命中。
 */
function pruneAngleFiles(knownModelIds) {
  const removed = [];
  let bytes = 0;
  if (!existsSync(OUTPUT_DIR)) return { removed, bytes };
  for (const name of readdirSync(OUTPUT_DIR)) {
    if (name.startsWith("._") || LEGACY_FILE_RE.test(name)) continue;
    const match = name.match(ANGLE_FILE_RE);
    if (!match) continue;
    if (Number(match[2]) < 2 || !knownModelIds.has(match[1])) continue;
    const full = join(OUTPUT_DIR, name);
    try {
      bytes += statSync(full).size;
      rmSync(full);
      removed.push(name);
    } catch {
      // 忽略不可删除的个别文件，不中断管线
    }
  }
  return { removed, bytes };
}

/** 上一次管线配方（无报告 / 读不出时返回 `null`）。 */
function readPreviousRecipe() {
  if (!existsSync(REPORT_PATH)) return null;
  try {
    const report = JSON.parse(readFileSync(REPORT_PATH, "utf8"));
    return typeof report.recipe === "string" ? report.recipe : null;
  } catch {
    return null;
  }
}

/**
 * 增量判断：产物存在、比源图新、且**实际画布尺寸就是目标尺寸**才算新鲜。
 * 只比 mtime 会让换画布/换编码器后的旧产物一直残留，故必须验尺寸。
 */
function isFresh(outputPath, sourcePath, size) {
  if (!existsSync(outputPath)) return false;
  if (statSync(outputPath).mtimeMs < statSync(sourcePath).mtimeMs) return false;
  const outputSize = readWebpSize(outputPath);
  return outputSize !== null && outputSize.width === size && outputSize.height === size;
}

/**
 * 收敛块分配：`cwebp -o` 在 APFS 上写出的文件会留下远大于内容的已分配块
 * （实测 800×800 档平均 +48.6KB/张、整目录 +21MB ≈ +42%），`du -sh` 因此虚高。
 * 同内容重写一次即可把分配收敛到实际大小（内容零改动）。非 POSIX / 已紧凑时是空操作。
 */
function compactAllocation(path) {
  try {
    const stats = statSync(path);
    if (typeof stats.blocks !== "number") return false;
    const allocated = stats.blocks * STAT_BLOCK_BYTES;
    if (allocated <= stats.size + STAT_BLOCK_BYTES) return false;
    writeFileSync(path, readFileSync(path));
    return true;
  } catch {
    return false;
  }
}

/** 用 cwebp 把任意尺寸/格式的源图编码为 `size×size` WebP。 */
async function encodeWebp(sourcePath, outputPath, size, quality) {
  await run(
    CWEBP_BIN,
    [
      "-q",
      String(quality),
      ...CWEBP_COMMON_ARGS,
      "-resize",
      String(size),
      String(size),
      sourcePath,
      "-o",
      outputPath,
    ],
    { maxBuffer: 64 * 1024 * 1024 },
  );
}

async function runPool(items, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  async function drain() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index], index);
    }
  }
  const lanes = Array.from({ length: Math.min(CONCURRENCY, items.length) }, () => drain());
  await Promise.all(lanes);
  return results;
}

function dirSizeBytes(dir) {
  let total = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) total += dirSizeBytes(full);
    else total += statSync(full).size;
  }
  return total;
}

/** 目录已分配字节（`du` 口径；非 POSIX / 无 `blocks` 时回退为内容字节）。 */
function dirAllocatedBytes(dir) {
  let total = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      total += dirAllocatedBytes(full);
      continue;
    }
    const stats = statSync(full);
    total += typeof stats.blocks === "number" ? stats.blocks * STAT_BLOCK_BYTES : stats.size;
  }
  return total;
}

async function main() {
  const root = resolveWheelDataRoot();
  console.log("[wheels:images] 源数据根目录：", root);
  console.log(`[wheels:images] 编码器：${CWEBP_BIN} ${CWEBP_COMMON_ARGS.join(" ")}`);
  if (!wheelSourcesAvailable()) {
    console.error(
      `[wheels:images] FAILED — U 盘源图不可读：${root}\n` +
        "  挂载 U 盘后重跑，或用 WHEEL_DATA_ROOT 指向轮毂资料根目录。\n" +
        "  未做任何写入：不会用别款图或生成图顶替真实产品图。",
    );
    process.exit(1);
  }

  const dataset = readWheelDataset();
  const { models, counts } = dataset;
  if (models.length === 0) {
    console.error("[wheels:images] FAILED — 数据清单为空，停止生成图片。");
    process.exit(1);
  }

  // 管线配方变化（换编码器 / 换画布 / 换质量）→ 全量重转
  const previousRecipe = readPreviousRecipe();
  const recipeChanged = previousRecipe !== RECIPE;
  const force = FORCE || recipeChanged;
  if (recipeChanged) {
    console.log(
      `[wheels:images] 管线配方变化 → 全量重转` +
        `（上次：${previousRecipe ?? "无报告 / 旧格式"}）`,
    );
  }

  const beforeBytes = existsSync(OUTPUT_DIR) ? dirSizeBytes(OUTPUT_DIR) : 0;
  mkdirSync(OUTPUT_DIR, { recursive: true });

  // 组装任务清单：每个编号一张主图 → 详情 + 卡片（同一张源图的两种尺寸）
  const tasks = [];
  const missingMainImage = [];
  let modelsQueued = 0;
  for (const model of models) {
    if (model.images.length === 0) continue;
    const files = dataset.imagesByModel.get(model.modelId) ?? [];
    const mainFile = files.find((file) => file.angleIndex === 1);
    if (mainFile === undefined) {
      missingMainImage.push(model.modelId);
      continue;
    }
    modelsQueued += 1;
    const detailPublicPath = mainImagePath(model.modelId);
    tasks.push({
      modelId: model.modelId,
      sourcePath: mainFile.absPath,
      outputPath: publicPathToDisk(detailPublicPath),
      publicPath: detailPublicPath,
      tier: "detail",
    });
    const cardPublicPath = cardImagePath(model.modelId);
    tasks.push({
      modelId: model.modelId,
      sourcePath: mainFile.absPath,
      outputPath: publicPathToDisk(cardPublicPath),
      publicPath: cardPublicPath,
      tier: "card",
    });
  }

  // 记录源图尺寸异常：会「被放大」的（短边 < 目标画布）与「会被拉伸」的（非正方形）
  const upscaled = [];
  const stretched = [];
  const sourceSizes = new Map();
  for (const task of tasks) {
    if (sourceSizes.has(task.sourcePath)) continue;
    sourceSizes.set(task.sourcePath, readImageSize(task.sourcePath));
  }
  for (const task of tasks) {
    const meta = sourceSizes.get(task.sourcePath);
    if (meta === null || meta === undefined) continue;
    const size = task.tier === "card" ? CARD_SIZE : DETAIL_SIZE;
    if (meta.width < size || meta.height < size) {
      upscaled.push({
        modelId: task.modelId,
        tier: task.tier,
        source: task.sourcePath.split("/").pop(),
        sourceSize: `${meta.width}x${meta.height}`,
        targetSize: `${size}x${size}`,
      });
    }
    if (meta.width !== meta.height) {
      stretched.push({
        modelId: task.modelId,
        tier: task.tier,
        source: task.sourcePath.split("/").pop(),
        sourceSize: `${meta.width}x${meta.height}`,
        targetSize: `${size}x${size}`,
        aspectRatio: Number((meta.width / meta.height).toFixed(3)),
      });
    }
  }

  console.log(
    `[wheels:images] 待处理：${tasks.length} 个输出` +
      `（详情 ${modelsQueued} + 卡片 ${modelsQueued}；覆盖 ${counts.modelsWithImages} 个有图编号）`,
  );

  const result = await runPool(tasks, async (task) => {
    const size = task.tier === "card" ? CARD_SIZE : DETAIL_SIZE;
    const quality = task.tier === "card" ? CARD_QUALITY : DETAIL_QUALITY;
    try {
      if (!force && isFresh(task.outputPath, task.sourcePath, size)) {
        return { ...task, status: "skipped", bytes: statSync(task.outputPath).size, size };
      }
      await encodeWebp(task.sourcePath, task.outputPath, size, quality);
      const outputSize = readWebpSize(task.outputPath);
      if (outputSize === null || outputSize.width !== size || outputSize.height !== size) {
        throw new Error(
          `产出画布不是 ${size}×${size}：${outputSize ? `${outputSize.width}×${outputSize.height}` : "无法识别"}`,
        );
      }
      const compacted = compactAllocation(task.outputPath);
      return { ...task, status: "written", bytes: statSync(task.outputPath).size, size, compacted };
    } catch (error) {
      const stderr = error && typeof error === "object" && "stderr" in error ? String(error.stderr) : "";
      const message = error instanceof Error ? error.message : String(error);
      return {
        ...task,
        status: "failed",
        bytes: 0,
        size,
        error: stderr.trim() !== "" ? `${message} — ${stderr.trim().split("\n").pop()}` : message,
      };
    }
  });

  const written = result.filter((item) => item.status === "written");
  const skipped = result.filter((item) => item.status === "skipped");
  const compactedCount = result.filter((item) => item.compacted === true).length;
  const failed = result.filter((item) => item.status === "failed");
  const cardBytes = result
    .filter((item) => item.tier === "card")
    .reduce((sum, item) => sum + item.bytes, 0);
  const detailBytes = result
    .filter((item) => item.tier === "detail")
    .reduce((sum, item) => sum + item.bytes, 0);

  // 清理契约 §9.3 已废弃的角度图（只针对真实编号的产物）
  const angle = pruneAngleFiles(new Set(models.map((model) => model.modelId)));

  // 清理 `._*`（exFAT 会持续重生；U 盘侧 + 输出目录）
  const { spinRoot, forgeRoot } = sourceRoots();
  const appleDouble = cleanAppleDoubleFiles([OUTPUT_DIR, spinRoot, forgeRoot]);

  // 可选：删除数据里不存在的 wheel 图（默认不动，避免误删页面层素材）
  let pruned = [];
  if (PRUNE) {
    const expected = new Set([
      ...tasks.map((task) => task.outputPath),
      ...readdirSync(OUTPUT_DIR)
        .filter((name) => LEGACY_FILE_RE.test(name))
        .map((name) => join(OUTPUT_DIR, name)),
    ]);
    for (const name of readdirSync(OUTPUT_DIR)) {
      const full = join(OUTPUT_DIR, name);
      if (expected.has(full)) continue;
      if (name.startsWith("._")) continue;
      pruned.push(name);
      rmSync(full);
    }
  }

  const afterBytes = dirSizeBytes(OUTPUT_DIR);
  const afterAllocatedBytes = dirAllocatedBytes(OUTPUT_DIR);
  const legacyBytes = readdirSync(OUTPUT_DIR)
    .filter((name) => LEGACY_FILE_RE.test(name))
    .reduce((sum, name) => sum + statSync(join(OUTPUT_DIR, name)).size, 0);
  const wheelOnlyBytes = afterBytes - legacyBytes;

  // 复核验收口径：目录内仍匹配 `-[2-9].webp` 的文件（预期只剩 1-N 旧素材）
  const anglePatternLeftovers = readdirSync(OUTPUT_DIR).filter((name) => /-[2-9]\.webp$/.test(name));
  const legacyLeftovers = anglePatternLeftovers.filter((name) => LEGACY_FILE_RE.test(name));
  const generatedLeftovers = anglePatternLeftovers.filter((name) => !LEGACY_FILE_RE.test(name));

  const report = {
    generatedAt: new Date().toISOString(),
    recipe: RECIPE,
    encoder: CWEBP_BIN,
    sourceRoot: root,
    outputDir: "public/images/products/wheel",
    tiers: {
      card: { size: CARD_SIZE, quality: CARD_QUALITY, files: modelsQueued },
      detail: { size: DETAIL_SIZE, quality: DETAIL_QUALITY, files: modelsQueued },
    },
    counts: {
      outputs: tasks.length,
      written: written.length,
      skipped: skipped.length,
      failed: failed.length,
      cardFiles: modelsQueued,
      detailFiles: modelsQueued,
      modelsWithImages: counts.modelsWithImages,
      modelsMissingImages: counts.modelsMissingImages,
      upscaledOutputs: upscaled.length,
      stretchedOutputs: stretched.length,
      angleFilesRemoved: angle.removed.length,
      angleBytesRemoved: angle.bytes,
      generatedAngleLeftovers: generatedLeftovers.length,
      legacyAnglePatternFiles: legacyLeftovers.length,
      allocationCompacted: compactedCount,
      appleDoubleRemoved: appleDouble.removed,
      appleDoubleBytes: appleDouble.bytes,
      prunedObsoleteFiles: pruned.length,
    },
    bytes: {
      card: cardBytes,
      detail: detailBytes,
      generatedTotal: cardBytes + detailBytes,
      wheelDirTotal: afterBytes,
      /** `du -sh` 口径（POSIX：已分配块；非 POSIX 回退为内容字节） */
      wheelDirAllocated: afterAllocatedBytes,
      wheelGeneratedOnly: wheelOnlyBytes,
      wheelDirBefore: beforeBytes,
    },
    upscaled,
    stretched,
    missingMainImage,
    failed: failed.map((item) => ({
      modelId: item.modelId,
      tier: item.tier,
      publicPath: item.publicPath,
      error: item.error,
    })),
  };
  writeFileSync(REPORT_PATH, `${JSON.stringify(report, null, 2)}\n`, "utf8");

  console.log(`[wheels:images] 写入 ${written.length} / 跳过 ${skipped.length} / 失败 ${failed.length}`);
  if (compactedCount > 0) {
    console.log(
      `[wheels:images] 收敛 cwebp 在 APFS 上虚增的块分配：${compactedCount} 个文件（内容零改动）`,
    );
  }
  console.log(
    `[wheels:images] 详情主图 ${DETAIL_SIZE}×${DETAIL_SIZE} q${DETAIL_QUALITY}：${counts.modelsWithImages} 张，合计 ${formatMb(detailBytes)}`,
  );
  console.log(
    `[wheels:images] 卡片图 ${CARD_SIZE}×${CARD_SIZE} q${CARD_QUALITY}：${counts.modelsWithImages} 张，合计 ${formatMb(cardBytes)}`,
  );
  console.log(`[wheels:images] 本次生成净增量：${formatMb(cardBytes + detailBytes)}`);
  console.log(
    `[wheels:images] wheel 目录总体积：${formatMb(afterBytes)}` +
      `（其中本管线生成 ${formatMb(wheelOnlyBytes)}，既有 1-N.webp 素材 ${formatMb(legacyBytes)}）` +
      `；du 口径（已分配块）：${formatMb(afterAllocatedBytes)}`,
  );
  console.log(
    `[wheels:images] 源图短边小于目标画布、已被放大：${upscaled.length} 个；` +
      `源图非正方形、会被 -resize S S 拉伸：${stretched.length} 个（见报告 upscaled / stretched）`,
  );
  console.log(`[wheels:images] 清理已废弃角度图：${angle.removed.length} 个 / ${formatMb(angle.bytes)}`);
  console.log(
    `[wheels:images] 目录内仍匹配 -[2-9].webp 的文件：${anglePatternLeftovers.length} 个` +
      `（既有 1-N 素材 ${legacyLeftovers.length} 个；真实编号的角度图残留 ${generatedLeftovers.length} 个）`,
  );
  console.log(`[wheels:images] 清除 exFAT ._* 元数据文件：${appleDouble.removed} 个 / ${formatMb(appleDouble.bytes)}`);
  if (PRUNE) console.log(`[wheels:images] 清理数据中不存在的 wheel 图：${pruned.length} 个`);
  console.log(`[wheels:images] 报告：${REPORT_PATH}`);
  for (const item of failed) {
    console.error(`  · FAILED ${item.modelId} ${item.tier} ${item.publicPath} — ${item.error}`);
  }
  console.log(`[wheels:images] ${failed.length === 0 ? "OK" : "FAILED — 有输出失败"}`);
  process.exit(failed.length === 0 ? 0 : 1);
}

main().catch((error) => {
  console.error(
    `[wheels:images] 未捕获异常：${error instanceof Error ? error.stack : String(error)}`,
  );
  process.exit(1);
});
