import { nissanModels } from "@/lib/nissan-model-groups";

export type NissanProjectKey =
  | "skid-plate"
  | "floor-mats"
  | "trunk-mat"
  | "full-trunk"
  | "power-step"
  | "forged-wheel";

export interface NissanProject {
  key: NissanProjectKey;
  name: string;
  tagline: string;
  description: string;
  coverage: string;
  examples: string;
}

export const nissanProjects: NissanProject[] = [
  {
    key: "skid-plate",
    name: "底盘护板",
    tagline: "底部保护，防石子飞溅和托底刮蹭",
    description:
      "发动机、电池、线束等底盘部件的底部保护；燃油车型五档材质（碳纤5.0 / 塑钢5.0 / 锰钢1.2 / 碳钢1.5 / 铝镁2.0mm），新能源车型铝镁2.0/锰钢1.2mm，越野车型按水箱/发动机/波箱/传动轴套装。",
    coverage: "覆盖24款车型",
    examples: "轩逸/奇骏/逍客/途乐等",
  },
  {
    key: "floor-mats",
    name: "360软包脚垫",
    tagline: "全包围脚垫，按门座片套对号入座",
    description:
      "皮革/丝圈材质，按门座片套分档；按年款与实车特征（出风口、安全带形式、滑道、置物盒、扶手箱）分版，专车版型覆盖主销车型。",
    coverage: "覆盖25款车型",
    examples: "轩逸/天籁/奇骏/探陆等",
  },
  {
    key: "trunk-mat",
    name: "平面尾箱垫",
    tagline: "皮革尾箱垫，按年款分档",
    description:
      "原车开模，按年款分档，好打理、防刮耐磨。",
    coverage: "覆盖17款车型",
    examples: "天籁/轩逸/奇骏/探陆等",
  },
  {
    key: "full-trunk",
    name: "360全包尾箱",
    tagline: "全包尾箱，覆盖侧壁、按座次分档",
    description:
      "全包围尾箱垫，覆盖侧壁，按年款与座次（5/6/7 座）分档。",
    coverage: "覆盖8款车型",
    examples: "奇骏/逍客/探陆/途乐等",
  },
  {
    key: "power-step",
    name: "电动踏板",
    tagline: "原车对插/线夹取电，不动原车线路",
    description:
      "对插或线夹取电，不破线不改线路；老人小孩上下车省力；按年款对插/线夹分版。",
    coverage: "覆盖7款车型",
    examples: "奇骏/途乐/途达/探陆等",
  },
  {
    key: "forged-wheel",
    name: "锻造轮毂",
    tagline: "越野孔距锻造轮毂，黑色车面",
    description:
      "PCD 6×139.7 越野孔距，20×8.5 / 22×9 两规格；适配途乐/纳瓦拉等车型，孔距数据到店核对。",
    coverage: "1款2规格",
    examples: "途乐/纳瓦拉等",
  },
];

export interface NissanFitmentRow {
  year: string;
  note: string;
}

export interface NissanFitmentEntry {
  slug: string;
  name: string;
  group: string;
  rows: { projectName: string; rows: NissanFitmentRow[] }[];
}

