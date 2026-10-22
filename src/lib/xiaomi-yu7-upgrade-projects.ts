/**
 * 小米 YU7 单车型专题页静态数据（PageSpec V1）
 *
 * 30 项升级项目（9 原有预览图 + 21 新增实图）、5 大用车场景、6 步服务流程、15 条 FAQ。
 * PRD: specs/archive/prd/product/XIAOMI_YU7_UPGRADE_PRD_2026-06-24.md
 *
 * imageStatus 根据实际图片可用性设置（product-preview / matched / missing）。
 * 字面量防漂移模式：as const satisfies + runtime count assertion。
 */

export type XiaomiYu7Category =
  | "cabin_protection"
  | "chassis_protection"
  | "exterior_parts"
  | "film_style"
  | "cabin_comfort"
  | "electric_convenience"
  | "handling";

export type XiaomiYu7ImageStatus =
  | "matched"
  | "product-preview"
  | "pending-review"
  | "missing";

export interface XiaomiYu7UpgradeProject {
  readonly id: string;
  readonly order: number;
  readonly name: string;
  readonly category: XiaomiYu7Category;
  readonly summary: string;
  readonly suitableFor: readonly string[];
  readonly caution?: string;
  readonly imageStatus: XiaomiYu7ImageStatus;
  readonly publicPath?: `/images/products/xiaomi/yu7/${string}.webp`;
  readonly width?: number;
  readonly height?: number;
  readonly aspectRatio?: string;
  readonly sourceArea: "poster_project_matrix";
  /** 图注：图片下方可见小字（出站文本，不能只放 alt） */
  readonly imageCaption?: string;
  /** 车型 badge：SU7 / YU7 / 双车型，卡片名称行小 chip */
  readonly modelBadge?: "SU7" | "YU7" | "双车型";
}

export interface XiaomiYu7Scenario {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly projectIds: readonly string[];
}

export interface XiaomiYu7ServiceStep {
  readonly order: number;
  readonly title: string;
  readonly description: string;
}

export interface XiaomiYu7FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface XiaomiYu7HeroImage {
  readonly publicPath: "/images/products/xiaomi/yu7/generated/xy-04.webp";
  readonly alt: "小米 YU7 专属升级方案主视觉";
  readonly width: 1448;
  readonly height: 1086;
}

// ---- 字面量约束 ----

export const XIAOMI_YU7_PROJECT_COUNT = 30;
export const XIAOMI_YU7_SCENARIO_COUNT = 5;
export const XIAOMI_YU7_SERVICE_STEP_COUNT = 6;
export const XIAOMI_YU7_FAQ_COUNT = 15;

export const XIAOMI_YU7_HERO_IMAGE: XiaomiYu7HeroImage = {
  publicPath: "/images/products/xiaomi/yu7/generated/xy-04.webp",
  alt: "小米 YU7 专属升级方案主视觉",
  width: 1448,
  height: 1086,
};

// ---- 30 项升级项目（xy-01~xy-09 原有预览图；yu-22~yu-42 新增实图）----

