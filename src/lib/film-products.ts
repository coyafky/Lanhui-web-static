/**
 * 车膜产品线数据层（ppf 隐形车衣 / window-film 太阳膜 / color-film 改色膜）。
 *
 * 纪律：
 * - 不收录任何价格，价格到店询价；
 * - 不出现供应商名称与膜材型号编号，仅以品类名＋系列名呈现；
 * - 厚度（mil）、延伸率（%）、耐候（QUV 小时）等参数按产品图原文呈现，不换算、不推断；
 * - 缺失项不补。
 */

import { filmColorGroups, type FilmColorGroup } from "./film-color-cards.generated";

/* ============================== 隐形车衣 ============================== */

export type PpfSeries = {
  /** 系列名（麒麟 / 貔貅 / 青龙 / 白虎 / 朱雀 / 玄武） */
  name: string;
  finish: string;
  material: string;
  thickness: string;
  coating: string;
  glue: string;
  elongation: string;
  weathering: string;
  gloss: string;
  warranty: string;
  audience: string;
  image: string;
  imageAlt: string;
};

export const ppfSeries: PpfSeries[] = [
  {
    name: "貔貅",
    finish: "有色亮面",
    material: "国产军工级 TPU",
    thickness: "6.5mil",
    coating: "热固化涂层",
    glue: "Ashland® 亚什兰胶水",
    elongation: ">400%",
    weathering: "QUV 1200H",
    gloss: "增亮 30%",
    warranty: "3年",
    audience: "预算优先、城市通勤，先获得基础漆面防护与亮面效果",
    image: "/images/products/ppf/YM6.5mil车衣.webp",
    imageAlt: "貔貅系列亮面隐形车衣产品图",
  },
  {
    name: "青龙",
    finish: "有色亮面",
    material: "国产军工级 TPU",
    thickness: "7.5mil",
    coating: "热固化涂层",
    glue: "Ashland® 亚什兰胶水",
    elongation: ">400%",
    weathering: "QUV 1200H",
    gloss: "增亮 40%",
    warranty: "5年",
    audience: "日常通勤频率高，看重厚度、亮面与 5 年质保的均衡选择",
    image: "/images/products/ppf/青龙7.5mil车衣.webp",
    imageAlt: "青龙系列亮面隐形车衣产品图",
  },
  {
    name: "白虎",
    finish: "有色亮面",
    material: "德国 TPU 脂肪族",
    thickness: "7.5mil",
    coating: "双层 UV 固化涂层",
    glue: "Ashland® 亚什兰胶水",
    elongation: ">450%",
    weathering: "QUV 1250H",
    gloss: "增亮 45%",
    warranty: "8年",
    audience: "重视耐黄变、抗划痕与亮度，从基础防护向进阶升级",
    image: "/images/products/ppf/白虎YM70车衣.webp",
    imageAlt: "白虎系列亮面隐形车衣产品图",
  },
  {
    name: "朱雀",
    finish: "有色亮面",
    material: "德国 TPU 脂肪族",
    thickness: "8.5mil",
    coating: "双层 UV 固化涂层",
    glue: "Ashland® 亚什兰胶水",
    elongation: ">480%",
    weathering: "QUV 1300H",
    gloss: "增亮 50%",
    warranty: "10年",
    audience: "新车、高价值车辆或长期持有，对厚度、亮度与质保都有要求",
    image: "/images/products/ppf/朱雀YM80车衣.webp",
    imageAlt: "朱雀系列亮面隐形车衣产品图",
  },
  {
    name: "玄武",
    finish: "有色哑面",
    material: "德国 TPU 脂肪族",
    thickness: "8.5mil",
    coating: "双层 UV 固化涂层",
    glue: "Ashland® 亚什兰胶水",
    elongation: ">480%",
    weathering: "QUV 1300H",
    gloss: "哑光，无增亮系数",
    warranty: "5年",
    audience: "偏爱哑光、磨砂视觉，同时希望兼顾漆面保护",
    image: "/images/products/ppf/玄武YM80哑光系列车衣.webp",
    imageAlt: "玄武系列哑光隐形车衣产品图",
  },
  {
    name: "麒麟",
    finish: "有色亮面",
    material: "德国 TPU 脂肪族",
    thickness: "10mil",
    coating: "双层 UV 固化涂层",
    glue: "Ashland® 亚什兰胶水",
    elongation: ">550%",
    weathering: "QUV 1500H",
    gloss: "增亮 60%",
    warranty: "12年",
    audience: "旗舰厚度、高延伸率与长质保周期，面向高价值与长期持有车辆",
    image: "/images/products/ppf/麒麟YM-10车衣.webp",
    imageAlt: "麒麟系列亮面隐形车衣产品图",
  },
];

