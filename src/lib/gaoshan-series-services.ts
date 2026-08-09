/**
 * 高山品牌一级页数据（2026-07-15 重构，参照 zeekr-series-services 模式）
 *
 * 定位：魏牌高山全系保护与舒适升级服务入口（顺德大良）。
 * 品牌页只讲共性需求与 6 类基础服务；23 个专车项目留在 /product/gaoshan/8 子页。
 *
 * 结构：
 *   - gaoshanBaseServices        6 类基础服务（全系可咨询，链接到对应产品页）
 *   - gaoshanSeriesServiceSteps  6 步服务流程（确认车型 → 交付养护）
 *   - gaoshanSeriesFaq           6 条 FAQ（全系适配 / 踏板 / 滑轨 / 轮毂 / 车膜 / 工期）
 *   - gaoshanDouyinHighlights    抖音案例入口 3 项
 *   - GAOSHAN_MODEL_COPY         高山 8 车型入口文案
 *
 * 23 个高山 8 项目数据仍在 src/lib/gaoshan-products.ts（子页依赖，不迁移）。
 */

// ---- 基础服务（6 类，高山全系均可咨询）----

export type GaoshanBaseServiceId =
  | "car-film"
  | "wheels"
  | "electric-step"
  | "flooring"
  | "floor-mats"
  | "car-care";

export type GaoshanBaseServiceSubLink = {
  label: string;
  href: string;
};

export type GaoshanBaseService = {
  id: GaoshanBaseServiceId;
  iconName: string;
  title: string;
  /** 解决什么 —— 从高山 MPV 车主痛点出发 */
  painPoint: string;
  /** 适合谁 */
  suitableFor: string;
  /** 对应产品页 */
  href: string;
  /** 车膜类含 3 个子入口 */
  subLinks?: readonly GaoshanBaseServiceSubLink[];
};

export const gaoshanBaseServices: readonly GaoshanBaseService[] = [
  {
    id: "car-film",
    iconName: "Shield",
    title: "车膜类",
    painPoint:
      "高山座舱空间大、玻璃面积大，夏季暴晒后前后排温差和闷热感更明显；新车漆面也怕石子和日常剐蹭留痕。",
    suitableFor: "新提车、日晒通勤和常载家人出行的高山车主",
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
      "MPV 整备质量和载员都高，轮毂不能只看样式：尺寸、孔距、ET、载荷等级和胎压系统要逐项确认。",
    suitableFor: "想提升整车质感、愿意先确认载荷数据再决定的车主",
    href: "/product/wheels",
  },
  {
    id: "electric-step",
    iconName: "Footprints",
    title: "电动踏板",
    painPoint:
      "车身较高时，老人和儿童上下车会更吃力；适配的电动踏板能改善登车便利性，但需确认年款、门体结构和离地间隙。",
    suitableFor: "常载老人儿童、注重上下车便利的家庭用户",
    href: "/product/electric-steps",
  },
  {
    id: "flooring",
    iconName: "Layers",
    title: "地板总成",
    painPoint:
      "儿童零食、鞋底泥沙、饮料洒落容易进入座椅滑轨和地板缝隙；滑轨结构和固定点需要专车确认后再安装。",
    suitableFor: "二三排使用频率高、想降低日常清洁负担的家庭",
    href: "/product/flooring",
  },
  {
    id: "floor-mats",
    iconName: "Car",
    title: "专车脚垫",
    painPoint:
      "需要易清洁，也担心脚垫移位、翘边或干涉踏板区域；MPV 多排布局对分体裁形要求更高。",
    suitableFor: "所有日常通勤车主，尤其雨季和带娃场景",
    href: "/product/floor-mats",
  },
  {
    id: "car-care",
    iconName: "Sparkles",
    title: "洗美养护",
    painPoint:
      "座椅滑轨积灰、门缝和杯架残渣、玻璃油膜与内饰高频使用痕迹，普通洗车处理不到位。",
    suitableFor: "商务接待前整备、或希望定期深度整理车况的车主",
    href: "/product/car-care",
  },
] as const;

