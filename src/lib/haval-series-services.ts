export interface HavalFaqItem {
  question: string;
  answer: string;
}

export const havalSeriesFaq: HavalFaqItem[] = [
  {
    question: "底盘护板选哪种材质好？",
    answer:
      "看用车场景：常走烂路选锰钢/碳钢，抗托底；城里代步选塑钢/铝镁合金，轻量防锈；碳纤偏竞技取向。具体到店看实车推荐档位。",
  },
  {
    question: "Hi4 新能源车型护板装几件套？",
    answer:
      "按车型分：枭龙四件套（发动机前/后+电池+油管）、枭龙MAX 五件套/六件套、猛龙六件套、大狗PLUS 六件套（与 23 款猛龙通用）、H10 七件套（含前水箱/油路/后电机）；续航版本不同件数可能不同，到店确认。",
  },
  {
    question: "电动踏板会不会伤原车线路？",
    answer:
      "不会。对插或线夹取电，不动原车线路、不破线；H6、H9、M6、猛龙等按年款对插/线夹分版。",
  },
  {
    question: "脚垫怎么选、怎么分版？",
    answer:
      "按年款对号入座；H6、大狗、酷狗、神兽等按过桥高低（平/高/凸）、出风口、座椅绒布或胶壳、红标/蓝标、座次等实车特征分版，H9 按 5 座/7 座做 5 座/7 座做 7 座分档；到店核对。",
  },
  {
    question: "哈弗 H6/H9 为什么明细特别多？",
    answer:
      "这两款车型版本跨度大（H6 有运动版/经典版/第三代/国潮/COUPE，H9 有 5 座/7 座多代），脚垫尾箱按版型与座次分档，页内已压缩合并展示；具体到店按实车确认。",
  },
  {
    question: "我的哈弗车型在适配库收录了哪些项目？",
    answer:
      "适配库按 19 个车型节记录：赤兔、初恋、大狗、酷狗、猛龙、神兽、枭龙、F5、F7、H1、H2、H4、H5、H6、H7、H9、M6、H8、H10。底盘护板覆盖上述多数车型，H6 护板记录碳纤5.0mm/塑钢5.0mm/锰钢1.2mm/碳钢1.5mm/铝镁合金2.0mm（2011-2025 多代年款），大狗护板有锰钢1.2mm/碳钢1.5mm/铝镁合金2.0mm（2020-2026），H9 为锰钢1.2mm/铝镁合金2.0mm/铝镁合金5.0mm（2024 五件套）；电动踏板收录于赤兔、初恋、大狗、酷狗、猛龙、神兽、枭龙、F5、F7、H6、H9、M6，按年款对插或线夹取电；360软包脚垫、平面尾箱垫、360全包尾箱按年款与座次分版。官方名单中 H2S、H6L、H6S、F7X、大狗PLUS、枭龙MAX、猛龙PLUS 在适配库无对应节，未收录项目具体以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装哈弗适配件？",
    answer:
      "蓝辉轻改提供哈弗 H6、H9、大狗、猛龙等车型底盘护板、脚垫、尾箱垫、电动踏板施工，蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。",
  },
  {
    question: "哈弗改装项目需要备案吗？",
    answer:
      "涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界；页面不做备案承诺。",
  },
];

export interface HavalDouyinHighlight {
  iconName: string;
  label: string;
}

export const havalDouyinHighlights: HavalDouyinHighlight[] = [
  { iconName: "Wrench", label: "哈弗底盘护板安装实拍" },
  { iconName: "Truck", label: "大狗 H9 越野护板套装" },
  { iconName: "Battery", label: "新能源 Hi4 套装拆装" },
];
