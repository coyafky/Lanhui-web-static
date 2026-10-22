#!/usr/bin/env node

/**
 * build-fitment-data.mjs
 *
 * 把「车型适配库和文件/<品牌>.md」（供应商原始资料，只读）解析为
 * src/lib/fitment/<slug>.ts 结构化数据（as const + runtime 断言）。
 *
 * 规则：
 *  1. 品牌概览 / 数据维护 节跳过；其余 `## ` 为车型节（名称原文保留）；
 *     `### ` 为改装项目；`#### 方案 N` 分组；`- 键：值` 为方案字段。
 *  2. 键名跨品牌归一化（材质/规格/年款/备注/日期/动力）。
 *  3. 纯编码行（如 X3054S、J2275S）→ spec.code，页面默认不展示（供应商编号脱敏）。
 *  4. 每个车型的「可选改装项目」清单与正文项目名做一致性校验，漂移即报错。
 *
 * 用法：node scripts/build-fitment-data.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC_DIR = join(ROOT, "供应商产品资料", "车型适配库和文件");
const OUT_DIR = join(ROOT, "src", "lib", "fitment");

/** 品牌 → 页面 slug（全部有对应官网页面/车型页的品牌） */
const BRANDS = {
  "小米.md": "xiaomi",
  "问界.md": "wenjie",
  "极氪.md": "zeekr",
  "丰田.md": "toyota",
  "理想.md": "li-auto",
  "红旗.md": "hongqi",
  "乐道.md": "ledao",
  "小鹏.md": "xpeng",
  "享界.md": "xiangjie",
  "哈弗.md": "haval",
  "大众.md": "volkswagen",
  "宝马.md": "bmw",
  "尚界.md": "shangjie",
  "岚图.md": "voyah",
  "昊铂.md": "haobo",
  "路虎.md": "land-rover",
  "特斯拉.md": "tesla",
  "雪佛兰.md": "chevrolet",
  "广汽传祺.md": "gac",
  // 2026-10-21 新增 19 品牌（B 方案：品牌聚合页 + TOP 车型深页）
  "仰望.md": "yangwang",
  "别克.md": "buick",
  "吉利.md": "geely",
  "坦克.md": "tank",
  "奔驰.md": "mercedes",
  "奥迪.md": "audi",
  "本田.md": "honda",
  "极狐.md": "arcfox",
  "标致.md": "peugeot",
  "深蓝.md": "deepal",
  "零跑.md": "leapmotor",
  "魏牌.md": "wey",
  "方程豹.md": "fangchengbao",
  "比亚迪.md": "byd",
  "阿维塔.md": "avatr",
  "凯迪拉克.md": "cadillac",
  "北京汽车.md": "baic",
  "吉利银河.md": "geely-galaxy",
  "广汽埃安.md": "aion",
};

/** 各品牌车型节名称前缀（剥离用，长前缀在前，避免误剥） */
const BRAND_PREFIXES = {
  xiaomi: ["小米"],
  wenjie: ["问界"],
  zeekr: ["极氪"],
  toyota: ["广汽丰田", "丰田"],
  "li-auto": ["理想"],
  hongqi: ["红旗"],
  ledao: ["乐道"],
  xpeng: ["小鹏"],
  xiangjie: ["享界"],
  haval: ["哈弗"],
  volkswagen: ["大众"],
  bmw: ["宝马"],
  shangjie: ["尚界"],
  voyah: ["岚图"],
  haobo: ["昊铂"],
  "land-rover": ["路虎"],
  tesla: ["特斯拉"],
  chevrolet: ["雪佛兰"],
  gac: ["广汽传祺", "传祺", "传褀", "广汽"],
  // 2026-10-21 新增 19 品牌
  yangwang: ["仰望"],
  buick: ["别克"],
  geely: ["吉利"],
  tank: ["坦克"],
  mercedes: ["奔驰"],
  audi: ["奥迪"],
  honda: ["本田"],
  arcfox: ["极狐"],
  peugeot: ["标致"],
  deepal: ["深蓝"],
  leapmotor: ["零跑"],
  wey: ["魏牌"],
  fangchengbao: ["方程豹"],
  byd: ["比亚迪"],
  avatr: ["阿维塔"],
  cadillac: ["凯迪拉克"],
  baic: [],
  "geely-galaxy": ["吉利银河"],
  aion: ["广汽埃安"],
};

