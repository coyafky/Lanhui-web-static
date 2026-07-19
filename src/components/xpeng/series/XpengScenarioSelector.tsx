"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Palette,
  Droplets,
  ArrowRight,
} from "lucide-react";
import {
  xpengScenarioEntries,
  xpengBaseServices,
  type XpengScenarioEntryId,
} from "@/lib/xpeng-series-services";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Users,
  Palette,
  Droplets,
};

/**
 * 4 个高频场景选择器：点击高亮 → 显示推荐服务组合（链接到对应产品页）。
 * H2 使用问题型标题（GEO）。
 */
export function XpengScenarioSelector() {
  const [activeId, setActiveId] = useState<XpengScenarioEntryId>(
    xpengScenarioEntries[0].id,
  );
  const active =
    xpengScenarioEntries.find((s) => s.id === activeId) ??
    xpengScenarioEntries[0];
  const services = active.serviceIds
    .map((id) => xpengBaseServices.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <section
      id="xpeng-scenarios"
      aria-labelledby="xpeng-scenarios-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            按需求选
          </p>
          <h2
            id="xpeng-scenarios-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            新提小鹏汽车，建议先做哪些保护？
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            先解决高频磨损和暴晒，再按需求加项。选一个最接近你日常的场景，我们给出对应的服务组合参考。
          </p>
        </div>

        {/* 场景标签 */}
        <div
          role="tablist"
          aria-label="使用场景"
          className="grid grid-cols-2 gap-3 md:grid-cols-4"
        >
          {xpengScenarioEntries.map((s) => {
            const Icon = ICON_MAP[s.iconName];
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(s.id)}
                className={`flex min-h-11 flex-col items-start gap-1 rounded-2xl p-4 text-left transition-colors active:scale-[0.98] ${
                  isActive
                    ? "bg-orange-400/10 shadow-[0_0_0_1px_oklch(0.75_0.183_55.9/0.4)]"
                    : "bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] hover:bg-zinc-900"
                }`}
              >
                <span className="flex items-center gap-2">
                  {Icon && (
                    <Icon
                      className={`size-4 ${isActive ? "text-orange-300" : "text-zinc-400"}`}
                      aria-hidden
                    />
                  )}
                  <span
                    className={`text-base font-semibold ${isActive ? "text-orange-300" : "text-white"}`}
                  >
                    {s.title}
                  </span>
                </span>
                <span className="text-xs text-zinc-400 leading-relaxed">
                  {s.description}
                </span>
              </button>
            );
          })}
        </div>

        {/* 推荐组合 */}
        <div className="mt-6 rounded-3xl bg-zinc-900/60 p-6 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]">
          <p className="text-base leading-relaxed text-zinc-300 text-pretty">
            {active.recommendation}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {services.map((svc) => (
              <Link
                key={svc.id}
                href={svc.href}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white/[0.04] px-4 text-sm font-medium text-zinc-200 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-white/[0.08] active:scale-[0.96]"
              >
                {svc.title}
                <ArrowRight className="size-4 text-orange-400" aria-hidden />
              </Link>
            ))}
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            * 这是选择参考，最终根据车型、年款和车况确认。
          </p>
        </div>
      </div>
    </section>
  );
}
