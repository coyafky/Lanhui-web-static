export type HaoboModelGroupKey = "sports" | "sedan" | "suv" | "mpv";

export const HAOBO_MODEL_GROUP_LABELS: Record<HaoboModelGroupKey, string> = {
  sports: "超跑",
  sedan: "轿跑与轿车",
  suv: "SUV",
  mpv: "MPV",
};

export const HAOBO_MODEL_GROUPS: HaoboModelGroupKey[] = [
  "sports",
  "sedan",
  "suv",
  "mpv",
];

export interface HaoboModel {
  slug: string;
  name: string;
  group: HaoboModelGroupKey;
  projects: string[];
}

export const haoboModels: HaoboModel[] = [
  { slug: "ssr", name: "昊铂SSR", group: "sports", projects: ["360软包脚垫", "平面尾箱垫"] },
  { slug: "gt", name: "昊铂GT", group: "sedan", projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"] },
  { slug: "s600", name: "昊铂S600", group: "sedan", projects: ["底盘护板"] },
  { slug: "ht", name: "昊铂HT", group: "suv", projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "hl", name: "昊铂HL", group: "suv", projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"] },
  { slug: "a800", name: "昊铂A800", group: "mpv", projects: ["底盘护板"] },
];
