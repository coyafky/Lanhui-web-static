import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { hondaFitment } from "./fitment/honda";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的本田雅阁能装哪些项目？",
    answer:
      "适配库收录：360软包脚垫（04款--07款、18款--22款、23款--，油电混合/插电混动下单注意区分车头车尾）；底盘护板（七代、八代、九代、九代混动、十代混动、十代、十代半、十一代，材质碳纤5.0mm、塑钢5.0mm、锰钢1.2mm、碳钢1.5mm、铝镁合金2.0mm，年款2004-2007、2008-2013、2014-2016、2016、2018、2021-2022、2023，保护位置发动机，排量2.0L/2.4L/3.0L、2.4L、2.0L、1.5/2.0L、1.5T/2.0L、1.5T/2.1L、1.5T，注意04款机油机滤保养盖对不上、原车胶板要开孔、要拆原车板、燃油通用）；平面尾箱垫（08款--13款、14款--、18款--、23款--）。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装本田雅阁适配件？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "本田雅阁加装这些项目需要备案吗？",
    answer:
      "脚垫、尾箱垫、底盘护板属车内防护与底盘加装件，不涉及外观变更；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "燃油、混动、插混雅阁适配一样吗？",
    answer:
      "适配库按世代（七代至十一代）与动力（燃油、混动）分条收录，脚垫油电混合/插电混动需区分车头车尾，护板各世代固定位置不同；未收录的年款与配置以门店现场检查为准。",
  },
];

export const hondaAccordPageConfig = buildModelPageConfig({
  brandSlug: "honda",
  brandName: "本田",
  modelDisplay: "雅阁",
  theme: "blue",
  fitment: hondaFitment,
  includeSections: ["雅阁"],
  faq,
});
