/**
 * avatr 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs avatr --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/avatr/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/avatr.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const avatrFitmentImages: readonly BrandFitmentImage[] = [
  { model: "06", project: "底盘护板", path: "/images/products/avatr/fitment/06-skid-plate.webp", source: "阿维塔/阿维塔06/成品图/webp/阿维塔06底盘护板.webp" },
  { model: "07", project: "底盘护板", path: "/images/products/avatr/fitment/07-skid-plate.webp", source: "阿维塔/阿维塔07/成品图/webp/阿维塔07底盘护板.webp" },
  { model: "11", project: "底盘护板", path: "/images/products/avatr/fitment/11-skid-plate.webp", source: "阿维塔/阿维塔11/成品图/webp/阿维塔11底盘护板.webp" },
];

export const avatrFitmentImageCount = 3;
