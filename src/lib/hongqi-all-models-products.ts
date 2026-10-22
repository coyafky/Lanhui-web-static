import type { ToyotaProject } from "./toyota-all-models-products";

/** 红旗 5 类项目（顺序即页面展示顺序）。 */
export const HONGQI_PROJECT_ORDER = ["floor-mats", "trunk-flat", "trunk-full", "skid-plate", "power-step"] as const;

export type HongqiProjectKey = (typeof HONGQI_PROJECT_ORDER)[number];

/** 红旗项目卡数据。 */
export const hongqiProjects: readonly ToyotaProject[] = [
/**
 * 红旗 5 类项目卡数据（车型列表模式）。型号编号/供应商不上页面。
 */

  { id: "floor-mats", name: "360软包脚垫", feature: "按车型开模的软包脚垫，座椅滑轨和地毯边缘一并包住；雨天、带娃场景好打理，不挡踏板和出风口", modelCount: 17, topModels: ["HS7", "H5", "E-HS9"] },
  { id: "trunk-flat", name: "平面尾箱垫", feature: "后备箱一体平铺垫，表面好清洁，适合日常轻量防护", modelCount: 14, topModels: ["HS7", "H5", "E-HS9"] },
  { id: "trunk-full", name: "360全包尾箱", feature: "尾箱绒面全包，按车型区分是否带侧包、音响位开孔与座椅布局", modelCount: 6, topModels: ["HS7", "E-HS9", "HS5"] },
  { id: "skid-plate", name: "底盘护板", feature: "发动机、变速箱、电池等底盘部件的底部保护，防石子飞溅和托底刮蹭；材质分锰钢 1.2mm、碳钢 1.5mm、铝镁合金 2.0mm、塑钢 5.0mm、碳纤 5.0mm 等档位", modelCount: 5, topModels: ["HS7", "H5", "HS5"] },
  { id: "power-step", name: "电动踏板", feature: "原厂对插取电或线夹取信号，不动原车线路；老人小孩上下车省力", modelCount: 3, topModels: ["HS7", "HS5", "HS6"] },
];
