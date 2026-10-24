/**
 * 地板改装页数据
 *
 * 数据派生自 public/images/products/flooring/manifest.json。
 * 只渲染 templateStatus === "active" 且 assetStatus === "ready" 的品牌。
 */

export type FlooringHotBrand =
  | "li-auto"
  | "aito"
  | "zeekr"
  | "xpeng";

export type FlooringColorId =
  | "snow-white"
  | "neutral-gray"
  | "rock-black"
  | "wood-brown";

export type FlooringFitmentStatus = "confirmed" | "needs-review" | "not-supported";

export type FlooringColorVariant = {
  id: string;
  colorId: FlooringColorId;
  colorName: string;
  description: string;
  assetPath: string;
  width: number;
  height: number;
  alt: string;
};

export type FlooringVehicleGroup = {
  id: string;
  brand: FlooringHotBrand;
  brandName: string;
  models: string[];
  modelYears: string;
  seatLayout: string;
  headline: string;
  summary: string;
  fitmentStatus: FlooringFitmentStatus;
  fitmentNote: string;
  installTime: string;
  startingPrice: string;
  requiresSeatRemoval: boolean;
  requiresDrilling: boolean;
  colorVariants: FlooringColorVariant[];
};

export type FlooringColorMeta = {
  id: FlooringColorId;
  name: string;
  description: string;
};

// ─── 使用场景 ───

export type FlooringScenario = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const flooringScenarios: FlooringScenario[] = [
  {
    id: "family",
    icon: "Baby",
    title: "家庭带娃",
    description:
      "孩子零食碎屑、饮料泼洒、雨天泥水——原车织物地毯吸附后难以彻底清理。地板总成让日常擦拭更省心。",
  },
  {
    id: "business",
    icon: "Briefcase",
    title: "商务接待",
    description:
      "后排是客户和合作伙伴的高频乘坐区域，整洁统一的地板能传递对细节的要求。",
  },
  {
    id: "camping",
    icon: "Tent",
    title: "露营出行",
    description:
      "户外装备、折叠桌椅频繁装卸，尾箱和后排地板需要更耐用的表面处理。",
  },
  {
    id: "pet",
    icon: "PawPrint",
    title: "宠物同行",
    description:
      "宠物毛发嵌入织物地毯缝隙后极难清除，地板总成表面更光滑，吸尘和擦拭即可打理。",
  },
  {
    id: "frequent-passenger",
    icon: "Users",
    title: "高频载客",
    description:
      "多人乘坐场景下，滑轨周围和脚踏区域容易积灰。地板总成有助于保持这些区域整洁。",
  },
];

// ─── 核心价值（3 项）───

export type FlooringCoreValue = {
  id: string;
  title: string;
  description: string;
};

export const flooringCoreValues: FlooringCoreValue[] = [
  {
    id: "easy-clean",
    title: "更好打理",
    description:
      "相比原车织物地毯，地板表面更光滑，零食碎屑、泥沙和宠物毛发用吸尘器配合湿布即可清理。",
  },
  {
    id: "rail-clean",
    title: "滑轨更整洁",
    description:
      "地板总成围绕座椅滑轨区域做整体覆盖，减少滑轨缝隙积灰，日常清洁更方便。",
  },
  {
    id: "cabin-unified",
    title: "内饰更统一",
    description:
      "地板、滑轨饰条、迎宾踏板和尾箱地板形成一致的视觉效果，提升后排空间的整体感。",
  },
];

// ─── 专业细节（4 项）───

export type FlooringProDetail = {
  id: string;
  title: string;
  description: string;
};

export const flooringProDetails: FlooringProDetail[] = [
  {
    id: "material",
    title: "材质与厚度",
    description:
      "多层复合结构，面层耐磨、中间缓冲、底层贴合。厚度根据车型和座椅布局匹配，不改变原车地板高度基准。",
  },
  {
    id: "color-match",
    title: "颜色与内饰搭配",
    description:
      "提供雪霜白、中性灰、岩石黑、木纹咖四种配色，适配浅色、深色和暖色内饰风格。",
  },
  {
    id: "edge-finish",
    title: "边角收口处理",
    description:
      "门边、滑轨周边和座椅固定点周围做精密收口，不挤压原车线束和空调出风口。",
  },
  {
    id: "trunk-link",
    title: "尾箱联动",
    description:
      "尾箱地板与后排地板统一材质和颜色，兼顾收纳、清洁和高频装卸场景。",
  },
];

