/**
 * 乐道 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs ledao --apply`
 * 源：`src/lib/fitment/ledao.ts`
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
export const ledaoProjects: readonly CuratedProject[] = [
  {
    name: "360软包脚垫",
    modelCount: 3,
    models: [
      { model: "L60", variants: [
        { material: "皮革/丝圈", year: "24款--", note: "门座：4门5座；编号：L3183S；4门5座" },
      ] },
      { model: "L80", variants: [
        { material: "皮革/丝圈", year: "26款--", note: "门座：4门5座；编号：L3517S；4门5座" },
      ] },
      { model: "L90", variants: [
        { material: "皮革/丝圈", year: "25款--", note: "门座：5门6座；片套：4片；编号：L3355S；5门6座/4片" },
      ] },
    ],
  },
  {
    name: "平面尾箱垫",
    modelCount: 2,
    models: [
      { model: "L60", variants: [
        { material: "皮革", year: "24款--", note: "门座：4门5座；编号：2143；4门5座" },
      ] },
      { model: "L80", variants: [
        { material: "皮革", year: "26款--", note: "门座：4门5座；编号：2395；4门5座" },
      ] },
    ],
  },
  {
    name: "底盘护板",
    modelCount: 1,
    models: [
      { model: "L90", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2025", note: "注意：三件套；排量或续航：不分续航；保护位置：前电机；后电机；后尾箱储气罐" },
        { material: "原始资料未注明具体合金类型", year: "", note: "保护位置：前电机、后电机" },
      ] },
    ],
  },
  {
    name: "小桌板",
    modelCount: 1,
    models: [
      { model: "L60", variants: [
        { material: "小桌板（真皮+金属饰条）", year: "", note: "移动办公/途中用餐/带娃/旅途娱乐/日常置物；不用时收起不占空间" },
      ] },
    ],
  },
];

export const LEDAO_PROJECT_COUNT = 4;
