/**
 * 路虎 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs land-rover --apply`
 * 源：`src/lib/fitment/land-rover.ts`（数据行）+ 源资料《车型适配库和文件/路虎.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type LandRoverModelGroupKey = "range-rover" | "discovery" | "defender" | "freelander";

export const LAND_ROVER_MODEL_GROUP_LABELS: Record<LandRoverModelGroupKey, string> = {
  "range-rover": "揽胜系列 · undefined",
  "discovery": "发现系列 · undefined",
  "defender": "卫士系列 · undefined",
  "freelander": "神行者系列 · undefined",
};

export const LAND_ROVER_MODEL_GROUPS: LandRoverModelGroupKey[] = [
  "range-rover",
  "discovery",
  "defender",
  "freelander",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: LandRoverModelGroupKey;
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

export const landRoverModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "揽胜极光",
    group: "range-rover",
    sourceModels: ["揽胜极光"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 15,
    images: [
    ],
  },
  {
    displayName: "揽胜运动版",
    group: "range-rover",
    sourceModels: ["揽胜运动版"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 23,
    images: [
    ],
  },
  {
    displayName: "揽胜行政版",
    group: "range-rover",
    sourceModels: ["揽胜行政版"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 47,
    images: [
    ],
  },
  {
    displayName: "揽胜星脉",
    group: "range-rover",
    sourceModels: ["揽胜星脉"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "发现",
    group: "discovery",
    sourceModels: ["发现"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱", "底盘护板"],
    specCount: 45,
    images: [
    ],
  },
  {
    displayName: "卫士",
    group: "defender",
    sourceModels: ["卫士"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱", "底盘护板"],
    specCount: 13,
    images: [
    ],
  },
  {
    displayName: "神行者",
    group: "freelander",
    sourceModels: ["神行者"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱", "底盘护板"],
    specCount: 5,
    images: [
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const LAND_ROVER_MODEL_CARD_COUNT = 7;
/** 合并前的原始数据行数（用于与适配库对账） */
export const LAND_ROVER_SOURCE_ROW_COUNT = 7;