// ─── 颜色（4 种）───

export const flooringColors: FlooringColorMeta[] = [
  {
    id: "snow-white",
    name: "雪霜白",
    description: "适合浅色内饰，视觉更明亮干净。",
  },
  {
    id: "neutral-gray",
    name: "中性灰",
    description: "适合灰色或冷色内饰，整体更克制耐看。",
  },
  {
    id: "rock-black",
    name: "岩石黑",
    description: "适合深色内饰，视觉更稳重。",
  },
  {
    id: "wood-brown",
    name: "木纹咖",
    description: "适合棕色、暖色或木纹风格内饰。",
  },
];

// ─── 品牌/车型分组（4 个 active+ready）───

export const flooringVehicleGroups: FlooringVehicleGroup[] = [
  {
    id: "li-auto",
    brand: "li-auto",
    brandName: "理想",
    models: ["理想 L 系列", "理想 MEGA"],
    modelYears: "2023-2025 款",
    seatLayout: "6座 / 7座（具体以车型为准）",
    headline: "家庭出行场景下的地板总成",
    summary:
      "适合家庭高频乘坐、儿童出行和露营收纳等场景，地板、滑轨、脚踏和尾箱形成统一空间。",
    fitmentStatus: "confirmed",
    fitmentNote:
      "安装前需确认具体车型、年款和座椅布局；L 系列与 MEGA 滑轨结构不同，方案有差异。",
    installTime: "约 3-4 小时（视车型和配置）",
    startingPrice: "方案不同价格有差异，以到店评估为准",
    requiresSeatRemoval: true,
    requiresDrilling: false,
    colorVariants: [
      {
        id: "li-auto-wood-brown",
        colorId: "wood-brown",
        colorName: "木纹咖",
        description: "适合棕色、暖色或木纹风格内饰。",
        assetPath: "/images/products/flooring/图片/理想/1.webp",
        width: 798,
        height: 528,
        alt: "理想地板总成木纹咖产品图",
      },
      {
        id: "li-auto-neutral-gray",
        colorId: "neutral-gray",
        colorName: "中性灰",
        description: "适合灰色或冷色内饰，整体更克制耐看。",
        assetPath: "/images/products/flooring/图片/理想/2.webp",
        width: 798,
        height: 528,
        alt: "理想地板总成中性灰产品图",
      },
      {
        id: "li-auto-snow-white",
        colorId: "snow-white",
        colorName: "雪霜白",
        description: "适合浅色内饰，视觉更明亮干净。",
        assetPath: "/images/products/flooring/图片/理想/3.webp",
        width: 798,
        height: 528,
        alt: "理想地板总成雪霜白产品图",
      },
      {
        id: "li-auto-rock-black",
        colorId: "rock-black",
        colorName: "岩石黑",
        description: "适合深色内饰，视觉更稳重。",
        assetPath: "/images/products/flooring/图片/理想/4.webp",
        width: 798,
        height: 528,
        alt: "理想地板总成岩石黑产品图",
      },
    ],
  },
  {
    id: "aito",
    brand: "aito",
    brandName: "问界",
    models: ["问界 M7", "问界 M8", "问界 M9"],
    modelYears: "2023-2025 款",
    seatLayout: "5座 / 6座（具体以车型为准）",
    headline: "新能源家庭与商务兼顾的地板总成方案",
    summary:
      "问界车型兼具家庭出行和商务接待属性，地板总成让后排空间更整洁统一。",
    fitmentStatus: "confirmed",
    fitmentNote:
      "M7/M8/M9 的滑轨结构和座椅布局不同，需根据具体车型确认适配方案。",
    installTime: "约 3-4 小时（视车型和配置）",
    startingPrice: "方案不同价格有差异，以到店评估为准",
    requiresSeatRemoval: true,
    requiresDrilling: false,
    colorVariants: [
      {
        id: "aito-wood-brown",
        colorId: "wood-brown",
        colorName: "木纹咖",
        description: "适合棕色、暖色或木纹风格内饰。",
        assetPath: "/images/products/flooring/图片/问界/1.webp",
        width: 1075,
        height: 1052,
        alt: "问界地板总成木纹咖产品图",
      },
      {
        id: "aito-snow-white",
        colorId: "snow-white",
        colorName: "雪霜白",
        description: "适合浅色内饰，视觉更明亮干净。",
        assetPath: "/images/products/flooring/图片/问界/2.webp",
        width: 1075,
        height: 1052,
        alt: "问界地板总成雪霜白产品图",
      },
      {
        id: "aito-rock-black",
        colorId: "rock-black",
        colorName: "岩石黑",
        description: "适合深色内饰，视觉更稳重。",
        assetPath: "/images/products/flooring/图片/问界/3.webp",
        width: 1075,
        height: 1052,
        alt: "问界地板总成岩石黑产品图",
      },
      {
        id: "aito-neutral-gray",
        colorId: "neutral-gray",
        colorName: "中性灰",
        description: "适合灰色或冷色内饰，整体更克制耐看。",
        assetPath: "/images/products/flooring/图片/问界/4.webp",
        width: 1075,
        height: 1052,
        alt: "问界地板总成中性灰产品图",
      },
    ],
  },
  {
    id: "zeekr",
    brand: "zeekr",
    brandName: "极氪",
    models: ["极氪 009", "极氪 7X"],
    modelYears: "2023-2025 款",
    seatLayout: "5座 / 6座（具体以车型为准）",
    headline: "高端新能源座舱的地板总成展示",
    summary:
      "面向高端新能源车型的座舱整体感需求，强调后排整洁度与深浅内饰配色选择。",
    fitmentStatus: "confirmed",
    fitmentNote:
      "009 和 7X 的座椅布局和滑轨结构差异较大，方案需分别确认。",
    installTime: "约 3-4 小时（视车型和配置）",
    startingPrice: "方案不同价格有差异，以到店评估为准",
    requiresSeatRemoval: true,
    requiresDrilling: false,
    colorVariants: [
      {
        id: "zeekr-snow-white",
        colorId: "snow-white",
        colorName: "雪霜白",
        description: "适合浅色内饰，视觉更明亮干净。",
        assetPath: "/images/products/flooring/图片/极氪/1.webp",
        width: 798,
        height: 528,
        alt: "极氪地板总成雪霜白产品图",
      },
      {
        id: "zeekr-rock-black",
        colorId: "rock-black",
        colorName: "岩石黑",
        description: "适合深色内饰，视觉更稳重。",
        assetPath: "/images/products/flooring/图片/极氪/2.webp",
        width: 798,
        height: 528,
        alt: "极氪地板总成岩石黑产品图",
      },
      {
        id: "zeekr-wood-brown",
        colorId: "wood-brown",
        colorName: "木纹咖",
        description: "适合棕色、暖色或木纹风格内饰。",
        assetPath: "/images/products/flooring/图片/极氪/3.webp",
        width: 798,
        height: 528,
        alt: "极氪地板总成木纹咖产品图",
      },
      {
        id: "zeekr-neutral-gray",
        colorId: "neutral-gray",
        colorName: "中性灰",
        description: "适合灰色或冷色内饰，整体更克制耐看。",
        assetPath: "/images/products/flooring/图片/极氪/4.webp",
        width: 798,
        height: 528,
        alt: "极氪地板总成中性灰产品图",
      },
    ],
  },
  {
    id: "xpeng",
    brand: "xpeng",
    brandName: "小鹏",
    models: ["小鹏 X9", "小鹏 G9"],
    modelYears: "2023-2025 款",
    seatLayout: "5座 / 7座（具体以车型为准）",
    headline: "科技家庭座舱的地板与后排空间整合",
    summary:
      "适合家庭科技座舱场景，地板总成让后排区域更整洁，颜色变体帮助快速判断与内饰的匹配度。",
    fitmentStatus: "confirmed",
    fitmentNote:
      "X9 和 G9 的座椅布局和地板结构不同，方案需分别确认。",
    installTime: "约 3-4 小时（视车型和配置）",
    startingPrice: "方案不同价格有差异，以到店评估为准",
    requiresSeatRemoval: true,
    requiresDrilling: false,
    colorVariants: [
      {
        id: "xpeng-rock-black",
        colorId: "rock-black",
        colorName: "岩石黑",
        description: "适合深色内饰，视觉更稳重。",
        assetPath: "/images/products/flooring/图片/小鹏/1.webp",
        width: 798,
        height: 528,
        alt: "小鹏地板总成岩石黑产品图",
      },
      {
        id: "xpeng-snow-white",
        colorId: "snow-white",
        colorName: "雪霜白",
        description: "适合浅色内饰，视觉更明亮干净。",
        assetPath: "/images/products/flooring/图片/小鹏/2.webp",
        width: 798,
        height: 528,
        alt: "小鹏地板总成雪霜白产品图",
      },
      {
        id: "xpeng-neutral-gray",
        colorId: "neutral-gray",
        colorName: "中性灰",
        description: "适合灰色或冷色内饰，整体更克制耐看。",
        assetPath: "/images/products/flooring/图片/小鹏/3.webp",
        width: 798,
        height: 528,
        alt: "小鹏地板总成中性灰产品图",
      },
      {
        id: "xpeng-wood-brown",
        colorId: "wood-brown",
        colorName: "木纹咖",
        description: "适合棕色、暖色或木纹风格内饰。",
        assetPath: "/images/products/flooring/图片/小鹏/4.webp",
        width: 798,
        height: 528,
        alt: "小鹏地板总成木纹咖产品图",
      },
    ],
  },
];

