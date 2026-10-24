/**
 * 享界 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs xiangjie --apply`
 * 源：`src/lib/fitment/xiangjie.ts`
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
export const xiangjieProjects: readonly CuratedProject[] = [
  {
    name: "底盘护板",
    modelCount: 4,
    models: [
      { model: "S9", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2025", note: "五件套；排量或续航:增程续航 256、365 S9T续航251/354；保护位置:发动机；电池前；电池后；油箱；后电机" },
      ] },
      { model: "S9纯电", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "S9增程", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "S9T", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2025", note: "五件套；排量或续航:增程续航 256、365 S9T续航251/354；纯电续航 801/701；保护位置:发动机；电池前；电池后；油箱；后电机；前电机；储气罐" },
      ] },
    ],
  },
  {
    name: "后排娱乐屏",
    modelCount: 1,
    models: [
      { model: "鸿蒙智行系列", variants: [
        { material: "后排娱乐屏", year: "", note: "专用支架+一秒安装+多屏互联互控+13.3超大屏+车规级8核大内存，4G+64G车规级配置。一体化超薄机身设计，拒绝抖动掉落，高端定制，无需磁吸，1秒固定,支持双频WiFi+蓝牙音频+内置双喇叭+HDMI+3.5mm耳机+USB*1+Type-C*1" },
      ] },
    ],
  },
];

export const XIANGJIE_PROJECT_COUNT = 2;
