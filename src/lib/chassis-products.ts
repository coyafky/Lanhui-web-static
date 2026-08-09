export type ChassisCoverageZone = {
  code: string;
  title: string;
  description: string;
  emphasis?: "primary" | "standard";
};

export type ChassisSpecGroup = {
  title: string;
  items: readonly {
    label: string;
    value: string;
  }[];
};

export const chassisImages = {
  hero: {
    publicPath: "/images/producthero/chassis-hero.webp",
    width: 1448,
    height: 1086,
    alt: "新能源车举升后进行底盘护板安装位置检查",
  },
  black: {
    publicPath: "/images/product/chassis/chassis-plate-black.webp",
    width: 782,
    height: 1396,
    alt: "黑色铝镁合金五段式底盘护板产品结构图",
  },
  silver: {
    publicPath: "/images/product/chassis/chassis-plate-silver.webp",
    width: 768,
    height: 1378,
    alt: "银色铝镁合金五段式底盘护板产品结构图",
  },
} as const;

export const chassisCoverageZones: readonly ChassisCoverageZone[] = [
  {
    code: "01",
    title: "前电机护板",
    description: "对应车辆前部电驱区域，在原车底部外侧增加一道隔护。",
  },
  {
    code: "02",
    title: "线束护板",
    description: "覆盖底盘线束集中区域，减少日常路面异物直接刮碰。",
  },
  {
    code: "03",
    title: "前电池护板",
    description: "覆盖电池包前段，是五段结构中的主要覆盖区域之一。",
    emphasis: "primary",
  },
  {
    code: "04",
    title: "后电池护板",
    description: "衔接电池包后段，与前电池护板形成连续的底部覆盖。",
    emphasis: "primary",
  },
  {
    code: "05",
    title: "后电机护板",
    description: "对应车辆后部电驱区域，补齐车尾方向的底部隔护。",
  },
] as const;

export const chassisBenefits = [
  {
    title: "减少关键区域直接接触",
    description: "遇到碎石、泥沙和轻微刮碰时，让外部护板先接触路面异物，减少原车电机、电池与线束区域直接暴露。",
  },
  {
    title: "覆盖更完整",
    description: "五段分区从前电机延伸到后电机，不只关注电池包，也兼顾线束和前后电驱区域。",
  },
  {
    title: "复杂路况更安心",
    description: "日常经过施工路段、砂石路面或较高坡坎时，多一道可检查的外部隔护层，用车心里更有底。",
  },
] as const;

export const chassisFitmentSteps = [
  {
    title: "核对车型与底盘版本",
    description: "同一车系不同年款和配置的底盘结构可能不同，先确认对应产品版型。",
  },
  {
    title: "检查固定位置与原车状态",
    description: "举升后查看原车护板、固定位置和底部状态，再确定安装条件。",
  },
  {
    title: "避开散热、排水与检修区域",
    description: "结合实车结构确认必要的散热口、排水口和常用检修位置不被不当遮挡。",
  },
  {
    title: "安装后复查间隙与紧固",
    description: "交付前检查固定点、部件间隙和异常声响；发生明显托底后建议再次检查。",
  },
] as const;

export const chassisSpecGroups: readonly ChassisSpecGroup[] = [
  {
    title: "产品结构",
    items: [
      { label: "主体材质", value: "铝镁合金" },
      { label: "分区数量", value: "五段式结构" },
      { label: "覆盖区域", value: "前电机、线束、前电池、后电池、后电机" },
      { label: "外观选择", value: "黑色、银色" },
    ],
  },
  {
    title: "适配与安装",
    items: [
      { label: "适配方式", value: "按车型、年款与底盘版本确认" },
      { label: "安装前", value: "检查原车状态、固定位置与部件间隙" },
      { label: "安装后", value: "复查紧固、间隙与异常声响" },
      { label: "产品版本", value: "实际结构与颜色以对应车型批次为准" },
    ],
  },
  {
    title: "使用边界",
    items: [
      { label: "日常作用", value: "为底盘关键区域增加外部隔护" },
      { label: "不能替代", value: "安全驾驶、路况判断与定期检查" },
      { label: "严重撞击", value: "不能承诺电池、电机或底盘零损伤" },
      { label: "复查时机", value: "明显托底、碰撞或出现异响后" },
    ],
  },
] as const;

export const chassisFaqs = [
  {
    question: "哪些车型可以安装底盘护板？",
    answer:
      "需要根据车型、年款、底盘版本和原车状态确认。即使车名相同，不同配置也可能使用不同版型，安装前应以实车和对应产品为准。",
  },
  {
    question: "黑色和银色有什么区别？",
    answer:
      "两种图片展示的是不同外观选择，主体材质均为铝镁合金。具体表面处理、结构细节和可选颜色可能随车型与产品批次变化。",
  },
  {
    question: "安装后会影响散热、排水或日常保养吗？",
    answer:
      "安装前会结合实车确认必要的散热、排水和检修区域。不同车型结构差异较大，能否保持原有检修便利性需要在安装前逐项核对。",
  },
  {
    question: "遇到严重托底，护板能保证电池不受损吗？",
    answer:
      "不能。护板的作用是增加外部隔护，减少日常碎石、泥沙和轻微刮碰直接接触关键区域，但严重撞击仍可能造成护板、底盘或车辆部件损伤。",
  },
  {
    question: "安装后什么时候需要复查？",
    answer:
      "如果车辆发生明显托底、碰撞，或底部出现异响、松动感，应尽快检查护板、固定点和周边部件。日常保养时也可以顺带查看。",
  },
] as const;
