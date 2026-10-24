/**
 * voyah 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs voyah --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/voyah/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/voyah.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const voyahFitmentImages: readonly BrandFitmentImage[] = [
  { model: "梦想家", project: "底盘护板", path: "/images/products/voyah/fitment/mfssw9-skid-plate.webp", source: "岚图/岚图梦想家/成品图/webp/岚图梦想家底盘护板-2.webp" },
  { model: "泰山", project: "底盘护板", path: "/images/products/voyah/fitment/mj1c1-skid-plate.webp", source: "岚图/岚图泰山X8/成品图/webp/岚图泰山底盘护板.webp" },
  { model: "知音", project: "底盘护板", path: "/images/products/voyah/fitment/ml86m-skid-plate.webp", source: "岚图/岚图知音/成品图/webp/岚图知音底盘护板-2.webp" },
  { model: "知音", project: "小桌板", path: "/images/products/voyah/fitment/ml86m-tray-table.webp", source: "岚图/岚图知音/成品图/webp/岚图知音小桌板-2.webp" },
  { model: "追光", project: "底盘护板", path: "/images/products/voyah/fitment/moxrg-skid-plate.webp", source: "岚图/岚图追光/成品图/webp/岚图追光底盘护板-2.webp" },
  { model: "FREE", project: "底盘护板", path: "/images/products/voyah/fitment/free-skid-plate.webp", source: "岚图/岚图FREE/成品图/webp/岚图FREE底盘护板.webp" },
];

export const voyahFitmentImageCount = 6;
