/**
 * geely-galaxy 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs geely-galaxy --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/geely-galaxy/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/geely-galaxy.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const geelyGalaxyFitmentImages: readonly BrandFitmentImage[] = [
  { model: "星舰7", project: "底盘护板", path: "/images/products/geely-galaxy/fitment/7-skid-plate.webp", source: "吉利银河/吉利银河星舰7/成品图/webp/吉利银河星舰7底盘护板.webp" },
  { model: "星耀6", project: "底盘护板", path: "/images/products/geely-galaxy/fitment/6-skid-plate.webp", source: "吉利银河/吉利银河星耀6/成品图/webp/吉利银河星耀6底盘护板.webp" },
  { model: "星耀7", project: "底盘护板", path: "/images/products/geely-galaxy/fitment/7-skid-plate.webp", source: "吉利银河/吉利银河星耀7/成品图/webp/吉利银河星耀7底盘护板.webp" },
  { model: "E5", project: "底盘护板", path: "/images/products/geely-galaxy/fitment/e5-skid-plate.webp", source: "吉利银河/吉利银河E5/成品图/webp/吉利银河E5底盘护板.webp" },
  { model: "E8", project: "底盘护板", path: "/images/products/geely-galaxy/fitment/e8-skid-plate.webp", source: "吉利银河/吉利银河E8/成品图/webp/吉利银河E8底盘护板.webp" },
  { model: "L6", project: "底盘护板", path: "/images/products/geely-galaxy/fitment/l6-skid-plate.webp", source: "吉利银河/吉利银河L6/成品图/webp/吉利银河L6底盘护板.webp" },
  { model: "M7", project: "底盘护板", path: "/images/products/geely-galaxy/fitment/m7-skid-plate.webp", source: "吉利银河/吉利银河M7/成品图/webp/吉利银河M7底盘护板.webp" },
  { model: "M9", project: "底盘护板", path: "/images/products/geely-galaxy/fitment/m9-skid-plate.webp", source: "吉利银河/吉利银河M9/成品图/webp/吉利银河M9底盘护板.webp" },
  { model: "V900", project: "底盘护板", path: "/images/products/geely-galaxy/fitment/v900-skid-plate.webp", source: "吉利银河/吉利银河V900/成品图/webp/吉利银河V900底盘护板.webp" },
];

export const geelyUgalaxyFitmentImageCount = 9;
