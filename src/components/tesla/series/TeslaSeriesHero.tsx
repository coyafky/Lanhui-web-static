"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { openWeChatModal } from "@/lib/wechat-modal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";
import { TESLA_HERO_IMAGE } from "@/lib/tesla-series-services";

export function TeslaSeriesHero({
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
              Tesla 车膜保护与日常用车升级
            </h1>

            <p className="max-w-lg text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
              蓝辉轻改顺德大良店为 Tesla 车主提供车衣、隔热膜、改色膜、轮毂、专车脚垫与洗美养护服务；
              踏板、地板及电气项目需结合车型、年款和原车结构确认。
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openWeChatModal()}
                className="inline-flex min-h-12 select-none items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-6 text-base font-semibold text-white shadow-lg shadow-red-500/20 transition-transform active:scale-[0.96]"
              >
                <MessageCircle className="size-4" aria-hidden />
                获取我的车型方案
              </button>
            </div>
          </div>

          {/* 右侧主视觉 — 真实 hero.webp + 方案示意 badge */}
          <div className="lg:flex lg:items-center lg:justify-center">
            <div
              data-brand-series-hero
              className="relative w-full aspect-[4/3] rounded-3xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] overflow-hidden"
            >
              <Image
                src={TESLA_HERO_IMAGE.publicPath}
                alt={TESLA_HERO_IMAGE.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                preload
              />
              <span className="absolute left-3 top-3 rounded-full bg-zinc-950/80 px-3 py-1 text-xs text-zinc-300 shadow-[0_0_0_1px_oklch(1_0_0/0.1)]">
                方案示意图
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
