import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { baicFitment } from "./fitment/baic";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的北京汽车BJ40能装哪些项目？",
    answer:
      "适配库收录BJ40底盘护板：燃油版含BJ40-C-2.0T（经典外观）、BJ40 plus-2.3、BJ40L、新款BJ40-2.0T（无框车门）、新款BJ40油箱、新款BJ40推沙板（材质铝镁合金，保护位置未细分/油箱护板/推沙板）；混动版含25款BJ40E（混动152续航）全套（大/小）、26款BJ40E（混动201续航）全套（小）、推沙板（大/小）、水箱、前电机、电池包两块、后电机、油箱（2025/2026款，混动，铝镁合金）；另有北京汽车BJ40混动150续航底盘护板四件套（保护位置水箱、发动机、电池、油箱，水箱护板3.0厚，原始资料未注明具体合金类型）。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装北京汽车BJ40？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型版型（BJ40-C经典外观/BJ40 plus/BJ40L/新款无框车门/25款BJ40E/26款BJ40E）与动力逐项对表，确认后再施工。",
  },
  {
    question: "BJ40加装底盘护板、推沙板需要备案吗？",
    answer:
      "底盘护板、推沙板属底盘防护加装件；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "BJ40适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期2026-09-08），年款、动力、材质与保护部位均为原文，实际安装以门店现场检查为准。",
  },
];

export const baicBj40PageConfig = buildModelPageConfig({
  brandSlug: "baic",
  brandName: "北京汽车",
  modelDisplay: "BJ40",
  theme: "red",
  fitment: baicFitment,
  includeSections: ["BJ40"],
  faq,
});
