"use client";

import { useMemo, useState } from "react";
import { ChevronRight, Search, SearchX } from "lucide-react";
import type {
  CuratedModelCardShape,
  CuratedProjectShape,
  CuratedVariantShape,
} from "@/lib/brand-curated-types";
import type { VehicleTheme } from "@/components/vehicle-page";

interface Props {
  /** 项目矩阵（按覆盖车系数降序） */
  projects: readonly CuratedProjectShape[];
  /** 车系卡（用于「数据行 → 车系」归并：把变体行合并回车系叶子） */
  cards: readonly CuratedModelCardShape[];
  /** 分组 chip 的顺序与文案 */
  groupOrder: readonly string[];
  groupLabels: Record<string, string>;
  /** 每个项目最多先渲染的车系数 */
  modelPreview?: number;
  /** 每个车系下最多先渲染的备注条数 */
  variantPreview?: number;
  /** 品牌名，用于无障碍文案 */
  brandLabel: string;
  theme: VehicleTheme;
}

const MODEL_PREVIEW = 12;
const VARIANT_PREVIEW = 4;

const THEME_RING: Record<VehicleTheme, string> = {
  orange: "border-orange-400/30",
  cyan: "border-cyan-400/30",
  amber: "border-amber-400/30",
  blue: "border-blue-400/30",
  green: "border-emerald-400/30",
  red: "border-red-400/30",
  neutral: "border-zinc-400/30",
};

/** 把「原始数据行」合并到「车系显示名」——一个车系的所有变体行收成一条叶子 */
function buildCardLookup(cards: readonly CuratedModelCardShape[]) {
  const rowToCard = new Map<string, string>();
  const cardByName = new Map<string, CuratedModelCardShape>();
  for (const card of cards) {
    cardByName.set(card.displayName, card);
    for (const row of card.sourceModels) rowToCard.set(row, card.displayName);
  }
  return { rowToCard, cardByName };
}

/** 一条适配方案压成一行备注（年款/材质/备注原文，不换算不推断） */
function VariantNote({
  year,
  material,
  note,
}: {
  year: string;
  material: string;
  note: string;
}) {
  return (
    <li className="flex flex-wrap items-baseline gap-x-2 gap-y-1 py-1.5 text-sm leading-7">
      {year ? (
        <span className="font-medium text-zinc-100">{year}</span>
      ) : (
        <span className="text-zinc-400">年款以门店核对为准</span>
      )}
      {material && (
        <span className="text-zinc-300">
          <span className="text-zinc-500">材质</span> {material}
        </span>
      )}
      {note && <span className="text-zinc-400">{note}</span>}
    </li>
  );
}

/** 车系叶子：名称 + 该车系下合并后的年款/材质备注 */
function ModelLeaf({
  displayName,
  variants,
  variantPreview,
}: {
  displayName: string;
  variants: readonly CuratedVariantShape[];
  variantPreview: number;
}) {
  const [showAll, setShowAll] = useState(false);
  const hidden = variants.length - variantPreview;
  const shown = showAll ? variants : variants.slice(0, variantPreview);

  return (
    <li className="rounded-lg border border-white/[0.06] bg-zinc-950/50 px-4 py-3">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-sm font-semibold text-zinc-100">{displayName}</span>
        {variants.length > 1 && (
          <span className="text-xs text-zinc-500">{variants.length} 条年款/配置</span>
        )}
      </div>
      <ul className="mt-1.5 divide-y divide-white/[0.04] border-t border-white/[0.05] pt-1">
        {shown.map((v, i) => (
          <VariantNote key={i} year={v.year} material={v.material} note={v.note} />
        ))}
      </ul>
      {hidden > 0 && (
        <button
          type="button"
          aria-expanded={showAll}
          onClick={() => setShowAll((current) => !current)}
          className="mt-1.5 text-xs text-amber-300 hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
        >
          {showAll ? "收起" : `还有 ${hidden} 条年款/配置`}
        </button>
      )}
    </li>
  );
}

