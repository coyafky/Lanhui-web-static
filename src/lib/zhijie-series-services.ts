/**
 * 智界品牌一级页数据（2026-07-15 重构，参照 gaoshan / voyah / ledao series 模式）
 *
 * 定位：智界全系智能车型保护与舒适升级服务入口（顺德大良）。
 * 品牌页只讲共性需求与 6 类基础服务；14 个 V9 专车项目留在 /product/zhijie/v9 子页。
 * 智界差异化：智驾硬件（摄像头 / 雷达 / HUD / 感知区域）施工边界贯穿文案。
 *
 * 结构：
 *   - zhijieBaseServices        6 类基础服务（全系可咨询，链接到对应产品页）
 *   - zhijieSeriesServiceSteps  6 步服务流程（确认车型 → 交付养护，含智驾区域确认）
 *   - zhijieSeriesFaq           6 条 FAQ（全系适配 / 车型通用性 / 智驾与信号 / V9 / 质保 / 工期）
 *   - zhijieDouyinHighlights    抖音案例入口 3 项
 *   - ZHIJIE_MODEL_COPY         智界 V9 车型入口文案
 *
 * 14 个 V9 项目数据仍在 src/lib/zhijie-v9-products.ts（子页依赖，不迁移）。
 */

// ---- 基础服务（6 类，智界全系均可咨询）----

export type ZhijieBaseServiceId =
  | "car-film"
  | "wheels"
  | "electric-step"
  | "flooring"
  | "floor-mats"
  | "car-care";

export type ZhijieBaseServiceSubLink = {
  label: string;
  href: string;
};

export type ZhijieBaseService = {
  id: ZhijieBaseServiceId;
  iconName: string;
  title: string;
  /** 解决什么 —— 从智界智能车型车主痛点出发 */
  painPoint: string;
  /** 适合谁 */
  suitableFor: string;
  /** 对应产品页 */
  href: string;
  /** 车膜类含 3 个子入口 */
  subLinks?: readonly ZhijieBaseServiceSubLink[];
};

export const zhijieBaseServices: readonly ZhijieBaseService[] = [
  {
    id: "car-film",
    iconName: "Shield",
    title: "车膜类",
    painPoint:
      "高速石子、树胶鸟粪和洗车细纹是漆面长期风险；智界的摄像头感知区域和原车标识会精确避让，隔热膜同步确认透光、夜间视野以及 ETC、导航、天线和 HUD 的适配。",
    suitableFor: "新提车、日晒通勤和在意智驾功能完整性的智界车主",
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
      "智界覆盖轿车、SUV 和 MPV，轮毂不能只看造型：尺寸、孔距、ET、载荷等级、胎压监测、制动空间和能耗要一起核验，再结合驾驶需求确认。",
    suitableFor: "关注整车姿态、愿意先核对数据适配再决定的车主",
    href: "/product/wheels",
  },
  {
    id: "electric-step",
    iconName: "Footprints",
    title: "电动踏板",
    painPoint:
      "踏板只适用于部分智界车型，需要核验门体结构、电路走向、离地间隙和控制逻辑，不是全系通用项目。",
    suitableFor: "常载老人儿童、车身较高的智界 SUV / MPV 车主",
    href: "/product/electric-steps",
  },
  {
    id: "flooring",
    iconName: "Layers",
    title: "地板总成",
    painPoint:
      "地板类主要面向 V9 等空间车型；安装前要检查座椅滑轨、固定点、出风口位置和异响控制，兼顾二三排的清洁便利。",
    suitableFor: "二三排使用频率高的智界 V9 等空间车型用户",
    href: "/product/flooring",
  },
  {
    id: "floor-mats",
    iconName: "Car",
    title: "专车脚垫",
    painPoint:
      "脚垫要易清洁，同时不干涉踏板、座椅轨道、出风口和储物空间；多排布局对分体裁形要求更高。",
    suitableFor: "所有日常通勤车主，尤其雨季和带娃场景",
    href: "/product/floor-mats",
  },
  {
    id: "car-care",
    iconName: "Sparkles",
    title: "洗美养护",
    painPoint:
      "浅色智能座舱的座椅染色、儿童污渍、门板脚印和大屏指纹，加上漆面与真皮座椅的长期养护，普通洗车处理不到位。",
    suitableFor: "浅色内饰车主、商务接待前整备和定期养护的用户",
    href: "/product/car-care",
  },
] as const;

// ---- 抖音案例入口 ----

