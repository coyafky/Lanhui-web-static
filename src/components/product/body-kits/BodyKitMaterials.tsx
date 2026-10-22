import { BODY_KIT_MATERIAL_STATS } from "@/lib/body-kit-fitment";

const MATERIAL_ROWS = [
  {
    material: "ABS / 吸塑",
    trait: "高韧性、可上漆、性价比高，日常家用与商务车占主流",
    scene: "日常家用、商务接待用车",
    stat: BODY_KIT_MATERIAL_STATS[0].records,
  },
  {
    material: "PP / 注塑",
    trait: "原厂同工艺、弹性好、耐剐蹭，走烂路更从容",
    scene: "家用车、经常走非铺装路面",
    stat: BODY_KIT_MATERIAL_STATS[1].records,
  },
  {
    material: "碳纤维",
    trait: "轻量、质感强，性能向与姿态向选择",
    scene: "性能向 / 姿态向外观升级",
    stat: BODY_KIT_MATERIAL_STATS[2].records,
  },
  {
    material: "干碳",
    trait: "更轻更硬，竞技向高端定制",
    scene: "赛道取向 / 高端定制",
    stat: BODY_KIT_MATERIAL_STATS[3].records,
  },
];

/**
 * S4 材质对比表（G5）：ABS 61 / PP 4 / 碳纤维 5 / 干碳 2（CMST 口径记录数）。
 */
export function BodyKitMaterials() {
  return (
    <section
      id="body-kit-materials"
      aria-labelledby="body-kit-materials-title"
      className="scroll-mt-20 border-b border-white/[0.06] bg-zinc-950 py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-amber-400">材质对比</p>
          <h2 id="body-kit-materials-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            ABS、PP、碳纤维、干碳，差别在哪
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            材质决定重量、质感与耐剐蹭表现，按用车场景选，不盲目追高端。下表记录数为产品资料口径，供选型参考。
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-white/[0.08] bg-zinc-900">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/[0.08] text-xs tracking-[0.14em] text-zinc-400">
                <th className="px-5 py-4 font-medium">材质 / 工艺</th>
                <th className="px-5 py-4 font-medium">特点</th>
                <th className="px-5 py-4 font-medium">适用场景</th>
                <th className="px-5 py-4 text-right font-medium">资料记录数</th>
              </tr>
            </thead>
            <tbody>
              {MATERIAL_ROWS.map((row) => (
                <tr key={row.material} className="border-b border-white/[0.06] last:border-0">
                  <td className="px-5 py-4 font-semibold text-white">{row.material}</td>
                  <td className="px-5 py-4 leading-6 text-zinc-300">{row.trait}</td>
                  <td className="px-5 py-4 leading-6 text-zinc-300">{row.scene}</td>
                  <td className="px-5 py-4 text-right tabular-nums text-zinc-400">{row.stat} 条</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-xs leading-6 text-zinc-500">
          材质 / 工艺均为产品资料原文整理；实际装车材质、颜色与工艺以门店现场确认的产品批次为准。
        </p>
      </div>
    </section>
  );
}
