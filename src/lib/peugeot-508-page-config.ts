import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { peugeotFitment } from "./fitment/peugeot";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的标致508能装哪些项目？",
    answer:
      "适配库收录 508 的底盘护板（碳纤5.0mm/塑钢5.0mm/锰钢1.2mm/碳钢1.5mm/铝镁合金2.0mm，2011-2017，保护位置发动机，排量1.6T/1.8T/2.0L/2.3L，注意要拆原车板；508L 2019-2021；2019-2023，保护位置线束/发动机，排量1.6T/1.8T，原表车型标致508L）。其余项目未收录，以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装标致508底盘护板？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款与排量逐项对表，确认后再施工。",
  },
  {
    question: "标致508加装底盘护板需要备案吗？",
    answer:
      "底盘护板属底盘防护加装件，不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "508适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-08-30），材质、年款与排量说明均为原文，未收录的年款与特殊配置以门店现场检查为准。",
  },
];

export const peugeot508PageConfig = buildModelPageConfig({
  brandSlug: "peugeot",
  brandName: "标致",
  modelDisplay: "508",
  theme: "red",
  fitment: peugeotFitment,
  includeSections: ["508"],
  faq,
});
