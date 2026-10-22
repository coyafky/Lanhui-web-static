import Image from "next/image";
import { MonitorUp, Cast, Network, Mic2, Ruler } from "lucide-react";
import { carTvFeatures, carTvImages } from "@/lib/car-tv-products";

const FEATURE_ICONS = [MonitorUp, Cast, Network, Mic2] as const;

const sizeSeries = [
  {
    size: "15.6 英寸",
    note: "尺寸更克制，适合顶棚空间紧凑的车型，观感更低调。",
    models: "奥德赛 / 艾力绅 · 传祺 M8 宗师等",
  },
  {
    size: "17.3 英寸",
    note: "多数 SUV / MPV 的均衡选择，画面和顶棚空间都顾得到。",
    models: "赛那 / 格瑞维亚 · 理想 L 系等",
  },
  {
    size: "18.5 英寸",
    note: "大画幅优先，适合天窗区域宽裕、后排距离较远的车型。",
    models: "问界 M9 · 腾势 D9 等",
  },
] as const;

export function CarTvExperience() {
  return (
    <section id="rear-roof" className="scroll-mt-20 border-b border-white/[0.06] bg-zinc-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-orange-400">
            吸顶式后排电视 · Roof Monitor
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            全车共享一块大屏
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            屏幕收在顶棚里，用的时候翻下来，整个后排一起看。适合一车人一起跑长途的用车方式。
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {carTvFeatures.map((feature, index) => {
            const Icon = FEATURE_ICONS[index] ?? MonitorUp;
            const isPrimary = index === 0;

            return (
              <article
                key={feature.title}
                className={`relative overflow-hidden border border-white/[0.08] bg-zinc-900/60 p-6 ${
                  isPrimary
                    ? "md:col-span-2 lg:col-span-7 lg:row-span-2 lg:min-h-[360px] lg:p-9"
                    : "lg:col-span-5"
                }`}
              >
                {isPrimary && (
                  <div aria-hidden="true" className="absolute -right-14 -top-14 text-[10rem] font-black leading-none text-white/[0.025]">
                    18.5
                  </div>
                )}
                <div className="relative">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-300 ring-1 ring-orange-400/20">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <p className={`mt-6 font-semibold text-white ${isPrimary ? "text-3xl sm:text-4xl" : "text-xl"}`}>
                    {feature.title}
                  </p>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
                    {feature.description}
                  </p>
                  {feature.metric && (
                    <p className={`mt-6 font-medium text-orange-300 ${isPrimary ? "text-2xl" : "text-sm"}`}>
                      {feature.metric}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <figure className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-900">
            <Image
              src={carTvImages.installation.publicPath}
              alt={carTvImages.installation.alt}
              width={carTvImages.installation.width}
              height={carTvImages.installation.height}
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="h-auto w-full object-cover"
            />
            <figcaption className="border-t border-white/[0.06] px-5 py-3 text-xs text-zinc-400">
              收起状态与顶棚贴合效果示意，实际结构以车型适配为准
            </figcaption>
          </figure>

          <div>
            <p className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-zinc-500">
              <Ruler className="size-4 text-orange-400" aria-hidden="true" />
              尺寸系列
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">按车型选尺寸，不是越大越好</h3>
            <p className="mt-3 text-base leading-8 text-zinc-300">
              屏幕尺寸跟着顶棚空间走：天窗区域宽、后排距离远，才需要更大的画幅。到店确认车型年款后会给出建议尺寸。
            </p>

            <div className="mt-6 divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {sizeSeries.map((item) => (
                <div key={item.size} className="grid gap-1 py-4 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-4">
                  <p className="font-semibold text-white">{item.size}</p>
                  <div>
                    <p className="text-sm leading-7 text-zinc-300">{item.note}</p>
                    <p className="mt-1 text-xs text-zinc-500">{item.models}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
