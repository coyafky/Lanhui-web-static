import { AlertTriangle, ChevronDown } from "lucide-react";
import { wheelFitmentChecks } from "@/lib/wheel-products";

export function WheelFitmentChecklist() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            安全适配清单
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            轮毂升级先看数据，再看风格
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            轮毂关系到行驶安全。尺寸、ET、孔距、中心孔、载重和轮胎规格都需要结合原车状态确认——每一项偏差都可能带来安全风险。
          </p>
        </div>

        {/* 桌面：4 列横排卡片 */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {wheelFitmentChecks.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6"
            >
              <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded-full mb-3">
                {item.label}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex gap-2 rounded-xl bg-amber-400/[0.06] border border-amber-400/[0.1] p-3">
                <AlertTriangle className="size-4 text-amber-400/70 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-300/80 leading-relaxed">
                  {item.risk}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 移动端：手风琴 */}
        <div className="md:hidden space-y-2">
          {wheelFitmentChecks.map((item) => (
            <details
              key={item.label}
              className="group rounded-xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
            >
              <summary className="flex items-center justify-between gap-3 cursor-pointer list-none px-5 py-4">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-[11px] font-medium text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded-full flex-shrink-0">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-white truncate">
                    {item.title}
                  </span>
                </div>
                <ChevronDown className="w-4 h-4 flex-shrink-0 text-zinc-500 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-5 pb-4 space-y-3">
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex gap-2 rounded-xl bg-amber-400/[0.06] border border-amber-400/[0.1] p-3">
                  <AlertTriangle className="size-4 text-amber-400/70 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-300/80 leading-relaxed">
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
