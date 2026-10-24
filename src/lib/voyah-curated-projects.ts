/**
 * 岚图 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs voyah --apply`
 * 源：`src/lib/fitment/voyah.ts`
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
export const voyahProjects: readonly CuratedProject[] = [
  {
    name: "360软包脚垫",
    modelCount: 5,
    models: [
      { model: "梦想家", variants: [
        { material: "皮革/丝圈", year: "22款-23款；25款--", note: "门座:5门7座；片套:2片；门座:5门7座；片套:3片；二排滑道可盖可不盖；门座:5门7座；片套:4片；二排滑道可盖可不盖" },
      ] },
      { model: "泰山", variants: [
        { material: "皮革/丝圈", year: "25款--", note: "门座:5门6座；片套:4片；二排安全带在座椅上" },
      ] },
      { model: "知音", variants: [
        { material: "皮革/丝圈", year: "24款；25款", note: "门座:4门5座；片套:3片；门座:4门5座；片套:3片；中控扶手是触屏膜，副驾带腿托" },
      ] },
      { model: "追光", variants: [
        { material: "皮革/丝圈", year: "23款--", note: "" },
      ] },
      { model: "FREE", variants: [
        { material: "", year: "21款--", note: "" },
      ] },
    ],
  },
  {
    name: "底盘护板",
    modelCount: 5,
    models: [
      { model: "梦想家", variants: [
        { material: "原始资料未注明具体合金类型", year: "2026", note: "保护位置：发动机、线束、电池、油箱、后电机；5件套；续航：300km；保护位置：发动机、线束、电池、油箱、后电机" },
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2025；2025、2026；2026、2027", note: "注意：五件套 一、25/26款后电机通用。 二、27款冠军版护板与26款350续航护板通用。；四件套；排量或续航：混动PHEV续航235；26款增程续航350 27款冠军版续航235；纯电续航650、700；保护位置：发动机；线束；电池；油箱；后电机；电池前；电池后；前电机；安装配件或支架：电机专用支架 26款有5系2.0MM产品" },
      ] },
      { model: "泰山", variants: [
        { material: "原始资料未注明具体合金类型", year: "2026", note: "保护位置：发动机、线束、电池、油箱、后电机；5件套；保护位置：发动机、线束、电池、油箱、后电机；5件套；纯电；续航：603km；电池：98.1度电；保护位置：前电机护板、线束护板、前电池护板、后电池护板、后电机护板" },
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2026", note: "注意：六件套 一、前电机、线束、电池前、油箱专用。二、电池后与25岚图free+通用。三、26梦想家后电机发完库存后与泰山后电机通用。；排量或续航：续航350；保护位置：前电机；线束；电池前；电池后；油箱；后电机" },
      ] },
      { model: "知音", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "保护位置：前电机、前电池、后电池、后电机" },
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2025", note: "注意：五件套；排量或续航：纯电 续航600/650；保护位置：前电机；电池前；电池后；后电机；后储物盒" },
      ] },
      { model: "追光", variants: [
        { material: "原始资料未注明具体合金类型", year: "2026", note: "5件套；插电混动；续航：410km；保护位置：发动机护板、线束护板、电池护板、油箱保护板、后电机护板；5件套；续航：740km；保护位置：前电机护板、线束护板、前电池护板、后电池护板、后电机护板" },
      ] },
      { model: "FREE", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "5件套；混动；续航：196km；保护位置：发动机、线束、电池、油箱、后电机" },
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2025", note: "注意：六件套；排量或续航：两驱续航225/318 四驱续航190/259；保护位置：发动机；线束；电池前；电池后；油箱；后电机" },
      ] },
    ],
  },
  {
    name: "平面尾箱垫",
    modelCount: 5,
    models: [
      { model: "梦想家", variants: [
        { material: "皮革", year: "22款--；25款--", note: "门座:5门7座" },
      ] },
      { model: "泰山", variants: [
        { material: "皮革", year: "26款--", note: "门座:5门6座" },
      ] },
      { model: "知音", variants: [
        { material: "皮革", year: "24款；25款", note: "门座:4门5座" },
      ] },
      { model: "追光", variants: [
        { material: "皮革", year: "23款--", note: "" },
      ] },
      { model: "FREE", variants: [
        { material: "", year: "21款--；25款--", note: "" },
      ] },
    ],
  },
  {
    name: "360全包尾箱",
    modelCount: 2,
    models: [
      { model: "梦想家", variants: [
        { material: "皮革", year: "22款--", note: "门座:5门7座；尾箱不带侧包" },
      ] },
      { model: "FREE", variants: [
        { material: "", year: "21款--", note: "" },
      ] },
    ],
  },
  {
    name: "电动踏板",
    modelCount: 1,
    models: [
      { model: "泰山", variants: [
        { material: "", year: "2026", note: "取信号方式：原厂对插；适配明细：2026=原厂对插" },
      ] },
    ],
  },
  {
    name: "小桌板",
    modelCount: 1,
    models: [
      { model: "知音", variants: [
        { material: "小桌板（真皮+金属饰条）", year: "", note: "移动办公/途中用餐/带娃/旅途娱乐/日常置物" },
      ] },
    ],
  },
];

export const VOYAH_PROJECT_COUNT = 6;