// ─── 安装与施工边界 ───

export type FlooringInstallNote = {
  id: string;
  title: string;
  description: string;
};

export const flooringInstallNotes: FlooringInstallNote[] = [
  {
    id: "seat-anchor",
    title: "座椅固定点保护",
    description:
      "安装时保留原车座椅固定点和滑轨功能，不改变座椅前后移动和锁定机制。",
  },
  {
    id: "wiring",
    title: "线束与出风口",
    description:
      "不覆盖或挤压原车线束、空调出风口和传感器，确保原车功能不受影响。",
  },
  {
    id: "carpet",
    title: "原车地毯保护",
    description:
      "地板总成覆盖在原车织物地毯之上，不破坏原车地毯结构，未来可恢复。",
  },
  {
    id: "waterproof",
    title: "日常防水说明",
    description:
      "地板表面可应对日常湿鞋和少量泼洒，擦拭即可。但不替代整车防水，不建议大量冲水。",
  },
];

// ─── 售后与质保 ───

export type FlooringWarranty = {
  component: string;
  coverage: string;
  period: string;
};

export const flooringWarranties: FlooringWarranty[] = [
  {
    component: "地板主板",
    coverage: "非人为因素的开裂、翘边、分层",
    period: "1 年",
  },
  {
    component: "滑轨饰条",
    coverage: "非人为因素的松动、变形、脱落",
    period: "1 年",
  },
  {
    component: "迎宾踏板",
    coverage: "非人为因素的松动、氧化、脱胶",
    period: "1 年",
  },
  {
    component: "尾箱地板",
    coverage: "非人为因素的开裂、翘边、分层",
    period: "1 年",
  },
];

