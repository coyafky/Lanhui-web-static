"use client";

import { useMemo, useState } from "react";
import { Search, ShieldCheck, SearchX } from "lucide-react";
import {
  SKID_PLATE_FITMENT,
  SKID_PLATE_BRAND_COUNT,
  SKID_PLATE_MODEL_COUNT,
  SKID_PLATE_SCHEME_COUNT,
  type SkidPlateBrand,
  type SkidPlateModel,
  type SkidPlateScheme,
  type SkidPlateSchemeStatus,
} from "@/lib/skid-plate-fitment";

/** 新能源高价值组（GEO 置顶）：按适配库实际收录展示，未收录写「以门店现场检查为准」 */
const HVC_BRANDS = [
  "理想",
  "问界",
  "比亚迪",
  "极氪",
  "小米",
  "蔚来",
  "小鹏",
  "岚图",
  "腾势",
  "智己",
  "深蓝",
  "零跑",
  "阿维塔",
  "方程豹",
  "仰望",
  "智界",
  "享界",
  "尊界",
] as const;

const STATUS_META: Record<SkidPlateSchemeStatus, { label: string; className: string }> = {
  confirmed: {
    label: "可装（适配库确认）",
    className: "bg-emerald-500/10 text-emerald-300 ring-emerald-400/20",
  },
  conditional: {
    label: "按年款/动力适配（原文条件）",
    className: "bg-sky-500/10 text-sky-300 ring-sky-400/20",
  },
  "year-pending": {
    label: "年份待门店确认",
    className: "bg-amber-500/10 text-amber-300 ring-amber-400/20",
  },
  "pending-check": {
    label: "待门店复核",
    className: "bg-zinc-500/10 text-zinc-300 ring-zinc-400/20",
  },
  "in-development": {
    label: "开发中",
    className: "bg-violet-500/10 text-violet-300 ring-violet-400/20",
  },
};

function schemeText(scheme: SkidPlateScheme): string {
  return [
    scheme.partsCount ?? "",
    ...scheme.years,
    ...scheme.power,
    ...scheme.config,
    ...scheme.displacement,
    ...scheme.materials.flatMap((m) => [...m.material, ...m.positions]),
    ...scheme.notes,
  ]
    .join(" ")
    .toLowerCase();
}

function matchesBrand(brand: SkidPlateBrand, q: string): boolean {
  if (brand.brand.toLowerCase().includes(q)) return true;
  return brand.models.some(
    (m) =>
      m.model.toLowerCase().includes(q) ||
      m.schemes.some((s) => schemeText(s).includes(q)),
  );
}

function filterBrand(brand: SkidPlateBrand, q: string): SkidPlateBrand {
  const models = brand.models
    .filter(
      (m) =>
        m.model.toLowerCase().includes(q) ||
        m.schemes.some((s) => schemeText(s).includes(q)),
    )
    .map((m) => ({
      ...m,
      schemes: m.schemes.filter(
        (s) => m.model.toLowerCase().includes(q) || schemeText(s).includes(q),
      ),
    }));
  return { ...brand, models };
}

/** ASCII/数字品牌排前，中文按拼音序 */
function brandCmp(a: SkidPlateBrand, b: SkidPlateBrand): number {
  const aAscii = /^[A-Za-z0-9]/.test(a.brand);
  const bAscii = /^[A-Za-z0-9]/.test(b.brand);
  if (aAscii !== bAscii) return aAscii ? -1 : 1;
  return a.brand.localeCompare(b.brand, "zh-Hans-CN-u-co-pinyin");
}

function schemeCount(brand: SkidPlateBrand): number {
  return brand.models.reduce((n, m) => n + m.schemes.length, 0);
}

