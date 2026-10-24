/**
 * 电动踏板车型适配库（已核实事实层）。
 *
 * 口径说明：
 * - 来源为用户已拍板的车型项目文档「二、产品介绍」，数据标识固定为
 *   `车型项目适配库 2026-09`（见 ELECTRIC_STEP_SOURCE）。
 * - 年款、车身形式、取信号方式、备注均逐字取自该口径，禁止改写或推测新增车型。
 * - 魏牌（brandSlug: null）只进总表，不新建品牌页。
 * - 本文件只承载结构化事实，供 L1 适配总表页（/product/electric-steps/fitment）
 *   与 L2 车型页卡片消费，不在此处编造价格、施工细节等未核实信息。
 */

export type ElectricStepSignal = "原厂对插" | "对插" | "线夹";

export type ElectricStepFitment = {
  /** 稳定锚点 key，如 "wenjie-m7" */
  readonly key: string;
  /** 品牌中文名 */
  readonly brand: string;
  /** 站内已有品牌页则填 slug，否则 null */
  readonly brandSlug: string | null;
  /** 车型名（含品牌前缀，如 "问界 M7"） */
  readonly model: string;
  /** 站内已有车型页则填 slug，否则 null */
  readonly modelSlug: string | null;
  /** 适配年款 */
  readonly years: string;
  /** 车身 / 动力形式 */
  readonly body: string;
  /** 取信号方式 */
  readonly signal: ElectricStepSignal;
  /** 备注，没有则 null */
  readonly note: string | null;
  /** 来源标识 */
  readonly source: string;
};

/** 适配数据的固定来源标识（车型项目适配库 2026-09）。 */
export const ELECTRIC_STEP_SOURCE = "车型项目适配库 2026-09";

/**
 * 21 条已核实的电动踏板适配记录。
 * 顺序按品牌分组：问界（4）→ 理想（5）→ 腾势（3）→ 岚图（1）→ 魏牌（8）。
 */
