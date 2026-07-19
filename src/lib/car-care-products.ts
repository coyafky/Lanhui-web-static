/**
 * 洗美养护专题静态数据 — TypeScript literal types 防止规格漂移。
 */

import type { LucideIcon } from "lucide-react";

// ─── 基础类型 ───

export type CarCareServiceItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: readonly string[];
};

export type CarCareProcessStep = {
  step: string;
  title: string;
  description: string;
  deliverable: string;
};

// ─── 新增类型 ───

export type CarCareScenario = {
  id: string;
  icon: "Car" | "Wind" | "Nose" | "Eye";
  title: string;
  description: string;
};

export type CarCareConditionOption = {
  id: string;
  icon: "Droplets" | "SprayCan" | "Wind" | "Eye" | "CircleDot";
  label: string;
  description: string;
  leadsTo: readonly string[]; // service ids
};

export type CarCareServiceDetail = CarCareServiceItem & {
  suitableFor: string;
  timeRange: string;
  priceNote: string;
  exclusions: readonly string[];
};

export type CarCareBeforeAfter = {
  id: string;
  title: string;
  problem: string;
  treatment: string;
  result: string;
  imageBefore?: string;
  imageAfter?: string;
};

export type CarCareDeliveryCheck = {
  label: string;
  title: string;
  description: string;
};

export type CarCareServiceBoundary = {
  label: string;
  title: string;
  description: string;
};

export type CarCareWarranty = {
  component: string;
  coverage: string;
  period: string;
};

export type CarCareFaq = {
  question: string;
  answer: string;
};

export type CarCareDouyinHighlight = {
  iconName: string;
  label: string;
};

// ─── 场景数据 ───

export const carCareScenarios: readonly CarCareScenario[] = [
  {
    id: "exterior-dirty",
    icon: "Car",
    title: "外部洗不干净",
    description:
      "门缝积灰、轮毂发黑、玻璃油膜、车身边角泥沙——普通洗车只能处理表面浮尘，这些位置需要分区工具和针对性清洁。",
  },
  {
    id: "interior-dust",
    icon: "Wind",
    title: "车内积灰残渣",
    description:
      "座椅缝里的零食碎屑、地毯深层灰尘、仪表台蒙尘、出风口积灰——吸尘器只能处理表面，缝隙和纤维深层需要蒸汽和专用刷具。",
  },
  {
    id: "odor",
    icon: "Nose",
    title: "车内有持续异味",
    description:
      "食物残留、烟味、宠物、潮湿地毯、空调管路都可能是异味来源。不是所有异味都用同一种方式处理，先找到来源再决定方案。",
  },
  {
    id: "glass-glare",
    icon: "Eye",
    title: "玻璃雨天发糊",
    description:
      "油膜在雨天和夜间会被灯光放大，影响视线。普通玻璃水无法有效去除油膜，需要专用研磨剂和分区处理。",
  },
] as const;

// ─── 车况选择器 ───

export const carCareConditionOptions: readonly CarCareConditionOption[] = [
  {
    id: "exterior-not-clean",
    icon: "Droplets",
    label: "外部洗不干净",
    description: "门缝、轮毂、玻璃还是脏的",
    leadsTo: ["exterior-wash", "wheel-cleaning", "glass-oil-film"],
  },
  {
    id: "interior-dirty",
    icon: "SprayCan",
    label: "车内积灰残渣",
    description: "座椅缝、地毯、仪表台有积尘",
    leadsTo: ["interior-detailing"],
  },
  {
    id: "persistent-odor",
    icon: "Wind",
    label: "车内有异味",
    description: "食物、烟味、宠物、空调",
    leadsTo: ["interior-detailing"],
  },
  {
    id: "glass-blurry",
    icon: "Eye",
    label: "玻璃雨天发糊",
    description: "油膜影响视线",
    leadsTo: ["glass-oil-film"],
  },
  {
    id: "wheels-dark",
    icon: "CircleDot",
    label: "轮毂发黑",
    description: "刹车粉尘堆积",
    leadsTo: ["wheel-cleaning", "exterior-wash"],
  },
] as const;

