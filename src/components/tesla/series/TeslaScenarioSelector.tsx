"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Sun,
  Baby,
  CircleDot,
  Droplets,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { openWeChatModal } from "@/lib/wechat-modal";
import {
  teslaScenarioEntries,
  teslaBaseServices,
  type TeslaScenarioEntryId,
} from "@/lib/tesla-series-services";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Sun,
  Baby,
  CircleDot,
  Droplets,
};

/**
 * 5 个高频 Tesla 用车场景选择器：点击高亮 → 显示推荐服务组合。
 * 服务卡片链接到对应产品页；无 href 的服务（如谨慎型电气项目）渲染咨询按钮。
 */
export function TeslaScenarioSelector() {
  const [activeId, setActiveId] = useState<TeslaScenarioEntryId>(
    teslaScenarioEntries[0].id,
  );
  const active =
    teslaScenarioEntries.find((s) => s.id === activeId) ??
    teslaScenarioEntries[0];
  const services = active.serviceIds
    .map((id) => teslaBaseServices.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <section
      id="tesla-scenarios"
      aria-labelledby="tesla-scenarios-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-red-400 uppercase">
            按需求选
          </p>
          <h2
            id="tesla-scenarios-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            Tesla 车主最常见的用车痛点是什么？
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            选一个最接近你日常的场景，我们给出对应的服务组合参考。
          </p>
        </div>

        {/* 场景标签 */}
        <div
          role="tablist"
          aria-label="使用场景"
          className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5"
        >
          {teslaScenarioEntries.map((s) => {
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
                    ? "bg-red-400/10 shadow-[0_0_0_1px_oklch(0.704_0.191_22.216/0.4)]"
                    : "bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] hover:bg-zinc-900"
                }`}
              >
                <span className="flex items-center gap-2">
                  {Icon && (
                    <Icon
                      className={`size-4 ${isActive ? "text-red-300" : "text-zinc-400"}`}
                      aria-hidden
                    />
                  )}
                  <span
                    className={`text-base font-semibold ${isActive ? "text-red-300" : "text-white"}`}
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
            {services.map((svc) =>
              svc.href ? (
                <Link
                  key={svc.id}
                  href={svc.href}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white/[0.04] px-4 text-sm font-medium text-zinc-200 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-white/[0.08] active:scale-[0.96]"
                >
                  {svc.title}
                  <ArrowRight className="size-4 text-red-400" aria-hidden />
                </Link>
              ) : (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => openWeChatModal()}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white/[0.04] px-4 text-sm font-medium text-zinc-200 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-white/[0.08] active:scale-[0.96]"
                >
                  {svc.title}
                  <MessageCircle className="size-4 text-red-400" aria-hidden />
                </button>
              ),
            )}
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            * 这是选择参考，最终根据车型、年款和车况确认。
          </p>
        </div>
      </div>
    </section>
  );
}
