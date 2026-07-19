/**
 * 小鹏一级页数据（2026-07-15 重构）
 *
 * 结构（复用 zeekr-series-services 的基础服务模式）：
 *   - xpengBaseServices        6 类基础服务（全系可咨询，链接到对应产品页）
 *   - xpengScenarioEntries     4 个高频场景入口（场景 → 推荐服务）
 *   - xpengSeriesServiceSteps  6 步服务流程（含传感器 / 线束 / 固定点核对）
 *   - xpengSeriesFaq           8 条 FAQ（具体回答，不用"需到店确认"式空洞话术）
 *   - xpengDouyinHighlights    抖音案例入口 3 项
 *   - XPENG_GX_ENTRY           GX 车型子页入口卡数据
 *   - xpengLocalAnswer         本地问答直接答案（GEO）
 *
 * GX 15 个项目数据仍在 src/lib/xpeng-gx-products.ts（GX 子页依赖，不迁移）。
 */

// ---- 基础服务（6 类，全系小鹏均可咨询）----

export type XpengBaseServiceId =
  | "car-film"
  | "wheels"
  | "electric-step"
  | "flooring"
  | "floor-mats"
  | "car-care";

export type XpengBaseServiceSubLink = {
  label: string;
  href: string;
};

export type XpengBaseService = {
  id: XpengBaseServiceId;
  iconName: string;
  title: string;
  /** 解决什么 —— 从小鹏车主痛点出发 */
  painPoint: string;
  /** 适合谁 */
  suitableFor: string;
  /** 对应产品页 */
  href: string;
  /** 车膜类含 3 个子入口 */
  subLinks?: readonly XpengBaseServiceSubLink[];
};

