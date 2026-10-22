/**
 * 小米 SU7 单车型专题页静态数据
 *
 * 42 项升级项目、5 大用车场景、6 步服务流程、16 条 FAQ。
 * PRD: specs/archive/prd/product/XIAOMI_TOPIC_PRD_2026-06-20.md
 *      specs/archive/prd/product/XIAOMI_SERIES_UPGRADE_PRD_2026-06-24.md
 *
 * imageStatus 根据实际图片可用性设置（product-preview / matched / missing）。
 * 字面量防漂移模式：as const satisfies + runtime count assertion。
 */

export type XiaomiSu7Category =
  | "paint_protection"
  | "cabin_protection"
  | "chassis_protection"
  | "exterior_parts"
  | "film_style"
  | "cabin_comfort"
  | "electric_convenience"
  | "handling"
  | "infotainment";

export type XiaomiSu7ImageStatus =
  | "matched"
  | "product-preview"
  | "pending-review"
  | "missing";

export interface XiaomiSu7UpgradeProject {
  readonly id: string;
  readonly order: number;
  readonly name: string;
  readonly category: XiaomiSu7Category;
  readonly summary: string;
  readonly suitableFor: readonly string[];
  readonly caution?: string;
  readonly publicPath?: `/images/products/xiaomi/su7/${string}.webp`;
  readonly width?: number;
  readonly height?: number;
  readonly imageStatus: XiaomiSu7ImageStatus;
  readonly sourceArea: "poster_project_matrix";
  readonly imageCaption?: string;
  readonly modelBadge?: "SU7" | "YU7" | "双车型";
}

export interface XiaomiSu7Scenario {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly projectIds: readonly string[];
}

export interface XiaomiSu7ServiceStep {
  readonly order: number;
  readonly title: string;
  readonly description: string;
}

export interface XiaomiSu7FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface XiaomiSu7HeroImage {
  readonly publicPath: "/images/products/xiaomi/su7/generated/hero.webp";
  readonly alt: "小米 SU7 专属升级方案主视觉";
  readonly width: 1448;
  readonly height: 1086;
}

// ---- 字面量约束 ----

export const XIAOMI_SU7_PROJECT_COUNT = 42;
export const XIAOMI_SU7_SCENARIO_COUNT = 5;
export const XIAOMI_SU7_SERVICE_STEP_COUNT = 6;
export const XIAOMI_SU7_FAQ_COUNT = 16;

export const XIAOMI_SU7_HERO_IMAGE: XiaomiSu7HeroImage = {
  publicPath: "/images/products/xiaomi/su7/generated/hero.webp",
  alt: "小米 SU7 专属升级方案主视觉",
  width: 1448,
  height: 1086,
};

// ---- 42 项升级项目（xs-01~xs-21 原有，xs-22~xs-42 新增）----

