import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { audiFitment } from "./fitment/audi";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的奥迪A4能装哪些项目？",
    answer:
      "适配库收录 A4 的 360全包尾箱（17款--）、360软包脚垫（皮革/丝圈，04款--08款；09款--16款；11款--14款；17款--23款，门座4门5座、片套3片，不盖踏板）、底盘护板（碳纤5.0mm/塑钢5.0mm/锰钢1.2mm/碳钢1.5mm/铝镁合金2.0mm，2010-2016；2017-2024，保护发动机/变速箱，排量2.0T；1.8T/2.0T，通用）、平面尾箱垫（皮革，09款--16款；17款--，门座4门5座）。未收录的年款与配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装奥迪A4适配件？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "奥迪A4加装这些项目需要备案吗？",
    answer:
      "脚垫、尾箱垫、底盘护板属车内防护与加装件，不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "A4适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-09-07 / 2026-08-30），材质、年款与结构说明均为原文，未收录的年款与特殊配置以门店现场检查为准。",
  },
];

export const audiA4PageConfig = buildModelPageConfig({
  brandSlug: "audi",
  brandName: "奥迪",
  modelDisplay: "A4",
  theme: "red",
  fitment: audiFitment,
  includeSections: ["A4"],
  faq,
});
