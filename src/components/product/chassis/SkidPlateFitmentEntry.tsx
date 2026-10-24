"use client";

import { useMemo, useState } from "react";
import { ChevronRight, Search, SearchX } from "lucide-react";
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

/** 常见新能源品牌排在品牌树前列，其余品牌按名称排序。 */
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

const INITIAL_BRAND_COUNT = HVC_BRANDS.length;

/** 完整状态文案（数据来源口径，保留原文措辞） */
const STATUS_META: Record<SkidPlateSchemeStatus, { label: string; short: string; className: string }> = {
  confirmed: {
    label: "可装（适配库确认）",
    short: "可装",
    className: "bg-emerald-500/10 text-emerald-300 ring-emerald-400/20",
  },
  conditional: {
    label: "按年款/动力适配（原文条件）",
    short: "按年款/动力",
    className: "bg-sky-500/10 text-sky-300 ring-sky-400/20",
  },
  "year-pending": {
    label: "年份待门店确认",
    short: "年份待确认",
    className: "bg-amber-500/10 text-amber-300 ring-amber-400/20",
  },
  "pending-check": {
    label: "待门店复核",
    short: "待复核",
    className: "bg-zinc-500/10 text-zinc-300 ring-zinc-400/20",
  },
  "in-development": {
    label: "开发中",
    short: "开发中",
    className: "bg-violet-500/10 text-violet-300 ring-violet-400/20",
  },
};

function matchesTokens(text: string, tokens: readonly string[]): boolean {
  return tokens.every((token) => text.includes(token));
}

function filterBrand(brand: SkidPlateBrand, tokens: readonly string[]): SkidPlateBrand | null {
  const brandText = brand.brand.toLowerCase();
  if (matchesTokens(brandText, tokens)) return brand;

  const models = brand.models.filter((model) => {
    const modelText = `${brandText} ${model.model.toLowerCase()}`;
    return matchesTokens(modelText, tokens);
  });

  return models.length > 0 ? { ...brand, models } : null;
}

/** 常见新能源品牌优先，其余品牌按拼音序排列。 */
function brandCmp(a: SkidPlateBrand, b: SkidPlateBrand): number {
  const aPriority = HVC_BRANDS.findIndex((name) => name === a.brand);
  const bPriority = HVC_BRANDS.findIndex((name) => name === b.brand);
  if (aPriority !== bPriority) {
    if (aPriority < 0) return 1;
    if (bPriority < 0) return -1;
    return aPriority - bPriority;
  }
  const aAscii = /^[A-Za-z0-9]/.test(a.brand);
  const bAscii = /^[A-Za-z0-9]/.test(b.brand);
  if (aAscii !== bAscii) return aAscii ? -1 : 1;
  return a.brand.localeCompare(b.brand, "zh-Hans-CN-u-co-pinyin");
}

/**
 * 把一条适配方案压成一行备注。
 *
 * 刻意不区分品牌/车型以外的层级：同一车型下的年款、动力、配置、排量、
 * 材质与备注，全部合并进这一行原文说明，避免同一车型炸出十几张卡片。
 */
function VariantNote({ scheme }: { scheme: SkidPlateScheme }) {
  const meta = STATUS_META[scheme.status];

  // 原文里同一字段可能出现重复值（如 power 两次「增程」）→ 去重后再合并展示
  const uniq = (values: readonly string[]) => [...new Set(values)].join("/");

  const conditions = [
    uniq(scheme.years),
    uniq(scheme.power),
    uniq(scheme.config),
    uniq(scheme.displacement),
  ].filter((v) => v.length > 0);

  const materials = scheme.materials
    .map((m) => {
      const position = [...new Set(m.positions)].join("、");
      const material = [...new Set(m.material)].join("/");
      return [position, material].filter(Boolean).join(" ");
    })
    .filter((v) => v.length > 0);

  const extras = [scheme.partsCount, ...scheme.notes].filter(
    (v): v is string => typeof v === "string" && v.length > 0,
  );

  return (
    <li className="flex flex-wrap items-baseline gap-x-2 gap-y-1 py-1.5 text-sm leading-7">
      <span
        data-status={scheme.status}
        title={meta.label}
        className={`inline-flex shrink-0 items-center rounded px-1.5 py-0.5 text-[11px] leading-4 ring-1 ${meta.className}`}
      >
        {meta.short}
      </span>
      {conditions.length > 0 ? (
        <span className="font-medium text-zinc-100">{conditions.join(" · ")}</span>
      ) : (
        <span className="text-zinc-400">通用</span>
      )}
      {materials.length > 0 && (
        <span className="text-zinc-300">
          <span className="text-zinc-500">材质/部位</span> {materials.join("；")}
        </span>
      )}
      {extras.length > 0 && (
        <span className="text-zinc-400">{extras.join(" · ")}</span>
      )}
    </li>
  );
}

