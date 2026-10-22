import { gacModels } from "@/lib/gac-model-groups";

export type GacProjectKey =
  | "skid-plate"
  | "power-step"
  | "tray-table"
  | "ceiling-tv"
  | "floor-mats"
  | "trunk-mat"
  | "full-trunk";

export interface GacProject {
  key: GacProjectKey;
  name: string;
  tagline: string;
  description: string;
  coverage: string;
  examples: string;
}

export const gacProjects: GacProject[] = [
  {
    key: "skid-plate",
    name: "底盘护板",
    tagline: "底部保护，防石子飞溅和托底刮蹭",
    description:
      "发动机、电池、线束等底盘部件的底部保护；材质分碳纤5.0mm、塑钢5.0mm、锰钢1.2mm、碳钢1.5mm、铝镁合金2.0mm等档位；新能源车型按套装件数安装。",
    coverage: "覆盖28款车型",
    examples: "M8/GS8/向往M8/GS4等",
  },
  {
    key: "power-step",
    name: "电动踏板",
    tagline: "原车对插/线夹取电，不动原车线路",
    description:
      "对插或线夹取电，不破线不改线路；老人小孩上下车省力。",
    coverage: "覆盖12款车型",
    examples: "GS8/GS4 PLUS/ES9/向往S7等",
  },
  {
    key: "tray-table",
    name: "小桌板",
    tagline: "前排靠背桌板，展开即用、收起贴椅背",
    description:
      "真皮+金属饰条，带杯架；皮面与原车内饰同色系同质感，不用时收起不占空间。",
    coverage: "覆盖5款车型",
    examples: "M8/E8/E9/M6/向往S7",
  },
  {
    key: "ceiling-tv",
    name: "吸顶电视",
    tagline: "15.6寸超清屏，语音声控、手机投屏",
    description:
      "内置4G热点共享，语音声控直达节目源；支持手机投屏、U盘播放、游戏手柄；专车专用不破坏原车结构。",
    coverage: "覆盖2款车型",
    examples: "M8宗师/24款新大师/E9、E8",
  },
  {
    key: "floor-mats",
    name: "360软包脚垫",
    tagline: "全包围脚垫，按门座片套对号入座",
    description:
      "皮革/丝圈材质，按门座与片套规格分档，专车版型覆盖主销车型。",
    coverage: "覆盖20+款车型",
    examples: "GS4/GS8/M8/M6等",
  },
  {
    key: "trunk-mat",
    name: "平面尾箱垫",
    tagline: "皮革尾箱垫，按年款与座次分档",
    description:
      "原车开模，按年款与座次分档，好打理、防刮耐磨。",
    coverage: "覆盖15+款车型",
    examples: "GS8/GS4/M8/影豹等",
  },
  {
    key: "full-trunk",
    name: "360全包尾箱",
    tagline: "全包尾箱，按年款与座次分档",
    description:
      "全包围尾箱垫，覆盖侧壁与三排靠背，按年款与座次分档。",
    coverage: "覆盖10+款车型",
    examples: "GS8/GS4/影酷/ES9等",
  },
];

export interface GacFitmentRow {
  year: string;
  note: string;
}

export interface GacFitmentEntry {
  slug: string;
  name: string;
  group: string;
  rows: { projectName: string; rows: GacFitmentRow[] }[];
}