function SchemeRow({ scheme, index }: { scheme: SkidPlateScheme; index: number }) {
  const meta = STATUS_META[scheme.status];
  return (
    <div className="rounded-lg border border-white/[0.07] bg-zinc-950/60 p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-semibold text-white">方案{index + 1}</span>
        <span
          data-status={scheme.status}
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs ring-1 ${meta.className}`}
        >
          {meta.label}
        </span>
      </div>
      <dl className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
        {scheme.partsCount && (
          <div className="flex gap-2">
            <dt className="shrink-0 text-zinc-500">套件构成</dt>
            <dd className="text-zinc-200">{scheme.partsCount}</dd>
          </div>
        )}
        {scheme.years.length > 0 && (
          <div className="flex gap-2">
            <dt className="shrink-0 text-zinc-500">年款</dt>
            <dd className="text-zinc-200">{scheme.years.join("、")}</dd>
          </div>
        )}
        {scheme.power.length > 0 && (
          <div className="flex gap-2">
            <dt className="shrink-0 text-zinc-500">动力</dt>
            <dd className="text-zinc-200">{scheme.power.join("、")}</dd>
          </div>
        )}
        {scheme.config.length > 0 && (
          <div className="flex gap-2">
            <dt className="shrink-0 text-zinc-500">配置</dt>
            <dd className="text-zinc-200">{scheme.config.join("、")}</dd>
          </div>
        )}
        {scheme.displacement.length > 0 && (
          <div className="flex gap-2">
            <dt className="shrink-0 text-zinc-500">排量/续航</dt>
            <dd className="text-zinc-200">{scheme.displacement.join("、")}</dd>
          </div>
        )}
        {scheme.materials.length > 0 && (
          <div className="flex gap-2 sm:col-span-2">
            <dt className="shrink-0 text-zinc-500">材质/部位</dt>
            <dd className="text-zinc-200">
              {scheme.materials
                .map((m) =>
                  [m.material.join("/"), m.positions.join("、")]
                    .filter(Boolean)
                    .join(" · "),
                )
                .join("；")}
            </dd>
          </div>
        )}
        {scheme.notes.length > 0 && (
          <div className="flex gap-2 sm:col-span-2">
            <dt className="shrink-0 text-zinc-500">备注</dt>
            <dd className="text-zinc-300">{scheme.notes.join("；")}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}

type ModelBlockProps = {
  brandName: string;
  model: SkidPlateModel;
  forceOpen: boolean;
  openModels: Set<string>;
  onToggleModel: (key: string) => void;
};

function ModelBlock({ brandName, model, forceOpen, openModels, onToggleModel }: ModelBlockProps) {
  const key = `${brandName}::${model.model}`;
  const expanded = forceOpen || openModels.has(key);
  return (
    <details
      open={expanded}
      onToggle={() => onToggleModel(key)}
      className="rounded-lg border border-white/[0.06] bg-zinc-950/50"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3 text-sm">
        <span className="text-zinc-100">{model.model}</span>
        <span className="text-xs text-zinc-500">{model.schemes.length} 个方案</span>
      </summary>
      {expanded && (
        <div className="space-y-2 px-4 pb-4 pt-1">
          {model.schemes.map((s, i) => (
            <SchemeRow key={i} scheme={s} index={i} />
          ))}
        </div>
      )}
    </details>
  );
}

type BrandBlockProps = {
  brand: SkidPlateBrand;
  forceOpen: boolean;
  openBrands: Set<string>;
  openModels: Set<string>;
  onToggleBrand: (name: string) => void;
  onToggleModel: (key: string) => void;
};

function BrandBlock({
  brand,
  forceOpen,
  openBrands,
  openModels,
  onToggleBrand,
  onToggleModel,
}: BrandBlockProps) {
  const expanded = forceOpen || openBrands.has(brand.brand);
  return (
    <details
      open={expanded}
      onToggle={() => onToggleBrand(brand.brand)}
      className="group rounded-xl border border-white/[0.08] bg-zinc-900/60"
    >
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-5 py-3">
        <span className="font-semibold text-white">{brand.brand}</span>
        <span className="text-xs text-zinc-400">
          {brand.models.length} 车型 · {schemeCount(brand)} 方案
        </span>
      </summary>
      {expanded && (
        <div className="space-y-2 px-5 pb-5">
          {brand.models.map((m) => (
            <ModelBlock
              key={m.model}
              brandName={brand.brand}
              model={m}
              forceOpen={forceOpen}
              openModels={openModels}
              onToggleModel={onToggleModel}
            />
          ))}
        </div>
      )}
    </details>
  );
}

export function SkidPlateFitmentEntry() {
  const [query, setQuery] = useState("");
  const [openBrands, setOpenBrands] = useState<Set<string>>(new Set());
  const [openModels, setOpenModels] = useState<Set<string>>(new Set());
  const q = query.trim().toLowerCase();

  const sorted = useMemo(() => [...SKID_PLATE_FITMENT].sort(brandCmp), []);

  const visible = useMemo(() => {
    if (!q) return sorted;
    return sorted.filter((b) => matchesBrand(b, q)).map((b) => filterBrand(b, q));
  }, [q, sorted]);

  const hvcPresent = useMemo(() => {
    const map = new Map(SKID_PLATE_FITMENT.map((b) => [b.brand, b]));
    return HVC_BRANDS.map((name) => ({ name, brand: map.get(name) ?? null }));
  }, []);

  const totalMatches = visible.reduce(
    (n, b) => n + b.models.reduce((x, m) => x + m.schemes.length, 0),
    0,
  );

  const toggleBrand = (name: string) => {
    setOpenBrands((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const toggleModel = (key: string) => {
    setOpenModels((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <section
      id="skid-plate-fitment"
      className="scroll-mt-20 border-b border-white/[0.06] bg-zinc-950 py-16 text-white sm:py-20"
      aria-labelledby="skid-plate-fitment-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium text-orange-300 ring-1 ring-orange-400/20">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            三供应商数据合并（清洗后）· {SKID_PLATE_BRAND_COUNT} 品牌 /{" "}
            {SKID_PLATE_MODEL_COUNT} 车型 / {SKID_PLATE_SCHEME_COUNT} 方案
          </p>
          <h2
            id="skid-plate-fitment-title"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            适配速查：我的车型能不能装底盘护板
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            输入品牌或车型名直接过滤；多方案车型按方案罗列年款、动力与材质差异，不暗示可任意互换。
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
            placeholder="搜索品牌 / 车型，如：理想 L9、问界 M7、比亚迪汉"
            aria-label="搜索品牌或车型"
            className="min-h-12 w-full rounded-full border border-white/15 bg-[#0b0c10] pl-12 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-orange-400/60 focus:outline-none focus:ring-2 focus:ring-orange-300/30"
          />
        </div>

        {!q && (
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-white">新能源高价值组</h3>
            <p className="mt-1 text-sm text-zinc-400">
              按适配库实际收录展示；未收录的车型以门店现场检查为准。
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {hvcPresent.map(({ name, brand }) =>
                brand ? (
                  <BrandBlock
                    key={name}
                    brand={brand}
                    forceOpen={false}
                    openBrands={openBrands}
                    openModels={openModels}
                    onToggleBrand={toggleBrand}
                    onToggleModel={toggleModel}
                  />
                ) : (
                  <div
                    key={name}
                    className="rounded-xl border border-dashed border-white/15 bg-[#0b0c10] px-4 py-3 text-sm text-zinc-500"
                  >
                    {name}：以门店现场检查为准
                  </div>
                ),
              )}
            </div>
          </div>
        )}

        <div className="mt-10">
          {q && (
            <p className="mb-4 text-sm text-zinc-400">
              共 {visible.length} 个品牌、{totalMatches} 条方案匹配「{query.trim()}」
            </p>
          )}
          {visible.length === 0 ? (
            <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0b0c10] px-5 py-6 text-zinc-400">
              <SearchX className="size-5 shrink-0" aria-hidden="true" />
              适配库未收录该车型，不代表不能安装——以门店现场检查为准，可电话沟通年款与配置。
            </div>
          ) : (
            <div className="space-y-3">
              {!q && (
                <h3 className="pt-2 text-lg font-semibold text-white">全量品牌索引（{SKID_PLATE_BRAND_COUNT}）</h3>
              )}
              {visible.map((brand) => (
                <BrandBlock
                  key={brand.brand}
                  brand={brand}
                  forceOpen={Boolean(q)}
                  openBrands={openBrands}
                  openModels={openModels}
                  onToggleBrand={toggleBrand}
                  onToggleModel={toggleModel}
                />
              ))}
            </div>
          )}
        </div>

        <p className="mt-8 text-xs leading-6 text-zinc-500">
          套件构成、年款、动力、配置、排量续航、材质与防护部位均为适配库原文，不换算不推断；适配信息以门店现场检查为准，不同批次与配置存在差异。
        </p>
      </div>
    </section>
  );
}
