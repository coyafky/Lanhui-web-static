import Image from "next/image";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/Breadcrumbs";

export function FilmPageHero({
  breadcrumbItems,
}: {
  title?: string;
  description?: string;
  breadcrumbItems?: readonly BreadcrumbItem[];
}) {
  return (
    <section className="relative bg-zinc-950 text-white overflow-hidden">
      <div className="absolute inset-0 -z-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-30 bg-orange-500" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-15 bg-blue-600" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-28 lg:pb-20">
        {breadcrumbItems && (
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />
        )}

        <div className="grid lg:grid-cols-[1fr_auto] lg:gap-12 items-center">
          {/* 左栏：文字 */}
          <div>
            <p className="inline-block text-xs tracking-widest mb-4 text-orange-400">
              汽车窗膜
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-tight">
              一张好膜，
              <br />
              不只是隔热
            </h1>
            <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed mb-8">
              兼顾隔热、清晰视野、隐私、信号与长期稳定，为你的车型匹配前挡＋侧后挡方案，并通过专业施工完整呈现产品性能。
            </p>
          </div>

          {/* 主视觉 */}
          <div className="mt-8 mb-6 flex items-center justify-center lg:mt-0 lg:mb-0">
            <div className="relative w-full aspect-[16/10] rounded-xl bg-zinc-900/80 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] overflow-hidden lg:w-[28rem] lg:aspect-[4/3] lg:rounded-2xl xl:w-[32rem]">
              <Image
                src="/images/producthero/window-film-hero.webp"
                alt="汽车窗膜施工中的清晰车内视野"
                fill
                sizes="(max-width: 1023px) 100vw, (min-width: 1280px) 512px, 448px"
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
