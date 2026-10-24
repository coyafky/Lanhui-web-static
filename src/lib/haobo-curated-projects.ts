/**
 * 昊铂 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs haobo --apply`
 * 源：`src/lib/fitment/haobo.ts`
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
export const haoboProjects: readonly CuratedProject[] = [
  {
    name: "底盘护板",
    modelCount: 6,
    models: [
      { model: "A800", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2026", note: "前电机、前电池、后电池" },
        { material: "原始资料未注明具体合金类型", year: "", note: "发动机护板、电池护板、油箱护板、后电机护板" },
      ] },
      { model: "GT", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2023-2024；2025", note: "注意：五件套；三件套；排量或续航：电动续航560、710、630；纯电续航710；保护位置：前电机；电池前；电池后；后电机；后部底盘" },
      ] },
      { model: "HL", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2025", note: "注意：六件套；四件套；排量或续航：增程 续航350；纯电续航750/700；保护位置：前电机；电池前；电池后；油箱；后电机" },
      ] },
      { model: "HT", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2023-2024-2025；2024、2025", note: "注意：五件套 一、前电机、尾箱后底护板与续航825前电机、尾箱后底护板通用 二、670特高压激光雷达版后电机与HT825后电机通用三、25款后电机通用续航825后电机；五件套 一、前电机、尾箱后底护板与续航670/770/600前电机、尾箱后底护板通用。 二、后电机与670特高压激光雷达版后电机通用；排量或续航：电动续航670、670特高压激光雷达版、770、600；电动续航825；保护位置：前电机；电池前；电池后；后电机；后部底盘；安装配件或支架：25款电池螺丝专用" },
      ] },
      { model: "S600纯电660续航后驱", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "S600增程.四驱", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
    ],
  },
  {
    name: "360软包脚垫",
    modelCount: 4,
    models: [
      { model: "GT", variants: [
        { material: "", year: "23款--", note: "" },
        { material: "", year: "", note: "" },
      ] },
      { model: "HL", variants: [
        { material: "", year: "25款--", note: "" },
        { material: "", year: "", note: "" },
      ] },
      { model: "HT", variants: [
        { material: "", year: "23款--", note: "" },
        { material: "", year: "", note: "" },
      ] },
      { model: "SSR", variants: [
        { material: "", year: "24款--", note: "" },
      ] },
    ],
  },
  {
    name: "平面尾箱垫",
    modelCount: 4,
    models: [
      { model: "GT", variants: [
        { material: "", year: "23款--", note: "" },
        { material: "", year: "", note: "" },
      ] },
      { model: "HL", variants: [
        { material: "2349分体", year: "25款--", note: "" },
        { material: "2350连体", year: "25款--", note: "" },
        { material: "2349分体", year: "", note: "" },
        { material: "2350连体", year: "", note: "" },
      ] },
      { model: "HT", variants: [
        { material: "1876上层", year: "23款--", note: "" },
        { material: "1876上层", year: "", note: "" },
      ] },
      { model: "SSR", variants: [
        { material: "", year: "24款--", note: "" },
      ] },
    ],
  },
  {
    name: "360全包尾箱",
    modelCount: 1,
    models: [
      { model: "HT", variants: [
        { material: "", year: "23款--", note: "" },
        { material: "", year: "", note: "" },
      ] },
    ],
  },
];

export const HAOBO_PROJECT_COUNT = 4;
