"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, SearchX, ShieldCheck, AlertTriangle } from "lucide-react";
import {
  flooringFitmentEntries,
  flooringFitmentSuvBrands,
  flooringFitmentMpvBrands,
  FLOORING_FITMENT_SHEET_DATE,
  FLOORING_FITMENT_MODEL_COUNT,
  FLOORING_FITMENT_BRAND_COUNT,
  FLOORING_SUV_MODEL_COUNT,
  FLOORING_MPV_MODEL_COUNT,
  type FlooringFitmentEntry,
} from "@/lib/flooring-products";

type FitmentStatus = "confirmed" | "needs-review";

const STATUS_META: Record<
  FitmentStatus,
  { label: string; className: string; Icon: typeof ShieldCheck }
> = {
  confirmed: {
    label: "可装（价格单确认）",
    className: "bg-emerald-500/10 text-emerald-300 ring-emerald-400/20",
    Icon: ShieldCheck,
  },
  "needs-review": {
    label: "待门店复核",
    className: "bg-amber-500/10 text-amber-300 ring-amber-400/20",
    Icon: AlertTriangle,
  },
};

type BrandGroup = {
  brand: string;
  entries: FlooringFitmentEntry[];
};

function groupByBrand(
  entries: FlooringFitmentEntry[],
  brandOrder: readonly string[],
): BrandGroup[] {
  const map = new Map<string, FlooringFitmentEntry[]>();
  for (const entry of entries) {
    const list = map.get(entry.brand) ?? [];
    list.push(entry);
    map.set(entry.brand, list);
  }
  const ordered: BrandGroup[] = [];
  for (const brand of brandOrder) {
    const list = map.get(brand);
    if (list) ordered.push({ brand, entries: list });
    map.delete(brand);
  }
  for (const [brand, list] of map) {
    ordered.push({ brand, entries: list });
  }
  return ordered;
}

function entryMatches(entry: FlooringFitmentEntry, q: string): boolean {
  const haystack = [
    entry.brand,
    entry.manufacturer,
    entry.model,
    entry.composition,
    entry.optionalLogic,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}

function FitmentGroup({
  title,
  subtitle,
  entries,
  brandOrder,
  open,
}: {
  title: string;
  subtitle: string;
  entries: FlooringFitmentEntry[];
  brandOrder: readonly string[];
  open: boolean;
}) {
  const groups = useMemo(
    () => groupByBrand(entries, brandOrder),
    [entries, brandOrder],
  );

  if (groups.length === 0) return null;

  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-baseline gap-3">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span className="text-sm text-zinc-400">{subtitle}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {groups.map((g) => (
          <span
            key={g.brand}
            className="inline-flex rounded-full bg-white/[0.05] px-3 py-1 text-xs text-zinc-300 ring-1 ring-white/[0.08]"
          >
            {g.brand} · {g.entries.length} 车系
          </span>
        ))}
      </div>

      <div className="mt-4 space-y-3">
        {groups.map((g) => (
          <details
            key={g.brand}
            open={open}
            className="group rounded-xl border border-white/[0.08] bg-zinc-900/60"
          >
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-5 py-3">
              <span className="font-semibold text-white">{g.brand}</span>
              <span className="text-xs text-zinc-400">
                {g.entries.length} 车系
              </span>
            </summary>
            <div className="space-y-2 px-5 pb-5">
              {g.entries.map((entry) => {
                const meta =
                  STATUS_META[entry.status as FitmentStatus] ??
                  STATUS_META["confirmed"];
                const { Icon } = meta;
                return (
                  <div
                    key={entry.model}
                    className="rounded-lg border border-white/[0.06] bg-zinc-950/60 p-4"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-white">
                        {entry.model}
                      </span>
                      <span
                        data-status={entry.status}
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs ring-1 ${meta.className}`}
                      >
                        <Icon className="size-3" aria-hidden="true" />
                        {meta.label}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-zinc-200">
                      配置构成：{entry.composition}
                    </p>
                    {entry.optionalLogic && (
                      <p className="mt-1 text-sm leading-7 text-amber-300/90">
                        可选配：{entry.optionalLogic}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

export function FlooringFitmentBrowser() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const filtered = useMemo(
    () =>
      q
        ? flooringFitmentEntries.filter((e) => entryMatches(e, q))
        : flooringFitmentEntries,
    [q],
  );

  const suvEntries = useMemo(
    () => filtered.filter((e) => e.bodyType === "SUV"),
    [filtered],
  );
  const mpvEntries = useMemo(
    () => filtered.filter((e) => e.bodyType === "MPV"),
    [filtered],
  );

  const totalMatches = filtered.length;

  return (
    <section
      id="flooring-fitment"
      className="scroll-mt-20 border-b border-white/[0.06] bg-zinc-950 py-16 text-white sm:py-20"
      aria-labelledby="flooring-fitment-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-amber-400/20">
            价格单 {FLOORING_FITMENT_SHEET_DATE} · {FLOORING_FITMENT_MODEL_COUNT}{" "}
            个车系（SUV {FLOORING_SUV_MODEL_COUNT} + MPV{" "}
            {FLOORING_MPV_MODEL_COUNT}）· {FLOORING_FITMENT_BRAND_COUNT} 个品牌
          </p>
          <h2
            id="flooring-fitment-title"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            适配速查：我的车型能不能装地板
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            按 SUV 与 MPV 分组收录 38 个车系，每行列出车型、配置构成与可选配逻辑；输入品牌或车型名直接过滤。
          </p>
        </div>

        <div className="relative mt-8 max-w-xl">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-zinc-500"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索品牌 / 车型，如：理想 L9、问界 M9、GL8、塞纳"
            aria-label="搜索品牌或车型"
            className="min-h-12 w-full rounded-full border border-white/15 bg-[#0b0c10] pl-12 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-amber-400/60 focus:outline-none focus:ring-2 focus:ring-amber-300/30"
          />
        </div>

        {q && (
          <p className="mt-4 text-sm text-zinc-400">
            共 {totalMatches} 条车系匹配「{query.trim()}」
          </p>
        )}

        {filtered.length === 0 ? (
          <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0b0c10] px-5 py-6 text-zinc-400">
            <SearchX className="size-5 shrink-0" aria-hidden="true" />
            适配表未收录该车型，不代表不能安装——以门店现场检查为准，可电话沟通年款与配置。
          </div>
        ) : (
          <>
            <FitmentGroup
              title="SUV 组"
              subtitle={`${suvEntries.length} 个车系`}
              entries={suvEntries}
              brandOrder={flooringFitmentSuvBrands}
              open={Boolean(q)}
            />
            <FitmentGroup
              title="MPV 组"
              subtitle={`${mpvEntries.length} 个车系`}
              entries={mpvEntries}
              brandOrder={flooringFitmentMpvBrands}
              open={Boolean(q)}
            />
          </>
        )}

        <div className="mt-10 space-y-3 rounded-2xl border border-amber-400/[0.15] bg-amber-400/[0.04] p-5">
          <p className="text-sm leading-7 text-zinc-300">
            全车方案不含前排脚垫、不含税、不含运费；前排可搭配{" "}
            <Link
              href="/product/floor-mats"
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
            >
              360 软包脚垫
            </Link>{" "}
            组合使用。
          </p>
          <p className="text-xs leading-6 text-zinc-500">
            配置构成与可选配逻辑按价格单原文呈现，金额到店询价；适配信息以门店现场检查为准，不同批次与配置存在差异。
          </p>
        </div>
      </div>
    </section>
  );
}
