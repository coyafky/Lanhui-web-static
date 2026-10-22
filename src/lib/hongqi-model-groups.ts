/**
 * 红旗 17 车型分组（车型列表模式，车型为主）。
 * 依据：specs/active/hongqi-products.md（适装明细表 2026-08/09 核对版）。禁止手改。
 */

export type HongqiModelGroup = "suv" | "sedan" | "mpv" | "nev";

export type HongqiModelEntry = {
  slug: string;
  name: string;
  group: HongqiModelGroup;
  rowCount: number;
  projects: readonly string[];
  subpage: boolean;
};

export const HONGQI_GROUP_ORDER: readonly HongqiModelGroup[] = ["suv", "sedan", "mpv", "nev"];

export const HONGQI_GROUP_LABELS: Record<HongqiModelGroup, string> = {
  suv: "SUV",
  sedan: "轿车",
  mpv: "MPV · 商务",
  nev: "新能源 · 纯电/混动",
};

export const hongqiModels: readonly HongqiModelEntry[] = [
  { slug: "hs7", name: "HS7", group: "suv", rowCount: 25, projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱", "底盘护板", "电动踏板"], subpage: true },
  { slug: "h5", name: "H5", group: "sedan", rowCount: 15, projects: ["360软包脚垫", "平面尾箱垫", "底盘护板"], subpage: true },
  { slug: "e-hs9", name: "E-HS9", group: "nev", rowCount: 8, projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"], subpage: false },
  { slug: "hs5", name: "HS5", group: "suv", rowCount: 7, projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱", "底盘护板", "电动踏板"], subpage: false },
  { slug: "h7", name: "H7", group: "sedan", rowCount: 4, projects: ["360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "h6", name: "H6", group: "sedan", rowCount: 4, projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"], subpage: false },
  { slug: "h9", name: "H9", group: "sedan", rowCount: 4, projects: ["360软包脚垫", "平面尾箱垫", "底盘护板"], subpage: false },
  { slug: "hs3", name: "HS3", group: "suv", rowCount: 4, projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"], subpage: false },
  { slug: "e-qm5", name: "E-QM5", group: "nev", rowCount: 4, projects: ["360软包脚垫", "平面尾箱垫", "底盘护板"], subpage: false },
  { slug: "hq9", name: "HQ9", group: "mpv", rowCount: 3, projects: ["360软包脚垫"], subpage: false },
  { slug: "ls7", name: "LS7", group: "suv", rowCount: 3, projects: ["360软包脚垫", "平面尾箱垫", "360全包尾箱"], subpage: false },
  { slug: "hs6", name: "HS6", group: "suv", rowCount: 2, projects: ["360软包脚垫", "电动踏板"], subpage: false },
  { slug: "eh7", name: "EH7", group: "nev", rowCount: 2, projects: ["360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "天工06", name: "天工06", group: "nev", rowCount: 2, projects: ["360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "天工05", name: "天工05", group: "nev", rowCount: 2, projects: ["360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "天工08", name: "天工08", group: "nev", rowCount: 2, projects: ["360软包脚垫", "平面尾箱垫"], subpage: false },
  { slug: "e-hs3", name: "E-HS3", group: "nev", rowCount: 1, projects: ["360软包脚垫"], subpage: false },
];
