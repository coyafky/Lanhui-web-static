export type GreatWallModelGroupKey =
  | "pickup"
  | "sedan"
  | "compact"
  | "ev";

export const GREAT_WALL_MODEL_GROUP_LABELS: Record<GreatWallModelGroupKey, string> = {
  pickup: "皮卡系列",
  sedan: "轿车系列",
  compact: "小型车",
  ev: "新能源",
};

export const GREAT_WALL_MODEL_GROUPS: GreatWallModelGroupKey[] = [
  "pickup",
  "sedan",
  "compact",
  "ev",
];

export interface GreatWallModel {
  slug: string;
  name: string;
  group: GreatWallModelGroupKey;
  projects: string[];
}

export const greatWallModels: GreatWallModel[] = [
  { slug: "fengjun-6", name: "长城风骏6", group: "pickup", projects: ["底盘护板"] },
  { slug: "fengjun-7", name: "长城风骏7", group: "pickup", projects: ["底盘护板"] },
  { slug: "jingang-pao", name: "长城金刚炮", group: "pickup", projects: ["底盘护板"] },
  { slug: "po", name: "长城炮", group: "pickup", projects: ["底盘护板", "电动踏板"] },
  { slug: "tengyi-c30", name: "长城腾翼C30", group: "sedan", projects: ["底盘护板"] },
  { slug: "tengyi-c50", name: "长城腾翼C50", group: "sedan", projects: ["底盘护板"] },
  { slug: "xuanli", name: "长城炫丽", group: "compact", projects: ["底盘护板"] },
  { slug: "c20r", name: "长城C20R", group: "compact", projects: ["底盘护板"] },
  { slug: "m2", name: "长城M2", group: "compact", projects: ["底盘护板"] },
  { slug: "m4", name: "长城M4", group: "compact", projects: ["底盘护板"] },
  { slug: "h10", name: "长城H10", group: "ev", projects: ["底盘护板"] },
];
