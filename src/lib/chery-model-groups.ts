export type CheryModelGroupKey =
  | "arrizo"
  | "fengyun"
  | "tiggo"
  | "classic"
  | "ev";

export const CHERY_MODEL_GROUP_LABELS: Record<CheryModelGroupKey, string> = {
  arrizo: "艾瑞泽系列",
  fengyun: "风云系列",
  tiggo: "瑞虎系列",
  classic: "经典轿车",
  ev: "新能源",
};

export const CHERY_MODEL_GROUPS: CheryModelGroupKey[] = [
  "arrizo",
  "fengyun",
  "tiggo",
  "classic",
  "ev",
];

export interface CheryModel {
  slug: string;
  name: string;
  group: CheryModelGroupKey;
  projects: string[];
}

export const cheryModels: CheryModel[] = [
  { slug: "arrizo-5", name: "奇瑞艾瑞泽5", group: "arrizo", projects: ["底盘护板"] },
  { slug: "arrizo-5-plus", name: "奇瑞艾瑞泽5PLUS", group: "arrizo", projects: ["底盘护板"] },
  { slug: "arrizo-7", name: "奇瑞艾瑞泽7", group: "arrizo", projects: ["底盘护板"] },
  { slug: "arrizo-8", name: "奇瑞艾瑞泽8", group: "arrizo", projects: ["底盘护板"] },
  { slug: "arrizo-ex", name: "奇瑞艾瑞泽EX", group: "arrizo", projects: ["底盘护板"] },
  { slug: "arrizo-gx", name: "奇瑞艾瑞泽GX", group: "arrizo", projects: ["底盘护板"] },
  { slug: "fengyun-a9", name: "奇瑞风云A9", group: "fengyun", projects: ["底盘护板"] },
  { slug: "fengyun-a9l", name: "奇瑞风云A9L", group: "fengyun", projects: ["底盘护板"] },
  { slug: "fengyun-t8", name: "奇瑞风云T8", group: "fengyun", projects: ["底盘护板", "电动踏板"] },
  { slug: "fengyun-t9", name: "奇瑞风云T9", group: "fengyun", projects: ["底盘护板", "电动踏板"] },
  { slug: "fengyun-t10", name: "奇瑞风云T10", group: "fengyun", projects: ["底盘护板", "电动踏板"] },
  { slug: "fengyun-t11", name: "奇瑞风云T11", group: "fengyun", projects: ["底盘护板", "电动踏板"] },
  { slug: "tiggo", name: "奇瑞瑞虎", group: "tiggo", projects: ["底盘护板", "电动踏板"] },
  { slug: "tiggo-3", name: "奇瑞瑞虎3", group: "tiggo", projects: ["底盘护板"] },
  { slug: "tiggo-3x", name: "奇瑞瑞虎3X", group: "tiggo", projects: ["底盘护板"] },
  { slug: "tiggo-5", name: "奇瑞瑞虎5", group: "tiggo", projects: ["底盘护板"] },
  { slug: "tiggo-5x", name: "奇瑞瑞虎5X", group: "tiggo", projects: ["底盘护板"] },
  { slug: "tiggo-7", name: "奇瑞瑞虎7", group: "tiggo", projects: ["底盘护板", "电动踏板"] },
  { slug: "tiggo-8", name: "奇瑞瑞虎8", group: "tiggo", projects: ["底盘护板", "电动踏板"] },
  { slug: "tiggo-8l", name: "奇瑞瑞虎8L", group: "tiggo", projects: ["底盘护板", "电动踏板"] },
  { slug: "tiggo-8-plus", name: "奇瑞瑞虎8PLUS", group: "tiggo", projects: ["底盘护板"] },
  { slug: "tiggo-8-pro", name: "奇瑞瑞虎8PRO", group: "tiggo", projects: ["底盘护板", "电动踏板"] },
  { slug: "tiggo-9", name: "奇瑞瑞虎9", group: "tiggo", projects: ["底盘护板", "电动踏板"] },
  { slug: "a5", name: "奇瑞A5", group: "classic", projects: ["底盘护板"] },
  { slug: "e3", name: "奇瑞E3", group: "classic", projects: ["底盘护板"] },
  { slug: "e5", name: "奇瑞E5", group: "classic", projects: ["底盘护板"] },
  { slug: "big-ant", name: "奇瑞大蚂蚁", group: "ev", projects: ["底盘护板"] },
  { slug: "qq-ice-cream", name: "奇瑞QQ冰淇淋", group: "ev", projects: ["底盘护板"] },
];
