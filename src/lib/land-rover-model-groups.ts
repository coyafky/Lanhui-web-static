export type LandRoverModelGroupKey =
  | "range-rover"
  | "discovery"
  | "defender"
  | "freelander";

export const LAND_ROVER_MODEL_GROUP_LABELS: Record<
  LandRoverModelGroupKey,
  string
> = {
  "range-rover": "揽胜系列",
  discovery: "发现系列",
  defender: "卫士系列",
  freelander: "神行者系列",
};

export const LAND_ROVER_MODEL_GROUPS: LandRoverModelGroupKey[] = [
  "range-rover",
  "discovery",
  "defender",
  "freelander",
];

export interface LandRoverModel {
  slug: string;
  name: string;
  group: LandRoverModelGroupKey;
  projects: string[];
}

export const landRoverModels: LandRoverModel[] = [
  { slug: "range-rover-lwb", name: "路虎揽胜行政版", group: "range-rover", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "range-rover-sport", name: "路虎揽胜运动版", group: "range-rover", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "velar", name: "路虎揽胜星脉", group: "range-rover", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "evoque", name: "路虎揽胜极光", group: "range-rover", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "discovery-5", name: "路虎发现5", group: "discovery", projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "discovery-4", name: "路虎发现4", group: "discovery", projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "discovery-3", name: "路虎发现3", group: "discovery", projects: ["底盘护板", "360软包脚垫"] },
  { slug: "discovery-sport", name: "路虎发现运动版", group: "discovery", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "discovery-pure", name: "路虎发现神行", group: "discovery", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "defender", name: "路虎卫士", group: "defender", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "defender-90", name: "路虎卫士90", group: "defender", projects: ["底盘护板"] },
  { slug: "defender-110", name: "路虎卫士110", group: "defender", projects: ["底盘护板"] },
  { slug: "defender-130", name: "路虎卫士130", group: "defender", projects: ["底盘护板"] },
  { slug: "freelander-2", name: "路虎神行者2", group: "freelander", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "freelander-8", name: "路虎神行者8", group: "freelander", projects: ["底盘护板"] },
];