// ─── 日常维护 ───

export type FlooringMaintenance = {
  id: string;
  title: string;
  description: string;
};

export const flooringMaintenance: FlooringMaintenance[] = [
  {
    id: "daily",
    title: "日常清洁",
    description:
      "吸尘器清除表面灰尘碎屑，微湿软布擦拭即可。避免使用硬毛刷或研磨性清洁剂。",
  },
  {
    id: "stain",
    title: "污渍处理",
    description:
      "饮料、食物等液体泼洒后尽快擦拭，避免长时间浸泡。顽固污渍可用中性清洁剂配合软布处理。",
  },
  {
    id: "avoid",
    title: "避免事项",
    description:
      "不要使用强酸、强碱或有机溶剂清洁地板表面。不要用高压水枪近距离冲洗地板边缘和接缝。",
  },
];

// ─── FAQ ───

export type FlooringFaq = {
  question: string;
  answer: string;
};

export const flooringFaqs: FlooringFaq[] = [
  {
    question: "安装地板总成会不会产生异响？",
    answer:
      "正常安装不会产生异响。地板总成通过原车固定点定位，各组件之间有缓冲层和精密收口。如果后期出现异响，可回店检查和调整。",
  },
  {
    question: "会不会影响座椅前后移动？",
    answer:
      "不会。地板总成围绕滑轨区域做收口处理，保留滑轨的完整移动行程。座椅固定点不受影响。",
  },
  {
    question: "地板表面会不会开裂或翘边？",
    answer:
      "在正常使用条件下，多层复合结构的地板主板具有良好的尺寸稳定性。极端温差或长期暴晒可能加速材料老化，建议避免长时间暴晒。",
  },
  {
    question: "安装后会有气味吗？",
    answer:
      "新安装的地板总成可能有轻微新材料气味，通常在几天到一周内消散。如对气味敏感，可提前与门店沟通。",
  },
  {
    question: "日常怎么清洁维护？",
    answer:
      "日常用吸尘器配合微湿软布擦拭即可。避免使用强酸强碱或有机溶剂。具体维护方式可参考交付时的维护说明。",
  },
  {
    question: "安装需要打孔或改动原车结构吗？",
    answer:
      "标准方案不涉及打孔、切割或改动原车线路和固定结构。具体以到店评估和车型方案为准。",
  },
  {
    question: "如果以后想恢复原车地毯，可以吗？",
    answer:
      "可以。地板总成覆盖在原车织物地毯之上，不破坏原车地毯和固定结构。如需恢复，回店拆除即可。",
  },
  {
    question: "防水效果怎么样？能替代整车防水吗？",
    answer:
      "地板表面可应对日常湿鞋和少量泼洒，擦拭即可。但不能替代整车防水，不建议大量冲水或积水浸泡。",
  },
];

