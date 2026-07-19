/**
 * 问界系列专题页数据
 *
 * 结构（2026-07-15 重构）：
 *   - wenjieBaseServices        6 类基础服务（全系可咨询，链接到对应产品页）
 *   - wenjieScenarioEntries     4 个高频场景入口（场景 → 推荐服务）
 *   - wenjieSeriesFeaturedProjects / wenjieSeriesOptionalProjects
 *     34 个升级项目（M6/M7/M8 子页仍依赖；一级页收进折叠清单）
 *   - wenjieSeriesServiceSteps  6 步服务流程（含方案边界与功能复检）
 *   - wenjieSeriesFaq           8 条 FAQ（具体回答，不用"需到店确认"式空洞话术）
 *   - wenjieDouyinHighlights    抖音案例入口 3 项
 *
 * 项目数据来源 PRD：docs/PRD/product/WENJIE_SERIES_UPGRADE_PRD_2026-06-24.md
 * 命名差异（Architect §1.3 已确认）：
 *   - 一级 PRD §9.1 中 "改色膜" 保留原名
 *   - 一级 PRD §9.1 中 "挡泥板内衬" 保留原名
 */

import {
  buildWenjieProductPreviewImage,
  buildWenjieMissingPreviewImage,
  type WenjiePreviewImage,
  type WenjiePreviewImageStatus,
} from "./wenjie-preview-images";

export type WenjieSeriesUpgradePriority = "featured" | "optional";

export type WenjieSeriesUpgradeCategory =
  | "paint_protection"
  | "film_style"
  | "chassis_protection"
  | "rear_cabin"
  | "electric_convenience"
  | "infotainment"
  | "exterior_parts"
  | "outdoor_accessory"
  | "cabin_comfort"
  | "noise_sealing";

export type WenjieSeriesImageStatus = WenjiePreviewImageStatus;

export type WenjieSeriesApplicableModel = "M6" | "M7" | "M8";

export type WenjieSeriesUpgradeProject = {
  /** 稳定 slug，例 "wenjie-series-paint-film" */
  key: string;
  name: string;
  category: WenjieSeriesUpgradeCategory;
  priority: WenjieSeriesUpgradePriority;
  /** featured: 1..10; optional: 11..34 */
  order: number;
  summary: string;
  applicableModels?: readonly WenjieSeriesApplicableModel[];
  imageStatus: WenjieSeriesImageStatus;
  image: WenjiePreviewImage;
};

type WenjieSeriesUpgradeProjectRow = Omit<WenjieSeriesUpgradeProject, "image">;

function withWenjieSeriesPreviewImages(
  projects: readonly WenjieSeriesUpgradeProjectRow[],
): readonly WenjieSeriesUpgradeProject[] {
  return projects.map((project) => {
    if (project.imageStatus === "missing") {
      return {
        ...project,
        ...buildWenjieMissingPreviewImage(project.name),
      };
    }
    return {
      ...project,
      ...buildWenjieProductPreviewImage(project.key, project.name),
    };
  });
}

// ---- §7.1 热门推荐 10 项 ----
const wenjieSeriesFeaturedProjectRows = [
  {
    key: "wenjie-series-paint-film",
    name: "隐形车衣",
    category: "paint_protection",
    priority: "featured",
    order: 1,
    summary: "漆面保护、抗日常划痕、新车保护感",
    imageStatus: "product-preview",
  },
  {
    key: "wenjie-series-window-film",
    name: "隔热膜",
    category: "film_style",
    priority: "featured",
    order: 2,
    summary: "隔热、防晒、隐私、驾乘舒适",
    imageStatus: "product-preview",
  },
  {
    key: "wenjie-series-rear-aluminum-floor",
    name: "二排铝地板",
    category: "rear_cabin",
    priority: "featured",
    order: 3,
    summary: "二排空间保护、易清洁、后排质感提升",
    imageStatus: "product-preview",
  },
  {
    key: "wenjie-series-skid-plate",
    name: "底盘护板",
    category: "chassis_protection",
    priority: "featured",
    order: 4,
    summary: "应对路面剐蹭、碎石和底部防护",
    imageStatus: "product-preview",
  },
  {
    key: "wenjie-series-electric-step",
    name: "电动踏板",
    category: "electric_convenience",
    priority: "featured",
    order: 5,
    summary: "家庭成员上下车便利，兼顾老人和儿童",
    imageStatus: "product-preview",
  },
  {
    key: "wenjie-series-rear-table",
    name: "小桌板",
    category: "rear_cabin",
    priority: "featured",
    order: 6,
    summary: "后排办公、用餐、儿童使用场景",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-bug-guard",
    name: "防虫网",
    category: "chassis_protection",
    priority: "featured",
    order: 7,
    summary: "减少虫石杂物进入关键散热/进风区域",
    imageStatus: "product-preview",
  },
  {
    key: "wenjie-series-door-sill",
    name: "门槛条",
    category: "exterior_parts",
    priority: "featured",
    order: 8,
    summary: "上下车高频区域防刮、防踩踏磨损",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-screen-protector",
    name: "钢化膜",
    category: "infotainment",
    priority: "featured",
    order: 9,
    summary: "中控/娱乐屏幕防刮保护",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-interior-coating",
    name: "内饰镀膜",
    category: "cabin_comfort",
    priority: "featured",
    order: 10,
    summary: "内饰表面防污、易清洁、保持质感",
    imageStatus: "missing",
  },
] as const satisfies readonly WenjieSeriesUpgradeProjectRow[];

