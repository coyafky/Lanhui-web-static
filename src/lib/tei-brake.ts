/**
 * TEI Racing 刹车卡钳产品数据层
 *
 * 数据来源:供应商海报按产品拆分目录 _index.json(2026-09-05 转录,www.teiracing.cn)
 * 规则:
 *  - 页面与结构化数据一律【不含价格】,本层不携带任何报价字段;
 *  - 轮毂尺寸为该套件所列轮圈配置,不等同车型适配承诺(到店复核);
 *  - 图片已转 WebP(quality=80)存于 /images/products/tei/<slug>.webp。
 */

export type TeiAxle = "前轮" | "后轮" | "前后通用" | null;

export type TeiProduct = {
  /** 型号展示名(供应商海报原样,如 P40NS / P40NS+ / T665/T683/T691) */
  model: string;
  /** URL slug(唯一,同时是图片文件名) */
  slug: string;
  /** 系列码:S/P/T/GT/HARDWARE */
  series: string;
  /** 安装位置 */
  axle: TeiAxle;
  /** 一句话说明 */
  description: string;
  /** 结构工艺,如 分体锻造 / 一体锻造 */
  construction: string | null;
  /** 活塞数 */
  pistonCount: number | null;
  /** 可选颜色 */
  colors: readonly string[];
  /** 轮毂尺寸×盘径配置(如 16 寸/300mm) */
  fitments: readonly { wheelInch: number | null; rotorMm: number | null }[];
  /** 供应商原话备注 */
  note: string | null;
};

export type TeiSeriesMeta = {
  code: string;
  name: string;
  tagline: string;
  count: number;
};

