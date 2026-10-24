/**
 * haobo 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs haobo --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/haobo/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/haobo.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const haoboFitmentImages: readonly BrandFitmentImage[] = [
  { model: "A800", project: "底盘护板", path: "/images/products/haobo/fitment/a800-skid-plate.webp", source: "昊铂/昊铂A800/成品图/webp/昊铂A800底盘护板.webp" },
  { model: "GT", project: "底盘护板", path: "/images/products/haobo/fitment/gt-skid-plate.webp", source: "昊铂/昊铂GT/成品图/webp/昊铂GT底盘护板.webp" },
  { model: "HL", project: "底盘护板", path: "/images/products/haobo/fitment/hl-skid-plate.webp", source: "昊铂/昊铂HL/成品图/webp/昊铂HL底盘护板.webp" },
  { model: "HT", project: "底盘护板", path: "/images/products/haobo/fitment/ht-skid-plate.webp", source: "昊铂/昊铂HT/成品图/webp/昊铂HT底盘护板.webp" },
];

export const haoboFitmentImageCount = 4;