export const xpengBaseServices: readonly XpengBaseService[] = [
  {
    id: "car-film",
    iconName: "Shield",
    title: "车膜类",
    painPoint:
      "新车担心漆面石子和停车剐蹭；夏季暴晒、前挡隔热和后排隐私是小鹏车主的高频困扰。",
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
      "老人、儿童上下车吃力。踏板主要面向适配的高车身车型，不是小鹏全系通用项目，先按车型确认。",
    suitableFor: "常载老人儿童、车身较高的小鹏 SUV / MPV 车主",
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
      "需要易清洁防泥水，也担心脚垫移位、翘边或干涉踏板区域，影响驾驶安全。",
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

// ---- 场景选择器（4 个高频入口）----

export type XpengScenarioEntryId =
  | "new-car"
  | "family"
  | "exterior"
  | "daily-care";

export type XpengScenarioEntry = {
  id: XpengScenarioEntryId;
  iconName: string;
  title: string;
  description: string;
  /** 关联的基础服务 */
  serviceIds: readonly XpengBaseServiceId[];
  /** 推荐组合一句话 */
  recommendation: string;
};

export const xpengScenarioEntries: readonly XpengScenarioEntry[] = [
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
    title: "家庭用车",
    description: "常载老人儿童，后排和尾箱使用频率高",
    serviceIds: ["electric-step", "flooring", "floor-mats", "car-care"],
    recommendation:
      "电动踏板（适配车型）+ 地板总成 + 脚垫 + 内饰清洁，围绕上下车便利和后排好收拾。",
  },
  {
    id: "exterior",
    iconName: "Palette",
    title: "外观个性",
    description: "想让整车姿态和辨识度更强",
    serviceIds: ["car-film", "wheels", "car-care"],
    recommendation:
      "改色膜 + 轮毂 + 漆面养护，轮毂尺寸、孔距和胎压系统先确认再决定。",
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

export type XpengDouyinHighlight = {
  iconName: string;
  label: string;
};

export const xpengDouyinHighlights: readonly XpengDouyinHighlight[] = [
  { iconName: "Play", label: "小鹏施工过程实拍" },
  { iconName: "Layers", label: "车膜与轮毂施工细节" },
  { iconName: "Palette", label: "改色颜色与效果参考" },
] as const;

// ---- 6 步服务流程 ----

export type XpengSeriesServiceStep = {
  step: number;
  title: string;
  description: string;
};

export const xpengSeriesServiceSteps: readonly XpengSeriesServiceStep[] = [
  {
    step: 1,
    title: "车型核对",
    description:
      "确认小鹏车型、年款、版本和配置，同步核对传感器、线束、固定点和原车状态",
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

export type XpengSeriesFaqItem = {
  question: string;
  answer: string;
};

export const xpengSeriesFaq: readonly XpengSeriesFaqItem[] = [
  {
    question: "是否所有小鹏车型都能做这些项目？",
    answer:
      "小鹏轿车和 SUV 在车身结构、传感器布置和座椅布局上差异明显，并非每项服务都适合所有车型。发来行驶证车型、年款、配置和相关部位照片，可以先做线上初步确认，再决定是否到店。",
  },
  {
    question: "新提小鹏，建议先做哪些保护？",
    answer:
      "优先解决高频磨损和暴晒：车衣或隔热膜、专车脚垫、基础洗美。其余项目建议用一段时间后按实际需求再加，不需要的不建议做。",
  },
  {
    question: "贴膜、轮毂和踏板会影响原车功能吗？",
    answer:
      "施工前会逐项核对影响范围：贴膜避开摄像头和雷达区域；轮毂确认尺寸、载荷和胎压系统后才更换；踏板确认固定点和线束走向后才安装。涉及拆装或线路的项目会书面告知，你确认后才施工。",
  },
  {
    question: "电动踏板所有小鹏都能装吗？",
    answer:
      "不能。电动踏板主要面向适配的高车身车型，需要确认离地间隙、固定点和线束走向。发来车型和年款先确认是否在适配清单内，再谈款式。",
  },
  {
    question: "电动门、平衡杆这类项目为什么不在这一页？",
    answer:
      "这类项目和具体车型的结构强相关，安装条件、配件版本都要按车型逐一确认，所以放在车型子页里。目前小鹏 GX 已整理专属方案，进入 GX 页面可以看到完整项目清单。",
  },
  {
    question: "可以只做单个项目吗？",
    answer:
      "可以。页面组合只是选择参考，最终按你的车型和实际需求确定，不捆绑销售。",
  },
  {
    question: "工期大概多久？",
    answer:
      "车膜类通常 1–3 天；踏板、地板等安装类通常半天到 1 天；洗美养护 2–4 小时。具体受车型结构和项目组合影响，确认方案时同步告知。",
  },
  {
    question: "售后包含什么？",
    answer:
      "交付时提供施工记录和维护建议；安装类项目出现异响、松动、翘边等问题可回店复检处理，各项目的质保范围在确认方案时书面告知。",
  },
] as const;

// ---- GX 车型子页入口卡 ----

export type XpengGxEntry = {
  modelName: string;
  canonicalPath: string;
  /** 主打使用场景 */
  scenario: string;
  /** 最常见的三项需求 */
  topNeeds: readonly [string, string, string];
  /** 已确认适配的方向 */
  confirmedScope: string;
  /** 需按配置复核的方向 */
  reviewScope: string;
};

export const XPENG_GX_ENTRY: XpengGxEntry = {
  modelName: "小鹏 GX",
  canonicalPath: "/product/xpeng/gx",
  scenario:
    "小鹏 GX 车主的专属方案页：按新车保护、外观个性、电动便利、底盘防护、屏幕保护和座舱维护组合了完整项目清单。",
  topNeeds: ["车衣 / 隔热膜", "改色膜", "轮毂升级"],
  confirmedScope: "车衣、隔热膜、改色膜、彩绘、360 脚垫、钢化膜等已按 GX 整理",
  reviewScope: "电动门、平衡杆、底盘护板等按年款与配置逐项复核",
} as const;

// ---- 本地问答直接答案（GEO）----

export const xpengLocalAnswer =
  "蓝辉轻改顺德大良店为小鹏车主提供车衣、隔热膜、改色膜、轮毂、电动踏板、地板总成、专车脚垫与洗美养护，施工前先确认车型、年款和配置，再报价施工。" as const;
