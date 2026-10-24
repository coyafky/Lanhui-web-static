/**
 * 本田 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs honda --apply`
 * 源：`src/lib/fitment/honda.ts`（数据行）+ 源资料《车型适配库和文件/本田.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type HondaModelGroupKey = "sedan" | "suv" | "mpv" | "nev";

export const HONDA_MODEL_GROUP_LABELS: Record<HondaModelGroupKey, string> = {
  "sedan": "轿车 · undefined",
  "suv": "SUV / 跨界 · undefined",
  "mpv": "MPV · undefined",
  "nev": "新能源（e:NS / 绎乐 / M-NV） · undefined",
};

export const HONDA_MODEL_GROUPS: HondaModelGroupKey[] = [
  "sedan",
  "suv",
  "mpv",
  "nev",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: HondaModelGroupKey;
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

export const hondaModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "艾力绅",
    group: "mpv",
    sourceModels: ["艾力绅"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "吸顶电视"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "奥德赛",
    group: "mpv",
    sourceModels: ["奥德赛"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "理念VE-1",
    group: "nev",
    sourceModels: ["理念VE-1"],
    note: "",
    projects: ["平面尾箱垫"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "e:NS1",
    group: "nev",
    sourceModels: ["e:NS1"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "EA6绎乐",
    group: "nev",
    sourceModels: ["EA6绎乐"],
    note: "",
    projects: ["360软包脚垫"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "M-NV",
    group: "nev",
    sourceModels: ["M-NV"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "X-NV",
    group: "nev",
    sourceModels: ["X-NV"],
    note: "",
    projects: ["360全包尾箱"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "缤智",
    group: "suv",
    sourceModels: ["缤智"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "歌诗图",
    group: "suv",
    sourceModels: ["歌诗图"],
    note: "",
    projects: ["平面尾箱垫"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "冠道",
    group: "suv",
    sourceModels: ["冠道"],
    note: "",
    projects: ["底盘护板", "电动踏板", "平面尾箱垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "皓影",
    group: "suv",
    sourceModels: ["皓影"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "CR-V",
    group: "suv",
    sourceModels: ["CR-V"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "HR-V",
    group: "suv",
    sourceModels: ["HR-V"],
    note: "",
    projects: ["360软包脚垫", "底盘护板"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "UR-V",
    group: "suv",
    sourceModels: ["UR-V"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "XR-V",
    group: "suv",
    sourceModels: ["XR-V"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "ZR-V致在",
    group: "suv",
    sourceModels: ["ZR-V致在"],
    note: "",
    projects: ["底盘护板", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "飞度",
    group: "sedan",
    sourceModels: ["飞度"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "锋范",
    group: "sedan",
    sourceModels: ["锋范"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "哥瑞",
    group: "sedan",
    sourceModels: ["哥瑞"],
    note: "",
    projects: ["360软包脚垫", "底盘护板"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "杰德",
    group: "sedan",
    sourceModels: ["杰德"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "竞瑞",
    group: "sedan",
    sourceModels: ["竞瑞"],
    note: "",
    projects: ["底盘护板", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "理念S1",
    group: "sedan",
    sourceModels: ["理念S1"],
    note: "",
    projects: ["360软包脚垫"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "凌派",
    group: "sedan",
    sourceModels: ["凌派"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "思铂睿",
    group: "sedan",
    sourceModels: ["思铂睿"],
    note: "",
    projects: ["底盘护板", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "思迪",
    group: "sedan",
    sourceModels: ["思迪"],
    note: "",
    projects: ["平面尾箱垫"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "思铭",
    group: "sedan",
    sourceModels: ["思铭"],
    note: "",
    projects: ["平面尾箱垫"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "思域",
    group: "sedan",
    sourceModels: ["思域"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "享域",
    group: "sedan",
    sourceModels: ["享域"],
    note: "",
    projects: ["底盘护板", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "型格",
    group: "sedan",
    sourceModels: ["型格"],
    note: "",
    projects: ["360软包脚垫", "底盘护板"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "雅阁",
    group: "sedan",
    sourceModels: ["雅阁"],
    note: "",
    projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "英仕派",
    group: "sedan",
    sourceModels: ["英仕派"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "INSPIRE",
    group: "sedan",
    sourceModels: ["INSPIRE"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "LIFE",
    group: "sedan",
    sourceModels: ["LIFE"],
    note: "",
    projects: ["底盘护板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "P7",
    group: "sedan",
    sourceModels: ["P7"],
    note: "",
    projects: ["平面尾箱垫"],
    specCount: 1,
    images: [
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const HONDA_MODEL_CARD_COUNT = 34;
/** 合并前的原始数据行数（用于与适配库对账） */
export const HONDA_SOURCE_ROW_COUNT = 34;
