/**
 * 腾势一级页数据（2026-07-15 重构）
 *
 * 结构（复用 xpeng-series-services 的基础服务模式）：
 *   - denzaBaseServices        6 类基础服务（全系可咨询，链接到对应产品页）
 *   - denzaSeriesServiceSteps  6 步服务流程（含座椅固定点 / 滑轨 / 线束核对）
 *   - denzaSeriesFaq           8 条 FAQ（具体回答，不用"需到店确认"式空洞话术）
 *   - denzaDouyinHighlights    抖音案例入口 3 项
 *   - DENZA_D9_ENTRY           D9 车型子页入口卡数据
 *
 * D9 23 个项目数据仍在 src/lib/denza-d9-products.ts（D9 子页依赖，不迁移）。
 */

// ---- 基础服务（6 类，全系腾势均可咨询）----

export type DenzaBaseServiceId =
  | "car-film"
  | "wheels"
  | "electric-step"
  | "flooring"
  | "floor-mats"
  | "car-care";

export type DenzaBaseServiceSubLink = {
  label: string;
  href: string;
};

export type DenzaBaseService = {
  id: DenzaBaseServiceId;
  iconName: string;
  title: string;
  /** 解决什么 —— 从腾势车主痛点出发 */
  painPoint: string;
  /** 适合谁 */
  suitableFor: string;
  /** 对应产品页 */
  href: string;
  /** 车膜类含 3 个子入口 */
  subLinks?: readonly DenzaBaseServiceSubLink[];
};

export const denzaBaseServices: readonly DenzaBaseService[] = [
  {
    id: "car-film",
    iconName: "Shield",
    title: "车膜类",
    painPoint:
      "新车担心漆面石子和停车剐蹭；腾势大面积玻璃在夏季暴晒下的热感、前挡隔热和后排隐私是车主的高频困扰。",
    suitableFor: "新车车主、常跑长途和在意后排乘坐体验的用户",
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
      "想提升整车姿态，但 MPV 载重大，尺寸、孔距、ET、载荷、刹车空间和胎压系统都要逐项确认，不能只看样式。",
    suitableFor: "关注外观姿态、常遇路沿剐蹭、希望先确认数据适配的车主",
    href: "/product/wheels",
  },
  {
    id: "electric-step",
    iconName: "Footprints",
    title: "电动踏板",
    painPoint:
      "老人、儿童和高频乘客上下车吃力。踏板不是腾势全系通用项目，离地间隙、固定点和线束走向要按车型先确认。",
    suitableFor: "家庭出行、商务接待和高频载客的腾势 SUV / MPV 车主",
    href: "/product/electric-steps",
  },
  {
    id: "flooring",
    iconName: "Layers",
    title: "地板总成",
    painPoint:
      "孩子零食、雨天泥水和商务载客让二三排难打理，滑轨周边积灰更是清不干净；座椅布局、滑轨和固定点需要专车确认。",
    suitableFor: "二三排高频使用的家庭和商务接待用户",
    href: "/product/flooring",
  },
  {
    id: "floor-mats",
    iconName: "Car",
    title: "专车脚垫",
    painPoint:
      "需要易清洁防泥水，也担心脚垫移位、翘边或干涉踏板区域，影响驾驶安全。",
    suitableFor: "所有日常通勤车主，尤其雨季、带娃和载客场景",
    href: "/product/floor-mats",
  },
  {
    id: "car-care",
    iconName: "Sparkles",
    title: "洗美养护",
    painPoint:
      "内饰高频使用痕迹、皮革座椅缝隙污渍、玻璃油膜和轮毂刹车粉尘，普通洗车处理不到位。",
    suitableFor: "希望定期深度整理车辆状态的车主",
    href: "/product/car-care",
  },
] as const;

// ---- 抖音案例入口 ----

export type DenzaDouyinHighlight = {
  iconName: string;
  label: string;
};

