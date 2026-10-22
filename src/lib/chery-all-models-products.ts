export type CheryProjectKey = "skid-plate" | "power-step";

export interface CheryProject {
  key: CheryProjectKey;
  name: string;
  tagline: string;
  description: string;
  coverage: string;
  examples: string;
}

export const cheryProjects: CheryProject[] = [
  {
    key: "skid-plate",
    name: "底盘护板",
    tagline: "护住发动机电机电池油箱，托底磕碰不心疼",
    description: "专车开模的底盘护板，覆盖发动机、线束、电池、油箱、电机等关键部位，防托底磕碰与石子飞溅；材质多档可选（铝镁合金 2.0mm / 锰钢 1.2mm / 碳钢 1.5mm / 塑钢 5.0mm / 碳纤 5.0mm），按用车路况到店推荐。",
    coverage: "覆盖28款车型",
    examples: "艾瑞泽 / 风云 / 瑞虎 / 经典轿车 / 新能源",
  },
  {
    key: "power-step",
    name: "电动踏板",
    tagline: "开门自动伸出、关门自动收回，老人小孩上下车省力",
    description: "专车专用电动踏板，原厂安装位免打孔，开门自动伸出、关门自动收回；取信号方式按年款区分（线夹/对插），不破线不影响原车线路。适合常载老人小孩、车身偏高的SUV。",
    coverage: "覆盖19款车型",
    examples: "风云T9/T11 / 瑞虎8/9 / 探索06 / JAECOO",
  },
];

export interface CheryFitmentRow {
  version: string;
  years: string;
  note: string;
}

export interface CheryFitmentEntry {
  slug: string;
  name: string;
  group: string;
  rows: { projectName: string; rows: CheryFitmentRow[] }[];
}

