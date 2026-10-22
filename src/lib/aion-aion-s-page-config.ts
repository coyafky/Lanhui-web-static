import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { aionFitment } from "./fitment/aion";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的广汽埃安AION S能装哪些项目？",
    answer:
      "适配库收录AION S共3项：底盘护板（S Plus、S Max，碳纤5.0mm/锰钢1.2mm/碳钢1.5mm/铝镁合金2.0mm，2019-2026多年款；纯电，分磷酸铁锂、三元锂，四件套通用，前电机与老款埃安S前电机通用；续航505；保护位置电机、电池前、电池后、线束、前电机）；360软包脚垫（19款--23款、21款--24款，纯电版，皮革/丝圈）；平面尾箱垫（19款--，PLUS，皮革）。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装广汽埃安AION S？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按年款（19款起）、S Plus/S Max版型、电池类型（磷酸铁锂/三元锂）逐项对表，确认后再施工。",
  },
  {
    question: "AION S加装底盘护板、脚垫尾箱垫需要备案吗？",
    answer:
      "底盘护板、脚垫、尾箱垫属防护加装件；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "AION S适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，年款、电池类型、续航与材质均为原文，实际安装以门店现场检查为准。",
  },
];

export const aionAionSPageConfig = buildModelPageConfig({
  brandSlug: "aion",
  brandName: "广汽埃安",
  modelDisplay: "AION S",
  theme: "green",
  fitment: aionFitment,
  includeSections: ["S"],
  faq,
});
