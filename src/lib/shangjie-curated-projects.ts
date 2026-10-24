/**
 * 尚界 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs shangjie --apply`
 * 源：`src/lib/fitment/shangjie.ts`
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
export const shangjieProjects: readonly CuratedProject[] = [
  {
    name: "底盘护板",
    modelCount: 6,
    models: [
      { model: "H5", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2025", note: "重要说明:五件套；排量或续航:纯电535/640；续航235；保护位置:前电机；电池前；电池后；后电机；储气罐；发动机；线束；电池；油箱" },
      ] },
      { model: "H5-200续航", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "H5纯电-535续航", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "Z7", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2026", note: "重要说明:五件套通用；排量或续航:续航 905/791；保护位置:前电机；电池前；电池后；后电机；储气罐" },
      ] },
      { model: "Z7纯电Max-732续航", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "Z7T", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2026", note: "重要说明:五件套通用；排量或续航:续航 873/776；保护位置:前电机；电池前；电池后；后电机；储气罐" },
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
  {
    name: "小桌板",
    modelCount: 1,
    models: [
      { model: "H5", variants: [
        { material: "小桌板（真皮+金属饰条）", year: "", note: "移动办公/途中用餐/带娃/旅途娱乐/日常置物" },
      ] },
    ],
  },
];

export const SHANGJIE_PROJECT_COUNT = 3;
