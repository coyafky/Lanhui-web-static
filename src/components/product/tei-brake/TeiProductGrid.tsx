"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { TeiProduct, TeiSeriesMeta } from "@/lib/tei-brake";

type FilterKey = "all" | "front" | "rear";

const FILTERS: readonly { key: FilterKey; label: string }[] = [
  { key: "all", label: "全部" },
  { key: "front", label: "前轮" },
  { key: "rear", label: "后轮" },
];

function matchesFilter(p: TeiProduct, filter: FilterKey): boolean {
  if (filter === "all") return true;
  if (filter === "front") return p.axle === "前轮";
  return p.axle === "后轮" || p.axle === null;
}

/** 型号展示名微调:给 T665/T683/T691 这种多型号合并显示做提示 */
function compactDescription(p: TeiProduct): string {
  const parts: string[] = [];
  if (p.pistonCount) parts.push(`${p.pistonCount} 活塞`);
  if (p.construction) parts.push(p.construction);
  return parts.join(" · ");
}

/**
 * TEI 产品网格(可筛选)。
 * 客户端交互仅负责 前/后轮 过滤;数据全部来自静态 TEI_PRODUCTS。
 */
export function TeiProductGrid({
  products,
  series,
}: {
  products: readonly TeiProduct[];
  series: readonly TeiSeriesMeta[];
}) {
  const [filter, setFilter] = useState<FilterKey>("all");

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">产品线</h2>
          <p className="text-sm text-zinc-400 mt-1">
            共 {products.length} 款 · 支持前轮 / 后轮 / 前后通用
          </p>
        </div>

        {/* 前后轮过滤 */}
        <div className="inline-flex rounded-lg bg-zinc-900 p-1 border border-zinc-800 w-fit">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                filter === f.key
                  ? "bg-orange-500 text-white font-medium"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {series
        .map((s) => ({ meta: s, items: products.filter((p) => p.series === s.code) }))
        .filter(({ items }) => items.some((p) => matchesFilter(p, filter)))
        .map(({ meta, items }) => {
          const visible = items.filter((p) => matchesFilter(p, filter));
          return (
            <div key={meta.code} className="mb-12 last:mb-0 scroll-mt-28" id={`series-${meta.code}`}>
              <div className="flex items-baseline gap-3 mb-5">
                <h3 className="text-lg font-bold text-orange-400 tracking-widest">{meta.code}</h3>
                <div>
                  <p className="font-semibold">{meta.name}</p>
                  <p className="text-xs text-zinc-400 mt-0.5">{meta.tagline}</p>
                </div>
                <span className="ml-auto text-xs text-zinc-500">{visible.length} 款</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {visible.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/product/tei-brake/${p.slug}`}
                    className="group bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden transition-all hover:border-orange-500/50 hover:-translate-y-0.5"
                  >
                    <div className="relative aspect-square bg-zinc-800/60">
                      <Image
                        src={`/images/products/tei/${p.slug}.webp`}
                        alt={`TEI Racing ${p.model} 刹车卡钳`}
                        fill
                        sizes="(max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
                        className="object-contain p-2 transition-transform group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-sm truncate">{p.model}</span>
                        <span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">
                          {p.axle ?? "通用"}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed line-clamp-2">
                        {p.description}
                      </p>
                      <p className="text-[11px] text-zinc-500 mt-1.5">{compactDescription(p)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}
