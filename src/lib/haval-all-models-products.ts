import { havalModels } from "@/lib/haval-model-groups";

export type HavalProjectKey =
  | "skid-plate"
  | "floor-mats"
  | "trunk-mat"
  | "full-trunk"
  | "power-step";

export interface HavalProject {
  key: HavalProjectKey;
  name: string;
  tagline: string;
  description: string;
  coverage: string;
  examples: string;
}

export const havalProjects: HavalProject[] = [
  {
    key: "skid-plate",
    name: "底盘护板",
    tagline: "底部保护，防石子飞溅和托底刮蹭",
    description:
      "发动机、电池、线束等底盘部件的底部保护；燃油车型五档材质（碳纤5.0 / 塑钢5.0 / 锰钢1.2 / 碳钢1.5 / 铝镁2.0mm），新能源车型铝镁2.0/锰钢1.2mm，大车与越野按两件套到七件套套装。",
    coverage: "覆盖25款车型",
    examples: "H6/H9/大狗/猛龙等",
  },
  {
    key: "floor-mats",
    name: "360软包脚垫",
    tagline: "全包围脚垫，按过桥高低对号入座",
    description:
      "皮革/丝圈材质，按门座片套分档；按过桥高低（平/高/凸）、出风口、座椅绒布或胶壳、红标/蓝标、座次等实车特征分版，专车版型覆盖全车系主销车型。",
    coverage: "覆盖23款车型",
    examples: "H6/H7/H9/M6/大狗等",
  },
  {
    key: "trunk-mat",
    name: "平面尾箱垫",
    tagline: "皮革尾箱垫，按年款与座次分档",
    description:
      "原车开模，按年款与座次（5座/7座做5座/7座做7座）分档，好打理、防刮耐磨。",
    coverage: "覆盖22款车型",
    examples: "H6/H9/猛龙/M6等",
  },
  {
    key: "full-trunk",
    name: "360全包尾箱",
    tagline: "全包尾箱，覆盖侧壁、按座次分档",
    description:
      "全包围尾箱垫，覆盖侧壁，按年款与座次分档。",
    coverage: "覆盖16款车型",
    examples: "H6/H9/大狗/枭龙MAX等",
  },
  {
    key: "power-step",
    name: "电动踏板",
    tagline: "原车对插/线夹取电，不动原车线路",
    description:
      "对插或线夹取电，不破线不改线路；老人小孩上下车省力；按年款对插/线夹分版。",
    coverage: "覆盖15款车型",
    examples: "H6/H9/M6/猛龙等",
  },
];

export interface HavalFitmentRow {
  year: string;
  note: string;
}

export interface HavalFitmentEntry {
  slug: string;
  name: string;
  group: string;
  rows: { projectName: string; rows: HavalFitmentRow[] }[];
}