function ProjectBlock({
  project,
  cards,
  groupOrder,
  groupLabels,
  modelPreview,
  variantPreview,
  theme,
  index,
}: {
  project: CuratedProjectShape;
  cards: readonly CuratedModelCardShape[];
  groupOrder: readonly string[];
  groupLabels: Record<string, string>;
  modelPreview: number;
  variantPreview: number;
  theme: VehicleTheme;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [showAllModels, setShowAllModels] = useState(false);
  const panelId = `brand-project-${index}`;

  // 把数据行归并到车系，车系内变体合并
  const merged = useMemo(() => {
    const { rowToCard, cardByName } = buildCardLookup(cards);
    const byCard = new Map<string, CuratedVariantShape[]>();
    for (const m of project.models) {
      const cardName = rowToCard.get(m.model) ?? m.model;
      const list = byCard.get(cardName) ?? [];
      list.push(...m.variants);
      byCard.set(cardName, list);
    }
    // 按分组顺序 + 车系在 cards 里的顺序排列
    const ordered: { name: string; group: string; variants: CuratedVariantShape[] }[] = [];
    for (const key of groupOrder) {
      for (const card of cards.filter((c) => c.group === key)) {
        const variants = byCard.get(card.displayName);
        if (variants && variants.length > 0) {
          ordered.push({ name: card.displayName, group: key, variants });
        }
      }
    }
    void cardByName;
    return ordered;
  }, [project, cards, groupOrder]);

  const hiddenModels = merged.length - modelPreview;
  const shownModels = showAllModels ? merged : merged.slice(0, modelPreview);

  return (
    <li
      className={`rounded-xl border bg-zinc-900/60 ${expanded ? THEME_RING[theme] : "border-white/[0.08]"}`}
    >
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((current) => !current)}
        className="flex min-h-14 w-full items-center gap-3 px-5 py-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
      >
        <ChevronRight
          className={`size-5 shrink-0 text-amber-400 transition-transform ${expanded ? "rotate-90" : ""}`}
          aria-hidden="true"
        />
        <span className="min-w-0 flex-1 font-semibold text-white">{project.name}</span>
        <span className="shrink-0 text-xs text-zinc-400">{project.modelCount} 车系</span>
      </button>

      {/* 限高可滚 + 子树只在展开时挂载 */}
      <div id={panelId} hidden={!expanded} className="border-t border-white/[0.06]">
        {expanded && (
          <div className="max-h-[60vh] overflow-y-auto overscroll-contain border-l border-amber-400/30 py-3 pl-4 pr-3 sm:ml-7 sm:pr-5">
            <ul className="space-y-2">
              {shownModels.map((m) => (
                <ModelLeaf
                  key={m.name}
                  displayName={m.name}
                  variants={m.variants}
                  variantPreview={variantPreview}
                />
              ))}
            </ul>
            {hiddenModels > 0 && (
              <button
                type="button"
                aria-expanded={showAllModels}
                onClick={() => setShowAllModels((current) => !current)}
                className="mt-3 flex min-h-10 w-full items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.03] px-4 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-amber-400/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              >
                {showAllModels ? "收起其余车系" : `还有 ${hiddenModels} 个车系`}
              </button>
            )}
            <p className="mt-3 text-xs leading-6 text-zinc-500">
              {groupOrder.map((key) => groupLabels[key] ?? key).join(" · ")}
            </p>
          </div>
        )}
      </div>
    </li>
  );
}

/**
 * 项目矩阵（PageSpec S2）
 *
 * 与旧 `GenericBrandFitment` 的差别：**默认收起，不占视口**；展开后按
 * 「项目 → 车系 → 年款/材质备注」三层，车系是叶子，配置差异收成备注行。
 */
