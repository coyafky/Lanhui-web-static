/**
 * 宝马 项目矩阵（自动生成，勿手改）
 *
 * 生成：`node scripts/build-brand-curated-data.mjs bmw --apply`
 * 源：`src/lib/fitment/bmw.ts`
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
export const bmwProjects: readonly CuratedProject[] = [
  {
    name: "360软包脚垫",
    modelCount: 119,
    models: [
      { model: "1系", variants: [
        { material: "", year: "07款--11款；11款；12款--18款；17款--23款", note: "门座:2门4座；片套:3片；门座:4门5座；片套:3片" },
      ] },
      { model: "1系i 敞篷", variants: [
        { material: "", year: "11款", note: "2门4座" },
      ] },
      { model: "1系i 轿跑", variants: [
        { material: "", year: "11款", note: "2门4座" },
      ] },
      { model: "1系i 两厢", variants: [
        { material: "", year: "07款--11款", note: "4门5座" },
        { material: "", year: "12款--18款", note: "4门5座" },
      ] },
      { model: "1系i 三厢", variants: [
        { material: "", year: "17款--23款", note: "4门5座" },
      ] },
      { model: "2系", variants: [
        { material: "", year: "14款--16款；14款--18款；14款--19款；15款--20款；21款-23款；22款--23款；25款--", note: "门座:4门5座；片套:3片；门座:2门4座；片套:3片" },
      ] },
      { model: "2系2门 轿跑", variants: [
        { material: "", year: "22款--23款", note: "2门4座" },
      ] },
      { model: "2系i 敞篷", variants: [
        { material: "", year: "15款--20款", note: "2门4座" },
      ] },
      { model: "2系i 轿跑", variants: [
        { material: "", year: "14款--19款", note: "2门4座" },
        { material: "", year: "21款-23款", note: "4门5座" },
      ] },
      { model: "2系i 旅行车", variants: [
        { material: "", year: "14款--16款", note: "4门5座" },
      ] },
      { model: "2系i 原车7座做5座", variants: [
        { material: "", year: "14款--18款", note: "多功能旅行车" },
      ] },
      { model: "2系i 原车7座做7座", variants: [
        { material: "", year: "14款--18款", note: "多功能旅行车" },
      ] },
      { model: "2系L", variants: [
        { material: "", year: "25款--", note: "4门5座" },
      ] },
      { model: "3系", variants: [
        { material: "", year: "00款--04款；04款--12款；07款--11款；08款--11款；13款--19款；13款--20款；2007款-2011；20款--24款", note: "门座:2门4座；片套:3片；门座:4门5座；片套:3片" },
      ] },
      { model: "3系 右钛车", variants: [
        { material: "", year: "2007款-2011", note: "2门4座" },
      ] },
      { model: "3系i", variants: [
        { material: "", year: "00款--04款", note: "4门5座" },
        { material: "", year: "04款--12款", note: "4门5座" },
        { material: "", year: "13款--19款", note: "4门5座" },
        { material: "", year: "20款--24款", note: "4门5座" },
      ] },
      { model: "3系i 轿跑", variants: [
        { material: "", year: "08款--11款", note: "2门4座" },
      ] },
      { model: "3系i 硬顶敞篷", variants: [
        { material: "", year: "07款--11款", note: "2门4座" },
      ] },
      { model: "3系i GT", variants: [
        { material: "", year: "13款--20款", note: "4门5座" },
      ] },
      { model: "3系Li", variants: [
        { material: "", year: "13款--19款", note: "后排座椅下有带氛围灯" },
        { material: "", year: "20款--24款", note: "4门5座" },
      ] },
      { model: "4系", variants: [
        { material: "", year: "14款--20款；20款--23款；21款--23款；22款--23款", note: "门座:2门4座；片套:3片" },
      ] },
      { model: "4系i", variants: [
        { material: "", year: "14款--20款", note: "4门5座" },
      ] },
      { model: "4系i 轿跑", variants: [
        { material: "", year: "14款--20款", note: "前排安全带孔在地板上" },
        { material: "", year: "20款--23款", note: "安全带在门框上" },
        { material: "", year: "22款--23款", note: "4门5座" },
      ] },
      { model: "4系i 软顶敞篷", variants: [
        { material: "", year: "21款--23款", note: "安全带在门框上" },
      ] },
      { model: "4系i 硬顶敞篷", variants: [
        { material: "", year: "14款--20款", note: "2门4座" },
      ] },
      { model: "5系", variants: [
        { material: "", year: "04款--06款；06款--10款；10款--13款；11款--13款；14款--17款；18款--23款；24款--", note: "门座:4门5座；片套:3片；副驾内侧漏网兜；门座:4门5座；片套:3片；副驾内侧覆盖网兜/座椅轨道宽度41CM；门座:4门5座；片套:3片；副驾内侧漏网兜/座椅轨道宽度41CM；门座:4门5座；片套:3片；适配；旅行版；门座:4门5座；片套:3片；副驾内侧漏网兜/座椅轨道宽度36CM；门座:4门5座；片套:3片；门座:4门5座；片套:3片；混动版一样" },
      ] },
      { model: "5系i", variants: [
        { material: "", year: "04款--06款", note: "4门5座" },
        { material: "", year: "24款--", note: "4门5座" },
      ] },
      { model: "5系i 矮绒布", variants: [
        { material: "", year: "11款--13款", note: "适配；旅行版" },
        { material: "", year: "14款--17款", note: "副驾内侧漏网兜" },
      ] },
      { model: "5系i 高绒布", variants: [
        { material: "", year: "14款--17款", note: "副驾内侧漏网兜" },
      ] },
      { model: "5系i GT 矮绒布", variants: [
        { material: "", year: "10款--13款", note: "副驾内侧漏网兜" },
        { material: "", year: "14款--17款", note: "4门5座" },
      ] },
      { model: "5系i GT 高绒布 削边工艺", variants: [
        { material: "", year: "10款--13款", note: "副驾内侧漏网兜" },
      ] },
      { model: "5系i GT 右呔版", variants: [
        { material: "", year: "10款--13款", note: "4门5座" },
      ] },
      { model: "5系Li", variants: [
        { material: "", year: "06款--10款", note: "4门5座" },
      ] },
      { model: "5系Li 矮绒布", variants: [
        { material: "", year: "11款--13款", note: "副驾内侧漏网兜/座椅轨道宽度41CM" },
        { material: "", year: "14款--17款", note: "副驾内侧漏网兜/座椅轨道宽度36CM" },
      ] },
      { model: "5系Li 高绒布", variants: [
        { material: "", year: "11款--13款", note: "副驾内侧覆盖网兜/座椅轨道宽度41CM" },
        { material: "", year: "14款--17款", note: "副驾内侧漏网兜/座椅轨道宽度36CM" },
      ] },
      { model: "5系Li 削边工艺", variants: [
        { material: "", year: "24款--", note: "4门5座" },
      ] },
      { model: "6系", variants: [
        { material: "", year: "06款--10款；11款--16款；11款--18款；18款--22款", note: "2门4座；副驾内侧漏网兜 适配M6 后排分体；4门4座；适配M6；2门4座；4门5座" },
      ] },
      { model: "6系i", variants: [
        { material: "", year: "11款--16款", note: "副驾内侧漏网兜 适配M6 后排分体" },
      ] },
      { model: "6系i 轿跑", variants: [
        { material: "", year: "06款--10款", note: "2门4座" },
      ] },
      { model: "6系i GT", variants: [
        { material: "", year: "18款--22款", note: "4门5座" },
      ] },
      { model: "6系i/敞篷", variants: [
        { material: "", year: "11款--18款", note: "适配M6" },
      ] },
      { model: "7系", variants: [
        { material: "", year: "04款--08款；09款--12款；12款--15款；16款--22款；23款--", note: "门座:4门5座；片套:3片；门座:4门4座；片套:3片；灯孔位可开可不开/漏网兜 座椅轨道宽度41CM；门座:4门4座；片套:3片；座椅轨道宽度41CM；门座:4门5座；片套:3片；灯孔位可开可不开/漏网兜 座椅轨道宽度37CM；门座:4门4座；片套:3片；门座:4门5座；片套:3片；后排右边座椅没有脚拖；门座:4门5座；片套:3片；后排右边有脚托" },
      ] },
      { model: "7系 削边工艺", variants: [
        { material: "", year: "23款--", note: "后排右边座椅没有脚拖" },
        { material: "", year: "23款--", note: "后排右边座椅没有脚拖" },
        { material: "", year: "23款--", note: "后排右边有脚托" },
        { material: "", year: "23款--", note: "后排右边有脚托" },
      ] },
      { model: "7系Li 低配 削边工艺", variants: [
        { material: "", year: "16款--22款", note: "4门5座" },
      ] },
      { model: "7系Li 低配右呔版 削边工艺", variants: [
        { material: "", year: "16款--22款", note: "4门5座" },
      ] },
      { model: "7系Li 高配 削边工艺", variants: [
        { material: "", year: "16款--22款", note: "4门5座" },
      ] },
      { model: "7系Li 高配四座 削边工艺", variants: [
        { material: "", year: "16款--22款", note: "4门4座" },
      ] },
      { model: "7系Li 高绒布", variants: [
        { material: "", year: "04款--08款", note: "4门5座" },
      ] },
      { model: "7系Li 后排带灯孔 矮绒布", variants: [
        { material: "", year: "09款--12款", note: "灯孔位可开可不开/漏网兜 座椅轨道宽度41CM" },
        { material: "", year: "12款--15款", note: "灯孔位可开可不开/漏网兜 座椅轨道宽度37CM" },
      ] },
      { model: "7系Li 后排带灯孔 高绒布", variants: [
        { material: "", year: "09款--12款", note: "座椅轨道宽度41CM" },
        { material: "", year: "12款--15款", note: "灯孔位可开可不开/漏网兜 座椅轨道宽度37CM" },
      ] },
      { model: "8系", variants: [
        { material: "", year: "19款--22款", note: "4门4座" },
      ] },
      { model: "8系i", variants: [
        { material: "", year: "19款--22款", note: "4门4座" },
      ] },
      { model: "全新5系i", variants: [
        { material: "", year: "18款--23款", note: "4门5座" },
      ] },
      { model: "全新5系Li 削边工艺", variants: [
        { material: "", year: "18款--23款", note: "混动版一样" },
      ] },
      { model: "全新宝马X6 前排内侧矮绒布", variants: [
        { material: "", year: "20款--23款", note: "4门5座" },
      ] },
      { model: "全新宝马X6 前排内侧高绒布 削边工艺", variants: [
        { material: "", year: "20款--23款", note: "高绒面不可塞" },
      ] },
      { model: "全新X5 国产 前排内侧矮绒布", variants: [
        { material: "", year: "22款--", note: "4门5座" },
      ] },
      { model: "全新X5 国产 前排内侧高绒布 削边工艺", variants: [
        { material: "", year: "22款--", note: "4门5座" },
      ] },
      { model: "全新X5 前排内侧矮绒布", variants: [
        { material: "", year: "19款--", note: "4门5座" },
      ] },
      { model: "全新X5 前排内侧高绒布 削边工艺", variants: [
        { material: "", year: "19款--", note: "高绒布不可塞边" },
      ] },
      { model: "i3", variants: [
        { material: "", year: "14款--20款；22款--24款", note: "门座:4门5座；片套:2片；纯电动；门座:4门5座；片套:3片；前排椅子底下没有音响 纯电动" },
      ] },
      { model: "i3 EV", variants: [
        { material: "", year: "14款--20款", note: "纯电动" },
        { material: "", year: "22款--24款", note: "前排椅子底下没有音响 纯电动" },
      ] },
      { model: "i4", variants: [
        { material: "", year: "22款--23款", note: "门座:4门5座；片套:3片；前排椅子底下没有音响 纯电动" },
      ] },
      { model: "i4 EV", variants: [
        { material: "", year: "22款--23款", note: "前排椅子底下没有音响 纯电动" },
      ] },
      { model: "i5", variants: [
        { material: "", year: "24款--", note: "纯电" },
      ] },
      { model: "i7", variants: [
        { material: "", year: "23款--", note: "门座:4门5座；片套:3片；后排右边有脚托 纯电动；门座:4门5座；片套:3片；后排右边没有脚托 纯电动" },
      ] },
      { model: "i7 EV 削边工艺", variants: [
        { material: "", year: "23款--", note: "后排右边有脚托 纯电动" },
        { material: "", year: "23款--", note: "后排右边有脚托 纯电动" },
        { material: "", year: "23款--", note: "后排右边没有脚托 纯电动" },
        { material: "", year: "23款--", note: "后排右边没有脚托 纯电动" },
      ] },
      { model: "iX", variants: [
        { material: "", year: "22款--23款", note: "门座:4门5座；片套:3片；纯电动" },
      ] },
      { model: "IX EV", variants: [
        { material: "", year: "22款--23款", note: "纯电动" },
      ] },
      { model: "iX1", variants: [
        { material: "", year: "23款--", note: "4门5座" },
      ] },
      { model: "iX1", variants: [
        { material: "", year: "23款--", note: "4门5座" },
      ] },
      { model: "iX3", variants: [
        { material: "", year: "20款--23款", note: "门座:4门5座；片套:3片；纯电" },
      ] },
      { model: "iX3 EV", variants: [
        { material: "", year: "20款--23款", note: "纯电" },
      ] },
      { model: "M2", variants: [
        { material: "", year: "16款--22款；22款--", note: "拉手式手刹 23款不同；2门4座；双门硬顶跑车；2门4座" },
        { material: "", year: "16款--22款", note: "拉手式手刹 23款不同" },
        { material: "", year: "22款--", note: "双门硬顶跑车" },
      ] },
      { model: "M3", variants: [
        { material: "", year: "14款--20款；21款", note: "4门5座" },
        { material: "", year: "14款--20款", note: "4门5座" },
        { material: "", year: "21款", note: "4门5座" },
      ] },
      { model: "M4", variants: [
        { material: "", year: "14款--19款；21款--23款", note: "门座:2门4座；片套:3片；扶手箱后端有出风口 后排地板上无安全带扣" },
      ] },
      { model: "M4 敞篷", variants: [
        { material: "", year: "14款--19款", note: "后排地板上无安全带扣" },
      ] },
      { model: "M4 轿跑", variants: [
        { material: "", year: "14款--19款", note: "扶手箱后端有出风口" },
        { material: "", year: "21款--23款", note: "扶手箱后端有出风口 后排地板上无安全带扣" },
      ] },
      { model: "M5", variants: [
        { material: "", year: "18款--23款", note: "4门5座" },
      ] },
      { model: "M8", variants: [
        { material: "", year: "19款--23款", note: "适配8系" },
      ] },
      { model: "X1", variants: [
        { material: "", year: "10款--15款；16款--22款；17款--21款；23款--", note: "门座:4门5座；片套:3片；插电混合动力" },
        { material: "", year: "10款--15款", note: "4门5座" },
        { material: "", year: "16款--22款", note: "4门5座" },
      ] },
      { model: "X1", variants: [
        { material: "", year: "23款--", note: "扶手箱后端是S型" },
      ] },
      { model: "X1 新能源", variants: [
        { material: "", year: "17款--21款", note: "插电混合动力" },
      ] },
      { model: "X2", variants: [
        { material: "", year: "18款--23款；24款--", note: "4门5座" },
        { material: "", year: "18款--23款", note: "4门5座" },
        { material: "", year: "24款--", note: "4门5座" },
      ] },
      { model: "X3", variants: [
        { material: "", year: "05款--10款；11款--17款；18款--24款；25款--", note: "门座:4门5座；片套:3片" },
        { material: "", year: "05款--10款", note: "4门5座" },
        { material: "", year: "11款--17款", note: "4门5座" },
        { material: "", year: "18款--24款", note: "4门5座" },
        { material: "", year: "25款--", note: "4门5座" },
      ] },
      { model: "X4", variants: [
        { material: "", year: "14款--18款", note: "4门5座" },
      ] },
      { model: "X4/X4M", variants: [
        { material: "", year: "19款--23款", note: "4门5座" },
      ] },
      { model: "X5", variants: [
        { material: "", year: "04款--07款", note: "后排座椅下有带氛围灯" },
      ] },
      { model: "X5 前排内侧矮绒布", variants: [
        { material: "", year: "14款--18款", note: "二排座椅连体/座椅不可移动" },
        { material: "", year: "14款--18款", note: "后排座椅下有带氛围灯" },
      ] },
      { model: "X5 前排内侧高绒布", variants: [
        { material: "", year: "14款--18款", note: "二排座椅连体/座椅不可移动" },
        { material: "", year: "14款--18款", note: "二排座椅连体/座椅不可移动" },
      ] },
      { model: "X5 右钛 7座做5座", variants: [
        { material: "", year: "19款--", note: "5门7座" },
      ] },
      { model: "X5 右钛 7座做7座", variants: [
        { material: "", year: "19款--", note: "5门7座" },
      ] },
      { model: "X5 原车5座 矮绒布", variants: [
        { material: "", year: "08款--13款", note: "后排座椅下没有带氛围灯 后座座椅不可移动" },
        { material: "", year: "08款--13款", note: "后排座椅下有带氛围灯 后座座椅不可移动" },
      ] },
      { model: "X5 原车5座 高绒布", variants: [
        { material: "", year: "08款--13款", note: "后排座椅下没有带氛围灯 后座座椅不可移动" },
        { material: "", year: "08款--13款", note: "后排座椅下带氛围灯 后座座椅不可移动" },
      ] },
      { model: "X5 原车7座做5座 矮绒布", variants: [
        { material: "", year: "08款--13款", note: "后排座椅下没有带氛围灯" },
        { material: "", year: "14款--18款", note: "5门7座" },
      ] },
      { model: "X5 原车7座做5座 高绒布", variants: [
        { material: "", year: "08款--13款", note: "后排座椅下没有带氛围灯" },
        { material: "", year: "14款--18款", note: "5门7座" },
      ] },
      { model: "X5 原车7座做7座 矮绒布", variants: [
        { material: "", year: "08款--13款", note: "后排座椅下没有带氛围灯" },
        { material: "", year: "14款--18款", note: "5门7座" },
      ] },
      { model: "X5 原车7座做7座 高绒布", variants: [
        { material: "", year: "08款--13款", note: "后排座椅下没有带氛围灯" },
      ] },
      { model: "X5高配 前排内侧矮绒布", variants: [
        { material: "", year: "14款--18款", note: "二排座椅分体/带滑道" },
      ] },
      { model: "X5右呔版 原车7座做5座 矮绒布", variants: [
        { material: "", year: "08款--13款", note: "后排座椅下有带氛围灯" },
      ] },
      { model: "X5右呔版 原车7座做7座 矮绒布", variants: [
        { material: "", year: "08款--13款", note: "后排座椅下有带氛围灯" },
      ] },
      { model: "X6", variants: [
        { material: "", year: "07款--14款；15款--19款；20款--23款", note: "门座:4门4座；片套:3片；后排座椅下没有带氛围灯；门座:4门4座；片套:3片；后排座椅下有带氛围灯；门座:4门5座；片套:3片；后排座椅下有带氛围灯；门座:4门5座；片套:3片；后排座椅下没有带氛围灯；门座:4门5座；片套:3片；门座:4门5座；片套:3片；高绒面不可塞" },
      ] },
      { model: "X6 前排内侧 高绒布 削边工艺", variants: [
        { material: "", year: "15款--19款", note: "后排座椅下没有带氛围灯" },
      ] },
      { model: "X6 前排内侧矮绒布", variants: [
        { material: "", year: "07款--14款", note: "后排座椅下没有带氛围灯" },
        { material: "", year: "07款--14款", note: "后排座椅下有带氛围灯" },
        { material: "", year: "15款--19款", note: "后排座椅下有带氛围灯" },
        { material: "", year: "15款--19款", note: "后排座椅下没有带氛围灯" },
      ] },
      { model: "X6 前排内侧高绒布", variants: [
        { material: "", year: "07款--14款", note: "后排座椅下有带氛围灯" },
      ] },
      { model: "X6 前排内侧高绒布 削边工艺", variants: [
        { material: "", year: "15款--19款", note: "后排座椅下有带氛围灯" },
      ] },
      { model: "X7", variants: [
        { material: "", year: "19款--23款", note: "门座:5门7座；片套:4片；三排座椅下面不带出风口；门座:5门7座；片套:3片；三排座椅下面带出风口；门座:5门7座；片套:4片；三排座椅下面带出风口；门座:5门7座；片套:3片；门座:5门6座；片套:4片；三排座椅下面带出风口；门座:5门6座；片套:5片；三排座椅下面带出风口；门座:5门6座；片套:3片" },
      ] },
      { model: "X7 原车6座做4座 矮绒布", variants: [
        { material: "", year: "19款--23款", note: "三排座椅下面带出风口" },
      ] },
      { model: "X7 原车6座做4座 高绒布 削边工艺", variants: [
        { material: "", year: "19款--23款", note: "5门6座" },
      ] },
      { model: "X7 原车6座做6座 矮绒布", variants: [
        { material: "", year: "19款--23款", note: "三排座椅下面带出风口" },
      ] },
      { model: "X7 原车6座做6座 高绒布 削边工艺", variants: [
        { material: "", year: "19款--23款", note: "三排座椅下面带出风口" },
      ] },
      { model: "X7 原车7座做5座 矮绒布", variants: [
        { material: "", year: "19款--23款", note: "三排座椅下面带出风口" },
      ] },
      { model: "X7 原车7座做5座 高绒布 削边工艺", variants: [
        { material: "", year: "19款--23款", note: "5门7座" },
      ] },
      { model: "X7 原车7座做7座 矮绒布", variants: [
        { material: "", year: "19款--23款", note: "三排座椅下面不带出风口" },
        { material: "", year: "19款--23款", note: "三排座椅下面带出风口" },
      ] },
      { model: "X7 原车7座做7座 高绒布 削边工艺", variants: [
        { material: "", year: "19款--23款", note: "三排座椅下面带出风口" },
      ] },
      { model: "XM", variants: [
        { material: "", year: "24款--", note: "门座:4门5座；片套:3片；插电式混合动力" },
      ] },
      { model: "XM 矮绒", variants: [
        { material: "", year: "24款--", note: "插电式混合动力" },
      ] },
      { model: "XM 高绒 削边工艺", variants: [
        { material: "", year: "24款--", note: "插电式混合动力" },
      ] },
      { model: "Z4", variants: [
        { material: "", year: "09款--13款；19款--23款", note: "2门2座" },
        { material: "", year: "09款--13款", note: "2门2座" },
        { material: "", year: "19款--23款", note: "2门2座" },
      ] },
    ],
  },
  {
    name: "平面尾箱垫",
    modelCount: 78,
    models: [
      { model: "1系", variants: [
        { material: "", year: "12款--16款；17款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "1系i 两厢", variants: [
        { material: "196", year: "12款--16款", note: "4门5座" },
      ] },
      { model: "1系i 三厢", variants: [
        { material: "317 下层", year: "17款--", note: "4门5座" },
      ] },
      { model: "2系", variants: [
        { material: "", year: "14款--；14款--19款；16款--；21款--；22款--；25款--", note: "门座:5门7座；片套:；多功能旅行车；门座:2门4座；片套:；门座:4门5座；片套:" },
      ] },
      { model: "2系2门轿跑", variants: [
        { material: "", year: "22款--", note: "2门4座" },
      ] },
      { model: "2系i 敞篷", variants: [
        { material: "855", year: "14款--", note: "2门4座" },
      ] },
      { model: "2系i 轿跑", variants: [
        { material: "219", year: "14款--19款", note: "2门4座" },
        { material: "", year: "21款--", note: "4门5座" },
      ] },
      { model: "2系i 旅行版", variants: [
        { material: "183", year: "16款--", note: "4门5座" },
      ] },
      { model: "2系i 原车7座做5座", variants: [
        { material: "613双针", year: "14款--", note: "多功能旅行车" },
      ] },
      { model: "2系i 原车7座做7座", variants: [
        { material: "", year: "14款--", note: "多功能旅行车" },
      ] },
      { model: "2系L", variants: [
        { material: "2200下层尾箱", year: "25款--", note: "4门5座" },
      ] },
      { model: "3系", variants: [
        { material: "", year: "05款--12款；07款-11款；13款--19款；13款--20款；20款--", note: "门座:4门5座；片套:；门座:2门4座；片套:；门座:4门5座；片套:；左边有网兜" },
      ] },
      { model: "3系 右钛车", variants: [
        { material: "", year: "07款-11款", note: "2门4座" },
      ] },
      { model: "3系i", variants: [
        { material: "407", year: "05款--12款", note: "4门5座" },
        { material: "921", year: "13款--19款", note: "4门5座" },
        { material: "523双针", year: "20款--", note: "4门5座" },
      ] },
      { model: "3系i GT", variants: [
        { material: "18", year: "13款--20款", note: "4门5座" },
      ] },
      { model: "3系Li", variants: [
        { material: "17", year: "13款--19款", note: "左边有网兜" },
        { material: "523双针", year: "20款--", note: "4门5座" },
      ] },
      { model: "4系", variants: [
        { material: "", year: "14款--19款；15款--19款；17款--19款；20款--；21款--；22款--", note: "门座:2门4座；片套:；左边有耳朵右边有网兜；门座:4门5座；片套:；门座:2门5座；片套:；左边有置物盒；门座:2门4座；片套:；二边有耳朵；门座:2门4座；片套:" },
      ] },
      { model: "4系i", variants: [
        { material: "200", year: "15款--19款", note: "4门5座" },
        { material: "", year: "17款--19款", note: "左边有置物盒" },
      ] },
      { model: "4系i 轿跑", variants: [
        { material: "19", year: "14款--19款", note: "左边有耳朵右边有网兜" },
        { material: "", year: "20款--", note: "二边有耳朵" },
        { material: "", year: "22款--", note: "4门5座" },
      ] },
      { model: "4系i 软顶敞篷", variants: [
        { material: "", year: "21款--", note: "2门4座" },
      ] },
      { model: "5系", variants: [
        { material: "", year: "05款--10款；06款--10款；10款--13款；11款--13款；11款--17款；14款--；14款--17款；18款-23款；24款--", note: "门座:4门5座；片套:；门座:4门5座；片套:；3片" },
      ] },
      { model: "5系i", variants: [
        { material: "", year: "05款--10款", note: "4门5座" },
        { material: "754", year: "11款--17款", note: "4门5座" },
        { material: "432", year: "18款-23款", note: "4门5座" },
        { material: "", year: "24款--", note: "4门5座" },
      ] },
      { model: "5系i GT", variants: [
        { material: "402", year: "11款--13款", note: "4门5座" },
        { material: "402", year: "14款--", note: "4门5座" },
      ] },
      { model: "5系i GT 右呔版", variants: [
        { material: "", year: "10款--13款", note: "3片" },
      ] },
      { model: "5系Le", variants: [
        { material: "625混动版 Le", year: "18款-23款", note: "4门5座" },
      ] },
      { model: "5系Li", variants: [
        { material: "278", year: "06款--10款", note: "4门5座" },
        { material: "22", year: "11款--13款", note: "4门5座" },
        { material: "22", year: "14款--17款", note: "4门5座" },
        { material: "335汽油版 Li", year: "18款-23款", note: "4门5座" },
        { material: "", year: "24款--", note: "4门5座" },
      ] },
      { model: "6系", variants: [
        { material: "", year: "06款--10款；11款--16款；18款--", note: "门座:2门4座；片套:；门座:4门5座；片套:" },
      ] },
      { model: "6系i", variants: [
        { material: "", year: "11款--16款", note: "4门5座" },
      ] },
      { model: "6系i 轿跑", variants: [
        { material: "755", year: "06款--10款", note: "2门4座" },
      ] },
      { model: "6系i GT", variants: [
        { material: "449", year: "18款--", note: "4门5座" },
      ] },
      { model: "7系", variants: [
        { material: "", year: "09款；09款--15款；10款--13款；16款--；23款--", note: "门座:4门5座；片套:；门座:4门4座；片套:" },
      ] },
      { model: "7系Li", variants: [
        { material: "655左边带冰箱", year: "09款", note: "4门5座" },
        { material: "13右边带冰箱", year: "10款--13款", note: "4门5座" },
        { material: "16不带冰箱", year: "09款--15款", note: "4门5座" },
        { material: "217不带冰箱", year: "16款--", note: "4门5座" },
        { material: "", year: "23款--", note: "4门5座" },
      ] },
      { model: "7系Li 高配4座", variants: [
        { material: "293带冰箱", year: "16款--", note: "4门4座" },
      ] },
      { model: "8系", variants: [
        { material: "", year: "19款--", note: "门座:4门4座；片套:" },
      ] },
      { model: "8系i", variants: [
        { material: "989", year: "19款--", note: "4门4座" },
      ] },
      { model: "全新宝马X6", variants: [
        { material: "753", year: "20款--", note: "4门5座" },
      ] },
      { model: "全新X5", variants: [
        { material: "551", year: "19款--21款", note: "4门5座" },
      ] },
      { model: "全新X5 国产", variants: [
        { material: "", year: "22款--", note: "4门5座" },
      ] },
      { model: "i3", variants: [
        { material: "", year: "14款--20款；22款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "i3 纯电动", variants: [
        { material: "", year: "14款--20款", note: "4门5座" },
        { material: "", year: "22款--", note: "4门5座" },
      ] },
      { model: "i4", variants: [
        { material: "", year: "22款--", note: "门座:4门5座；片套:；左边没有网兜；门座:4门5座；片套:；左边有网兜" },
      ] },
      { model: "i4 纯电", variants: [
        { material: "", year: "22款--", note: "左边没有网兜" },
        { material: "", year: "22款--", note: "左边有网兜" },
      ] },
      { model: "i5", variants: [
        { material: "1901 左边不带储物盒", year: "24款--", note: "4门5座" },
      ] },
      { model: "i7", variants: [
        { material: "", year: "23款--", note: "右边有置物盒" },
      ] },
      { model: "iX", variants: [
        { material: "", year: "22款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "IX", variants: [
        { material: "", year: "22款--", note: "4门5座" },
      ] },
      { model: "iX1", variants: [
        { material: "", year: "23款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "iX1", variants: [
        { material: "", year: "23款--", note: "4门5座" },
      ] },
      { model: "iX3", variants: [
        { material: "", year: "20款--", note: "门座:4门5座；片套:" },
      ] },
      { model: "iX3 纯电", variants: [
        { material: "981", year: "20款--", note: "4门5座" },
      ] },
      { model: "M2", variants: [
        { material: "", year: "16款--22款；22款--", note: "门座:2门4座；片套:" },
        { material: "726", year: "16款--22款", note: "2门4座" },
        { material: "", year: "22款--", note: "2门4座" },
      ] },
      { model: "M3", variants: [
        { material: "", year: "14款--20款；21款；23款--", note: "门座:4门5座；片套:" },
        { material: "", year: "14款--20款", note: "4门5座" },
        { material: "", year: "21款", note: "4门5座" },
      ] },
      { model: "M3旅行车", variants: [
        { material: "", year: "23款--", note: "4门5座" },
      ] },
      { model: "M4", variants: [
        { material: "", year: "22款--", note: "2门4座" },
      ] },
      { model: "M4 敞篷", variants: [
        { material: "", year: "14款--19款", note: "2门4座" },
      ] },
      { model: "M4 轿跑", variants: [
        { material: "", year: "14款--19款", note: "2门4座" },
      ] },
      { model: "M5", variants: [
        { material: "", year: "18款--", note: "4门5座" },
      ] },
      { model: "M8", variants: [
        { material: "", year: "19款--", note: "2门4座" },
      ] },
      { model: "X1", variants: [
        { material: "", year: "11款--15款；16款--18款；17款--；19款--22款；23款--", note: "门座:4门5座；片套:；门座:4门5座；片套:；左边有耳朵；门座:4门5座；片套:；油电混合动力；门座:4门5座；片套:；左右有耳朵" },
        { material: "14", year: "11款--15款", note: "4门5座" },
        { material: "241", year: "16款--18款", note: "左边有耳朵" },
        { material: "596上层", year: "19款--22款", note: "左右有耳朵" },
      ] },
      { model: "X1", variants: [
        { material: "1692上层", year: "23款--", note: "4门5座" },
      ] },
      { model: "X1新能源", variants: [
        { material: "241", year: "17款--", note: "油电混合动力" },
      ] },
      { model: "X2", variants: [
        { material: "", year: "18款--；24款--", note: "门座:4门5座；片套:；门座:4门5座；片套:；3片" },
        { material: "528上层", year: "18款--", note: "4门5座" },
        { material: "", year: "24款--", note: "3片" },
      ] },
      { model: "X3", variants: [
        { material: "", year: "11款--17款；18款-24款；21款--；25款--", note: "门座:4门5座；片套:" },
        { material: "20", year: "11款--17款", note: "4门5座" },
        { material: "489", year: "18款-24款", note: "4门5座" },
        { material: "", year: "25款--", note: "4门5座" },
      ] },
      { model: "X3M", variants: [
        { material: "", year: "21款--", note: "4门5座" },
      ] },
      { model: "X4", variants: [
        { material: "", year: "14款--18款；19款--", note: "门座:4门5座；片套:" },
        { material: "24", year: "14款--18款", note: "4门5座" },
        { material: "378", year: "19款--", note: "4门5座" },
      ] },
      { model: "X5", variants: [
        { material: "", year: "04款--07款；08款--13款；14款--18款；19款--；19款--21款；22款--", note: "门座:4门5座；片套:；门座:5门7座；片套:" },
        { material: "", year: "04款--07款", note: "4门5座" },
        { material: "185", year: "14款--18款", note: "4门5座" },
      ] },
      { model: "X5 右钛 7座做5座", variants: [
        { material: "", year: "19款--", note: "5门7座" },
      ] },
      { model: "X5 原车5座", variants: [
        { material: "288", year: "08款--13款", note: "4门5座" },
      ] },
      { model: "X5 原车7座做5座", variants: [
        { material: "1524分体", year: "08款--13款", note: "5门7座" },
      ] },
      { model: "X5 原车7座做7座", variants: [
        { material: "", year: "14款--18款", note: "5门7座" },
      ] },
      { model: "X6", variants: [
        { material: "", year: "07款--14款；15款--19款；20款--", note: "门座:4门5座；片套:" },
        { material: "398", year: "07款--14款", note: "4门5座" },
        { material: "21", year: "15款--19款", note: "4门5座" },
        { material: "1012 右边带耳朵", year: "15款--19款", note: "4门5座" },
      ] },
      { model: "X7", variants: [
        { material: "", year: "19款--", note: "门座:5门7座；片套:；6座版一样；门座:5门6座；片套:；门座:5门7座；片套:；门座:5门6座；片套:" },
      ] },
      { model: "X7 原车6座做4座", variants: [
        { material: "632", year: "19款--", note: "5门6座" },
      ] },
      { model: "X7 原车6座做6座", variants: [
        { material: "727", year: "19款--", note: "5门6座" },
      ] },
      { model: "X7 原车7座做5座", variants: [
        { material: "632", year: "19款--", note: "6座版一样" },
      ] },
      { model: "X7 原车7座做7座", variants: [
        { material: "727", year: "19款--", note: "5门7座" },
      ] },
      { model: "XM", variants: [
        { material: "", year: "24款--", note: "4门5座" },
      ] },
      { model: "Z4", variants: [
        { material: "", year: "09款--13款；19款--", note: "门座:2门2座；片套:" },
        { material: "15", year: "09款--13款", note: "2门2座" },
        { material: "628双针", year: "19款--", note: "2门2座" },
      ] },
    ],
  },
  {
    name: "360全包尾箱",
    modelCount: 39,
    models: [
      { model: "2系", variants: [
        { material: "", year: "16款--", note: "5门7座" },
      ] },
      { model: "2系i 旅行车", variants: [
        { material: "", year: "16款--", note: "5门7座" },
      ] },
      { model: "3系", variants: [
        { material: "", year: "13款--20款", note: "4门5座" },
      ] },
      { model: "3系i GT", variants: [
        { material: "", year: "13款--20款", note: "4门5座" },
      ] },
      { model: "4系", variants: [
        { material: "", year: "14款--19款；22款--", note: "4门5座；右侧带挂扣长条 左右两边带网兜；4门5座" },
      ] },
      { model: "4系i 轿跑", variants: [
        { material: "", year: "14款--19款", note: "4门5座" },
        { material: "", year: "22款--", note: "右侧带挂扣长条 左右两边带网兜" },
      ] },
      { model: "5系", variants: [
        { material: "", year: "10款--13款", note: "4门5座" },
      ] },
      { model: "5系i GT", variants: [
        { material: "", year: "10款--13款", note: "4门5座" },
      ] },
      { model: "6系", variants: [
        { material: "", year: "18款--", note: "4门5座" },
      ] },
      { model: "6系i GT", variants: [
        { material: "", year: "18款--", note: "4门5座" },
      ] },
      { model: "全新X5", variants: [
        { material: "", year: "19款--21款", note: "4门5座" },
      ] },
      { model: "全新X5 国产", variants: [
        { material: "", year: "22款--", note: "4门5座" },
      ] },
      { model: "i3", variants: [
        { material: "", year: "14款--", note: "门座:4门4座；片套:" },
      ] },
      { model: "i3 纯电 SUV", variants: [
        { material: "", year: "14款--", note: "4门4座" },
      ] },
      { model: "i4", variants: [
        { material: "", year: "22款--", note: "左边没有网兜；4门5座" },
      ] },
      { model: "i4 纯电", variants: [
        { material: "", year: "22款--", note: "左边没有网兜" },
      ] },
      { model: "iX", variants: [
        { material: "", year: "22款--", note: "4门5座" },
      ] },
      { model: "IX", variants: [
        { material: "", year: "22款--", note: "4门5座" },
      ] },
      { model: "iX1", variants: [
        { material: "", year: "23款--", note: "4门5座" },
      ] },
      { model: "iX1", variants: [
        { material: "", year: "23款--", note: "4门5座" },
      ] },
      { model: "iX3", variants: [
        { material: "", year: "20款--", note: "4门5座" },
      ] },
      { model: "iX3 纯电", variants: [
        { material: "", year: "20款--", note: "4门5座" },
      ] },
      { model: "M3", variants: [
        { material: "", year: "23款--", note: "4门5座" },
      ] },
      { model: "M3旅行车", variants: [
        { material: "", year: "23款--", note: "4门5座" },
      ] },
      { model: "X1", variants: [
        { material: "", year: "10款--15款；16款--22款；17款--；23款--", note: "4门5座；右侧带网兜；4门5座" },
        { material: "", year: "10款--15款", note: "4门5座" },
        { material: "", year: "16款--22款", note: "右侧带网兜" },
        { material: "", year: "16款--22款", note: "4门5座" },
      ] },
      { model: "X1", variants: [
        { material: "", year: "23款--", note: "4门5座" },
      ] },
      { model: "X1 新能源", variants: [
        { material: "", year: "17款--", note: "4门5座" },
      ] },
      { model: "X2", variants: [
        { material: "", year: "18款--", note: "右边无网兜" },
      ] },
      { model: "X3", variants: [
        { material: "", year: "05款--10款；11款--17款；11款-17款；18款--21款；18款-24款；25款--", note: "门座:4门5座；片套:；大底带滑道 二测边倒背机关胶壳长度是16CM；门座:4门5座；片套:8片；门座:4门5座；片套:" },
        { material: "", year: "05款--10款", note: "4门5座" },
        { material: "", year: "11款-17款", note: "右侧不带松紧带 左右侧只有一个挂钩" },
        { material: "", year: "11款--17款", note: "大底带滑道" },
        { material: "", year: "11款--17款", note: "大底不带滑道" },
        { material: "", year: "18款-24款", note: "4门5座" },
        { material: "", year: "25款--", note: "4门5座" },
      ] },
      { model: "X3 M", variants: [
        { material: "", year: "18款--21款", note: "大底带滑道 二测边倒背机关胶壳长度是16CM" },
      ] },
      { model: "X4", variants: [
        { material: "", year: "14款--18款；19款--", note: "4门5座；尾箱有轨道；4门5座" },
        { material: "", year: "14款--18款", note: "4门5座" },
        { material: "", year: "19款--", note: "尾箱有轨道" },
      ] },
      { model: "X5", variants: [
        { material: "", year: "04款--07款；07款--13款；08款--13款；14款--18款；19款--；19款--21款；22款--", note: "门座:4门5座；片套:9片；门座:5门7座；片套:" },
        { material: "", year: "04款--07款", note: "4门5座" },
        { material: "", year: "07款--13款", note: "4门7座" },
      ] },
      { model: "X5 右钛", variants: [
        { material: "", year: "19款--", note: "5门7座" },
      ] },
      { model: "X5 原车5座", variants: [
        { material: "", year: "08款--13款", note: "4门5座" },
        { material: "", year: "14款--18款", note: "4门5座" },
      ] },
      { model: "X6", variants: [
        { material: "", year: "07款--14款；15款--19款；20款--", note: "门座:4门5座；片套:8片" },
        { material: "", year: "07款--14款", note: "4门4座" },
        { material: "", year: "15款--19款", note: "4门4座" },
        { material: "", year: "15款--19款", note: "尾箱带滑道、带网兜" },
        { material: "", year: "20款--", note: "4门5座" },
      ] },
      { model: "X7", variants: [
        { material: "", year: "19款--", note: "门座:5门6座；片套:12片；二排靠背是胶壳，无二排靠背。；门座:5门7座；片套:15片；三排靠背有挂钩孔" },
      ] },
      { model: "X7 原车6座", variants: [
        { material: "", year: "19款--", note: "二排靠背是胶壳，无二排靠背。" },
      ] },
      { model: "X7 原车7座", variants: [
        { material: "", year: "19款--", note: "三排靠背有挂钩孔" },
      ] },
      { model: "XM", variants: [
        { material: "", year: "24款--", note: "4门5座" },
      ] },
    ],
  },
];

export const BMW_PROJECT_COUNT = 3;