// ─── 抖音案例 ───

export type FlooringDouyinHighlight = {
  iconName: string;
  label: string;
};

export const flooringDouyinHighlights: FlooringDouyinHighlight[] = [
  { iconName: "Play", label: "装车效果实拍" },
  { iconName: "Layers", label: "滑轨与边角细节" },
  { iconName: "Palette", label: "颜色搭配参考" },
];

// ─── Helpers ───

export function getFlooringVehicleGroupById(
  id: string,
): FlooringVehicleGroup | undefined {
  return flooringVehicleGroups.find((g) => g.id === id);
}

/** 汇总所有品牌的所有颜色图 */
export const flooringGalleryItems: FlooringColorVariant[] =
  flooringVehicleGroups.flatMap((group) =>
    group.colorVariants.map((variant) => ({
      ...variant,
    })),
  );

// ─── 38 车系适配库（2026.10 价格单；金额全部脱敏，供应商不出现）───
// SUV 17 车系 + MPV 21 车系，按价格单原文搬运，不换算不合并。

export type FlooringFitmentBodyType = "SUV" | "MPV";

export type FlooringFitmentEntry = {
  bodyType: FlooringFitmentBodyType;
  /** 索引展示品牌（按价格单行） */
  brand: string;
  /** 品牌归属（厂商口径，用于品牌去重统计） */
  manufacturer: string;
  /** 车型原文（成对车系按原文一行呈现） */
  model: string;
  /** 配置构成原文 */
  composition: string;
  /** 可选配逻辑原文（金额脱敏；空字符串表示无备注） */
  optionalLogic: string;
  status: FlooringFitmentStatus;
};

export const FLOORING_FITMENT_SHEET_DATE = "2026.10";
export const FLOORING_FITMENT_MODEL_COUNT = 38;
export const FLOORING_FITMENT_BRAND_COUNT = 17;
export const FLOORING_SUV_MODEL_COUNT = 17;
export const FLOORING_MPV_MODEL_COUNT = 21;

/** SUV 组品牌索引（价格单顺序） */
export const flooringFitmentSuvBrands = [
  "问界",
  "极氪",
  "腾势",
  "理想",
  "小鹏",
  "岚图",
  "蔚来",
  "魏牌",
  "领克",
  "乐道",
] as const;