export const wenjieSeriesFeaturedProjects = withWenjieSeriesPreviewImages(
  wenjieSeriesFeaturedProjectRows,
);

// ---- §9.1 更多选择 24 项 ----
const wenjieSeriesOptionalProjectRows = [
  {
    key: "wenjie-series-hud",
    name: "HUD抬头显示器",
    category: "infotainment",
    priority: "optional",
    order: 11,
    summary: "智能影音",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-starlight-film",
    name: "星空膜",
    category: "film_style",
    priority: "optional",
    order: 12,
    summary: "玻璃膜/座舱氛围",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-door-sound-insulation",
    name: "四门隔音",
    category: "noise_sealing",
    priority: "optional",
    order: 13,
    summary: "隔音升级",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-mud-flap",
    name: "挡泥板",
    category: "exterior_parts",
    priority: "optional",
    order: 14,
    summary: "防护配件",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-rear-entertainment",
    name: "后排娱乐电视",
    category: "rear_cabin",
    priority: "optional",
    order: 15,
    summary: "后排娱乐",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-rear-wing",
    name: "运动尾翼",
    category: "exterior_parts",
    priority: "optional",
    order: 16,
    summary: "外观套件",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-engine-hood",
    name: "发动机盖",
    category: "exterior_parts",
    priority: "optional",
    order: 17,
    summary: "外观件",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-mud-flap-liner",
    name: "挡泥板内衬",
    category: "exterior_parts",
    priority: "optional",
    order: 18,
    summary: "防护配件",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-ambient-light",
    name: "氛围灯",
    category: "cabin_comfort",
    priority: "optional",
    order: 19,
    summary: "座舱氛围",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-wheels",
    name: "轮毂",
    category: "exterior_parts",
    priority: "optional",
    order: 20,
    summary: "外观升级",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-stream-mirror",
    name: "流媒体后视镜",
    category: "infotainment",
    priority: "optional",
    order: 21,
    summary: "智能影音",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-license-frame",
    name: "牌照框",
    category: "exterior_parts",
    priority: "optional",
    order: 22,
    summary: "外观小件",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-electric-door",
    name: "电动门",
    category: "electric_convenience",
    priority: "optional",
    order: 23,
    summary: "电动便利",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-sport-kit",
    name: "运动包围",
    category: "exterior_parts",
    priority: "optional",
    order: 24,
    summary: "外观套件",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-door-seal",
    name: "四门密封条",
    category: "noise_sealing",
    priority: "optional",
    order: 25,
    summary: "隔音/密封",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-brake-caliper",
    name: "刹车卡钳",
    category: "exterior_parts",
    priority: "optional",
    order: 26,
    summary: "外观/制动视觉",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-sway-bar",
    name: "平衡杆",
    category: "chassis_protection",
    priority: "optional",
    order: 27,
    summary: "操控/底盘",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-color-film",
    name: "改色膜",
    category: "film_style",
    priority: "optional",
    order: 28,
    summary: "外观个性",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-roof-platform",
    name: "车顶平台套件",
    category: "outdoor_accessory",
    priority: "optional",
    order: 29,
    summary: "户外/露营",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-interior-silicone",
    name: "内饰硅胶件",
    category: "cabin_comfort",
    priority: "optional",
    order: 30,
    summary: "座舱保护",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-starlight-roof",
    name: "星空顶",
    category: "cabin_comfort",
    priority: "optional",
    order: 31,
    summary: "座舱氛围",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-rotating-seat",
    name: "旋转座椅",
    category: "rear_cabin",
    priority: "optional",
    order: 32,
    summary: "后排舒适",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-trunk-mat",
    name: "尾箱垫",
    category: "rear_cabin",
    priority: "optional",
    order: 33,
    summary: "尾箱防护",
    imageStatus: "missing",
  },
  {
    key: "wenjie-series-leg-rest",
    name: "腿托",
    category: "rear_cabin",
    priority: "optional",
    order: 34,
    summary: "后排舒适",
    imageStatus: "missing",
  },
] as const satisfies readonly WenjieSeriesUpgradeProjectRow[];