export const cheryFitmentEntries: CheryFitmentEntry[] = [
  {
    slug: "arrizo-5",
    name: "奇瑞艾瑞泽5",
    group: "arrizo",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2016-2021", note: "1.5L；材质多档可选" },
        ],
      },
    ],
  },
  {
    slug: "arrizo-5-plus",
    name: "奇瑞艾瑞泽5PLUS",
    group: "arrizo",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2021-2023", note: "1.5L / 1.5T" },
        ],
      },
    ],
  },
  {
    slug: "arrizo-7",
    name: "奇瑞艾瑞泽7",
    group: "arrizo",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2013-2017", note: "1.6L" },
        ],
      },
    ],
  },
  {
    slug: "arrizo-8",
    name: "奇瑞艾瑞泽8",
    group: "arrizo",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2022-2024", note: "1.6T；塑钢/锰钢/碳钢/铝镁材质可选" },
        ],
      },
    ],
  },
  {
    slug: "arrizo-ex",
    name: "奇瑞艾瑞泽EX",
    group: "arrizo",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2019", note: "1.5L" },
        ],
      },
    ],
  },
  {
    slug: "arrizo-gx",
    name: "奇瑞艾瑞泽GX",
    group: "arrizo",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2018-2021", note: "1.5T" },
        ],
      },
    ],
  },
  {
    slug: "fengyun-a9",
    name: "奇瑞风云A9",
    group: "fengyun",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "三件套（前电机/电池前/电池后）", years: "2026", note: "续航655" },
        ],
      },
    ],
  },
  {
    slug: "fengyun-a9l",
    name: "奇瑞风云A9L",
    group: "fengyun",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "五件套（发动机/电池前/电池后/油箱/后电机）", years: "2025", note: "续航260/200；发动机、电池前与T11通用" },
        ],
      },
    ],
  },
  {
    slug: "fengyun-t8",
    name: "奇瑞风云T8",
    group: "fengyun",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "三件套（前电机/电池/油箱）", years: "2025", note: "续航130" },
        ],
      },
      {
        projectName: "电动踏板",
        rows: [
          { version: "标准", years: "2025", note: "线夹取信号" },
        ],
      },
    ],
  },
  {
    slug: "fengyun-t9",
    name: "奇瑞风云T9",
    group: "fengyun",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "五件套（发动机/线束/电池/油管/油箱）", years: "2024", note: "三元锂续航100/120、磷酸铁锂95/120；发动机异形盖板；与T10通用" },
        ],
      },
      {
        projectName: "电动踏板",
        rows: [
          { version: "标准", years: "2024+ 线夹；2026 对插", note: "" },
        ],
      },
    ],
  },
  {
    slug: "fengyun-t10",
    name: "奇瑞风云T10",
    group: "fengyun",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "五件套（发动机/线束1/电池/线束2/油箱）", years: "2024", note: "续航200/210；发动机异形盖板；与T9通用" },
        ],
      },
      {
        projectName: "电动踏板",
        rows: [
          { version: "标准", years: "2024+", note: "线夹取信号" },
        ],
      },
    ],
  },
  {
    slug: "fengyun-t11",
    name: "奇瑞风云T11",
    group: "fengyun",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "五件套（前电机/电池前/电池后/油箱/后电机）", years: "2026", note: "四驱/两驱续航220；前电机、电池前与A9L通用；发动机异形盖板" },
        ],
      },
      {
        projectName: "电动踏板",
        rows: [
          { version: "标准", years: "2026", note: "对插取信号" },
        ],
      },
    ],
  },
  {
    slug: "tiggo",
    name: "奇瑞瑞虎",
    group: "tiggo",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2012-2013", note: "1.6L / 1.8L / 2.0L" },
        ],
      },
      {
        projectName: "电动踏板",
        rows: [
          { version: "标准", years: "2025", note: "线夹取信号" },
        ],
      },
    ],
  },
  {
    slug: "tiggo-3",
    name: "奇瑞瑞虎3",
    group: "tiggo",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2014-2019", note: "1.6L / 1.5L / 1.5T；20-22款1.5T顶油底壳不能装" },
        ],
      },
    ],
  },
  {
    slug: "tiggo-3x",
    name: "奇瑞瑞虎3X",
    group: "tiggo",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2017-2024", note: "1.5L；含PLUS共享" },
        ],
      },
    ],
  },
  {
    slug: "tiggo-5",
    name: "奇瑞瑞虎5",
    group: "tiggo",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2014-2017", note: "2.0L / 1.5T" },
        ],
      },
    ],
  },
  {
    slug: "tiggo-5x",
    name: "奇瑞瑞虎5X",
    group: "tiggo",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "两件套（发动机+线束）", years: "2017-2024", note: "1.5T / 1.5L" },
        ],
      },
    ],
  },
  {
    slug: "tiggo-7",
    name: "奇瑞瑞虎7",
    group: "tiggo",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2016-2024", note: "混动/PLUS共享；2.0L / 1.5T" },
        ],
      },
      {
        projectName: "电动踏板",
        rows: [
          { version: "标准", years: "2022-2024 线夹；2025 线夹（1.5T/C-DM）；2026 对插（瑞虎7L）", note: "" },
        ],
      },
    ],
  },
  {
    slug: "tiggo-8",
    name: "奇瑞瑞虎8",
    group: "tiggo",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "两件套（发动机+油箱）", years: "2018-2024；2026", note: "鲲鹏版；1.5T / 1.6T / 2.0T" },
        ],
      },
      {
        projectName: "电动踏板",
        rows: [
          { version: "标准", years: "2018-2025；2026", note: "线夹取信号" },
        ],
      },
    ],
  },
  {
    slug: "tiggo-8l",
    name: "奇瑞瑞虎8L",
    group: "tiggo",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2024", note: "护板通用；异形盖板" },
        ],
      },
      {
        projectName: "电动踏板",
        rows: [
          { version: "标准", years: "2024+", note: "线夹取信号" },
        ],
      },
    ],
  },
  {
    slug: "tiggo-8-plus",
    name: "奇瑞瑞虎8PLUS",
    group: "tiggo",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2021-2024；2025", note: "插电混动；鲲鹏版/混动；1.6T / 2.0T；通用风云T8发动机" },
        ],
      },
    ],
  },
  {
    slug: "tiggo-8-pro",
    name: "奇瑞瑞虎8PRO",
    group: "tiggo",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2022、2023", note: "1.6T / 2.0T" },
        ],
      },
      {
        projectName: "电动踏板",
        rows: [
          { version: "标准", years: "2023+", note: "线夹取信号" },
        ],
      },
    ],
  },
  {
    slug: "tiggo-9",
    name: "奇瑞瑞虎9",
    group: "tiggo",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "五件套（发动机/线束1/线束2/电池/油箱）", years: "2023、2024；2025", note: "插电混动 C-DM；三元锂/磷酸铁锂续航106；2.0T；与风云T9通用；异形盖板" },
        ],
      },
      {
        projectName: "电动踏板",
        rows: [
          { version: "标准", years: "2023+ 线夹；C-DM 2025 线夹", note: "" },
        ],
      },
    ],
  },
  {
    slug: "a5",
    name: "奇瑞A5",
    group: "classic",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2006-2009", note: "1.5L / 1.6L / 1.8L" },
        ],
      },
    ],
  },
  {
    slug: "e3",
    name: "奇瑞E3",
    group: "classic",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2015", note: "1.5L" },
        ],
      },
    ],
  },
  {
    slug: "e5",
    name: "奇瑞E5",
    group: "classic",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2011-2014", note: "1.5L / 1.8L" },
        ],
      },
    ],
  },
  {
    slug: "big-ant",
    name: "奇瑞大蚂蚁",
    group: "ev",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（后电机）", years: "2020", note: "纯电" },
        ],
      },
    ],
  },
  {
    slug: "qq-ice-cream",
    name: "奇瑞QQ冰淇淋",
    group: "ev",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "两件套（前电机+电池）", years: "2022-2024", note: "纯电续航120/170；专用支架；24款前电机不能装" },
        ],
      },
    ],
  },
];
