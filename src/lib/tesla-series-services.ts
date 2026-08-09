/**
 * 特斯拉品牌一级页数据（2026-07-15 重构，参照 gaoshan / voyah / ledao / zhijie / nio / xiaomi / li-auto series 模式）
 *
 * 定位：Tesla 车膜保护与日常用车升级服务入口（顺德大良）。
 * Tesla 差异化：纯视觉智驾（前挡与车身摄像头避让）+ 电气项目质保边界
 * （接线方式/可恢复性/OTA 复检）+ 前备厢储物保护贯穿文案。
 *
 * 结构：
 *   - TESLA_HERO_IMAGE          Hero 右侧主视觉 + OG 共用（方案示意图）
 *   - teslaBaseServices         5 类基础服务
 *   - teslaScenarioEntries      5 个高频场景入口（含特斯拉特有「暴晒隔热」「轮毂与底盘」）
 *   - teslaSeriesServiceSteps   6 步服务流程（含摄像头与举升点确认）
 *   - teslaSeriesFaq            6 条 FAQ（基础服务 / 车衣先后 / 摄像头避让 / 通用性 / 电气边界 / 本地）
 *   - teslaDouyinHighlights     抖音案例入口 3 项
 */

// ---- Hero 主视觉（方案示意图，1448×1086，4:3）----

export type TeslaHeroImage = {
  publicPath: string;
  alt: string;
  width: 1448;
  height: 1086;
  aspectRatio: "4/3";
};

export const TESLA_HERO_IMAGE: TeslaHeroImage = {
  publicPath: "/images/products/tesla/generated/hero.webp",
  alt: "特斯拉车膜保护与轻改服务主视觉（方案示意图）",
  width: 1448,
  height: 1086,
  aspectRatio: "4/3",
};

// ---- 基础服务（5 类）----

export type TeslaBaseServiceId =
  | "car-film"
  | "wheels"
  | "floor-mats"
  | "car-care"
  | "electric-step";

export type TeslaBaseServiceSubLink = {
  label: string;
  href: string;
};

export type TeslaBaseService = {
  id: TeslaBaseServiceId;
  iconName: string;
  title: string;
  /** 解决什么 —— 从 Tesla 车主痛点出发 */
  painPoint: string;
  /** 适合谁 */
  suitableFor: string;
  /** 对应产品页 */
  href?: string;
  /** 车膜类含 3 个子入口 */
  subLinks?: readonly TeslaBaseServiceSubLink[];
};

export const teslaBaseServices: readonly TeslaBaseService[] = [
  {
    id: "car-film",
    iconName: "Shield",
    title: "车膜保护",
    painPoint:
      "大面积玻璃夏季暴晒明显，要兼顾隔热、夜间视野、隐私和信号；特斯拉是纯视觉智驾方案，前挡与车身摄像头区域会精确避让，车衣和改色膜裁切不覆盖感知窗口，完工后逐项检查摄像头提示。",
    suitableFor: "新提车、日晒通勤和在意辅助驾驶功能完整性的 Tesla 车主",
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
    title: "轮毂与轮胎适配",
    painPoint:
      "换轮毂不能只看样式：尺寸、ET 值、承载等级、胎压监测、刹车间隙、能耗续航和行驶舒适要一起核验，安装后做四轮定位，确认不影响续航表现与整车质保。",
    suitableFor: "关注整车姿态、愿意先核对数据适配再决定的车主",
    href: "/product/wheels",
  },
  {
    id: "floor-mats",
    iconName: "Car",
    title: "专车脚垫与储物保护",
    painPoint:
      "Model 3、Model Y 的地台形状和前备厢结构不同，脚垫按车型分体裁形，覆盖驾驶区卡扣、后排、前备厢和后备厢；Model Y 家庭使用、儿童、宠物和露营后的车厢更容易清洁。",
    suitableFor: "所有日常通勤车主，尤其家庭、露营和宠物场景",
    href: "/product/floor-mats",
  },
  {
    id: "car-care",
    iconName: "Sparkles",
    title: "洗美养护",
    painPoint:
      "漆面细纹、玻璃油膜、浅色内饰污渍、座椅折痕、摄像头周边清洁和轮毂养护，普通洗车处理不到位。按周期养护，摄像头区域保持清洁无遮挡，辅助驾驶提示更少误报。",
    suitableFor: "浅色内饰车主、家庭用车和定期养护的用户",
    href: "/product/car-care",
  },
  {
    id: "electric-step",
    iconName: "Footprints",
    title: "电动踏板（条件服务）",
    painPoint:
      "Model 3、Model Y 车身高度较低，电动踏板通常不是首要需求；Model X 或有特殊上下车需求的车主，需先确认门体结构、线束走向和离地间隙再评估，不作为全系推荐项目。",
    suitableFor: "Model X 车主或确有上下车便利需求的用户",
    href: "/product/electric-steps",
  },
] as const;