export const wenjieSeriesOptionalProjects = withWenjieSeriesPreviewImages(
  wenjieSeriesOptionalProjectRows,
);

// ---- 基础服务（6 类，全系问界均可咨询）----

export type WenjieBaseServiceId =
  | "car-film"
  | "wheels"
  | "electric-step"
  | "flooring"
  | "floor-mats"
  | "car-care";

export type WenjieBaseServiceSubLink = {
  label: string;
  href: string;
};

export type WenjieBaseService = {
  id: WenjieBaseServiceId;
  iconName: string;
  title: string;
  /** 解决什么 —— 从车主痛点出发 */
  painPoint: string;
  /** 适合谁 */
  suitableFor: string;
  /** 对应产品页 */
  href: string;
  /** 车膜类含 3 个子入口 */
  subLinks?: readonly WenjieBaseServiceSubLink[];
};

export const wenjieBaseServices: readonly WenjieBaseService[] = [
  {
    id: "car-film",
    iconName: "Shield",
    title: "车膜类",
    painPoint:
      "新车担心石子、树枝和日常剐蹭留痕；夏季暴晒、前挡反光和后排隐私也是高频困扰。",
    suitableFor: "新车车主、日晒通勤和注重漆面状态的用户",
    href: "/product/ppf",
    subLinks: [
      { label: "隐形车衣", href: "/product/ppf" },
      { label: "隔热膜", href: "/product/window-film" },
      { label: "改色膜", href: "/product/color-film" },
    ],
  },
  {
    id: "wheels",
    iconName: "CircleDot",
    title: "轮毂升级",
    painPoint:
      "想提升整车姿态，又担心尺寸、载荷、刹车间隙和胎压监测能不能对得上。",
    suitableFor: "关注外观与姿态、希望先确认适配再决定的车主",
    href: "/product/wheels",
  },
  {
    id: "electric-step",
    iconName: "Footprints",
    title: "电动踏板",
    painPoint:
      "老人、儿童上下车吃力；同时关心离地间隙、异响和伸缩机构的长期可靠性。",
    suitableFor: "家庭用户、常载老人儿童的问界 SUV 车主",
    href: "/product/electric-steps",
  },
  {
    id: "flooring",
    iconName: "Layers",
    title: "地板总成",
    painPoint:
      "孩子零食、雨天泥水、滑轨积灰，原车织物地毯和座椅滑轨周围难彻底清理。",
    suitableFor: "后排高频使用的家庭和露营用户",
    href: "/product/flooring",
  },
  {
    id: "floor-mats",
    iconName: "Car",
    title: "专车脚垫",
    painPoint:
      "需要易清洁，也担心脚垫移位、翘边或干涉踏板，影响驾驶安全。",
    suitableFor: "所有日常通勤车主，尤其雨季和带娃场景",
    href: "/product/floor-mats",
  },
  {
    id: "car-care",
    iconName: "Sparkles",
    title: "洗美养护",
    painPoint:
      "普通洗车难处理门缝、轮毂、玻璃油膜、座椅缝和内饰异味，越攒越难清。",
    suitableFor: "希望定期深度整理车辆状态的车主",
    href: "/product/car-care",
  },
] as const;

// ---- 场景选择器（4 个高频入口）----

export type WenjieScenarioEntryId =
  | "new-car"
  | "family"
  | "exterior"
  | "daily-care";

export type WenjieScenarioEntry = {
  id: WenjieScenarioEntryId;
  iconName: string;
  title: string;
  description: string;
  /** 关联的基础服务 */
  serviceIds: readonly WenjieBaseServiceId[];
  /** 推荐组合一句话 */
  recommendation: string;
};

