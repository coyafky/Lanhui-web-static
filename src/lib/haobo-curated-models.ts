/**
 * 昊铂 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs haobo --apply`
 * 源：`src/lib/fitment/haobo.ts`（数据行）+ 源资料《车型适配库和文件/昊铂.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type HaoboModelGroupKey = "sports" | "sedan" | "suv" | "mpv";

export const HAOBO_MODEL_GROUP_LABELS: Record<HaoboModelGroupKey, string> = {
  "sports": "超跑 · undefined",
  "sedan": "轿跑与轿车 · undefined",
  "suv": "SUV · undefined",
  "mpv": "MPV · undefined",
};

export const HAOBO_MODEL_GROUPS: HaoboModelGroupKey[] = [
  "sports",
  "sedan",
  "suv",
  "mpv",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: HaoboModelGroupKey;
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

export const haoboModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "SSR",
    group: "sports",
    sourceModels: ["SSR"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "GT",
    group: "sedan",
    sourceModels: ["GT"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "HL",
    group: "sedan",
    sourceModels: ["HL"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "A800",
    group: "suv",
    sourceModels: ["A800"],
    note: "",
    projects: ["底盘护板"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "HT",
    group: "suv",
    sourceModels: ["HT"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "S600增程.四驱",
    group: "mpv",
    sourceModels: ["S600增程.四驱"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "S600纯电660续航后驱",
    group: "mpv",
    sourceModels: ["S600纯电660续航后驱"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const HAOBO_MODEL_CARD_COUNT = 7;
/** 合并前的原始数据行数（用于与适配库对账） */
export const HAOBO_SOURCE_ROW_COUNT = 7;
