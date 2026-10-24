/**
 * 理想 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs li-auto --apply`
 * 源：`src/lib/fitment/li-auto.ts`（数据行）+ 源资料《车型适配库和文件/理想.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type LiAutoModelGroupKey = "L-series" | "i-series" | "special";

export const LI_AUTO_MODEL_GROUP_LABELS: Record<LiAutoModelGroupKey, string> = {
  "L-series": "L 系列 · 增程 SUV · undefined",
  "i-series": "i 系列 · 纯电 · undefined",
  "special": "MEGA / ONE · undefined",
};

export const LI_AUTO_MODEL_GROUPS: LiAutoModelGroupKey[] = [
  "L-series",
  "i-series",
  "special",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: LiAutoModelGroupKey;
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

export const liAutoModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "焕新版 L7 / L8",
    group: "L-series",
    sourceModels: ["焕新版L7/L8"],
    note: "含 2025 焕新版 L7 与 L8",
    projects: ["吸顶电视"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "焕新版 L6",
    group: "L-series",
    sourceModels: ["焕新版L6"],
    note: "2025 焕新版 L6",
    projects: ["吸顶电视"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "L7 / L8（通用条目）",
    group: "L-series",
    sourceModels: ["L7/L8"],
    note: "原始资料中的合并写法",
    projects: ["吸顶电视"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "L8",
    group: "L-series",
    sourceModels: ["L8-Livis-430续航"],
    note: "含 Livis 430 续航版本",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "L9",
    group: "L-series",
    sourceModels: ["L9livis"],
    note: "含 Livis 版本",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "L6",
    group: "L-series",
    sourceModels: ["L6 300续航"],
    note: "含 300 续航版本",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "L6",
    group: "L-series",
    sourceModels: ["L6"],
    note: "",
    projects: ["底盘护板", "电动踏板", "小桌板", "后排电视", "吸顶电视", "360软包脚垫", "平面尾箱垫"],
    specCount: 13,
    images: [
    ],
  },
  {
    displayName: "L7",
    group: "L-series",
    sourceModels: ["L7"],
    note: "",
    projects: ["底盘护板", "电动踏板", "小桌板", "尾翼", "包围", "后排电视", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 17,
    images: [
    ],
  },
  {
    displayName: "L8",
    group: "L-series",
    sourceModels: ["L8"],
    note: "",
    projects: ["底盘护板", "电动踏板", "小桌板", "尾翼", "地板", "包围", "后排电视", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 20,
    images: [
    ],
  },
  {
    displayName: "L9",
    group: "L-series",
    sourceModels: ["L9"],
    note: "",
    projects: ["底盘护板", "电动踏板", "小桌板", "尾翼", "地板", "包围", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 19,
    images: [
    ],
  },
  {
    displayName: "i6",
    group: "i-series",
    sourceModels: ["i6-720续航"],
    note: "含 720 续航版本",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "i6",
    group: "i-series",
    sourceModels: ["i6"],
    note: "",
    projects: ["底盘护板", "小桌板", "包围", "后排电视", "360软包脚垫", "平面尾箱垫"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "i6（25 款）",
    group: "i-series",
    sourceModels: ["25款理想 i6"],
    note: "",
    projects: ["吸顶电视"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "i8",
    group: "i-series",
    sourceModels: ["i8-720续航"],
    note: "含 720 续航版本",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "i8",
    group: "i-series",
    sourceModels: ["i8"],
    note: "",
    projects: ["底盘护板", "地板", "360软包脚垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "MEGA",
    group: "special",
    sourceModels: ["MEGA"],
    note: "",
    projects: ["地板", "包围", "360软包脚垫", "平面尾箱垫"],
    specCount: 9,
    images: [
    ],
  },
  {
    displayName: "ONE",
    group: "special",
    sourceModels: ["ONE"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 11,
    images: [
    ],
  },
  {
    displayName: "通用适配条目",
    group: "special",
    sourceModels: ["TJ10004", "通用适配", "TJ10002", "TJ10005"],
    note: "原始资料中的通用 / 编码条目",
    projects: ["轮毂"],
    specCount: 11,
    images: [
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const LI_AUTO_MODEL_CARD_COUNT = 18;
/** 合并前的原始数据行数（用于与适配库对账） */
export const LI_AUTO_SOURCE_ROW_COUNT = 21;
