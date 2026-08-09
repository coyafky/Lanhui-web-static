export type CarMatCategory =
  | "full-wrap"
  | "trunk"
  | "texture"
  | "detail";

export type CarMatImage = {
  id: string;
  filename: string;
  publicPath: string;
  width: 1086;
  height: 1448;
  aspectRatio: "3/4";
  title: string;
  category: CarMatCategory;
  alt: string;
  recommendFor: string;
  positioning: string;
};

export type CarMatValue = {
  title: string;
  description: string;
};

export type CarMatScenario = {
  id: string;
  icon: "CloudRain" | "Baby" | "PawPrint" | "Briefcase";
  title: string;
  description: string;
};

export type CarMatProcessStep = {
  step: string;
  title: string;
  description: string;
  deliverable: string;
};

export type CarMatSafetyCheck = {
  label: string;
  title: string;
  description: string;
  risk: string;
};

export type CarMatFaq = {
  question: string;
  answer: string;
};

export const CARMAT_IMAGE_WIDTH = 1086 as const;
export const CARMAT_IMAGE_HEIGHT = 1448 as const;
export const CARMAT_IMAGE_ASPECT_RATIO = "3/4" as const;

const CARMAT_IMAGE_FILENAMES = [
  "1-1.webp",
  "1-2.webp",
  "1-3.webp",
  "1-4.webp",
  "1-5.webp",
  "1-6.webp",
  "1-7.webp",
  "1-8.webp",
  "1-9.webp",
  "1-10.webp",
  "1-11.webp",
  "1-12.webp",
  "1-13.webp",
  "1-14.webp",
  "1-15.webp",
  "1-16.webp",
  "1-17.webp",
  "1-18.webp",
  "1-19.webp",
  "1-20.webp",
  "1-21.webp",
  "1-22.webp",
  "1-23.webp",
  "1-24.webp",
  "1-25.webp",
  "1-26.webp",
  "1-27.webp",
  "1-28.webp",
  "1-29.webp",
] as const;

export const carMatCategoryLabels: Record<CarMatCategory, string> = {
  "full-wrap": "主驾全包",
  trunk: "尾箱后排",
  texture: "材质色感",
  detail: "边角细节",
};

export const carMatCategoryFilterLabels: Record<CarMatCategory, string> = {
  "full-wrap": "主驾",
  trunk: "尾箱",
  texture: "材质",
  detail: "边角",
};

function categoryForOrder(order: number): CarMatCategory {
  if (order <= 8) return "full-wrap";
  if (order <= 15) return "trunk";
  if (order <= 22) return "texture";
  return "detail";
}

const RECOMMEND_FOR: Record<number, string> = {
  1: "理想 L9 / L8 家庭通勤",
  2: "问界 M7 / M9 大六座 SUV",
  3: "腾势 D9 / 高山 8 商务接待",
  4: "理想 MEGA MPV 后排",
  5: "蔚来 ES8 家庭出行",
  6: "问界 M8 后排过道",
  7: "理想 ONE 日常通勤",
  8: "岚图梦想家 商务/家庭",
  9: "极氪 009 主驾区域",
  10: "乐道 L90 尾箱覆盖",
  11: "理想 L9 尾箱全包",
  12: "问界 M7 尾箱收纳",
  13: "腾势 D9 尾箱方案",
  14: "高山 8 尾箱区域",
  15: "蔚来 ES8 尾箱保护",
  16: "理想 L9 暖米色",
  17: "问界 M7 深灰色",
  18: "腾势 D9 黑色",
  19: "理想 MEGA 棕色",
  20: "蔚来 ES8 米色",
  21: "问界 M8 灰色",
  22: "理想 ONE 黑色",
  23: "问界 M9 门槛包边",
  24: "腾势 D9 座椅滑轨",
  25: "理想 L9 边角贴合",
  26: "高山 8 侧边处理",
  27: "蔚来 ES8 卡扣位置",
  28: "问界 M7 后排出风口",
  29: "理想 MEGA 门槛覆盖",
};

const POSITIONING: Record<number, string> = {
  1: "主驾+副驾全包",
  2: "主副驾+二排",
  3: "全车七座覆盖",
  4: "主驾+过道+三排",
  5: "六座全包方案",
  6: "二排过道覆盖",
  7: "主副驾+二排",
  8: "全车七座方案",
  9: "主驾区域",
  10: "尾箱全包",
  11: "尾箱+后排",
  12: "尾箱垫方案",
  13: "尾箱全包",
  14: "尾箱区域",
  15: "尾箱保护",
  16: "暖米色质感",
  17: "深灰耐脏",
  18: "黑色经典",
  19: "棕色商务",
  20: "米色居家",
  21: "灰色百搭",
  22: "黑色耐磨",
  23: "门槛边缘",
  24: "滑轨间隙",
  25: "边角细节",
  26: "侧边防踢",
  27: "卡扣固定",
  28: "出风口避让",
  29: "门槛覆盖",
};

export const carMatGalleryImages: readonly CarMatImage[] =
  CARMAT_IMAGE_FILENAMES.map((filename, index) => {
    const order = index + 1;
    const category = categoryForOrder(order);
    const serial = String(order).padStart(2, "0");

    return {
      id: `carmat-${serial}`,
      filename,
      publicPath: `/images/products/carmat/${filename}`,
      width: CARMAT_IMAGE_WIDTH,
      height: CARMAT_IMAGE_HEIGHT,
      aspectRatio: CARMAT_IMAGE_ASPECT_RATIO,
      title: `汽车垫方案 ${serial}`,
      category,
      alt: `蓝辉轻改汽车垫${carMatCategoryLabels[category]}展示图 ${serial}`,
      recommendFor: RECOMMEND_FOR[order] ?? "到店确认车型",
      positioning: POSITIONING[order] ?? "到店确认覆盖范围",
    };
  });

