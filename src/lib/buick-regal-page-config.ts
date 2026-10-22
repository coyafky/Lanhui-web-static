import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { buickFitment } from "./fitment/buick";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的别克君威能装哪些项目？",
    answer:
      "适配库收录君威底盘护板（GS；材质：碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm；年款2009-2016；2017-2021；2020-2023；2022-2024；保护位置：发动机、线槽；排量或续航：1.5T/2.0T、1.6L/2.0L/2.0T/2.4L；注意：要拆掉原车螺丝和卡扣；版型通用）；360软包脚垫（4门5座/3片，02款-08款、09款--16款、17款--24款）；平面尾箱垫（4门5座，09款--16款、17款--）。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改别克君威？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款（02款-08款、09款--16款、17款--24款）与动力配置逐项对表，确认后再施工。",
  },
  {
    question: "君威加装底盘护板需要备案吗？",
    answer:
      "底盘护板属底盘防护加装件；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "君威适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，年款、材质与排量均为原文；不同年款结构存在差异，实际安装以门店现场检查为准。",
  },
];

export const buickRegalPageConfig = buildModelPageConfig({
  brandSlug: "buick",
  brandName: "别克",
  modelDisplay: "君威",
  theme: "red",
  fitment: buickFitment,
  includeSections: ["君威"],
  faq,
});
