/**
 * 贵州蓝辉集团（制造端）数据模块
 *
 * 来源：《贵州蓝辉集团简介_2026.pdf》拆解（见 docs 目录《蓝辉集团简介_内容拆解.md》）
 * 数字口径：以 PDF 与集团行政复核为准；上线前请复核产能/储量/成本等关键数字。
 * 本模块服务于 `/brand/group`（集团介绍页）与 `/brand`（品牌介绍页背书条）。
 */

export const group = {
  name: "贵州蓝辉集团",
  en: "GUIZHOU LANHUI GROUP",
  foundedYear: 2019,
  city: "贵州遵义 · 红花岗区",
  role: "蓝辉轻改的产品制造母体——从铝材料到轮毂、电动踏板的一体化制造集团",
  tagline: "你装的产品，来自我们自己工厂",
  highlights: [
    "国家高新技术企业",
    "省级“专精特新”中小企业",
    "装备承制单位资格（军选民用）",
    "IATF16949 / ISO45001 / ISO14001 体系认证",
  ],
  /** 产能三连卡 */
  capacity: [
    { value: "100 万只", label: "汽车改装轮毂 · 年产" },
    { value: "50 万套", label: "新能源汽车核心零部件 · 年产" },
    { value: "15 万吨", label: "免热处理材料 · 年产（航鹏项目）" },
  ],
  subsidiaries: [
    "贵州蓝辉新材料有限公司",
    "贵州航鹏新材料科技有限公司",
    "遵义华鸿精密科技有限公司",
  ],
} as const;

export type GroupMilestone = {
  year: string;
  month?: string;
  title: string;
  description: string;
  highlight?: boolean;
};

/** 集团大事记（2019–2025） */
export const groupMilestones: GroupMilestone[] = [
  {
    year: "2019",
    title: "公司注册成立",
    description: "贵州蓝辉新材料有限公司注册成立，落址遵义市红花岗区。",
    highlight: true,
  },
  {
    year: "2021",
    month: "12月",
    title: "高新技术企业 · 专精特新",
    description: "成为国家高新技术企业、省级“专精特新”中小企业。",
  },
  {
    year: "2023",
    month: "6月",
    title: "重点项目奠基",
    description: "年产 15 万吨免热处理材料暨年产 20 万套新能源汽车核心零部件项目奠基。",
    highlight: true,
  },
  {
    year: "2024",
    month: "9月",
    title: "省委书记莅临视察",
    description: "省委书记徐麟莅临公司视察，肯定公司发展成绩与思路。",
  },
  {
    year: "2024",
    month: "10月",
    title: "轮毂出口欧洲首发",
    description: "公司轮毂首次出口欧洲，进入海外汽车后市场。",
    highlight: true,
  },
  {
    year: "2024",
    month: "12月",
    title: "市领导莅临视察",
    description: "省委常委、市委书记李睿莅临公司视察。",
  },
  {
    year: "2025",
    month: "3月",
    title: "省长莅临视察",
    description: "省委副书记、省长李炳军莅临公司视察。",
  },
  {
    year: "2025",
    month: "7月",
    title: "卡巴轮项目投产",
    description: "年产 100 万只卡巴轮项目投产，轮毂产能再上台阶。",
    highlight: true,
  },
];

export type GroupHonor = {
  title: string;
  issuer?: string;
  image: string;
};

/** 荣誉墙 6 项（图片来自 2026 PDF 拆解，转 webp 后本地化） */
export const groupHonors: GroupHonor[] = [
  { title: "镁合金材料科技创新领军人才工作站", issuer: "贵州省科学技术厅", image: "/images/brand/honors/honor-1-magnesium-workstation.webp" },
  { title: "国家高新技术企业", issuer: "GR202452000032", image: "/images/brand/honors/honor-2-hitech-cert.webp" },
  { title: "省级“专精特新”中小企业", issuer: "贵州省工业和信息化厅", image: "/images/brand/honors/honor-3-specialized-sme.webp" },
  { title: "贵州大学教学实习实训基地", issuer: "贵州大学", image: "/images/brand/honors/honor-4-guizhou-univ.webp" },
  { title: "贵州省科学家工作站实验室", issuer: "贵州省科学家工作站", image: "/images/brand/honors/honor-5-scientist-lab.webp" },
  { title: "华南理工大学产学研创新研究基地", issuer: "华南理工大学广州学院", image: "/images/brand/honors/honor-6-scut.webp" },
];

