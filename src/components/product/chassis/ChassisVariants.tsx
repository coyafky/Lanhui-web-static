import Image from "next/image";
import { chassisImages } from "@/lib/chassis-products";

const variants = [
  {
    name: "黑色方案",
    description: "深色表面更接近多数原车底部视觉，图中展示五段护板的对应位置。",
    image: chassisImages.black,
  },
  {
    name: "银色方案",
    description: "银色表面让压筋与分区轮廓更直观，实际可选外观以车型批次为准。",
    image: chassisImages.silver,
  },
] as const;

export function ChassisVariants() {
  return (
    <section className="border-b border-white/[0.06] bg-zinc-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-orange-400">产品外观</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              黑色或银色，结构以车型为准
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-zinc-300 lg:justify-self-end">
            两张产品图均展示前电机、线束、前电池、后电池与后电机五个区域。不同车型的轮廓、孔位和分段比例会有差异。
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {variants.map((variant) => (
            <figure key={variant.name} className="min-w-0 overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-zinc-900/50">
              <div className="relative mx-auto aspect-[9/16] w-full max-w-xl bg-zinc-100">
                <Image
                  src={variant.image.publicPath}
                  alt={variant.image.alt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="border-t border-white/[0.06] p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-white">{variant.name}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{variant.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
