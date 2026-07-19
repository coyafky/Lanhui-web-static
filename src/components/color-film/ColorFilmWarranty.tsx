import { ClipboardCheck, Sparkles, ShieldAlert } from "lucide-react";
import { serviceGuarantee } from "@/lib/products";

export function ColorFilmWarranty() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            质保与养护
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            验收有标准，养护有方法
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            施工前明确验收标准，交付后告知养护要点。你对膜面的每一条疑问，都应该有明确答案。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 验收标准 */}
          <div className="rounded-2xl bg-zinc-900/50 border border-white/[0.06] p-5 sm:p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="size-9 rounded-xl bg-orange-400/10 flex items-center justify-center">
                <ClipboardCheck className="size-4 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">验收标准</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-900/80">
                    <th className="px-4 py-2.5 text-left font-medium text-zinc-400 rounded-l-lg">
                      项目
                    </th>
                    <th className="px-4 py-2.5 text-left font-medium text-zinc-400 rounded-r-lg">
                      标准
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {serviceGuarantee.acceptance.map((a) => (
                    <tr key={a.item} className="border-b border-white/[0.04]">
                      <td className="px-4 py-2.5 text-zinc-300">{a.item}</td>
                      <td className="px-4 py-2.5 text-zinc-400">{a.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 施工后养护 */}
          <div className="rounded-2xl bg-zinc-900/50 border border-white/[0.06] p-5 sm:p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="size-9 rounded-xl bg-amber-400/10 flex items-center justify-center">
                <Sparkles className="size-4 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">施工后养护</h3>
            </div>
            <ul className="space-y-3">
              {serviceGuarantee.afterCare.map((item) => (
                <li key={item.item} className="flex gap-3 text-sm">
                  <span className="text-orange-400 mt-0.5 flex-shrink-0">·</span>
                  <div>
                    <p className="text-zinc-300 font-medium">{item.item}</p>
                    <p className="text-zinc-500 mt-0.5">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 日常养护提示 */}
        <div className="mt-6 rounded-2xl bg-zinc-900/50 border border-white/[0.06] p-5 sm:p-6">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="size-9 rounded-xl bg-zinc-700/30 flex items-center justify-center">
              <ShieldAlert className="size-4 text-zinc-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">日常养护提示</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceGuarantee.dailyTips.map((tip) => (
              <div
                key={tip.scenario}
                className="rounded-xl bg-white/[0.03] p-4"
              >
                <p className="text-sm font-medium text-zinc-300 mb-1">
                  {tip.scenario}
                </p>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {tip.advice}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
