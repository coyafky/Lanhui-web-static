import type {
  FaqItem,
  FitmentConfig,
  FitmentModel,
  FitmentProject,
  FitmentSpec,
  ProjectConfig,
  ScenarioConfig,
  ServiceFlowConfig,
  VehiclePageConfig,
  VehicleTheme,
} from "@/components/vehicle-page";

/**
 * 品牌系列页共享构建器（2026-10-21，B 方案：品牌聚合页 + TOP 车型深页）
 *
 * 所有新增 19 品牌页面统一从这里取数据派生逻辑：
 *  - 车型深页 config 由适配库 fitment 数据驱动，不手写 projects；
 *  - 项目 summary / suitableFor 只从规格 note / year / dynamics / label / material 提取（供应商原文）；
 *  - 供应商编号 code 一律不进入页面数据；
 *  - 不标价；未收录写「以门店现场检查为准」。
 */

/** 过滤非车型节：无意义款式节 / 通用适配 / 待确认 / 座椅布局与配置变体节 */
export function isExcludedFitmentSection(name: string): boolean {
  if (/^款式\d+$/.test(name)) return true;
  if (name === "通用适配") return true;
  if (name.includes("待确认")) return true;
  if (/原车|低配|高配|MPV|不盖滑道|右呔|右tai|\/适配|二排/.test(name)) return true;
  return false;
}

/** 项目名 → 4 大分类桶（与 ProjectTabs 的归一化口径一致） */
export function mapProjectCategory(name: string): string {
  if (/膜|车衣|护板|底盘|防护|保护/.test(name)) return "新车保护";
  if (/外观|包围|灯|轮毂|拉花|尾翼|机盖|风格/.test(name)) return "外观升级";
  if (/踏板|电动|便利|户外|实用|拓展/.test(name)) return "功能便利";
  if (/脚垫|尾箱|地板|座垫|方向盘|座椅|桌板|电视|娱乐|氛围|屏幕|隔音|养护|内饰|座舱|舒适/.test(name)) {
    return "内饰座舱";
  }
  return "功能便利";
}

const SCENARIO_DESC: Record<string, string> = {
  新车保护: "车衣、隔热膜、底盘护板等保护类项目",
  外观升级: "包围、轮毂、灯光等外观升级项目",
  内饰座舱: "脚垫、尾箱垫、座舱舒适与娱乐项目",
  功能便利: "电动踏板、便利功能类项目",
};

type RawFitmentProject = {
  name: string;
  specs: readonly FitmentSpec[];
};

type RawFitmentModel = {
  model: string;
  projects: readonly RawFitmentProject[];
};

type FitmentSource = {
  models: readonly RawFitmentModel[];
};

export type ModelPageConfigInput = {
  brandSlug: string;
  brandName: string;
  modelDisplay: string;
  theme: VehicleTheme;
  fitment: FitmentSource;
  /** 精确收录的节名（去品牌前缀后的原文节名） */
  includeSections?: readonly string[];
  /** 前缀收录：节名以该前缀开头即并入（如 GL8 → GL8 25S / GL8 652T） */
  sectionPrefix?: string;
  faq: FaqItem[];
};

/** 同一项目跨节合并方案（同名项目合流；内部用可变结构收口） */
type MutableProject = { name: string; specs: FitmentSpec[] };

function mergeSections(sections: RawFitmentModel[]): MutableProject[] {
  const merged = new Map<string, MutableProject>();
  for (const section of sections) {
    for (const p of section.projects) {
      const existing = merged.get(p.name);
      if (existing) {
        existing.specs.push(...p.specs);
      } else {
        merged.set(p.name, { name: p.name, specs: [...p.specs] });
      }
    }
  }
  return [...merged.values()];
}

/** 从规格原文提取摘要：优先 note，缺省用 label/material 拼接；截断防过长 */
function summarize(project: { name: string; specs: readonly FitmentSpec[] }): string {
  const notes = project.specs.map((s) => s.note).filter((n): n is string => Boolean(n));
  const summary = notes[0] ?? project.specs[0]?.label ?? project.specs[0]?.material ?? "";
  return summary.length > 120 ? `${summary.slice(0, 120)}…` : summary;
}

/** 从规格原文提取适配标签：年款 + 动力，去重截 4 */
function suitableForOf(project: { name: string; specs: readonly FitmentSpec[] }): string[] {
  const chips: string[] = [];
  for (const s of project.specs) {
    if (s.year && !chips.includes(s.year) && chips.length < 4) chips.push(s.year);
    if (s.dynamics && !chips.includes(s.dynamics) && chips.length < 4) chips.push(s.dynamics);
  }
  return chips;
}

function toProjects(modelSlug: string, sections: RawFitmentModel[]): ProjectConfig[] {
  return mergeSections(sections).map((p, i) => ({
    id: `${modelSlug}-${i + 1}`,
    name: p.name,
    summary: summarize(p),
    suitableFor: suitableForOf(p),
    category: mapProjectCategory(p.name),
    imageStatus: "product-preview" as const,
    imagePublicPath: null,
    imageAlt: p.name,
  }));
}

