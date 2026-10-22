/**
 * 丰田品牌一级页数据（2026-10-05 新增，参照 voyah-series-services 模式）
 *
 * 定位：丰田全系保护与舒适升级服务入口（顺德大良）。
 * 品牌页承载 49 车型分组速览 + 8 类适配件功能特性 + 主力车型入口 + 轮毂入口；
 * 车型分组数据在 src/lib/toyota-model-groups.ts，项目数据在 src/lib/toyota-all-models-products.ts。
 *
 * 结构：
 *   - toyotaSeriesFaq           9 条 FAQ（全系覆盖 / 脚垫尾箱 / 护板 / 踏板 / 电视 / 轮毂 / 适配库记录 / 本地门店 / 备案）
 *   - toyotaDouyinHighlights    抖音案例入口 3 项
 */

// ---- 抖音案例入口 ----

export type ToyotaDouyinHighlight = {
  iconName: string;
  label: string;
};

export const toyotaDouyinHighlights: readonly ToyotaDouyinHighlight[] = [
  { iconName: "Play", label: "丰田 SUV 施工过程实拍" },
  { iconName: "Layers", label: "护板与踏板安装细节" },
  { iconName: "Wrench", label: "专车脚垫版型对比" },
] as const;

// ---- FAQ ----

export type ToyotaSeriesFaqItem = {
  question: string;
  answer: string;
};

export const toyotaSeriesFaq: readonly ToyotaSeriesFaqItem[] = [
  {
    question: "丰田 49 款车型都有适配件数据吗？",
    answer:
      "本页适装表覆盖 49 款丰田车型。部分车型只支持个别项目：吸顶电视目前仅格瑞维亚有记录、后排娱乐屏仅铂智7，按车型和年款逐条对照。拿不准的话把车型、年款、动力版本发来，先筛一遍再约到店。",
  },
  {
    question: "脚垫和尾箱垫怎么选？",
    answer:
      "软包脚垫按座椅排数和滑道结构开模，座椅滑轨和地毯边缘一并包住，雨天、带娃场景好打理；尾箱垫按是否带侧包、音响位开孔区分。选哪个版本到店按实车确认。",
  },
  {
    question: "底盘护板所有丰田都能装吗？",
    answer:
      "不是所有车型都有护板记录，覆盖 33 款车型。材质分合金、锰钢 1.2mm、铝镁合金 2.0mm 等档位，件套和保护位置按动力形式与底盘结构对应，装前核对。",
  },
  {
    question: "电动踏板哪些车能装？",
    answer:
      "覆盖 9 款车型（汉兰达、RAV4荣放、赛那、皇冠陆放等）。取信号方式分对插和线夹两种，装前确认门体结构、离地间隙和控制逻辑，不是全系通用项目。",
  },
  {
    question: "吸顶电视和后排娱乐屏有什么区别？",
    answer:
      "吸顶电视装在车顶中央，后排整排观看，带 4G 联网、语音声控和手机投屏；后排娱乐屏装在座椅靠背，各坐各的互不打扰。取电方式和安装位置不同，具体按车型确认。",
  },
  {
    question: "轮毂怎么确认适配？",
    answer:
      "轮毂不能只看样式：尺寸、孔距（PCD）、ET、中心孔（CB）和载荷等级都要与原车核对。把车型年款发来，先按数据筛出能上的款式，再约到店确认。",
  },
  {
    question: "供应商适配库里记录了哪些丰田车型和项目？",
    answer:
      "适配速查表按车型分组收录 70 个车型节，项目含 360软包脚垫、底盘护板、平面尾箱垫、360全包尾箱、电动踏板、小桌板、吸顶电视、后排娱乐屏；脚垫材质原文有皮革/丝圈，护板材质原文有锰钢1.2mm、铝镁合金2.0mm 等档位，年款原文如 18款--、24款--、25款--、2025；材质、规格、年款均为适配库原文，未收录的车型具体以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里可以做丰田脚垫、护板和电动踏板？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。发来车型、年款和需求，先按适配库对照可装项目，再约到店确认。",
  },
  {
    question: "丰田改装项目需要备案吗？",
    answer:
      "涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界；页面不做备案承诺。",
  },
] as const;
