/**
 * 极氪一级页数据（2026-07-15 重构）
 *
 * 结构（复用 wenjie-series-upgrade-projects 的基础服务模式）：
 *   - zeekrBaseServices        6 类基础服务（全系可咨询，链接到对应产品页）
 *   - zeekrSeriesServiceSteps  6 步服务流程（含方案边界与功能复检）
 *   - zeekrSeriesFaq           8 条 FAQ（具体回答，不用"需到店确认"式空洞话术）
 *   - zeekrDouyinHighlights    抖音案例入口 3 项
 *   - ZEEKR_MODEL_COPY         9X / 8X 车型入口文案
 *
 * 23 款配件数据仍在 src/lib/zeekr-products.ts（CI 脚本依赖，不迁移）。
 */

// ---- 基础服务（6 类，全系极氪均可咨询）----

export type ZeekrBaseServiceId =
  | "car-film"
  | "wheels"
  | "electric-step"
  | "flooring"
  | "floor-mats"
  | "car-care";

export type ZeekrBaseServiceSubLink = {
  label: string;
  href: string;
};

export type ZeekrBaseService = {
  id: ZeekrBaseServiceId;
  iconName: string;
  title: string;
  /** 解决什么 —— 从极氪车主痛点出发 */
  painPoint: string;
  /** 适合谁 */
  suitableFor: string;
  /** 对应产品页 */
  href: string;
  /** 车膜类含 3 个子入口 */
  subLinks?: readonly ZeekrBaseServiceSubLink[];
};

export const zeekrBaseServices: readonly ZeekrBaseService[] = [
  {
    id: "car-film",
    iconName: "Shield",
    title: "车膜类",
    painPoint:
      "新车担心石子和日常剐蹭留痕；夏季暴晒、前挡反光和后排隐私是极氪车主的高频困扰。",
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
      "想提升整车姿态，但尺寸、孔距、ET、载荷、卡钳空间和胎压系统都要逐项确认，不能只看样式。",
    suitableFor: "关注外观与姿态、希望先确认数据适配再决定的车主",
    href: "/product/wheels",
  },
  {
    id: "electric-step",
    iconName: "Footprints",
    title: "电动踏板",
    painPoint:
      "老人、儿童上下车吃力。踏板主要面向适配的高车身车型，不是极氪全系通用项目，先按车型确认。",
    suitableFor: "常载老人儿童、车身较高的极氪 SUV / MPV 车主",
    href: "/product/electric-steps",
  },
  {
    id: "flooring",
    iconName: "Layers",
    title: "地板总成",
    painPoint:
      "滑轨积灰、后排和尾箱难彻底清理；座椅布局、滑轨结构和固定点需要专车确认。",
    suitableFor: "后排与尾箱高频使用的家庭和露营用户",
    href: "/product/flooring",
  },
  {
    id: "floor-mats",
    iconName: "Car",
    title: "专车脚垫",
    painPoint:
      "需要易清洁，也担心脚垫移位、翘边或干涉踏板区域，影响驾驶安全。",
    suitableFor: "所有日常通勤车主，尤其雨季和带娃场景",
    href: "/product/floor-mats",
  },
  {
    id: "car-care",
    iconName: "Sparkles",
    title: "洗美养护",
    painPoint:
      "轮毂刹车粉尘、玻璃油膜、门缝积灰和内饰高频使用痕迹，普通洗车处理不到位。",
    suitableFor: "希望定期深度整理车辆状态的车主",
    href: "/product/car-care",
  },
] as const;

// ---- 抖音案例入口 ----

export type ZeekrDouyinHighlight = {
  iconName: string;
  label: string;
};

export const zeekrDouyinHighlights: readonly ZeekrDouyinHighlight[] = [
  { iconName: "Play", label: "极氪施工过程实拍" },
  { iconName: "Layers", label: "地板与内饰安装细节" },
  { iconName: "Palette", label: "车膜颜色与效果参考" },
] as const;

// ---- 6 步服务流程 ----

export type ZeekrSeriesServiceStep = {
  step: number;
  title: string;
  description: string;
};

export const zeekrSeriesServiceSteps: readonly ZeekrSeriesServiceStep[] = [
  {
    step: 1,
    title: "车型核对",
    description:
      "确认极氪车型、年款、版本和配置，同步核对轮毂数据、座椅结构和原车状态",
  },
  {
    step: 2,
    title: "方案与边界确认",
    description:
      "先确认使用痛点、预算和不希望改动的范围，再定项目组合；先确认再报价，不盲目叠加项目",
  },
  {
    step: 3,
    title: "到店评估",
    description:
      "现场复核安装位置、接口和材料，说明拆装、打孔、线路和传感器的影响范围",
  },
  {
    step: 4,
    title: "施工与保护",
    description: "按项目标准施工，全程对漆面、内饰和线束做遮蔽保护",
  },
  {
    step: 5,
    title: "功能复检",
    description:
      "逐项检查外观、装配和原车功能，安装类项目做扭矩或固定检查",
  },
  {
    step: 6,
    title: "交付与售后",
    description: "交付施工记录和使用注意事项，异响、松动等问题提供复检处理",
  },
] as const;

// ---- FAQ ----

export type ZeekrSeriesFaqItem = {
  question: string;
  answer: string;
};

export const zeekrSeriesFaq: readonly ZeekrSeriesFaqItem[] = [
  {
    question: "是否所有极氪车型都能做这些项目？",
    answer:
      "极氪车型跨度大，轿车、SUV 和 MPV 在车身结构、座椅布局和传感器上差异明显。发来行驶证车型、年款、配置和相关部位照片，可以先做线上初步确认，再决定是否到店。",
  },
  {
    question: "新车最推荐先做哪些项目？",
    answer:
      "优先解决高频磨损和暴晒：车衣或隔热膜、专车脚垫、基础洗美。其余项目建议用一段时间后按实际需求再加，不需要的不建议做。",
  },
  {
    question: "电动踏板所有极氪都能装吗？",
    answer:
      "不能。电动踏板主要面向适配的高车身车型，需要确认离地间隙、固定点和线束走向。发来车型和年款先确认是否在适配清单内，再谈款式。",
  },
  {
    question: "可以只做单个项目吗？",
    answer:
      "可以。页面组合只是选择参考，最终按你的车型和实际需求确定，不捆绑销售。",
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

// ---- 9X / 8X 车型入口文案 ----

export type ZeekrModelEntryKey = "9X" | "8X";

export type ZeekrModelCopy = {
  scenario: string;
  topNeeds: readonly [string, string, string];
};

export const ZEEKR_MODEL_COPY: Record<ZeekrModelEntryKey, ZeekrModelCopy> = {
  "9X": {
    scenario: "全尺寸高端 SUV，兼顾新车防护、外观姿态与座舱质感维护。",
    topNeeds: ["车衣 / 隔热膜", "轮毂升级", "洗美养护"],
  },
  "8X": {
    scenario: "家用中大型 SUV，围绕隔热防晒、内饰防护和日常便利。",
    topNeeds: ["隔热膜", "电动踏板", "专车脚垫"],
  },
} as const;
