/**
 * 雪佛兰 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs chevrolet --apply`
 * 源：`src/lib/fitment/chevrolet.ts`
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
export const chevroletProjects: readonly CuratedProject[] = [
  {
    name: "底盘护板",
    modelCount: 14,
    models: [
      { model: "爱唯欧", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2011-2014", note: "排量或续航：1.4L/1.6L；保护位置：发动机" },
      ] },
      { model: "创界", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019", note: "排量或续航：1.3T；保护位置：发动机" },
      ] },
      { model: "创酷", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2014-2018；2019-2023", note: "排量或续航：1.4T；1.0T/1.3T；保护位置：发动机" },
      ] },
      { model: "开拓者", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2020-2023", note: "排量或续航：2.0T；保护位置：发动机" },
      ] },
      { model: "科鲁泽", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019-2024；2020-2024", note: "排量或续航：1.0T/1.3T；1.5L；保护位置：发动机" },
      ] },
      { model: "科鲁兹", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2009-2016；2015-2019", note: "排量或续航：1.5L/1.4T；1.6L/1.6T/1.8L；保护位置：发动机" },
      ] },
      { model: "科帕奇", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2014-2017", note: "排量或续航：2.4L；保护位置：发动机" },
      ] },
      { model: "科沃兹", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2016-2019；2020", note: "注意：原车胶板要开孔；排量或续航：1.5L、1.0T；1.0T；保护位置：发动机" },
      ] },
      { model: "乐风", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2016-2019", note: "排量或续航：1.5L；保护位置：发动机" },
      ] },
      { model: "迈锐宝", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2012-2016；2017-2019", note: "排量或续航：1.5T；2.0L/2.4L/1.6T；保护位置：发动机" },
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2016-2018；2019-2023", note: "排量或续航：1.5T；2.5L；1.3/2.0T/1.5T；保护位置：发动机；安装配件或支架：异形盖板一颗" },
      ] },
      { model: "赛欧", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2010-2014", note: "排量或续航：1.2L/1.4L；保护位置：发动机" },
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2015-2019", note: "排量或续航：1.3L/1.5L；保护位置：发动机" },
      ] },
      { model: "索罗德", variants: [
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）" },
      ] },
      { model: "探界者", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2017-2019；2021-2023", note: "排量或续航：1.5T两驱；1.5T四驱/2.0T；1.5T/2.0T；保护位置：发动机；安装配件或支架：异形盖板" },
      ] },
      { model: "沃兰多", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2018-2020", note: "排量或续航：1.3T；保护位置：发动机" },
      ] },
    ],
  },
  {
    name: "电动踏板",
    modelCount: 2,
    models: [
      { model: "开拓者", variants: [
        { material: "", year: "2020+", note: "取信号方式：线夹；适配明细：2020+=线夹" },
      ] },
      { model: "探界者", variants: [
        { material: "", year: "2017+", note: "取信号方式：对插；适配明细：2017+=对插" },
      ] },
    ],
  },
];

export const CHEVROLET_PROJECT_COUNT = 2;
