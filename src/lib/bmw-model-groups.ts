export type BmwModelGroupKey = "sedan" | "i-series" | "m-series" | "x-suv" | "sports";

export const BMW_MODEL_GROUP_LABELS: Record<BmwModelGroupKey, string> = {
  sedan: "轿车系列",
  "i-series": "纯电 i 系列",
  "m-series": "M 高性能系列",
  "x-suv": "X SUV 系列",
  sports: "跑车系列",
};

export const BMW_MODEL_GROUPS: BmwModelGroupKey[] = [
  "sedan",
  "i-series",
  "m-series",
  "x-suv",
  "sports",
];

export interface BmwModel {
  slug: string;
  name: string;
  group: BmwModelGroupKey;
  projects: string[];
}

export const bmwModels: BmwModel[] = [
  { slug: "1系", name: "宝马1系", group: "sedan", projects: ["360软包脚垫", "平面尾箱垫"] },
  { slug: "2系", name: "宝马2系", group: "sedan", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "3系", name: "宝马3系", group: "sedan", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "4系", name: "宝马4系", group: "sedan", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "5系", name: "宝马5系", group: "sedan", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "6系", name: "宝马6系", group: "sedan", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "7系", name: "宝马7系", group: "sedan", projects: ["360软包脚垫", "平面尾箱垫"] },
  { slug: "8系", name: "宝马8系", group: "sedan", projects: ["360软包脚垫", "平面尾箱垫"] },
  { slug: "i3", name: "宝马i3", group: "i-series", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "i4", name: "宝马i4", group: "i-series", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "i5", name: "宝马i5", group: "i-series", projects: ["360软包脚垫", "平面尾箱垫"] },
  { slug: "i7", name: "宝马i7", group: "i-series", projects: ["360软包脚垫", "平面尾箱垫"] },
  { slug: "ix", name: "宝马iX", group: "i-series", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "ix1", name: "宝马iX1", group: "i-series", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "ix3", name: "宝马iX3", group: "i-series", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "m2", name: "宝马M2", group: "m-series", projects: ["360软包脚垫", "平面尾箱垫"] },
  { slug: "m3", name: "宝马M3", group: "m-series", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "m4", name: "宝马M4", group: "m-series", projects: ["360软包脚垫", "平面尾箱垫"] },
  { slug: "m5", name: "宝马M5", group: "m-series", projects: ["360软包脚垫", "平面尾箱垫"] },
  { slug: "m8", name: "宝马M8", group: "m-series", projects: ["360软包脚垫", "平面尾箱垫"] },
  { slug: "xm", name: "宝马XM", group: "m-series", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "x1", name: "宝马X1", group: "x-suv", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "x2", name: "宝马X2", group: "x-suv", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "x3", name: "宝马X3", group: "x-suv", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "x4", name: "宝马X4", group: "x-suv", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "x5", name: "宝马X5", group: "x-suv", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "x6", name: "宝马X6", group: "x-suv", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "x7", name: "宝马X7", group: "x-suv", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "z4", name: "宝马Z4", group: "sports", projects: ["360软包脚垫", "平面尾箱垫"] },
];