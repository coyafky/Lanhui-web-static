import Image from "next/image";
import { Camera, Store } from "lucide-react";
import { chassisCaseImages } from "@/lib/chassis-products";

/**
 * 过渡案例块（G2.5）：资料库仅 2 张通用产品图，统一标注「产品图，非本店实拍」；
 * 车型专属实拍待门店采集后补充，页面引导到店看同车型实车效果。
 */
export function SkidPlateCases() {
  return (
    <section
      id="skid-plate-cases"
      className="scroll-mt-20 border-b border-white/[0.06] bg-zinc-950 py-16 text-white sm:py-20"
      aria-labelledby="skid-plate-cases-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-orange-400">
            <Camera className="size-4" aria-hidden="true" />
            产品展示
          </p>
          <h2
            id="skid-plate-cases-title"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            护板组件长什么样
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            以下为资料库通用产品图，用于展示护板组件的分段与组合方式，不是本店某台实车的施工实拍。车型专属实车效果请到店查看。
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {chassisCaseImages.map((image) => (
            <figure
              key={image.publicPath}
              className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/50"
            >
              <div className="relative aspect-[4/3] bg-zinc-100">
                <Image
                  src={image.publicPath}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-contain"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/15">
                  产品图，非本店实拍 · {image.caption}
                </span>
              </div>
              <figcaption className="border-t border-white/[0.06] px-5 py-4 text-sm leading-6 text-zinc-300">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-[#0b0c10] px-5 py-4">
          <Store className="mt-0.5 size-5 shrink-0 text-orange-300" aria-hidden="true" />
          <p className="text-sm leading-7 text-zinc-300">
            到店看同车型实车效果：可预约到店，对照实车底盘查看版型、固定位置与安装间隙；实装案例照片由门店施工后持续补充。
          </p>
        </div>
      </div>
    </section>
  );
}