/* ============================== 太阳膜套餐 ============================== */

export type WindowPackage = {
  name: string;
  seriesLabel: string;
  scheme: string;
  frontTser: string;
  rearTser: string;
  thickness: string;
  warranty: string;
  audience: string;
  image: string;
  imageAlt: string;
};

export const windowPackages: WindowPackage[] = [
  {
    name: "春分",
    seriesLabel: "健康系列 · 环保陶瓷膜",
    scheme: "前挡环保陶瓷膜 ＋ 四门侧挡、后挡环保陶瓷膜",
    frontTser: "前挡总太阳能阻隔率 47%",
    rearTser: "侧后挡总太阳能阻隔率 49%",
    thickness: "前挡 2mil / 侧后挡 1.5mil",
    warranty: "5年",
    audience: "日常通勤，重视基础防晒、常规隔热与车内隐私",
    image: "/images/products/window-film/春分套餐.webp",
    imageAlt: "春分健康系列太阳膜套餐产品图",
  },
  {
    name: "谷雨",
    seriesLabel: "护肤系列 · 前挡单层金属膜＋侧后挡陶瓷护肤膜",
    scheme: "前挡单层金属膜 ＋ 四门侧挡、后挡陶瓷护肤膜",
    frontTser: "前挡总太阳能阻隔率 53%",
    rearTser: "侧后挡总太阳能阻隔率 57%",
    thickness: "2mil",
    warranty: "8年",
    audience: "侧重紫外线阻隔、常规隔热与隐私，前挡侧后挡差异化配置",
    image: "/images/products/window-film/谷雨套餐.webp",
    imageAlt: "谷雨护肤系列太阳膜套餐产品图",
  },
  {
    name: "白露",
    seriesLabel: "变色系列 · 前挡变色陶瓷膜＋侧后挡双银金属膜",
    scheme: "前挡变色陶瓷膜 ＋ 四门侧挡、后挡双银金属膜",
    frontTser: "前挡总太阳能阻隔率 53%–62%（感光区间）",
    rearTser: "侧后挡总太阳能阻隔率 65%",
    thickness: "3mil",
    warranty: "10年",
    audience: "追求高隔热指标、长质保与感光变化视觉",
    image: "/images/products/window-film/白露套餐.webp",
    imageAlt: "白露变色系列太阳膜套餐产品图",
  },
  {
    name: "帝王紫（凤凰红）",
    seriesLabel: "紫系列 · 彩色前挡",
    scheme: "彩色视觉前挡 ＋ 四门侧挡、后挡",
    frontTser: "前挡总太阳能阻隔率 56%",
    rearTser: "侧后挡按门店当期方案配置",
    thickness: "前挡 2mil",
    warranty: "7年",
    audience: "喜欢鲜明前挡色彩风格，兼顾防晒与隔热",
    image: "/images/products/window-film/帝王紫.webp",
    imageAlt: "帝王紫凤凰红彩色前挡太阳膜产品图",
  },
];

/** 现场隔热实测记录（未标注所测膜型号，仅作施工与检测场景参考）。 */
export type HeatTestShot = {
  image: string;
  caption: string;
  reading?: string;
};

export const heatTestShots: HeatTestShot[] = [
  {
    image: "/images/products/window-film/隔热实测/1.webp",
    caption: "门店贴膜施工场景记录（2026-08-06，顺德大良）",
  },
  {
    image: "/images/products/window-film/隔热实测/2.webp",
    caption: "仪器直接测试",
    reading: "约 867 W/m²",
  },
  {
    image: "/images/products/window-film/隔热实测/3.webp",
    caption: "未贴隔热膜",
    reading: "约 1805 W/m²",
  },
  {
    image: "/images/products/window-film/隔热实测/4.webp",
    caption: "主副驾贴膜后",
    reading: "约 194 W/m²",
  },
  {
    image: "/images/products/window-film/隔热实测/5.webp",
    caption: "前挡贴膜后",
    reading: "约 489 W/m²",
  },
];

