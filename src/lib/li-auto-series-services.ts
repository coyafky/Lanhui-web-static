/**
 * 理想汽车品牌一级页数据（2026-07-15 重构，参照 gaoshan / voyah / ledao / zhijie / nio / xiaomi series 模式）
 *
 * 定位：理想汽车家庭用车保护与舒适升级服务入口（顺德大良）。
 * 品牌页只讲家庭共性需求与 6 类基础服务；ONE 8 项 / i6 20 项 / i8 20 项 /
 * L9 14 项 / MEGA 18 项专车项目留在各自子页。
 * 理想差异化：家庭用户痛点（老人孩子上下车、座舱耐脏、长途舒适）+
 * 智驾感知区域（摄像头/毫米波雷达/激光雷达）避让 + 地板/踏板按车型确认贯穿文案。
 *
 * 结构：
 *   - liAutoBaseServices        6 类基础服务（全系可咨询，链接到对应产品页）
 *   - liAutoScenarioEntries     5 个高频场景入口（含理想特有「上下车便利」）
 *   - liAutoSeriesServiceSteps  6 步服务流程（确认车型 → 交付养护，含感知与设备确认）
 *   - liAutoSeriesFaq           6 条 FAQ（全系适配 / L9 踏板 / 地板脚垫通用性 / 感知避让 / 本地 / 工期）
 *   - liAutoDouyinHighlights    抖音案例入口 3 项
 *   - LI_AUTO_MODEL_COPY        ONE / i6 / i8 / L9 / MEGA 五车型入口文案
 *
 * 各车型项目数据仍在 src/lib/li-auto-<model>-products.ts（子页依赖，不迁移）。
 */

// ---- 基础服务（6 类，理想汽车全系均可咨询）----

export type LiAutoBaseServiceId =
  | "car-film"
  | "electric-step"
  | "flooring"
  | "floor-mats"
  | "wheels"
  | "car-care";

export type LiAutoBaseServiceSubLink = {
  label: string;
  href: string;
};

export type LiAutoBaseService = {
  id: LiAutoBaseServiceId;
  iconName: string;
  title: string;
  /** 解决什么 —— 从理想家庭车主痛点出发 */
  painPoint: string;
  /** 适合谁 */
  suitableFor: string;
  /** 对应产品页 */
  href: string;
  /** 车膜类含 3 个子入口 */
  subLinks?: readonly LiAutoBaseServiceSubLink[];
};

export const liAutoBaseServices: readonly LiAutoBaseService[] = [
  {
    id: "car-film",
    iconName: "Shield",
    title: "车膜保护",
    painPoint:
      "家庭高频通勤、接送和商场停车，门边与漆面日常损伤最多；大面积玻璃夏季暴晒还要兼顾隔热、夜间视野、隐私和信号。理想汽车的摄像头、毫米波雷达和激光雷达感知区域会精确避让，隔热膜同步确认 ETC、导航与车载通信不受影响。",
    suitableFor: "新提车、日晒通勤和在意智驾功能完整性的理想车主",
    href: "/product/ppf",
    subLinks: [
      { label: "隐形车衣", href: "/product/ppf" },
      { label: "隔热膜", href: "/product/window-film" },
      { label: "改色膜", href: "/product/color-film" },
    ],
  },
  {
    id: "electric-step",
    iconName: "Footprints",
    title: "上下车便利",
    painPoint:
      "老人和孩子上下车跨度大，是 L9、MEGA 等高车身车型最常见的家庭痛点。电动踏板安装前会确认年款、离地间隙、线束走向和原车功能，在不明显降低通过性的前提下提升上下车便利，并非全系默认适配。",
    suitableFor: "常载老人儿童的理想 L9、i8、MEGA 家庭用户",
    href: "/product/electric-steps",
  },
  {
    id: "flooring",
    iconName: "Layers",
    title: "地板总成",
    painPoint:
      "孩子零食、饮料、雨水和泥沙进入车厢后难清理。地板总成按车型、座椅轨道、座椅布局和检修位置逐项确认，不承诺跨车型通用；六座与 MPV 布局的二排通道是重点覆盖区域。",
    suitableFor: "后排使用频率高、在意座舱耐脏易清洁的家庭用户",
    href: "/product/flooring",
  },
  {
    id: "floor-mats",
    iconName: "Car",
    title: "专车脚垫",
    painPoint:
      "五座、六座和 MPV 布局的地台形状差异明显，脚垫要按车型分体裁形，覆盖踏板区、座椅导轨、第三排和后备厢，同时保证防滑、卡扣固定和方便拆洗。",
    suitableFor: "所有日常通勤车主，尤其雨季和带娃场景",
    href: "/product/floor-mats",
  },
  {
    id: "wheels",
    iconName: "CircleDot",
    title: "轮毂与姿态",
    painPoint:
      "家庭 SUV 换轮毂不能只看样式：尺寸、ET 值、载荷等级、胎压监测、刹车间隙、能耗续航和行驶舒适要一起核验，确认合规后再决定方案，不影响整车质保与安全。",
    suitableFor: "关注整车姿态、愿意先核对数据适配再决定的车主",
    href: "/product/wheels",
  },
  {
    id: "car-care",
    iconName: "Sparkles",
    title: "家庭座舱养护",
    painPoint:
      "儿童污渍、宠物毛发、皮革折痕、大屏指纹、顶棚和门板脚印，普通洗车处理不到位。按周期做座舱深度清洁和漆面养护，让家庭用车长期保持好状态。",
    suitableFor: "浅色内饰车主、带娃家庭和定期养护的用户",
    href: "/product/car-care",
  },
] as const;

