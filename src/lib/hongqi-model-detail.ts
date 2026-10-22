/**
 * 红旗主力车型子页明细（车型为主：每类项目 = 年款/材质/重要说明聚合）。
 * 型号编号仅数据层留档（到店对表用），页面不展示。禁止手改。
 */

export type HongqiDetailRow = {
  years: string;
  material: string;
  note: string;
};

export type HongqiDetailProject = {
  key: string;
  name: string;
  feature: string;
  recordCount: number;
  entries: readonly HongqiDetailRow[];
};

export type HongqiModelDetail = {
  name: string;
  summary: string;
  projects: readonly HongqiDetailProject[];
};

export const hongqiModelDetails: Record<string, HongqiModelDetail> = {
  "hs7": { name: "HS7", summary: "5 类项目",
    projects: [
      { key: "floor-mats", name: "360软包脚垫", feature: "按车型开模的软包脚垫，座椅滑轨和地毯边缘一并包住；雨天、带娃场景好打理，不挡踏板和出风口", recordCount: 10, entries: [
        { years: "19款到21款", material: "", note: "" },
        { years: "19款到22款", material: "", note: "原车7座做5座" },
        { years: "19款到22款", material: "", note: "原车7座做7座" },
        { years: "22款到23款", material: "", note: "" },
        { years: "22款到23款", material: "", note: "原车7座做5座" },
        { years: "22款到23款", material: "", note: "原车7座做7座" },
        { years: "23款起", material: "", note: "7座做5座" },
        { years: "23款起", material: "", note: "7座做7座" },
        { years: "23款起", material: "", note: "6座做4座" },
        { years: "23款起", material: "", note: "6座做6座" }
      ] },
      { key: "trunk-flat", name: "平面尾箱垫", feature: "后备箱一体平铺垫，表面好清洁，适合日常轻量防护", recordCount: 6, entries: [
        { years: "19款到21款", material: "", note: "" },
        { years: "22款起", material: "", note: "" },
        { years: "22款起", material: "", note: "7座做5座" },
        { years: "23款起", material: "", note: "7座做5座" },
        { years: "23款起", material: "", note: "7座做7座" }
      ] },
      { key: "trunk-full", name: "360全包尾箱", feature: "尾箱绒面全包，按车型区分是否带侧包、音响位开孔与座椅布局", recordCount: 6, entries: [
        { years: "19款起", material: "", note: "5座" },
        { years: "22款起", material: "", note: "5座" },
        { years: "19款起", material: "", note: "7座" },
        { years: "22款起", material: "", note: "7座 两边耳朵分体" },
        { years: "23款起", material: "", note: "" }
      ] },
      { key: "skid-plate", name: "底盘护板", feature: "发动机、变速箱、电池等底盘部件的底部保护，防石子飞溅和托底刮蹭；材质分锰钢 1.2mm、碳钢 1.5mm、铝镁合金 2.0mm、塑钢 5.0mm、碳纤 5.0mm 等档位", recordCount: 1, entries: [
        { years: "2019/2022", material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", note: "保护位置:发动机；变速箱；排量或续航:3.0T、2.0T；3.0T；2.0T；重要说明:两件套" }
      ] },
      { key: "power-step", name: "电动踏板", feature: "原厂对插取电或线夹取信号，不动原车线路；老人小孩上下车省力", recordCount: 2, entries: [
        { years: "2019-2022", material: "", note: "取信号方式:线夹；适配明细:2019-2022=线夹" }
      ] },
    ],
  },
  "h5": { name: "H5", summary: "3 类项目",
    projects: [
      { key: "floor-mats", name: "360软包脚垫", feature: "按车型开模的软包脚垫，座椅滑轨和地毯边缘一并包住；雨天、带娃场景好打理，不挡踏板和出风口", recordCount: 9, entries: [
        { years: "18款到22款", material: "", note: "" },
        { years: "21款到22款", material: "", note: "" },
        { years: "23款起", material: "", note: "" },
        { years: "23款起", material: "", note: "HEV" },
        { years: "25款起", material: "", note: "PHEV" }
      ] },
      { key: "trunk-flat", name: "平面尾箱垫", feature: "后备箱一体平铺垫，表面好清洁，适合日常轻量防护", recordCount: 5, entries: [
        { years: "20款到22款", material: "", note: "靠近背板前端有台阶" },
        { years: "18款到22款", material: "", note: "右边带网兜" },
        { years: "18款到22款", material: "", note: "右边不带网兜" },
        { years: "23款起", material: "", note: "右边带网兜" },
        { years: "23款起", material: "", note: "右边不带网兜" }
      ] },
      { key: "skid-plate", name: "底盘护板", feature: "发动机、变速箱、电池等底盘部件的底部保护，防石子飞溅和托底刮蹭；材质分锰钢 1.2mm、碳钢 1.5mm、铝镁合金 2.0mm、塑钢 5.0mm、碳纤 5.0mm 等档位", recordCount: 1, entries: [
        { years: "2018-2019、2020-2022、2023-2024", material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm；塑钢5.0mm；碳纤5.0mm", note: "保护位置:发动机；发动机后部；排量或续航:1.5T/1.8T；1.5T/2.0T；1.8T；重要说明:两件套；要拆原车板" }
      ] },
    ],
  },
};
