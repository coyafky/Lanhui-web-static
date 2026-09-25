import Link from "next/link";
import { getElectricStepFitmentByModelSlug } from "@/lib/electric-step-fitment";

type ElectricStepFitmentCardProps = {
  brandSlug: string;
  modelSlug: string;
};

/**
 * 车型页（L2）电动踏板适配卡片。
 *
 * - 有适配记录：展示「本品电动踏板」年款 / 车身形式 / 取信号方式 / 备注，
 *   并链到适配总表对应行锚点。
 * - 无适配记录：展示「本车型暂无电动踏板」并链到适配总表，防止无效到店咨询。
 *
 * Server Component，数据来自已核实的 src/lib/electric-step-fitment.ts。
 */
export function ElectricStepFitmentCard({
  brandSlug,
  modelSlug,
}: ElectricStepFitmentCardProps) {
  const record = getElectricStepFitmentByModelSlug(brandSlug, modelSlug);
  const headingId = `electric-step-fitment-${brandSlug}-${modelSlug}`;

  return (
    <section
      className="border-t border-zinc-900 bg-zinc-950 py-12 md:py-16"
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-zinc-900/50 p-5 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] sm:p-6">
          <p className="mb-2 text-xs uppercase tracking-widest text-orange-400">
            ELECTRIC STEP · 电动踏板
          </p>

          {record ? (
            <>
              <h2
                id={headingId}
                className="text-xl font-bold text-white md:text-2xl"
              >
                本品电动踏板
              </h2>
              <p className="mt-1 text-sm text-zinc-400">
                {record.model} 已有已核实的电动踏板适配方案。
              </p>

              <dl className="mt-5 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
                <div className="flex items-baseline justify-between gap-4 border-b border-white/[0.05] pb-2">
                  <dt className="text-zinc-400">适配年款</dt>
                  <dd className="text-right font-medium text-white">
                    {record.years}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-white/[0.05] pb-2">
                  <dt className="text-zinc-400">车身形式</dt>
                  <dd className="text-right font-medium text-white">
                    {record.body}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-white/[0.05] pb-2">
                  <dt className="text-zinc-400">取信号方式</dt>
                  <dd className="text-right">
                    <span className="inline-flex rounded-full bg-orange-400/10 px-2.5 py-0.5 text-xs font-medium text-orange-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                      {record.signal}
                    </span>
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-white/[0.05] pb-2">
                  <dt className="text-zinc-400">备注</dt>
                  <dd className="text-right text-zinc-300">
                    {record.note ?? "—"}
                  </dd>
                </div>
              </dl>

              <Link
                href={`/product/electric-steps/fitment#${record.key}`}
                className="mt-5 inline-flex items-center text-sm text-orange-300 transition-colors hover:text-orange-200"
              >
                查看电动踏板适配总表 →
              </Link>
            </>
          ) : (
            <>
              <h2
                id={headingId}
                className="text-xl font-bold text-white md:text-2xl"
              >
                本车型暂无电动踏板
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                蓝辉轻改暂未核实本车型的电动踏板适配方案，避免无效到店咨询。可先查看已核实的 21
                个车型适配总表，确认是否有你的车型与年款。
              </p>
              <Link
                href="/product/electric-steps/fitment"
                className="mt-5 inline-flex items-center text-sm text-orange-300 transition-colors hover:text-orange-200"
              >
                查看电动踏板适配车型总表 →
              </Link>
            </>
          )}

          <p className="mt-5 text-xs leading-relaxed text-zinc-500">
            具体适配车型、安装方案和价格以到店确认结果为准。
          </p>
        </div>
      </div>
    </section>
  );
}