// ---- 场景选择器（5 个高频入口，含理想特有「上下车便利」）----

export type LiAutoScenarioEntryId =
  | "new-car"
  | "easy-access"
  | "family-cabin"
  | "long-trip"
  | "daily-care";

export type LiAutoScenarioEntry = {
  id: LiAutoScenarioEntryId;
  iconName: string;
  title: string;
  description: string;
  /** 关联的基础服务 */
  serviceIds: readonly LiAutoBaseServiceId[];
  /** 推荐组合一句话 */
  recommendation: string;
};

export const liAutoScenarioEntries: readonly LiAutoScenarioEntry[] = [
  {
    id: "new-car",
    iconName: "ShieldCheck",
    title: "新车保护",
    description: "刚提车，想把基础防护一次做齐",
    serviceIds: ["car-film", "floor-mats", "car-care"],
    recommendation:
      "车衣或隔热膜 + 专车脚垫 + 基础洗美，交付初期先把漆面和高频磨损位保护起来，摄像头、雷达和激光雷达感知区域提前确认避让。",
  },
  {
    id: "easy-access",
    iconName: "Users",
    title: "老人孩子上下车",
    description: "高车身跨度大，家人上下车不方便",
    serviceIds: ["electric-step", "floor-mats"],
    recommendation:
      "电动踏板按年款、离地间隙和线束先确认适配，再配踏板区脚垫防滑；L9、MEGA 等高车身车型收益最明显，安装前后功能逐项复检。",
  },
  {
    id: "family-cabin",
    iconName: "Baby",
    title: "座舱耐脏易清洁",
    description: "孩子零食饮料、雨天泥沙，车厢难收拾",
    serviceIds: ["flooring", "floor-mats", "car-care"],
    recommendation:
      "地板总成（按车型与座椅布局确认）+ 全覆盖专车脚垫 + 座舱深度清洁，零食碎屑和泥水都好收拾，二排通道和后备厢重点覆盖。",
  },
  {
    id: "long-trip",
    iconName: "Route",
    title: "长途出行舒适",
    description: "常跑长途，暴晒、隐私和视野都要兼顾",
    serviceIds: ["car-film", "wheels"],
    recommendation:
      "前挡和大面积玻璃用兼顾隔热、夜间视野与信号的隔热膜，轮毂方案核对载荷与能耗数据，长途行驶更安静省心。",
  },
  {
    id: "daily-care",
    iconName: "Droplets",
    title: "长期养护",
    description: "不改装，只想把车况维持在好状态",
    serviceIds: ["car-care", "floor-mats"],
    recommendation:
      "精洗 + 皮革与内饰板养护 + 大屏与顶棚清洁，按周期保持座舱和漆面状态，交车前后都能约。",
  },
] as const;

// ---- 抖音案例入口 ----

export type LiAutoDouyinHighlight = {
  iconName: string;
  label: string;
};

export const liAutoDouyinHighlights: readonly LiAutoDouyinHighlight[] = [
  { iconName: "Play", label: "理想汽车施工过程实拍" },
  { iconName: "Layers", label: "车衣包边与感知区避让细节" },
  { iconName: "Palette", label: "踏板、地板与座舱升级参考" },
] as const;

// ---- 6 步服务流程 ----

export type LiAutoSeriesServiceStep = {
  step: number;
  title: string;
  description: string;
};

export const liAutoSeriesServiceSteps: readonly LiAutoSeriesServiceStep[] = [
  {
    step: 1,
    title: "确认车型",
    description:
      "确认理想 ONE、i6、i8、L9 或 MEGA 的具体版本、年款与座椅布局，判断项目是否在适配范围内",
  },
  {
    step: 2,
    title: "感知与设备确认",
    description:
      "记录摄像头、毫米波雷达和激光雷达感知区域，核验线束、气囊与高压部件位置，明确施工避让范围",
  },
  {
    step: 3,
    title: "方案确认",
    description:
      "按家庭使用场景和预算确定项目组合，涉及拆装、打孔或线路的逐项书面告知",
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
      "逐项检查外观、装配和原车功能，智驾功能、传感器、电动门和踏板联动重点复核",
  },
  {
    step: 6,
    title: "交付养护",
    description: "交付施工记录和养护建议，异响、松动等问题提供回店复检",
  },
] as const;

