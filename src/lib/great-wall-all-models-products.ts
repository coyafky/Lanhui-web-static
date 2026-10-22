export type GreatWallProjectKey = "skid-plate" | "power-step";

export interface GreatWallProject {
  key: GreatWallProjectKey;
  name: string;
  tagline: string;
  description: string;
  coverage: string;
  examples: string;
}

export const greatWallProjects: GreatWallProject[] = [
  {
    key: "skid-plate",
    name: "底盘护板",
    tagline: "护住发动机变速箱水箱分动箱，托底磕碰不心疼",
    description: "专车开模的底盘护板，覆盖发动机、变速箱、水箱、分动箱、电池等关键部位，防托底磕碰与石子飞溅；材质多档可选（铝镁合金 2.0mm / 锰钢 1.2mm / 碳钢 1.5mm / 塑钢 5.0mm / 碳纤 5.0mm），按用车路况到店推荐。",
    coverage: "覆盖11款车型",
    examples: "皮卡 / 轿车 / 小型车 / 新能源",
  },
  {
    key: "power-step",
    name: "电动踏板",
    tagline: "开门自动伸出、关门自动收回，老人小孩上下车省力",
    description: "专车专用电动踏板，原厂安装位免打孔，开门自动伸出、关门自动收回；取信号方式线夹，不破线不影响原车线路。皮卡车身偏高，配电动踏板对老人小孩更友好。",
    coverage: "覆盖1款车型",
    examples: "长城炮（2019+）",
  },
];

export interface GreatWallFitmentRow {
  version: string;
  years: string;
  note: string;
}

export interface GreatWallFitmentEntry {
  slug: string;
  name: string;
  group: string;
  rows: { projectName: string; rows: GreatWallFitmentRow[] }[];
}

export const greatWallFitmentEntries: GreatWallFitmentEntry[] = [
  {
    slug: "fengjun-6",
    name: "长城风骏6",
    group: "pickup",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "三件套（水箱/发动机/变速箱）", years: "2017", note: "2.0 / 2.4；四驱" },
        ],
      },
    ],
  },
  {
    slug: "fengjun-7",
    name: "长城风骏7",
    group: "pickup",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "三件套（水箱/发动机/变速箱）", years: "2017-2023", note: "2.0 / 2.4；四驱" },
        ],
      },
    ],
  },
  {
    slug: "jingang-pao",
    name: "长城金刚炮",
    group: "pickup",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2023-2024", note: "2.0T" },
        ],
      },
    ],
  },
  {
    slug: "po",
    name: "长城炮",
    group: "pickup",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "四件套（发动机/变速箱/水箱/分动箱）", years: "2019-2026", note: "2.0T" },
        ],
      },
      {
        projectName: "电动踏板",
        rows: [
          { version: "标准", years: "2019+", note: "线夹取信号" },
        ],
      },
    ],
  },
  {
    slug: "tengyi-c30",
    name: "长城腾翼C30",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2010-2016", note: "1.5L" },
        ],
      },
    ],
  },
  {
    slug: "tengyi-c50",
    name: "长城腾翼C50",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2012-2016", note: "1.5T" },
        ],
      },
    ],
  },
  {
    slug: "xuanli",
    name: "长城炫丽",
    group: "compact",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2008-2011", note: "1.3L / 1.5L" },
        ],
      },
    ],
  },
  {
    slug: "c20r",
    name: "长城C20R",
    group: "compact",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2011-2013", note: "1.5L" },
        ],
      },
    ],
  },
  {
    slug: "m2",
    name: "长城M2",
    group: "compact",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2012-2014", note: "1.5L" },
        ],
      },
    ],
  },
  {
    slug: "m4",
    name: "长城M4",
    group: "compact",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "标准（发动机）", years: "2012-2015", note: "1.5L" },
        ],
      },
    ],
  },
  {
    slug: "h10",
    name: "长城H10",
    group: "ev",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "六件套（水箱/发动机/电池/线束/油箱/后电机）", years: "2026", note: "续航232/227" },
        ],
      },
    ],
  },
];
