import Image from "next/image";
import { ImageOff, Store } from "lucide-react";
import { carTvFitmentEntries } from "@/lib/car-tv-fitment";

/**
 * 过渡案例块（PageSpec S4）：
 * 门店实拍案例尚未完成采集，不虚报已实装数量；当前用厂方产品图占位展示外观与配色，
 * 每张明确标注「产品图，非本店实拍」，并保留到店看实车效果的引导。
 */
const PREVIEW_MODELS = [
  "赛那 / 格瑞维亚",
  "腾势 D9",
  "传祺 M8 宗师 / 24 款新大师 / E9",
  "问界 M9（24/25 款全系）",
  "25 款问界 M8",
  "理想 L7 / L8（23/24 款）",
  "25 款别克 GL8 陆尊 / 陆尚",
  "后排娱乐屏（后排带 LINK 接口车型）",
] as const;

export function CarTvCases() {
  const previews = PREVIEW_MODELS.flatMap((model) => {
    const entry = carTvFitmentEntries.find((e) => e.carModel === model);
    if (!entry || entry.images.length === 0) return [];
    return [
      {
        carModel: entry.carModel,
        series: entry.series,
        image: entry.images[0],
      },
    ];
  });

  return (
    <section
      id="car-tv-cases"
      aria-labelledby="car-tv-cases-title"
      className="scroll-mt-20 border-b border-white/[0.06] bg-zinc-950 py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-orange-400">装车参考</p>
          <h2 id="car-tv-cases-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            这些车型的产品外观与配色先看一遍
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            门店实拍案例正在逐台采集，当前不虚报已实装数量；下面为厂方产品图，用来确认屏幕尺寸、配色与开合方式，真实装车效果请到店看同车型实车。
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {previews.map((preview) => (
            <figure
              key={preview.carModel}
              className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900"
            >
              <div className="relative aspect-[4/3] bg-zinc-950">
                <Image
                  src={preview.image.src}
                  alt={preview.image.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/65 px-2.5 py-1 text-[11px] text-zinc-200 backdrop-blur-md">
                  <ImageOff className="size-3" aria-hidden="true" />
                  产品图，非本店实拍
                </span>
              </div>
              <figcaption className="border-t border-white/[0.06] px-4 py-3">
                <p className="text-sm font-semibold text-white">{preview.carModel}</p>
                <p className="mt-1 text-xs text-zinc-400">
                  {preview.series} · 到店看同车型实车效果
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 flex items-center gap-2 text-xs leading-6 text-zinc-500">
          <Store className="size-4 text-orange-400" aria-hidden="true" />
          实车效果受内饰颜色、顶棚包覆与安装位置影响，产品图只作外观参考，不作为装车效果承诺。
        </p>
      </div>
    </section>
  );
}