const KEY_ALIAS = {
  材质: ["产品编号/材质", "材料与工艺", "产品编号", "材料"],
  规格: ["产品名称/规格", "款式与版本", "产品方案、型号或颜色", "产品类型", "款式与颜色", "产品名称或系列", "规格", "套装规格", "套装或版本", "型号颜色"],
  年款: ["适用年款", "年款"],
  备注: ["重要说明", "安装与使用说明", "适配说明", "备注", "适配车型", "门座", "片套", "车型", "保护位置", "适配版本", "细节与安装提示", "适配与安装说明"],
  日期: ["日期", "资料日期", "资料版本"],
  动力: ["动力形式"],
  编码: ["产品规格", "产品编号/编码"],
};

/** 判定是否为纯供应商编号（不含中文、长度>=4） */
function isPureCode(v) {
  const s = v.trim();
  if (!s) return false;
  if (/[\u4e00-\u9fff]/.test(s)) return false;
  return s.length >= 4;
}

/**
 * 供应商原始资料的已知清单漂移（只读 md，不改原文）：
 * 「可选改装项目」摘要行未更新，正文多出的项目按此表放行。
 * 其余品牌/车型的一致性校验保持原样。
 */
const ALLOWED_LIST_DRIFT = {
  buick: { "至境L7": new Set(["底盘护板"]) },
};

