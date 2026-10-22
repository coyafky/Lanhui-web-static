export interface IcarFaqItem {
  question: string;
  answer: string;
}

export const icarSeriesFaq: IcarFaqItem[] = [
  {
    question: "纯电 iCAR 装底盘护板有什么用？",
    answer:
      "纯电车型电池与电机都压在底盘上，走烂路容易托底或被石子飞溅。护板覆盖前电机、电池、后电机，防刮防撞，铝合金轻量不增加太多车重。",
  },
  {
    question: "铝镁合金和合金护板怎么选？",
    answer:
      "V23S、V27（两驱/四驱）用铝镁合金，轻、防锈、散热好；03、V23、V27 200km 版用合金，强度高、抗托底。常走烂路选合金，城里代步铝镁够用，到店按实车推荐。",
  },
  {
    question: "V27 为什么有油箱护板？",
    answer:
      "V27 是增程动力，除电机电池外还有发动机与油箱。200km 续航版护板五件套覆盖发动机、线束、电池、油箱、后电机，比纯电车型多两块关键部位。",
  },
  {
    question: "装护板会不会影响质保？",
    answer:
      "护板采用原车孔位安装，不切割不动结构件；新能源底盘施工由门店按标准流程操作。质保以品牌官方政策为准，施工前可到店沟通确认。",
  },
];

export interface IcarDouyinHighlight {
  iconName: string;
  label: string;
}

export const icarDouyinHighlights: IcarDouyinHighlight[] = [
  { iconName: "Zap", label: "纯电底盘护板安装实拍" },
  { iconName: "Fuel", label: "V27 增程五件套" },
  { iconName: "Battery", label: "方盒子 SUV 电池护板" },
];
