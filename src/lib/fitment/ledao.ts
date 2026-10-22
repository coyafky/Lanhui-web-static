/**
 * 乐道 适配库（由 scripts/build-fitment-data.mjs 自动生成，勿手改）
 *
 * 来源：供应商产品资料/车型适配库和文件/乐道.md（只读原始资料）
 * 说明：材质/规格/年款来自供应商原文；备注中的宣传承诺已按发布规则清理；code 为供应商编号（页面默认不展示）。
 */

export const ledaoFitment = {
  brand: "乐道",
  source: "供应商产品资料/车型适配库和文件/乐道.md",
  models: [
  {
    model: "L60",
    projects: [
  {
    name: "小桌板",
    specs: [
  {
    label: "浅紫灰/浅米色皮质（同色系）",
    material: "小桌板（真皮+金属饰条）",
    note: "移动办公/途中用餐/带娃/旅途娱乐/日常置物；不用时收起不占空间",
    date: "2026-09-03"
  }
    ],
  },
  {
    name: "360软包脚垫",
    specs: [
  {
    label: "皮革/丝圈",
    material: "皮革/丝圈",
    year: "24款--",
    note: "门座：4门5座；编号：L3183S；4门5座",
    date: "2026-09-07"
  }
    ],
  },
  {
    name: "平面尾箱垫",
    specs: [
  {
    label: "皮革",
    material: "皮革",
    year: "24款--",
    note: "门座：4门5座；编号：2143；4门5座",
    date: "2026-09-07"
  }
    ],
  }
    ],
  },
  {
    model: "L80",
    projects: [
  {
    name: "360软包脚垫",
    specs: [
  {
    label: "皮革/丝圈",
    material: "皮革/丝圈",
    year: "26款--",
    note: "门座：4门5座；编号：L3517S；4门5座",
    date: "2026-09-07"
  }
    ],
  },
  {
    name: "平面尾箱垫",
    specs: [
  {
    label: "皮革",
    material: "皮革",
    year: "26款--",
    note: "门座：4门5座；编号：2395；4门5座",
    date: "2026-09-07"
  }
    ],
  }
    ],
  },
  {
    model: "L90",
    projects: [
  {
    name: "底盘护板",
    specs: [
  {
    material: "锰钢1.2mm；铝镁合金2.0mm",
    year: "2025",
    note: "注意：三件套；排量或续航：不分续航；保护位置：前电机；后电机；后尾箱储气罐",
    date: "2026-08-30"
  },
  {
    label: "前电机、后电机",
    material: "原始资料未注明具体合金类型",
    note: "保护位置：前电机、后电机",
    date: "2026-09-08"
  }
    ],
  },
  {
    name: "360软包脚垫",
    specs: [
  {
    label: "皮革/丝圈",
    material: "皮革/丝圈",
    year: "25款--",
    note: "门座：5门6座；片套：4片；编号：L3355S；5门6座/4片",
    date: "2026-09-07"
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
  const flat = (m: (typeof ledaoFitment.models)[number]) =>
    m.projects.map((p) => p.name);
  for (const m of ledaoFitment.models) {
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

export type ledaoFitmentModel = (typeof ledaoFitment.models)[number];
export type ledaoFitmentProject = (typeof ledaoFitment.models)[number]["projects"][number];
export type ledaoFitmentSpec = (typeof ledaoFitment.models)[number]["projects"][number]["specs"][number];