/** MPV 组品牌索引（价格单顺序） */
export const flooringFitmentMpvBrands = [
  "智界",
  "高山",
  "理想",
  "腾势",
  "塞纳",
  "别克",
  "GL8",
  "比亚迪",
  "岚图",
  "极氪",
  "奥德赛",
  "奔驰",
  "埃尔法",
  "小鹏",
  "传祺",
] as const;

export const flooringFitmentEntries: FlooringFitmentEntry[] = [
  // ─── SUV 17 车系 ───
  {
    bodyType: "SUV",
    brand: "问界",
    manufacturer: "问界",
    model: "问界 M7",
    composition: "地板 + 碳纤钢风口件",
    optionalLogic: "",
    status: "confirmed",
  },
  {
    bodyType: "SUV",
    brand: "问界",
    manufacturer: "问界",
    model: "问界 M8",
    composition: "地板 + 碳纤钢风口件 + 主副驾地板",
    optionalLogic: "可选钢琴脚托；主副驾可不要",
    status: "confirmed",
  },
  {
    bodyType: "SUV",
    brand: "问界",
    manufacturer: "问界",
    model: "问界 M9",
    composition: "地板 + 碳纤钢风口件 + 主副驾地板",
    optionalLogic: "可选钢琴脚托；主副驾可不要",
    status: "confirmed",
  },
  {
    bodyType: "SUV",
    brand: "极氪",
    manufacturer: "极氪",
    model: "极氪 8X",
    composition: "地板 + 钢琴键脚托 + 主副驾地板",
    optionalLogic: "主副驾可不要",
    status: "confirmed",
  },
  {
    bodyType: "SUV",
    brand: "极氪",
    manufacturer: "极氪",
    model: "极氪 9X",
    composition: "地板 + 钢琴键脚托 + 主副驾地板",
    optionalLogic: "主副驾可不要",
    status: "confirmed",
  },
  {
    bodyType: "SUV",
    brand: "腾势",
    manufacturer: "腾势",
    model: "腾势 N8L",
    composition: "地板 + 钢琴键脚托",
    optionalLogic: "",
    status: "confirmed",
  },
  {
    bodyType: "SUV",
    brand: "腾势",
    manufacturer: "腾势",
    model: "腾势 N9",
    composition: "地板 + 钢琴键脚托 + 主副驾地板",
    optionalLogic: "主副驾可不要",
    status: "confirmed",
  },
  {
    bodyType: "SUV",
    brand: "理想",
    manufacturer: "理想",
    model: "理想 L8",
    composition: "地板 + 钢琴键脚托 + 主副驾地板",
    optionalLogic: "主副驾可不要",
    status: "confirmed",
  },
  {
    bodyType: "SUV",
    brand: "理想",
    manufacturer: "理想",
    model: "理想 L9",
    composition: "地板 + 钢琴键脚托 + 主副驾地板",
    optionalLogic: "主副驾可不要",
    status: "confirmed",
  },
  {
    bodyType: "SUV",
    brand: "理想",
    manufacturer: "理想",
    model: "理想 i8",
    composition: "地板 + 钢琴键脚托 + 主副驾地板",
    optionalLogic: "主副驾可不要",
    status: "confirmed",
  },
  {
    bodyType: "SUV",
    brand: "小鹏",
    manufacturer: "小鹏",
    model: "小鹏 GX",
    composition: "地板 + 钢琴键脚托 + 主副驾地板",
    optionalLogic: "主副驾可不要",
    status: "needs-review",
  },
  {
    bodyType: "SUV",
    brand: "岚图",
    manufacturer: "岚图",
    model: "岚图泰山",
    composition: "地板 + 钢琴键脚托 + 主副驾地板",
    optionalLogic: "主副驾可不要",
    status: "needs-review",
  },
  {
    bodyType: "SUV",
    brand: "蔚来",
    manufacturer: "蔚来",
    model: "蔚来 ES8",
    composition: "地板 + 钢琴键脚托 + 主副驾地板",
    optionalLogic: "主副驾可不要",
    status: "confirmed",
  },
  {
    bodyType: "SUV",
    brand: "蔚来",
    manufacturer: "蔚来",
    model: "蔚来 ES9",
    composition: "地板 + 钢琴键脚托 + 主副驾地板",
    optionalLogic: "主副驾可不要",
    status: "confirmed",
  },
  {
    bodyType: "SUV",
    brand: "魏牌",
    manufacturer: "魏牌",
    model: "魏牌 V9X",
    composition: "地板 + 钢琴键脚托 + 主副驾地板",
    optionalLogic: "主副驾可不要",
    status: "confirmed",
  },
  {
    bodyType: "SUV",
    brand: "领克",
    manufacturer: "领克",
    model: "领克 900",
    composition: "地板 + 钢琴键脚托",
    optionalLogic: "",
    status: "confirmed",
  },
  {
    bodyType: "SUV",
    brand: "乐道",
    manufacturer: "乐道",
    model: "乐道 L90",
    composition: "地板 + 钢琴键脚托",
    optionalLogic: "",
    status: "confirmed",
  },
  // ─── MPV 21 车系 ───
  {
    bodyType: "MPV",
    brand: "智界",
    manufacturer: "智界",
    model: "智界 V9",
    composition: "地板 + 钢琴脚托 + 迎宾踏板",
    optionalLogic: "主副驾可加装",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "高山",
    manufacturer: "魏牌",
    model: "高山 7",
    composition: "地板 + 平面脚托 + 迎宾踏板",
    optionalLogic: "可选钢琴脚托",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "高山",
    manufacturer: "魏牌",
    model: "高山 8",
    composition: "地板 + 平面脚托 + 迎宾踏板",
    optionalLogic: "可选钢琴脚托",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "高山",
    manufacturer: "魏牌",
    model: "高山 9",
    composition: "地板 + 平面脚托 + 迎宾踏板",
    optionalLogic: "可选钢琴脚托",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "理想",
    manufacturer: "理想",
    model: "理想 MEGA",
    composition: "地板 + 一体木脚托 + 迎宾踏板",
    optionalLogic: "可选钢琴脚托",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "腾势",
    manufacturer: "腾势",
    model: "腾势 D9",
    composition: "地板 + 钢琴脚托 + 迎宾踏板",
    optionalLogic: "",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "塞纳",
    manufacturer: "丰田",
    model: "塞纳 / 格瑞维亚",
    composition: "地板 + 碳纤钢风口件 + 迎宾踏板",
    optionalLogic: "可选钢琴脚托",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "别克",
    manufacturer: "别克",
    model: "别克至境世家",
    composition: "地板 + 钢琴脚托 + 迎宾踏板",
    optionalLogic: "",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "GL8",
    manufacturer: "别克",
    model: "GL8（陆尚/陆尊）",
    composition: "地板 + 钢琴键脚托 + 迎宾踏板",
    optionalLogic: "电池孔件可加装",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "比亚迪",
    manufacturer: "比亚迪",
    model: "比亚迪·夏",
    composition: "地板 + 星钻脚托 + 迎宾踏板",
    optionalLogic: "星钻系列",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "岚图",
    manufacturer: "岚图",
    model: "岚图·梦想家",
    composition: "地板 + 钢琴脚托 + 迎宾踏板",
    optionalLogic: "星钻系列",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "极氪",
    manufacturer: "极氪",
    model: "极氪 009",
    composition: "地板 + 碳纤钢风口件 + 迎宾踏板",
    optionalLogic: "",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "奥德赛",
    manufacturer: "本田",
    model: "奥德赛 / 艾力绅",
    composition: "地板 + 一体木脚托 + 迎宾踏板",
    optionalLogic: "",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "奔驰",
    manufacturer: "奔驰",
    model: "奔驰·威霆 V260",
    composition: "地板 + 分体木脚托 + 迎宾踏板",
    optionalLogic: "",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "奔驰",
    manufacturer: "奔驰",
    model: "奔驰·威霆 V300",
    composition: "地板 + 分体木脚托 + 迎宾踏板",
    optionalLogic: "",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "埃尔法",
    manufacturer: "丰田",
    model: "埃尔法 30 系",
    composition: "地板 + 分体铝合金脚托 + 迎宾踏板",
    optionalLogic: "",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "埃尔法",
    manufacturer: "丰田",
    model: "埃尔法 40 系",
    composition: "地板 + 大风口件脚托 + 迎宾踏板",
    optionalLogic: "",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "小鹏",
    manufacturer: "小鹏",
    model: "小鹏 X9",
    composition: "地板 + 钢琴脚托 + 迎宾踏板",
    optionalLogic: "",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "传祺",
    manufacturer: "传祺",
    model: "传祺 E8",
    composition: "地板 + 钢琴脚托 + 迎宾踏板",
    optionalLogic: "",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "传祺",
    manufacturer: "传祺",
    model: "传祺 E9",
    composition: "地板 + 钢琴脚托 + 迎宾踏板",
    optionalLogic: "",
    status: "confirmed",
  },
  {
    bodyType: "MPV",
    brand: "传祺",
    manufacturer: "传祺",
    model: "传祺 M8",
    composition: "地板 + 钢琴脚托 + 迎宾踏板",
    optionalLogic: "",
    status: "confirmed",
  },
];

