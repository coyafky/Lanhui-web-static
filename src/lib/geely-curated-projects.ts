/**
 * 吉利 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs geely --apply`
 * 源：`src/lib/fitment/geely.ts`
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
export const geelyProjects: readonly CuratedProject[] = [
  {
    name: "底盘护板",
    modelCount: 44,
    models: [
      { model: "缤瑞", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2018-2021", note: "排量或续航：1.0T、1.4T；保护位置：发动机；安装配件或支架：异形盖板" },
      ] },
      { model: "缤瑞COOL", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2022、2024", note: "排量或续航：1.5T；保护位置：发动机；安装配件或支架：异形盖板" },
      ] },
      { model: "缤越", variants: [
        { material: "塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019；2019-2020", note: "注意：大板型通用、安装时、要拆原车挡泥板。；小板型通用、安装时、免拆原车挡泥板；排量或续航：1.0/1.5；1.5T；保护位置：发动机；安装配件或支架：有角板" },
      ] },
      { model: "缤越COOL", variants: [
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2020-2024", note: "注意：大板型通用、安装时、要拆原车挡泥板。；小板型通用、安装时、免拆原车挡泥板；排量或续航：1.4T/1.5T；保护位置：发动机；安装配件或支架：有角板" },
      ] },
      { model: "缤越L", variants: [
        { material: "塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2025", note: "注意：大板型通用、安装时、要拆原车挡泥板。；排量或续航：1.5T；保护位置：发动机；安装配件或支架：有角板" },
      ] },
      { model: "缤越Pro", variants: [
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2020-2024", note: "注意：大板型通用、安装时、要拆原车挡泥板。；小板型通用、安装时、免拆原车挡泥板；排量或续航：1.4T/1.5T；保护位置：发动机；安装配件或支架：有角板" },
      ] },
      { model: "博瑞", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2015-2019；2020-2021", note: "注意：通用；排量或续航：1.8T/2.4L；1.8T；保护位置：发动机" },
      ] },
      { model: "博瑞GE", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2018-2022", note: "注意：通用；排量或续航：1.5T；保护位置：发动机" },
      ] },
      { model: "博越", variants: [
        { material: "塑钢5.0mm；碳纤5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2016；2016-2020；2016-2021；2018；2022；2024", note: "注意：要拆原车板；通用23款博越COOL；排量或续航：不分；2.0L；1.5T；1.8T；保护位置：三元催化器；油箱；发动机" },
      ] },
      { model: "博越COOL", variants: [
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2023", note: "注意：小板型通用、安装时、免拆原车挡泥板；排量或续航：1.5T；保护位置：发动机" },
      ] },
      { model: "博越L", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2023-2025", note: "注意：2件套；排量或续航：2.0T；1.5T；1.5T/2.0T；保护位置：发动机；转向机" },
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "博越Pro", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2020", note: "排量或续航：1.5T/1.8T；保护位置：发动机" },
      ] },
      { model: "博越X", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2022", note: "排量或续航：1.8T；保护位置：发动机" },
      ] },
      { model: "帝豪", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2018-2021；2022-2025；2026", note: "注意：原车胶板要开孔；排量或续航：1.5L；1.8L/1.5L；1.5L/1.5T；保护位置：发动机" },
      ] },
      { model: "帝豪EC7", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2014-2017", note: "注意：原车胶板要开孔；排量或续航：1.3T/1.5L；保护位置：发动机" },
      ] },
      { model: "帝豪GL", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2017-2018；2019；2019-2020；2019-2021", note: "注意：通用；排量或续航：1.3T/1.8L/1.4T；1.8L；1.4T；不分；1.5T；1.5L；保护位置：发动机；线束；安装配件或支架：有角板" },
      ] },
      { model: "帝豪GS", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2016-2018；2019-2020", note: "注意：通用；排量或续航：1.3T/1.8L/1.4T；1.4T；不分；1.5T；保护位置：发动机；线束；安装配件或支架：有角板" },
      ] },
      { model: "帝豪GSE", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019", note: "排量或续航：电动；保护位置：水箱；电机" },
      ] },
      { model: "帝豪L", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2022；2022、2024", note: "排量或续航：1.4T；1.5T；保护位置：发动机" },
      ] },
      { model: "帝豪S", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021-2022", note: "排量或续航：1.4T；保护位置：发动机" },
      ] },
      { model: "功夫牛", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2021", note: "注意：4件套不分开单件买；排量或续航：电动速航322；保护位置：前电机；后电机；电池前；电池后；安装配件或支架：专用支架" },
      ] },
      { model: "豪越", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2020-2022", note: "排量或续航：1.8T；保护位置：发动机" },
      ] },
      { model: "豪越L", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2022-2024", note: "排量或续航：2.0T；保护位置：发动机" },
      ] },
      { model: "几何C", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2020-2022", note: "注意：4件套；排量或续航：电动速航400、550；保护位置：水箱；电机；电池前；电池后" },
      ] },
      { model: "几何E", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2022-2023", note: "注意：3件套；排量或续航：电动速航401、320；保护位置：电机；线束；电池" },
      ] },
      { model: "嘉际", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019-2023", note: "注意：要拆原车板；排量或续航：1.5T；保护位置：发动机" },
      ] },
      { model: "金刚", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2016-2019", note: "注意：部份车型后面没孔安装；排量或续航：1.5L；保护位置：发动机" },
      ] },
      { model: "星舰7", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "星瑞", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021-2024", note: "注意：要拆原车板；排量或续航：2.0T、1.5T；保护位置：发动机；安装配件或支架：异形盖板" },
      ] },
      { model: "星愿", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2024、2026", note: "注意：两个续航、各6件套 前电机、线束、后尾箱底护板通用。 电池、后电机专用。；排量或续航：续航310/410；续航310；续航 410、480；保护位置：前电机；电池；后电机；主驾线束；副驾线束；后部底盘；安装配件或支架：后电机 2颗街霸4号支架2颗街霸5号6号支架3颗银河L6油箱支架" },
      ] },
      { model: "星愿310/410", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "星越", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019；2019/2021", note: "排量或续航：2.0T；1.5T；保护位置：发动机；安装配件或支架：异形盖板" },
      ] },
      { model: "星越L", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021-2024；2022；2022/2024；2025", note: "注意：2件套；七件套 发动机+转向机与21-24 老款混动版2.0T通用(四驱 油箱排气管位置不一样有冲突,油箱不发)；发动机、转向机、电池通用-注意:蜂巢能源电池不能安装；排量或续航：1.5T；2.0T；1.5T/2.0T；增程续航205/245；保护位置：发动机；转向机；线束3；线束4；线束5；油箱；电池；安装配件或支架：异形盖板" },
      ] },
      { model: "星越S", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021", note: "排量或续航：2.0T；保护位置：发动机；安装配件或支架：异形盖板" },
      ] },
      { model: "熊猫EV", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2023-2025", note: "注意：4件套；排量或续航：续航120/200/210；保护位置：前电机；电池；电控器；后电机" },
      ] },
      { model: "远景", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2015-2017；2018-2019-2020", note: "注意：原车胶板要开孔；排量或续航：1.5L；保护位置：发动机" },
      ] },
      { model: "远景S1", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2018", note: "注意：原车胶板要开孔；排量或续航：1.4T/1.5L；保护位置：发动机" },
      ] },
      { model: "远景X1", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2017", note: "排量或续航：1.3L；保护位置：发动机" },
      ] },
      { model: "远景X3", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2017-2018；2019-2022", note: "注意：护板通用螺丝专用；排量或续航：1.5L；保护位置：发动机" },
      ] },
      { model: "远景X6", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2016-2021", note: "排量或续航：1.3T/1.8L/1.4T；保护位置：发动机" },
      ] },
      { model: "GX7", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2012-2015；2013-2014", note: "排量或续航：1.8L；2.0L/2.4；1.8L/2.0L；1.8L/2.0L/2.4L；1.8T/2.0L；保护位置：发动机" },
      ] },
      { model: "GX9", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2014-2015", note: "注意：要拆原车板；排量或续航：4.0L；保护位置：发动机" },
      ] },
      { model: "ICON", variants: [
        { material: "塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2020-2022；2023", note: "注意：要拆原车板；排量或续航：1.5T；保护位置：发动机" },
      ] },
      { model: "SX7", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2013-2014", note: "排量或续航：1.8L/2.0L/2.4L；保护位置：发动机" },
      ] },
    ],
  },
  {
    name: "360软包脚垫",
    modelCount: 36,
    models: [
      { model: "缤瑞", variants: [
        { material: "", year: "18款--21款", note: "" },
      ] },
      { model: "缤瑞COOL", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "缤越", variants: [
        { material: "", year: "18款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "18款--", note: "" },
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "博瑞", variants: [
        { material: "", year: "15款--18款", note: "" },
      ] },
      { model: "博瑞GE", variants: [
        { material: "", year: "18款--", note: "" },
        { material: "", year: "18款--", note: "" },
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "博越", variants: [
        { material: "", year: "16款--21款", note: "" },
      ] },
      { model: "博越COOL", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "博越L", variants: [
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "博越Pro", variants: [
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "博越X", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "帝豪", variants: [
        { material: "", year: "18款--21款", note: "" },
        { material: "", year: "22款-25款", note: "" },
        { material: "", year: "26款--", note: "" },
        { material: "", year: "18款--20款", note: "" },
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "帝豪EC7", variants: [
        { material: "", year: "12款--16款", note: "" },
        { material: "", year: "11款--16款", note: "" },
        { material: "", year: "08款--13款", note: "" },
        { material: "", year: "14款--17款", note: "" },
      ] },
      { model: "帝豪GL", variants: [
        { material: "", year: "16款--", note: "" },
      ] },
      { model: "帝豪GS", variants: [
        { material: "", year: "16款--", note: "" },
      ] },
      { model: "帝豪GSE", variants: [
        { material: "", year: "18款--", note: "" },
      ] },
      { model: "帝豪L", variants: [
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "帝豪S", variants: [
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "功夫牛", variants: [
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "豪越", variants: [
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "豪越L", variants: [
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "几何C", variants: [
        { material: "", year: "19款--24款", note: "" },
        { material: "", year: "24款--", note: "" },
        { material: "", year: "21款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "24款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "几何E", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "嘉际", variants: [
        { material: "", year: "24款--", note: "" },
        { material: "", year: "24款--", note: "" },
        { material: "", year: "19款--22款", note: "" },
        { material: "", year: "20款--22款", note: "" },
        { material: "", year: "19款--22款", note: "" },
        { material: "", year: "19款--22款", note: "" },
        { material: "", year: "19款--22款", note: "" },
        { material: "", year: "21款--22款", note: "" },
        { material: "", year: "19款--", note: "" },
      ] },
      { model: "金刚", variants: [
        { material: "", year: "16款--", note: "" },
      ] },
      { model: "星瑞", variants: [
        { material: "", year: "20款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "星愿", variants: [
        { material: "", year: "24款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "星越", variants: [
        { material: "", year: "19款--", note: "" },
        { material: "", year: "19款--", note: "" },
      ] },
      { model: "星越L", variants: [
        { material: "", year: "21款--", note: "" },
        { material: "", year: "21款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "24款--", note: "" },
        { material: "", year: "26款--", note: "" },
      ] },
      { model: "星越S", variants: [
        { material: "", year: "21款--", note: "" },
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "远景", variants: [
        { material: "", year: "10款--15款", note: "" },
        { material: "", year: "14款--15款", note: "" },
        { material: "", year: "16款--17款", note: "" },
        { material: "", year: "18款--", note: "" },
      ] },
      { model: "远景S1", variants: [
        { material: "", year: "18款--", note: "" },
      ] },
      { model: "远景X1", variants: [
        { material: "", year: "17款--", note: "" },
        { material: "", year: "17款--", note: "" },
      ] },
      { model: "远景X3", variants: [
        { material: "", year: "17款--", note: "" },
      ] },
      { model: "远景X6", variants: [
        { material: "", year: "15款--17款", note: "" },
        { material: "", year: "16款--", note: "" },
        { material: "", year: "18款--", note: "" },
      ] },
      { model: "GX7", variants: [
        { material: "", year: "14款--16款", note: "" },
      ] },
      { model: "ICON", variants: [
        { material: "", year: "20款--", note: "" },
      ] },
    ],
  },
  {
    name: "平面尾箱垫",
    modelCount: 27,
    models: [
      { model: "缤瑞", variants: [
        { material: "1207 左右不带网兜", year: "18款--", note: "" },
      ] },
      { model: "缤瑞COOL", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "缤越", variants: [
        { material: "752 22款缤越COOL不一样", year: "18款--21款", note: "" },
        { material: "1269 有耳朵", year: "20款--", note: "" },
        { material: "891 左右带网兜", year: "19款--", note: "" },
        { material: "995", year: "19款--", note: "" },
      ] },
      { model: "博瑞", variants: [
        { material: "171", year: "15款--", note: "" },
        { material: "630 混动", year: "18款--", note: "" },
      ] },
      { model: "博瑞GE", variants: [
        { material: "1270 插电混动", year: "18款--", note: "" },
      ] },
      { model: "博越", variants: [
        { material: "403", year: "16款--", note: "" },
        { material: "820", year: "19款--", note: "" },
      ] },
      { model: "博越COOL", variants: [
        { material: "1658上层", year: "23款--", note: "" },
      ] },
      { model: "博越L", variants: [
        { material: "上层1549", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "博越X", variants: [
        { material: "1226 右边带网兜", year: "22款--", note: "" },
      ] },
      { model: "帝豪", variants: [
        { material: "", year: "18款--21款", note: "" },
        { material: "", year: "09-13款", note: "" },
        { material: "", year: "18款--", note: "" },
        { material: "", year: "21款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "11款--16款", note: "" },
        { material: "", year: "14款--17款", note: "" },
        { material: "924", year: "18款--21款", note: "" },
      ] },
      { model: "帝豪GL", variants: [
        { material: "889", year: "16款--", note: "" },
      ] },
      { model: "帝豪GS", variants: [
        { material: "657", year: "15款--", note: "" },
      ] },
      { model: "帝豪L", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "帝豪S", variants: [
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "豪越", variants: [
        { material: "835", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "836", year: "20款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "豪越L", variants: [
        { material: "", year: "24款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "几何C", variants: [
        { material: "", year: "21款--", note: "" },
        { material: "", year: "24款--", note: "" },
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "几何E", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "嘉际", variants: [
        { material: "677四座分体", year: "19款--", note: "" },
        { material: "677五座分体", year: "19款--", note: "" },
        { material: "", year: "19款--22款", note: "" },
        { material: "", year: "19款--22款", note: "" },
      ] },
      { model: "星瑞", variants: [
        { material: "", year: "20款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "星愿", variants: [
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "星越", variants: [
        { material: "672", year: "19款--", note: "" },
        { material: "1058 右边有音响", year: "21款--", note: "" },
        { material: "1783右边没有音响", year: "21款--", note: "" },
      ] },
      { model: "星越L", variants: [
        { material: "", year: "22款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "远景", variants: [
        { material: "990", year: "10款--15款", note: "" },
        { material: "483", year: "18款--", note: "" },
      ] },
      { model: "远景X3", variants: [
        { material: "", year: "17款--", note: "" },
      ] },
      { model: "远景X6", variants: [
        { material: "831", year: "15款--17款", note: "" },
        { material: "599", year: "18款--", note: "" },
      ] },
      { model: "ICON", variants: [
        { material: "841", year: "20款--", note: "" },
      ] },
    ],
  },
  {
    name: "360全包尾箱",
    modelCount: 18,
    models: [
      { model: "缤越", variants: [
        { material: "", year: "18款--21", note: "" },
        { material: "", year: "18款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "19款--", note: "" },
      ] },
      { model: "博越", variants: [
        { material: "", year: "16款--20款", note: "" },
      ] },
      { model: "博越COOL", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "博越L", variants: [
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "博越Pro", variants: [
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "博越X", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "帝豪", variants: [
        { material: "", year: "18款--", note: "" },
      ] },
      { model: "帝豪GS", variants: [
        { material: "", year: "16款--", note: "" },
      ] },
      { model: "帝豪S", variants: [
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "豪越", variants: [
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "几何C", variants: [
        { material: "", year: "20款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "几何E", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "嘉际", variants: [
        { material: "", year: "20款--", note: "" },
        { material: "", year: "21款--", note: "" },
        { material: "", year: "19款--22款", note: "" },
      ] },
      { model: "星越", variants: [
        { material: "", year: "19款--", note: "" },
        { material: "", year: "19款--", note: "" },
      ] },
      { model: "星越L", variants: [
        { material: "", year: "21款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "远景X3", variants: [
        { material: "", year: "17款--", note: "" },
      ] },
      { model: "远景X6", variants: [
        { material: "", year: "18款--", note: "" },
      ] },
      { model: "ICON", variants: [
        { material: "", year: "20款--", note: "" },
      ] },
    ],
  },
  {
    name: "电动踏板",
    modelCount: 14,
    models: [
      { model: "缤越L", variants: [
        { material: "", year: "2025", note: "取信号方式：对插；适配明细：2025=对插" },
      ] },
      { model: "博越", variants: [
        { material: "", year: "2016-2023；2024+", note: "取信号方式：线夹；适配明细：2016-2023=线夹" },
      ] },
      { model: "博越COOL", variants: [
        { material: "", year: "2023+", note: "取信号方式：线夹；适配明细：2023+=线夹" },
      ] },
      { model: "博越COOL 智享型", variants: [
        { material: "", year: "2023+", note: "取信号方式：线夹；适配明细：2023+=线夹" },
      ] },
      { model: "博越L", variants: [
        { material: "", year: "2023-2025.10前；2025.11后", note: "取信号方式：线夹；适配明细：2023-2025.10前=线夹" },
      ] },
      { model: "博越Pro", variants: [
        { material: "", year: "2020+", note: "取信号方式：对插；适配明细：2020+=对插" },
      ] },
      { model: "博越X", variants: [
        { material: "", year: "2021+", note: "取信号方式：对插；适配明细：2021+=对插" },
      ] },
      { model: "豪越", variants: [
        { material: "", year: "2020+", note: "取信号方式：对插；适配明细：2020+=对插" },
      ] },
      { model: "嘉际", variants: [
        { material: "", year: "2019+", note: "取信号方式：对插；适配明细：2019+=对插" },
      ] },
      { model: "星越", variants: [
        { material: "", year: "2019+", note: "取信号方式：对插；适配明细：2019+=对插" },
      ] },
      { model: "星越L", variants: [
        { material: "", year: "2021+", note: "取信号方式：线夹；适配明细：2021+=线夹" },
      ] },
      { model: "星越L Hi-P增程电动版", variants: [
        { material: "", year: "2023+", note: "取信号方式：线夹；适配明细：2023+=线夹" },
      ] },
      { model: "星越L智擎 星云版", variants: [
        { material: "", year: "2024+", note: "取信号方式：线夹；适配明细：2024+=线夹" },
      ] },
      { model: "星越S", variants: [
        { material: "", year: "2021+", note: "取信号方式：对插；适配明细：2021+=对插" },
      ] },
    ],
  },
];

export const GEELY_PROJECT_COUNT = 5;
