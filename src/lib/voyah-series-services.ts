/**
 * 岚图品牌一级页数据（2026-07-15 重构，参照 gaoshan-series-services 模式）
 *
 * 定位：岚图全系保护与舒适升级服务入口（顺德大良）。
 * 品牌页只讲共性需求与 6 类基础服务；17 个专车项目留在 /product/voyah/dreamer 子页。
 *
 * 结构：
 *   - voyahBaseServices        6 类基础服务（全系可咨询，链接到对应产品页）
 *   - voyahScenarioEntries     5 个高频场景入口（场景 → 推荐服务）
 *   - voyahSeriesServiceSteps  6 步服务流程（确认车型 → 交付养护）
 *   - voyahSeriesFaq           6 条 FAQ（全系适配 / 信号 / 踏板 / 地板 / 内饰 / 工期）
 *   - voyahDouyinHighlights    抖音案例入口 3 项
 *   - VOYAH_MODEL_COPY         岚图梦想家车型入口文案
 *
 * 17 个梦想家项目数据仍在 src/lib/voyah-products.ts（子页依赖，不迁移）。
 */

// ---- 基础服务（6 类，岚图全系均可咨询）----

export type VoyahBaseServiceId =
  | "car-film"
  | "wheels"
  | "electric-step"
  | "flooring"
  | "floor-mats"
  | "car-care";

export type VoyahBaseServiceSubLink = {
  label: string;
  href: string;
};

export type VoyahBaseService = {
  id: VoyahBaseServiceId;
  iconName: string;
  title: string;
  /** 解决什么 —— 从岚图车主痛点出发 */
  painPoint: string;
  /** 适合谁 */
  suitableFor: string;
  /** 对应产品页 */
  href: string;
  /** 车膜类含 3 个子入口 */
  subLinks?: readonly VoyahBaseServiceSubLink[];
};

export const voyahBaseServices: readonly VoyahBaseService[] = [
  {
    id: "car-film",
    iconName: "Shield",
    title: "车膜类",
    painPoint:
      "高速石子、树胶鸟粪和洗车细纹是漆面长期风险；隔热膜会同步确认透光、夜间视野以及 ETC、导航和车载天线的信号兼容。",
    suitableFor: "新提车、日晒通勤和在意漆面长期状态的岚图车主",
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
      "岚图覆盖 SUV、MPV 和轿车，轮毂不能只看样式：尺寸、孔距、ET、载荷等级和胎压监测要与驾驶需求一起确认。",
    suitableFor: "关注整车姿态、愿意先核对数据适配再决定的车主",
    href: "/product/wheels",
  },
  {
    id: "electric-step",
    iconName: "Footprints",
    title: "电动踏板",
    painPoint:
      "踏板只适用于部分岚图车型，需要检查门体结构、电路走向、离地间隙和控制逻辑，不是全系通用项目。",
    suitableFor: "常载老人儿童、车身较高的岚图 SUV / MPV 车主",
    href: "/product/electric-steps",
  },
  {
    id: "flooring",
    iconName: "Layers",
    title: "地板总成",
    painPoint:
      "MPV 座椅滑轨容易积灰卡渣；地板安装要按车型确认滑轨结构、固定点和异响控制，兼顾清洁便利性。",
    suitableFor: "二三排使用频率高的梦想家等 MPV 家庭用户",
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
      "浅色内饰的座椅染色、儿童污渍、门板脚印和屏幕指纹，以及漆面与真皮座椅的长期养护，普通洗车处理不到位。",
    suitableFor: "浅色内饰车主、商务接待前整备和定期养护的用户",
    href: "/product/car-care",
  },
] as const;

// ---- 场景选择器（5 个高频入口）----

export type VoyahScenarioEntryId =
  | "new-car"
  | "family"
  | "business"
  | "outdoor"
  | "daily-care";

export type VoyahScenarioEntry = {
  id: VoyahScenarioEntryId;
  iconName: string;
  title: string;
  description: string;
  /** 关联的基础服务 */
  serviceIds: readonly VoyahBaseServiceId[];
  /** 推荐组合一句话 */
  recommendation: string;
};

