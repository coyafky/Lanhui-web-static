/**
 * 别克 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs buick --apply`
 * 源：`src/lib/fitment/buick.ts`
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
export const buickProjects: readonly CuratedProject[] = [
  {
    name: "360软包脚垫",
    modelCount: 26,
    models: [
      { model: "昂科拉", variants: [
        { material: "", year: "13款--19款", note: "" },
        { material: "", year: "20款--23款", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "昂科拉GX", variants: [
        { material: "", year: "20款--23款", note: "" },
        { material: "", year: "20款--23款", note: "" },
      ] },
      { model: "昂科雷 低配 原车7座做5座", variants: [
        { material: "", year: "09款--16款", note: "" },
      ] },
      { model: "昂科雷 低配 原车7座做7座", variants: [
        { material: "", year: "09款--16款", note: "" },
      ] },
      { model: "昂科旗", variants: [
        { material: "", year: "20款--23款", note: "" },
        { material: "", year: "20款--23款", note: "" },
        { material: "", year: "22款--23款", note: "" },
        { material: "", year: "22款--23款", note: "" },
        { material: "", year: "20款--23款", note: "" },
        { material: "", year: "20款--23款", note: "" },
        { material: "", year: "22款--23款", note: "" },
        { material: "", year: "22款--23款", note: "" },
      ] },
      { model: "昂科威", variants: [
        { material: "", year: "14款--21款", note: "" },
        { material: "", year: "14款--21款", note: "" },
        { material: "", year: "21款--23款", note: "" },
        { material: "", year: "21款--23款", note: "" },
        { material: "", year: "21款--23款", note: "" },
        { material: "", year: "21款--23款", note: "" },
        { material: "", year: "21款--23款", note: "" },
        { material: "", year: "21款--23款", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "昂科威S", variants: [
        { material: "", year: "20款--23款", note: "" },
      ] },
      { model: "昂扬", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "君威", variants: [
        { material: "", year: "02款-08款", note: "" },
        { material: "", year: "09款--16款", note: "" },
        { material: "", year: "17款--24款", note: "" },
      ] },
      { model: "君越", variants: [
        { material: "", year: "05款--08款", note: "" },
        { material: "", year: "09款--15款", note: "" },
        { material: "", year: "16款--22款", note: "" },
        { material: "", year: "23款-25款", note: "" },
        { material: "", year: "26款--", note: "" },
      ] },
      { model: "凯越", variants: [
        { material: "", year: "04款--16款", note: "" },
        { material: "", year: "18款--20款", note: "" },
      ] },
      { model: "林荫大道", variants: [
        { material: "", year: "07款--12款", note: "" },
      ] },
      { model: "威朗", variants: [
        { material: "", year: "15款--21款", note: "" },
        { material: "", year: "16款--20款", note: "" },
      ] },
      { model: "威朗Pro", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "微蓝6", variants: [
        { material: "", year: "18款--19款", note: "" },
        { material: "", year: "20款--23款", note: "" },
        { material: "", year: "19款--23款", note: "" },
      ] },
      { model: "英朗", variants: [
        { material: "", year: "09款--14款", note: "" },
        { material: "", year: "09款--14款", note: "" },
        { material: "", year: "15款--21款", note: "" },
        { material: "", year: "19款--21款", note: "" },
        { material: "", year: "21款--23款", note: "" },
      ] },
      { model: "阅朗", variants: [
        { material: "", year: "18款-19款", note: "" },
        { material: "", year: "18款--19款", note: "" },
      ] },
      { model: "至境世家", variants: [
        { material: "", year: "26款--", note: "" },
        { material: "", year: "26款--", note: "" },
      ] },
      { model: "至境E7", variants: [
        { material: "", year: "26款--", note: "" },
      ] },
      { model: "至镜L7", variants: [
        { material: "", year: "26款--", note: "" },
      ] },
      { model: "E4 EV", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "E5", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "GL6", variants: [
        { material: "", year: "18款--22款", note: "" },
        { material: "", year: "18款--22款", note: "" },
        { material: "", year: "18款--22款", note: "" },
      ] },
      { model: "GL8", variants: [
        { material: "", year: "04款--10款", note: "" },
        { material: "", year: "04款--10款", note: "" },
        { material: "", year: "11款--17款", note: "" },
        { material: "", year: "11款--17款", note: "" },
        { material: "", year: "11款--18款", note: "" },
        { material: "", year: "11款--18款", note: "" },
        { material: "", year: "11款--18款", note: "" },
        { material: "", year: "11款--18款", note: "" },
        { material: "", year: "11款--18款", note: "" },
        { material: "", year: "11款--18款", note: "" },
        { material: "", year: "17款--21款", note: "" },
        { material: "", year: "17款--21款", note: "" },
        { material: "", year: "17款--21款", note: "" },
        { material: "", year: "17款--21款", note: "" },
        { material: "", year: "22款-24款", note: "" },
        { material: "", year: "22款-24款", note: "" },
        { material: "", year: "25款", note: "" },
        { material: "", year: "25款--", note: "" },
        { material: "", year: "25款", note: "" },
        { material: "", year: "19款--21款", note: "" },
        { material: "", year: "19款--21款", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "20款--21款", note: "" },
        { material: "", year: "20款--21款", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "25款--", note: "" },
        { material: "", year: "25款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "24款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "VELITE （微蓝7）", variants: [
        { material: "", year: "19款--23款", note: "" },
      ] },
      { model: "VELITE（微蓝5）", variants: [
        { material: "", year: "17款--18款", note: "" },
      ] },
    ],
  },
  {
    name: "底盘护板",
    modelCount: 26,
    models: [
      { model: "昂科拉", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2013-2019；2020-2021", note: "保护位置：发动机；排量或续航：1.4T；1.0T/1.3T" },
      ] },
      { model: "昂科拉GX", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2020-2022", note: "保护位置：发动机；排量或续航：1.3T 国六" },
      ] },
      { model: "昂科旗", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2020-2022", note: "保护位置：发动机；排量或续航：2.0T" },
      ] },
      { model: "昂科威", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2015-2022", note: "保护位置：发动机；排量或续航：2.0T；1.5T" },
      ] },
      { model: "昂科威Plus", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021-2024", note: "保护位置：发动机；排量或续航：1.5T/2.0T；注意：版型通用" },
      ] },
      { model: "昂科威PLUS", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "发动机、线路左、线路右" },
      ] },
      { model: "昂科威S", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2020-2024；2021-2024", note: "保护位置：发动机；排量或续航：2.0T；1.5T；注意：版型通用" },
      ] },
      { model: "昂科威S-25T", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "发动机护板、线路左护板、线路右护板、油箱护板" },
      ] },
      { model: "昂扬", variants: [
        { material: "塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2022", note: "保护位置：发动机；排量或续航：1.5T" },
      ] },
      { model: "君威", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2009-2016；2017-2021；2020-2023；2022-2024", note: "保护位置：发动机；线槽；排量或续航：1.5T/2.0T；不分；1.5T；2.0T；1.6L/2.0L/2.0T/2.4L；注意：要拆掉原车螺丝和卡扣；版型通用" },
      ] },
      { model: "君越", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2009-2015；2016-2018；2016-2024；2019-2024/2025", note: "保护位置：发动机；线槽；排量或续航：1.6L/2.0L/2.0T/2.4L；2.0T/1.5T；1.5T/1.8L；2.0T；不分；注意：3.0L不能装,没板；要拆掉原车螺丝和卡扣" },
      ] },
      { model: "君越20", variants: [
        { material: "原始资料未注明具体合金类型、锰钢", year: "", note: "发动机、线路左、线路右、发动机、线路左、线路右" },
      ] },
      { model: "凯越", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2006-2012；2013-2015；2018-2020", note: "保护位置：发动机；排量或续航：1.5L/1.6L/1.8L；1.3L" },
      ] },
      { model: "威朗", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2015-2020", note: "保护位置：发动机；排量或续航：1.5T/1.5L；注意：要拆掉原车螺丝和卡扣" },
      ] },
      { model: "威朗Pro", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2022-2023", note: "保护位置：发动机；排量或续航：1.5T" },
      ] },
      { model: "微蓝6", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2020-2024", note: "保护位置：发动机；排量或续航：1.5L插电混动" },
      ] },
      { model: "英朗", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2010-2014；2015-2017/2021；2015-2021；2018-2019/2021", note: "保护位置：发动机；线槽；排量或续航：1.6L/1.6T/1.8L；1.4T/1.5L；1.0T/1.3T；不分；注意：原车胶板要开孔 17英朗1.4通用18" },
      ] },
      { model: "阅朗", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2018-2019", note: "保护位置：发动机；线槽；排量或续航：1.0T/1.3T；不分；注意：原车胶板要开孔" },
      ] },
      { model: "至境世家", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2026", note: "保护位置：发动机；线束1；线束2；电池；油箱；后电机；空悬泵；排量或续航：插电混动 171、224；注意：七件套" },
        { material: "原始资料未注明具体合金类型", year: "", note: "发动机护板、线束护板、电池护板、油箱护板、油路护板、后电机、后尾箱" },
      ] },
      { model: "至境世家EV601", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "前电机护板、前电池护板、后电池护板、后电机护板、后尾箱护板" },
      ] },
      { model: "至境E7 136续航", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "发动机护板、线束护板、电池护板、油箱护板" },
      ] },
      { model: "至境L7", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "发动机、电池、线路、油箱、后电机、后尾箱" },
      ] },
      { model: "GL6", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019-2021", note: "保护位置：发动机；线槽；排量或续航：1.3T；不分；注意：原车胶板要开孔" },
      ] },
      { model: "GL8", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2011-2015；2020-2025；2024(陆尊)、2025(陆尚)；2026(陆尊)", note: "保护位置：发动机；线束1；线束2；电池；线束3；油箱；排量或续航：2.4L；2.0T；1.5T续航138、142；续航150/202；注意：六件套 发动机新老款通用；六件套 发动机、线束1、线束2、油箱与老款通用 电池、线束3专用；安装配件或支架：套件产品、专用支架" },
      ] },
      { model: "GL8 ES燃油", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "水箱、发动机、线束、油箱、线路" },
      ] },
      { model: "GL8/PHEV", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "水箱、发动机、电池车身、线路、油箱" },
      ] },
    ],
  },
  {
    name: "平面尾箱垫",
    modelCount: 21,
    models: [
      { model: "昂科拉", variants: [
        { material: "78", year: "13款--19款", note: "" },
        { material: "796 上层", year: "20款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "昂科拉GX", variants: [
        { material: "827 上层", year: "20款--", note: "" },
      ] },
      { model: "昂科雷 原车7座做5座", variants: [
        { material: "593", year: "09款--16款", note: "" },
      ] },
      { model: "昂科旗", variants: [
        { material: "", year: "20款--", note: "" },
        { material: "706七", year: "20款--", note: "" },
      ] },
      { model: "昂科威", variants: [
        { material: "530", year: "14款--", note: "" },
        { material: "882", year: "20款--", note: "" },
        { material: "79", year: "14款--", note: "" },
        { material: "", year: "21款--", note: "" },
        { material: "", year: "24款--", note: "" },
        { material: "", year: "21款--", note: "" },
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "昂扬", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "君威", variants: [
        { material: "76", year: "09款--16款", note: "" },
        { material: "501", year: "17款--", note: "" },
      ] },
      { model: "君越", variants: [
        { material: "77", year: "09款--15款", note: "" },
        { material: "374右边有耳朵", year: "16款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "凯越", variants: [
        { material: "", year: "04款--16款", note: "" },
        { material: "", year: "18款--", note: "" },
      ] },
      { model: "威朗", variants: [
        { material: "245三厢", year: "15款--", note: "" },
      ] },
      { model: "威朗Pro", variants: [
        { material: "1191 二排靠背分体", year: "22款--", note: "" },
        { material: "1265 二排靠背连体", year: "22款--", note: "" },
      ] },
      { model: "微蓝6", variants: [
        { material: "985", year: "19款--", note: "" },
      ] },
      { model: "英朗", variants: [
        { material: "667", year: "09款--14款", note: "" },
        { material: "617", year: "09款--14款", note: "" },
        { material: "252", year: "15款--", note: "" },
      ] },
      { model: "阅朗", variants: [
        { material: "458", year: "18款--", note: "" },
      ] },
      { model: "至境E7", variants: [
        { material: "", year: "26款--", note: "" },
      ] },
      { model: "至境L7", variants: [
        { material: "", year: "26款--", note: "" },
      ] },
      { model: "E4 EV", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "E5", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "GL6", variants: [
        { material: "425", year: "18款--", note: "" },
        { material: "425", year: "17款--", note: "" },
      ] },
      { model: "GL8", variants: [
        { material: "47", year: "04款--10款", note: "" },
        { material: "250", year: "11款--17款", note: "" },
        { material: "80右边不带耳朵", year: "11款--18款", note: "" },
        { material: "320右边带耳朵", year: "17款--", note: "" },
        { material: "272上层双针", year: "17款--", note: "" },
        { material: "292下层", year: "17款--", note: "" },
        { material: "786", year: "20款--", note: "" },
        { material: "785", year: "20款--", note: "" },
        { material: "783", year: "20款--", note: "" },
        { material: "1256 （可塞边）", year: "21款--", note: "" },
        { material: "1575 （可塞边）", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "VELITE （微蓝7）", variants: [
        { material: "1273 上层", year: "19款--", note: "" },
      ] },
    ],
  },
  {
    name: "360全包尾箱",
    modelCount: 10,
    models: [
      { model: "昂科拉", variants: [
        { material: "", year: "13款--19款", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "昂科拉GX", variants: [
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "昂科旗", variants: [
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "昂科威", variants: [
        { material: "", year: "14款--", note: "" },
        { material: "", year: "14款--", note: "" },
        { material: "", year: "14款--", note: "" },
        { material: "", year: "14款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "21款--", note: "" },
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "昂扬", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "英朗", variants: [
        { material: "", year: "09款--14款", note: "" },
      ] },
      { model: "E4 EV", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "E5", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "GL6", variants: [
        { material: "", year: "17款--", note: "" },
      ] },
      { model: "VELITE7", variants: [
        { material: "", year: "19款--", note: "" },
      ] },
    ],
  },
  {
    name: "电动踏板",
    modelCount: 8,
    models: [
      { model: "昂科旗", variants: [
        { material: "", year: "2019+", note: "取信号方式：线夹；适配明细：2019+=线夹" },
      ] },
      { model: "昂科威", variants: [
        { material: "", year: "2014-2020", note: "取信号方式：对插；适配明细：2014-2020=对插" },
      ] },
      { model: "昂科威Plus", variants: [
        { material: "", year: "2021-2023；2024+", note: "取信号方式：线夹；适配明细：2021-2023=线夹" },
      ] },
      { model: "昂科威S", variants: [
        { material: "", year: "2021-2023；2024+", note: "取信号方式：线夹；适配明细：2021-2023=线夹" },
      ] },
      { model: "昂扬", variants: [
        { material: "", year: "2022+", note: "取信号方式：线夹；适配明细：2022+=线夹" },
      ] },
      { model: "世纪", variants: [
        { material: "", year: "2023+", note: "取信号方式：线夹；适配明细：2023+=线夹" },
      ] },
      { model: "GL8 25S", variants: [
        { material: "", year: "2017+", note: "取信号方式：对插；适配明细：2017+=对插" },
      ] },
      { model: "GL8 652T", variants: [
        { material: "", year: "2020+", note: "取信号方式：线夹；适配明细：2020+=线夹" },
      ] },
    ],
  },
  {
    name: "吸顶电视",
    modelCount: 1,
    models: [
      { model: "25款别克GL8 陆尊/陆尚", variants: [
        { material: "", year: "2024-2025", note: "1、15.6寸超清IPS屏，分辨率1920*1080P；2、内置4G SIM卡，全车热点共享，免费赠送1个月不限速不限流量；3、语音声控免唤醒语操控；4、独家私模专车专用，15分钟快速安装，不破坏原车结构；5、2+16/2+32/4+64G内存；6、支持手机投屏、U盘视频播放、游戏手柄；7、多色氛围灯可选；8、双电机驱动，顶配带触摸功能" },
      ] },
    ],
  },
  {
    name: "小桌板",
    modelCount: 1,
    models: [
      { model: "至境E7", variants: [
        { material: "", year: "", note: "真皮同色系+金属饰条，带杯架，一键收放不占空间；颜色:黑色皮质" },
      ] },
    ],
  },
];

export const BUICK_PROJECT_COUNT = 7;
