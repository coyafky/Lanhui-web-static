export interface NissanFaqItem {
  question: string;
  answer: string;
}

export const nissanSeriesFaq: NissanFaqItem[] = [
  {
    question: "底盘护板选哪种材质好？",
    answer:
      "看用车场景：常走烂路选锰钢/碳钢，抗托底；城里代步选塑钢/铝镁合金，轻量防锈；碳纤偏竞技取向。具体到店看实车推荐档位。",
  },
  {
    question: "新能源车型护板装几件套？",
    answer:
      "按车型分：N6 三件套（电池/前电机/油箱）、N7 三件套（前电机/前电池/后电池）、NX8 四件套+支架（前/后电机+前/后电池）；续航版本不同件数可能不同，到店确认。",
  },
  {
    question: "电动踏板会不会伤原车线路？",
    answer:
      "不会。对插或线夹取电，不动原车线路、不破线；奇骏、途乐、途达、探陆等按年款对插/线夹分版。",
  },
  {
    question: "脚垫尾箱怎么选、怎么分版？",
    answer:
      "按年款对号入座；轩逸、奇骏、逍客等按出风口、安全带形式、滑道、置物盒、扶手箱等实车特征分版，探陆按 6/7 座与片数分档；到店核对。",
  },
  {
    question: "锻造轮毂适配哪些车？",
    answer:
      "PCD 6×139.7 越野孔距，20×8.5 / 22×9 两规格，适配途乐/纳瓦拉等车型；轮毂 ET、CB 与原车数据需到店核对。",
  },
];

export interface NissanDouyinHighlight {
  iconName: string;
  label: string;
}

export const nissanDouyinHighlights: NissanDouyinHighlight[] = [
  { iconName: "Wrench", label: "日产 SUV 底盘护板安装实拍" },
  { iconName: "Truck", label: "越野轮毂上车效果" },
  { iconName: "Battery", label: "新能源套装拆装" },
];