export const ELECTRIC_STEP_FITMENT: readonly ElectricStepFitment[] = [
  // ---- 问界（brandSlug: wenjie） ----
  {
    key: "wenjie-m6",
    brand: "问界",
    brandSlug: "wenjie",
    model: "问界 M6",
    modelSlug: "m6",
    years: "26 款",
    body: "增程 / 纯电",
    signal: "原厂对插",
    note: "全铝支架",
    source: ELECTRIC_STEP_SOURCE,
  },
  {
    key: "wenjie-m7",
    brand: "问界",
    brandSlug: "wenjie",
    model: "问界 M7",
    modelSlug: "m7",
    years: "2022–2026 款",
    body: "增程 / 纯电",
    signal: "原厂对插",
    note: "22–25 款 / 26 款均可；全铝支架",
    source: ELECTRIC_STEP_SOURCE,
  },
  {
    key: "wenjie-m8",
    brand: "问界",
    brandSlug: "wenjie",
    model: "问界 M8",
    modelSlug: "m8",
    years: "25 款",
    body: "增程 / 纯电",
    signal: "原厂对插",
    note: "全铝支架",
    source: ELECTRIC_STEP_SOURCE,
  },
  {
    key: "wenjie-m9",
    brand: "问界",
    brandSlug: "wenjie",
    model: "问界 M9",
    modelSlug: null,
    years: "2024–2026 款",
    body: "增程",
    signal: "原厂对插",
    note: "全铝支架",
    source: ELECTRIC_STEP_SOURCE,
  },

  // ---- 理想（brandSlug: li-auto） ----
  {
    key: "li-auto-one",
    brand: "理想",
    brandSlug: "li-auto",
    model: "理想 ONE",
    modelSlug: "one",
    years: "2019–2022 款",
    body: "增程 6 座中大型 SUV",
    signal: "原厂对插",
    note: null,
    source: ELECTRIC_STEP_SOURCE,
  },
  {
    key: "li-auto-l6",
    brand: "理想",
    brandSlug: "li-auto",
    model: "理想 L6",
    modelSlug: null,
    years: "2024 款起",
    body: "增程 5 座中型 SUV",
    signal: "原厂对插",
    note: null,
    source: ELECTRIC_STEP_SOURCE,
  },
  {
    key: "li-auto-l7",
    brand: "理想",
    brandSlug: "li-auto",
    model: "理想 L7",
    modelSlug: null,
    years: "2023 款起",
    body: "增程 5 座中大型 SUV",
    signal: "原厂对插",
    note: null,
    source: ELECTRIC_STEP_SOURCE,
  },
  {
    key: "li-auto-l8",
    brand: "理想",
    brandSlug: "li-auto",
    model: "理想 L8",
    modelSlug: null,
    years: "2023 款起",
    body: "增程 6 座中大型 SUV",
    signal: "原厂对插",
    note: null,
    source: ELECTRIC_STEP_SOURCE,
  },
  {
    key: "li-auto-l9",
    brand: "理想",
    brandSlug: "li-auto",
    model: "理想 L9",
    modelSlug: "l9",
    years: "2022 款起",
    body: "增程 6 座全尺寸 SUV",
    signal: "原厂对插",
    note: null,
    source: ELECTRIC_STEP_SOURCE,
  },

  // ---- 腾势（brandSlug: denza） ----
  {
    key: "denza-n8l",
    brand: "腾势",
    brandSlug: "denza",
    model: "腾势 N8L",
    modelSlug: null,
    years: "2025 款",
    body: "加长版",
    signal: "原厂对插",
    note: "与老款 N8 车型踏板不通用",
    source: ELECTRIC_STEP_SOURCE,
  },
  {
    key: "denza-n9",
    brand: "腾势",
    brandSlug: "denza",
    model: "腾势 N9",
    modelSlug: null,
    years: "2025 款",
    body: "大型 SUV",
    signal: "原厂对插",
    note: null,
    source: ELECTRIC_STEP_SOURCE,
  },
  {
    key: "denza-x",
    brand: "腾势",
    brandSlug: "denza",
    model: "腾势 X",
    modelSlug: null,
    years: "2020 年及以后",
    body: "插混",
    signal: "原厂对插",
    note: null,
    source: ELECTRIC_STEP_SOURCE,
  },

  // ---- 岚图（brandSlug: voyah） ----
  {
    key: "voyah-taishan",
    brand: "岚图",
    brandSlug: "voyah",
    model: "岚图 泰山（X8）",
    modelSlug: null,
    years: "2026 款",
    body: "—",
    signal: "原厂对插",
    note: "岚图车系中仅泰山提供此电动踏板",
    source: ELECTRIC_STEP_SOURCE,
  },

  // ---- 魏牌（brandSlug: null，只进总表） ----
  {
    key: "weipai-p8",
    brand: "魏牌",
    brandSlug: null,
    model: "魏牌 P8",
    modelSlug: null,
    years: "2017–2019 款",
    body: "插混（燃油版/插混版车身一致）",
    signal: "对插",
    note: null,
    source: ELECTRIC_STEP_SOURCE,
  },
  {
    key: "weipai-vv5",
    brand: "魏牌",
    brandSlug: null,
    model: "魏牌 VV5",
    modelSlug: null,
    years: "2017–2021 款",
    body: "燃油版",
    signal: "线夹",
    note: null,
    source: ELECTRIC_STEP_SOURCE,
  },
  {
    key: "weipai-vv6",
    brand: "魏牌",
    brandSlug: null,
    model: "魏牌 VV6",
    modelSlug: null,
    years: "2018–2021 款",
    body: "燃油版",
    signal: "线夹",
    note: null,
    source: ELECTRIC_STEP_SOURCE,
  },
  {
    key: "weipai-vv7",
    brand: "魏牌",
    brandSlug: null,
    model: "魏牌 VV7",
    modelSlug: null,
    years: "2017–2021 款",
    body: "含 VV7 GT、VV7 混动（燃油/混动车身一致）",
    signal: "线夹",
    note: null,
    source: ELECTRIC_STEP_SOURCE,
  },
  {
    key: "weipai-lanshan",
    brand: "魏牌",
    brandSlug: null,
    model: "魏牌 蓝山",
    modelSlug: null,
    years: "2023–2025 款",
    body: "DHT-PHEV 6 座 SUV",
    signal: "线夹",
    note: null,
    source: ELECTRIC_STEP_SOURCE,
  },
  {
    key: "weipai-latte",
    brand: "魏牌",
    brandSlug: null,
    model: "魏牌 拿铁",
    modelSlug: null,
    years: "2021–2024 款",
    body: "HEV / PHEV 车身一致",
    signal: "线夹",
    note: null,
    source: ELECTRIC_STEP_SOURCE,
  },
  {
    key: "weipai-mocha",
    brand: "魏牌",
    brandSlug: null,
    model: "魏牌 摩卡",
    modelSlug: null,
    years: "2021–2024 款",
    body: "燃油 / DHT / 插混车身一致",
    signal: "线夹",
    note: null,
    source: ELECTRIC_STEP_SOURCE,
  },
  {
    key: "weipai-macchiato",
    brand: "魏牌",
    brandSlug: null,
    model: "魏牌 玛奇朵",
    modelSlug: null,
    years: "2021–2023 款",
    body: "HEV / PHEV 车身一致",
    signal: "线夹",
    note: null,
    source: ELECTRIC_STEP_SOURCE,
  },
];

