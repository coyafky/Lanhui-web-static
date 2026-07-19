"use client";

import { Moon, Zap, Feather, Sparkles } from "lucide-react";
import { STYLE_GROUPS } from "@/lib/color-film-data";

const ICON_MAP = {
  Moon,
  Zap,
  Feather,
  Sparkles,
} as const;

export function ColorFilmStyleSelector({
  activeStyle,
  onStyleChange,
}: {
  activeStyle: string | null;
  onStyleChange: (slug: string | null) => void;
}) {
  return (
    <section className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            风格选择
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            你喜欢哪种整车气质？
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl">
            先选风格再看颜色，比从 15 个系列中盲选更高效
          </p>
        </div>

        {/* 桌面：4 列网格；移动端：横向滑动 */}
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:px-0 sm:mx-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0">
          {STYLE_GROUPS.map((group) => {
            const Icon = ICON_MAP[group.icon];
            const isActive = activeStyle === group.slug;

            return (
              <button
                key={group.slug}
                type="button"
                onClick={() =>
                  onStyleChange(isActive ? null : group.slug)
                }
                className={`group relative flex-shrink-0 w-40 sm:w-auto text-left rounded-2xl p-5 sm:p-6 transition-all duration-200 active:scale-[0.97] ${
                  isActive
                    ? "bg-white/[0.08] shadow-[0_0_0_1px_oklch(1_0_0/0.15)]"
                    : "bg-zinc-900/40 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] hover:bg-zinc-900/60 hover:shadow-[0_0_0_1px_oklch(1_0_0/0.1)]"
                }`}
              >
                <div
                  className={`inline-flex size-10 items-center justify-center rounded-xl mb-3 transition-colors ${
                    isActive
                      ? "bg-orange-400/15 text-orange-400"
                      : "bg-white/[0.05] text-zinc-500 group-hover:text-zinc-300"
                  }`}
                >
                  <Icon className="size-5" />
                </div>
                <h3
                  className={`text-base font-semibold mb-1 transition-colors ${
                    isActive ? "text-white" : "text-zinc-300"
                  }`}
                >
                  {group.label}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {group.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
