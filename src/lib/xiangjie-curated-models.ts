/**
 * 享界 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs xiangjie --apply`
 * 源：`src/lib/fitment/xiangjie.ts`（数据行）+ 源资料《车型适配库和文件/享界.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type XiangjieModelGroupKey = "all";

export const XIANGJIE_MODEL_GROUP_LABELS: Record<XiangjieModelGroupKey, string> = {
  "all": "享界全系 · undefined",
};

export const XIANGJIE_MODEL_GROUPS: XiangjieModelGroupKey[] = [
  "all",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: XiangjieModelGroupKey;
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

export const xiangjieModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "S9",
    group: "all",
    sourceModels: ["S9", "S9T", "S9增程", "S9纯电"],
    note: "含 S9T / 增程 / 纯电版本",
    projects: ["底盘护板"],
    specCount: 4,
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
export const XIANGJIE_MODEL_CARD_COUNT = 2;
/** 合并前的原始数据行数（用于与适配库对账） */
export const XIANGJIE_SOURCE_ROW_COUNT = 5;
