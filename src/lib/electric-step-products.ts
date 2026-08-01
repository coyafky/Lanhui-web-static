export type ElectricStepVariant =
  | "no-light"
  | "single-light"
  | "large-light";

export type ElectricStepImage = {
  id: string;
  filename: string;
  publicPath: string;
  width: 1646 | 750;
  height: 1166 | 547 | 487;
  title: string;
  variant: ElectricStepVariant;
  alt: string;
  note: string;
  recommendFor: string;
  positioning: string;
};

export type ElectricStepValue = {
  title: string;
  description: string;
};

export type ElectricStepFitmentCheck = {
  label: string;
  title: string;
  description: string;
  risk: string;
};

export type ElectricStepProcessStep = {
  step: string;
  title: string;
  description: string;
  deliverable: string;
};

export type ElectricStepFitmentTag = {
  name: string;
  weight: "hero" | "strong" | "normal" | "subtle";
  note: string;
};

export type ElectricStepScenario = {
  id: string;
  icon: "UserRound" | "Baby" | "ShoppingBag" | "Briefcase";
  title: string;
  description: string;
};

export type ElectricStepVariantComparison = {
  aspect: string;
  noLight: string;
  singleLight: string;
  largeLight: string;
};

export type ElectricStepFaq = {
  question: string;
  answer: string;
};

export const electricStepVariantLabels: Record<ElectricStepVariant, string> = {
  "no-light": "无灯款",
  "single-light": "单流光灯",
  "large-light": "大灯带款",
};

export const electricStepImages: readonly ElectricStepImage[] = [
  {
    id: "electric-step-large-light",
    filename: "biglight.jpg",
    publicPath: "/images/products/Taban/biglight.jpg",
    width: 1646,
    height: 1166,
    title: "电动踏板大灯带款",
    variant: "large-light",
    alt: "蓝辉轻改电动踏板大灯带款展示图",
    note: "灯带视觉更明显，适合重视迎宾氛围的车主到店参考。",
    recommendFor: "重视迎宾氛围、夜间用车频率高、商务接待场景",
    positioning: "氛围优先",
  },
  {
    id: "electric-step-single-light",
    filename: "singlelight.jpg",
    publicPath: "/images/products/Taban/singlelight.jpg",
    width: 750,
    height: 487,
    title: "电动踏板单流光灯款",
    variant: "single-light",
    alt: "蓝辉轻改电动踏板单流光灯款展示图",
    note: "保留灯带识别度，整体表达更克制。",
    recommendFor: "兼顾实用与氛围、家庭日常用车、夜间需踏板位置提示",
    positioning: "平衡之选",
  },
  {
    id: "electric-step-no-light",
    filename: "nolight.jpg",
    publicPath: "/images/products/Taban/nolight.jpg",
    width: 750,
    height: 547,
    title: "电动踏板无灯款",
    variant: "no-light",
    alt: "蓝辉轻改电动踏板无灯款展示图",
    note: "更偏基础实用，重点关注上下车便利和收起后的原车姿态。",
    recommendFor: "偏重实用功能、白天用车为主、预算敏感、关注原车外观完整性",
    positioning: "实用优先",
  },
];

export const electricStepScenarios: readonly ElectricStepScenario[] = [
  {
    id: "elderly",
    icon: "UserRound",
    title: "老人上下车",
    description:
      "高底盘 SUV 和 MPV 的门槛高度对老人是实实在在的障碍。电动踏板在开门时自动展开，提供一个更低、更明确的中间落脚位置，减少侧身、扶门、寻找落脚点的动作，让每次上下车都更安全从容。",
  },
  {
    id: "children",
    icon: "Baby",
    title: "小孩上下车",
    description:
      "孩子面对高门槛需要攀爬，家长反复抱上抱下不仅费力还容易磕碰。踏板展开后降低跨步高度，孩子可以自己踩着上下车，减少大幅跨步和家长弯腰托举的频率。",
  },
  {
    id: "carrying",
    icon: "ShoppingBag",
    title: "抱娃与提物",
    description:
      "一手抱孩子、一手提行李时，上下车是最不方便的时刻。踏板提供一个稳定、清晰的落脚空间，让双手被占用的乘员也能安全、顺畅地进出车辆。",
  },
  {
    id: "business",
    icon: "Briefcase",
    title: "商务接待",
    description:
      "穿正装、裙装的乘客面对高底盘车型上下车容易显得局促。电动踏板的展开动作和稳定踩踏面让上下车更从容，强化接待体验，体现对乘客的细节关怀。",
  },
];

