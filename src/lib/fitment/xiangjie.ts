/**
 * 享界 适配库（由 scripts/build-fitment-data.mjs 自动生成，勿手改）
 *
 * 来源：供应商产品资料/车型适配库和文件/享界.md（只读原始资料）
 * 说明：材质/规格/年款来自供应商原文；备注中的宣传承诺已按发布规则清理；code 为供应商编号（页面默认不展示）。
 */

export const xiangjieFitment = {
  brand: "享界",
  source: "供应商产品资料/车型适配库和文件/享界.md",
  models: [
  {
    model: "S9",
    projects: [
  {
    name: "底盘护板",
    specs: [
  {
    material: "锰钢1.2mm；铝镁合金2.0mm",
    year: "2025",
    note: "五件套；排量或续航:增程续航 256、365 S9T续航251/354；保护位置:发动机；电池前；电池后；油箱；后电机",
    date: "2026-08-30",
    dynamics: "增程式"
  }
    ],
  }
    ],
  },
  {
    model: "S9T",
    projects: [
  {
    name: "底盘护板",
    specs: [
  {
    material: "锰钢1.2mm；铝镁合金2.0mm",
    year: "2025",
    note: "五件套；排量或续航:增程续航 256、365 S9T续航251/354；纯电续航 801/701；保护位置:发动机；电池前；电池后；油箱；后电机；前电机；储气罐",
    date: "2026-08-30",
    dynamics: "增程式；纯电"
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
    material: "后排娱乐屏",
    note: "专用支架+一秒安装+多屏互联互控+13.3超大屏+车规级8核大内存，4G+64G车规级配置。一体化超薄机身设计，拒绝抖动掉落，高端定制，无需磁吸，1秒固定,支持双频WiFi+蓝牙音频+内置双喇叭+HDMI+3.5mm耳机+USB*1+Type-C*1",
    date: "2026-08",
    code: "黑色"
  }
    ],
  }
    ],
  },
  {
    model: "S9增程",
    projects: [
  {
    name: "底盘护板",
    specs: [
  {
    label: "五件套",
    material: "原始资料未注明具体合金类型",
    date: "2026-09-08",
    code: "发动机、电池、线路、油箱、后电机"
  }
    ],
  }
    ],
  },
  {
    model: "S9纯电",
    projects: [
  {
    name: "底盘护板",
    specs: [
  {
    label: "四件套",
    material: "原始资料未注明具体合金类型",
    date: "2026-09-08",
    code: "前电机、前电池、后电池、后电机"
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
  const flat = (m: (typeof xiangjieFitment.models)[number]) =>
    m.projects.map((p) => p.name);
  for (const m of xiangjieFitment.models) {
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

export type xiangjieFitmentModel = (typeof xiangjieFitment.models)[number];
export type xiangjieFitmentProject = (typeof xiangjieFitment.models)[number]["projects"][number];
export type xiangjieFitmentSpec = (typeof xiangjieFitment.models)[number]["projects"][number]["specs"][number];
