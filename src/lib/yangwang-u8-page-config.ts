import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { yangwangFitment } from "./fitment/yangwang";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的仰望U8能装哪些项目？",
    answer:
      "适配库收录底盘护板（标准版，材质铝镁合金；原始资料未提供年款、动力类型及具体护板部位）。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装仰望U8底盘护板？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款与底盘结构逐项对表，确认后再施工。",
  },
  {
    question: "仰望U8加装底盘护板需要备案吗？",
    answer:
      "底盘护板属底盘防护加装件；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "U8 适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-09-15），材质与规格均为原文，实际安装以门店现场检查为准。",
  },
];

export const yangwangU8PageConfig = buildModelPageConfig({
  brandSlug: "yangwang",
  brandName: "仰望",
  modelDisplay: "U8",
  theme: "cyan",
  fitment: yangwangFitment,
  includeSections: ["U8"],
  faq,
});
