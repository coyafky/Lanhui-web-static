/**
 * 红旗 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs hongqi --apply`
 * 源：`src/lib/fitment/hongqi.ts`（数据行）+ 源资料《车型适配库和文件/红旗.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type HongqiModelGroupKey = "suv" | "sedan" | "nev" | "mpv";

export const HONGQI_MODEL_GROUP_LABELS: Record<HongqiModelGroupKey, string> = {
  "suv": "SUV · undefined",
  "sedan": "轿车 · undefined",
  "nev": "新能源 · undefined",
  "mpv": "MPV · undefined",
};

export const HONGQI_MODEL_GROUPS: HongqiModelGroupKey[] = [
  "suv",
  "sedan",
  "nev",
  "mpv",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: HongqiModelGroupKey;
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

export const hongqiModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "HQ9",
    group: "mpv",
    sourceModels: ["HQ9"],
    note: "",
    projects: ["360软包脚垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "HS5",
    group: "suv",
    sourceModels: ["HS5"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "HS7",
    group: "suv",
    sourceModels: ["HS7"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 25,
    images: [
    ],
  },
  {
    displayName: "HS6",
    group: "suv",
    sourceModels: ["HS6"],
    note: "",
    projects: ["电动踏板", "360软包脚垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "HS3",
    group: "suv",
    sourceModels: ["HS3"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "LS7",
    group: "suv",
    sourceModels: ["LS7"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "E-QM5",
    group: "nev",
    sourceModels: ["E-QM5"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "E-HS3",
    group: "nev",
    sourceModels: ["E-HS3"],
    note: "",
    projects: ["360软包脚垫"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "EH7",
    group: "nev",
    sourceModels: ["EH7"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "E-HS9",
    group: "nev",
    sourceModels: ["E-HS9"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 8,
    images: [
    ],
  },
  {
    displayName: "天工05",
    group: "nev",
    sourceModels: ["天工05"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "天工06",
    group: "nev",
    sourceModels: ["天工06"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "天工08",
    group: "nev",
    sourceModels: ["天工08"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "H5",
    group: "sedan",
    sourceModels: ["H5"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 15,
    images: [
    ],
  },
  {
    displayName: "H9",
    group: "sedan",
    sourceModels: ["H9"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "H6",
    group: "sedan",
    sourceModels: ["H6"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "H7",
    group: "sedan",
    sourceModels: ["H7"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const HONGQI_MODEL_CARD_COUNT = 17;
/** 合并前的原始数据行数（用于与适配库对账） */
export const HONGQI_SOURCE_ROW_COUNT = 17;
