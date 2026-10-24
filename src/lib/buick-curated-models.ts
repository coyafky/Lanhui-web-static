/**
 * 别克 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs buick --apply`
 * 源：`src/lib/fitment/buick.ts`（数据行）+ 源资料《车型适配库和文件/别克.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type BuickModelGroupKey = "gl-series" | "encore-series" | "zhijing-series" | "ev-series" | "classic-series";

export const BUICK_MODEL_GROUP_LABELS: Record<BuickModelGroupKey, string> = {
  "gl-series": "GL / 世纪 · 商务车系 · GL6 / GL8 各版本",
  "encore-series": "昂科系列 · 昂科拉 / 昂科旗 / 昂科威 / 昂科雷",
  "zhijing-series": "至境系列 · 世家 / E7 / L7",
  "ev-series": "微蓝 / 电驱系列 · 微蓝 / VELITE / E 系",
  "classic-series": "经典车系 · 君威 / 君越 / 凯越 / 威朗 等",
};

export const BUICK_MODEL_GROUPS: BuickModelGroupKey[] = [
  "gl-series",
  "encore-series",
  "zhijing-series",
  "ev-series",
  "classic-series",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: BuickModelGroupKey;
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

export const buickModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "GL8",
    group: "gl-series",
    sourceModels: ["GL8", "25款别克GL8 陆尊/陆尚", "GL8 25S", "GL8 652T", "GL8 ES燃油", "GL8/PHEV"],
    note: "含 陆尊 / 陆尚 / 25S / 652T / ES燃油 / PHEV 等版本，年款差异见适配速查",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "吸顶电视", "电动踏板"],
    specCount: 54,
    images: [
    ],
  },
  {
    displayName: "GL6",
    group: "gl-series",
    sourceModels: ["GL6"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "世纪",
    group: "gl-series",
    sourceModels: ["世纪"],
    note: "",
    projects: ["电动踏板"],
    specCount: 1,
    images: [
    ],
  },
  {
    displayName: "昂科威",
    group: "encore-series",
    sourceModels: ["昂科威", "昂科威Plus", "昂科威S", "昂科威PLUS", "昂科威S-25T"],
    note: "含 Plus / S 及其年款版本，配置与年款差异见适配速查",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 32,
    images: [
    ],
  },
  {
    displayName: "昂科雷",
    group: "encore-series",
    sourceModels: ["昂科雷 低配 原车7座做5座", "昂科雷 低配 原车7座做7座", "昂科雷 原车7座做5座"],
    note: "含「原车7座改5座 / 保留7座」两种座椅布局版本",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "昂科拉",
    group: "encore-series",
    sourceModels: ["昂科拉"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 10,
    images: [
    ],
  },
  {
    displayName: "昂科拉GX",
    group: "encore-series",
    sourceModels: ["昂科拉GX"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "昂科旗",
    group: "encore-series",
    sourceModels: ["昂科旗"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 13,
    images: [
    ],
  },
  {
    displayName: "至境",
    group: "zhijing-series",
    sourceModels: ["至境世家", "至境世家EV601", "至境E7", "至境E7 136续航", "至境L7", "至镜L7"],
    note: "含 世家 / E7 / L7 及续航版本（原始资料中「至镜L7」为「至境L7」的同款条目）",
    projects: ["底盘护板", "360软包脚垫", "小桌板", "平面尾箱垫"],
    specCount: 12,
    images: [
      { model: "至境E7", project: "小桌板", path: "/images/products/buick/fitment/zhijing-e7-tray-table.webp" },
    ],
  },
  {
    displayName: "微蓝 / VELITE",
    group: "ev-series",
    sourceModels: ["微蓝6", "VELITE（微蓝5）", "VELITE （微蓝7）", "VELITE7"],
    note: "含 微蓝5 / 微蓝6 / 微蓝7 与 VELITE 系列",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 9,
    images: [
    ],
  },
  {
    displayName: "E4 EV",
    group: "ev-series",
    sourceModels: ["E4 EV"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "E5",
    group: "ev-series",
    sourceModels: ["E5"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 3,
    images: [
    ],
  },
  {
    displayName: "威朗",
    group: "classic-series",
    sourceModels: ["威朗", "威朗Pro"],
    note: "含 威朗 Pro 版本",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 8,
    images: [
    ],
  },
  {
    displayName: "君越",
    group: "classic-series",
    sourceModels: ["君越", "君越20"],
    note: "含 20 款版本",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 10,
    images: [
    ],
  },
  {
    displayName: "昂扬",
    group: "classic-series",
    sourceModels: ["昂扬"],
    note: "",
    projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "君威",
    group: "classic-series",
    sourceModels: ["君威"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "凯越",
    group: "classic-series",
    sourceModels: ["凯越"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "英朗",
    group: "classic-series",
    sourceModels: ["英朗"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"],
    specCount: 10,
    images: [
    ],
  },
  {
    displayName: "阅朗",
    group: "classic-series",
    sourceModels: ["阅朗"],
    note: "",
    projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "林荫大道",
    group: "classic-series",
    sourceModels: ["林荫大道"],
    note: "",
    projects: ["360软包脚垫"],
    specCount: 1,
    images: [
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const BUICK_MODEL_CARD_COUNT = 20;
/** 合并前的原始数据行数（用于与适配库对账） */
export const BUICK_SOURCE_ROW_COUNT = 41;
