import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { rearDisplayTypes } from "@/lib/car-tv-products";

const TYPE_ANCHORS = {
  roof: "#rear-roof",
  seatback: "#rear-seatback",
  rearview: "#rear-rearview",
} as const;

export function CarTvTypeSelector() {
  return (
    <section id="rear-types" className="scroll-mt-20 border-b border-white/[0.06] bg-zinc-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-orange-400">三种方案</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            先分清要解决哪件事
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            三种方案不是同一个产品换个装法，使用场景和安装条件都不一样。下面按「适合谁」挑，别一上来就比参数。
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rearDisplayTypes.map((type) => (
            <article key={type.type} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-colors hover:border-zinc-700">
              <Link href={TYPE_ANCHORS[type.type]} className="relative block aspect-[4/3] overflow-hidden">
                <Image
                  src={type.image.publicPath}
                  alt={type.image.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1.5 text-xs text-zinc-200 backdrop-blur-md">
                  {type.en}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{type.name}</h3>
                  <span className="shrink-0 text-sm font-medium text-orange-300">{type.tagline}</span>
                </div>

                <p className="mt-5 text-xs font-medium tracking-[0.14em] text-zinc-500">适合谁</p>
                <ul className="mt-3 space-y-2.5">
                  {type.fitFor.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-zinc-300">
                      <Check className="mt-1 size-4 shrink-0 text-orange-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/[0.08] pt-5">
                  <span className="text-xs text-zinc-500">{type.scene}</span>
                  <Link
                    href={TYPE_ANCHORS[type.type]}
                    className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-orange-300 transition-colors hover:text-orange-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
                  >
                    看详细介绍
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
