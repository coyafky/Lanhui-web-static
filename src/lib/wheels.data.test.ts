import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  WHEEL_IMAGE_DIR,
  getWheelModel,
  wheelCardImagePath,
  wheelModels,
  type WheelModel,
} from "./wheels.data";

/**
 * 契约：specs/active/plans/wheel-page-prototype-migration-2026-09-21.md §9.1 / §9.2 / §9.3 / §9.6
 * 源数据实测（旋压 186 + 锻造 218）。
 */
const EXPECTED_MODEL_COUNT = 404;
const EXPECTED_SPIN_COUNT = 186;
const EXPECTED_FORGE_COUNT = 218;
const EXPECTED_VARIANT_COUNT = 2521;
const EXPECTED_WITH_IMAGES = 378;
const EXPECTED_MISSING_IMAGES = 26;

/**
 * 源表内部字段名 —— 绝不能进入公开数据。
 * 用字符串拼接构造，避免本断言文件自身命中产物级 grep（同 scripts/check-product-image-copy.mjs 手法）。
 */
const FORBIDDEN_FIELD_NAMES = [
  "库" + "存",
  "库" + "位",
  "厂家",
  "源" + "Sheet",
  "原表行",
  "行",
  "备注",
  "款式名称",
];

/** 序列化全文扫描用的子串（去掉单字 `行`，它会误命中普通文案）。 */
const FORBIDDEN_PAYLOAD_SUBSTRINGS = ["库" + "存", "库" + "位", "厂家", "源" + "Sheet", "原表行", "备注", "款式名称"];

/** 契约 §9.1 的公开字段白名单。 */
const ALLOWED_MODEL_KEYS = ["modelId", "process", "carSeries", "variants", "colors", "images"];
const ALLOWED_VARIANT_KEYS = [
  "diameterIn",
  "widthIn",
  "pcd",
  "offsetMm",
  "centerBoreMm",
  "color",
];
const ALLOWED_PCD_KEYS = ["lugCount", "pcdMm"];

/** 实测数值域（见 scripts/wheel-data-report.json 与 §9.2）。 */
const DIAMETER_MIN = 15;
const DIAMETER_MAX = 24;
const WIDTH_MIN = 6;
const WIDTH_MAX = 12;
const PCD_MM_MIN = 95;
const PCD_MM_MAX = 175;
const LUG_COUNTS = [4, 5, 6];
const OFFSET_MIN = 0;
const OFFSET_MAX = 90;
const CENTER_BORE_MIN = 50;
const CENTER_BORE_MAX = 130;