export const xiaomiSu7UpgradeProjects: readonly XiaomiSu7UpgradeProject[] = [
  {
    id: "xs-01", order: 1, name: "车衣", category: "paint_protection",
    summary: "透明 PPF 覆盖车身高频区域，保护原厂漆面质感",
    suitableFor: ["新车保护", "漆面防护"],
    publicPath: "/images/products/xiaomi/su7/generated/xs-01.webp",
    width: 1448,
    height: 1086,
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-02", order: 2, name: "隔热膜", category: "film_style",
    summary: "前挡与侧窗隔热、防晒、隐私和驾乘舒适升级",
    suitableFor: ["新车保护", "夏季用车"],
    publicPath: "/images/products/xiaomi/su7/generated/xs-02.webp",
    width: 1448,
    height: 1086,
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-03", order: 3, name: "改色膜", category: "film_style",
    summary: "改变车身视觉风格，保留原车漆并提升辨识度",
    suitableFor: ["外观个性", "改色风格"],
    publicPath: "/images/products/xiaomi/su7/generated/xs-03.webp",
    width: 1448,
    height: 1086,
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-04", order: 4, name: "360 软包脚垫", category: "cabin_protection",
    summary: "覆盖驾驶区、后排地板和门槛区域，提升易清洁能力",
    suitableFor: ["新车保护", "座舱防护"],
    publicPath: "/images/products/xiaomi/su7/generated/xs-04.webp",
    width: 1448,
    height: 1086,
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-05", order: 5, name: "底盘护板", category: "chassis_protection",
    summary: "前底盘关键区域防护，降低日常路况剐蹭风险",
    suitableFor: ["新车保护", "底盘防护"],
    publicPath: "/images/products/xiaomi/su7/generated/xs-05.webp",
    width: 1448,
    height: 1086,
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-06", order: 6, name: "氛围灯", category: "cabin_comfort",
    summary: "仪表台、门板和中控区域光带，提升夜间座舱氛围",
    suitableFor: ["座舱防护", "高端质感"],
    publicPath: "/images/products/xiaomi/su7/generated/xs-06.webp",
    width: 1448,
    height: 1086,
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-07", order: 7, name: "仪表中置", category: "infotainment",
    summary: "居中仪表模块提升驾驶信息读取与科技感",
    suitableFor: ["座舱防护", "驾驶触点"],
    caution: "需确认原车屏幕、安装位和线束适配",
    publicPath: "/images/products/xiaomi/su7/generated/xs-07.webp",
    width: 1448,
    height: 1086,
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-08", order: 8, name: "底盘灯", category: "exterior_parts",
    summary: "侧裙与前唇下方克制光带，强化夜间外观辨识度",
    suitableFor: ["外观个性", "夜间氛围"],
    publicPath: "/images/products/xiaomi/su7/generated/xs-08.webp",
    width: 1448,
    height: 1086,
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-09", order: 9, name: "电动尾翼", category: "electric_convenience",
    summary: "尾部升起式尾翼结构，提升运动视觉和功能仪式感",
    suitableFor: ["外观个性", "高端质感"],
    caution: "涉及电气与安装位，需到店确认适配",
    publicPath: "/images/products/xiaomi/su7/电动尾翼.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-10", order: 10, name: "电动遮阳帘", category: "electric_convenience",
    summary: "座舱顶部与后窗区域遮阳，提升后排舒适性",
    suitableFor: ["座舱防护", "舒适升级"],
    publicPath: "/images/products/xiaomi/su7/generated/xs-10.webp",
    width: 1448,
    height: 1086,
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-11", order: 11, name: "电动前机盖", category: "electric_convenience",
    summary: "前舱电动撑杆与开启结构，提升日常使用便利性",
    suitableFor: ["外观个性", "电动便利"],
    caution: "需确认前舱结构和电气接口适配",
    publicPath: "/images/products/xiaomi/su7/generated/xs-11.webp",
    width: 1448,
    height: 1086,
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-12", order: 12, name: "运动风格机盖", category: "exterior_parts",
    summary: "运动风格机盖开孔与雕塑线条，强化前脸运动感",
    suitableFor: ["外观个性", "运动风格"],
    caution: "需确认车型版本适配",
    publicPath: "/images/products/xiaomi/su7/generated/xs-12.webp",
    width: 1448,
    height: 1086,
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-13", order: 13, name: "运动方向盘", category: "handling",
    summary: "平底运动方向盘、黄色中线与碳纤纹理，强化驾驶触点",
    suitableFor: ["驾驶触点", "运动风格"],
    caution: "需确认与原车功能和安全气囊兼容性",
    publicPath: "/images/products/xiaomi/su7/generated/xs-13.webp",
    width: 1448,
    height: 1086,
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-14", order: 14, name: "电子声浪", category: "infotainment",
    summary: "抽象声浪交互与座舱运动氛围升级",
    suitableFor: ["驾驶触点", "运动风格"],
    caution: "涉及电气适配，需到店评估",
    publicPath: "/images/products/xiaomi/su7/generated/xs-14.webp",
    width: 1448,
    height: 1086,
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-15", order: 15, name: "后排电视", category: "infotainment",
    summary: "前排座椅背部娱乐屏，提升后排乘坐体验",
    suitableFor: ["座舱防护", "舒适升级"],
    publicPath: "/images/products/xiaomi/su7/generated/xs-15.webp",
    width: 1448,
    height: 1086,
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-16", order: 16, name: "运动尾翼", category: "exterior_parts",
    summary: "固定式黑色运动尾翼和支架结构，强化尾部姿态",
    suitableFor: ["外观个性", "运动风格"],
    publicPath: "/images/products/xiaomi/su7/运动尾翼.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-17", order: 17, name: "碳纤内饰", category: "cabin_comfort",
    summary: "仪表台、中控和门板碳纤纹理饰板，提升座舱质感",
    suitableFor: ["高端质感", "座舱防护"],
    publicPath: "/images/products/xiaomi/su7/碳纤内饰.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-18", order: 18, name: "运动拉花", category: "film_style",
    summary: "车身侧面与机盖运动条纹，提升 运动风格辨识度",
    suitableFor: ["外观个性", "运动风格"],
    publicPath: "/images/products/xiaomi/su7/generated/xs-18.webp",
    width: 1448,
    height: 1086,
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-19", order: 19, name: "座椅按摩", category: "cabin_comfort",
    summary: "运动座椅按摩分区与控制光效，提升长途舒适性",
    suitableFor: ["座舱防护", "舒适升级"],
    publicPath: "/images/products/xiaomi/su7/generated/xs-19.webp",
    width: 1448,
    height: 1086,
    imageStatus: "product-preview", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-20", order: 20, name: "运动包围", category: "exterior_parts",
    summary: "前唇、后扩散器和空气动力套件，强化整车运动姿态",
    suitableFor: ["外观个性", "运动风格"],
    publicPath: "/images/products/xiaomi/su7/运动包围.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-21", order: 21, name: "内饰升级", category: "cabin_comfort",
    summary: "运动方向盘、碳纤饰板、氛围灯与黄色缝线的综合座舱升级",
    suitableFor: ["高端质感", "座舱防护"],
    publicPath: "/images/products/xiaomi/su7/内饰升级.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "SU7",
  },
  {
    id: "xs-22", order: 22, name: "碳纤维表台饰板", category: "cabin_comfort",
    summary: "仪表台区域碳纤维饰板，哑光编织纹提升座舱质感与竞技氛围",
    suitableFor: ["高端质感", "运动风格"],
    caution: "素材归属 YU7 车型，SU7 适配以门店实车评估为准",
    publicPath: "/images/products/xiaomi/su7/碳纤维表台饰板.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "xs-23", order: 23, name: "碳纤维出风口", category: "cabin_comfort",
    summary: "空调出风口碳纤维饰件，统一内饰风格并提升细节质感",
    suitableFor: ["高端质感", "运动风格"],
    publicPath: "/images/products/xiaomi/su7/碳纤维出风口.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "xs-24", order: 24, name: "碳纤维前大灯饰板", category: "exterior_parts",
    summary: "前大灯周边碳纤维饰板，强化车头视觉层次",
    suitableFor: ["外观个性", "运动风格"],
    caution: "外观件，改变车身外观，备案要求以当地车管所为准",
    publicPath: "/images/products/xiaomi/su7/碳纤维前大灯饰板.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "xs-25", order: 25, name: "碳纤维换件后视镜", category: "exterior_parts",
    summary: "后视镜壳碳纤维换件，提升侧面视觉质感",
    suitableFor: ["外观个性", "运动风格"],
    caution: "外观件换装，备案要求以当地车管所为准",
    publicPath: "/images/products/xiaomi/su7/碳纤维换件后视镜.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "xs-26", order: 26, name: "碳纤维鸭尾", category: "exterior_parts",
    summary: "尾部鸭尾式碳纤维饰件，强化车尾运动姿态",
    suitableFor: ["外观个性", "运动风格"],
    caution: "外观件，备案要求以当地车管所为准",
    publicPath: "/images/products/xiaomi/su7/碳纤维鸭尾.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "xs-27", order: 27, name: "碳纤维方向盘", category: "handling",
    summary: "碳纤维纹理方向盘，提升驾驶触点质感",
    suitableFor: ["驾驶触点", "运动风格"],
    caution: "需确认与原车功能和安全气囊兼容性",
    publicPath: "/images/products/xiaomi/su7/碳纤维方向盘.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "YU7",
  },
  {
    id: "xs-28", order: 28, name: "干碳侧裙", category: "exterior_parts",
    summary: "干碳纤维侧裙饰件，降低视觉重心并强化运动轮廓",
    suitableFor: ["外观个性", "运动风格"],
    caution: "外观件，备案要求以当地车管所为准",
    publicPath: "/images/products/xiaomi/su7/干碳侧裙.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "xs-29", order: 29, name: "碳纤维后扰流板", category: "exterior_parts",
    summary: "尾部碳纤维扰流板，强化车尾运动感",
    suitableFor: ["外观个性", "运动风格"],
    caution: "外观件，备案要求以当地车管所为准",
    publicPath: "/images/products/xiaomi/su7/碳纤维后扰流板.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "xs-30", order: 30, name: "碳纤维4门踏板", category: "cabin_protection",
    summary: "四门门槛碳纤维饰板，保护门槛区域并提升内饰质感",
    suitableFor: ["座舱防护", "高端质感"],
    publicPath: "/images/products/xiaomi/su7/碳纤维4门踏板.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "xs-31", order: 31, name: "迎宾踏板", category: "cabin_protection",
    summary: "车门迎宾踏板饰条，提升上下车仪式感与门槛防护",
    suitableFor: ["座舱防护", "高端质感"],
    publicPath: "/images/products/xiaomi/su7/迎宾踏板.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "xs-32", order: 32, name: "刹车油门踏板", category: "handling",
    summary: "刹车油门踏板升级，强化驾驶脚感",
    suitableFor: ["驾驶触点", "运动风格"],
    caution: "需确认与原车踏板结构和电子信号兼容",
    publicPath: "/images/products/xiaomi/su7/刹车油门踏板.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "xs-33", order: 33, name: "中控台按键", category: "cabin_comfort",
    summary: "中控台按键区饰件升级，统一内饰风格与触感",
    suitableFor: ["高端质感", "座舱防护"],
    publicPath: "/images/products/xiaomi/su7/中控台按键.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "xs-34", order: 34, name: "中控仪表台内饰包裹", category: "cabin_comfort",
    summary: "中控仪表台包裹，弱化反光并提升豪华感",
    suitableFor: ["高端质感", "座舱防护"],
    publicPath: "/images/products/xiaomi/su7/中控仪表台内饰包裹.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "xs-35", order: 35, name: "四门门板翻毛皮", category: "cabin_comfort",
    summary: "四门门板翻毛皮包裹，细腻绒面提升座舱质感",
    suitableFor: ["高端质感", "座舱防护"],
    publicPath: "/images/products/xiaomi/su7/四门门板翻毛皮.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "xs-36", order: 36, name: "座椅皮套", category: "cabin_comfort",
    summary: "座椅皮套包覆，柔软亲肤并提升商务质感",
    suitableFor: ["高端质感", "舒适升级"],
    caution: "需拆装座椅施工，以门店施工标准评估",
    publicPath: "/images/products/xiaomi/su7/座椅皮套.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "xs-37", order: 37, name: "扶手箱", category: "cabin_comfort",
    summary: "扶手箱包覆升级，提升日常接触质感",
    suitableFor: ["高端质感", "座舱防护"],
    publicPath: "/images/products/xiaomi/su7/扶手箱.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "xs-38", order: 38, name: "ABC柱包裹", category: "cabin_comfort",
    summary: "ABC 柱翻毛皮包裹，减少反光并统一座舱风格",
    suitableFor: ["高端质感", "座舱防护"],
    publicPath: "/images/products/xiaomi/su7/ABC柱包裹.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "xs-39", order: 39, name: "空气通道", category: "cabin_comfort",
    summary: "空调空气通道饰件升级，提升内饰细节完整度",
    suitableFor: ["高端质感", "座舱防护"],
    publicPath: "/images/products/xiaomi/su7/空气通道.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "xs-40", order: 40, name: "后出风口", category: "cabin_comfort",
    summary: "后排空调出风口饰件，统一座舱内饰风格",
    suitableFor: ["高端质感", "座舱防护"],
    publicPath: "/images/products/xiaomi/su7/后出风口.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "xs-41", order: 41, name: "后视镜", category: "exterior_parts",
    summary: "后视镜壳饰件升级，提升侧面视觉质感",
    suitableFor: ["外观个性", "运动风格"],
    caution: "外观件，备案要求以当地车管所为准",
    publicPath: "/images/products/xiaomi/su7/后视镜.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
  {
    id: "xs-42", order: 42, name: "后饰板", category: "exterior_parts",
    summary: "车身后部饰板升级，提升尾部细节质感",
    suitableFor: ["外观个性", "运动风格"],
    caution: "外观件，备案要求以当地车管所为准",
    publicPath: "/images/products/xiaomi/su7/后饰板.webp",
    imageStatus: "matched", sourceArea: "poster_project_matrix",
    imageCaption: "产品渲染图，效果示意",
    modelBadge: "双车型",
  },
] as const satisfies readonly XiaomiSu7UpgradeProject[];

// ---- 5 大场景 ----

export const xiaomiSu7Scenarios: readonly XiaomiSu7Scenario[] = [
  {
    id: "new-car-protection", name: "新车保护",
    description: "车衣、隔热膜、软包脚垫和底盘护板等基础保护项目",
    projectIds: ["xs-01", "xs-02", "xs-04", "xs-05"],
  },
  {
    id: "appearance-style", name: "外观个性",
    description: "改色膜、底盘灯、电动尾翼、运动外观件和拉花等运动化升级",
    projectIds: ["xs-03", "xs-08", "xs-09", "xs-11", "xs-12", "xs-16", "xs-18", "xs-20"],
  },
  {
    id: "cabin-care", name: "座舱防护",
    description: "氛围灯、仪表中置、电动遮阳帘、后排电视和座椅按摩等座舱升级",
    projectIds: ["xs-04", "xs-06", "xs-07", "xs-10", "xs-15", "xs-17", "xs-19", "xs-21"],
  },
  {
    id: "chassis-driving", name: "底盘与行车防护",
    description: "底盘护板、底盘灯、运动方向盘和电子声浪等行车体验升级",
    projectIds: ["xs-05", "xs-08", "xs-13", "xs-14"],
  },
  {
    id: "premium-quality", name: "高端质感",
    description: "运动外观、碳纤内饰、运动方向盘和舒适座舱的综合质感升级",
    projectIds: ["xs-12", "xs-13", "xs-16", "xs-17", "xs-19", "xs-20", "xs-21"],
  },
] as const satisfies readonly XiaomiSu7Scenario[];

// ---- 6 步服务流程（无"方案确认"）----

export const xiaomiSu7ServiceSteps: readonly XiaomiSu7ServiceStep[] = [
  {
    order: 1, title: "车型确认",
    description: "确认小米 SU7 的批次、版本和配置差异",
  },
  {
    order: 2, title: "项目选择",
    description: "根据外观运动、内饰质感、驾驶升级或新车保护选择项目",
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
] as const satisfies readonly XiaomiSu7ServiceStep[];

// ---- 16 条 FAQ（含车型化/配置适配条目，数据口径见 fitment/xiaomi.ts 供应商适配库）----

export const xiaomiSu7Faq: readonly XiaomiSu7FaqItem[] = [
  {
    question: "是否所有小米 SU7 都能安装？",
    answer: "不同批次和配置可能不同，需到店确认。",
  },
  {
    question: "新车最推荐先做哪些项目？",
    answer: "车衣、隔热膜、360 软包脚垫、底盘护板等基础保护项目。",
  },
  {
    question: "外观个性项目有哪些？",
    answer: "改色膜、底盘灯、电动尾翼、运动风格机盖、运动尾翼、运动包围等。",
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
    question: "SU7 续航 700 / 800 版能装底盘护板吗？",
    answer:
      "按供应商适配库记录：底盘护板 4 件套通用，续航 700 电池螺丝专用，续航 800/830 通用；两件装后电机与 SU7、YU7 通用。具体以门店现场检查为准。",
  },
  {
    question: "SU7 能做 Ultra 包围和干碳件吗？",
    answer:
      "适配库收录 Ultra 包围（前/后包围、侧裙多方案）、Ultra 干碳大尾翼、干碳挖孔机盖、干碳换件后视镜壳、干碳迎宾踏板、四门饰条等，材料与方案以门店现场评估为准。",
  },
  {
    question: "佛山本地哪里能装 SU7 底盘护板、电动踏板？",
    answer:
      "蓝辉轻改提供小米 SU7 全系轻改施工，门店位于佛山顺德大良，可到店评估并安排施工。",
  },
  {
    question: "SU7 改装项目需要备案吗？",
    answer:
      "涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界；页面不做备案承诺。",
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
    question: "SU7 和 YU7 能改的项目一样吗？",
    answer:
      "部分项目 SU7 / YU7 均可按实车评估，素材归属 YU7 专属项目以 YU7 车型为准；具体适配以门店现场检查为准。",
  },
  {
    question: "页面没列到的项目能改吗？",
    answer:
      "未收录项目到店咨询，以门店实车评估为准。",
  },
] as const satisfies readonly XiaomiSu7FaqItem[];

// ---- Runtime 断言 ----

(() => {
  const errors: string[] = [];

  if (xiaomiSu7UpgradeProjects.length !== XIAOMI_SU7_PROJECT_COUNT) {
    errors.push(`projects: expected ${XIAOMI_SU7_PROJECT_COUNT}, got ${xiaomiSu7UpgradeProjects.length}`);
  }
  if (xiaomiSu7Scenarios.length !== XIAOMI_SU7_SCENARIO_COUNT) {
    errors.push(`scenarios: expected ${XIAOMI_SU7_SCENARIO_COUNT}, got ${xiaomiSu7Scenarios.length}`);
  }
  if (xiaomiSu7ServiceSteps.length !== XIAOMI_SU7_SERVICE_STEP_COUNT) {
    errors.push(`serviceSteps: expected ${XIAOMI_SU7_SERVICE_STEP_COUNT}, got ${xiaomiSu7ServiceSteps.length}`);
  }
  if (xiaomiSu7Faq.length !== XIAOMI_SU7_FAQ_COUNT) {
    errors.push(`faq: expected ${XIAOMI_SU7_FAQ_COUNT}, got ${xiaomiSu7Faq.length}`);
  }

  // order 单调性
  const orders = xiaomiSu7UpgradeProjects.map((p) => p.order);
  for (let i = 1; i < orders.length; i++) {
    if (orders[i] <= orders[i - 1]) {
      errors.push(`project order not monotonic at index ${i}: ${orders[i]}`);
    }
  }

  // key 唯一性
  const keys = xiaomiSu7UpgradeProjects.map((p) => p.id);
  if (new Set(keys).size !== keys.length) {
    errors.push("project ids are not unique");
  }

  // scenario projectIds 引用完整性
  const validKeys = new Set(keys);
  for (const s of xiaomiSu7Scenarios) {
    for (const pid of s.projectIds) {
      if (!validKeys.has(pid)) {
        errors.push(`scenario "${s.id}" references unknown project "${pid}"`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`XiaomiSu7 data integrity errors:\n${errors.join("\n")}`);
  }
})();