// ─── 服务详情（扩展） ───

export const carCareServiceDetails: readonly CarCareServiceDetail[] = [
  {
    id: "exterior-wash",
    title: "外观精洗",
    subtitle: "EXTERIOR DETAILING",
    description:
      "从预洗到擦干，覆盖车身漆面、轮毂、玻璃、门缝等区域。用两桶水法降低泥沙摩擦带来的细小划痕风险。",
    suitableFor: "车身有明显水渍、泥沙、鸟粪、树胶；轮毂有刹车粉尘堆积；玻璃有油膜",
    timeRange: "约 1.5–2.5 小时",
    priceNote: "¥198 起，车型大小和脏污程度影响报价",
    highlights: [
      "中性洗车液预洗 + 正洗两桶水法",
      "轮毂与刹车粉尘专项清洁",
      "车身缝隙气枪吹水",
      "玻璃油膜去除（选配）",
    ],
    exclusions: [
      "不包含内饰清洁",
      "不包含漆面抛光或镀晶",
      "不包含底盘深度清洁",
    ],
  },
  {
    id: "interior-detailing",
    title: "内饰深度清洁",
    subtitle: "INTERIOR DETAILING",
    description:
      "对座舱内部进行系统清洁与养护，覆盖座椅、地毯、仪表台、门板、空调出风口。皮革、织物、翻毛皮、钢琴漆面采用不同处理方式。",
    suitableFor: "座椅缝有残渣、地毯有污渍、仪表台蒙尘、出风口积灰、车内有异味",
    timeRange: "约 2–4 小时",
    priceNote: "¥398 起，车型大小、脏污程度和材质影响报价",
    highlights: [
      "座椅与地毯蒸汽清洁",
      "仪表台 / 门板除尘上光（分区用料）",
      "空调出风口专项清洁",
      "针对性除味处理（根据异味来源选择方案）",
    ],
    exclusions: [
      "不包含顶棚深度拆洗",
      "不包含座椅拆装",
      "顽固染色、老化、霉变可能无法完全恢复",
    ],
  },
  {
    id: "wheel-cleaning",
    title: "轮毂专项清洁",
    subtitle: "WHEEL DETAILING",
    description:
      "针对轮毂刹车粉尘、铁粉和柏油进行专项清洁，使用专用清洁剂分解附着物，配合刷具分区处理。",
    suitableFor: "轮毂发黑、刹车粉尘堆积、有铁粉或柏油附着",
    timeRange: "约 0.5–1 小时",
    priceNote: "¥98 起，视轮毂数量和脏污程度而定",
    highlights: [
      "专用轮毂清洁剂分解铁粉",
      "分区刷具清洁轮辐和螺栓位",
      "柏油和沥青附着物去除",
      "清洁后轮毂表面检查",
    ],
    exclusions: [
      "不包含轮毂翻新或修复",
      "不包含轮胎美容上光",
      "严重腐蚀不在清洁范围内",
    ],
  },
  {
    id: "glass-oil-film",
    title: "玻璃油膜去除",
    subtitle: "GLASS TREATMENT",
    description:
      "使用专用研磨剂去除前挡和侧窗玻璃表面的油膜，改善雨天和夜间视线，降低眩光影响。",
    suitableFor: "雨天玻璃发糊、夜间灯光有眩光、雨刷刮不干净",
    timeRange: "约 0.5 小时",
    priceNote: "¥68 起",
    highlights: [
      "前挡玻璃油膜研磨去除",
      "侧窗和后视镜玻璃一并处理",
      "处理前后对比确认效果",
    ],
    exclusions: [
      "不包含玻璃镀膜（可选配）",
      "不包含玻璃划痕修复",
      "严重化学附着可能需多次处理",
    ],
  },
] as const;

// ─── 施工流程 ───