/** 单个车型内最多先渲染的适配备注数，其余折叠（防止长车型淹没视口） */
const VARIANT_PREVIEW = 4;
/** 单个品牌展开后最多先渲染的车型数 */
const MODEL_PREVIEW = 12;

/** 车型即叶子节点：名称 + 该车型下合并后的年款/配置备注，不再向下展开卡片。 */
function ModelLeaf({ model }: { model: SkidPlateModel }) {
  const [showAll, setShowAll] = useState(false);
  const hidden = model.schemes.length - VARIANT_PREVIEW;
  const shown = showAll ? model.schemes : model.schemes.slice(0, VARIANT_PREVIEW);

  return (
    <li className="rounded-lg border border-white/[0.06] bg-zinc-950/50 px-4 py-3">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-sm font-semibold text-zinc-100">{model.model}</span>
        {model.schemes.length > 1 && (
          <span className="text-xs text-zinc-500">{model.schemes.length} 条年款/配置</span>
        )}
      </div>
      <ul className="mt-1.5 divide-y divide-white/[0.04] border-t border-white/[0.05] pt-1">
        {shown.map((scheme, index) => (
          <VariantNote key={index} scheme={scheme} />
        ))}
      </ul>
      {hidden > 0 && (
        <button
          type="button"
          aria-expanded={showAll}
          onClick={() => setShowAll((current) => !current)}
          className="mt-1.5 text-xs text-orange-300 hover:text-orange-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
        >
          {showAll ? "收起" : `还有 ${hidden} 条年款/配置`}
        </button>
      )}
    </li>
  );
}

type BrandBlockProps = {
  brand: SkidPlateBrand;
  index: number;
  expanded: boolean;
  onToggleBrand: () => void;
};

