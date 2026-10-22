import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { avatrFitment } from "./fitment/avatr";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的阿维塔12能装哪些项目？",
    answer:
      "适配库收录阿维塔12的360软包脚垫、平面尾箱垫、360全包尾箱、底盘护板。360软包脚垫原文：皮革/丝圈，23款-24款（门座4门5座，片套3）；25款--（门座4门5座，片套3片，车架号在副驾门边），动力纯电。平面尾箱垫：皮革，24款--，门座4门5座，纯电。360全包尾箱：皮革，24款--，门座4门5座，片套6片，靠背两块，纯电。底盘护板：四件套（增程，保护位置前电机、线束、电池、后电机）；五件套（前电机、前电池、后电池、后电机、后尾箱）；三件套（2026，纯电续航735km，双电机，保护位置前电机、前电池、后电池）。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改阿维塔12？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款、动力（纯电/增程）与门座逐项对表，确认后再施工。",
  },
  {
    question: "阿维塔12加装这些项目需要备案吗？",
    answer:
      "底盘护板、脚垫、尾箱垫属车内防护与底盘加装件，不涉及外观变更；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "阿维塔12适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-09-07、2026-09-08），材质与规格均为原文，实际安装以门店现场检查为准；适配库未收录的配置以门店现场检查为准。",
  },
];

export const avatr12PageConfig = buildModelPageConfig({
  brandSlug: "avatr",
  brandName: "阿维塔",
  modelDisplay: "12",
  theme: "orange",
  fitment: avatrFitment,
  includeSections: ["12"],
  faq,
});
