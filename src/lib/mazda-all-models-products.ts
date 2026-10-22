import type { MazdaModelGroupKey } from "./mazda-model-groups";

/**
 * 马自达项目功能特性 — 品牌页 S2/S3 数据源。
 * 2 类项目：底盘护板（12 车型全系）/ 电动踏板（CX-5）。
 * 车型列表模式：项目卡说清「做什么」，型号编号不上页面，仅留档数据层。
 */
export type MazdaProjectKey = "skid-plate" | "power-step";

export type MazdaProject = {
  id: MazdaProjectKey;
  name: string;
  feature: string;
  modelCount: number;
  topModels: readonly string[];
};

export const MAZDA_PROJECT_ORDER: readonly MazdaProjectKey[] = ["skid-plate", "power-step"];

export const mazdaProjects: readonly MazdaProject[] = [
  {
    id: "skid-plate",
    name: "底盘护板",
    feature:
      "发动机、电池、线束等底盘部件的底部保护，防石子飞溅和托底刮蹭；材质分碳纤 5.0mm、塑钢 5.0mm、锰钢 1.2mm、碳钢 1.5mm、铝镁合金 2.0mm 等档位",
    modelCount: 12,
    topModels: ["马自达3昂克赛拉", "CX-5", "CX-4"],
  },
  {
    id: "power-step",
    name: "电动踏板",
    feature: "原厂对插取电，不动原车线路；老人小孩上下车省力",
    modelCount: 1,
    topModels: ["CX-5"],
  },
];

/**
 * 车型适配明细 — 品牌页 S3 数据源（车型 → 年款 / 材质 / 结构说明）。
 * 每车型按项目聚合；note 拼排量、版型与安装要点。
 */
export type MazdaFitmentRow = {
  year: string;
  note: string;
};

export type MazdaFitmentEntry = {
  slug: string;
  name: string;
  group: MazdaModelGroupKey;
  rows: readonly {
    projectName: string;
    rows: readonly MazdaFitmentRow[];
  }[];
};

export const mazdaFitmentEntries: readonly MazdaFitmentEntry[] = [
  {
    slug: "mazda3",
    name: "马自达3（老款）",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          {
            year: "2006-2013 款",
            note: "碳纤 5.0mm / 塑钢 5.0mm · 1.6L 排量 · 老款版型",
          },
        ],
      },
    ],
  },
  {
    slug: "mazda3-axela",
    name: "马自达3昂克赛拉",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          {
            year: "2014-2019 款、2020-2023 款",
            note: "全材质档位 · 1.5L / 2.0L / 1.6L 排量 · 版型通用，需拆原车板",
          },
        ],
      },
    ],
  },
  {
    slug: "mazda6",
    name: "马自达6",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          {
            year: "2006-2015 款",
            note: "全材质档位 · 2.0L 排量 · 2.3 排量不适合",
          },
        ],
      },
    ],
  },
  {
    slug: "atenza",
    name: "阿特兹",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          {
            year: "2014-2021 款",
            note: "全材质档位 · 2.0L / 2.5L 排量 · 需拆原车板",
          },
        ],
      },
    ],
  },
  {
    slug: "ruyi",
    name: "睿翼",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          {
            year: "2010-2015 款",
            note: "全材质档位 · 2.0L / 2.5L 排量",
          },
        ],
      },
    ],
  },
  {
    slug: "mazda8",
    name: "马自达8",
    group: "mpv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          {
            year: "2013-2015 款",
            note: "全材质档位 · 2.3L / 2.5L 排量",
          },
        ],
      },
    ],
  },
  {
    slug: "cx4",
    name: "马自达CX-4",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          {
            year: "2016-2021 款",
            note: "全材质档位 · 2.0L / 2.5L 排量 · 需拆原车板",
          },
        ],
      },
    ],
  },
  {
    slug: "cx5",
    name: "马自达CX-5",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          {
            year: "2013-2024 款、2023-2024 款",
            note: "全材质档位 · 2.0L / 2.5L 排量 · 需拆原车板",
          },
        ],
      },
      {
        projectName: "电动踏板",
        rows: [
          {
            year: "2017 款起",
            note: "原厂对插取电，不动原车线路",
          },
        ],
      },
    ],
  },
  {
    slug: "cx7",
    name: "马自达CX-7",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          {
            year: "2014 款",
            note: "全材质档位 · 2.5L / 2.3T 排量",
          },
        ],
      },
    ],
  },
  {
    slug: "cx8",
    name: "马自达CX-8",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          {
            year: "2019 款",
            note: "全材质档位 · 2.5L 排量",
          },
        ],
      },
    ],
  },
  {
    slug: "cx30",
    name: "马自达CX-30",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          {
            year: "2020-2022 款",
            note: "全材质档位 · 2.0L 排量 · 版型通用",
          },
        ],
      },
    ],
  },
  {
    slug: "ez60",
    name: "马自达EZ-60",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          {
            year: "2025 款（增程 200 续航）",
            note: "锰钢 1.2mm / 铝镁合金 2.0mm · 五件套：前电机、线束、电池、油箱、后电机",
          },
          {
            year: "2025 款（纯电 200 续航）",
            note: "四件套：发动机（前电机）、电池、油箱（后电机）、后电机护板 —— 原表按燃油结构表述，装前以实车核对",
          },
          {
            year: "2025 款（纯电 EV600 续航 MAX）",
            note: "四件套：前电机、前电池、后电池、后电机",
          },
        ],
      },
    ],
  },
];