export const TEI_PRODUCTS: readonly TeiProduct[] = [
  {
    model: "S-X旗舰版",
    slug: "s-x",
    series: "S",
    axle: "前轮",
    description: "一体锻造十活塞套件",
    construction: "一体锻造",
    pistonCount: 10,
    colors: ["红色", "黄色", "淡绿", "竞技灰", "银色"],
    fitments: [{ wheelInch: 20, rotorMm: 400 }, { wheelInch: 21, rotorMm: 420 }, { wheelInch: 22, rotorMm: 440 }],
    note: null,
  },
  {
    model: "S60 Explore",
    slug: "s60-explore",
    series: "S",
    axle: "前轮",
    description: "竞技一体锻造六活塞套件",
    construction: "竞技一体锻造",
    pistonCount: 6,
    colors: ["红色", "黄色", "淡绿", "竞技灰", "银色"],
    fitments: [{ wheelInch: 19, rotorMm: 378 }, { wheelInch: 20, rotorMm: 400 }, { wheelInch: 21, rotorMm: 420 }],
    note: null,
  },
  {
    model: "S60 Plus",
    slug: "s60-plus",
    series: "S",
    axle: "前轮",
    description: "一体结构大六活塞套件",
    construction: "一体结构",
    pistonCount: 6,
    colors: ["红色", "黄色", "淡绿", "竞技灰", "银色"],
    fitments: [{ wheelInch: 19, rotorMm: 378 }, { wheelInch: 20, rotorMm: 400 }, { wheelInch: 21, rotorMm: 410 }],
    note: null,
  },
  {
    model: "SR8",
    slug: "sr8",
    series: "S",
    axle: "前轮",
    description: "分体锻造八活塞套件",
    construction: "分体锻造",
    pistonCount: 8,
    colors: ["红色", "黄色", "淡绿", "竞技灰", "银色"],
    fitments: [{ wheelInch: 20, rotorMm: 400 }, { wheelInch: 21, rotorMm: 410 }, { wheelInch: 21, rotorMm: 420 }],
    note: null,
  },
  {
    model: "SR10",
    slug: "sr10",
    series: "S",
    axle: "前轮",
    description: "分体锻造十活塞套件",
    construction: "分体锻造",
    pistonCount: 10,
    colors: ["红色", "黄色", "淡绿", "竞技灰", "银色"],
    fitments: [{ wheelInch: 20, rotorMm: 400 }, { wheelInch: 21, rotorMm: 420 }, { wheelInch: 22, rotorMm: 440 }],
    note: null,
  },
  {
    model: "P60NS",
    slug: "p60ns",
    series: "P",
    axle: "前轮",
    description: "分体锻造大六活塞套件",
    construction: "分体锻造",
    pistonCount: 6,
    colors: ["红色", "黄色", "淡绿", "银色"],
    fitments: [{ wheelInch: 18, rotorMm: 355 }, { wheelInch: 19, rotorMm: 378 }],
    note: null,
  },
  {
    model: "P60ES",
    slug: "p60es",
    series: "P",
    axle: "前轮",
    description: "分体锻造大六活塞套件",
    construction: "分体锻造",
    pistonCount: 6,
    colors: ["红色", "黄色", "淡绿", "银色"],
    fitments: [{ wheelInch: 18, rotorMm: 355 }, { wheelInch: 19, rotorMm: 378 }],
    note: null,
  },
  {
    model: "P60EV",
    slug: "p60ev",
    series: "P",
    axle: "前轮",
    description: "分体锻造大六活塞套件",
    construction: "分体锻造",
    pistonCount: 6,
    colors: ["红色", "黄色", "淡绿", "银色"],
    fitments: [{ wheelInch: 18, rotorMm: 345 }, { wheelInch: 18, rotorMm: 355 }, { wheelInch: 19, rotorMm: 380 }],
    note: null,
  },
  {
    model: "P60NS+",
    slug: "p60ns-plus",
    series: "P",
    axle: "前轮",
    description: "分体锻造大六活塞套件",
    construction: "分体锻造",
    pistonCount: 6,
    colors: ["红色", "黄色", "淡绿", "银色"],
    fitments: [{ wheelInch: 18, rotorMm: 355 }, { wheelInch: 19, rotorMm: 378 }],
    note: null,
  },
  {
    model: "P40EV",
    slug: "p40ev",
    series: "P",
    axle: "前轮",
    description: "分体锻造大四活塞套件",
    construction: "分体锻造",
    pistonCount: 4,
    colors: ["红色", "黄色", "淡绿", "银色"],
    fitments: [{ wheelInch: 17, rotorMm: 330 }, { wheelInch: 18, rotorMm: 355 }],
    note: null,
  },
  {
    model: "P40NS+",
    slug: "p40ns-plus",
    series: "P",
    axle: "前轮",
    description: "分体锻造大四活塞套件",
    construction: "分体锻造",
    pistonCount: 4,
    colors: ["红色", "黄色", "淡绿", "银色"],
    fitments: [{ wheelInch: 18, rotorMm: 355 }],
    note: null,
  },
  {
    model: "P42 Super",
    slug: "p42-super",
    series: "P",
    axle: "前轮",
    description: "分体锻造大四活塞套件",
    construction: "分体锻造",
    pistonCount: 4,
    colors: ["红色", "黄色", "淡绿", "银色"],
    fitments: [{ wheelInch: 15, rotorMm: 285 }, { wheelInch: 16, rotorMm: 296 }],
    note: null,
  },
  {
    model: "P40NS",
    slug: "p40ns",
    series: "P",
    axle: "前轮",
    description: "分体锻造大四活塞套件",
    construction: "分体锻造",
    pistonCount: 4,
    colors: ["红色", "黄色", "淡绿", "银色"],
    fitments: [{ wheelInch: 16, rotorMm: 300 }, { wheelInch: 17, rotorMm: 330 }],
    note: null,
  },
  {
    model: "P4-Explore",
    slug: "p4-explore",
    series: "REAR",
    axle: "后轮",
    description: "机电一体四活塞套件",
    construction: "机电一体",
    pistonCount: 4,
    colors: ["红色", "黄色", "淡绿", "银色"],
    fitments: [{ wheelInch: 17, rotorMm: 330 }, { wheelInch: 18, rotorMm: 345 }, { wheelInch: 18, rotorMm: 355 }, { wheelInch: 19, rotorMm: 380 }],
    note: null,
  },
  {
    model: "P4+Explore",
    slug: "p4-plus-explore",
    series: "REAR",
    axle: "后轮",
    description: "机电一体四活塞套件",
    construction: "机电一体",
    pistonCount: 4,
    colors: ["红色", "黄色", "淡绿", "银色"],
    fitments: [{ wheelInch: 17, rotorMm: 330 }, { wheelInch: 18, rotorMm: 355 }, { wheelInch: 19, rotorMm: 380 }, { wheelInch: 20, rotorMm: 400 }, { wheelInch: 21, rotorMm: 410 }],
    note: null,
  },
  {
    model: "P40NS-R",
    slug: "p40ns-r",
    series: "REAR",
    axle: "后轮",
    description: "分体锻造四活塞套件",
    construction: "分体锻造",
    pistonCount: 4,
    colors: ["红色", "黄色", "淡绿", "银色"],
    fitments: [{ wheelInch: 17, rotorMm: 330 }, { wheelInch: 18, rotorMm: 345 }, { wheelInch: 18, rotorMm: 355 }, { wheelInch: 19, rotorMm: 380 }, { wheelInch: 20, rotorMm: 400 }],
    note: null,
  },
  {
    model: "SR4-Explore",
    slug: "sr4-explore",
    series: "REAR",
    axle: "后轮",
    description: "机电一体四活塞套件",
    construction: "机电一体",
    pistonCount: 4,
    colors: ["红色", "黄色", "淡绿", "银色"],
    fitments: [{ wheelInch: 19, rotorMm: 380 }, { wheelInch: 20, rotorMm: 400 }, { wheelInch: 21, rotorMm: 410 }],
    note: null,
  },
  {
    model: "T-Small",
    slug: "t-small",
    series: "REAR",
    axle: "后轮",
    description: "电子驻车小卡钳套件",
    construction: "电子驻车小卡钳",
    pistonCount: null,
    colors: ["红色", "黄色", "淡绿", "银色"],
    fitments: [],
    note: null,
  },
  {
    model: "TA661",
    slug: "ta661",
    series: "T",
    axle: "前轮",
    description: "分体锻造大六活塞套件",
    construction: "分体锻造",
    pistonCount: 6,
    colors: ["红色", "黄色", "银色", "阳极氧化灰"],
    fitments: [{ wheelInch: 18, rotorMm: 355 }],
    note: "专用车型:兰德酷路泽",
  },
  {
    model: "TA432",
    slug: "ta432",
    series: "T",
    axle: "后轮",
    description: "分体锻造四活塞套件",
    construction: "分体锻造",
    pistonCount: 4,
    colors: ["红色", "黄色", "银色", "阳极氧化灰"],
    fitments: [{ wheelInch: 18, rotorMm: 365 }],
    note: "专用车型:兰德酷路泽",
  },
  {
    model: "TA432-P",
    slug: "ta432-p",
    series: "T",
    axle: "后轮",
    description: "分体锻造四活塞套件",
    construction: "分体锻造",
    pistonCount: 4,
    colors: ["红色", "黄色", "银色", "阳极氧化灰"],
    fitments: [{ wheelInch: 17, rotorMm: 345 }],
    note: "专用车型:普拉多",
  },
  {
    model: "TB432-V93",
    slug: "tb432-v93",
    series: "T",
    axle: "后轮",
    description: "分体锻造四活塞套件",
    construction: "分体锻造",
    pistonCount: 4,
    colors: ["红色", "黄色", "银色", "阳极氧化灰"],
    fitments: [{ wheelInch: 17, rotorMm: 345 }],
    note: "专用车型:帕杰罗",
  },
  {
    model: "TB432-V97",
    slug: "tb432-v97",
    series: "T",
    axle: "后轮",
    description: "分体锻造四活塞套件",
    construction: "分体锻造",
    pistonCount: 4,
    colors: ["红色", "黄色", "银色", "阳极氧化灰"],
    fitments: [{ wheelInch: 17, rotorMm: 355 }],
    note: "专用车型:帕杰罗",
  },
  {
    model: "TC443",
    slug: "tc443",
    series: "T",
    axle: "前轮",
    description: "分体锻造四活塞套件",
    construction: "分体锻造",
    pistonCount: 4,
    colors: ["红色", "黄色", "银色", "阳极氧化灰"],
    fitments: [{ wheelInch: 15, rotorMm: 290 }],
    note: "专用车型:吉姆尼",
  },
  {
    model: "T665/T683/T691",
    slug: "t665-t683-t691",
    series: "T",
    axle: "前轮",
    description: "分体锻造六活塞套件",
    construction: "分体锻造",
    pistonCount: 6,
    colors: ["红色", "黄色", "银色", "阳极氧化灰"],
    fitments: [{ wheelInch: 17, rotorMm: 332 }, { wheelInch: 18, rotorMm: 355 }],
    note: null,
  },
  {
    model: "T872",
    slug: "t872",
    series: "T",
    axle: "前轮",
    description: "分体锻造八活塞套件",
    construction: "分体锻造",
    pistonCount: 8,
    colors: ["红色", "黄色", "银色", "阳极氧化灰"],
    fitments: [{ wheelInch: 20, rotorMm: 400 }, { wheelInch: 21, rotorMm: 410 }, { wheelInch: 21, rotorMm: 420 }],
    note: null,
  },
  {
    model: "GT40-MONO",
    slug: "gt40-mono",
    series: "GT",
    axle: "前轮",
    description: "一体式锻造大四活塞套件",
    construction: "一体式锻造",
    pistonCount: 4,
    colors: ["阳极氧化灰"],
    fitments: [{ wheelInch: 15, rotorMm: 285 }, { wheelInch: 16, rotorMm: 296 }, { wheelInch: 17, rotorMm: 330 }],
    note: null,
  },
  {
    model: "GTS4",
    slug: "gts4",
    series: "GT",
    axle: "前轮",
    description: "一体式锻造四活塞套件",
    construction: "一体式锻造",
    pistonCount: 4,
    colors: ["阳极氧化灰"],
    fitments: [{ wheelInch: 17, rotorMm: 330 }, { wheelInch: 18, rotorMm: 355 }],
    note: null,
  },
  {
    model: "GT60-MONO",
    slug: "gt60-mono",
    series: "GT",
    axle: "前轮",
    description: "一体式锻造大六活塞套件",
    construction: "一体式锻造",
    pistonCount: 6,
    colors: ["阳极氧化灰"],
    fitments: [{ wheelInch: 18, rotorMm: 355 }, { wheelInch: 19, rotorMm: 378 }, { wheelInch: 19, rotorMm: 380 }, { wheelInch: 20, rotorMm: 390 }],
    note: null,
  },
  {
    model: "GTS4-R",
    slug: "gts4-r",
    series: "GT",
    axle: "后轮",
    description: "一体式锻造四活塞套件",
    construction: "一体式锻造",
    pistonCount: 4,
    colors: ["阳极氧化灰"],
    fitments: [{ wheelInch: 17, rotorMm: 330 }, { wheelInch: 18, rotorMm: 345 }, { wheelInch: 18, rotorMm: 355 }, { wheelInch: 19, rotorMm: 380 }],
    note: null,
  },
  {
    model: "GTS6",
    slug: "gts6",
    series: "GT",
    axle: "前轮",
    description: "一体式锻造六活塞套件",
    construction: "一体式锻造",
    pistonCount: 6,
    colors: ["阳极氧化灰"],
    fitments: [{ wheelInch: 18, rotorMm: 355 }, { wheelInch: 19, rotorMm: 378 }],
    note: null,
  },
  {
    model: "钛合金螺杆",
    slug: "ti-lug-bolts",
    series: "HARDWARE",
    axle: null,
    description: "钛合金锻造轮毂螺杆",
    construction: "钛合金锻造",
    pistonCount: null,
    colors: ["烤蓝", "原钛"],
    fitments: [],
    note: null,
  },
  {
    model: "钛合金螺母",
    slug: "ti-lug-nuts",
    series: "HARDWARE",
    axle: null,
    description: "钛合金锻造轮毂螺母",
    construction: "钛合金锻造",
    pistonCount: null,
    colors: ["烤蓝", "原钛"],
    fitments: [],
    note: null,
  },
] as const;

