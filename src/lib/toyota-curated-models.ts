/**
 * 丰田 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs toyota --apply`
 * 源：`src/lib/fitment/toyota.ts`（数据行）+ 源资料《车型适配库和文件/丰田.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type ToyotaModelGroupKey = "sedan" | "suv" | "mpv" | "pickup";

export const TOYOTA_MODEL_GROUP_LABELS: Record<ToyotaModelGroupKey, string> = {
  "sedan": "轿车 · undefined",
  "suv": "SUV · undefined",
  "mpv": "MPV · undefined",
  "pickup": "皮卡 / 越野 · undefined",
};

export const TOYOTA_MODEL_GROUPS: ToyotaModelGroupKey[] = [
  "sedan",
  "suv",
  "mpv",
  "pickup",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: ToyotaModelGroupKey;
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

export const toyotaModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "兰德酷路泽",
    group: "suv",
    sourceModels: ["兰德酷路泽", "酷路泽 原车7座做5座", "酷路泽 原车7座做7座", "酷路泽 7位做5位", "陆地巡洋舰 原车7座做5座", "陆地巡洋舰 原车5座", "FJ酷路泽 右呔车", "酷路泽", "兰德酷路泽LC100", "兰德酷路泽LC120", "兰德酷路泽LC150", "兰德酷路泽LC200", "兰德酷路泽LC250", "兰德酷路泽LC300", "兰德酷路泽LC71", "兰德酷路泽LC76", "兰德酷路泽LC78", "兰德酷路泽LC79", "兰德酷路泽LC80", "兰德酷路泽LC95"],
    note: "含 LC71–LC300 各代底盘代号、FJ 酷路泽右呔、以及原车 5/7 座布局版本",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 32,
    images: [
    ],
  },
  {
    displayName: "4Runner 超霸 / Fortuner 穿越者",
    group: "pickup",
    sourceModels: ["4Runner超霸", "Fortuner穿越者", "超霸4RUNNER", "超霸4RUNNER 原车7座做5座", "超霸4RUNNER 原车7座做7座", "SR5/穿越者 原车7座做5座", "SR5/穿越者 原车7座做7座", "穿越者"],
    note: "含超霸 4Runner、Fortuner 穿越者、SR5 版本及原车 7 座布局版本",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 15,
    images: [
    ],
  },
  {
    displayName: "赛那 SIENNA",
    group: "mpv",
    sourceModels: ["赛那SIENNA", "塞纳", "塞那 MPV"],
    note: "原始资料中「塞纳 / 塞那 / 赛那SIENNA」为同一车系的不同写法",
    projects: ["360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"],
    specCount: 14,
    images: [
    ],
  },
  {
    displayName: "YARiS L",
    group: "sedan",
    sourceModels: ["YARiS L", "YARiS L致炫", "YARiS L致享"],
    note: "含致炫 / 致享版本",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "bZ4X",
    group: "suv",
    sourceModels: ["bZ4X", "bz4x 左边带音响", "bz4x"],
    note: "含「左边带音响」配置版本",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "bZ3",
    group: "sedan",
    sourceModels: ["bZ3"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "bZ5",
    group: "suv",
    sourceModels: ["bZ5"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "铂智系列",
    group: "suv",
    sourceModels: ["铂智3X", "铂智7"],
    note: "含铂智 3X / 铂智 7",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "小桌板", "后排娱乐屏"],
    specCount: 12,
    images: [
    ],
  },
  {
    displayName: "iA5",
    group: "sedan",
    sourceModels: ["iA5", "iA5 纯电动", "iA5"],
    note: "含纯电动版本",
    projects: ["平面尾箱垫", "360软包脚垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "海拉克斯 Hilux",
    group: "pickup",
    sourceModels: ["海拉克斯", "海拉克斯/Hilux 皮卡"],
    note: "",
    projects: ["360软包脚垫", "底盘护板"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "凯美瑞（佳美）",
    group: "sedan",
    sourceModels: ["佳美"],
    note: "原始资料中「佳美」为凯美瑞的旧称",
    projects: ["360软包脚垫"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "普瑞维亚",
    group: "mpv",
    sourceModels: ["普瑞维亚", "普瑞维亚 MPV"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "埃尔法",
    group: "mpv",
    sourceModels: ["埃尔法"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 14,
    images: [
    ],
  },
  {
    displayName: "威尔法",
    group: "mpv",
    sourceModels: ["威尔法"],
    note: "",
    projects: ["360软包脚垫", "底盘护板"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "格瑞维亚",
    group: "mpv",
    sourceModels: ["格瑞维亚"],
    note: "",
    projects: ["电动踏板", "吸顶电视"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "格兰维亚",
    group: "mpv",
    sourceModels: ["格兰维亚"],
    note: "",
    projects: ["360软包脚垫"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "海狮",
    group: "mpv",
    sourceModels: ["海狮"],
    note: "",
    projects: ["小桌板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "坦途",
    group: "pickup",
    sourceModels: ["坦途"],
    note: "",
    projects: ["360软包脚垫", "底盘护板"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "Tacoma 塔库玛",
    group: "pickup",
    sourceModels: ["Tacoma塔库玛"],
    note: "",
    projects: ["底盘护板"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "普拉多",
    group: "suv",
    sourceModels: ["普拉多"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 15,
    images: [
    ],
  },
  {
    displayName: "汉兰达",
    group: "suv",
    sourceModels: ["汉兰达"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"],
    specCount: 21,
    images: [
    ],
  },
  {
    displayName: "RAV4 荣放",
    group: "suv",
    sourceModels: ["RAV4荣放"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"],
    specCount: 16,
    images: [
    ],
  },
  {
    displayName: "锋兰达",
    group: "suv",
    sourceModels: ["锋兰达"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"],
    specCount: 9,
    images: [
    ],
  },
  {
    displayName: "红杉",
    group: "suv",
    sourceModels: ["红杉"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 12,
    images: [
    ],
  },
  {
    displayName: "奕泽",
    group: "suv",
    sourceModels: ["奕泽"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 8,
    images: [
    ],
  },
  {
    displayName: "威兰达",
    group: "suv",
    sourceModels: ["威兰达"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"],
    specCount: 8,
    images: [
    ],
  },
  {
    displayName: "凌放",
    group: "suv",
    sourceModels: ["凌放"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "C-HR",
    group: "suv",
    sourceModels: ["C-HR"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "威飒",
    group: "suv",
    sourceModels: ["威飒"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "电动踏板"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "FJ Cruiser",
    group: "suv",
    sourceModels: ["FJ Cruiser"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "特锐",
    group: "suv",
    sourceModels: ["特锐"],
    note: "",
    projects: ["360软包脚垫"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "Veloz 维洛兹",
    group: "suv",
    sourceModels: ["Veloz维洛兹"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "卡罗拉锐放",
    group: "suv",
    sourceModels: ["卡罗拉锐放"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "卡罗拉",
    group: "sedan",
    sourceModels: ["卡罗拉"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 8,
    images: [
    ],
  },
  {
    displayName: "凯美瑞",
    group: "sedan",
    sourceModels: ["凯美瑞"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 8,
    images: [
    ],
  },
  {
    displayName: "皇冠陆放",
    group: "suv",
    sourceModels: ["皇冠陆放"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "皇冠",
    group: "sedan",
    sourceModels: ["皇冠"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 8,
    images: [
    ],
  },
  {
    displayName: "亚洲龙",
    group: "sedan",
    sourceModels: ["亚洲龙"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "亚洲狮",
    group: "sedan",
    sourceModels: ["亚洲狮"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "雷凌",
    group: "sedan",
    sourceModels: ["雷凌"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "威驰",
    group: "sedan",
    sourceModels: ["威驰"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "锐志",
    group: "sedan",
    sourceModels: ["锐志"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "花冠",
    group: "sedan",
    sourceModels: ["花冠"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "凌尚",
    group: "sedan",
    sourceModels: ["凌尚"],
    note: "",
    projects: ["360软包脚垫", "底盘护板"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "雅力士",
    group: "sedan",
    sourceModels: ["雅力士"],
    note: "",
    projects: ["360软包脚垫", "底盘护板"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "逸致",
    group: "sedan",
    sourceModels: ["逸致"],
    note: "",
    projects: ["360软包脚垫", "底盘护板"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "普锐斯",
    group: "sedan",
    sourceModels: ["普锐斯"],
    note: "",
    projects: ["360软包脚垫", "底盘护板"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "86",
    group: "sedan",
    sourceModels: ["86"],
    note: "",
    projects: ["360软包脚垫"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "轮毂款式（库存款式）",
    group: "suv",
    sourceModels: ["款式01", "款式02", "款式03", "款式04", "款式05", "款式06", "款式07", "款式08", "款式09"],
    note: "原始资料中的轮毂库存款式条目，非具体车型",
    projects: ["轮毂"],
    specCount: 49,
    images: [
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const TOYOTA_MODEL_CARD_COUNT = 49;
/** 合并前的原始数据行数（用于与适配库对账） */
export const TOYOTA_SOURCE_ROW_COUNT = 94;
