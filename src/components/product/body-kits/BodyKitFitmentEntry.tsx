"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Search,
  BadgeCheck,
  ClipboardCheck,
  ImageOff,
  Layers,
  CheckCircle2,
} from "lucide-react";
import {
  BODY_KIT_BRANDS,
  BODY_KIT_SUMMARY,
  type BodyKitBrand,
  type BodyKitModel,
} from "@/lib/body-kit-fitment";

const GROUP_LABEL: Record<BodyKitBrand["group"], string> = {
  dual: "双源覆盖（两家均有资料）",
  bskt_only: "图片资料独家覆盖",
  cmst_only: "产品规格独家覆盖",
};

function CoverageBadge({ model }: { model: BodyKitModel }) {
  const both = model.coverage.includes("image") && model.coverage.includes("product");
  if (both) {
    return (
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300">
        <CheckCircle2 className="size-3.5" aria-hidden="true" />
        两家均有覆盖
      </span>
    );
  }
  if (model.coverage.includes("product")) {
    return (
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
        <BadgeCheck className="size-3.5" aria-hidden="true" />
        产品适配（含规格）
      </span>
    );
  }
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-300">
      <ClipboardCheck className="size-3.5" aria-hidden="true" />
      图片覆盖（待门店复核）
    </span>
  );
}

function ModelDetail({ model }: { model: BodyKitModel }) {
  return (
    <div className="space-y-3 px-5 pb-5 md:px-6">
      {model.records.length > 0 && (
        <div className="space-y-2.5">
          <p className="text-xs font-medium tracking-[0.14em] text-zinc-500">产品适配记录（含规格）</p>
          {model.records.map((rec, i) => (
            <div
              key={`${rec.part}-${i}`}
              className="rounded-xl border border-white/[0.08] bg-zinc-950/70 p-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-200">
                  {rec.part}
                </span>
                <span className="inline-flex items-center rounded-full bg-zinc-800/60 px-3 py-1 text-xs text-zinc-400">
                  {rec.material}
                </span>
                {rec.year && (
                  <span className="inline-flex items-center rounded-full bg-zinc-800/60 px-3 py-1 text-xs text-zinc-400">
                    {rec.year}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-zinc-200">{rec.productName}</p>
              <p className="mt-1 text-xs leading-6 text-zinc-500">
                系列：{rec.series} ｜ 颜色：{rec.color}
              </p>
            </div>
          ))}
        </div>
      )}

      {model.imageParts.length > 0 && (
        <div className="rounded-xl border border-white/[0.08] bg-zinc-950/70 p-4">
          <p className="text-xs font-medium tracking-[0.14em] text-zinc-500">图片资料收录部件 / 视角</p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {[...new Set(model.imageParts)].map((part) => (
              <span
                key={part}
                className="inline-flex items-center rounded-full bg-zinc-800/60 px-3 py-1 text-xs text-zinc-300"
              >
                {part}
              </span>
            ))}
          </div>
          {model.images.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {model.images.slice(0, 6).map((src) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-900">
                  <Image src={src} alt={`${model.model} 包围参考图`} fill sizes="160px" className="object-cover" />
                </div>
              ))}
            </div>
          )}
          <p className="mt-3 flex items-center gap-1.5 text-[11px] text-zinc-500">
            <ImageOff className="size-3" aria-hidden="true" />
            效果图，非实拍；图片仅作风格与外观参考
          </p>
        </div>
      )}

      {model.note && (
        <p className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs leading-6 text-amber-200/90">
          {model.note}
        </p>
      )}
    </div>
  );
}

/**
 * S2 适配库核心（G3）：口径角标 + 品牌索引分组 + 车型折叠 + 顶部搜索 + 状态角标。
 * 双源车型带「两家均有覆盖」徽章；图片覆盖与产品适配分维度标注。
 */
