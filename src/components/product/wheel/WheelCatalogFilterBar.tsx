import type { ReactNode } from "react";
import Link from "next/link";
import { RotateCcw } from "lucide-react";
import {
  buildWheelCatalogHref,
  formatDiameterSummary,
  hasWheelCatalogFilters,
  WHEEL_CATALOG_PATH,
  WHEEL_PROCESS_GROUPS,
  withWheelCatalogFilter,
  type WheelCatalogFacets,
  type WheelCatalogFilters,
} from "@/lib/wheel-catalog";

/**
 * 筛选栏：工艺 / 尺寸（直径 → J值）/ PCD。
 *
 * 尺寸是两级：先选直径（英寸），再选 J值（宽度）。J值选项与计数是**依赖式**的
 * —— 选了直径后只列出该直径真实存在的宽度，不会出现选了就空的组合。
 *
 * 筛选项一律是**链接**（`?process&diameter&width&pcd&page`），因此：
 * - 无 JS 也能筛选（预渲染兜底视图同样可用）；
 * - 状态天然落在 URL，改筛选回第 1 页，翻页保留其余条件。
 */

type FilterLinkProps = {
  href: string;
  active: boolean;
  children: ReactNode;
};

function FilterLink({ href, active, children }: FilterLinkProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "true" : undefined}
      className={`inline-flex min-h-11 items-center rounded-full px-3.5 text-sm font-medium transition-colors ${
        active
          ? "bg-white text-zinc-900"
          : "bg-white/[0.06] text-zinc-300 hover:bg-white/[0.1] hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

function FilterRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div role="group" aria-label={label} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
      <p className="shrink-0 text-xs tracking-widest text-zinc-500">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export function WheelCatalogFilterBar({
  facets,
  filters,
}: {
  facets: WheelCatalogFacets;
  filters: WheelCatalogFilters;
}) {
  const hasFilters = hasWheelCatalogFilters(filters);

  return (
    <div className="flex flex-col gap-4">
      <FilterRow label="工艺">
        <FilterLink
          href={buildWheelCatalogHref(
            withWheelCatalogFilter(filters, { process: null })
          )}
          active={filters.process === null}
        >
          全部工艺
        </FilterLink>
        {facets.processes.map((option) => (
          <FilterLink
            key={option.value}
            href={buildWheelCatalogHref(
              withWheelCatalogFilter(filters, { process: option.value })
            )}
            active={filters.process === option.value}
          >
            {WHEEL_PROCESS_GROUPS[option.value].title}（{option.count}）
          </FilterLink>
        ))}
      </FilterRow>

      <FilterRow label="尺寸（英寸）">
        <FilterLink
          href={buildWheelCatalogHref(
            withWheelCatalogFilter(filters, { diameter: null })
          )}
          active={filters.diameter === null}
        >
          全部尺寸
        </FilterLink>
        {facets.diameters.map((option) => (
          <FilterLink
            key={option.value}
            href={buildWheelCatalogHref(
              withWheelCatalogFilter(filters, { diameter: option.value })
            )}
            active={filters.diameter === option.value}
          >
            {formatDiameterSummary([option.value])}（{option.count}）
          </FilterLink>
        ))}
      </FilterRow>

      <FilterRow label="J值（宽度）">
        <FilterLink
          href={buildWheelCatalogHref(withWheelCatalogFilter(filters, { width: null }))}
          active={filters.width === null}
        >
          全部J值
        </FilterLink>
        {facets.widths.map((option) => (
          <FilterLink
            key={option.value}
            href={buildWheelCatalogHref(
              withWheelCatalogFilter(filters, { width: option.value })
            )}
            active={filters.width === option.value}
          >
            {option.value}J（{option.count}）
          </FilterLink>
        ))}
      </FilterRow>

      <FilterRow label="PCD">
        <FilterLink
          href={buildWheelCatalogHref(withWheelCatalogFilter(filters, { pcd: null }))}
          active={filters.pcd === null}
        >
          全部 PCD
        </FilterLink>
        {facets.pcds.map((option) => (
          <FilterLink
            key={option.value}
            href={buildWheelCatalogHref(
              withWheelCatalogFilter(filters, { pcd: option.value })
            )}
            active={filters.pcd === option.value}
          >
            {option.value}（{option.count}）
          </FilterLink>
        ))}
      </FilterRow>

      {hasFilters && (
        <div>
          <Link
            href={WHEEL_CATALOG_PATH}
            className="inline-flex min-h-11 items-center gap-2 rounded-full px-3.5 text-sm font-medium text-orange-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-orange-400/10"
          >
            <RotateCcw className="size-3.5" aria-hidden />
            重置筛选
          </Link>
        </div>
      )}
    </div>
  );
}
