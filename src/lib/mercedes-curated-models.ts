/**
 * 奔驰 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs mercedes --apply`
 * 源：`src/lib/fitment/mercedes.ts`（数据行）+ 源资料《车型适配库和文件/奔驰.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type MercedesModelGroupKey = "sedan" | "suv" | "eq" | "mpv" | "smart" | "amg" | "wheel";

export const MERCEDES_MODEL_GROUP_LABELS: Record<MercedesModelGroupKey, string> = {
  "sedan": "轿车（A/C/E/S 级等） · undefined",
  "suv": "SUV（G/GL 系） · undefined",
  "eq": "EQ 纯电系列 · undefined",
  "mpv": "MPV / 商务（V 级 / 威霆 / 唯雅诺） · undefined",
  "smart": "smart · undefined",
  "amg": "AMG 高性能 · undefined",
  "wheel": "轮毂款式（库存款式） · undefined",
};

export const MERCEDES_MODEL_GROUPS: MercedesModelGroupKey[] = [
  "sedan",
  "suv",
  "eq",
  "mpv",
  "smart",
  "amg",
  "wheel",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: MercedesModelGroupKey;
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

export const mercedesModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "轮毂款式（库存款式）",
    group: "wheel",
    sourceModels: ["款式01", "款式02", "款式03", "款式04", "款式05", "款式06", "款式07", "款式08", "款式09", "款式10", "款式11", "款式12", "款式13", "款式14", "款式15", "款式16", "款式17", "款式18", "款式19", "款式20", "款式21", "款式22", "款式23", "款式24", "款式25", "款式26", "款式27", "款式28", "款式29", "款式30", "款式31", "款式32", "款式33", "款式34", "款式35", "款式36", "款式37", "款式38", "款式39", "款式40", "款式41", "款式42", "款式43", "款式44"],
    note: "原始资料中的轮毂库存款式条目，非具体车型",
    projects: ["轮毂"],
    specCount: 321,
    images: [
    ],
  },
  {
    displayName: "EQE SUV",
    group: "eq",
    sourceModels: ["SUV-EQE-500KM"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "smart forfour",
    group: "smart",
    sourceModels: ["smart forfour", "SMART forfour"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "smart fortwo",
    group: "smart",
    sourceModels: ["smart fortwo", "SMART fortwo"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "smart 精灵系列",
    group: "smart",
    sourceModels: ["smart精灵#1", "smart精灵#3", "smart精灵#5", "SMART 精灵#1", "SMART 精灵#3", "SMART 精灵#5", "smart精灵#1"],
    note: "含精灵 #1 / #3 / #5",
    projects: ["平面尾箱垫", "360全包尾箱", "360软包脚垫"],
    specCount: 16,
    images: [
    ],
  },
  {
    displayName: "AMG GT",
    group: "amg",
    sourceModels: ["AMG GT", "AMG-GT"],
    note: "含 AMG-GT 写法",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "威霆",
    group: "mpv",
    sourceModels: ["威霆", "威霆 MPV 不盖滑道", "威霆 MPV"],
    note: "含 MPV 与「不盖滑道」版本",
    projects: ["360软包脚垫"],
    specCount: 8,
    images: [
    ],
  },
  {
    displayName: "唯雅诺",
    group: "mpv",
    sourceModels: ["唯雅诺", "唯雅诺 MPV 不盖滑道", "唯雅诺 MPV"],
    note: "含 MPV 与「不盖滑道」版本",
    projects: ["360软包脚垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "V260",
    group: "mpv",
    sourceModels: ["V260 低配 MPV", "V260 高配 MPV", "V260L MPV"],
    note: "含低配 / 高配 / V260L 版本",
    projects: ["360软包脚垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "V 级",
    group: "mpv",
    sourceModels: ["V级"],
    note: "",
    projects: ["360软包脚垫"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "EQA",
    group: "eq",
    sourceModels: ["EQA"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "EQB",
    group: "eq",
    sourceModels: ["EQB", "EQB260"],
    note: "含 EQB260 版本",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "EQC",
    group: "eq",
    sourceModels: ["EQC"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "EQE",
    group: "eq",
    sourceModels: ["EQE", "EQE EV 轿车", "EQE SUV"],
    note: "含「EV 轿车」与 SUV 版本",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "EQS",
    group: "eq",
    sourceModels: ["EQS", "EQS SUV", "EQS 轿车"],
    note: "含轿车与 SUV 版本",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "G 级",
    group: "suv",
    sourceModels: ["G级", "G级 右呔", "G级 二排带杯架", "G级/适配右tai", "G级/适配右呔"],
    note: "含右呔 / 二排带杯架 / 适配右tai 版本",
    projects: ["360全包尾箱", "360软包脚垫", "电动踏板", "平面尾箱垫"],
    specCount: 11,
    images: [
    ],
  },
  {
    displayName: "GL",
    group: "suv",
    sourceModels: ["GL"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"],
    specCount: 11,
    images: [
    ],
  },
  {
    displayName: "GLA",
    group: "suv",
    sourceModels: ["GLA", "GLA200"],
    note: "含 GLA200",
    projects: ["360全包尾箱", "底盘护板"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "GLB",
    group: "suv",
    sourceModels: ["GLB", "GLB200"],
    note: "含 GLB200",
    projects: ["底盘护板", "电动踏板", "平面尾箱垫"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "GLC",
    group: "suv",
    sourceModels: ["GLC", "GLC260L"],
    note: "含 GLC260L",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫", "小桌板"],
    specCount: 10,
    images: [
    ],
  },
  {
    displayName: "GLE",
    group: "suv",
    sourceModels: ["GLE"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "电动踏板"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "GLK",
    group: "suv",
    sourceModels: ["GLK", "GLK级"],
    note: "含 GLK 级",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "GLS",
    group: "suv",
    sourceModels: ["GLS"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"],
    specCount: 15,
    images: [
    ],
  },
  {
    displayName: "ML",
    group: "suv",
    sourceModels: ["ML"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"],
    specCount: 8,
    images: [
    ],
  },
  {
    displayName: "A 级",
    group: "sedan",
    sourceModels: ["A级", "A200L"],
    note: "含 A200L",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 15,
    images: [
    ],
  },
  {
    displayName: "B 级",
    group: "sedan",
    sourceModels: ["B级", "B200"],
    note: "含 B200",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 10,
    images: [
    ],
  },
  {
    displayName: "C 级",
    group: "sedan",
    sourceModels: ["C级", "C260L"],
    note: "含 C260L",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 24,
    images: [
    ],
  },
  {
    displayName: "E 级",
    group: "sedan",
    sourceModels: ["E级", "E300L"],
    note: "含 E300L",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 36,
    images: [
    ],
  },
  {
    displayName: "S 级",
    group: "sedan",
    sourceModels: ["S级", "S450L"],
    note: "含 S450L",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫", "小桌板"],
    specCount: 24,
    images: [
    ],
  },
  {
    displayName: "CLA",
    group: "sedan",
    sourceModels: ["CLA", "CLA200"],
    note: "含 CLA200",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 8,
    images: [
    ],
  },
  {
    displayName: "CLE",
    group: "sedan",
    sourceModels: ["CLE", "CLE 硬顶轿跑"],
    note: "含硬顶轿跑",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "R 级",
    group: "mpv",
    sourceModels: ["R级", "R级 原车6座做4座", "R级 原车7座做7座", "R级 原车6座"],
    note: "含原车 6/7 座布局版本",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "SL 级",
    group: "sedan",
    sourceModels: ["SL级"],
    note: "",
    projects: ["平面尾箱垫"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "通用适配",
    group: "suv",
    sourceModels: ["通用适配"],
    note: "通用适配条目",
    projects: ["轮毂"],
    specCount: 13,
    images: [
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const MERCEDES_MODEL_CARD_COUNT = 34;
/** 合并前的原始数据行数（用于与适配库对账） */
export const MERCEDES_SOURCE_ROW_COUNT = 115;
