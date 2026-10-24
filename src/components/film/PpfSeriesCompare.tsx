import { ppfSeries } from "@/lib/film-products";

/**
 * 6 款隐形车衣产品线适配速查（参数按产品资料呈现，不换算、不含价格）。
 */
export function PpfSeriesCompare() {
  return (
    <section id="ppf-series" className="py-16 sm:py-20 bg-black border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-orange-400 mb-3">产品线对比</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            6 款隐形车衣适配速查：厚度、延伸率、耐候与质保对比
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl leading-relaxed">
            以下数值为产品资料标称值，尚需核对对应系列与批次的检测资料；质保期限和范围以书面条款为准。具体适配以车型、车况与门店检查为准。
          </p>
        </div>

        {/* 桌面对比表 */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-zinc-800 mb-10">
          <table className="w-full min-w-[860px] text-sm">
            <thead>
              <tr className="bg-orange-950/30 text-orange-300">
                {["系列", "膜面", "材质", "厚度", "涂层", "断裂延伸率", "QUV 耐候", "质保"].map(
                  (h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold border-b border-zinc-800">
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {ppfSeries.map((s) => (
                <tr key={s.name} className="border-b border-zinc-800/60 last:border-b-0 hover:bg-zinc-900/40">
                  <td className="px-4 py-3 font-medium text-white">{s.name}</td>
                  <td className="px-4 py-3 text-zinc-300">{s.finish}</td>
                  <td className="px-4 py-3 text-zinc-300">{s.material}</td>
                  <td className="px-4 py-3 text-zinc-300 tabular-nums">{s.thickness}</td>
                  <td className="px-4 py-3 text-zinc-300">{s.coating}</td>
                  <td className="px-4 py-3 text-zinc-300 tabular-nums">{s.elongation}</td>
                  <td className="px-4 py-3 text-zinc-300 tabular-nums">{s.weathering}</td>
                  <td className="px-4 py-3 text-zinc-100 font-semibold">{s.warranty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ppfSeries.map((s) => (
            <article
              key={s.name}
              className="rounded-2xl overflow-hidden border border-white/[0.07] bg-zinc-900/60"
            >
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3 mb-3">
                  <h3 className="text-lg font-bold text-white">{s.name}</h3>
                  <span className="text-sm font-semibold text-orange-300">{s.warranty}质保</span>
                </div>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <dt className="text-zinc-500">厚度</dt>
                  <dd className="text-right text-zinc-200 tabular-nums">{s.thickness}</dd>
                  <dt className="text-zinc-500">膜面</dt>
                  <dd className="text-right text-zinc-200">{s.finish}</dd>
                  <dt className="text-zinc-500">材质</dt>
                  <dd className="text-right text-zinc-200">{s.material}</dd>
                  <dt className="text-zinc-500">涂层</dt>
                  <dd className="text-right text-zinc-200">{s.coating}</dd>
                  <dt className="text-zinc-500">断裂延伸率</dt>
                  <dd className="text-right text-zinc-200 tabular-nums">{s.elongation}</dd>
                  <dt className="text-zinc-500">耐候性</dt>
                  <dd className="text-right text-zinc-200 tabular-nums">{s.weathering}</dd>
                  <dt className="text-zinc-500">增亮</dt>
                  <dd className="text-right text-zinc-200">{s.gloss}</dd>
                </dl>
                <p className="mt-3 text-xs text-zinc-400 leading-relaxed">{s.audience}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