export const electricStepValues: readonly ElectricStepValue[] = [
  {
    title: "开门展开，上下车更从容",
    description:
      "开门自动展开，降低上下车高度，为老人、小孩和频繁上下车的乘员提供更低、更清晰的落脚位置。",
  },
  {
    title: "关门收回，保留原车姿态",
    description:
      "收起后尽量贴合车侧线条，减少对原车外观完整度的影响，不让车辆显得笨重。",
  },
  {
    title: "结构与承重按车型确认",
    description:
      "结合车型底盘固定点、侧裙结构和日常乘员使用场景确认方案，不做全车型通用承诺。",
  },
  {
    title: "电气与防夹现场确认",
    description:
      "门体信号、电源接口、防夹逻辑和灯带方式必须现场确认，确保与原车系统稳定兼容。",
  },
];

export const electricStepFitmentChecks: readonly ElectricStepFitmentCheck[] = [
  {
    label: "MOUNT",
    title: "底盘固定点",
    description: "确认原车安装位、侧裙结构和离地间隙，避免影响通过性。",
    risk: "安装位不匹配可能导致踏板松动、异响，严重时影响底盘结构安全。收起后离地间隙不足可能刮蹭减速带或地库坡道。",
  },
  {
    label: "SIGNAL",
    title: "门体信号",
    description: "确认开关门信号读取方式，保证踏板展开和收回逻辑稳定。",
    risk: "信号读取异常会导致踏板不展开、不收回或延迟响应，影响正常使用和安全。不同车型信号协议差异大，不可通用。",
  },
  {
    label: "POWER",
    title: "电气接口",
    description: "确认供电、线束走向、防水和检修边界，避免破坏原车结构。",
    risk: "接线不当可能触发原车电路故障码、电瓶亏电，严重时影响车辆质保。防水处理不到位会导致泡水后短路或腐蚀。",
  },
  {
    label: "SAFETY",
    title: "防夹与复查",
    description: "交付前检查展开/收回、防夹、异响、灯带和固定点状态。",
    risk: "防夹功能失效可能导致夹伤风险；未复查的固定点在长期使用后可能松动。建议行驶 100-200km 后回店免费复查。",
  },
];

export const electricStepVariantComparison: readonly ElectricStepVariantComparison[] = [
  {
    aspect: "灯光方式",
    noLight: "无灯带",
    singleLight: "单条流光灯",
    largeLight: "大面积灯带",
  },
  {
    aspect: "视觉风格",
    noLight: "极致低调，与原车融为一体",
    singleLight: "克制而有识别度",
    largeLight: "迎宾氛围感最强",
  },
  {
    aspect: "夜间价值",
    noLight: "无照明辅助",
    singleLight: "可识别踏板位置",
    largeLight: "地面明显光毯效果",
  },
  {
    aspect: "维护差异",
    noLight: "结构最简单，故障点最少",
    singleLight: "灯条可单独更换",
    largeLight: "灯带更换需拆面板",
  },
  {
    aspect: "适合人群",
    noLight: "偏重实用功能，白天用车为主",
    singleLight: "兼顾实用与氛围",
    largeLight: "重视迎宾体验，夜间用车多",
  },
  {
    aspect: "车型限制",
    noLight: "最广泛，几乎无限制",
    singleLight: "需确认门板走线空间",
    largeLight: "需确认踏板内腔尺寸和电源负载",
  },
];

