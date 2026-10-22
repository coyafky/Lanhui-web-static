/**
 * 尚界 适配库（由 scripts/build-fitment-data.mjs 自动生成，勿手改）
 *
 * 来源：供应商产品资料/车型适配库和文件/尚界.md（只读原始资料）
 * 说明：材质/规格/年款来自供应商原文；备注中的宣传承诺已按发布规则清理；code 为供应商编号（页面默认不展示）。
 */

export const shangjieFitment = {
  brand: "尚界",
  source: "供应商产品资料/车型适配库和文件/尚界.md",
  models: [
  {
    model: "H5",
    projects: [
  {
    name: "底盘护板",
    specs: [
  {
    material: "锰钢1.2mm；铝镁合金2.0mm",
    year: "2025",
    note: "重要说明:五件套；排量或续航:纯电535/640；续航235；保护位置:前电机；电池前；电池后；后电机；储气罐；发动机；线束；电池；油箱",
    date: "2026-08-30",
    dynamics: "纯电"
  }
    ],
  },
  {
    name: "小桌板",
    specs: [
  {
    label: "米色皮质（带杯架）",
    material: "小桌板（真皮+金属饰条）",
    note: "移动办公/途中用餐/带娃/旅途娱乐/日常置物",
    date: "2026-09-03"
  }
    ],
  }
    ],
  },
  {
    model: "Z7",
    projects: [
  {
    name: "底盘护板",
    specs: [
  {
    material: "锰钢1.2mm；铝镁合金2.0mm",
    year: "2026",
    note: "重要说明:五件套通用；排量或续航:续航 905/791；保护位置:前电机；电池前；电池后；后电机；储气罐",
    date: "2026-08-30"
  }
    ],
  }
    ],
  },
  {
    model: "Z7T",
    projects: [
  {
    name: "底盘护板",
    specs: [
  {
    material: "锰钢1.2mm；铝镁合金2.0mm",
    year: "2026",
    note: "重要说明:五件套通用；排量或续航:续航 873/776；保护位置:前电机；电池前；电池后；后电机；储气罐",
    date: "2026-08-30"
  }
    ],
  }
    ],
  },
  {
    model: "鸿蒙智行系列",
    projects: [
  {
    name: "后排娱乐屏",
    specs: [
  {
    label: "黑色",
    material: "后排娱乐屏",
    note: "专用支架+一秒安装+多屏互联互控+13.3超大屏+车规级8核大内存，4G+64G车规级配置。一体化超薄机身设计，拒绝抖动掉落，高端定制，无需磁吸，1秒固定,支持双频WiFi+蓝牙音频+内置双喇叭+HDMI+3.5mm耳机+USB*1+Type-C*1",
    date: "2026-08"
  }
    ],
  }
    ],
  },
  {
    model: "H5-200续航",
    projects: [
  {
    name: "底盘护板",
    specs: [
  {
    label: "发动机、线束、电池、油箱、后电机",
    material: "原始资料未注明具体合金类型",
    date: "2026-09-08"
  }
    ],
  }
    ],
  },
  {
    model: "H5纯电-535续航",
    projects: [
  {
    name: "底盘护板",
    specs: [
  {
    label: "前电机护板、前电池护板、后电池护板、后电机护板",
    material: "原始资料未注明具体合金类型",
    date: "2026-09-08"
  }
    ],
  }
    ],
  },
  {
    model: "Z7纯电Max-732续航",
    projects: [
  {
    name: "底盘护板",
    specs: [
  {
    label: "前电机护板、前电池护板、后电池护板、后电机护板",
    material: "原始资料未注明具体合金类型",
    date: "2026-09-08"
  }
    ],
  }
    ],
  }
  ],
} as const;

// ---- Runtime 断言（防漂移） ----
(() => {
  const errors: string[] = [];
  const flat = (m: (typeof shangjieFitment.models)[number]) =>
    m.projects.map((p) => p.name);
  for (const m of shangjieFitment.models) {
    const names = flat(m);
    if (new Set(names).size !== names.length) {
      errors.push(`车型「${m.model}」项目名重复`);
    }
    for (const p of m.projects) {
      if (p.specs.length < 1) errors.push(`车型「${m.model}」项目「${p.name}」无方案`);
      const ids = p.specs.map((s, i) => JSON.stringify(s));
      if (new Set(ids).size !== ids.length) errors.push(`车型「${m.model}」项目「${p.name}」方案可区分度不足`);
    }
  }
  if (errors.length > 0) {
    throw new Error("[fitment] " + errors.join(" | "));
  }
})();

export type shangjieFitmentModel = (typeof shangjieFitment.models)[number];
export type shangjieFitmentProject = (typeof shangjieFitment.models)[number]["projects"][number];
export type shangjieFitmentSpec = (typeof shangjieFitment.models)[number]["projects"][number]["specs"][number];
