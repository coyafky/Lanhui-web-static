/**
 * 大众 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs volkswagen --apply`
 * 源：`src/lib/fitment/volkswagen.ts`
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
export const volkswagenProjects: readonly CuratedProject[] = [
  {
    name: "底盘护板",
    modelCount: 33,
    models: [
      { model: "宝来", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2008-2012；2013-2015；2016-2018；2019；2019-2024", note: "保护位置：发动机；排量或续航：1.2T/1.4T/1.5L；1.4T/1.6L；1.4T/1.6L/1.8L；1.5L；注意：要拆原车板；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "高尔夫", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2004-2013；2014-2024；2021-2025", note: "保护位置：发动机；排量或续航：1.4T/1.6L；1.4T/1.6L/2.0T/1.2T；2.0T；注意：通用；要拆原车板；安装配件或支架：大众系列专用支架" },
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2016-2020", note: "保护位置：发动机；排量或续航：1.2T/1.4T/1.6L；注意：要拆原车板；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "辉昂", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2016；2018-2021", note: "保护位置：变速箱；发动机；排量或续航：2.0/3.0；注意：两件套；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "甲壳虫", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2013", note: "保护位置：发动机；排量或续航：1.2T/1.4T/2.0T；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "捷达", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2013-2019", note: "保护位置：发动机；排量或续航：1.4L/1.4T/1.5L；注意：(锰钢)原车胶板要开孔；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "开迪", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2005", note: "保护位置：发动机；排量或续航：1.6L/2.0L；注意：要拆原车板；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "揽巡", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；碳钢1.5mm", year: "2023-2024", note: "保护位置：发动机；排量或续航：2.0T；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "朗境", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2014-2017", note: "保护位置：发动机；排量或续航：1.4T/1.6L；注意：要拆原车板；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "朗行", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2013-2017", note: "保护位置：发动机；排量或续航：1.4T/1.6L；注意：要拆原车板；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "朗逸", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2008-2017；2018；2018-2022；2018-2026；2019；2023-2024", note: "保护位置：发动机；排量或续航：1.2T/1.4T/1.5L；1.2T/1.4T/1.6L；1.4T/1.6L/2.0L；1.5L；注意：通用；通用老朗逸版型；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "凌渡", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2015-2021", note: "保护位置：发动机；排量或续航：1.4T/1.8T；注意：要拆原车板；安装配件或支架：大众系列专用支架" },
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2022-2024", note: "保护位置：发动机；排量或续航：1.4T；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "迈腾", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2007-2016；2017-2024", note: "保护位置：发动机；排量或续航：1.4T/1.8T/2.0T；注意：要拆原车板；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "帕萨特", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2013-2018；2019、2024", note: "保护位置：发动机；排量或续航：1.4T/2.0T；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "桑塔纳", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2013-2021", note: "保护位置：发动机；排量或续航：1.5L/1.6L；注意：(锰钢)原车胶板要开孔；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "尚酷", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2010-2016", note: "保护位置：发动机；排量或续航：1.4T/2.0T；注意：要拆原车板；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "速腾", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2006-2018；2019、2025", note: "保护位置：发动机；排量或续航：1.4/1.2；1.4T/1.6L/1.8T/2.0L；安装配件或支架：大众系列专用支架" },
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm", year: "2026", note: "保护位置：发动机；排量或续航：1.2T/1.5T；注意：通用；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "探歌", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2018-2024、2025", note: "保护位置：发动机；排量或续航：1.2T/1.4T/1.5T" },
      ] },
      { model: "探影", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2020-2023", note: "保护位置：发动机；排量或续航：1.5L/1.4T；注意：通用；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "探岳", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2019、2024", note: "保护位置：发动机；排量或续航：1.4T/2.0T；安装配件或支架：大众系列专用支架" },
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2020-2024", note: "保护位置：发动机；排量或续航：2.0T；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "途安", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2004-2022", note: "保护位置：发动机；排量或续航：1.4T/1.8T/1.6L；注意：要拆原车板；安装配件或支架：大众系列专用支架" },
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2016-2022", note: "保护位置：发动机；排量或续航：1.4T/1.8T /2.0T；注意：要拆原车板；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "途昂", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2015-2017、2024；2017、2024", note: "保护位置：发动机；排量或续航：2.0T/2.5T；注意：通用；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "途观", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2010-2017；2017-2019", note: "保护位置：发动机；排量或续航：1.4T/1.8T/2.0T；1.4T/2.0T；注意：要拆原车板；要拆原车板 1.4T机滤对不上；安装配件或支架：大众系列专用支架" },
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2017-2020；2021-2024", note: "保护位置：发动机；排量或续航：1.4T/2.0T；2.0T；注意：要拆原车板；安装配件或支架：大众系列专用支架" },
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2021-2024", note: "保护位置：发动机；排量或续航：2.0T；注意：要拆原车板；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "途铠", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2019、2023", note: "保护位置：发动机；排量或续航：1.5L/1.4T；注意：通用；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "途锐", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2019-2023", note: "保护位置：变速箱；发动机；排量或续航：2.0/3.0；注意：两件套；安装配件或支架：大众系列专用支架" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：差速器护板" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：油箱护板" },
      ] },
      { model: "途岳", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2019、2023", note: "保护位置：发动机；排量或续航：1.4T/2.0T；安装配件或支架：大众系列专用支架" },
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm", year: "2025", note: "保护位置：发动机；排量或续航：1.5L；注意：通用；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "威然", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2020-2024", note: "保护位置：发动机；排量或续航：2.0T；注意：通用；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "蔚揽", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2016-2018", note: "保护位置：发动机；排量或续航：1.4T/2.0T；注意：要拆原车板；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "蔚领", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2018、2020", note: "保护位置：发动机；排量或续航：1.4T/1.5L；注意：要拆原车板；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "夏朗", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2018-2019", note: "保护位置：发动机；排量或续航：2.0T；注意：要拆原车板；安装配件或支架：定制油箱产品有专用支架" },
      ] },
      { model: "CC", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2010-2018；2019、2021、2024", note: "保护位置：发动机；排量或续航：1.8T/2.0T；2.0T；注意：要拆原车板；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "ID.ERA 9X", variants: [
        { material: "铝镁合金2.0mm", year: "2026", note: "保护位置：储气罐；电池；发动机；后电机；油箱；排量或续航：增程321/406；注意：五件套" },
      ] },
      { model: "Polo", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2005-2018；2019-2023", note: "保护位置：发动机；排量或续航：1.4L/1.6L；1.5L；注意：通用；安装配件或支架：大众系列专用支架" },
      ] },
      { model: "R36", variants: [
        { material: "铝镁合金2.0mm；锰钢1.2mm；塑钢5.0mm；碳钢1.5mm；碳纤5.0mm", year: "2010-2013", note: "保护位置：发动机；排量或续航：1.8T/2.0T；安装配件或支架：大众系列专用支架" },
      ] },
    ],
  },
  {
    name: "电动踏板",
    modelCount: 8,
    models: [
      { model: "揽境", variants: [
        { material: "", year: "2021+", note: "取信号方式：线夹；适配明细：2021+=线夹" },
      ] },
      { model: "揽巡", variants: [
        { material: "", year: "2023", note: "取信号方式：线夹；适配明细：2023=线夹" },
      ] },
      { model: "探岳", variants: [
        { material: "", year: "2018+", note: "取信号方式：线夹；适配明细：2018+=线夹" },
      ] },
      { model: "途昂", variants: [
        { material: "", year: "2025", note: "取信号方式：线夹；适配明细：2025=线夹" },
        { material: "", year: "2017+", note: "取信号方式：线夹；适配明细：2017+=线夹" },
      ] },
      { model: "途观", variants: [
        { material: "", year: "2017+", note: "取信号方式：线夹；适配明细：2017+=线夹" },
        { material: "", year: "2018", note: "取信号方式：线夹；适配明细：2018=线夹" },
      ] },
      { model: "途锐", variants: [
        { material: "", year: "2011-2018；2019+", note: "取信号方式：线夹；适配明细：2011-2018=线夹 ； 2019+=线夹" },
      ] },
      { model: "途岳", variants: [
        { material: "", year: "2018+", note: "取信号方式：线夹；适配明细：2018+=线夹" },
      ] },
      { model: "威然", variants: [
        { material: "", year: "2020+", note: "取信号方式：线夹；适配明细：2020+=线夹" },
      ] },
    ],
  },
];

export const VOLKSWAGEN_PROJECT_COUNT = 2;
