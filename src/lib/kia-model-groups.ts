/**
 * 起亚 30 车型分组（车型列表模式，车型为主）。
 * 依据：specs/active/kia-products.md（适装明细表 2026-08/09 核对版，121 条记录）。禁止手改。
 * 起亚单车型适配记录最多智跑 14 条（<15），无子页；全部在品牌页内展示。
 */

export type KiaModelGroup = "suv" | "sedan" | "mpv" | "nev";

export type KiaModelEntry = {
  slug: string;
  name: string;
  group: KiaModelGroup;
  rowCount: number;
  projects: readonly string[];
  subpage: boolean;
};

export const KIA_GROUP_ORDER: readonly KiaModelGroup[] = ["suv", "sedan", "mpv", "nev"];

export const KIA_GROUP_LABELS: Record<KiaModelGroup, string> = {
  suv: "SUV",
  sedan: "轿车",
  mpv: "MPV",
  nev: "新能源",
};

export const kiaModels: readonly KiaModelEntry[] = [
  // ---- SUV（10）----
  { slug: "zhipao", name: "智跑", group: "suv", rowCount: 14, projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"], subpage: false },
  { slug: "suolanto", name: "索兰托L", group: "suv", rowCount: 10, projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "kx7", name: "KX7", group: "suv", rowCount: 7, projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"], subpage: false },
  { slug: "kx3", name: "KX3", group: "suv", rowCount: 6, projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"], subpage: false },
  { slug: "sibotaijie", name: "狮铂拓界", group: "suv", rowCount: 5, projects: ["底盘护板", "电动踏板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"], subpage: false },
  { slug: "yipao", name: "奕跑", group: "suv", rowCount: 4, projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"], subpage: false },
  { slug: "kx5", name: "KX5", group: "suv", rowCount: 4, projects: ["底盘护板", "360软包脚垫", "平面尾箱垫", "360全包尾箱"], subpage: false },
  { slug: "shipao", name: "狮跑", group: "suv", rowCount: 3, projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "barui", name: "霸锐", group: "suv", rowCount: 2, projects: ["360软包脚垫"], subpage: false },
  { slug: "saitusi", name: "赛图斯", group: "suv", rowCount: 1, projects: ["电动踏板"], subpage: false },
  // ---- 轿车（15）----
  { slug: "k5", name: "K5", group: "sedan", rowCount: 10, projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "k3", name: "K3", group: "sedan", rowCount: 9, projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "k2", name: "K2", group: "sedan", rowCount: 5, projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "k4", name: "K4", group: "sedan", rowCount: 3, projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "kx-cross", name: "KX CROSS", group: "sedan", rowCount: 3, projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "furuide", name: "福瑞迪", group: "sedan", rowCount: 3, projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "huanchi", name: "焕驰", group: "sedan", rowCount: 3, projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "k3s", name: "K3S", group: "sedan", rowCount: 2, projects: ["底盘护板", "360软包脚垫"], subpage: false },
  { slug: "xiuer", name: "秀尔", group: "sedan", rowCount: 2, projects: ["底盘护板", "360软包脚垫"], subpage: false },
  { slug: "sumai", name: "速迈", group: "sedan", rowCount: 2, projects: ["底盘护板", "360软包脚垫"], subpage: false },
  { slug: "sailatu", name: "赛拉图", group: "sedan", rowCount: 2, projects: ["360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "kaizun", name: "凯尊", group: "sedan", rowCount: 2, projects: ["360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "ruiao", name: "锐欧", group: "sedan", rowCount: 1, projects: ["360软包脚垫"], subpage: false },
  { slug: "yuanjian", name: "远舰", group: "sedan", rowCount: 1, projects: ["360软包脚垫"], subpage: false },
  { slug: "kaishen", name: "凯绅", group: "sedan", rowCount: 1, projects: ["360软包脚垫"], subpage: false },
  // ---- MPV（3）----
  { slug: "jiahua", name: "嘉华", group: "mpv", rowCount: 9, projects: ["底盘护板", "小桌板", "电动踏板", "360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "jiale", name: "佳乐", group: "mpv", rowCount: 3, projects: ["底盘护板", "360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "vq", name: "VQ", group: "mpv", rowCount: 1, projects: ["360软包脚垫"], subpage: false },
  // ---- 新能源（2）----
  { slug: "ev5", name: "EV5", group: "nev", rowCount: 3, projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"], subpage: false },
  { slug: "jirui", name: "极睿", group: "nev", rowCount: 1, projects: ["360软包脚垫"], subpage: false },
];
