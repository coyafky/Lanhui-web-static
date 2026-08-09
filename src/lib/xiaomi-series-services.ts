/**
 * 小米汽车品牌一级页数据（2026-07-15 重构，参照 gaoshan / voyah / ledao / zhijie / nio series 模式）
 *
 * 定位：小米汽车全系保护与个性升级服务入口（顺德大良）。
 * 品牌页只讲共性需求与 6 类基础服务；SU7 12 项 / YU7 9 项专车项目留在各自子页。
 * 小米差异化：SU7 低底盘（前唇/侧裙/举升点）+ 智驾感知区域（摄像头/毫米波雷达/激光雷达）
 * 避让 + YU7 家庭座舱耐用需求贯穿文案。
 *
 * 结构：
 *   - xiaomiBaseServices        6 类基础服务（全系可咨询，链接到对应产品页）
 *   - xiaomiSeriesServiceSteps  6 步服务流程（确认车型 → 交付养护，含感知与底盘确认）
 *   - xiaomiSeriesFaq           6 条 FAQ（全系适配 / 车型通用性 / 智驾与信号 / SU7 低底盘 / 本地 / 工期）
 *   - xiaomiDouyinHighlights    抖音案例入口 3 项
 *   - XIAOMI_MODEL_COPY         SU7 / YU7 双车型入口文案
 *
 * SU7 / YU7 项目数据仍在 src/lib/xiaomi-su7-upgrade-projects.ts 与
 * src/lib/xiaomi-yu7-upgrade-projects.ts（子页依赖，不迁移）。
 */

// ---- 基础服务（6 类，小米汽车全系均可咨询）----

export type XiaomiBaseServiceId =
  | "car-film"
  | "wheels"
  | "electric-step"
  | "flooring"
  | "floor-mats"
  | "car-care";

export type XiaomiBaseServiceSubLink = {
  label: string;
  href: string;
};

export type XiaomiBaseService = {
  id: XiaomiBaseServiceId;
  iconName: string;
  title: string;
  /** 解决什么 —— 从小米汽车车主痛点出发 */
  painPoint: string;
  /** 适合谁 */
  suitableFor: string;
  /** 对应产品页 */
  href: string;
  /** 车膜类含 3 个子入口 */
  subLinks?: readonly XiaomiBaseServiceSubLink[];
};

export const xiaomiBaseServices: readonly XiaomiBaseService[] = [
  {
    id: "car-film",
    iconName: "Shield",
    title: "车膜类",
    painPoint:
      "高速石子、树胶鸟粪和洗车细纹是漆面长期风险；小米汽车的摄像头、毫米波雷达和激光雷达感知区域会精确避让，隔热膜同步确认透光、夜间视野以及 ETC、导航、天线和车载通信的适配。",
    suitableFor: "新提车、日晒通勤和在意智驾功能完整性的小米汽车车主",
    href: "/product/ppf",
    subLinks: [
      { label: "隐形车衣", href: "/product/ppf" },
      { label: "隔热膜", href: "/product/window-film" },
      { label: "改色膜", href: "/product/color-film" },
    ],
  },
  {
    id: "wheels",
    iconName: "CircleDot",
    title: "轮毂升级",
    painPoint:
      "轮毂不能只看 运动风格：尺寸、ET 值、重量、载荷等级、胎压监测、制动空间和能耗续航要一起核验；SU7 低底盘还要确认轮拱间隙，再结合驾驶需求确认方案。",
    suitableFor: "关注整车姿态、愿意先核对数据适配再决定的车主",
    href: "/product/wheels",
  },
  {
    id: "electric-step",
    iconName: "Footprints",
    title: "电动踏板",
    painPoint:
      "踏板主要面向适配的 YU7 等 SUV 车型，SU7 轿跑车身通常不适用；需要核验门体结构、电路走向、底盘固定点和离地间隙，不是全系通用项目。",
    suitableFor: "常载老人儿童的小米 YU7 家庭用户",
    href: "/product/electric-steps",
  },
  {
    id: "flooring",
    iconName: "Layers",
    title: "地板总成",
    painPoint:
      "地板类主要面向 YU7 等空间车型；安装前要检查座椅配置、固定点、滑轨、出风口位置和异响控制。SU7 空间结构更适合专车脚垫方案。",
    suitableFor: "后排与尾箱使用频率高的小米 YU7 家庭用户",
    href: "/product/flooring",
  },
  {
    id: "floor-mats",
    iconName: "Car",
    title: "专车脚垫",
    painPoint:
      "SU7 与 YU7 在轴距、地台形状和座椅布局上差异明显，脚垫要按车型分体裁形，同时不干涉踏板、座椅轨道、出风口和储物空间。",
    suitableFor: "所有日常通勤车主，尤其雨季和带娃场景",
    href: "/product/floor-mats",
  },
  {
    id: "car-care",
    iconName: "Sparkles",
    title: "洗美养护",
    painPoint:
      "浅色座椅的染色、儿童污渍、宠物毛发、门板脚印和大屏指纹，加上漆面与内饰板的长期养护和尾箱清洁，普通洗车处理不到位。",
    suitableFor: "浅色内饰车主、家庭用车和定期养护的用户",
    href: "/product/car-care",
  },
] as const;

