/**
 * 起亚 6 类项目卡数据（车型列表模式）。型号编号/供应商不上页面。
 * 覆盖车型数：底盘护板 20、电动踏板 4、小桌板 1、360 软包脚垫 28、平面尾箱垫 19、360 全包尾箱 7。
 */

export const KIA_PROJECT_ORDER = [
  "skid-plate",
  "power-step",
  "seat-table",
  "mat-360",
  "trunk-mat",
  "trunk-full",
] as const;

export type KiaProjectKey = (typeof KIA_PROJECT_ORDER)[number];

export type KiaProject = {
  id: KiaProjectKey;
  name: string;
  feature: string;
  modelCount: number;
  topModels: readonly string[];
};

export const kiaProjects: readonly KiaProject[] = [
  {
    id: "skid-plate",
    name: "底盘护板",
    feature:
      "护发动机，防石子飞溅、托底刮蹭。材质分锰钢 1.2mm、碳钢 1.5mm、铝镁合金 2.0mm、塑钢 5.0mm、碳纤 5.0mm 等档位；部分车型装前要拆原车板，部分配角板",
    modelCount: 20,
    topModels: ["智跑", "索兰托L", "K5"],
  },
  {
    id: "power-step",
    name: "电动踏板",
    feature: "原车线夹取信号取电，不动原车线路；老人小孩上下车省力，SUV、MPV 用得多",
    modelCount: 4,
    topModels: ["狮铂拓界", "智跑", "嘉华"],
  },
  {
    id: "seat-table",
    name: "小桌板",
    feature:
      "装在前排座椅靠背后方，展开即用、收起贴合椅背。移动办公、途中用餐、带娃、旅途娱乐、日常置物都能用",
    modelCount: 1,
    topModels: ["嘉华"],
  },
  {
    id: "mat-360",
    name: "360 软包脚垫",
    feature:
      "嵌入座椅与门槛缝隙，不翘边不留缝；防水耐脏，污渍直接擦，隔音降噪",
    modelCount: 28,
    topModels: ["智跑", "索兰托L", "K5"],
  },
  {
    id: "trunk-mat",
    name: "平面尾箱垫",
    feature: "整块铺满尾箱，防水防滑，脏了直接擦或拿出来冲",
    modelCount: 19,
    topModels: ["智跑", "索兰托L", "K5"],
  },
  {
    id: "trunk-full",
    name: "360 全包尾箱",
    feature: "尾箱三面全包，防刮防脏，拆卸清洗方便；部分车型尾箱不带侧包",
    modelCount: 7,
    topModels: ["智跑", "KX7", "KX3"],
  },
];
