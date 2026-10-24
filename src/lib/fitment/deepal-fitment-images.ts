/**
 * deepal 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs deepal --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/deepal/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/deepal.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const deepalFitmentImages: readonly BrandFitmentImage[] = [
  { model: "G318", project: "底盘护板", path: "/images/products/deepal/fitment/g318-skid-plate.webp", source: "深蓝/深蓝G318/成品图/webp/深蓝G318底盘护板-2.webp" },
  { model: "L06", project: "底盘护板", path: "/images/products/deepal/fitment/l06-skid-plate.webp", source: "深蓝/深蓝L06/成品图/webp/深蓝L06底盘护板-2.webp" },
  { model: "S05", project: "底盘护板", path: "/images/products/deepal/fitment/s05-skid-plate.webp", source: "深蓝/深蓝S05/成品图/webp/深蓝S05底盘护板-2.webp" },
  { model: "S07", project: "底盘护板", path: "/images/products/deepal/fitment/s07-skid-plate.webp", source: "深蓝/深蓝S07/成品图/webp/深蓝S07底盘护板-2.webp" },
  { model: "S09", project: "底盘护板", path: "/images/products/deepal/fitment/s09-skid-plate.webp", source: "深蓝/深蓝S09/成品图/webp/深蓝S09底盘护板-2.webp" },
];

export const deepalFitmentImageCount = 5;
