import { Layers } from "lucide-react";
import { flooringAccessories } from "@/lib/flooring-products";

/**
 * 配件材质对比（G3）：风口件 / 脚托材质 / 迎宾踏板，
 * 材质与适用车型按价格单原文，具体搭配以车型方案与到店核对为准。
 */
export function FlooringAccessories() {
  return (
    <section
      id="flooring-accessories"
      className="scroll-mt-20 border-b border-white/[0.06] bg-zinc-900/40 py-16 text-white sm:py-20"
      aria-labelledby="flooring-accessories-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-amber-400">
            <Layers className="size-4" aria-hidden="true" />
            配件材质对比
          </p>
          <h2
            id="flooring-accessories-title"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            脚托、风口件、迎宾踏板怎么选
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            不同车型搭配的脚托与风口件材质不同，下表按价格单原文列出材质、特点与常见适用车型，具体组合以车型方案为准。
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0b0c10]">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/[0.08] text-zinc-400">
                <th scope="col" className="px-5 py-4 font-medium">配件</th>
                <th scope="col" className="px-5 py-4 font-medium">材质 / 类型</th>
                <th scope="col" className="px-5 py-4 font-medium">特点</th>
                <th scope="col" className="px-5 py-4 font-medium">适用</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {flooringAccessories.map((row) => (
                <tr key={row.name} className="align-top">
                  <th scope="row" className="px-5 py-4 font-semibold text-white">
                    {row.name}
                  </th>
                  <td className="px-5 py-4 text-zinc-200">{row.material}</td>
                  <td className="px-5 py-4 leading-7 text-zinc-300">{row.trait}</td>
                  <td className="px-5 py-4 leading-7 text-zinc-300">{row.fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs leading-6 text-zinc-500">
          可选配逻辑（可选 / 可加装 / 可不要）按车型单列，金额到店询价；适配信息以门店现场检查为准，不同批次与配置存在差异。
        </p>
      </div>
    </section>
  );
}
