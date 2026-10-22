export type ChevroletProjectKey = "skid-plate" | "power-step";

export interface ChevroletProject {
  key: ChevroletProjectKey;
  name: string;
  tagline: string;
  description: string;
  coverage: string;
  examples: string;
}

export const chevroletProjects: ChevroletProject[] = [
  {
    key: "skid-plate",
    name: "底盘护板",
    tagline: "护住发动机与底盘关键部位，托底磕碰不心疼",
    description: "专车开模的底盘护板，保护发动机与底盘关键部位，防托底磕碰与石子飞溅；材质多档可选（铝镁合金 2.0mm / 锰钢 1.2mm / 碳钢 1.5mm / 塑钢 5.0mm / 碳纤 5.0mm），按用车路况到店推荐。",
    coverage: "覆盖16款车型",
    examples: "皮卡 / SUV / 轿车 / 小型家用",
  },
  {
    key: "power-step",
    name: "电动踏板",
    tagline: "开门自动伸出、关门自动收回，老人小孩上下车省力",
    description: "专车专用电动踏板，原厂安装位免打孔，开门自动伸出、关门自动收回；不破线不影响原车线路。SUV 车身偏高，配电动踏板对老人小孩更友好。",
    coverage: "覆盖2款车型",
    examples: "探界者（2017+）/ 开拓者（2020+）",
  },
];

export interface ChevroletFitmentRow {
  version: string;
  years: string;
  note: string;
}

export interface ChevroletFitmentEntry {
  slug: string;
  name: string;
  group: string;
  rows: { projectName: string; rows: ChevroletFitmentRow[] }[];
}

export const chevroletFitmentEntries: ChevroletFitmentEntry[] = [
  {
    slug: "silverado-2500hd",
    name: "雪佛兰索罗德2500HD",
    group: "pickup",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "全车底盘（铝镁合金）", years: "在售", note: "底盘全部位护板" },
        ],
      },
    ],
  },
  {
    slug: "trailblazer",
    name: "雪佛兰创界",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2019", note: "1.3T" },
        ],
      },
    ],
  },
  {
    slug: "trax",
    name: "雪佛兰创酷",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2014-2023", note: "1.4T；1.0T/1.3T" },
        ],
      },
    ],
  },
  {
    slug: "blazer",
    name: "雪佛兰开拓者",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2020-2023", note: "2.0T" },
        ],
      },
      {
        projectName: "电动踏板",
        rows: [
          { version: "标准", years: "2020+", note: "线夹取信号" },
        ],
      },
    ],
  },
  {
    slug: "captiva",
    name: "雪佛兰科帕奇",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2014-2017", note: "2.4L" },
        ],
      },
    ],
  },
  {
    slug: "equinox",
    name: "雪佛兰探界者",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "两驱 / 四驱", years: "2017-2023", note: "1.5T两驱；1.5T四驱/2.0T；1.5T/2.0T；需配异形盖板" },
        ],
      },
      {
        projectName: "电动踏板",
        rows: [
          { version: "标准", years: "2017+", note: "对插取信号" },
        ],
      },
    ],
  },
  {
    slug: "orlando",
    name: "雪佛兰沃兰多",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2018-2020", note: "1.3T" },
        ],
      },
    ],
  },
  {
    slug: "monza",
    name: "雪佛兰科鲁泽",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2019-2024", note: "1.0T/1.3T；1.5L" },
        ],
      },
    ],
  },
  {
    slug: "cruze",
    name: "雪佛兰科鲁兹",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "全新款 / 经典款", years: "2009-2019", note: "1.5L/1.4T；1.6L/1.6T/1.8L" },
        ],
      },
    ],
  },
  {
    slug: "cavalier",
    name: "雪佛兰科沃兹",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2016-2020", note: "1.5L、1.0T；1.0T；原车胶板需开孔" },
        ],
      },
    ],
  },
  {
    slug: "malibu",
    name: "雪佛兰迈锐宝",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2012-2019", note: "1.5T；2.0L/2.4L/1.6T" },
        ],
      },
    ],
  },
  {
    slug: "malibu-xl",
    name: "雪佛兰迈锐宝XL",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2016-2023", note: "1.5T；2.5L；1.3T/2.0T/1.5T；需配异形盖板一颗" },
        ],
      },
    ],
  },
  {
    slug: "aveo",
    name: "雪佛兰爱唯欧",
    group: "compact",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2011-2014", note: "1.4L/1.6L" },
        ],
      },
    ],
  },
  {
    slug: "lova-rv",
    name: "雪佛兰乐风RV",
    group: "compact",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2016-2019", note: "1.5L" },
        ],
      },
    ],
  },
  {
    slug: "sail",
    name: "雪佛兰赛欧",
    group: "compact",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2010-2014", note: "1.2L/1.4L" },
        ],
      },
    ],
  },
  {
    slug: "sail-3",
    name: "雪佛兰赛欧3",
    group: "compact",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2015-2019", note: "1.3L/1.5L" },
        ],
      },
    ],
  },
];
