export interface GreatWallFaq {
  question: string;
  answer: string;
}

export const greatWallSeriesFaq: GreatWallFaq[] = [
  {
    question: "长城底盘护板装什么材质？",
    answer:
      "有铝镁合金 2.0mm、锰钢 1.2mm、碳钢 1.5mm、塑钢 5.0mm、碳纤 5.0mm 几档。常走烂路、托底多的皮卡选铝镁或锰钢，日常代步选塑钢或碳纤；具体按你的用车路况到店推荐。",
  },
  {
    question: "三件套、四件套、六件套有什么区别？",
    answer:
      "区别在保护部位的数量。风骏四驱是三件套（水箱/发动机/变速箱），炮是四件套（发动机/变速箱/水箱/分动箱），新能源 H10 是六件套（水箱/发动机/电池/线束/油箱/后电机）。越野和新能源车型底盘关键件更多，件套也更多。",
  },
  {
    question: "长城炮电动踏板怎么取信号？",
    answer:
      "炮 2019+ 用线夹取开门信号，不破线、不影响原车线路。专车专用、原厂安装位免打孔。装了之后是否影响质保，以门店和厂家说明为准。",
  },
  {
    question: "我的长城车型能装吗？",
    answer:
      "长城全系 11 款都覆盖：皮卡 4 款（风骏6/风骏7/金刚炮/炮）、轿车 2 款（腾翼C30/C50）、小型车 4 款（炫丽/C20R/M2/M4）、新能源 1 款（H10）。底盘护板全系可装，电动踏板目前支持长城炮。具体年款段、排量续航和拆装要点，到店按实车确认。",
  },
];

export interface GreatWallDouyinHighlight {
  iconName: string;
  label: string;
}

export const greatWallDouyinHighlights: GreatWallDouyinHighlight[] = [
  { iconName: "Shield", label: "长城底盘护板安装实拍" },
  { iconName: "Armchair", label: "电动踏板上车" },
  { iconName: "Ruler", label: "专车开模细节" },
];
