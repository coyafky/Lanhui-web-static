import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { cadillacFitment } from "./fitment/cadillac";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的凯迪拉克CT5能装哪些项目？",
    answer:
      "适配库收录CT5的底盘护板、360软包脚垫、平面尾箱垫。底盘护板原文：运动版，材质碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm，年款2020、2024，保护位置水箱、变速箱、发动机，排量或续航2.0T，注意套件产品、禁止单发。360软包脚垫：20款--，规格4门5座/3片。平面尾箱垫：20款--，规格4门5座。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改凯迪拉克CT5？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "凯迪拉克CT5加装这些项目需要备案吗？",
    answer:
      "底盘护板、脚垫、尾箱垫属车内防护与底盘加装件，不涉及外观变更；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "CT5适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-08-30、2026-09-07），材质与规格均为原文，实际安装以门店现场检查为准；适配库未收录的配置以门店现场检查为准。",
  },
];

export const cadillacCt5PageConfig = buildModelPageConfig({
  brandSlug: "cadillac",
  brandName: "凯迪拉克",
  modelDisplay: "CT5",
  theme: "blue",
  fitment: cadillacFitment,
  includeSections: ["CT5"],
  faq,
});
