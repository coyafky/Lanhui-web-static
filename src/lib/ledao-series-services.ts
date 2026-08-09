/**
 * 乐道品牌一级页数据（2026-07-15 重构，参照 gaoshan / voyah series 模式）
 *
 * 定位：乐道全系家庭用车保护与舒适升级服务入口（顺德大良）。
 * 品牌页只讲共性需求与 6 类基础服务；21 个 L90 专车项目留在 /product/ledao/l90 子页。
 *
 * 结构：
 *   - ledaoBaseServices        6 类基础服务（全系可咨询，链接到对应产品页）
 *   - ledaoSeriesServiceSteps  6 步服务流程（确认车型 → 交付养护）
 *   - ledaoSeriesFaq           6 条 FAQ（全系适配 / 车型通用性 / 信号 / L90 / 续航 / 工期）
 *   - ledaoDouyinHighlights    抖音案例入口 3 项
 *   - LEDAO_MODEL_COPY         乐道 L90 车型入口文案
 *
 * 21 个 L90 项目数据仍在 src/lib/ledao-l90-products.ts（子页依赖，不迁移）。
 */

// ---- 基础服务（6 类，乐道全系均可咨询）----

export type LedaoBaseServiceId =
  | "car-film"
  | "wheels"
  | "electric-step"
  | "flooring"
  | "floor-mats"
  | "car-care";

export type LedaoBaseServiceSubLink = {
  label: string;
  href: string;
};

export type LedaoBaseService = {
  id: LedaoBaseServiceId;
  iconName: string;
  title: string;
  /** 解决什么 —— 从乐道家庭车主痛点出发 */
  painPoint: string;
  /** 适合谁 */
  suitableFor: string;
  /** 对应产品页 */
  href: string;
  /** 车膜类含 3 个子入口 */
  subLinks?: readonly LedaoBaseServiceSubLink[];
};

export const ledaoBaseServices: readonly LedaoBaseService[] = [
  {
    id: "car-film",
    iconName: "Shield",
    title: "车膜类",
    painPoint:
      "大面积玻璃在夏季暴晒明显，选膜时会同步确认隔热、紫外线阻隔、透光与夜间视野，以及 ETC、导航和车载天线的信号兼容；车衣则应对高速石子和洗车细纹。",
    suitableFor: "新提车、日晒通勤和常载家人出行的乐道车主",
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
      "电动车轮毂不能只看样式：尺寸、孔距、ET、载荷等级、胎压监测要逐项核对，重量和风阻还会影响能耗与续航，需要和驾驶需求一起确认。",
    suitableFor: "关注整车姿态、同时在意续航表现的车主",
    href: "/product/wheels",
  },
  {
    id: "electric-step",
    iconName: "Footprints",
    title: "电动踏板",
    painPoint:
      "踏板适合部分车身较高的车型，安装前要核验离地间隙、门体结构、电路走向和控制逻辑，不是乐道全系通用项目。",
    suitableFor: "常载老人儿童、上下车频繁的家庭用户",
    href: "/product/electric-steps",
  },
  {
    id: "flooring",
    iconName: "Layers",
    title: "地板总成",
    painPoint:
      "家庭用车地台容易积攒零食碎屑和泥沙；地板安装要按车型确认座椅固定点、滑轨结构、出风口位置和异响控制，兼顾清洁便利。",
    suitableFor: "二三排使用频率高、想让座舱更好收拾的家庭",
    href: "/product/flooring",
  },
  {
    id: "floor-mats",
    iconName: "Car",
    title: "专车脚垫",
    painPoint:
      "脚垫要易清洁，同时不干涉踏板、座椅轨道、出风口和储物空间；带娃场景对分体裁形和防水性要求更高。",
    suitableFor: "所有日常通勤车主，尤其雨季和带娃出行",
    href: "/product/floor-mats",
  },
  {
    id: "car-care",
    iconName: "Sparkles",
    title: "洗美养护",
    painPoint:
      "零食碎屑、饮料渍、鞋底泥沙、座椅背板脚印、屏幕指纹和尾箱杂物痕迹，加上浅色内饰的儿童污渍，普通洗车处理不到位。",
    suitableFor: "带娃家庭、浅色内饰车主和定期养护的用户",
    href: "/product/car-care",
  },
] as const;