// ---- 场景选择器（5 个高频入口）----

export type TeslaScenarioEntryId =
  | "new-car"
  | "sun-heat"
  | "family-cabin"
  | "wheels-chassis"
  | "daily-care";

export type TeslaScenarioEntry = {
  id: TeslaScenarioEntryId;
  iconName: string;
  title: string;
  description: string;
  /** 关联的基础服务 */
  serviceIds: readonly TeslaBaseServiceId[];
  /** 推荐组合一句话 */
  recommendation: string;
};

export const teslaScenarioEntries: readonly TeslaScenarioEntry[] = [
  {
    id: "new-car",
    iconName: "ShieldCheck",
    title: "新车保护",
    description: "刚提车，想把基础防护一次做齐",
    serviceIds: ["car-film", "floor-mats", "car-care"],
    recommendation:
      "车衣或隔热膜 + 专车脚垫 + 基础洗美，交付初期先把漆面和高频磨损位保护起来，前挡与车身摄像头区域提前确认避让。",
  },
  {
    id: "sun-heat",
    iconName: "Sun",
    title: "暴晒隔热",
    description: "大面积玻璃夏季晒得慌，空调压力大",
    serviceIds: ["car-film"],
    recommendation:
      "前挡和全景玻璃用兼顾隔热、夜间视野与信号的隔热膜，侧后挡同步考虑隐私；贴膜裁切避开摄像头感知窗口，完工后检查辅助驾驶提示。",
  },
  {
    id: "family-cabin",
    iconName: "Baby",
    title: "家庭耐脏",
    description: "孩子宠物露营后，车厢难收拾",
    serviceIds: ["floor-mats", "car-care"],
    recommendation:
      "全覆盖专车脚垫（含前备厢和后备厢垫）+ 座舱深度清洁，零食碎屑、宠物毛发和泥水都好收拾。",
  },
  {
    id: "wheels-chassis",
    iconName: "CircleDot",
    title: "轮毂与底盘",
    description: "想升级姿态，又担心续航和质保",
    serviceIds: ["wheels", "car-care"],
    recommendation:
      "轮毂先核对尺寸、承载、TPMS 和刹车间隙数据，评估对能耗的影响再决定；涉及举升的施工提前核验举升点，不在电池包区域施力。",
  },
  {
    id: "daily-care",
    iconName: "Droplets",
    title: "长期养护",
    description: "不改装，只想把车况维持在好状态",
    serviceIds: ["car-care", "floor-mats"],
    recommendation:
      "精洗 + 漆面与内饰养护 + 摄像头周边清洁，按周期保持车况，辅助驾驶摄像头保持清洁无遮挡。",
  },
] as const;

// ---- 抖音案例入口 ----

export type TeslaDouyinHighlight = {
  iconName: string;
  label: string;
};

export const teslaDouyinHighlights: readonly TeslaDouyinHighlight[] = [
  { iconName: "Play", label: "特斯拉施工过程实拍" },
  { iconName: "Layers", label: "车衣包边与摄像头避让细节" },
  { iconName: "Palette", label: "改色与轮毂姿态效果参考" },
] as const;

