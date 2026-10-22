/**
 * 红旗品牌一级页数据（2026-10-05 新增，参照 toyota-series-services 模式）
 *
 * 定位：红旗全系保护与舒适升级服务入口（顺德大良）。
 * 品牌页承载 17 车型分组速览 + 5 类适配件功能特性 + HS7/H5 主力车型入口；
 * 车型分组数据在 src/lib/hongqi-model-groups.ts，项目数据在 src/lib/hongqi-all-models-products.ts，
 * 子页明细在 src/lib/hongqi-model-detail.ts。
 *
 * 结构：
 *   - hongqiSeriesFaq           8 条 FAQ（全系覆盖 / 脚垫尾箱 / 护板 / 踏板 / 360° 说明 / 适配库记录 / 本地门店 / 备案）
 *   - hongqiDouyinHighlights    抖音案例入口 3 项
 */

// ---- 抖音案例入口 ----

export type HongqiDouyinHighlight = {
  iconName: string;
  label: string;
};

export const hongqiDouyinHighlights: readonly HongqiDouyinHighlight[] = [
  { iconName: "Play", label: "红旗 SUV 施工过程实拍" },
  { iconName: "Layers", label: "护板与踏板安装细节" },
  { iconName: "Wrench", label: "专车脚垫版型对比" },
] as const;

// ---- FAQ ----

export type HongqiSeriesFaqItem = {
  question: string;
  answer: string;
};

export const hongqiSeriesFaq: readonly HongqiSeriesFaqItem[] = [
  {
    question: "红旗 17 款车型都有适配件数据吗？",
    answer:
      "本页适装表覆盖 17 款红旗车型（含新能源序列）。HS7、H5 两款数据量大，单独开了明细页；其余车型在品牌页下方直接看项目说明。拿不准的话把车型、年款、动力版本发来，先筛一遍再约到店。",
  },
  {
    question: "脚垫和尾箱垫怎么选？",
    answer:
      "软包脚垫按座椅排数和滑道结构开模，座椅滑轨和地毯边缘一并包住，雨天、带娃场景好打理；尾箱垫按是否带侧包、音响位开孔和座椅布局区分。具体版本到店按实车确认。",
  },
  {
    question: "底盘护板所有红旗都能装吗？",
    answer:
      "不是所有车型都有护板记录，覆盖 E-QM5、H5、H9、HS5、HS7 五款。材质分锰钢 1.2mm、碳钢 1.5mm、铝镁合金 2.0mm、塑钢 5.0mm、碳纤 5.0mm 等档位，件套和保护位置按动力形式与底盘结构对应，装前核对。",
  },
  {
    question: "电动踏板哪些车能装？",
    answer:
      "覆盖 HS5、HS6、HS7 三款。取信号方式分原厂对插和线夹两种，装前确认门体结构、离地间隙和控制逻辑，不是全系通用项目。",
  },
  {
    question: "「360°」是什么意思？",
    answer:
      "指全包工艺：脚垫按车型把座椅滑轨、地毯边缘、门槛一起包进去，不是品牌名。按车型开模，装出来跟原车贴合，不挡踏板和出风口。",
  },
  {
    question: "供应商适配库里记录了哪些红旗车型和项目？",
    answer:
      "适配速查表按车型分组收录 E-QM5、H5、H9、HS5、HS7、HS6、E-HS3、HS3、H6、H7、EH7、E-HS9、HQ9、LS7、天工05、天工06、天工08 共 17 个车型节；项目含 360软包脚垫、平面尾箱垫、360全包尾箱、底盘护板、电动踏板；护板材质原文有锰钢1.2mm、碳钢1.5mm、铝镁合金2.0mm、塑钢5.0mm、碳纤5.0mm 等档位，年款原文如 18款--22款、23款--、25款--；材质、规格、年款均为适配库原文，未收录的车型具体以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里可以做红旗脚垫、护板和电动踏板？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工。发来车型、年款和需求，先按适配库对照可装项目，再约到店确认。",
  },
  {
    question: "红旗改装项目需要备案吗？",
    answer:
      "涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界；页面不做备案承诺。",
  },
] as const;
