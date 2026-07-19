import { xpengSeriesServiceSteps } from "@/lib/xpeng-series-services";

/**
 * 服务流程与施工边界：6 步（车型核对 → 方案边界 → 到店评估 → 施工保护 → 功能复检 → 交付售后）。
 * H2 使用问题型标题（GEO）。
 */
export function XpengServiceFlowV2() {
  return (
    <section
      aria-labelledby="xpeng-flow-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            服务流程
          </p>
          <h2
            id="xpeng-flow-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            小鹏轻改施工前需要确认哪些车型信息？
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            车型、年款、版本和配置是第一步，涉及传感器、线束和固定点的项目会逐项核对后再报价。
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {xpengSeriesServiceSteps.map((step) => (
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

        <div className="mt-6 rounded-2xl bg-orange-950/20 p-5 shadow-[0_0_0_1px_oklch(0.705_0.213_47.6/0.15)]">
          <p className="text-sm text-zinc-300 leading-relaxed text-pretty">
            施工边界：涉及拆装、打孔、线路或原车结构改动的项目，会在施工前逐项书面告知影响范围，
            你确认后才动工。新能源车型的传感器、线束和固定结构差异较大，方案以你的具体车辆为准。
          </p>
        </div>
      </div>
    </section>
  );
}
