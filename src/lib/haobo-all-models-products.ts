import { haoboModels } from "@/lib/haobo-model-groups";

export type HaoboProjectKey = "skid-plate" | "soft-mat" | "trunk-mat" | "full-trunk";

export interface HaoboProject {
  key: HaoboProjectKey;
  name: string;
  tagline: string;
  description: string;
  coverage: string;
  examples: string;
}

export const haoboProjects: HaoboProject[] = [
  {
    key: "skid-plate",
    name: "底盘护板",
    tagline: "护住电机电池油箱，托底磕碰不心疼",
    description: "专车开模的底盘护板，覆盖前电机、电池、油箱与后电机等关键部位，锰钢或铝镁合金材质，防托底磕碰与石子飞溅；新能源车底盘件多、线路密，装一套多一层保护。",
    coverage: "覆盖5款车型",
    examples: "GT / HT / HL / A800 / S600",
  },
  {
    key: "soft-mat",
    name: "360软包脚垫",
    tagline: "全包围脚垫，边角贴合原车绒面与门槛，不翘边",
    description: "全包围汽车脚垫，边角塞进原车绒面与门槛缝隙，贴合不翘边；防尘防水、易清洁，专车开模，油门、刹车位置精准避让，不挡踏板。皮革、丝圈可选。",
    coverage: "覆盖4款车型",
    examples: "SSR / GT / HT / HL",
  },
  {
    key: "trunk-mat",
    name: "平面尾箱垫",
    tagline: "后备箱平面垫，防污防刮、耐磨损",
    description: "后备箱平面垫，四边贴合后备箱轮廓，防污防刮、耐磨损、易打理；专车专用，原车行李锚点与开口位保留。",
    coverage: "覆盖4款车型",
    examples: "SSR / GT / HT / HL",
  },
  {
    key: "full-trunk",
    name: "360全包尾箱",
    tagline: "后备箱立体包围垫，防杂物滚落缝隙",
    description: "后备箱立体包围垫，侧面、后壁全覆盖，防污渍渗入绒面、防杂物滚落缝隙；专车开模，遮挡部位按原车结构预留。",
    coverage: "覆盖1款车型",
    examples: "HT",
  },
];

export interface HaoboFitmentRow {
  version: string;
  years: string;
  note: string;
}

export interface HaoboFitmentEntry {
  slug: string;
  name: string;
  group: string;
  rows: { projectName: string; rows: HaoboFitmentRow[] }[];
}

export const haoboFitmentEntries: HaoboFitmentEntry[] = [
  {
    slug: "ssr",
    name: "昊铂SSR",
    group: "sports",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { version: "标准", years: "24款--", note: "2门2座；片套3片" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { version: "标准", years: "24款--", note: "2门2座" },
        ],
      },
    ],
  },
  {
    slug: "gt",
    name: "昊铂GT",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          {
            version: "五件套 / 三件套",
            years: "2023-2024 / 2025",
            note: "纯电 续航560/710/630；保护前电机、电池前、电池后、后电机、后部底盘",
          },
        ],
      },
      {
        projectName: "360软包脚垫",
        rows: [
          { version: "标准", years: "23款--", note: "4门5座；片套3片；纯电" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { version: "标准", years: "23款--", note: "4门5座" },
        ],
      },
    ],
  },
  {
    slug: "s600",
    name: "昊铂S600",
    group: "sedan",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          {
            version: "四件套（增程四驱）",
            years: "即将上市",
            note: "发动机、电池、油箱、后电机",
          },
          {
            version: "三件套（纯电660续航后驱）",
            years: "即将上市",
            note: "前电机、前电池、后电池",
          },
        ],
      },
    ],
  },
  {
    slug: "ht",
    name: "昊铂HT",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          {
            version: "五件套（825 续航版）",
            years: "2023-2024-2025 / 2025",
            note: "纯电 续航825；前电机、尾箱后底护板按825通用，25款后电机通用",
          },
          {
            version: "五件套（670/770/600 续航版）",
            years: "2023-2024-2025 / 2024",
            note: "纯电 续航670、670特高压激光雷达版、770、600；后电机与670特高压激光雷达版通用；25款电池螺丝专用",
          },
        ],
      },
      {
        projectName: "360软包脚垫",
        rows: [
          { version: "标准", years: "23款--", note: "4门5座；片套3片" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { version: "标准", years: "23款--", note: "4门5座" },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          { version: "标准", years: "23款--", note: "4门5座；侧壁为绒布" },
        ],
      },
    ],
  },
  {
    slug: "hl",
    name: "昊铂HL",
    group: "suv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          {
            version: "六件套 / 四件套（后电机P版 / L版 / AH8纯电版）",
            years: "2025",
            note: "增程 续航350；纯电 续航750/700；保护前电机、电池前、电池后、油箱、后电机",
          },
        ],
      },
      {
        projectName: "360软包脚垫",
        rows: [
          { version: "增程", years: "25款--", note: "5门6座；片套3片" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { version: "分体", years: "25款--", note: "5门6座" },
          { version: "连体", years: "25款--", note: "5门6座" },
        ],
      },
    ],
  },
  {
    slug: "a800",
    name: "昊铂A800",
    group: "mpv",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          {
            version: "四件套",
            years: "2026",
            note: "增程；即将上市；保护发动机、电池、油箱、后电机",
          },
        ],
      },
    ],
  },
];
