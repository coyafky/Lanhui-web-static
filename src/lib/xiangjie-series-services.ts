export interface XiangjieFaqItem {
  question: string;
  answer: string;
}

export const xiangjieSeriesFaq: XiangjieFaqItem[] = [
  {
    question: "享界底盘护板装几件套、护哪些部位？",
    answer:
      "按动力与续航版本分四件套/五件套。增程车型五件套护发动机、电池前、电池后、油箱、后电机；纯电车型四件套/五件套护前电机、电池、后电机（S9T 纯电另护储气罐）。到店按实车确认。",
  },
  {
    question: "锰钢和铝镁合金怎么选？",
    answer:
      "锰钢 1.2mm 抗托底，常走烂路选它；铝镁合金 2.0mm 轻量、防锈、散热好，城里代步够用；部分版本另有合金档。材质到店按车型与用车路况推荐。",
  },
  {
    question: "后排娱乐屏哪些车型能装？",
    answer:
      "鸿蒙智行系列专用，适配后排带 LINK 接口的车型：享界 S9/S9T，问界 M7/M8/M9、智界 R7/新S7、尊界 S800、尚界 H5/Z7T 等。13.3 寸超大屏、多屏互联互控、1 秒安装，施工前到店确认接口。",
  },
  {
    question: "增程和纯电的护板有什么不一样？",
    answer:
      "增程车型底盘有发动机与油箱，护板五件套额外覆盖这两处；纯电车型没有发动机油箱，护板集中在电机与电池。S9 增程/纯电分版，S9T 增程 251/354、纯电 801/701 各有对应件套，到店按实车确认。",
  },
  {
    question: "我的 S9 / S9T 在适配库收录了哪些项目？",
    answer:
      "适配库收录 S9、S9T、S9增程、S9纯电四个车型节，项目为底盘护板：S9、S9T 节记录锰钢1.2mm；铝镁合金2.0mm（2025 年款，五件套），S9 为增程式，保护发动机、电池前、电池后、油箱、后电机；S9T 增程式与纯电都有记录，纯电续航 801/701 另护前电机、储气罐；S9增程为五件套、S9纯电为四件套（2026-09-08 记录，合金类型原始资料未注明）。后排娱乐屏收录在鸿蒙智行系列通用节，不单列到 S9/S9T。未收录项目具体以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装享界 S9 / S9T 底盘护板？",
    answer:
      "蓝辉轻改提供享界 S9 / S9T 底盘护板等专车适配件施工，蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。",
  },
  {
    question: "享界改装项目需要备案吗？",
    answer:
      "涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界；页面不做备案承诺。",
  },
];

export interface XiangjieDouyinHighlight {
  iconName: string;
  label: string;
}

export const xiangjieDouyinHighlights: XiangjieDouyinHighlight[] = [
  { iconName: "Shield", label: "鸿蒙智行底盘护板安装实拍" },
  { iconName: "Monitor", label: "后排娱乐屏上车" },
  { iconName: "Fuel", label: "S9 增程五件套" },
];
