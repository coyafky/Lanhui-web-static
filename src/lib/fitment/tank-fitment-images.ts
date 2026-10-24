/**
 * tank 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs tank --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/tank/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/tank.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const tankFitmentImages: readonly BrandFitmentImage[] = [
  { model: "400", project: "底盘护板", path: "/images/products/tank/fitment/400-skid-plate.webp", source: "坦克/坦克400/成品图/webp/坦克400底盘护板.webp" },
  { model: "500", project: "底盘护板", path: "/images/products/tank/fitment/500-skid-plate.webp", source: "坦克/坦克500/成品图/webp/坦克500底盘护板.webp" },
  { model: "700", project: "底盘护板", path: "/images/products/tank/fitment/700-skid-plate.webp", source: "坦克/坦克700/成品图/webp/坦克700底盘护板.webp" },
];

export const tankFitmentImageCount = 3;
