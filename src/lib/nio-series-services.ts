/**
 * 蔚来品牌一级页数据（2026-07-15 重构，参照 gaoshan / voyah / ledao / zhijie series 模式）
 *
 * 定位：蔚来全系智能车型保护与舒适升级服务入口（顺德大良）。
 * 品牌页只讲共性需求与 6 类基础服务；17 个 ES8 专车项目留在 /product/nio/es8 子页。
 * 蔚来差异化：换电底盘 / 电池包结构核验 + 智驾感知区域避让 + 空气悬架与续航适配贯穿文案。
 *
 * 结构：
 *   - nioBaseServices        6 类基础服务（全系可咨询，链接到对应产品页）
 *   - nioScenarioEntries     5 个高频场景入口（场景 → 推荐服务）
 *   - nioSeriesServiceSteps  6 步服务流程（确认车型 → 交付养护，含感知与底盘确认）
 *   - nioSeriesFaq           6 条 FAQ（全系适配 / 车型通用性 / 智驾与信号 / 换电底盘 / ES8 / 工期）
 *   - nioDouyinHighlights    抖音案例入口 3 项
 *   - NIO_MODEL_COPY         蔚来 ES8 车型入口文案
 *
 * 17 个 ES8 项目数据仍在 src/lib/nio-products.ts（子页依赖，不迁移）。
 */

// ---- 基础服务（6 类，蔚来全系均可咨询）----

export type NioBaseServiceId =
  | "car-film"
  | "wheels"
  | "electric-step"
  | "flooring"
  | "floor-mats"
  | "car-care";

export type NioBaseServiceSubLink = {
  label: string;
  href: string;
};

export type NioBaseService = {
  id: NioBaseServiceId;
  iconName: string;
  title: string;
  /** 解决什么 —— 从蔚来智能车型车主痛点出发 */
  painPoint: string;
  /** 适合谁 */
  suitableFor: string;
  /** 对应产品页 */
  href: string;
  /** 车膜类含 3 个子入口 */
  subLinks?: readonly NioBaseServiceSubLink[];
};

export const nioBaseServices: readonly NioBaseService[] = [
  {
    id: "car-film",
    iconName: "Shield",
    title: "车膜类",
    painPoint:
      "高速石子、树胶鸟粪和洗车细纹是漆面长期风险；蔚来的摄像头、雷达、传感器和隐藏式门把手区域会精确避让，隔热膜同步确认透光、夜间视野以及 ETC、导航、车载通信和天线的适配。",
    suitableFor: "新提车、日晒通勤和在意智驾功能完整性的蔚来车主",
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
      "蔚来覆盖 SUV、轿车和旅行车，轮毂不能只看造型：尺寸、重量、载荷等级、胎压监测、制动空间、能耗续航和空气悬架适配要一起核验，再结合驾驶需求确认。",
    suitableFor: "关注整车姿态、愿意先核对数据适配再决定的车主",
    href: "/product/wheels",
  },
  {
    id: "electric-step",
    iconName: "Footprints",
    title: "电动踏板",
    painPoint:
      "踏板主要面向适配的高车身 SUV，轿车和旅行车通常不适用；需要核验门体结构、电路走向、换电结构和离地间隙，不是全系通用项目。",
    suitableFor: "常载老人儿童、车身较高的蔚来 SUV 车主",
    href: "/product/electric-steps",
  },
  {
    id: "flooring",
    iconName: "Layers",
    title: "地板总成",
    painPoint:
      "地板类主要面向 ES8 等大空间车型；安装前要检查座椅配置、固定点、滑轨、出风口位置和异响控制，兼顾二三排的清洁便利。",
    suitableFor: "二三排使用频率高的蔚来 ES8 等大空间车型用户",
    href: "/product/flooring",
  },
  {
    id: "floor-mats",
    iconName: "Car",
    title: "专车脚垫",
    painPoint:
      "SUV、轿车和旅行车在轴距、地台形状和座椅布局上差异明显，脚垫要按车型分体裁形，同时不干涉踏板、座椅轨道、出风口和储物空间。",
    suitableFor: "所有日常通勤车主，尤其雨季和带娃场景",
    href: "/product/floor-mats",
  },
  {
    id: "car-care",
    iconName: "Sparkles",
    title: "洗美养护",
    painPoint:
      "浅色座椅的染色、儿童污渍、宠物毛发、门板脚印和大屏指纹，加上漆面与内饰板的长期养护和尾箱清洁，普通洗车处理不到位。",
    suitableFor: "浅色内饰车主、家庭用车和定期养护的用户",
    href: "/product/car-care",
  },
] as const;

// ---- 场景选择器（5 个高频入口）----

export type NioScenarioEntryId =
  | "new-car"
  | "city-commute"
  | "family-trip"
  | "outdoor"
  | "daily-care";

export type NioScenarioEntry = {
  id: NioScenarioEntryId;
  iconName: string;
  title: string;
  description: string;
  /** 关联的基础服务 */
  serviceIds: readonly NioBaseServiceId[];
  /** 推荐组合一句话 */
  recommendation: string;
};