// ─── 配件材质对比（价格单 §S3 原文）───

export type FlooringAccessory = {
  name: string;
  material: string;
  trait: string;
  fit: string;
};

export const flooringAccessories: FlooringAccessory[] = [
  {
    name: "碳纤钢风口件",
    material: "碳纤钢",
    trait: "出风口一体化覆盖，质感强",
    fit: "SUV（问界 / 塞纳 / 极氪 009）",
  },
  {
    name: "钢琴键脚托",
    material: "钢琴漆面",
    trait: "商务质感，易清洁",
    fit: "SUV / MPV 主流",
  },
  {
    name: "一体木脚托",
    material: "原木一体",
    trait: "温润质感",
    fit: "MPV（理想 MEGA / 奥德赛）",
  },
  {
    name: "分体木脚托",
    material: "原木分体",
    trait: "可局部更换",
    fit: "奔驰威霆 V260 / V300",
  },
  {
    name: "分体铝合金脚托",
    material: "铝合金",
    trait: "金属质感、耐用",
    fit: "埃尔法 30 系",
  },
  {
    name: "大风口件脚托",
    material: "大出风口件",
    trait: "出风口覆盖更广",
    fit: "埃尔法 40 系",
  },
  {
    name: "星钻脚托",
    material: "星钻面",
    trait: "防滑、防踢",
    fit: "比亚迪·夏 / 岚图·梦想家",
  },
  {
    name: "迎宾踏板",
    material: "金属 / 发光",
    trait: "上下车保护 + 仪式感",
    fit: "MPV 全系",
  },
];