function toScenarios(projects: ProjectConfig[]): ScenarioConfig[] {
  const buckets = ["新车保护", "外观升级", "内饰座舱", "功能便利"];
  return buckets
    .map((name) => ({
      id: name === "新车保护" ? "protection" : name === "外观升级" ? "appearance" : name === "内饰座舱" ? "interior" : "function",
      name,
      description: SCENARIO_DESC[name],
      projectIds: projects.filter((p) => p.category === name).map((p) => p.id),
    }))
    .filter((s) => s.projectIds.length > 0);
}

const GENERIC_SERVICE_FLOW: ServiceFlowConfig = {
  title: "服务流程",
  steps: [
    { order: 1, title: "到店评估", description: "带车到店，按车型年款与配置确认可做的适配项目。" },
    { order: 2, title: "配置对表", description: "对照适配库年款、动力与结构说明逐项核对。" },
    { order: 3, title: "施工安装", description: "按标准流程施工，随车件按原厂规范操作。" },
    { order: 4, title: "验收交付", description: "现场验收，确认功能与细节后交付。" },
  ],
};

/** 车型深页 FitmentQuickCheck 配置：该车型节 + 年份/动力变体节，同名项目合并 */
export function buildFitmentConfig(
  brandName: string,
  modelDisplay: string,
  fitment: FitmentSource,
  includeSections: readonly string[] = [],
  sectionPrefix?: string,
): FitmentConfig {
  const matched = fitment.models.filter(
    (m) =>
      !isExcludedFitmentSection(m.model) &&
      (includeSections.includes(m.model) || (sectionPrefix ? m.model.startsWith(sectionPrefix) : false)),
  );
  const models = matched.map((m): FitmentModel => ({
    model: m.model,
    projects: m.projects.map((p): FitmentProject => ({
      name: p.name,
      specs: p.specs.map((s): FitmentSpec => ({
        label: s.label,
        material: s.material,
        year: s.year,
        note: s.note,
        date: s.date,
        dynamics: s.dynamics,
      })),
    })),
  }));
  return {
    heading: `${brandName}${modelDisplay} 适配速查：你的配置能装哪些项目？`,
    models,
  };
}

/** 车型深页 VehiclePageConfig：数据全部来自适配库，不手写项目 */
export function buildModelPageConfig(input: ModelPageConfigInput): VehiclePageConfig {
  const { brandSlug, brandName, modelDisplay, theme, fitment, includeSections = [], sectionPrefix, faq } = input;
  const matched = fitment.models.filter(
    (m) =>
      !isExcludedFitmentSection(m.model) &&
      (includeSections.includes(m.model) || (sectionPrefix ? m.model.startsWith(sectionPrefix) : false)),
  );
  const projects = toProjects(brandSlug, matched);
  const projectNames = projects.map((p) => p.name);
  const nameList =
    projectNames.length <= 5
      ? projectNames.join("、")
      : `${projectNames.slice(0, 5).join("、")}等 ${projectNames.length} 项`;

  return {
    theme,
    hero: {
      badge: `${brandName}${modelDisplay} · 适配速查`,
      title: `${brandName}${modelDisplay} 适配速查`,
      subtitle: `${projects.length} 项适配件 · 数据来自蓝辉供应商适配库`,
      description: `蓝辉轻改提供${brandName} ${modelDisplay}专车适配参考，覆盖${nameList}。年款、动力与结构说明以供应商适配库原文为准，未收录的配置以门店现场检查为准。`,
      stats: { totalProjects: projects.length },
    },
    projects,
    scenarios: toScenarios(projects),
    serviceFlow: GENERIC_SERVICE_FLOW,
    faq,
    fitment: buildFitmentConfig(brandName, modelDisplay, fitment, includeSections, sectionPrefix),
  };
}

/** 品牌页车型网格数据：按「主节名精确匹配」统计项目（变体并入车型深页，不在品牌页重复计数） */
export function buildBrandGridModels(
  fitment: FitmentSource,
  grid: readonly { name: string; display?: string; slug?: string }[],
): {
  name: string;
  display: string;
  slug?: string;
  projectCount: number;
  projectNames: string[];
}[] {
  const byName = new Map<string, RawFitmentModel>();
  for (const m of fitment.models) {
    if (!byName.has(m.model)) byName.set(m.model, m);
  }
  return grid.map((g) => {
    const section = byName.get(g.name);
    const names = section?.projects.map((p) => p.name) ?? [];
    return {
      name: g.name,
      display: g.display ?? g.name,
      slug: g.slug,
      projectCount: names.length,
      projectNames: names,
    };
  });
}

/** 品牌页 FitmentQuickCheck 全车型节（过滤无意义节与配置变体节，保留年份/动力变体节原文） */
export function buildBrandFitmentConfig(brandName: string, fitment: FitmentSource): FitmentConfig {
  const modelsByName = new Map<string, FitmentModel>();
  for (const m of fitment.models) {
    if (isExcludedFitmentSection(m.model)) continue;
    const projects = m.projects.map((p): FitmentProject => ({
      name: p.name,
      specs: p.specs.map((s): FitmentSpec => ({
        label: s.label,
        material: s.material,
        year: s.year,
        note: s.note,
        date: s.date,
        dynamics: s.dynamics,
      })),
    }));
    const existing = modelsByName.get(m.model);
    if (existing) existing.projects.push(...projects);
    else modelsByName.set(m.model, { model: m.model, projects });
  }
  return {
    heading: `${brandName} 适配速查：你的车型能装哪些项目？`,
    models: [...modelsByName.values()],
    groupByModel: true,
  };
}
