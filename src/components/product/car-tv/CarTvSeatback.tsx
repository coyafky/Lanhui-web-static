import Image from "next/image";
import { MonitorSmartphone, PlugZap } from "lucide-react";
import { seatbackFeatures, carTvImages, rearFitment } from "@/lib/car-tv-products";

export function CarTvSeatback() {
  return (
    <section id="rear-seatback" className="scroll-mt-20 border-b border-white/[0.06] bg-[#0b0c10] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <figure className="order-2 overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-900 lg:order-1">
            <Image
              src={carTvImages.seatback.publicPath}
              alt={carTvImages.seatback.alt}
              width={carTvImages.seatback.width}
              height={carTvImages.seatback.height}
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="h-auto w-full object-cover"
            />
            <figcaption className="border-t border-white/[0.06] px-5 py-3 text-xs text-zinc-400">
              座椅靠背安装效果示意，具体支架与取电方式以车型适配为准
            </figcaption>
          </figure>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-medium tracking-[0.18em] text-orange-400">
              座椅背装式后排电视 · Seatback Display
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              每个座位各看各的
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-zinc-300">
              两块屏各管各的：一人看片、一人导航，互不干扰。前提是原车后排带 LINK 接口，或者头枕可拆卸——到店先确认这一点，基本就定了能不能装。
            </p>

            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
              {seatbackFeatures.map((feature) => (
                <article key={feature.title} className="bg-zinc-950 p-5">
                  <p className="text-base font-semibold text-white">{feature.title}</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-300">{feature.description}</p>
                  <p className="mt-3 text-sm font-medium text-orange-300">{feature.metric}</p>
                </article>
              ))}
            </div>

            <p className="mt-6 flex items-start gap-2.5 text-sm leading-7 text-zinc-400">
              <PlugZap className="mt-1 size-4 shrink-0 text-orange-400" aria-hidden="true" />
              原车后排带 LINK 接口的车型直接接口取电，不用拆顶棚；通用款需要先确认头枕是否可拆卸。
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-zinc-500">
            <MonitorSmartphone className="size-4 text-orange-400" aria-hidden="true" />
            已适配车型（节选）
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {rearFitment.seatback.models.map((model) => (
              <span key={model} className="rounded-full border border-white/[0.1] bg-zinc-900 px-3.5 py-1.5 text-xs text-zinc-300">
                {model}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs leading-6 text-zinc-500">
            完整适配清单以到店确认的车型年款为准，此处列出的是厂方适装表内已覆盖的常见车型。
          </p>
        </div>
      </div>
    </section>
  );
}
