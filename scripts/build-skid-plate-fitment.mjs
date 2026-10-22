#!/usr/bin/env node

/**
 * build-skid-plate-fitment.mjs
 *
 * 把「底盘护板-1/json」（清洗后三供应商合并库，只读）解析为
 * src/lib/skid-plate-fitment.ts 结构化数据（as const + runtime 断言）。
 *
 * 规则：
 *  1. 品牌顺序与车型清单以 json/brands/*.json 为准；车型文件按规范化名匹配 json/models/*.json。
 *  2. 方案字段原文搬运：套件数 parts_count / 年款 year_range / 动力 power_type /
 *     配置 model_config / 排量续航 range_or_power / 材料与部位 materials / 备注 notes。
 *  3. 供应商脱敏：source_supplier、prod_name（溯源字段）不落入产物；
 *     产物文本再次断言不含供应商名称与编号。
 *  4. 状态角标由原文字段推导（不新增事实）：
 *     - confirmed 可装（适配库确认）：无任何年款/动力/配置/排量条件；
 *     - conditional 按年款/动力适配（原文条件）：含条件且年款非空；
 *     - year-pending 年份待门店确认：含条件但原文未给年款；
 *     - pending-check 待门店复核：品牌或备注标注待确认；
 *     - in-development 开发中：原文标注开发中。
 *  5. 硬断言：121 品牌 / 1532 车型 / 3719 方案；任一错误即非零退出且不写文件。
 *
 * 用法：node scripts/build-skid-plate-fitment.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const USB_ROOT =
  process.env.SKID_PLATE_SOURCE ??
  "/Volumes/usb/蓝辉轻改资料库/02-产品Product/底盘护板-1";
const BRAND_DIR = join(USB_ROOT, "json", "brands");
const MODEL_DIR = join(USB_ROOT, "json", "models");
const OUT_FILE = join(ROOT, "src", "lib", "skid-plate-fitment.ts");

const EXPECT = { brands: 121, models: 1532, schemes: 3719 };
const SUPPLIER_NAMES = ["宝凡", "普朗克", "鼎仕力"];

function strList(v) {
  if (Array.isArray(v)) {
    return v.map((x) => String(x).trim()).filter(Boolean);
  }
  return v == null || v === "" ? [] : [String(v).trim()];
}

/** 材料原文：可能是字符串或字符串数组；保护位置为数组 */
function normalizeMaterials(materials) {
  if (!Array.isArray(materials)) return [];
  const out = [];
  for (const m of materials) {
    if (!m || typeof m !== "object") continue;
    const material = strList(m["材料"]);
    const positions = strList(m["保护位置"]);
    if (material.length === 0 && positions.length === 0) continue;
    out.push({ material, positions });
  }
  return out;
}

function deriveStatus(brand, scheme) {
  const blob = scheme.notes.join(" ");
  if (brand === "待确认品牌" || /待确认/.test(blob)) return "pending-check";
  if (/开发中/.test(blob)) return "in-development";
  const hasCond =
    scheme.years.length > 0 ||
    scheme.power.length > 0 ||
    scheme.config.length > 0 ||
    scheme.displacement.length > 0;
  if (hasCond && scheme.years.length === 0) return "year-pending";
  if (hasCond) return "conditional";
  return "confirmed";
}

function parseScheme(brand, raw) {
  const scheme = {
    partsCount: raw.parts_count ? String(raw.parts_count).trim() : null,
    years: strList(raw.year_range),
    power: strList(raw.power_type),
    config: strList(raw.model_config),
    displacement: strList(raw.range_or_power),
    materials: normalizeMaterials(raw.materials),
    notes: strList(raw.notes),
  };
  scheme.status = deriveStatus(brand, scheme);
  return scheme;
}

