/**
 * 丰田 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs toyota --apply`
 * 源：`src/lib/fitment/toyota.ts`
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
export const toyotaProjects: readonly CuratedProject[] = [
  {
    name: "360软包脚垫",
    modelCount: 53,
    models: [
      { model: "4Runner超霸", variants: [
        { material: "", year: "18款--", note: "" },
      ] },
      { model: "86", variants: [
        { material: "", year: "13款--17款", note: "" },
      ] },
      { model: "埃尔法", variants: [
        { material: "皮革/丝圈", year: "11款--14款；11款-14款；15款--18款；19款--；19款--23款；24款--", note: "门座:5门7座；片套:4片；港版右呔 中控台与前扶手箱为分体式 副驾有滑道；门座:5门7座；片套:4片；前排连体；门座:5门7座；片套:4片；二排丝圈盖滑道 中控台与前扶手箱为分体式；门座:5门7座；片套:4片；二排丝圈不盖滑道 中控台与前扶手箱为分体式；门座:5门7座；片套:4片；前排连体 主驾有电脑盒；门座:5门7座；片套:4片；前排分体；门座:5门7座；片套:4片；港版右呔；门座:5门7座；片套:4片；二排4条轨道前端平行 24款不同；门座:5门7座；片套:8片；门座:5门7座；片套:12片；丝圈露轨道 油电混合动力；门座:5门7座；片套:12片；丝圈盖轨道 油电混合动力" },
        { material: "", year: "15款--18款", note: "" },
        { material: "", year: "15款--18款", note: "" },
        { material: "", year: "19款--23款", note: "" },
        { material: "", year: "24款--", note: "" },
        { material: "", year: "24款--", note: "" },
        { material: "", year: "24款--", note: "" },
        { material: "", year: "15款--18款", note: "" },
        { material: "", year: "19款--", note: "" },
      ] },
      { model: "铂智3X", variants: [
        { material: "皮革/丝圈", year: "25款--", note: "门座:4门5座；片套:3片；纯电" },
      ] },
      { model: "铂智7", variants: [
        { material: "皮革/丝圈", year: "26款--", note: "门座:4门5座；片套:3片" },
      ] },
      { model: "超霸4RUNNER", variants: [
        { material: "", year: "18款--", note: "" },
      ] },
      { model: "超霸4RUNNER 原车7座做5座", variants: [
        { material: "", year: "18款--", note: "" },
      ] },
      { model: "超霸4RUNNER 原车7座做7座", variants: [
        { material: "", year: "18款--", note: "" },
      ] },
      { model: "锋兰达", variants: [
        { material: "皮革/丝圈", year: "22款--；23款-25款", note: "门座:4门5座；片套:3片；门座:4门5座；片套:3片；主驾不带油门扣手" },
      ] },
      { model: "格兰维亚", variants: [
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "海拉克斯", variants: [
        { material: "", year: "15款--20款", note: "" },
      ] },
      { model: "海拉克斯/Hilux 皮卡", variants: [
        { material: "", year: "15款--20款", note: "" },
      ] },
      { model: "汉兰达", variants: [
        { material: "皮革/丝圈", year: "07款--14款；15款--21款；22款--", note: "门座:4门5座；片套:3片；门座:5门7座；片套:3片；门座:5门7座；片套:4片；门座:5门7座；片套:3片；二排座中间没有检修口；门座:5门7座；片套:4片；二排座中间没有检修口；门座:4门5座；片套:3片；二排座中间有检修口；门座:5门7座；片套:3片；二排座中间有检修口；门座:5门7座；片套:4片；二排座中间有检修口" },
      ] },
      { model: "红杉", variants: [
        { material: "", year: "08款--10款；22款--", note: "二排2个单人位，中间带扶手箱；全车结构223 二排座椅中间有置物盒 前排座椅下有电脑；全车结构223 二排座椅中间没有置物盒 前排座椅下有电脑" },
        { material: "", year: "08款--10款", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "花冠", variants: [
        { material: "皮革/丝圈", year: "05款--16款", note: "门座:4门5座；片套:3片" },
      ] },
      { model: "皇冠", variants: [
        { material: "皮革/丝圈", year: "05款--09款；10款--14款；15款--19款；24款--", note: "门座:4门5座；片套:3片；门座:4门5座；片套:3片；副驾下带电路板" },
      ] },
      { model: "皇冠陆放", variants: [
        { material: "皮革/丝圈", year: "22款--", note: "门座:4门5座；片套:3片；二排座中间有检修口；门座:5门7座；片套:3片；二排座中间有检修口；门座:5门7座；片套:4片；二排座中间有检修口；门座:5门7座；片套:3片；二排座中间没有检修口；门座:5门7座；片套:4片；二排座中间没有检修口" },
      ] },
      { model: "佳美", variants: [
        { material: "", year: "02款--05款", note: "" },
      ] },
      { model: "卡罗拉", variants: [
        { material: "皮革/丝圈", year: "07款--13款；14款--18款；16款--18款；19款--20款；19款--25款；26款--", note: "门座:4门5座；片套:3片；门座:4门5座；片套:3片；19年的车也有18款的，注意看车位外观；门座:4门5座；片套:3片；油电混合动力；门座:4门5座；片套:3片；插电式混合动力" },
      ] },
      { model: "卡罗拉锐放", variants: [
        { material: "皮革/丝圈", year: "22款--；23款-25款；26款--", note: "门座:4门5座；片套:3片；门座:4门5座；片套:3片；主驾带油门开关" },
      ] },
      { model: "凯美瑞", variants: [
        { material: "皮革/丝圈", year: "02款--05款；06款--14款；12款--17款；18款--23款；24款--", note: "门座:4门5座；片套:3片；与经典版一样；门座:4门5座；片套:3片；油门悬挂式；门座:4门5座；片套:3片；油门悬挂式/十周年纪念版；门座:4门5座；片套:3片；前排座椅下不带电路盒/油门坐地式 24款不同；门座:4门5座；片套:3片；主副驾不带电脑盒" },
      ] },
      { model: "兰德酷路泽", variants: [
        { material: "", year: "04款--06款；07款--18款；10款--21款；22款--", note: "二排座椅下不带出风口；二排座椅下带出风口；二排座椅下不带出风口 中东版；二排座椅下带出风口 中东版；副驾有灭火器；副驾没有灭火器；只做5位车 没有轮毂和尾箱；做全车（轮毂+尾箱）" },
      ] },
      { model: "雷凌", variants: [
        { material: "皮革/丝圈", year: "14款--18款；16款--18款；19款；19款--23款", note: "门座:4门5座；片套:3片；纯汽油版；门座:4门5座；片套:3片；油电混合动力；门座:4门5座；片套:3片；插电式混合动力" },
      ] },
      { model: "凌放", variants: [
        { material: "皮革/丝圈", year: "22款--", note: "门座:4门5座；片套:3片；后排座椅海绵厚；门座:4门5座；片套:3片；后排座椅海绵薄" },
      ] },
      { model: "凌尚", variants: [
        { material: "皮革/丝圈", year: "21款--23款", note: "门座:4门5座；片套:3片" },
      ] },
      { model: "普拉多", variants: [
        { material: "皮革/丝圈", year: "02款-03款；04款--09款；10款--19款；24款--", note: "门座:5门7座；片套:3片；门座:5门7座；片套:4片；三排连尾箱；门座:5门8座；片套:3片；不带冰箱/不带电脑盒；门座:5门8座；片套:3片；三排连尾箱/不带冰箱/不带电脑盒；门座:2门5座；片套:3片；前排扶手箱中间带冰箱；门座:4门5座；片套:3片；前排扶手箱中间不带冰箱；门座:4门5座；片套:3片；前排扶手箱中间带冰箱；门座:5门7座；片套:3片；前排扶手箱中间带冰箱；门座:5门7座；片套:4片；前排扶手箱中间带冰箱；门座:5门7座；片套:3片；前排扶手箱中间不带冰箱；门座:5门7座；片套:4片；前排扶手箱中间不带冰箱；门座:4门5座；片套:3片；门座:5门6座；片套:3片；门座:5门6座；片套:4片" },
      ] },
      { model: "普锐斯", variants: [
        { material: "皮革/丝圈", year: "12款--16款", note: "门座:4门5座；片套:3片" },
      ] },
      { model: "普瑞维亚", variants: [
        { material: "", year: "06款--16款", note: "一排带扶手箱/扶手箱可移动带滑道；一排不带扶手箱/中东版" },
      ] },
      { model: "锐志", variants: [
        { material: "皮革/丝圈", year: "07款--16款", note: "门座:4门5座；片套:3片" },
      ] },
      { model: "塞那 MPV", variants: [
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "塞纳", variants: [
        { material: "", year: "11款--19款", note: "" },
        { material: "", year: "11款--19款", note: "" },
        { material: "", year: "11款--19款", note: "" },
        { material: "", year: "11款--19款", note: "" },
      ] },
      { model: "赛那SIENNA", variants: [
        { material: "皮革/丝圈", year: "11款--19款；20款--；22款--", note: "门座:5门7座；片套:4片；二排滑道左右不同；门座:5门7座；片套:5片；前排带扶手箱/扶手箱可滑动；门座:5门7座；片套:5片；前排带扶手箱/扶手箱不可滑动；门座:5门7座；片套:5片；前排不带扶手箱 尾箱胶壳是平的；门座:5门7座；片套:2片；适配格瑞维亚；门座:5门7座；片套:4片；尾箱右边带胶壳 适配格瑞维亚；门座:5门7座；片套:4片；尾箱右边不带胶壳 适配格瑞维亚" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "坦途", variants: [
        { material: "", year: "07款--13款；14款--19款", note: "主驾踏板是绒布/二排座椅下有滑道；二排座椅下无滑道可翻起" },
        { material: "", year: "07款--13款", note: "" },
        { material: "", year: "14款--19款", note: "" },
      ] },
      { model: "特锐", variants: [
        { material: "", year: "04款--07款", note: "" },
      ] },
      { model: "威驰", variants: [
        { material: "皮革/丝圈", year: "08款--13款；14款--22款；17款--22款", note: "门座:4门5座；片套:3片" },
      ] },
      { model: "威尔法", variants: [
        { material: "皮革/丝圈", year: "19款--23款", note: "门座:5门7座；片套:4片；滑道可盖可不盖" },
        { material: "", year: "19款--23款", note: "" },
      ] },
      { model: "威兰达", variants: [
        { material: "皮革/丝圈", year: "20款--25款；21款--25款", note: "门座:4门5座；片套:3片；门座:4门5座；片套:3片；插电混动" },
      ] },
      { model: "威飒", variants: [
        { material: "皮革/丝圈", year: "09款--16款；22款--", note: "门座:4门5座；片套:3片；门座:4门5座；片套:3片；后排座椅海绵厚；门座:4门5座；片套:3片；后排座椅海绵薄" },
        { material: "", year: "09款--16款", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "雅力士", variants: [
        { material: "皮革/丝圈", year: "08款--11款", note: "门座:4门5座；片套:3片" },
      ] },
      { model: "亚洲龙", variants: [
        { material: "皮革/丝圈", year: "19款--23款；24款--", note: "门座:4门5座；片套:3片；副驾驶座椅下带电路盒；门座:4门5座；片套:3片；主副驾驶座椅下不带电路盒；门座:4门5座；片套:3片；主副驾驶座椅下带电路盒；门座:4门5座；片套:3片；副驾驶座椅下带电路盒/主驾不带" },
      ] },
      { model: "亚洲狮", variants: [
        { material: "皮革/丝圈", year: "21款--23款", note: "门座:4门5座；片套:3片" },
      ] },
      { model: "奕泽", variants: [
        { material: "皮革/丝圈", year: "18款--23款；20款；21款--23款", note: "门座:4门5座；片套:3片" },
      ] },
      { model: "逸致", variants: [
        { material: "皮革/丝圈", year: "11款--16款", note: "门座:4门5座；片套:3片" },
      ] },
      { model: "bZ3", variants: [
        { material: "皮革/丝圈", year: "23款-25款；26款", note: "门座:4门5座；片套:3片；纯电" },
      ] },
      { model: "bZ4X", variants: [
        { material: "", year: "22款--", note: "纯电" },
      ] },
      { model: "bZ5", variants: [
        { material: "皮革/丝圈", year: "25款--", note: "门座:4门5座；片套:3片" },
      ] },
      { model: "C-HR", variants: [
        { material: "皮革/丝圈", year: "18款--23款；20款--23款；21款--23款", note: "门座:4门5座；片套:3片；门座:4门5座；片套:3片；纯电动" },
      ] },
      { model: "FJ Cruiser", variants: [
        { material: "", year: "07款--16款；07款--19款", note: "副驾不带灭火器" },
      ] },
      { model: "Fortuner穿越者", variants: [
        { material: "", year: "15款--19款", note: "" },
      ] },
      { model: "iA5", variants: [
        { material: "", year: "19款--22款", note: "纯电动" },
      ] },
      { model: "iA5 纯电动", variants: [
        { material: "", year: "19款--22款", note: "" },
      ] },
      { model: "RAV4荣放", variants: [
        { material: "皮革/丝圈", year: "09款--13款；13款--19款；20款--25款；21款--25款；26款--", note: "门座:4门5座；片套:3片；13款有新老款.下单注意区分车头车尾；门座:4门5座；片套:3片；汽油版；门座:4门5座；片套:3片；油电混合；门座:4门5座；片套:3片；插电混动" },
      ] },
      { model: "YARiS L", variants: [
        { material: "皮革/丝圈", year: "13款--22款；17款--22款", note: "门座:4门5座；片套:3片；门边条外侧是绒布；门座:4门5座；片套:3片；门边带胶壳" },
      ] },
    ],
  },
  {
    name: "底盘护板",
    modelCount: 52,
    models: [
      { model: "4Runner超霸", variants: [
        { material: "铝镁合金", year: "", note: "保护位置：底盘护板（具体保护部位未细分）；产品原文:丰田超霸4runner" },
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
      ] },
      { model: "埃尔法", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "保护位置：水箱护板、发动机护板、三元催化+线束、油箱、线路板" },
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2011-2021", note: "保护位置：发动机；排量或续航：2.5L；注意：3.5停发" },
      ] },
      { model: "铂智3X", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "保护位置：前电机、前电池、后电池" },
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2025", note: "保护位置：前电机；电池前；电池后；排量或续航：续航 520/430；注意：三件套" },
      ] },
      { model: "铂智7", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "保护位置：前电机护板、前电池护板、后电池护板、后电机护板" },
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2026", note: "保护位置：前电机；电池前；电池后；后电机；排量或续航：续航710；续航600；注意：四件套 一、前、后电机通用。二、电池护板专用。" },
      ] },
      { model: "锋兰达", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "保护位置：发动机、三元催化、油路L、油路R" },
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2022-2023/2024", note: "保护位置：发动机；排量或续航：2.0L；注意：版型通用；安装配件或支架：一颗异形盖板" },
      ] },
      { model: "海拉克斯", variants: [
        { material: "铝镁合金", year: "", note: "保护位置：底盘护板（具体保护部位未细分）；产品原文:海拉克斯" },
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
      ] },
      { model: "汉兰达", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2009-2017；2018-2021；2022-2023", note: "保护位置：发动机；排量或续航：2.0T/3.5L/2.7L；2.0T；2.0T、2.5L；安装配件或支架：定制套件产品有专用支架" },
      ] },
      { model: "红杉", variants: [
        { material: "铝镁合金", year: "", note: "保护位置：底盘护板（具体保护部位未细分）；产品原文:红杉-3.5TT；保护位置：底盘护板（具体保护部位未细分）；产品原文:红杉-3.5TT（TRD版）" },
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
      ] },
      { model: "花冠", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2003-2013", note: "保护位置：发动机；排量或续航：1.6L；注意：原车胶板要开孔" },
      ] },
      { model: "皇冠", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2005-2009；2010-2014；2015-2018", note: "保护位置：前部底盘；后部底盘；发动机；排量或续航：2.0T；2.5L/3.0L；注意：两件套 要拆原车板" },
      ] },
      { model: "皇冠陆放", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021-2023/2024", note: "保护位置：发动机；排量或续航：2.0L-2.5L" },
      ] },
      { model: "卡罗拉", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2008-2017；2016-2018；2017-2018；2019-2020；2019-2026；2019/2024；2023、2024", note: "保护位置：发动机；排量或续航：1.6L/1.8L/2.0L/1.2T；1.8L/1.2T；1.8L；1.2T；1.5L；注意：要拆原车板；改款；版型通用；安装配件或支架：一颗异形盖板" },
      ] },
      { model: "卡罗拉锐放", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "保护位置：发动机、三元催化、油路L、油路R" },
        { material: "塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2022-2023/2024、2026", note: "保护位置：发动机；排量或续航：2.0L；注意：版型通用；安装配件或支架：一颗异形盖板" },
      ] },
      { model: "凯美瑞", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2006-2017；2018-2024、2025", note: "保护位置：发动机；排量或续航：2.0L/2.5L；2.0L/2.4L/2.5L" },
      ] },
      { model: "兰德酷路泽", variants: [
        { material: "铝镁合金", year: "", note: "产品原文:LC100-4.7/4.5" },
      ] },
      { model: "兰德酷路泽LC100", variants: [
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
      ] },
      { model: "兰德酷路泽LC120", variants: [
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
      ] },
      { model: "兰德酷路泽LC150", variants: [
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
        { material: "铝镁合金", year: "", note: "油箱护板" },
      ] },
      { model: "兰德酷路泽LC200", variants: [
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
      ] },
      { model: "兰德酷路泽LC250", variants: [
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
        { material: "铝镁合金", year: "", note: "油箱护板" },
      ] },
      { model: "兰德酷路泽LC300", variants: [
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
        { material: "铝镁合金", year: "", note: "主油箱护板" },
        { material: "铝镁合金", year: "", note: "副油箱护板" },
      ] },
      { model: "兰德酷路泽LC71", variants: [
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
      ] },
      { model: "兰德酷路泽LC76", variants: [
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
      ] },
      { model: "兰德酷路泽LC78", variants: [
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
      ] },
      { model: "兰德酷路泽LC79", variants: [
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
      ] },
      { model: "兰德酷路泽LC80", variants: [
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
      ] },
      { model: "兰德酷路泽LC95", variants: [
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
      ] },
      { model: "雷凌", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2016-2018；2019；2019/2024；2021-2024", note: "保护位置：发动机；排量或续航：1.5L；1.2T；1.8L；注意：版型通用；要拆原车板；18款底盘；安装配件或支架：一颗异形盖板" },
      ] },
      { model: "凌放", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2022-2023", note: "保护位置：发动机；排量或续航：2.0L/2.5L" },
      ] },
      { model: "凌尚", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021-2023/2024", note: "保护位置：发动机；排量或续航：2.0L；注意：版型通用；安装配件或支架：一颗异形盖板" },
      ] },
      { model: "普拉多", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "保护位置：水箱、发动机、变速箱、油箱" },
        { material: "铝镁合金2.0mm；铝镁合金5.0mm", year: "2024", note: "保护位置：水箱；发动机；变速箱；分动箱；排量或续航：2.4T；注意：4件套" },
      ] },
      { model: "普锐斯", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2012", note: "保护位置：发动机；排量或续航：1.8L" },
      ] },
      { model: "锐志", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2007-2013", note: "保护位置：发动机；排量或续航：2.5L/3.0L" },
      ] },
      { model: "赛那SIENNA", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2011-2020；2021/2023/2024", note: "保护位置：发动机；排量或续航：3.5L、2.7L；保护位置：发动机；排量或续航：2.5L；安装配件或支架：定制套件产品有专用支架" },
      ] },
      { model: "坦途", variants: [
        { material: "铝镁合金", year: "", note: "保护位置：底盘护板（具体保护部位未细分）；产品原文:坦途3.5T；保护位置：底盘护板（具体保护部位未细分）；产品原文:坦途5.7" },
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
      ] },
      { model: "威驰", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2008-2022", note: "保护位置：发动机；排量或续航：1.3L/1.5L；注意：原车胶板要开孔" },
      ] },
      { model: "威尔法", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2011-2021", note: "保护位置：发动机；排量或续航：2.5L；注意：3.5停发" },
      ] },
      { model: "威兰达", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2020-2026", note: "保护位置：发动机；排量或续航：2.0L-2.5L" },
      ] },
      { model: "威飒", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2022-2023/2024", note: "保护位置：发动机；排量或续航：2.0L、2.5L" },
      ] },
      { model: "雅力士", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2008-2011", note: "保护位置：发动机；排量或续航：1.3L/1.6L；注意：原车胶板要开孔" },
      ] },
      { model: "亚洲龙", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019-2023/2024", note: "保护位置：发动机；排量或续航：2.0L-2.5L" },
      ] },
      { model: "亚洲狮", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021-2023", note: "保护位置：发动机；排量或续航：2.0L；注意：版型通用；安装配件或支架：一颗异形盖板" },
      ] },
      { model: "奕泽", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019-2023", note: "保护位置：发动机；排量或续航：2.0L；注意：通用" },
      ] },
      { model: "逸致", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2011-2015", note: "保护位置：发动机；排量或续航：1.8L" },
      ] },
      { model: "bZ3", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2023/2024", note: "保护位置：前电机；电池前；电池后；排量或续航：续航616；续航517；注意：三件套 两个续航前电机、电池前通用。 (电池后专用)。" },
      ] },
      { model: "bZ5", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2025", note: "保护位置：前电机；电池前；电池后；排量或续航：续航550；注意：三件套 电池通用BZ3续航616" },
      ] },
      { model: "C-HR", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019-2023", note: "保护位置：发动机；排量或续航：2.0L；注意：通用" },
      ] },
      { model: "FJ Cruiser", variants: [
        { material: "铝镁合金", year: "", note: "保护位置：底盘护板（具体保护部位未细分）；产品原文:丰田 FJ Cruiser" },
        { material: "铝镁合金", year: "", note: "前水箱：两驱没后电机、发动机护板：混动带后电机、后电机护板：燃油没后电机" },
      ] },
      { model: "RAV4荣放", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "保护位置：前水箱、发动机；保护位置：前水箱、发动机护板、线路左护板、线路右护板、后油箱护板、后电机护板；前水箱：两驱没后电机、发动机护板：混动带后电机、后电机护板：燃油没后电机" },
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2009-2019；2020-2024；2026", note: "保护位置：发动机；水箱；线束1；线束2；线束3；三元催化器；油箱；后电机；排量或续航：2.4L/2.5L；2.0L；2.0L/2.5L；双擎2.0/L2.5L；注意：原车胶板要开孔；通用；8件套 一:发动机通用威兰达二:2.0L没有后电机,2.5L有后电机。 三:车辆加装脚踏板后、线束、油箱、三元催化护板不能安装。" },
      ] },
      { model: "Tacoma塔库玛", variants: [
        { material: "铝镁合金", year: "", note: "保护位置：底盘护板（具体保护部位未细分）；产品原文:丰田塔库玛Tacoma" },
        { material: "铝镁合金", year: "", note: "底盘护板（具体保护部位未细分）" },
      ] },
      { model: "Veloz维洛兹", variants: [
        { material: "塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021+", note: "保护位置：发动机；排量或续航：1.5L" },
      ] },
      { model: "YARiS L", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2014-2022；2017-2022", note: "保护位置：发动机；排量或续航：1.3L-1.5L；保护位置：发动机；排量或续航：1.5L；注意：原车胶板要开孔" },
      ] },
    ],
  },
  {
    name: "平面尾箱垫",
    modelCount: 50,
    models: [
      { model: "4Runner超霸", variants: [
        { material: "", year: "18款--", note: "" },
      ] },
      { model: "埃尔法", variants: [
        { material: "皮革", year: "11款--14款；15款--", note: "门座:5门7座" },
        { material: "189", year: "15款--", note: "" },
        { material: "249", year: "11款--14款", note: "" },
      ] },
      { model: "铂智3X", variants: [
        { material: "皮革", year: "25款--", note: "门座:4门5座" },
        { material: "2216 上层", year: "25款--", note: "" },
      ] },
      { model: "铂智7", variants: [
        { material: "皮革", year: "26款--", note: "门座:4门5座" },
        { material: "", year: "26款--", note: "" },
      ] },
      { model: "超霸4RUNNER", variants: [
        { material: "", year: "18款--", note: "" },
      ] },
      { model: "穿越者", variants: [
        { material: "772", year: "16款--", note: "" },
      ] },
      { model: "锋兰达", variants: [
        { material: "皮革", year: "22款--", note: "门座:4门5座" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "汉兰达", variants: [
        { material: "皮革", year: "09款--14款；15款--19款；15款--21款；15款-19款；22款--", note: "门座:4门5座；门座:5门7座；三排靠背五五分；门座:5门7座；三排靠背连体；门座:4门5座；门座:5门7座" },
        { material: "62", year: "09款--14款", note: "" },
        { material: "2146平面分体", year: "09款--14款", note: "" },
        { material: "62", year: "09款--14款", note: "" },
        { material: "", year: "15款-19款", note: "" },
        { material: "63", year: "15款--19款", note: "" },
        { material: "349", year: "15款--19款", note: "" },
        { material: "862 带二排靠背", year: "15款--21款", note: "" },
        { material: "1229 分体 左边带音响", year: "22款--", note: "" },
        { material: "1171 左边不带音响", year: "22款--", note: "" },
        { material: "1147 分体 左边不带音响", year: "22款--", note: "" },
        { material: "1188 左边不带音响", year: "22款--", note: "" },
      ] },
      { model: "红杉", variants: [
        { material: "", year: "08款--10款；22款--", note: "有档版尾箱" },
        { material: "791", year: "08款--10款", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "花冠", variants: [
        { material: "皮革", year: "05款--18款", note: "门座:4门5座" },
        { material: "387", year: "05款--18款", note: "" },
      ] },
      { model: "皇冠", variants: [
        { material: "皮革", year: "05款--09款；10款--14款；15款--；24款--", note: "门座:4门5座；门座:4门5座；尾箱长度114厘米" },
        { material: "", year: "05款--09款", note: "" },
        { material: "448", year: "10款--14款", note: "" },
        { material: "485高配", year: "15款--", note: "" },
        { material: "", year: "24款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "皇冠陆放", variants: [
        { material: "皮革", year: "22款--", note: "门座:5门7座" },
        { material: "1238 左边带音响", year: "22款--", note: "" },
      ] },
      { model: "卡罗拉", variants: [
        { material: "皮革", year: "07款--13款；14款--18款；16款--18款；19款--", note: "门座:4门5座；门座:4门5座；尾箱分長短版；门座:4门5座；卡罗拉双擎" },
        { material: "296", year: "07款--13款", note: "" },
        { material: "72 短版95cm", year: "14款--18款", note: "" },
        { material: "640", year: "19款--", note: "" },
        { material: "319", year: "16款--18款", note: "" },
        { material: "", year: "19款--", note: "" },
      ] },
      { model: "卡罗拉锐放", variants: [
        { material: "皮革", year: "22款--；26款--", note: "门座:4门5座；适配锋兰达 左右二边有耳朵；门座:4门5座；适配锋兰达" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "26款--", note: "" },
      ] },
      { model: "凯美瑞", variants: [
        { material: "皮革", year: "06款--14款；12款--17款；18款--", note: "门座:4门5座；与经典版一样；门座:4门5座；门座:4门5座；混动版；门座:4门5座；汽油版" },
        { material: "494", year: "06款--14款", note: "" },
        { material: "70", year: "12款--17款", note: "" },
        { material: "246", year: "12款--17款", note: "" },
        { material: "441", year: "18款--", note: "" },
        { material: "562", year: "18款--", note: "" },
      ] },
      { model: "酷路泽 7位做5位", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "酷路泽 原车7座做5座", variants: [
        { material: "499/360专用", year: "04款--06款", note: "" },
        { material: "68有孔", year: "07款--18款", note: "" },
      ] },
      { model: "酷路泽 原车7座做7座", variants: [
        { material: "498/360专用", year: "04款--06款", note: "" },
      ] },
      { model: "兰德酷路泽", variants: [
        { material: "", year: "04款--06款；07款--18款；11款--18款；22款--", note: "" },
      ] },
      { model: "雷凌", variants: [
        { material: "皮革", year: "14款--18款；16款--18款；19款--", note: "门座:4门5座" },
        { material: "319", year: "16款--18款", note: "" },
        { material: "640", year: "19款--", note: "" },
        { material: "72", year: "14款--18款", note: "" },
      ] },
      { model: "凌放", variants: [
        { material: "皮革", year: "22款--", note: "门座:4门5座；适配插电混动" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "陆地巡洋舰 原车5座", variants: [
        { material: "67原车五座/没孔", year: "11款--18款", note: "" },
      ] },
      { model: "陆地巡洋舰 原车7座做5座", variants: [
        { material: "67原车五座/没孔", year: "11款--18款", note: "" },
      ] },
      { model: "普拉多", variants: [
        { material: "皮革", year: "05款--09款；10款--18款；14款--18款；24款--", note: "门座:5门7座；门座:2门5座；可塞入车体；门座:4门5座；门座:5门6座" },
        { material: "986", year: "10款--18款", note: "" },
        { material: "256有孔 不塞边", year: "05款--09款", note: "" },
        { material: "", year: "24款--", note: "" },
        { material: "64", year: "14款--18款", note: "" },
        { material: "66右侧小耳朵", year: "10款--18款", note: "" },
        { material: "", year: "24款--", note: "" },
        { material: "361右侧小耳朵", year: "10款--18款", note: "" },
      ] },
      { model: "普瑞维亚", variants: [
        { material: "", year: "06款--16款", note: "一排扶手不可取 加尾箱" },
      ] },
      { model: "普瑞维亚 MPV", variants: [
        { material: "290", year: "06款--16款", note: "" },
      ] },
      { model: "锐志", variants: [
        { material: "皮革", year: "05款--09款；10款--16款", note: "门座:4门5座" },
        { material: "69", year: "05款--09款", note: "" },
        { material: "427", year: "10款--16款", note: "" },
      ] },
      { model: "塞纳", variants: [
        { material: "456上层", year: "11款--18款", note: "" },
      ] },
      { model: "赛那SIENNA", variants: [
        { material: "皮革", year: "11款--18款；21款--", note: "门座:5门7座；前排扶手固定不可移动；门座:5门7座" },
        { material: "1218 覆盖3排椅子", year: "21款--", note: "" },
      ] },
      { model: "威驰", variants: [
        { material: "皮革", year: "14款--；17款--", note: "门座:4门5座；三厢；门座:4门5座；两厢" },
        { material: "391", year: "14款--", note: "" },
        { material: "579", year: "17款--", note: "" },
      ] },
      { model: "威兰达", variants: [
        { material: "皮革", year: "20款--", note: "门座:4门5座；汽油混动一样；门座:4门5座" },
        { material: "789", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "亚洲龙", variants: [
        { material: "皮革", year: "19款--", note: "门座:4门5座" },
        { material: "568", year: "19款--", note: "" },
      ] },
      { model: "亚洲狮", variants: [
        { material: "皮革", year: "21款--", note: "门座:4门5座；适配：凌尚" },
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "奕泽", variants: [
        { material: "皮革", year: "18款--；20款--", note: "门座:4门5座" },
        { material: "", year: "18款--", note: "" },
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "bZ3", variants: [
        { material: "皮革", year: "23款--", note: "门座:4门5座" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "bZ4X", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "bz4x 左边带音响", variants: [
        { material: "1567 上层", year: "22款--", note: "" },
      ] },
      { model: "bZ5", variants: [
        { material: "皮革", year: "25款--", note: "门座:4门5座" },
        { material: "", year: "25款--", note: "" },
      ] },
      { model: "C-HR", variants: [
        { material: "皮革", year: "18款--", note: "门座:4门5座" },
        { material: "", year: "18款--", note: "" },
      ] },
      { model: "FJ Cruiser", variants: [
        { material: "", year: "07款--16款", note: "" },
      ] },
      { model: "FJ酷路泽 右呔车", variants: [
        { material: "", year: "07款--16款", note: "" },
      ] },
      { model: "Fortuner穿越者", variants: [
        { material: "", year: "16款--", note: "" },
      ] },
      { model: "iA5", variants: [
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "iA5", variants: [
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "RAV4荣放", variants: [
        { material: "皮革", year: "09款--13款；13款--19款；20款-25款；26款--", note: "门座:4门5座；门座:4门5座；汽油混动一样；门座:4门5座；右边不带网兜" },
        { material: "284", year: "09款--13款", note: "" },
        { material: "71", year: "13款--19款", note: "" },
        { material: "695", year: "20款-25款", note: "" },
        { material: "", year: "20款-25款", note: "" },
        { material: "", year: "26款--", note: "" },
      ] },
      { model: "SR5/穿越者 原车7座做5座", variants: [
        { material: "310五座", year: "16款--", note: "" },
      ] },
      { model: "SR5/穿越者 原车7座做7座", variants: [
        { material: "", year: "16款--", note: "" },
      ] },
      { model: "YARiS L", variants: [
        { material: "皮革", year: "13款--；17款--", note: "门座:4门5座" },
      ] },
      { model: "YARiS L致享", variants: [
        { material: "471 三厢", year: "17款--", note: "" },
      ] },
      { model: "YARiS L致炫", variants: [
        { material: "480", year: "13款--", note: "" },
        { material: "811 两厢", year: "13款--", note: "" },
      ] },
    ],
  },
  {
    name: "360全包尾箱",
    modelCount: 15,
    models: [
      { model: "4Runner超霸", variants: [
        { material: "", year: "18款--", note: "尾箱不带侧包" },
      ] },
      { model: "超霸4RUNNER", variants: [
        { material: "", year: "18款--", note: "" },
      ] },
      { model: "锋兰达", variants: [
        { material: "皮革", year: "22款--", note: "门座:4门5座；尾箱不带侧包 左右二边有耳朵；门座:4门5座；尾箱不带侧包" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "汉兰达", variants: [
        { material: "皮革", year: "08款--14款；15款--21款；22款--", note: "门座:5门7座；片套:7片；尾箱不带侧包；门座:5门7座；片套:5片；尾箱不带侧包；门座:4门5座；片套:6片；尾箱不带侧包；门座:5门7座；尾箱不带侧包，左边不带音响。；门座:5门7座；尾箱不带侧包，左边带音响。" },
        { material: "", year: "08款--14款", note: "" },
        { material: "", year: "15款--21款", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "红杉", variants: [
        { material: "", year: "22款--", note: "全车结构223" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "酷路泽", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "兰德酷路泽", variants: [
        { material: "", year: "22款--", note: "尾箱不带侧包" },
      ] },
      { model: "凌放", variants: [
        { material: "皮革", year: "22款--", note: "门座:4门5座；尾箱不带侧包" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "普拉多", variants: [
        { material: "皮革", year: "10款--19款", note: "门座:4门5座；尾箱不带侧包；门座:5门7座；片套:8片；尾箱不带侧包；门座:5门7座；片套:8片；尾箱不带侧包 右边大耳朵" },
        { material: "", year: "10款--19款", note: "" },
        { material: "", year: "10款--19款", note: "" },
        { material: "", year: "10款--19款", note: "" },
      ] },
      { model: "威兰达", variants: [
        { material: "皮革", year: "20款--", note: "门座:4门5座；尾箱不带侧包" },
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "奕泽", variants: [
        { material: "皮革", year: "18款--；20款--", note: "门座:4门5座" },
        { material: "", year: "18款--", note: "" },
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "bz4x", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "bZ4X", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "C-HR", variants: [
        { material: "皮革", year: "18款--；20款--", note: "门座:4门5座" },
        { material: "", year: "18款--", note: "" },
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "RAV4荣放", variants: [
        { material: "皮革", year: "09款--13款；14款--19款；20款--", note: "门座:4门5座；尾箱不带侧包；门座:4门5座；片套:3片；尾箱不带侧包；门座:4门5座；片套:3片；尾箱不带侧包，右边带网兜.；门座:4门5座；尾箱不带侧包。；门座:4门5座；尾箱不带侧包,右边不带网兜。" },
        { material: "", year: "09款--13款", note: "" },
        { material: "", year: "14款--19款", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
      ] },
    ],
  },
  {
    name: "电动踏板",
    modelCount: 10,
    models: [
      { model: "锋兰达", variants: [
        { material: "", year: "2024+", note: "取信号方式：线夹；适配明细：2024+=线夹" },
      ] },
      { model: "格瑞维亚", variants: [
        { material: "", year: "2022+", note: "取信号方式：线夹；适配明细：2022+=线夹" },
      ] },
      { model: "汉兰达", variants: [
        { material: "", year: "2007-2014；2015-2017；2018-2021；2022+", note: "取信号方式：对插；线夹；适配明细：2007-2014=对插" },
      ] },
      { model: "皇冠陆放", variants: [
        { material: "", year: "2021+", note: "取信号方式：线夹；适配明细：2021+=线夹" },
      ] },
      { model: "卡罗拉锐放", variants: [
        { material: "", year: "2024+", note: "取信号方式：线夹；适配明细：2024+=线夹" },
      ] },
      { model: "凌放", variants: [
        { material: "", year: "2022+", note: "取信号方式：线夹；适配明细：2022+=线夹" },
      ] },
      { model: "赛那SIENNA", variants: [
        { material: "", year: "2021+", note: "取信号方式：线夹；适配明细：2021+=线夹" },
      ] },
      { model: "威兰达", variants: [
        { material: "", year: "2020+；2026", note: "取信号方式：线夹；适配明细：2020+=线夹" },
      ] },
      { model: "威飒", variants: [
        { material: "", year: "2022+", note: "取信号方式：线夹；适配明细：2022+=线夹" },
      ] },
      { model: "RAV4荣放", variants: [
        { material: "", year: "2017-2019；2020+；2026", note: "取信号方式：线夹；适配明细：2017-2019=线夹" },
      ] },
    ],
  },
  {
    name: "轮毂",
    modelCount: 9,
    models: [
      { model: "款式01", variants: [
        { material: "旋压轮毂", year: "", note: "库存:3" },
        { material: "旋压轮毂", year: "", note: "库存:40" },
        { material: "锻造轮毂", year: "支持年款", note: "库存:40；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:88；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:锥口" },
        { material: "锻造轮毂", year: "", note: "库存:112；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:锥口" },
        { material: "锻造轮毂", year: "", note: "库存:120；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:锥口" },
      ] },
      { model: "款式02", variants: [
        { material: "旋压轮毂", year: "", note: "库存:32" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:平口" },
      ] },
      { model: "款式03", variants: [
        { material: "旋压轮毂", year: "", note: "库存:8" },
        { material: "旋压轮毂", year: "", note: "库存:16" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:24；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:平口" },
      ] },
      { model: "款式04", variants: [
        { material: "旋压轮毂", year: "", note: "库存:24" },
        { material: "旋压轮毂", year: "", note: "库存:0" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:48；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:平口" },
      ] },
      { model: "款式05", variants: [
        { material: "旋压轮毂", year: "", note: "库存:16" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:平口" },
      ] },
      { model: "款式06", variants: [
        { material: "旋压轮毂", year: "", note: "库存:0" },
        { material: "旋压轮毂", year: "", note: "库存:32" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:平口" },
      ] },
      { model: "款式07", variants: [
        { material: "旋压轮毂", year: "", note: "库存:16" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:平口" },
      ] },
      { model: "款式08", variants: [
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:平口" },
      ] },
      { model: "款式09", variants: [
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:平口" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:平口" },
      ] },
    ],
  },
  {
    name: "小桌板",
    modelCount: 2,
    models: [
      { model: "铂智3X", variants: [
        { material: "", year: "", note: "移动办公/途中用餐/带娃/旅途娱乐/日常置物；桌板与灰色布艺座椅风格统一；不用时收起不占空间" },
      ] },
      { model: "海狮", variants: [
        { material: "小桌板（真皮+金属饰条）", year: "", note: "移动办公/途中用餐/带娃/旅途娱乐/日常置物；桌板与棕黑拼接真皮座椅、吸顶多媒体屏/星空顶/氛围灯豪华内饰融为一体；不用时收起不占空间" },
      ] },
    ],
  },
  {
    name: "后排娱乐屏",
    modelCount: 1,
    models: [
      { model: "铂智7", variants: [
        { material: "", year: "", note: "13.3寸超大屏幕，可前后互联，专用支架，1秒安装即插即用，8核大内存，4G+64G车规级配置。无线投屏，支持双频WiFi+蓝牙音频+内置双喇叭，HDMI+3.5mm耳机+USB+TYPE-C接口。" },
      ] },
    ],
  },
  {
    name: "吸顶电视",
    modelCount: 1,
    models: [
      { model: "格瑞维亚", variants: [
        { material: "", year: "", note: "15.6 英寸 IPS 屏，支持 4G 网络、手机投屏、U 盘视频和氛围灯；安装方式与功能以实车适配和门店核验为准。" },
      ] },
    ],
  },
];

export const TOYOTA_PROJECT_COUNT = 9;
