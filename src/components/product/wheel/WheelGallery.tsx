"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Check, Columns2, X, ChevronDown } from "lucide-react";
import {
  wheelImagesRich,
  WHEEL_STYLE_FILTERS,
  WHEEL_SPOKE_FILTERS,
  WHEEL_COLOR_FILTERS,
  FEATURED_WHEEL_COUNT,
} from "@/lib/wheel-products";

const MAX_COMPARE = 3;

export function WheelGallery() {
  const [styleFilter, setStyleFilter] = useState<string>("all");
  const [spokeFilter, setSpokeFilter] = useState<string>("all");
  const [colorFilter, setColorFilter] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const filtered = useMemo(() => {
    let result = wheelImagesRich;

    if (styleFilter !== "all") {
      result = result.filter((w) => w.style === styleFilter);
    }
    if (spokeFilter !== "all") {
      result = result.filter((w) => w.spoke === spokeFilter);
    }
    if (colorFilter !== "all") {
      result = result.filter((w) => w.color === colorFilter);
    }

    return result;
  }, [styleFilter, spokeFilter, colorFilter]);

  const displayed = showAll ? filtered : filtered.slice(0, FEATURED_WHEEL_COUNT);
  const hasMore = filtered.length > FEATURED_WHEEL_COUNT && !showAll;

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
            先看风格方向，选中款式（最多 3 款）并排对比；具体尺寸和数据需到店确认。
          </p>
        </div>

        {/* 筛选栏 */}
        <div className="space-y-3 mb-8">
          {/* 风格 */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:px-0 sm:mx-0 sm:overflow-visible">
            <span className="text-xs text-zinc-500 flex-shrink-0 mr-1">风格</span>
            {WHEEL_STYLE_FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setStyleFilter(f.key)}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all active:scale-[0.97] ${
                  styleFilter === f.key
                    ? "bg-white text-zinc-900"
                    : "bg-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.1]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          {/* 结构 */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:px-0 sm:mx-0 sm:overflow-visible">
            <span className="text-xs text-zinc-500 flex-shrink-0 mr-1">结构</span>
            {WHEEL_SPOKE_FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setSpokeFilter(f.key)}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all active:scale-[0.97] ${
                  spokeFilter === f.key
                    ? "bg-white text-zinc-900"
                    : "bg-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.1]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          {/* 颜色 */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:px-0 sm:mx-0 sm:overflow-visible">
            <span className="text-xs text-zinc-500 flex-shrink-0 mr-1">颜色</span>
            {WHEEL_COLOR_FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setColorFilter(f.key)}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all active:scale-[0.97] ${
                  colorFilter === f.key
                    ? "bg-white text-zinc-900"
                    : "bg-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.1]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 无结果 */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            <p className="text-lg mb-1">没有匹配的轮毂</p>
            <p className="text-sm">试试调整筛选条件</p>
          </div>
        )}

        {/* 图库网格 — 桌面 4 列，手机双列 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
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
                      {wheel.styleLabel}
                    </span>
                    <span className="text-[10px] text-zinc-500 bg-white/[0.04] px-1.5 py-0.5 rounded-full">
                      {wheel.color}
                    </span>
                    <span className="text-[10px] text-zinc-500 bg-white/[0.04] px-1.5 py-0.5 rounded-full">
                      {wheel.process}
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
