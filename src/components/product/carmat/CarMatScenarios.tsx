import { CloudRain, Baby, PawPrint, Briefcase } from "lucide-react";
import { carMatScenarios } from "@/lib/carmat-products";
import type { CarMatScenario } from "@/lib/carmat-products";

const ICON_MAP = {
  CloudRain,
  Baby,
  PawPrint,
  Briefcase,
} as const;

function ScenarioCard({ scenario }: { scenario: CarMatScenario }) {
  const Icon = ICON_MAP[scenario.icon];

  return (
    <div className="rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6 flex flex-col">
      <div className="size-11 rounded-xl bg-amber-400/10 flex items-center justify-center mb-4">
        <Icon className="size-5 text-amber-300" aria-hidden />
      </div>
      <h3 className="text-base font-semibold text-white mb-2">
        {scenario.title}
      </h3>
      <p className="text-sm text-zinc-400 leading-relaxed flex-1">
        {scenario.description}
      </p>
    </div>
  );
}

export function CarMatScenarios() {
  return (
    <section
      id="carmat-scenarios"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
      aria-labelledby="carmat-scenarios-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-amber-400 uppercase">
            使用场景
          </p>
          <h2
            id="carmat-scenarios-title"
            className="text-2xl md:text-3xl font-bold text-white"
          >
            你的座舱每天都面对什么？
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            泥沙、碎屑、毛发和鞋底磨损，一块可拆洗的脚垫就能把它们留在原地毯之外。
          </p>
        </div>

        {/* Desktop: 4-column grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {carMatScenarios.map((scenario) => (
            <ScenarioCard key={scenario.id} scenario={scenario} />
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="sm:hidden overflow-x-auto snap-x snap-mandatory -mx-4 px-4">
          <div className="flex gap-4" style={{ width: "max-content" }}>
            {carMatScenarios.map((scenario) => (
              <div key={scenario.id} className="w-[80vw] snap-start">
                <ScenarioCard scenario={scenario} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
