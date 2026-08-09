import Image from "next/image";
import { Video } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";

export function CarCareHero({
  breadcrumbItems,
}: {
  breadcrumbItems?: readonly BreadcrumbItem[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950/60 via-zinc-950 to-zinc-950">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* 左侧文案 */}
          <div className="space-y-6">
            <p className="inline-flex min-h-10 items-center gap-2 rounded-full bg-emerald-400/10 px-4 text-sm font-medium text-emerald-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
              <Video className="size-4" aria-hidden />
              官方抖音 · 蓝辉轻改
            </p>

            <h1 className="max-w-xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
              把干净，做到看得见的细节里
            </h1>

            <p className="max-w-lg text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
              蓝辉提供普洗、精洗与轮毂定向清洗。到店后会先了解车况和清洁需求，
              再与您确认适合的服务内容。
            </p>
          </div>

          {/* 右侧主视觉 */}
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-emerald-950/20 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] overflow-hidden">
              <Image
                src="/images/producthero/car-care-hero.webp"
                alt="汽车漆面精细养护与检查施工"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                preload
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
