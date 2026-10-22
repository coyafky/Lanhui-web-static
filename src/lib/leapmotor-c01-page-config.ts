import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { leapmotorFitment } from "./fitment/leapmotor";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的零跑C01能装哪些项目？",
    answer:
      "适配库收录底盘护板、360软包脚垫、平面尾箱垫。底盘护板原文：锰钢1.2mm；铝镁合金2.0mm，年款2023-2024；2024，增程216；纯电续航525、625；六件套电池前、电池后、线束、后电机与26款C11增程通用，保护位置前电机、电池前、电池后、线束、油箱、后电机；另有六件套（前方向机A、前方向机B、前电池、后电池、后电机A、后电机B）。360软包脚垫：22款--23款，4门5座3片；平面尾箱垫：22款--，4门5座。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装零跑C01？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款、动力类型（增程/纯电）与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "零跑C01加装底盘护板、脚垫、尾箱垫需要备案吗？",
    answer:
      "底盘护板、脚垫、尾箱垫属车内防护与加装件，不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "C01 适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-08-30 / 2026-09-07 / 2026-09-08），材质、年款、续航与保护位置均为原文，实际安装以门店现场检查为准。",
  },
];

export const leapmotorC01PageConfig = buildModelPageConfig({
  brandSlug: "leapmotor",
  brandName: "零跑",
  modelDisplay: "C01",
  theme: "orange",
  fitment: leapmotorFitment,
  includeSections: ["C01"],
  faq,
});
