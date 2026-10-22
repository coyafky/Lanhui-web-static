import { bmwModels } from "@/lib/bmw-model-groups";

export type BmwProjectKey = "soft-mat" | "trunk-mat" | "full-trunk";

export interface BmwProject {
  key: BmwProjectKey;
  name: string;
  tagline: string;
  description: string;
  coverage: string;
  examples: string;
}

export const bmwProjects: BmwProject[] = [
  {
    key: "soft-mat",
    name: "360软包脚垫",
    tagline: "全包围脚垫，边角贴合原车绒面与门槛，不翘边",
    description: "全包围汽车脚垫，边角塞进原车绒面与门槛缝隙，贴合不翘边；防尘防水、易清洁，专车开模，油门、刹车、离合位置精准避让，不挡踏板。",
    coverage: "覆盖29款车型",
    examples: "1系~8系 / i3 / X5 / M4",
  },
  {
    key: "trunk-mat",
    name: "平面尾箱垫",
    tagline: "后备箱平面垫，防污防刮、耐磨损",
    description: "后备箱平面垫，四边贴合后备箱轮廓，防污防刮、耐磨损、易打理；专车专用，原车行李锚点与开口位保留。",
    coverage: "覆盖29款车型",
    examples: "1系~8系 / i3 / X5 / M4",
  },
  {
    key: "full-trunk",
    name: "360全包尾箱",
    tagline: "后备箱立体包围垫，防杂物滚落缝隙",
    description: "后备箱立体包围垫，侧面、后壁全覆盖，防污渍渗入绒面、防杂物滚落缝隙；专车开模，遮挡部位按原车结构预留。",
    coverage: "覆盖19款车型",
    examples: "X1~X7 / iX / 3系 / 5系",
  },
];

export interface BmwFitmentRow {
  version: string;
  years: string;
  note: string;
}

export interface BmwFitmentEntry {
  slug: string;
  name: string;
  group: string;
  rows: { projectName: string; rows: BmwFitmentRow[] }[];
}

