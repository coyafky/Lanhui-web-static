/**
 * 广汽传祺 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs gac --apply`
 * 源：`src/lib/fitment/gac.ts`
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
export const gacProjects: readonly CuratedProject[] = [
  {
    name: "360软包脚垫",
    modelCount: 44,
    models: [
      { model: "埃安昊铂 GT", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "埃安昊铂 HL 增程", variants: [
        { material: "", year: "25款--", note: "" },
      ] },
      { model: "埃安昊铂 HT", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "埃安昊铂 SSR", variants: [
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "向往 S7", variants: [
        { material: "", year: "25款--", note: "" },
      ] },
      { model: "向往 S9", variants: [
        { material: "", year: "25款--", note: "" },
      ] },
      { model: "新能源世锐PHEV", variants: [
        { material: "", year: "19款", note: "" },
      ] },
      { model: "影豹", variants: [
        { material: "", year: "21款--23款", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "影酷", variants: [
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "Aion i60", variants: [
        { material: "", year: "26款--", note: "" },
      ] },
      { model: "Aion LX （埃安LX）", variants: [
        { material: "", year: "19款--22款", note: "" },
      ] },
      { model: "Aion LX （埃安LX）PLUS", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "Aion N60", variants: [
        { material: "", year: "26款--", note: "" },
      ] },
      { model: "Aion RT", variants: [
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "Aion S （埃安S）", variants: [
        { material: "", year: "19款--23款", note: "" },
      ] },
      { model: "Aion S PLUS（埃安S PLUS）/S MAX", variants: [
        { material: "", year: "21款--24款", note: "" },
      ] },
      { model: "Aion UT", variants: [
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "Aion V （埃安V）", variants: [
        { material: "", year: "20款--23款", note: "" },
      ] },
      { model: "Aion V （埃安V） PLUS", variants: [
        { material: "", year: "22款--24款", note: "" },
      ] },
      { model: "Aion V （埃安V）霸王龙", variants: [
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "Aion V（埃安V） PLUS 7座做5座", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "Aion V（埃安V） PLUS 7座做7座", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "Aion Y（埃安Y）/埃安Y PLUS", variants: [
        { material: "", year: "21款--23款", note: "" },
      ] },
      { model: "E8", variants: [
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "24款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "E9", variants: [
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "ES9", variants: [
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "GA3S", variants: [
        { material: "", year: "14款--16款", note: "" },
      ] },
      { model: "GA4", variants: [
        { material: "", year: "18款", note: "" },
      ] },
      { model: "GA4 Plus", variants: [
        { material: "", year: "21款", note: "" },
      ] },
      { model: "GA5", variants: [
        { material: "", year: "11款--13款", note: "" },
      ] },
      { model: "GA6", variants: [
        { material: "", year: "14款--18款", note: "" },
        { material: "", year: "19款--22款", note: "" },
      ] },
      { model: "GA8", variants: [
        { material: "", year: "16款--20款", note: "" },
      ] },
      { model: "GE3", variants: [
        { material: "", year: "17款--22款", note: "" },
      ] },
      { model: "GS3", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "GS3 POWER", variants: [
        { material: "", year: "21款--22款", note: "" },
      ] },
      { model: "GS4", variants: [
        { material: "", year: "15款--19款", note: "" },
        { material: "", year: "15款--19款", note: "" },
        { material: "", year: "20款--25款", note: "" },
        { material: "", year: "26款--", note: "" },
        { material: "", year: "17款--19款", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "GS4 Coupe", variants: [
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "GS4 PLUS", variants: [
        { material: "", year: "21款--23款", note: "" },
      ] },
      { model: "GS5", variants: [
        { material: "", year: "12款--18款", note: "" },
        { material: "", year: "19款--21款", note: "" },
      ] },
      { model: "GS7", variants: [
        { material: "", year: "17款--19款", note: "" },
      ] },
      { model: "GS8", variants: [
        { material: "", year: "17款--21款", note: "" },
        { material: "", year: "17款--21款", note: "" },
        { material: "", year: "17款--21款", note: "" },
        { material: "", year: "17款--21款", note: "" },
        { material: "", year: "22款--24款", note: "" },
        { material: "", year: "22款--24款", note: "" },
        { material: "", year: "22款--24款", note: "" },
        { material: "", year: "22款--24款", note: "" },
        { material: "", year: "22款--24款", note: "" },
        { material: "", year: "22款--24款", note: "" },
        { material: "", year: "22款--24款", note: "" },
        { material: "", year: "22款--24款", note: "" },
      ] },
      { model: "GS8S", variants: [
        { material: "", year: "19款--21款", note: "" },
      ] },
      { model: "M6", variants: [
        { material: "", year: "20款--23款", note: "" },
        { material: "", year: "21款--23款", note: "" },
        { material: "", year: "19款--20款", note: "" },
        { material: "", year: "19款", note: "" },
        { material: "", year: "25款--", note: "" },
      ] },
      { model: "M8", variants: [
        { material: "", year: "21款--", note: "" },
        { material: "", year: "18款--23款", note: "" },
        { material: "", year: "18款--23款", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
    ],
  },
  {
    name: "平面尾箱垫",
    modelCount: 39,
    models: [
      { model: "埃安昊铂 GT", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "埃安昊铂 HL", variants: [
        { material: "2349分体", year: "25款--", note: "" },
        { material: "2350连体", year: "25款--", note: "" },
      ] },
      { model: "埃安昊铂 HT", variants: [
        { material: "1876上层", year: "23款--", note: "" },
      ] },
      { model: "埃安V", variants: [
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "埃安V PLUS 7座", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "埃安V PLUS 7座做5座 22款--", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "昊铂SSR", variants: [
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "向往 S7", variants: [
        { material: "", year: "25款--", note: "" },
      ] },
      { model: "向往 S9", variants: [
        { material: "2352分体", year: "25款--", note: "" },
        { material: "2353连体", year: "25款--", note: "" },
      ] },
      { model: "新能源世锐PHEV", variants: [
        { material: "633", year: "19款--", note: "" },
      ] },
      { model: "影豹", variants: [
        { material: "", year: "21款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "影酷", variants: [
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "Aion 埃安 LX PLUS", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "Aion 埃安 V PLUS", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "Aion 埃安 Y PLUS", variants: [
        { material: "1496 上层", year: "23款--", note: "" },
        { material: "1955小层", year: "23款--", note: "" },
      ] },
      { model: "Aion i60", variants: [
        { material: "2336 上层", year: "25款--", note: "" },
        { material: "2337 下层", year: "25款--", note: "" },
      ] },
      { model: "Aion LX （埃安LX）", variants: [
        { material: "929", year: "19款--", note: "" },
      ] },
      { model: "Aion N60", variants: [
        { material: "2386 上层", year: "26款--", note: "" },
      ] },
      { model: "Aion RT", variants: [
        { material: "2192 尾箱电动尾门", year: "25款--", note: "" },
      ] },
      { model: "Aion S/S PLUS", variants: [
        { material: "615", year: "19款--", note: "" },
      ] },
      { model: "Aion UT", variants: [
        { material: "2207 上层", year: "25款--", note: "" },
      ] },
      { model: "Aion V （埃安V）霸王龙", variants: [
        { material: "2111上层", year: "24款--", note: "" },
      ] },
      { model: "Aion Y（埃安Y）", variants: [
        { material: "1100 上层", year: "21款--", note: "" },
        { material: "1677下层", year: "21款--", note: "" },
      ] },
      { model: "E8", variants: [
        { material: "1849上层", year: "23款--", note: "" },
      ] },
      { model: "ES9", variants: [
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "GA4", variants: [
        { material: "", year: "18款--", note: "" },
      ] },
      { model: "GA6", variants: [
        { material: "423", year: "14款--18款", note: "" },
        { material: "896", year: "19款--", note: "" },
      ] },
      { model: "GA8", variants: [
        { material: "737", year: "16款--", note: "" },
      ] },
      { model: "GE3", variants: [
        { material: "490", year: "17款--", note: "" },
      ] },
      { model: "GS3", variants: [
        { material: "429", year: "17款--22款", note: "" },
        { material: "1583 上层", year: "23款--", note: "" },
      ] },
      { model: "GS4", variants: [
        { material: "222", year: "15款--19款", note: "" },
        { material: "824", year: "20款-25款", note: "" },
        { material: "2407 上层", year: "26款--", note: "" },
        { material: "2408 下层", year: "26款--", note: "" },
        { material: "313", year: "17款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "GS4 Coupe", variants: [
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "GS4 PLUS", variants: [
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "GS5", variants: [
        { material: "201", year: "12款--17款", note: "" },
        { material: "587", year: "19款--", note: "" },
      ] },
      { model: "GS7", variants: [
        { material: "547", year: "17款--", note: "" },
      ] },
      { model: "GS8", variants: [
        { material: "1322 分体", year: "22款--", note: "" },
        { material: "283", year: "16款--21款", note: "" },
        { material: "472", year: "16款--21款", note: "" },
        { material: "1430 分体 三排靠背带拉手", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "GS8S", variants: [
        { material: "1307 左右没有耳朵", year: "19款-23款", note: "" },
        { material: "", year: "24款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "M6", variants: [
        { material: "901 上层", year: "19款", note: "" },
      ] },
      { model: "M8", variants: [
        { material: "535", year: "18款--", note: "" },
        { material: "1540三排靠背", year: "23款--", note: "" },
        { material: "1541三排靠背", year: "23款--", note: "" },
      ] },
    ],
  },
  {
    name: "底盘护板",
    modelCount: 36,
    models: [
      { model: "向往 M8宗师-136续航", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "向往E8-281续航", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "向往M8", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2025、2026；2026", note: "注意：六件套 一、发动机、方向机与24款传祺ES9通用版型通用。二、23-24传祺E8/E9电池发完库存后与26向往M8通用.；四件套 发动机、方向机与24款传祺ES9通用版型通用；排量或续航：续航 136、106；PHEV续航 202/248；保护位置：发动机；方向机；电池；线束1；线束2；油箱" },
      ] },
      { model: "向往M8插混-235续航-PHEVL", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "向往M8插混248续航", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "向往S7", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2025", note: "注意：一、两驱无后电机五件套 二、四驱有后电机六件套；排量或续航：续航205/180；保护位置：发动机；线束1；线束2；电池；油箱；后电机" },
      ] },
      { model: "向往S7增程", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "线路前：205续航" },
      ] },
      { model: "向往S9", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2025", note: "注意：七件套 发动机、方向机与24款传祺ES9通用版型通用；排量或续航：续航252/202；保护位置：发动机；方向机；线束1；线束2；电池；油箱；后电机" },
      ] },
      { model: "影豹", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021-2024；2023、2024", note: "注意：两件套；排量或续航：1.5T；2.0L；保护位置：发动机；线槽；安装配件或支架：异形盖板" },
      ] },
      { model: "影酷", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2022", note: "注意：版型通用；排量或续航：2.0T/2.0L/1.5T；保护位置：发动机" },
        { material: "原始资料未注明具体合金类型、锰钢", year: "", note: "" },
      ] },
      { model: "影速GS3", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "E8", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2024；2026", note: "注意：5件套 (发动机与荣耀系列E8通用)、(电池通用传祺E9/ES9)；5件套 发动机与新能源E8通用；五件套；排量或续航：插电混动 2.0L续航150；油电混动 荣耀系列；PHEV续航281；保护位置：发动机；线束1；线束2；油箱；电池；安装配件或支架：GL8-1号碳钢支架-2颗、银河L6油箱碳钢支架-4颗" },
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "E9", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2023-2024", note: "注意：五件套 一、发动机、转向机、电池通用传祺E9/ES9。二、线束1、线束2、电池与26款向往8通用；保护位置：发动机；方向机；线束1；线束2；电池" },
        { material: "原始资料未注明具体合金类型、锰钢", year: "", note: "" },
      ] },
      { model: "ES9", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2024", note: "注意：5件套 (发动机、转向机/电池通用传祺E9/ES9)；保护位置：发动机；方向机；线束1；线束2；电池" },
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "GA3", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2013-2014", note: "排量或续航：1.6L；保护位置：发动机" },
      ] },
      { model: "GA3S", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2014-2016", note: "排量或续航：1.3T/1.6L；保护位置：发动机" },
      ] },
      { model: "GA3S新能源", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2017-2019", note: "排量或续航：1.5L；保护位置：发动机" },
      ] },
      { model: "GA4", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2018-2019", note: "排量或续航：1.3T/1.5L；不分；保护位置：发动机；线槽" },
      ] },
      { model: "GA4 Plus", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021", note: "排量或续航：1.5T；保护位置：发动机" },
      ] },
      { model: "GA6", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2015-2018；2019、2022", note: "排量或续航：1.5T；1.6T/1.5T/1.8T；保护位置：发动机" },
      ] },
      { model: "GE3", variants: [
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2017-2019", note: "排量或续航：电动；保护位置：发动机" },
      ] },
      { model: "GS3", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2017-2018；2019-2020；2021-2022", note: "排量或续航：1.3T/1.5L；1.5T；保护位置：发动机" },
      ] },
      { model: "GS3 POWER", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021-2022", note: "排量或续航：1.5T；保护位置：发动机" },
      ] },
      { model: "GS3影速", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2023-2026", note: "排量或续航：1.5T；保护位置：发动机" },
      ] },
      { model: "GS4", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2015-2017；2018-2019；2020-2024", note: "排量或续航：1.3T/1.5T/1.5L；1.3T/1.5T；1.5T；保护位置：发动机" },
      ] },
      { model: "GS4 Coupe", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2020", note: "排量或续航：1.5T；保护位置：发动机" },
      ] },
      { model: "GS4 PLUS", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021-2023", note: "排量或续航：1.5T/2.0T；保护位置：发动机" },
      ] },
      { model: "GS5", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2012-2014；2019-2021", note: "排量或续航：1.8T；2.0L；1.5T；保护位置：发动机" },
      ] },
      { model: "GS7", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2017", note: "排量或续航：1.8T/2.0T；保护位置：发动机" },
      ] },
      { model: "GS8", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2017-2021；2022、2024", note: "注意：燃油、混动通用；排量或续航：2.0T；保护位置：发动机；方向机" },
      ] },
      { model: "GS8S", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2017-2021", note: "排量或续航：2.0T；保护位置：发动机" },
      ] },
      { model: "M6", variants: [
        { material: "塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019-2023", note: "排量或续航：1.5T；保护位置：发动机" },
      ] },
      { model: "M6 Pro", variants: [
        { material: "塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019-2023", note: "排量或续航：1.5T；保护位置：发动机" },
      ] },
      { model: "M8", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2018-2021；2023-2024；2026", note: "注意：通用；燃油、混动通用；五件套 发动机、线束与23E9/24ES9通用；排量或续航：2.0T；混动HEV；保护位置：发动机；方向机；线束；电池；油箱" },
      ] },
      { model: "M8大师", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "M8宗师", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
    ],
  },
  {
    name: "360全包尾箱",
    modelCount: 19,
    models: [
      { model: "埃安昊铂 HT", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "传奇祺智 PHEV", variants: [
        { material: "", year: "18款--", note: "" },
      ] },
      { model: "新能源世锐PHEV", variants: [
        { material: "", year: "19款--", note: "" },
      ] },
      { model: "影酷", variants: [
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "Aion LX （埃安LX PLUS）", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "Aion LX （埃安LX）", variants: [
        { material: "", year: "19款--", note: "" },
      ] },
      { model: "Aion V （埃安V PLUS）", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "Aion V （埃安V）", variants: [
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "Aion V（埃安V） PLUS 7座", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "Aion Y（埃安Y）", variants: [
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "ES9", variants: [
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "GS3", variants: [
        { material: "", year: "20款--22款", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "GS4", variants: [
        { material: "", year: "15款--19款", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "GS4 Coupe", variants: [
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "GS4 PLUS", variants: [
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "GS5", variants: [
        { material: "", year: "19款--", note: "" },
      ] },
      { model: "GS8", variants: [
        { material: "", year: "17款--21款", note: "" },
        { material: "", year: "17款--21款", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "GS8S", variants: [
        { material: "", year: "19款--", note: "" },
      ] },
      { model: "M6", variants: [
        { material: "", year: "19款--", note: "" },
      ] },
    ],
  },
  {
    name: "电动踏板",
    modelCount: 12,
    models: [
      { model: "向往S7", variants: [
        { material: "", year: "2025", note: "取信号方式：线夹；适配明细：2025=线夹" },
      ] },
      { model: "影酷", variants: [
        { material: "", year: "2022", note: "取信号方式：对插；适配明细：2022=对插" },
      ] },
      { model: "ES9", variants: [
        { material: "", year: "2023+", note: "取信号方式：对插；适配明细：2023+=对插" },
      ] },
      { model: "GM8", variants: [
        { material: "", year: "2018-2020", note: "取信号方式：对插；适配明细：2018-2020=对插 ； 2018-2020=对插" },
      ] },
      { model: "GS4", variants: [
        { material: "", year: "2016-2019", note: "取信号方式：对插；适配明细：2016-2019=对插" },
      ] },
      { model: "GS4 MAX", variants: [
        { material: "", year: "2024+", note: "取信号方式：对插；适配明细：2024+=对插" },
      ] },
      { model: "GS4 PLUS", variants: [
        { material: "", year: "2021+", note: "取信号方式：对插；适配明细：2021+=对插" },
      ] },
      { model: "GS5", variants: [
        { material: "", year: "2019+", note: "取信号方式：对插；适配明细：2019+=对插" },
      ] },
      { model: "GS7", variants: [
        { material: "", year: "2017+", note: "取信号方式：对插；适配明细：2017+=对插" },
      ] },
      { model: "GS8", variants: [
        { material: "", year: "2016-2021；2022+", note: "取信号方式：对插；线夹；适配明细：2016-2021=对插 ； 2022+=线夹 ； 2022+=线夹" },
      ] },
      { model: "GS8S", variants: [
        { material: "", year: "2020+", note: "取信号方式：对插；适配明细：2020+=对插" },
      ] },
      { model: "M8", variants: [
        { material: "", year: "2021+", note: "取信号方式：对插；适配明细：2021+=对插 ； 2021+=对插" },
      ] },
    ],
  },
  {
    name: "小桌板",
    modelCount: 3,
    models: [
      { model: "（E8/M8宗师/M8大师/E9）", variants: [
        { material: "小桌板（真皮+金属饰条）", year: "", note: "移动办公/途中用餐/带娃/旅途娱乐/日常置物/商务接待；桌板皮面与原车棕黄拼接真皮商务内饰同色系同质感，配金属饰条；不用时收起不占空间" },
      ] },
      { model: "向往S7", variants: [
        { material: "小桌板（真皮+金属饰条）", year: "", note: "移动办公/途中用餐/带娃/旅途娱乐/日常置物" },
      ] },
      { model: "M6", variants: [
        { material: "小桌板（真皮+金属饰条）", year: "", note: "移动办公/途中用餐/带娃/旅途娱乐/日常置物" },
      ] },
    ],
  },
  {
    name: "吸顶电视",
    modelCount: 2,
    models: [
      { model: "E8", variants: [
        { material: "吸顶电视", year: "", note: "15.6 英寸 IPS 屏，支持 4G 网络、手机投屏、U 盘视频和氛围灯；安装方式与功能以实车适配和门店核验为准。" },
      ] },
      { model: "M8宗师/24款新大师/E9", variants: [
        { material: "吸顶电视", year: "", note: "15.6 英寸 IPS 屏，支持 4G 网络、手机投屏、U 盘视频和氛围灯；安装方式与功能以实车适配和门店核验为准。" },
      ] },
    ],
  },
];

export const GAC_PROJECT_COUNT = 7;