export const TEI_SERIES: readonly TeiSeriesMeta[] = [
  { code: "S", name: "街道特调 S 系列", tagline: "高性能街道取向的竞技级一体锻造卡钳", count: 5 },
  { code: "P", name: "街道特调 P 系列", tagline: "兼顾性能与性价比的分体锻造街道卡钳", count: 8 },
  { code: "REAR", name: "后轮套装系列", tagline: "街道后轮配套与机电一体方案", count: 5 },
  { code: "T", name: "越野 / 皮卡 T 系列", tagline: "面向越野、皮卡、硬派 SUV 的强化制动", count: 8 },
  { code: "GT", name: "赛事 GT 系列", tagline: "赛事级一体式 MONO 锻造工艺", count: 5 },
  { code: "HARDWARE", name: "钛合金配件", tagline: "锻造轮毂螺丝", count: 2 },
] as const;

/** 图片 URL 辅助 */
export const teiImagePath = (slug: string): string => `/images/products/tei/${slug}.webp`;

/** 按 slug 查产品 */
export function getTeiProduct(slug: string): TeiProduct | undefined {
  return TEI_PRODUCTS.find((p) => p.slug === slug);
}

/** 同系列其它产品(推荐位,最多 4 个) */
export function getTeiRelated(slug: string): readonly TeiProduct[] {
  const cur = getTeiProduct(slug);
  if (!cur) return [];
  return TEI_PRODUCTS.filter((p) => p.series === cur.series && p.slug !== slug).slice(0, 4);
}