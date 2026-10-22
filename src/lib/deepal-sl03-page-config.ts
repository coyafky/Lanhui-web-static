import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { deepalFitment } from "./fitment/deepal";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的深蓝SL03能装哪些项目？",
    answer:
      "适配库收录SL03增程版135续航（中航）底盘护板：发动机护板、线束护板、电池护板、油箱护板、后电机A护板、后电机B护板；材质原始资料未注明具体合金类型（资料日期2026-09-08），原始资料未提供年款与动力细分。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装深蓝SL03底盘护板？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款、动力类型与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "深蓝SL03加装底盘护板需要备案吗？",
    answer:
      "底盘护板属底盘防护加装件，不涉及外观变更；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "其他续航版本SL03适配一样吗？",
    answer:
      "适配库当前仅收录SL03增程版135续航（中航）一节，其他续航与动力版本未收录，以门店现场检查为准。",
  },
];

export const deepalSl03PageConfig = buildModelPageConfig({
  brandSlug: "deepal",
  brandName: "深蓝",
  modelDisplay: "SL03",
  theme: "cyan",
  fitment: deepalFitment,
  sectionPrefix: "SL03",
  faq,
});
