/**
 * 仰望 适配库（由 scripts/build-fitment-data.mjs 自动生成，勿手改）
 *
 * 来源：供应商产品资料/车型适配库和文件/仰望.md（只读原始资料）
 * 说明：材质/规格/年款来自供应商原文；备注中的宣传承诺已按发布规则清理；code 为供应商编号（页面默认不展示）。
 */

export const yangwangFitment = {
  brand: "仰望",
  source: "供应商产品资料/车型适配库和文件/仰望.md",
  models: [
  {
    model: "U8",
    projects: [
  {
    name: "底盘护板",
    specs: [
  {
    label: "标准版",
    material: "铝镁合金",
    note: "原表未提供年款、动力类型及具体护板部位",
    date: "2026-09-15"
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
  const flat = (m: (typeof yangwangFitment.models)[number]) =>
    m.projects.map((p) => p.name);
  for (const m of yangwangFitment.models) {
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

export type yangwangFitmentModel = (typeof yangwangFitment.models)[number];
export type yangwangFitmentProject = (typeof yangwangFitment.models)[number]["projects"][number];
export type yangwangFitmentSpec = (typeof yangwangFitment.models)[number]["projects"][number]["specs"][number];
