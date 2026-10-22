export type ShangjieModelGroupKey = "all";

export const SHANGJIE_MODEL_GROUP_LABELS: Record<ShangjieModelGroupKey, string> = {
  all: "尚界全系",
};

export const SHANGJIE_MODEL_GROUPS: ShangjieModelGroupKey[] = ["all"];

export interface ShangjieModel {
  slug: string;
  name: string;
  group: ShangjieModelGroupKey;
  projects: string[];
}

export const shangjieModels: ShangjieModel[] = [
  { slug: "h5", name: "尚界 H5", group: "all", projects: ["底盘护板", "后排娱乐屏", "小桌板"] },
  { slug: "z7", name: "尚界 Z7", group: "all", projects: ["底盘护板"] },
  { slug: "z7t", name: "尚界 Z7T", group: "all", projects: ["底盘护板", "后排娱乐屏"] },
];