// ---- 抖音案例入口 ----

export type LedaoDouyinHighlight = {
  iconName: string;
  label: string;
};

export const ledaoDouyinHighlights: readonly LedaoDouyinHighlight[] = [
  { iconName: "Play", label: "新能源车施工过程实拍" },
  { iconName: "Layers", label: "地板与踏板安装细节" },
  { iconName: "Palette", label: "车膜颜色与效果参考" },
] as const;

// ---- 6 步服务流程 ----

export type LedaoSeriesServiceStep = {
  step: number;
  title: string;
  description: string;
};

export const ledaoSeriesServiceSteps: readonly LedaoSeriesServiceStep[] = [
  {
    step: 1,
    title: "确认车型",
    description:
      "确认乐道具体车型、年款、版本与配置，判断项目是否在适配范围内",
  },
  {
    step: 2,
    title: "检查原车",
    description:
      "核对漆面、滑轨、门体与电路等原车状态，确认举升点与底盘高压区域，记录既有痕迹",
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
    description: "按项目标准施工，全程对漆面、内饰和原车线束做遮蔽保护",
  },
  {
    step: 5,
    title: "功能复检",
    description:
      "逐项检查外观、装配和原车功能，摄像头、雷达、胎压监测和踏板联动重点复核",
  },
  {
    step: 6,
    title: "交付养护",
    description: "交付施工记录和养护建议，异响、松动等问题提供回店复检",
  },
] as const;

// ---- FAQ ----

export type LedaoSeriesFaqItem = {
  question: string;
  answer: string;
};

export const ledaoSeriesFaq: readonly LedaoSeriesFaqItem[] = [
  {
    question: "乐道全系都可以做这些服务吗？",
    answer:
      "乐道目前覆盖 L60、L80、L90 等车型，车身尺寸、门体结构和座椅布局各有差异。可为乐道全系提供基础服务咨询；电动踏板、地板、轮毂及其他专车项目需根据车型、年款、配置、原车状态和实际安装条件确认，并非所有车型通用。L90 已有独立专车方案。",
  },
  {
    question: "L60、L80、L90 的脚垫和踏板可以通用吗？",
    answer:
      "不能通用。三款车在轴距、地台形状、座椅轨道和离地间隙上都不同，脚垫需要按车型分体裁形，踏板要单独核验门体和电路。发来具体车型和年款，先确认适配清单再谈款式。",
  },
  {
    question: "贴隔热膜会影响 ETC、导航或车载信号吗？",
    answer:
      "会在选膜时区分金属膜与陶瓷膜：前挡和信号敏感区使用不影响 ETC、导航、手机和车载天线的膜料，并在施工后逐项测试确认。透光率和夜间视野也会同步确认。",
  },
  {
    question: "乐道 L90 安装电动踏板和地板会影响原车功能吗？",
    answer:
      "安装前会确认座椅滑轨结构、固定点和线束走向，施工中做遮蔽保护，完工后对座椅移动、安全锁止、传感器和踏板联动逐项复检。涉及拆装或线路的环节会提前书面告知。",
  },
  {
    question: "轮毂升级会影响续航吗？",
    answer:
      "会有影响。轮毂尺寸、重量和轮胎规格共同决定能耗变化，升级前会先核对孔距、ET、载荷等级和胎压监测适配，再结合你的通勤里程给出建议，不盲目上大尺寸。",
  },
  {
    question: "施工大概需要多久？",
    answer:
      "车膜类通常 1–3 天；踏板、地板等安装类通常半天到 1 天；洗美养护 2–4 小时。确认方案时会同步告知准确工期。",
  },
] as const;

// ---- 乐道 L90 车型入口文案 ----

export type LedaoModelEntryKey = "l90";

export type LedaoModelCopy = {
  scenario: string;
  topNeeds: readonly [string, string, string];
};

export const LEDAO_MODEL_COPY: Record<LedaoModelEntryKey, LedaoModelCopy> = {
  l90: {
    scenario:
      "面向家庭的大三排 SUV，已整理 21 个专车适配项目，覆盖新车保护、座舱耐用、上下车便利与底盘防护。",
    topNeeds: ["车衣 / 隔热膜", "铝地板", "电动踏板"],
  },
} as const;
