/**
 * 大众 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs volkswagen --apply`
 * 源：`src/lib/fitment/volkswagen.ts`（数据行）+ 源资料《车型适配库和文件/大众.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type VolkswagenModelGroupKey = "suv" | "sedan" | "mpv" | "nev";

export const VOLKSWAGEN_MODEL_GROUP_LABELS: Record<VolkswagenModelGroupKey, string> = {
  "suv": "SUV · undefined",
  "sedan": "轿车 · undefined",
  "mpv": "MPV / 旅行 · undefined",
  "nev": "新能源 · undefined",
};

export const VOLKSWAGEN_MODEL_GROUPS: VolkswagenModelGroupKey[] = [
  "suv",
  "sedan",
  "mpv",
  "nev",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: VolkswagenModelGroupKey;
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

export const volkswagenModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "揽巡",
    group: "suv",
    sourceModels: ["揽巡"],
    note: "",
    projects: ["底盘护板", "电动踏板"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "探歌",
    group: "suv",
    sourceModels: ["探歌"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "探影",
    group: "suv",
    sourceModels: ["探影"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "探岳",
    group: "suv",
    sourceModels: ["探岳"],
    note: "",
    projects: ["底盘护板", "电动踏板"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "途昂",
    group: "suv",
    sourceModels: ["途昂"],
    note: "",
    projects: ["底盘护板", "电动踏板"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "途观",
    group: "suv",
    sourceModels: ["途观"],
    note: "",
    projects: ["底盘护板", "电动踏板"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "途铠",
    group: "suv",
    sourceModels: ["途铠"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "途锐",
    group: "suv",
    sourceModels: ["途锐"],
    note: "",
    projects: ["底盘护板", "电动踏板"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "途岳",
    group: "suv",
    sourceModels: ["途岳"],
    note: "",
    projects: ["底盘护板", "电动踏板"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "揽境",
    group: "suv",
    sourceModels: ["揽境"],
    note: "",
    projects: ["电动踏板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "开迪",
    group: "mpv",
    sourceModels: ["开迪"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "途安",
    group: "mpv",
    sourceModels: ["途安"],
    note: "",
    projects: ["底盘护板"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "威然",
    group: "mpv",
    sourceModels: ["威然"],
    note: "",
    projects: ["底盘护板", "电动踏板"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "蔚揽",
    group: "mpv",
    sourceModels: ["蔚揽"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "蔚领",
    group: "mpv",
    sourceModels: ["蔚领"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "夏朗",
    group: "mpv",
    sourceModels: ["夏朗"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "ID.ERA 9X",
    group: "nev",
    sourceModels: ["ID.ERA 9X"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "宝来",
    group: "sedan",
    sourceModels: ["宝来"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "高尔夫",
    group: "sedan",
    sourceModels: ["高尔夫"],
    note: "",
    projects: ["底盘护板"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "辉昂",
    group: "sedan",
    sourceModels: ["辉昂"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "甲壳虫",
    group: "sedan",
    sourceModels: ["甲壳虫"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "捷达",
    group: "sedan",
    sourceModels: ["捷达"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "朗境",
    group: "sedan",
    sourceModels: ["朗境"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "朗行",
    group: "sedan",
    sourceModels: ["朗行"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "朗逸",
    group: "sedan",
    sourceModels: ["朗逸"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "凌渡",
    group: "sedan",
    sourceModels: ["凌渡"],
    note: "",
    projects: ["底盘护板"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "迈腾",
    group: "sedan",
    sourceModels: ["迈腾"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "帕萨特",
    group: "sedan",
    sourceModels: ["帕萨特"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "桑塔纳",
    group: "sedan",
    sourceModels: ["桑塔纳"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "尚酷",
    group: "sedan",
    sourceModels: ["尚酷"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "速腾",
    group: "sedan",
    sourceModels: ["速腾"],
    note: "",
    projects: ["底盘护板"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "CC",
    group: "sedan",
    sourceModels: ["CC"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "Polo",
    group: "sedan",
    sourceModels: ["Polo"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "R36",
    group: "sedan",
    sourceModels: ["R36"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const VOLKSWAGEN_MODEL_CARD_COUNT = 34;
/** 合并前的原始数据行数（用于与适配库对账） */
export const VOLKSWAGEN_SOURCE_ROW_COUNT = 34;
