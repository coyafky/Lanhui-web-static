import { ArrowRight } from "lucide-react";
import {
  mazdaModels,
  MAZDA_MODEL_GROUPS,
  MAZDA_MODEL_GROUP_LABELS,
} from "@/lib/mazda-model-groups";

/**
 * 马自达品牌页 S1「车型速览」— 12 车型分组网格。
 * 组织方式（PageSpec §S1）：轿车 / MPV / SUV 三组，组标题 sticky（top-16）。
 * 马自达数据量小，无子页：卡尾统一锚点滚动到 S2 项目说明。
 */
export function MazdaModelGrid() {
  return (
    <section
      id="mazda-models"
      aria-labelledby="mazda-models-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-red-400 uppercase">
            按车型选
          </p>
          <h2
            id="mazda-models-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            12 款马自达车型，分组找你的车
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            按车系分三组，每组标了支持的项目数。选你的车型看下方项目说明与适配明细。
          </p>
        </div>

        <div className="space-y-10">
          {MAZDA_MODEL_GROUPS.map((group) => {
            const models = mazdaModels.filter((mm) => mm.group === group);
            return (
              <section key={group} aria-labelledby={`mazda-group-${group}`}>
                <h3
                  id={`mazda-group-${group}`}
                  className="sticky top-16 z-40 -mx-4 flex min-h-12 items-center gap-3 bg-zinc-950/95 px-4 py-2 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
                >
                  <span className="text-lg font-bold text-white">
                    {MAZDA_MODEL_GROUP_LABELS[group]}
                  </span>
                  <span className="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-xs font-medium text-zinc-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                    {models.length} 款
                  </span>
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {models.map((mm) => (
                    <ModelCard key={mm.slug} model={mm} />
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

function ModelCard({ model }: { model: (typeof mazdaModels)[number] }) {
  return (
    <a
      href="#mazda-projects"
      aria-label={`${model.name} 项目说明`}
      className="group block"
    >
      <div className="flex h-full flex-col rounded-2xl bg-zinc-900/60 p-4 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] transition-colors hover:bg-zinc-900/80">
        <div className="flex items-center justify-between gap-3">
          <h4 className="text-base font-bold text-white">{model.name}</h4>
          <span className="shrink-0 rounded-full bg-red-400/10 px-2.5 py-0.5 text-xs font-medium text-red-300">
            {model.projects.length} 类适配件
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400 text-pretty">
          {model.projects.join(" · ")}
        </p>
        <div className="mt-3 flex items-center gap-1.5 pt-1 text-sm font-semibold text-red-400 transition-colors group-hover:text-red-300">
          查看项目说明
          <ArrowRight className="size-4" aria-hidden />
        </div>
      </div>
    </a>
  );
}
