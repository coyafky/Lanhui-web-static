import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MonitorPlay } from "lucide-react";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/Breadcrumbs";
import { carTvImages } from "@/lib/car-tv-products";

type Props = {
  breadcrumbItems: readonly BreadcrumbItem[];
};

export function CarTvHero({ breadcrumbItems }: Props) {
  const image = carTvImages.hero;

  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#08090c] text-white">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -left-28 top-28 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-500/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24">
        <Breadcrumbs items={breadcrumbItems} className="mb-9" />

        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="max-w-xl">
            <div className="mb-5 inline-flex min-h-9 items-center gap-2 border-l-2 border-orange-500 pl-3 text-sm font-medium tracking-[0.18em] text-orange-300">
              <MonitorPlay className="size-4" aria-hidden="true" />
              后排影音升级
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              18.5 英寸车载电视
              <span className="mt-2 block text-zinc-300">把后排变成舒适观影位</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-zinc-300 sm:text-lg">
              1080P 大屏、4G 与 Wi-Fi 联网、手机投屏和语音控制，为 SUV 与 MPV 后排补充更完整的娱乐体验。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#car-tv-specs"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              >
                查看产品参数
                <ArrowDown className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="#car-tv-installation"
                className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-white/30 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                了解安装适配
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 border-t border-white/10 pt-5">
              <div>
                <dt className="text-xs text-zinc-400">屏幕</dt>
                <dd className="mt-1 text-lg font-semibold text-white">18.5 英寸</dd>
              </div>
              <div className="border-l border-white/10 pl-4">
                <dt className="text-xs text-zinc-400">分辨率</dt>
                <dd className="mt-1 text-lg font-semibold text-white">1920 × 1080</dd>
              </div>
              <div className="border-l border-white/10 pl-4">
                <dt className="text-xs text-zinc-400">配置</dt>
                <dd className="mt-1 text-lg font-semibold text-white">4 GB ＋ 64 GB</dd>
              </div>
            </dl>
          </div>

          <figure className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900 shadow-2xl shadow-black/40">
            <div className="relative aspect-[8/5]">
              <Image
                src={image.publicPath}
                alt={image.alt}
                fill
                loading="eager"
                sizes="(max-width: 1023px) 100vw, 56vw"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
            <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-xs text-zinc-200 sm:bottom-5 sm:left-5 sm:right-5">
              <span className="rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-md">展开状态效果示意</span>
              <span className="hidden rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-md sm:inline">具体外观以实装为准</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
