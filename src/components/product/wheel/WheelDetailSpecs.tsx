"use client";

import { useMemo, useState } from "react";
import { Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  buildWheelSpecRows,
  formatPcdList,
  formatSpecText,
  formatSpecValue,
  formatWheelVariantLabel,
  paginateList,
  WHEEL_SPEC_PAGE_SIZE,
  type WheelVariant,
} from "@/lib/wheel-catalog";

const CHIP_CLASS =
  "inline-flex min-h-11 items-center rounded-full px-3.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400";

const TABLE_HEAD_CELL_CLASS =
  "whitespace-nowrap px-3 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-400";

/**
 * 完整规格表：按直径筛表 / 20 行分页 / 行级选择 + 已选摘要。
 *
 * 无障碍：
 * - 容器 `role="region" tabIndex={0}` —— 窄屏可键盘横向滚动；
 * - 每行选择按钮带 `aria-pressed` 与完整 `aria-label`；
 * - `th` 内用 `sr-only` 补全列名（缩写 ET / PCD / CB 的完整含义）。
 */
export function WheelDetailSpecs({
  modelId,
  variants,
}: {
  modelId: string;
  variants: readonly WheelVariant[];
}) {
  const rows = useMemo(() => buildWheelSpecRows(variants), [variants]);
  const [diameterFilter, setDiameterFilter] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<readonly number[]>([]);

  const diameters = useMemo(() => {
    const values = new Set<number>();
    for (const variant of variants) {
      if (variant.diameterIn !== null) values.add(variant.diameterIn);
    }
    return [...values].sort((a, b) => a - b);
  }, [variants]);

  const diameterCounts = useMemo(() => {
    const counts = new Map<number, number>();
    for (const variant of variants) {
      if (variant.diameterIn === null) continue;
      counts.set(variant.diameterIn, (counts.get(variant.diameterIn) ?? 0) + 1);
    }
    return counts;
  }, [variants]);

  const unresolvedDiameterCount = useMemo(
    () => variants.filter((variant) => variant.diameterIn === null).length,
    [variants]
  );

  const filteredRows = useMemo(
    () =>
      diameterFilter === null
        ? rows
        : rows.filter((row) => row.variant.diameterIn === diameterFilter),
    [rows, diameterFilter]
  );

  const paged = paginateList(filteredRows, page, WHEEL_SPEC_PAGE_SIZE);

  const selectedRows = selected
    .map((index) => rows[index])
    .filter((row): row is { index: number; variant: WheelVariant } => row !== undefined);

  const toggleRow = (index: number) => {
    setSelected((previous) =>
      previous.includes(index)
        ? previous.filter((value) => value !== index)
        : [...previous, index]
    );
  };

  const selectDiameter = (value: number | null) => {
    setDiameterFilter(value);
    // 换筛选条件回第 1 页，避免落在不存在的页码上。
    setPage(1);
  };

  return (
    <div className="flex flex-col gap-5">
      {diameters.length > 1 && (
        <div
          role="group"
          aria-label={`${modelId} 规格表按直径筛选`}
          className="flex flex-wrap gap-2"
        >
          <button
            type="button"
            aria-pressed={diameterFilter === null}
            onClick={() => selectDiameter(null)}
            className={`${CHIP_CLASS} ${
              diameterFilter === null
                ? "bg-white text-zinc-900"
                : "bg-white/[0.06] text-zinc-300 hover:bg-white/[0.1] hover:text-white"
            }`}
          >
            全部直径（{rows.length}）
          </button>
          {diameters.map((diameter) => (
            <button
              key={diameter}
              type="button"
              aria-pressed={diameterFilter === diameter}
              onClick={() => selectDiameter(diameter)}
              className={`${CHIP_CLASS} ${
                diameterFilter === diameter
                  ? "bg-white text-zinc-900"
                  : "bg-white/[0.06] text-zinc-300 hover:bg-white/[0.1] hover:text-white"
              }`}
            >
              {diameter} 英寸（{diameterCounts.get(diameter) ?? 0}）
            </button>
          ))}
        </div>
      )}

      {diameterFilter !== null && unresolvedDiameterCount > 0 && (
        <p className="text-xs text-zinc-500">
          另有 {unresolvedDiameterCount} 条规格源表未提供直径，选择「全部直径」可见。
        </p>
      )}

      <div
        role="region"
        aria-label={`${modelId} 完整规格表（可横向滚动）`}
        tabIndex={0}
        className="overflow-x-auto rounded-2xl bg-zinc-900/40 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
      >
        <table className="w-full min-w-[44rem] border-collapse text-sm">
          <caption className="sr-only">
            {modelId} 完整规格明细，共 {filteredRows.length} 条
          </caption>
          <thead className="bg-zinc-900/80">
            <tr>
              <th scope="col" className={TABLE_HEAD_CELL_CLASS}>
                <span className="sr-only">选择该规格</span>
              </th>
              <th scope="col" className={TABLE_HEAD_CELL_CLASS}>
                直径<span className="sr-only">（英寸）</span>
              </th>
              <th scope="col" className={TABLE_HEAD_CELL_CLASS}>
                宽度<span className="sr-only">（英寸 J 值）</span>
              </th>
              <th scope="col" className={TABLE_HEAD_CELL_CLASS}>
                PCD<span className="sr-only">（孔距）</span>
              </th>
              <th scope="col" className={TABLE_HEAD_CELL_CLASS}>
                ET<span className="sr-only">（偏距，毫米）</span>
              </th>
              <th scope="col" className={TABLE_HEAD_CELL_CLASS}>
                中心孔<span className="sr-only">（毫米）</span>
              </th>
              <th scope="col" className={TABLE_HEAD_CELL_CLASS}>
                颜色
              </th>
            </tr>
          </thead>
          <tbody>
            {paged.items.map((row) => {
              const isSelected = selected.includes(row.index);
              return (
                <tr
                  key={row.index}
                  className={`border-t border-white/[0.06] ${
                    isSelected ? "bg-orange-400/10" : ""
                  }`}
                >
                  <td className="px-3 py-2">
                    <button
                      type="button"
                      aria-pressed={isSelected}
                      aria-label={`${isSelected ? "取消选择" : "选择"}规格：${formatWheelVariantLabel(
                        row.variant
                      )}`}
                      onClick={() => toggleRow(row.index)}
                      className={`inline-flex size-11 items-center justify-center rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 ${
                        isSelected
                          ? "bg-orange-500 text-white"
                          : "bg-white/[0.06] text-zinc-300 hover:bg-white/[0.12] hover:text-white"
                      }`}
                    >
                      <Check className="size-4" aria-hidden />
                    </button>
                  </td>
                  <td className="whitespace-nowrap px-3 py-2 text-zinc-200">
                    {formatSpecValue(row.variant.diameterIn, "英寸")}
                  </td>
                  <td className="whitespace-nowrap px-3 py-2 text-zinc-300">
                    {formatSpecValue(row.variant.widthIn, "J")}
                  </td>
                  <td className="whitespace-nowrap px-3 py-2 text-zinc-300">
                    {row.variant.pcd.length === 0
                      ? "—"
                      : formatPcdList(row.variant.pcd)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-2 text-zinc-300">
                    {formatSpecValue(row.variant.offsetMm, "mm")}
                  </td>
                  <td className="whitespace-nowrap px-3 py-2 text-zinc-300">
                    {formatSpecValue(row.variant.centerBoreMm, "mm")}
                  </td>
                  <td className="px-3 py-2 text-zinc-300">
                    {formatSpecText(row.variant.color)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {paged.totalPages > 1 && (
        <nav
          aria-label={`${modelId} 规格表分页`}
          className="flex flex-wrap items-center justify-between gap-3"
        >
          <button
            type="button"
            disabled={paged.page <= 1}
            onClick={() => setPage(paged.page - 1)}
            className={`${CHIP_CLASS} bg-white/[0.06] text-zinc-300 hover:bg-white/[0.1] hover:text-white disabled:cursor-not-allowed disabled:opacity-40`}
          >
            <ChevronLeft className="size-4" aria-hidden />
            上一页
          </button>

          <p className="text-sm text-zinc-400" aria-live="polite">
            第 {paged.rangeStart}–{paged.rangeEnd} 条 / 共 {paged.total} 条（第{" "}
            {paged.page} / {paged.totalPages} 页）
          </p>

          <button
            type="button"
            disabled={paged.page >= paged.totalPages}
            onClick={() => setPage(paged.page + 1)}
            className={`${CHIP_CLASS} bg-white/[0.06] text-zinc-300 hover:bg-white/[0.1] hover:text-white disabled:cursor-not-allowed disabled:opacity-40`}
          >
            下一页
            <ChevronRight className="size-4" aria-hidden />
          </button>
        </nav>
      )}

      <div className="rounded-2xl bg-zinc-900/60 p-4 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-sm font-semibold text-white" aria-live="polite">
            已选 {selectedRows.length} 条规格
          </h3>
          {selectedRows.length > 0 && (
            <button
              type="button"
              onClick={() => setSelected([])}
              className="inline-flex min-h-11 items-center rounded-full px-3 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
            >
              清空已选
            </button>
          )}
        </div>

        {selectedRows.length === 0 ? (
          <p className="mt-2 text-sm text-zinc-500">
            勾选行可在到店前整理一份规格清单，本页不收集询盘信息。
          </p>
        ) : (
          <ul className="mt-3 flex flex-wrap gap-2">
            {selectedRows.map((row) => (
              <li key={row.index}>
                <button
                  type="button"
                  aria-pressed={true}
                  aria-label={`移除已选规格：${formatWheelVariantLabel(row.variant)}`}
                  onClick={() => toggleRow(row.index)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-orange-400/10 px-3 text-xs text-orange-100 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-orange-400/20"
                >
                  {formatWheelVariantLabel(row.variant)}
                  <X className="size-3" aria-hidden />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
