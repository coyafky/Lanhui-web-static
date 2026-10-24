/**
 * 魏牌 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs wey --apply`
 * 源：`src/lib/fitment/wey.ts`（数据行）+ 源资料《车型适配库和文件/魏牌.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type WeyModelGroupKey = "vv-series" | "coffee-series" | "mpv-series";

export const WEY_MODEL_GROUP_LABELS: Record<WeyModelGroupKey, string> = {
  "vv-series": "早期 SUV · VV 系列 · 4 门 5 座",
  "coffee-series": "咖啡系列 · 城市 SUV · 4 门 5 座",
  "mpv-series": "六 / 七座 MPV · 5 门 6–7 座",
};

export const WEY_MODEL_GROUPS: WeyModelGroupKey[] = [
  "vv-series",
  "coffee-series",
  "mpv-series",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: WeyModelGroupKey;
  /** 合并进来的原始数据行（用于与适配库逐字对账） */
  readonly sourceModels: readonly string[];
  /** 变体备注：配置差异压成一行，无则为空串 */
  readonly note: string;
  /** 该车系支持的项目名 */
  readonly projects: readonly string[];
  /** 适配备注条数 */
  readonly specCount: number;
  /** 已登记的适配产品图 */
  readonly images: readonly { model: string; project: string; path: string }[];
  /** 车系子页（仅在 product-routes.ts 登记过才给） */
  readonly subpage?: string;
}

export const weyModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "P8",
    group: "vv-series",
    sourceModels: ["P8"],
    note: "",
    projects: ["电动踏板", "平面尾箱垫", "360全包尾箱"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "VV5",
    group: "vv-series",
    sourceModels: ["VV5"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫"],
    specCount: 4,
    images: [
      { model: "VV5", project: "底盘护板", path: "/images/products/wey/fitment/vv5-skid-plate.webp" },
    ],
  },
  {
    displayName: "VV6",
    group: "vv-series",
    sourceModels: ["VV6"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "VV7",
    group: "vv-series",
    sourceModels: ["VV7"],
    note: "",
    projects: ["电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "玛奇朵",
    group: "coffee-series",
    sourceModels: ["玛奇朵"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "摩卡",
    group: "coffee-series",
    sourceModels: ["摩卡"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 7,
    images: [
      { model: "摩卡", project: "底盘护板", path: "/images/products/wey/fitment/mocha-skid-plate.webp" },
    ],
    subpage: "/product/wey/mocha",
  },
  {
    displayName: "拿铁",
    group: "coffee-series",
    sourceModels: ["拿铁"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "高山",
    group: "mpv-series",
    sourceModels: ["高山"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 11,
    images: [
      { model: "高山", project: "底盘护板", path: "/images/products/wey/fitment/gaoshan-skid-plate.webp" },
    ],
    subpage: "/product/gaoshan",
  },
  {
    displayName: "蓝山",
    group: "mpv-series",
    sourceModels: ["蓝山"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 10,
    images: [
      { model: "蓝山", project: "底盘护板", path: "/images/products/wey/fitment/lanshan-skid-plate.webp" },
    ],
    subpage: "/product/wey/lanshan",
  },
  {
    displayName: "V9X",
    group: "mpv-series",
    sourceModels: ["V9X"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 6,
    images: [
      { model: "V9X", project: "底盘护板", path: "/images/products/wey/fitment/v9x-skid-plate.webp" },
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const WEY_MODEL_CARD_COUNT = 10;
/** 合并前的原始数据行数（用于与适配库对账） */
export const WEY_SOURCE_ROW_COUNT = 10;