export const nioScenarioEntries: readonly NioScenarioEntry[] = [
  {
    id: "new-car",
    iconName: "ShieldCheck",
    title: "新车保护",
    description: "刚提车，想把基础防护一次做齐",
    serviceIds: ["car-film", "floor-mats", "car-care"],
    recommendation:
      "车衣或隔热膜 + 专车脚垫 + 基础洗美，交付初期先把漆面和高频磨损位保护起来，感知区域和隐藏把手提前确认避让。",
  },
  {
    id: "city-commute",
    iconName: "Route",
    title: "城市通勤",
    description: "日常上下班，暴晒和轻微剐蹭最常见",
    serviceIds: ["car-film", "floor-mats"],
    recommendation:
      "前挡和信号敏感区用不影响 ETC、导航和车载通信的隔热膜，配合专车脚垫，通勤高频使用也好收拾。",
  },
  {
    id: "family-trip",
    iconName: "Users",
    title: "家庭长途",
    description: "常载家人出行，二三排使用频率高",
    serviceIds: ["flooring", "floor-mats", "car-care"],
    recommendation:
      "地板总成（ES8 等大空间车型）+ 专车脚垫 + 内饰清洁，长途出行前后座舱都保持好状态。",
  },
  {
    id: "outdoor",
    iconName: "Mountain",
    title: "户外出行",
    description: "周末露营郊游，底盘和漆面考验更多",
    serviceIds: ["car-film", "wheels", "car-care"],
    recommendation:
      "车衣重点覆盖前杠、门槛等易剐蹭位，轮毂先核对载荷与续航影响；回程做漆面与底盘检查清洁。",
  },
  {
    id: "daily-care",
    iconName: "Droplets",
    title: "长期养护",
    description: "不改装，只想把车况维持在好状态",
    serviceIds: ["car-care", "floor-mats"],
    recommendation:
      "精洗 + 浅色座椅与内饰板养护 + 大屏与门板清洁，按周期保持座舱和漆面状态。",
  },
] as const;

// ---- 抖音案例入口 ----

export type NioDouyinHighlight = {
  iconName: string;
  label: string;
};

export const nioDouyinHighlights: readonly NioDouyinHighlight[] = [
  { iconName: "Play", label: "新能源车施工过程实拍" },
  { iconName: "Layers", label: "地板与踏板安装细节" },
  { iconName: "Palette", label: "车膜颜色与效果参考" },
] as const;

// ---- 6 步服务流程 ----

export type NioSeriesServiceStep = {
  step: number;
  title: string;
  description: string;
};

export const nioSeriesServiceSteps: readonly NioSeriesServiceStep[] = [
  {
    step: 1,
    title: "确认车型",
    description:
      "确认蔚来具体车型、年款、版本与座椅配置，判断项目是否在适配范围内",
  },
  {
    step: 2,
    title: "感知与底盘确认",
    description:
      "记录摄像头、雷达、感知区域和隐藏把手位置，核验举升点、电池包、换电结构和底盘服务口，明确施工避让范围",
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
      "逐项检查外观、装配和原车功能，智驾功能、传感器、门把手和踏板联动重点复核",
  },
  {
    step: 6,
    title: "交付养护",
    description: "交付施工记录和养护建议，异响、松动等问题提供回店复检",
  },
] as const;

// ---- FAQ ----

export type NioSeriesFaqItem = {
  question: string;
  answer: string;
};

export const nioSeriesFaq: readonly NioSeriesFaqItem[] = [
  {
    question: "蔚来全系都可以做这些服务吗？",
    answer:
      "蔚来覆盖 ES8、ES6、ET5、ET7、EC6、ET5T 等车型，SUV、轿车和旅行车的车身结构与施工边界各不相同。可为蔚来全系提供车膜、轮毂、专车脚垫和洗美养护等基础服务咨询；电动踏板、地板及其他专车项目需根据车型、年款、座椅配置、底盘结构和实际安装条件确认，并非所有车型通用。ES8 已有独立专车方案。",
  },
  {
    question: "蔚来 SUV、轿车和旅行车的脚垫可以通用吗？",
    answer:
      "不能通用。不同车型在轴距、地台形状和座椅布局上差异明显，脚垫需要按车型分体裁形；地板类主要面向 ES8 等大空间车型，其他车型需先确认结构是否适合。发来车型和年款，先确认适配清单再谈款式。",
  },
  {
    question: "蔚来智能车型贴车衣和隔热膜要注意什么？",
    answer:
      "施工前会记录摄像头、雷达、传感器和隐藏式门把手位置，车衣裁切精确避让，不覆盖感知窗口和开口区域；隔热膜在前挡和信号敏感区使用不影响 ETC、导航、手机和车载通信的膜料，完工后逐项测试确认。",
  },
  {
    question: "蔚来底盘施工如何避开电池包和换电结构？",
    answer:
      "施工前核验举升点、电池包边界、换电结构和底盘服务口位置，确认离地间隙和固定点后再动工，全程不在电池包和换电机构区域打孔或施力。涉及底盘的项目会提前书面告知施工范围。",
  },
  {
    question: "蔚来 ES8 安装地板和踏板会影响原车功能吗？",
    answer:
      "安装前会确认座椅滑轨结构、固定点和线束走向，施工中做遮蔽保护，完工后对座椅移动、安全锁止、传感器和踏板联动逐项复检。涉及拆装或线路的环节会提前书面告知。",
  },
  {
    question: "施工大概需要多久？",
    answer:
      "车膜类通常 1–3 天；踏板、地板等安装类通常半天到 1 天；洗美养护 2–4 小时。确认方案时会同步告知准确工期。",
  },
] as const;

// ---- 蔚来 ES8 车型入口文案 ----

export type NioModelEntryKey = "es8";

export type NioModelCopy = {
  scenario: string;
  topNeeds: readonly [string, string, string];
};

export const NIO_MODEL_COPY: Record<NioModelEntryKey, NioModelCopy> = {
  es8: {
    scenario:
      "大型智能纯电 SUV，已整理 17 个专车适配项目，覆盖新车保护、空间与座舱方案、门槛与底盘防护。",
    topNeeds: ["车衣 / 隔热膜", "铝地板", "电动踏板"],
  },
} as const;
