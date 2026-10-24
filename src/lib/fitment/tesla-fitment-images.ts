/**
 * tesla 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs tesla --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/tesla/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/tesla.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const teslaFitmentImages: readonly BrandFitmentImage[] = [
  { model: "Model 3", project: "底盘护板", path: "/images/products/tesla/fitment/model-3-skid-plate.webp", source: "特斯拉/特斯拉Model 3/成品图/webp/特斯拉Model 3底盘护板.webp" },
  { model: "Model Y", project: "包围", path: "/images/products/tesla/fitment/model-y-body-kit.webp", source: "特斯拉/特斯拉Model Y/成品图/webp/特斯拉ModelY包围.webp" },
  { model: "Model Y", project: "底盘护板", path: "/images/products/tesla/fitment/model-y-skid-plate.webp", source: "特斯拉/特斯拉Model Y/成品图/webp/特斯拉Model Y底盘护板.webp" },
  { model: "Model Y-L", project: "小桌板", path: "/images/products/tesla/fitment/model-y-l-tray-table.webp", source: "特斯拉/特斯拉Model Y-L/成品图/webp/特斯拉ModelY-L小桌板.webp" },
];

export const teslaFitmentImageCount = 4;
