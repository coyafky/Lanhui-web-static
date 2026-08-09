"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Check, Columns2, X, ChevronDown } from "lucide-react";
import {
  wheelImagesRich,
  WHEEL_SPOKE_FILTERS,
  FEATURED_WHEEL_COUNT,
} from "@/lib/wheel-products";

const MAX_COMPARE = 3;

export function WheelGallery() {
  const [spokeFilter, setSpokeFilter] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const filtered = useMemo(() => {
    if (spokeFilter === "all") return wheelImagesRich;
    return wheelImagesRich.filter((wheel) => wheel.spoke === spokeFilter);
  }, [spokeFilter]);

  const isAllStructures = spokeFilter === "all";
  const displayed =
    isAllStructures && !showAll
      ? filtered.slice(0, FEATURED_WHEEL_COUNT)
      : filtered;
  const hasMore =
    isAllStructures && filtered.length > FEATURED_WHEEL_COUNT && !showAll;

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((s) => s !== id);
      if (prev.length >= MAX_COMPARE) return [...prev.slice(1), id];
      return [...prev, id];
    });
  };

  const selectedWheels = useMemo(
    () => wheelImagesRich.filter((w) => selectedIds.includes(w.id)),
    [selectedIds]
  );

  return (
    <section
      id="wheel-gallery"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            轮毂选款
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {wheelImagesRich.length} 款视觉方案，挑选你喜欢的
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl">
            按辐条结构筛选，选中款式（最多 3 款）并排对比；具体颜色、尺寸和适配数据需到店确认。
          </p>
        </div>

        <div
          role="tablist"
          aria-label="按轮毂结构筛选"
          className="mb-8 flex items-center gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:px-0 sm:mx-0 sm:overflow-visible"
        >
          {WHEEL_SPOKE_FILTERS.map((filter) => (
            <button
              key={filter.key}
              type="button"
              role="tab"
              aria-selected={spokeFilter === filter.key}
              aria-controls="wheel-gallery-results"
              onClick={() => setSpokeFilter(filter.key)}
              className={`min-h-11 flex-shrink-0 rounded-full px-4 text-sm font-medium transition-all active:scale-[0.97] ${
                spokeFilter === filter.key
                  ? "bg-white text-zinc-900"
                  : "bg-white/[0.06] text-zinc-300 hover:bg-white/[0.1] hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* 无结果 */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            <p className="text-lg mb-1">没有匹配的轮毂</p>
            <p className="text-sm">试试调整筛选条件</p>
          </div>
        )}

        {/* 图库网格 — 桌面 4 列，手机双列 */}
        <div
          id="wheel-gallery-results"
          role="tabpanel"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {displayed.map((wheel) => {
            const isSelected = selectedIds.includes(wheel.id);
            return (
              <button
                key={wheel.id}
                type="button"
                onClick={() => toggleSelect(wheel.id)}
                className={`group relative text-left rounded-2xl overflow-hidden transition-all duration-200 active:scale-[0.97] ${
                  isSelected
                    ? "shadow-[0_0_0_2px_oklch(1_0_0/0.3)]"
                    : "shadow-[0_0_0_1px_oklch(1_0_0/0.06)] hover:shadow-[0_0_0_1px_oklch(1_0_0/0.12)]"
                }`}
              >
                {/* 图片区域 */}
                <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden">
                  <Image
                    src={wheel.publicPath}
                    alt={wheel.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                  {/* 骨架占位覆盖 */}
                  <div className="absolute inset-0 bg-zinc-800 animate-pulse -z-10" />

                  {/* 选中标记 */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 size-6 rounded-full bg-white text-zinc-900 flex items-center justify-center shadow-lg">
                      <Check className="size-3.5" />
                    </div>
                  )}
                </div>

                {/* 信息区 */}
                <div className="p-3 sm:p-4 bg-zinc-900/60">
                  <h3 className="text-sm font-semibold text-white mb-0.5">
                    {wheel.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                    <span className="text-[10px] text-zinc-400 bg-white/[0.06] px-1.5 py-0.5 rounded-full">
                      {wheel.spoke}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* 查看更多 */}
        {hasMore && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-6 py-3 text-sm font-medium text-zinc-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] hover:bg-white/[0.1] active:scale-[0.97] transition-all"
            >
              查看全部 {wheelImagesRich.length} 款
              <ChevronDown className="size-4" />
            </button>
          </div>
        )}

        <p className="mt-8 text-center text-xs leading-relaxed text-zinc-500">
          * 图库用于展示轮毂视觉方向；具体品牌、尺寸、颜色、轮胎规格和适配边界以到店确认结果为准。
        </p>

        {/* 底部对比栏 */}
        {selectedWheels.length > 0 && (
          <div className="fixed bottom-0 inset-x-0 z-50 bg-zinc-900/95 backdrop-blur-md border-t border-white/[0.08] shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex items-center gap-4 overflow-x-auto">
                <div className="flex items-center gap-2 text-xs text-zinc-400 flex-shrink-0">
                  <Columns2 className="size-3.5" />
                  对比
                  <span className="text-zinc-600">
                    ({selectedWheels.length}/{MAX_COMPARE})
                  </span>
                </div>

                {selectedWheels.map((wheel) => (
                  <div
                    key={wheel.id}
                    className="flex-shrink-0 flex items-center gap-2 bg-white/[0.06] rounded-xl pl-2 pr-3 py-1.5"
                  >
                    <span className="text-xs font-medium text-white whitespace-nowrap">
                      {wheel.title}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleSelect(wheel.id)}
                      className="text-zinc-500 hover:text-zinc-300"
                    >
                      <X className="size-3" />
                    </button>
                  </div>
                ))}

                <div className="flex-1" />

                <button
                  type="button"
                  onClick={() => setSelectedIds([])}
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
