/**
 * 特斯拉 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs tesla --apply`
 * 源：`src/lib/fitment/tesla.ts`
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
export const teslaProjects: readonly CuratedProject[] = [
  {
    name: "360软包脚垫",
    modelCount: 4,
    models: [
      { model: "Model 3", variants: [
        { material: "", year: "19款--22款", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "Model S", variants: [
        { material: "", year: "14款--16款", note: "" },
        { material: "", year: "17款--22款", note: "" },
        { material: "", year: "15款--16款", note: "" },
      ] },
      { model: "Model X", variants: [
        { material: "", year: "16款--22款", note: "" },
        { material: "", year: "16款--22款", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "16款--22款", note: "" },
        { material: "", year: "16款--22款", note: "" },
      ] },
      { model: "Model Y", variants: [
        { material: "", year: "21款--23款", note: "" },
        { material: "", year: "21款--23款", note: "" },
        { material: "", year: "24款", note: "" },
        { material: "", year: "25款--", note: "" },
        { material: "", year: "25款--", note: "" },
        { material: "", year: "26款--", note: "" },
      ] },
    ],
  },
  {
    name: "平面尾箱垫",
    modelCount: 4,
    models: [
      { model: "Model 3", variants: [
        { material: "559后厢/双针", year: "19款--21款", note: "" },
        { material: "1529前厢", year: "21款--22款", note: "" },
        { material: "1821上层后厢", year: "23款--", note: "" },
        { material: "1823前厢", year: "23款--", note: "" },
      ] },
      { model: "Model S", variants: [
        { material: "424后厢", year: "15款--16款", note: "" },
        { material: "424后厢", year: "17款--22款", note: "" },
      ] },
      { model: "Model X", variants: [
        { material: "352后厢", year: "16款--22款", note: "" },
        { material: "356后厢小尾箱", year: "16款--22款", note: "" },
        { material: "356后厢小尾箱", year: "16款--22款", note: "" },
        { material: "", year: "16款--22款", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "Model Y", variants: [
        { material: "1369 下层", year: "21款-24款", note: "" },
        { material: "1202 前厢", year: "21款-24款", note: "" },
        { material: "974 有耳朵", year: "21款-24款", note: "" },
        { material: "1466 连体没有耳朵", year: "21款-24款", note: "" },
        { material: "2194 一整张", year: "25款--", note: "" },
        { material: "2195 分两张", year: "25款--", note: "" },
        { material: "2274 分体尾箱", year: "26款--", note: "" },
        { material: "2275 连体尾箱", year: "26款--", note: "" },
      ] },
    ],
  },
  {
    name: "360全包尾箱",
    modelCount: 2,
    models: [
      { model: "Model X", variants: [
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "Model Y", variants: [
        { material: "", year: "21款-24款", note: "" },
        { material: "", year: "21款-24款", note: "" },
        { material: "", year: "21款-24款", note: "" },
        { material: "", year: "25款--", note: "" },
        { material: "", year: "25款--", note: "" },
      ] },
    ],
  },
  {
    name: "底盘护板",
    modelCount: 2,
    models: [
      { model: "Model 3", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019-2024", note: "重要说明:前电机保护板通用；排量或续航:电动；保护位置:前电机；后电机；电池冷却液管道" },
      ] },
      { model: "Model Y", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021-2024", note: "重要说明:前电机保护板通用；排量或续航:电动；保护位置:后电机；前电机；电池冷却液管道" },
      ] },
    ],
  },
  {
    name: "小桌板",
    modelCount: 2,
    models: [
      { model: "Model 3/Y", variants: [
        { material: "小桌板（真皮+金属饰条）", year: "", note: "移动办公/途中用餐/带娃/旅途娱乐/日常置物；桌板与黑白撞色皮质座椅、简约科技内饰融为一体；不用时收起不占空间" },
      ] },
      { model: "Model Y-L", variants: [
        { material: "小桌板（真皮+银色饰条）", year: "", note: "移动办公/途中用餐/带娃/旅途娱乐/日常置物；桌板皮面与原车深灰/黑色拼接皮质+翻毛皮座椅同色系同质感，配绿色氛围灯科技内饰；不用时收起不占空间" },
      ] },
    ],
  },
  {
    name: "包围",
    modelCount: 1,
    models: [
      { model: "Model Y", variants: [
        { material: "ABS", year: "2025", note: "" },
        { material: "PP", year: "2025", note: "" },
        { material: "ABS", year: "2025", note: "" },
        { material: "ABS", year: "2020-2024", note: "" },
      ] },
    ],
  },
];

export const TESLA_PROJECT_COUNT = 6;
