/**
 * 魏牌 适配产品图映射（自动生成，勿手改）
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

export const weyFitmentImages: readonly BrandFitmentImage[] = [
  {
    model: "蓝山",
    project: "底盘护板",
    label: "蓝山 底盘护板",
    path: "/images/products/wey/fitment/lanshan-skid-plate.webp",
    source: "魏牌/魏牌蓝山/成品图/webp/魏牌蓝山底盘护板.webp",
  },
  {
    model: "高山",
    project: "底盘护板",
    label: "高山 底盘护板",
    path: "/images/products/wey/fitment/gaoshan-skid-plate.webp",
    source: "魏牌/魏牌高山/成品图/webp/魏牌高山底盘护板.webp",
  },
  {
    model: "摩卡",
    project: "底盘护板",
    label: "摩卡 底盘护板",
    path: "/images/products/wey/fitment/mocha-skid-plate.webp",
    source: "魏牌/魏牌摩卡/成品图/webp/魏牌摩卡底盘护板.webp",
  },
  {
    model: "V9X",
    project: "底盘护板",
    label: "V9X 底盘护板",
    path: "/images/products/wey/fitment/v9x-skid-plate.webp",
    source: "魏牌/魏牌V9X/成品图/webp/魏牌V9X底盘护板.webp",
  },
  {
    model: "VV5",
    project: "底盘护板",
    label: "VV5 底盘护板",
    path: "/images/products/wey/fitment/vv5-skid-plate.webp",
    source: "魏牌/魏牌VV5/成品图/webp/魏牌VV5底盘护板.webp",
  },
];

/** 该品牌可渲染的产品图张数（用于页面统计，避免手写数字） */
export const WEY_FITMENT_IMAGE_COUNT = 5;
