export type WheelCategory =
  | "sport"
  | "multi-spoke"
  | "premium"
  | "detail";

export type WheelStyle = "运动" | "豪华" | "低调" | "越野";
export type WheelSpoke = "五辐" | "多辐" | "Y字" | "网状";
export type WheelColor = "亮黑" | "枪灰" | "银色" | "古铜" | "双色车削";

export type WheelImage = {
  id: string;
  filename: string;
  publicPath: string;
  width: 1086;
  height: 1448;
  aspectRatio: "3/4";
  title: string;
  category: WheelCategory;
  alt: string;
};

/** 轮毂富数据 — 用于选款工具筛选和展示 */
export type WheelImageRich = WheelImage & {
  style: WheelStyle;
  spoke: WheelSpoke;
  color: WheelColor;
  /** 工艺（铸造/锻造/旋压等） */
  process: string;
  /** 适配车型建议 */
  fitModels: string;
  /** 2-3 字风格标签 */
  styleLabel: string;
};

export type WheelValue = {
  title: string;
  description: string;
};

export type WheelFitmentCheck = {
  label: string;
  title: string;
  description: string;
  /** 错误适配可能造成的问题 */
  risk: string;
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

export const wheelCategoryLabels: Record<WheelCategory, string> = {
  sport: "运动风格",
  "multi-spoke": "多辐条视觉",
  premium: "质感升级",
  detail: "细节参考",
};

function categoryForOrder(order: number): WheelCategory {
  if (order <= 6) return "sport";
  if (order <= 12) return "multi-spoke";
  if (order <= 17) return "premium";
  return "detail";
}

/** 按序号分配默认属性（待产品确认后替换） */
function defaultRichForOrder(order: number): {
  style: WheelStyle;
  spoke: WheelSpoke;
  color: WheelColor;
  process: string;
  fitModels: string;
  styleLabel: string;
} {
  if (order <= 6) return { style: "运动", spoke: "五辐", color: "亮黑", process: "铸造", fitModels: "轿车 / SUV", styleLabel: "运动五辐" };
  if (order <= 12) return { style: "豪华", spoke: "多辐", color: "枪灰", process: "铸造", fitModels: "轿车 / MPV", styleLabel: "豪华多辐" };
  if (order <= 17) return { style: "低调", spoke: "Y字", color: "银色", process: "旋压", fitModels: "SUV / 新能源", styleLabel: "质感Y辐" };
  return { style: "越野", spoke: "网状", color: "古铜", process: "铸造", fitModels: "SUV / 越野", styleLabel: "硬朗网状" };
}

export const wheelGalleryImages: readonly WheelImage[] =
  WHEEL_IMAGE_FILENAMES.map((filename, index) => {
    const order = index + 1;
    const category = categoryForOrder(order);
    const serial = String(order).padStart(2, "0");
    return {
      id: `wheel-${serial}`,
      filename,
      publicPath: `/images/products/wheel/${filename}`,
      width: WHEEL_IMAGE_WIDTH,
      height: WHEEL_IMAGE_HEIGHT,
      aspectRatio: WHEEL_IMAGE_ASPECT_RATIO,
      title: `轮毂方案 ${serial}`,
      category,
      alt: `蓝辉轻改轮毂${wheelCategoryLabels[category]}展示图 ${serial}`,
    };
  });

/** 21 款轮毂富数据（属性为默认值，待产品确认） */
export const wheelImagesRich: readonly WheelImageRich[] =
  wheelGalleryImages.map((img, index) => {
    const order = index + 1;
    const rich = defaultRichForOrder(order);
    return { ...img, ...rich };
  });

/** ====== 筛选常量 ====== */

export const WHEEL_STYLE_FILTERS = [
  { key: "all", label: "全部风格" },
  { key: "运动", label: "运动" },
  { key: "豪华", label: "豪华" },
  { key: "低调", label: "低调" },
  { key: "越野", label: "越野" },
] as const;

export const WHEEL_SPOKE_FILTERS = [
  { key: "all", label: "全部结构" },
  { key: "五辐", label: "五辐" },
  { key: "多辐", label: "多辐" },
  { key: "Y字", label: "Y字" },
  { key: "网状", label: "网状" },
] as const;

export const WHEEL_COLOR_FILTERS = [
  { key: "all", label: "全部颜色" },
  { key: "亮黑", label: "亮黑" },
  { key: "枪灰", label: "枪灰" },
  { key: "银色", label: "银色" },
  { key: "古铜", label: "古铜" },
  { key: "双色车削", label: "双色车削" },
] as const;

/** 精选款（前 8 项） */
export const FEATURED_WHEEL_COUNT = 8;

/** ====== 适配价值 + 检查项（已合并为清单用） ====== */

export const wheelValues: readonly WheelValue[] = [
  {
    title: "原车数据匹配",
    description: "围绕尺寸、ET、孔距、中心孔、载重等关键数据确认可执行范围。",
  },
  {
    title: "外观姿态升级",
    description: "通过轮毂样式、颜色和辐条视觉改变车侧比例，让整车风格更明确。",
  },
  {
    title: "轮胎与刹车空间",
    description: "同步考虑轮胎规格、刹车卡钳空间和转向剐蹭风险，避免只看外观。",
  },
  {
    title: "交付复查标准",
    description: "安装后关注动平衡、螺丝扭矩、胎压、方向盘抖动和行驶异响。",
  },
];

export const wheelFitmentChecks: readonly WheelFitmentCheck[] = [
  {
    label: "SIZE",
    title: "尺寸与轮胎规格",
    description:
      "确认轮毂直径、宽度与轮胎规格是否适合原车使用场景。尺寸偏差过大会导致时速表不准、转向剐蹭或轮胎异常磨损。",
    risk: "尺寸不匹配会导致时速表偏差异常、轮胎异常磨损、转向时剐蹭轮拱内衬，严重时影响制动安全。",
  },
  {
    label: "ET / PCD",
    title: "ET值、孔距、中心孔",
    description:
      "ET（偏距）决定轮毂外凸或内缩程度、是否干涉刹车卡钳；PCD（孔距）和中心孔必须与原车一致。错误的孔距会导致螺栓受力不均、行驶中松动。",
    risk: "ET值错误会导致轮胎蹭翼子板或卡钳干涉；孔距不匹配无法安全安装；中心孔偏差会在高速时引起方向盘抖动。",
  },
  {
    label: "TPMS",
    title: "胎压传感器与气门嘴",
    description:
      "更换轮毂时需确认原车胎压传感器（TPMS）是拆移复用还是更换新传感器，安装后需重新学习配对。气门嘴材质和长度也需要适配新轮毂。",
    risk: "传感器未正确安装或配对会导致胎压报警常亮、无法监测胎压异常，高速行驶时存在安全隐患。",
  },
  {
    label: "BALANCE",
    title: "动平衡与扭矩复查",
    description:
      "安装后必须按规范做动平衡（减少高速方向盘抖动）和螺丝扭矩校验（防止过紧损伤螺纹或过松导致松动）。建议行驶 100-200km 后复查扭矩。",
    risk: "不做动平衡会在 80-120km/h 时出现方向盘抖动；扭矩不正确可能导致螺栓断裂或轮毂脱落。",
  },
];

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

/** ====== 铸造 vs 锻造对比 ====== */

export const WHEEL_PROCESS_COMPARISON = [
  { aspect: "制造方式", cast: "金属液浇铸成型", forged: "铝合金坯料高压锻压成型" },
  { aspect: "重量", cast: "偏重（同尺寸）", forged: "轻 20-30%" },
  { aspect: "强度", cast: "一般，适合日常使用", forged: "更高，适合性能驾驶" },
  { aspect: "预算区间", cast: "较亲民", forged: "较高" },
  { aspect: "适合人群", cast: "外观升级为主、日常通勤", forged: "追求轻量化与操控、性能车主" },
  { aspect: "工艺识别", cast: "模具纹理，背面较粗糙", forged: "表面细腻，常见铣削痕迹" },
];
