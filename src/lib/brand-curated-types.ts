/**
 * 品牌「车系归并 + 项目矩阵」数据层的**泛型契约**
 *
 * 各品牌的 `<brand>-model-groups.ts` / `<brand>-project-matrix.ts` 由
 * `scripts/build-brand-curated-data.mjs` 生成，结构完全一致，只有分组 key 的
 * 字面量联合类型不同。组件（`BrandModelGroupGrid` / `BrandProjectMatrix`）
 * 只依赖这里定义的泛型形状 → 新品牌无需改组件。
 */

/** 车系卡（S1 渲染单位） */
export interface CuratedModelCardShape {
  /** 车系显示名 */
  readonly displayName: string;
  /** 所属分组 key */
  readonly group: string;
  /** 合并进来的原始数据行（用于与适配库逐字对账） */
  readonly sourceModels: readonly string[];
  /** 变体备注：配置差异压成一行，无则为空串 */
  readonly note: string;
  /** 该车系支持的项目名 */
  readonly projects: readonly string[];
  /** 适配备注条数 */
  readonly specCount: number;
  /** 已登记的适配产品图 */
  readonly images: readonly { model: string; project: string; path: string }[];
  /** 车系子页（仅在页真实存在时给出） */
  readonly subpage?: string;
}

/** 项目下的一条年款/材质备注（**刻意不含供应商型号编号**） */
export interface CuratedVariantShape {
  readonly material: string;
  readonly year: string;
  readonly note: string;
}

export interface CuratedProjectModelShape {
  readonly model: string;
  readonly variants: readonly CuratedVariantShape[];
}

/** 项目矩阵的一项（S2 渲染单位） */
export interface CuratedProjectShape {
  readonly name: string;
  /** 覆盖车系数（按原始数据行计） */
  readonly modelCount: number;
  readonly models: readonly CuratedProjectModelShape[];
}
