export interface BmwFaqItem {
  question: string;
  answer: string;
}

export const bmwSeriesFaq: BmwFaqItem[] = [
  {
    question: "360软包脚垫和普通脚垫有什么区别？",
    answer: "360软包脚垫边角塞进原车绒面与门槛缝隙，360° 贴合不翘边，灰尘杂物不落进缝隙；普通脚垫只铺在表面，边缘容易移位。专车开模，油门、刹车位置精准避让，不影响踏板操作。",
  },
  {
    question: "平面尾箱垫和360全包尾箱怎么选？",
    answer: "日常装货、常放行李箱，平面尾箱垫够用，便宜好打理；经常放液体、细碎杂物，选360全包尾箱，侧面后壁全覆盖，防污渍渗进绒面、防杂物滚落缝隙。两款都专车开模。",
  },
  {
    question: "我的宝马车型年份能装吗？",
    answer: "1系~8系、i3/i4/i5/i7/iX/iX1/iX3、M2/M3/M4/M5/M8/XM、X1~X7、Z4 全系 29 款覆盖，多数车系按年款段分版本（如 3系 13款--20款、X5 19款--21款）。到店按实车年款与车身形式确认。",
  },
  {
    question: "脚垫/尾箱垫到店装要多久？",
    answer: "360软包脚垫需拆装座椅边条塞边，一般 1 小时左右；平面尾箱垫和 360全包尾箱 20~40 分钟。具体以门店工位排期为准。",
  },
  {
    question: "我的宝马车型在供应商适配库里记录了哪些项目？",
    answer: "适配库收录 1系~8系、i3/i4/i5/i7/iX/iX1/iX3、M2/M3/M4/M5/M8/XM、X1~X7、Z4 共 29 款官方车型的 360软包脚垫、平面尾箱垫、360全包尾箱 记录，按年款段（如 3系 13款--20款、X5 08款--18款）、高绒布/矮绒布档位、削边工艺、右呔版等分方案，门座、片套与年款为适配库原文。未收录的车型年款，具体以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里可以装宝马脚垫和尾箱垫？",
    answer: "蓝辉轻改提供宝马全系脚垫、尾箱垫施工，门店位于佛山顺德大良，可到店评估并安排施工。",
  },
  {
    question: "宝马脚垫、尾箱垫项目需要备案吗？",
    answer: "脚垫、尾箱垫属车内铺陈，不涉及外观变更；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
];

export interface BmwDouyinHighlight {
  iconName: string;
  label: string;
}

export const bmwDouyinHighlights: BmwDouyinHighlight[] = [
  { iconName: "Armchair", label: "宝马 360 软包脚垫安装实拍" },
  { iconName: "Boxes", label: "360全包尾箱上车" },
  { iconName: "Ruler", label: "专车开模细节" },
];