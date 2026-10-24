/**
 * 乐道 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs ledao --apply`
 * 源：`src/lib/fitment/ledao.ts`（数据行）+ 源资料《车型适配库和文件/乐道.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type LedaoModelGroupKey = "all";

export const LEDAO_MODEL_GROUP_LABELS: Record<LedaoModelGroupKey, string> = {
  "all": "乐道全系 · undefined",
};

export const LEDAO_MODEL_GROUPS: LedaoModelGroupKey[] = [
  "all",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: LedaoModelGroupKey;
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

export const ledaoModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "L60",
    group: "all",
    sourceModels: ["L60"],
    note: "",
    projects: ["小桌板", "360软包脚垫", "平面尾箱垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "L80",
    group: "all",
    sourceModels: ["L80"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "L90",
    group: "all",
    sourceModels: ["L90"],
    note: "",
    projects: ["底盘护板", "360软包脚垫"],
    specCount: 3,
    images: [
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const LEDAO_MODEL_CARD_COUNT = 3;
/** 合并前的原始数据行数（用于与适配库对账） */
export const LEDAO_SOURCE_ROW_COUNT = 3;