// ─── 服务问答（施工时长 / 拆装 / 异味 / 质保 / 前排脚垫 / 未收录车型）───

export const flooringServiceFaqs: FlooringFaq[] = [
  {
    question: "装一套地板要多久？",
    answer:
      "施工时长视车型与配置而定，一般半天到一天，具体以到店评估和预约排期为准；可先电话沟通车型、年款与座椅布局，预约到店时间。",
  },
  {
    question: "安装会拆座椅吗？",
    answer:
      "安装涉及座椅拆装，以便贴合滑轨和原车固定点；装回后保留原车座椅的前后移动行程与锁定机制。标准方案不打孔、不切割、不改动原车线路。",
  },
  {
    question: "新装地板会有异味吗？",
    answer:
      "新材料可能带有轻微气味，通常几天到一周内消散；如对气味敏感，可提前与门店沟通，交付后保持车内通风。",
  },
  {
    question: "装地板会影响原车质保吗？",
    answer:
      "汽车地板属车内内饰加装，不改车身外观与结构，不涉及车辆备案；安装不改动原车线路和固定结构。是否影响整车质保以车辆品牌保修政策为准，可到店说明后再决定。",
  },
  {
    question: "全车方案包含前排脚垫吗？",
    answer:
      "全车方案不含前排脚垫、不含税、不含运费。前排可另配 360 软包脚垫，与后排地板组合使用，可查看 360 软包脚垫页面。",
  },
  {
    question: "我的车型没列在适配表里，能装吗？",
    answer:
      "适配表未收录的车型不代表不能装，以门店现场检查为准。可先发车型、年款、座椅布局和车内照片，门店核对滑轨结构与固定点后给出方案。",
  },
];
