"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  windowFilmExperiences,
  type WindowFilmExperience,
} from "@/lib/window-film-experiences";

function ExperienceAccordionItem({
  exp,
  isOpen,
  isActive,
  onToggle,
}: {
  exp: WindowFilmExperience;
  isOpen: boolean;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-xl transition-all duration-200 ${
        isActive
          ? "bg-white/[0.04] shadow-[0_0_0_1px_oklch(1_0_0/0.08)]"
          : "bg-transparent"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left"
      >
        <div className="min-w-0">
          <p
            className={`text-base font-semibold transition-colors ${
              isActive ? "text-white" : "text-zinc-300"
            }`}
          >
            {exp.title}
          </p>
          <p className="text-sm text-zinc-400 mt-0.5">{exp.oneLiner}</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-zinc-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-40 pb-4 px-4" : "max-h-0"
        }`}
      >
        <p className="text-sm text-zinc-400 leading-relaxed">{exp.expanded}</p>
      </div>
    </div>
  );
}

export function WindowFilmExperiences() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);

  return (
    <section className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            好膜体验
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            一张好膜的 5 个体验
          </h2>
        </div>

        {/* 桌面端：左图 + 右 tabs */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1fr] lg:gap-12 items-start">
          {/* 左图占位 */}
          <div className="sticky top-24">
            <div className="relative aspect-[4/3] rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-transparent to-blue-400/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-zinc-600 text-center">
                  车内视野图
                  <br />
                  （待替换）
                </p>
              </div>
            </div>
          </div>

          {/* 右 tabs */}
          <div className="space-y-1">
            {windowFilmExperiences.map((exp, i) => (
              <button
                key={exp.title}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-200 ${
                  i === activeIndex
                    ? "bg-white/[0.04] shadow-[0_0_0_1px_oklch(1_0_0/0.08)]"
                    : "hover:bg-white/[0.02]"
                }`}
              >
                <p
                  className={`text-lg font-semibold transition-colors ${
                    i === activeIndex ? "text-white" : "text-zinc-300"
                  }`}
                >
                  {exp.title}
                </p>
                <p
                  className={`mt-1 text-sm transition-colors ${
                    i === activeIndex ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  {exp.oneLiner}
                </p>
                {i === activeIndex && (
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed animate-[fadeIn_200ms_ease-out]">
                    {exp.expanded}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 移动端 / 平板：手风琴 */}
        <div className="lg:hidden space-y-2">
          {windowFilmExperiences.map((exp, i) => (
            <ExperienceAccordionItem
              key={exp.title}
              exp={exp}
              isOpen={openAccordion === i}
              isActive={openAccordion === i}
              onToggle={() => setOpenAccordion(openAccordion === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
