import Image from "next/image";
import { flooringVehicleGroups } from "@/lib/flooring-products";

export function FlooringCaseShowcase() {
  // 每个品牌取第一个颜色变体作为代表图
  const showcaseItems = flooringVehicleGroups.map((group) => {
    const variant = group.colorVariants[0];
    return {
      id: group.id,
      brandName: group.brandName,
      headline: group.headline,
      models: group.models.join(" / "),
      variant,
    };
  });

  return (
    <section
      aria-labelledby="flooring-cases-title"
      className="py-16 sm:py-20 bg-zinc-900/50 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-amber-400 uppercase">
            装车案例
          </p>
          <h2
            id="flooring-cases-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            不同车型的地板总成装车效果
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            以下展示各品牌代表车型的地板总成效果，实际方案以到店确认为准。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] overflow-hidden"
            >
              {/* 图片 — 使用浅暖灰底让产品轮廓清晰 */}
              <div className="relative aspect-[4/3] bg-[#3a3530]">
                <Image
                  src={item.variant.assetPath}
                  alt={item.variant.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain p-2"
                  loading="lazy"
                />
                {/* 给深色产品图加微弱描边 */}
                <div className="absolute inset-2 rounded-lg shadow-[0_0_0_1px_oklch(1_0_0/0.08)] pointer-events-none" aria-hidden />
              </div>

              <div className="p-4">
                <h3 className="text-base font-semibold text-white mb-1">
                  {item.brandName}
                </h3>
                <p className="text-sm text-zinc-400 mb-2">{item.models}</p>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.headline}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-zinc-500">
          * 案例展示各品牌代表方案；实际效果以到店检查确认结果为准。
        </p>
      </div>
    </section>
  );
}
