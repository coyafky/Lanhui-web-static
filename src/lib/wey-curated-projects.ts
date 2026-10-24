/**
 * 魏牌 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs wey --apply`
 * 源：`src/lib/fitment/wey.ts`
 *
 * 年款/材质/备注均为适配库原文，不换算不推断。
 */

export interface CuratedProjectVariant {
  readonly material: string;
  readonly year: string;
  readonly note: string;
}

export interface CuratedProjectModel {
  readonly model: string;
  readonly variants: readonly CuratedProjectVariant[];
}

export interface CuratedProject {
  readonly name: string;
  /** 覆盖车系数 */
  readonly modelCount: number;
  readonly models: readonly CuratedProjectModel[];
}

/** 按覆盖车系数降序 */
export const weyProjects: readonly CuratedProject[] = [
  {
    name: "平面尾箱垫",
    modelCount: 10,
    models: [
      { model: "高山", variants: [
        { material: "皮革", year: "23款--", note: "" },
      ] },
      { model: "蓝山", variants: [
        { material: "皮革", year: "23款--", note: "" },
        { material: "皮革", year: "23款--", note: "" },
      ] },
      { model: "玛奇朵", variants: [
        { material: "皮革", year: "21款--", note: "" },
      ] },
      { model: "摩卡", variants: [
        { material: "皮革", year: "21款--", note: "适配PHEV" },
      ] },
      { model: "拿铁", variants: [
        { material: "皮革", year: "22款--", note: "" },
      ] },
      { model: "P8", variants: [
        { material: "皮革", year: "17款--19款", note: "" },
      ] },
      { model: "V9X", variants: [
        { material: "皮革", year: "26款--", note: "" },
        { material: "皮革", year: "26款--", note: "" },
      ] },
      { model: "VV5", variants: [
        { material: "皮革", year: "17款--", note: "" },
      ] },
      { model: "VV6", variants: [
        { material: "皮革", year: "18款--", note: "" },
      ] },
      { model: "VV7", variants: [
        { material: "皮革", year: "16款--", note: "" },
      ] },
    ],
  },
  {
    name: "360软包脚垫",
    modelCount: 9,
    models: [
      { model: "高山", variants: [
        { material: "皮革/丝圈", year: "23款--", note: "插电混动 丝圈不盖滑道，三排座椅太矮做不了丝圈" },
        { material: "皮革/丝圈", year: "23款--", note: "插电混动 丝圈盖滑道" },
        { material: "皮革/丝圈", year: "25款--", note: "丝圈不盖滑道" },
        { material: "皮革/丝圈", year: "25款--", note: "丝圈不盖滑道" },
        { material: "皮革/丝圈", year: "25款--", note: "木地板" },
        { material: "皮革/丝圈", year: "23款--", note: "" },
      ] },
      { model: "蓝山", variants: [
        { material: "皮革/丝圈", year: "23款--", note: "插电混动 不带冰箱" },
        { material: "皮革/丝圈", year: "23款--", note: "插电混动 不带冰箱" },
        { material: "皮革/丝圈", year: "23款--", note: "插电混动 带冰箱" },
        { material: "皮革/丝圈", year: "23款--", note: "插电混动 带冰箱" },
      ] },
      { model: "玛奇朵", variants: [
        { material: "皮革/丝圈", year: "21款--23款", note: "油电混合" },
        { material: "皮革/丝圈", year: "21款--23款", note: "插电混动" },
      ] },
      { model: "摩卡", variants: [
        { material: "皮革/丝圈", year: "21款--23款", note: "两驱" },
        { material: "皮革/丝圈", year: "21款--23款", note: "四驱，副驾带电路板" },
        { material: "皮革/丝圈", year: "21款--23款", note: "插电混动" },
      ] },
      { model: "拿铁", variants: [
        { material: "皮革/丝圈", year: "22款--23款", note: "油电混合" },
        { material: "皮革/丝圈", year: "22款--23款", note: "插电混动" },
      ] },
      { model: "V9X", variants: [
        { material: "皮革/丝圈", year: "26款--", note: "" },
      ] },
      { model: "VV5", variants: [
        { material: "皮革/丝圈", year: "17款--21款", note: "主副驾内侧有置物盒" },
      ] },
      { model: "VV6", variants: [
        { material: "皮革/丝圈", year: "18款--21款", note: "前排内侧矮绒布" },
        { material: "皮革/丝圈", year: "18款--21款", note: "高绒布不可塞边" },
      ] },
      { model: "VV7", variants: [
        { material: "皮革/丝圈", year: "17款--19款", note: "魏派P8共用此版 前排内侧是高绒布" },
        { material: "皮革/丝圈", year: "20款--21款", note: "适用于20款VV7新能源 前排内侧是矮绒布" },
      ] },
    ],
  },
  {
    name: "底盘护板",
    modelCount: 8,
    models: [
      { model: "高山", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2023-2025", note: "注意：六件套；加长版油箱续航170不合适；23款油箱加装一颗支架；排量或续航：1.5T混动；保护位置：发动机；前油管；中段油管；油箱；电池；后电机；安装配件或支架：一、后电机4颗专用异形支架 二、发动机一颗异形盖板" },
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2025", note: "注意：六件套 发动机、线束1、线束2、电池、后电机与高山8通用 油箱专用；排量或续航：续航201/172；保护位置：发动机；线束1；线束2；油箱；电池；后电机" },
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "蓝山", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2023；2025", note: "注意：6件套 发动机专用、其它护板23-25通用；排量或续航：宁德时代电池；保护位置：发动机；电池；油箱；线束1；线束2；后电机；安装配件或支架：一、油箱3颗:2颗专用支架、一颗通用问界M9油箱支架。 二、后电机3颗专用支架。 三、发动机1颗异形盖板" },
        { material: "原始资料未注明具体合金类型、锰钢", year: "", note: "" },
      ] },
      { model: "玛奇朵", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021", note: "注意：两件套燃油、混动通用；排量或续航：1.5L；保护位置：发动机前；发动机后；安装配件或支架：异形盖板" },
      ] },
      { model: "摩卡", variants: [
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021-2024", note: "注意：燃油、混动通用；排量或续航：2.0T；保护位置：发动机；安装配件或支架：发动机一颗异形盖板" },
      ] },
      { model: "拿铁", variants: [
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021-2022", note: "注意：燃油、混动通用；排量或续航：1.5T；保护位置：发动机；安装配件或支架：发动机一颗异形盖板" },
      ] },
      { model: "V9X", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2026", note: "注意：六件套 发动机、后电机、空悬泵通用!；发动机、油箱、后电机、空悬泵与行政版通用!；排量或续航：豪华加长版续航240/310；行政版续航 470；家庭版续航312/402；保护位置：发动机；电池；线束；油箱；后电机；空悬泵；电池前；电池后" },
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "VV5", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2017-2020", note: "注意：要拆原车板；排量或续航：2.0T；保护位置：发动机；安装配件或支架：2颗异形盖板" },
      ] },
      { model: "VV6", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2018-2021", note: "排量或续航：2.0T；保护位置：发动机；安装配件或支架：2颗异形盖板" },
      ] },
    ],
  },
  {
    name: "电动踏板",
    modelCount: 8,
    models: [
      { model: "蓝山", variants: [
        { material: "", year: "2023+", note: "取信号方式：线夹；适配明细：2023+=线夹" },
      ] },
      { model: "玛奇朵", variants: [
        { material: "", year: "2021+", note: "取信号方式：线夹；适配明细：2021+=线夹" },
      ] },
      { model: "摩卡", variants: [
        { material: "", year: "2021+；2022+", note: "取信号方式：线夹；适配明细：2021+=线夹；2022+=线夹" },
      ] },
      { model: "拿铁", variants: [
        { material: "", year: "2021+；2022+", note: "取信号方式：线夹；适配明细：2021+=线夹；2022+=线夹" },
      ] },
      { model: "P8", variants: [
        { material: "", year: "2018+", note: "取信号方式：对插；适配明细：2018+=对插" },
      ] },
      { model: "VV5", variants: [
        { material: "", year: "2017-2020；2021+", note: "取信号方式：线夹；适配明细：2017-2020=线夹；2021+=线夹" },
      ] },
      { model: "VV6", variants: [
        { material: "", year: "2018-2019；2020+", note: "取信号方式：线夹；适配明细：2018-2019=线夹；2020+=线夹" },
      ] },
      { model: "VV7", variants: [
        { material: "", year: "2017+", note: "取信号方式：线夹；适配明细：2017+=线夹" },
      ] },
    ],
  },
  {
    name: "360全包尾箱",
    modelCount: 7,
    models: [
      { model: "蓝山", variants: [
        { material: "皮革", year: "23款--", note: "" },
      ] },
      { model: "玛奇朵", variants: [
        { material: "皮革", year: "21款--", note: "" },
        { material: "皮革", year: "21款--", note: "" },
      ] },
      { model: "摩卡", variants: [
        { material: "皮革", year: "21款--", note: "适配PHEV" },
      ] },
      { model: "拿铁", variants: [
        { material: "皮革", year: "22款--", note: "" },
      ] },
      { model: "P8", variants: [
        { material: "皮革", year: "18款--", note: "尾箱不带侧包" },
      ] },
      { model: "VV6", variants: [
        { material: "皮革", year: "20款--", note: "" },
      ] },
      { model: "VV7", variants: [
        { material: "皮革", year: "19款--", note: "底板有拉绳孔 靠背二个挂钩孔" },
        { material: "皮革", year: "19款--", note: "" },
        { material: "皮革", year: "19款--", note: "尾箱不带侧包" },
      ] },
    ],
  },
];

export const WEY_PROJECT_COUNT = 5;
