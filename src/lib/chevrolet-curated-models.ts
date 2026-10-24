/**
 * 雪佛兰 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs chevrolet --apply`
 * 源：`src/lib/fitment/chevrolet.ts`（数据行）+ 源资料《车型适配库和文件/雪佛兰.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type ChevroletModelGroupKey = "pickup" | "suv" | "sedan" | "compact";

export const CHEVROLET_MODEL_GROUP_LABELS: Record<ChevroletModelGroupKey, string> = {
  "pickup": "皮卡系列 · undefined",
  "suv": "SUV 系列 · undefined",
  "sedan": "轿车系列 · undefined",
  "compact": "小型家用 · undefined",
};

export const CHEVROLET_MODEL_GROUPS: ChevroletModelGroupKey[] = [
  "pickup",
  "suv",
  "sedan",
  "compact",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: ChevroletModelGroupKey;
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

export const chevroletModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "索罗德",
    group: "pickup",
    sourceModels: ["索罗德"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "创界",
    group: "suv",
    sourceModels: ["创界"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "创酷",
    group: "suv",
    sourceModels: ["创酷"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "开拓者",
    group: "suv",
    sourceModels: ["开拓者"],
    note: "",
    projects: ["底盘护板", "电动踏板"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "科帕奇",
    group: "suv",
    sourceModels: ["科帕奇"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "探界者",
    group: "suv",
    sourceModels: ["探界者"],
    note: "",
    projects: ["底盘护板", "电动踏板"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "沃兰多",
    group: "suv",
    sourceModels: ["沃兰多"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "爱唯欧",
    group: "compact",
    sourceModels: ["爱唯欧"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "乐风",
    group: "compact",
    sourceModels: ["乐风"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "赛欧",
    group: "compact",
    sourceModels: ["赛欧"],
    note: "",
    projects: ["底盘护板"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "科鲁泽",
    group: "sedan",
    sourceModels: ["科鲁泽"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "科鲁兹",
    group: "sedan",
    sourceModels: ["科鲁兹"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "科沃兹",
    group: "sedan",
    sourceModels: ["科沃兹"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "迈锐宝",
    group: "sedan",
    sourceModels: ["迈锐宝"],
    note: "",
    projects: ["底盘护板"],
    specCount: 2,
    images: [
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const CHEVROLET_MODEL_CARD_COUNT = 14;
/** 合并前的原始数据行数（用于与适配库对账） */
export const CHEVROLET_SOURCE_ROW_COUNT = 14;
