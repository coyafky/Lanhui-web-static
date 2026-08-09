import Image from "next/image";
import { Car } from "lucide-react";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/Breadcrumbs";
import { electricStepImages } from "@/lib/electric-step-products";

export function ElectricStepHero({ breadcrumbItems }: { breadcrumbItems?: readonly BreadcrumbItem[] }) {
  const heroImage = electricStepImages[0]!;

  return (
    <section
      className="relative overflow-hidden bg-zinc-950 text-white"
      aria-labelledby="electric-step-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(249,115,22,0.18),transparent_34%),linear-gradient(135deg,#09090b_0%,#18181b_56%,#09090b_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14 md:pt-24 md:pb-20">
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />
        )}

        <div className="grid gap-10 lg:grid-cols-[1fr_520px] lg:items-center">
          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              <p className="inline-flex min-h-10 items-center gap-2 rounded-full bg-orange-400/10 px-4 text-sm font-medium text-orange-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                <Car className="size-4" aria-hidden />
                ELECTRIC STEP · 电动踏板
              </p>
              <p className="inline-flex min-h-10 items-center gap-2 rounded-full bg-white/[0.04] px-4 text-sm text-zinc-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                3 种踏板款式
              </p>
            </div>

            <h1
              id="electric-step-title"
              className="max-w-2xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.025em] md:text-6xl"
            >
              高底盘的距离，交给一块会收起的踏板
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-zinc-300 md:text-lg">
              开门展开，为老人、小孩和频繁上下车的乘员提供更低、更清晰的落脚位置；关门收回，尽量保留原车侧面线条。
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-white/[0.05] p-2 shadow-[0_0_0_1px_oklch(1_0_0/0.08),0_24px_64px_-24px_oklch(0_0_0/0.75)]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-zinc-900 outline outline-1 -outline-offset-1 outline-white/10">
              <Image
                src={heroImage.publicPath}
                alt={heroImage.alt}
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-contain p-3"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4">
                <p className="text-sm font-semibold text-white">
                  {heroImage.title}
                </p>
                <p className="mt-1 text-xs text-zinc-300">
                  开门展开 · 关门自动收回
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
