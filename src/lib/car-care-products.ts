/**
 * 洗美养护专题静态数据。
 */

export type CarCareScenario = {
  id: string;
  icon: "Car" | "Droplets" | "CircleDot";
  title: string;
  description: string;
};

export type CarCareServiceItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: readonly string[];
};

export type CarCareServiceDetail = CarCareServiceItem & {
  suitableFor: string;
  timeRange: string;
  priceNote: string;
};

export type CarCareProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type CarCareFaq = {
  question: string;
  answer: string;
};

export type CarCareDouyinHighlight = {
  iconName: string;
  label: string;
};

export const carCareScenarios: readonly CarCareScenario[] = [
  {
    id: "daily-dust",
    icon: "Car",
    title: "日常浮尘与轻度泥点",
    description:
      "车辆以日常通勤为主，车身有浮尘、轻度泥点或雨后水渍时，普洗可以完成基础外观清洁。",
  },
  {
    id: "detail-buildup",
    icon: "Droplets",
    title: "门缝与边角积污",
    description:
      "门缝、边角和玻璃等位置积污较明显时，精洗会在普洗基础上增加更细致的分区处理。",
  },
  {
    id: "wheel-buildup",
    icon: "CircleDot",
    title: "轮毂发黑与附着物",
    description:
      "轮毂有明显刹车粉尘、铁粉或柏油附着时，可单独安排轮毂定向清洗。",
  },
] as const;

export const carCareServiceDetails: readonly CarCareServiceDetail[] = [
  {
    id: "basic-wash",
    title: "普洗",
    subtitle: "BASIC WASH",
    description:
      "面向日常通勤车辆的基础外观清洁，覆盖车身冲洗、泡沫清洁、擦干与基础轮胎整理。",
    suitableFor: "车身有日常浮尘、轻度泥点或雨后水渍，希望完成常规外观清洁",
    timeRange: "预计时长：接车沟通后确认",
    priceNote: "费用：施工前确认",
    highlights: [
      "车身预洗与泡沫清洁",
      "漆面与玻璃外侧清洗",
      "车身擦干与缝隙吹水",
      "轮胎基础清洁",
    ],
  },
  {
    id: "detail-wash",
    title: "精洗",
    subtitle: "DETAIL WASH",
    description:
      "在普洗基础上，更细致地处理门缝、边角、玻璃和轮毂等容易积污的位置。具体清洁范围会结合车况确认。",
    suitableFor: "车辆较长时间未清洁，门缝和边角积灰明显，或希望进行更完整的外观清洁",
    timeRange: "预计时长：约 1.5 至 2.5 小时",
    priceNote: "费用：施工前确认",
    highlights: [
      "预洗与车身分区清洁",
      "门缝和边角细节处理",
      "玻璃外侧与轮毂清洁",
      "清洁完成后共同确认",
    ],
  },
  {
    id: "targeted-wheel-cleaning",
    title: "轮毂定向清洗",
    subtitle: "TARGETED WHEEL CLEANING",
    description:
      "针对轮毂上的刹车粉尘、铁粉和柏油等附着物进行清洁。服务前会先检查轮毂表面工艺和脏污情况。",
    suitableFor: "轮毂明显发黑，辐条或螺栓位积污较多，常规清洗后仍有附着物",
    timeRange: "预计时长：约 0.5 至 1 小时",
    priceNote: "费用：施工前确认",
    highlights: [
      "轮毂表面与脏污检查",
      "轮辐和螺栓位分区清洁",
      "针对性处理铁粉与柏油附着物",
      "完成后共同查看清洁状态",
    ],
  },
] as const;

export const carCareProcess: readonly CarCareProcessStep[] = [
  {
    step: "01",
    title: "接车沟通",
    description:
      "了解您希望改善的位置，并一起查看车身、边角和轮毂的当前状态。",
  },
  {
    step: "02",
    title: "方案确认",
    description:
      "说明本次服务范围、预计时间和费用，不适合或没有必要增加的项目会提前说明。",
  },
  {
    step: "03",
    title: "按项清洁",
    description:
      "按照确认的普洗、精洗或轮毂定向清洗内容，完成对应区域的清洁。",
  },
  {
    step: "04",
    title: "完成确认",
    description:
      "清洁完成后与您一起查看本次服务区域，并说明后续日常维护建议。",
  },
] as const;

export const carCareFaqs: readonly CarCareFaq[] = [
  {
    question: "普洗和精洗有什么区别？",
    answer:
      "普洗以日常外观清洁为主，适合浮尘、轻度泥点和常规车况。精洗会在普洗基础上，更细致地处理门缝、边角、玻璃外侧和轮毂等容易积污的位置。具体范围会在服务前确认。",
  },
  {
    question: "哪些情况适合轮毂定向清洗？",
    answer:
      "轮毂明显发黑，或辐条、螺栓位有较多刹车粉尘、铁粉和柏油附着时，可以单独安排轮毂定向清洗。我们会先查看轮毂表面工艺和脏污情况，再说明适合的处理方式。",
  },
  {
    question: "清洁大约需要多长时间？",
    answer:
      "时间会受到车型大小、车况和服务范围影响。精洗通常约 1.5 至 2.5 小时，轮毂定向清洗通常约 0.5 至 1 小时；普洗时长会在接车沟通后确认。",
  },
  {
    question: "服务费用如何确认？",
    answer:
      "接车沟通时会结合车型、车况和本次服务范围说明费用，双方确认后再开始清洁。没有必要增加的项目，也会如实告知。",
  },
] as const;

export const carCareDouyinHighlights: readonly CarCareDouyinHighlight[] = [
  { iconName: "Droplets", label: "普洗过程" },
  { iconName: "Play", label: "精洗细节" },
  { iconName: "Video", label: "轮毂清洁" },
] as const;