function main() {
  const errors = [];
  if (!existsSync(BRAND_DIR) || !existsSync(MODEL_DIR)) {
    console.error(`[skid-plate] 数据源目录不存在：${USB_ROOT}`);
    process.exit(1);
  }

  // ---- 车型文件索引：精确名 → 数组；小写名 → 数组（容忍大小写副本） ----
  const modelFiles = readdirSync(MODEL_DIR).filter(
    (f) => f.endsWith(".json") && !f.startsWith("._"),
  );
  const exactIndex = new Map();
  const lowerIndex = new Map();
  const pushIndex = (map, key, value) => {
    const list = map.get(key);
    if (list) list.push(value);
    else map.set(key, [value]);
  };
  for (const file of modelFiles) {
    let data;
    try {
      data = JSON.parse(readFileSync(join(MODEL_DIR, file), "utf8"));
    } catch (e) {
      errors.push(`车型文件 ${file} JSON 解析失败：${e.message}`);
      continue;
    }
    const name = data.car_model ?? file.replace(/\.json$/, "");
    pushIndex(exactIndex, name, { file, data });
    pushIndex(lowerIndex, name.toLowerCase(), { file, data });
  }
  const usedFiles = new Set();
  const pickModel = (entry) => {
    const exact = exactIndex.get(entry.car_model) ?? [];
    const pool = exact.length > 0 ? exact : lowerIndex.get(entry.car_model.toLowerCase()) ?? [];
    const fresh = pool.filter((p) => !usedFiles.has(p.file));
    const byCount = fresh.filter((p) => p.data.scheme_count === entry.scheme_count);
    return byCount[0] ?? fresh[0] ?? pool[0] ?? null;
  };

  // ---- 品牌清单（以 brands/*.json 为序） ----
  const brandFiles = readdirSync(BRAND_DIR).filter(
    (f) => f.endsWith(".json") && !f.startsWith("._"),
  );
  const brands = [];
  let modelTotal = 0;
  let schemeTotal = 0;

  for (const file of brandFiles) {
    let brandDoc;
    try {
      brandDoc = JSON.parse(readFileSync(join(BRAND_DIR, file), "utf8"));
    } catch (e) {
      errors.push(`品牌文件 ${file} JSON 解析失败：${e.message}`);
      continue;
    }
    const brandName = brandDoc.car_brand;
    const models = [];
    for (const entry of brandDoc.models ?? []) {
      const hit = pickModel(entry);
      if (!hit) {
        errors.push(`品牌「${brandName}」车型「${entry.car_model}」在 json/models 中无对应文件`);
        continue;
      }
      usedFiles.add(hit.file);
      const { data: modelDoc, file: modelFile } = hit;
      if (modelDoc.car_brand !== brandName) {
        errors.push(
          `车型「${entry.car_model}」品牌不一致：品牌文档=${brandName}，车型文档=${modelDoc.car_brand}（${modelFile}）`,
        );
      }
      const schemes = (modelDoc.guard_schemes ?? []).map((s) => parseScheme(brandName, s));
      if (schemes.length !== entry.scheme_count) {
        errors.push(
          `车型「${entry.car_model}」方案数不一致：品牌文档=${entry.scheme_count}，车型文档=${schemes.length}（${modelFile}）`,
        );
      }
      models.push({ model: modelDoc.car_model, schemes });
      modelTotal += 1;
      schemeTotal += schemes.length;
    }
    brands.push({ brand: brandName, models });
  }

  // 未被使用的车型文件：精确/小写名已被消费过的视为大小写副本，仅警告；其余报错
  const consumedNames = new Set();
  for (const b of brands) for (const m of b.models) {
    consumedNames.add(m.model);
    consumedNames.add(m.model.toLowerCase());
  }
  for (const file of modelFiles) {
    if (usedFiles.has(file)) continue;
    let data;
    try {
      data = JSON.parse(readFileSync(join(MODEL_DIR, file), "utf8"));
    } catch {
      continue;
    }
    if (consumedNames.has(data.car_model) || consumedNames.has((data.car_model ?? "").toLowerCase())) {
      console.warn(`[skid-plate] 跳过大小写/重复副本文件：${file}`);
    } else {
      errors.push(`车型文件未被任何品牌文档收录：${file}`);
    }
  }

  // ---- 计数硬断言 ----
  if (brands.length !== EXPECT.brands) {
    errors.push(`品牌数 ${brands.length} ≠ 预期 ${EXPECT.brands}`);
  }
  if (modelTotal !== EXPECT.models) {
    errors.push(`车型数 ${modelTotal} ≠ 预期 ${EXPECT.models}`);
  }
  if (schemeTotal !== EXPECT.schemes) {
    errors.push(`方案数 ${schemeTotal} ≠ 预期 ${EXPECT.schemes}`);
  }

  // ---- 品牌/车型重名断言 ----
  const brandNames = new Set();
  for (const b of brands) {
    if (brandNames.has(b.brand)) errors.push(`品牌重复：${b.brand}`);
    brandNames.add(b.brand);
    const modelNames = new Set();
    for (const m of b.models) {
      if (modelNames.has(m.model)) errors.push(`品牌「${b.brand}」车型重复：${m.model}`);
      modelNames.add(m.model);
    }
  }

  if (errors.length > 0) {
    console.error(`\n[skid-plate] 解析错误 ${errors.length} 条，跳过写出：`);
    for (const e of errors.slice(0, 30)) console.error(`  - ${e}`);
    process.exit(1);
  }

  const emitted = emitTs(brands);
  // 脱敏断言：产物文本不得出现供应商名称
  for (const name of SUPPLIER_NAMES) {
    if (emitted.includes(name)) {
      console.error(`[skid-plate] 脱敏失败：产物含供应商名「${name}」`);
      process.exit(1);
    }
  }

  mkdirSync(dirname(OUT_FILE), { recursive: true });
  writeFileSync(OUT_FILE, emitted, "utf8");
  console.log(
    `[skid-plate] OK：品牌 ${brands.length} / 车型 ${modelTotal} / 方案 ${schemeTotal} → src/lib/skid-plate-fitment.ts`,
  );
}

function tsLiteral(v) {
  return JSON.stringify(v).replace(/\u2028|\u2029/g, "");
}

