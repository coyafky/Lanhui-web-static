import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { fangchengbaoFitment } from "./fitment/fangchengbao";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的方程豹豹5能装哪些项目？",
    answer:
      "适配库收录底盘护板。原文：铝镁合金5.0mm，年款2023、2024；2025；2025/2026，保护位置发动机、线束、电池、油箱、后电机、水箱、前电机；续航210；1.5T续航125；增程125；五件套续航125后电机停止生产、发完库存后与续航210后电机通用；六件套后电机与豹8豹5通用；六件套油箱专用、其它通用24款。另有智驾版长续航锰钢六件套（水箱前护板、发动机护板、前电机护板、电池护板、油箱护板、后电机护板；前电机护板5mm）。未收录的配置（非智驾版、长续航210续航、闪充版等细分版本）以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装方程豹豹5？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款、续航版本（1.5T续航125/续航210）、是否智驾版与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "方程豹豹5加装底盘护板需要备案吗？",
    answer:
      "底盘护板属底盘防护加装件，不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "豹5 适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-08-30 / 2026-09-08），材质、年款、续航与保护位置均为原文，实际安装以门店现场检查为准。",
  },
];

export const fangchengbaoBao5PageConfig = buildModelPageConfig({
  brandSlug: "fangchengbao",
  brandName: "方程豹",
  modelDisplay: "豹5",
  theme: "green",
  fitment: fangchengbaoFitment,
  includeSections: ["豹5"],
  faq,
});
