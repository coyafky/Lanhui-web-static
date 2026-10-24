/**
 * 哈弗 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs haval --apply`
 * 源：`src/lib/fitment/haval.ts`
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
export const havalProjects: readonly CuratedProject[] = [
  {
    name: "360软包脚垫",
    modelCount: 18,
    models: [
      { model: "赤兔", variants: [
        { material: "", year: "21款--23款", note: "360软包脚垫 ； 车型：哈弗赤兔 ； 年款：21款--23款 ； 产品编号：H2058S ； 门座：4门5座 ； 片套：3片" },
      ] },
      { model: "初恋", variants: [
        { material: "", year: "21款", note: "360软包脚垫 ； 车型：哈弗初恋 ； 年款：21款 ； 产品编号：H1971S ； 门座：4门5座 ； 片套：3片" },
      ] },
      { model: "大狗", variants: [
        { material: "", year: "20款--24款", note: "360软包脚垫 ； 车型：哈弗大狗 ； 年款：20款--24款 ； 产品编号：H1808S ； 门座：4门5座 ； 片套：3片" },
        { material: "", year: "23款--", note: "备注：插电混动版 适配燃油版" },
      ] },
      { model: "酷狗", variants: [
        { material: "", year: "22款--", note: "360软包脚垫 ； 车型：哈弗酷狗 两驱 平过桥 ； 年款：22款-- ； 产品编号：H2431S ； 门座：4门5座 ； 片套：3片" },
        { material: "", year: "22款--", note: "360软包脚垫 ； 车型：哈弗酷狗 四驱 高过桥 ； 年款：22款-- ； 产品编号：H2461S ； 门座：4门5座 ； 片套：3片" },
      ] },
      { model: "猛龙", variants: [
        { material: "", year: "23款--", note: "备注：插电混动" },
        { material: "", year: "25款--", note: "360软包脚垫 ； 车型：哈弗猛龙 汽油版 ； 年款：25款-- ； 产品编号：H3338S ； 门座：4门5座 ； 片套：3片" },
        { material: "", year: "26款--", note: "360软包脚垫 ； 车型：哈弗猛龙 PLUS 新能源 五座 ； 年款：26款-- ； 产品编号：H3496S ； 门座：4门5座 ； 片套：3片" },
        { material: "", year: "26款--", note: "360软包脚垫 ； 车型：哈弗猛龙 PLUS 新能源 七座 ； 年款：26款-- ； 产品编号：H3512S ； 门座：5门7座 ； 片套：3片" },
      ] },
      { model: "神兽", variants: [
        { material: "", year: "22款--", note: "备注：二排椅子后蹬脚鼓包6CM" },
        { material: "", year: "22款--", note: "360软包脚垫 ； 车型：哈弗神兽 四驱 高过桥 ； 年款：22款-- ； 产品编号：H2318S ； 门座：4门5座 ； 片套：3片" },
      ] },
      { model: "枭龙", variants: [
        { material: "", year: "23款--", note: "备注：插电混动" },
        { material: "", year: "23款--", note: "备注：插电混动" },
      ] },
      { model: "F5", variants: [
        { material: "", year: "18款--21款", note: "360软包脚垫 ； 车型：哈弗F5 ； 年款：18款--21款 ； 产品编号：H1217S ； 门座：4门5座 ； 片套：3片" },
      ] },
      { model: "F7", variants: [
        { material: "", year: "19款--22款", note: "备注：适用于F7X" },
      ] },
      { model: "H1", variants: [
        { material: "", year: "15款--17款", note: "备注：过桥是平的/15款红标/16-17款蓝标" },
        { material: "", year: "16款--17款", note: "备注：过桥有高度/16-17款红标" },
      ] },
      { model: "H2", variants: [
        { material: "", year: "14款--19款", note: "备注：副驾座椅下面没有出风口" },
        { material: "", year: "17款--18款", note: "360软包脚垫 ； 车型：哈弗H2S ； 年款：17款--18款 ； 产品编号：H167S ； 门座：4门5座 ； 片套：3片" },
      ] },
      { model: "H4", variants: [
        { material: "", year: "18款--19款", note: "360软包脚垫 ； 车型：哈弗H4 ； 年款：18款--19款 ； 产品编号：H1026S ； 门座：4门5座 ； 片套：3片" },
      ] },
      { model: "H5", variants: [
        { material: "", year: "10款--18款", note: "360软包脚垫 ； 车型：哈弗H5 ； 年款：10款--18款 ； 产品编号：H793S ； 门座：4门5座 ； 片套：3片" },
        { material: "", year: "23款--", note: "备注：前排座椅下不带风口" },
      ] },
      { model: "H6", variants: [
        { material: "", year: "11款--17款", note: "备注：中控台与前扶手箱为分体式" },
        { material: "", year: "17款--20款", note: "360软包脚垫 ； 车型：哈弗H6 正常版 前排分体 ； 年款：17款--20款 ； 产品编号：H672S ； 门座：4门5座 ； 片套：3片" },
        { material: "", year: "20款--23款", note: "360软包脚垫 ； 车型：哈弗H6 第三代 没有过桥 ； 年款：20款--23款 ； 产品编号：H1810S ； 门座：4门5座 ； 片套：3片" },
        { material: "", year: "21款--23款", note: "备注：适配油电混合" },
        { material: "", year: "21款--23款", note: "备注：高过桥" },
        { material: "", year: "21款--23款", note: "360软包脚垫 ； 车型：哈弗H6 国朝版 ； 年款：21款--23款 ； 产品编号：H2012S ； 门座：4门5座 ； 片套：3片" },
        { material: "", year: "15款--17款", note: "备注：中控台与前扶手箱为连体式" },
        { material: "", year: "18款--20款", note: "备注：前排内侧是绒布，上层绒布不可塞/后排座椅分体" },
        { material: "", year: "18款--20款", note: "备注：前排内侧是胶壳/后排座椅分体" },
        { material: "", year: "19款-21款", note: "备注：前排内侧是胶壳/后排座椅连体" },
        { material: "", year: "15款--18款", note: "备注：前排内侧是绒布，上层绒布不可塞" },
        { material: "", year: "19款--21款", note: "备注：前排内侧是胶壳" },
        { material: "", year: "21款--23款", note: "360软包脚垫 ； 车型：哈弗H6S 没有过桥 ； 年款：21款--23款 ； 产品编号：H2266S ； 门座：4门5座 ； 片套：3片" },
        { material: "", year: "21款--23款", note: "360软包脚垫 ； 车型：哈弗H6S 凸过桥 轻混版 ； 年款：21款--23款 ； 产品编号：H2239S ； 门座：4门5座 ； 片套：3片" },
        { material: "", year: "25款--", note: "360软包脚垫 ； 车型：哈弗H6L ； 年款：25款-- ； 产品编号：H3424S ； 门座：4门5座 ； 片套：3片" },
      ] },
      { model: "H7", variants: [
        { material: "", year: "16款--21款", note: "备注：前排内侧绒布分上下层.上层不可塞" },
        { material: "", year: "17款--19款", note: "备注：前排内侧绒布分上下层.上层不可塞" },
        { material: "", year: "17款--19款", note: "备注：前排内侧绒布分上下层.上层不可塞" },
      ] },
      { model: "H8", variants: [
        { material: "", year: "15款--17款", note: "360软包脚垫 ； 车型：哈弗H8 ； 年款：15款--17款 ； 产品编号：H668S ； 门座：4门5座 ； 片套：3片" },
      ] },
      { model: "H9", variants: [
        { material: "", year: "17款--23款", note: "备注：后排座椅外侧是绒布 24款不一样" },
        { material: "", year: "17款--23款", note: "备注：后排座椅外侧是胶壳 24款不一样" },
        { material: "", year: "24款--", note: "360软包脚垫 ； 车型：哈弗H9 原车5座 ； 年款：24款-- ； 产品编号：H3166S ； 门座：4门5座 ； 片套：3片" },
        { material: "", year: "24款--", note: "360软包脚垫 ； 车型：哈弗H9 原车7座做5座 ； 年款：24款-- ； 产品编号：H3225S ； 门座：5门7座 ； 片套：3片" },
        { material: "", year: "24款--", note: "360软包脚垫 ； 车型：哈弗H9 原车7座做7座 ； 年款：24款-- ； 产品编号：H3224S ； 门座：5门7座 ； 片套：4片" },
        { material: "", year: "15款--23款", note: "备注：24款不一样" },
        { material: "", year: "15款--23款", note: "备注：24款不一样" },
      ] },
      { model: "M6", variants: [
        { material: "", year: "17款--20款", note: "备注：前排椅子底下不带出风口" },
        { material: "", year: "17款--20款", note: "备注：前排椅子底下带出风口" },
        { material: "", year: "21款--23款", note: "360软包脚垫 ； 车型：哈弗M6 PLUS ； 年款：21款--23款 ； 产品编号：H1969S ； 门座：4门5座 ； 片套：3片" },
      ] },
    ],
  },
  {
    name: "底盘护板",
    modelCount: 18,
    models: [
      { model: "赤兔", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021-2023", note: "注意：两件套；排量或续航：1.5T；保护位置：发动机前；发动机后；安装配件或支架：异形盖板" },
      ] },
      { model: "初恋", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021", note: "注意：两件套；排量或续航：1.5T；保护位置：发动机前；发动机后；安装配件或支架：异形盖板" },
      ] },
      { model: "大狗", variants: [
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2020-2026；2023-2026", note: "注意：燃油、混动通用；排量或续航：1.5T、2.0T；1.5T；保护位置：发动机；安装配件或支架：发动机一颗异形盖板" },
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2026", note: "注意：六件套与23款猛龙通用；排量或续航：Hi4续航150；保护位置：发动机；线束1；线束2；电池；油箱；后电机" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）；发动机：145续航" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）；线路：150续航通用老款" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）" },
      ] },
      { model: "酷狗", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2022", note: "注意：两件套；排量或续航：1.5T；保护位置：发动机前；发动机后；安装配件或支架：异形盖板" },
      ] },
      { model: "猛龙", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2023-2024-2026；2026", note: "注意：六件套 通用25款枭龙max；六件套 发动机、后电机与老款通用；排量或续航：混动续航145/115/102/81/105 注意:(25年生产的车型续航150通用)；混动续航 150、200 注意:26年生产的车型续航150有续航200通用；保护位置：发动机；电池；线束1；线束2；油箱；后电机；安装配件或支架：一、油箱2颗支架 专用 二、后电机一颗支架与蓝山3号支架通用 三、发动机一颗异形盖板；线束2用星舰7续航55电池支架一颗；后电机一颗支架与蓝山3号支架通用" },
        { material: "铝镁合金2.0mm", year: "2026", note: "注意：六件套 发动机、后电机与23-26猛龙通用。；排量或续航：plus续航 147/195、145/192、191/255、188/252；保护位置：前电机；线束1；线束2；电池；油箱；后电机" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）" },
      ] },
      { model: "神兽", variants: [
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021-2023", note: "注意：燃油、混动通用；排量或续航：1.5T、2.0T；保护位置：发动机；安装配件或支架：发动机一颗异形盖板" },
      ] },
      { model: "枭龙", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2023", note: "注意：四件套；排量或续航：110续航；保护位置：发动机前；发动机后；电池；油管" },
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2023；2025", note: "注意：五件套；六件套 通用猛龙六件套；排量或续航：续航105；续航110、/165；保护位置：发动机；电池；油箱；后电机；油管；线束1；线束2；安装配件或支架：一、后电机一颗支架与蓝山3号支架通用 二、发动机1颗异形盖板" },
      ] },
      { model: "F5", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2018-2020", note: "排量或续航：1.5T；保护位置：发动机；安装配件或支架：2颗异形盖板" },
      ] },
      { model: "F7", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019-2021", note: "排量或续航：1.5T/2.0T；保护位置：发动机；安装配件或支架：2颗异形盖板" },
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019-2021", note: "排量或续航：1.5T/2.0T；保护位置：发动机；安装配件或支架：2颗异形盖板" },
      ] },
      { model: "H1", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2015；2016-2017", note: "注意：15款H1用蓝标板；排量或续航：1.5L；保护位置：发动机" },
      ] },
      { model: "H10", variants: [
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）" },
      ] },
      { model: "H2", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2014-2019", note: "排量或续航：1.5；保护位置：发动机" },
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2017；2018-2019", note: "排量或续航：1.5T；保护位置：发动机" },
      ] },
      { model: "H4", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2018-2020", note: "排量或续航：1.5T；保护位置：发动机；安装配件或支架：2颗异形盖板" },
      ] },
      { model: "H5", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2023-2024", note: "注意：三件套 柴油版水箱不能安装；排量或续航：2.0T；保护位置：水箱；发动机；变速箱" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）" },
      ] },
      { model: "H6", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2011；2012-2020；2012-2023；2016-2020；2021-2025", note: "注意：国潮版通用；燃油、混动通用；12款2.0T排量螺丝专用,需备注好年份；螺丝专用；排量或续航：1.5T/2.0T；2.0T；2.4L；2.0L；保护位置：发动机；安装配件或支架：发动机一颗异形盖板；2颗异形盖板" },
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2026", note: "注意：燃油、混动通用；油箱专用；排量或续航：1.5T、2.0T；保护位置：发动机；油箱；安装配件或支架：发动机一颗异形盖板；猛龙190MM两颗支架" },
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2022", note: "注意：燃油、混动通用；排量或续航：1.5T/2.0T；保护位置：发动机；安装配件或支架：发动机一颗异形盖板" },
      ] },
      { model: "H7", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2016-2019", note: "注意：要拆原车板；排量或续航：2.0L；保护位置：发动机；安装配件或支架：2颗异形盖板" },
      ] },
      { model: "H9", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm；铝镁合金5.0mm", year: "2024", note: "注意：五件套；排量或续航：汽油2.0T；保护位置：水箱；发动机；变速箱；分动箱；油箱；安装配件或支架：油箱支架与坦克油箱支架通用" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（源资料未细分保护部位）" },
      ] },
      { model: "M6", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2017-2023", note: "排量或续航：1.5T；保护位置：发动机；安装配件或支架：2颗异形盖板" },
      ] },
    ],
  },
  {
    name: "平面尾箱垫",
    modelCount: 17,
    models: [
      { model: "赤兔", variants: [
        { material: "", year: "21款--", note: "平面尾箱垫 ； 车型：哈弗赤兔 ； 年款：21款-- ； 产品编号：1107 ； 门座：4门5座" },
      ] },
      { model: "大狗", variants: [
        { material: "", year: "20款--", note: "平面尾箱垫 ； 车型：哈弗大狗 ； 年款：20款-- ； 产品编号：1027 ； 门座：4门5座" },
        { material: "", year: "23款--", note: "平面尾箱垫 ； 车型：哈弗二代大狗 PHEV ； 年款：23款-- ； 产品编号：1596 ； 门座：4门5座" },
      ] },
      { model: "酷狗", variants: [
        { material: "", year: "22款--", note: "备注：适配，两驱、四驱" },
      ] },
      { model: "猛龙", variants: [
        { material: "", year: "23款--", note: "备注：右侧有耳朵" },
        { material: "", year: "25款--", note: "备注：右侧带音响" },
        { material: "", year: "25款--", note: "平面尾箱垫 ； 车型：哈弗猛龙PLUS ； 年款：25款-- ； 产品编号：2385 ； 门座：4门5座" },
        { material: "", year: "25款--", note: "平面尾箱垫 ； 车型：哈弗猛龙PLUS 七座 ； 年款：25款-- ； 产品编号：2389 分体 ； 门座：5门7座" },
        { material: "", year: "25款--", note: "平面尾箱垫 ； 车型：哈弗猛龙PLUS 七座 ； 年款：25款-- ； 产品编号：2390 连体 ； 门座：5门7座" },
      ] },
      { model: "神兽", variants: [
        { material: "", year: "22款--", note: "备注：上层尾箱" },
      ] },
      { model: "枭龙", variants: [
        { material: "", year: "23款--", note: "平面尾箱垫 ； 车型：哈弗枭龙 PHEV ； 年款：23款-- ； 产品编号：1795 ； 门座：4门5座" },
        { material: "", year: "23款--", note: "平面尾箱垫 ； 车型：哈弗枭龙 MAX ； 年款：23款-- ； 产品编号：1672 ； 门座：4门5座" },
      ] },
      { model: "F5", variants: [
        { material: "", year: "19款--", note: "平面尾箱垫 ； 车型：哈弗F5 ； 年款：19款-- ； 产品编号：663 ； 门座：4门5座" },
      ] },
      { model: "F7", variants: [
        { material: "", year: "19款--", note: "平面尾箱垫 ； 车型：哈弗F7 ； 年款：19款-- ； 产品编号：650 ； 门座：4门5座" },
        { material: "", year: "19款--", note: "平面尾箱垫 ； 车型：哈弗F7X ； 年款：19款-- ； 产品编号：650 ； 门座：4门5座" },
      ] },
      { model: "H1", variants: [
        { material: "", year: "15款--16款", note: "平面尾箱垫 ； 车型：哈弗H1 ； 年款：15款--16款 ； 产品编号： ； 门座：4门5座" },
      ] },
      { model: "H2", variants: [
        { material: "", year: "14款--", note: "平面尾箱垫 ； 车型：哈弗H2 ； 年款：14款-- ； 产品编号：756 ； 门座：4门5座" },
        { material: "", year: "16款--", note: "平面尾箱垫 ； 车型：哈弗H2S ； 年款：16款-- ； 产品编号：408 ； 门座：4门5座" },
      ] },
      { model: "H4", variants: [
        { material: "", year: "18款--", note: "备注：3片" },
      ] },
      { model: "H5", variants: [
        { material: "", year: "11款--18款", note: "平面尾箱垫 ； 车型：哈弗H5 ； 年款：11款--18款 ； 产品编号：541 ； 门座：4门5座" },
        { material: "", year: "23款--", note: "平面尾箱垫 ； 车型：哈弗H5 ； 年款：23款-- ； 产品编号：1784 ； 门座：4门5座" },
      ] },
      { model: "H6", variants: [
        { material: "", year: "11款--17款", note: "平面尾箱垫 ； 车型：哈弗H6 主副驾连体运动版/经典版 ； 年款：11款--17款 ； 产品编号：166 ； 门座：4门5座" },
        { material: "", year: "17款--", note: "备注：2.0T" },
        { material: "", year: "17款--19款", note: "平面尾箱垫 ； 车型：哈弗H6 正常版 前排分体 ； 年款：17款--19款 ； 产品编号：819 ； 门座：4门5座" },
        { material: "", year: "21款--", note: "平面尾箱垫 ； 车型：哈弗H6 正常版 三代 ； 年款：21款-- ； 产品编号：878 ； 门座：4门5座" },
        { material: "", year: "21款--", note: "平面尾箱垫 ； 车型：哈弗H6 国潮版 ； 年款：21款-- ； 产品编号：1028 ； 门座：4门5座" },
        { material: "", year: "15款--19款", note: "平面尾箱垫 ； 车型：哈弗H6 运动版 ； 年款：15款--19款 ； 产品编号：261 ； 门座：4门5座" },
        { material: "", year: "15款--18款", note: "平面尾箱垫 ； 车型：哈弗H6 COUPE ； 年款：15款--18款 ； 产品编号：198 ； 门座：4门5座" },
        { material: "", year: "19款--", note: "平面尾箱垫 ； 车型：哈弗H6 COUPE ； 年款：19款-- ； 产品编号：685 ； 门座：4门5座" },
        { material: "", year: "21款--23款", note: "平面尾箱垫 ； 车型：哈弗H6S 轻混版 ； 年款：21款--23款 ； 产品编号：1921 ； 门座：4门5座" },
        { material: "", year: "25款--", note: "平面尾箱垫 ； 车型：哈弗H6L ； 年款：25款-- ； 产品编号：2334 ； 门座：4门5座" },
      ] },
      { model: "H7", variants: [
        { material: "", year: "16款--", note: "平面尾箱垫 ； 车型：哈弗H7 原车5座 ； 年款：16款-- ； 产品编号：318 ； 门座：4门5座" },
        { material: "", year: "17款--", note: "平面尾箱垫 ； 车型：哈弗H7L 原车7座做5座 ； 年款：17款-- ； 产品编号：1221 ； 门座：5门7座" },
        { material: "", year: "17款--", note: "平面尾箱垫 ； 车型：哈弗H7L 原车7座做7座 ； 年款：17款-- ； 产品编号： ； 门座：5门7座" },
      ] },
      { model: "H8", variants: [
        { material: "", year: "15款--", note: "平面尾箱垫 ； 车型：哈弗H8 ； 年款：15款-- ； 产品编号：167 ； 门座：4门5座" },
      ] },
      { model: "H9", variants: [
        { material: "", year: "17款-23款", note: "平面尾箱垫 ； 车型：哈弗H9 原车5座 ； 年款：17款-23款 ； 产品编号：707 ； 门座：4门5座" },
        { material: "", year: "24款--", note: "平面尾箱垫 ； 车型：哈弗H9 原车5座 ； 年款：24款-- ； 产品编号：2125 ； 门座：4门5座" },
        { material: "", year: "14款--19款", note: "平面尾箱垫 ； 车型：哈弗H9 原车7座做5座 ； 年款：14款--19款 ； 产品编号：380 ； 门座：5门7座" },
        { material: "", year: "14款--19款", note: "平面尾箱垫 ； 车型：哈弗H9 原车7座做7座 ； 年款：14款--19款 ； 产品编号： ； 门座：5门7座" },
        { material: "", year: "20款-23款", note: "平面尾箱垫 ； 车型：哈弗H9 原车7座做5座 ； 年款：20款-23款 ； 产品编号：854 分体、三排拉手大 ； 门座：5门7座" },
      ] },
      { model: "M6", variants: [
        { material: "", year: "21款--", note: "平面尾箱垫 ； 车型：哈弗M6 PLUS ； 年款：21款-- ； 产品编号：1031 ； 门座：4门5座" },
        { material: "", year: "17款--", note: "平面尾箱垫 ； 车型：哈弗M6 ； 年款：17款-- ； 产品编号：821 ； 门座：4门5座" },
      ] },
    ],
  },
  {
    name: "360全包尾箱",
    modelCount: 14,
    models: [
      { model: "大狗", variants: [
        { material: "", year: "20款--", note: "备注：尾箱不带侧包" },
        { material: "", year: "23款--", note: "备注：尾箱不带侧包" },
      ] },
      { model: "酷狗", variants: [
        { material: "", year: "22款--", note: "备注：尾箱不带侧包；适配，两驱、四驱" },
      ] },
      { model: "猛龙", variants: [
        { material: "", year: "23款--", note: "备注：尾箱不带侧包 右侧有耳朵" },
      ] },
      { model: "神兽", variants: [
        { material: "", year: "22款--", note: "备注：尾箱不带侧包" },
      ] },
      { model: "枭龙", variants: [
        { material: "", year: "23款--", note: "备注：插电混动" },
        { material: "", year: "23款--", note: "360全包尾箱 ； 车型：哈弗枭龙 MAX ； 年款：23款-- ； 产品编号：BWH795 ； 门座：4门5座" },
      ] },
      { model: "F5", variants: [
        { material: "", year: "19款--", note: "360全包尾箱 ； 车型：哈弗F5 ； 年款：19款-- ； 产品编号：WH270 ； 门座：4门5座" },
      ] },
      { model: "F7", variants: [
        { material: "", year: "19款--", note: "360全包尾箱 ； 车型：哈弗F7X ； 年款：19款-- ； 产品编号：WH268 ； 门座：4门5座" },
      ] },
      { model: "H2", variants: [
        { material: "", year: "14款--", note: "备注：尾箱不带侧包" },
      ] },
      { model: "H4", variants: [
        { material: "", year: "18款--", note: "备注：尾箱不带侧包" },
      ] },
      { model: "H5", variants: [
        { material: "", year: "23款--", note: "备注：尾箱不带侧包" },
      ] },
      { model: "H6", variants: [
        { material: "", year: "18款--", note: "备注：尾箱不带侧包" },
        { material: "", year: "19款--", note: "360全包尾箱 ； 车型：哈弗H6 COUPE ； 年款：19款-- ； 产品编号：WH214 ； 门座：4门5座 ； 片套：5片" },
        { material: "", year: "17款--20款", note: "备注：尾箱不带侧包" },
        { material: "", year: "21款--", note: "备注：尾箱不带侧包" },
        { material: "", year: "21款--", note: "备注：尾箱不带侧包" },
        { material: "", year: "21款--", note: "备注：尾箱不带侧包" },
      ] },
      { model: "H7", variants: [
        { material: "", year: "16款--", note: "360全包尾箱 ； 车型：哈弗H7 原车5座 ； 年款：16款-- ； 产品编号：WH215 ； 门座：4门5座 ； 片套：8片" },
      ] },
      { model: "H9", variants: [
        { material: "", year: "15款--", note: "备注：尾箱不带侧包" },
        { material: "", year: "15款--", note: "备注：尾箱不带侧包" },
      ] },
      { model: "M6", variants: [
        { material: "", year: "21款--", note: "备注：尾箱不带侧包" },
      ] },
    ],
  },
  {
    name: "电动踏板",
    modelCount: 12,
    models: [
      { model: "赤兔", variants: [
        { material: "", year: "2022+", note: "取信号方式：线夹；适配明细：2022+=线夹" },
      ] },
      { model: "初恋", variants: [
        { material: "", year: "2021+", note: "取信号方式：线夹；适配明细：2021+=线夹" },
      ] },
      { model: "大狗", variants: [
        { material: "", year: "2021+；2023", note: "取信号方式：线夹；适配明细：2021+=线夹 ； 2023=线夹" },
      ] },
      { model: "酷狗", variants: [
        { material: "", year: "2022+", note: "取信号方式：线夹；适配明细：2022+=线夹" },
      ] },
      { model: "猛龙", variants: [
        { material: "", year: "2023+", note: "取信号方式：线夹；适配明细：2023+=线夹" },
      ] },
      { model: "神兽", variants: [
        { material: "", year: "2021+；2022+", note: "取信号方式：线夹；适配明细：2021+=线夹 ； 2022+=线夹" },
      ] },
      { model: "枭龙", variants: [
        { material: "", year: "2023+；2025", note: "取信号方式：线夹；适配明细：2023+=线夹 ； 2025=线夹" },
        { material: "", year: "2023", note: "取信号方式：线夹；适配明细：2023=线夹" },
      ] },
      { model: "F5", variants: [
        { material: "", year: "2018+", note: "取信号方式：线夹；适配明细：2018+=线夹" },
      ] },
      { model: "F7", variants: [
        { material: "", year: "2018+", note: "取信号方式：线夹；适配明细：2018+=线夹" },
      ] },
      { model: "H6", variants: [
        { material: "", year: "2017+；2021+；2017-2020；2022+", note: "取信号方式：线夹；对插；适配明细：2017+=线夹 ； 2021+=对插 ； 2017-2020=对插 ； 2021+=线夹 ； 2021+=线夹 ； 2022+=线夹" },
        { material: "", year: "2021+", note: "取信号方式：线夹；适配明细：2021+=线夹" },
        { material: "", year: "2017-2018；2019+", note: "取信号方式：对插；线夹；适配明细：2017-2018=对插 ； 2019+=线夹" },
        { material: "", year: "2026", note: "取信号方式：线夹；适配明细：2026=线夹" },
      ] },
      { model: "H9", variants: [
        { material: "", year: "2015-2019；2020-2022；2024+", note: "取信号方式：线夹；适配明细：2015-2019=线夹 ； 2020-2022=线夹 ； 2024+=线夹" },
      ] },
      { model: "M6", variants: [
        { material: "", year: "2017+", note: "取信号方式：对插；适配明细：2017+=对插" },
        { material: "", year: "2021+", note: "取信号方式：线夹；适配明细：2021+=线夹" },
      ] },
    ],
  },
];

export const HAVAL_PROJECT_COUNT = 5;