export const havalFitmentEntries: HavalFitmentEntry[] = [
  // ---------- H系 / M系 ----------
  {
    slug: "h1",
    name: "哈弗H1",
    group: "h-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { year: "15-17款", note: "过桥是平的，15款红标/16-17款蓝标" },
          { year: "16-17款", note: "过桥有高度，红标" },
        ],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2015；2016-2017", note: "1.5L；红标/蓝标分版（15款用蓝标板）" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "15-16款", note: "" }],
      },
    ],
  },
  {
    slug: "h2",
    name: "哈弗H2",
    group: "h-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "14-19款", note: "副驾座椅下无出风口" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2014-2019", note: "1.5T" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "14款起", note: "" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "14款起", note: "不带侧包" }],
      },
    ],
  },
  {
    slug: "h2s",
    name: "哈弗H2S",
    group: "h-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "17-18款", note: "" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2017；2018-2019", note: "1.5T" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "16款起", note: "" }],
      },
    ],
  },
  {
    slug: "h4",
    name: "哈弗H4",
    group: "h-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "18-19款", note: "" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2018-2020", note: "1.5T；2颗异形盖板" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "18款起", note: "3片" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "18款起", note: "H4 PRO，不带侧包" }],
      },
    ],
  },
  {
    slug: "h5",
    name: "哈弗H5",
    group: "h-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { year: "10-18款", note: "" },
          { year: "23款起", note: "前排座椅下不带风口" },
        ],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2023-2024", note: "柴油 2.0T；三件套（水箱/发动机/变速箱），柴油版水箱不能安装；新款 23 款后 2.0T 铝镁通用" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { year: "11-18款", note: "" },
          { year: "23款起", note: "" },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "23款起", note: "不带侧包" }],
      },
    ],
  },
  {
    slug: "h6",
    name: "哈弗H6",
    group: "h-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { year: "11-17款", note: "运动版/经典版，中控台与前扶手箱分体式，2片" },
          { year: "15-21款", note: "运动版多版：前排内侧绒布不可塞/胶壳、后排座椅分体/连体" },
          { year: "17-20款", note: "正常版前排分体" },
          { year: "20-23款", note: "第三代无过桥；21-23 高过桥（适配油电混合）" },
          { year: "21-23款", note: "第三代 PHEV 高过桥；国潮版" },
          { year: "15-21款", note: "COUPE，前排内侧绒布不可塞/胶壳" },
        ],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2011；2012-2020；2012-2023；2016-2020；2021-2025", note: "柴油/汽油/Coupe 分版；国潮版通用；燃油混动通用；12 款 2.0T 螺丝专用需备注年份；1.5T/2.0T、2.4L、2.0L" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "11-17款 / 15-19款 / 15-21款 / 17款起 / 17-19款 / 21款起", note: "运动版/经典版、COUPE 两版、主副驾分体 2.0T、正常版、三代、国潮版" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "17-20款 / 18款起 / 19款起 / 21款起", note: "正常版、运动版、COUPE 5片、三代、国潮版" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2017+线夹 / 2021+对插等按年款分版", note: "COUPE 2017-2018对插 / 2019+线夹" }],
      },
    ],
  },
  {
    slug: "h6l",
    name: "哈弗H6L",
    group: "h-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "25款起", note: "" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2026", note: "燃油混动通用；发动机+油箱专用；1.5T、2.0T" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "25款起", note: "" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2026", note: "线夹取电" }],
      },
    ],
  },
  {
    slug: "h6s",
    name: "哈弗H6S",
    group: "h-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { year: "21-23款", note: "无过桥" },
          { year: "21-23款", note: "凸过桥轻混版" },
        ],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2022", note: "燃油混动通用；1.5T/2.0T" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "21-23款", note: "轻混版" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "21款起", note: "凸过桥，不带侧包" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2021+", note: "线夹取电" }],
      },
    ],
  },
  {
    slug: "h7",
    name: "哈弗H7",
    group: "h-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { year: "16-21款", note: "原车5座，前排内侧绒布分上下层上层不可塞" },
          { year: "17-19款", note: "H7L 原车7座做5座/做7座 2版" },
        ],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2016-2019", note: "2.0L；要拆原车板" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { year: "16款起", note: "原车5座" },
          { year: "17款起", note: "H7L 做5座/做7座 2版" },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "16款起", note: "原车5座，8片" }],
      },
    ],
  },
  {
    slug: "h8",
    name: "哈弗H8",
    group: "h-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "15-17款", note: "" }],
      },
    ],
  },
  {
    slug: "h9",
    name: "哈弗H9",
    group: "h-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { year: "15-23款", note: "原车7座做5座/做7座 2版，24款不一样" },
          { year: "17-23款", note: "原车5座：后排外侧绒布/胶壳 2版，24款不一样" },
          { year: "24款起", note: "原车5座；7座做5座/做7座 2版" },
        ],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2024；老款一代/新款二代", note: "汽油 2.0T；五件套（水箱/发动机/变速箱/分动箱/油箱）；油箱支架与坦克通用；铝镁合金" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "14-19款 / 17-23款 / 20-23款 / 24款起", note: "7座做5座/做7座、原车5座、7座做5座分体三排拉手大" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "15款起", note: "原车5座/7座 2版，不带侧包" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2015-2019；2020-2022；2024+", note: "线夹取电" }],
      },
    ],
  },
  {
    slug: "h10",
    name: "哈弗H10",
    group: "h-series",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "26款起", note: "混动 227 续航；七件套（前水箱/发动机/线束/电池/油路/油箱/后电机）；铝镁合金" }],
      },
    ],
  },
  {
    slug: "m6",
    name: "哈弗M6",
    group: "h-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { year: "17-20款", note: "前排椅下带/不带出风口 2版" },
          { year: "21-23款", note: "M6 PLUS" },
        ],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2017-2023", note: "1.5T；2颗异形盖板" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { year: "17款起", note: "" },
          { year: "21款起", note: "M6 PLUS" },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "21款起", note: "M6 PLUS，不带侧包" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2017+对插 / 2021+线夹", note: "M6 PLUS 线夹" }],
      },
    ],
  },
  // ---------- F系与入门 ----------
  {
    slug: "f5",
    name: "哈弗F5",
    group: "f-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "18-21款", note: "" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2018-2020", note: "1.5T；2颗异形盖板" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "19款起", note: "" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "19款起", note: "" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2018+", note: "线夹取电" }],
      },
    ],
  },
  {
    slug: "f7",
    name: "哈弗F7",
    group: "f-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "19-22款", note: "适用于 F7X" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2019-2021", note: "1.5T/2.0T；2颗异形盖板" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "19款起", note: "" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2018+", note: "线夹取电" }],
      },
    ],
  },
  {
    slug: "f7x",
    name: "哈弗F7X",
    group: "f-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "19-22款", note: "与 F7 共用版型" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2019-2021", note: "1.5T/2.0T；2颗异形盖板" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "19款起", note: "" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "19款起", note: "" }],
      },
    ],
  },
  {
    slug: "chitu",
    name: "哈弗赤兔",
    group: "f-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "21-23款", note: "" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2021-2023", note: "1.5T；两件套（发动机前/后）；异形盖板" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "21款起", note: "" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2022+", note: "线夹取电" }],
      },
    ],
  },
  {
    slug: "chulian",
    name: "哈弗初恋",
    group: "f-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "21款", note: "" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2021", note: "1.5T；两件套（发动机前/后）；异形盖板" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2021+", note: "线夹取电" }],
      },
    ],
  },
  {
    slug: "shenshou",
    name: "哈弗神兽",
    group: "f-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { year: "22款", note: "两驱平过桥，二排椅后蹬脚鼓包 6CM" },
          { year: "22款", note: "四驱高过桥" },
        ],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2021-2023", note: "燃油混动通用；1.5T、2.0T" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "22款起", note: "低配上层尾箱" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "22款起", note: "平过桥，不带侧包" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2021+、2022+", note: "线夹取电" }],
      },
    ],
  },
  // ---------- 狗系 ----------
  {
    slug: "dagou",
    name: "哈弗大狗",
    group: "dog-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { year: "20-24款", note: "一代" },
          { year: "23款起", note: "二代 PHEV，插电混动适配燃油版" },
        ],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2020-2026；2023-2026", note: "燃油混动通用；1.5T、2.0T；一代四驱/两驱、PHEV 150四驱/105两驱铝镁通用；三件套（发动机/电池/油箱）" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "20款起", note: "" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "20款起", note: "不带侧包" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2021+、2023", note: "线夹取电" }],
      },
    ],
  },
  {
    slug: "dagou-plus",
    name: "哈弗大狗PLUS",
    group: "dog-series",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2026", note: "Hi4 续航 150；六件套（发动机/线束1/线束2/电池/油箱/后电机，与 23 款猛龙通用）；锰钢1.2/铝镁2.0mm；四驱/两驱铝镁通用" }],
      },
    ],
  },
  {
    slug: "kugou",
    name: "哈弗酷狗",
    group: "dog-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { year: "22款", note: "两驱平过桥" },
          { year: "22款", note: "四驱高过桥" },
        ],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2022", note: "1.5T；两件套（发动机前/后）；异形盖板" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "22款起", note: "两驱、四驱通用" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "22款起", note: "不带侧包，两驱、四驱通用" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2022+", note: "线夹取电" }],
      },
    ],
  },
  // ---------- Hi4 ----------
  {
    slug: "xiaolong",
    name: "哈弗枭龙",
    group: "hi4",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "23款起", note: "插电混动" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2023", note: "110 续航；四件套（发动机前/后、电池、油管）；锰钢1.2/铝镁2.0mm" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "23款起", note: "PHEV" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "23款起", note: "插电混动" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2023", note: "线夹取电" }],
      },
    ],
  },
  {
    slug: "xiaolong-max",
    name: "哈弗枭龙MAX",
    group: "hi4",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [{ year: "23款起", note: "插电混动" }],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2023；2025", note: "续航 105/110/165；五件套；六件套（与猛龙六件套通用）；后电机支架与蓝山 3 号支架通用" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [{ year: "23款起", note: "" }],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "23款起", note: "" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2023+、2025", note: "线夹取电" }],
      },
    ],
  },
  {
    slug: "menglong",
    name: "哈弗猛龙",
    group: "hi4",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { year: "23款起", note: "Hi4 插电混动" },
          { year: "25款起", note: "汽油版" },
          { year: "26款起", note: "PLUS 新能源五座/七座 2版" },
        ],
      },
      {
        projectName: "底盘护板",
        rows: [{ year: "2023-2024-2026", note: "插电混动；六件套（发动机/电池/线束1/线束2/油箱/后电机，与 25 款枭龙MAX 通用）；续航 145/115/102/81/105（25 年产 150 通用）、150/200（26 年产）；燃油版四件套；PHEV 102/105/145/150（磷酸铁锂/三元锂）/200km 铝镁通用" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { year: "23款起", note: "Hi4，右侧有耳朵" },
          { year: "25款起", note: "汽油版，右侧带音响" },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [{ year: "23款起", note: "Hi4，不带侧包，右侧有耳朵" }],
      },
      {
        projectName: "电动踏板",
        rows: [{ year: "2023+", note: "线夹取电" }],
      },
    ],
  },
  {
    slug: "menglong-plus",
    name: "哈弗猛龙PLUS",
    group: "hi4",
    rows: [
      {
        projectName: "底盘护板",
        rows: [{ year: "2026", note: "续航 147/195、145/192、191/255、188/252；六件套（前电机/线束1/线束2/电池/油箱/后电机，发动机、后电机与 23-26 猛龙通用）" }],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { year: "25款起", note: "五座" },
          { year: "25款起", note: "七座，分体/连体 2版" },
        ],
      },
    ],
  },
];

export function getHavalModelCount() {
  return havalModels.length;
}
