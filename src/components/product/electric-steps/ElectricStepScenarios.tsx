import { UserRound, Baby, ShoppingBag, Briefcase } from "lucide-react";
import { electricStepScenarios } from "@/lib/electric-step-products";

const ICON_MAP = {
  UserRound,
  Baby,
  ShoppingBag,
  Briefcase,
} as const;

export function ElectricStepScenarios() {
  return (
    <section
      id="electric-step-scenarios"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
      aria-labelledby="electric-step-scenarios-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            使用场景
          </p>
          <h2
            id="electric-step-scenarios-title"
            className="text-2xl md:text-3xl font-bold text-white"
          >
            不只是加装，是让每一次上下车都更从容
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            电动踏板的核心价值来自真实使用场景。以下四个场景覆盖了大多数家庭和商务用户的实际需求。
          </p>
        </div>

        {/* Desktop: 4-column grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {electricStepScenarios.map((scenario) => {
            const Icon = ICON_MAP[scenario.icon];
            return (
              <div
                key={scenario.id}
                className="rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6"
              >
                <div className="size-11 rounded-xl bg-white/[0.05] flex items-center justify-center mb-4">
                  <Icon className="size-5 text-orange-400/70" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {scenario.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {scenario.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-2">
          {electricStepScenarios.map((scenario) => {
            const Icon = ICON_MAP[scenario.icon];
            return (
              <div
                key={scenario.id}
                className="snap-start flex-shrink-0 w-[80vw] rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5"
              >
                <div className="size-10 rounded-xl bg-white/[0.05] flex items-center justify-center mb-3">
                  <Icon className="size-5 text-orange-400/70" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {scenario.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {scenario.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
