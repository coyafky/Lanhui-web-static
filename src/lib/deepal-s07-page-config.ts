import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { deepalFitment } from "./fitment/deepal";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的深蓝S07能装哪些项目？",
    answer:
      "适配库按配置分节收录底盘护板：S07增程版（锰钢1.2mm、铝镁合金2.0mm，2023、2024-2026，两件套中创电池不能安装、发动机与深蓝S07通用，四件套发动机与深蓝S7通用，增程续航200、121、215/230，保护位置发动机、电池、线束、油箱）；S07增程版-200（发动机、线束、油箱、电池、线路、后电机）；S07增程版-215 285续航没有后电机（发动机、线束、电池、线路、油箱、后电机，注意没有后电机）；S07纯电（前电机、线束、前电池、后电池、后电机A、后电机B）。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装深蓝S07底盘护板？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款、动力类型（增程/纯电）与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "深蓝S07加装底盘护板需要备案吗？",
    answer:
      "底盘护板属底盘防护加装件，不涉及外观变更；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "增程版和纯电S07护板通用吗？",
    answer:
      "不直接通用：增程版保护发动机、电池、线束、油箱，纯电版保护前电机、前电池、后电池、后电机A/B，215续航版本没有后电机，需按实车配置对表；未收录配置以门店现场检查为准。",
  },
];

export const deepalS07PageConfig = buildModelPageConfig({
  brandSlug: "deepal",
  brandName: "深蓝",
  modelDisplay: "S07",
  theme: "cyan",
  fitment: deepalFitment,
  sectionPrefix: "S07",
  faq,
});
