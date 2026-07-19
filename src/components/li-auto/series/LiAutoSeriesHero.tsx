"use client";

import { MapPin, BadgeCheck, MessageCircle, LayoutGrid } from "lucide-react";
import { openWeChatModal } from "@/lib/wechat-modal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";
import { BrandSeriesHeroVisual } from "@/components/brand-series/BrandSeriesHeroVisual";
import { LI_AUTO_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";

export function LiAutoSeriesHero({
  breadcrumbItems,
}: {
  breadcrumbItems?: readonly BreadcrumbItem[];
}) {
  const scrollToModels = () => {
    document
      .getElementById("li-auto-models")
      ?.scrollIntoView({ behavior: "smooth" });
  };

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
              理想汽车全系 · 顺德大良
            </p>

            <h1 className="max-w-xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
              理想汽车家庭用车保护与舒适升级
            </h1>

            <p className="max-w-lg text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
              让老人孩子上下车更轻松，让座舱更耐脏易打理。根据 ONE、i6、i8、L9、MEGA
              的车型特点和家庭使用场景匹配方案，兼顾智驾硬件与原车功能。
            </p>

            <p className="inline-flex items-center gap-2 text-sm font-medium text-amber-400/80">
              <BadgeCheck className="size-4" aria-hidden />
              服务理想汽车全系，5 个车型提供独立专车方案
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
              <button
                type="button"
                onClick={() => openWeChatModal()}
                className="inline-flex min-h-12 select-none items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 text-base font-semibold text-white shadow-lg shadow-amber-500/20 transition-transform active:scale-[0.96]"
              >
                <MessageCircle className="size-4" aria-hidden />
                获取我的车型方案
              </button>
              <button
                type="button"
                onClick={scrollToModels}
                className="inline-flex min-h-12 select-none items-center justify-center gap-2 rounded-full bg-white/[0.04] px-6 text-base font-medium text-zinc-200 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-white/[0.08] active:scale-[0.96]"
              >
                <LayoutGrid className="size-4" aria-hidden />
                先选 ONE / i6 / i8 / L9 / MEGA
              </button>
            </div>

            <p className="text-sm text-zinc-500">
              感知区域提前确认 · 原车状态检查 · 完工功能复检
            </p>
          </div>

          <div className="lg:flex lg:items-center lg:justify-center">
            <BrandSeriesHeroVisual image={LI_AUTO_SERIES_HERO_IMAGE} />
          </div>
        </div>
      </div>
    </section>
  );
}
