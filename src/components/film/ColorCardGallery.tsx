import Image from "next/image";
import { colorCardGroups } from "@/lib/film-products";
import type { FilmColorGroup } from "@/lib/film-color-cards.generated";

/**
 * 改色膜色卡库：按分组展示色板，每张标注「色卡」，
 * 全局提示「色卡，实际效果以实车为准」。
 */
export function ColorCardGallery({
  groups = colorCardGroups,
}: {
  groups?: FilmColorGroup[];
}) {
  const total = groups.reduce((sum, g) => sum + g.cards.length, 0);

  return (
    <section id="color-card-gallery" className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs tracking-widest text-orange-400 mb-3">色卡库</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            改色膜有哪些颜色？{total} 张色卡分组适配速查
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl leading-relaxed">
            色卡仅为色板参考，实际效果受车型、光线与施工影响，实际效果以实车为准；建议到店查看实物色板后再决定。
          </p>
        </div>

        {/* 分组锚点 */}
        <nav className="flex flex-wrap gap-2 mb-10" aria-label="色卡分组">
          {groups.map((g) => (
            <a
              key={g.id}
              href={`#color-group-${g.id}`}
              className="text-xs px-3.5 py-1.5 rounded-full bg-white/[0.06] text-zinc-300 hover:bg-white/[0.1] transition-colors"
            >
              {g.label}（{g.cards.length}）
            </a>
          ))}
        </nav>

        {groups.map((group) => (
          <div key={group.id} id={`color-group-${group.id}`} className="mb-12 scroll-mt-24">
            <div className="mb-5">
              <h3 className="text-xl font-bold text-white">{group.label}</h3>
              <p className="text-sm text-zinc-400 mt-1">{group.description}</p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {group.cards.map((card) => (
                <figure
                  key={card.image}
                  className="rounded-xl overflow-hidden border border-white/[0.07] bg-zinc-900/60"
                >
                  <div className="relative aspect-square bg-zinc-800">
                    <Image
                      src={card.image}
                      alt={`${group.label}色卡 ${card.code}，色卡参考`}
                      fill
                      sizes="(max-width: 640px) 33vw, 12vw"
                      className="object-cover"
                    />
                    <span className="absolute bottom-1.5 left-1.5 text-[10px] font-medium px-1.5 py-0.5 rounded bg-black/60 text-zinc-300 backdrop-blur-sm">
                      色卡
                    </span>
                  </div>
                  <figcaption className="p-2 text-[11px] text-zinc-500 text-center truncate">
                    {card.code}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}

        <p className="text-xs text-zinc-500 leading-relaxed">
          以上为色板图，不代表实车最终效果；颜色在不同车型、光线角度与施工包边下会有差异，实际效果以实车为准。
        </p>
      </div>
    </section>
  );
}
