import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { geely_galaxyFitment } from "./fitment/geely-galaxy";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的吉利银河E8能装哪些项目？",
    answer:
      "适配库收录E8共3项：底盘护板（锰钢1.2mm/铝镁合金2.0mm，2024/2025；四件套前电机、电池前、电池后与极氪7X通用；续航550、665、575、700；保护位置前电机、电池前、电池后、后电机）；360软包脚垫（24款--，皮革/丝圈，分纯电动二排座椅连体/分体）；平面尾箱垫（24款--，皮革，左右两边带网兜）。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装吉利银河E8？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按续航（550/665/575/700）与二排座椅连体/分体布局逐项对表，确认后再施工。",
  },
  {
    question: "E8加装底盘护板、脚垫尾箱垫需要备案吗？",
    answer:
      "底盘护板、脚垫、尾箱垫属防护加装件；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "E8适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，年款、续航、材质与保护部位均为原文，实际安装以门店现场检查为准。",
  },
];

export const geelyGalaxyE8PageConfig = buildModelPageConfig({
  brandSlug: "geely-galaxy",
  brandName: "吉利银河",
  modelDisplay: "E8",
  theme: "cyan",
  fitment: geely_galaxyFitment,
  includeSections: ["E8"],
  faq,
});
