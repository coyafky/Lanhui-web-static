import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { baicFitment } from "./fitment/baic";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的北京汽车BJ60能装哪些项目？",
    answer:
      "适配库收录BJ60底盘护板：25款BJ60雷霆（混动，2025）全套、水箱、前电机、电池包两块、后电机、油箱（材质铝镁合金）；另有BJ60-2.0T（汽油/柴油）底盘护板（铝镁合金，保护位置未细分）。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装北京汽车BJ60？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按动力（25款雷霆混动/BJ60-2.0T汽油或柴油）与保护部位逐项对表，确认后再施工。",
  },
  {
    question: "BJ60加装底盘护板需要备案吗？",
    answer:
      "底盘护板属底盘防护加装件；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "BJ60适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期2026-09-08），年款、动力、材质与保护部位均为原文，实际安装以门店现场检查为准。",
  },
];

export const baicBj60PageConfig = buildModelPageConfig({
  brandSlug: "baic",
  brandName: "北京汽车",
  modelDisplay: "BJ60",
  theme: "red",
  fitment: baicFitment,
  includeSections: ["BJ60"],
  faq,
});
