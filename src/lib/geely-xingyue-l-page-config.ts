import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { geelyFitment } from "./fitment/geely";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的吉利星越L能装哪些项目？",
    answer:
      "适配库收录星越L底盘护板（雷神混动；材质：碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm；年款2021-2024；2022；2022/2024；2025；动力：插电混动、增程式；排量或续航：1.5T；2.0T；1.5T/2.0T；增程续航205/245；保护位置：发动机、转向机、线束3、线束4、线束5、油箱、电池；注意：七件套发动机+转向机与21-24老款混动版2.0T通用，四驱油箱排气管位置不一样有冲突油箱不发；发动机、转向机、电池通用，蜂巢能源电池不能安装）；电动踏板（2021+，取信号方式线夹）；360软包脚垫（21款--后排凹过桥/平过桥，22款--增程电动版不同，24款--、26款--）；平面尾箱垫（22款--、24款--）；360全包尾箱（21款--右侧有音响、22款--、24款--）。星越L智擎星云版电动踏板（2024+，线夹）、星越L Hi-P增程电动版电动踏板（2023+，线夹）并入本页。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改吉利星越L？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时区分燃油/雷神混动/增程电动版，按年款（21款--、22款--、24款--、26款--）与后排过桥形式逐项对表，确认后再施工。",
  },
  {
    question: "星越L加装底盘护板、电动踏板需要备案吗？",
    answer:
      "底盘护板、电动踏板属底盘防护与便利加装件；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "星越L适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，年款、材质与保护部位均为原文；电池品牌（蜂巢能源）与四驱布局存在冲突限制，实际安装以门店现场检查为准。",
  },
];

export const geelyXingyueLPageConfig = buildModelPageConfig({
  brandSlug: "geely",
  brandName: "吉利",
  modelDisplay: "星越L",
  theme: "blue",
  fitment: geelyFitment,
  sectionPrefix: "星越L",
  faq,
});