export type GroupCredential = {
  title: string;
  note: string;
  image: string;
};

/** 资质墙 4 项 */
export const groupCredentials: GroupCredential[] = [
  { title: "装备承制单位资格（军选民用）", note: "中央军委装备发展部 · 注册编入《中国人民解放军装备承制单位名录》", image: "/images/brand/credentials/cred-1-military-equip.webp" },
  { title: "装备承制单位资格（副本）", note: "承制范围以副本为准", image: "/images/brand/credentials/cred-2-military-equip-copy.webp" },
  { title: "质量管理体系认证", note: "北京天一正认证中心 · IAF / CNAS", image: "/images/brand/credentials/cred-3-qms-cert.webp" },
  { title: "武器装备质量管理体系认证", note: "军标认证", image: "/images/brand/credentials/cred-4-weapon-qms.webp" },
];

export const groupPatents = {
  systems: ["IATF16949:2016", "ISO45001", "ISO14001"],
  counts: [
    { value: 5, label: "已授权发明专利" },
    { value: 17, label: "已授权实用新型专利" },
    { value: 3, label: "申请中发明专利" },
  ],
  wallImage: "/images/brand/patents/patents-wall.webp",
};

export type GroupAdvantage = {
  index: string;
  title: string;
  description: string;
};

/** 核心优势 */
export const groupAdvantages: GroupAdvantage[] = [
  {
    index: "1",
    title: "政策优势：全省“富矿精开”重点项目",
    description:
      "铝及铝加工产业是贵州省重点发展产业。公司年产 15 万吨免热处理材料及 20 万套新能源汽车核心零部件项目，是贵州省 2024 年“富矿精开”重点项目之一。",
  },
  {
    index: "2",
    title: "成本优势：紧邻铝厂，铝水直供",
    description:
      "厂区距中铝遵义股份有限公司 800 米，直接运铝水调配合金材料生产。每吨节约能源 300 元、烧损 400 元及运输等成本，综合每吨节约 900 元以上。",
  },
];

export type GroupChain = {
  step: string;
  company: string;
  image: string;
};

/** 产业链五环（图片用现有品牌页图替代，待门店实拍补充） */
export const groupChain: GroupChain[] = [
  { step: "材料加工", company: "贵州航鹏新材料科技有限公司", image: "" },
  { step: "模具加工", company: "遵义凯诺模具有限公司", image: "" },
  { step: "精深加工", company: "贵州蓝辉新材料有限公司", image: "" },
  { step: "精深加工", company: "遵义华鸿精密科技有限公司", image: "" },
  { step: "精深加工", company: "遵义盛创新动力科技有限公司", image: "" },
];

export const groupMarkets = {
  domestic: ["贵州市场", "成渝市场", "珠三角市场", "长三角市场"],
  overseas: ["欧洲", "澳洲", "北美洲"],
  partners: [
    "吉利汽车",
    "华川电装",
    "遵义大地和",
    "大洋电机",
    "上海电驱动",
    "卧龙电器驱动",
    "时代电动",
  ],
};

export type GroupProduct = {
  title: string;
  description: string;
  href: string;
  tag?: string;
};

/** 产品矩阵入口（链回产品服务页，不重复展开） */
export const groupProducts: GroupProduct[] = [
  { title: "汽车轮毂", description: "中压铸造 + 轮辐正面锻压 + 轮辋旋压，远销欧美与东南亚", href: "/product/wheels", tag: "后装市场" },
  { title: "电动脚踏", description: "镁合金轻量化支架 + 航空铝面板，专为新能源 SUV", href: "/product/electric-steps", tag: "LUXDRIVE" },
  { title: "铝合金原材料", description: "合金液 / 铝棒 / 铝锭，国标美标欧标日标全谱系", href: "/product/wheels" },
  { title: "驱动电机零部件", description: "端盖 / 电控箱 / 电机壳，一体化压铸与低压铸造", href: "/product/electric-steps" },
  { title: "航空航天核心零部件", description: "飞行舱体 / 冷却风扇 / 风机叶轮一体化铸造成型", href: "/product/electric-steps" },
];
