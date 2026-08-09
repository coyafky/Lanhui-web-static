import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MonitorPlay, Wifi } from "lucide-react";
import type { ServiceRoute } from "@/lib/product-routes";
import { carTvImages } from "@/lib/car-tv-products";

type Props = {
  services: readonly ServiceRoute[];
};

export function BusinessComfortMap({ services }: Props) {
  const carTv = services.find((service) => service.serviceSlug === "car-tv");
  if (!carTv) return null;

  return (
    <section aria-labelledby="business-comfort-title" className="overflow-hidden rounded-3xl border border-orange-900/40 bg-[#0b0c10]">
      <Link href={carTv.canonicalPath} className="group grid min-h-11 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
          <p className="text-xs tracking-[0.18em] text-orange-400">REAR CABIN · 后排舒适</p>
          <div className="mt-5 flex size-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-300 ring-1 ring-orange-400/20">
            <MonitorPlay className="size-5" aria-hidden="true" />
          </div>
          <h2 id="business-comfort-title" className="mt-5 text-2xl font-bold text-white md:text-3xl">
            18.5 英寸车载电视
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-300 md:text-base">
            为 SUV 与 MPV 后排补充大屏观影、手机投屏、联网娱乐和语音控制体验。
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-zinc-300">
            <span className="inline-flex items-center gap-1.5"><Wifi className="size-4 text-orange-300" aria-hidden="true" />4G ＋ Wi-Fi</span>
            <span>1920 × 1080</span>
            <span>4 GB ＋ 64 GB</span>
          </div>
          <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition-colors group-hover:text-orange-200">
            查看产品详情
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>

        <div className="relative aspect-[8/5] overflow-hidden bg-zinc-900 lg:aspect-auto">
          <Image
            src={carTvImages.hero.publicPath}
            alt="车载电视后排观影效果"
            fill
            sizes="(max-width: 1023px) 100vw, 55vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent lg:bg-gradient-to-r" />
        </div>
      </Link>
    </section>
  );
}