// ---- 抖音案例入口 ----

export type XiaomiDouyinHighlight = {
  iconName: string;
  label: string;
};

export const xiaomiDouyinHighlights: readonly XiaomiDouyinHighlight[] = [
  { iconName: "Play", label: "小米汽车施工过程实拍" },
  { iconName: "Layers", label: "车衣包边与感知区避让细节" },
  { iconName: "Palette", label: "改色与双拼配色效果参考" },
] as const;

// ---- 6 步服务流程 ----

export type XiaomiSeriesServiceStep = {
  step: number;
  title: string;
  description: string;
};

export const xiaomiSeriesServiceSteps: readonly XiaomiSeriesServiceStep[] = [
  {
    step: 1,
    title: "确认车型",
    description:
      "确认小米 SU7 或 YU7 的具体版本、年款与配置，判断项目是否在适配范围内",
  },
  {
    step: 2,
    title: "感知与底盘确认",
    description:
      "记录摄像头、毫米波雷达和激光雷达感知区域，核验举升点与底盘固定点；SU7 低底盘同步确认前唇、侧裙和离地间隙，明确施工避让范围",
  },
  {
    step: 3,
    title: "方案确认",
    description:
      "按使用场景和预算确定项目组合，涉及拆装、打孔或线路的逐项书面告知",
  },
  {
    step: 4,
    title: "保护施工",
    description: "按项目标准施工，全程对漆面、内饰、线束和传感器做遮蔽保护",
  },
  {
    step: 5,
    title: "功能复检",
    description:
      "逐项检查外观、装配和原车功能，智驾功能、传感器、电吸门和尾翼联动重点复核",
  },
  {
    step: 6,
    title: "交付养护",
    description: "交付施工记录和养护建议，异响、松动等问题提供回店复检",
  },
] as const;

// ---- FAQ ----

export type XiaomiSeriesFaqItem = {
  question: string;
  answer: string;
};

export const xiaomiSeriesFaq: readonly XiaomiSeriesFaqItem[] = [
  {
    question: "小米汽车 SU7、YU7 可以做哪些基础服务？",
    answer:
      "蓝辉轻改可为小米汽车 SU7、YU7 等车型提供车膜、轮毂、专车脚垫和洗美养护等基础服务。电动踏板、地板及其他专车项目需根据车型、版本、年款和实际安装条件确认，并非所有车型通用。SU7、YU7 已各自整理独立专车方案。",
  },
  {
    question: "SU7 和 YU7 的脚垫、轮毂和踏板可以通用吗？",
    answer:
      "不能通用。SU7 是运动轿跑、YU7 是家用 SUV，两者在轴距、地台形状、轮拱间隙和座椅布局上差异明显：脚垫需要按车型分体裁形；轮毂数据要分别核对；电动踏板主要面向 YU7 等 SUV 车型，SU7 通常不适用。发来车型和版本，先确认适配清单再谈款式。",
  },
  {
    question: "小米汽车施工前如何确认摄像头和雷达区域？",
    answer:
      "施工前会记录摄像头、毫米波雷达和激光雷达的位置与感知窗口，车衣和改色膜裁切精确避让，不覆盖感知区域；隔热膜在前挡和信号敏感区使用不影响 ETC、导航、手机和车载通信的膜料，完工后逐项测试智驾功能确认。",
  },
  {
    question: "SU7 低底盘升级包围和轮毂要注意什么？",
    answer:
      "SU7 车身和底盘偏低，前唇、侧裙类项目要先确认离地间隙和日常路况；轮毂升级要核对尺寸、ET 值、载荷等级、胎压监测和制动空间，避免影响能耗与行驶品质。涉及举升的施工会提前核验举升点，不在电池包区域施力。",
  },
  {
    question: "顺德大良哪里可以做小米汽车贴膜和养护？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，提供小米汽车车膜、轮毂、脚垫和洗美养护等服务，支持到店咨询和预约施工。发来车型、版本和需求，先确认方案与工期再安排到店。",
  },
  {
    question: "施工大概需要多久？",
    answer:
      "车膜类通常 1–3 天；踏板、地板等安装类通常半天到 1 天；洗美养护 2–4 小时。确认方案时会同步告知准确工期。",
  },
] as const;

// ---- SU7 / YU7 双车型入口文案 ----

export type XiaomiModelEntryKey = "su7" | "yu7";

export type XiaomiModelCopy = {
  scenario: string;
  topNeeds: readonly [string, string, string];
};

export const XIAOMI_MODEL_COPY: Record<XiaomiModelEntryKey, XiaomiModelCopy> = {
  su7: {
    scenario:
      "运动轿跑，已整理 12 个专车适配项目，覆盖新车保护、外观个性、驾驶触点与 运动风格。",
    topNeeds: ["车衣 / 隔热膜", "轮毂升级", "改色膜"],
  },
  yu7: {
    scenario:
      "家用 SUV，已整理 9 个专车适配项目，关注座舱防护、底盘行车、运动包围与电动便利。",
    topNeeds: ["专车脚垫", "电动踏板", "座舱养护"],
  },
} as const;
