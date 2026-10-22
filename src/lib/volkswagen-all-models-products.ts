/**
 * 大众 2 类项目卡数据（车型列表模式）。型号编号/供应商不上页面。
 * 覆盖车型数：底盘护板 41 款（42 款中除揽境外全部有护板记录），电动踏板 9 款。
 */

export const VOLKSWAGEN_PROJECT_ORDER = ["skid-plate", "power-step"] as const;

export type VolkswagenProjectKey = (typeof VOLKSWAGEN_PROJECT_ORDER)[number];

export type VolkswagenProject = {
  id: VolkswagenProjectKey;
  name: string;
  feature: string;
  modelCount: number;
  topModels: readonly string[];
};

export const volkswagenProjects: readonly VolkswagenProject[] = [
  {
    id: "skid-plate",
    name: "底盘护板",
    feature: "护发动机、变速箱、油箱、电池等底盘部件，防石子飞溅和托底刮蹭；材质分锰钢 1.2mm、碳钢 1.5mm、铝镁合金 2.0mm、塑钢 5.0mm、碳纤 5.0mm 等档位",
    modelCount: 41,
    topModels: ["途锐", "途昂", "途观"],
  },
  {
    id: "power-step",
    name: "电动踏板",
    feature: "原厂线夹取信号取电，不动原车线路；老人小孩上下车省力，SUV、MPV 用得多",
    modelCount: 9,
    topModels: ["途锐", "途昂", "途观"],
  },
];