function parseFile(fileName) {
  const slug = BRANDS[fileName];
  if (!slug) return null;
  const text = readFileSync(join(SRC_DIR, fileName), "utf8");
  const lines = text.split(/\r?\n/);

  const models = [];
  let currentModel = null;
  let currentProject = null;
  let mergeInto = null; // 同名项目合并目标（供应商原文同一车型内项目名重复时合并方案）
  let currentSpec = null;
  let inOverview = false;
  let inMaintenance = false;
  let warnings = [];

  const flushSpec = () => {
    if (currentProject && currentSpec) {
      if (Object.keys(currentSpec).length > 0) {
        currentProject.specs.push(currentSpec);
      }
      currentSpec = null;
    }
  };
  const flushProject = () => {
    if (currentModel && currentProject) {
      flushSpec();
      if (currentProject.specs.length > 0 && !mergeInto) {
        currentModel.projects.push(currentProject);
      }
      currentProject = null;
      mergeInto = null;
    }
  };
  const flushModel = () => {
    if (currentModel) {
      flushProject();
      if (currentModel.projects.length > 0) models.push(currentModel);
      currentModel = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;

    // 节切换（品牌概览/数据维护 也是 ## 节，统一走状态机）
    if (line.startsWith("## ")) {
      flushModel();
      const section = line.slice(3).trim();
      if (section === "品牌概览" || section === "数据维护") continue;
      let name = section;
      // 去品牌前缀（按 BRAND_PREFIXES[slug]），保留车型原名（含合并节原文如「SU7、YU7专用」）
      const prefixes = BRAND_PREFIXES[slug] ?? [slug];
      for (const prefix of prefixes) {
        if (name.startsWith(prefix)) { name = name.slice(prefix.length); break; }
      }
      name = name.replace(/专用$/, "").trim();
      currentModel = { model: name, projects: [], optionalProjects: [] };
      // 不在此 push：flushModel（进入下一节/文末）时统一收口，避免重复
      continue;
    }
    if (line.startsWith("### ")) {
      if (currentModel) {
        flushProject();
        const pname = line.slice(4).trim();
        const existing = currentModel.projects.find((p) => p.name === pname);
        if (existing) {
          // 供应商原文同名项目分块 → 合并进已收项目（方案直接并入）
          mergeInto = existing;
          currentProject = { name: pname, specs: existing.specs };
        } else {
          currentProject = { name: pname, specs: [] };
        }
      }
      continue;
    }
    if (line.startsWith("#### 方案")) {
      if (currentProject) { flushSpec(); currentSpec = {}; }
      continue;
    }
    if (line.startsWith("可选改装项目：")) {
      if (currentModel) {
        currentModel.optionalProjects = line.slice("可选改装项目：".length).split("、").map((s) => s.trim()).filter(Boolean);
      }
      continue;
    }

    // 方案字段
    const m = line.match(/^- ([^：:]+)[：:]\s*(.*)$/);
    if (m && currentProject) {
      const key = m[1].trim();
      const value = m[2].trim();
      if (!currentSpec) currentSpec = {};
      let normKey = null;
      for (const [target, aliases] of Object.entries(KEY_ALIAS)) {
        if (aliases.includes(key)) { normKey = target; break; }
      }
      if (!normKey) { warnings.push(`未知字段「${key}」@ ${fileName} 车型=${currentModel?.model} 项目=${currentProject.name}`); continue; }
      const FIELD = { 材质: "material", 规格: "label", 年款: "year", 备注: "note", 日期: "date", 动力: "dynamics", 编码: "code" };
      if (normKey === "材质" && isPureCode(value)) {
        currentSpec.code = value;
      } else if (normKey === "编码") {
        currentSpec.code = value;
      } else {
        currentSpec[FIELD[normKey]] = value;
      }
      continue;
    }
    // 不属于字段行（如普通文字）→ 忽略但记录
    if (currentProject && currentSpec) {
      warnings.push(`未解析行「${line.slice(0, 40)}」@ ${fileName} 项目=${currentProject.name}`);
    }
  }
  flushModel();

  // 一致性校验：可选项目清单 vs 正文项目名
  const errors = [];
  for (const model of models) {
    const bodyNames = new Set(model.projects.map((p) => p.name));
    if (model.optionalProjects.length > 0) {
      for (const op of model.optionalProjects) {
        if (!bodyNames.has(op)) {
          errors.push(`[${fileName}] 车型「${model.model}」可选清单含正文缺失项目: ${op}`);
        }
      }
      for (const p of model.projects) {
        if (!model.optionalProjects.includes(p.name) && !(ALLOWED_LIST_DRIFT[slug]?.[model.model]?.has(p.name))) {
          errors.push(`[${fileName}] 车型「${model.model}」正文项目不在可选清单: ${p.name}`);
        }
      }
    }
    const seen = new Set();
    for (const p of model.projects) {
      if (seen.has(p.name)) errors.push(`[${fileName}] 车型「${model.model}」重复项目: ${p.name}`);
      seen.add(p.name);
    }
  }

  return { slug, fileName, models, errors, warnings };
}

function tsLiteral(v) {
  return JSON.stringify(v).replace(/\u2028|\u2029/g, "");
}

// 供应商原始资料保留原样；发布到页面的备注去掉无法核实的宣传承诺。
function publishedNote(note) {
  if (note.includes("行业领先外观设计")) {
    return "15.6 英寸 IPS 屏，支持 4G 网络、手机投屏、U 盘视频和氛围灯；安装方式与功能以实车适配和门店核验为准。";
  }
  if (note.includes("开创性设计后排控制副驾屏关闭/打开")) {
    return note.includes("17.3英寸")
      ? "17.3 英寸屏，支持触控、Type-C 投屏与语音控制；安装方式与功能以实车适配和门店核验为准。"
      : "15.6 英寸屏，支持后排控制副驾屏开关、三屏互联与语音控制；功能以实车适配和门店核验为准。";
  }
  return note;
}

function emitTs(data) {
  // slug 可能含连字符（li-auto / land-rover），标识符统一转下划线
  const id = data.slug.replace(/-/g, "_");
  const header = `/**
 * ${data.fileName.replace(".md", "")} 适配库（由 scripts/build-fitment-data.mjs 自动生成，勿手改）
 *
 * 来源：供应商产品资料/车型适配库和文件/${data.fileName}（只读原始资料）
 * 说明：材质/规格/年款来自供应商原文；备注中的宣传承诺已按发布规则清理；code 为供应商编号（页面默认不展示）。
 */
`;

  const modelsTs = data.models.map((model) => {
    const projectsTs = model.projects.map((p) => {
      // 供应商原文同一项目内可能重复出现完全相同的方案块 → 输出层去重（按键序规范化判重，保留首条）
      const canon = (s) => JSON.stringify(Object.fromEntries(Object.entries(s).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))));
      const deduped = [...new Map(p.specs.map((s) => [canon(s), s])).values()];
      const specsTs = deduped.map((s) => {
        const fields = [];
        if (s.label) fields.push(`    label: ${tsLiteral(s.label)}`);
        if (s.material) fields.push(`    material: ${tsLiteral(s.material)}`);
        if (s.year) fields.push(`    year: ${tsLiteral(s.year)}`);
        if (s.note) fields.push(`    note: ${tsLiteral(publishedNote(s.note))}`);
        if (s.date) fields.push(`    date: ${tsLiteral(s.date)}`);
        if (s.dynamics) fields.push(`    dynamics: ${tsLiteral(s.dynamics)}`);
        if (s.code) fields.push(`    code: ${tsLiteral(s.code)}`);
        return `  {
${fields.join(",\n")}
  }`;
      }).join(",\n");
      return `  {
    name: ${tsLiteral(p.name)},
    specs: [
${specsTs}
    ],
  }`;
    }).join(",\n");
    return `  {
    model: ${tsLiteral(model.model)},
    projects: [
${projectsTs}
    ],
  }`;
  }).join(",\n");

  const assert = `
// ---- Runtime 断言（防漂移） ----
(() => {
  const errors: string[] = [];
  const flat = (m: (typeof ${id}Fitment.models)[number]) =>
    m.projects.map((p) => p.name);
  for (const m of ${id}Fitment.models) {
    const names = flat(m);
    if (new Set(names).size !== names.length) {
      errors.push(\`车型「\${m.model}」项目名重复\`);
    }
    for (const p of m.projects) {
      if (p.specs.length < 1) errors.push(\`车型「\${m.model}」项目「\${p.name}」无方案\`);
      const ids = p.specs.map((s, i) => JSON.stringify(s));
      if (new Set(ids).size !== ids.length) errors.push(\`车型「\${m.model}」项目「\${p.name}」方案可区分度不足\`);
    }
  }
  if (errors.length > 0) {
    throw new Error("[fitment] " + errors.join(" | "));
  }
})();

export type ${id}FitmentModel = (typeof ${id}Fitment.models)[number];
export type ${id}FitmentProject = (typeof ${id}Fitment.models)[number]["projects"][number];
export type ${id}FitmentSpec = (typeof ${id}Fitment.models)[number]["projects"][number]["specs"][number];
`;

  return `${header}
export const ${id}Fitment = {
  brand: ${tsLiteral(data.fileName.replace(".md", ""))},
  source: "供应商产品资料/车型适配库和文件/${data.fileName}",
  models: [
${modelsTs}
  ],
} as const;
${assert}
`.trimEnd() + "\n";
}

