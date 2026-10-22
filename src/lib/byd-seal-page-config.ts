import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { bydFitment } from "./fitment/byd";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的比亚迪海豹能装哪些项目？",
    answer:
      "适配库收录海豹的底盘护板、360软包脚垫、平面尾箱垫。底盘护板原文：EV；DM-i，材质锰钢1.2mm；铝镁合金2.0mm，年款2022-2025；2023/2024；2025；2025-2026，排量或续航续航55；续航120、128；纯电动续航550、650、700公里；DMI续航121，保护位置发动机、电池、线束1、线束2、后电机、前电机、电池前、电池后、后储物盒、油箱，动力纯电；插电混动；另收录06（2024、2025，DMI续航120/80）、06GT（2025，续航550、605；续航505）、07（2025，DMI续航125）的五件套方案。360软包脚垫按22款纯电动、23款插电混动、24款（过桥是凹的）、25款（过桥是直的/旅行版/纯电闪充版不一样/插电混动天神之眼版本不一样）、26款区分。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改比亚迪海豹？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款、动力（纯电/插电混动）、续航版本与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "比亚迪海豹加装这些项目需要备案吗？",
    answer:
      "底盘护板、脚垫、尾箱垫属车内防护与底盘加装件，不涉及外观变更；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "海豹适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-08-30、2026-09-07、2026-09-08），材质与规格均为原文，实际安装以门店现场检查为准；适配库未收录的配置以门店现场检查为准。",
  },
];

export const bydSealPageConfig = buildModelPageConfig({
  brandSlug: "byd",
  brandName: "比亚迪",
  modelDisplay: "海豹",
  theme: "red",
  fitment: bydFitment,
  includeSections: ["海豹"],
  faq,
});
