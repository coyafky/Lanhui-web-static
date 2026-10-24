/**
 * 大众品牌一级页数据（2026-10-05 新增，参照 toyota/hongqi-series-services 模式）
 *
 * 定位：大众全系底盘保护与上下车升级服务入口（顺德大良）。
 * 品牌页承载 42 车型分组速览 + 2 类适配件功能特性 + 主力车型入口；
 * 车型分组数据在 src/lib/volkswagen-model-groups.ts，项目数据在 src/lib/volkswagen-all-models-products.ts。
 *
 * 结构：
 *   - volkswagenSeriesFaq           8 条 FAQ（覆盖 / 护板材质 / 踏板 / 原车线路 / 途锐单件 / 适配库记录 / 本地门店 / 备案）
 *   - volkswagenDouyinHighlights    抖音案例入口 3 项
 */

// ---- 抖音案例入口 ----

export type VolkswagenDouyinHighlight = {
  iconName: string;
  label: string;
};

export const volkswagenDouyinHighlights: readonly VolkswagenDouyinHighlight[] = [
  { iconName: "Play", label: "大众 SUV 底盘护板施工实拍" },
  { iconName: "Layers", label: "电动踏板安装与取信号细节" },
  { iconName: "Wrench", label: "途锐差速器护板装车对比" },
] as const;

// ---- FAQ ----

export type VolkswagenSeriesFaqItem = {
  question: string;
  answer: string;
};

export const volkswagenSeriesFaq: readonly VolkswagenSeriesFaqItem[] = [
  {
    question: "大众 42 款车型都有适配件数据吗？",
    answer:
      "本页适装表覆盖 42 款大众车型（含进口途观、夏朗、R36、ID.ERA 9X 等）。单车型记录都不算多，全部在这页直接看项目说明；拿不准的话把车型、年款、动力版本发来，先筛一遍再约到店。",
  },
  {
    question: "底盘护板材质怎么选？",
    answer:
      "锰钢 1.2mm 侧重刚性；碳钢 1.5mm 可作为均衡选择；铝镁合金 2.0mm 侧重轻量化；塑钢 5.0mm 关注耐腐蚀表现；碳纤 5.0mm 需核对具体结构与适配。材质选择还应结合车型、路况与安装位置。",
  },
  {
    question: "电动踏板哪些车型能装？",
    answer:
      "覆盖途锐、途昂、途观系、探岳、途岳、威然、揽巡、揽境 9 款。取信号方式都是线夹，不动原车线路；装前按实车确认门体结构和离地间隙。",
  },
  {
    question: "装护板要动原车线路吗？",
    answer:
      "不用。只拆装原车护板，部分车型（迈腾、宝来、凌渡、途观、夏朗等）装前要拆原车板，不涉及线路改动，不影响质保线路部分。",
  },
  {
    question: "途锐差速器和油箱护板能单装吗？",
    answer:
      "能。途锐双油箱版本油箱护板单独装，差速器护板也单独装，都是铝镁合金材质。原车是单油箱还是双油箱，到店举起来看一眼就知道。",
  },
  {
    question: "我的大众车型在供应商适配库里记录了哪些项目？",
    answer:
      "适配库收录宝来、高尔夫、辉昂、甲壳虫、捷达、开迪、揽巡、朗境、朗行、朗逸、凌渡、迈腾、帕萨特、桑塔纳、尚酷、速腾、探歌、探影、探岳、途安、途昂、途观、途铠、途锐、途岳、威然、蔚揽、蔚领、夏朗、CC、ID.ERA 9X、Polo、R36、揽境 34 个车型节的底盘护板记录（途锐另含差速器护板、油箱护板方案，揽境为电动踏板）；材质分锰钢1.2mm、碳钢1.5mm、铝镁合金2.0mm、塑钢5.0mm、碳纤5.0mm，年款与排量为适配库原文。名单外车型未收录，具体以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里可以装大众底盘护板和电动踏板？",
    answer:
      "蓝辉轻改提供大众底盘护板、电动踏板施工，门店位于佛山顺德大良，可到店评估并安排施工。",
  },
  {
    question: "大众护板、踏板项目需要备案吗？",
    answer:
      "底盘护板、电动踏板不改外观标识；涉及外观变更的项目（如改色、轮毂、包围）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
] as const;
