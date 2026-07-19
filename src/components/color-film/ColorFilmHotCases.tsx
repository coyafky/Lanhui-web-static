import { HOT_COLOR_CASES, COLOR_FAMILY_BG } from "@/lib/color-film-data";

export function ColorFilmHotCases() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-900/50 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            热门案例
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            看看别人选了哪些颜色
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl">
            真实交付案例，每款颜色在不同车型上的表现各有特色
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {HOT_COLOR_CASES.map((item) => {
            const bgClass = COLOR_FAMILY_BG[item.colorFamily] ?? "bg-zinc-700";

            return (
              <div
                key={item.colorName}
                className="group rounded-2xl overflow-hidden bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
              >
                {/* 色块 + 车型图占位 */}
                <div className={`relative aspect-[4/3] ${bgClass} overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                    <span className="text-xs font-medium text-white/80 drop-shadow">
                      {item.colorName}
                    </span>
                    <span className="text-[10px] text-white/50">
                      {item.carExample}
                    </span>
                  </div>
                </div>

                {/* 信息 */}
                <div className="p-3">
                  <p className="text-sm font-medium text-white truncate">
                    {item.colorName}
                  </p>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {item.texture} · {item.carExample}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
