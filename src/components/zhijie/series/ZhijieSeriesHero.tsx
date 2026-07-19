"use client";

import Link from "next/link";
import { ArrowRight, MapPin, BadgeCheck, MessageCircle } from "lucide-react";
import { openWeChatModal } from "@/lib/wechat-modal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";
import { BrandSeriesHeroVisual } from "@/components/brand-series/BrandSeriesHeroVisual";
import { ZHIJIE_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";

export function ZhijieSeriesHero({
  breadcrumbItems,
}: {
  breadcrumbItems?: readonly BreadcrumbItem[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-950/40 via-zinc-950 to-zinc-950">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* 左侧文案 */}
          <div className="space-y-6">
            <p className="inline-flex min-h-10 items-center gap-2 rounded-full bg-amber-400/10 px-4 text-sm font-medium text-amber-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
              <MapPin className="size-4" aria-hidden />
              智界全系 · 顺德大良
            </p>

            <h1 className="max-w-xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
              智界全系智能车型保护与舒适升级
            </h1>

            <p className="max-w-lg text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
              从漆面保护、隔热视野到座舱养护，兼顾智驾硬件与原车功能。
              智界覆盖 S7、R7、V9 等车型，全系均可到店咨询。
            </p>

            <p className="inline-flex items-center gap-2 text-sm font-medium text-amber-400/80">
              <BadgeCheck className="size-4" aria-hidden />
              服务智界全系，V9 提供独立专车方案
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
              <button
                type="button"
                onClick={() => openWeChatModal()}
                className="inline-flex min-h-12 select-none items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 text-base font-semibold text-white shadow-lg shadow-amber-500/20 transition-transform active:scale-[0.96]"
              >
                <MessageCircle className="size-4" aria-hidden />
                获取车型适配建议
              </button>
              <Link
                href="/product/zhijie/v9"
                className="inline-flex min-h-12 select-none items-center justify-center gap-2 rounded-full bg-white/[0.04] px-6 text-base font-medium text-zinc-200 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-white/[0.08] active:scale-[0.96]"
              >
                查看智界 V9 专属方案
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>

            <p className="text-sm text-zinc-500">
              智驾区域提前确认 · 原车状态检查 · 完工功能复检
            </p>
          </div>

          <div className="lg:flex lg:items-center lg:justify-center">
            <BrandSeriesHeroVisual image={ZHIJIE_SERIES_HERO_IMAGE} />
          </div>
        </div>
      </div>
    </section>
  );
}