export const carCareProcess: readonly CarCareProcessStep[] = [
  {
    step: "01",
    title: "车况检查",
    description:
      "到店后全面检查漆面、内饰、轮毂、玻璃状态，确认脏污类型和程度，与客户确认服务范围和边界。",
    deliverable: "车况检查记录单",
  },
  {
    step: "02",
    title: "分区施工",
    description:
      "按车身外部分区依次进行预洗、正洗、擦干；内饰按座椅、地毯、仪表台分区进行蒸汽清洁和死角处理。",
    deliverable: "施工过程记录",
  },
  {
    step: "03",
    title: "逐项检查",
    description:
      "对照交车检查清单逐项确认：玻璃透光、门缝清洁、轮毂状态、脚垫、座椅缝、异味。",
    deliverable: "交车检查清单",
  },
  {
    step: "04",
    title: "交付说明",
    description:
      "交付时展示清洁效果，说明日常维护建议，提醒后续洗车频率和注意事项。",
    deliverable: "维护建议卡",
  },
] as const;

// ─── 案例（占位，待实拍补充） ───

export const carCareBeforeAfters: readonly CarCareBeforeAfter[] = [
  {
    id: "case-1",
    title: "理想 L9 — 门缝与轮毂深度清洁",
    problem: "门缝边缘泥沙堆积，轮毂刹车粉尘发黑，普通洗车未能处理",
    treatment: "外观精洗 + 轮毂专项清洁",
    result: "门缝恢复原色，轮毂辐条和螺栓位清洁至金属本色",
  },
  {
    id: "case-2",
    title: "问界 M7 — 内饰缝隙与异味处理",
    problem: "座椅缝零食碎屑、地毯饮料渍、空调出风口积灰，车内有霉味",
    treatment: "内饰深度清洁 + 针对性除味处理",
    result: "座椅缝和地毯恢复清洁，异味明显改善",
  },
  {
    id: "case-3",
    title: "腾势 D9 — 全车精洗 + 玻璃油膜",
    problem: "全车泥沙覆盖，前挡玻璃油膜严重，雨天视线模糊",
    treatment: "外观精洗 + 玻璃油膜去除",
    result: "车身恢复光泽，前挡玻璃透光清晰",
  },
] as const;

// ─── 交车检查清单 ───

export const carCareDeliveryChecks: readonly CarCareDeliveryCheck[] = [
  {
    label: "GLASS",
    title: "玻璃透光",
    description:
      "检查前挡和侧窗玻璃透光率，确认无油膜残留、无水痕、无清洁剂残渍。",
  },
  {
    label: "GAP",
    title: "门缝边角",
    description:
      "检查门缝、引擎盖缝隙、尾门边缘是否清洁到位，无泥沙残留。",
  },
  {
    label: "WHEEL",
    title: "轮毂状态",
    description:
      "检查轮毂辐条、螺栓位和轮拱内衬清洁效果，确认无残留刹车粉尘。",
  },
  {
    label: "MAT",
    title: "脚垫区域",
    description:
      "检查脚垫表面和边缘清洁状态，确认座椅滑轨下方无碎屑和灰尘残留。",
  },
  {
    label: "SEAT",
    title: "座椅缝隙",
    description:
      "检查座椅缝、靠背折角和头枕接缝，确认无碎屑、无清洁剂残留。",
  },
  {
    label: "ODOR",
    title: "异味确认",
    description:
      "关闭车门静置片刻后进入车内确认，无异味残留或清洁剂过度气味。",
  },
] as const;

// ─── 服务边界说明 ───

