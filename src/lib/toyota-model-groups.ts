// 生成物：丰田 49 车型分组（按常见车系归类），S1 车型速览数据源。
// 依据：specs/active/toyota-products.md（厂方适装表 2026.8）。禁止手改。

export type ToyotaModelGroup = "sedan" | "suv" | "mpv" | "pickup";

export type ToyotaModelEntry = {
  slug: string;
  name: string;
  group: ToyotaModelGroup;
  rowCount: number;
  projects: readonly string[];
  subpage: boolean;
};

export const TOYOTA_MODEL_GROUPS: readonly ToyotaModelGroup[] = ["sedan", "suv", "mpv", "pickup"];

export const TOYOTA_MODEL_GROUP_LABELS: Record<ToyotaModelGroup, string> = {
  sedan: "轿车 / 轿跑",
  suv: "SUV",
  mpv: "MPV",
  pickup: "皮卡 / 越野",
};

export const toyotaModels: readonly ToyotaModelEntry[] = [
  { slug: "corolla", name: "卡罗拉", group: "sedan", rowCount: 15, projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: true },
  { slug: "camry", name: "凯美瑞", group: "sedan", rowCount: 14, projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: false },
  { slug: "crown", name: "皇冠", group: "sedan", rowCount: 11, projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: false },
  { slug: "avalon", name: "亚洲龙", group: "sedan", rowCount: 9, projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: false },
  { slug: "levin", name: "雷凌", group: "sedan", rowCount: 9, projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: false },
  { slug: "yaris-l", name: "YARiS L", group: "sedan", rowCount: 9, projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: false },
  { slug: "vios", name: "威驰", group: "sedan", rowCount: 6, projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: false },
  { slug: "reiz", name: "锐志", group: "sedan", rowCount: 4, projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: false },
  { slug: "bz3", name: "bZ3", group: "sedan", rowCount: 4, projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: false },
  { slug: "allion", name: "亚洲狮", group: "sedan", rowCount: 3, projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: false },
  { slug: "huaguan", name: "花冠", group: "sedan", rowCount: 3, projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: false },
  { slug: "lingshang", name: "凌尚", group: "sedan", rowCount: 2, projects: ["360软包脚垫", "底盘护板"], subpage: false },
  { slug: "yaris", name: "雅力士", group: "sedan", rowCount: 2, projects: ["360软包脚垫", "底盘护板"], subpage: false },
  { slug: "ia5", name: "iA5", group: "sedan", rowCount: 2, projects: ["360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "ez", name: "逸致", group: "sedan", rowCount: 2, projects: ["360软包脚垫", "底盘护板"], subpage: false },
  { slug: "prius", name: "普锐斯", group: "sedan", rowCount: 2, projects: ["360软包脚垫", "底盘护板"], subpage: false },
  { slug: "gt86", name: "86", group: "sedan", rowCount: 1, projects: ["360软包脚垫"], subpage: false },
  { slug: "land-cruiser", name: "兰德酷路泽", group: "suv", rowCount: 40, projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: true },
  { slug: "prado", name: "普拉多", group: "suv", rowCount: 32, projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: true },
  { slug: "highlander", name: "汉兰达", group: "suv", rowCount: 27, projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"], subpage: true },
  { slug: "rav4", name: "RAV4荣放", group: "suv", rowCount: 21, projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"], subpage: true },
  { slug: "crown-kluger", name: "皇冠陆放", group: "suv", rowCount: 10, projects: ["360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"], subpage: false },
  { slug: "corolla-cross", name: "卡罗拉锐放", group: "suv", rowCount: 10, projects: ["360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"], subpage: false },
  { slug: "frontlander", name: "锋兰达", group: "suv", rowCount: 10, projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"], subpage: false },
  { slug: "sequoia", name: "红杉", group: "suv", rowCount: 8, projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: false },
  { slug: "izoa", name: "奕泽", group: "suv", rowCount: 8, projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: false },
  { slug: "wildlander", name: "威兰达", group: "suv", rowCount: 8, projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"], subpage: false },
  { slug: "harrier", name: "凌放", group: "suv", rowCount: 7, projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"], subpage: false },
  { slug: "chr", name: "C-HR", group: "suv", rowCount: 7, projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: false },
  { slug: "4runner", name: "4Runner超霸", group: "suv", rowCount: 7, projects: ["360全包尾箱", "360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: false },
  { slug: "vensa", name: "威飒", group: "suv", rowCount: 5, projects: ["360软包脚垫", "底盘护板", "电动踏板"], subpage: false },
  { slug: "bz7", name: "铂智7", group: "suv", rowCount: 5, projects: ["360软包脚垫", "底盘护板", "后排娱乐屏", "平面尾箱垫"], subpage: false },
  { slug: "bz3x", name: "铂智3X", group: "suv", rowCount: 5, projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "小桌板"], subpage: false },
  { slug: "fj-cruiser", name: "FJ Cruiser", group: "suv", rowCount: 5, projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: false },
  { slug: "bz4x", name: "bZ4X", group: "suv", rowCount: 3, projects: ["360全包尾箱", "360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "bz5", name: "bZ5", group: "suv", rowCount: 3, projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: false },
  { slug: "terios", name: "特锐", group: "suv", rowCount: 1, projects: ["360软包脚垫"], subpage: false },
  { slug: "veloz", name: "Veloz维洛兹", group: "suv", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "alphard", name: "埃尔法", group: "mpv", rowCount: 17, projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"], subpage: true },
  { slug: "sienna", name: "赛那SIENNA", group: "mpv", rowCount: 14, projects: ["360软包脚垫", "底盘护板", "电动踏板", "平面尾箱垫"], subpage: false },
  { slug: "previa", name: "普瑞维亚", group: "mpv", rowCount: 3, projects: ["360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "vellfire", name: "威尔法", group: "mpv", rowCount: 2, projects: ["360软包脚垫", "底盘护板"], subpage: false },
  { slug: "granvia", name: "格瑞维亚", group: "mpv", rowCount: 2, projects: ["电动踏板", "吸顶电视"], subpage: false },
  { slug: "grandhiace", name: "格兰维亚", group: "mpv", rowCount: 1, projects: ["360软包脚垫"], subpage: false },
  { slug: "hiace", name: "海狮", group: "mpv", rowCount: 1, projects: ["小桌板"], subpage: false },
  { slug: "fortuner", name: "Fortuner穿越者", group: "pickup", rowCount: 5, projects: ["360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "tundra", name: "坦途", group: "pickup", rowCount: 4, projects: ["360软包脚垫", "底盘护板"], subpage: false },
  { slug: "hilux", name: "海拉克斯", group: "pickup", rowCount: 3, projects: ["360软包脚垫", "底盘护板"], subpage: false },
  { slug: "tacoma", name: "Tacoma塔库玛", group: "pickup", rowCount: 2, projects: ["底盘护板"], subpage: false },
] as const;
