import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { arcfoxFitment } from "./fitment/arcfox";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的极狐阿尔法T能装哪些项目？",
    answer:
      "适配库收录（纯电动）：360全包尾箱（皮革，21款--，门座4门5座、片套6片）；360软包脚垫（皮革/丝圈，21款--23款、24款--，门座4门5座、片套3片）；平面尾箱垫（皮革，21款--、24款--，门座4门5座）。阿尔法T5为独立收录节，不在本页。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装极狐阿尔法T适配件？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款与车内结构逐项对表，确认后再施工。",
  },
  {
    question: "极狐阿尔法T加装这些项目需要备案吗？",
    answer:
      "脚垫、尾箱垫属车内防护加装件，不涉及外观变更；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "阿尔法T和阿尔法T5适配通用吗？",
    answer:
      "适配库将阿尔法T与阿尔法T5分节收录，T5另含底盘护板，脚垫与尾箱垫规格不同，不直接通用；未收录的年款与配置以门店现场检查为准。",
  },
];

export const arcfoxAlphaTPageConfig = buildModelPageConfig({
  brandSlug: "arcfox",
  brandName: "极狐",
  modelDisplay: "阿尔法T",
  theme: "cyan",
  fitment: arcfoxFitment,
  includeSections: ["阿尔法T"],
  faq,
});
