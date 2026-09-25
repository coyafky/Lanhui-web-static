import type { WheelDetailSummary as WheelDetailSummaryData } from "@/lib/wheel-catalog";

const ROWS: readonly { key: keyof WheelDetailSummaryData; label: string }[] = [
  { key: "process", label: "工艺" },
  { key: "diameter", label: "直径" },
  { key: "width", label: "宽度" },
  { key: "pcd", label: "PCD（孔距）" },
  { key: "offset", label: "ET（偏距）" },
  { key: "centerBore", label: "中心孔" },
  { key: "colors", label: "颜色" },
];

/** 规格摘要：工艺 / 直径区间 / PCD（多孔距并列）/ ET / 中心孔 / 颜色。 */
export function WheelDetailSummary({
  modelId,
  carSeries,
  summary,
}: {
  modelId: string;
  carSeries: string;
  summary: WheelDetailSummaryData;
}) {
  return (
    <div>
      <p className="text-xs tracking-widest text-orange-400 uppercase">
        编号 {modelId}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {modelId} 轮毂规格
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
        共 {summary.variantCount} 条规格明细，全部来自供应商产品表。
      </p>

      <dl className="mt-6 divide-y divide-white/[0.06] overflow-hidden rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]">
        {ROWS.map((row) => (
          <div key={row.key} className="flex flex-wrap gap-x-4 gap-y-1 px-4 py-3">
            <dt className="w-28 shrink-0 text-sm text-zinc-500">{row.label}</dt>
            <dd className="min-w-0 flex-1 text-sm font-medium text-zinc-200">
              {summary[row.key]}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-3 text-xs leading-relaxed text-zinc-500">
        源表车系标签：{carSeries}（供应商源表目录名，不代表适配年款）。
      </p>
    </div>
  );
}
