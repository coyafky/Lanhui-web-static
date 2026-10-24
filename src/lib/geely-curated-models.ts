/**
 * 吉利 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs geely --apply`
 * 源：`src/lib/fitment/geely.ts`（数据行）+ 源资料《车型适配库和文件/吉利.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type GeelyModelGroupKey = "sedan" | "suv" | "nev" | "mpv";

export const GEELY_MODEL_GROUP_LABELS: Record<GeelyModelGroupKey, string> = {
  "sedan": "轿车 · undefined",
  "suv": "SUV / 跨界 · undefined",
  "nev": "新能源（几何 / 星愿 / 熊猫） · undefined",
  "mpv": "MPV · undefined",
};

export const GEELY_MODEL_GROUPS: GeelyModelGroupKey[] = [
  "sedan",
  "suv",
  "nev",
  "mpv",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: GeelyModelGroupKey;
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

export const geelyModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "缤瑞",
    group: "sedan",
    sourceModels: ["缤瑞", "缤瑞COOL"],
    note: "含 COOL 版本",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "缤越",
    group: "suv",
    sourceModels: ["缤越", "缤越COOL", "缤越L", "缤越Pro"],
    note: "含 COOL / L / Pro 版本",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱", "电动踏板"],
    specCount: 18,
    images: [
    ],
  },
  {
    displayName: "博瑞",
    group: "sedan",
    sourceModels: ["博瑞", "博瑞GE"],
    note: "含 GE 版本",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 9,
    images: [
    ],
  },
  {
    displayName: "博越",
    group: "suv",
    sourceModels: ["博越", "博越COOL", "博越L", "博越Pro", "博越X", "博越COOL 智享型"],
    note: "含 COOL / L / Pro / X 与「智享型」版本",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 30,
    images: [
    ],
  },
  {
    displayName: "帝豪",
    group: "sedan",
    sourceModels: ["帝豪", "帝豪EC7", "帝豪GL", "帝豪GS", "帝豪GSE", "帝豪L", "帝豪S"],
    note: "含 EC7 / GL / GS / GSE / L / S 版本",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 38,
    images: [
    ],
  },
  {
    displayName: "远景",
    group: "sedan",
    sourceModels: ["远景", "远景S1", "远景X1", "远景X3", "远景X6"],
    note: "含 S1 / X1 / X3 / X6 版本",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 23,
    images: [
    ],
  },
  {
    displayName: "星越",
    group: "suv",
    sourceModels: ["星越", "星越L", "星越S", "星越L智擎 星云版", "星越L Hi-P增程电动版"],
    note: "含 L / S / 智擎星云版 / Hi-P 增程电动版",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 27,
    images: [
    ],
  },
  {
    displayName: "星瑞",
    group: "sedan",
    sourceModels: ["星瑞"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "星愿",
    group: "nev",
    sourceModels: ["星愿", "星愿310/410"],
    note: "含 310/410 续航版本",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "星舰 7",
    group: "suv",
    sourceModels: ["星舰7"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "豪越",
    group: "suv",
    sourceModels: ["豪越", "豪越L"],
    note: "含 L 版本",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 21,
    images: [
    ],
  },
  {
    displayName: "几何系列",
    group: "nev",
    sourceModels: ["几何C", "几何E"],
    note: "含几何 C / E",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 17,
    images: [
    ],
  },
  {
    displayName: "嘉际",
    group: "mpv",
    sourceModels: ["嘉际"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 18,
    images: [
    ],
  },
  {
    displayName: "金刚",
    group: "sedan",
    sourceModels: ["金刚"],
    note: "",
    projects: ["底盘护板", "360软包脚垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "功夫牛",
    group: "nev",
    sourceModels: ["功夫牛"],
    note: "",
    projects: ["底盘护板", "360软包脚垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "熊猫 EV",
    group: "nev",
    sourceModels: ["熊猫EV"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "早期车型（GX7 / GX9 / SX7 / ICON）",
    group: "suv",
    sourceModels: ["GX7", "GX9", "ICON", "SX7"],
    note: "原始资料中的早期车型条目",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 8,
    images: [
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const GEELY_MODEL_CARD_COUNT = 17;
/** 合并前的原始数据行数（用于与适配库对账） */
export const GEELY_SOURCE_ROW_COUNT = 47;
