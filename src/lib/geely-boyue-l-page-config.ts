import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { geelyFitment } from "./fitment/geely";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的吉利博越L能装哪些项目？",
    answer:
      "适配库收录博越L底盘护板（材质：碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm；年款2023-2025；排量或续航：2.0T；1.5T；1.5T/2.0T；保护位置：发动机、转向机；另有发动机+转向机、线路左、线路右、油箱、三元催化方案）；电动踏板（2023-2025.10前取信号方式线夹，2025.11后另核）；360软包脚垫（23款--，含油电混合不同版型）；平面尾箱垫（22款--，右边有音响/没有音响两种）；360全包尾箱（22款--，右边有音响/没有音响两种）。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改吉利博越L？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按年款（23款--）、动力（燃油/油电混合）与尾箱右侧有无音响逐项对表，确认后再施工。",
  },
  {
    question: "博越L加装底盘护板、电动踏板需要备案吗？",
    answer:
      "底盘护板、电动踏板属底盘防护与便利加装件；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "博越L适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，年款、材质与结构说明均为原文；2025.11前后电动踏板取信号方式有别，实际安装以门店现场检查为准。",
  },
];

export const geelyBoyueLPageConfig = buildModelPageConfig({
  brandSlug: "geely",
  brandName: "吉利",
  modelDisplay: "博越L",
  theme: "blue",
  fitment: geelyFitment,
  includeSections: ["博越L"],
  faq,
});
