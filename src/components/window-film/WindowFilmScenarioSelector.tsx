"use client";

import { ArrowRight } from "lucide-react";
import { windowFilmScenarios } from "@/lib/window-film-experiences";

export function WindowFilmScenarioSelector() {
  const handleScrollTo = (packageSlug: string) => {
    const el = document.getElementById(`pkg-${packageSlug}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            选择路径
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            按你的用车场景选方案
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            不需要先看参数，先选最贴近你用车场景的那条路径。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {windowFilmScenarios.map((scenario) => (
            <button
              key={scenario.slug}
              type="button"
              onClick={() => handleScrollTo(scenario.packageSlug)}
              className="group flex flex-col items-start rounded-2xl bg-zinc-900/50 border border-white/[0.06] hover:border-orange-500/30 hover:bg-zinc-900/80 p-6 sm:p-7 text-left transition-all duration-200"
            >
              <span className="inline-flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium text-orange-300 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] mb-4">
                {scenario.label}
              </span>
              <p className="text-lg font-semibold text-white mb-2">
                {scenario.packageName}
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-1">
                {scenario.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-400 group-hover:text-orange-300 transition-colors">
                查看方案
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
