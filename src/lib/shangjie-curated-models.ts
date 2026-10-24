/**
 * 尚界 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs shangjie --apply`
 * 源：`src/lib/fitment/shangjie.ts`（数据行）+ 源资料《车型适配库和文件/尚界.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type ShangjieModelGroupKey = "all";

export const SHANGJIE_MODEL_GROUP_LABELS: Record<ShangjieModelGroupKey, string> = {
  "all": "尚界全系 · undefined",
};

export const SHANGJIE_MODEL_GROUPS: ShangjieModelGroupKey[] = [
  "all",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: ShangjieModelGroupKey;
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

export const shangjieModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "H5",
    group: "all",
    sourceModels: ["H5", "H5-200续航", "H5纯电-535续航"],
    note: "含 200 续航 / 纯电 535 续航版本",
    projects: ["底盘护板", "小桌板"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "Z7",
    group: "all",
    sourceModels: ["Z7", "Z7T", "Z7纯电Max-732续航"],
    note: "含 Z7T 与纯电 Max 732 续航版本",
    projects: ["底盘护板"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "鸿蒙智行系列",
    group: "all",
    sourceModels: ["鸿蒙智行系列"],
    note: "原始资料中的通用条目",
    projects: ["后排娱乐屏"],
    specCount: 1,
    images: [
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const SHANGJIE_MODEL_CARD_COUNT = 3;
/** 合并前的原始数据行数（用于与适配库对账） */
export const SHANGJIE_SOURCE_ROW_COUNT = 7;
