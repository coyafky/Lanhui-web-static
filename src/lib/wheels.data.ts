/**
 * 轮毂数据模块 —— **生成物，请勿手改**。
 *
 * 由 `scripts/build-wheel-data.mjs` 从 U 盘两份供应商源数据（旋压 / 锻造）清洗生成。
 * 站点是 `output: "export"` 静态导出，构建期不能读 U 盘，因此本文件必须进 git。
 * 重新生成：`npm run wheels:data`；一致性校验：`npm run wheels:verify`。
 *
 * 只保留契约 §9.1 的公开字段；源表中的内部字段（进货/货位/供货商/来源表位置等）
 * 已在生成阶段剥离，逐项计数见 `scripts/wheel-data-report.json`。
 *
 * 生成时间：2026-09-21T10:35:39.414Z
 * 编号数：404
 */

/** 工艺。 */
export type WheelProcess = "旋压" | "锻造";

/** 单条孔距：孔数 + 孔距（mm）。双孔距车型会给出两条。 */
export type WheelPcd = {
  lugCount: number;
  pcdMm: number;
};

/** 一条规格明细行 = 一条 variant。未知一律 `null`，绝不用 0 表示未知。 */
export type WheelVariant = {
  /** 直径（英寸） */
  diameterIn: number | null;
  /** 宽度（英寸，J 值） */
  widthIn: number | null;
  /** 孔距；源表无法解析时为 `[]` 且已记入报告 */
  pcd: readonly WheelPcd[];
  /** 偏距 ET（mm） */
  offsetMm: number | null;
  /** 中心孔 CB（mm） */
  centerBoreMm: number | null;
  /** 颜色（已去首尾杂字符） */
  color: string | null;
};

/** 一个轮毂编号（路由 key / 图片名的唯一主键）。 */
export type WheelModel = {
  modelId: string;
  process: WheelProcess;
  /** 车系标签（源表原文：旋压取源 Sheet，锻造取车系目录名） */
  carSeries: string;
  variants: readonly WheelVariant[];
  /** 该编号下所有 variant 的颜色去重（保持首次出现顺序） */
  colors: readonly string[];
  /** 详情图廊；无源图时为 `[]`（页面用中性占位块，禁止用别款图顶替） */
  images: readonly string[];
};

/** 轮毂图片 public 目录前缀。 */
export const WHEEL_IMAGE_DIR = "/images/products/wheel";