export const denzaDouyinHighlights: readonly DenzaDouyinHighlight[] = [
  { iconName: "Play", label: "腾势施工过程实拍" },
  { iconName: "Layers", label: "车膜与地板施工细节" },
  { iconName: "Palette", label: "改色颜色与效果参考" },
] as const;

// ---- 6 步服务流程 ----

export type DenzaSeriesServiceStep = {
  step: number;
  title: string;
  description: string;
};

export const denzaSeriesServiceSteps: readonly DenzaSeriesServiceStep[] = [
  {
    step: 1,
    title: "车型核对",
    description:
      "确认腾势车型、年款、版本和配置，同步核对座椅固定点、滑轨、线束、传感器和原车状态",
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
      "现场复核安装位置、接口和材料，说明拆装、打孔、线路和座椅滑轨的影响范围",
  },
  {
    step: 4,
    title: "施工与保护",
    description: "按项目标准施工，全程对漆面、内饰、座椅和线束做遮蔽保护",
  },
  {
    step: 5,
    title: "功能复检",
    description:
      "逐项检查外观、装配和原车功能，座椅滑轨和安装类项目做固定与扭矩检查",
  },
  {
    step: 6,
    title: "交付与售后",
    description: "交付施工记录和使用注意事项，异响、松动等问题提供复检处理",
  },
] as const;

// ---- FAQ ----

export type DenzaSeriesFaqItem = {
  question: string;
  answer: string;
};

export const denzaSeriesFaq: readonly DenzaSeriesFaqItem[] = [
  {
    question: "是否所有腾势车型都能做这些项目？",
    answer:
      "腾势 MPV 和 SUV 在座椅布局、滑轨结构和传感器布置上差异明显，并非每项服务都适合所有车型。发来行驶证车型、年款、配置和相关部位照片，可以先做线上初步确认，再决定是否到店。",
  },
  {
    question: "新提腾势，建议先做哪些保护？",
    answer:
      "优先解决暴晒和高频磨损：车衣或隔热膜、专车脚垫、基础洗美。腾势玻璃面积大，隔热膜对夏季后排体验提升明显；其余项目建议用一段时间后按实际需求再加。",
  },
  {
    question: "贴膜、踏板和地板会影响原车结构吗？",
    answer:
      "施工前会逐项核对影响范围：贴膜避开摄像头和雷达区域；踏板确认离地间隙、固定点和线束走向后才安装；地板总成先核对座椅固定点和滑轨结构。涉及拆装或线路的项目会书面告知，你确认后才施工。",
  },
  {
    question: "地板总成会影响座椅滑轨使用吗？",
    answer:
      "不会以牺牲滑轨功能为前提施工。方案按你的座椅布局和滑轨行程定制开料，装完逐项测试滑轨、旋转和放平功能，有干涉当场调整。",
  },
  {
    question: "吸顶电视、平衡杆这类项目为什么不在这一页？",
    answer:
      "这类项目和具体车型的结构强相关，安装条件、配件版本都要按车型逐一确认，所以放在车型子页里。目前腾势 D9 已整理 23 项专属方案，进入 D9 页面可以看到完整项目清单。",
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

// ---- D9 车型子页入口卡 ----

export type DenzaD9Entry = {
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

export const DENZA_D9_ENTRY: DenzaD9Entry = {
  modelName: "腾势 D9",
  canonicalPath: "/product/denza/d9",
  scenario:
    "腾势 D9 车主的专属方案页：围绕家庭出行与商务接待双场景，按新车保护、外观个性、座舱防护、底盘与行车防护、高端质感整理了 23 项完整清单。",
  topNeeds: ["车衣 / 隔热膜", "铝地板 / 脚垫", "电动踏板"],
  confirmedScope: "车衣、隔热膜、360 脚垫、铝地板、小桌板等已按 D9 整理",
  reviewScope: "吸顶电视、平衡杆、包围等按年款、座椅与滑轨配置逐项复核",
} as const;
