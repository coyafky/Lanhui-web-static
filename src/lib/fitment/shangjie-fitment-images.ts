/**
 * shangjie 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs shangjie --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/shangjie/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/shangjie.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const shangjieFitmentImages: readonly BrandFitmentImage[] = [
  { model: "H5", project: "底盘护板", path: "/images/products/shangjie/fitment/h5-skid-plate.webp", source: "尚界/尚界H5/成品图/webp/尚界H5底盘护板.webp" },
  { model: "H5", project: "小桌板", path: "/images/products/shangjie/fitment/h5-tray-table.webp", source: "尚界/尚界H5/成品图/webp/尚界H5小桌板.webp" },
  { model: "Z7", project: "底盘护板", path: "/images/products/shangjie/fitment/z7-skid-plate.webp", source: "尚界/尚界Z7/成品图/webp/尚界Z7底盘护板-2.webp" },
  { model: "Z7T", project: "底盘护板", path: "/images/products/shangjie/fitment/z7t-skid-plate.webp", source: "尚界/尚界Z7T/成品图/webp/尚界Z7T底盘护板-2.webp" },
];

export const shangjieFitmentImageCount = 4;
