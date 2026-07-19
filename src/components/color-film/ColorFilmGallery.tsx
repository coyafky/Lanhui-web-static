"use client";

import { useState, useMemo } from "react";
import { X, Columns2, Check } from "lucide-react";
import {
  colorFilmSeriesRich,
  TEXTURE_FILTERS,
  COLOR_FAMILY_FILTERS,
  COLOR_FAMILY_BG,
  STYLE_GROUPS,
  type ColorFilmTexture,
  type ColorFilmFamily,
} from "@/lib/color-film-data";

const MAX_COMPARE = 3;

export function ColorFilmGallery({
  activeStyle,
}: {
  activeStyle: string | null;
}) {
  const [textureFilter, setTextureFilter] = useState<string>("all");
  const [colorFamilyFilter, setColorFamilyFilter] = useState<string>("all");
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);

  const filteredSeries = useMemo(() => {
    let result = colorFilmSeriesRich;

    // 风格筛选
    if (activeStyle) {
      const group = STYLE_GROUPS.find((g) => g.slug === activeStyle);
      if (group) {
        const slugSet = new Set(group.seriesSlugs);
        result = result.filter((s) => slugSet.has(s.slug));
      }
    }

    // 质感筛选
    if (textureFilter !== "all") {
      result = result.filter((s) => s.texture === textureFilter);
    }

    // 色系筛选
    if (colorFamilyFilter !== "all") {
      result = result.filter((s) => s.colorFamily === colorFamilyFilter);
    }

    return result;
  }, [activeStyle, textureFilter, colorFamilyFilter]);

  const toggleSelect = (slug: string) => {
    setSelectedSlugs((prev) => {
      if (prev.includes(slug)) {
        return prev.filter((s) => s !== slug);
      }
      if (prev.length >= MAX_COMPARE) {
        return [...prev.slice(1), slug];
      }
      return [...prev, slug];
    });
  };

  const selectedSeries = useMemo(
    () => colorFilmSeriesRich.filter((s) => selectedSlugs.includes(s.slug)),
    [selectedSlugs]
  );

  return (
    <section id="color-gallery" className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            颜色选择
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            选你喜欢的颜色，最多 3 款并排对比
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl">
            {filteredSeries.length} 个系列 — 点击色卡选中，再次点击取消
          </p>
        </div>

        {/* 筛选栏 */}
        <div className="space-y-4 mb-8">
          {/* 质感筛选 */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:px-0 sm:mx-0 sm:overflow-visible">
            <span className="text-xs text-zinc-500 flex-shrink-0 mr-1">质感</span>
            {TEXTURE_FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setTextureFilter(f.key)}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all active:scale-[0.97] ${
                  textureFilter === f.key
                    ? "bg-white text-zinc-900"
                    : "bg-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.1]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* 色系筛选 */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:px-0 sm:mx-0 sm:overflow-visible">
            <span className="text-xs text-zinc-500 flex-shrink-0 mr-1">色系</span>
            {COLOR_FAMILY_FILTERS.map((f) => {
              const isActive = colorFamilyFilter === f.key;
              const bgClass =
                f.key === "all"
                  ? "bg-white/[0.06]"
                  : COLOR_FAMILY_BG[f.key] ?? "bg-zinc-700";

              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setColorFamilyFilter(f.key)}
                  className={`flex-shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all active:scale-[0.97] ${
                    isActive
                      ? "bg-white text-zinc-900"
                      : "bg-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.1]"
                  }`}
                >
                  {f.key !== "all" && (
                    <span
                      className={`inline-block size-3 rounded-full ${bgClass} ring-1 ring-white/10`}
                    />
                  )}
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 色卡网格 */}
        {filteredSeries.length === 0 ? (
          <div className="text-center py-20 text-zinc-500">
            <p className="text-lg mb-1">没有匹配的颜色</p>
            <p className="text-sm">试试调整筛选条件</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredSeries.map((series) => {
              const isSelected = selectedSlugs.includes(series.slug);
              const bgClass = COLOR_FAMILY_BG[series.colorFamily] ?? "bg-zinc-700";

              return (
                <button
                  key={series.slug}
                  type="button"
                  onClick={() => toggleSelect(series.slug)}
                  className={`group relative text-left rounded-2xl overflow-hidden transition-all duration-200 active:scale-[0.97] ${
                    isSelected
                      ? "shadow-[0_0_0_2px_oklch(1_0_0/0.3)]"
                      : "shadow-[0_0_0_1px_oklch(1_0_0/0.06)] hover:shadow-[0_0_0_1px_oklch(1_0_0/0.12)]"
                  }`}
                >
                  {/* 色块区域 */}
                  <div
                    className={`relative aspect-[4/3] ${bgClass} flex items-center justify-center overflow-hidden`}
                  >
                    {/* 模拟膜面质感纹理 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" />
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_white_0%,_transparent_70%)]" />

                    {/* 选中标记 */}
                    {isSelected && (
                      <div className="absolute top-3 right-3 size-6 rounded-full bg-white text-zinc-900 flex items-center justify-center shadow-lg">
                        <Check className="size-3.5" />
                      </div>
                    )}

                    {/* 质感标签 */}
                    <span className="absolute top-3 left-3 text-[10px] font-medium text-white/70 bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
                      {series.texture}
                    </span>

                    {/* 占位：颜色名浮于色块上 */}
                    <span className="text-lg font-bold text-white/90 drop-shadow-lg">
                      {series.name}
                    </span>
                  </div>

                  {/* 信息区 */}
                  <div className="p-3 sm:p-4 bg-zinc-900/60">
                    <h3 className="text-sm font-semibold text-white mb-0.5">
                      {series.name}
                    </h3>
                    <p className="text-xs text-zinc-500 mb-1.5">
                      {series.englishName}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-zinc-400 bg-white/[0.06] px-2 py-0.5 rounded-full">
                        {series.styleLabel}
                      </span>
                      <span className="text-[11px] text-zinc-500 bg-white/[0.04] px-2 py-0.5 rounded-full">
                        {series.colorFamily}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* 对比栏 */}
        {selectedSeries.length > 0 && (
          <div className="fixed bottom-0 inset-x-0 z-50 bg-zinc-900/95 backdrop-blur-md border-t border-white/[0.08] shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex items-center gap-4 overflow-x-auto">
                <div className="flex items-center gap-2 text-xs text-zinc-400 flex-shrink-0">
                  <Columns2 className="size-3.5" />
                  对比
                  <span className="text-zinc-600">
                    ({selectedSeries.length}/{MAX_COMPARE})
                  </span>
                </div>

                {selectedSeries.map((series) => {
                  const bgClass =
                    COLOR_FAMILY_BG[series.colorFamily] ?? "bg-zinc-700";
                  return (
                    <div
                      key={series.slug}
                      className="flex-shrink-0 flex items-center gap-2 bg-white/[0.06] rounded-xl pl-2 pr-3 py-1.5"
                    >
                      <span
                        className={`size-7 rounded-lg ${bgClass} flex-shrink-0`}
                      />
                      <span className="text-xs font-medium text-white whitespace-nowrap">
                        {series.name}
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleSelect(series.slug)}
                        className="ml-1 text-zinc-500 hover:text-zinc-300"
                      >
                        <X className="size-3" />
                      </button>
                    </div>
                  );
                })}

                <div className="flex-1" />

                <button
                  type="button"
                  onClick={() => setSelectedSlugs([])}
                  className="text-xs text-zinc-500 hover:text-zinc-300 flex-shrink-0"
                >
                  清空对比
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
