/**
 * hongqi 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs hongqi --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/hongqi/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/hongqi.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const hongqiFitmentImages: readonly BrandFitmentImage[] = [
  { model: "E-QM5", project: "底盘护板", path: "/images/products/hongqi/fitment/e-qm5-skid-plate.webp", source: "红旗/红旗E-QM5/成品图/webp/红旗E-QM5底盘护板.webp" },
];

export const hongqiFitmentImageCount = 1;
