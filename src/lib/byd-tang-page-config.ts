import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { bydFitment } from "./fitment/byd";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的比亚迪唐能装哪些项目？",
    answer:
      "适配库收录唐的底盘护板、电动踏板、小桌板、360软包脚垫、平面尾箱垫、360全包尾箱。底盘护板原文：二代 EV；DM-i；DM-P，材质碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm，年款2015-2017；2018-2021；2021；2021-2022、2024；2022、2024，注意要拆原车板，排量或续航2.0T；电动(续航565、505、600、730、635公里)；混动续航112；混动续航215，保护位置发动机、电池前、电池后、前电机、后电机、后部底盘、电池、线束；2026款 EV 大唐为铝镁合金2.0mm六件套（前电机、电池前、电池后、后电机、储气罐、制冷器，续航950、850）；2025款 DM；L 为锰钢1.2mm；铝镁合金2.0mm七件套（续航200）。电动踏板按年款取信号对插/线夹；小桌板为真皮+金属饰条，与原车红棕色（橙红）真皮座椅同色系。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改比亚迪唐？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款、动力（燃油/纯电/插电混动）与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "比亚迪唐加装这些项目需要备案吗？",
    answer:
      "底盘护板、电动踏板、小桌板、脚垫、尾箱垫属车内防护与便利加装件；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "唐适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-07-01、2026-08-30、2026-09-03、2026-09-07），材质与规格均为原文，实际安装以门店现场检查为准；适配库未收录的配置以门店现场检查为准。",
  },
];

export const bydTangPageConfig = buildModelPageConfig({
  brandSlug: "byd",
  brandName: "比亚迪",
  modelDisplay: "唐",
  theme: "red",
  fitment: bydFitment,
  includeSections: ["唐"],
  faq,
});
