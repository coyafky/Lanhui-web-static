import { icarModels } from "@/lib/icar-model-groups";

export type IcarProjectKey = "skid-plate";

export interface IcarProject {
  key: IcarProjectKey;
  name: string;
  tagline: string;
  description: string;
  coverage: string;
  examples: string;
}

export const icarProjects: IcarProject[] = [
  {
    key: "skid-plate",
    name: "底盘护板",
    tagline: "底部保护，纯电护电机电池、增程护发动机油箱",
    description:
      "底部保护。纯电车型（03/V23/V23S）护板覆盖前电机、电池、后电机等关键部位，防托底、防石子飞溅；增程车型（V27 200km 版）另覆盖发动机、线束与油箱。材质铝镁合金（轻量防锈）/合金，按车型与版本分四件套/五件套。",
    coverage: "覆盖4款车型",
    examples: "03/V23/V23S/V27",
  },
];

export interface IcarFitmentRow {
  year: string;
  note: string;
}

export interface IcarFitmentEntry {
  slug: string;
  name: string;
  group: string;
  rows: { projectName: string; rows: IcarFitmentRow[] }[];
}

export const icarFitmentEntries: IcarFitmentEntry[] = [
  {
    slug: "03",
    name: "iCAR 03",
    group: "ev",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { year: "五件套", note: "前电机、前电池、后电池、后电机A、后电机B；合金" },
        ],
      },
    ],
  },
  {
    slug: "v23",
    name: "iCAR V23",
    group: "ev",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { year: "四件套", note: "前电机、前电池、后电池、后电机；合金" },
        ],
      },
    ],
  },
  {
    slug: "v23s",
    name: "iCAR V23S",
    group: "ev",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { year: "全车底部保护", note: "原表未细分保护部位；铝镁合金" },
        ],
      },
    ],
  },
  {
    slug: "v27",
    name: "iCAR V27",
    group: "e-range",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { year: "两驱/四驱 2 版", note: "铝镁合金" },
          { year: "200km 续航版 · 五件套", note: "发动机、线束、电池、油箱、后电机；合金" },
        ],
      },
    ],
  },
];

export function getIcarModelCount() {
  return icarModels.length;
}
