"use client";

import { useMemo, useState } from "react";
import { Search, BadgeCheck, AlertTriangle, ClipboardCheck, Hammer, CalendarClock } from "lucide-react";
import {
  carTvFitmentEntries,
  carTvFitmentBrands,
  CAR_TV_FITMENT_SUMMARY,
  type CarTvFitStatus,
} from "@/lib/car-tv-fitment";

const STATUS_STYLE: Record<CarTvFitStatus, { className: string; icon: typeof BadgeCheck }> = {
  "可装（适装表确认）": {
    className: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    icon: BadgeCheck,
  },
  "有条件可装（原文条件）": {
    className: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    icon: AlertTriangle,
  },
  "待门店复核": {
    className: "border-sky-500/30 bg-sky-500/10 text-sky-300",
    icon: ClipboardCheck,
  },
  "开发中": {
    className: "border-zinc-600 bg-zinc-800 text-zinc-300",
    icon: Hammer,
  },
  "年份待门店确认": {
    className: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    icon: CalendarClock,
  },
};

const SERIES_FILTERS = ["全部系列", "吸顶电视", "后排娱乐屏", "流媒体后视镜"] as const;

export function CarTvFitmentEntry() {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState<string>("全部");
  const [series, setSeries] = useState<(typeof SERIES_FILTERS)[number]>("全部系列");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return carTvFitmentEntries.filter((entry) => {
      const matchesBrand = brand === "全部" || entry.brand === brand;
      const matchesSeries = series === "全部系列" || entry.series === series;
      const haystack = `${entry.carModel} ${entry.brand} ${entry.fit} ${entry.sunroof} ${entry.control} ${entry.series}`.toLowerCase();
      const matchesQuery = q === "" || haystack.includes(q);
      return matchesBrand && matchesSeries && matchesQuery;
    });
  }, [query, brand, series]);

  const brandCounts = useMemo(() => {
    const map = new Map<string, number>();
    for (const entry of carTvFitmentEntries) {
      map.set(entry.brand, (map.get(entry.brand) ?? 0) + 1);
    }
    return map;
  }, []);

  return (
    <section
      id="car-tv-fitment"
      aria-labelledby="car-tv-fitment-title"
      className="scroll-mt-20 border-b border-white/[0.06] bg-[#0b0c10] py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-orange-400">适配速查</p>
          <h2 id="car-tv-fitment-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            我的车型能不能装？27 个车型条目先查一遍
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            按品牌、车型名搜索；每条都保留适装条件原文，不可装的配置也原样列出，不会把条件款说成全系可装。
          </p>
          <p className="mt-3 inline-flex rounded-full border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-400">
            {CAR_TV_FITMENT_SUMMARY}
          </p>
        </div>

        {/* 搜索框 */}
        <div className="mt-8">
          <label htmlFor="car-tv-fitment-search" className="sr-only">
            搜索品牌或车型名
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-zinc-500" aria-hidden="true" />
            <input
              id="car-tv-fitment-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="输入品牌 / 车型名，如：赛那、腾势 D9、问界 M8、比亚迪夏"
              className="min-h-12 w-full rounded-full border border-white/15 bg-zinc-950 pl-12 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300/40"
            />
          </div>
        </div>

        {/* 品牌索引 */}
        <div className="mt-5 flex flex-wrap gap-2">
          {["全部", ...carTvFitmentBrands].map((b) => {
            const selected = brand === b;
            const count = b === "全部" ? carTvFitmentEntries.length : (brandCounts.get(b) ?? 0);
            return (
              <button
                key={b}
                type="button"
                onClick={() => setBrand(b)}
                className={`inline-flex min-h-10 items-center rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 ${
                  selected
                    ? "border-orange-500 bg-orange-500 text-zinc-950"
                    : "border-white/15 text-zinc-300 hover:border-white/30 hover:bg-white/[0.05]"
                }`}
              >
                {b} · {count}
              </button>
            );
          })}
        </div>

        {/* 系列筛选 */}
        <div className="mt-3 flex flex-wrap gap-2">
          {SERIES_FILTERS.map((s) => {
            const selected = series === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setSeries(s)}
                className={`inline-flex min-h-9 items-center rounded-full border px-3 py-1 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 ${
                  selected
                    ? "border-orange-500/60 bg-orange-500/15 text-orange-200"
                    : "border-white/10 text-zinc-400 hover:border-white/25 hover:bg-white/[0.05]"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>

        {/* 条目折叠列表 */}
        <div className="mt-8 space-y-3">
          {filtered.length === 0 && (
            <p className="rounded-2xl border border-white/10 bg-zinc-900 p-6 text-sm leading-7 text-zinc-300">
              没有检索到匹配条目。适装库未收录的车型不在这里推断能否安装，把车型年款发到门店，以门店现场检查为准。
            </p>
          )}
          {filtered.map((entry) => {
            const status = STATUS_STYLE[entry.status];
            const StatusIcon = status.icon;
            return (
              <details
                key={entry.carModel}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900 transition-colors group-open:border-orange-500/30"
              >
                <summary className="flex min-h-16 cursor-pointer list-none flex-wrap items-center gap-3 px-5 py-4 md:px-6">
                  <div className="min-w-0 flex-1">
                    <p className="text-base font-semibold text-white">{entry.carModel}</p>
                    <p className="mt-1 text-xs text-zinc-400">
                      {entry.series} · {entry.sunroof} · {entry.control}
                    </p>
                  </div>
                  <span
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${status.className}`}
                  >
                    <StatusIcon className="size-3.5" aria-hidden="true" />
                    {entry.status}
                  </span>
                </summary>
                <div className="space-y-3 px-5 pb-5 md:px-6">
                  <div className="rounded-xl border border-white/[0.08] bg-zinc-950/70 p-4">
                    <p className="text-xs font-medium tracking-[0.14em] text-zinc-500">适装条件原文</p>
                    <p className="mt-2 text-sm leading-7 text-zinc-200">{entry.fit}</p>
                  </div>
                  <dl className="grid gap-3 text-sm sm:grid-cols-2">
                    <div className="rounded-xl border border-white/[0.08] bg-zinc-950/70 p-4">
                      <dt className="text-xs text-zinc-500">天窗 / 结构形式</dt>
                      <dd className="mt-1.5 text-zinc-200">{entry.sunroof}</dd>
                    </div>
                    <div className="rounded-xl border border-white/[0.08] bg-zinc-950/70 p-4">
                      <dt className="text-xs text-zinc-500">控制方式（颜色以店内对表为准）</dt>
                      <dd className="mt-1.5 text-zinc-200">{entry.control}</dd>
                    </div>
                  </dl>
                </div>
              </details>
            );
          })}
        </div>

        <p className="mt-8 text-xs leading-6 text-zinc-500">
          适装信息以门店现场检查为准，不同批次与配置存在差异；表内未收录的车型不代表不能装，需到店按实车结构评估。
        </p>
      </div>
    </section>
  );
}
