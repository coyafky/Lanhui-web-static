export type XiangjieModelGroupKey = "all";

export const XIANGJIE_MODEL_GROUP_LABELS: Record<XiangjieModelGroupKey, string> = {
  all: "享界全系",
};

export const XIANGJIE_MODEL_GROUPS: XiangjieModelGroupKey[] = ["all"];

export interface XiangjieModel {
  slug: string;
  name: string;
  group: XiangjieModelGroupKey;
  projects: string[];
}

export const xiangjieModels: XiangjieModel[] = [
  { slug: "s9", name: "享界 S9", group: "all", projects: ["底盘护板", "后排娱乐屏"] },
  { slug: "s9t", name: "享界 S9T", group: "all", projects: ["底盘护板", "后排娱乐屏"] },
];
