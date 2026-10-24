"use client";

/**
 * VehicleTopicMap — 车型专题业务地图（violet 主题）
 *
 * PRD v3 §4.3.3。视觉差异化（与 Film/LightMod 完全不同）：
 * - 背景: radial-gradient 模拟紫色辉光
 * - 卡片: 11 品牌色块矩阵 + 3 重点品牌 (wenjie/xiaomi/zeekr) 放大显示
 * - Hover: 色块放大 + 第一人称文案浮现 ("我是 [品牌] 车主")
 * - 视角：车主第一人称 (与 Film/LightMod 的"项目"视角对照)
 * - 文案: "我是 [品牌] 车主" / 实际车型
 *
 * "use client" 因为需要 useState 管理 hover 状态
 */

import { useState } from "react";
import Link from "next/link";
import type { VehicleBrandRoute, AccentColor } from "@/lib/product-routes";

type Props = {
  brands: readonly VehicleBrandRoute[];
};

// 11 品牌色块的 hover 边框 / 文字 / 背景色
const ACCENT_BG: Record<AccentColor, string> = {
  cyan: "bg-cyan-500",
  orange: "bg-orange-500",
  amber: "bg-amber-500",
  emerald: "bg-emerald-500",
  violet: "bg-violet-500",
  pink: "bg-pink-500",
  blue: "bg-blue-500",
  teal: "bg-teal-500",
  red: "bg-red-500",
  sky: "bg-sky-500",
};

const ACCENT_BORDER: Record<AccentColor, string> = {
  cyan: "border-cyan-400",
  orange: "border-orange-400",
  amber: "border-amber-400",
  emerald: "border-emerald-400",
  violet: "border-violet-400",
  pink: "border-pink-400",
  blue: "border-blue-400",
  teal: "border-teal-400",
  red: "border-red-400",
  sky: "border-sky-400",
};

const ACCENT_TEXT: Record<AccentColor, string> = {
  cyan: "text-cyan-300",
  orange: "text-orange-300",
  amber: "text-amber-300",
  emerald: "text-emerald-300",
  violet: "text-violet-300",
  pink: "text-pink-300",
  blue: "text-blue-300",
  teal: "text-teal-300",
  red: "text-red-300",
  sky: "text-sky-300",
};

// 3 重点品牌 — 放大显示
const FEATURED_SLUGS: readonly string[] = ["wenjie", "xiaomi", "zeekr"];

export function VehicleTopicMap({ brands }: Props) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [showAllBrands, setShowAllBrands] = useState(false);

  const featured = brands.filter((b) => FEATURED_SLUGS.includes(b.brandSlug));
  const others = brands.filter((b) => !FEATURED_SLUGS.includes(b.brandSlug));

  return (
    <section
      aria-labelledby="topic-map-title"
      className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/30"
    >
      <div className="p-6 md:p-8">
        <div className="mb-6">
          <p className="mb-2 text-xs font-medium tracking-[0.18em] text-orange-400">
            VEHICLE TOPICS · 车型专题
          </p>
          <h2
            id="topic-map-title"
            className="text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            按品牌找到适合你的车型方案
          </h2>
          <p className="mt-2 text-sm text-zinc-300 md:text-base">
            查看 {brands.length} 个品牌入口，按车型与年款了解可选项目。
          </p>
        </div>

        {/* 3 重点品牌 (大尺寸) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4">
          {featured.map((brand) => (
            <BrandCard
              key={brand.brandSlug}
              brand={brand}
              isHovered={hoveredSlug === brand.brandSlug}
              isFeatured
              onHover={setHoveredSlug}
            />
          ))}
        </div>

        {/* 8 普通品牌 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {(showAllBrands ? others : others.slice(0, 8)).map((brand) => (
            <BrandCard
              key={brand.brandSlug}
              brand={brand}
              isHovered={hoveredSlug === brand.brandSlug}
              isFeatured={false}
              onHover={setHoveredSlug}
            />
          ))}
        </div>

        {others.length > 8 && (
          <button
            type="button"
            aria-expanded={showAllBrands}
            onClick={() => setShowAllBrands((current) => !current)}
            className="mt-5 flex min-h-12 w-full items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-orange-400/40 hover:bg-orange-400/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
          >
            {showAllBrands ? "收起品牌列表" : `查看全部 ${brands.length} 个品牌`}
          </button>
        )}
      </div>
    </section>
  );
}

function BrandCard({
  brand,
  isHovered,
  isFeatured,
  onHover,
}: {
  brand: VehicleBrandRoute;
  isHovered: boolean;
  isFeatured: boolean;
  onHover: (slug: string | null) => void;
}) {
  const dotClass = ACCENT_BG[brand.accentColor];
  const borderClass = isHovered
    ? ACCENT_BORDER[brand.accentColor]
    : "border-zinc-800";
  const textClass = isHovered ? ACCENT_TEXT[brand.accentColor] : "text-zinc-300";

  // featured 用 12px padding + 6px text；其他用 8px padding + 4px text
  const padding = isFeatured ? "p-4 md:p-5" : "p-3 md:p-4";
  const titleSize = isFeatured ? "text-base md:text-lg" : "text-sm";
  const dotSize = isFeatured ? "w-2.5 h-2.5" : "w-2 h-2";

  return (
    <Link
      href={brand.canonicalPath}
      onMouseEnter={() => onHover(brand.brandSlug)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(brand.brandSlug)}
      onBlur={() => onHover(null)}
      className={`group relative block rounded-xl border ${borderClass} bg-zinc-950/60 hover:bg-zinc-900 ${padding} transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400`}
      aria-label={`${brand.brandName} 车型方案 ${brand.status === "live" ? "已上线" : "整理中"}`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`flex-shrink-0 ${dotSize} rounded-full ${dotClass}`}
          aria-hidden="true"
        />
        <span className={`${titleSize} font-medium ${textClass} truncate`}>
          {brand.brandName}
        </span>
      </div>
      {brand.modelSlugs.length > 0 ? (
        <p
          className={`mt-1 truncate ${isFeatured ? "text-xs" : "text-[10px]"} text-zinc-500`}
        >
          {brand.modelSlugs.map((m) => m.toUpperCase()).join(" · ")}
        </p>
      ) : (
        <p
          className={`mt-1 ${isFeatured ? "text-xs" : "text-[10px]"} text-zinc-600`}
        >
          {brand.status === "planned" ? "方案整理中" : "品牌综合方案"}
        </p>
      )}
    </Link>
  );
}
