/**
 * 马自达车型分组 — 品牌页 S1「车型速览」数据源。
 * 12 车型按车系分三组（轿车 / MPV / SUV）。
 * 马自达数据量小（每车型 1-2 条），全部合并单页承载，无子页。
 */
export type MazdaModelGroupKey = "sedan" | "mpv" | "suv";

export type MazdaModel = {
  slug: string;
  name: string;
  group: MazdaModelGroupKey;
  projects: readonly string[];
};

export const MAZDA_MODEL_GROUP_LABELS: Record<MazdaModelGroupKey, string> = {
  sedan: "轿车",
  mpv: "MPV",
  suv: "SUV",
};

export const MAZDA_MODEL_GROUPS: readonly MazdaModelGroupKey[] = ["sedan", "mpv", "suv"];

export const mazdaModels: readonly MazdaModel[] = [
  // 轿车
  { slug: "mazda3", name: "马自达3（老款）", group: "sedan", projects: ["底盘护板"] },
  { slug: "mazda3-axela", name: "马自达3昂克赛拉", group: "sedan", projects: ["底盘护板"] },
  { slug: "mazda6", name: "马自达6", group: "sedan", projects: ["底盘护板"] },
  { slug: "atenza", name: "阿特兹", group: "sedan", projects: ["底盘护板"] },
  { slug: "ruyi", name: "睿翼", group: "sedan", projects: ["底盘护板"] },
  // MPV
  { slug: "mazda8", name: "马自达8", group: "mpv", projects: ["底盘护板"] },
  // SUV
  { slug: "cx4", name: "马自达CX-4", group: "suv", projects: ["底盘护板"] },
  { slug: "cx5", name: "马自达CX-5", group: "suv", projects: ["底盘护板", "电动踏板"] },
  { slug: "cx7", name: "马自达CX-7", group: "suv", projects: ["底盘护板"] },
  { slug: "cx8", name: "马自达CX-8", group: "suv", projects: ["底盘护板"] },
  { slug: "cx30", name: "马自达CX-30", group: "suv", projects: ["底盘护板"] },
  { slug: "ez60", name: "马自达EZ-60", group: "suv", projects: ["底盘护板"] },
];
