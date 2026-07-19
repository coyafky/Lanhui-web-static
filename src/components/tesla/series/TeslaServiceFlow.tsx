import { teslaSeriesServiceSteps } from "@/lib/tesla-series-services";

/**
 * Tesla 服务流程：6 步（确认车型 → 摄像头与举升点确认 → 方案确认 → 保护施工 → 功能复检 → 交付养护）。
 * 边界说明强调不改线/需接电分级告知 + OTA 复检。
 */
export function TeslaServiceFlow() {
  return (
    <section
      aria-labelledby="tesla-flow-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-red-400 uppercase">
            服务流程
          </p>
          <h2
            id="tesla-flow-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            从确认车型到交付养护
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teslaSeriesServiceSteps.map((step) => (
            <li
              key={step.step}
              className="rounded-2xl bg-zinc-900/60 p-5 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
            >
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-red-400/10 text-sm font-bold text-red-400">
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

        <div className="mt-6 rounded-2xl bg-red-950/20 p-5 shadow-[0_0_0_1px_oklch(0.577_0.245_27.325/0.15)]">
          <p className="text-sm text-zinc-300 leading-relaxed text-pretty">
            施工边界：不改线项目与需接电项目分级书面告知，涉及拆装、打孔或低压线路的逐项确认接线方式、可恢复性和质保边界；
            施工留存记录，OTA 升级后可回店复检相关功能。非 Tesla 授权机构的维修如果引发问题，可能影响相应质保范围——
            我们会提前说明哪些项目不改线、哪些需要接电、如何记录施工和复检。
          </p>
        </div>
      </div>
    </section>
  );
}
