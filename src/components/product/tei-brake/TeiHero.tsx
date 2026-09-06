import Image from "next/image";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";
import { Breadcrumbs } from "@/components/Breadcrumbs";

/**
 * TEI Racing 刹车卡钳 —— 总览页头部。
 * 只陈述产品线与工艺事实,不出现任何报价。
 */
export function TeiHero({ breadcrumbItems }: { breadcrumbItems: BreadcrumbItem[] }) {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />
        )}

        <div className="grid lg:grid-cols-[1fr_auto] lg:gap-12 items-center">
          {/* 左栏：文字 */}
          <div>
            <p className="inline-block text-xs tracking-widest mb-4 text-orange-400">
              TEI RACING · BRAKE SYSTEMS
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-tight">
              TEI 刹车卡钳
              <br />
              赛道基因，街道到越野
            </h1>
            <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed mb-3">
              TEI Racing 高性能刹车套件：从街道特调 P/S 系列、赛事 GT 系列到越野 T 系列，
              一体与分体锻造工艺全覆盖，活塞数 4 至 10 可选。
            </p>
            <p className="text-sm text-zinc-400 max-w-xl leading-relaxed">
              页面上展示的轮毂尺寸为该套件的轮圈配置，不等同于对所有车型的适配承诺；
              具体车型适配、盘型与电子驻车兼容性请到店确认。
            </p>
          </div>

          {/* 右栏：主视觉（系列拼贴取街道代表款） */}
          <div className="mt-8 mb-6 flex items-center justify-center lg:mt-0 lg:mb-0">
            <div className="relative w-full aspect-square rounded-xl bg-zinc-900/80 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] overflow-hidden lg:w-[24rem] lg:rounded-2xl xl:w-[28rem]">
              <Image
                src="/images/products/tei/p40ns.webp"
                alt="TEI Racing P40NS 分体锻造大四活塞刹车卡钳"
                fill
                sizes="(max-width: 1023px) 100vw, (min-width: 1280px) 448px, 384px"
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
