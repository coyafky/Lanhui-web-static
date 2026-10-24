/**
 * 特斯拉 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs tesla --apply`
 * 源：`src/lib/fitment/tesla.ts`（数据行）+ 源资料《车型适配库和文件/特斯拉.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type TeslaModelGroupKey = "model-3-y" | "model-s-x";

export const TESLA_MODEL_GROUP_LABELS: Record<TeslaModelGroupKey, string> = {
  "model-3-y": "Model 3 / Y 系列 · undefined",
  "model-s-x": "Model S / X 系列 · undefined",
};

export const TESLA_MODEL_GROUPS: TeslaModelGroupKey[] = [
  "model-3-y",
  "model-s-x",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: TeslaModelGroupKey;
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

export const teslaModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "Model 3",
    group: "model-3-y",
    sourceModels: ["Model 3", "Model 3/Y"],
    note: "含 3/Y 通用条目",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "小桌板"],
    specCount: 9,
    images: [
    ],
  },
  {
    displayName: "Model Y",
    group: "model-3-y",
    sourceModels: ["Model Y", "Model Y-L"],
    note: "含 Y-L 长续航版本",
    projects: ["底盘护板", "包围", "360软包脚垫", "平面尾箱垫", "360全包尾箱", "小桌板"],
    specCount: 25,
    images: [
    ],
  },
  {
    displayName: "Model S",
    group: "model-s-x",
    sourceModels: ["Model S"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "Model X",
    group: "model-s-x",
    sourceModels: ["Model X"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 17,
    images: [
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const TESLA_MODEL_CARD_COUNT = 4;
/** 合并前的原始数据行数（用于与适配库对账） */
export const TESLA_SOURCE_ROW_COUNT = 6;
