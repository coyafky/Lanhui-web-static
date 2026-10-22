import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Search, Palette } from "lucide-react";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/Breadcrumbs";

type Props = {
  breadcrumbItems: readonly BreadcrumbItem[];
};

/**
 * S0 Hero：包围・给车换个姿态。
 * 回答 G1「包围是干什么的」，并给出两个入口：查车型适配 / 看风格款式。
 */
export function BodyKitHero({ breadcrumbItems }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#08090c] text-white">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -left-28 top-28 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-500/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24">
        <Breadcrumbs items={breadcrumbItems} className="mb-9" />

        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="max-w-xl">
            <div className="mb-5 inline-flex min-h-9 items-center gap-2 border-l-2 border-amber-500 pl-3 text-sm font-medium tracking-[0.18em] text-amber-300">
              车身包围改装
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              包围・给车换个姿态
              <span className="mt-2 block text-zinc-300">
                前包围 / 后包围 / 侧裙 / 尾翼 / 整套，到店评估再定方案
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-zinc-300 sm:text-lg">
              车身包围解决三件事：压低视觉姿态、给保险杠加一层防护、让整车外观更整体。
              28 款热销车型可到店评估，黑武士、熊猫配色、小象灰冷光漆、金属与珍珠白、运动系列任选。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#body-kit-fitment"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                <Search className="size-4" aria-hidden="true" />
                查我的车型
              </Link>
              <Link
                href="#body-kit-styles"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-white/30 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <Palette className="size-4" aria-hidden="true" />
                看风格款式
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 border-t border-white/10 pt-5">
              <div>
                <dt className="text-xs text-zinc-400">车型覆盖</dt>
                <dd className="mt-1 text-sm font-semibold text-white sm:text-base">28 款车型</dd>
              </div>
              <div className="border-l border-white/10 pl-4">
                <dt className="text-xs text-zinc-400">产品记录</dt>
                <dd className="mt-1 text-sm font-semibold text-white sm:text-base">151 条</dd>
              </div>
              <div className="border-l border-white/10 pl-4">
                <dt className="text-xs text-zinc-400">服务方式</dt>
                <dd className="mt-1 text-sm font-semibold text-white sm:text-base">到店评估</dd>
              </div>
            </dl>
          </div>

          <figure className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900 shadow-2xl shadow-black/40">
            <div className="relative aspect-[8/5]">
              <Image
                src="/images/products/body-kits/理想/理想L6/理想_理想L6_黑武士_前视_01.webp"
                alt="理想 L6 黑武士风格包围前视效果图"
                fill
                loading="eager"
                sizes="(max-width: 1023px) 100vw, 56vw"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
            <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-xs text-zinc-200 sm:bottom-5 sm:left-5 sm:right-5">
              <span className="rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-md">黑武士风格包围效果示意</span>
              <span className="hidden rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-md sm:inline">效果图，非实拍</span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 flex items-center gap-2 text-xs text-zinc-500">
          <ArrowDown className="size-4" aria-hidden="true" />
          下滑先看风格款式库，再按车型查适配
        </div>
      </div>
    </section>
  );
}
