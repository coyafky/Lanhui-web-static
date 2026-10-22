// 生成物：丰田 8 类适配件项目数据（S2 项目卡 / S3 主力车型卡）。
// 依据：specs/active/toyota-products.md（厂方适装表 2026.8）。禁止手改。

export type ToyotaProjectKey =
  | "floor-mats" | "trunk-full" | "trunk-flat" | "skid-plate"
  | "power-step" | "table" | "ceiling-tv" | "rear-screen";

export type ToyotaProject = {
  id: ToyotaProjectKey;
  name: string;
  feature: string;
  modelCount: number;
  topModels: readonly string[];
};

export const TOYOTA_PROJECT_ORDER: readonly ToyotaProjectKey[] = [
  "floor-mats",
  "trunk-full",
  "trunk-flat",
  "skid-plate",
  "power-step",
  "table",
  "ceiling-tv",
  "rear-screen",
];

export const toyotaProjects: readonly ToyotaProject[] = [
  { id: "floor-mats", name: "360软包脚垫", feature: "按车型开模的软包脚垫，座椅滑轨和地毯边缘一并包住，雨天、带娃场景易打理，不挡踏板和出风口", modelCount: 45, topModels: ["兰德酷路泽", "普拉多", "汉兰达"] },
  { id: "trunk-full", name: "360全包尾箱", feature: "尾箱绒面全包，按车型区分是否带侧包、音响位开孔与座椅布局", modelCount: 12, topModels: ["兰德酷路泽", "普拉多", "汉兰达"] },
  { id: "trunk-flat", name: "平面尾箱垫", feature: "后备箱一体平铺垫，表面好清洁，适合日常轻量防护", modelCount: 34, topModels: ["兰德酷路泽", "普拉多", "汉兰达"] },
  { id: "skid-plate", name: "底盘护板", feature: "发动机、电池、线束等底盘部件的底部保护，防石子飞溅和托底刮蹭；材质分合金、锰钢 1.2mm、铝镁合金 2.0mm 等档位", modelCount: 40, topModels: ["兰德酷路泽", "普拉多", "汉兰达"] },
  { id: "power-step", name: "电动踏板", feature: "原厂对插取电，不动原车线路；老人小孩上下车省力", modelCount: 10, topModels: ["汉兰达", "RAV4荣放", "赛那SIENNA"] },
  { id: "table", name: "小桌板", feature: "装前排座椅靠背后方，展开即用、收起贴合椅背；移动办公 / 带娃 / 置物", modelCount: 2, topModels: ["铂智3X", "海狮"] },
  { id: "ceiling-tv", name: "吸顶电视", feature: "装车顶中央，后排整排观看；15.6 寸高清大屏、4G 联网、语音声控、手机投屏", modelCount: 1, topModels: ["格瑞维亚"] },
  { id: "rear-screen", name: "后排娱乐屏", feature: "装前排座椅靠背，各坐各的互不打扰；原车接口取电，不用拆内饰", modelCount: 1, topModels: ["铂智7"] },
] as const;
