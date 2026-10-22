import { Layers } from "lucide-react";

/**
 * 材质对比表（G3）：厚度为适配库常见规格原文，特点与适用场景为通用说明，
 * 具体可选材质以车型适配库原文与到店实车核对为准。
 */
const MATERIALS = [
  {
    name: "锰钢",
    thickness: "1.2mm",
    trait: "硬度高、抗冲击强，自重相对更大",
    fit: "越野、烂路、碎石路段为主的车辆",
  },
  {
    name: "铝镁合金",
    thickness: "2.0mm",
    trait: "重量轻、耐腐蚀、散热表现较好",
    fit: "新能源车主流选择，兼顾电池与电机区域防护",
  },
  {
    name: "碳钢",
    thickness: "1.5mm",
    trait: "强度较高，性价比取向",
    fit: "燃油车发动机、油箱区域防护",
  },
  {
    name: "塑钢",
    thickness: "5.0mm",
    trait: "重量轻、有弹性、行驶静音",
    fit: "城市通勤、以日常刮擦防护为主",
  },
  {
    name: "碳纤",
    thickness: "5.0mm",
    trait: "极轻、高强度，性能取向",
    fit: "性能向车型，具体版型以适配库原文为准",
  },
] as const;

export function SkidPlateMaterials() {
  return (
    <section
      id="skid-plate-materials"
      className="scroll-mt-20 border-b border-white/[0.06] bg-zinc-950 py-16 text-white sm:py-20"
      aria-labelledby="skid-plate-materials-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-orange-400">
            <Layers className="size-4" aria-hidden="true" />
            材质对比
          </p>
          <h2
            id="skid-plate-materials-title"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            锰钢、铝镁合金、碳钢、塑钢、碳纤怎么选
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            厚度为适配库常见规格原文。不同车型可选材质不同，同一车型也可能存在多套材质方案，年款与材质差异按方案罗列，不暗示可任意互换。
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0b0c10]">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/[0.08] text-zinc-400">
                <th scope="col" className="px-5 py-4 font-medium">材质</th>
                <th scope="col" className="px-5 py-4 font-medium">厚度（原文）</th>
                <th scope="col" className="px-5 py-4 font-medium">特点</th>
                <th scope="col" className="px-5 py-4 font-medium">适用场景</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {MATERIALS.map((row) => (
                <tr key={row.name} className="align-top">
                  <th scope="row" className="px-5 py-4 font-semibold text-white">
                    {row.name}
                  </th>
                  <td className="px-5 py-4 text-zinc-200">{row.thickness}</td>
                  <td className="px-5 py-4 leading-7 text-zinc-300">{row.trait}</td>
                  <td className="px-5 py-4 leading-7 text-zinc-300">{row.fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs leading-6 text-zinc-500">
          适配信息以门店现场检查为准，不同批次与配置存在差异；材质选择结合用车路况与车型版型共同确认。
        </p>
      </div>
    </section>
  );
}
