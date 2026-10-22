import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { geely_galaxyFitment } from "./fitment/geely-galaxy";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的吉利银河L7能装哪些项目？",
    answer:
      "适配库收录L7共5项：底盘护板（EM-i插电混动，锰钢1.2mm/铝镁合金2.0mm，2023-2024/2025；三件套发动机、油箱与23/24款通用，电池与星舰7通用；续航115、55公里；保护位置发动机、电池、油箱）；电动踏板（2023+，取信号方式线夹）；360软包脚垫（23款--，插电混合动力，皮革/丝圈）；平面尾箱垫（23款--，皮革，分右边带音响/不带音响）；360全包尾箱（23款--，皮革）。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装吉利银河L7？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按年款（23款起）、续航（115/55公里）与尾箱音响布局逐项对表，确认后再施工。",
  },
  {
    question: "L7加装底盘护板、电动踏板需要备案吗？",
    answer:
      "底盘护板、电动踏板、脚垫、尾箱垫属防护与便利加装件；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "L7适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，年款、续航、材质与保护部位均为原文，实际安装以门店现场检查为准。",
  },
];

export const geelyGalaxyL7PageConfig = buildModelPageConfig({
  brandSlug: "geely-galaxy",
  brandName: "吉利银河",
  modelDisplay: "L7",
  theme: "cyan",
  fitment: geely_galaxyFitment,
  includeSections: ["L7"],
  faq,
});