export const wenjieScenarioEntries: readonly WenjieScenarioEntry[] = [
  {
    id: "new-car",
    iconName: "ShieldCheck",
    title: "新车保护",
    description: "刚提车，想把基础防护一次做齐",
    serviceIds: ["car-film", "floor-mats", "car-care"],
    recommendation:
      "车衣或隔热膜 + 专车脚垫 + 基础洗美，交付初期先把高频磨损位保护起来。",
  },
  {
    id: "family",
    iconName: "Users",
    title: "家庭乘坐",
    description: "常载老人儿童，后排使用频率高",
    serviceIds: ["electric-step", "flooring", "floor-mats", "car-care"],
    recommendation:
      "电动踏板 + 地板总成 + 脚垫 + 内饰清洁，围绕上下车便利和后排好收拾。",
  },
  {
    id: "exterior",
    iconName: "Palette",
    title: "外观升级",
    description: "想让整车姿态和辨识度更强",
    serviceIds: ["car-film", "wheels", "car-care"],
    recommendation:
      "改色膜 + 轮毂 + 漆面养护，轮毂尺寸与适配先确认再决定。",
  },
  {
    id: "daily-care",
    iconName: "Droplets",
    title: "日常养护",
    description: "不改装，只想把车况维持在好状态",
    serviceIds: ["car-care", "floor-mats"],
    recommendation:
      "精洗 + 内饰清洁 + 玻璃油膜和轮毂维护，按周期保持车况。",
  },
] as const;

// ---- 抖音案例入口 ----

export type WenjieDouyinHighlight = {
  iconName: string;
  label: string;
};

export const wenjieDouyinHighlights: readonly WenjieDouyinHighlight[] = [
  { iconName: "Play", label: "问界施工过程实拍" },
  { iconName: "Layers", label: "踏板与地板安装细节" },
  { iconName: "Palette", label: "车膜颜色与效果参考" },
] as const;

// ---- 6 步服务流程 ----
export type WenjieSeriesServiceStep = {
  step: number;
  title: string;
  description: string;
};

export const wenjieSeriesServiceSteps: readonly WenjieSeriesServiceStep[] = [
  {
    step: 1,
    title: "车型核对",
    description:
      "确认问界车型、年款、版本和配置差异，涉及传感器、线束和座椅结构的项目提前标记",
  },
  {
    step: 2,
    title: "方案与边界确认",
    description:
      "明确项目组合、是否拆装打孔、对原车结构的影响范围，先确认再报价，不盲目叠加项目",
  },
  {
    step: 3,
    title: "到店评估",
    description: "现场复核安装位置、接口、材料和工期，与线上初判不一致时当面说明",
  },
  {
    step: 4,
    title: "施工与保护",
    description: "按项目标准施工，全程对漆面、内饰和线束做遮蔽保护",
  },
  {
    step: 5,
    title: "功能复检",
    description: "逐项检查外观、装配和原车功能（座椅滑动、踏板伸缩、传感器等）",
  },
  {
    step: 6,
    title: "交付与售后",
    description: "交付施工记录和使用注意事项，异响、松动等问题提供复检处理",
  },
] as const;

// ---- FAQ ----
export type WenjieSeriesFaqItem = {
  question: string;
  answer: string;
};

export const wenjieSeriesFaq: readonly WenjieSeriesFaqItem[] = [
  {
    question: "是否所有问界车型都能安装？",
    answer:
      "不同年款和配置在传感器、线束、座椅和滑轨结构上存在差异。发来行驶证车型、年款、配置和相关部位照片，可以先做线上初步确认，再决定是否到店。",
  },
  {
    question: "新车最推荐先做哪些项目？",
    answer:
      "优先解决高频磨损和暴晒：车衣或隔热膜、专车脚垫、基础洗美。其余项目建议用一段时间后按实际需求再加，不需要的不建议做。",
  },
  {
    question: "家庭用户最常关注哪些项目？",
    answer:
      "电动踏板（老人儿童上下车）、地板总成（后排好收拾）、专车脚垫和内饰清洁。涉及座椅和滑轨结构的项目需要按车型确认。",
  },
  {
    question: "可以只做单个项目吗？",
    answer: "可以。页面组合只是选择参考，最终按你的车型和实际需求确定，不捆绑销售。",
  },
  {
    question: "会影响原车质保吗？",
    answer:
      "施工前会明确告知项目是否涉及拆装、打孔、线路或结构改动，以及可能的影响范围；你确认后才施工。最终以具体项目和车辆情况为准。",
  },
  {
    question: "工期大概多久？",
    answer:
      "车膜类通常 1–3 天；踏板、地板等安装类通常半天到 1 天；洗美养护 2–4 小时。具体受车型结构和项目组合影响，确认方案时同步告知。",
  },
  {
    question: "报价受什么影响？",
    answer:
      "主要是车型尺寸、材料版本和项目组合。先确认车型与方案再给报价，不在确认前给模糊区间。",
  },
  {
    question: "售后包含什么？",
    answer:
      "交付时提供施工记录和维护建议；安装类项目出现异响、松动、翘边等问题可回店复检处理，各项目的质保范围在确认方案时书面告知。",
  },
] as const;
