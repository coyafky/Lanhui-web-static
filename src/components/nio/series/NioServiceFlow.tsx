import { nioSeriesServiceSteps } from "@/lib/nio-series-services";

/**
 * 服务流程与施工边界：6 步（确认车型 → 感知与底盘确认 → 方案确认 → 保护施工 → 功能复检 → 交付养护）。
 */
export function NioServiceFlow() {
  return (
    <section
      aria-labelledby="nio-flow-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-sky-400 uppercase">
            服务流程
          </p>
          <h2
            id="nio-flow-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            从确认车型到交付养护
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nioSeriesServiceSteps.map((step) => (
            <li
              key={step.step}
              className="rounded-2xl bg-zinc-900/60 p-5 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
            >
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-sky-400/10 text-sm font-bold text-sky-400">
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

        <div className="mt-6 rounded-2xl bg-sky-950/20 p-5 shadow-[0_0_0_1px_oklch(0.588_0.158_241.966/0.15)]">
          <p className="text-sm text-zinc-300 leading-relaxed text-pretty">
            施工边界：涉及电路、座椅滑轨、门体、底盘、电池包、换电结构、轮毂载荷、智驾传感器或原车功能的项目，
            会在施工前逐项书面告知影响范围，你确认后才动工。
            可为蔚来全系提供车膜、轮毂、专车脚垫和洗美养护等基础服务咨询，电动踏板、地板及其他专车项目需根据车型、年款、座椅配置、底盘结构和实际安装条件确认，并非所有车型通用。
          </p>
        </div>
      </div>
    </section>
  );
}