export const xiaomiYu7UpgradeProjects: readonly XiaomiYu7UpgradeProject[] = [
  {
    id: "xy-01", order: 1, name: "软包脚垫", category: "cabin_protection",
    summary: "覆盖前后排脚窝和门槛区域，提升地毯保护、易清洁和座舱完整感",
    suitableFor: ["新车保护", "家庭用户"],
    publicPath: "/images/products/xiaomi/yu7/generated/xy-01.webp",
    width: 1448,
    height: 1086,
    aspectRatio: "4/3",
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "xy-02", order: 2, name: "碳纤维护板", category: "chassis_protection",
    summary: "底部关键区域防护，兼顾轻量视觉、结构保护和运动质感",
    suitableFor: ["新车保护", "底盘防护"],
    publicPath: "/images/products/xiaomi/yu7/generated/xy-02.webp",
    width: 1448,
    height: 1086,
    aspectRatio: "4/3",
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "xy-03", order: 3, name: "平衡杆", category: "handling",
    summary: "提升车身支撑和驾驶稳定感，需到店评估",
    suitableFor: ["底盘与行车防护", "操控偏好"],
    caution: "需到店评估安装位和适配性",
    publicPath: "/images/products/xiaomi/yu7/generated/xy-03.webp",
    width: 1448,
    height: 1086,
    aspectRatio: "4/3",
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "xy-04", order: 4, name: "运动包围", category: "exterior_parts",
    summary: "强化外观运动感和整车辨识度",
    suitableFor: ["外观个性", "运动风格"],
    publicPath: "/images/products/xiaomi/yu7/generated/xy-04.webp",
    width: 1448,
    height: 1086,
    aspectRatio: "4/3",
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "xy-05", order: 5, name: "星空膜", category: "film_style",
    summary: "天幕／玻璃视觉氛围，提升座舱个性",
    suitableFor: ["外观个性", "座舱氛围"],
    publicPath: "/images/products/xiaomi/yu7/generated/xy-05.webp",
    width: 1448,
    height: 1086,
    aspectRatio: "4/3",
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "xy-06", order: 6, name: "星空卷帘", category: "cabin_comfort",
    summary: "天幕遮阳和氛围装饰，提升乘坐舒适",
    suitableFor: ["座舱防护", "舒适升级"],
    publicPath: "/images/products/xiaomi/yu7/generated/xy-06.webp",
    width: 1448,
    height: 1086,
    aspectRatio: "4/3",
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "xy-07", order: 7, name: "香氛系统", category: "cabin_comfort",
    summary: "提升座舱气味体验和精致感",
    suitableFor: ["座舱防护", "高端质感"],
    publicPath: "/images/products/xiaomi/yu7/generated/xy-07.webp",
    width: 1448,
    height: 1086,
    aspectRatio: "4/3",
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "xy-08", order: 8, name: "电吸门", category: "electric_convenience",
    summary: "关门便利、科技感和豪华感升级",
    suitableFor: ["高端质感", "电动便利"],
    caution: "涉及门锁结构与电气适配，需到店确认安装位",
    publicPath: "/images/products/xiaomi/yu7/generated/xy-08.webp",
    width: 1448,
    height: 1086,
    aspectRatio: "4/3",
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "xy-09", order: 9, name: "挡泥板", category: "exterior_parts",
    summary: "减少泥水飞溅和车身侧面污染",
    suitableFor: ["新车保护", "雨天用车"],
    publicPath: "/images/products/xiaomi/yu7/generated/xy-09.webp",
    width: 1448,
    height: 1086,
    aspectRatio: "4/3",
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "yu-22", order: 22, name: "碳纤维表台饰板", category: "cabin_comfort",
    summary: "仪表台区域碳纤维饰板，哑光编织纹提升座舱质感与竞技氛围",
    suitableFor: ["高端质感", "运动风格"],
    caution: "需到店评估安装位和适配性",
    publicPath: "/images/products/xiaomi/yu7/碳纤维表台饰板.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "yu-23", order: 23, name: "碳纤维出风口", category: "cabin_comfort",
    summary: "空调出风口碳纤维饰件，统一内饰风格并提升细节质感",
    suitableFor: ["高端质感", "运动风格"],
    publicPath: "/images/products/xiaomi/yu7/碳纤维出风口.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "yu-24", order: 24, name: "碳纤维前大灯饰板", category: "exterior_parts",
    summary: "前大灯周边碳纤维饰板，强化车头视觉层次",
    suitableFor: ["外观个性", "运动风格"],
    caution: "外观件，改变车身外观，备案要求以当地车管所为准",
    publicPath: "/images/products/xiaomi/yu7/碳纤维前大灯饰板.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "yu-25", order: 25, name: "碳纤维换件后视镜", category: "exterior_parts",
    summary: "后视镜壳碳纤维换件，提升侧面视觉质感",
    suitableFor: ["外观个性", "运动风格"],
    caution: "外观件换装，备案要求以当地车管所为准",
    publicPath: "/images/products/xiaomi/yu7/碳纤维换件后视镜.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "yu-26", order: 26, name: "碳纤维鸭尾", category: "exterior_parts",
    summary: "尾部鸭尾式碳纤维饰件，强化车尾运动姿态",
    suitableFor: ["外观个性", "运动风格"],
    caution: "外观件，备案要求以当地车管所为准",
    publicPath: "/images/products/xiaomi/yu7/碳纤维鸭尾.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "yu-27", order: 27, name: "碳纤维方向盘", category: "handling",
    summary: "碳纤维纹理方向盘，提升驾驶触点质感",
    suitableFor: ["驾驶触点", "运动风格"],
    caution: "需确认与原车功能和安全气囊兼容性",
    publicPath: "/images/products/xiaomi/yu7/碳纤维方向盘.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "yu-28", order: 28, name: "干碳侧裙", category: "exterior_parts",
    summary: "干碳纤维侧裙饰件，降低视觉重心并强化运动轮廓",
    suitableFor: ["外观个性", "运动风格"],
    caution: "外观件，备案要求以当地车管所为准",
    publicPath: "/images/products/xiaomi/yu7/干碳侧裙.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "yu-29", order: 29, name: "碳纤维后扰流板", category: "exterior_parts",
    summary: "尾部碳纤维扰流板，强化车尾运动感",
    suitableFor: ["外观个性", "运动风格"],
    caution: "外观件，备案要求以当地车管所为准",
    publicPath: "/images/products/xiaomi/yu7/碳纤维后扰流板.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "yu-30", order: 30, name: "碳纤维4门踏板", category: "cabin_protection",
    summary: "四门门槛碳纤维饰板，保护门槛区域并提升内饰质感",
    suitableFor: ["座舱防护", "高端质感"],
    publicPath: "/images/products/xiaomi/yu7/碳纤维4门踏板.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "yu-31", order: 31, name: "迎宾踏板", category: "cabin_protection",
    summary: "车门迎宾踏板饰条，提升上下车仪式感与门槛防护",
    suitableFor: ["座舱防护", "高端质感"],
    publicPath: "/images/products/xiaomi/yu7/迎宾踏板.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "yu-32", order: 32, name: "刹车油门踏板", category: "handling",
    summary: "刹车油门踏板升级，强化驾驶脚感",
    suitableFor: ["驾驶触点", "运动风格"],
    caution: "需确认与原车踏板结构和电子信号兼容",
    publicPath: "/images/products/xiaomi/yu7/刹车油门踏板.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "yu-33", order: 33, name: "中控台按键", category: "cabin_comfort",
    summary: "中控台按键区饰件升级，统一内饰风格与触感",
    suitableFor: ["高端质感", "座舱防护"],
    publicPath: "/images/products/xiaomi/yu7/中控台按键.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "yu-34", order: 34, name: "中控仪表台内饰包裹", category: "cabin_comfort",
    summary: "中控仪表台包裹，弱化反光并提升豪华感",
    suitableFor: ["高端质感", "座舱防护"],
    publicPath: "/images/products/xiaomi/yu7/中控仪表台内饰包裹.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "yu-35", order: 35, name: "四门门板翻毛皮", category: "cabin_comfort",
    summary: "四门门板翻毛皮包裹，细腻绒面提升座舱质感",
    suitableFor: ["高端质感", "座舱防护"],
    publicPath: "/images/products/xiaomi/yu7/四门门板翻毛皮.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "yu-36", order: 36, name: "座椅皮套", category: "cabin_comfort",
    summary: "座椅皮套包覆，柔软亲肤并提升商务质感",
    suitableFor: ["高端质感", "舒适升级"],
    caution: "需拆装座椅施工，以门店施工标准评估",
    publicPath: "/images/products/xiaomi/yu7/座椅皮套.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "yu-37", order: 37, name: "扶手箱", category: "cabin_comfort",
    summary: "扶手箱包覆升级，提升日常接触质感",
    suitableFor: ["高端质感", "座舱防护"],
    publicPath: "/images/products/xiaomi/yu7/扶手箱.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "yu-38", order: 38, name: "ABC柱包裹", category: "cabin_comfort",
    summary: "ABC 柱翻毛皮包裹，减少反光并统一座舱风格",
    suitableFor: ["高端质感", "座舱防护"],
    publicPath: "/images/products/xiaomi/yu7/ABC柱包裹.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "yu-39", order: 39, name: "空气通道", category: "cabin_comfort",
    summary: "空调空气通道饰件升级，提升内饰细节完整度",
    suitableFor: ["高端质感", "座舱防护"],
    publicPath: "/images/products/xiaomi/yu7/空气通道.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "yu-40", order: 40, name: "后出风口", category: "cabin_comfort",
    summary: "后排空调出风口饰件，统一座舱内饰风格",
    suitableFor: ["高端质感", "座舱防护"],
    publicPath: "/images/products/xiaomi/yu7/后出风口.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "yu-41", order: 41, name: "后视镜", category: "exterior_parts",
    summary: "后视镜壳饰件升级，提升侧面视觉质感",
    suitableFor: ["外观个性", "运动风格"],
    caution: "外观件，备案要求以当地车管所为准",
    publicPath: "/images/products/xiaomi/yu7/后视镜.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "yu-42", order: 42, name: "后饰板", category: "exterior_parts",
    summary: "车身后部饰板升级，提升尾部细节质感",
    suitableFor: ["外观个性", "运动风格"],
    caution: "外观件，备案要求以当地车管所为准",
    publicPath: "/images/products/xiaomi/yu7/后饰板.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
] as const satisfies readonly XiaomiYu7UpgradeProject[];

// ---- 5 大场景 ----

export const xiaomiYu7Scenarios: readonly XiaomiYu7Scenario[] = [
  {
    id: "new-car-protection", name: "新车保护",
    description: "软包脚垫、碳纤维护板、挡泥板等基础保护",
    projectIds: ["xy-01", "xy-02", "xy-09"],
  },
  {
    id: "appearance-style", name: "外观个性",
    description: "运动包围、星空膜、挡泥板等外观辨识和日常防护升级",
    projectIds: ["xy-04", "xy-05", "xy-09"],
  },
  {
    id: "cabin-care", name: "座舱防护",
    description: "软包脚垫、星空卷帘、香氛系统等座舱舒适与质感升级",
    projectIds: ["xy-01", "xy-06", "xy-07"],
  },
  {
    id: "chassis-driving", name: "底盘与行车",
    description: "碳纤维护板、平衡杆、挡泥板等行车防护",
    projectIds: ["xy-02", "xy-03", "xy-09"],
  },
  {
    id: "premium-quality", name: "高端质感",
    description: "电吸门、香氛系统、星空卷帘和运动包围的综合质感升级",
    projectIds: ["xy-04", "xy-06", "xy-07", "xy-08"],
  },
] as const satisfies readonly XiaomiYu7Scenario[];

// ---- 6 步服务流程（无"方案确认"）----

export const xiaomiYu7ServiceSteps: readonly XiaomiYu7ServiceStep[] = [
  {
    order: 1, title: "车型确认",
    description: "确认小米 YU7 的批次、版本和配置差异",
  },
  {
    order: 2, title: "项目选择",
    description: "根据新车保护、外观个性、座舱防护、底盘与行车或高端质感选择项目",
  },
  {
    order: 3, title: "到店评估",
    description: "现场确认安装位置、接口、材料和工期",
  },
  {
    order: 4, title: "施工安装",
    description: "按项目标准施工，过程保护车辆",
  },
  {
    order: 5, title: "验收交付",
    description: "检查外观、功能和安装效果",
  },
  {
    order: 6, title: "售后支持",
    description: "提供使用注意事项和后续维护建议",
  },
] as const satisfies readonly XiaomiYu7ServiceStep[];

// ---- 15 条 FAQ ----

export const xiaomiYu7Faq: readonly XiaomiYu7FaqItem[] = [
  {
    question: "是否所有小米 YU7 都能安装？",
    answer: "不同批次和配置可能不同，需到店确认。",
  },
  {
    question: "新车最推荐先做哪些项目？",
    answer: "软包脚垫、碳纤维护板、挡泥板等基础保护项目。",
  },
  {
    question: "外观和质感项目有哪些？",
    answer: "运动包围、星空膜、电吸门、香氛系统、星空卷帘等。",
  },
  {
    question: "可以只做单个项目吗？",
    answer: "可以，页面只是组合参考。",
  },
  {
    question: "是否影响原车质保？",
    answer: "不做承诺，以车主车辆情况和项目评估为准。",
  },
  {
    question: "工期多久？",
    answer: "根据项目组合和施工排期确认。",
  },
  {
    question: "YU7 底盘护板适配什么配置？",
    answer:
      "按供应商适配库记录：YU7 底盘护板四件套覆盖前电机与后电机（与 SU7、YU7 通用），材料锰钢 1.2mm / 铝镁合金 2.0mm；续航 760/770 版适用。具体以门店现场检查为准。",
  },
  {
    question: "YU7 能做哪些干碳件？",
    answer:
      "适配库收录干碳前大灯饰板、后视镜壳换件、风口、鸭尾、后扰流板、仪表台饰板、方向盘等换件，材料与方案以门店现场评估为准。",
  },
  {
    question: "佛山本地哪里能装 YU7 底盘护板？",
    answer:
      "蓝辉轻改提供小米 YU7 全系轻改施工，门店位于佛山顺德大良，可到店评估并安排施工。",
  },
  {
    question: "碳纤维内饰会不会异响？",
    answer:
      "碳纤维饰板按项目标准安装并预留热胀余量，异响风险可控；具体以门店实车安装与验收为准。",
  },
  {
    question: "翻毛皮内饰好打理吗？",
    answer:
      "翻毛皮怕油污，日常用专用刷顺向轻刷即可；深度清洁建议到店养护处理。",
  },
  {
    question: "内饰包裹施工要拆座椅吗？",
    answer:
      "视项目范围而定：表台、门板、ABC 柱包裹多无需拆座椅；座椅皮套需拆装座椅施工，到店评估后确认工期。",
  },
  {
    question: "改了包围、尾翼要备案吗？",
    answer:
      "包围、尾翼、侧裙等外观件改变车身外观，备案要求以当地车管所为准；蓝辉轻改可提供方案咨询，页面不做免备案承诺。",
  },
  {
    question: "YU7 和 SU7 能改的项目一样吗？",
    answer:
      "部分项目 SU7 / YU7 均可按实车评估，素材归属 YU7 专属项目以 YU7 车型为准；具体适配以门店现场检查为准。",
  },
  {
    question: "页面没列到的项目能改吗？",
    answer: "未收录项目到店咨询，以门店实车评估为准。",
  },
] as const satisfies readonly XiaomiYu7FaqItem[];

// ---- Runtime 断言 ----

(() => {
  const errors: string[] = [];

  if (xiaomiYu7UpgradeProjects.length !== XIAOMI_YU7_PROJECT_COUNT) {
    errors.push(`projects: expected ${XIAOMI_YU7_PROJECT_COUNT}, got ${xiaomiYu7UpgradeProjects.length}`);
  }
  if (xiaomiYu7Scenarios.length !== XIAOMI_YU7_SCENARIO_COUNT) {
    errors.push(`scenarios: expected ${XIAOMI_YU7_SCENARIO_COUNT}, got ${xiaomiYu7Scenarios.length}`);
  }
  if (xiaomiYu7ServiceSteps.length !== XIAOMI_YU7_SERVICE_STEP_COUNT) {
    errors.push(`serviceSteps: expected ${XIAOMI_YU7_SERVICE_STEP_COUNT}, got ${xiaomiYu7ServiceSteps.length}`);
  }
  if (xiaomiYu7Faq.length !== XIAOMI_YU7_FAQ_COUNT) {
    errors.push(`faq: expected ${XIAOMI_YU7_FAQ_COUNT}, got ${xiaomiYu7Faq.length}`);
  }

  // order 单调性
  const orders = xiaomiYu7UpgradeProjects.map((p) => p.order);
  for (let i = 1; i < orders.length; i++) {
    if (orders[i] <= orders[i - 1]) {
      errors.push(`project order not monotonic at index ${i}: ${orders[i]}`);
    }
  }

  // key 唯一性
  const keys = xiaomiYu7UpgradeProjects.map((p) => p.id);
  if (new Set(keys).size !== keys.length) {
    errors.push("project ids are not unique");
  }

  // scenario projectIds 引用完整性
  const validKeys = new Set(keys);
  for (const s of xiaomiYu7Scenarios) {
    for (const pid of s.projectIds) {
      if (!validKeys.has(pid)) {
        errors.push(`scenario "${s.id}" references unknown project "${pid}"`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`XiaomiYu7 data integrity errors:\n${errors.join("\n")}`);
  }
})();