function BrandBlock({ brand, index, expanded, onToggleBrand }: BrandBlockProps) {
  const panelId = `skid-plate-brand-${index}`;
  const [showAllModels, setShowAllModels] = useState(false);
  const hiddenModels = brand.models.length - MODEL_PREVIEW;
  const shownModels = showAllModels ? brand.models : brand.models.slice(0, MODEL_PREVIEW);

  return (
    <li className={`rounded-xl border bg-zinc-900/60 ${expanded ? "border-orange-400/30" : "border-white/[0.08]"}`}>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggleBrand}
        className="flex min-h-14 w-full items-center gap-3 px-5 py-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
      >
        <ChevronRight
          className={`size-5 shrink-0 text-orange-400 transition-transform ${expanded ? "rotate-90" : ""}`}
          aria-hidden="true"
        />
        <span className="min-w-0 flex-1 font-semibold text-white">{brand.brand}</span>
        <span className="shrink-0 text-xs text-zinc-400">{brand.models.length} 车型</span>
      </button>
      {/* 限高可滚：单个品牌再长也不会把页面撑开、吃掉整个视口。
          子树只在展开时渲染，避免 121 个品牌的 DOM 全部常驻。 */}
      <div id={panelId} hidden={!expanded} className="border-t border-white/[0.06]">
        {expanded && (
          <div className="max-h-[60vh] overflow-y-auto overscroll-contain border-l border-orange-400/30 py-3 pl-4 pr-3 sm:ml-7 sm:pr-5">
            <ul className="space-y-2">
              {shownModels.map((model) => (
                <ModelLeaf key={model.model} model={model} />
              ))}
            </ul>
            {hiddenModels > 0 && (
              <button
                type="button"
                aria-expanded={showAllModels}
                onClick={() => setShowAllModels((current) => !current)}
                className="mt-3 flex min-h-10 w-full items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.03] px-4 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-orange-400/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              >
                {showAllModels ? "收起其余车型" : `还有 ${hiddenModels} 个车型`}
              </button>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

export function SkidPlateFitmentEntry() {
  const [query, setQuery] = useState("");
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [openBrand, setOpenBrand] = useState<string | null>(null);
  /**
   * 默认收起：模块本身不强制预览整棵树，只占一行入口。
   * 用户点击「展开」或开始搜索时才渲染品牌树。
   */
  const [expanded, setExpanded] = useState(false);
  const q = query.trim().toLowerCase();
  const tokens = useMemo(() => q.split(/\s+/).filter(Boolean), [q]);
  const treeVisible = expanded || q.length > 0;

  const sorted = useMemo(() => [...SKID_PLATE_FITMENT].sort(brandCmp), []);

  const visible = useMemo(() => {
    if (!q) return sorted;
    return sorted
      .map((brand) => filterBrand(brand, tokens))
      .filter((brand): brand is SkidPlateBrand => brand !== null);
  }, [q, sorted, tokens]);

  const displayedBrands = !q && !showAllBrands
    ? visible.slice(0, INITIAL_BRAND_COUNT)
    : visible;

  const totalMatches = visible.reduce(
    (n, b) => n + b.models.reduce((x, m) => x + m.schemes.length, 0),
    0,
  );

  const toggleBrand = (name: string) => {
    setOpenBrand((current) => current === name ? null : name);
  };

  return (
    <section
      id="skid-plate-fitment"
      className="scroll-mt-20 border-b border-white/[0.06] bg-zinc-950 py-10 text-white sm:py-12"
      aria-labelledby="skid-plate-fitment-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 收起态只留标题 + 一行开关：整块不占视口 */}
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.18em] text-orange-400">车型适配</p>
          <h2
            id="skid-plate-fitment-title"
            className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            适配速查：我的车型能不能装底盘护板
          </h2>
        </div>

        {/* 展开/收起开关：默认收起，模块只占一行 */}
        <div className="mt-4">
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls="skid-plate-fitment-tree"
            onClick={() => {
              setExpanded((current) => !current);
              setOpenBrand(null);
            }}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-orange-400/30 bg-orange-400/[0.06] px-5 py-3 text-sm font-medium text-orange-200 transition-colors hover:border-orange-400/60 hover:bg-orange-400/[0.1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 sm:w-auto"
          >
            {expanded
              ? "收起适配速查"
              : `展开适配速查（${SKID_PLATE_BRAND_COUNT} 品牌 · ${SKID_PLATE_MODEL_COUNT} 车型 · ${SKID_PLATE_SCHEME_COUNT} 条适配备注）`}
            <ChevronRight className={`size-4 transition-transform ${expanded ? "-rotate-90" : "rotate-90"}`} aria-hidden="true" />
          </button>
        </div>

        <div id="skid-plate-fitment-tree" hidden={!treeVisible} className="mt-5">
          <p className="max-w-2xl text-sm leading-7 text-zinc-400">
            先选品牌再找车型——同一车型下的不同年款、动力与配置差异，已合并在该车型的备注里，不用逐条翻卡片。
          </p>

          <div className="relative mt-4 max-w-xl">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-zinc-500"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpenBrand(null);
              }}
              placeholder="搜索品牌 / 车型，如：理想 L9、问界 M7、比亚迪汉"
              aria-label="搜索品牌或车型"
              className="min-h-12 w-full rounded-full border border-white/15 bg-[#0b0c10] pl-12 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-orange-400/60 focus:outline-none focus:ring-2 focus:ring-orange-300/30"
            />
          </div>

          {q && (
            <p className="mt-4 text-sm text-zinc-400">
              共 {visible.length} 个品牌、{totalMatches} 条适配匹配「{query.trim()}」
            </p>
          )}
          {visible.length === 0 ? (
            <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0b0c10] px-5 py-6 text-zinc-400">
              <SearchX className="size-5 shrink-0" aria-hidden="true" />
              适配库未收录该车型，不代表不能安装——以门店现场检查为准，可电话沟通年款与配置。
            </div>
          ) : treeVisible ? (
            <div>
              {!q && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">按品牌查找（{SKID_PLATE_BRAND_COUNT}）</h3>
                  <p className="mt-1 text-sm text-zinc-400">先列出常见新能源品牌，可搜索或展开查看全部品牌。</p>
                </div>
              )}
              <ul aria-label="底盘护板品牌车型适配" className="space-y-3">
                {displayedBrands.map((brand, index) => (
                  <BrandBlock
                    key={brand.brand}
                    brand={brand}
                    index={index}
                    expanded={openBrand === brand.brand}
                    onToggleBrand={() => toggleBrand(brand.brand)}
                  />
                ))}
              </ul>
              {!q && visible.length > INITIAL_BRAND_COUNT && (
                <button
                  type="button"
                  aria-expanded={showAllBrands}
                  onClick={() => {
                    setShowAllBrands((current) => !current);
                    setOpenBrand(null);
                  }}
                  className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-orange-400/40 hover:bg-orange-400/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                >
                  {showAllBrands ? "收起其余品牌" : `查看全部 ${SKID_PLATE_BRAND_COUNT} 个品牌`}
                  <ChevronRight className={`size-4 text-orange-400 transition-transform ${showAllBrands ? "-rotate-90" : "rotate-90"}`} aria-hidden="true" />
                </button>
              )}
            </div>
          ) : null}

          <p className="mt-8 text-xs leading-6 text-zinc-500">
            套件构成、年款、动力、配置、排量续航、材质与防护部位均为适配库原文，不换算不推断；适配信息以门店现场检查为准，不同批次与配置存在差异。
          </p>
        </div>
      </div>
    </section>
  );
}
