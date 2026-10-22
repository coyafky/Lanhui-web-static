/**
 * 起亚品牌一级页数据（2026-10-06 新增，参照 toyota/hongqi/volkswagen-series-services 模式）
 *
 * 定位：起亚全系底盘保护与内饰升级服务入口（顺德大良）。
 * 品牌页承载 30 车型分组速览 + 6 类适配件功能特性 + 主力车型入口；
 * 车型分组数据在 src/lib/kia-model-groups.ts，项目数据在 src/lib/kia-all-models-products.ts。
 *
 * 结构：
 *   - kiaSeriesFaq           5 条 FAQ（覆盖车型范围 / 护板材质 / 踏板 / 软包脚垫 / 小桌板与尾箱）
 *   - kiaDouyinHighlights    抖音案例入口 3 项
 */

// ---- 抖音案例入口 ----

export type KiaDouyinHighlight = {
  iconName: string;
  label: string;
};

export const kiaDouyinHighlights: readonly KiaDouyinHighlight[] = [
  { iconName: "Play", label: "起亚 SUV 底盘护板施工实拍" },
  { iconName: "Layers", label: "360 软包脚垫嵌缝版型细节" },
  { iconName: "Wrench", label: "嘉华小桌板与电动踏板装车" },
] as const;

// ---- FAQ ----

export type KiaSeriesFaqItem = {
  question: string;
  answer: string;
};

export const kiaSeriesFaq: readonly KiaSeriesFaqItem[] = [
  {
    question: "起亚哪些车型有适配件数据？",
    answer:
      "本页适装表覆盖 30 款起亚车型，从 K2、K3、K5 到智跑、狮铂拓界、嘉华都有。单车型记录都不算多，全部在这页直接看项目说明；拿不准的话把车型、年款、动力版本发来，先筛一遍再约到店。",
  },
  {
    question: "底盘护板材质怎么选？",
    answer:
      "锰钢 1.2mm 硬，跑烂路选它；碳钢 1.5mm 均衡；铝镁合金 2.0mm 轻；塑钢 5.0mm 耐腐蚀；碳纤 5.0mm 最轻。城市代步铝镁合金够用，经常走非铺装路面优先锰钢或碳钢。",
  },
  {
    question: "电动踏板哪些车型能装？",
    answer:
      "覆盖狮铂拓界、智跑、嘉华、赛图斯 4 款。取信号方式都是线夹，不动原车线路；装前按实车确认门体结构和离地间隙。",
  },
  {
    question: "360 软包脚垫和普通脚垫差在哪？",
    answer:
      "软包是嵌进座椅和门槛的缝里的，不翘边不留缝，脏了直接擦，还能隔音；普通脚垫就是铺在上面。像智跑、K5 有安全带胶壳平凸的版本差异，到店按实车核对再下单。",
  },
  {
    question: "小桌板和尾箱垫哪些车有？",
    answer:
      "小桌板目前起亚这边只有嘉华，装前排座椅靠背后，展开即用、带杯架。尾箱垫分平面和 360 全包：平面整块铺底够用，要三面全包防刮、能拆洗就选全包，部分车型不带侧包。",
  },
] as const;
