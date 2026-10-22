import { ChevronRight } from "lucide-react";
import {
  CHERY_MODEL_GROUPS,
  CHERY_MODEL_GROUP_LABELS,
  cheryModels,
} from "@/lib/chery-model-groups";

/**
 * 奇瑞品牌页 S1 车型速览（PageSpec §S1）— 五分组，无子页。
 */
export function CheryModelGrid() {
  return (
    <section
      id="chery-models"
      aria-labelledby="chery-models-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-cyan-400 uppercase">
            按车型选
          </p>
          <h2
            id="chery-models-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            28款奇瑞车型，按车系找你的车
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            按车系分五组，每组标了支持的项目数。选你的车型看下方项目说明与适配明细。
          </p>
        </div>

        <div className="space-y-12">
          {CHERY_MODEL_GROUPS.map((group) => {
            const models = cheryModels.filter((m) => m.group === group);
            return (
              <section key={group} aria-labelledby={`chery-model-group-${group}`}>
                <h3
                  id={`chery-model-group-${group}`}
                  className="sticky top-16 z-40 -mx-4 flex min-h-12 items-center gap-3 bg-zinc-950/95 px-4 py-2 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
                >
                  <span className="text-lg font-bold text-white">
                    {CHERY_MODEL_GROUP_LABELS[group]}
                  </span>
                  <span className="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-sm text-zinc-300">
                    {models.length}款
                  </span>
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
                  {models.map((model) => (
                    <article
                      key={model.slug}
                      className="flex flex-col rounded-2xl bg-zinc-900/60 p-5 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <h4 className="text-base font-bold text-white">
                          {model.name}
                        </h4>
                        <span className="shrink-0 text-sm text-zinc-500">
                          {model.projects.length}类适配配件
                        </span>
                      </div>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {model.projects.map((p) => (
                          <li
                            key={p}
                            className="rounded-full bg-white/[0.05] px-2.5 py-1 text-xs text-zinc-300 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
                          >
                            {p}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#chery-projects"
                        className="mt-4 inline-flex min-h-10 items-center gap-1 self-start text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
                      >
                        查看项目说明
                        <ChevronRight className="size-4" aria-hidden />
                      </a>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
