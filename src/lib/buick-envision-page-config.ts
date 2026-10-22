import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { buickFitment } from "./fitment/buick";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的别克昂科威能装哪些项目？",
    answer:
      "适配库按节收录昂科威家族：昂科威底盘护板（材质：碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm；年款2015-2022；保护位置：发动机；排量或续航：2.0T；1.5T）、电动踏板（2014-2020，取信号方式对插）、360软包脚垫（4门5座/5门7座，14款--21款、21款--23款轻混版、24款--）、平面尾箱垫、360全包尾箱；昂科威Plus底盘护板（2021-2024，1.5T/2.0T，版型通用）与电动踏板（2021-2023；2024+，取信号方式线夹）；昂科威S底盘护板（2020-2024，2.0T；1.5T，版型通用）与电动踏板（线夹）；昂科威PLUS底盘护板三件套（发动机、线路左、线路右）；昂科威S-25T底盘护板四件套（发动机护板、线路左护板、线路右护板、油箱护板）。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改别克昂科威？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时区分昂科威/Plus/S/PLUS/S-25T，按年款、动力（1.5T/2.0T、轻混版）与座椅布局逐项对表，确认后再施工。",
  },
  {
    question: "昂科威加装底盘护板、电动踏板需要备案吗？",
    answer:
      "底盘护板、电动踏板属底盘防护与便利加装件；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "昂科威适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，年款、材质与保护部位均为原文；Plus/S/PLUS/S-25T 版型互不通用，实际安装以门店现场检查为准。",
  },
];

export const buickEnvisionPageConfig = buildModelPageConfig({
  brandSlug: "buick",
  brandName: "别克",
  modelDisplay: "昂科威",
  theme: "red",
  fitment: buickFitment,
  sectionPrefix: "昂科威",
  faq,
});