// ---- 6 步服务流程 ----

export type TeslaSeriesServiceStep = {
  step: number;
  title: string;
  description: string;
};

export const teslaSeriesServiceSteps: readonly TeslaSeriesServiceStep[] = [
  {
    step: 1,
    title: "确认车型",
    description:
      "确认 Model 3、Model Y、Model S 或 Model X 的具体版本与年款，判断项目是否在适配范围内",
  },
  {
    step: 2,
    title: "摄像头与举升点确认",
    description:
      "记录前挡与车身摄像头的位置与感知窗口，核验举升点不在电池包区域，确认低压线束位置，明确施工避让范围",
  },
  {
    step: 3,
    title: "方案确认",
    description:
      "按用车场景和预算确定项目组合；不改线项目与需接电项目分级书面告知，涉及拆装、打孔或线路的逐项确认",
  },
  {
    step: 4,
    title: "保护施工",
    description: "按项目标准施工，全程对漆面、内饰、线束和摄像头做遮蔽保护",
  },
  {
    step: 5,
    title: "功能复检",
    description:
      "逐项检查外观、装配和原车功能，摄像头提示、灯光、门锁和辅助驾驶相关功能重点复核",
  },
  {
    step: 6,
    title: "交付养护",
    description:
      "交付施工记录和养护建议；OTA 升级后如有疑问可回店复检，异响、松动等问题提供回店处理",
  },
] as const;

// ---- FAQ ----

export type TeslaSeriesFaqItem = {
  question: string;
  answer: string;
};

export const teslaSeriesFaq: readonly TeslaSeriesFaqItem[] = [
  {
    question: "Tesla Model 3 和 Model Y 可以做哪些基础服务？",
    answer:
      "蓝辉轻改可为 Model 3、Model Y 提供车衣、隔热膜、改色膜、轮毂、专车脚垫和洗美养护等基础服务；电动踏板、地板类和电气项目需按车型、年款和原车结构确认，并非全系推荐。Model S、Model X 与 Model Y L 也可提供基础服务咨询，按版本现场确认。",
  },
  {
    question: "特斯拉新车应该先贴车衣还是隔热膜？",
    answer:
      "看用车环境：长期户外停放、日晒通勤明显的先做隔热膜，改善夏季车内温度；高频通勤、在意漆面保值的先做车衣。两者施工互不冲突，可以同期安排；先确认版本和玻璃配置，再定膜料和施工顺序。",
  },
  {
    question: "特斯拉贴膜怎样避开前挡和车身摄像头区域？",
    answer:
      "特斯拉依赖摄像头实现辅助驾驶，官方要求摄像头保持清洁且无遮挡。施工前会记录前挡、翼子板、B 柱和尾部摄像头的位置与感知窗口，车衣、改色膜裁切精确避让，前挡隔热膜避开摄像头识别区；完工后逐项检查摄像头提示与辅助驾驶功能。",
  },
  {
    question: "Model 3、Model Y 的脚垫和轮毂可以通用吗？",
    answer:
      "不能通用。两者在轴距、地台形状、前后备厢结构和轮毂数据上差异明显：脚垫需要按车型分体裁形；轮毂的尺寸、ET 值和承载等级要分别核对。发来车型和年款，先确认适配清单再谈款式。",
  },
  {
    question: "安装电动门把手、仪表或电动前备厢是否需要改线？",
    answer:
      "视项目而定：部分项目走原车接口对插、可恢复原状；部分需要接取低压电源。我们会在施工前书面告知接线方式、可恢复性和质保边界，留存施工记录；OTA 升级后如出现相关提示，可回店复检。介意质保风险的车主建议只做不改线项目。",
  },
  {
    question: "佛山顺德大良哪里可以做特斯拉贴膜和洗美养护？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，提供特斯拉车膜、轮毂、脚垫和洗美养护等服务，支持到店咨询和预约施工。发来车型、年款和需求，先确认方案与工期再安排到店。",
  },
] as const;