export const carMatFeaturedImages: readonly CarMatImage[] =
  carMatGalleryImages.slice(0, 8);

export const carMatValues: readonly CarMatValue[] = [
  {
    title: "车型到店确认",
    description:
      "先确认车型、年款、座椅布局与原车地毯状态，再沟通汽车垫覆盖范围。",
  },
  {
    title: "座舱全包覆",
    description:
      "围绕主副驾、二排、过道、门槛与尾箱区域做整体搭配，减少零散拼接感。",
  },
  {
    title: "易清洁维护",
    description:
      "面向家庭通勤、接送小孩、商务接待等高频场景，优先考虑日常打理便利性。",
  },
  {
    title: "风格统一",
    description:
      "根据内饰颜色、地板质感和使用习惯选择方案，让座舱视觉更完整。",
  },
];

export const carMatScenarios: readonly CarMatScenario[] = [
  {
    id: "rain-mud",
    icon: "CloudRain",
    title: "雨天泥水",
    description:
      "雨天上下车带进的泥水、沙石直接留在脚垫上，取出冲洗即可，原车地毯保持干燥清洁。",
  },
  {
    id: "kids-snacks",
    icon: "Baby",
    title: "带娃出行",
    description:
      "零食碎屑、饮料洒落不再直接渗入座椅滑轨和地毯缝隙，可拆洗层让日常清理更省心。",
  },
  {
    id: "pets-outdoor",
    icon: "PawPrint",
    title: "宠物与户外",
    description:
      "宠物毛发、泥土和草屑容易被脚垫表层拦截，减少进入地毯纤维深层的机会。",
  },
  {
    id: "business-reception",
    icon: "Briefcase",
    title: "商务接待",
    description:
      "后排整舱颜色统一、边角整洁，乘客穿正装或裙装上下车时更从容，日常维护也更方便。",
  },
];

export const carMatSafetyChecks: readonly CarMatSafetyCheck[] = [
  {
    label: "PEDAL",
    title: "踏板间隙",
    description:
      "确认油门、刹车、休息踏板与脚垫边缘之间的安全距离，保证踏板全行程不被干涉。",
    risk: "踏板被脚垫卡住可能导致加速或刹车失控，这是脚垫安装最重要的安全检查项。",
  },
  {
    label: "CLIP",
    title: "固定卡扣",
    description:
      "使用原车卡扣位或专用防滑底层固定脚垫，防止行驶中位移或堆积。",
    risk: "未固定的脚垫可能在紧急制动时向前滑动，影响踏板操作并增加安全风险。",
  },
  {
    label: "RAIL",
    title: "座椅滑轨",
    description:
      "检查前后移动座椅时脚垫边缘是否干涉滑轨，确保电动座椅全行程无阻碍。",
    risk: "脚垫干涉滑轨可能导致座椅卡滞、电机过载或滑轨损坏。",
  },
  {
    label: "EDGE",
    title: "边缘翘边",
    description:
      "检查门槛、门框和出风口附近的脚垫边缘是否贴合，关门后不应有挤压或翘起。",
    risk: "翘边可能勾住鞋底导致绊倒，或长期摩擦损坏脚垫包边和原车内饰。",
  },
];

export const carMatFaqs: readonly CarMatFaq[] = [
  {
    question: "脚垫会影响油门和刹车吗？",
    answer:
      "安装时首要检查项就是踏板间隙。我们会在施工前后分别确认油门、刹车、休息踏板的完整行程，保证不被脚垫干涉。",
  },
  {
    question: "脚垫如何固定，会不会滑动？",
    answer:
      "利用原车卡扣位配合防滑底层固定。安装后会进行前后移动座椅和急刹车模拟检查，确认不移位才交车。",
  },
  {
    question: "覆盖到哪些位置？",
    answer:
      "根据车型和座椅布局，通常覆盖主副驾、二排、过道、门槛和尾箱。具体覆盖范围需到店结合实车确认。",
  },
  {
    question: "怎么清洁维护？",
    answer:
      "日常吸尘即可应对灰尘和碎屑；表层污渍用湿布擦拭；需要深度清洁时可拆下冲洗，晾干后装回。",
  },
  {
    question: "材质和颜色怎么选？",
    answer:
      "常见颜色有米色、黑色、棕色、灰色，具体材质、颜色和层数以到店实物为准，会根据内饰搭配给出建议。",
  },
  {
    question: "安装需要多久？价格大概多少？",
    answer:
      "脚垫安装通常需要 2-4 小时，具体取决于车型、座椅布局、覆盖范围和层数。价格由这些因素共同决定，建议到店获取车型报价。",
  },
];

export const carMatProcess: readonly CarMatProcessStep[] = [
  {
    step: "01",
    title: "车型确认",
    description:
      "确认车型、年款、座椅布局、尾箱使用习惯和原车地毯状态。",
    deliverable: "车型适配确认单",
  },
  {
    step: "02",
    title: "方案选择",
    description:
      "结合内饰颜色、覆盖区域和日常使用场景，选择脚垫方案。",
    deliverable: "覆盖范围示意图",
  },
  {
    step: "03",
    title: "安装与安全检查",
    description:
      "按现场车型结构施工，重点检查踏板间隙、卡扣固定和滑轨活动区域。",
    deliverable: "安全检查记录",
  },
  {
    step: "04",
    title: "交付与清洁说明",
    description:
      "交付时说明清洁维护方式，并提醒后续使用中的注意事项。",
    deliverable: "维护说明卡",
  },
];
