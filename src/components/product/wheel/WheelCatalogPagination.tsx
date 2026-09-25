import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  buildWheelCatalogHref,
  type WheelCatalogFilters,
} from "@/lib/wheel-catalog";

const NAV_LINK_CLASS =
  "inline-flex min-h-11 items-center gap-1.5 rounded-full bg-white/[0.06] px-4 text-sm font-medium text-zinc-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-white/[0.1] hover:text-white aria-disabled:cursor-not-allowed aria-disabled:opacity-40";

/**
 * 翻页：上一页 / 第 X / Y 页 / 下一页。
 * 翻页链接保留当前筛选条件（把 `page` 换掉，其余照抄）。
 */
export function WheelCatalogPagination({
  page,
  totalPages,
  filters,
}: {
  page: number;
  totalPages: number;
  filters: WheelCatalogFilters;
}) {
  if (totalPages <= 1) return null;

  const hasPrevious = page > 1;
  const hasNext = page < totalPages;

  return (
    <nav
      aria-label="轮毂编号分页"
      className="mt-8 flex items-center justify-center gap-3 sm:gap-4"
    >
      {hasPrevious ? (
        <Link href={buildWheelCatalogHref({ ...filters, page: page - 1 })} className={NAV_LINK_CLASS}>
          <ChevronLeft className="size-4" aria-hidden />
          上一页
        </Link>
      ) : (
        <span className={NAV_LINK_CLASS} aria-disabled="true">
          <ChevronLeft className="size-4" aria-hidden />
          上一页
        </span>
      )}

      <p className="text-sm text-zinc-400" aria-current="page">
        第 {page} / {totalPages} 页
      </p>

      {hasNext ? (
        <Link href={buildWheelCatalogHref({ ...filters, page: page + 1 })} className={NAV_LINK_CLASS}>
          下一页
          <ChevronRight className="size-4" aria-hidden />
        </Link>
      ) : (
        <span className={NAV_LINK_CLASS} aria-disabled="true">
          下一页
          <ChevronRight className="size-4" aria-hidden />
        </span>
      )}
    </nav>
  );
}
