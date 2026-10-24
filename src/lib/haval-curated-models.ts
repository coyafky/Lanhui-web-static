/**
 * 哈弗 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs haval --apply`
 * 源：`src/lib/fitment/haval.ts`（数据行）+ 源资料《车型适配库和文件/哈弗.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type HavalModelGroupKey = "h-series" | "f-series" | "dog-series" | "hi4";

export const HAVAL_MODEL_GROUP_LABELS: Record<HavalModelGroupKey, string> = {
  "h-series": "H系 / M系 · 城市SUV · undefined",
  "f-series": "F系与入门 · 轿跑SUV · undefined",
  "dog-series": "狗系 · 轻越野 · undefined",
  "hi4": "Hi4 新能源 · undefined",
};

export const HAVAL_MODEL_GROUPS: HavalModelGroupKey[] = [
  "h-series",
  "f-series",
  "dog-series",
  "hi4",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: HavalModelGroupKey;
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

export const havalModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "H1",
    group: "h-series",
    sourceModels: ["H1"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "H2",
    group: "h-series",
    sourceModels: ["H2"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "H4",
    group: "h-series",
    sourceModels: ["H4"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "H5",
    group: "h-series",
    sourceModels: ["H5"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "H6",
    group: "h-series",
    sourceModels: ["H6"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 38,
    images: [
    ],
  },
  {
    displayName: "H7",
    group: "h-series",
    sourceModels: ["H7"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 8,
    images: [
    ],
  },
  {
    displayName: "H9",
    group: "h-series",
    sourceModels: ["H9"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 18,
    images: [
    ],
  },
  {
    displayName: "M6",
    group: "h-series",
    sourceModels: ["M6"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 9,
    images: [
    ],
  },
  {
    displayName: "H8",
    group: "h-series",
    sourceModels: ["H8"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "H10",
    group: "h-series",
    sourceModels: ["H10"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "赤兔",
    group: "f-series",
    sourceModels: ["赤兔"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "初恋",
    group: "f-series",
    sourceModels: ["初恋"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "神兽",
    group: "f-series",
    sourceModels: ["神兽"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "F5",
    group: "f-series",
    sourceModels: ["F5"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "F7",
    group: "f-series",
    sourceModels: ["F7"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "大狗",
    group: "dog-series",
    sourceModels: ["大狗"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 15,
    images: [
    ],
  },
  {
    displayName: "酷狗",
    group: "dog-series",
    sourceModels: ["酷狗"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "猛龙",
    group: "hi4",
    sourceModels: ["猛龙"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 22,
    images: [
    ],
  },
  {
    displayName: "枭龙",
    group: "hi4",
    sourceModels: ["枭龙"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 10,
    images: [
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const HAVAL_MODEL_CARD_COUNT = 19;
/** 合并前的原始数据行数（用于与适配库对账） */
export const HAVAL_SOURCE_ROW_COUNT = 19;
