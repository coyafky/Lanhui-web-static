/**
 * leapmotor 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs leapmotor --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/leapmotor/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/leapmotor.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const leapmotorFitmentImages: readonly BrandFitmentImage[] = [
  { model: "A05", project: "底盘护板", path: "/images/products/leapmotor/fitment/a05-skid-plate.webp", source: "零跑/零跑A05/成品图/webp/零跑A05底盘护板-2.webp" },
  { model: "A10", project: "底盘护板", path: "/images/products/leapmotor/fitment/a10-skid-plate.webp", source: "零跑/零跑A10/成品图/webp/零跑A10底盘护板-2.webp" },
  { model: "B01", project: "底盘护板", path: "/images/products/leapmotor/fitment/b01-skid-plate.webp", source: "零跑/零跑B01/成品图/webp/零跑B01底盘护板-2.webp" },
  { model: "B10", project: "底盘护板", path: "/images/products/leapmotor/fitment/b10-skid-plate.webp", source: "零跑/零跑B10/成品图/webp/零跑B10底盘护板-2.webp" },
  { model: "C01", project: "底盘护板", path: "/images/products/leapmotor/fitment/c01-skid-plate.webp", source: "零跑/零跑C01/成品图/webp/零跑C01底盘护板.webp" },
  { model: "C10", project: "底盘护板", path: "/images/products/leapmotor/fitment/c10-skid-plate.webp", source: "零跑/零跑C10/成品图/webp/零跑C10底盘护板-2.webp" },
  { model: "C11", project: "底盘护板", path: "/images/products/leapmotor/fitment/c11-skid-plate.webp", source: "零跑/零跑C11/成品图/webp/零跑C11底盘护板-2.webp" },
  { model: "C16", project: "底盘护板", path: "/images/products/leapmotor/fitment/c16-skid-plate.webp", source: "零跑/零跑C16/成品图/webp/零跑C16底盘护板-2.webp" },
  { model: "D19", project: "底盘护板", path: "/images/products/leapmotor/fitment/d19-skid-plate.webp", source: "零跑/零跑D19/成品图/webp/零跑D19底盘护板-2.webp" },
  { model: "D99", project: "底盘护板", path: "/images/products/leapmotor/fitment/d99-skid-plate.webp", source: "零跑/零跑D99/成品图/webp/零跑D99底盘护板.webp" },
  { model: "Lafa5", project: "底盘护板", path: "/images/products/leapmotor/fitment/lafa5-skid-plate.webp", source: "零跑/零跑Lafa5/成品图/webp/零跑Lafa5底盘护板-2.webp" },
  { model: "T03", project: "底盘护板", path: "/images/products/leapmotor/fitment/t03-skid-plate.webp", source: "零跑/零跑T03/成品图/webp/零跑T03底盘护板.webp" },
];

export const leapmotorFitmentImageCount = 12;
