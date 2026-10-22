/**
 * 马自达品牌一级页数据（2026-10-05 新增，参照 voyah-series-services 模式）
 *
 * 定位：马自达全系底盘保护与舒适升级服务入口（顺德大良）。
 * 品牌页承载 12 车型分组速览 + 2 类项目功能特性 + 车型适配明细；
 * 车型分组数据在 src/lib/mazda-model-groups.ts，项目数据在 src/lib/mazda-all-models-products.ts。
 *
 * 结构：
 *   - mazdaSeriesFaq           5 条 FAQ（覆盖车型 / 护板材质 / 踏板 / EZ-60 / 拆板）
 *   - mazdaDouyinHighlights    抖音案例入口 3 项
 */

// ---- 抖音案例入口 ----

export type MazdaDouyinHighlight = {
  iconName: string;
  label: string;
};

export const mazdaDouyinHighlights: readonly MazdaDouyinHighlight[] = [
  { iconName: "Play", label: "马自达护板施工过程实拍" },
  { iconName: "Layers", label: "底盘护板材质对比" },
  { iconName: "Wrench", label: "EZ-60 新能源套装拆装" },
] as const;

// ---- FAQ ----

export type MazdaSeriesFaqItem = {
  question: string;
  answer: string;
};

export const mazdaSeriesFaq: readonly MazdaSeriesFaqItem[] = [
  {
    question: "马自达哪些车型有适配件数据？",
    answer:
      "本页适装表覆盖 12 款马自达车型：轿车 5 款（马自达3、昂克赛拉、马自达6、阿特兹、睿翼）、MPV 1 款（马自达8）、SUV 6 款（CX-4、CX-5、CX-7、CX-8、CX-30、EZ-60）。底盘护板全系可装。拿不准的话把车型、年款、动力版本发来，先筛一遍再约到店。",
  },
  {
    question: "底盘护板材质怎么选？",
    answer:
      "碳纤 5.0mm 轻、塑钢 5.0mm 韧性好、锰钢 1.2mm 抗刮、碳钢 1.5mm 强度高、铝镁合金 2.0mm 轻量兼顾强度。日常城市代步选塑钢或碳纤，常走烂路选锰钢或碳钢，装前到店按实车路况确认。",
  },
  {
    question: "电动踏板哪些车能装？",
    answer:
      "目前只有 CX-5 有适配记录（2017 款起），原厂对插取电，不动原车线路。其他马自达车型暂没有踏板数据，想装的话到店先做结构核对。",
  },
  {
    question: "EZ-60 增程和纯电的护板一样吗？",
    answer:
      "不一样。增程版（200 续航）是五件套，覆盖前电机、线束、电池、油箱、后电机；纯电版是四件套，且 200 续航与 EV600 续航 MAX 的覆盖件不同（一个按燃油结构表述、一个按前/后电池分）。装前先确认动力类型和续航版本。",
  },
  {
    question: "装护板要拆原车板吗？",
    answer:
      "部分车型要：昂克赛拉、阿特兹、CX-4、CX-5 都要拆原车板再装；昂克赛拉和 CX-30 版型通用。装前到店按实车确认，避免影响原车部件。",
  },
] as const;
