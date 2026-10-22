import { shangjieModels } from "@/lib/shangjie-model-groups";

export type ShangjieProjectKey = "skid-plate" | "rear-screen" | "table";

export interface ShangjieProject {
  key: ShangjieProjectKey;
  name: string;
  tagline: string;
  description: string;
  coverage: string;
  examples: string;
}

export const shangjieProjects: ShangjieProject[] = [
  {
    key: "skid-plate",
    name: "底盘护板",
    tagline: "底部保护，纯电护电机电池、增程护发动机油箱",
    description:
      "底部保护。纯电车型护板覆盖前电机、电池、后电机、储气罐等关键部位，防托底、防石子飞溅；增程车型（H5 200km 版）另覆盖发动机、线束与油箱。材质锰钢 1.2mm（抗托底）/铝镁合金 2.0mm（轻量防锈）/合金，按车型与续航版本分四件套/五件套。",
    coverage: "覆盖3款车型",
    examples: "H5/Z7/Z7T",
  },
  {
    key: "rear-screen",
    name: "后排娱乐屏",
    tagline: "鸿蒙智行系列专用，后排带 LINK 接口车型适装",
    description:
      "鸿蒙智行系列专用后排娱乐屏，适配后排带 LINK 接口的车型（尚界 H5/Z7T，问界 M7/M8/M9、享界 S9/S9T、智界 R7/新S7、尊界 S800 等）。专用支架+一秒安装+多屏互联互控+13.3 寸超大屏+车规级 8 核大内存（4G+64G）；一体化超薄机身，无需磁吸、1 秒固定，支持双频 WiFi、蓝牙音频、内置双喇叭、HDMI、3.5mm 耳机、USB、Type-C。",
    coverage: "覆盖2款车型",
    examples: "H5/Z7T",
  },
  {
    key: "table",
    name: "小桌板",
    tagline: "真皮+金属饰条，装前排座椅靠背后，展开即用",
    description:
      "真皮+金属饰条小桌板，米色皮质带杯架；安装于前排座椅靠背后方，展开即用、收起贴合椅背，专车专用。适合移动办公、途中用餐、带娃、旅途娱乐、日常置物。",
    coverage: "覆盖1款车型",
    examples: "H5",
  },
];

export interface ShangjieFitmentRow {
  year: string;
  note: string;
}

export interface ShangjieFitmentEntry {
  slug: string;
  name: string;
  group: string;
  rows: { projectName: string; rows: ShangjieFitmentRow[] }[];
}

export const shangjieFitmentEntries: ShangjieFitmentEntry[] = [
  {
    slug: "h5",
    name: "尚界 H5",
    group: "all",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { year: "纯电 535/640 续航 · 五件套", note: "前电机、电池前、电池后、后电机、储气罐；锰钢1.2/铝镁2.0" },
          { year: "纯电 535 续航 · 四件套", note: "前电机、前电池、后电池、后电机；合金" },
          { year: "200 续航增程 · 五件套", note: "发动机、线束、电池、油箱、后电机；合金" },
        ],
      },
      {
        projectName: "后排娱乐屏",
        rows: [
          { year: "鸿蒙智行系列专用", note: "后排带 LINK 接口；13.3 寸超大屏、多屏互联互控、1 秒安装、车规级配置" },
        ],
      },
      {
        projectName: "小桌板",
        rows: [
          { year: "米色皮质带杯架", note: "真皮+金属饰条；装前排座椅靠背后，展开即用、收起贴合椅背" },
        ],
      },
    ],
  },
  {
    slug: "z7",
    name: "尚界 Z7",
    group: "all",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { year: "续航 905/791 · 五件套通用", note: "前电机、电池前、电池后、后电机、储气罐；锰钢1.2/铝镁2.0" },
          { year: "纯电 Max 732 续航 · 四件套", note: "前电机、前电池、后电池、后电机；合金" },
        ],
      },
    ],
  },
  {
    slug: "z7t",
    name: "尚界 Z7T",
    group: "all",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { year: "续航 873/776 · 五件套通用", note: "前电机、电池前、电池后、后电机、储气罐；锰钢1.2/铝镁2.0" },
        ],
      },
      {
        projectName: "后排娱乐屏",
        rows: [
          { year: "鸿蒙智行系列专用", note: "后排带 LINK 接口；13.3 寸超大屏、多屏互联互控、1 秒安装、车规级配置" },
        ],
      },
    ],
  },
];

export function getShangjieModelCount() {
  return shangjieModels.length;
}