export const electricStepFaqs: readonly ElectricStepFaq[] = [
  {
    question: "安装电动踏板需要多久？",
    answer:
      "通常需要 3-5 小时，具体取决于车型结构和踏板款式。部分车型结构复杂可能延长至半天。建议提前预约，到店后评估准确工期。",
  },
  {
    question: "安装会破坏原车线路吗？",
    answer:
      "蓝辉采用原车信号对接方式，通过专用插头读取门体信号并供电，尽量不改动原车线束。具体接线方式以到店后根据车型结构确认为准。",
  },
  {
    question: "踏板收起后会不会显得很突兀？",
    answer:
      "收起后踏板尽量贴合车侧底部，不同车型的贴合度有差异，建议到店看同车型的安装效果再决定。",
  },
  {
    question: "雨天或洗车后踏板会不会进水？",
    answer:
      "产品设计考虑了日常防水，插头和线束有防水保护。但涉水深度超过踏板收起位置时不建议强行通过。洗车时避免高压水枪近距离直冲踏板电机和接口。",
  },
  {
    question: "如果踏板故障卡住了怎么办？",
    answer:
      "如遇踏板卡住不收回，请勿强行行驶。联系蓝辉门店，我们会尽快安排检查。交付时会告知你异常情况的判断方式和应急处理建议。",
  },
  {
    question: "大概多少钱？",
    answer:
      "价格由车型结构、踏板款式（无灯/单流光/大灯带）和安装难度共同决定。建议携带车型、年款信息到店或微信咨询，获取针对你车型的方案和报价。",
  },
];

export const electricStepFitmentTags: readonly ElectricStepFitmentTag[] = [
  { name: "问界 M7", weight: "hero", note: "家庭 SUV 高频上下车" },
  { name: "问界 M8", weight: "hero", note: "大六座家庭场景" },
  { name: "问界 M9", weight: "strong", note: "大型 SUV 便利升级" },
  { name: "理想 L9", weight: "hero", note: "老人小孩上下车" },
  { name: "理想 MEGA", weight: "strong", note: "MPV 后排接待" },
  { name: "理想 ONE", weight: "normal", note: "高底盘家用 SUV" },
  { name: "理想 i8", weight: "normal", note: "家庭出行场景" },
  { name: "高山 8", weight: "hero", note: "MPV 商务/家庭" },
  { name: "腾势 D9", weight: "strong", note: "商务 MPV 高频上下车" },
  { name: "岚图梦想家", weight: "strong", note: "MPV 后排便利" },
  { name: "乐道 L90", weight: "normal", note: "大车身 SUV" },
  { name: "蔚来 ES8", weight: "normal", note: "大六座 SUV" },
  { name: "小鹏 GX", weight: "subtle", note: "到店确认安装位" },
  { name: "极氪 9X", weight: "normal", note: "大型 SUV 方案确认" },
  { name: "极氪 009", weight: "strong", note: "MPV 接待场景" },
  { name: "奔驰 V 级", weight: "subtle", note: "商务接待车型" },
  { name: "传祺 M8", weight: "subtle", note: "MPV 上下车便利" },
  { name: "别克 GL8", weight: "subtle", note: "商务 MPV 常见咨询" },
];

export const electricStepProcess: readonly ElectricStepProcessStep[] = [
  {
    step: "01",
    title: "车型确认",
    description: "确认车型、年款、底盘结构、侧裙高度和家庭成员上下车场景。",
    deliverable: "车型适配确认单",
  },
  {
    step: "02",
    title: "款式选择",
    description: "结合是否需要灯带、迎宾氛围和原车观感，选择踏板款式。",
    deliverable: "款式与功能确认单",
  },
  {
    step: "03",
    title: "安装调试",
    description: "按现场结构安装并调试开门展开、关门收回和灯带响应。",
    deliverable: "安装调试记录",
  },
  {
    step: "04",
    title: "交付复查",
    description: "复查固定点、异响、防夹、离地间隙和后续用车注意事项。",
    deliverable: "交付检查清单 + 复查提醒",
  },
];

/** hero + strong 权重的热门车型，用于 ModelSelector 列表 */
export const electricStepHotModels = electricStepFitmentTags
  .filter((t) => t.weight === "hero" || t.weight === "strong")
  .map((t) => ({
    ...t,
    status: t.weight === "hero"
      ? ("mature" as const)
      : ("check" as const),
  }));
