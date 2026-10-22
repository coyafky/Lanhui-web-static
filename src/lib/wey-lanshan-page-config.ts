import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { weyFitment } from "./fitment/wey";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的魏牌蓝山能装哪些项目？",
    answer:
      "适配库收录底盘护板、电动踏板、360软包脚垫、平面尾箱垫、360全包尾箱。底盘护板原文：锰钢1.2mm；铝镁合金2.0mm，年款2023；2025，6件套发动机专用、其它护板23-25通用；宁德时代电池；保护位置发动机、电池、油箱、线束1、线束2、后电机；油箱3颗（2颗专用支架、一颗通用问界M9油箱支架），后电机3颗专用支架，发动机1颗异形盖板。电动踏板：2023+，取信号方式线夹。360软包脚垫：23款--，插电混动，分不带冰箱、带冰箱版本，皮革/丝圈。平面尾箱垫、360全包尾箱：23款--，皮革。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装魏牌蓝山？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款、是否带冰箱与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "魏牌蓝山加装底盘护板、电动踏板、脚垫、尾箱垫需要备案吗？",
    answer:
      "底盘护板、电动踏板、脚垫、尾箱垫属车内防护与加装件，不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "蓝山 适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-07-01 / 2026-08-30 / 2026-09-07 / 2026-09-08），材质、年款与保护位置均为原文，实际安装以门店现场检查为准。",
  },
];

export const weyLanshanPageConfig = buildModelPageConfig({
  brandSlug: "wey",
  brandName: "魏牌",
  modelDisplay: "蓝山",
  theme: "amber",
  fitment: weyFitment,
  includeSections: ["蓝山"],
  faq,
});