export const carCareServiceBoundaries: readonly CarCareServiceBoundary[] = [
  {
    label: "STAIN",
    title: "顽固污渍",
    description:
      "焦油、树胶、水泥等化学附着物可能已经渗透漆面或内饰材质，无法保证完全去除。",
  },
  {
    label: "AGE",
    title: "染色与老化",
    description:
      "内饰塑料件氧化发黄、织物染色和褪色属于材质老化，清洁无法逆转。",
  },
  {
    label: "MOLD",
    title: "深度霉变",
    description:
      "长期潮湿导致的深度霉变（地毯底层、顶棚内衬）可能需要多次处理或更换。",
  },
  {
    label: "ENGINE",
    title: "发动机舱",
    description:
      "不提供发动机舱清洁服务。机舱内部电子部件、线路和高压系统不在洗美范围内。",
  },
] as const;

// ─── 质保覆盖 ───

export const carCareWarranties: readonly CarCareWarranty[] = [
  {
    component: "外观清洁效果",
    coverage: "交付时确认的清洁效果，包括漆面、玻璃、轮毂",
    period: "交付当天",
  },
  {
    component: "内饰清洁效果",
    coverage: "交付时确认的座椅、地毯、仪表台清洁状态",
    period: "交付当天",
  },
  {
    component: "玻璃油膜去除",
    coverage: "交付时确认的前挡和侧窗透光率",
    period: "交付当天",
  },
  {
    component: "除味处理",
    coverage: "交付时确认的异味改善程度",
    period: "交付当天",
  },
] as const;

// ─── 常见问题 ───

export const carCareFaqs: readonly CarCareFaq[] = [
  {
    question: "普通洗车和精洗有什么区别？",
    answer:
      "普通洗车主要处理表面浮尘，精洗则会用两桶水法降低划痕风险，配合分区工具清洁门缝、轮毂、玻璃油膜等死角。内饰精洗更涉及蒸汽清洁、缝隙吸尘和针对性除味，不是简单的吸尘擦拭。",
  },
  {
    question: "内饰清洁会伤皮革或织物吗？",
    answer:
      "我们会根据材质（皮革、织物、翻毛皮、钢琴漆面）选用不同的清洁剂和工具。施工前会在不显眼处做小面积测试，确认无异常后再进行全区域清洁。",
  },
  {
    question: "异味能彻底去除吗？",
    answer:
      "取决于异味来源和持续时间。先检查食物残留、烟味、宠物、潮湿地毯或空调管路，再选择对应的处理方式。深度霉变或长期烟渍可能需要多次处理。交付时会确认改善程度。",
  },
  {
    question: "施工需要多长时间？",
    answer:
      "外观精洗约 1.5–2.5 小时，内饰深度清洁约 2–4 小时，轮毂专项约 0.5–1 小时，玻璃油膜去除约 0.5 小时。具体时间受车型大小、脏污程度和组合项目影响，以到店评估为准。",
  },
  {
    question: "价格为什么有浮动？",
    answer:
      "车型大小（轿车/SUV/MPV）、脏污程度、内饰材质和项目组合都会影响最终报价。我们会在车况检查后给出明确报价，施工过程中不临时加项加价。",
  },
  {
    question: "洗完后需要注意什么？",
    answer:
      "建议 24 小时内避免雨天行驶和涉水路段。内饰清洁后保持通风 1–2 小时让清洁剂气味散发。日常定期吸尘和及时清理污渍可以延长清洁效果的保持时间。",
  },
] as const;

// ─── 抖音内容标签 ───

export const carCareDouyinHighlights: readonly CarCareDouyinHighlight[] = [
  { iconName: "Droplets", label: "清洁演示" },
  { iconName: "Play", label: "内饰施工" },
  { iconName: "Video", label: "洗前洗后" },
] as const;

// ─── 帮助函数 ───

export function getServiceDetailById(
  id: string,
): CarCareServiceDetail | undefined {
  return carCareServiceDetails.find((s) => s.id === id);
}

export function getRecommendedServices(
  conditionId: string,
): readonly CarCareServiceDetail[] {
  const option = carCareConditionOptions.find((o) => o.id === conditionId);
  if (!option) return [];
  return option.leadsTo
    .map((id) => getServiceDetailById(id))
    .filter((s): s is CarCareServiceDetail => s !== undefined);
}
