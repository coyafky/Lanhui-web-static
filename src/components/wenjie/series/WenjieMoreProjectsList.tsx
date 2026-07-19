import { ChevronDown, MessageCircle } from "lucide-react";
import {
  wenjieSeriesFeaturedProjects,
  wenjieSeriesOptionalProjects,
  type WenjieSeriesUpgradeCategory,
  type WenjieSeriesUpgradeProject,
} from "@/lib/wenjie-series-upgrade-projects";

const CATEGORY_LABELS: Record<WenjieSeriesUpgradeCategory, string> = {
  paint_protection: "漆面保护",
  film_style: "膜类风格",
  chassis_protection: "底盘防护",
  rear_cabin: "后排座舱",
  electric_convenience: "电动便利",
  infotainment: "信息娱乐",
  exterior_parts: "外观件",
  outdoor_accessory: "户外配件",
  cabin_comfort: "座舱舒适",
  noise_sealing: "隔音密封",
};

/** 已由 6 类基础服务覆盖，不再进折叠清单 */
const COVERED_BY_BASE_SERVICES = new Set([
  "wenjie-series-paint-film",
  "wenjie-series-window-film",
  "wenjie-series-color-film",
  "wenjie-series-wheels",
  "wenjie-series-electric-step",
  "wenjie-series-rear-aluminum-floor",
]);

function groupByCategory(projects: readonly WenjieSeriesUpgradeProject[]) {
  const groups = new Map<WenjieSeriesUpgradeCategory, WenjieSeriesUpgradeProject[]>();
  for (const p of projects) {
    const list = groups.get(p.category) ?? [];
    list.push(p);
    groups.set(p.category, list);
  }
  return groups;
}

/**
 * 更多可咨询项目 —— 折叠清单（按类别分组）。
 * 复杂改装（HUD/电动门/旋转座椅等）不与基础服务同级展示，
 * 未准备好图片和业务资料的项目以紧凑清单呈现，均需按车型复核。
 */
export function WenjieMoreProjectsList() {
  const remaining = [
    ...wenjieSeriesFeaturedProjects,
    ...wenjieSeriesOptionalProjects,
  ].filter((p) => !COVERED_BY_BASE_SERVICES.has(p.key));
  const groups = groupByCategory(remaining);

  return (
    <section
      aria-labelledby="wenjie-more-title"
      className="py-16 sm:py-20 bg-black border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-cyan-400 uppercase">
            更多项目
          </p>
          <h2
            id="wenjie-more-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            更多可咨询项目
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            以下项目均需结合车型、年款和配置复核后确认方案。展开查看，或直接咨询你关注的项目。
          </p>
        </div>

        <div className="space-y-2">
          {[...groups.entries()].map(([category, projects]) => (
            <details
              key={category}
              className="group rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between p-5">
                <span className="flex items-center gap-3">
                  <span className="text-base font-semibold text-white">
                    {CATEGORY_LABELS[category]}
                  </span>
                  <span className="text-xs text-zinc-500">
                    {projects.length} 项
                  </span>
                </span>
                <ChevronDown
                  className="size-4 text-zinc-500 transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-2 px-5 pb-5 sm:grid-cols-2">
                {projects.map((p) => (
                  <li
                    key={p.key}
                    className="flex items-baseline justify-between gap-3 border-b border-white/[0.04] py-2 last:border-b-0"
                  >
                    <span className="text-sm text-zinc-200">{p.name}</span>
                    <span className="inline-flex shrink-0 items-center gap-1 text-xs text-zinc-500">
                      <MessageCircle className="size-3" aria-hidden />
                      需车型复核
                    </span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
