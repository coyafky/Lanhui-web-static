/**
 * 理想 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs li-auto --apply`
 * 源：`src/lib/fitment/li-auto.ts`
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
export const liAutoProjects: readonly CuratedProject[] = [
  {
    name: "底盘护板",
    modelCount: 12,
    models: [
      { model: "i6", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2025", note: "适配状态:支持" },
      ] },
      { model: "i6-720续航", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "前电机、前电池、后电池、后电机" },
      ] },
      { model: "i8", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2025/2026", note: "注意：七件套；排量或续航：续航720；保护位置：前电机；电池前检修口；电池前；电池后；电池后检修口；线束；后电机" },
      ] },
      { model: "i8-720续航", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "前电机、前电池、后电池、后电机" },
      ] },
      { model: "L6", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2024-2025；2025；2026", note: "注意：六件套；25款后电机专用；六件套 发动机、后电机与25款通用！；排量或续航：增程；续航245/300；保护位置：发动机；线束1；线束2(油管)；电池；油箱；后电机；线束2" },
        { material: "原始资料未注明具体合金类型", year: "", note: "发动机、转向机AB、线路、电池、油管线路、油箱、后电机" },
      ] },
      { model: "L6 300续航", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "发动机护板、线束护板、电池护板、油路护板、油箱护板、后电机护板" },
      ] },
      { model: "L7", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2023-2025", note: "注意：7件套；排量或续航：增程；保护位置：发动机；线束1；线束2；线束3；油箱；电机；电池；安装配件或支架：发动机角板" },
        { material: "原始资料未注明具体合金类型", year: "", note: "发动机、线束、电池、线路A、线路B、油箱、后电机" },
      ] },
      { model: "L8", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2023-2025；2026", note: "注意：7件套；六件套 发动机、电池、后电机与26款理想L9通用；排量或续航：1.5T；增程续航430；保护位置：发动机；线束1；线束2；线束3；油箱；电机；电池；后电机；空悬泵L1；空悬泵L2；安装配件或支架：发动机角板" },
        { material: "原始资料未注明具体合金类型", year: "", note: "发动机、线束、电池、线路A、线路B、油箱、后电机" },
      ] },
      { model: "L8-Livis-430续航", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "发动机护板、线束护板、电池护板、油箱护板、后电机护板" },
      ] },
      { model: "L9", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2022-2025；2026", note: "注意：六件套 发动机、电池、后电机与26款理想L8通用；7+2件套；排量或续航：续航350/420；1.5T；保护位置：发动机；电池；油箱；后电机；储气罐左；储气罐右；线束1；线束2；线束3；电机；安装配件或支架：发动机角板" },
        { material: "原始资料未注明具体合金类型", year: "", note: "发动机、线束、电池、线路A、线路B、油箱、后电机" },
      ] },
      { model: "L9livis", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "发动机护板、线束板护板、电池护板、油箱护板、后电机护板、后尾箱护板A、后尾箱护板B" },
      ] },
      { model: "ONE", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2019-2021", note: "注意：五件套；排量或续航：混动；保护位置：发动机；电池；线束；油管；后电机" },
      ] },
    ],
  },
  {
    name: "360软包脚垫",
    modelCount: 8,
    models: [
      { model: "i6", variants: [
        { material: "", year: "25款--", note: "" },
      ] },
      { model: "i8", variants: [
        { material: "", year: "25款--", note: "" },
      ] },
      { model: "L6", variants: [
        { material: "", year: "24款-25款", note: "扶手箱侧面有出风口 前排座椅下有散热孔" },
        { material: "", year: "24款-25款", note: "扶手箱侧面有出风口 前排座椅下有散热孔" },
        { material: "", year: "24款-25款", note: "扶手箱侧面无出风口 前排座椅下有散热孔" },
        { material: "", year: "24款--", note: "扶手箱侧面有出风口 前排座椅下有散热孔" },
        { material: "", year: "24款--", note: "扶手箱侧面无出风口 前排座椅下有散热孔" },
      ] },
      { model: "L7", variants: [
        { material: "", year: "23款", note: "24款不一样 过桥长度37.5里面" },
        { material: "", year: "23款", note: "24款不一样 过桥长度37.5里面" },
        { material: "", year: "24款--", note: "前扶手箱侧面无出风口 过桥长度32.5里面" },
        { material: "", year: "24款--", note: "前扶手箱侧面无出风口 过桥长度32.5里面" },
        { material: "", year: "24款--", note: "前扶手箱侧面有出风口 过桥长度32.5里面" },
      ] },
      { model: "L8", variants: [
        { material: "", year: "22款--", note: "24款内侧后面带散热口的不一样" },
        { material: "", year: "22款--", note: "24款内侧后面带散热口的不一样" },
        { material: "", year: "22款--", note: "24款内侧后面带散热口的不一样" },
        { material: "", year: "22款--", note: "24款内侧后面带散热口的不一样" },
        { material: "", year: "24款--", note: "扶手箱带散热口" },
        { material: "", year: "24款--", note: "扶手箱带散热口" },
        { material: "", year: "26款--", note: "扶手箱带散热口" },
      ] },
      { model: "L9", variants: [
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "26款--", note: "" },
        { material: "", year: "26款--", note: "" },
      ] },
      { model: "MEGA", variants: [
        { material: "", year: "24款", note: "主副架内侧塞边" },
        { material: "", year: "24款", note: "主副架内侧不塞边" },
        { material: "", year: "24款", note: "主副架内侧塞边" },
        { material: "", year: "24款", note: "主副架内侧不塞边" },
        { material: "", year: "24款--", note: "主副架内侧塞边" },
        { material: "", year: "24款--", note: "主副架内侧塞边" },
      ] },
      { model: "ONE", variants: [
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
      ] },
    ],
  },
  {
    name: "平面尾箱垫",
    modelCount: 7,
    models: [
      { model: "i6", variants: [
        { material: "", year: "25款--", note: "" },
      ] },
      { model: "L6", variants: [
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "L7", variants: [
        { material: "", year: "23款", note: "右侧带网兜" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "L8", variants: [
        { material: "", year: "26款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "L9", variants: [
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "MEGA", variants: [
        { material: "1938下层", year: "24款--", note: "" },
      ] },
      { model: "ONE", variants: [
        { material: "795", year: "20款", note: "21款不同" },
        { material: "", year: "20款", note: "21款不同" },
        { material: "", year: "21款--", note: "" },
        { material: "", year: "21款--", note: "" },
      ] },
    ],
  },
  {
    name: "包围",
    modelCount: 5,
    models: [
      { model: "i6", variants: [
        { material: "吸塑；ABS", year: "2025", note: "" },
      ] },
      { model: "L7", variants: [
        { material: "", year: "", note: "" },
      ] },
      { model: "L8", variants: [
        { material: "", year: "", note: "" },
      ] },
      { model: "L9", variants: [
        { material: "", year: "", note: "" },
      ] },
      { model: "MEGA", variants: [
        { material: "吸塑；ABS", year: "", note: "" },
      ] },
    ],
  },
  {
    name: "电动踏板",
    modelCount: 5,
    models: [
      { model: "L6", variants: [
        { material: "", year: "2024+", note: "取信号方式：对插；适配明细：2024+=对插" },
      ] },
      { model: "L7", variants: [
        { material: "", year: "2023+", note: "取信号方式：原厂对插；适配明细：2023+=原厂对插" },
        { material: "", year: "", note: "" },
      ] },
      { model: "L8", variants: [
        { material: "", year: "2022+", note: "取信号方式：原厂对插；适配明细：2022+=原厂对插" },
        { material: "", year: "", note: "" },
      ] },
      { model: "L9", variants: [
        { material: "", year: "2022-2025；2026", note: "取信号方式：原厂对插；对插；适配明细：2022-2025=原厂对插" },
        { material: "", year: "", note: "" },
      ] },
      { model: "ONE", variants: [
        { material: "", year: "2020-2021.10；2021.11+", note: "取信号方式：对插；线夹；适配明细：2020-2021.10=对插" },
      ] },
    ],
  },
  {
    name: "吸顶电视",
    modelCount: 5,
    models: [
      { model: "25款理想 i6", variants: [
        { material: "吸顶电视", year: "2025", note: "17.3 英寸屏，支持触控、Type-C 投屏与语音控制；安装方式与功能以实车适配和门店核验为准。" },
      ] },
      { model: "焕新版L6", variants: [
        { material: "吸顶电视", year: "", note: "17.3 英寸屏，支持触控、Type-C 投屏与语音控制；安装方式与功能以实车适配和门店核验为准。" },
      ] },
      { model: "焕新版L7/L8", variants: [
        { material: "吸顶电视", year: "", note: "15.6 英寸屏，支持后排控制副驾屏开关、三屏互联与语音控制；功能以实车适配和门店核验为准。" },
      ] },
      { model: "L6", variants: [
        { material: "吸顶电视", year: "", note: "原车系统原车流量，自带隐藏式智能控制系统，17.3寸京东方超亮色域，1秒开机，双电动驱动，3屏互联，一车一模专用，熄车自动锁屏，语音单独调节屏幕亮暗度" },
      ] },
      { model: "L7/L8", variants: [
        { material: "吸顶电视", year: "", note: "原车系统原车流量，自带隐藏式智能控制系统，15.6寸京东方超亮色域，1秒开机，双电动驱动，3屏互联，一车一模专用，熄车自动锁屏，语音单独调节屏幕亮暗度" },
      ] },
    ],
  },
  {
    name: "小桌板",
    modelCount: 5,
    models: [
      { model: "i6", variants: [
        { material: "", year: "", note: "" },
      ] },
      { model: "L6", variants: [
        { material: "", year: "", note: "适配状态:支持" },
        { material: "小桌板（真皮+金属饰条；电动款可选）", year: "", note: "移动办公/途中用餐/带娃/旅途娱乐/日常置物；桌板皮面与原车米白/橙真皮豪华内饰同色系同质感；电动款一键电动展开/收起；不用时收起不占空间" },
      ] },
      { model: "L7", variants: [
        { material: "", year: "", note: "适配状态:支持" },
        { material: "小桌板（真皮+金属饰条；电动桌板款可选）", year: "", note: "移动办公/途中用餐/带娃/旅途娱乐/日常置物；桌板皮面与原车浅米/浅棕真皮豪华内饰同色系同质感；电动桌板款一键电动展开/收起；不用时收起不占空间" },
      ] },
      { model: "L8", variants: [
        { material: "", year: "", note: "适配状态:支持" },
        { material: "小桌板（真皮+金属饰条；电动款式可选）", year: "", note: "移动办公/途中用餐/带娃/旅途娱乐/日常置物；桌板皮面与原车米白真皮豪华内饰同色系同质感，配黑色饰板；电动款式一键电动展开/收起；不用时收起不占空间" },
      ] },
      { model: "L9", variants: [
        { material: "", year: "", note: "适配状态:支持" },
        { material: "小桌板（真皮+金属饰条；电动款可选）", year: "", note: "移动办公/途中用餐/带娃/旅途娱乐/日常置物；桌板皮面与原车米白/棕红真皮豪华内饰同色系同质感；电动款一键电动展开/收起；不用时收起不占空间" },
      ] },
    ],
  },
  {
    name: "360全包尾箱",
    modelCount: 4,
    models: [
      { model: "L7", variants: [
        { material: "", year: "23款--", note: "右侧带网兜" },
      ] },
      { model: "L8", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "L9", variants: [
        { material: "", year: "22款-25款", note: "" },
        { material: "", year: "26款--", note: "" },
      ] },
      { model: "ONE", variants: [
        { material: "", year: "20款--", note: "左侧不带出风口,21款靠背带胶壳不同。" },
        { material: "", year: "21款--", note: "左侧带出风口" },
      ] },
    ],
  },
  {
    name: "地板",
    modelCount: 4,
    models: [
      { model: "i8", variants: [
        { material: "", year: "2025", note: "" },
      ] },
      { model: "L8", variants: [
        { material: "", year: "2022-2024", note: "" },
      ] },
      { model: "L9", variants: [
        { material: "", year: "2022-2024", note: "" },
      ] },
      { model: "MEGA", variants: [
        { material: "", year: "2024", note: "" },
      ] },
    ],
  },
  {
    name: "后排电视",
    modelCount: 4,
    models: [
      { model: "i6", variants: [
        { material: "", year: "2025", note: "" },
      ] },
      { model: "L6", variants: [
        { material: "", year: "2025", note: "" },
      ] },
      { model: "L7", variants: [
        { material: "", year: "2025", note: "" },
      ] },
      { model: "L8", variants: [
        { material: "", year: "2025", note: "" },
      ] },
    ],
  },
  {
    name: "轮毂",
    modelCount: 4,
    models: [
      { model: "通用适配", variants: [
        { material: "", year: "", note: "ET40 PCD5*120 CB62.55" },
        { material: "", year: "", note: "ET40 PCD5*120 CB62.55" },
        { material: "", year: "", note: "ET40 PCD5*120 CB62.55" },
        { material: "", year: "", note: "ET40 PCD5*120 CB62.55" },
        { material: "", year: "", note: "ET40 PCD5*120 CB62.55" },
        { material: "", year: "", note: "ET40 PCD5*120 CB62.55" },
        { material: "", year: "", note: "ET40 PCD5*120 CB62.55" },
        { material: "", year: "", note: "ET45 PCD5*120 CB62.55" },
      ] },
      { model: "TJ10002", variants: [
        { material: "锻造轮毂", year: "", note: "ET40 PCD5*120 CB62.55" },
      ] },
      { model: "TJ10004", variants: [
        { material: "锻造轮毂", year: "", note: "ET40 PCD5*120 CB62.55" },
      ] },
      { model: "TJ10005", variants: [
        { material: "锻造轮毂", year: "", note: "ET45 PCD5*120 CB62.55" },
      ] },
    ],
  },
  {
    name: "尾翼",
    modelCount: 3,
    models: [
      { model: "L7", variants: [
        { material: "", year: "", note: "" },
      ] },
      { model: "L8", variants: [
        { material: "", year: "", note: "" },
      ] },
      { model: "L9", variants: [
        { material: "", year: "", note: "" },
      ] },
    ],
  },
];

export const LI_AUTO_PROJECT_COUNT = 12;
