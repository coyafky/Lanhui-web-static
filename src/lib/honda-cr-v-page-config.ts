import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { hondaFitment } from "./fitment/honda";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的本田CR-V能装哪些项目？",
    answer:
      "适配库收录：360全包尾箱（17款--、17款--22款、21款--22款、23款--，门座4门5座/4门7座，右侧有无音响区分）；360软包脚垫（04款--06款、07款--11款、12款--16款、21款--22款、23款--，含插电混动、油电混合5门7座）；底盘护板（混动、燃油，材质塑钢5.0mm、锰钢1.2mm、碳钢1.5mm、铝镁合金2.0mm、碳纤5.0mm，年款2007-2011、2012-2014、2015-2016、2017-2021、2023-2024，保护位置发动机，排量1.5T、2.0L、2.0L/1.5T、2.0L/2.4L，混动螺丝专用）；电动踏板（2017+、2023+，取信号方式线夹）；平面尾箱垫（07款--11款、12款--17款、18款--22款、21款--22款、23款--，4门5座/5门5座/5门7座）。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装本田CR-V适配件？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "本田CR-V加装这些项目需要备案吗？",
    answer:
      "脚垫、尾箱垫、底盘护板属车内防护与底盘加装件，不涉及外观变更；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "燃油、混动、插电混动CR-V适配一样吗？",
    answer:
      "适配库按年款与动力分条收录，燃油、混动、插电混动的护板螺丝与脚垫结构存在差异（如混动螺丝专用），未收录的年款与配置以门店现场检查为准。",
  },
];

export const hondaCrVPageConfig = buildModelPageConfig({
  brandSlug: "honda",
  brandName: "本田",
  modelDisplay: "CR-V",
  theme: "blue",
  fitment: hondaFitment,
  includeSections: ["CR-V"],
  faq,
});
