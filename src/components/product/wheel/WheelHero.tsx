import Image from "next/image";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/Breadcrumbs";

export function WheelHero({
  breadcrumbItems,
}: {
  breadcrumbItems?: readonly BreadcrumbItem[];
}) {
  return (
    <section className="relative bg-zinc-950 text-white overflow-hidden">
      <div className="absolute inset-0 -z-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 bg-sky-600" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-10 bg-amber-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-28 lg:pb-20">
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />
        )}

        <div className="grid lg:grid-cols-[1fr_auto] lg:gap-12 items-center">
          {/* 左栏：文字 */}
          <div>
            <p className="inline-block text-xs tracking-widest mb-4 text-orange-400">
              WHEEL UPGRADE · 轮毂升级
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-tight">
              让轮毂，
              <br />
              决定整车侧面的气质
            </h1>
            <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed mb-3">
              先按车型确认尺寸与安装边界，再从辐条、颜色和工艺中选择适合整车气质的方案
            </p>
            <p className="text-sm text-zinc-400 max-w-xl leading-relaxed">
              施工前完成刹车空间、轮胎规格与胎压系统确认
            </p>
          </div>

          {/* 整车侧面主视觉 */}
          <div className="mt-8 mb-6 flex items-center justify-center lg:mt-0 lg:mb-0">
            <div className="relative w-full aspect-[16/10] rounded-xl bg-zinc-900/80 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] overflow-hidden lg:w-[28rem] lg:aspect-[4/3] lg:rounded-2xl xl:w-[32rem]">
              <Image
                src="/images/producthero/wheels-hero.webp"
                alt="新能源轿车轮毂升级后的整车姿态"
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
