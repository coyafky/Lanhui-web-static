/**
 * xpeng 适配产品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-brand-posters-auto.mjs xpeng --apply`
 * 源：`供应商产品资料/_整理后/{品牌}/{车型}/成品图/`（**带文字的信息图**）
 * 产物：`public/images/products/xpeng/fitment/<slug>.webp`（长边 720，webp q82）
 *
 * ⚠️ 图上文字（材质/年款/口号）可能与适配数据不一致 —— 它只是图示，
 *    权威口径是 src/lib/fitment/xpeng.ts，页面渲染时须配免责声明。
 */

export type BrandFitmentImage = {
  readonly model: string;
  readonly project: string;
  readonly path: string;
  readonly source: string;
};

export const xpengFitmentImages: readonly BrandFitmentImage[] = [
  { model: "G6", project: "底盘护板", path: "/images/products/xpeng/fitment/g6-skid-plate.webp", source: "小鹏/小鹏G6/成品图/webp/小鹏G6底盘护板-2.webp" },
  { model: "G6", project: "小桌板", path: "/images/products/xpeng/fitment/g6-tray-table.webp", source: "小鹏/小鹏G6/成品图/webp/小鹏G6小桌板-2.webp" },
  { model: "G7", project: "底盘护板", path: "/images/products/xpeng/fitment/g7-skid-plate.webp", source: "小鹏/小鹏G7/成品图/webp/小鹏G7底盘护板.webp" },
  { model: "G9", project: "底盘护板", path: "/images/products/xpeng/fitment/g9-skid-plate.webp", source: "小鹏/小鹏G9/成品图/webp/小鹏G9底盘护板-2.webp" },
  { model: "GX", project: "底盘护板", path: "/images/products/xpeng/fitment/gx-skid-plate.webp", source: "小鹏/小鹏GX/成品图/webp/小鹏GX底盘护板-2.webp" },
  { model: "L03", project: "底盘护板", path: "/images/products/xpeng/fitment/l03-skid-plate.webp", source: "小鹏/小鹏L03/成品图/webp/小鹏L03底盘护板.webp" },
  { model: "P5", project: "底盘护板", path: "/images/products/xpeng/fitment/p5-skid-plate.webp", source: "小鹏/小鹏P5/成品图/webp/小鹏P5底盘护板.webp" },
  { model: "P7", project: "底盘护板", path: "/images/products/xpeng/fitment/p7-skid-plate.webp", source: "小鹏/小鹏P7/成品图/webp/小鹏P7底盘护板-2.webp" },
  { model: "X9", project: "包围", path: "/images/products/xpeng/fitment/x9-body-kit.webp", source: "小鹏/小鹏X9/成品图/webp/小鹏X9包围.webp" },
  { model: "X9", project: "底盘护板", path: "/images/products/xpeng/fitment/x9-skid-plate.webp", source: "小鹏/小鹏X9/成品图/webp/小鹏X9底盘护板-2.webp" },
];

export const xpengFitmentImageCount = 10;