export const bmwFitmentEntries: BmwFitmentEntry[] = [
  {
    slug: "1系",
    name: "宝马1系",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "07--11 / 17--23",
            note: "4门5座",
          },
          {
            version: "轿跑",
            years: "11",
            note: "2门4座",
          },
          {
            version: "敞篷",
            years: "11",
            note: "2门4座",
          },
          {
            version: "两厢",
            years: "12--18",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "两厢",
            years: "12--16",
            note: "4门5座",
          },
          {
            version: "三厢",
            years: "17--",
            note: "4门5座",
          },
        ],
      },
    ],
  },
  {
    slug: "2系",
    name: "宝马2系",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "旅行车",
            years: "14--16",
            note: "4门5座",
          },
          {
            version: "多版本（按实车车身形式）",
            years: "14--18 / 14--19 / 15--20 / 21-23 / 25--",
            note: "多功能旅行车；5门7座、2门4座、4门5座",
          },
          {
            version: "2门轿跑",
            years: "22--23",
            note: "2门4座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "原车7座做5座",
            years: "14--",
            note: "多功能旅行车；5门7座",
          },
          {
            version: "多版本（按实车车身形式）",
            years: "14--",
            note: "多功能旅行车",
          },
          {
            version: "敞篷",
            years: "14--",
            note: "2门4座",
          },
          {
            version: "原车7座做7座",
            years: "14--",
            note: "",
          },
          {
            version: "轿跑",
            years: "14--19 / 21--",
            note: "2门4座、4门5座",
          },
          {
            version: "旅行版",
            years: "16--",
            note: "4门5座",
          },
          {
            version: "2门轿跑",
            years: "22--",
            note: "2门4座",
          },
          {
            version: "L",
            years: "25--",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "16--",
            note: "5门7座",
          },
        ],
      },
    ],
  },
  {
    slug: "3系",
    name: "宝马3系",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "00--04 / 04--12 / 13--19 / 13--20 / 2007-2011 / 20--24",
            note: "4门5座、后排座椅下有带氛围灯；4门5座、2门4座",
          },
          {
            version: "硬顶敞篷",
            years: "07--11",
            note: "2门4座",
          },
          {
            version: "轿跑",
            years: "08--11",
            note: "2门4座",
          },
          {
            version: "i",
            years: "20--24",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "i",
            years: "05--12 / 13--19 / 20--",
            note: "4门5座",
          },
          {
            version: "右钛车",
            years: "07-11",
            note: "2门4座",
          },
          {
            version: "Li",
            years: "13--19",
            note: "左边有网兜；4门5座",
          },
          {
            version: "GT",
            years: "13--20",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "13--20",
            note: "4门5座",
          },
        ],
      },
    ],
  },
  {
    slug: "4系",
    name: "宝马4系",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "14--20 / 20--23 / 21--23 / 22--23",
            note: "4门5座、前排安全带孔在地板上；2门4座、安全带在门框上；2门4座",
          },
          {
            version: "硬顶敞篷",
            years: "14--20",
            note: "2门4座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "轿跑",
            years: "14--19 / 20-- / 22--",
            note: "左边有耳朵右边有网兜；2门4座、二边有耳朵；2门4座、4门5座",
          },
          {
            version: "i",
            years: "15--19 / 17--19",
            note: "4门5座、左边有置物盒；2门5座",
          },
          {
            version: "软顶敞篷",
            years: "21--",
            note: "2门4座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "14--19 / 22--",
            note: "4门5座、右侧带挂扣长条 左右两边带网兜；4门5座",
          },
        ],
      },
    ],
  },
  {
    slug: "5系",
    name: "宝马5系",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "04--06 / 06--10 / 10--13 / 24--",
            note: "4门5座",
          },
          {
            version: "GT矮绒布",
            years: "10--13 / 14--17",
            note: "副驾内侧漏网兜；4门5座、4门5座",
          },
          {
            version: "GT高绒布削边工艺",
            years: "10--13",
            note: "副驾内侧漏网兜；4门5座",
          },
          {
            version: "Li高绒布",
            years: "11--13 / 14--17",
            note: "副驾内侧覆盖网兜/座椅轨道宽度41CM；4门5座、副驾内侧漏网兜/座椅轨道宽度36CM；4门5座",
          },
          {
            version: "Li矮绒布",
            years: "11--13 / 14--17",
            note: "副驾内侧漏网兜/座椅轨道宽度41CM；4门5座、副驾内侧漏网兜/座椅轨道宽度36CM；4门5座",
          },
          {
            version: "矮绒布",
            years: "11--13 / 14--17",
            note: "适配；旅行版；4门5座、副驾内侧漏网兜；4门5座",
          },
          {
            version: "高绒布",
            years: "14--17",
            note: "副驾内侧漏网兜；4门5座",
          },
          {
            version: "宝马全新5系Li削边工艺",
            years: "18--23",
            note: "混动版一样；4门5座",
          },
          {
            version: "宝马全新5系i",
            years: "18--23",
            note: "4门5座",
          },
          {
            version: "Li削边工艺",
            years: "24--",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "05--10 / 10--13",
            note: "3片",
          },
          {
            version: "i",
            years: "05--10 / 11--17 / 18-23 / 24--",
            note: "4门5座",
          },
          {
            version: "Li",
            years: "06--10 / 11--13 / 14--17 / 18-23 / 24--",
            note: "4门5座",
          },
          {
            version: "GT右呔版",
            years: "10--13",
            note: "",
          },
          {
            version: "GT",
            years: "11--13 / 14--",
            note: "4门5座",
          },
          {
            version: "Le",
            years: "18-23",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "10--13",
            note: "4门5座",
          },
        ],
      },
    ],
  },
  {
    slug: "6系",
    name: "宝马6系",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "06--10 / 11--16 / 11--18 / 18--22",
            note: "2门4座、副驾内侧漏网兜 适配M6 后排分体；4门4座、适配M6；2门4座、4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "轿跑",
            years: "06--10",
            note: "2门4座",
          },
          {
            version: "多版本（按实车车身形式）",
            years: "11--16",
            note: "",
          },
          {
            version: "i",
            years: "11--16",
            note: "",
          },
          {
            version: "GT",
            years: "18--",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "18--",
            note: "4门5座",
          },
        ],
      },
    ],
  },
  {
    slug: "7系",
    name: "宝马7系",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "Li高绒布",
            years: "04--08",
            note: "4门5座",
          },
          {
            version: "Li后排带灯孔矮绒布",
            years: "09--12 / 12--15",
            note: "灯孔位可开可不开/漏网兜 座椅轨道宽度41CM；4门4座、灯孔位可开可不开/漏网兜 座椅轨道宽度37CM；4门5座",
          },
          {
            version: "Li后排带灯孔高绒布",
            years: "09--12 / 12--15",
            note: "座椅轨道宽度41CM；4门4座、灯孔位可开可不开/漏网兜 座椅轨道宽度37CM；4门5座",
          },
          {
            version: "Li低配削边工艺",
            years: "16--22",
            note: "4门5座",
          },
          {
            version: "Li低配右呔版削边工艺",
            years: "16--22",
            note: "4门5座",
          },
          {
            version: "Li高配削边工艺",
            years: "16--22",
            note: "4门5座",
          },
          {
            version: "Li高配四座削边工艺",
            years: "16--22",
            note: "4门4座",
          },
          {
            version: "削边工艺",
            years: "23--",
            note: "后排右边座椅没有脚拖；4门5座、后排右边有脚托；4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "Li",
            years: "09 / 09--15 / 10--13 / 16-- / 23--",
            note: "4门5座",
          },
          {
            version: "Li高配4座",
            years: "16--",
            note: "4门4座",
          },
        ],
      },
    ],
  },
  {
    slug: "8系",
    name: "宝马8系",
    group: "sedan",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "19--22",
            note: "4门4座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "i",
            years: "19--",
            note: "4门4座",
          },
        ],
      },
    ],
  },
  {
    slug: "i3",
    name: "宝马i3",
    group: "i-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "EV",
            years: "14--20 / 22--24",
            note: "纯电动；4门5座、前排椅子底下没有音响 纯电动；4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "14--20",
            note: "",
          },
          {
            version: "纯电动",
            years: "14--20 / 22--",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "纯电SUV",
            years: "14--",
            note: "4门4座",
          },
        ],
      },
    ],
  },
  {
    slug: "i4",
    name: "宝马i4",
    group: "i-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "EV",
            years: "22--23",
            note: "前排椅子底下没有音响 纯电动；4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "纯电",
            years: "22--",
            note: "左边没有网兜；4门5座、左边有网兜；4门5座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "22--",
            note: "左边没有网兜；4门5座",
          },
        ],
      },
    ],
  },
  {
    slug: "i5",
    name: "宝马i5",
    group: "i-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "24--",
            note: "纯电；4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "标准款",
            years: "24--",
            note: "4门5座",
          },
        ],
      },
    ],
  },
  {
    slug: "i7",
    name: "宝马i7",
    group: "i-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "EV削边工艺",
            years: "23--",
            note: "后排右边有脚托 纯电动；4门5座、后排右边没有脚托 纯电动；4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "标准款",
            years: "23--",
            note: "右边有置物盒；4门5座",
          },
        ],
      },
    ],
  },
  {
    slug: "ix",
    name: "宝马iX",
    group: "i-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "宝马IXEV",
            years: "22--23",
            note: "纯电动；4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "宝马IX",
            years: "22--",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "22--",
            note: "4门5座",
          },
        ],
      },
    ],
  },
  {
    slug: "ix1",
    name: "宝马iX1",
    group: "i-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "23--",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "宝马iX1",
            years: "23--",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "23--",
            note: "4门5座",
          },
        ],
      },
    ],
  },
  {
    slug: "ix3",
    name: "宝马iX3",
    group: "i-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "EV",
            years: "20--23",
            note: "纯电；4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "纯电",
            years: "20--",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "20--",
            note: "4门5座",
          },
        ],
      },
    ],
  },
  {
    slug: "m2",
    name: "宝马M2",
    group: "m-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "16--22 / 22--",
            note: "拉手式手刹 23款不同；2门4座、双门硬顶跑车；2门4座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "标准款",
            years: "16--22 / 22--",
            note: "2门4座",
          },
        ],
      },
    ],
  },
  {
    slug: "m3",
    name: "宝马M3",
    group: "m-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "14--20 / 21",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "14--20",
            note: "",
          },
          {
            version: "标准款",
            years: "14--20 / 21",
            note: "4门5座",
          },
          {
            version: "旅行车",
            years: "23--",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "23--",
            note: "4门5座",
          },
        ],
      },
    ],
  },
  {
    slug: "m4",
    name: "宝马M4",
    group: "m-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "14--19",
            note: "扶手箱后端有出风口；2门4座、后排地板上无安全带扣；2门4座",
          },
          {
            version: "轿跑",
            years: "21--23",
            note: "扶手箱后端有出风口 后排地板上无安全带扣；2门4座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "14--19",
            note: "",
          },
          {
            version: "敞篷",
            years: "14--19",
            note: "",
          },
          {
            version: "轿跑",
            years: "14--19",
            note: "",
          },
          {
            version: "标准款",
            years: "22--",
            note: "2门4座",
          },
        ],
      },
    ],
  },
  {
    slug: "m5",
    name: "宝马M5",
    group: "m-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "18--23",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "18--",
            note: "",
          },
          {
            version: "标准款",
            years: "18--",
            note: "",
          },
        ],
      },
    ],
  },
  {
    slug: "m8",
    name: "宝马M8",
    group: "m-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "19--23",
            note: "适配8系；2门4座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "19--",
            note: "",
          },
          {
            version: "标准款",
            years: "19--",
            note: "",
          },
        ],
      },
    ],
  },
  {
    slug: "xm",
    name: "宝马XM",
    group: "m-series",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "矮绒",
            years: "24--",
            note: "插电式混合动力；4门5座",
          },
          {
            version: "高绒削边工艺",
            years: "24--",
            note: "插电式混合动力；4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "标准款",
            years: "24--",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "24--",
            note: "4门5座",
          },
        ],
      },
    ],
  },
  {
    slug: "x1",
    name: "宝马X1",
    group: "x-suv",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "10--15 / 16--22 / 23--",
            note: "4门5座、扶手箱后端是S型；4门5座",
          },
          {
            version: "新能源",
            years: "17--21",
            note: "插电混合动力；4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "标准款",
            years: "11--15 / 16--18 / 19--22",
            note: "4门5座、左边有耳朵；4门5座、左右有耳朵；4门5座",
          },
          {
            version: "新能源",
            years: "17--",
            note: "油电混合动力；4门5座",
          },
          {
            version: "宝马X1",
            years: "23--",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "10--15 / 16--22 / 17-- / 23--",
            note: "4门5座、右侧带网兜；4门5座",
          },
        ],
      },
    ],
  },
  {
    slug: "x2",
    name: "宝马X2",
    group: "x-suv",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "18--23 / 24--",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "标准款",
            years: "18-- / 24--",
            note: "4门5座、3片；4门5座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "18--",
            note: "右边无网兜；4门5座",
          },
        ],
      },
    ],
  },
  {
    slug: "x3",
    name: "宝马X3",
    group: "x-suv",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "05--10 / 11--17 / 18--24",
            note: "4门5座",
          },
          {
            version: "标准款",
            years: "25--",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "标准款",
            years: "11--17 / 18-24 / 25--",
            note: "4门5座",
          },
          {
            version: "M",
            years: "21--",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "05--10 / 11--17 / 11-17",
            note: "4门5座、大底带滑道；4门5座、大底不带滑道；4门5座、右侧不带松紧带 左右侧只有一个挂钩；4门5座",
          },
          {
            version: "M",
            years: "18--21",
            note: "大底带滑道 二测边倒背机关胶壳长度是16CM；4门5座",
          },
          {
            version: "标准款",
            years: "18-24 / 25--",
            note: "4门5座",
          },
        ],
      },
    ],
  },
  {
    slug: "x4",
    name: "宝马X4",
    group: "x-suv",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "14--18 / 19--23",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "标准款",
            years: "14--18 / 19--",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "14--18 / 19--",
            note: "4门5座、尾箱有轨道；4门5座",
          },
        ],
      },
    ],
  },
  {
    slug: "x5",
    name: "宝马X5",
    group: "x-suv",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "04--07 / 19--",
            note: "后排座椅下有带氛围灯；4门5座、5门7座",
          },
          {
            version: "原车5座矮绒布",
            years: "08--13",
            note: "后排座椅下没有带氛围灯 后座座椅不可移动；4门5座、后排座椅下有带氛围灯 后座座椅不可移动；4门5座",
          },
          {
            version: "原车5座高绒布",
            years: "08--13",
            note: "后排座椅下没有带氛围灯 后座座椅不可移动；4门5座、后排座椅下带氛围灯 后座座椅不可移动；4门5座",
          },
          {
            version: "右呔版原车7座做5座矮绒布",
            years: "08--13",
            note: "后排座椅下有带氛围灯；5门7座",
          },
          {
            version: "右呔版原车7座做7座矮绒布",
            years: "08--13",
            note: "后排座椅下有带氛围灯；5门7座",
          },
          {
            version: "原车7座做5座矮绒布",
            years: "08--13 / 14--18",
            note: "后排座椅下没有带氛围灯；5门7座、5门7座",
          },
          {
            version: "原车7座做7座矮绒布",
            years: "08--13 / 14--18",
            note: "后排座椅下没有带氛围灯；5门7座、5门7座",
          },
          {
            version: "原车7座做5座高绒布",
            years: "08--13 / 14--18",
            note: "后排座椅下没有带氛围灯；5门7座、5门7座",
          },
          {
            version: "原车7座做7座高绒布",
            years: "08--13",
            note: "后排座椅下没有带氛围灯；5门7座",
          },
          {
            version: "高配前排内侧矮绒布",
            years: "14--18",
            note: "二排座椅分体/带滑道；4门5座",
          },
          {
            version: "前排内侧矮绒布",
            years: "14--18",
            note: "二排座椅连体/座椅不可移动；4门5座、后排座椅下有带氛围灯；4门5座",
          },
          {
            version: "前排内侧高绒布",
            years: "14--18",
            note: "二排座椅连体/座椅不可移动；4门5座",
          },
          {
            version: "右钛7座做7座",
            years: "19--",
            note: "5门7座",
          },
          {
            version: "宝马全新X5前排内侧矮绒布",
            years: "19--",
            note: "4门5座",
          },
          {
            version: "宝马全新X5前排内侧高绒布削边工艺",
            years: "19--",
            note: "高绒布不可塞边；4门5座",
          },
          {
            version: "宝马全新X5国产前排内侧矮绒布",
            years: "22--",
            note: "4门5座",
          },
          {
            version: "宝马全新X5国产前排内侧高绒布削边工艺",
            years: "22--",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "04--07",
            note: "",
          },
          {
            version: "标准款",
            years: "04--07 / 14--18",
            note: "4门5座",
          },
          {
            version: "原车5座",
            years: "08--13",
            note: "4门5座",
          },
          {
            version: "原车7座做5座",
            years: "08--13",
            note: "5门7座",
          },
          {
            version: "原车7座做7座",
            years: "14--18",
            note: "5门7座",
          },
          {
            version: "右钛7座做5座",
            years: "19--",
            note: "5门7座",
          },
          {
            version: "宝马全新X5",
            years: "19--21",
            note: "4门5座",
          },
          {
            version: "宝马全新X5国产",
            years: "22--",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "04--07 / 07--13 / 08--13 / 19--21 / 22--",
            note: "4门5座、4门7座",
          },
          {
            version: "原车5座",
            years: "14--18",
            note: "4门5座",
          },
          {
            version: "右钛",
            years: "19--",
            note: "5门7座",
          },
        ],
      },
    ],
  },
  {
    slug: "x6",
    name: "宝马X6",
    group: "x-suv",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "前排内侧矮绒布",
            years: "07--14 / 15--19",
            note: "后排座椅下没有带氛围灯；4门4座、后排座椅下有带氛围灯；4门4座、后排座椅下有带氛围灯；4门5座、后排座椅下没有带氛围灯",
          },
          {
            version: "前排内侧高绒布",
            years: "07--14",
            note: "后排座椅下有带氛围灯；4门4座",
          },
          {
            version: "前排内侧高绒布削边工艺",
            years: "15--19",
            note: "后排座椅下有带氛围灯；4门5座、后排座椅下没有带氛围灯；4门5座",
          },
          {
            version: "全新前排内侧矮绒布",
            years: "20--23",
            note: "4门5座",
          },
          {
            version: "全新前排内侧高绒布削边工艺",
            years: "20--23",
            note: "高绒面不可塞；4门5座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "标准款",
            years: "07--14 / 15--19",
            note: "4门5座",
          },
          {
            version: "全新",
            years: "20--",
            note: "4门5座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "07--14 / 15--19",
            note: "4门4座、尾箱带滑道、带网兜；4门4座",
          },
          {
            version: "标准款",
            years: "20--",
            note: "4门5座",
          },
        ],
      },
    ],
  },
  {
    slug: "x7",
    name: "宝马X7",
    group: "x-suv",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "原车7座做7座矮绒布",
            years: "19--23",
            note: "三排座椅下面不带出风口；5门7座、三排座椅下面带出风口；5门7座",
          },
          {
            version: "原车7座做5座矮绒布",
            years: "19--23",
            note: "三排座椅下面带出风口；5门7座",
          },
          {
            version: "原车7座做5座高绒布削边工艺",
            years: "19--23",
            note: "5门7座",
          },
          {
            version: "原车7座做7座高绒布削边工艺",
            years: "19--23",
            note: "三排座椅下面带出风口；5门7座",
          },
          {
            version: "原车6座做4座矮绒布",
            years: "19--23",
            note: "三排座椅下面带出风口；5门6座",
          },
          {
            version: "原车6座做6座矮绒布",
            years: "19--23",
            note: "三排座椅下面带出风口；5门6座",
          },
          {
            version: "原车6座做4座高绒布削边工艺",
            years: "19--23",
            note: "5门6座",
          },
          {
            version: "原车6座做6座高绒布削边工艺",
            years: "19--23",
            note: "三排座椅下面带出风口；5门6座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "原车7座做5座",
            years: "19--",
            note: "5门6座；6座版一样；5门7座",
          },
          {
            version: "原车7座做7座",
            years: "19--",
            note: "5门6座；5门7座",
          },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          {
            version: "原车6座",
            years: "19--",
            note: "二排靠背是胶壳，无二排靠背。；5门6座",
          },
          {
            version: "原车7座",
            years: "19--",
            note: "三排靠背有挂钩孔；5门7座",
          },
        ],
      },
    ],
  },
  {
    slug: "z4",
    name: "宝马Z4",
    group: "sports",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          {
            version: "多版本（按实车车身形式）",
            years: "09--13 / 19--23",
            note: "2门2座",
          },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          {
            version: "标准款",
            years: "09--13 / 19--",
            note: "2门2座",
          },
        ],
      },
    ],
  },
];

export function getBmwModelCount() {
  return bmwModels.length;
}