export const nissanFitmentEntries: NissanFitmentEntry[] = [
  // ---------- 轿车 ----------
  {
    slug: "xuanyi",
    name: "轩逸",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { year: "06-19款", note: "手动/自动分版，大灯圆形" },
          { year: "12-25款", note: "新经典，与蓝鸟相同，安全带在胶壳内" },
          { year: "18款起", note: "纯电版" },
          { year: "20-25款", note: "新轩逸，座椅下带/不带出风口 2 版" },
          { year: "22款起", note: "e-POWER，轨道出风口带/不带 2 版" },
          { year: "26款起", note: "新款 3 版（安全带绒布/贯穿大灯拉带/出风口拉带）" },
        ],
      },
      {
        projectName: "底盘护板",
        rows: [
          { year: "2009-2016 / 2009-2019、2024 / 2020-2023", note: "1.6L、1.2T、1.6L/1.8L；e-POWER 混动；两件套建议成套装（原车挡泥板覆盖发动机线槽一体）；拆原车板" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "11-19款 / 12-22款 / 18款起 / 20款起 / 22款起", note: "按年款分档" }],
      },
    ],
  },
  {
    slug: "tianlai",
    name: "天籁",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "08-12款 / 13-18款 / 19-25款 / 26款起", note: "4 档分装" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2008-2018 / 2019-2024", note: "2.0L/2.5L/3.5L、2.0T/2.0L；08 公爵 3.5L 保养孔位有偏差；拆原车胶板" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "03-07款 / 08-12款 / 13-18款 / 19-25款 / 26款起", note: "08-12 款 3D 尾箱需拍图对版" }],
      },
    ],
  },
  {
    slug: "qida",
    name: "骐达",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "05-10款 / 11-24款", note: "05-10 后排带/不带滑道 2 版" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2011-2021、2024", note: "1.6L/1.6T；拆原车板" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "05-10款 / 11-17款", note: "" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "11-20款", note: "尾箱不带侧包" }],
      },
    ],
  },
  {
    slug: "yangguang",
    name: "阳光",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "11-17款", note: "扶手箱后端空调出风口/杯架 3 版" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2011-2016", note: "1.5L" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "11-17款", note: "" }],
      },
    ],
  },
  {
    slug: "lanniao",
    name: "蓝鸟",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "15款起", note: "与新经典轩逸相同版型" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2016-2021", note: "1.6L；原车胶板要开孔" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "15款起", note: "" }],
      },
    ],
  },
  {
    slug: "xima",
    name: "西玛",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "16款起", note: "" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2016", note: "2.5L" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "16款起", note: "" }],
      },
    ],
  },
  {
    slug: "yida",
    name: "颐达",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "05-10款", note: "" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2005-2009", note: "1.6L；拆原车板" }],
      },
    ],
  },
  {
    slug: "liwei",
    name: "骊威",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "07-17款", note: "前排座椅下带/不带出风口 2 版" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2013-2015", note: "1.6L；拆原车板" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "07款起", note: "" }],
      },
    ],
  },
  {
    slug: "machi",
    name: "玛驰",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "10-18款", note: "" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2010-2015", note: "1.5L" }],
      },
    ],
  },
  {
    slug: "gtr",
    name: "GT-R",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "12-16款", note: "2 门 4 座" }],
      },
    ],
  },
  {
    slug: "n6",
    name: "N6",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "26款起", note: "纯电，4 门 5 座，3 片" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2026款", note: "纯电，续航 180/170；三件套（电池/前电机/油箱）；铝镁2.0/锰钢1.2mm" }],
      },
    ],
  },
  {
    slug: "n7",
    name: "N7",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "25款起", note: "纯电，4 门 5 座，3 片" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2025款", note: "纯电，续航 625/510；三件套（前电机/前电池/后电池）；铝镁2.0/锰钢1.2mm" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "25款起", note: "" }],
      },
    ],
  },
  {
    slug: "z9",
    name: "Z9",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "通用", note: "底盘护板+油箱护板（混动油箱/燃油油箱分版）；铝镁合金" }],
      },
    ],
  },
  // ---------- MPV ----------
  {
    slug: "junyi",
    name: "骏逸",
    group: "mpv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2006-2008", note: "1.8L" }],
      },
    ],
  },
  {
    slug: "guishi",
    name: "贵士",
    group: "mpv",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "11-17款", note: "二排中间带/不带扶手箱 2 版，7 座" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2015", note: "3.5L；原车胶板要开孔" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "10款起", note: "7 座" }],
      },
    ],
  },
  {
    slug: "nv200",
    name: "NV200",
    group: "mpv",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "10-18款", note: "二排 3 座位，尾箱两边储物盒，5 门 7 座" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2014-2018", note: "1.6L；五档材质" }],
      },
    ],
  },
  // ---------- SUV ----------
  {
    slug: "qijun",
    name: "奇骏",
    group: "suv",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { year: "08-13款", note: "" },
          { year: "14-22款", note: "副驾电路盒/出风口 4 版" },
          { year: "17-21款", note: "7 座，三排不能加丝圈" },
          { year: "21款起", note: "5/7 座，下单对照外观区分新旧" },
          { year: "23款起", note: "E-POWER 汽油电驱" },
        ],
      },
      {
        projectName: "底盘护板",
        rows: [
          { year: "2010-2013 / 2014-2021 / 2021-2023 / 2022", note: "1.5T 三缸、2.0L/2.5L；三件套、通用；原车胶板要开孔" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "08款 / 14款起 / 17款起 / 21款起 / 23款起", note: "08 款 4 片；17 款起 7 座" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "14款起 / 21款起 / 23款起", note: "14 不带侧包；21 五/七座 2 版；23 E-POWER" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2014-2018对插 / 2019款起线夹 / 2023款起", note: "E-POWER 线夹" }],
      },
    ],
  },
  {
    slug: "xiaoke",
    name: "逍客",
    group: "suv",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "08-15款 / 16-23款 / 23-24款 / 25款起", note: "16-23 前排内侧无置物盒；23-24 有置物盒；25 圆形出风口" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2008-2015 / 2016-2022、2025", note: "1.2T/2.0L、1.6L/2.0L；拆原车板、胶板开孔" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "08-15款 / 16-23款 / 23款起", note: "16-23 不覆盖耳朵版" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "16-23款 / 23款起", note: "16-23 经典无置物盒 5 片；23 起有置物盒" }],
      },
    ],
  },
  {
    slug: "loulan",
    name: "楼兰",
    group: "suv",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "11-15款 / 15-23款", note: "11-15 二排有滑道（无滑道没版）" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2015-2021", note: "2.5L/2.5T；原车胶板要开孔" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "15款起", note: "" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "15款起", note: "5 片" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2011-2018对插 / 2019款起线夹", note: "" }],
      },
    ],
  },
  {
    slug: "jinke",
    name: "劲客",
    group: "suv",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "17-23款", note: "" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2017-2023", note: "1.5L；五档材质" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "17款起", note: "" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "17款起", note: "" }],
      },
    ],
  },
  {
    slug: "tule",
    name: "途乐",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "Y62（阿曼达5.6/3.5）/ Y61；2018-2019", note: "4.0T；四件套（水箱/发动机/波箱/传动轴）；铝镁2.0/铝镁5.0/锰钢1.2/碳钢1.5mm" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "12-21款", note: "22 款不同，下单区分" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "12-18款", note: "7 座" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "12款起", note: "尾箱不带侧包，8 片" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2017款起", note: "线夹取电" }],
      },
    ],
  },
  {
    slug: "tuda",
    name: "途达",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2018-2020", note: "2.5L；四件套（水箱/发动机/波箱/传动轴）+油箱护板；26 款途达/纳瓦拉 2.0 通用" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "18-21款", note: "" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "18款起", note: "" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2018-2019对插 / 2020款起线夹", note: "" }],
      },
    ],
  },
  {
    slug: "nawala",
    name: "纳瓦拉",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2017-2024", note: "2.5L；三件套（水箱/发动机/波箱）+油箱护板；26 款途达/纳瓦拉 2.0 通用" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "17款起", note: "" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2017款起", note: "对插取电" }],
      },
    ],
  },
  {
    slug: "ruiqi",
    name: "锐骐",
    group: "suv",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "18-20款", note: "" }],
      },
    ],
  },
  {
    slug: "ruiqi6",
    name: "锐骐6",
    group: "suv",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "18-23款", note: "与锐骐7 通用" }],
      },
    ],
  },
  {
    slug: "palanding",
    name: "帕拉丁",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "新款", note: "2.0T；铝镁合金" }],
      },
    ],
  },
  {
    slug: "tanlu",
    name: "探陆",
    group: "suv",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { year: "24款起", note: "原车 7 座 4 片 / 7 座做 5 座 3 片" },
          { year: "24款起", note: "6 座木地板前排 2 片 / 6 座做 4 座 3 片 / 6 座 4 片" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "24款起", note: "6/7 座共用" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "24款起", note: "6 座" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2024款起", note: "线夹取电" }],
      },
    ],
  },
  {
    slug: "airiya",
    name: "艾睿雅",
    group: "suv",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "22款起", note: "纯电，5 门 5 座，3 片" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "22款起", note: "" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "22款起", note: "" }],
      },
    ],
  },
  {
    slug: "nx8",
    name: "NX8",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2026款", note: "纯电续航 580、增程 310；四件套（前电机/前电池/后电池/后电机）+支架；铝镁2.0/锰钢1.2mm" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2026款", note: "对插取电" }],
      },
    ],
  },
];

export function getNissanModelCount() {
  return nissanModels.length;
}
