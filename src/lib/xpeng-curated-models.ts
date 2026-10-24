/**
 * 小鹏 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs xpeng --apply`
 * 源：`src/lib/fitment/xpeng.ts`（数据行）+ 源资料《车型适配库和文件/小鹏.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type XpengModelGroupKey = "sedan" | "suv" | "mpv";

export const XPENG_MODEL_GROUP_LABELS: Record<XpengModelGroupKey, string> = {
  "sedan": "轿车 · undefined",
  "suv": "SUV · undefined",
  "mpv": "MPV · undefined",
};

export const XPENG_MODEL_GROUPS: XpengModelGroupKey[] = [
  "sedan",
  "suv",
  "mpv",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: XpengModelGroupKey;
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

export const xpengModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "X9",
    group: "mpv",
    sourceModels: ["X9"],
    note: "",
    projects: ["底盘护板", "包围", "360软包脚垫", "平面尾箱垫"],
    specCount: 9,
    images: [
    ],
  },
  {
    displayName: "G6",
    group: "suv",
    sourceModels: ["G6"],
    note: "",
    projects: ["底盘护板", "小桌板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "G7",
    group: "suv",
    sourceModels: ["G7"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "G9",
    group: "suv",
    sourceModels: ["G9"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "GX",
    group: "suv",
    sourceModels: ["GX"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "360全包尾箱"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "G3",
    group: "suv",
    sourceModels: ["G3"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "M03",
    group: "sedan",
    sourceModels: ["M03"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "P5",
    group: "sedan",
    sourceModels: ["P5"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "P7",
    group: "sedan",
    sourceModels: ["P7"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 10,
    images: [
    ],
  },
  {
    displayName: "L03",
    group: "sedan",
    sourceModels: ["L03"],
    note: "",
    projects: ["360软包脚垫", "底盘护板"],
    specCount: 2,
    images: [
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const XPENG_MODEL_CARD_COUNT = 10;
/** 合并前的原始数据行数（用于与适配库对账） */
export const XPENG_SOURCE_ROW_COUNT = 10;