export type ZhijieDouyinHighlight = {
  iconName: string;
  label: string;
};

export const zhijieDouyinHighlights: readonly ZhijieDouyinHighlight[] = [
  { iconName: "Play", label: "新能源车施工过程实拍" },
  { iconName: "Layers", label: "地板与踏板安装细节" },
  { iconName: "Palette", label: "车膜颜色与效果参考" },
] as const;

// ---- 6 步服务流程 ----

export type ZhijieSeriesServiceStep = {
  step: number;
  title: string;
  description: string;
};

export const zhijieSeriesServiceSteps: readonly ZhijieSeriesServiceStep[] = [
  {
    step: 1,
    title: "确认车型",
    description:
      "确认智界具体车型、年款、版本与配置，判断项目是否在适配范围内",
  },
  {
    step: 2,
    title: "智驾区域确认",
    description:
      "记录摄像头、雷达、感知区域和原车标识位置，明确施工避让范围，同步核对漆面与原车状态",
  },
  {
    step: 3,
    title: "方案确认",
    description:
      "按使用场景和预算确定项目组合，涉及拆装、打孔或线路的逐项书面告知",
  },
  {
    step: 4,
    title: "保护施工",
    description: "按项目标准施工，全程对漆面、内饰、线束和传感器做遮蔽保护",
  },
  {
    step: 5,
    title: "功能复检",
    description:
      "逐项检查外观、装配和原车功能，智驾功能、HUD、传感器和踏板联动重点复核",
  },
  {
    step: 6,
    title: "交付养护",
    description: "交付施工记录和养护建议，异响、松动等问题提供回店复检",
  },
] as const;

// ---- FAQ ----

export type ZhijieSeriesFaqItem = {
  question: string;
  answer: string;
};

export const zhijieSeriesFaq: readonly ZhijieSeriesFaqItem[] = [
  {
    question: "智界全系都可以做这些服务吗？",
    answer:
      "智界目前覆盖 S7、R7、V9 等车型，轿车、SUV 和 MPV 的车身结构与施工边界各不相同。可为智界全系提供车膜、轮毂、专车脚垫和洗美养护等基础服务咨询；电动踏板、地板及其他专车项目需根据车型、年款、配置和实际施工条件确认，并非所有车型通用。V9 已有独立专车方案。",
  },
  {
    question: "智界 S7、R7 和 V9 的脚垫、地板可以通用吗？",
    answer:
      "不能通用。三款车在轴距、地台形状和座椅布局上差异明显，脚垫需要按车型分体裁形；地板类主要面向 V9 等空间车型，S7、R7 需先确认结构是否适合。发来车型和年款，先确认适配清单再谈款式。",
  },
  {
    question: "智驾车型贴车衣和隔热膜要注意什么？",
    answer:
      "施工前会记录摄像头、雷达和感知区域位置，车衣裁切精确避让，不覆盖感知窗口；隔热膜在前挡和信号敏感区使用不影响 ETC、导航、手机、车载天线和 HUD 的膜料，完工后逐项测试确认。",
  },
  {
    question: "智界 V9 安装地板和踏板会影响原车功能吗？",
    answer:
      "安装前会确认座椅滑轨结构、固定点和线束走向，施工中做遮蔽保护，完工后对座椅移动、安全锁止、传感器和踏板联动逐项复检。涉及拆装或线路的环节会提前书面告知。",
  },
  {
    question: "施工会影响质保或原车功能吗？",
    answer:
      "施工前做原车状态检查并记录，施工中对电路、线束和传感器做保护，完工提供施工记录和功能复检清单。涉及原车结构或线路的项目会提前说明影响范围，你确认后才动工。",
  },
  {
    question: "施工大概需要多久？",
    answer:
      "车膜类通常 1–3 天；踏板、地板等安装类通常半天到 1 天；洗美养护 2–4 小时。确认方案时会同步告知准确工期。",
  },
] as const;

// ---- 智界 V9 车型入口文案 ----

export type ZhijieModelEntryKey = "v9";

export type ZhijieModelCopy = {
  scenario: string;
  topNeeds: readonly [string, string, string];
};

export const ZHIJIE_MODEL_COPY: Record<ZhijieModelEntryKey, ZhijieModelCopy> = {
  v9: {
    scenario:
      "大空间智能 MPV，已整理 14 个专车适配项目，覆盖新车保护、空间与座舱方案、门槛与底盘防护。",
    topNeeds: ["车衣 / 隔热膜", "铝地板", "专车脚垫"],
  },
} as const;
