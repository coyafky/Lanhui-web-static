export type ChevroletModelGroupKey =
  | "pickup"
  | "suv"
  | "sedan"
  | "compact";

export const CHEVROLET_MODEL_GROUP_LABELS: Record<ChevroletModelGroupKey, string> = {
  pickup: "皮卡系列",
  suv: "SUV系列",
  sedan: "轿车系列",
  compact: "小型家用",
};

export const CHEVROLET_MODEL_GROUPS: ChevroletModelGroupKey[] = [
  "pickup",
  "suv",
  "sedan",
  "compact",
];

export interface ChevroletModel {
  slug: string;
  name: string;
  group: ChevroletModelGroupKey;
  projects: string[];
}

export const chevroletModels: ChevroletModel[] = [
  { slug: "silverado-2500hd", name: "雪佛兰索罗德2500HD", group: "pickup", projects: ["底盘护板"] },
  { slug: "trailblazer", name: "雪佛兰创界", group: "suv", projects: ["底盘护板"] },
  { slug: "trax", name: "雪佛兰创酷", group: "suv", projects: ["底盘护板"] },
  { slug: "blazer", name: "雪佛兰开拓者", group: "suv", projects: ["底盘护板", "电动踏板"] },
  { slug: "captiva", name: "雪佛兰科帕奇", group: "suv", projects: ["底盘护板"] },
  { slug: "equinox", name: "雪佛兰探界者", group: "suv", projects: ["底盘护板", "电动踏板"] },
  { slug: "orlando", name: "雪佛兰沃兰多", group: "suv", projects: ["底盘护板"] },
  { slug: "monza", name: "雪佛兰科鲁泽", group: "sedan", projects: ["底盘护板"] },
  { slug: "cruze", name: "雪佛兰科鲁兹", group: "sedan", projects: ["底盘护板"] },
  { slug: "cavalier", name: "雪佛兰科沃兹", group: "sedan", projects: ["底盘护板"] },
  { slug: "malibu", name: "雪佛兰迈锐宝", group: "sedan", projects: ["底盘护板"] },
  { slug: "malibu-xl", name: "雪佛兰迈锐宝XL", group: "sedan", projects: ["底盘护板"] },
  { slug: "aveo", name: "雪佛兰爱唯欧", group: "compact", projects: ["底盘护板"] },
  { slug: "lova-rv", name: "雪佛兰乐风RV", group: "compact", projects: ["底盘护板"] },
  { slug: "sail", name: "雪佛兰赛欧", group: "compact", projects: ["底盘护板"] },
  { slug: "sail-3", name: "雪佛兰赛欧3", group: "compact", projects: ["底盘护板"] },
];