// ---- FAQ ----

export type LiAutoSeriesFaqItem = {
  question: string;
  answer: string;
};

export const liAutoSeriesFaq: readonly LiAutoSeriesFaqItem[] = [
  {
    question: "理想汽车 ONE、i6、i8、L9、MEGA 可以做哪些基础服务？",
    answer:
      "蓝辉轻改可为理想汽车全系提供车膜、轮毂、专车脚垫和洗美养护等基础服务；电动踏板、地板总成需按车型、年款、座椅布局和安装条件确认，并非全系通用。ONE、i6、i8、L9、MEGA 已各自整理独立专车方案，L6、L7、L8 等其他理想车型的基础服务同样可以咨询。",
  },
  {
    question: "理想 L9 安装电动踏板要确认哪些配置？",
    answer:
      "需要确认年款、离地间隙、门体结构、线束走向和底盘固定点，并核对是否与原车侧标、雷达和摄像头位置冲突。安装后会测试踏板展开收回、车门联动和智驾功能，确认不影响通过性和原车质保条款再交付。",
  },
  {
    question: "理想 MEGA 和 i8 的地板、脚垫能否通用？",
    answer:
      "不能通用。MEGA 是 MPV 布局、i8 是六座 SUV，两者在地台形状、座椅轨道、二排通道和第三排空间上差异明显，地板总成和脚垫都要按车型分体裁形。发来车型和座椅布局，先确认覆盖方案再谈材质与款式。",
  },
  {
    question: "施工如何避开摄像头、雷达、线束和高压部件？",
    answer:
      "施工前会记录摄像头、毫米波雷达和激光雷达的位置与感知窗口，车衣和改色膜裁切精确避让；涉及拆装的项目提前核验线束、气囊和高压部件位置，举升不在电池包区域施力。完工后逐项测试智驾与原车功能确认。",
  },
  {
    question: "佛山顺德大良哪里可以做理想汽车贴膜和家庭座舱升级？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，提供理想汽车车膜、踏板、地板、脚垫和洗美养护等服务，支持到店咨询和预约施工。发来车型、年款和需求，先确认方案与工期再安排到店。",
  },
  {
    question: "施工大概需要多久？",
    answer:
      "车膜类通常 1–3 天；踏板、地板等安装类通常半天到 1 天；洗美养护 2–4 小时。确认方案时会同步告知准确工期。",
  },
] as const;

// ---- ONE / i6 / i8 / L9 / MEGA 五车型入口文案 ----

export type LiAutoModelEntryKey = "one" | "i6" | "i8" | "l9" | "mega";

export type LiAutoModelCopy = {
  /** 车型定位（卡片 Badge 用） */
  positioning: string;
  scenario: string;
  topNeeds: readonly [string, string, string];
};

export const LI_AUTO_MODEL_COPY: Record<LiAutoModelEntryKey, LiAutoModelCopy> =
  {
    one: {
      positioning: "存量车型养护",
      scenario:
        "已交付多年的理想 ONE，重点是老化膜层更换、漆面翻新、脚垫踏板补配与座舱深度清洁。",
      topNeeds: ["膜层翻新", "专车脚垫", "座舱养护"],
    },
    i6: {
      positioning: "五座家庭纯电 SUV",
      scenario:
        "五座纯电家庭 SUV，重点是新车保护、后备厢与儿童宠物场景、轮毂与脚垫适配。",
      topNeeds: ["车衣 / 隔热膜", "专车脚垫", "轮毂升级"],
    },
    i8: {
      positioning: "六座家庭 SUV",
      scenario:
        "家庭多人出行，重点是上下车便利、第二排耐脏、玻璃隔热和底盘保护。",
      topNeeds: ["隔热膜", "专车脚垫", "上下车便利"],
    },
    l9: {
      positioning: "旗舰家庭 SUV",
      scenario:
        "旗舰六座家庭 SUV，重点是老人孩子上下车、电动踏板、地板总成和长途舒适。",
      topNeeds: ["电动踏板", "地板总成", "车衣 / 隔热膜"],
    },
    mega: {
      positioning: "大型家庭 MPV",
      scenario:
        "大型家庭 MPV，重点是车身保护、座舱清洁、地板与导轨覆盖、多人上下车与商务质感。",
      topNeeds: ["车衣", "地板总成", "座舱养护"],
    },
  } as const;
