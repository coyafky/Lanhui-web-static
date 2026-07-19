"use client";

import Link from "next/link";
import { ArrowRight, MapPin, BadgeCheck, MessageCircle } from "lucide-react";
import { openWeChatModal } from "@/lib/wechat-modal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";
import { BrandSeriesHeroVisual } from "@/components/brand-series/BrandSeriesHeroVisual";
import { VOYAH_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";

export function VoyahSeriesHero({
  breadcrumbItems,
}: {
  breadcrumbItems?: readonly BreadcrumbItem[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-violet-950/40 via-zinc-950 to-zinc-950">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/15 via-transparent to-transparent"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* 左侧文案 */}
          <div className="space-y-6">
            <p className="inline-flex min-h-10 items-center gap-2 rounded-full bg-violet-400/10 px-4 text-sm font-medium text-violet-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
              <MapPin className="size-4" aria-hidden />
              岚图全系 · 顺德大良
            </p>

            <h1 className="max-w-xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
              岚图全系保护与舒适升级
            </h1>

            <p className="max-w-lg text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
              从新车漆面保护、隔热视野到座舱清洁，根据你的车型与使用场景匹配方案。
              岚图覆盖 SUV、MPV 和轿车，全系均可到店咨询。
            </p>

            <p className="inline-flex items-center gap-2 text-sm font-medium text-violet-400/80">
              <BadgeCheck className="size-4" aria-hidden />
              服务岚图全系，梦想家提供独立专车方案
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
              <button
                type="button"
                onClick={() => openWeChatModal()}
                className="inline-flex min-h-12 select-none items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-violet-600 px-6 text-base font-semibold text-white shadow-lg shadow-violet-500/20 transition-transform active:scale-[0.96]"
              >
                <MessageCircle className="size-4" aria-hidden />
                获取车型适配建议
              </button>
              <Link
                href="/product/voyah/dreamer"
                className="inline-flex min-h-12 select-none items-center justify-center gap-2 rounded-full bg-white/[0.04] px-6 text-base font-medium text-zinc-200 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-white/[0.08] active:scale-[0.96]"
              >
                查看梦想家专属方案
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>

            <p className="text-sm text-zinc-500">
              顺德大良到店施工 · 车型与年款现场核验 · 完工功能复检
            </p>
          </div>

          <div className="lg:flex lg:items-center lg:justify-center">
            <BrandSeriesHeroVisual image={VOYAH_SERIES_HERO_IMAGE} />
          </div>
        </div>
      </div>
    </section>
  );
}