function emitTs(brands) {
  const brandBlocks = brands
    .map((b) => {
      const modelBlocks = b.models
        .map((m) => {
          const schemeBlocks = m.schemes
            .map((s) => {
              const matBlocks = s.materials
                .map(
                  (mt) =>
                    `        { material: ${tsLiteral(mt.material)}, positions: ${tsLiteral(mt.positions)} }`,
                )
                .join(",\n");
              const fields = [
                `      partsCount: ${tsLiteral(s.partsCount)}`,
                `      years: ${tsLiteral(s.years)}`,
                `      power: ${tsLiteral(s.power)}`,
                `      config: ${tsLiteral(s.config)}`,
                `      displacement: ${tsLiteral(s.displacement)}`,
                s.materials.length
                  ? `      materials: [\n${matBlocks}\n      ]`
                  : `      materials: []`,
                `      notes: ${tsLiteral(s.notes)}`,
                `      status: ${tsLiteral(s.status)}`,
              ];
              return `    {
${fields.join(",\n")}
    }`;
            })
            .join(",\n");
          return `  {
    model: ${tsLiteral(m.model)},
    schemes: [
${schemeBlocks}
    ],
  }`;
        })
        .join(",\n");
      return `{
  brand: ${tsLiteral(b.brand)},
  models: [
${modelBlocks}
  ],
}`;
    })
    .join(",\n");

  return `/**
 * 底盘护板适配库（由 scripts/build-skid-plate-fitment.mjs 自动生成，勿手改）
 *
 * 来源：底盘护板-1/json（清洗后三供应商合并库，只读原始资料；重复组 0）。
 * 口径：套件数 / 年款 / 动力 / 配置 / 排量续航 / 材料与防护部位 / 备注均为原表原文搬运，
 * 不换算、不推断；供应商名称与产品编号不落本文件。
 * 适装声明：适配信息以门店现场检查为准，不同批次与配置存在差异。
 */

export type SkidPlateSchemeStatus =
  | "confirmed"
  | "conditional"
  | "year-pending"
  | "pending-check"
  | "in-development";

export type SkidPlateMaterialEntry = {
  readonly material: readonly string[];
  readonly positions: readonly string[];
};

export type SkidPlateScheme = {
  readonly partsCount: string | null;
  readonly years: readonly string[];
  readonly power: readonly string[];
  readonly config: readonly string[];
  readonly displacement: readonly string[];
  readonly materials: readonly SkidPlateMaterialEntry[];
  readonly notes: readonly string[];
  readonly status: SkidPlateSchemeStatus;
};

export type SkidPlateModel = {
  readonly model: string;
  readonly schemes: readonly SkidPlateScheme[];
};

export type SkidPlateBrand = {
  readonly brand: string;
  readonly models: readonly SkidPlateModel[];
};

export const SKID_PLATE_BRAND_COUNT = ${EXPECT.brands};
export const SKID_PLATE_MODEL_COUNT = ${EXPECT.models};
export const SKID_PLATE_SCHEME_COUNT = ${EXPECT.schemes};

export const SKID_PLATE_FITMENT: readonly SkidPlateBrand[] = [
${brandBlocks}
] as const;

// ---- Runtime 断言（防漂移） ----
(() => {
  const errors: string[] = [];
  if (SKID_PLATE_FITMENT.length !== SKID_PLATE_BRAND_COUNT) {
    errors.push(\`品牌数 \${SKID_PLATE_FITMENT.length} ≠ \${SKID_PLATE_BRAND_COUNT}\`);
  }
  let models = 0;
  let schemes = 0;
  const brandNames = new Set<string>();
  for (const b of SKID_PLATE_FITMENT) {
    if (brandNames.has(b.brand)) errors.push(\`品牌重复：\${b.brand}\`);
    brandNames.add(b.brand);
    const modelNames = new Set<string>();
    for (const m of b.models) {
      models += 1;
      if (modelNames.has(m.model)) errors.push(\`品牌「\${b.brand}」车型重复：\${m.model}\`);
      modelNames.add(m.model);
      if (m.schemes.length === 0) errors.push(\`车型「\${m.model}」无方案\`);
      for (const s of m.schemes) {
        schemes += 1;
        const hasBody =
          s.partsCount ||
          s.years.length ||
          s.power.length ||
          s.config.length ||
          s.displacement.length ||
          s.materials.length ||
          s.notes.length;
        if (!hasBody) errors.push(\`车型「\${m.model}」存在空方案\`);
      }
    }
  }
  if (models !== SKID_PLATE_MODEL_COUNT) errors.push(\`车型数 \${models} ≠ \${SKID_PLATE_MODEL_COUNT}\`);
  if (schemes !== SKID_PLATE_SCHEME_COUNT) errors.push(\`方案数 \${schemes} ≠ \${SKID_PLATE_SCHEME_COUNT}\`);
  if (errors.length > 0) {
    throw new Error("[skid-plate-fitment] " + errors.slice(0, 10).join(" | "));
  }
})();
`;
}

main();
