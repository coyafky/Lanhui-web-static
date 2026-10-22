import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { VoyahModelEntryKey } from "@/lib/voyah-series-services";

export type VoyahModelEntry = {
  modelKey: VoyahModelEntryKey;
  modelName: string;
  /** 主打使用场景 */
  scenario: string;
  /** 最常见的三项需求 */
  topNeeds: readonly [string, string, string];
  /** 覆盖的适配件类别数 */
  fitmentCount: number;
};

type VoyahModelEntryGridProps = {
  entries: readonly VoyahModelEntry[];
};

/**
 * 岚图品牌页 S1「车型速览」— 5 车型入口卡。
 *
 * 岚图 5 车型合并为单页：卡片为锚点跳转（滚动到 S3 适配件明细），不进入子页。
 * 车型产品增多、拆出独立子页时，卡片改为 href 子页（见 voyah-page-spec.md §七）。
 */
export function VoyahModelEntryGrid({ entries }: VoyahModelEntryGridProps) {
  return (
    <section
      id="voyah-models"
      aria-labelledby="voyah-models-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-violet-400 uppercase">
            按车型选
          </p>
          <h2
            id="voyah-models-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            岚图全系 5 款车型，都在这一个页面
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            追光、FREE、知音、泰山、梦想家各自能装哪些，看下面这张卡就知道。
            点进明细直接对型号，不用再翻子页。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-5 lg:gap-4">
          {entries.map((m) => (
            <div
              key={m.modelKey}
              className="group flex flex-col rounded-3xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5"
            >
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-white">{m.modelName}</h3>
                <span className="rounded-full bg-violet-400/10 px-2.5 py-0.5 text-xs font-medium text-violet-300">
                  {m.fitmentCount} 类适配件
                </span>
              </div>
              <p className="mt-3 text-base text-zinc-400 leading-relaxed text-pretty flex-1">
                {m.scenario}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {m.topNeeds.map((need) => (
                  <span
                    key={need}
                    className="inline-flex items-center rounded-full bg-white/[0.04] px-3 py-1 text-xs text-zinc-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]"
                  >
                    {need}
                  </span>
                ))}
              </div>
              <Link
                href="#voyah-fitment"
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300"
              >
                看 {m.modelName} 适配明细
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