// ---- 抖音案例入口 ----

export type GaoshanDouyinHighlight = {
  iconName: string;
  label: string;
};

export const gaoshanDouyinHighlights: readonly GaoshanDouyinHighlight[] = [
  { iconName: "Play", label: "MPV 施工过程实拍" },
  { iconName: "Layers", label: "地板与踏板安装细节" },
  { iconName: "Palette", label: "车膜颜色与效果参考" },
] as const;

// ---- 6 步服务流程 ----

export type GaoshanSeriesServiceStep = {
  step: number;
  title: string;
  description: string;
};

export const gaoshanSeriesServiceSteps: readonly GaoshanSeriesServiceStep[] = [
  {
    step: 1,
    title: "确认车型",
    description:
      "确认高山具体车型、年款、版本与配置，判断项目是否在适配范围内",
  },
  {
    step: 2,
    title: "检查原车",
    description:
      "核对漆面、滑轨、门体、底盘与轮毂数据等原车状态，记录既有痕迹",
  },
  {
    step: 3,
    title: "方案确认",
    description:
      "按使用场景和预算确定项目组合，涉及拆装、打孔或线路的逐项书面告知",
  },
  {
    step: 4,
    title: "遮蔽施工",
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

export type GaoshanSeriesFaqItem = {
  question: string;
  answer: string;
};

export const gaoshanSeriesFaq: readonly GaoshanSeriesFaqItem[] = [
  {
    question: "高山全系都可以做这些服务吗？",
    answer:
      "高山是魏牌旗下 MPV 产品系列，不同版本在车身尺寸、门体结构和座椅布局上有差异。可为高山全系提供基础服务咨询，具体方案需根据车型、年款、配置、原车状态及施工条件现场确认。发来行驶证车型和相关部位照片，可先做线上初步确认。",
  },
  {
    question: "电动踏板安全吗，会不会影响原车？",
    answer:
      "适配的电动踏板走独立固定点和标准线束接插，安装前会确认离地间隙、门体结构和承重要求，安装后做联动与承重复检。不在适配清单内的年款不建议强行安装。",
  },
  {
    question: "座椅滑轨里的零食渣和泥沙怎么处理？",
    answer:
      "洗美养护包含滑轨深度清洁；若想长期降低清洁负担，可考虑地板总成加专车脚垫，把缝隙遮蔽起来。滑轨结构按车型确认，不影响座椅移动和安全锁止。",
  },
  {
    question: "MPV 换轮毂要注意什么？",
    answer:
      "高山整备质量和满载重量都高，轮毂必须确认载荷等级，同时核对尺寸、孔距、ET、卡钳空间和胎压系统。先确认数据适配，再谈样式。",
  },
  {
    question: "车膜怎么选，前挡和后排侧窗有区别吗？",
    answer:
      "前挡优先透光率和隔热性能的平衡；后排侧窗和天幕可选更深的颜色兼顾隐私与防晒。高山玻璃面积大，建议整车方案一起评估，避免色差。",
  },
  {
    question: "施工大概需要多久？",
    answer:
      "车膜类通常 1–3 天；踏板、地板等安装类通常半天到 1 天；洗美养护 2–4 小时。确认方案时会同步告知准确工期。",
  },
] as const;

// ---- 高山 8 车型入口文案 ----

export type GaoshanModelEntryKey = "8";

export type GaoshanModelCopy = {
  scenario: string;
  topNeeds: readonly [string, string, string];
};

export const GAOSHAN_MODEL_COPY: Record<GaoshanModelEntryKey, GaoshanModelCopy> = {
  "8": {
    scenario:
      "家用与商务兼顾的大型 MPV，已整理 23 个专车适配项目，覆盖新车保护、商务外观、后排舒适与座舱维护。",
    topNeeds: ["车衣 / 隔热膜", "电动踏板", "铝地板"],
  },
} as const;
