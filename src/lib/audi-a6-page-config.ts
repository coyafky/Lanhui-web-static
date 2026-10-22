import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { audiFitment } from "./fitment/audi";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的奥迪A6能装哪些项目？",
    answer:
      "适配库收录 A6 与 A6L燃油前驱 的 360全包尾箱（12款--18款；20款--，有滑道）、360软包脚垫（皮革/丝圈，01款--04款至26款--分多段，门座4门5座、片套3片，高配/过桥扶手箱有杯架、低配无杯架，混动版一样，不盖踏板）、底盘护板（碳纤5.0mm/塑钢5.0mm/锰钢1.2mm/碳钢1.5mm/铝镁合金2.0mm，2013-2018；2019-2022；2019-2024，保护发动机/变速箱/传动轴，1.8T/2.5T/2.0T；2.0T/3.0T，要拆原车板，通用；A6L燃油前驱另收录发动机护板、波箱护板，原始资料未注明具体合金类型）、平面尾箱垫（皮革，01款--04款至26款--，高配/低配有别）。未收录的年款与配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装奥迪A6适配件？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款、扶手箱配置与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "奥迪A6加装这些项目需要备案吗？",
    answer:
      "脚垫、尾箱垫、底盘护板属车内防护与加装件，不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "A6适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-09-07 / 2026-08-30），材质、年款与结构说明均为原文，未收录的年款与特殊配置以门店现场检查为准。",
  },
];

export const audiA6PageConfig = buildModelPageConfig({
  brandSlug: "audi",
  brandName: "奥迪",
  modelDisplay: "A6",
  theme: "red",
  fitment: audiFitment,
  sectionPrefix: "A6",
  faq,
});