export function BodyKitFitmentEntry() {
  const [query, setQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState<string>("全部");

  const allModels = useMemo(
    () => BODY_KIT_BRANDS.flatMap((b) => b.models.map((m) => ({ brand: b.brand, ...m }))),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allModels.filter((m) => {
      const matchesBrand = brandFilter === "全部" || m.brand === brandFilter;
      const haystack = `${m.model} ${m.brand} ${m.variants?.join(" ")}`.toLowerCase();
      const matchesQuery = q === "" || haystack.includes(q);
      return matchesBrand && matchesQuery;
    });
  }, [allModels, query, brandFilter]);

  const brandCounts = useMemo(() => {
    const map = new Map<string, number>();
    for (const m of allModels) {
      map.set(m.brand, (map.get(m.brand) ?? 0) + 1);
    }
    return map;
  }, [allModels]);

  return (
    <section
      id="body-kit-fitment"
      aria-labelledby="body-kit-fitment-title"
      className="scroll-mt-20 border-b border-white/[0.06] bg-zinc-950 py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-amber-400">适配速查</p>
          <h2 id="body-kit-fitment-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            我的车能不能装？先按车型查一遍
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            按品牌或车型名搜索；图片覆盖表示有风格与外观资料待门店复核，产品适配表示资料含材质、工艺、年款等规格。
            两家都有资料的车型带「两家均有覆盖」徽章。
          </p>
          <p className="mt-3 inline-flex rounded-full border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-400">
            {BODY_KIT_SUMMARY}
          </p>
        </div>

        {/* 搜索 */}
        <div className="mt-8">
          <label htmlFor="body-kit-search" className="sr-only">
            搜索品牌或车型名
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-zinc-500" aria-hidden="true" />
            <input
              id="body-kit-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="输入品牌 / 车型名，如：理想 L6、问界 M8、极氪 001、小米 YU7"
              className="min-h-12 w-full rounded-full border border-white/15 bg-zinc-950 pl-12 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300/40"
            />
          </div>
        </div>

        {/* 品牌索引 */}
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setBrandFilter("全部")}
            className={`inline-flex min-h-10 items-center rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 ${
              brandFilter === "全部"
                ? "border-amber-500 bg-amber-500 text-zinc-950"
                : "border-white/15 text-zinc-300 hover:border-white/30 hover:bg-white/[0.05]"
            }`}
          >
            全部 · {allModels.length}
          </button>
          {BODY_KIT_BRANDS.map((b) => (
            <button
              key={b.brand}
              type="button"
              onClick={() => setBrandFilter(b.brand)}
              className={`inline-flex min-h-10 items-center rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 ${
                brandFilter === b.brand
                  ? "border-amber-500 bg-amber-500 text-zinc-950"
                  : "border-white/15 text-zinc-300 hover:border-white/30 hover:bg-white/[0.05]"
              }`}
            >
              {b.brand} · {brandCounts.get(b.brand) ?? 0}
            </button>
          ))}
        </div>

        {/* 分组说明 */}
        <div className="mt-6 space-y-1.5">
          {(["dual", "bskt_only", "cmst_only"] as const).map((group) => (
            <p key={group} className="text-[11px] text-zinc-600">
              {GROUP_LABEL[group]}：
              {BODY_KIT_BRANDS.filter((b) => b.group === group).map((b) => b.brand).join(" / ")}
            </p>
          ))}
        </div>

        {/* 车型折叠列表 */}
        <div className="mt-6 space-y-3">
          {filtered.length === 0 && (
            <p className="rounded-2xl border border-white/10 bg-zinc-900 p-6 text-sm leading-7 text-zinc-300">
              没有检索到匹配车型。适配库未收录不代表不能装，把车型年款发到门店，以门店现场检查为准。
            </p>
          )}
          {filtered.map((model) => (
            <details
              key={model.model}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900 transition-colors group-open:border-amber-500/30"
            >
              <summary className="flex min-h-16 cursor-pointer list-none flex-wrap items-center gap-3 px-5 py-4 md:px-6">
                <div className="min-w-0 flex-1">
                  <p className="text-base font-semibold text-white">{model.model}</p>
                  {model.variants && (
                    <p className="mt-1 text-xs text-zinc-500">含原文变体：{model.variants.join("、")}</p>
                  )}
                </div>
                <CoverageBadge model={model} />
              </summary>
              <ModelDetail model={model} />
            </details>
          ))}
        </div>

        <p className="mt-8 flex items-center gap-2 text-xs leading-6 text-zinc-500">
          <Layers className="size-4 text-amber-400" aria-hidden="true" />
          适配信息以门店现场检查为准，不同批次与配置存在差异；未收录车型不在这里推断能否安装。
        </p>
      </div>
    </section>
  );
}
