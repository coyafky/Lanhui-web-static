import { Car, Wind, Eye } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { carCareScenarios } from "@/lib/car-care-products";
import type { CarCareScenario } from "@/lib/car-care-products";
import { ChevronDown } from "lucide-react";

const ICON_MAP: Record<CarCareScenario["icon"], LucideIcon> = {
  Car,
  Wind,
  Nose: Wind, // 用 Wind 代替嗅觉 icon
  Eye,
};

function ScenarioIcon({ icon }: { icon: CarCareScenario["icon"] }) {
  const Icon = ICON_MAP[icon];
  return (
    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
      <Icon className="size-5 text-emerald-300" aria-hidden />
    </span>
  );
}

export function CarCarePainPoints() {
  return (
    <section
      aria-labelledby="carcare-pain-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-emerald-400 uppercase">
            你遇到的是哪一种脏？
          </p>
          <h2
            id="carcare-pain-title"
            className="text-2xl md:text-3xl font-bold text-white"
          >
            普通洗车能处理表面浮尘，但这些情况往往需要针对性清洁
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl">
            不是每辆车都需要深度清洁。先看看你的车况属于哪一类，再选择匹配的方案。
          </p>
        </div>

        {/* Desktop: 4-column grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {carCareScenarios.map((scenario) => (
            <div
              key={scenario.id}
              className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6"
            >
              <ScenarioIcon icon={scenario.icon} />
              <h3 className="mt-4 text-base font-semibold text-white">
                {scenario.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                {scenario.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: accordion */}
        <div className="md:hidden space-y-2">
          {carCareScenarios.map((scenario) => (
            <details
              key={scenario.id}
              className="group rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                <div className="flex items-center gap-3">
                  <ScenarioIcon icon={scenario.icon} />
                  <span className="text-sm font-semibold text-white">
                    {scenario.title}
                  </span>
                </div>
                <ChevronDown
                  className="size-4 text-zinc-500 transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <div className="px-5 pb-5 pl-[68px]">
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {scenario.description}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
