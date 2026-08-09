import { denzaSeriesServiceSteps } from "@/lib/denza-series-services";

/**
 * 6 步服务流程（车型核对 → 方案边界 → 到店评估 → 施工保护 → 功能复检 → 交付售后）。
 * H2 使用问题型标题（GEO）。
 */
export function DenzaServiceFlowV2() {
  return (
    <section
      aria-labelledby="denza-flow-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            服务流程
          </p>
          <h2
            id="denza-flow-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            腾势施工前需要确认哪些车型信息？
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            车型、年款、版本和配置是第一步，涉及座椅固定点、滑轨和线束的项目会逐项核对后再报价。
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {denzaSeriesServiceSteps.map((step) => (
            <li
              key={step.step}
              className="rounded-2xl bg-zinc-900/60 p-5 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
            >
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-orange-400/10 text-sm font-bold text-orange-400">
                {step.step}
              </span>
              <h3 className="mt-3 text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed text-pretty">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}
