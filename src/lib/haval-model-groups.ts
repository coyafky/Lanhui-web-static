export type HavalModelGroupKey = "h-series" | "f-series" | "dog-series" | "hi4";

export const HAVAL_MODEL_GROUP_LABELS: Record<HavalModelGroupKey, string> = {
  "h-series": "H系 / M系 · 城市SUV",
  "f-series": "F系与入门 · 轿跑SUV",
  "dog-series": "狗系 · 轻越野",
  hi4: "Hi4 新能源",
};

export const HAVAL_MODEL_GROUPS: HavalModelGroupKey[] = [
  "h-series",
  "f-series",
  "dog-series",
  "hi4",
];

export interface HavalModel {
  slug: string;
  name: string;
  group: HavalModelGroupKey;
  projects: string[];
}

export const havalModels: HavalModel[] = [
  // H系/M系 13
  { slug: "h1", name: "哈弗H1", group: "h-series", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"] },
  { slug: "h2", name: "哈弗H2", group: "h-series", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱"] },
  { slug: "h2s", name: "哈弗H2S", group: "h-series", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"] },
  { slug: "h4", name: "哈弗H4", group: "h-series", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱"] },
  { slug: "h5", name: "哈弗H5", group: "h-series", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱"] },
  { slug: "h6", name: "哈弗H6", group: "h-series", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱", "电动踏板"] },
  { slug: "h6l", name: "哈弗H6L", group: "h-series", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "电动踏板"] },
  { slug: "h6s", name: "哈弗H6S", group: "h-series", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱", "电动踏板"] },
  { slug: "h7", name: "哈弗H7", group: "h-series", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱"] },
  { slug: "h8", name: "哈弗H8", group: "h-series", projects: ["360软包脚垫"] },
  { slug: "h9", name: "哈弗H9", group: "h-series", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱", "电动踏板"] },
  { slug: "h10", name: "哈弗H10", group: "h-series", projects: ["底盘护板"] },
  { slug: "m6", name: "哈弗M6", group: "h-series", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱", "电动踏板"] },
  // F系与入门 6
  { slug: "f5", name: "哈弗F5", group: "f-series", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱", "电动踏板"] },
  { slug: "f7", name: "哈弗F7", group: "f-series", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "电动踏板"] },
  { slug: "f7x", name: "哈弗F7X", group: "f-series", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱"] },
  { slug: "chitu", name: "哈弗赤兔", group: "f-series", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "电动踏板"] },
  { slug: "chulian", name: "哈弗初恋", group: "f-series", projects: ["360软包脚垫", "底盘护板", "电动踏板"] },
  { slug: "shenshou", name: "哈弗神兽", group: "f-series", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱", "电动踏板"] },
  // 狗系 3
  { slug: "dagou", name: "哈弗大狗", group: "dog-series", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱", "电动踏板"] },
  { slug: "dagou-plus", name: "哈弗大狗PLUS", group: "dog-series", projects: ["底盘护板"] },
  { slug: "kugou", name: "哈弗酷狗", group: "dog-series", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱", "电动踏板"] },
  // Hi4 4
  { slug: "xiaolong", name: "哈弗枭龙", group: "hi4", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱", "电动踏板"] },
  { slug: "xiaolong-max", name: "哈弗枭龙MAX", group: "hi4", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱", "电动踏板"] },
  { slug: "menglong", name: "哈弗猛龙", group: "hi4", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱", "电动踏板"] },
  { slug: "menglong-plus", name: "哈弗猛龙PLUS", group: "hi4", projects: ["底盘护板", "平面尾箱垫"] },
];
