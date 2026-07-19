import { AlertTriangle, ChevronDown } from "lucide-react";
import {
  carCareDeliveryChecks,
  carCareServiceBoundaries,
} from "@/lib/car-care-products";

export function CarCareDeliveryChecklist() {
  return (
    <section
      aria-labelledby="carcare-delivery-title"
      className="py-16 sm:py-20 bg-zinc-900/50 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── 交车检查清单 ─── */}
        <div className="mb-16">
          <p className="text-xs tracking-widest mb-3 text-emerald-400 uppercase">
            交车检查
          </p>
          <h2
            id="carcare-delivery-title"
            className="text-2xl md:text-3xl font-bold text-white"
          >
            交车时我们一起检查
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl mb-8">
            每一项都在交车时当面确认，确保清洁效果达到预期。
          </p>

          {/* Desktop: 3×2 grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {carCareDeliveryChecks.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6"
              >
                <span className="inline-flex w-fit items-center rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300 mb-3 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                  {item.label}
                </span>
                <h3 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: accordion */}
          <div className="md:hidden space-y-2">
            {carCareDeliveryChecks.map((item) => (
              <details
                key={item.label}
                className="group rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {item.title}
                    </span>
                  </div>
                  <ChevronDown className="size-4 text-zinc-500 transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <div className="px-5 pb-5 pl-[76px]">
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* ─── 服务边界说明 ─── */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            哪些情况清洁无法解决
          </h3>
          <p className="text-sm text-zinc-400 mb-6 max-w-xl">
            诚实说明清洁的边界，以下情况可能无法通过洗美完全恢复。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {carCareServiceBoundaries.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-amber-400/[0.04] border border-amber-400/[0.12] p-5 flex gap-3"
              >
                <AlertTriangle className="size-5 text-amber-400/60 shrink-0 mt-0.5" aria-hidden />
                <div>
                  <span className="inline-flex rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold text-amber-300 mb-2 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                    {item.label}
                  </span>
                  <h4 className="text-base font-semibold text-white mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
