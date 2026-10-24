/**
 * 广汽传祺 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs gac --apply`
 * 源：`src/lib/fitment/gac.ts`（数据行）+ 源资料《车型适配库和文件/广汽传祺.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type GacModelGroupKey = "aion" | "mpv" | "suv" | "sedan";

export const GAC_MODEL_GROUP_LABELS: Record<GacModelGroupKey, string> = {
  "aion": "新能源 · 埃安 / 昊铂 / 传祺智电 · undefined",
  "mpv": "MPV · undefined",
  "suv": "SUV · undefined",
  "sedan": "轿车 · undefined",
};

export const GAC_MODEL_GROUPS: GacModelGroupKey[] = [
  "aion",
  "mpv",
  "suv",
  "sedan",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: GacModelGroupKey;
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

export const gacModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "Aion S",
    group: "aion",
    sourceModels: ["Aion S （埃安S）", "Aion S PLUS（埃安S PLUS）/S MAX", "Aion S/S PLUS"],
    note: "含 S / S PLUS / S MAX 等版本（原始资料多种写法）",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "Aion V",
    group: "aion",
    sourceModels: ["Aion V （埃安V）霸王龙", "Aion V （埃安V）", "Aion V （埃安V） PLUS", "Aion V（埃安V） PLUS 7座做5座", "Aion V（埃安V） PLUS 7座做7座", "埃安V", "Aion 埃安 V PLUS", "埃安V PLUS 7座做5座 22款--", "埃安V PLUS 7座", "Aion V （埃安V PLUS）", "Aion V（埃安V） PLUS 7座"],
    note: "含 霸王龙 / PLUS / 7座做5座 / 7座做7座 等版本",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 13,
    images: [
    ],
  },
  {
    displayName: "Aion Y",
    group: "aion",
    sourceModels: ["Aion Y（埃安Y）/埃安Y PLUS", "Aion Y（埃安Y）", "Aion 埃安 Y PLUS"],
    note: "含 Y PLUS 版本",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "Aion LX",
    group: "aion",
    sourceModels: ["Aion LX （埃安LX）", "Aion LX （埃安LX）PLUS", "Aion 埃安 LX PLUS", "Aion LX （埃安LX PLUS）"],
    note: "含 LX PLUS 版本",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "Aion RT",
    group: "aion",
    sourceModels: ["Aion RT"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "Aion UT",
    group: "aion",
    sourceModels: ["Aion UT"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "Aion i60",
    group: "aion",
    sourceModels: ["Aion i60"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "Aion N60",
    group: "aion",
    sourceModels: ["Aion N60"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "埃安昊铂",
    group: "aion",
    sourceModels: ["埃安昊铂 GT", "埃安昊铂 HT", "埃安昊铂 HL 增程", "埃安昊铂 SSR", "埃安昊铂 HL", "昊铂SSR"],
    note: "含 GT / HT / HL / HL 增程 / SSR 等车型",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 10,
    images: [
    ],
  },
  {
    displayName: "新能源世锐 PHEV",
    group: "aion",
    sourceModels: ["新能源世锐PHEV"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "传奇祺智 PHEV",
    group: "aion",
    sourceModels: ["传奇祺智 PHEV"],
    note: "",
    projects: ["360全包尾箱"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "M8 系列",
    group: "mpv",
    sourceModels: ["向往M8", "M8", "M8宗师/24款新大师/E9", "M8大师", "M8宗师", "向往 M8宗师-136续航", "向往M8插混-235续航-PHEVL", "向往M8插混248续航"],
    note: "含 宗师 / 大师 / 24 款新大师 / 向往 M8 及续航版本",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "吸顶电视"],
    specCount: 21,
    images: [
    ],
  },
  {
    displayName: "M6",
    group: "mpv",
    sourceModels: ["M6", "M6 Pro"],
    note: "含 M6 Pro 版本",
    projects: ["底盘护板", "小桌板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 10,
    images: [
    ],
  },
  {
    displayName: "E8",
    group: "mpv",
    sourceModels: ["E8", "E8", "向往E8-281续航"],
    note: "含 向往 E8 及续航版本",
    projects: ["吸顶电视", "底盘护板"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "E9",
    group: "mpv",
    sourceModels: ["E9"],
    note: "",
    projects: ["底盘护板", "360软包脚垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "ES9",
    group: "mpv",
    sourceModels: ["ES9"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 15,
    images: [
    ],
  },
  {
    displayName: "GM8",
    group: "mpv",
    sourceModels: ["GM8"],
    note: "",
    projects: ["电动踏板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "E8 / M8 宗师 / M8 大师 / E9（合并条目）",
    group: "mpv",
    sourceModels: ["（E8/M8宗师/M8大师/E9）"],
    note: "原始资料中的合并写法",
    projects: ["小桌板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "向往 S7",
    group: "suv",
    sourceModels: ["向往S7", "向往 S7", "向往S7增程"],
    note: "含增程版本",
    projects: ["底盘护板", "小桌板", "电动踏板", "360软包脚垫", "平面尾箱垫"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "向往 S9",
    group: "suv",
    sourceModels: ["向往S9", "向往 S9"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "GS3",
    group: "suv",
    sourceModels: ["GS3", "GS3 POWER", "GS3影速", "影速GS3"],
    note: "含 GS3 POWER / GS3 影速 / 影速 GS3 等版本",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 10,
    images: [
    ],
  },
  {
    displayName: "GS4",
    group: "suv",
    sourceModels: ["GS4", "GS4 Coupe", "GS4 PLUS", "GS4 MAX"],
    note: "含 Coupe / PLUS / MAX 版本",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 29,
    images: [
    ],
  },
  {
    displayName: "GS5",
    group: "suv",
    sourceModels: ["GS5"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "GS7",
    group: "suv",
    sourceModels: ["GS7"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "GS8",
    group: "suv",
    sourceModels: ["GS8", "GS8S"],
    note: "含 GS8S 版本",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 33,
    images: [
    ],
  },
  {
    displayName: "GE3",
    group: "suv",
    sourceModels: ["GE3"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "影豹",
    group: "suv",
    sourceModels: ["影豹"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "影酷",
    group: "suv",
    sourceModels: ["影酷"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 9,
    images: [
    ],
  },
  {
    displayName: "GA3",
    group: "sedan",
    sourceModels: ["GA3", "GA3S", "GA3S新能源"],
    note: "含 GA3S 与 GA3S 新能源版本",
    projects: ["底盘护板", "360软包脚垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "GA4",
    group: "sedan",
    sourceModels: ["GA4", "GA4 Plus"],
    note: "含 GA4 Plus 版本",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "GA5",
    group: "sedan",
    sourceModels: ["GA5"],
    note: "",
    projects: ["360软包脚垫"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "GA6",
    group: "sedan",
    sourceModels: ["GA6"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "GA8",
    group: "sedan",
    sourceModels: ["GA8"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const GAC_MODEL_CARD_COUNT = 33;
/** 合并前的原始数据行数（用于与适配库对账） */
export const GAC_SOURCE_ROW_COUNT = 78;
