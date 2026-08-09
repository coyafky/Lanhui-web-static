import Image from "next/image";
import { Camera } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";
import { carMatGalleryImages } from "@/lib/carmat-products";

export function CarMatHero({
  breadcrumbItems,
}: {
  breadcrumbItems?: readonly BreadcrumbItem[];
}) {
  const heroImage = carMatGalleryImages[0]!;

  return (
    <section
      className="relative overflow-hidden bg-zinc-950 text-white border-b border-zinc-900"
      aria-labelledby="carmat-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(245,158,11,0.16),transparent_34%),linear-gradient(135deg,#09090b_0%,#18181b_56%,#09090b_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14 md:pt-24 md:pb-20">
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />
        )}

        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                CARMAT · 360 软包脚垫
              </span>
              <span className="inline-flex items-center rounded-full bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-400 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                按车型定制 · 可拆洗维护
              </span>
            </div>

            <h1
              id="carmat-title"
              className="max-w-3xl text-3xl font-bold text-balance leading-[1.08] tracking-[-0.025em] sm:text-4xl md:text-5xl lg:text-6xl"
            >
              把每天带进车里的脏，留在更容易清理的一层
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 text-pretty md:text-lg">
              泥沙、水渍、零食碎屑和鞋底磨损，不必直接留在原车地毯上。按车型、年款和座椅布局确认覆盖范围，同时检查主驾踏板安全间隙。
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-0 overflow-hidden">
            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
              <Image
                src={heroImage.publicPath}
                alt={heroImage.alt}
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover outline outline-1 -outline-offset-1 outline-white/10"
                preload
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4">
                <p className="text-sm font-semibold text-white">
                  {heroImage.title}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-300">
                  <Camera className="size-3 text-amber-400/60" aria-hidden />
                  按车型定制 · 覆盖主驾到尾箱
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
