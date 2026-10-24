/**
 * arcfox 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs arcfox --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/arcfox/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/arcfox.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const arcfoxFitmentImages: readonly BrandFitmentImage[] = [
  { model: "阿尔法S5", project: "底盘护板", path: "/images/products/arcfox/fitment/s5-skid-plate.webp", source: "极狐/极狐阿尔法S5/成品图/webp/极狐阿尔法S5底盘护板.webp" },
  { model: "阿尔法T5", project: "底盘护板", path: "/images/products/arcfox/fitment/t5-skid-plate.webp", source: "极狐/极狐阿尔法T5/成品图/webp/极狐阿尔法T5底盘护板.webp" },
  { model: "贝塔S3", project: "底盘护板", path: "/images/products/arcfox/fitment/s3-skid-plate.webp", source: "极狐/极狐贝塔S3/成品图/webp/极狐贝塔S3底盘护板.webp" },
  { model: "问道V9", project: "底盘护板", path: "/images/products/arcfox/fitment/v9-skid-plate.webp", source: "极狐/极狐问道V9/成品图/webp/极狐问道V9底盘护板.webp" },
  { model: "T1", project: "底盘护板", path: "/images/products/arcfox/fitment/t1-skid-plate.webp", source: "极狐/极狐T1/成品图/webp/极狐T1底盘护板.webp" },
];

export const arcfoxFitmentImageCount = 5;