function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  let totalErrors = 0;
  let totalWarnings = 0;
  for (const [fileName, slug] of Object.entries(BRANDS)) {
    const data = parseFile(fileName);
    if (!data) continue;
    totalErrors += data.errors.length;
    totalWarnings += data.warnings.length;
    console.log(`\n== ${data.fileName} → ${slug} ==`);
    console.log(`  车型节: ${data.models.length}, 项目: ${data.models.reduce((a, m) => a + m.projects.length, 0)}, 方案: ${data.models.reduce((a, m) => a + m.projects.reduce((x, p) => x + p.specs.length, 0), 0)}`);
    if (data.errors.length) console.log(`  一致性错误 ${data.errors.length}:`, data.errors.slice(0, 5).join(" | "));
    if (data.warnings.length) console.log(`  警告 ${data.warnings.length}（未知字段/未解析行）:`, data.warnings.slice(0, 5).join(" | "));
    if (data.errors.length === 0) {
      const ts = emitTs(data);
      writeFileSync(join(OUT_DIR, `${slug}.ts`), ts);
      console.log(`  已写出 src/lib/fitment/${slug}.ts`);
    } else {
      console.log(`  跳过写出（有错误）`);
    }
  }
  console.log(`\n总计：错误 ${totalErrors}，警告 ${totalWarnings}`);
  process.exit(totalErrors === 0 ? 0 : 1);
}

main();