/** 报价口径：面向五座及以下小轿车/小型 SUV 全车膜且不含天窗。 */
export const WINDOW_PRICING_SCOPE =
  "资料报价口径面向五座及以下小轿车、小型 SUV 的全车膜方案且不含天窗；更大尺寸或特殊车型按实际情况调整，具体价格到店询价。";

/* ============================== 改色膜色卡 ============================== */

export const colorCardGroups: FilmColorGroup[] = filmColorGroups;

/* ============================== FAQ ============================== */

export type FilmFaq = { question: string; answer: string };

export const ppfFaqs: FilmFaq[] = [
  {
    question: "10mil 和 8.5mil 的隐形车衣有什么区别？",
    answer:
      "10mil 是目录中膜体最厚的型号，断裂延伸率大于 550%，通过 QUV 1500H 耐候测试，提供 12 年质保；8.5mil 高阶亮面型号断裂延伸率大于 480%，通过 QUV 1300H 耐候测试，提供 10 年质保。厚度影响膜体抗冲击余量与贴合表现，具体按车型与用车场景到店确认。",
  },
  {
    question: "隐形车衣质保多久？",
    answer:
      "目录内 6 款亮面与哑光型号质保期为 3 年至 12 年不等，质保年限与条款以所选系列及门店质保卡为准。",
  },
  {
    question: "贴隐形车衣会损伤原车漆吗？",
    answer:
      "隐形车衣是覆盖在清漆表面的透明保护层，规范施工与日后规范撕除一般不损伤原厂漆；旧车、补漆部位或漆面老化情况需先到店检查再决定方案。",
  },
  {
    question: "新车什么时候贴隐形车衣合适？",
    answer:
      "建议提车后尽快施工，施工前先做漆面检查与清洁。是否适合全车贴、哪些部位优先贴，以门店现场评估为准。",
  },
  {
    question: "佛山哪里可以贴隐形车衣？",
    answer:
      "蓝辉轻改顺德大良店承接隐形车衣施工，佛山顺德大良可直接到店，广州及周边可预约上门评估，施工方案以门店现场检查为准。",
  },
];

export const windowPackageFaqs: FilmFaq[] = [
  {
    question: "春分、谷雨、白露、帝王紫（凤凰红）套餐怎么选？",
    answer:
      "日常通勤、基础防晒隔热选春分；侧重紫外线阻隔与常规隔热选谷雨；追求高隔热指标、长质保与感光变化选白露；喜欢鲜明前挡色彩风格选帝王紫（凤凰红）。最终按车型、车窗面积与用车场景到店确认。",
  },
  {
    question: "套餐报价包含天窗吗？",
    answer:
      "资料报价口径面向五座及以下小轿车、小型 SUV 的全车膜方案且不含天窗；更大尺寸或特殊车型按实际情况调整，具体价格到店询价。",
  },
  {
    question: "金属膜会影响 ETC 或手机信号吗？",
    answer:
      "我们会按车型天线位置推荐膜材方案；天线位于挡风玻璃区域的车型，优先考虑信号友好方案，到店结合车型设备确认。",
  },
  {
    question: "贴完窗膜多久可以升降车窗？",
    answer:
      "建议施工后 3-5 天内不升降车窗，待膜层水分蒸发、胶层固化，具体以门店交付时告知的养护时间为准。",
  },
];

export const colorFilmFaqs: FilmFaq[] = [
  {
    question: "贴改色膜需要备案吗？",
    answer:
      "改色膜涉及车身颜色变更，需按当地交管规定办理车身颜色变更备案；本页面不做备案承诺，到店评估时说明合规边界与办理流程。",
  },
  {
    question: "改色膜会损伤原车漆吗？",
    answer:
      "规范施工与日后规范撕除一般不损伤原厂漆；补漆面、旧漆面或漆面老化情况需先到店检查。",
  },
  {
    question: "色卡和实车效果一样吗？",
    answer:
      "色卡仅为色板参考，实际效果受车型、光线与施工影响，实际效果以实车为准，建议到店查看实物色板后再决定。",
  },
  {
    question: "哑光膜局部修补会有视觉差异吗？",
    answer:
      "哑光膜局部修补后可能存在视觉差异，修补方案与质保范围请在施工前与门店确认。",
  },
  {
    question: "改色膜质保多久？",
    answer:
      "质保期按所选系列的质保条款执行，到店确认具体范围与养护要求。",
  },
];
