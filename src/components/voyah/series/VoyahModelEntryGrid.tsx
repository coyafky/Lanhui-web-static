import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { VoyahModelEntryKey } from "@/lib/voyah-series-services";

export type VoyahModelEntry = {
  modelKey: VoyahModelEntryKey;
  modelName: string;
  canonicalPath: string;
  /** 主打使用场景 */
  scenario: string;
  /** 最常见的三项需求 */
  topNeeds: readonly [string, string, string];
  projectCount: number;
  image: { src: string; alt: string };
};

type VoyahModelEntryGridProps = {
  entries: readonly VoyahModelEntry[];
};

/**
 * 岚图梦想家车型专属子页入口（整卡可点）。
 * 品牌页只保留入口，17 个专车项目在 /product/voyah/dreamer 子页展示。
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
            岚图梦想家应优先升级什么？
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            梦想家已整理独立专车方案。进入子页查看完整项目清单，按年款与配置继续确认。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {entries.map((m) => (
            <Link
              key={m.modelKey}
              href={m.canonicalPath}
              className="group flex flex-col overflow-hidden rounded-3xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] transition-transform active:scale-[0.98]"
            >
              <div className="relative aspect-[4/3] bg-zinc-900">
                <Image
                  src={m.image.src}
                  alt={m.image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-zinc-950/80 px-3 py-1 text-xs text-zinc-300 shadow-[0_0_0_1px_oklch(1_0_0/0.1)]">
                  效果预览图
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-white">
                    {m.modelName} 专属升级方案
                  </h3>
                  <span className="rounded-full bg-violet-400/10 px-2.5 py-0.5 text-xs font-medium text-violet-300">
                    {m.projectCount} 项适配参考
                  </span>
                </div>
                <p className="text-base text-zinc-400 leading-relaxed text-pretty flex-1">
                  {m.scenario}
                </p>
                <div className="flex flex-wrap gap-2">
                  {m.topNeeds.map((need) => (
                    <span
                      key={need}
                      className="inline-flex items-center rounded-full bg-white/[0.04] px-3 py-1 text-xs text-zinc-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]"
                    >
                      {need}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-zinc-500">
                  进入后按年款与配置继续确认
                </p>
                <span className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-violet-400 transition-colors group-hover:text-violet-300">
                  查看 {m.modelName} 专属方案
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
