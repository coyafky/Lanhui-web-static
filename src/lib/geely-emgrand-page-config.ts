import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { geelyFitment } from "./fitment/geely";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的吉利帝豪能装哪些项目？",
    answer:
      "适配库按节收录帝豪家族：帝豪底盘护板（第四代手动版/自动版、第五代；材质：碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm；年款2018-2021；2022-2025；2026；注意：原车胶板要开孔；排量或续航：1.5L；1.8L/1.5L；1.5L/1.5T；保护位置：发动机）、360软包脚垫（18款--21款、22款-25款醇电混动、26款--）、平面尾箱垫、360全包尾箱；帝豪EC7（2014-2017，1.3T/1.5L，原车胶板要开孔）、帝豪GL（2017-2021，1.3T/1.8L/1.4T/1.5T，保护发动机、线束）、帝豪GS（2016-2020）、帝豪GSE（2019电动，保护水箱、电机）、帝豪L（2022/2024，1.4T/1.5T，插电混动）、帝豪S（2021-2022）各节底盘护板与脚垫并入本页。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改吉利帝豪？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时区分帝豪/EC7/GL/GS/GSE/L/S，按年款、动力（燃油/醇电混动/纯电/插电混动）逐项对表，确认后再施工。",
  },
  {
    question: "帝豪加装底盘护板、脚垫需要备案吗？",
    answer:
      "底盘护板、脚垫属底盘防护与车内加装件，不涉及外观变更；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "帝豪适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，年款、材质与动力均为原文；EC7/GL/GS/GSE/L/S 版型互不通用，实际安装以门店现场检查为准。",
  },
];

export const geelyEmgrandPageConfig = buildModelPageConfig({
  brandSlug: "geely",
  brandName: "吉利",
  modelDisplay: "帝豪",
  theme: "blue",
  fitment: geelyFitment,
  sectionPrefix: "帝豪",
  faq,
});
