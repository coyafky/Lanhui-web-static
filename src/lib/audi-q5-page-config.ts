import { buildModelPageConfig } from "@/lib/brand-series/model-page-config";
import { audiFitment } from "./fitment/audi";
import type { FaqItem } from "@/components/vehicle-page";

const faq: FaqItem[] = [
  {
    question: "我的奥迪Q5能装哪些项目？",
    answer:
      "适配库收录 Q5 与 Q5L 的 360全包尾箱（皮革，09款--18款；18款--；21款--；22款--，靠背分3块/2块，左侧网兜深度8.5CM/14.5CM左右两侧带松紧带，5门6座/5门7座）、360软包脚垫（皮革/丝圈，09款--18款；18款--25款；21款--23款；22款--23款；26款--，副驾驶内侧网兜有无，纯电版三排/副驾有车架号，不盖踏板）、底盘护板（2.0T，两件套，安装要拆原车板）、电动踏板（取信号方式线夹，2011-2018；2018+；2026）、平面尾箱垫（皮革，09款--；18款--；21款--；22款--，4门5座/5门6座/7座）；Q5L 另收录360全包尾箱（18款--，左侧网兜深度8.5CM/14.5CM）。未收录的年款与配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能装奥迪Q5适配件？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。到店时按车型年款、座位数与纯电/燃油版本逐项对表，确认后再施工。",
  },
  {
    question: "奥迪Q5加装这些项目需要备案吗？",
    answer:
      "脚垫、尾箱垫、底盘护板、电动踏板属车内防护与加装件，不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "Q5适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文（资料日期 2026-09-07 / 2026-08-30 / 2026-07-01），材质、年款与结构说明均为原文，未收录的年款与特殊配置以门店现场检查为准。",
  },
];

export const audiQ5PageConfig = buildModelPageConfig({
  brandSlug: "audi",
  brandName: "奥迪",
  modelDisplay: "Q5",
  theme: "red",
  fitment: audiFitment,
  sectionPrefix: "Q5",
  faq,
});
