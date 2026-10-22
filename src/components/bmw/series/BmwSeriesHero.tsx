"use client";

import Image from "next/image";
import { ChevronRight, Wrench, Layers, ShieldCheck } from "lucide-react";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BMW_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";

const STATS = [
  { icon: Layers, value: "29", label: "款车型" },
  { icon: Wrench, value: "3", label: "类项目" },
  { icon: ShieldCheck, value: "29", label: "款脚垫尾箱垫" },
];

/**
 * 日产品牌页 S0 Hero（PageSpec §S0）。
 */
export function BmwSeriesHero({
  breadcrumbItems,
}: {
  breadcrumbItems: BreadcrumbItem[];
}) {
  return (
    <section
      aria-labelledby="bmw-hero-title"
      className="relative overflow-hidden border-b border-white/[0.05]"
    >
      <div className="mx-auto grid min-h-[80svh] max-w-7xl items-center gap-8 px-4 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-10 lg:min-h-[70svh] lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12 lg:px-8 lg:pb-16 lg:pt-14">
        <div className="relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          <h1
            id="bmw-hero-title"
            className="mt-4 max-w-2xl text-balance text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl"
          >
            宝马全系
            <span className="text-blue-400">保护与升级</span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            宝马全系 29 款车型的脚垫与尾箱垫都在一个页面里。360软包脚垫、平面尾箱垫、360全包尾箱按车型与年款对号入座。选你的车型往下翻。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#bmw-models"
              className="inline-flex min-h-12 select-none items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 pl-5 pr-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-[scale,box-shadow,filter] duration-150 ease-out hover:brightness-110 hover:shadow-blue-400/30 active:scale-[0.96]"
            >
              按车型查适配
              <ChevronRight className="size-4" aria-hidden />
            </a>
            <a
              href="#bmw-fitment"
              className="inline-flex min-h-12 select-none items-center justify-center rounded-full bg-white/[0.04] px-5 text-base font-semibold text-white shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-[scale,background-color,box-shadow] duration-150 ease-out hover:bg-white/[0.08] active:scale-[0.96]"
            >
              看适配明细
            </a>
          </div>

          <dl className="mt-10 hidden grid-cols-3 gap-px overflow-hidden rounded-2xl bg-white/[0.06] lg:grid">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex min-h-20 items-center gap-3 bg-zinc-950 px-5"
              >
                <Icon className="size-5 text-blue-400" aria-hidden />
                <div>
                  <dt className="text-sm text-zinc-500">{label}</dt>
                  <dd className="text-lg font-bold tabular-nums text-white">
                    {value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:max-w-[36rem] lg:justify-self-end">
          <div className="overflow-hidden rounded-[1.75rem] bg-white/[0.05] p-2 shadow-[0_24px_64px_-24px_oklch(0_0_0/0.75)]">
            <Image
              src={BMW_SERIES_HERO_IMAGE.src}
              alt={BMW_SERIES_HERO_IMAGE.alt}
              width={BMW_SERIES_HERO_IMAGE.width}
              height={BMW_SERIES_HERO_IMAGE.height}
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full rounded-[1.25rem] object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
