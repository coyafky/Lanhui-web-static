/**
 * 路虎 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs land-rover --apply`
 * 源：`src/lib/fitment/land-rover.ts`
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
export const landRoverProjects: readonly CuratedProject[] = [
  {
    name: "360全包尾箱",
    modelCount: 7,
    models: [
      { model: "发现", variants: [
        { material: "", year: "16款--", note: "" },
        { material: "", year: "10款--17款", note: "" },
        { material: "", year: "17款--", note: "备注：左侧带出风口" },
        { material: "", year: "21款--", note: "备注：左侧带凹槽，没有出风口。" },
        { material: "", year: "20款--", note: "备注：尾箱不带侧包" },
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "揽胜极光", variants: [
        { material: "", year: "20款--", note: "" },
        { material: "", year: "21款--", note: "备注：左侧有拉带" },
        { material: "", year: "21款--", note: "备注：左侧没有拉带" },
      ] },
      { model: "揽胜星脉", variants: [
        { material: "", year: "17款--20款", note: "备注：21款不同" },
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "揽胜行政版", variants: [
        { material: "", year: "13款--17款", note: "备注：右侧带倒背机关口" },
        { material: "", year: "13款--17款", note: "备注：右侧不带倒背机关口" },
        { material: "", year: "18款--22款", note: "备注：左侧无电源孔，右侧有倒背机关" },
        { material: "", year: "18款--22款", note: "" },
        { material: "", year: "18款--22款", note: "备注：左侧无电源孔，右侧无倒背机关" },
        { material: "", year: "18款--22款", note: "备注：左侧无电源孔，右侧有倒背机关一样长" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "备注：尾箱前面没有挡板 左边没有凹位有出风口" },
        { material: "", year: "23款--", note: "备注：尾箱前面有挡板" },
        { material: "", year: "23款--", note: "备注：靠门边有滑道" },
        { material: "", year: "23款--", note: "备注：靠门边没有滑道" },
      ] },
      { model: "揽胜运动版", variants: [
        { material: "", year: "08款--13款", note: "" },
        { material: "", year: "14款--18款", note: "备注：背板分三块" },
        { material: "", year: "14款--18款", note: "备注：背靠两片" },
        { material: "", year: "18款--22款", note: "备注：背板分三块、左侧无出风口" },
        { material: "", year: "20款--22款", note: "备注：左侧带出风口" },
        { material: "", year: "20款--22款", note: "" },
        { material: "", year: "23款--", note: "备注：左侧不带出风口" },
      ] },
      { model: "神行者", variants: [
        { material: "", year: "07款--15款", note: "备注：尾箱不带侧包" },
      ] },
      { model: "卫士", variants: [
        { material: "", year: "20款--", note: "备注：尾箱不带侧包" },
        { material: "", year: "22款--", note: "备注：尾箱不带侧包" },
        { material: "", year: "23款--", note: "备注：尾箱不带侧包" },
      ] },
    ],
  },
  {
    name: "360软包脚垫",
    modelCount: 7,
    models: [
      { model: "发现", variants: [
        { material: "", year: "05款--09款", note: "" },
        { material: "", year: "05款--09款", note: "" },
        { material: "", year: "10款--17款", note: "" },
        { material: "", year: "10款--17款", note: "" },
        { material: "", year: "17款--20款", note: "备注：二排座椅下不带氛围灯" },
        { material: "", year: "17款--20款", note: "备注：二排座椅下不带出风口" },
        { material: "", year: "17款--20款", note: "备注：二排座椅下带出风口" },
        { material: "", year: "17款--20款", note: "备注：二排座椅下带出风口" },
        { material: "", year: "17款--20款", note: "备注：二排座椅下不带出风口" },
        { material: "", year: "21款--", note: "备注：二排座椅下不带氛围灯" },
        { material: "", year: "21款--", note: "备注：二排座椅下不带出风口" },
        { material: "", year: "21款--", note: "备注：二排座椅下带出风口" },
        { material: "", year: "21款--", note: "备注：二排座椅下带出风口" },
        { material: "", year: "16款--", note: "备注：二排座椅底下无滑道/不可移动" },
        { material: "", year: "16款--", note: "" },
        { material: "", year: "16款--", note: "" },
        { material: "", year: "15款--", note: "备注：二排座椅底下有滑道/可移动" },
        { material: "", year: "15款--", note: "" },
        { material: "", year: "15款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "揽胜极光", variants: [
        { material: "", year: "11款--18款", note: "备注：副驾座椅下面带鼓包" },
        { material: "", year: "15款--19款", note: "备注：副驾座椅下面带鼓包" },
        { material: "", year: "15款--19款", note: "备注：副驾座椅下面不带鼓包" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "11款--16款", note: "" },
        { material: "", year: "16款--", note: "" },
        { material: "", year: "21款--", note: "备注：适配；插电混动" },
      ] },
      { model: "揽胜星脉", variants: [
        { material: "", year: "17款--20款", note: "备注：主驾休息踏板中间宽度是8厘米" },
        { material: "", year: "21款--", note: "备注：主驾休息踏板中间宽度是11厘米" },
      ] },
      { model: "揽胜行政版", variants: [
        { material: "", year: "07款--12款", note: "备注：二排座椅下不带出风口/油门坐地式" },
        { material: "", year: "13款--17款", note: "备注：二排座椅下带出风口" },
        { material: "", year: "14款--17款", note: "备注：二排座椅下带出风口" },
        { material: "", year: "13款--17款", note: "备注：二排座椅下不带出风口" },
        { material: "", year: "18款--22款", note: "备注：二排座椅下不带出风口" },
        { material: "", year: "14款--17款", note: "备注：二排座椅下不带出风口" },
        { material: "", year: "13款--17款", note: "备注：二排座椅下不带出风口" },
        { material: "", year: "13款--17款", note: "备注：二排座椅下带出风口" },
        { material: "", year: "18款--22款", note: "备注：二排座椅下带出风口" },
        { material: "", year: "18款--22款", note: "备注：二排座椅下不带出风口" },
        { material: "", year: "23款--", note: "备注：二排座椅下面侧边高度17厘米" },
        { material: "", year: "23款--", note: "备注：后排座椅下没有出风口 扶手箱二侧不塞边 二排外侧高度13CM" },
        { material: "", year: "23款--", note: "备注：后排座椅下没有出风口 扶手箱二侧塞边 二排外侧高度13CM" },
        { material: "", year: "23款--", note: "备注：二排座椅下带出风口，二排座椅无腿拖 扶手箱二侧不塞边" },
        { material: "", year: "23款--", note: "备注：二排座椅下带出风口，二排座椅无腿拖 扶手箱二侧塞边" },
        { material: "", year: "23款--", note: "备注：二排座椅下带出风口，二排座椅无腿拖 扶手箱二侧不塞边" },
        { material: "", year: "23款--", note: "备注：二排座椅下带出风口，二排座椅无腿拖 扶手箱二侧塞边" },
        { material: "", year: "23款--", note: "备注：二排座椅下带出风口，二排座椅无腿拖 扶手箱二侧不塞边" },
        { material: "", year: "23款--", note: "备注：二排座椅下带出风口，二排座椅无腿拖 扶手箱二侧塞边" },
        { material: "", year: "23款--", note: "备注：二排座椅分体 带出风口 带腿托二排座椅下面侧边高度17厘米" },
        { material: "", year: "23款--", note: "备注：二排过桥没有电源插座 扶手箱二侧不塞边" },
        { material: "", year: "23款--", note: "备注：二排过桥没有电源插座 扶手箱二侧不塞边" },
        { material: "", year: "23款--", note: "备注：二排过桥没有电源插座 扶手箱二侧塞边" },
        { material: "", year: "23款--", note: "备注：二排过桥没有电源插座 扶手箱二侧塞边" },
        { material: "", year: "23款--", note: "备注：后排座椅下没有出风口 扶手箱二侧塞边" },
      ] },
      { model: "揽胜运动版", variants: [
        { material: "", year: "08款--13款", note: "备注：主驾驶座椅下不带电路盒" },
        { material: "", year: "08款--13款", note: "备注：主驾驶座椅下带电路盒" },
        { material: "", year: "14款", note: "" },
        { material: "", year: "14款", note: "" },
        { material: "", year: "14款--18款", note: "备注：港版右呔" },
        { material: "", year: "14款--18款", note: "备注：适配；插电混动" },
        { material: "", year: "18款--22款", note: "备注：适配；插电混动" },
        { material: "", year: "23款--", note: "备注：扶手箱二侧不塞边" },
        { material: "", year: "23款--", note: "备注：扶手箱二侧塞边" },
      ] },
      { model: "神行者", variants: [
        { material: "", year: "07款--15款", note: "备注：副驾座椅下带电路盒" },
        { material: "", year: "07款--15款", note: "备注：副驾座椅不带电路盒" },
      ] },
      { model: "卫士", variants: [
        { material: "", year: "20款--23款", note: "备注：后排座椅分体 24款座椅连体不同" },
        { material: "", year: "22款--", note: "备注：二排座椅是连体" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
    ],
  },
  {
    name: "平面尾箱垫",
    modelCount: 7,
    models: [
      { model: "发现", variants: [
        { material: "56", year: "10款--17款", note: "" },
        { material: "", year: "10款--17款", note: "" },
        { material: "473", year: "17款--", note: "" },
        { material: "469", year: "17款--", note: "" },
        { material: "", year: "21款--", note: "备注：左侧带凹槽，没有出风口。" },
        { material: "788", year: "20款--", note: "" },
        { material: "419", year: "16款--", note: "" },
        { material: "58", year: "16款--", note: "" },
        { material: "", year: "16款--", note: "" },
        { material: "419", year: "15款--", note: "" },
        { material: "58", year: "15款--", note: "" },
        { material: "", year: "15款--", note: "" },
        { material: "817 分体", year: "20款--", note: "" },
        { material: "", year: "20款--", note: "" },
      ] },
      { model: "揽胜极光", variants: [
        { material: "57", year: "11款--18款", note: "" },
        { material: "60", year: "15款--19款", note: "" },
        { material: "660", year: "20款--", note: "" },
        { material: "", year: "16款--", note: "" },
        { material: "", year: "21款--", note: "" },
      ] },
      { model: "揽胜星脉", variants: [
        { material: "400", year: "17款--20款", note: "备注：左边没有网兜" },
        { material: "", year: "21款--", note: "备注：左边有网兜" },
      ] },
      { model: "揽胜行政版", variants: [
        { material: "525", year: "08款--12款", note: "" },
        { material: "54", year: "13款--17款", note: "" },
        { material: "477", year: "18款-22款", note: "" },
        { material: "54", year: "14款--17款", note: "" },
        { material: "54", year: "14款--17款", note: "" },
        { material: "", year: "18款-22款", note: "备注：长度108CM" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "" },
        { material: "", year: "23款--", note: "备注：尾箱前面没有挡板 靠门边没有滑道" },
        { material: "", year: "23款--", note: "备注：尾箱前面有挡板" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "揽胜运动版", variants: [
        { material: "61", year: "08款--13款", note: "" },
        { material: "852", year: "14款", note: "" },
        { material: "", year: "14款", note: "" },
        { material: "55", year: "14款--18款", note: "" },
        { material: "478", year: "18款--", note: "" },
        { material: "", year: "20款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
      { model: "神行者", variants: [
        { material: "59", year: "07款--15款", note: "" },
      ] },
      { model: "卫士", variants: [
        { material: "886", year: "20款--", note: "" },
        { material: "", year: "22款--", note: "" },
        { material: "", year: "23款--", note: "" },
      ] },
    ],
  },
  {
    name: "底盘护板",
    modelCount: 3,
    models: [
      { model: "发现", variants: [
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（具体保护部位未细分）" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（具体保护部位未细分）" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（具体保护部位未细分）" },
      ] },
      { model: "神行者", variants: [
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（具体保护部位未细分）" },
      ] },
      { model: "卫士", variants: [
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（具体保护部位未细分）" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（具体保护部位未细分）" },
        { material: "铝镁合金", year: "", note: "保护位置/方案：底盘护板（具体保护部位未细分）" },
      ] },
    ],
  },
];

export const LAND_ROVER_PROJECT_COUNT = 4;
