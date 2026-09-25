import Image from "next/image";
import Link from "next/link";
import { ImageOff } from "lucide-react";
import {
  formatWheelSizeSummary,
  WHEEL_CATALOG_PATH,
  type WheelCatalogItem,
} from "@/lib/wheel-catalog";

/** 卡片最多展示的颜色标签数（其余折叠为 +N）。 */
const VISIBLE_COLOR_COUNT = 2;

/**
 * 目录卡片：编号 · 工艺 · 尺寸摘要 · 颜色 → 链到详情页。
 * 缺图编号渲染中性占位块，不借用其它编号的图片。
 */
export function WheelCatalogCard({ item }: { item: WheelCatalogItem }) {
  const visibleColors = item.colors.slice(0, VISIBLE_COLOR_COUNT);
  const hiddenColorCount = item.colors.length - visibleColors.length;

  return (
    <Link
      href={`${WHEEL_CATALOG_PATH}/${item.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] transition-shadow duration-200 hover:shadow-[0_0_0_1px_oklch(1_0_0/0.16)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
    >
      <div className="relative aspect-square overflow-hidden bg-zinc-900">
        {item.cardImage !== null ? (
          <Image
            src={item.cardImage}
            alt={`${item.id} 轮毂产品图`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-1.5 px-3 text-center">
            <ImageOff className="size-5 text-zinc-600" aria-hidden />
            <span className="text-[11px] text-zinc-500">暂无产品图</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-3 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold tracking-wide text-white">
            {item.id}
          </h3>
          <span className="shrink-0 rounded-full bg-white/[0.06] px-1.5 py-0.5 text-[10px] text-zinc-300">
            {item.process}
          </span>
        </div>

        <p className="text-xs text-zinc-400">
          {formatWheelSizeSummary(item.sizes)}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-1 pt-1">
          {visibleColors.map((color) => (
            <span
              key={color}
              className="rounded-full bg-white/[0.06] px-1.5 py-0.5 text-[10px] text-zinc-400"
            >
              {color}
            </span>
          ))}
          {hiddenColorCount > 0 && (
            <span className="text-[10px] text-zinc-500">
              +{hiddenColorCount}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
