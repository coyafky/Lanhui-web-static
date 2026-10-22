"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { openWeChatModal } from "@/lib/wechat-modal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";
import { BrandSeriesHeroVisual } from "@/components/brand-series/BrandSeriesHeroVisual";
import { KIA_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";

export function KiaSeriesHero({
  breadcrumbItems,
}: {
  breadcrumbItems?: readonly BreadcrumbItem[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-red-950/40 via-zinc-950 to-zinc-950">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/15 via-transparent to-transparent"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* 左侧文案 */}
          <div className="space-y-6">
            <h1 className="max-w-xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
              起亚全系底盘保护与上下车升级
            </h1>

            <p className="max-w-lg text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
              30 款起亚车型的适配件都在这一个页面里。
              底盘护板、电动踏板、小桌板、脚垫、尾箱垫六类项目，选你的车型往下翻。
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
              <Link
                href="#kia-models"
                className="inline-flex min-h-12 select-none items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-blue-600 px-6 text-base font-semibold text-white shadow-lg shadow-red-500/20 transition-transform active:scale-[0.96]"
              >
                按车型查适配
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="#kia-projects"
                className="inline-flex min-h-12 select-none items-center justify-center gap-2 rounded-full bg-white/[0.04] px-6 text-base font-medium text-zinc-200 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-white/[0.08] active:scale-[0.96]"
              >
                看项目明细
              </Link>
            </div>
          </div>

          <div className="lg:flex lg:items-center lg:justify-center">
            <BrandSeriesHeroVisual image={KIA_SERIES_HERO_IMAGE} />
          </div>
        </div>

        {/* 统计带（768+ 展示，390 不展示避免首屏过挤） */}
        <dl className="mt-12 hidden grid-cols-3 gap-4 border-t border-white/[0.08] pt-8 md:grid max-w-2xl">
          {[
            { label: "款车型", value: "30" },
            { label: "类适配件", value: "6" },
            { label: "款主力车型", value: "3" },
          ].map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <dt className="sr-only">{s.value + s.label}</dt>
              <dd className="text-3xl font-bold tracking-tight text-white tabular-nums">
                {s.value}
              </dd>
              <dd className="text-sm text-zinc-400">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