/** 全量轮毂编号（旋压 + 锻造）。 */
export const wheelModels: readonly WheelModel[] = [
  {
    modelId: "GZ001",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
      "黑色全涂",
    ],
    images: [
      "/images/products/wheel/GZ001.webp",
    ],
    variants: [
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 57.1, color: "黑色车面" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色全涂" },
    ],
  },
  {
    modelId: "GZ002",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/GZ002.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 64.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 64.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 64.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ003",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/GZ003.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 64.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 64.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 64.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ004",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/GZ004.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ005",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
    ],
    images: [],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 64.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ006",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "亚黑",
      "高亮黑",
      "玄武黑",
      "钛空银",
    ],
    images: [
      "/images/products/wheel/GZ006.webp",
    ],
    variants: [
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亚黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "高亮黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "玄武黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "玄武黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "玄武黑" },
    ],
  },
  {
    modelId: "GZ007",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "玄武黑",
      "钛空银",
      "古铜色",
      "雅黑",
    ],
    images: [
      "/images/products/wheel/GZ007.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "古铜色" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "古铜色" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "玄武黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "古铜色" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
    ],
  },
  {
    modelId: "GZ008",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "钢琴黑",
      "钛空银",
      "磨砂古铜",
    ],
    images: [
      "/images/products/wheel/GZ008.webp",
    ],
    variants: [
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "钢琴黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "钛空银" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "磨砂古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "磨砂古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "磨砂古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钛空银" },
    ],
  },
  {
    modelId: "GZ009",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "亮白银",
      "钢琴黑",
      "磨砂古铜",
    ],
    images: [
      "/images/products/wheel/GZ009.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮白银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "亮白银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "磨砂古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮白银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "亮白银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮白银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "亮白银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "磨砂古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮白银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "亮白银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "亮白银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "亮白银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "磨砂古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "亮白银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "亮白银" },
    ],
  },
  {
    modelId: "GZ010",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "亮白银",
      "玄武黑",
      "磨砂古铜",
    ],
    images: [
      "/images/products/wheel/GZ010.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮白银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "亮白银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "磨砂古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮白银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "亮白银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮白银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "亮白银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "磨砂古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮白银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "亮白银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "亮白银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "亮白银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "玄武黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "磨砂古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "亮白银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "亮白银" },
    ],
  },
  {
    modelId: "GZ011",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "钛空银",
    ],
    images: [
      "/images/products/wheel/GZ011.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 38, centerBoreMm: 56.6, color: "钛空银" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 38, centerBoreMm: 56.6, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 38, centerBoreMm: 56.6, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "钛空银" },
    ],
  },
  {
    modelId: "GZ012",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "玄武黑",
    ],
    images: [
      "/images/products/wheel/GZ012.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "玄武黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "玄武黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "玄武黑" },
    ],
  },
  {
    modelId: "GZ013",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "古铜",
    ],
    images: [
      "/images/products/wheel/GZ013.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "古铜" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "古铜" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "古铜" },
    ],
  },
  {
    modelId: "GZ014",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "玄武黑",
      "银色车面",
    ],
    images: [
      "/images/products/wheel/GZ014.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "银色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "银色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "银色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "银色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "银色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "银色车面" },
    ],
  },
  {
    modelId: "GZ015",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "钛空银",
      "钢琴黑",
    ],
    images: [
      "/images/products/wheel/GZ015.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钛空银" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钢琴黑" },
    ],
  },
  {
    modelId: "GZ016",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "电镀",
      "高亮黑",
      "黑电镀",
    ],
    images: [
      "/images/products/wheel/GZ016.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 60.1, color: "电镀" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 60.1, color: "高亮黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "电镀" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 67.1, color: "电镀" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "电镀" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "电镀" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 60.1, color: "电镀" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 60.1, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "电镀" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 67.1, color: "电镀" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "电镀" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "电镀" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 60.1, color: "电镀" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 60.1, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "电镀" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 67.1, color: "电镀" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑电镀" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 67.1, color: "黑电镀" },
    ],
  },
  {
    modelId: "GZ017",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "钛空银",
      "玄武黑",
      "磨砂古铜",
    ],
    images: [
      "/images/products/wheel/GZ017.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "磨砂古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "玄武黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "钛空银" },
    ],
  },
  {
    modelId: "GZ018",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "钛空银",
      "雾面枪灰",
    ],
    images: [
      "/images/products/wheel/GZ018.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "雾面枪灰" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "雾面枪灰" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "雾面枪灰" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "雾面枪灰" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "雾面枪灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "雾面枪灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钛空银" },
    ],
  },
  {
    modelId: "GZ019",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "高亮黑",
      "钛空银",
      "磨砂古铜",
    ],
    images: [
      "/images/products/wheel/GZ019.webp",
    ],
    variants: [
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 57.1, color: "高亮黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "磨砂古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "磨砂古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "磨砂古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钛空银" },
    ],
  },
  {
    modelId: "GZ020",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "高亮黑",
      "雅黑",
      "钛空银",
      "玄武黑",
      "磨砂古铜",
      "亚黑",
      "古铜",
    ],
    images: [
      "/images/products/wheel/GZ020.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 32, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "雅黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 57.1, color: "高亮黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "磨砂古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "玄武黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "磨砂古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "玄武黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "玄武黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钛空银" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钛空银" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亚黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "高亮黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "高亮黑" },
    ],
  },
  {
    modelId: "GZ021",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "玄武黑",
      "琥珀白",
      "磨砂古铜",
      "石墨灰",
    ],
    images: [
      "/images/products/wheel/GZ021.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 73.1, color: "玄武黑" },
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 73.1, color: "琥珀白" },
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 73.1, color: "石墨灰" },
    ],
  },
  {
    modelId: "GZ022",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "钢琴黑",
    ],
    images: [
      "/images/products/wheel/GZ022.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
    ],
  },
  {
    modelId: "GZ023",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "钛空银",
    ],
    images: [
      "/images/products/wheel/GZ023.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钛空银" },
    ],
  },
  {
    modelId: "GZ024",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "钛空银车边",
      "钢琴黑",
      "磨砂古铜",
      "琥珀白",
    ],
    images: [
      "/images/products/wheel/GZ024.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钛空银车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "磨砂古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "琥珀白" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "琥珀白" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钛空银车边" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银车边" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钛空银车边" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "磨砂古铜" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银车边" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "磨砂古铜" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钛空银车边" },
    ],
  },
  {
    modelId: "GZ025",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "亮黑套白边",
    ],
    images: [
      "/images/products/wheel/GZ025.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮黑套白边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "亮黑套白边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮黑套白边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮黑套白边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "亮黑套白边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮黑套白边" },
    ],
  },
  {
    modelId: "GZ026",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "亮黑套白边",
    ],
    images: [
      "/images/products/wheel/GZ026.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮黑套白边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "亮黑套白边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮黑套白边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮黑套白边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "亮黑套白边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮黑套白边" },
    ],
  },
  {
    modelId: "GZ027",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "亮黑全涂",
    ],
    images: [
      "/images/products/wheel/GZ027.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.5, color: "亮黑全涂" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "亮黑全涂" },
    ],
  },
  {
    modelId: "GZ028",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
      "钢琴黑金属面",
    ],
    images: [
      "/images/products/wheel/GZ028.webp",
    ],
    variants: [
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑金属面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "钢琴黑金属面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑金属面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑金属面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑金属面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑金属面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑金属面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑金属面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑金属面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑金属面" },
    ],
  },
  {
    modelId: "GZ029",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "雅黑",
      "高亮黑",
    ],
    images: [
      "/images/products/wheel/GZ029.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "雅黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "雅黑" },
    ],
  },
  {
    modelId: "GZ030",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "高亮黑",
    ],
    images: [],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "高亮黑" },
    ],
  },
  {
    modelId: "GZ031",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "高亮黑车边",
    ],
    images: [
      "/images/products/wheel/GZ031.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "高亮黑车边" },
    ],
  },
  {
    modelId: "GZ032",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "银色",
      "白色",
    ],
    images: [
      "/images/products/wheel/GZ032.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 100 }, { lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "银色" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 100 }, { lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "白色" },
    ],
  },
  {
    modelId: "GZ033",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "雅黑",
      "高亮黑",
    ],
    images: [
      "/images/products/wheel/GZ033.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "雅黑" },
    ],
  },
  {
    modelId: "GZ034",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "高亮黑",
    ],
    images: [],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
    ],
  },
  {
    modelId: "GZ035",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "高亮黑",
    ],
    images: [
      "/images/products/wheel/GZ035.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "高亮黑" },
    ],
  },
  {
    modelId: "GZ036",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "雅黑",
      "亚黑",
    ],
    images: [
      "/images/products/wheel/GZ036.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "雅黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.5, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.5, color: "亚黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "亚黑" },
    ],
  },
  {
    modelId: "GZ037",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车边",
      "黑色车面",
      "银色车边",
    ],
    images: [
      "/images/products/wheel/GZ037.webp",
    ],
    variants: [
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 40, centerBoreMm: 56.6, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 38, centerBoreMm: 56.6, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 33, centerBoreMm: 72.6, color: "黑色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车边" },
    ],
  },
  {
    modelId: "GZ038",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "枪灰",
      "雅黑",
      "银色车面",
      "亚黑",
    ],
    images: [
      "/images/products/wheel/GZ038.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "枪灰" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "雅黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "银色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亚黑" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "枪灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "枪灰" },
    ],
  },
  {
    modelId: "GZ039",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
      "银色车面",
    ],
    images: [
      "/images/products/wheel/GZ039.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "银色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 33, centerBoreMm: 72.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ040",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "枪灰",
    ],
    images: [
      "/images/products/wheel/GZ040.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰" },
    ],
  },
  {
    modelId: "GZ041",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "电镀银",
      "枪灰",
    ],
    images: [
      "/images/products/wheel/GZ041.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 38, centerBoreMm: 56.6, color: "电镀银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "电镀银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "电镀银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "枪灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "电镀银" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "电镀银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "电镀银" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "电镀银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "电镀银" },
    ],
  },
  {
    modelId: "GZ042",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "亚黑",
      "枪灰",
    ],
    images: [
      "/images/products/wheel/GZ042.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 4, pcdMm: 108 }], offsetMm: 24, centerBoreMm: 65.1, color: "枪灰" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 4, pcdMm: 108 }], offsetMm: 24, centerBoreMm: 65.1, color: "亚黑" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 4, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 4, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 57.1, color: "亚黑" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 57.1, color: "枪灰" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 35, centerBoreMm: 56.6, color: "枪灰" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰" },
    ],
  },
  {
    modelId: "GZ043",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "亚黑",
      "枪灰",
    ],
    images: [
      "/images/products/wheel/GZ043.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 4, pcdMm: 108 }], offsetMm: 24, centerBoreMm: 65.1, color: "亚黑" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 4, pcdMm: 108 }], offsetMm: 24, centerBoreMm: 65.1, color: "枪灰" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 4, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 4, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 57.1, color: "亚黑" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 57.1, color: "枪灰" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 35, centerBoreMm: 56.6, color: "枪灰" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 38, centerBoreMm: 56.6, color: "枪灰" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "枪灰" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "亚黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "枪灰" },
    ],
  },
  {
    modelId: "GZ044",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "枪灰",
      "亚黑",
    ],
    images: [
      "/images/products/wheel/GZ044.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 57.1, color: "枪灰" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "亚黑" },
    ],
  },
  {
    modelId: "GZ045",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "枪灰",
      "亚黑",
    ],
    images: [
      "/images/products/wheel/GZ045.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亚黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "枪灰" },
    ],
  },
  {
    modelId: "GZ046",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "亚黑",
      "亚黑红边",
    ],
    images: [
      "/images/products/wheel/GZ046.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亚黑红边" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亚黑红边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑红边" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亚黑红边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "亚黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "亚黑" },
    ],
  },
  {
    modelId: "GZ047",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "电镀银",
      "黑色车边",
    ],
    images: [
      "/images/products/wheel/GZ047.webp",
    ],
    variants: [
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 73.1, color: "电镀银" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "电镀银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 38, centerBoreMm: 56.6, color: "电镀银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "电镀银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "电镀银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "电镀银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "电镀银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "电镀银" },
    ],
  },
  {
    modelId: "GZ048",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "钢琴黑",
      "钛空银",
      "电镀银",
    ],
    images: [
      "/images/products/wheel/GZ048.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "电镀银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "钛空银" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "电镀银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钛空银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "钛空银" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "钛空银" },
    ],
  },
  {
    modelId: "GZ049",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
      "枪灰",
      "银色车面",
    ],
    images: [
      "/images/products/wheel/GZ049.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "银色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "银色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ050",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/GZ050.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ051",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "银色车面",
    ],
    images: [
      "/images/products/wheel/GZ051.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "银色车面" },
      { diameterIn: 18, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "银色车面" },
    ],
  },
  {
    modelId: "GZ052",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "银色车边",
    ],
    images: [
      "/images/products/wheel/GZ052.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "银色车边" },
    ],
  },
  {
    modelId: "GZ053",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
      "银色车面",
    ],
    images: [
      "/images/products/wheel/GZ053.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.6, color: "银色车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "银色车面" },
      { diameterIn: 18, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "银色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "银色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "银色车面" },
    ],
  },
  {
    modelId: "GZ054",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车边",
      "白色车边",
    ],
    images: [
      "/images/products/wheel/GZ054.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车边" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "白色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "白色车边" },
    ],
  },
  {
    modelId: "GZ055",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/GZ055.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ056",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/GZ056.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ057",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/GZ057.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 67.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ058",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "高亮黑",
    ],
    images: [
      "/images/products/wheel/GZ058.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "高亮黑" },
    ],
  },
  {
    modelId: "GZ059",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "雅黑亮面",
    ],
    images: [
      "/images/products/wheel/GZ059.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "雅黑亮面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "雅黑亮面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "雅黑亮面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "雅黑亮面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "雅黑亮面" },
    ],
  },
  {
    modelId: "GZ060",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "雅黑全涂",
    ],
    images: [
      "/images/products/wheel/GZ060.webp",
    ],
    variants: [
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 67.1, color: "雅黑全涂" },
    ],
  },
  {
    modelId: "GZ061",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "雅黑车面",
    ],
    images: [
      "/images/products/wheel/GZ061.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 40, centerBoreMm: 73.1, color: "雅黑车面" },
    ],
  },
  {
    modelId: "GZ062",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "电镀",
    ],
    images: [
      "/images/products/wheel/GZ062.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 42, centerBoreMm: 73.1, color: "电镀" },
    ],
  },
  {
    modelId: "GZ063",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/GZ063.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 33, centerBoreMm: 72.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ064",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/GZ064.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
    ],
  },
  {
    modelId: "GZ065",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "枪灰",
      "白色",
      "亮黑全涂",
    ],
    images: [
      "/images/products/wheel/GZ065.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 32, centerBoreMm: 65.1, color: "枪灰" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "白色" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 30, centerBoreMm: 65.1, color: "枪灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 30, centerBoreMm: 65.1, color: "亮黑全涂" },
    ],
  },
  {
    modelId: "GZ066",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "枪灰",
    ],
    images: [
      "/images/products/wheel/GZ066.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "枪灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "枪灰" },
    ],
  },
  {
    modelId: "GZ067",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "银色",
    ],
    images: [
      "/images/products/wheel/GZ067.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "银色" },
    ],
  },
  {
    modelId: "GZ068",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "枪灰",
      "古铜",
    ],
    images: [
      "/images/products/wheel/GZ068.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "古铜" },
    ],
  },
  {
    modelId: "GZ069",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "枪灰",
    ],
    images: [
      "/images/products/wheel/GZ069.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "枪灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "枪灰" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰" },
    ],
  },
  {
    modelId: "GZ070",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "枪灰",
    ],
    images: [
      "/images/products/wheel/GZ070.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "枪灰" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "枪灰" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "枪灰" },
    ],
  },
  {
    modelId: "GZ071",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "枪灰车边+车腕口",
      "亚黑车边+车腕口",
      "黑色红边",
    ],
    images: [
      "/images/products/wheel/GZ071.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "枪灰车边+车腕口" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "枪灰车边+车腕口" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰车边+车腕口" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亚黑车边+车腕口" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰车边+车腕口" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色红边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰车边+车腕口" },
    ],
  },
  {
    modelId: "GZ072",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "雅黑全涂",
    ],
    images: [
      "/images/products/wheel/GZ072.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑全涂" },
    ],
  },
  {
    modelId: "GZ073",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/GZ073.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ074",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "雅黑车面",
    ],
    images: [
      "/images/products/wheel/GZ074.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.45, color: "雅黑车面" },
    ],
  },
  {
    modelId: "GZ075",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/GZ075.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 42, centerBoreMm: 56.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ076",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/GZ076.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ077",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/GZ077.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 42, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 42, centerBoreMm: 73.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ078",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/GZ078.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ079",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/GZ079.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ080",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车边+金钉",
    ],
    images: [
      "/images/products/wheel/GZ080.webp",
    ],
    variants: [
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 100 }, { lugCount: 5, pcdMm: 114.3 }], offsetMm: 20, centerBoreMm: 73.1, color: "黑色车边+金钉" },
    ],
  },
  {
    modelId: "GZ081",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "蓝色车面",
    ],
    images: [
      "/images/products/wheel/GZ081.webp",
    ],
    variants: [
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }, { lugCount: 4, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "蓝色车面" },
    ],
  },
  {
    modelId: "GZ082",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/GZ082.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ083",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车面",
      "亮黑+红面",
      "亮黑+蓝面",
    ],
    images: [
      "/images/products/wheel/GZ083.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮黑+红面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮黑+蓝面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZ084",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "雅黑车面",
    ],
    images: [
      "/images/products/wheel/GZ084.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "雅黑车面" },
    ],
  },
  {
    modelId: "GZ085",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "石墨灰",
      "亚黑",
      "高亮黑",
      "枪灰",
      "石墨灰+铣字+防滑齿",
      "高亮银",
    ],
    images: [
      "/images/products/wheel/GZ085.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 73.1, color: "石墨灰" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "石墨灰" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亚黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "高亮黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "石墨灰" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "石墨灰+铣字+防滑齿" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "石墨灰+铣字+防滑齿" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮银" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "高亮银" },
    ],
  },
  {
    modelId: "GZ086",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "枪灰",
    ],
    images: [
      "/images/products/wheel/GZ086.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "枪灰" },
    ],
  },
  {
    modelId: "GZ087",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "枪灰",
      "黑色车边+铣字",
    ],
    images: [
      "/images/products/wheel/GZ087.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车边+铣字" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车边+铣字" },
    ],
  },
  {
    modelId: "GZ088",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "石墨灰",
      "高亮黑",
    ],
    images: [
      "/images/products/wheel/GZ088.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "石墨灰" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "高亮黑" },
    ],
  },
  {
    modelId: "GZ089",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "亮黑",
      "石墨灰",
    ],
    images: [
      "/images/products/wheel/GZ089.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "亮黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "石墨灰" },
    ],
  },
  {
    modelId: "GZ090",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "石墨灰",
    ],
    images: [
      "/images/products/wheel/GZ090.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "石墨灰" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "石墨灰" },
    ],
  },
  {
    modelId: "GZ091",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "石墨灰",
    ],
    images: [
      "/images/products/wheel/GZ091.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "石墨灰" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "石墨灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.5, color: "石墨灰" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.5, color: "石墨灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "石墨灰" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "石墨灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "石墨灰" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "石墨灰" },
    ],
  },
  {
    modelId: "GZ092",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "石墨灰",
    ],
    images: [
      "/images/products/wheel/GZ092.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "石墨灰" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "石墨灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "石墨灰" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "石墨灰" },
    ],
  },
  {
    modelId: "GZ093",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "石墨灰",
    ],
    images: [
      "/images/products/wheel/GZ093.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "石墨灰" },
      { diameterIn: 18, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "石墨灰" },
    ],
  },
  {
    modelId: "GZ094",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "古铜",
      "钢琴黑",
      "哑光钢灰",
    ],
    images: [
      "/images/products/wheel/GZ094.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 63.4, color: "古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 40, centerBoreMm: 63.4, color: "哑光钢灰" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 40, centerBoreMm: 63.4, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 40, centerBoreMm: 63.4, color: "古铜" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "哑光钢灰" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "古铜" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "哑光钢灰" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 40, centerBoreMm: 63.4, color: "哑光钢灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "哑光钢灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "哑光钢灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "古铜" },
    ],
  },
  {
    modelId: "GZ095",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "石墨灰",
    ],
    images: [
      "/images/products/wheel/GZ095.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "石墨灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "石墨灰" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.6, color: "石墨灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "石墨灰" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "石墨灰" },
    ],
  },
  {
    modelId: "GZ096",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "石墨灰车边",
      "黑色车边",
    ],
    images: [
      "/images/products/wheel/GZ096.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "石墨灰车边" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "石墨灰车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车边" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车边" },
    ],
  },
  {
    modelId: "GZ097",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "石墨灰",
      "钢琴黑",
    ],
    images: [
      "/images/products/wheel/GZ097.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "石墨灰" },
      { diameterIn: 18, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "石墨灰" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 10.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 22, centerBoreMm: 73.1, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 32, centerBoreMm: 72.6, color: "钢琴黑" },
    ],
  },
  {
    modelId: "GZ098",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "高亮黑",
    ],
    images: [
      "/images/products/wheel/GZ098.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 30, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 15, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 30, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 15, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 30, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 16, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 30, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 16, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 30, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 16, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 30, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 17, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 33, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 17, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 33, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 17, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 15, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 17, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 15, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 18, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 20, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: null, widthIn: null, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 15, centerBoreMm: 73.1, color: "高亮黑" },
    ],
  },
  {
    modelId: "GZ099",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "雅黑",
    ],
    images: [
      "/images/products/wheel/GZ099.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 30, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 16, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 30, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 16, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 30, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 16, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 30, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 17, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 33, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 17, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 15, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 17, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 33, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 17, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 15, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 18, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 20, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: null, widthIn: null, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 15, centerBoreMm: 73.1, color: "雅黑" },
    ],
  },
  {
    modelId: "GZ100",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "雅黑",
    ],
    images: [
      "/images/products/wheel/GZ100.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 38, centerBoreMm: 56.6, color: "雅黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "雅黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 38, centerBoreMm: 56.6, color: "雅黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "雅黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "雅黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 38, centerBoreMm: 56.6, color: "雅黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "雅黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "雅黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "雅黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "雅黑" },
    ],
  },
  {
    modelId: "GZ101",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "枪灰",
    ],
    images: [
      "/images/products/wheel/GZ101.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "枪灰" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "枪灰" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "枪灰" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "枪灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "枪灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "枪灰" },
    ],
  },
  {
    modelId: "GZ102",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "古铜",
    ],
    images: [
      "/images/products/wheel/GZ102.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "古铜" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "古铜" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "古铜" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "古铜" },
    ],
  },
  {
    modelId: "GZ103",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "白色",
    ],
    images: [],
    variants: [
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "白色" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "白色" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "白色" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "白色" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "白色" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "白色" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "白色" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "白色" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "白色" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "白色" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "白色" },
    ],
  },
  {
    modelId: "GZ104",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车边",
    ],
    images: [
      "/images/products/wheel/GZ104.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 40, centerBoreMm: 56.6, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.6, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 38, centerBoreMm: 56.6, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 40, centerBoreMm: 56.6, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.6, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "黑色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车边" },
    ],
  },
  {
    modelId: "GZ105",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车边",
    ],
    images: [
      "/images/products/wheel/GZ105.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 40, centerBoreMm: 56.6, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.6, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 38, centerBoreMm: 56.6, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 40, centerBoreMm: 56.6, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.6, color: "黑色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "黑色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车边" },
    ],
  },
  {
    modelId: "GZ106",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "银色车边",
    ],
    images: [
      "/images/products/wheel/GZ106.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 100 }, { lugCount: 4, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }, { lugCount: 4, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 40, centerBoreMm: 56.6, color: "银色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 40, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 40, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.6, color: "银色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 100 }, { lugCount: 4, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 38, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 38, centerBoreMm: 56.6, color: "银色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "银色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "银色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 40, centerBoreMm: 56.6, color: "银色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 40, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 40, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.6, color: "银色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "银色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "银色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "银色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "银色车边" },
    ],
  },
  {
    modelId: "GZ107",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "黑色车边",
    ],
    images: [
      "/images/products/wheel/GZ107.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 100 }, { lugCount: 4, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }, { lugCount: 4, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 100 }, { lugCount: 4, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车边" },
    ],
  },
  {
    modelId: "GZ108",
    process: "旋压",
    carSeries: "改装",
    colors: [
      "雅黑",
    ],
    images: [
      "/images/products/wheel/GZ108.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 6.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 40, centerBoreMm: 56.6, color: "雅黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 40, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 40, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.6, color: "雅黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.6, color: "雅黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "雅黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 40, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 40, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 40, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.6, color: "雅黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "雅黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 38, centerBoreMm: 73.1, color: "雅黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.6, color: "雅黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "雅黑" },
    ],
  },
  {
    modelId: "BENZ001",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/BENZ001.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.45, color: "黑色车面" },
    ],
  },
  {
    modelId: "BENZ002",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BENZ002.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "BENZ003",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BENZ003.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 67.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 67.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "BENZ004",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BENZ004.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.45, color: "黑色车面" },
    ],
  },
  {
    modelId: "BENZ005",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "亚黑车边",
      "亚黑红边",
    ],
    images: [
      "/images/products/wheel/BENZ005.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "亚黑车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 42, centerBoreMm: 66.45, color: "亚黑车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "亚黑车边" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 42, centerBoreMm: 66.45, color: "亚黑车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "亚黑红边" },
    ],
  },
  {
    modelId: "BENZ006",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BENZ006.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 17, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 67.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 67.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.5, color: "黑色车面" },
    ],
  },
  {
    modelId: "BENZ007",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BENZ007.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "BENZ008",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "雅黑车边",
      "雅黑红边",
      "亚黑红边",
    ],
    images: [
      "/images/products/wheel/BENZ008.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "雅黑车边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "雅黑红边" },
      { diameterIn: 17, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "雅黑车边" },
      { diameterIn: 17, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "雅黑红边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "雅黑车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "雅黑红边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.45, color: "雅黑车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.45, color: "亚黑红边" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "雅黑车边" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "雅黑红边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "雅黑车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 42, centerBoreMm: 66.45, color: "雅黑车边" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.45, color: "雅黑车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "雅黑红边" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.45, color: "雅黑红边" },
    ],
  },
  {
    modelId: "BENZ009",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "雅黑车边",
    ],
    images: [
      "/images/products/wheel/BENZ009.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "雅黑车边" },
    ],
  },
  {
    modelId: "BENZ010",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/BENZ010.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 17, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 17, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 42, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "BENZ011",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/BENZ011.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 17, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 17, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 42, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 42, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.45, color: "枪灰车面" },
    ],
  },
  {
    modelId: "BENZ012",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BENZ012.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "BENZ013",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BENZ013.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "BENZ014",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/BENZ014.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
    ],
  },
  {
    modelId: "BENZ015",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BENZ015.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "BENZ016",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "高亮黑",
    ],
    images: [
      "/images/products/wheel/BENZ016.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "高亮黑" },
    ],
  },
  {
    modelId: "BENZ017",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BENZ017.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.5, color: "黑色车面" },
    ],
  },
  {
    modelId: "BENZ018",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BENZ018.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 67.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.5, color: "黑色车面" },
    ],
  },
  {
    modelId: "BENZ019",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/BENZ019.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.6, color: "枪灰车面" },
    ],
  },
  {
    modelId: "BENZ020",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BENZ020.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.5, color: "黑色车面" },
    ],
  },
  {
    modelId: "BENZ021",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BENZ021.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "BENZ022",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "亚黑车边",
    ],
    images: [
      "/images/products/wheel/BENZ022.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 42, centerBoreMm: 66.56, color: "亚黑车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "亚黑车边" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.56, color: "亚黑车边" },
    ],
  },
  {
    modelId: "BENZ023",
    process: "旋压",
    carSeries: "奔驰",
    colors: [
      "黑色车面",
      "黑色车边",
    ],
    images: [
      "/images/products/wheel/BENZ023.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车边" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.45, color: "黑色车边" },
    ],
  },
  {
    modelId: "BMW001",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "钢琴黑",
      "磨砂古铜",
    ],
    images: [
      "/images/products/wheel/BMW001.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "磨砂古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "磨砂古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "磨砂古铜" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "磨砂古铜" },
    ],
  },
  {
    modelId: "BMW002",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "钢琴黑金属面",
    ],
    images: [
      "/images/products/wheel/BMW002.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 72.56, color: "钢琴黑金属面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "钢琴黑金属面" },
      { diameterIn: 17, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 25, centerBoreMm: 72.56, color: "钢琴黑金属面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑金属面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "钢琴黑金属面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钢琴黑金属面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "钢琴黑金属面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑金属面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "钢琴黑金属面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钢琴黑金属面" },
    ],
  },
  {
    modelId: "BMW003",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "钢琴黑金属面",
    ],
    images: [
      "/images/products/wheel/BMW003.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 25, centerBoreMm: 72.6, color: "钢琴黑金属面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑金属面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钢琴黑金属面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "钢琴黑金属面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "钢琴黑金属面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钢琴黑金属面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "钢琴黑金属面" },
    ],
  },
  {
    modelId: "BMW004",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "亮黑全涂",
    ],
    images: [
      "/images/products/wheel/BMW004.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "亮黑全涂" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.6, color: "亮黑全涂" },
    ],
  },
  {
    modelId: "BMW005",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BMW005.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "BMW006",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BMW006.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "BMW007",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BMW007.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "BMW008",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BMW008.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "BMW009",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/BMW009.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "BMW010",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BMW010.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "BMW011",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BMW011.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "BMW012",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/BMW012.webp",
    ],
    variants: [
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 4, pcdMm: 108 }], offsetMm: 22, centerBoreMm: 65.1, color: "黑色车面" },
      { diameterIn: 15, widthIn: 6, pcd: [{ lugCount: 5, pcdMm: 105 }], offsetMm: 35, centerBoreMm: 56.6, color: "黑色车面" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "枪灰车面" },
      { diameterIn: 17, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 17, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 25, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 17, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 25, centerBoreMm: 72.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 25, centerBoreMm: 72.6, color: "枪灰车面" },
    ],
  },
  {
    modelId: "BMW013",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BMW013.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "BMW014",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "黑色车面+铣边",
    ],
    images: [
      "/images/products/wheel/BMW014.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面+铣边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "黑色车面+铣边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面+铣边" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面+铣边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车面+铣边" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车面+铣边" },
    ],
  },
  {
    modelId: "BMW015",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/BMW015.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
    ],
  },
  {
    modelId: "BMW016",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/BMW016.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 25, centerBoreMm: 72.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 25, centerBoreMm: 72.6, color: "枪灰车面" },
    ],
  },
  {
    modelId: "BMW017",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/BMW017.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 25, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 63.4, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 33, centerBoreMm: 72.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "BMW018",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/BMW018.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 33, centerBoreMm: 72.6, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
    ],
  },
  {
    modelId: "BMW019",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "黑色车面",
      "枪灰车面",
      "亮黑全涂",
    ],
    images: [
      "/images/products/wheel/BMW019.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 17, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 25, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 17, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 25, centerBoreMm: 72.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亮黑全涂" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "亮黑全涂" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亮黑全涂" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "亮黑全涂" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亮黑全涂" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亮黑全涂" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "亮黑全涂" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "亮黑全涂" },
    ],
  },
  {
    modelId: "BMW020",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "亚黑车面",
    ],
    images: [
      "/images/products/wheel/BMW020.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "亚黑车面" },
    ],
  },
  {
    modelId: "BMW021",
    process: "旋压",
    carSeries: "宝马",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/BMW021.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.6, color: "枪灰车面" },
    ],
  },
  {
    modelId: "AUDI001",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/AUDI001.webp",
    ],
    variants: [
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
    ],
  },
  {
    modelId: "AUDI002",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/AUDI002.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.5, color: "枪灰车面" },
    ],
  },
  {
    modelId: "AUDI003",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "枪灰车面",
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/AUDI003.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 42, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.5, color: "枪灰车面" },
    ],
  },
  {
    modelId: "AUDI004",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "黑色车面铣边",
      "打砂古铜",
    ],
    images: [
      "/images/products/wheel/AUDI004.webp",
    ],
    variants: [
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 67.1, color: "黑色车面铣边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面铣边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 57.1, color: "黑色车面铣边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面铣边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面铣边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 57.1, color: "黑色车面铣边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面铣边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "打砂古铜" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面铣边" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "打砂古铜" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面铣边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面铣边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 57.1, color: "黑色车面铣边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 67.1, color: "黑色车面铣边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面铣边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面铣边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面铣边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 57.1, color: "黑色车面铣边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面铣边" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.6, color: "黑色车面铣边" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 32, centerBoreMm: 73.1, color: "黑色车面铣边" },
    ],
  },
  {
    modelId: "AUDI005",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/AUDI005.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 57.1, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 57.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 57.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "AUDI006",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "黑色车面",
      "枪灰车面",
      "银色车面",
    ],
    images: [
      "/images/products/wheel/AUDI006.webp",
    ],
    variants: [
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 57.1, color: "黑色车面" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 57.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.6, color: "银色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "银色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "AUDI007",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "黑色车面",
      "枪灰车面",
      "亚黑车面",
    ],
    images: [
      "/images/products/wheel/AUDI007.webp",
    ],
    variants: [
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亚黑车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
    ],
  },
  {
    modelId: "AUDI008",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/AUDI008.webp",
    ],
    variants: [
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
    ],
  },
  {
    modelId: "AUDI009",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/AUDI009.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
    ],
  },
  {
    modelId: "AUDI010",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/AUDI010.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "AUDI011",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "黑色车面",
      "枪灰车面",
      "亮黑",
    ],
    images: [
      "/images/products/wheel/AUDI011.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亮黑" },
    ],
  },
  {
    modelId: "AUDI012",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/AUDI012.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
    ],
  },
  {
    modelId: "AUDI013",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/AUDI013.webp",
    ],
    variants: [
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 67.1, color: "黑色车面" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 4, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 100 }], offsetMm: 35, centerBoreMm: 67.1, color: "黑色车面" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "AUDI014",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "雅黑车边",
      "枪灰车边",
    ],
    images: [
      "/images/products/wheel/AUDI014.webp",
    ],
    variants: [
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "雅黑车边" },
      { diameterIn: 16, widthIn: 7, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车边" },
    ],
  },
  {
    modelId: "AUDI015",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/AUDI015.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "黑色车面" },
    ],
  },
  {
    modelId: "AUDI016",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/AUDI016.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "黑色车面" },
    ],
  },
  {
    modelId: "AUDI017",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "亚黑",
      "枪灰",
    ],
    images: [
      "/images/products/wheel/AUDI017.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.6, color: "枪灰" },
    ],
  },
  {
    modelId: "AUDI018",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "钢琴黑",
      "亮白银",
    ],
    images: [
      "/images/products/wheel/AUDI018.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 57.1, color: "钢琴黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 57.1, color: "亮白银" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 57.1, color: "钢琴黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 57.1, color: "亮白银" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 57.1, color: "钢琴黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 57.1, color: "亮白银" },
    ],
  },
  {
    modelId: "AUDI019",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "亮黑",
      "高亮灰",
      "银色",
    ],
    images: [
      "/images/products/wheel/AUDI019.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 57.1, color: "亮黑" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 57.1, color: "高亮灰" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 57.1, color: "银色" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 57.1, color: "亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 57.1, color: "高亮灰" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 57.1, color: "银色" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 57.1, color: "亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 57.1, color: "高亮灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 57.1, color: "银色" },
    ],
  },
  {
    modelId: "AUDI020",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/AUDI020.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 57.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "AUDI021",
    process: "旋压",
    carSeries: "奥迪&大众",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/AUDI021.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 57.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "TYT001",
    process: "旋压",
    carSeries: "丰田&凌志",
    colors: [
      "高亮黑",
    ],
    images: [
      "/images/products/wheel/TYT001.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 60.1, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 60.1, color: "高亮黑" },
    ],
  },
  {
    modelId: "TYT002",
    process: "旋压",
    carSeries: "丰田&凌志",
    colors: [
      "高亮黑",
    ],
    images: [
      "/images/products/wheel/TYT002.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 60.1, color: "高亮黑" },
    ],
  },
  {
    modelId: "TYT003",
    process: "旋压",
    carSeries: "丰田&凌志",
    colors: [
      "黑电镀",
    ],
    images: [
      "/images/products/wheel/TYT003.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 60.1, color: "黑电镀" },
    ],
  },
  {
    modelId: "TYT004",
    process: "旋压",
    carSeries: "丰田&凌志",
    colors: [
      "高亮黑",
      "黑电镀",
    ],
    images: [
      "/images/products/wheel/TYT004.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 60.1, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 60.1, color: "黑电镀" },
    ],
  },
  {
    modelId: "TYT005",
    process: "旋压",
    carSeries: "丰田&凌志",
    colors: [
      "黑色车面",
    ],
    images: [],
    variants: [
      { diameterIn: 18, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 40, centerBoreMm: 60.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "TYT006",
    process: "旋压",
    carSeries: "丰田&凌志",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TYT006.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 45, centerBoreMm: 60.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 45, centerBoreMm: 60.1, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TYT007",
    process: "旋压",
    carSeries: "丰田&凌志",
    colors: [
      "高亮黑",
    ],
    images: [
      "/images/products/wheel/TYT007.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 45, centerBoreMm: 60.1, color: "高亮黑" },
    ],
  },
  {
    modelId: "LRP001",
    process: "旋压",
    carSeries: "路虎&保时捷",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/LRP001.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 50, centerBoreMm: 71.6, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 50, centerBoreMm: 71.6, color: "枪灰车面" },
    ],
  },
  {
    modelId: "LRP002",
    process: "旋压",
    carSeries: "路虎&保时捷",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/LRP002.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 50, centerBoreMm: 71.6, color: "枪灰车面" },
    ],
  },
  {
    modelId: "LRP003",
    process: "旋压",
    carSeries: "路虎&保时捷",
    colors: [
      "黑色车边",
    ],
    images: [
      "/images/products/wheel/LRP003.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 48, centerBoreMm: 71.6, color: "黑色车边" },
    ],
  },
  {
    modelId: "LRP004",
    process: "旋压",
    carSeries: "路虎&保时捷",
    colors: [
      "枪灰车面",
      "黑色车面",
      "黑色全涂",
    ],
    images: [
      "/images/products/wheel/LRP004.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 45, centerBoreMm: 72.6, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 45, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 45, centerBoreMm: 72.6, color: "黑色全涂" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 48, centerBoreMm: 72.6, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 48, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 48, centerBoreMm: 72.6, color: "黑色全涂" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 48, centerBoreMm: 72.6, color: "枪灰车面" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 48, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 48, centerBoreMm: 72.6, color: "黑色全涂" },
    ],
  },
  {
    modelId: "LRP005",
    process: "旋压",
    carSeries: "路虎&保时捷",
    colors: [
      "黑色全涂",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/LRP005.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 45, centerBoreMm: 72.6, color: "黑色全涂" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 45, centerBoreMm: 72.6, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 48, centerBoreMm: 72.6, color: "黑色全涂" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 48, centerBoreMm: 72.6, color: "枪灰车面" },
    ],
  },
  {
    modelId: "LRP006",
    process: "旋压",
    carSeries: "路虎&保时捷",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/LRP006.webp",
    ],
    variants: [
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 50, centerBoreMm: 71.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "DZSWJ07",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "黑色车面",
    ],
    images: [],
    variants: [
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "黑色车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "GM08001",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "高亮黑",
    ],
    images: [
      "/images/products/wheel/GM08001.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "高亮黑" },
    ],
  },
  {
    modelId: "GM08015",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "黑色车边",
    ],
    images: [
      "/images/products/wheel/GM08015.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车边" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 32, centerBoreMm: 72.56, color: "黑色车边" },
    ],
  },
  {
    modelId: "GZM520",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "高亮黑",
      "亚黑",
    ],
    images: [
      "/images/products/wheel/GZM520.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "高亮黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "亚黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.56, color: "高亮黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.56, color: "亚黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "高亮黑" },
    ],
  },
  {
    modelId: "GZM521",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "高亮黑",
    ],
    images: [
      "/images/products/wheel/GZM521.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
    ],
  },
  {
    modelId: "GZM522",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "亮黑",
      "精抛",
    ],
    images: [
      "/images/products/wheel/GZM522.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "精抛" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "亮黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "精抛" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 62.55, color: "精抛" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "亮黑" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "精抛" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "亮黑" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "精抛" },
    ],
  },
  {
    modelId: "GZM523",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "亮黑",
      "精抛",
    ],
    images: [
      "/images/products/wheel/GZM523.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "亮黑" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 73.1, color: "精抛" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "精抛" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "精抛" },
    ],
  },
  {
    modelId: "GZM524",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "亚黑",
      "高亮黑",
    ],
    images: [
      "/images/products/wheel/GZM524.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
    ],
  },
  {
    modelId: "GZM525",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "亚黑",
    ],
    images: [
      "/images/products/wheel/GZM525.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 32, centerBoreMm: 72.56, color: "亚黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.56, color: "亚黑" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "亚黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "亚黑" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 62.55, color: "亚黑" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "亚黑" },
    ],
  },
  {
    modelId: "GZM526",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "亚黑",
      "高亮黑",
    ],
    images: [
      "/images/products/wheel/GZM526.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
    ],
  },
  {
    modelId: "GZM527",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "高亮黑",
    ],
    images: [
      "/images/products/wheel/GZM527.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
    ],
  },
  {
    modelId: "GZM530",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "高亮黑",
    ],
    images: [
      "/images/products/wheel/GZM530.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
    ],
  },
  {
    modelId: "GZM531",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "高亮黑",
    ],
    images: [
      "/images/products/wheel/GZM531.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "高亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "高亮黑" },
    ],
  },
  {
    modelId: "GZM532",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "银色车面",
    ],
    images: [
      "/images/products/wheel/GZM532.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "银色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "银色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "银色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "银色车面" },
    ],
  },
  {
    modelId: "GZM535",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/GZM535.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 32, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 32, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 62.55, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZM539",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "黑色车面",
    ],
    images: [],
    variants: [
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.6, color: "黑色车面" },
    ],
  },
  {
    modelId: "GZM542",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/GZM542.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ01043",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "黑色车面",
    ],
    images: [],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02005",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "黑色车面",
    ],
    images: [],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ04007",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "黑色车面",
    ],
    images: [],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 40, centerBoreMm: 63.4, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 42.5, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 23, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 42.5, centerBoreMm: 72.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ04010",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "黑色车面",
      "亮黑",
    ],
    images: [],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 42.5, centerBoreMm: 63.4, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 72.56, color: "亮黑" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 72.56, color: "亮黑" },
    ],
  },
  {
    modelId: "TJ04039",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "亮黑",
    ],
    images: [],
    variants: [
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 45, centerBoreMm: 72.56, color: "亮黑" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 45, centerBoreMm: 72.56, color: "亮黑" },
      { diameterIn: 23, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 42.5, centerBoreMm: 72.56, color: "亮黑" },
    ],
  },
  {
    modelId: "TJ08017",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ08017.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 36, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 73.1, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 73.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ09009",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "亮黑",
    ],
    images: [],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.55, color: "亮黑" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.55, color: "亮黑" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.55, color: "亮黑" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.55, color: "亮黑" },
    ],
  },
  {
    modelId: "TJ10007",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "黑色车面",
    ],
    images: [],
    variants: [
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.5, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ15040",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "黑色车面",
    ],
    images: [],
    variants: [
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 66.5, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ17004",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "黑色车面",
    ],
    images: [],
    variants: [
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 35, centerBoreMm: 63.4, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ26005",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "黑色车面",
      "精抛",
    ],
    images: [],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 66.1, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 66.1, color: "精抛" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "黑色车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "精抛" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "精抛" },
      { diameterIn: 22, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "黑色车面" },
      { diameterIn: 22, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "黑色车面" },
      { diameterIn: 22, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "精抛" },
      { diameterIn: 22, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "精抛" },
    ],
  },
  {
    modelId: "TJ26006",
    process: "锻造",
    carSeries: "锻造轮毂",
    colors: [
      "黑色车面",
    ],
    images: [],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 66.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "DZSTT07",
    process: "锻造",
    carSeries: "锻造轮毂丰田日产",
    colors: [
      "黑电镀",
    ],
    images: [
      "/images/products/wheel/DZSTT07.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
    ],
  },
  {
    modelId: "GZM534",
    process: "锻造",
    carSeries: "锻造轮毂丰田日产",
    colors: [
      "黑电镀",
    ],
    images: [],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑电镀" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.6, color: "黑电镀" },
    ],
  },
  {
    modelId: "TJ07001",
    process: "锻造",
    carSeries: "锻造轮毂丰田日产",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ07001.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 150 }], offsetMm: 34, centerBoreMm: 110, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 150 }], offsetMm: 34, centerBoreMm: 110, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 150 }], offsetMm: 40, centerBoreMm: 110, color: "黑色车面" },
      { diameterIn: 21, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 150 }], offsetMm: 40, centerBoreMm: 110, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ07002",
    process: "锻造",
    carSeries: "锻造轮毂丰田日产",
    colors: [
      "黑电镀",
    ],
    images: [],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
    ],
  },
  {
    modelId: "TJ07005",
    process: "锻造",
    carSeries: "锻造轮毂丰田日产",
    colors: [
      "黑电镀",
    ],
    images: [
      "/images/products/wheel/TJ07005.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
    ],
  },
  {
    modelId: "TJ07006",
    process: "锻造",
    carSeries: "锻造轮毂丰田日产",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ07006.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 6, pcdMm: 139.7 }], offsetMm: 25, centerBoreMm: 95.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 6, pcdMm: 139.7 }], offsetMm: 25, centerBoreMm: 106.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 6, pcdMm: 139.7 }], offsetMm: 25, centerBoreMm: 95.1, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 6, pcdMm: 139.7 }], offsetMm: 25, centerBoreMm: 106.1, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 6, pcdMm: 139.7 }], offsetMm: 20, centerBoreMm: 95.1, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 6, pcdMm: 139.7 }], offsetMm: 20, centerBoreMm: 106.1, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 6, pcdMm: 139.7 }], offsetMm: 20, centerBoreMm: 95.1, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 6, pcdMm: 139.7 }], offsetMm: 20, centerBoreMm: 106.1, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ07010",
    process: "锻造",
    carSeries: "锻造轮毂丰田日产",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ07010.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 6, pcdMm: 139.7 }], offsetMm: 35, centerBoreMm: 95.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ07019",
    process: "锻造",
    carSeries: "锻造轮毂丰田日产",
    colors: [
      "黑电镀",
    ],
    images: [
      "/images/products/wheel/TJ07019.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
    ],
  },
  {
    modelId: "TJ07028",
    process: "锻造",
    carSeries: "锻造轮毂丰田日产",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ07028.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ07035",
    process: "锻造",
    carSeries: "锻造轮毂丰田日产",
    colors: [
      "黑色车面",
      "黑电镀",
    ],
    images: [
      "/images/products/wheel/TJ07035.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 60.1, color: "黑电镀" },
    ],
  },
  {
    modelId: "TJ08007",
    process: "锻造",
    carSeries: "锻造轮毂丰田日产",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ08007.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 6, pcdMm: 139.7 }], offsetMm: 25, centerBoreMm: 77.8, color: "黑色车面" },
      { diameterIn: 22, widthIn: 9, pcd: [{ lugCount: 6, pcdMm: 139.7 }], offsetMm: 25, centerBoreMm: 77.8, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ24005",
    process: "锻造",
    carSeries: "锻造轮毂丰田日产",
    colors: [
      "黑电镀",
    ],
    images: [
      "/images/products/wheel/TJ24005.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 67.1, color: "黑电镀" },
    ],
  },
  {
    modelId: "TJ30002",
    process: "锻造",
    carSeries: "锻造轮毂丰田日产",
    colors: [
      "高亮黑",
    ],
    images: [
      "/images/products/wheel/TJ30002.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 60.1, color: "高亮黑" },
    ],
  },
  {
    modelId: "DZSBSJ01",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "亚黑",
    ],
    images: [],
    variants: [
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 26, centerBoreMm: 66.45, color: "亚黑" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 19, centerBoreMm: 66.45, color: "亚黑" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 46, centerBoreMm: 71.56, color: "亚黑" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 58, centerBoreMm: 71.56, color: "亚黑" },
    ],
  },
  {
    modelId: "DZSBSJ04",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "亚黑",
    ],
    images: [],
    variants: [
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 26, centerBoreMm: 66.45, color: "亚黑" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 19, centerBoreMm: 66.45, color: "亚黑" },
    ],
  },
  {
    modelId: "TJ05001",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "枪灰车面",
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ05001.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 38, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 26, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 19, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 26, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 19, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 46, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 58, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 46, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 58, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 46, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 58, centerBoreMm: 71.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ05002",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ05002.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 50, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 55, centerBoreMm: 71.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ05003",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "黑色车边",
    ],
    images: [
      "/images/products/wheel/TJ05003.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 45, centerBoreMm: 71.56, color: "黑色车边" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 45, centerBoreMm: 71.56, color: "黑色车边" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 26, centerBoreMm: 66.5, color: "黑色车边" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 19, centerBoreMm: 66.5, color: "黑色车边" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车边" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车边" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车边" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车边" },
    ],
  },
  {
    modelId: "TJ05005",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ05005.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 50, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 11.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 67, centerBoreMm: 71.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ05006",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "亚黑",
      "枪灰",
    ],
    images: [
      "/images/products/wheel/TJ05006.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 50, centerBoreMm: 71.56, color: "亚黑" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 50, centerBoreMm: 71.56, color: "枪灰" },
    ],
  },
  {
    modelId: "TJ05007",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "亚黑",
    ],
    images: [],
    variants: [
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 26, centerBoreMm: 66.45, color: "亚黑" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 19, centerBoreMm: 66.45, color: "亚黑" },
    ],
  },
  {
    modelId: "TJ05008",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "亚黑",
      "古铜",
    ],
    images: [
      "/images/products/wheel/TJ05008.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 46, centerBoreMm: 71.56, color: "亚黑" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 58, centerBoreMm: 71.56, color: "亚黑" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 46, centerBoreMm: 71.56, color: "亚黑" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 58, centerBoreMm: 71.56, color: "亚黑" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 46, centerBoreMm: 71.56, color: "古铜" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 58, centerBoreMm: 71.56, color: "古铜" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 46, centerBoreMm: 71.56, color: "亚黑" },
      { diameterIn: 22, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 58, centerBoreMm: 71.56, color: "亚黑" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 46, centerBoreMm: 71.56, color: "古铜" },
      { diameterIn: 22, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 58, centerBoreMm: 71.56, color: "古铜" },
    ],
  },
  {
    modelId: "TJ05010",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ05010.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ05011",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "枪灰车面",
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ05011.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 38, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 45, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 45, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 45, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 45, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 46, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 22, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 58, centerBoreMm: 71.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ05012",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ05012.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ05013",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "枪灰车边",
    ],
    images: [
      "/images/products/wheel/TJ05013.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 50, centerBoreMm: 71.56, color: "枪灰车边" },
      { diameterIn: 21, widthIn: 11.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 67, centerBoreMm: 71.56, color: "枪灰车边" },
    ],
  },
  {
    modelId: "TJ05014",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "亚黑车面",
    ],
    images: [
      "/images/products/wheel/TJ05014.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 26, centerBoreMm: 66.45, color: "亚黑车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 19, centerBoreMm: 66.45, color: "亚黑车面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 26, centerBoreMm: 66.45, color: "亚黑车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 19, centerBoreMm: 66.45, color: "亚黑车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 46, centerBoreMm: 71.56, color: "亚黑车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 58, centerBoreMm: 71.56, color: "亚黑车面" },
    ],
  },
  {
    modelId: "TJ05015",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ05015.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 50, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 50, centerBoreMm: 71.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ05016",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "枪灰车面",
      "亚黑",
    ],
    images: [
      "/images/products/wheel/TJ05016.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 21, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 21, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 21, centerBoreMm: 66.5, color: "亚黑" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 21, centerBoreMm: 66.5, color: "亚黑" },
      { diameterIn: 19, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 26, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 19, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 26, centerBoreMm: 66.5, color: "亚黑" },
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 19, centerBoreMm: 66.5, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 50, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 55, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 26, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 19, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 26, centerBoreMm: 66.5, color: "亚黑" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 19, centerBoreMm: 66.5, color: "亚黑" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 26, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 19, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 26, centerBoreMm: 66.5, color: "亚黑" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 19, centerBoreMm: 66.5, color: "亚黑" },
    ],
  },
  {
    modelId: "TJ05019",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "亮黑",
    ],
    images: [
      "/images/products/wheel/TJ05019.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 45, centerBoreMm: 71.56, color: "亮黑" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 45, centerBoreMm: 71.56, color: "亮黑" },
    ],
  },
  {
    modelId: "TJ05020",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ05020.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 26, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 19, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 22, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 45, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 22, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 50, centerBoreMm: 71.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ05021",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ05021.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 26, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 19, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 26, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 19, centerBoreMm: 66.5, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ05022",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ05022.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 45, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 45, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 46, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 58, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 46, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 22, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 58, centerBoreMm: 71.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ05023",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ05023.webp",
    ],
    variants: [
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 46, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 58, centerBoreMm: 71.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ05024",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "黑色车面",
      "亚黑",
    ],
    images: [
      "/images/products/wheel/TJ05024.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 21, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 21, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 21, centerBoreMm: 66.5, color: "亚黑" },
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 21, centerBoreMm: 66.5, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 45, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 45, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 26, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 19, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 46, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 58, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 46, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 58, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 46, centerBoreMm: 71.56, color: "亚黑" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 58, centerBoreMm: 71.56, color: "亚黑" },
    ],
  },
  {
    modelId: "TJ05025",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ05025.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ05028",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "枪灰车面",
    ],
    images: [],
    variants: [
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 61, centerBoreMm: 71.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ05029",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "黑色车边",
    ],
    images: [
      "/images/products/wheel/TJ05029.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 50, centerBoreMm: 71.56, color: "黑色车边" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 50, centerBoreMm: 71.56, color: "黑色车边" },
    ],
  },
  {
    modelId: "TJ17003",
    process: "锻造",
    carSeries: "锻造轮毂保时捷",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ17003.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 63.4, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 63.4, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 108 }], offsetMm: 38, centerBoreMm: 63.4, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02001",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "枪灰车面",
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02001.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 49, centerBoreMm: 66.5, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 49, centerBoreMm: 66.5, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02002",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02002.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02003",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02003.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.5, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02004",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ02004.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.5, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ02006",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ02006.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ02008",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02008.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 46, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 42, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 22, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 42, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 22, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 23, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 23, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 47, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02009",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "亚黑车边",
      "亚黑红边",
    ],
    images: [
      "/images/products/wheel/TJ02009.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "亚黑车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 33, centerBoreMm: 66.5, color: "亚黑车边" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 44, centerBoreMm: 66.5, color: "亚黑车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 31, centerBoreMm: 84.1, color: "亚黑车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 31, centerBoreMm: 84.1, color: "亚黑红边" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 33, centerBoreMm: 84.1, color: "亚黑车边" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 33, centerBoreMm: 84.1, color: "亚黑红边" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 33, centerBoreMm: 84.1, color: "亚黑车边" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 33, centerBoreMm: 84.1, color: "亚黑红边" },
      { diameterIn: 22, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 33, centerBoreMm: 84.1, color: "亚黑车边" },
      { diameterIn: 22, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 33, centerBoreMm: 84.1, color: "亚黑红边" },
    ],
  },
  {
    modelId: "TJ02010",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02010.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 22, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 30, centerBoreMm: 84.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02012",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ02012.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 45, centerBoreMm: 84.1, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 46, centerBoreMm: 84.1, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ02013",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02013.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.5, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02014",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02014.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 44, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02015",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ02015.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ02016",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02016.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 34, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 48.1, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 34, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 48.1, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02020",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02020.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02024",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "银色车面",
    ],
    images: [
      "/images/products/wheel/TJ02024.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "银色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "银色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "银色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "银色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "银色车面" },
    ],
  },
  {
    modelId: "TJ02027",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02027.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 34, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 48, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02028",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "精抛",
    ],
    images: [
      "/images/products/wheel/TJ02028.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "精抛" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "精抛" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "精抛" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "精抛" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "精抛" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.5, color: "精抛" },
    ],
  },
  {
    modelId: "TJ02031",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "精抛",
    ],
    images: [
      "/images/products/wheel/TJ02031.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 23, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 23, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 47, centerBoreMm: 66.5, color: "精抛" },
    ],
  },
  {
    modelId: "TJ02032",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "精抛",
    ],
    images: [
      "/images/products/wheel/TJ02032.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "精抛" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.56, color: "精抛" },
    ],
  },
  {
    modelId: "TJ02037",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "精抛",
    ],
    images: [
      "/images/products/wheel/TJ02037.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.5, color: "精抛" },
    ],
  },
  {
    modelId: "TJ02038",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "精抛",
    ],
    images: [
      "/images/products/wheel/TJ02038.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "精抛" },
    ],
  },
  {
    modelId: "TJ02039",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "精抛",
    ],
    images: [
      "/images/products/wheel/TJ02039.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.5, color: "精抛" },
    ],
  },
  {
    modelId: "TJ02041",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色红边+水转印罩子",
    ],
    images: [
      "/images/products/wheel/TJ02041.webp",
    ],
    variants: [
      { diameterIn: 22, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 36, centerBoreMm: 84.1, color: "黑色红边+水转印罩子" },
      { diameterIn: 23, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 36, centerBoreMm: 84.1, color: "黑色红边+水转印罩子" },
    ],
  },
  {
    modelId: "TJ02044",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "枪灰车面",
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02044.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02046",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02046.webp",
    ],
    variants: [
      { diameterIn: 22, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 30, centerBoreMm: 84.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02051",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "亚黑车边",
      "亚黑红边",
    ],
    images: [
      "/images/products/wheel/TJ02051.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "亚黑车边" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 46, centerBoreMm: 66.5, color: "亚黑车边" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "亚黑红边" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 46, centerBoreMm: 66.5, color: "亚黑红边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 33, centerBoreMm: 66.5, color: "亚黑车边" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 44, centerBoreMm: 66.5, color: "亚黑车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 33, centerBoreMm: 66.5, color: "亚黑红边" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.5, color: "亚黑红边" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "亚黑车边" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.5, color: "亚黑车边" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "亚黑红边" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.5, color: "亚黑红边" },
    ],
  },
  {
    modelId: "TJ02053",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02053.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02054",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02054.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02055",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ02055.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 48, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 50, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 48, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 50, centerBoreMm: 66.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ02056",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02056.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 44, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02058",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ02058.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 42, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 44, centerBoreMm: 66.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ02061",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02061.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02066",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "亚黑车边",
    ],
    images: [
      "/images/products/wheel/TJ02066.webp",
    ],
    variants: [
      { diameterIn: 22, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 30, centerBoreMm: 84.1, color: "亚黑车边" },
    ],
  },
  {
    modelId: "TJ02072",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "枪灰车面",
      "黑色车边",
    ],
    images: [
      "/images/products/wheel/TJ02072.webp",
    ],
    variants: [
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.56, color: "黑色车边" },
    ],
  },
  {
    modelId: "TJ02076",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02076.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02079",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ02079.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ02084",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ02084.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ02085",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02085.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02086",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02086.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 45, centerBoreMm: 84.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02087",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02087.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02097",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "精抛",
      "亮黑全涂",
    ],
    images: [
      "/images/products/wheel/TJ02097.webp",
    ],
    variants: [
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 17, widthIn: 7.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "亮黑全涂" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "亮黑全涂" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "亮黑全涂" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.5, color: "亮黑全涂" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.5, color: "精抛" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 36, centerBoreMm: 66.5, color: "亮黑全涂" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43.5, centerBoreMm: 66.5, color: "亮黑全涂" },
    ],
  },
  {
    modelId: "TJ02099",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "亚黑车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ02099.webp",
    ],
    variants: [
      { diameterIn: 22, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 33, centerBoreMm: 84.1, color: "亚黑车面" },
      { diameterIn: 22, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 130 }], offsetMm: 33, centerBoreMm: 84.1, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ02102",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ02102.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.5, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ02104",
    process: "锻造",
    carSeries: "锻造轮毂奔驰",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ02104.webp",
    ],
    variants: [
      { diameterIn: 22, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 42, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 22, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "GZM536",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "黑色车面铣边",
    ],
    images: [],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.56, color: "黑色车面铣边" },
    ],
  },
  {
    modelId: "TJ01001",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ01001.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 37, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 37, centerBoreMm: 66.45, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ01002",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ01002.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ01003",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "黑色车面铣边",
      "古铜",
      "黑色精抛面",
    ],
    images: [
      "/images/products/wheel/TJ01003.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面铣边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "黑色车面铣边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "古铜" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "黑色车面铣边" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "黑色精抛面" },
    ],
  },
  {
    modelId: "TJ01004",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "亮黑",
      "亮黑内红圈",
    ],
    images: [
      "/images/products/wheel/TJ01004.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "亮黑内红圈" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.45, color: "亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.45, color: "亮黑内红圈" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "亮黑" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "亮黑内红圈" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "亮黑" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "亮黑内红圈" },
    ],
  },
  {
    modelId: "TJ01005",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "黑色车面",
      "亮黑全涂",
    ],
    images: [
      "/images/products/wheel/TJ01005.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.56, color: "亮黑全涂" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "亮黑全涂" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.56, color: "亮黑全涂" },
    ],
  },
  {
    modelId: "TJ01009",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ01009.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ01010",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ01010.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ01012",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "枪灰车面",
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ01012.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ01013",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ01013.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ01016",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "黑色车边",
    ],
    images: [
      "/images/products/wheel/TJ01016.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.45, color: "黑色车边" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "黑色车边" },
    ],
  },
  {
    modelId: "TJ01017",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ01017.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 31, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 31, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ01018",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ01018.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ01020",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "黑色车面",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ01020.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ01023",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ01023.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ01024",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ01024.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 32, centerBoreMm: 66.45, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ01025",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ01025.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ01028",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ01028.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.5, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.5, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ01030",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ01030.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ01031",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "精抛",
    ],
    images: [
      "/images/products/wheel/TJ01031.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "精抛" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "精抛" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "精抛" },
    ],
  },
  {
    modelId: "TJ01033",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ01033.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ01034",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ01034.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ01038",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "亮黑",
      "枪灰",
      "黑色精抛面",
    ],
    images: [
      "/images/products/wheel/TJ01038.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "枪灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "黑色精抛面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "亮黑" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "枪灰" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "亮黑" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.45, color: "枪灰" },
    ],
  },
  {
    modelId: "TJ01039",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ01039.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ01048",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ01048.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ01050",
    process: "锻造",
    carSeries: "锻造轮毂奥迪",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ01050.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.45, color: "黑色车面" },
    ],
  },
  {
    modelId: "DZSBM08",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/DZSBM08.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03001",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
      "亮黑",
    ],
    images: [
      "/images/products/wheel/TJ03001.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 46, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "亮黑" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 37, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 37, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 74.1, color: "亮黑" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "亮黑" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 37, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 37, centerBoreMm: 66.56, color: "亮黑" },
    ],
  },
  {
    modelId: "TJ03002",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
      "亮黑",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ03002.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "亮黑" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "亮黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ03003",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ03003.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ03005",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03005.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 37, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03006",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ03006.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ03016",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03016.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 10.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 74.1, color: "黑色车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03017",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03017.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 31, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03020",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ03020.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 25, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ03021",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ03021.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 37, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ03022",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
      "亮黑",
    ],
    images: [
      "/images/products/wheel/TJ03022.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 37, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 37, centerBoreMm: 66.56, color: "亮黑" },
    ],
  },
  {
    modelId: "TJ03024",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 37, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03025",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ03025.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ03027",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
      "亮黑",
    ],
    images: [
      "/images/products/wheel/TJ03027.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 74.1, color: "亮黑" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "亮黑" },
    ],
  },
  {
    modelId: "TJ03028",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ03028.webp",
    ],
    variants: [
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 10.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 22, widthIn: 10.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ03029",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面铣槽",
    ],
    images: [
      "/images/products/wheel/TJ03029.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面铣槽" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面铣槽" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面铣槽" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 37, centerBoreMm: 66.56, color: "黑色车面铣槽" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面铣槽" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 72.56, color: "黑色车面铣槽" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "黑色车面铣槽" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 37, centerBoreMm: 66.56, color: "黑色车面铣槽" },
    ],
  },
  {
    modelId: "TJ03030",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03030.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03031",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "亚黑",
    ],
    images: [
      "/images/products/wheel/TJ03031.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "亚黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 37, centerBoreMm: 66.56, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "亚黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 72.56, color: "亚黑" },
    ],
  },
  {
    modelId: "TJ03032",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ03032.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 72.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ03034",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ03034.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 39, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ03036",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03036.webp",
    ],
    variants: [
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 22, widthIn: 10.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03037",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03037.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 39, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 39, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03038",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ03038.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ03039",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03039.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 31, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03040",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03040.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03041",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
      "亮黑",
    ],
    images: [
      "/images/products/wheel/TJ03041.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 74.1, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "黑色车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 74.1, color: "黑色车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 74.1, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 10.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 74.1, color: "黑色车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "黑色车面" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 22, widthIn: 10.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 22, widthIn: 10.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "亮黑" },
    ],
  },
  {
    modelId: "TJ03042",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03042.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03044",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ03044.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ03045",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03045.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03046",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ03046.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ03048",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ03048.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 25, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 39, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ03050",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ03050.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 10.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 45, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 10.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 22, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 22, widthIn: 10.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ03051",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ03051.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 21, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ03052",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03052.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03053",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "亮黑",
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03053.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "亮黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03054",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
      "亮黑",
    ],
    images: [
      "/images/products/wheel/TJ03054.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 10.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 20, widthIn: 10.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 10.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 21, widthIn: 10.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 40, centerBoreMm: 66.56, color: "亮黑" },
    ],
  },
  {
    modelId: "TJ03055",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03055.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03056",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03056.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03057",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ03057.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 28, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ03059",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03059.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 30, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 72.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03060",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "亮黑",
      "古铜",
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03060.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "亮黑" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 72.56, color: "古铜" },
      { diameterIn: 18, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 72.56, color: "古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "古铜" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "古铜" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 22, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 22, centerBoreMm: 66.56, color: "古铜" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "古铜" },
    ],
  },
  {
    modelId: "TJ03067",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03067.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 25, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03068",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
      "亮黑",
    ],
    images: [
      "/images/products/wheel/TJ03068.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 46, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 74.1, color: "亮黑" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 74.1, color: "亮黑" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 74.1, color: "亮黑" },
      { diameterIn: 21, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "亮黑" },
    ],
  },
  {
    modelId: "TJ03072",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ03072.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 74.1, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 11, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 37, centerBoreMm: 74.1, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ03076",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
      "亮黑",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ03076.webp",
    ],
    variants: [
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 37, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 10.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 37, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 21, widthIn: 10.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.56, color: "亮黑" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 37, centerBoreMm: 66.56, color: "枪灰车面" },
      { diameterIn: 21, widthIn: 10.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 43, centerBoreMm: 66.56, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ03087",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03087.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 35, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ03090",
    process: "锻造",
    carSeries: "锻造轮毂宝马",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ03090.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 28, centerBoreMm: 66.56, color: "黑色车面" },
      { diameterIn: 19, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 112 }], offsetMm: 38, centerBoreMm: 66.56, color: "黑色车面" },
    ],
  },
  {
    modelId: "DZSXM02",
    process: "锻造",
    carSeries: "锻造轮毂特斯拉-小米",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/DZSXM02.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 64.5, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 64.5, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 64.5, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ11004",
    process: "锻造",
    carSeries: "锻造轮毂特斯拉-小米",
    colors: [
      "亚黑",
    ],
    images: [
      "/images/products/wheel/TJ11004.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 33, centerBoreMm: 64.1, color: "亚黑" },
    ],
  },
  {
    modelId: "TJ11005",
    process: "锻造",
    carSeries: "锻造轮毂特斯拉-小米",
    colors: [
      "亚黑",
      "枪灰",
    ],
    images: [
      "/images/products/wheel/TJ11005.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 33, centerBoreMm: 64.1, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 33, centerBoreMm: 64.1, color: "枪灰" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 33, centerBoreMm: 64.1, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 33, centerBoreMm: 64.1, color: "枪灰" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 33, centerBoreMm: 64.1, color: "亚黑" },
    ],
  },
  {
    modelId: "TJ11008",
    process: "锻造",
    carSeries: "锻造轮毂特斯拉-小米",
    colors: [
      "亚黑",
      "银色",
    ],
    images: [
      "/images/products/wheel/TJ11008.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 33, centerBoreMm: 64.1, color: "亚黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 33, centerBoreMm: 64.1, color: "银色" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 33, centerBoreMm: 64.1, color: "亚黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 33, centerBoreMm: 64.1, color: "银色" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 33, centerBoreMm: 64.1, color: "亚黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 33, centerBoreMm: 64.1, color: "银色" },
    ],
  },
  {
    modelId: "TJ11010",
    process: "锻造",
    carSeries: "锻造轮毂特斯拉-小米",
    colors: [
      "亚黑",
    ],
    images: [
      "/images/products/wheel/TJ11010.webp",
    ],
    variants: [
      { diameterIn: 22, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 64.1, color: "亚黑" },
      { diameterIn: 22, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 64.1, color: "亚黑" },
    ],
  },
  {
    modelId: "TJ11011",
    process: "锻造",
    carSeries: "锻造轮毂特斯拉-小米",
    colors: [
      "枪灰",
      "亚黑",
    ],
    images: [
      "/images/products/wheel/TJ11011.webp",
    ],
    variants: [
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 64.1, color: "枪灰" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 64.1, color: "枪灰" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 64.1, color: "亚黑" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 64.1, color: "亚黑" },
    ],
  },
  {
    modelId: "TJ15006",
    process: "锻造",
    carSeries: "锻造轮毂特斯拉-小米",
    colors: [
      "亮黑",
      "枪灰",
    ],
    images: [
      "/images/products/wheel/TJ15006.webp",
    ],
    variants: [
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 30, centerBoreMm: 65.1, color: "亮黑" },
      { diameterIn: 18, widthIn: 8, pcd: [{ lugCount: 5, pcdMm: 110 }], offsetMm: 30, centerBoreMm: 65.1, color: "枪灰" },
    ],
  },
  {
    modelId: "TJ37004",
    process: "锻造",
    carSeries: "锻造轮毂特斯拉-小米",
    colors: [
      "黑白套色",
    ],
    images: [
      "/images/products/wheel/TJ37004.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 64.5, color: "黑白套色" },
    ],
  },
  {
    modelId: "TJ37005",
    process: "锻造",
    carSeries: "锻造轮毂特斯拉-小米",
    colors: [
      "亮黑",
      "黑色车边",
      "黑色黄边",
    ],
    images: [
      "/images/products/wheel/TJ37005.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 64.5, color: "亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 64.5, color: "黑色车边" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 64.5, color: "黑色黄边" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 64.5, color: "亮黑" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 64.5, color: "亮黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 64.5, color: "黑色车边" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 64.5, color: "黑色车边" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 64.5, color: "黑色黄边" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 64.5, color: "黑色黄边" },
      { diameterIn: 21, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 30, centerBoreMm: 64.5, color: "亮黑" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 64.5, color: "亮黑" },
      { diameterIn: 21, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 30, centerBoreMm: 64.5, color: "黑色车边" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 64.5, color: "黑色车边" },
      { diameterIn: 21, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 30, centerBoreMm: 64.5, color: "黑色黄边" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 35, centerBoreMm: 64.5, color: "黑色黄边" },
    ],
  },
  {
    modelId: "TJ37009",
    process: "锻造",
    carSeries: "锻造轮毂特斯拉-小米",
    colors: [
      "黑色精抛面",
    ],
    images: [
      "/images/products/wheel/TJ37009.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 32, centerBoreMm: 64.5, color: "黑色精抛面" },
      { diameterIn: 21, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 32, centerBoreMm: 64.5, color: "黑色精抛面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 32, centerBoreMm: 64.5, color: "黑色精抛面" },
    ],
  },
  {
    modelId: "TJ37010",
    process: "锻造",
    carSeries: "锻造轮毂特斯拉-小米",
    colors: [
      "黑色精抛面",
    ],
    images: [
      "/images/products/wheel/TJ37010.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 32, centerBoreMm: 64.5, color: "黑色精抛面" },
      { diameterIn: 21, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 32, centerBoreMm: 64.5, color: "黑色精抛面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 32, centerBoreMm: 64.5, color: "黑色精抛面" },
    ],
  },
  {
    modelId: "TJ37011",
    process: "锻造",
    carSeries: "锻造轮毂特斯拉-小米",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ37011.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 38, centerBoreMm: 64.5, color: "黑色车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 32, centerBoreMm: 64.5, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ37014",
    process: "锻造",
    carSeries: "锻造轮毂特斯拉-小米",
    colors: [
      "黑色精铣面",
    ],
    images: [
      "/images/products/wheel/TJ37014.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 32, centerBoreMm: 64.5, color: "黑色精铣面" },
      { diameterIn: 21, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 32, centerBoreMm: 64.5, color: "黑色精铣面" },
      { diameterIn: 21, widthIn: 9.5, pcd: [{ lugCount: 5, pcdMm: 114.3 }], offsetMm: 32, centerBoreMm: 64.5, color: "黑色精铣面" },
    ],
  },
  {
    modelId: "DZSWJ03",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "精抛",
    ],
    images: [
      "/images/products/wheel/DZSWJ03.webp",
    ],
    variants: [
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "精抛" },
    ],
  },
  {
    modelId: "DZSWJ05",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "精抛",
    ],
    images: [
      "/images/products/wheel/DZSWJ05.webp",
    ],
    variants: [
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "精抛" },
    ],
  },
  {
    modelId: "DZSWJ06",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "精抛",
    ],
    images: [
      "/images/products/wheel/DZSWJ06.webp",
    ],
    variants: [
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 66.1, color: "精抛" },
    ],
  },
  {
    modelId: "TJ09001",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "黑色铣面",
      "黑色精抛面",
    ],
    images: [
      "/images/products/wheel/TJ09001.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 62.55, color: "黑色铣面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 62.55, color: "黑色铣面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 62.55, color: "黑色精抛面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 62.55, color: "黑色铣面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 62.55, color: "黑色精抛面" },
      { diameterIn: 22, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 62.55, color: "黑色铣面" },
      { diameterIn: 22, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 62.55, color: "黑色精抛面" },
    ],
  },
  {
    modelId: "TJ09002",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "枪灰车面",
      "亮黑",
    ],
    images: [
      "/images/products/wheel/TJ09002.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 62.55, color: "枪灰车面" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 62.55, color: "亮黑" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 62.55, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 62.55, color: "亮黑" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 62.55, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ09012",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ09012.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.55, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 62.55, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 62.55, color: "黑色车面" },
      { diameterIn: 22, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 38, centerBoreMm: 62.55, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ10002",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ10002.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.55, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.55, color: "黑色车面" },
      { diameterIn: 22, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.55, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ10004",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "黑色车面",
      "亮黑",
    ],
    images: [
      "/images/products/wheel/TJ10004.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.55, color: "黑色车面" },
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.55, color: "亮黑" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.55, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.55, color: "亮黑" },
      { diameterIn: 22, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.55, color: "黑色车面" },
      { diameterIn: 22, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.55, color: "亮黑" },
    ],
  },
  {
    modelId: "TJ10005",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "金属灰全涂+镶嵌",
    ],
    images: [
      "/images/products/wheel/TJ10005.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 45, centerBoreMm: 62.55, color: "金属灰全涂+镶嵌" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 45, centerBoreMm: 62.55, color: "金属灰全涂+镶嵌" },
    ],
  },
  {
    modelId: "TJ11003",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "亮黑",
      "枪灰车面",
    ],
    images: [
      "/images/products/wheel/TJ11003.webp",
    ],
    variants: [
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.55, color: "亮黑" },
      { diameterIn: 19, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.55, color: "枪灰车面" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.55, color: "亮黑" },
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 62.55, color: "枪灰车面" },
    ],
  },
  {
    modelId: "TJ26001",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ26001.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 66.1, color: "黑色车面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "黑色车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ26002",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "精抛",
    ],
    images: [
      "/images/products/wheel/TJ26002.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 66.1, color: "精抛" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "精抛" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "精抛" },
      { diameterIn: 22, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "精抛" },
      { diameterIn: 22, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "精抛" },
    ],
  },
  {
    modelId: "TJ26003",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "银色车面",
      "精抛",
    ],
    images: [
      "/images/products/wheel/TJ26003.webp",
    ],
    variants: [
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "银色车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "银色车面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "精抛" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "精抛" },
      { diameterIn: 22, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "银色车面" },
      { diameterIn: 22, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "银色车面" },
    ],
  },
  {
    modelId: "TJ26010",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "精抛",
    ],
    images: [
      "/images/products/wheel/TJ26010.webp",
    ],
    variants: [
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "精抛" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "精抛" },
      { diameterIn: 22, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "精抛" },
      { diameterIn: 22, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "精抛" },
    ],
  },
  {
    modelId: "TJ26013",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ26013.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 66.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ26015",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "银色车面",
      "精抛",
      "亮黑",
    ],
    images: [
      "/images/products/wheel/TJ26015.webp",
    ],
    variants: [
      { diameterIn: 20, widthIn: 8.5, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 30, centerBoreMm: 66.1, color: "银色车面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "银色车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "银色车面" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "精抛" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "精抛" },
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "亮黑" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "亮黑" },
    ],
  },
  {
    modelId: "TJ26017",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "黑色车边",
    ],
    images: [
      "/images/products/wheel/TJ26017.webp",
    ],
    variants: [
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "黑色车边" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "黑色车边" },
    ],
  },
  {
    modelId: "TJ26021",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ26021.webp",
    ],
    variants: [
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "黑色车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ26023",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ26023.webp",
    ],
    variants: [
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "黑色车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "黑色车面" },
      { diameterIn: 22, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "黑色车面" },
      { diameterIn: 22, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "黑色车面" },
    ],
  },
  {
    modelId: "TJ26030",
    process: "锻造",
    carSeries: "锻造轮毂理想蔚来问界",
    colors: [
      "黑色车面",
    ],
    images: [
      "/images/products/wheel/TJ26030.webp",
    ],
    variants: [
      { diameterIn: 21, widthIn: 9, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 35, centerBoreMm: 66.1, color: "黑色车面" },
      { diameterIn: 21, widthIn: 10, pcd: [{ lugCount: 5, pcdMm: 120 }], offsetMm: 40, centerBoreMm: 66.1, color: "黑色车面" },
    ],
  },
];

const wheelModelsById: ReadonlyMap<string, WheelModel> = new Map(
  wheelModels.map((model) => [model.modelId, model]),
);

/** 按编号取单个轮毂；不存在返回 `undefined`。 */
export function getWheelModel(modelId: string): WheelModel | undefined {
  return wheelModelsById.get(modelId);
}

/** 卡片图（480×480）公开路径。与 `images` 里的详情图廊分开命名。 */
export function wheelCardImagePath(modelId: string): string {
  return `${WHEEL_IMAGE_DIR}/${modelId}-card.webp`;
}