export const gacFitmentEntries: GacFitmentEntry[] = [
  // ---------- 轿车 ----------
  {
    slug: "yingbao",
    name: "影豹",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { year: "2021-2024款", note: "燃油/混动分档·全材质档位·1.5T/2.0L·两件套" },
        ],
      },
      {
        projectName: "360软包脚垫",
        rows: [
          { year: "21-23款 / 23款起", note: "油电混合分档" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { year: "21款起 / 23款起", note: "油电混合分档" },
        ],
      },
    ],
  },
  {
    slug: "ga3",
    name: "GA3",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2013-2014款", note: "全材质档位·1.6L" }],
      },
    ],
  },
  {
    slug: "ga3s",
    name: "GA3S",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2014-2016款", note: "全材质档位·1.3T/1.6L" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "14-16款", note: "" }],
      },
    ],
  },
  {
    slug: "ga3s-ev",
    name: "GA3S新能源",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2017-2019款", note: "全材质档位·1.5L" }],
      },
    ],
  },
  {
    slug: "ga4",
    name: "GA4",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2018-2019款", note: "全材质档位·1.3T/1.5L" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "18款", note: "" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "18款起", note: "" }],
      },
    ],
  },
  {
    slug: "ga4-plus",
    name: "GA4 Plus",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2021款", note: "全材质档位·1.5T" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "21款", note: "" }],
      },
    ],
  },
  {
    slug: "ga6",
    name: "GA6",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { year: "2015-2018款；2019、2022款", note: "全材质档位·1.5T；1.6T/1.5T/1.8T" },
        ],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "14-18款 / 19-22款", note: "" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "14-18款 / 19款起", note: "" }],
      },
    ],
  },
  {
    slug: "ga5",
    name: "GA5",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "11-13款", note: "" }],
      },
    ],
  },
  {
    slug: "ga8",
    name: "GA8",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "16-20款", note: "" }],
      },
    ],
  },
  // ---------- MPV ----------
  {
    slug: "m6",
    name: "M6",
    group: "mpv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2019-2023款", note: "塑钢/锰钢/碳钢/铝镁档位·1.5T（与M6 Pro同版型）" }],
      },
      {
        projectName: "小桌板",
        rows: [{ year: "", note: "棕橙色皮质（带杯架），专车专用" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "19款GM6 / 19-20款 / 20-23款 / 21-23款 / 25款M6 MAX", note: "分档安装" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "19款", note: "" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "19款起", note: "" }],
      },
    ],
  },
  {
    slug: "m6-pro",
    name: "M6 Pro",
    group: "mpv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2019-2023款", note: "塑钢/锰钢/碳钢/铝镁档位·1.5T（与M6同版型）" }],
      },
    ],
  },
  {
    slug: "m8",
    name: "M8",
    group: "mpv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { year: "2018-2021；2023-2024；2026款", note: "油电混动/混动·全材质档位·2.0T·GM8/领秀/大师/宗师；宗师另有合金三件套" },
        ],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2018-2020 GM8 / 2021款起 M8", note: "对插取电" }],
      },
      {
        projectName: "小桌板",
        rows: [{ year: "", note: "宗师/大师·棕米/棕黄拼接真皮（同色系）·带杯架金属饰条" }],
      },
      {
        projectName: "吸顶电视",
        rows: [{ year: "宗师 / 24款新大师", note: "15.6寸·除顶配带电视车型" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [
          { year: "GM8 18-23款 / M8 21款起四座", note: "5-6片分档" },
          { year: "宗师 23款起", note: "混动/燃油·5-8片分档" },
          { year: "木地板前排 18-23款 / 23款起", note: "2-4片分档" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "GM8 18款起 / 宗师 23款起", note: "混动/燃油分档" }],
      },
    ],
  },
  {
    slug: "xiangwang-m8",
    name: "向往M8",
    group: "mpv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { year: "2025、2026款", note: "插混/油混·锰钢/铝镁档位·六件套/四件套分档·PHEV续航202/248" },
          { year: "插混248续航", note: "合金五件套（发动机/线束/电池/线路/后油箱）" },
        ],
      },
    ],
  },
  {
    slug: "e8",
    name: "E8",
    group: "mpv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { year: "2024、2026款", note: "插混/油混·锰钢/铝镁档位·五件套·PHEV续航150/281" },
          { year: "", note: "合金五件套（发动机/电池/线束/油路/油箱）" },
        ],
      },
      {
        projectName: "小桌板",
        rows: [{ year: "", note: "棕米/棕黄拼接真皮（同色系）·带杯架金属饰条" }],
      },
      {
        projectName: "吸顶电视",
        rows: [{ year: "", note: "15.6寸·低配单天窗不可装" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "23款起 / 24款起", note: "插混二排无轨道/混动分档·3-5片" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "23款起", note: "" }],
      },
    ],
  },
  {
    slug: "e9",
    name: "E9",
    group: "mpv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { year: "2023-2024款", note: "锰钢/铝镁档位·五件套（与ES9通用）" },
          { year: "", note: "合金/锰钢五件套（发动机/线束/电池/油箱/油路）" },
        ],
      },
      {
        projectName: "小桌板",
        rows: [{ year: "", note: "棕米/棕黄拼接真皮（同色系）" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "23款起", note: "6片×2档·PHEV" }],
      },
    ],
  },
  // ---------- SUV ----------
  {
    slug: "xiangwang-s7",
    name: "向往S7",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { year: "2025款", note: "锰钢/铝镁档位·两驱五件套/四驱六件套·续航205/180" },
          { year: "增程", note: "合金六件套（发动机/线路前后/电池/油箱/后电机）" },
        ],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2025款", note: "线夹取电" }],
      },
      {
        projectName: "小桌板",
        rows: [{ year: "", note: "棕橙色皮质（带杯架）" }],
      },
    ],
  },
  {
    slug: "xiangwang-s9",
    name: "向往S9",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2025款", note: "锰钢/铝镁档位·七件套（与24款ES9通用版型）·续航252/202" }],
      },
    ],
  },
  {
    slug: "yingku",
    name: "影酷",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { year: "2022款", note: "全材质档位·版型通用·2.0T/2.0L/1.5T" },
          { year: "", note: "合金/锰钢四件套（发动机/线路左右/三元催化）" },
        ],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2022款", note: "对插取电" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "22款起", note: "普通/油电混合分档" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "22款起", note: "普通/混动分档" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "22款起", note: "普通/混动分档" }],
      },
    ],
  },
  {
    slug: "es9",
    name: "ES9",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { year: "2024款", note: "锰钢/铝镁档位·五件套（与E9通用）" },
          { year: "", note: "合金五件套（发动机/线束/电池/线路/油箱）" },
        ],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2023款起", note: "对插取电" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "23款起", note: "PHEV·6/7座·有无备胎分档·3-4片" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "23款起", note: "PHEV·6/7座分档" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "23款起", note: "PHEV·6/7座分档" }],
      },
    ],
  },
  {
    slug: "ge3",
    name: "GE3",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2017-2019款", note: "纯电·锰钢/碳钢/铝镁档位" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "17-22款", note: "GS3/GE3通用" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "17款起", note: "" }],
      },
    ],
  },
  {
    slug: "gs3",
    name: "GS3",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2017-2018；2019-2020；2021-2022款", note: "全材质档位·国五/国六·1.3T/1.5L；1.5T（与GS3 POWER同版型）" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "23款起", note: "" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "17-22款 / 23款起", note: "上层分档" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "20-22款 / 23款起", note: "" }],
      },
    ],
  },
  {
    slug: "gs3-power",
    name: "GS3 POWER",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2021-2022款", note: "全材质档位·1.5T（与GS3同版型）" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "21-22款", note: "" }],
      },
    ],
  },
  {
    slug: "gs3-yingsu",
    name: "GS3影速",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2023-2026款", note: "全材质档位·1.5T" }],
      },
    ],
  },
  {
    slug: "gs4",
    name: "GS4",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2015-2017；2018-2019；2020-2024款", note: "混动版·全材质档位·1.3T/1.5T/1.5L" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2016-2019款 / 2024款起", note: "对插取电·GS4 MAX 24款起" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "15-19款 / 20-25款 / 26款起", note: "副驾鼓包分档" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "PHEV 17-19款、20款起 / GS4 MAX 24款起", note: "汽油版分档" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "15-19款 / 20-25款 / 26款起", note: "上下层分档" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "新能源17款起 / PHEV 20款起 / MAX 24款起", note: "" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "15-19款 / 20款起 / PHEV 20款起", note: "" }],
      },
    ],
  },
  {
    slug: "gs4-coupe",
    name: "GS4 Coupe",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2020款", note: "全材质档位·1.5T" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "20款起", note: "" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "21款起", note: "" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "20款起", note: "" }],
      },
    ],
  },
  {
    slug: "gs4-plus",
    name: "GS4 PLUS",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2021-2023款", note: "全材质档位·1.5T/2.0T" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2021款起", note: "对插取电" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "21-23款", note: "" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "21款起", note: "" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "21款起", note: "" }],
      },
    ],
  },
  {
    slug: "gs5",
    name: "GS5",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2012-2014；2019-2021款", note: "全材质档位·1.8T；2.0L；1.5T" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2019款起", note: "对插取电" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "12-18款 / 19-21款", note: "" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "12-17款 / 19款起", note: "" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "19款起", note: "" }],
      },
    ],
  },
  {
    slug: "gs7",
    name: "GS7",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2017款", note: "全材质档位·1.8T/2.0T" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2017款起", note: "对插取电" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "17-19款", note: "" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "17款起", note: "" }],
      },
    ],
  },
  {
    slug: "gs8",
    name: "GS8",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2017-2021；2022、2024款", note: "全材质档位·燃油混动通用·2.0T（与GS8S同版型）" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2016-2021款 / 2022款起", note: "对插/线夹取电分档" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "17-21款", note: "7座做5/7座·有/无台阶分档" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "22-24款", note: "6/7座·做4/5/7座·二排杯架/立面高分档" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "16-21款 / 22款起", note: "6/7座·做5/7座·混动分档" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "17-21款 / 22款起", note: "6/7座·普通/高配·混动分档" }],
      },
    ],
  },
  {
    slug: "gs8s",
    name: "GS8S",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2017-2021款", note: "全材质档位·2.0T（与GS8同版型）" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2020款起", note: "对插取电" }],
      },
      {
        projectName: "360软包脚垫",
        rows: [{ year: "19-21款", note: "" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "19-23款 / 24款起", note: "两档分装" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "19款起", note: "" }],
      },
    ],
  },
];

export function getGacModelCount() {
  return gacModels.length;
}
