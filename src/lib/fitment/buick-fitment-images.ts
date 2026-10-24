/**
 * 别克 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-fitment-posters.mjs --apply`
 * 源：`供应商产品资料/_整理后/<品牌>/<车型>/成品图/webp/`（**带文字的信息图**）
 * 产物：`public/images/products/<brand>/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/<brand>.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly label: string;
  readonly path: string;
  readonly source: string;
};

export const buickFitmentImages: readonly BrandFitmentImage[] = [
  {
    model: "至境E7",
    project: "小桌板",
    label: "至境E7 小桌板",
    path: "/images/products/buick/fitment/zhijing-e7-tray-table.webp",
    source: "别克/webp/小桌板-别克至境.webp",
  },
];

/** 该品牌可渲染的产品图张数（用于页面统计，避免手写数字） */
export const BUICK_FITMENT_IMAGE_COUNT = 1;
