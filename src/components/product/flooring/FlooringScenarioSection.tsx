import { Baby, Briefcase, Tent, PawPrint, Users, ChevronDown } from "lucide-react";
import { flooringScenarios } from "@/lib/flooring-products";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Baby,
  Briefcase,
  Tent,
  PawPrint,
  Users,
};

export function FlooringScenarioSection() {
  return (
    <section
      aria-labelledby="flooring-scenarios-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-amber-400 uppercase">
            使用场景
          </p>
          <h2
            id="flooring-scenarios-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            你的车后排主要用来做什么
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            不同使用场景对地板的要求不同，先看看哪种更接近你的日常。
          </p>
        </div>

        {/* Desktop: 5-column grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {flooringScenarios.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5"
              >
                <div className="size-10 rounded-xl bg-amber-400/10 flex items-center justify-center mb-3">
                  {Icon && <Icon className="size-5 text-amber-400" aria-hidden />}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed text-pretty">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile: accordion */}
        <div className="md:hidden space-y-2">
          {flooringScenarios.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <details
                key={item.id}
                className="group rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-lg bg-amber-400/10 flex items-center justify-center">
                      {Icon && <Icon className="size-4 text-amber-400" aria-hidden />}
                    </div>
                    <span className="text-sm font-semibold text-white">
                      {item.title}
                    </span>
                  </div>
                  <ChevronDown className="size-4 text-zinc-500 transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <div className="px-5 pb-5 pl-[52px]">
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
