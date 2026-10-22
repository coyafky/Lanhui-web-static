export type GacModelGroupKey = "sedan" | "mpv" | "suv";

export const GAC_MODEL_GROUP_LABELS: Record<GacModelGroupKey, string> = {
  sedan: "轿车",
  mpv: "MPV",
  suv: "SUV",
};

export const GAC_MODEL_GROUPS: GacModelGroupKey[] = ["sedan", "mpv", "suv"];

export interface GacModel {
  slug: string;
  name: string;
  group: GacModelGroupKey;
  projects: string[];
}

export const gacModels: GacModel[] = [
  // 轿车 9
  { slug: "yingbao", name: "影豹", group: "sedan", projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"] },
  { slug: "ga3", name: "GA3", group: "sedan", projects: ["底盘护板"] },
  { slug: "ga3s", name: "GA3S", group: "sedan", projects: ["底盘护板", "360软包脚垫"] },
  { slug: "ga3s-ev", name: "GA3S新能源", group: "sedan", projects: ["底盘护板"] },
  { slug: "ga4", name: "GA4", group: "sedan", projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"] },
  { slug: "ga4-plus", name: "GA4 Plus", group: "sedan", projects: ["底盘护板", "360软包脚垫"] },
  { slug: "ga6", name: "GA6", group: "sedan", projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"] },
  { slug: "ga5", name: "GA5", group: "sedan", projects: ["360软包脚垫"] },
  { slug: "ga8", name: "GA8", group: "sedan", projects: ["360软包脚垫"] },
  // MPV 6
  { slug: "m6", name: "M6", group: "mpv", projects: ["底盘护板", "小桌板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "m6-pro", name: "M6 Pro", group: "mpv", projects: ["底盘护板"] },
  { slug: "m8", name: "M8", group: "mpv", projects: ["底盘护板", "电动踏板", "小桌板", "吸顶电视", "360软包脚垫", "平面尾箱垫"] },
  { slug: "xiangwang-m8", name: "向往M8", group: "mpv", projects: ["底盘护板"] },
  { slug: "e8", name: "E8", group: "mpv", projects: ["底盘护板", "小桌板", "吸顶电视", "360软包脚垫", "平面尾箱垫"] },
  { slug: "e9", name: "E9", group: "mpv", projects: ["底盘护板", "小桌板", "360软包脚垫"] },
  // SUV 15
  { slug: "xiangwang-s7", name: "向往S7", group: "suv", projects: ["底盘护板", "电动踏板", "小桌板"] },
  { slug: "xiangwang-s9", name: "向往S9", group: "suv", projects: ["底盘护板"] },
  { slug: "yingku", name: "影酷", group: "suv", projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "es9", name: "ES9", group: "suv", projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "ge3", name: "GE3", group: "suv", projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"] },
  { slug: "gs3", name: "GS3", group: "suv", projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "gs3-power", name: "GS3 POWER", group: "suv", projects: ["底盘护板", "360软包脚垫"] },
  { slug: "gs3-yingsu", name: "GS3影速", group: "suv", projects: ["底盘护板"] },
  { slug: "gs4", name: "GS4", group: "suv", projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "gs4-coupe", name: "GS4 Coupe", group: "suv", projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "gs4-plus", name: "GS4 PLUS", group: "suv", projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "gs5", name: "GS5", group: "suv", projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "gs7", name: "GS7", group: "suv", projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫"] },
  { slug: "gs8", name: "GS8", group: "suv", projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "gs8s", name: "GS8S", group: "suv", projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
];
