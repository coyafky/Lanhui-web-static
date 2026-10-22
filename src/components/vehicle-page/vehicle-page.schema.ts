import { z } from "zod";

export const ThemeSchema = z.enum(["orange", "cyan", "amber", "blue", "green", "red", "neutral"]);
export type VehicleTheme = z.infer<typeof ThemeSchema>;

export const HeroImageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
});
export type HeroImage = z.infer<typeof HeroImageSchema>;

export const BreadcrumbItemSchema = z.object({
  label: z.string(),
  href: z.string().optional(),
});
export type BreadcrumbItemConfig = z.infer<typeof BreadcrumbItemSchema>;

export const HeroStatsSchema = z.object({
  totalProjects: z.number(),
  totalScenarios: z.number().optional(),
  totalModels: z.number().optional(),
});
export type HeroStats = z.infer<typeof HeroStatsSchema>;

export const HeroConfigSchema = z.object({
  badge: z.string(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  heroImage: HeroImageSchema.optional(),
  stats: HeroStatsSchema.optional(),
});
export type HeroConfig = z.infer<typeof HeroConfigSchema>;

export const ProjectConfigSchema = z.object({
  id: z.string(),
  name: z.string(),
  summary: z.string(),
  suitableFor: z.array(z.string()),
  caution: z.string().optional(),
  category: z.string(),
  imageStatus: z.enum(["matched", "product-preview", "pending-review", "missing"]).optional(),
  imagePublicPath: z.string().nullable().optional(),
  imageAlt: z.string().optional(),
  imageWidth: z.number().nullable().optional(),
  imageHeight: z.number().nullable().optional(),
  /** 图注：图片下方可见小字（出站文本，不能只放 alt） */
  imageCaption: z.string().optional(),
  /** 车型 badge：SU7 / YU7 / 双车型，卡片名称行小 chip */
  modelBadge: z.enum(["SU7", "YU7", "双车型"]).optional(),
});
export type ProjectConfig = z.infer<typeof ProjectConfigSchema>;

/**
 * 材质对比块（Material Comparison）单行：材质 | 质感 | 打理 | 耐用 | 典型项目（素材）
 */
export const MaterialRowSchema = z.object({
  material: z.string(),
  texture: z.string(),
  care: z.string(),
  durability: z.string(),
  typicalProjects: z.string(),
});
export type MaterialRow = z.infer<typeof MaterialRowSchema>;

export const MaterialComparisonConfigSchema = z.object({
  heading: z.string(),
  intro: z.string().optional(),
  rows: z.array(MaterialRowSchema),
});
export type MaterialComparisonConfig = z.infer<typeof MaterialComparisonConfigSchema>;

/**
 * 合规告知块（Compliance Notice）单条：标题 + 说明
 */
export const ComplianceItemSchema = z.object({
  title: z.string(),
  description: z.string(),
});
export type ComplianceItem = z.infer<typeof ComplianceItemSchema>;

export const ComplianceConfigSchema = z.object({
  heading: z.string(),
  intro: z.string().optional(),
  items: z.array(ComplianceItemSchema),
});
export type ComplianceConfig = z.infer<typeof ComplianceConfigSchema>;

export const ScenarioConfigSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  projectIds: z.array(z.string()),
});
export type ScenarioConfig = z.infer<typeof ScenarioConfigSchema>;

export const ServiceFlowStepSchema = z.object({
  order: z.number(),
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
});
export type ServiceFlowStep = z.infer<typeof ServiceFlowStepSchema>;

export const ServiceFlowConfigSchema = z.object({
  title: z.string().optional(),
  steps: z.array(ServiceFlowStepSchema),
});
export type ServiceFlowConfig = z.infer<typeof ServiceFlowConfigSchema>;

export const FaqItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
});
export type FaqItem = z.infer<typeof FaqItemSchema>;

export const BundleConfigSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  items: z.array(z.string()).optional(),
});
export type BundleConfig = z.infer<typeof BundleConfigSchema>;

/**
 * 适配速查（Fitment Quick-Check）增量块
 * 数据来自 scripts/build-fitment-data.mjs 生成的 src/lib/fitment/<品牌>.ts（供应商适配库）。
 * code 为供应商编号，页面默认不展示（脱敏）。
 */
export const FitmentSpecSchema = z.object({
  label: z.string().optional(),
  material: z.string().optional(),
  year: z.string().optional(),
  note: z.string().optional(),
  date: z.string().optional(),
  dynamics: z.string().optional(),
  code: z.string().optional(),
});
export type FitmentSpec = z.infer<typeof FitmentSpecSchema>;

export const FitmentProjectSchema = z.object({
  name: z.string(),
  specs: z.array(FitmentSpecSchema),
});
export type FitmentProject = z.infer<typeof FitmentProjectSchema>;

export const FitmentModelSchema = z.object({
  model: z.string(),
  projects: z.array(FitmentProjectSchema),
});
export type FitmentModel = z.infer<typeof FitmentModelSchema>;

export const FitmentConfigSchema = z.object({
  /** 车型标题，问答式 H2 用，如「小米 SU7 哪些配置能装底盘护板？」 */
  heading: z.string().optional(),
  models: z.array(FitmentModelSchema),
  /** 品牌页多车型场景：为 true 时按车型分组渲染（避免跨车型同名项目串方案）；默认合并渲染 */
  groupByModel: z.boolean().optional(),
});
export type FitmentConfig = z.infer<typeof FitmentConfigSchema>;

export const VehiclePageConfigSchema = z.object({
  theme: ThemeSchema,
  breadcrumbs: z.array(BreadcrumbItemSchema).optional(),
  hero: HeroConfigSchema,
  projects: z.array(ProjectConfigSchema),
  /** 项目区 H2（问答式文案），缺省回退「升级项目」 */
  projectsHeading: z.string().optional(),
  /** 材质对比块（表格），未配置则不渲染 */
  materialComparison: MaterialComparisonConfigSchema.optional(),
  scenarios: z.array(ScenarioConfigSchema),
  serviceFlow: ServiceFlowConfigSchema,
  faq: z.array(FaqItemSchema),
  bundles: z.array(BundleConfigSchema).optional(),
  fitment: FitmentConfigSchema.optional(),
  /** 合规告知块，未配置则不渲染 */
  compliance: ComplianceConfigSchema.optional(),
});
export type VehiclePageConfig = z.infer<typeof VehiclePageConfigSchema>;
