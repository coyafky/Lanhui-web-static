/**
 * ledao 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs ledao --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/ledao/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/ledao.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const ledaoFitmentImages: readonly BrandFitmentImage[] = [
  { model: "L60", project: "小桌板", path: "/images/products/ledao/fitment/l60-tray-table.webp", source: "乐道/乐道L60/成品图/webp/乐道L60小桌板.webp" },
  { model: "L90", project: "底盘护板", path: "/images/products/ledao/fitment/l90-skid-plate.webp", source: "乐道/乐道L90/成品图/webp/乐道L90底盘护板.webp" },
];

export const ledaoFitmentImageCount = 2;
