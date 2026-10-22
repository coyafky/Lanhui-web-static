import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { mercedesFitment } from "./fitment/mercedes";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的奔驰E级能装哪些项目？",
    answer:
      "适配库收录 E级/E300L 的 360软包脚垫（皮革/丝圈，05款--24款分多段，前排座椅底出风口为条形、后排座椅电动）、360全包尾箱（皮革，16款--19款；20款--23款；21款--，二排靠背3个/2个挂钩孔、尾箱右侧护栏网、中间大/小背靠）、底盘护板（轿车版/运动版两驱，锰钢1.2mm/碳钢1.5mm/铝镁合金2.0mm，2015-2023多段，保护水箱/发动机/变速箱，3.0T/2.0T，三件套通用）、平面尾箱垫（皮革，05款--24款，轿跑不适配）；E300L 24款--脚垫按前排座椅底出风口方形/条形、后排座椅电动与否分三种方案。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装奔驰E级适配件？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款、出风口样式与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "奔驰E级加装这些项目需要备案吗？",
    answer:
      "脚垫、尾箱垫、底盘护板属车内防护与加装件，不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "E级适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-09-07 / 2026-08-30），材质、年款与结构说明均为原文，未收录的年款与特殊配置以门店现场检查为准。",
  },
];

export const mercedesEClassPageConfig = buildModelPageConfig({
  brandSlug: "mercedes",
  brandName: "奔驰",
  modelDisplay: "E级",
  theme: "amber",
  fitment: mercedesFitment,
  includeSections: ["E级", "E300L"],
  faq,
});
