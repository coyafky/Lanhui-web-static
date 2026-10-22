import { Cast, Wifi, Volume2 } from "lucide-react";
import { sharedFeatures } from "@/lib/car-tv-products";

const ICON_MAP = {
  cast: Cast,
  wifi: Wifi,
  volume: Volume2,
} as const;

export function CarTvSharedFeatures() {
  return (
    <section className="border-b border-white/[0.06] bg-[#0b0c10] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-orange-400">共有能力</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              这三件事，三套方案都会做
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-300">
              投屏、联网、声音是三套方案的共同基础，只是承载方式不同。具体到某台车的功能项目，安装前逐项确认。
            </p>
            <p className="mt-4 border-l-2 border-orange-500/70 pl-4 text-sm leading-7 text-zinc-300">
              原车功能控制属于适配能力，不作为所有车型的统一承诺，安装前会逐项确认。
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
            {sharedFeatures.map((feature) => {
              const Icon = ICON_MAP[feature.icon as keyof typeof ICON_MAP] ?? Cast;
              return (
                <article key={feature.title} className="bg-zinc-950 p-6 sm:p-7">
                  <Icon className="size-6 text-orange-300" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-300">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