export function BrandProjectMatrix({
  projects,
  cards,
  groupOrder,
  groupLabels,
  modelPreview = MODEL_PREVIEW,
  variantPreview = VARIANT_PREVIEW,
  brandLabel,
  theme,
}: Props) {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<string>("全部");
  const [expanded, setExpanded] = useState(false);

  const q = query.trim().toLowerCase();
  const treeVisible = expanded || q.length > 0;

  const filtered = useMemo(() => {
    return projects
      .map((p) => {
        if (group === "全部") return p;
        const models = p.models.filter((m) => {
          const card = cards.find((c) => c.sourceModels.includes(m.model));
          return card?.group === group;
        });
        return models.length > 0 ? { ...p, models, modelCount: models.length } : null;
      })
      .filter((p): p is CuratedProjectShape => p !== null)
      .map((p) => {
        if (!q) return p;
        const nameHit = p.name.toLowerCase().includes(q);
        const models = p.models.filter((m) => m.model.toLowerCase().includes(q));
        if (nameHit) return p;
        return models.length > 0 ? { ...p, models, modelCount: models.length } : null;
      })
      .filter((p): p is CuratedProjectShape => p !== null);
  }, [projects, group, q, cards]);

  const totalSpecs = useMemo(
    () => projects.reduce((n, p) => n + p.models.reduce((x, m) => x + m.variants.length, 0), 0),
    [projects],
  );

  const groupsWithData = groupOrder.filter((key) =>
    cards.some((c) => c.group === key),
  );

  return (
    <section
      id="brand-fitment"
      aria-labelledby="brand-fitment-title"
      className="scroll-mt-20 border-t border-white/[0.06] bg-[#0b0c10] py-12 text-white sm:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.18em] text-amber-400">适配速查</p>
          <h2
            id="brand-fitment-title"
            className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            我的车型能装哪些项目
          </h2>
        </div>

        {/* 默认收起：模块只占一行，不侵占视口 */}
        <div className="mt-4">
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls="brand-fitment-tree"
            onClick={() => setExpanded((current) => !current)}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/[0.06] px-5 py-3 text-sm font-medium text-amber-200 transition-colors hover:border-amber-400/60 hover:bg-amber-400/[0.1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 sm:w-auto"
          >
            {expanded
              ? "收起适配速查"
              : `展开适配速查（${cards.length} 车系 · ${projects.length} 项目 · ${totalSpecs} 条适配备注）`}
            <ChevronRight
              className={`size-4 transition-transform ${expanded ? "-rotate-90" : "rotate-90"}`}
              aria-hidden="true"
            />
          </button>
        </div>

        <div id="brand-fitment-tree" hidden={!treeVisible} className="mt-5">
          <p className="max-w-2xl text-sm leading-7 text-zinc-400">
            先选项目再找车系——同一车系下的不同年款与配置差异，已合并在该车系的备注里。
          </p>

          <div className="relative mt-4 max-w-xl">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-zinc-500"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索项目或车系，如：底盘护板、蓝山"
              aria-label="搜索项目或车系"
              className="min-h-12 w-full rounded-full border border-white/15 bg-zinc-950 pl-12 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-amber-400/60 focus:outline-none focus:ring-2 focus:ring-amber-300/30"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {["全部", ...groupsWithData].map((key) => {
              const selected = group === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setGroup(key)}
                  className={`inline-flex min-h-10 items-center rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 ${
                    selected
                      ? "border-amber-500 bg-amber-500 text-zinc-950"
                      : "border-white/15 text-zinc-300 hover:border-white/30 hover:bg-white/[0.05]"
                  }`}
                >
                  {key === "全部" ? "全部车系" : (groupLabels[key] ?? key)}
                </button>
              );
            })}
          </div>

          {q && (
            <p className="mt-4 text-sm text-zinc-400">
              共 {filtered.length} 个项目匹配「{query.trim()}」
            </p>
          )}

          {filtered.length === 0 ? (
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-zinc-950 px-5 py-6 text-zinc-400">
              <SearchX className="size-5 shrink-0" aria-hidden="true" />
              适配库未收录该车型，不代表不能安装——以门店现场检查为准。
            </div>
          ) : treeVisible ? (
            <ul aria-label={`${brandLabel}适配项目与车系`} className="mt-4 space-y-3">
              {filtered.map((p, i) => (
                <ProjectBlock
                  key={p.name}
                  project={p}
                  cards={cards}
                  groupOrder={groupOrder}
                  groupLabels={groupLabels}
                  modelPreview={modelPreview}
                  variantPreview={variantPreview}
                  theme={theme}
                  index={i}
                />
              ))}
            </ul>
          ) : null}

          <p className="mt-8 text-xs leading-6 text-zinc-500">
            年款、材质与适配说明均为适配库原文，不换算不推断；实际安装以门店现场检查（车型年款、座椅布局、底盘结构、电路走向）为准。
          </p>
        </div>
      </div>
    </section>
  );
}