/** 「暂无电动踏板」清单（原样来自资料库文档，用于反向说明、避免无效到店咨询）。 */
export type ElectricStepUnavailable = {
  /** 品牌中文名 */
  readonly brand: string;
  /** 资料中限定的车型范围；null 表示资料未单独限定 */
  readonly models: string | null;
  /** 补充说明，没有则 null */
  readonly note: string | null;
};

export const ELECTRIC_STEP_UNAVAILABLE: readonly ElectricStepUnavailable[] = [
  { brand: "小米", models: "SU7 / YU7", note: null },
  { brand: "小鹏", models: "全系", note: null },
  { brand: "蔚来", models: "全系", note: null },
  { brand: "特斯拉", models: "全系", note: null },
  { brand: "极氪", models: "全系", note: "仅「电动踏板盖」内饰件，非踏板本体" },
  { brand: "乐道", models: null, note: null },
  { brand: "阿维塔", models: null, note: null },
  { brand: "极狐", models: null, note: null },
  { brand: "腾势", models: "D9", note: null },
  { brand: "魏牌", models: "高山 / V9X", note: null },
];

/** FAQ 条目类型。 */
export type ElectricStepFaqEntry = {
  readonly question: string;
  readonly answer: string;
};

/**
 * 适配总表 FAQ（4 条）。
 * 口径基于 src/lib/electric-step-products.ts 既有 FAQ 与施工流程改写，
 * 不新增价格等未核实事实。
 */
export const ELECTRIC_STEP_FAQ: readonly ElectricStepFaqEntry[] = [
  {
    question: "安装电动踏板需要破线吗？",
    answer:
      "蓝辉采用原车信号对接方式，通过专用插头读取门体信号并供电，尽量不改动原车线束。具体接线方式以到店后根据车型结构确认为准。",
  },
  {
    question: "电动踏板施工要多久？",
    answer:
      "通常需要 3-5 小时，具体取决于车型结构和踏板款式，部分结构复杂的车型可能延长至半天。建议提前预约，到店后评估准确工期。",
  },
  {
    question: "踏板收起后会影响车辆通过性吗？",
    answer:
      "踏板收起后尽量贴合车侧底部，不同车型的贴合度有差异，多数情况下不影响日常通过性。建议到店查看同车型收起后的离地间隙和安装效果再决定。",
  },
  {
    question: "怎么确认自己的车能不能装电动踏板？",
    answer:
      "可先对照本页适配总表，核对车型、适配年款和取信号方式；资料未覆盖或年款不一致的，到店确认车型、底盘结构和侧裙高度后，再给出可执行方案。",
  },
];

/**
 * 按品牌 slug + 车型 slug 反查适配记录，供 L2 车型页卡片使用。
 * 站内无对应适配记录时返回 null。
 */
export function getElectricStepFitmentByModelSlug(
  brandSlug: string,
  modelSlug: string
): ElectricStepFitment | null {
  return (
    ELECTRIC_STEP_FITMENT.find(
      (record) =>
        record.brandSlug === brandSlug && record.modelSlug === modelSlug
    ) ?? null
  );
}