const publicPathToDisk = (publicPath: string) =>
  join(process.cwd(), "public", publicPath.replace(/^\//, ""));

const allVariants = (model: WheelModel) => model.variants;

describe("wheels.data 计数与主键", () => {
  it("registers the full source dataset", () => {
    expect(wheelModels).toHaveLength(EXPECTED_MODEL_COUNT);
    expect(wheelModels.reduce((sum, model) => sum + allVariants(model).length, 0)).toBe(
      EXPECTED_VARIANT_COUNT,
    );
  });

  it("keeps every modelId globally unique", () => {
    const ids = wheelModels.map((model) => model.modelId);
    expect(new Set(ids).size).toBe(EXPECTED_MODEL_COUNT);
    expect(ids).toEqual([...new Set(ids)]);
  });

  it("splits the two source batches without any cross-batch id conflict", () => {
    const spin = wheelModels.filter((model) => model.process === "旋压");
    const forge = wheelModels.filter((model) => model.process === "锻造");
    expect(spin).toHaveLength(EXPECTED_SPIN_COUNT);
    expect(forge).toHaveLength(EXPECTED_FORGE_COUNT);

    const forgeIds = new Set(forge.map((model) => model.modelId));
    const overlap = spin.map((model) => model.modelId).filter((id) => forgeIds.has(id));
    expect(overlap).toEqual([]);
    expect(spin.length + forge.length).toBe(EXPECTED_MODEL_COUNT);
  });

  it("resolves a model by id and exposes the card path helper", () => {
    expect(getWheelModel("GZ001")?.modelId).toBe("GZ001");
    expect(getWheelModel("__not_a_wheel__")).toBeUndefined();
    expect(wheelCardImagePath("GZ001")).toBe(`${WHEEL_IMAGE_DIR}/GZ001-card.webp`);
  });

  it("gives every model a process and a car series label", () => {
    for (const model of wheelModels) {
      expect(["旋压", "锻造"], model.modelId).toContain(model.process);
      expect(model.carSeries.length, model.modelId).toBeGreaterThan(0);
    }
  });
});

describe("wheels.data 内部字段剥离（负向断言）", () => {
  it("exposes exactly the §9.1 public field whitelist", () => {
    for (const model of wheelModels) {
      expect(Object.keys(model).sort(), `${model.modelId} 顶层字段`).toEqual(
        [...ALLOWED_MODEL_KEYS].sort(),
      );
      for (const variant of model.variants) {
        expect(Object.keys(variant).sort(), `${model.modelId} variant 字段`).toEqual(
          [...ALLOWED_VARIANT_KEYS].sort(),
        );
        for (const pattern of variant.pcd) {
          expect(Object.keys(pattern).sort(), `${model.modelId} pcd 字段`).toEqual(
            [...ALLOWED_PCD_KEYS].sort(),
          );
        }
      }
    }
  });

  it("keeps no internal source-table field on any model or variant", () => {
    for (const model of wheelModels) {
      const modelKeys = Object.keys(model);
      for (const field of FORBIDDEN_FIELD_NAMES) {
        expect(modelKeys, `${model.modelId} 顶层字段`).not.toContain(field);
      }
      for (const variant of model.variants) {
        const variantKeys = Object.keys(variant);
        for (const field of FORBIDDEN_FIELD_NAMES) {
          expect(variantKeys, `${model.modelId} variant 字段`).not.toContain(field);
        }
      }
    }
  });

  it("never mentions those field names anywhere in the serialized payload", () => {
    const blob = JSON.stringify(wheelModels);
    for (const field of FORBIDDEN_PAYLOAD_SUBSTRINGS) {
      expect(blob.includes(field), field).toBe(false);
    }
  });
});

describe("wheels.data 规格与 PCD 合理性", () => {
  it("parses PCD into a plausible lug count and bolt-circle diameter", () => {
    let entries = 0;
    for (const model of wheelModels) {
      for (const variant of model.variants) {
        for (const pattern of variant.pcd) {
          entries += 1;
          expect(LUG_COUNTS, `${model.modelId} lugCount`).toContain(pattern.lugCount);
          expect(pattern.pcdMm, `${model.modelId} pcdMm`).toBeGreaterThanOrEqual(PCD_MM_MIN);
          expect(pattern.pcdMm, `${model.modelId} pcdMm`).toBeLessThanOrEqual(PCD_MM_MAX);
          // 源表孔距最多一位小数（100 / 114.3 / 139.7…）
          expect(Math.round(pattern.pcdMm * 10) / 10, `${model.modelId} pcdMm 精度`).toBe(
            pattern.pcdMm,
          );
        }
      }
    }
    // 2510 单孔距 + 10 条双孔距 = 2531 条孔距
    expect(entries).toBeGreaterThanOrEqual(EXPECTED_VARIANT_COUNT);
  });

  it("gives every variant at least one hole pattern", () => {
    for (const model of wheelModels) {
      for (const variant of model.variants) {
        expect(variant.pcd.length, model.modelId).toBeGreaterThan(0);
      }
    }
  });

  it("keeps diameter and width inside the measured data domain", () => {
    let resolved = 0;
    for (const model of wheelModels) {
      for (const variant of model.variants) {
        const { diameterIn, widthIn } = variant;
        if (diameterIn !== null) {
          resolved += 1;
          expect(diameterIn, `${model.modelId} diameterIn`).toBeGreaterThanOrEqual(DIAMETER_MIN);
          expect(diameterIn, `${model.modelId} diameterIn`).toBeLessThanOrEqual(DIAMETER_MAX);
        }
        if (widthIn !== null) {
          expect(widthIn, `${model.modelId} widthIn`).toBeGreaterThanOrEqual(WIDTH_MIN);
          expect(widthIn, `${model.modelId} widthIn`).toBeLessThanOrEqual(WIDTH_MAX);
        }
        // 直径与宽度成对出现（源表 规格 只有 2 行为空，见报告 spec-unresolved）
        expect(diameterIn === null, `${model.modelId} 直径/宽度成对`).toBe(widthIn === null);
      }
    }
    // 实测 2521 行里 2519 行有规格，2 行为空（GZ098 行902 / GZ099 行913）
    expect(resolved).toBe(EXPECTED_VARIANT_COUNT - 2);
  });

  it("keeps offset and center bore inside the measured data domain", () => {
    for (const model of wheelModels) {
      for (const variant of model.variants) {
        expect(variant.offsetMm, `${model.modelId} offsetMm`).not.toBeNull();
        expect(variant.offsetMm ?? 0, `${model.modelId} offsetMm`).toBeGreaterThanOrEqual(OFFSET_MIN);
        expect(variant.offsetMm ?? 0, `${model.modelId} offsetMm`).toBeLessThanOrEqual(OFFSET_MAX);
        expect(variant.centerBoreMm, `${model.modelId} centerBoreMm`).not.toBeNull();
        expect(variant.centerBoreMm ?? 0, `${model.modelId} centerBoreMm`).toBeGreaterThanOrEqual(
          CENTER_BORE_MIN,
        );
        expect(variant.centerBoreMm ?? 0, `${model.modelId} centerBoreMm`).toBeLessThanOrEqual(
          CENTER_BORE_MAX,
        );
      }
    }
  });

  it("strips stray leading glyphs from colors and de-duplicates them", () => {
    for (const model of wheelModels) {
      expect(new Set(model.colors).size, `${model.modelId} colors 去重`).toBe(model.colors.length);
      for (const color of model.colors) {
        expect(color, `${model.modelId} color`).toMatch(/^[\p{L}\p{N}]/u);
        expect(color, `${model.modelId} color`).toMatch(/[\p{L}\p{N}]$/u);
      }
      const variantColors = new Set(model.variants.map((variant) => variant.color));
      for (const color of variantColors) {
        if (color === null) continue;
        expect(model.colors, `${model.modelId} variant 颜色应在 colors 中`).toContain(color);
      }
    }
  });
});

describe("wheels.data 图片资产", () => {
  it("matches the measured image coverage", () => {
    const withImages = wheelModels.filter((model) => model.images.length > 0);
    const withoutImages = wheelModels.filter((model) => model.images.length === 0);
    expect(withImages).toHaveLength(EXPECTED_WITH_IMAGES);
    expect(withoutImages).toHaveLength(EXPECTED_MISSING_IMAGES);
  });

  it("points every gallery entry at an existing public asset", () => {
    for (const model of wheelModels) {
      for (const image of model.images) {
        expect(image.startsWith(`${WHEEL_IMAGE_DIR}/`), image).toBe(true);
        expect(existsSync(publicPathToDisk(image)), image).toBe(true);
      }
    }
  });

  it("has no card image for models without a source photo (no stand-in art)", () => {
    for (const model of wheelModels) {
      const cardExists = existsSync(publicPathToDisk(wheelCardImagePath(model.modelId)));
      expect(cardExists, `${model.modelId} 卡片图存在性`).toBe(model.images.length > 0);
    }
  });

  it("keeps the gallery ordered primary-first without duplicate paths", () => {
    for (const model of wheelModels) {
      expect(new Set(model.images).size, model.modelId).toBe(model.images.length);
      const [primary] = model.images;
      if (primary !== undefined) {
        expect(primary).toBe(`${WHEEL_IMAGE_DIR}/${model.modelId}.webp`);
      }
    }
  });

  it("registers at most one detail image per model (契约 §9.3：一个编号一张主图)", () => {
    for (const model of wheelModels) {
      expect(model.images.length, `${model.modelId} images 条数`).toBeLessThanOrEqual(1);
    }
    const withImages = wheelModels.filter((model) => model.images.length === 1);
    expect(withImages).toHaveLength(EXPECTED_WITH_IMAGES);
  });

  it("ships no retired multi-angle images (<编号>-N.webp)", () => {
    const ids = new Set(wheelModels.map((model) => model.modelId));
    const directory = publicPathToDisk(WHEEL_IMAGE_DIR);
    const angles = readdirSync(directory).filter((name) => {
      const match = name.match(/^(.+)-(\d+)\.webp$/);
      return match !== null && ids.has(match[1]) && Number(match[2]) >= 2;
    });
    expect(angles).toEqual([]);
  });
});
