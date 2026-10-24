/**
 * li-auto 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs li-auto --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/li-auto/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/li-auto.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const liAutoFitmentImages: readonly BrandFitmentImage[] = [
  { model: "i6", project: "包围", path: "/images/products/li-auto/fitment/i6-body-kit.webp", source: "理想/理想i6/成品图/webp/理想i6包围.webp" },
  { model: "i6", project: "底盘护板", path: "/images/products/li-auto/fitment/i6-skid-plate.webp", source: "理想/理想i6/成品图/webp/理想i6底盘护板.webp" },
  { model: "i6", project: "小桌板", path: "/images/products/li-auto/fitment/i6-tray-table.webp", source: "理想/理想i6/成品图/webp/理想i6小桌板.webp" },
  { model: "L6", project: "底盘护板", path: "/images/products/li-auto/fitment/l6-skid-plate.webp", source: "理想/理想L6/成品图/webp/理想L6底盘护板.webp" },
  { model: "L6", project: "小桌板", path: "/images/products/li-auto/fitment/l6-tray-table.webp", source: "理想/理想L6/成品图/webp/理想L6小桌板-2.webp" },
  { model: "L7", project: "包围", path: "/images/products/li-auto/fitment/l7-body-kit.webp", source: "理想/理想L7/成品图/webp/理想L7包围.webp" },
  { model: "L7", project: "底盘护板", path: "/images/products/li-auto/fitment/l7-skid-plate.webp", source: "理想/理想L7/成品图/webp/理想L7底盘护板.webp" },
  { model: "L7", project: "电动踏板", path: "/images/products/li-auto/fitment/l7-step.webp", source: "理想/理想L7/成品图/webp/理想L7电动踏板-单灯款.webp" },
  { model: "L7", project: "小桌板", path: "/images/products/li-auto/fitment/l7-tray-table.webp", source: "理想/理想L7/成品图/webp/理想L7小桌板.webp" },
  { model: "L8", project: "包围", path: "/images/products/li-auto/fitment/l8-body-kit.webp", source: "理想/理想L8/成品图/webp/理想L8包围.webp" },
  { model: "L8", project: "底盘护板", path: "/images/products/li-auto/fitment/l8-skid-plate.webp", source: "理想/理想L8/成品图/webp/理想L8底盘护板-2.webp" },
  { model: "L8", project: "电动踏板", path: "/images/products/li-auto/fitment/l8-step.webp", source: "理想/理想L8/成品图/webp/理想L8电动踏板-单灯款.webp" },
  { model: "L8", project: "小桌板", path: "/images/products/li-auto/fitment/l8-tray-table.webp", source: "理想/理想L8/成品图/webp/理想L8小桌板.webp" },
  { model: "L9", project: "包围", path: "/images/products/li-auto/fitment/l9-body-kit.webp", source: "理想/理想L9/成品图/webp/理想L9包围.webp" },
  { model: "L9", project: "底盘护板", path: "/images/products/li-auto/fitment/l9-skid-plate.webp", source: "理想/理想L9/成品图/webp/理想L9底盘护板.webp" },
  { model: "L9", project: "电动踏板", path: "/images/products/li-auto/fitment/l9-step.webp", source: "理想/理想L9/成品图/webp/理想L9电动踏板-单灯款.webp" },
  { model: "L9", project: "小桌板", path: "/images/products/li-auto/fitment/l9-tray-table.webp", source: "理想/理想L9/成品图/webp/理想L9小桌板.webp" },
  { model: "MEGA", project: "地板", path: "/images/products/li-auto/fitment/mega-flooring.webp", source: "理想/理想MEGA/成品图/webp/理想MEGA地板.webp" },
  { model: "ONE", project: "底盘护板", path: "/images/products/li-auto/fitment/one-skid-plate.webp", source: "理想/理想ONE/成品图/webp/理想ONE底盘护板.webp" },
  { model: "ONE", project: "电动踏板", path: "/images/products/li-auto/fitment/one-step.webp", source: "理想/理想ONE/成品图/webp/理想ONE电动踏板-单灯款.webp" },
];

export const liUautoFitmentImageCount = 20;
