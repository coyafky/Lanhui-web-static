/**
 * byd 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs byd --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/byd/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/byd.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const bydFitmentImages: readonly BrandFitmentImage[] = [
  { model: "海豹", project: "底盘护板", path: "/images/products/byd/fitment/mje1u-skid-plate.webp", source: "比亚迪/比亚迪海豹/成品图/webp/比亚迪海豹底盘护板-2.webp" },
  { model: "海狮", project: "底盘护板", path: "/images/products/byd/fitment/mj907-skid-plate.webp", source: "比亚迪/比亚迪海狮/成品图/webp/比亚迪海狮底盘护板-2.webp" },
  { model: "海豚", project: "底盘护板", path: "/images/products/byd/fitment/mje0z-skid-plate.webp", source: "比亚迪/比亚迪海豚/成品图/webp/比亚迪海豚底盘护板-2.webp" },
  { model: "汉", project: "底盘护板", path: "/images/products/byd/fitment/mle1-skid-plate.webp", source: "比亚迪/比亚迪汉/成品图/webp/比亚迪汉底盘护板-2.webp" },
  { model: "秦", project: "底盘护板", path: "/images/products/byd/fitment/mo2u-skid-plate.webp", source: "比亚迪/比亚迪秦/成品图/webp/比亚迪秦底盘护板.webp" },
  { model: "宋", project: "底盘护板", path: "/images/products/byd/fitment/mi2z-skid-plate.webp", source: "比亚迪/比亚迪宋/成品图/webp/比亚迪宋底盘护板-2.webp" },
  { model: "唐", project: "底盘护板", path: "/images/products/byd/fitment/mgsw-skid-plate.webp", source: "比亚迪/比亚迪唐/成品图/webp/比亚迪唐底盘护板-2.webp" },
  { model: "唐", project: "小桌板", path: "/images/products/byd/fitment/mgsw-tray-table.webp", source: "比亚迪/比亚迪唐/成品图/webp/比亚迪唐小桌板.webp" },
  { model: "夏", project: "底盘护板", path: "/images/products/byd/fitment/mhlb-skid-plate.webp", source: "比亚迪/比亚迪夏/成品图/webp/比亚迪夏底盘护板-2.webp" },
  { model: "元", project: "底盘护板", path: "/images/products/byd/fitment/mg1v-skid-plate.webp", source: "比亚迪/比亚迪元/成品图/webp/比亚迪元底盘护板-2.webp" },
];

export const bydFitmentImageCount = 10;
