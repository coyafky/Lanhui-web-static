/**
 * 奔驰 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs mercedes --apply`
 * 源：`src/lib/fitment/mercedes.ts`
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
export const mercedesProjects: readonly CuratedProject[] = [
  {
    name: "平面尾箱垫",
    modelCount: 51,
    models: [
      { model: "A200L", variants: [
        { material: "186", year: "13款--18款", note: "" },
        { material: "654", year: "19款--", note: "" },
        { material: "563", year: "14款--18款", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "629", year: "19款--20款", note: "" },
        { material: "", year: "20款--23款", note: "" },
        { material: "31", year: "14款--19款", note: "" },
        { material: "877", year: "20款--", note: "" },
      ] },
      { model: "A级", variants: [
        { material: "皮革", year: "13款--18款；14款--18款；14款--19款；19款--；19款--20款；20款--；20款--23款", note: "门座:4门5座；门座:4门5座；左右没有台阶；门座:4门5座；左右有台阶" },
      ] },
      { model: "AMG GT", variants: [
        { material: "", year: "15款--19款；19款--", note: "" },
      ] },
      { model: "AMG-GT", variants: [
        { material: "766", year: "15款--19款", note: "" },
        { material: "769", year: "19款--", note: "" },
      ] },
      { model: "B200", variants: [
        { material: "566", year: "09款--11款", note: "" },
        { material: "210", year: "12款--19款", note: "" },
        { material: "709上层", year: "20款--", note: "" },
      ] },
      { model: "B级", variants: [
        { material: "皮革", year: "09款--11款；12款--19款；20款--", note: "门座:4门5座" },
      ] },
      { model: "C260L", variants: [
        { material: "529圆头", year: "08款--13款", note: "" },
        { material: "27号左边带网兜", year: "14款--19款", note: "" },
        { material: "487号左右带网兜", year: "14款--18款", note: "" },
        { material: "524 左右不带网兜", year: "19款--", note: "" },
        { material: "524 左右不带网兜", year: "19款--21款", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "305 右边带耳朵", year: "15款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "746", year: "16款--", note: "" },
        { material: "", year: "16款--19款", note: "" },
        { material: "34号国产", year: "16款--", note: "" },
        { material: "534", year: "19款--22款", note: "" },
        { material: "", year: "16款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "C级", variants: [
        { material: "皮革", year: "08款--13款；14款--18款；14款--19款；15款--；16款--；16款--19款；19款--；19款--21款；19款--22款；22款--；23款--；24款--", note: "门座:4门5座；门座:2门4座；门座:5门5座；尾箱分进口/国产；门座:2门2座；门座:4门5座；4片" },
      ] },
      { model: "CLA", variants: [
        { material: "皮革", year: "13款--19款；20款--；22款--", note: "门座:4门5座" },
      ] },
      { model: "CLA200", variants: [
        { material: "32", year: "13款--19款", note: "" },
        { material: "860", year: "20款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "CLE", variants: [
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "CLE 硬顶轿跑", variants: [
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "E300L", variants: [
        { material: "809", year: "05款--09款", note: "" },
        { material: "372圆头", year: "09款--12款", note: "" },
        { material: "584", year: "17款--", note: "" },
        { material: "28", year: "09款--16款", note: "" },
        { material: "", year: "17款--", note: "" },
        { material: "1119 圆头", year: "09款--16款", note: "" },
        { material: "29平头", year: "09款--16款", note: "" },
        { material: "248", year: "16款--20款", note: "" },
        { material: "917", year: "21款--23款", note: "" },
        { material: "", year: "21款--23款", note: "" },
        { material: "", year: "24款--", note: "" },
        { material: "", year: "24款--", note: "" },
        { material: "35", year: "16款--19款", note: "" },
        { material: "570", year: "20款--", note: "" },
        { material: "714分体", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "21款--", note: "" },
        { material: "906", year: "20款--", note: "" },
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "E级", variants: [
        { material: "皮革", year: "05款--09款；09款--12款；09款--16款；16款--19款；16款--20款；17款--；20款--；21款--；21款--23款；24款--", note: "门座:4门5座；门座:2门4座；门座:2门4座；右边没有网兜；门座:4门5座；轿跑不适配；门座:5门7座；门座:4门5座；前面有胶壳不突出；门座:4门5座；背板不带台阶左侧不带网兜左侧带置物盒" },
      ] },
      { model: "EQA", variants: [
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "EQB", variants: [
        { material: "皮革", year: "21款--", note: "门座:5门7座" },
      ] },
      { model: "EQB260", variants: [
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "EQC", variants: [
        { material: "", year: "20款--", note: "" },
        { material: "861", year: "20款--", note: "" },
      ] },
      { model: "EQE", variants: [
        { material: "", year: "22款--；23款--", note: "" },
      ] },
      { model: "EQE EV 轿车", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "EQE SUV", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "EQS", variants: [
        { material: "", year: "22款--；23款--", note: "" },
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "EQS SUV", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "G级", variants: [
        { material: "", year: "13款--18款；19款--", note: "" },
      ] },
      { model: "G级 二排带杯架", variants: [
        { material: "404", year: "13款--18款", note: "" },
      ] },
      { model: "G级/适配右tai", variants: [
        { material: "558", year: "19款--", note: "" },
      ] },
      { model: "GL", variants: [
        { material: "皮革", year: "06款--12款；13款--19款", note: "门座:5门7座；门座:5门7座；GLS GL通用" },
        { material: "521", year: "06款--12款", note: "" },
        { material: "982", year: "06款--12款", note: "" },
        { material: "30连体", year: "13款--19款", note: "" },
        { material: "211", year: "13款--19款", note: "" },
      ] },
      { model: "GLB", variants: [
        { material: "", year: "20款--", note: "平面尾箱垫" },
      ] },
      { model: "GLB200", variants: [
        { material: "773", year: "20款--", note: "" },
        { material: "905 分体", year: "20款--", note: "" },
        { material: "880", year: "20款--", note: "" },
      ] },
      { model: "GLC", variants: [
        { material: "皮革", year: "23款--", note: "门座:4门5座；门座:5门7座" },
      ] },
      { model: "GLC260L", variants: [
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "GLK", variants: [
        { material: "", year: "09款--17款", note: "" },
      ] },
      { model: "GLK级", variants: [
        { material: "251", year: "09款--17款", note: "" },
      ] },
      { model: "GLS", variants: [
        { material: "皮革", year: "21款--；24款--", note: "门座:4门5座；门座:4门5座；带冰箱 墨西哥版" },
        { material: "", year: "21款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "ML", variants: [
        { material: "皮革", year: "05款--11款；12款--15款", note: "门座:4门5座" },
        { material: "26", year: "05款--11款", note: "" },
        { material: "226", year: "12款--15款", note: "" },
      ] },
      { model: "R级", variants: [
        { material: "", year: "06款--；06款--18款", note: "R级6座7座一样；适配；7座" },
      ] },
      { model: "R级 原车6座做4座", variants: [
        { material: "1425 分体", year: "06款--18款", note: "" },
        { material: "", year: "06款--18款", note: "" },
      ] },
      { model: "R级 原车7座做7座", variants: [
        { material: "36七座", year: "06款--", note: "" },
      ] },
      { model: "S450L", variants: [
        { material: "", year: "99款--05款", note: "" },
        { material: "273不带冰箱", year: "05款--13款", note: "" },
        { material: "872", year: "14款--20款", note: "" },
        { material: "870", year: "14款--20款", note: "" },
        { material: "33长版", year: "14款--20款", note: "" },
        { material: "228短版", year: "14款--20款", note: "" },
        { material: "", year: "14款--20款", note: "" },
        { material: "973", year: "21款--", note: "" },
        { material: "", year: "15款--20款", note: "" },
        { material: "", year: "21款--", note: "" },
        { material: "", year: "06款--10款", note: "" },
        { material: "40", year: "11款--17款", note: "" },
        { material: "612", year: "18款--", note: "" },
        { material: "735双针分体", year: "20款--", note: "" },
        { material: "792", year: "20款--", note: "" },
      ] },
      { model: "S级", variants: [
        { material: "皮革", year: "05款--13款；06款--10款；11款--17款；14款--20款；15款--20款；18款--；20款--；21款--；99款--05款", note: "门座:4门5座；门座:4门4座；门座:4门5座；与S级L一样；门座:4门5座；背板前没有胶壳 左侧有网兜；门座:5门7座；门座:4门5座；适配；迈巴赫S级（S580不同)；门座:4门4座；左侧带音响，右侧带网兜" },
      ] },
      { model: "SL级", variants: [
        { material: "", year: "16款--", note: "" },
      ] },
      { model: "SMART 精灵#3", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "SMART 精灵#5", variants: [
        { material: "2343上层", year: "24款-25款", note: "" },
        { material: "2344下层", year: "24款-25款", note: "" },
        { material: "2345上层", year: "26款--", note: "" },
      ] },
      { model: "smart forfour", variants: [
        { material: "", year: "16款--", note: "" },
      ] },
      { model: "SMART forfour", variants: [
        { material: "666", year: "16款--", note: "" },
      ] },
      { model: "smart fortwo", variants: [
        { material: "", year: "15款--", note: "" },
      ] },
      { model: "SMART fortwo", variants: [
        { material: "", year: "15款--", note: "" },
      ] },
      { model: "smart精灵#1", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "smart精灵#1", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "smart精灵#3", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "smart精灵#5", variants: [
        { material: "", year: "24款-25款；26款--", note: "" },
      ] },
    ],
  },
  {
    name: "轮毂",
    modelCount: 45,
    models: [
      { model: "款式01", variants: [
        { material: "", year: "", note: "库存:32" },
        { material: "锻造轮毂", year: "", note: "库存:46；特殊:长螺丝 / GZM801 / 3个" },
        { material: "锻造轮毂", year: "", note: "库存:36；特殊:长螺丝 / GZM801 / 14" },
        { material: "锻造轮毂", year: "", note: "库存:52；特殊:长螺丝 / GZM801 / 22" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
      ] },
      { model: "款式02", variants: [
        { material: "", year: "", note: "库存:8" },
        { material: "锻造轮毂", year: "", note: "库存:136；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:28；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:12；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
      ] },
      { model: "款式03", variants: [
        { material: "", year: "", note: "库存:24" },
        { material: "锻造轮毂", year: "", note: "库存:70；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:32；特殊:长螺丝 / GZM805 / 12个" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
      ] },
      { model: "款式04", variants: [
        { material: "", year: "", note: "库存:0" },
        { material: "锻造轮毂", year: "", note: "库存:88；特殊:长螺丝 / OEBC01 / 4个" },
      ] },
      { model: "款式05", variants: [
        { material: "", year: "", note: "库存:8" },
        { material: "", year: "", note: "库存:16" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "锻造轮毂", year: "", note: "库存:32；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:48；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:56；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:12；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:12；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:24；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:12；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
      ] },
      { model: "款式06", variants: [
        { material: "", year: "", note: "库存:16" },
        { material: "", year: "", note: "库存:24" },
        { material: "", year: "", note: "库存:40" },
        { material: "", year: "", note: "库存:24" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "锻造轮毂", year: "", note: "库存:24；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:24；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
      ] },
      { model: "款式07", variants: [
        { material: "", year: "", note: "库存:32" },
        { material: "", year: "", note: "库存:0" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:24；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:12；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
      ] },
      { model: "款式08", variants: [
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:8" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:24" },
        { material: "", year: "", note: "库存:8" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:20" },
        { material: "", year: "", note: "库存:2" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:16" },
        { material: "", year: "", note: "库存:20" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:24；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:24；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:24；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
      ] },
      { model: "款式09", variants: [
        { material: "", year: "", note: "库存:0" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
      ] },
      { model: "款式10", variants: [
        { material: "", year: "", note: "库存:48" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:8" },
        { material: "", year: "", note: "库存:32" },
        { material: "", year: "", note: "库存:20" },
        { material: "", year: "", note: "库存:88" },
        { material: "", year: "", note: "库存:16" },
        { material: "", year: "", note: "库存:16" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:24" },
        { material: "", year: "", note: "库存:28" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:8" },
        { material: "", year: "", note: "库存:24" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
      ] },
      { model: "款式11", variants: [
        { material: "", year: "", note: "库存:16" },
        { material: "", year: "", note: "库存:40" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:24" },
        { material: "", year: "", note: "库存:16" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:24" },
        { material: "", year: "", note: "库存:24" },
        { material: "", year: "", note: "库存:16" },
        { material: "", year: "", note: "库存:8" },
        { material: "", year: "", note: "库存:2" },
        { material: "", year: "", note: "库存:16" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
      ] },
      { model: "款式12", variants: [
        { material: "", year: "", note: "库存:0" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
      ] },
      { model: "款式13", variants: [
        { material: "", year: "", note: "库存:0" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
      ] },
      { model: "款式14", variants: [
        { material: "", year: "", note: "库存:0" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
      ] },
      { model: "款式15", variants: [
        { material: "", year: "", note: "库存:4" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:12；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
      ] },
      { model: "款式16", variants: [
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
      ] },
      { model: "款式17", variants: [
        { material: "", year: "", note: "库存:16" },
        { material: "", year: "", note: "库存:0" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
      ] },
      { model: "款式18", variants: [
        { material: "", year: "", note: "库存:8" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:80" },
        { material: "", year: "", note: "库存:24" },
        { material: "", year: "", note: "库存:12" },
        { material: "", year: "", note: "库存:0" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
      ] },
      { model: "款式19", variants: [
        { material: "", year: "", note: "库存:48" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
      ] },
      { model: "款式20", variants: [
        { material: "", year: "", note: "库存:14" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
      ] },
      { model: "款式21", variants: [
        { material: "", year: "", note: "库存:0" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:32；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:44；特殊:长螺丝 / 2刻字" },
        { material: "锻造轮毂", year: "", note: "库存:24；特殊:长螺丝 / 4刻字" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:长螺丝" },
      ] },
      { model: "款式22", variants: [
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:1" },
        { material: "", year: "", note: "库存:2" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:12；特殊:长螺丝" },
      ] },
      { model: "款式23", variants: [
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:48" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:0" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:12；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:12；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
      ] },
      { model: "款式24", variants: [
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
      ] },
      { model: "款式25", variants: [
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:24；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:12；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:12；特殊:长螺丝" },
      ] },
      { model: "款式26", variants: [
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
      ] },
      { model: "款式27", variants: [
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
      ] },
      { model: "款式28", variants: [
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
      ] },
      { model: "款式29", variants: [
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
      ] },
      { model: "款式30", variants: [
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:12；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:12；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
      ] },
      { model: "款式31", variants: [
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
      ] },
      { model: "款式32", variants: [
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
      ] },
      { model: "款式33", variants: [
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
      ] },
      { model: "款式34", variants: [
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:短螺丝" },
      ] },
      { model: "款式35", variants: [
        { material: "锻造轮毂", year: "", note: "库存:12；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:16；特殊:长螺丝" },
      ] },
      { model: "款式36", variants: [
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:4；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
      ] },
      { model: "款式37", variants: [
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:短螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
      ] },
      { model: "款式38", variants: [
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
      ] },
      { model: "款式39", variants: [
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
      ] },
      { model: "款式40", variants: [
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
      ] },
      { model: "款式41", variants: [
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
      ] },
      { model: "款式42", variants: [
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
      ] },
      { model: "款式43", variants: [
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
      ] },
      { model: "款式44", variants: [
        { material: "锻造轮毂", year: "", note: "库存:0；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
        { material: "锻造轮毂", year: "", note: "库存:8；特殊:长螺丝" },
      ] },
      { model: "通用适配", variants: [
        { material: "", year: "", note: "库存:8" },
        { material: "", year: "", note: "库存:40" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:8" },
        { material: "", year: "", note: "库存:12" },
        { material: "", year: "", note: "库存:8" },
        { material: "", year: "", note: "库存:2" },
        { material: "", year: "", note: "库存:8" },
        { material: "", year: "", note: "库存:16" },
        { material: "", year: "", note: "库存:24" },
        { material: "", year: "", note: "库存:0" },
        { material: "", year: "", note: "库存:48" },
        { material: "", year: "", note: "库存:20" },
      ] },
    ],
  },
  {
    name: "360软包脚垫",
    modelCount: 43,
    models: [
      { model: "威霆", variants: [
        { material: "", year: "10款--11款；10款--16款；11款--15款；16款--18款；16款--21款；16款--23款", note: "前排不带扶手 二三排三根滑道/三排座椅连体；二三排轨道相连/二三排滑道中间宽度一样宽；二三排轨道相连/二三排滑道中间宽度不一样宽；前排带扶手 第二第三排3根滑道 二排出风口是长条形；没有扶手 二排出风口是长条形 三条轨道；二排座椅连体，二三排滑道分开；二排两个单人位中间是过道" },
      ] },
      { model: "威霆 MPV", variants: [
        { material: "", year: "16款--21款", note: "" },
        { material: "", year: "16款--23款", note: "" },
      ] },
      { model: "威霆 MPV 不盖滑道", variants: [
        { material: "", year: "10款--11款", note: "" },
        { material: "", year: "11款--15款", note: "" },
        { material: "", year: "10款--16款", note: "" },
        { material: "", year: "16款--18款", note: "" },
        { material: "", year: "16款--18款", note: "" },
      ] },
      { model: "唯雅诺", variants: [
        { material: "", year: "06款--10款；10款--16款；11款--16款", note: "前排不带扶手箱；前排不带扶手/二三排滑道相连不一样宽/滑道可盖可不盖；前排不带扶手/四根滑道中间一样宽；前排不带扶手/二三排滑道分开" },
      ] },
      { model: "唯雅诺 MPV", variants: [
        { material: "", year: "11款--16款", note: "" },
        { material: "", year: "10款--16款", note: "" },
      ] },
      { model: "唯雅诺 MPV 不盖滑道", variants: [
        { material: "", year: "06款--10款", note: "" },
        { material: "", year: "10款--16款", note: "" },
      ] },
      { model: "A级", variants: [
        { material: "皮革/丝圈", year: "09款--12款；13款--18款；15款--19款；19款--23款；20款--23款", note: "门座:4门5座；片套:3片" },
      ] },
      { model: "AMG GT", variants: [
        { material: "", year: "15款--19款；19款--23款", note: "有过桥" },
      ] },
      { model: "B级", variants: [
        { material: "皮革/丝圈", year: "09款--11款；12款--19款；20款--23款；20款--24款", note: "门座:4门5座；片套:3片；过桥面有弧度；门座:4门5座；片套:3片；过桥面是平的；门座:4门5座；片套:3片；门座:5门7座；片套:3片；门座:5门7座；片套:4片" },
      ] },
      { model: "C级", variants: [
        { material: "皮革/丝圈", year: "08款--14款；10款--14款；12款--13款；14款--18款；14款--21款；15款--21款；16款--19款；16款--20款；16款--23款；19款--21款；19款--22款；20款--22款；22款--24款；23款--；24款--", note: "门座:4门5座；片套:3片；14款有新老款.下单注意区分；门座:4门5座；片套:3片；门座:2门4座；片套:3片；门座:4门5座；片套:3片；适配：插电混合动力 副驾网兜可开可以不开；门座:2门2座；片套:2片；门座:4门5座；片套:3片；GLC轿跑共用，尾箱不同 24款不一样；门座:4门5座；片套:4片" },
      ] },
      { model: "CLA", variants: [
        { material: "皮革/丝圈", year: "14款--19款；20款--23款", note: "门座:4门5座；片套:3片" },
      ] },
      { model: "CLE", variants: [
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "E300L", variants: [
        { material: "", year: "24款--", note: "" },
        { material: "", year: "24款--", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "E级", variants: [
        { material: "皮革/丝圈", year: "05款--09款；09款--13款；09款--16款；10款--12款；10款--16款；12款--15款；14款--16款；15款--19款；16款--19款；17款--23款；20款；20款--23款；20款--24款；21款--23款；24款--", note: "前排座椅底出风口是条形 后排座椅是电动" },
      ] },
      { model: "EQA", variants: [
        { material: "", year: "21款--23款", note: "纯电动" },
      ] },
      { model: "EQB", variants: [
        { material: "皮革/丝圈", year: "21款--23款", note: "门座:5门7座；片套:4片；适配5位车 纯电动；门座:5门7座；片套:4片；纯电动" },
      ] },
      { model: "EQC", variants: [
        { material: "", year: "20款--23款", note: "纯电动" },
      ] },
      { model: "EQE", variants: [
        { material: "", year: "22款--23款；23款--", note: "二排座椅下方有出风口 纯电动；二排座椅下没有出风口 纯电动；纯电动" },
      ] },
      { model: "EQS", variants: [
        { material: "", year: "22款--；23款--", note: "纯电动" },
      ] },
      { model: "G级", variants: [
        { material: "", year: "10款--18款；19款--23款；20款--23款", note: "" },
        { material: "", year: "10款--18款", note: "" },
        { material: "", year: "19款--23款", note: "" },
      ] },
      { model: "G级 右呔", variants: [
        { material: "", year: "20款--23款", note: "" },
      ] },
      { model: "GL", variants: [
        { material: "皮革/丝圈", year: "06款--12款；13款--16款", note: "门座:5门7座；片套:3片；门座:5门7座；片套:4片" },
      ] },
      { model: "GLC", variants: [
        { material: "皮革/丝圈", year: "23款--", note: "门座:4门5座；片套:3片；门座:5门7座；片套:4片" },
      ] },
      { model: "GLE", variants: [
        { material: "皮革/丝圈", year: "24款--", note: "门座:4门5座；片套:3片；扶手箱后端不带水杯架 二排座椅下无滑道" },
      ] },
      { model: "GLK", variants: [
        { material: "", year: "08款--16款", note: "" },
      ] },
      { model: "GLS", variants: [
        { material: "皮革/丝圈", year: "16款--19款；21款--23款；24款--", note: "门座:5门7座；片套:4片；右钛车；门座:4门4座；片套:4片；后排不带杯架；门座:4门4座；片套:4片；后排不带杯架,后排座椅下面带出风口。；门座:4门5座；片套:3片；扶手箱后端带水杯架，后排座椅下面带出风口。；门座:4门5座；片套:3片；副驾内侧不带网兜 墨西哥版" },
        { material: "", year: "21款--23款", note: "" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "ML", variants: [
        { material: "皮革/丝圈", year: "05款--11款；12款--15款", note: "门座:4门5座；片套:3片；门座:4门5座；片套:3片；港版右呔；门座:4门5座；片套:3片；适用于巴博斯M级" },
      ] },
      { model: "R级", variants: [
        { material: "", year: "06款--18款", note: "二排中间带小椅子；二排中间带扶手箱；二排中间不带扶手箱" },
      ] },
      { model: "S级", variants: [
        { material: "皮革/丝圈", year: "06款--13款；07款--10款；11款--17款；12款--17款；14款--20款；15款--20款；16款--19款；18款--23款；20款--24款；21款--23款；21款--24款；99款--05款", note: "门座:4门5座；片套:3片；门座:4门4座；片套:4片；主驾踏板左侧有喇叭；门座:4门4座；片套:4片；主驾踏板左侧无喇叭；门座:4门4座；片套:4片；门座:4门5座；片套:4片；门座:5门7座；片套:3片；门座:5门7座；片套:4片；门座:4门5座；片套:3片；前排座椅底没有出风口；门座:5门7座；片套:3片；扶手箱后端不带水杯架；门座:5门7座；片套:4片；扶手箱后端不带水杯架 三排不带出风口；门座:5门7座；片套:3片；扶手箱后端带水杯架；门座:5门7座；片套:4片；扶手箱后端带水杯架；门座:5门7座；片套:4片；扶手箱后端不带水杯架；门座:5门6座；片套:3片；扶手箱后端带水杯架；门座:5门6座；片套:4片；扶手箱后端带水杯架；门座:4门5座；片套:3片；4座不同，前排椅子底下带音响 。；门座:4门5座；片套:3片；4座不同，前排椅子底下不带音响 。；门座:4门4座；片套:3片；门座:4门5座；片套:3片；适配；350" },
      ] },
      { model: "SMART 精灵#1", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "SMART 精灵#3", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "SMART 精灵#5", variants: [
        { material: "", year: "24款-25款", note: "" },
        { material: "", year: "26款--", note: "" },
      ] },
      { model: "smart forfour", variants: [
        { material: "", year: "16款--18款", note: "" },
      ] },
      { model: "SMART forfour", variants: [
        { material: "", year: "16款--18款", note: "" },
      ] },
      { model: "smart fortwo", variants: [
        { material: "", year: "11款--15款；15款--19款", note: "油门坐地式 前排内侧带杯架；油门悬挂式" },
      ] },
      { model: "SMART fortwo", variants: [
        { material: "", year: "11款--15款", note: "" },
        { material: "", year: "15款--19款", note: "" },
      ] },
      { model: "smart精灵#1", variants: [
        { material: "", year: "22款--", note: "精灵#3不同" },
      ] },
      { model: "smart精灵#3", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "smart精灵#5", variants: [
        { material: "", year: "24款-25款；26款--", note: "纯电；插电混动" },
      ] },
      { model: "V260 低配 MPV", variants: [
        { material: "", year: "16款--23款", note: "" },
      ] },
      { model: "V260 高配 MPV", variants: [
        { material: "", year: "16款--23款", note: "" },
      ] },
      { model: "V260L MPV", variants: [
        { material: "", year: "16款--23款", note: "" },
      ] },
      { model: "V级", variants: [
        { material: "", year: "16款--23款", note: "前排不带扶手箱/滑道可盖可不盖；前排带扶手箱/滑道可盖可不盖" },
      ] },
    ],
  },
  {
    name: "360全包尾箱",
    modelCount: 36,
    models: [
      { model: "A200L", variants: [
        { material: "", year: "13款--18款", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "A级", variants: [
        { material: "皮革", year: "13款--18款；20款--", note: "门座:4门5座；门座:4门5座；片套:6片；靠背带卡扣" },
      ] },
      { model: "B200", variants: [
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "B级", variants: [
        { material: "皮革", year: "20款--", note: "门座:4门5座；门座:4门5座；片套:6片；门座:5门7座；片套:8片" },
      ] },
      { model: "C260L", variants: [
        { material: "", year: "19款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "16款--", note: "" },
        { material: "", year: "16款--", note: "" },
        { material: "", year: "19款--22款", note: "" },
      ] },
      { model: "C级", variants: [
        { material: "皮革", year: "16款--；19款--；19款--22款；20款--；23款--", note: "门座:4门5座；片套:6片；门座:4门5座；门座:4门5座；片套:8片" },
      ] },
      { model: "CLA", variants: [
        { material: "皮革", year: "22款--", note: "门座:4门5座；猎跑版" },
      ] },
      { model: "CLA200", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "E300L", variants: [
        { material: "", year: "16款--19款", note: "" },
        { material: "", year: "16款--19款", note: "" },
        { material: "", year: "16款--19款", note: "" },
        { material: "", year: "16款--19款", note: "" },
        { material: "", year: "20款--23款", note: "" },
        { material: "", year: "20款--23款", note: "" },
        { material: "", year: "20款--23款", note: "" },
        { material: "", year: "21款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "E级", variants: [
        { material: "皮革", year: "16款--19款；20款--；20款--23款；21款--", note: "门座:4门5座；片套:7片；二排靠背有3个挂钩孔；门座:4门5座；片套:7片；二排靠背有2个挂钩孔；门座:4门5座；片套:5片；尾箱右侧有护栏网；门座:5门7座；门座:4门5座；片套:6片；中间大背靠 后排靠背左右二侧没有署条；门座:4门5座；中间小背靠 后排靠背左右二侧没有署条；门座:4门5座；片套:8片；门座:4门5座；门座:4门5座；片套:6片；左边不带网兜" },
      ] },
      { model: "EQA", variants: [
        { material: "", year: "21款--", note: "" },
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "EQB", variants: [
        { material: "皮革", year: "21款--", note: "门座:5门7座" },
      ] },
      { model: "EQB260", variants: [
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "EQE", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "EQE SUV", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "EQS", variants: [
        { material: "", year: "22款--；23款--", note: "" },
      ] },
      { model: "EQS 轿车", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "EQS SUV", variants: [
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "G级", variants: [
        { material: "", year: "10款--18款；19款-24款", note: "" },
        { material: "", year: "10款--18款", note: "" },
      ] },
      { model: "G级/适配右呔", variants: [
        { material: "", year: "19款-24款", note: "" },
      ] },
      { model: "GL", variants: [
        { material: "皮革", year: "06款--12款", note: "门座:5门7座；二排2个挂钩；门座:5门7座；二排3个挂钩" },
        { material: "", year: "06款--12款", note: "" },
        { material: "", year: "06款--12款", note: "" },
      ] },
      { model: "GLA", variants: [
        { material: "皮革", year: "20款--", note: "门座:4门5座；靠背不带卡扣" },
      ] },
      { model: "GLA200", variants: [
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "GLC", variants: [
        { material: "皮革", year: "23款--", note: "门座:4门5座；门座:5门7座" },
      ] },
      { model: "GLC260L", variants: [
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "GLE", variants: [
        { material: "皮革", year: "24款--", note: "门座:4门5座；中间小背靠 后排靠背左右二侧有署条" },
        { material: "", year: "24款--", note: "" },
      ] },
      { model: "GLK", variants: [
        { material: "", year: "09款--16款", note: "" },
      ] },
      { model: "GLK级", variants: [
        { material: "", year: "09款--16款", note: "" },
      ] },
      { model: "GLS", variants: [
        { material: "皮革", year: "13款--16款；16款--19款；21款--", note: "门座:5门7座；片套:9片；二排背板三个挂钩，左、右边有护栏网。；门座:5门7座；片套:9片；二排背板两个挂钩，左边无护栏网。；门座:5门7座；片套:9片；二排背板三个挂钩，左边无护栏网。；门座:4门5座；左边没有出风口；门座:4门5座；左边有出风口" },
        { material: "", year: "13款--16款", note: "" },
        { material: "", year: "13款--16款", note: "" },
        { material: "", year: "16款--19款", note: "" },
        { material: "", year: "16款--19款", note: "" },
        { material: "", year: "21款--", note: "" },
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "ML", variants: [
        { material: "皮革", year: "12款--16款", note: "门座:4门5座；片套:7片；二排靠背上有2个挂钩孔" },
        { material: "", year: "12款--16款", note: "" },
      ] },
      { model: "R级", variants: [
        { material: "", year: "06款--18款", note: "适配；6/7座" },
      ] },
      { model: "R级 原车6座", variants: [
        { material: "", year: "06款--18款", note: "" },
      ] },
      { model: "S450L", variants: [
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "S级", variants: [
        { material: "皮革", year: "20款--", note: "门座:5门7座；片套:9片；左侧有出风口；门座:5门7座；片套:9片；左侧没有出风口；门座:5门6座；片套:8片；左侧没有出风口；门座:5门7座；片套:9片；左侧没有出风口,右前无二排倒背机关。" },
      ] },
      { model: "smart精灵#1", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
      { model: "smart精灵#1", variants: [
        { material: "", year: "22款--", note: "" },
      ] },
    ],
  },
  {
    name: "底盘护板",
    modelCount: 16,
    models: [
      { model: "A级", variants: [
        { material: "塑钢5.0mm；碳钢1.5mm；铝镁合金2.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2013-2018；2013-2019；2019-2024；2020", note: "保护位置：发动机；排量或续航：1.6T 2.0T；注意：一件套通用；保护位置：发动机；排量或续航：1.3T；注意：一件套通用；保护位置：发动机；排量或续航：2.0T；注意：一件套通用" },
      ] },
      { model: "B级", variants: [
        { material: "塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2012-2018；2020；2012-2018；2020-2022；2012-2019；2020-2022", note: "保护位置：发动机；排量或续航：1.6T 2.0T；2.0T；注意：一件套通用；保护位置：发动机；排量或续航：1.6T 2.0T；1.3T；注意：一件套通用" },
      ] },
      { model: "C级", variants: [
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2015-2018；2015-2019；2015-2021；2022-2023；2015-2021；2022-2024；2019-2021", note: "保护位置：水箱；发动机；变速箱；排量或续航：2.0T；注意：三件套；保护位置：水箱；发动机；变速箱；排量或续航：1.6T；注意：三件套；保护位置：水箱；发动机；变速箱；排量或续航：1.5T、2.0T；1.5T；注意：三件套；三件套 发动机、波箱通用24款E级；保护位置：水箱；发动机；变速箱；排量或续航：1.5T；注意：三件套" },
      ] },
      { model: "CLA", variants: [
        { material: "塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2014-2019；2014-2019；2020-2022；2014-2019；2020-2024", note: "保护位置：发动机；排量或续航：1.6T 2.0T；注意：一件套通用；保护位置：发动机；排量或续航：1.6T 2.0T；1.3T 2.0T；注意：一件套通用" },
      ] },
      { model: "E级", variants: [
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2015-2019；2016-2019；2016-2022；2020-2023；2020-2022", note: "保护位置：水箱；发动机；变速箱；排量或续航：3.0T；注意：三件套通用；保护位置：水箱；发动机；变速箱；排量或续航：2.0T；注意：三件套通用；三 件 套 通 用；保护位置：水箱；发动机；变速箱；排量或续航：2.0T；3.0T、2.0T；注意：三件套通用；三 件 套 通 用" },
      ] },
      { model: "EQB", variants: [
        { material: "塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2022", note: "保护位置：发动机；排量或续航：电动；注意：一件套通用" },
      ] },
      { model: "EQE", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "" },
      ] },
      { model: "GL", variants: [
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2013-2015", note: "保护位置：水箱；发动机；变速箱；排量或续航：3.0T 4.0T 4.7T；注意：三件套通用" },
      ] },
      { model: "GLA", variants: [
        { material: "塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm；塑钢5.0mm；碳钢1.5mm；铝镁合金2.0mm", year: "2014-2019；2014-2019；2020-2024；2020-2022", note: "保护位置：发动机；排量或续航：1.6T 2.0T；注意：一件套通用；保护位置：发动机；排量或续航：1.6T 2.0T；1.3T 2.0T；注意：一件套通用；保护位置：发动机；排量或续航：1.3T；注意：一件套通用" },
      ] },
      { model: "GLB", variants: [
        { material: "塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2020-2022；2020-2024", note: "保护位置：发动机；排量或续航：1.3T；注意：一件套通用" },
      ] },
      { model: "GLC", variants: [
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2016-2020；2016-2022；2023改-2024；2017-2022；2023改-2024", note: "保护位置：水箱；发动机；变速箱；排量或续航：2.0T；注意：三件套通用" },
      ] },
      { model: "GLE", variants: [
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2015-2018；2019-2024；2020-2024", note: "保护位置：水箱；发动机；变速箱；分动箱；排量或续航：2.2T 3.0T；2.0/3.0/4.0；2.0T；3.0T 4.0T；注意：三件套通用；四件套通用、19-24款奔驰GLE燃油版、分动保护板2.0T排量使用长板安装。3.0T、4.0T及(21-24款插电混动新能源2.0T)、轻混2.5T、2.0T、使用短板安装。分动版按排量发货/分动箱配蓝山3号支架1颗+螺丝" },
      ] },
      { model: "GLS", variants: [
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2016-2018；2019-2024；2020-2024；2020-2024", note: "保护位置：水箱；发动机；变速箱；分动箱；排量或续航：3.0T 4.0T；2.0T；注意：三件套通用；四件套通用、19-24款奔驰GLE燃油版、分动保护板2.0T排量使用长板安装。3.0T、4.0T及(21-24款插电混动新能源2.0T)、轻混2.5T、2.0T、使用短板安装。分动版按排量发货/分动箱配蓝山3号支架1颗+螺丝；保护位置：水箱；发动机；变速箱；排量或续航：2.5T/3.0T；注意：四件套通用、19-24款奔驰GLE燃油版、分动保护板2.0T排量使用长板安装。3.0T、4.0T及(21-24款插电混动新能源2.0T)、轻混2.5T、2.0T、使用短板安装。分动版按排量发货/分动箱配蓝山3号支架1颗+螺丝" },
      ] },
      { model: "ML", variants: [
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2012-2015", note: "保护位置：水箱；发动机；变速箱；排量或续航：3.0T 3.5T；注意：三件套通用" },
      ] },
      { model: "S级", variants: [
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2012-2014；2021-2024；2012-2017；2015-2020；2018-2020；2019-2020；2024-2025；2019", note: "保护位置：变速箱；发动机；排量或续航：3.0T 4.0T；2.5T；注意：两件套；保护位置：变速箱；发动机；排量或续航：3.0T 4.0T；注意：两件套；保护位置：发动机；变速箱；排量或续航：3.0T；注意：两件套；保护位置：水箱；发动机；变速箱；排量或续航：3.0L；2.5T；注意：三件套；两件套；保护位置：变速箱；发动机；排量或续航：3.0T；注意：两件套" },
      ] },
      { model: "SUV-EQE-500KM", variants: [
        { material: "原始资料未注明具体合金类型", year: "", note: "水箱护板、发动机护板、前电池、后电池、后电机" },
      ] },
    ],
  },
  {
    name: "电动踏板",
    modelCount: 7,
    models: [
      { model: "G级", variants: [
        { material: "", year: "2019+", note: "取信号方式：线夹；适配明细：2019+=线夹" },
      ] },
      { model: "GL", variants: [
        { material: "", year: "2014+", note: "取信号方式：线夹；适配明细：2014+=线夹" },
      ] },
      { model: "GLB", variants: [
        { material: "", year: "2020+", note: "取信号方式：线夹；适配明细：2020+=线夹" },
      ] },
      { model: "GLC", variants: [
        { material: "", year: "2014-2022；2023+；2024+", note: "取信号方式：线夹；适配明细：2014-2022=线夹；取信号方式：线夹；适配明细：2023+=线夹；2023+=线夹；取信号方式：线夹；适配明细：2024+=线夹" },
      ] },
      { model: "GLE", variants: [
        { material: "", year: "2019+；2015-2018", note: "取信号方式：线夹；适配明细：2019+=线夹；2015-2018=线夹" },
      ] },
      { model: "GLS", variants: [
        { material: "", year: "2020+；2015-2019", note: "取信号方式：线夹；适配明细：2020+=线夹；2015-2019=线夹" },
      ] },
      { model: "ML", variants: [
        { material: "", year: "2011+", note: "取信号方式：线夹；适配明细：2011+=线夹" },
      ] },
    ],
  },
  {
    name: "小桌板",
    modelCount: 2,
    models: [
      { model: "GLC", variants: [
        { material: "小桌板（真皮+金属饰条）", year: "", note: "移动办公/带娃/旅途娱乐/日常置物；桌板皮面与原车真皮同色系同质感，配金属饰条，与内饰融为一体；不用时收起不占空间" },
      ] },
      { model: "S级", variants: [
        { material: "小桌板（真皮+钢琴烤漆+镀铬饰条）", year: "", note: "移动办公/途中用餐/带娃/旅途娱乐/日常置物；桌板皮面与原车米色真皮同色系同质感，配钢琴烤漆与镀铬饰条，与星空顶、后排娱乐屏等豪华配置融为一体；不用时收起不占空间" },
      ] },
    ],
  },
];

export const MERCEDES_PROJECT_COUNT = 7;
