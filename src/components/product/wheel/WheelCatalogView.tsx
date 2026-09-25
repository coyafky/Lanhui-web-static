import Link from "next/link";
import { SearchX } from "lucide-react";
import {
  buildWheelCatalogFacets,
  filterWheelCatalog,
  groupWheelCatalogPage,
  hasWheelCatalogFilters,
  paginateWheelCatalog,
  WHEEL_CATALOG_PATH,
  WHEEL_PROCESS_GROUPS,
  type WheelCatalogFilters,
  type WheelCatalogItem,
  type WheelCatalogSegment,
} from "@/lib/wheel-catalog";
import { WheelCatalogCard } from "./WheelCatalogCard";
import { WheelCatalogFilterBar } from "./WheelCatalogFilterBar";
import { WheelCatalogPagination } from "./WheelCatalogPagination";

/**
 * 目录页图库段（纯展示，无 hooks）。
 *
 * 被两处共用，且**必须保持一致**：
 * - `WheelCatalog`（客户端）—— 从 `useSearchParams` 解析筛选后再渲染；
 * - 目录页 `<Suspense>` 兜底 —— 直接用默认筛选渲染。
 *
 * 这样预渲染产物里就有真实编号（无 JS / 未水合时也可见），
 * 而不是 Suspense 空占位。
 */

type CatalogCell =
  | {
      kind: "intro";
      process: WheelCatalogSegment["process"];
      count: number;
    }
  | { kind: "item"; item: WheelCatalogItem };

function ProcessIntroCell({
  process,
  count,
}: {
  process: WheelCatalogSegment["process"];
  count: number;
}) {
  const group = WHEEL_PROCESS_GROUPS[process];

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-900/40 p-4 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
      <div>
        <p className="text-[10px] uppercase tracking-widest text-orange-400">
          工艺分组
        </p>
        <h3 className="mt-1 text-base font-bold text-white">{group.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-zinc-400">
          {group.description}
        </p>
      </div>
      <p className="mt-4 text-xs text-zinc-500">{count} 个编号</p>
    </div>
  );
}

function WheelCatalogEmpty() {
  return (
    <div className="rounded-2xl bg-zinc-900/60 px-6 py-16 text-center shadow-[0_0_0_1px_oklch(1_0_0/0.06)]">
      <SearchX className="mx-auto size-6 text-zinc-600" aria-hidden />
      <p className="mt-3 text-base text-zinc-300">没有匹配的编号</p>
      <p className="mt-1 text-sm text-zinc-500">
        当前的工艺 / 直径 / PCD 组合下没有数据，可以放宽条件再看。
      </p>
      <Link
        href={WHEEL_CATALOG_PATH}
        className="mt-5 inline-flex min-h-11 items-center rounded-full bg-white/[0.06] px-5 text-sm font-medium text-zinc-200 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-white/[0.1] hover:text-white"
      >
        重置筛选
      </Link>
    </div>
  );
}

export function WheelCatalogView({
  items,
  filters,
}: {
  items: readonly WheelCatalogItem[];
  filters: WheelCatalogFilters;
}) {
  const facets = buildWheelCatalogFacets(items, filters);
  const filtered = filterWheelCatalog(items, filters);
  const page = paginateWheelCatalog(filtered, filters.page);

  // 无筛选 = 分组态；有筛选 = 退化为平铺网格。
  const grouped = !hasWheelCatalogFilters(filters);

  const processCounts = new Map<WheelCatalogSegment["process"], number>();
  for (const item of filtered) {
    processCounts.set(item.process, (processCounts.get(item.process) ?? 0) + 1);
  }

  // 组介绍占段首格，而 `page.items` 已经按 24/页切好 —— 组介绍不占分页名额。
  const cells: CatalogCell[] = [];
  if (grouped) {
    for (const segment of groupWheelCatalogPage(page.items)) {
      cells.push({
        kind: "intro",
        process: segment.process,
        count: processCounts.get(segment.process) ?? 0,
      });
      for (const item of segment.items) cells.push({ kind: "item", item });
    }
  } else {
    for (const item of page.items) cells.push({ kind: "item", item });
  }

  return (
    <div className="flex flex-col gap-6">
      <WheelCatalogFilterBar facets={facets} filters={filters} />

      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm text-zinc-400" aria-live="polite">
          {page.total === 0
            ? "没有匹配的编号"
            : `共 ${page.total} 个编号 · 当前第 ${page.rangeStart}–${page.rangeEnd} 个`}
        </p>
        <p className="text-xs text-zinc-500">
          {grouped ? "默认按工艺分组" : "筛选结果已平铺"}
        </p>
      </div>

      {page.total === 0 ? (
        <WheelCatalogEmpty />
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {cells.map((cell) =>
            cell.kind === "intro" ? (
              <ProcessIntroCell
                key={`intro-${cell.process}`}
                process={cell.process}
                count={cell.count}
              />
            ) : (
              <WheelCatalogCard key={cell.item.id} item={cell.item} />
            )
          )}
        </div>
      )}

      <WheelCatalogPagination
        page={page.page}
        totalPages={page.totalPages}
        filters={filters}
      />
    </div>
  );
}
