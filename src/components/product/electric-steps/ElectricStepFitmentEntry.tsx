import Link from "next/link";
import { TableProperties, ArrowRight } from "lucide-react";
import { ELECTRIC_STEP_FITMENT } from "@/lib/electric-step-fitment";

/**
 * 电动踏板落地页（L1）的适配总表入口。
 * 只做导流，不承载适配事实本身（事实在 /product/electric-steps/fitment）。
 */
export function ElectricStepFitmentEntry() {
  const brandCount = new Set(ELECTRIC_STEP_FITMENT.map((r) => r.brand)).size;

  return (
    <section
      className="border-t border-white/[0.05] bg-zinc-950 py-12 md:py-16"
      aria-labelledby="electric-step-fitment-entry-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-2xl bg-zinc-900/50 p-6 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium text-orange-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
              <TableProperties className="size-3.5" aria-hidden />
              适配车型总表
            </p>
            <h2
              id="electric-step-fitment-entry-title"
              className="text-2xl font-bold text-white md:text-3xl"
            >
              你的车型能不能装电动踏板？
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
              已核实 {brandCount} 个品牌、{ELECTRIC_STEP_FITMENT.length}{" "}
              个车型的电动踏板适配年款、车身形式与取信号方式，逐条可查。
            </p>
          </div>

          <Link
            href="/product/electric-steps/fitment"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-orange-400/10 px-6 text-sm font-medium text-orange-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-orange-400/20"
          >
            查看电动踏板适配车型总表
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
