import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { tankFitment } from "./fitment/tank";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的坦克500能装哪些项目？",
    answer:
      "适配库收录坦克500底盘护板：400/500共享方案（锰钢1.2mm；铝镁合金2.0mm；铝镁合金5.0mm；2022-2023；2025、2026；2.0、3.0T燃油、轻混动、Hi4-Z；保护位置：水箱、发动机、变速箱、分动箱、油箱、电池、后电机；专用支架，版型通用）；铝镁合金油箱护板A款/B款、电池包护板、TK500/hi4-Z优化版；电动踏板（2022+；2025，取信号方式线夹）；360软包脚垫（皮革/丝圈，22款--新能源4门5座、原车7座做5座、原车7座；23款-24款Hi4-T/PHEV；25款Hi4-Z/PHEV）；平面尾箱垫（皮革，22款--、23款--PHEV、25款--Hi4-Z/PHEV）；360全包尾箱（皮革，22款--，尾箱不带侧包）。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改坦克500？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时区分燃油/Hi4-T/PHEV/Hi4-Z 与5座/7座布局，按年款逐项对表，确认后再施工。",
  },
  {
    question: "坦克500加装底盘护板、电动踏板需要备案吗？",
    answer:
      "底盘护板、电动踏板属底盘防护与便利加装件；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "坦克500适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，年款、材质与座椅布局均为原文；Hi4-T 与 Hi4-Z 二排座椅连体/分体结构不同，实际安装以门店现场检查为准。",
  },
];

export const tank500PageConfig = buildModelPageConfig({
  brandSlug: "tank",
  brandName: "坦克",
  modelDisplay: "坦克500",
  theme: "green",
  fitment: tankFitment,
  includeSections: ["500"],
  faq,
});
