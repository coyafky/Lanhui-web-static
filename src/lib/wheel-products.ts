export type WheelSpoke = "五辐" | "多辐" | "Y字" | "网状";

export type WheelImage = {
  id: string;
  filename: string;
  publicPath: string;
  width: 1086;
  height: 1448;
  aspectRatio: "3/4";
  title: string;
  alt: string;
};

/** 轮毂结构数据，用于选款工具筛选和展示。 */
export type WheelImageRich = WheelImage & {
  spoke: WheelSpoke;
};

export type WheelProcessStep = {
  step: string;
  title: string;
  description: string;
  /** 可交付结果描述 */
  deliverable: string;
};

export const WHEEL_IMAGE_WIDTH = 1086 as const;
export const WHEEL_IMAGE_HEIGHT = 1448 as const;
export const WHEEL_IMAGE_ASPECT_RATIO = "3/4" as const;

const WHEEL_IMAGE_FILENAMES = [
  "1-1.webp", "1-2.webp", "1-3.webp", "1-4.webp", "1-5.webp",
  "1-6.webp", "1-7.webp", "1-8.webp", "1-9.webp", "1-10.webp",
  "1-11.webp", "1-12.webp", "1-13.webp", "1-14.webp", "1-15.webp",
  "1-16.webp", "1-17.webp", "1-18.webp", "1-19.webp", "1-20.webp",
  "1-21.webp",
] as const;

export const wheelGalleryImages: readonly WheelImage[] =
  WHEEL_IMAGE_FILENAMES.map((filename, index) => {
    const order = index + 1;
    const serial = String(order).padStart(2, "0");
    return {
      id: `wheel-${serial}`,
      filename,
      publicPath: `/images/products/wheel/${filename}`,
      width: WHEEL_IMAGE_WIDTH,
      height: WHEEL_IMAGE_HEIGHT,
      aspectRatio: WHEEL_IMAGE_ASPECT_RATIO,
      title: `轮毂方案 ${serial}`,
      alt: `蓝辉轻改轮毂展示图 ${serial}`,
    };
  });

/** 根据 21 张实物图逐张审查后的辐条结构分类。 */
const WHEEL_SPOKES_BY_ORDER = [
  "网状",
  "多辐",
  "网状",
  "Y字",
  "Y字",
  "多辐",
  "Y字",
  "多辐",
  "多辐",
  "Y字",
  "多辐",
  "多辐",
  "多辐",
  "多辐",
  "五辐",
  "Y字",
  "网状",
  "多辐",
  "Y字",
  "Y字",
  "多辐",
] as const satisfies readonly WheelSpoke[];

export const wheelImagesRich: readonly WheelImageRich[] =
  wheelGalleryImages.map((img, index) => {
    const spoke = WHEEL_SPOKES_BY_ORDER[index];
    if (!spoke) throw new Error(`缺少轮毂结构分类：${img.filename}`);
    return {
      ...img,
      spoke,
      alt: `蓝辉轻改${spoke}结构轮毂展示图 ${String(index + 1).padStart(2, "0")}`,
    };
  });

export const WHEEL_SPOKE_FILTERS = [
  { key: "all", label: "全部结构" },
  { key: "五辐", label: "五辐" },
  { key: "多辐", label: "多辐" },
  { key: "Y字", label: "Y字" },
  { key: "网状", label: "网状" },
] as const;

/** 精选款（前 8 项） */
export const FEATURED_WHEEL_COUNT = 8;

/** ====== 服务流程 ====== */

export const wheelProcess: readonly WheelProcessStep[] = [
  {
    step: "01",
    title: "确认原车数据",
    description:
      "记录车型、年款、原厂轮毂尺寸、轮胎规格和刹车空间。查阅原厂维修手册确认可安装参数范围。",
    deliverable: "原车数据确认单",
  },
  {
    step: "02",
    title: "试装与刹车间隙确认",
    description:
      "对新轮毂进行试装，检查刹车卡钳间隙、转向极限位置剐蹭情况和轮拱内衬距离。",
    deliverable: "刹车间隙检查记录",
  },
  {
    step: "03",
    title: "安装与动平衡",
    description:
      "按规范安装轮胎与轮毂，完成动平衡校验、胎压传感器配对和基础行驶检查。",
    deliverable: "动平衡数据报告",
  },
  {
    step: "04",
    title: "交付与扭矩复查",
    description:
      "交付时说明磨合期注意事项，提醒行驶 100-200km 后回店复查螺丝扭矩。",
    deliverable: "交付检查表",
  },
];
