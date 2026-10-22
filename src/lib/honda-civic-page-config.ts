import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { hondaFitment } from "./fitment/honda";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的本田思域能装哪些项目？",
    answer:
      "适配库收录：360全包尾箱（23款--，门座4门5座）；360软包脚垫（04款--05款、22款--，油电混合，前扶手后端S型/弧形、后排座椅中间有无出风口区分）；底盘护板（九代、十代、十一代，燃油国五/国六、混动，材质碳纤5.0mm、塑钢5.0mm、锰钢1.2mm、碳钢1.5mm、铝镁合金2.0mm，年款2012-2015、2016-2021、2016-2018、2022-2023、2022-2024，保护位置发动机、线束，排量1.8L/2.0L、1.5T、1.0T、1.5T/2.0L，注意要拆原车中间小板、国五加多一个支架）；平面尾箱垫（06款--11款、12款--15款、16款--21款，三厢/两厢区分）。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装本田思域适配件？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "本田思域加装这些项目需要备案吗？",
    answer:
      "脚垫、尾箱垫、底盘护板属车内防护与底盘加装件，不涉及外观变更；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "不同世代思域适配一样吗？",
    answer:
      "适配库按九代/十代/十一代及燃油国五、国六、混动分条收录，脚垫按扶手后端造型与后排出风口区分，尾箱垫分三厢/两厢；未收录的年款与配置以门店现场检查为准。",
  },
];

export const hondaCivicPageConfig = buildModelPageConfig({
  brandSlug: "honda",
  brandName: "本田",
  modelDisplay: "思域",
  theme: "blue",
  fitment: hondaFitment,
  includeSections: ["思域"],
  faq,
});
