/**
 * 红旗 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs hongqi --apply`
 * 源：`src/lib/fitment/hongqi.ts`
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
export const hongqiProjects: readonly CuratedProject[] = [
  {
    name: "360软包脚垫",
    modelCount: 17,
    models: [
      { model: "天工05", variants: [
        { material: "", year: "25款--", note: "3片" },
      ] },
      { model: "天工06", variants: [
        { material: "", year: "25款--", note: "3片" },
      ] },
      { model: "天工08", variants: [
        { material: "", year: "25款--", note: "3片" },
      ] },
      { model: "E-HS3", variants: [
        { material: "", year: "19款--", note: "备注：纯电动" },
      ] },
      { model: "E-HS9", variants: [
        { material: "", year: "21款--", note: "3片" },
        { material: "", year: "21款--", note: "4片" },
        { material: "", year: "21款--", note: "3片" },
      ] },
      { model: "E-QM5", variants: [
        { material: "", year: "21款--", note: "备注：副后电动腿托" },
        { material: "", year: "21款--", note: "3片" },
      ] },
      { model: "EH7", variants: [
        { material: "", year: "24款--", note: "3片" },
      ] },
      { model: "H5", variants: [
        { material: "", year: "18款--22款", note: "备注：二排座椅下带氛围灯" },
        { material: "", year: "18款--22款", note: "备注：二排座椅下不带氛围灯、" },
        { material: "", year: "18款--22款", note: "备注：二排座椅下带氛围灯、" },
        { material: "", year: "18款--22款", note: "备注：二排座椅下不带氛围灯、" },
        { material: "", year: "21款--22款", note: "备注：二排座椅下不带氛围灯、" },
        { material: "", year: "21款--22款", note: "备注：二排座椅下带氛围灯" },
        { material: "", year: "23款--", note: "备注：混动版不同" },
        { material: "", year: "23款--", note: "3片" },
        { material: "", year: "25款--", note: "3片" },
      ] },
      { model: "H6", variants: [
        { material: "", year: "23款--", note: "3片" },
      ] },
      { model: "H7", variants: [
        { material: "", year: "13款--16款", note: "3片" },
        { material: "", year: "17款--21款", note: "3片" },
      ] },
      { model: "H9", variants: [
        { material: "", year: "20款--", note: "备注：红旗H9+不同" },
        { material: "", year: "20款--", note: "备注：红旗H9+不同" },
      ] },
      { model: "HQ9", variants: [
        { material: "", year: "23款--", note: "2片" },
        { material: "", year: "23款--", note: "备注：二排前端到滑到位置18厘米，三排尾箱带滑道" },
        { material: "", year: "23款--", note: "备注：二排前端到滑到位置18厘米，三排尾箱带滑道" },
      ] },
      { model: "HS3", variants: [
        { material: "", year: "23款--", note: "备注：安全带在绒布上没有版" },
        { material: "", year: "24款--", note: "备注：安全带在绒布上没有版" },
      ] },
      { model: "HS5", variants: [
        { material: "", year: "19款--22款", note: "备注：副驾塑料凹槽在中间 23款不同" },
        { material: "", year: "19款--22款", note: "备注：副驾塑料凹槽在左侧" },
        { material: "", year: "23款--", note: "备注：前排内侧不带高绒，副驾凹槽在左边" },
      ] },
      { model: "HS6", variants: [
        { material: "", year: "26款--", note: "备注：主驾安全带在大底上" },
      ] },
      { model: "HS7", variants: [
        { material: "", year: "19款--21款", note: "备注：二排外侧有倒背把手 悬挂油门" },
        { material: "", year: "19款--22款", note: "备注：二排外侧有倒背把手 悬挂油门" },
        { material: "", year: "19款--22款", note: "备注：二排外侧有倒背把手 悬挂油门" },
        { material: "", year: "22款--23款", note: "备注：二排外侧没有倒背把手 悬挂油门" },
        { material: "", year: "22款--23款", note: "备注：二排外侧没有倒背把手 悬挂油门" },
        { material: "", year: "22款--23款", note: "备注：二排外侧没有倒背把手 悬挂油门" },
        { material: "", year: "23款--", note: "备注：落地油门 PHEV一样" },
        { material: "", year: "23款--", note: "备注：落地油门 PHEV一样" },
        { material: "", year: "23款--", note: "备注：落地油门 PHEV一样" },
        { material: "", year: "23款--", note: "备注：落地油门 PHEV一样" },
      ] },
      { model: "LS7", variants: [
        { material: "", year: "23款--", note: "3片" },
      ] },
    ],
  },
  {
    name: "平面尾箱垫",
    modelCount: 14,
    models: [
      { model: "天工05", variants: [
        { material: "2359 右侧带音响", year: "25款--", note: "4门5座" },
      ] },
      { model: "天工06", variants: [
        { material: "2358 右侧带音响", year: "25款--", note: "4门5座" },
      ] },
      { model: "天工08", variants: [
        { material: "2360 左侧没有风口", year: "25款--", note: "4门5座" },
      ] },
      { model: "E-HS9", variants: [
        { material: "987", year: "21款--", note: "4门6座" },
        { material: "", year: "21款--", note: "4门6座" },
        { material: "", year: "21款--", note: "4门4座" },
      ] },
      { model: "E-QM5", variants: [
        { material: "", year: "21款--", note: "4门5座" },
      ] },
      { model: "EH7", variants: [
        { material: "", year: "24款--", note: "4门5座" },
      ] },
      { model: "H5", variants: [
        { material: "1184 有台阶", year: "20款--22款", note: "4门5座" },
        { material: "594", year: "18款--22款", note: "4门5座" },
        { material: "", year: "18款--22款", note: "4门5座" },
        { material: "", year: "23款--", note: "4门5座" },
        { material: "", year: "23款--", note: "4门5座" },
      ] },
      { model: "H6", variants: [
        { material: "", year: "23款--", note: "4门5座" },
        { material: "", year: "26款--", note: "4门5座" },
      ] },
      { model: "H7", variants: [
        { material: "", year: "13款--16款", note: "4门5座" },
        { material: "552", year: "17款--", note: "4门5座" },
      ] },
      { model: "H9", variants: [
        { material: "868", year: "20款--", note: "4门5座" },
      ] },
      { model: "HS3", variants: [
        { material: "", year: "23款--", note: "4门5座" },
      ] },
      { model: "HS5", variants: [
        { material: "595", year: "19款--23款", note: "4门5座" },
      ] },
      { model: "HS7", variants: [
        { material: "812 5座", year: "19款--21款", note: "4门5座" },
        { material: "992 分体", year: "19款--21款", note: "5门7座" },
        { material: "", year: "22款--", note: "备注：悬挂油门" },
        { material: "", year: "22款--", note: "备注：悬挂油门" },
        { material: "", year: "23款--", note: "备注：落地油门" },
        { material: "", year: "23款--", note: "备注：落地油门" },
      ] },
      { model: "LS7", variants: [
        { material: "", year: "23款--", note: "4门4座" },
      ] },
    ],
  },
  {
    name: "360全包尾箱",
    modelCount: 6,
    models: [
      { model: "E-HS9", variants: [
        { material: "", year: "21款--", note: "备注：新能源" },
        { material: "", year: "21款--", note: "备注：新能源" },
      ] },
      { model: "H6", variants: [
        { material: "", year: "23款--", note: "4门5座" },
      ] },
      { model: "HS3", variants: [
        { material: "", year: "23款--", note: "备注：尾箱不带侧包" },
      ] },
      { model: "HS5", variants: [
        { material: "", year: "19款--22款", note: "备注：尾箱不带侧包" },
      ] },
      { model: "HS7", variants: [
        { material: "", year: "19款--", note: "5片" },
        { material: "", year: "22款--", note: "4门5座" },
        { material: "", year: "19款--", note: "7片" },
        { material: "", year: "22款--", note: "备注：悬挂油门" },
        { material: "", year: "23款--", note: "备注：落地油门" },
        { material: "", year: "23款--", note: "备注：落地油门" },
      ] },
      { model: "LS7", variants: [
        { material: "", year: "23款--", note: "4门4座" },
      ] },
    ],
  },
  {
    name: "底盘护板",
    modelCount: 5,
    models: [
      { model: "E-QM5", variants: [
        { material: "锰钢1.2mm；铝镁合金2.0mm", year: "2022；2023、2024", note: "保护位置：前电机；电池前；电池后；后电机；排量或续航：续航431；续航560/500；注意：4件套(电池分前、后)；3件套 (前电机与22款通用)" },
      ] },
      { model: "H5", variants: [
        { material: "锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm；塑钢5.0mm；碳纤5.0mm", year: "2018-2019；2020-2022；2023-2024", note: "保护位置：发动机；发动机后部；排量或续航：1.5T/1.8T；1.5T/2.0T；1.8T；注意：两件套；要拆原车板" },
      ] },
      { model: "H9", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2020/2024", note: "保护位置：发动机；变速箱；排量或续航：2.0T、3.0T；注意：两件套" },
      ] },
      { model: "HS5", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019-2023、2026", note: "保护位置：发动机；变速箱；排量或续航：2.0T；注意：两件套" },
      ] },
      { model: "HS7", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019/2022", note: "保护位置：发动机；变速箱；排量或续航：3.0T、2.0T；3.0T；2.0T；注意：两件套" },
      ] },
    ],
  },
  {
    name: "电动踏板",
    modelCount: 3,
    models: [
      { model: "HS5", variants: [
        { material: "", year: "2019-2020；2021+", note: "取信号方式：对插；线夹；适配明细：2019-2020=对插" },
      ] },
      { model: "HS6", variants: [
        { material: "", year: "2026", note: "取信号方式：线夹；适配明细：2026=线夹" },
      ] },
      { model: "HS7", variants: [
        { material: "", year: "2019-2022", note: "取信号方式：线夹；适配明细：2019-2022=线夹" },
        { material: "", year: "2019-2022", note: "取信号方式：线夹；适配明细：2019-2022=线夹" },
      ] },
    ],
  },
];

export const HONGQI_PROJECT_COUNT = 5;
