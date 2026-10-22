import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { mercedesFitment } from "./fitment/mercedes";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的奔驰S级能装哪些项目？",
    answer:
      "适配库收录 S级/S450L 的 360软包脚垫（皮革/丝圈，99款--24款分多段，门座4门5座/4门4座/5门7座，主驾踏板左侧喇叭有无、扶手箱后端水杯架有无分别对表）、360全包尾箱（皮革，20款--，5门7座/5门6座，左侧出风口有无、右前无二排倒背机关）、底盘护板（四驱/两驱，锰钢1.2mm/碳钢1.5mm/铝镁合金2.0mm，保护变速箱/发动机，3.0T/4.0T/2.5T，两件套/三件套）、平面尾箱垫（皮革，05款--21款，迈巴赫S级适配、S580不同）、小桌板（米色真皮同色系，真皮+钢琴烤漆+镀铬饰条）；S450L 另收录平面尾箱垫与360全包尾箱（21款--，左侧带音响、右侧带网兜）。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装奔驰S级适配件？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款、座位数与内饰结构逐项对表，确认后再施工。",
  },
  {
    question: "奔驰S级加装这些项目需要备案吗？",
    answer:
      "脚垫、尾箱垫、底盘护板、后排小桌板属车内防护与加装件，不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "S级适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-09-07 / 2026-09-03 / 2026-08-30），材质、年款与结构说明均为原文，未收录的年款与特殊配置以门店现场检查为准。",
  },
];

export const mercedesSClassPageConfig = buildModelPageConfig({
  brandSlug: "mercedes",
  brandName: "奔驰",
  modelDisplay: "S级",
  theme: "amber",
  fitment: mercedesFitment,
  includeSections: ["S级", "S450L"],
  faq,
});
