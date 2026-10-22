import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { buickFitment } from "./fitment/buick";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的别克GL8能装哪些项目？",
    answer:
      "适配库收录GL8底盘护板（材质：碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm；年款2011-2015；2020-2025；2024陆尊、2025陆尚；2026陆尊；保护位置：发动机、线束1、线束2、电池、线束3、油箱；排量或续航：2.4L；2.0T；1.5T续航138、142；续航150/202；六件套，发动机新老款通用）；GL8 25S电动踏板（2017+，取信号方式对插）、GL8 652T电动踏板（2020+，取信号方式线夹）；GL8 ES燃油底盘护板五件套（水箱、发动机、线束、油箱、线路）；GL8/PHEV底盘护板五件套（水箱、发动机、电池车身、线路、油箱）；25款别克GL8陆尊/陆尚吸顶电视（15.6寸超清IPS屏，分辨率1920*1080P，内置4G SIM卡，语音声控，支持手机投屏、U盘视频播放）。未收录的配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改别克GL8？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款（陆尊/陆尚、25S、652T、ES燃油、PHEV）与座椅布局逐项对表，确认后再施工。",
  },
  {
    question: "别克GL8加装底盘护板、踏板需要备案吗？",
    answer:
      "底盘护板、电动踏板属底盘防护与便利加装件；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "GL8 适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，年款、材质与保护部位均为原文；不同批次、座椅布局（扶手箱可动与否、滑道平齐与否）存在差异，实际安装以门店现场检查为准。",
  },
];

export const buickGl8PageConfig = buildModelPageConfig({
  brandSlug: "buick",
  brandName: "别克",
  modelDisplay: "GL8",
  theme: "red",
  fitment: buickFitment,
  includeSections: ["25款别克GL8 陆尊/陆尚"],
  sectionPrefix: "GL8",
  faq,
});
