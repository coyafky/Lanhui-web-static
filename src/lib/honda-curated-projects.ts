/**
 * 本田 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs honda --apply`
 * 源：`src/lib/fitment/honda.ts`
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
export const hondaProjects: readonly CuratedProject[] = [
  {
    name: "平面尾箱垫",
    modelCount: 26,
    models: [
      { model: "艾力绅", variants: [
        { material: "", year: "16款--21款；22款--", note: "门座:5门7座；片套:；前排不带扶手箱/二排4条滑道；门座:5门7座；片套:；前排带扶手箱/二排4条滑道；门座:5门7座；片套:" },
      ] },
      { model: "奥德赛", variants: [
        { material: "", year: "04款--08款；09款--14款；15款--17款；18款--21款；22款--", note: "门座:5门7座；片套:；门座:5门7座；片套:；前排带扶手箱；门座:5门7座；片套:；前排不带扶手箱三排不带出风口；门座:5门7座；片套:；前排不带扶手箱/三排带出风口；门座:5门7座；片套:；前排带扶手箱/二排六条滑道；门座:5门7座；片套:；前排带扶手箱/二排四条滑道" },
      ] },
      { model: "缤智", variants: [
        { material: "", year: "15款--21款", note: "门座:4门5座；片套:" },
      ] },
      { model: "飞度", variants: [
        { material: "", year: "08款--13款；14款--19款；21款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "锋范", variants: [
        { material: "", year: "08款--14款；15款--", note: "门座:4门5座；片套:；经典版；门座:4门5座；片套:" },
      ] },
      { model: "歌诗图", variants: [
        { material: "", year: "10款--17款", note: "门座:4门5座；片套:" },
      ] },
      { model: "冠道", variants: [
        { material: "", year: "16款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "皓影", variants: [
        { material: "", year: "19款--22款；23款--", note: "门座:4门5座；片套:；门座:5门7座；片套:" },
      ] },
      { model: "杰德", variants: [
        { material: "", year: "12款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "竞瑞", variants: [
        { material: "", year: "17款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "理念VE-1", variants: [
        { material: "", year: "19款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "凌派", variants: [
        { material: "", year: "13款--18款；19款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "思铂睿", variants: [
        { material: "", year: "09款--14款；15款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "思迪", variants: [
        { material: "", year: "06款--07款", note: "门座:4门5座；片套:" },
      ] },
      { model: "思铭", variants: [
        { material: "", year: "12款--16款", note: "门座:4门5座；片套:" },
      ] },
      { model: "思域", variants: [
        { material: "", year: "06款--11款；12款--15款；16款--21款；16款-21款", note: "门座:4门5座；片套:" },
      ] },
      { model: "享域", variants: [
        { material: "", year: "19款--；21款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "雅阁", variants: [
        { material: "", year: "08款--13款；14款--；18款--；23款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "CR-V", variants: [
        { material: "", year: "07款--11款；12款--17款；18款--22款；21款--22款；23款--", note: "门座:4门5座；片套:；门座:5门5座；片套:；门座:5门7座；片套:" },
      ] },
      { model: "e:NS1", variants: [
        { material: "", year: "22款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "INSPIRE", variants: [
        { material: "", year: "19款--22款；23款--", note: "门座:4门5座；片套:；门座:4门5座；片套:；插电混动" },
      ] },
      { model: "M-NV", variants: [
        { material: "", year: "21款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "P7", variants: [
        { material: "", year: "25款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "UR-V", variants: [
        { material: "", year: "17款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "XR-V", variants: [
        { material: "", year: "15款--21款；21款--22款；23款--", note: "门座:4门5座；片套:；尾箱右侧围前端有鼓包；门座:4门5座；片套:；尾箱右侧围前端没有鼓包；门座:4门5座；片套:" },
      ] },
      { model: "ZR-V致在", variants: [
        { material: "", year: "22款--", note: "门座:4门5座；片套:；适配HRV" },
      ] },
    ],
  },
  {
    name: "底盘护板",
    modelCount: 23,
    models: [
      { model: "艾力绅", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2015；2016/2024", note: "保护位置：发动机；排量或续航：2.4L；2.4L/2.0L" },
      ] },
      { model: "奥德赛", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2008-2014；2015-2024", note: "保护位置：发动机；排量或续航：2.0L；2.4L" },
      ] },
      { model: "缤智", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2015-2018；2015；2019-2020；2019-2022；2023", note: "保护位置：发动机；排量或续航：1.5T；1.5L；1.5L/1.8L；1.8L；注意：要拆原车板" },
      ] },
      { model: "飞度", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2008-2020；2021-2024", note: "保护位置：发动机；排量或续航：1.5L/1.3L；注意：护板通用螺丝专用" },
      ] },
      { model: "锋范", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2008-2014；2015-2019", note: "保护位置：发动机；排量或续航：1.5L/1.8L；1.5L；注意：要拆原车板" },
      ] },
      { model: "哥瑞", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2016", note: "保护位置：发动机；排量或续航：1.5L；注意：要拆原车板" },
      ] },
      { model: "冠道", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2017-2023", note: "保护位置：发动机；排量或续航：1.5T/2.0T；注意：要拆原车中间小板、胶板要开孔" },
      ] },
      { model: "皓影", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2020-2021；2023-2024", note: "保护位置：发动机；排量或续航：1.5T；1.5T/2.0L；注意：混动螺丝专用" },
      ] },
      { model: "杰德", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2013-2020", note: "保护位置：发动机；排量或续航：1.5L/1.8L；注意：要拆原车板 后端中间螺丝位垫高；只生产金属板,定制产品,按订单生产" },
      ] },
      { model: "竞瑞", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2017", note: "保护位置：发动机；排量或续航：1.5L；注意：要拆原车板" },
      ] },
      { model: "凌派", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2013-2018；2019/2024", note: "保护位置：发动机；排量或续航：1.8L；1.0T；1.5L" },
      ] },
      { model: "思铂睿", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2009-2014；2015-2016；2017", note: "保护位置：发动机；排量或续航：2.0L/2.4L；2.0L；注意：护板通用螺丝专用；要拆原车板" },
      ] },
      { model: "思域", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2012-2015；2016-2021；2016-2018；2022-2023；2022-2024", note: "保护位置：发动机；线束；排量或续航：1.8L/2.0L；1.5T；1.0T；1.5T、2.0L；燃油；混动；注意：要拆原车中间小板；通用；两件套通用、国五加多一个支架；两件套通用" },
      ] },
      { model: "享域", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019/2022", note: "保护位置：发动机；排量或续航：1.5L/1.0T" },
      ] },
      { model: "型格", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2022-2024；2023-2024", note: "保护位置：发动机；线束；排量或续航：1.5T、2.0L；燃油；混动；注意：通用；两件套通用、国五加多一个支架；两件套通用" },
      ] },
      { model: "雅阁", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2004-2007；2008-2013；2014-2016；2016；2018；2021-2022；2023", note: "保护位置：发动机；排量或续航：2.0L/2.4L/3.0L；2.0L/2.4L；2.4L；2.0L；1.5/2.0L；1.5T/2.0L；1.5T/2.1L；1.5T；注意：04款机油,机滤保养盖对不上；原车胶板要开孔；要拆原车板；燃油通用" },
      ] },
      { model: "英仕派", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2019-2022；2023-2024、2025", note: "保护位置：发动机；排量或续航：1.5T" },
      ] },
      { model: "CR-V", variants: [
        { material: "塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm；碳纤5.0mm", year: "2007-2011；2012-2014；2015-2016；2017-2021；2023-2024", note: "保护位置：发动机；排量或续航：1.5T、2.0L；2.0L/1.5T；2.0L/2.4L；注意：混动螺丝专用" },
      ] },
      { model: "HR-V", variants: [
        { material: "塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2023-2024", note: "保护位置：发动机；排量或续航：1.5T、2.0L；注意：混动螺丝专用" },
      ] },
      { model: "LIFE", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2021-2023", note: "保护位置：发动机；排量或续航：1.5L" },
      ] },
      { model: "UR-V", variants: [
        { material: "碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2017-2020", note: "保护位置：发动机；排量或续航：1.5T/2.0T；注意：要拆原车中间小板、胶板要开孔" },
      ] },
      { model: "XR-V", variants: [
        { material: "塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm；碳纤5.0mm", year: "2015-2018；2019/2022；2023-2024", note: "保护位置：发动机；排量或续航：1.5L；1.5T；1.8L；注意：要拆原车板" },
      ] },
      { model: "ZR-V致在", variants: [
        { material: "塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm", year: "2022-2023", note: "保护位置：发动机；排量或续航：1.5T、2.0L；注意：混动螺丝专用" },
      ] },
    ],
  },
  {
    name: "360软包脚垫",
    modelCount: 21,
    models: [
      { model: "艾力绅", variants: [
        { material: "", year: "12款--15款；16款--21款；19款--21款；22款--24款", note: "门座:5门7座；片套:4片；二三排带出风口/滑道可盖可不盖；门座:5门7座；片套:4片；二三排不带出风口/垫中垫盖滑道；门座:5门7座；片套:4片；前排带扶手箱/二排6条滑道；门座:5门7座；片套:4片；前排带扶手箱/二排4条滑道；门座:5门7座；片套:4片；前排不带扶手箱/二排4条滑道；门座:5门7座；片套:4片；前排不带扶手箱/三排不带出风口/；门座:5门7座；片套:4片；前排带扶手箱/二排6条滑道 油电混合；门座:5门7座；片套:4片；前排带扶手箱/二排4条滑道 油电混合；门座:5门7座；片套:4片；前排不带扶手箱/二排4条滑道 油电混合" },
      ] },
      { model: "奥德赛", variants: [
        { material: "", year: "09款--14款；15款--19款；18款--21款；19款--21款；22款--24款", note: "门座:5门7座；片套:4片；前排不带扶手箱/三排不带出风口；门座:5门7座；片套:4片；前排带扶手箱/三排带出风口；门座:5门7座；片套:3片；前排带扶手箱；门座:5门7座；片套:4片；前排不带扶手箱/三排不带出风口/；门座:5门7座；片套:4片；前排不带扶手箱/三排带出风口；门座:5门7座；片套:1片；前排不带扶手箱；门座:5门7座；片套:1片；前排带扶手箱 适配艾力绅；门座:5门7座；片套:1片；前排不带扶手箱 适配艾力绅；门座:5门7座；片套:3片；前排带扶手箱/三排带出风口；门座:5门7座；片套:3片；前排不带扶手箱/三排不带出风口；门座:5门7座；片套:3片；前排不带扶手箱/三排带出风口；门座:5门7座；片套:4片；前排带扶手箱/二排4条滑道；门座:5门7座；片套:4片；前排带扶手箱/二排6条滑道" },
      ] },
      { model: "缤智", variants: [
        { material: "", year: "21款--22款；23款--", note: "门座:4门5座；片套:3片；主驾后排外侧无台阶；门座:4门5座；片套:3片；前排内侧无置物盒" },
      ] },
      { model: "飞度", variants: [
        { material: "", year: "14款--20款；21款--23款", note: "门座:4门5座；片套:3片；后排座椅分体；门座:4门5座；片套:3片；后排座椅连体" },
      ] },
      { model: "锋范", variants: [
        { material: "", year: "08款--14款", note: "门座:4门5座；片套:3片" },
      ] },
      { model: "哥瑞", variants: [
        { material: "", year: "16款--19款", note: "门座:4门5座；片套:3片" },
      ] },
      { model: "皓影", variants: [
        { material: "", year: "21款--22款；23款--", note: "门座:4门5座；片套:3片；插电混动；门座:5门7座；片套:3片；适配油电混合；门座:5门5座；片套:3片" },
      ] },
      { model: "杰德", variants: [
        { material: "", year: "13款--20款", note: "门座:5门6座；片套:4片" },
      ] },
      { model: "理念S1", variants: [
        { material: "", year: "11款--16款", note: "门座:4门5座；片套:3片" },
      ] },
      { model: "凌派", variants: [
        { material: "", year: "19款--22款", note: "门座:4门5座；片套:3片；适配混动版" },
      ] },
      { model: "思域", variants: [
        { material: "", year: "04款--05款；22款--", note: "门座:4门5座；片套:3片；门座:4门5座；片套:3片；前扶手后端S型,后排座椅中间有出风口 油电混合；门座:4门5座；片套:3片；前扶手后端弧形型,后排座椅中间有出风口 油电混合；门座:4门5座；片套:3片；前扶手后端没有出风口；门座:4门5座；片套:3片；前扶手后端有出风口" },
      ] },
      { model: "型格", variants: [
        { material: "", year: "22款--；23款--", note: "门座:4门5座；片套:3片；前扶手后端有出风口；门座:4门5座；片套:3片；前扶手后端没有出风口；门座:4门5座；片套:3片；前扶手后端S型,后排座椅中间有出风口 油电混合" },
      ] },
      { model: "雅阁", variants: [
        { material: "", year: "04款--07款；18款--22款；23款--", note: "门座:4门5座；片套:3片；门座:4门5座；片套:3片；油电混合 下单注意区分车头车尾；门座:4门5座；片套:3片；插电混动 下单注意区分车头车尾；门座:4门5座；片套:3片；下单注意区分车头车尾" },
      ] },
      { model: "CR-V", variants: [
        { material: "", year: "04款--06款；07款--11款；12款--16款；21款--22款；23款--", note: "门座:4门5座；片套:3片；门座:4门5座；片套:2片；门座:4门5座；片套:3片；插电混动；门座:5门7座；片套:4片；适配油电混合" },
      ] },
      { model: "e:NS1", variants: [
        { material: "", year: "22款--", note: "门座:4门5座；片套:3片；适配；NP1 纯电动" },
      ] },
      { model: "EA6绎乐", variants: [
        { material: "", year: "21款--", note: "门座:4门5座；片套:3片；纯电版" },
      ] },
      { model: "HR-V", variants: [
        { material: "", year: "23款--", note: "门座:4门5座；片套:3片；适配油电混合" },
      ] },
      { model: "INSPIRE", variants: [
        { material: "", year: "19款--22款", note: "门座:4门5座；片套:3片；油电混合 注意区分车头车尾" },
      ] },
      { model: "M-NV", variants: [
        { material: "", year: "21款--23款", note: "门座:4门5座；片套:3片；纯电动" },
      ] },
      { model: "UR-V", variants: [
        { material: "", year: "17款--23款", note: "门座:4门5座；片套:3片" },
      ] },
      { model: "XR-V", variants: [
        { material: "", year: "19款--22款", note: "门座:4门5座；片套:3片" },
      ] },
    ],
  },
  {
    name: "360全包尾箱",
    modelCount: 5,
    models: [
      { model: "飞度", variants: [
        { material: "", year: "08款--13款；21款--", note: "门座:4门5座；片套:；尾箱不带侧包；门座:4门5座；片套:；后排座椅连体；门座:4门5座；片套:；后排座椅分体" },
      ] },
      { model: "皓影", variants: [
        { material: "", year: "20款--；21款--22款", note: "门座:4门5座；片套:5片；门座:4门5座；片套:" },
      ] },
      { model: "思域", variants: [
        { material: "", year: "23款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "CR-V", variants: [
        { material: "", year: "17款--；17款--22款；21款--22款；23款--", note: "门座:4门5座；片套:5片；门座:4门5座；片套:6片；门座:4门5座；片套:；门座:4门5座；片套:；右边有音响；门座:4门5座；片套:；右边没有音响 适配23款皓影 靠背有挂钩孔；门座:4门7座；片套:；适配23款皓影" },
      ] },
      { model: "X-NV", variants: [
        { material: "", year: "19款--", note: "门座:4门5座；片套:" },
      ] },
    ],
  },
  {
    name: "电动踏板",
    modelCount: 4,
    models: [
      { model: "冠道", variants: [
        { material: "", year: "2016+", note: "取信号方式：线夹；适配明细：2016+=线夹" },
      ] },
      { model: "皓影", variants: [
        { material: "", year: "2020+；2023+", note: "取信号方式：线夹；适配明细：2020+=线夹" },
      ] },
      { model: "CR-V", variants: [
        { material: "", year: "2017+；2023+", note: "取信号方式：线夹；适配明细：2017+=线夹" },
      ] },
      { model: "UR-V", variants: [
        { material: "", year: "2016+", note: "取信号方式：线夹；适配明细：2016+=线夹" },
      ] },
    ],
  },
  {
    name: "吸顶电视",
    modelCount: 1,
    models: [
      { model: "艾力绅", variants: [
        { material: "吸顶电视", year: "", note: "15.6 英寸 IPS 屏，支持 4G 网络、手机投屏、U 盘视频和氛围灯；安装方式与功能以实车适配和门店核验为准。" },
      ] },
    ],
  },
];

export const HONDA_PROJECT_COUNT = 6;
