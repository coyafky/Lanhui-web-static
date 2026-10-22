import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { mercedesFitment } from "./fitment/mercedes";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的奔驰C级能装哪些项目？",
    answer:
      "适配库收录 C级/C260L 的 360软包脚垫（皮革/丝圈，年款 08款--24款分多段，门座 4门5座/2门4座/2门2座，片套3片，插电混合动力副驾网兜可开可以不开，GLC轿跑共用、尾箱不同）、360全包尾箱（皮革，16款--23款，4门5座，片套6片/8片）、底盘护板（两驱，锰钢1.2mm/碳钢1.5mm/铝镁合金2.0mm，2015-2024多段，保护水箱/发动机/变速箱，排量2.0T/1.6T/1.5T，三件套）、平面尾箱垫（皮革，08款--24款）；C260L 另收录平面尾箱垫与360全包尾箱（4门5座，16款--23款）。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装奔驰C级适配件？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款、门座布局与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "奔驰C级加装这些项目需要备案吗？",
    answer:
      "脚垫、尾箱垫、底盘护板属车内防护与加装件，不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "C级适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-09-07 / 2026-08-30），材质、年款与结构说明均为原文，未收录的年款与特殊配置以门店现场检查为准。",
  },
];

export const mercedesCClassPageConfig = buildModelPageConfig({
  brandSlug: "mercedes",
  brandName: "奔驰",
  modelDisplay: "C级",
  theme: "amber",
  fitment: mercedesFitment,
  includeSections: ["C级", "C260L"],
  faq,
});
