import { xiangjieModels } from "@/lib/xiangjie-model-groups";

export type XiangjieProjectKey = "skid-plate" | "rear-screen";

export interface XiangjieProject {
  key: XiangjieProjectKey;
  name: string;
  tagline: string;
  description: string;
  coverage: string;
  examples: string;
}

export const xiangjieProjects: XiangjieProject[] = [
  {
    key: "skid-plate",
    name: "底盘护板",
    tagline: "底部保护，增程护发动机油箱、纯电护电机电池",
    description:
      "底部保护。增程车型（S9 增程、S9T 增程版）护板覆盖发动机、电池、油箱、后电机等关键部位；纯电车型（S9 纯电、S9T 纯电版）覆盖前电机、电池、后电机。材质锰钢 1.2mm（抗托底）/铝镁合金 2.0mm（轻量防锈）/合金，按动力与续航版本分四件套/五件套。",
    coverage: "覆盖2款车型",
    examples: "S9/S9T",
  },
  {
    key: "rear-screen",
    name: "后排娱乐屏",
    tagline: "鸿蒙智行系列专用，后排带 LINK 接口车型适装",
    description:
      "鸿蒙智行系列专用后排娱乐屏，适配后排带 LINK 接口的车型（享界 S9/S9T，问界 M7/M8/M9、智界 R7/新S7、尊界 S800、尚界 H5/Z7T 等）。专用支架+一秒安装+多屏互联互控+13.3 寸超大屏+车规级 8 核大内存（4G+64G）；一体化超薄机身，无需磁吸、1 秒固定，支持双频 WiFi、蓝牙音频、内置双喇叭、HDMI、3.5mm 耳机、USB、Type-C。",
    coverage: "覆盖2款车型",
    examples: "S9/S9T",
  },
];

export interface XiangjieFitmentRow {
  year: string;
  note: string;
}

export interface XiangjieFitmentEntry {
  slug: string;
  name: string;
  group: string;
  rows: { projectName: string; rows: XiangjieFitmentRow[] }[];
}

export const xiangjieFitmentEntries: XiangjieFitmentEntry[] = [
  {
    slug: "s9",
    name: "享界 S9",
    group: "all",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { year: "增程续航 256/365 · 五件套", note: "发动机、电池前、电池后、油箱、后电机；锰钢1.2/铝镁2.0" },
          { year: "增程版 · 五件套", note: "发动机、电池、线路、油箱、后电机；合金" },
          { year: "纯电版 · 四件套", note: "前电机、前电池、后电池、后电机；合金" },
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
  {
    slug: "s9t",
    name: "享界 S9T",
    group: "all",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { year: "增程 251/354 · 五件套", note: "发动机、电池前、电池后、油箱、后电机；锰钢1.2/铝镁2.0" },
          { year: "纯电 801/701 · 五件套", note: "前电机、电池前、电池后、后电机、储气罐；锰钢1.2/铝镁2.0" },
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

export function getXiangjieModelCount() {
  return xiangjieModels.length;
}
