export interface CheryFaq {
  question: string;
  answer: string;
}

export const cherySeriesFaq: CheryFaq[] = [
  {
    question: "奇瑞底盘护板装什么材质？",
    answer:
      "有铝镁合金 2.0mm、锰钢 1.2mm、碳钢 1.5mm、塑钢 5.0mm、碳纤 5.0mm 几档。日常市区通勤选塑钢或碳纤，常走烂路、托底多的选铝镁或锰钢；具体按你的用车路况到店推荐。",
  },
  {
    question: "两件套、三件套、五件套有什么区别？",
    answer:
      "区别在保护部位的数量。两件套一般是发动机加油箱（或前电机加电池），三件套覆盖电机、电池、油箱，五件套在新能源车上把发动机/前电机、电池前、电池后、油箱、后电机都包住。车底盘关键件越多，越建议选件套多的。",
  },
  {
    question: "电动踏板怎么取信号？线夹和对插什么区别？",
    answer:
      "按年款区分：多数车型用线夹取开门信号，部分新款用对插，都不破线、不影响原车线路。专车专用、原厂安装位免打孔。装了之后是否影响质保，以门店和厂家说明为准。",
  },
  {
    question: "我的奇瑞车型能装吗？",
    answer:
      "奇瑞全系 28 款都覆盖：艾瑞泽 6 款、风云 6 款、瑞虎 11 款、经典轿车 3 款、新能源 2 款。底盘护板全系可装，电动踏板支持 19 款 SUV。具体年款段、排量续航和拆装要点，到店按实车确认。",
  },
];

export interface CheryDouyinHighlight {
  iconName: string;
  label: string;
}

export const cheryDouyinHighlights: CheryDouyinHighlight[] = [
  { iconName: "Shield", label: "奇瑞底盘护板安装实拍" },
  { iconName: "Armchair", label: "电动踏板上车" },
  { iconName: "Ruler", label: "专车开模细节" },
];
