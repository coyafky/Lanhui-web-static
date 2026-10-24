/**
 * zeekr 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs zeekr --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/zeekr/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/zeekr.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const zeekrFitmentImages: readonly BrandFitmentImage[] = [
  { model: "001", project: "包围", path: "/images/products/zeekr/fitment/001-body-kit.webp", source: "极氪/极氪001/成品图/webp/极氪001包围.webp" },
  { model: "001", project: "底盘护板", path: "/images/products/zeekr/fitment/001-skid-plate.webp", source: "极氪/极氪001/成品图/webp/极氪001底盘护板.webp" },
  { model: "007", project: "底盘护板", path: "/images/products/zeekr/fitment/007-skid-plate.webp", source: "极氪/极氪007/成品图/webp/极氪007底盘护板.webp" },
  { model: "007GT", project: "底盘护板", path: "/images/products/zeekr/fitment/007gt-skid-plate.webp", source: "极氪/极氪007GT/成品图/webp/极氪007GT底盘护板.webp" },
  { model: "009", project: "包围", path: "/images/products/zeekr/fitment/009-body-kit.webp", source: "极氪/极氪009/成品图/webp/极氪009包围.webp" },
  { model: "009", project: "底盘护板", path: "/images/products/zeekr/fitment/009-skid-plate.webp", source: "极氪/极氪009/成品图/webp/极氪009底盘护板.webp" },
  { model: "7X", project: "底盘护板", path: "/images/products/zeekr/fitment/7x-skid-plate.webp", source: "极氪/极氪7X/成品图/webp/极氪7X底盘护板.webp" },
  { model: "7X", project: "小桌板", path: "/images/products/zeekr/fitment/7x-tray-table.webp", source: "极氪/极氪7X/成品图/webp/极氪7X小桌板.webp" },
  { model: "8X", project: "底盘护板", path: "/images/products/zeekr/fitment/8x-skid-plate.webp", source: "极氪/极氪8X/成品图/webp/极氪8X底盘护板.webp" },
  { model: "9X", project: "地板", path: "/images/products/zeekr/fitment/9x-flooring.webp", source: "极氪/极氪9X/成品图/webp/极氪9X地板.webp" },
  { model: "9X", project: "底盘护板", path: "/images/products/zeekr/fitment/9x-skid-plate.webp", source: "极氪/极氪9X/成品图/webp/极氪9X底盘护板.webp" },
  { model: "9X", project: "小桌板", path: "/images/products/zeekr/fitment/9x-tray-table.webp", source: "极氪/极氪9X/成品图/webp/极氪9X小桌板.webp" },
  { model: "X", project: "底盘护板", path: "/images/products/zeekr/fitment/x-skid-plate.webp", source: "极氪/极氪X/成品图/webp/极氪X底盘护板.webp" },
];

export const zeekrFitmentImageCount = 13;
