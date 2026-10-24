/**
 * 小鹏 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs xpeng --apply`
 * 源：`src/lib/fitment/xpeng.ts`
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
export const xpengProjects: readonly CuratedProject[] = [
  {
    name: "360软包脚垫",
    modelCount: 10,
    models: [
      { model: "G3", variants: [
        { material: "", year: "18款--", note: "前排椅子底没有台阶" },
        { material: "", year: "20款--", note: "前排椅子底下带台阶" },
      ] },
      { model: "G6", variants: [
        { material: "", year: "23款--", note: "适配小鹏G6；支持年款：23款--；规格：4门5座/3片" },
      ] },
      { model: "G7", variants: [
        { material: "", year: "25款--", note: "适配小鹏G7；支持年款：25款--；规格：4门5座/3片" },
      ] },
      { model: "G9", variants: [
        { material: "", year: "22款--", note: "适配小鹏G9；支持年款：22款--；规格：4门5座/3片" },
      ] },
      { model: "GX", variants: [
        { material: "", year: "26款--", note: "适配小鹏GX；支持年款：26款--；规格：5门6座/5片" },
      ] },
      { model: "L03", variants: [
        { material: "", year: "26款", note: "适配小鹏L03；支持年款：26款；规格：4门5座/3片" },
      ] },
      { model: "M03", variants: [
        { material: "", year: "25款", note: "适配小鹏M03；支持年款：25款；规格：4门5座/3片" },
        { material: "", year: "26款", note: "适配小鹏M03；支持年款：26款；规格：4门5座/3片" },
      ] },
      { model: "P5", variants: [
        { material: "", year: "21款--", note: "适配小鹏P5；支持年款：21款--；规格：4门5座/3片" },
      ] },
      { model: "P7", variants: [
        { material: "", year: "20款--23款", note: "适配小鹏P7；支持年款：20款--23款；规格：4门5座/3片" },
        { material: "", year: "24款--", note: "适配小鹏P7；支持年款：24款--；规格：4门5座/3片" },
        { material: "", year: "25款--", note: "适配小鹏P7；支持年款：25款--；规格：4门5座/3片" },
      ] },
      { model: "X9", variants: [
        { material: "", year: "24款-25款", note: "适配小鹏X9；支持年款：24款-25款；规格：5门7座/5片" },
        { material: "", year: "26款--", note: "适配小鹏X9；支持年款：26款--；规格：5门7座/5片" },
        { material: "", year: "24款-25款", note: "适配小鹏X9；支持年款：24款-25款；规格：5门7座/5片" },
      ] },
    ],
  },
  {
    name: "底盘护板",
    modelCount: 9,
    models: [
      { model: "G6", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2023、2024；2025、2026；2026", note: "重要说明:5件套 前后电机与25款通用；5件套 前后电机与24款通用；五件套；排量或续航:续航580/755公里；续航625；增程续航325/430；保护位置:前电机；电池前；电池后；线束；后电机；发动机；油箱" },
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "G7", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2025、2026", note: "重要说明:5件套 与25款G6通用；排量或续航:续航602/702；保护位置:前电机；电池前；电池后；线束；后电机" },
      ] },
      { model: "G9", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2022；2024；2025、2026", note: "重要说明:四件套；四件套 前电机、后电机与22款通用；四件套 前后电机与22款通用；排量或续航:续航570、650、702公里；续航650、702公里；续航625/725/680；保护位置:前电机；电池前；电池后；后电机" },
        { material: "原始资料未注明具体合金类型、锰钢", year: "", note: "" },
      ] },
      { model: "GX", variants: [
        { material: "铝镁合金2.0mm", year: "2026", note: "重要说明:7件套；五件套；排量或续航:增程320；纯电续航665；保护位置:发动机；电池前；电池后；油箱；后电机；空悬泵R；空悬泵L；前电机；储气罐" },
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "L03", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "M03", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2024-2026", note: "重要说明:三件套；排量或续航:续航 515/620/540/640/510；保护位置:前电机；电池前；电池后" },
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "P5", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2021-2022、2023", note: "重要说明:4件套；排量或续航:23款续航460、21-22款550；保护位置:前电机；后电机；电池前后" },
      ] },
      { model: "P7", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2020-2024；2025", note: "重要说明:三件套；四件套；排量或续航:续航562、586、670、625公里；续航 820/750-702；保护位置:前电机；电池前；电池后；后电机" },
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2024、2025、2026", note: "重要说明:四件套；排量或续航:电动续航615、725、685；保护位置:前电机；电池前；电池后；后电机；车型：小鹏P7+" },
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "X9", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2024/2025/2026；2026", note: "重要说明:五件套；四件套；排量或续航:增程452；24款610/640/702 25款 702/740 26款 665/650；保护位置:前电机；电池前；电池后；油箱；后电机" },
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
    ],
  },
  {
    name: "平面尾箱垫",
    modelCount: 8,
    models: [
      { model: "G3", variants: [
        { material: "", year: "18款--", note: "适配小鹏G3；支持年款：18款--；规格：4门5座；G3新能源" },
        { material: "", year: "21款--", note: "适配小鹏G3；支持年款：21款--；规格：4门5座；G3i" },
        { material: "", year: "20款--", note: "适配小鹏G3；支持年款：20款--；规格：4门5座；G3i" },
      ] },
      { model: "G6", variants: [
        { material: "", year: "23款--", note: "适配小鹏G6；支持年款：23款--；规格：4门5座" },
      ] },
      { model: "G7", variants: [
        { material: "", year: "25款--", note: "适配小鹏G7；支持年款：25款--；规格：4门5座" },
      ] },
      { model: "G9", variants: [
        { material: "", year: "23款--", note: "适配小鹏G9；支持年款：23款--；规格：4门5座" },
        { material: "", year: "23款--", note: "适配小鹏G9；支持年款：23款--；规格：4门5座" },
      ] },
      { model: "M03", variants: [
        { material: "", year: "25款--", note: "适配小鹏M03；支持年款：25款--；规格：4门5座" },
      ] },
      { model: "P5", variants: [
        { material: "", year: "21款--", note: "适配小鹏P5；支持年款：21款--；规格：4门5座" },
        { material: "", year: "21款--", note: "适配小鹏P5；支持年款：21款--；规格：4门5座" },
        { material: "", year: "21款--", note: "适配小鹏P5；支持年款：21款--；规格：4门5座" },
      ] },
      { model: "P7", variants: [
        { material: "", year: "20款-23款", note: "适配小鹏P7；支持年款：20款-23款；规格：4门5座" },
        { material: "", year: "24款--", note: "适配小鹏P7；支持年款：24款--；规格：4门5座" },
        { material: "", year: "25款--", note: "适配小鹏P7；支持年款：25款--；规格：4门5座" },
      ] },
      { model: "X9", variants: [
        { material: "", year: "24款--", note: "适配小鹏X9；支持年款：24款--；规格：5门7座" },
      ] },
    ],
  },
  {
    name: "360全包尾箱",
    modelCount: 4,
    models: [
      { model: "G3", variants: [
        { material: "", year: "20款--", note: "适配小鹏G3；支持年款：20款--；规格：4门5座；G3i" },
      ] },
      { model: "G6", variants: [
        { material: "", year: "23款--", note: "适配小鹏G6；支持年款：23款--；规格：4门5座" },
      ] },
      { model: "G9", variants: [
        { material: "", year: "23款--", note: "适配小鹏G9；支持年款：23款--；规格：4门5座" },
      ] },
      { model: "GX", variants: [
        { material: "", year: "26款--", note: "适配小鹏GX；支持年款：26款--；规格：5门6座" },
      ] },
    ],
  },
  {
    name: "包围",
    modelCount: 1,
    models: [
      { model: "X9", variants: [
        { material: "吸塑；ABS", year: "2026", note: "" },
      ] },
    ],
  },
  {
    name: "小桌板",
    modelCount: 1,
    models: [
      { model: "G6", variants: [
        { material: "小桌板（真皮+金属饰条）", year: "", note: "移动办公/途中用餐/带娃/旅途娱乐/日常置物；桌板皮面与原车双色拼接座椅同色系同质感，搭配中控大屏智能座舱；不用时收起不占空间" },
      ] },
    ],
  },
];

export const XPENG_PROJECT_COUNT = 6;
