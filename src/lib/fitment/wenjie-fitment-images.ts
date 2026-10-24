/**
 * wenjie 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs wenjie --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/wenjie/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/wenjie.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const wenjieFitmentImages: readonly BrandFitmentImage[] = [
  { model: "M5", project: "底盘护板", path: "/images/products/wenjie/fitment/m5-skid-plate.webp", source: "问界/问界M5/成品图/webp/问界M5底盘护板.webp" },
  { model: "M6", project: "底盘护板", path: "/images/products/wenjie/fitment/m6-skid-plate.webp", source: "问界/问界M6/成品图/webp/问界M6底盘护板.webp" },
  { model: "M6", project: "电动踏板", path: "/images/products/wenjie/fitment/m6-step.webp", source: "问界/问界M6/成品图/webp/问界M6电动踏板-单灯款.webp" },
  { model: "M6", project: "小桌板", path: "/images/products/wenjie/fitment/m6-tray-table.webp", source: "问界/问界M6/成品图/webp/问界M6小桌板.webp" },
  { model: "M7", project: "地板", path: "/images/products/wenjie/fitment/m7-flooring.webp", source: "问界/问界M7/成品图/webp/问界M7地板.webp" },
  { model: "M7", project: "底盘护板", path: "/images/products/wenjie/fitment/m7-skid-plate.webp", source: "问界/问界M7/成品图/webp/问界M7底盘护板.webp" },
  { model: "M7", project: "电动踏板", path: "/images/products/wenjie/fitment/m7-step.webp", source: "问界/问界M7/成品图/webp/问界M7电动踏板-单灯款.webp" },
  { model: "M7", project: "小桌板", path: "/images/products/wenjie/fitment/m7-tray-table.webp", source: "问界/问界M7/成品图/webp/问界M7小桌板.webp" },
  { model: "M8", project: "包围", path: "/images/products/wenjie/fitment/m8-body-kit.webp", source: "问界/问界M8/成品图/webp/问界M8包围.webp" },
  { model: "M8", project: "地板", path: "/images/products/wenjie/fitment/m8-flooring.webp", source: "问界/问界M8/成品图/webp/问界M8地板.webp" },
  { model: "M8", project: "底盘护板", path: "/images/products/wenjie/fitment/m8-skid-plate.webp", source: "问界/问界M8/成品图/webp/问界M8底盘护板.webp" },
  { model: "M8", project: "电动踏板", path: "/images/products/wenjie/fitment/m8-step.webp", source: "问界/问界M8/成品图/webp/问界M8电动踏板-单灯款.webp" },
  { model: "M8", project: "小桌板", path: "/images/products/wenjie/fitment/m8-tray-table.webp", source: "问界/问界M8/成品图/webp/问界M8小桌板-2.webp" },
  { model: "M9", project: "地板", path: "/images/products/wenjie/fitment/m9-flooring.webp", source: "问界/问界M9/成品图/webp/问界M9地板.webp" },
  { model: "M9", project: "底盘护板", path: "/images/products/wenjie/fitment/m9-skid-plate.webp", source: "问界/问界M9/成品图/webp/问界M9底盘护板.webp" },
  { model: "M9", project: "电动踏板", path: "/images/products/wenjie/fitment/m9-step.webp", source: "问界/问界M9/成品图/webp/问界M9电动踏板-单灯款.webp" },
  { model: "M9", project: "小桌板", path: "/images/products/wenjie/fitment/m9-tray-table.webp", source: "问界/问界M9/成品图/webp/问界M9小桌板.webp" },
];

export const wenjieFitmentImageCount = 17;
