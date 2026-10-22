import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { bydFitment } from "./fitment/byd";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的比亚迪汉能装哪些项目？",
    answer:
      "适配库收录汉的底盘护板、360软包脚垫、平面尾箱垫。底盘护板原文：EV；DM-i，材质锰钢1.2mm；铝镁合金2.0mm，年款2020-2021；2020-2024；2022-2024；2023、2024；2023、2024、2025；2025，动力纯电；插电混动，保护位置前电机、电池前、电池后、发动机、线束、电池、油管、油箱、挡泥板；2025款 EV；DM-i；DM-P；L 另有四件套、五件套通用方案。360软包脚垫按20款-23款、25款及前排座椅底出风口长条形/方形区分；平面尾箱垫按20款-24款（右侧有网兜/音响区分）、25款（左侧带台阶/不带台阶）区分。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改比亚迪汉？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款、动力（EV/DM-i/DM-P）与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "比亚迪汉加装这些项目需要备案吗？",
    answer:
      "底盘护板、脚垫、尾箱垫属车内防护与底盘加装件，不涉及外观变更；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "汉适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-08-30、2026-09-07、2026-09-08），材质与规格均为原文，实际安装以门店现场检查为准；适配库未收录的配置以门店现场检查为准。",
  },
];

export const bydHanPageConfig = buildModelPageConfig({
  brandSlug: "byd",
  brandName: "比亚迪",
  modelDisplay: "汉",
  theme: "red",
  fitment: bydFitment,
  includeSections: ["汉"],
  faq,
});
