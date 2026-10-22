import Image from "next/image";
import { ImageOff, Store } from "lucide-react";

const PREVIEWS = [
  {
    model: "理想 L6 · 黑武士",
    image: "/images/products/body-kits/理想/理想L6/理想_理想L6_黑武士_前视_01.webp",
    alt: "理想 L6 黑武士风格包围效果图",
    tag: "效果图，非实拍",
  },
  {
    model: "问界 M7 · 26 款前后包围",
    image: "/images/products/body-kits/问界/问界M7/问界_问界M7_26款前包围_01.webp",
    alt: "问界 M7 26 款前包围效果图",
    tag: "效果图，非实拍",
  },
  {
    model: "小米 YU7 · 运动系列",
    image: "/images/products/body-kits/小米/小米YU7/小米_小米YU7_系列08_01.webp",
    alt: "小米 YU7 运动系列包围产品参考图",
    tag: "产品图（系列参考图）",
  },
  {
    model: "蔚来 ET5T · 星澜系列",
    image: "/images/products/body-kits/蔚来/蔚来ET5T/蔚来_蔚来ET5T_系列07_01.webp",
    alt: "蔚来 ET5T 星澜系列包围产品参考图",
    tag: "产品图（系列参考图）",
  },
];

/**
 * S1.5 过渡案例块：实拍案例尚未采集，不虚报已实装数量；
 * 效果图占位并标注「效果图，非实拍」，保留「到店看同车型实车效果」引导。
 */
export function BodyKitCases() {
  return (
    <section
      id="body-kit-cases"
      aria-labelledby="body-kit-cases-title"
      className="scroll-mt-20 border-b border-white/[0.06] bg-[#0b0c10] py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-amber-400">装车参考</p>
          <h2 id="body-kit-cases-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            想看真实装车效果，先到店看同车型实车
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            门店实拍案例正在逐台采集，当前不虚报已实装车型数量；下面为风格效果图或系列产品参考图，
            只用于确认风格方向，真实装车效果请到店看同车型实车评估。
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PREVIEWS.map((item) => (
            <figure
              key={item.model}
              className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900"
            >
              <div className="relative aspect-[4/3] bg-zinc-950">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/65 px-2.5 py-1 text-[11px] text-zinc-200 backdrop-blur-md">
                  <ImageOff className="size-3" aria-hidden="true" />
                  {item.tag}
                </span>
              </div>
              <figcaption className="border-t border-white/[0.06] px-4 py-3.5">
                <p className="text-sm font-semibold text-white">{item.model}</p>
                <p className="mt-1 text-xs text-zinc-400">到店看同车型实车效果</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 flex items-center gap-2 text-xs leading-6 text-zinc-500">
          <Store className="size-4 text-amber-400" aria-hidden="true" />
          效果图与产品图只作风格参考，不代表本店实拍，也不作为装车效果承诺。
        </p>
      </div>
    </section>
  );
}
