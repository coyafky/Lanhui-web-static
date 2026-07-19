"use client";

import { ArrowDown, MapPin, BadgeCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";
import { BrandSeriesHeroVisual } from "@/components/brand-series/BrandSeriesHeroVisual";
import { WENJIE_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";

export function WenjieSeriesHeroV2({
  breadcrumbItems,
}: {
  breadcrumbItems?: readonly BreadcrumbItem[];
}) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cyan-950/50 via-zinc-950 to-zinc-950">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* 左侧文案 */}
          <div className="space-y-6">
            <p className="inline-flex min-h-10 items-center gap-2 rounded-full bg-cyan-400/10 px-4 text-sm font-medium text-cyan-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
              <MapPin className="size-4" aria-hidden />
              顺德大良门店 · 施工前确认车型与配置
            </p>

            <h1 className="max-w-xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
              问界日常保护与舒适升级，一页先选对方向
            </h1>

            <p className="max-w-lg text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
              覆盖车衣、隔热膜、改色膜、轮毂、电动踏板、地板总成、专车脚垫与洗美养护。
              先按日常需求选择基础服务，再结合车型、年款和配置确认专属方案。
            </p>

            <p className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400/80">
              <BadgeCheck className="size-4" aria-hidden />
              先确认、再报价、不盲目叠加项目
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
              <button
                type="button"
                onClick={() => scrollTo("wenjie-scenarios")}
                className="inline-flex min-h-12 select-none items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform active:scale-[0.96]"
              >
                按需求选服务
                <ArrowDown className="size-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => scrollTo("wenjie-models")}
                className="inline-flex min-h-12 select-none items-center justify-center gap-2 rounded-full bg-white/[0.04] px-6 text-base font-medium text-zinc-200 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-white/[0.08] active:scale-[0.96]"
              >
                按车型看方案
              </button>
            </div>
          </div>

          <div className="lg:flex lg:items-center lg:justify-center">
            <BrandSeriesHeroVisual image={WENJIE_SERIES_HERO_IMAGE} />
          </div>
        </div>
      </div>
    </section>
  );
}
