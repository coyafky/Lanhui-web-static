import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { leapmotorFitment } from "./fitment/leapmotor";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的零跑T03能装哪些项目？",
    answer:
      "适配库收录底盘护板、360软包脚垫、平面尾箱垫。底盘护板原文：锰钢1.2mm；铝镁合金2.0mm，年款2023、2024；两件套、电机通用(310、403电池通用)，续航200、310、403，保护位置电机、电池。360软包脚垫：19款--23款前排过桥长度9CM，24款--前排过桥长度17CM；平面尾箱垫：19款--，4门4座。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装零跑T03？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款、续航版本与电机电池布局逐项对表，确认后再施工。",
  },
  {
    question: "零跑T03加装底盘护板、脚垫、尾箱垫需要备案吗？",
    answer:
      "底盘护板、脚垫、尾箱垫属车内防护与加装件，不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "T03 适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-08-30 / 2026-09-07），材质、年款、续航与保护位置均为原文，实际安装以门店现场检查为准。",
  },
];

export const leapmotorT03PageConfig = buildModelPageConfig({
  brandSlug: "leapmotor",
  brandName: "零跑",
  modelDisplay: "T03",
  theme: "orange",
  fitment: leapmotorFitment,
  includeSections: ["T03"],
  faq,
});
