export type NissanModelGroupKey = "sedan" | "mpv" | "suv";

export const NISSAN_MODEL_GROUP_LABELS: Record<NissanModelGroupKey, string> = {
  sedan: "轿车",
  mpv: "MPV",
  suv: "SUV",
};

export const NISSAN_MODEL_GROUPS: NissanModelGroupKey[] = ["sedan", "mpv", "suv"];

export interface NissanModel {
  slug: string;
  name: string;
  group: NissanModelGroupKey;
  projects: string[];
}

export const nissanModels: NissanModel[] = [
  // 轿车 13
  { slug: "xuanyi", name: "轩逸", group: "sedan", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"] },
  { slug: "tianlai", name: "天籁", group: "sedan", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"] },
  { slug: "qida", name: "骐达", group: "sedan", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱"] },
  { slug: "yangguang", name: "阳光", group: "sedan", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"] },
  { slug: "lanniao", name: "蓝鸟", group: "sedan", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"] },
  { slug: "xima", name: "西玛", group: "sedan", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"] },
  { slug: "yida", name: "颐达", group: "sedan", projects: ["360软包脚垫", "底盘护板"] },
  { slug: "liwei", name: "骊威", group: "sedan", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"] },
  { slug: "machi", name: "玛驰", group: "sedan", projects: ["360软包脚垫", "底盘护板"] },
  { slug: "gtr", name: "GT-R", group: "sedan", projects: ["360软包脚垫"] },
  { slug: "n6", name: "N6", group: "sedan", projects: ["360软包脚垫", "底盘护板"] },
  { slug: "n7", name: "N7", group: "sedan", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"] },
  { slug: "z9", name: "Z9", group: "sedan", projects: ["底盘护板"] },
  // MPV 3
  { slug: "junyi", name: "骏逸", group: "mpv", projects: ["底盘护板"] },
  { slug: "guishi", name: "贵士", group: "mpv", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫"] },
  { slug: "nv200", name: "NV200", group: "mpv", projects: ["360软包脚垫", "底盘护板"] },
  // SUV 13
  { slug: "qijun", name: "奇骏", group: "suv", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱", "电动踏板"] },
  { slug: "xiaoke", name: "逍客", group: "suv", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱"] },
  { slug: "loulan", name: "楼兰", group: "suv", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱", "电动踏板"] },
  { slug: "jinke", name: "劲客", group: "suv", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱"] },
  { slug: "tule", name: "途乐", group: "suv", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "360全包尾箱", "电动踏板"] },
  { slug: "tuda", name: "途达", group: "suv", projects: ["360软包脚垫", "底盘护板", "平面尾箱垫", "电动踏板"] },
  { slug: "nawala", name: "纳瓦拉", group: "suv", projects: ["360软包脚垫", "底盘护板", "电动踏板"] },
  { slug: "ruiqi", name: "锐骐", group: "suv", projects: ["360软包脚垫"] },
  { slug: "ruiqi6", name: "锐骐6", group: "suv", projects: ["360软包脚垫"] },
  { slug: "palanding", name: "帕拉丁", group: "suv", projects: ["底盘护板"] },
  { slug: "tanlu", name: "探陆", group: "suv", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱", "电动踏板"] },
  { slug: "airiya", name: "艾睿雅", group: "suv", projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"] },
  { slug: "nx8", name: "NX8", group: "suv", projects: ["底盘护板", "电动踏板"] },
];
