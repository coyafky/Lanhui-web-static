export interface ShangjieFaqItem {
  question: string;
  answer: string;
}

export const shangjieSeriesFaq: ShangjieFaqItem[] = [
  {
    question: "尚界底盘护板装几件套、护哪些部位？",
    answer:
      "按车型与续航版本分四件套/五件套。纯电车型五件套护前电机、电池前、电池后、后电机、储气罐；H5 200km 增程版五件套另护发动机、线束、油箱、后电机。四件套多用于纯电版，到店按实车确认。",
  },
  {
    question: "锰钢和铝镁合金怎么选？",
    answer:
      "锰钢 1.2mm 抗托底，常走烂路选它；铝镁合金 2.0mm 轻量、防锈、散热好，城里代步够用；部分车型另有合金档。材质到店按车型与用车路况推荐。",
  },
  {
    question: "后排娱乐屏哪些车型能装？",
    answer:
      "鸿蒙智行系列专用，适配后排带 LINK 接口的车型：尚界 H5/Z7T，问界 M7/M8/M9、享界 S9/S9T、智界 R7/新S7、尊界 S800 等。13.3 寸超大屏、多屏互联互控、1 秒安装，施工前到店确认接口。",
  },
  {
    question: "小桌板会不会影响后排空间？",
    answer:
      "小桌板装在前排座椅靠背后方，收起时贴合椅背，基本不占后排腿部空间；展开即用，适合移动办公、途中用餐、带娃。安装位置到店按实车确认。",
  },
  {
    question: "我的 H5 / Z7 / Z7T 在适配库收录了哪些项目？",
    answer:
      "适配库收录 H5、Z7、Z7T、H5-200续航、H5纯电-535续航、Z7纯电Max-732续航六个车型节：H5 节有底盘护板（锰钢1.2mm；铝镁合金2.0mm，2025 年款，五件套，纯电）与小桌板（米色皮质带杯架，小桌板真皮+金属饰条）；Z7、Z7T 节为底盘护板五件套通用（锰钢1.2mm；铝镁合金2.0mm，2026 年款）；H5-200续航、H5纯电-535续航、Z7纯电Max-732续航三个细分节各有底盘护板记录（2026-09-08，合金类型原始资料未注明）。后排娱乐屏收录在鸿蒙智行系列通用节。未收录项目具体以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装尚界 H5 / Z7 / Z7T 适配件？",
    answer:
      "蓝辉轻改提供尚界 H5 / Z7 / Z7T 底盘护板、小桌板等专车适配件施工，蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。",
  },
  {
    question: "尚界改装项目需要备案吗？",
    answer:
      "涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界；页面不做备案承诺。",
  },
];

export interface ShangjieDouyinHighlight {
  iconName: string;
  label: string;
}

export const shangjieDouyinHighlights: ShangjieDouyinHighlight[] = [
  { iconName: "Shield", label: "鸿蒙智行底盘护板安装实拍" },
  { iconName: "Monitor", label: "后排娱乐屏上车" },
  { iconName: "Lamp", label: "小桌板实装" },
];
