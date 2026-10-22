import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { tankFitment } from "./fitment/tank";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的坦克300能装哪些项目？",
    answer:
      "适配库收录坦克300底盘护板：城市版（锰钢1.2mm；铝镁合金2.0mm；铝镁合金5.0mm；2023、2024；2.0燃油、混动；保护位置：水箱、发动机、变速箱、分动箱、油箱；专用支架，版型通用）；2026 Hi4-T 五件套（铝镁合金5.0mm；保护水箱、发动机、变速箱、分动箱、油箱）；另有铝镁合金油箱护板A款/B款、推沙板、柴油尿素罐护板、混动电池包护板（小/大）；电动踏板（2020+；2021+，取信号方式线夹）；平面尾箱垫（皮革，21款--，4门5座）。未收录的配置（含300L长轴版单独核对）以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改坦克300？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时区分城市版/越野版/Hi4-T/柴油，按年款与动力逐项对表，确认后再施工。",
  },
  {
    question: "坦克300加装底盘护板、电动踏板需要备案吗？",
    answer:
      "底盘护板、电动踏板属底盘防护与便利加装件；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "坦克300适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，年款、材质与保护部位均为原文；燃油/柴油/Hi4-T 护板方案不同，实际安装以门店现场检查为准。",
  },
];

export const tank300PageConfig = buildModelPageConfig({
  brandSlug: "tank",
  brandName: "坦克",
  modelDisplay: "坦克300",
  theme: "green",
  fitment: tankFitment,
  includeSections: ["300"],
  faq,
});
