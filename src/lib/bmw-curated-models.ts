/**
 * 宝马 车系归并与分组（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs bmw --apply`
 * 源：`src/lib/fitment/bmw.ts`（数据行）+ 源资料《车型适配库和文件/宝马.md》的「款式与版本」门/座数
 *
 * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。
 */

export type BmwModelGroupKey = "sedan-series" | "x-series" | "i-series" | "m-z-series";

export const BMW_MODEL_GROUP_LABELS: Record<BmwModelGroupKey, string> = {
  "sedan-series": "数字系 · 轿车 / 轿跑 · 1–8 系",
  "x-series": "X 系 · SUV / SAV · X1–X7 / XM",
  "i-series": "i 系 · 纯电 · i3 / i4 / i5 / i7 / iX",
  "m-z-series": "M 与 Z · 性能车 · M2–M8 / Z4 / X3M",
};

export const BMW_MODEL_GROUPS: BmwModelGroupKey[] = [
  "sedan-series",
  "x-series",
  "i-series",
  "m-z-series",
];

export interface CuratedModelCard {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 */
  readonly group: BmwModelGroupKey;
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

export const bmwModelCards: readonly CuratedModelCard[] = [
  {
    displayName: "X5",
    group: "x-series",
    sourceModels: ["X5", "X5 原车5座", "X5 右钛", "X5 原车5座 矮绒布", "X5 原车5座 高绒布", "X5右呔版 原车7座做5座 矮绒布", "X5右呔版 原车7座做7座 矮绒布", "X5 原车7座做5座 矮绒布", "X5 原车7座做7座 矮绒布", "X5 原车7座做5座 高绒布", "X5 原车7座做7座 高绒布", "X5高配 前排内侧矮绒布", "X5 前排内侧矮绒布", "X5 前排内侧高绒布", "X5 右钛 7座做5座", "X5 右钛 7座做7座", "X5 原车7座做5座", "X5 原车7座做7座"],
    note: "含原车 5/7 座、右钛版、前排内侧与绒布/削边工艺等版本",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 34,
    images: [
    ],
  },
  {
    displayName: "X6",
    group: "x-series",
    sourceModels: ["X6", "X6 前排内侧矮绒布", "X6 前排内侧高绒布", "X6 前排内侧高绒布 削边工艺", "X6 前排内侧 高绒布 削边工艺", "全新宝马X6 前排内侧矮绒布", "全新宝马X6 前排内侧高绒布 削边工艺", "全新宝马X6"],
    note: "含前排内侧绒布与削边工艺版本",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 20,
    images: [
    ],
  },
  {
    displayName: "X7",
    group: "x-series",
    sourceModels: ["X7", "X7 原车6座", "X7 原车7座", "X7 原车7座做7座 矮绒布", "X7 原车7座做5座 矮绒布", "X7 原车7座做5座 高绒布 削边工艺", "X7 原车7座做7座 高绒布 削边工艺", "X7 原车6座做4座 矮绒布", "X7 原车6座做6座 矮绒布", "X7 原车6座做4座 高绒布 削边工艺", "X7 原车6座做6座 高绒布 削边工艺", "X7 原车6座做4座", "X7 原车6座做6座", "X7 原车7座做5座", "X7 原车7座做7座"],
    note: "含原车 6/7 座做 4/5/6/7 座、绒布与削边工艺版本",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 18,
    images: [
    ],
  },
  {
    displayName: "全新 X5 / X4M",
    group: "x-series",
    sourceModels: ["全新X5", "全新X5 国产", "X4/X4M", "全新X5 前排内侧矮绒布", "全新X5 前排内侧高绒布 削边工艺", "全新X5 国产 前排内侧矮绒布", "全新X5 国产 前排内侧高绒布 削边工艺"],
    note: "含国产版与绒布/削边工艺版本",
    projects: ["360全包尾箱", "平面尾箱垫", "360软包脚垫"],
    specCount: 9,
    images: [
    ],
  },
  {
    displayName: "X1",
    group: "x-series",
    sourceModels: ["X1", "X1", "X1 新能源", "X1新能源"],
    note: "含新能源与 iX1 版本",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 9,
    images: [
    ],
  },
  {
    displayName: "X2",
    group: "x-series",
    sourceModels: ["X2"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "X3",
    group: "x-series",
    sourceModels: ["X3", "X3 M", "X3M"],
    note: "含 X3 M 版本",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 18,
    images: [
    ],
  },
  {
    displayName: "X4",
    group: "x-series",
    sourceModels: ["X4"],
    note: "",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "XM",
    group: "x-series",
    sourceModels: ["XM", "XM 矮绒", "XM 高绒 削边工艺"],
    note: "含矮绒/高绒削边工艺版本",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 5,
    images: [
    ],
  },
  {
    displayName: "i3",
    group: "i-series",
    sourceModels: ["i3", "i3 纯电 SUV", "i3 EV", "i3 纯电动"],
    note: "含纯电 SUV / EV / 纯电动等条目（原始资料中同款多写法）",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 8,
    images: [
    ],
  },
  {
    displayName: "i4",
    group: "i-series",
    sourceModels: ["i4", "i4 纯电", "i4 EV"],
    note: "含 EV 版本",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "i5",
    group: "i-series",
    sourceModels: ["i5"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "i7",
    group: "i-series",
    sourceModels: ["i7", "i7 EV 削边工艺"],
    note: "含 EV 削边工艺版本",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "iX",
    group: "i-series",
    sourceModels: ["iX", "iX1", "iX3", "IX", "iX1", "iX3 纯电", "iX3 EV", "IX EV"],
    note: "含 EV 版本（原始资料中 IX / iX 两种写法）",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 18,
    images: [
    ],
  },
  {
    displayName: "1 系",
    group: "sedan-series",
    sourceModels: ["1系", "1系i 两厢", "1系i 三厢", "1系i 轿跑", "1系i 敞篷"],
    note: "含 2 门轿跑与两厢/三厢版本",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 9,
    images: [
    ],
  },
  {
    displayName: "2 系",
    group: "sedan-series",
    sourceModels: ["2系", "2系i 旅行车", "2系i 敞篷", "2系i 轿跑", "2系2门 轿跑", "2系i 原车7座做5座", "2系i 原车7座做7座", "2系L", "2系i 旅行版", "2系2门轿跑"],
    note: "含旅行版与 2 门轿跑版本",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 20,
    images: [
    ],
  },
  {
    displayName: "3 系",
    group: "sedan-series",
    sourceModels: ["3系", "3系i GT", "3系Li", "3系 右钛车", "3系i 轿跑", "3系i 硬顶敞篷", "3系i"],
    note: "含右钛车与硬顶版本",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 21,
    images: [
    ],
  },
  {
    displayName: "4 系",
    group: "sedan-series",
    sourceModels: ["4系", "4系i 轿跑", "4系i", "4系i 硬顶敞篷", "4系i 软顶敞篷"],
    note: "含硬顶/软顶版本",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 17,
    images: [
    ],
  },
  {
    displayName: "5 系",
    group: "sedan-series",
    sourceModels: ["5系", "5系i GT", "5系Li", "5系Li 高绒布", "5系Li 矮绒布", "全新5系Li 削边工艺", "5系Li 削边工艺", "5系i GT 矮绒布", "5系i GT 高绒布 削边工艺", "5系i GT 右呔版", "5系i", "5系i 矮绒布", "5系i 高绒布", "全新5系i", "5系Le"],
    note: "含全新版 Li / i / i GT / Le 与绒布、削边工艺、右呔版",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 34,
    images: [
    ],
  },
  {
    displayName: "6 系",
    group: "sedan-series",
    sourceModels: ["6系", "6系i GT", "6系i 轿跑", "6系i", "6系i/敞篷"],
    note: "含 i GT 版本",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 11,
    images: [
    ],
  },
  {
    displayName: "7 系",
    group: "sedan-series",
    sourceModels: ["7系", "7系Li 高绒布", "7系Li 后排带灯孔 矮绒布", "7系Li 后排带灯孔 高绒布", "7系Li 低配 削边工艺", "7系Li 低配右呔版 削边工艺", "7系Li 高配 削边工艺", "7系Li 高配四座 削边工艺", "7系 削边工艺", "7系Li", "7系Li 高配4座"],
    note: "含 Li / 高配四座 / 后排带灯孔 / 绒布与削边工艺版本",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 21,
    images: [
    ],
  },
  {
    displayName: "8 系",
    group: "sedan-series",
    sourceModels: ["8系", "8系i"],
    note: "含 i 版本",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 4,
    images: [
    ],
  },
  {
    displayName: "M2",
    group: "m-z-series",
    sourceModels: ["M2"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 6,
    images: [
    ],
  },
  {
    displayName: "M3",
    group: "m-z-series",
    sourceModels: ["M3", "M3旅行车"],
    note: "含旅行车版本",
    projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"],
    specCount: 9,
    images: [
    ],
  },
  {
    displayName: "M4",
    group: "m-z-series",
    sourceModels: ["M4", "M4 轿跑", "M4 敞篷"],
    note: "含轿跑/敞篷版本",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 7,
    images: [
    ],
  },
  {
    displayName: "M5",
    group: "m-z-series",
    sourceModels: ["M5"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "M8",
    group: "m-z-series",
    sourceModels: ["M8"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 2,
    images: [
    ],
  },
  {
    displayName: "Z4",
    group: "m-z-series",
    sourceModels: ["Z4"],
    note: "",
    projects: ["360软包脚垫", "平面尾箱垫"],
    specCount: 6,
    images: [
    ],
  },
];

/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */
export const BMW_MODEL_CARD_COUNT = 28;
/** 合并前的原始数据行数（用于与适配库对账） */
export const BMW_SOURCE_ROW_COUNT = 147;
