/**
 * xiaomi 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs xiaomi --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/xiaomi/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/xiaomi.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const xiaomiFitmentImages: readonly BrandFitmentImage[] = [
  { model: "SU7", project: "底盘护板", path: "/images/products/xiaomi/fitment/su7-skid-plate.webp", source: "小米/小米SU7/成品图/webp/小米SU7底盘护板-2.webp" },
  { model: "YU7", project: "包围", path: "/images/products/xiaomi/fitment/yu7-body-kit.webp", source: "小米/小米YU7/成品图/webp/小米YU7包围.webp" },
  { model: "YU7", project: "底盘护板", path: "/images/products/xiaomi/fitment/yu7-skid-plate.webp", source: "小米/小米YU7/成品图/webp/小米YU7底盘护板-2.webp" },
];

export const xiaomiFitmentImageCount = 3;
