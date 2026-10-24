/**
 * xiangjie 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs xiangjie --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/xiangjie/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/xiangjie.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const xiangjieFitmentImages: readonly BrandFitmentImage[] = [
  { model: "S9T", project: "底盘护板", path: "/images/products/xiangjie/fitment/s9t-skid-plate.webp", source: "享界/享界S9T/成品图/webp/享界S9T底盘护板.webp" },
];

export const xiangjieFitmentImageCount = 1;
