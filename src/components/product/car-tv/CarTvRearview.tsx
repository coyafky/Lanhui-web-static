import Image from "next/image";
import { Eye, Video } from "lucide-react";
import { rearviewFeatures, carTvImages, rearFitment } from "@/lib/car-tv-products";

export function CarTvRearview() {
  return (
    <section id="rear-rearview" className="scroll-mt-20 border-b border-white/[0.06] bg-zinc-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-orange-400">
              流媒体后视镜 · Rearview Upgrade
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              换一个更清楚的原车后视镜
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-zinc-300">
              晚上看不清后车、雨天镜面挂水、后排坐满人挡视线——这三件事是流媒体后视镜解决的。装在原车后视镜位置，后面什么情况直接显示在镜面上。
            </p>

            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
              {rearviewFeatures.map((feature) => (
                <article key={feature.title} className="bg-zinc-950 p-5">
                  <p className="text-base font-semibold text-white">{feature.title}</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-300">{feature.description}</p>
                  <p className="mt-3 text-sm font-medium text-orange-300">{feature.metric}</p>
                </article>
              ))}
            </div>
          </div>

          <figure className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-900">
            <Image
              src={carTvImages.rearview.publicPath}
              alt={carTvImages.rearview.alt}
              width={carTvImages.rearview.width}
              height={carTvImages.rearview.height}
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="h-auto w-full object-cover"
            />
            <figcaption className="border-t border-white/[0.06] px-5 py-3 text-xs text-zinc-400">
              实车装车效果示意，显示内容与角度以实际车型为准
            </figcaption>
          </figure>
        </div>

        <div className="mt-12">
          <p className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-zinc-500">
            <Eye className="size-4 text-orange-400" aria-hidden="true" />
            已适配车型（节选）
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {rearFitment.rearview.models.map((model) => (
              <span key={model} className="rounded-full border border-white/[0.1] bg-zinc-900 px-3.5 py-1.5 text-xs text-zinc-300">
                {model}
              </span>
            ))}
          </div>
          <p className="mt-4 flex items-start gap-2 text-xs leading-6 text-zinc-500">
            <Video className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
            分体式与数字式两种规格按车型区分，具体到店确认。
          </p>
        </div>
      </div>
    </section>
  );
}
