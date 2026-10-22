import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { fangchengbaoFitment } from "./fitment/fangchengbao";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的方程豹豹8能装哪些项目？",
    answer:
      "适配库收录底盘护板与小桌板。底盘护板原文：铝镁合金5.0mm，年款2025，保护位置水箱、发动机、前电机、电池、油箱、后电机；2.0T续航100；六件套后电机与豹8豹5通用；另有锰钢六件套（前水箱、发动机、线束+转向机、电池、油箱、后电机；线束+转向机5mm）。小桌板：黑色皮质（同色系），真皮+木纹饰板，后排双折叠桌板，不用时收起不占空间。未收录的配置（标准续航、26款闪充版210续航等细分版本）以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装方程豹豹8？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款、续航版本（2.0T续航100/闪充版210）与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "方程豹豹8加装底盘护板、小桌板需要备案吗？",
    answer:
      "底盘护板、小桌板属车内防护与加装件，不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "豹8 适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-08-30 / 2026-09-03 / 2026-09-08），材质、年款、续航与保护位置均为原文，实际安装以门店现场检查为准。",
  },
];

export const fangchengbaoBao8PageConfig = buildModelPageConfig({
  brandSlug: "fangchengbao",
  brandName: "方程豹",
  modelDisplay: "豹8",
  theme: "green",
  fitment: fangchengbaoFitment,
  includeSections: ["豹8"],
  faq,
});