export const voyahScenarioEntries: readonly VoyahScenarioEntry[] = [
  {
    id: "new-car",
    iconName: "ShieldCheck",
    title: "新车保护",
    description: "刚提车，想把基础防护一次做齐",
    serviceIds: ["car-film", "floor-mats", "car-care"],
    recommendation:
      "车衣或隔热膜 + 专车脚垫 + 基础洗美，交付初期先把漆面和高频磨损位保护起来。",
  },
  {
    id: "family",
    iconName: "Users",
    title: "家庭耐用",
    description: "常载家人，后排和尾箱使用频率高",
    serviceIds: ["flooring", "floor-mats", "car-care"],
    recommendation:
      "地板总成（MPV 按滑轨结构确认）+ 专车脚垫 + 内饰清洁，日常好收拾。",
  },
  {
    id: "business",
    iconName: "Briefcase",
    title: "商务质感",
    description: "兼顾接待，希望整车更体面",
    serviceIds: ["car-film", "wheels", "car-care"],
    recommendation:
      "深色隔热膜 + 轮毂升级 + 定期精洗，隐私、姿态和车况一起照顾到。",
  },
  {
    id: "outdoor",
    iconName: "Mountain",
    title: "户外出行",
    description: "常跑长途和郊外，路况更复杂",
    serviceIds: ["car-film", "electric-step", "floor-mats"],
    recommendation:
      "车衣应对石子树胶 + 踏板（适配车型）方便上下 + 易清洁脚垫，长途更省心。",
  },
  {
    id: "daily-care",
    iconName: "Droplets",
    title: "日常养护",
    description: "不改装，只想把车况维持在好状态",
    serviceIds: ["car-care", "floor-mats"],
    recommendation:
      "精洗 + 浅色内饰与真皮座椅养护 + 玻璃油膜处理，按周期保持座舱状态。",
  },
] as const;

// ---- 抖音案例入口 ----

export type VoyahDouyinHighlight = {
  iconName: string;
  label: string;
};

export const voyahDouyinHighlights: readonly VoyahDouyinHighlight[] = [
  { iconName: "Play", label: "新能源车施工过程实拍" },
  { iconName: "Layers", label: "地板与踏板安装细节" },
  { iconName: "Palette", label: "车膜颜色与效果参考" },
] as const;

// ---- 6 步服务流程 ----

export type VoyahSeriesServiceStep = {
  step: number;
  title: string;
  description: string;
};

export const voyahSeriesServiceSteps: readonly VoyahSeriesServiceStep[] = [
  {
    step: 1,
    title: "确认车型",
    description:
      "确认岚图具体车型、年款、版本与配置，判断项目是否在适配范围内",
  },
  {
    step: 2,
    title: "检查原车",
    description:
      "核对漆面、滑轨、门体、电路与轮毂数据等原车状态，记录既有痕迹",
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
    description: "按项目标准施工，全程对漆面、内饰和线束做遮蔽保护",
  },
  {
    step: 5,
    title: "功能复检",
    description:
      "逐项检查外观、装配和原车功能，电动门、传感器和踏板联动重点复核",
  },
  {
    step: 6,
    title: "交付养护",
    description: "交付施工记录和养护建议，异响、松动等问题提供回店复检",
  },
] as const;

// ---- FAQ ----

export type VoyahSeriesFaqItem = {
  question: string;
  answer: string;
};

export const voyahSeriesFaq: readonly VoyahSeriesFaqItem[] = [
  {
    question: "岚图全系都可以做这些服务吗？",
    answer:
      "岚图产品覆盖 SUV、MPV 和轿车等多种形态，车身结构、座椅布局和电子配置差异明显。可为岚图全系提供基础服务咨询；电动踏板、地板、轮毂及其他专车项目需根据车型、年款、配置、原车状态和实际安装条件确认，并非所有车型通用。梦想家已有独立专车方案。",
  },
  {
    question: "贴隔热膜会影响 ETC、导航或车载信号吗？",
    answer:
      "会在选膜时区分金属膜与陶瓷膜：前挡和信号敏感区使用不影响 ETC、导航、手机和车载天线的膜料，并在施工后逐项测试确认。透光率和夜间视野也会同步确认。",
  },
  {
    question: "电动踏板所有岚图都能装吗？",
    answer:
      "不能。踏板只适用于部分车型，需要检查门体结构、电路走向、离地间隙和控制逻辑。发来车型和年款先确认是否在适配清单内，再谈款式。",
  },
  {
    question: "梦想家地板和踏板施工会影响原车功能吗？",
    answer:
      "安装前会确认座椅滑轨结构、固定点和线束走向，施工中做遮蔽保护，完工后对座椅移动、安全锁止、电动门和踏板联动逐项复检。涉及拆装或线路的环节会提前书面告知。",
  },
  {
    question: "浅色内饰容易脏，日常怎么养护？",
    answer:
      "座椅染色、儿童污渍、门板脚印和屏幕指纹建议按周期做内饰深度清洁与真皮养护；配合易清洁的专车脚垫可以明显降低日常负担。",
  },
  {
    question: "施工大概需要多久？",
    answer:
      "车膜类通常 1–3 天；踏板、地板等安装类通常半天到 1 天；洗美养护 2–4 小时。确认方案时会同步告知准确工期。",
  },
] as const;

// ---- 岚图梦想家车型入口文案 ----

export type VoyahModelEntryKey = "dreamer";

export type VoyahModelCopy = {
  scenario: string;
  topNeeds: readonly [string, string, string];
};

export const VOYAH_MODEL_COPY: Record<VoyahModelEntryKey, VoyahModelCopy> = {
  dreamer: {
    scenario:
      "家用与商务兼顾的大型 MPV，已整理 17 个专车适配项目，覆盖新车保护、后排舒适、底盘防护与座舱维护。",
    topNeeds: ["车衣 / 隔热膜", "铝地板", "电动踏板"],
  },
} as const;
