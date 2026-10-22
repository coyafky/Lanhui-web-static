import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { weyFitment } from "./fitment/wey";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的魏牌摩卡能装哪些项目？",
    answer:
      "适配库收录底盘护板、电动踏板、360软包脚垫、平面尾箱垫、360全包尾箱。底盘护板原文：锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm，年款2021-2024，燃油、混动通用；2.0T；保护位置发动机；发动机一颗异形盖板；动力标注插电混动；燃油；纯电。电动踏板：2021+；2022+，取信号方式线夹。360软包脚垫：21款--23款，分两驱、四驱（副驾带电路板）、插电混动版本，皮革/丝圈。平面尾箱垫：21款--，适配PHEV，皮革；360全包尾箱：21款--，适配PHEV，皮革。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装魏牌摩卡？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款、两驱/四驱、动力类型与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "魏牌摩卡加装底盘护板、电动踏板、脚垫、尾箱垫需要备案吗？",
    answer:
      "底盘护板、电动踏板、脚垫、尾箱垫属车内防护与加装件，不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "摩卡 适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-07-01 / 2026-08-30 / 2026-09-07），材质、年款、动力与保护位置均为原文，实际安装以门店现场检查为准。",
  },
];

export const weyMochaPageConfig = buildModelPageConfig({
  brandSlug: "wey",
  brandName: "魏牌",
  modelDisplay: "摩卡",
  theme: "amber",
  fitment: weyFitment,
  includeSections: ["摩卡"],
  faq,
});
