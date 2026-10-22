import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { cadillacFitment } from "./fitment/cadillac";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的凯迪拉克XT5能装哪些项目？",
    answer:
      "适配库收录XT5的底盘护板、电动踏板、360软包脚垫、平面尾箱垫、360全包尾箱。底盘护板原文：材质碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm，年款2016-2022-2025，保护位置发动机，排量或续航2.0T；另有燃油版发动机护板。电动踏板：年款2016-2018；2019-2024；2025，取信号方式对插；线夹，2016-2018=对插。360软包脚垫：16款--20款（副驾椅子底下出风口在中间）、21款--24款（副驾椅子底下出风口在左边）、25款--（4门5座/3片）。平面尾箱垫：16款-24款、25款--，4门5座。360全包尾箱：20款-24款（有滑道/无滑道区分）、25款--，4门5座。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改凯迪拉克XT5？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款、动力（燃油）与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "凯迪拉克XT5加装这些项目需要备案吗？",
    answer:
      "底盘护板、电动踏板、脚垫、尾箱垫属车内防护与便利加装件，不涉及外观变更；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "XT5适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-07-01、2026-08-30、2026-09-07、2026-09-08），材质与规格均为原文，实际安装以门店现场检查为准；适配库未收录的配置以门店现场检查为准。",
  },
];

export const cadillacXt5PageConfig = buildModelPageConfig({
  brandSlug: "cadillac",
  brandName: "凯迪拉克",
  modelDisplay: "XT5",
  theme: "blue",
  fitment: cadillacFitment,
  includeSections: ["XT5"],
  faq,
});
