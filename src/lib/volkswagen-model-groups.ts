/**
 * 大众 42 车型分组（车型列表模式，车型为主）。
 * 依据：specs/active/volkswagen-products.md（适装明细表 2026-08/09 核对版）。禁止手改。
 * 大众单车型适配记录均 <15 条，无子页；全部在品牌页内展示。
 */

export type VolkswagenModelGroup = "suv" | "sedan" | "mpv" | "nev";

export type VolkswagenModelEntry = {
  slug: string;
  name: string;
  group: VolkswagenModelGroup;
  rowCount: number;
  projects: readonly string[];
  subpage: boolean;
};

export const VOLKSWAGEN_GROUP_ORDER: readonly VolkswagenModelGroup[] = ["suv", "sedan", "mpv", "nev"];

export const VOLKSWAGEN_GROUP_LABELS: Record<VolkswagenModelGroup, string> = {
  suv: "SUV",
  sedan: "轿车",
  mpv: "MPV · 旅行",
  nev: "新能源 · 增程",
};

export const volkswagenModels: readonly VolkswagenModelEntry[] = [
  // ---- SUV（14）----
  { slug: "tuareg", name: "途锐", group: "suv", rowCount: 4, projects: ["底盘护板", "电动踏板"], subpage: false },
  { slug: "tuang", name: "途昂", group: "suv", rowCount: 3, projects: ["底盘护板", "电动踏板"], subpage: false },
  { slug: "tiguan", name: "途观", group: "suv", rowCount: 2, projects: ["底盘护板", "电动踏板"], subpage: false },
  { slug: "tiguan-l", name: "途观L", group: "suv", rowCount: 2, projects: ["底盘护板", "电动踏板"], subpage: false },
  { slug: "tiguan-x", name: "途观X", group: "suv", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "tharu", name: "途岳", group: "suv", rowCount: 2, projects: ["底盘护板", "电动踏板"], subpage: false },
  { slug: "tharu-xr", name: "途岳新锐", group: "suv", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "tanyue", name: "探岳", group: "suv", rowCount: 2, projects: ["底盘护板", "电动踏板"], subpage: false },
  { slug: "tanyue-x", name: "探岳X", group: "suv", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "tange", name: "探歌", group: "suv", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "tanying", name: "探影", group: "suv", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "tukai", name: "途铠", group: "suv", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "lanxun", name: "揽巡", group: "suv", rowCount: 2, projects: ["底盘护板", "电动踏板"], subpage: false },
  { slug: "lanjing", name: "揽境", group: "suv", rowCount: 1, projects: ["电动踏板"], subpage: false },
  // ---- 轿车（19）----
  { slug: "golf", name: "高尔夫", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "lingdu", name: "凌渡", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "lingdu-l", name: "凌渡L", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "suteng", name: "速腾", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "suteng-l", name: "速腾L", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "maiteng", name: "迈腾", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "passat", name: "帕萨特", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "cc", name: "CC", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "shangku", name: "尚酷", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "jiakechong", name: "甲壳虫", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "polo", name: "Polo", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "baolai", name: "宝来", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "langyi", name: "朗逸", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "langxing", name: "朗行", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "langjing", name: "朗境", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "santana", name: "桑塔纳", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "jieda", name: "捷达", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "huiang", name: "辉昂", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "r36", name: "R36", group: "sedan", rowCount: 1, projects: ["底盘护板"], subpage: false },
  // ---- MPV · 旅行（8）----
  { slug: "tuoan", name: "途安", group: "mpv", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "tuoan-l", name: "途安L", group: "mpv", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "xialang", name: "夏朗", group: "mpv", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "weiran", name: "威然", group: "mpv", rowCount: 2, projects: ["底盘护板", "电动踏板"], subpage: false },
  { slug: "weilan", name: "蔚揽", group: "mpv", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "weiling", name: "蔚领", group: "mpv", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "golf-jialv", name: "高尔夫·嘉旅", group: "mpv", rowCount: 1, projects: ["底盘护板"], subpage: false },
  { slug: "kaidi", name: "开迪", group: "mpv", rowCount: 1, projects: ["底盘护板"], subpage: false },
  // ---- 新能源 · 增程（1）----
  { slug: "id-era-9x", name: "ID.ERA 9X", group: "nev", rowCount: 1, projects: ["底盘护板"], subpage: false },
];
