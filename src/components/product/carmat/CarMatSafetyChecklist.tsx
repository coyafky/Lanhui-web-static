import { AlertTriangle, ChevronDown } from "lucide-react";
import { carMatSafetyChecks } from "@/lib/carmat-products";

export function CarMatSafetyChecklist() {
  return (
    <section
      className="py-16 sm:py-20 bg-zinc-900/50 border-t border-white/[0.05]"
      aria-labelledby="carmat-safety-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-amber-400 uppercase">
            安装安全清单
          </p>
          <h2
            id="carmat-safety-title"
            className="text-2xl md:text-3xl font-bold text-white"
          >
            脚垫不只是覆盖，更关乎驾驶安全
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            360 软包脚垫不是覆盖越多越好。主驾区域的固定、间隙和滑轨检查，是每次安装的必做项。
          </p>
        </div>

        {/* Desktop: 4-column grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {carMatSafetyChecks.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6 flex flex-col"
            >
              <span className="inline-flex w-fit items-center rounded-full bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-amber-300 mb-3 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                {item.label}
              </span>
              <h3 className="text-base font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-1">
                {item.description}
              </p>
              {/* Risk warning */}
              <div className="rounded-xl bg-amber-400/[0.06] border border-amber-400/[0.12] p-3 flex gap-2">
                <AlertTriangle className="size-4 text-amber-400/80 flex-shrink-0 mt-0.5" aria-hidden />
                <p className="text-xs text-amber-200/80 leading-relaxed">
                  {item.risk}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: accordion */}
        <div className="md:hidden space-y-2">
          {carMatSafetyChecks.map((item) => (
            <details
              key={item.label}
              className="group rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold text-amber-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {item.title}
                  </span>
                </div>
                <ChevronDown className="size-4 text-zinc-500 transition-transform group-open:rotate-180" aria-hidden />
              </summary>
              <div className="px-5 pb-5">
                <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="rounded-xl bg-amber-400/[0.06] border border-amber-400/[0.12] p-3 flex gap-2">
                  <AlertTriangle className="size-4 text-amber-400/80 flex-shrink-0 mt-0.5" aria-hidden />
                  <p className="text-xs text-amber-200/80 leading-relaxed">
                    {item.risk}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
