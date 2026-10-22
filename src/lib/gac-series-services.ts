export interface GacFaqItem {
  question: string;
  answer: string;
}

export const gacSeriesFaq: GacFaqItem[] = [
  {
    question: "底盘护板选哪种材质好？",
    answer:
      "看用车场景：常走烂路选锰钢/碳钢，抗托底；城里代步选塑钢/铝镁合金，轻量防锈；碳纤偏竞技取向。具体到店看实车推荐档位。",
  },
  {
    question: "电动踏板会不会伤原车线路？",
    answer:
      "不会。对插或线夹取电，不动原车线路、不破线；装完有单独的取电说明，保修也走正常流程。",
  },
  {
    question: "小桌板装完占地方吗？",
    answer:
      "不占。装在前排座椅靠背后方，展开即用、收起贴合椅背；带杯架、配金属饰条，皮面与原车内饰同色系。",
  },
  {
    question: "吸顶电视哪些车型能装？",
    answer:
      "专车专用：M8宗师/24款新大师/E9、E8 可装；顶配带电视车型、E8 低配单天窗车型不可装。15.6 寸屏，内置 4G 热点共享。",
  },
  {
    question: "脚垫尾箱怎么选？",
    answer:
      "按年款和座次对号入座（做 5/6/7 座），副驾鼓包、二排轨道/杯架等实车特征到店核对；型号编号与库存以门店系统为准。",
  },
  {
    question: "供应商适配库里记录了哪些传祺车型？",
    answer:
      "适配库收录影豹、影酷、E8、E9、ES9、GA3、GA3S、GA3S新能源、GA4、GA4 Plus、GA5、GA6、GA8、GE3、GS3、GS3 POWER、GS3影速、GS4、GS4 Coupe、GS4 PLUS、GS5、GS7、GS8、GS8S、M6、M6 Pro、M8、向往M8、向往S7、向往S9 的记录：底盘护板覆盖上述多数车型，E8 另有吸顶电视，GA5/GA8/向往S7/向往S9 另有360软包脚垫；年款、座次与材质档位为适配库原文。Aion/埃安/昊铂等他品牌节与名单外车型未收录，具体以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里可以装传祺护板、小桌板和吸顶电视？",
    answer:
      "蓝辉轻改提供传祺底盘护板、电动踏板、小桌板、吸顶电视、脚垫尾箱施工，门店位于佛山顺德大良，可到店评估并安排施工。",
  },
  {
    question: "传祺改装项目需要备案吗？",
    answer:
      "涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界；页面不做备案承诺。",
  },
];

export interface GacDouyinHighlight {
  iconName: string;
  label: string;
}

export const gacDouyinHighlights: GacDouyinHighlight[] = [
  { iconName: "Play", label: "MPV 吸顶电视安装实拍" },
  { iconName: "Layers", label: "底盘护板材质对比" },
  { iconName: "Wrench", label: "新能源套装拆装" },
];
