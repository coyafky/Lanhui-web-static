import type { FitmentConfig, FitmentProject, VehicleTheme } from "./vehicle-page.schema";

const THEME_ACCENT: Record<VehicleTheme, string> = {
  orange: "text-orange-400",
  cyan: "text-cyan-400",
  amber: "text-amber-400",
  blue: "text-blue-400",
  green: "text-emerald-400",
  red: "text-red-400",
  neutral: "text-zinc-400",
};

const THEME_BORDER: Record<VehicleTheme, string> = {
  orange: "group-open:border-orange-500/30",
  cyan: "group-open:border-cyan-500/30",
  amber: "group-open:border-amber-500/30",
  blue: "group-open:border-blue-500/30",
  green: "group-open:border-emerald-500/30",
  red: "group-open:border-red-500/30",
  neutral: "group-open:border-zinc-500/30",
};

interface Props {
  config: FitmentConfig;
  theme: VehicleTheme;
}

/** 合并一组车型节的项目：同名项目拼方案，不同名并排 */
function mergeProjects(projects: FitmentProject[]): FitmentProject[] {
  const merged = new Map<string, FitmentProject>();
  for (const project of projects) {
    const existing = merged.get(project.name);
    if (existing) {
      existing.specs.push(...project.specs);
    } else {
      merged.set(project.name, { name: project.name, specs: [...project.specs] });
    }
  }
  return [...merged.values()];
}

/** 项目 accordion 列表（每组车型内部 / 默认合并模式共用） */
function ProjectAccordions({ projects, theme }: { projects: FitmentProject[]; theme: VehicleTheme }) {
  const totalSpecs = projects.reduce((n, p) => n + p.specs.length, 0);
  return (
    <div className="space-y-3">
      {projects.map((project) => (
        <details
          key={project.name}
          className={`group rounded-xl border border-zinc-800 bg-zinc-900 transition-colors ${THEME_BORDER[theme]}`}
        >
          <summary className="cursor-pointer px-5 md:px-6 py-4 flex items-center justify-between gap-4 min-h-[44px]">
            <span className="text-white font-medium">{project.name}</span>
            <span className={`shrink-0 text-xs ${THEME_ACCENT[theme]}`}>
              {project.specs.length} 个方案
            </span>
          </summary>
          <div className="px-5 md:px-6 pb-5 space-y-3">
            {project.specs.map((spec, i) => (
              <div
                key={i}
                className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-4 text-sm"
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {spec.material && (
                    <span className="inline-flex items-center text-xs text-zinc-200 bg-zinc-800 border border-zinc-700 rounded-full px-3 py-1">
                      {spec.material}
                    </span>
                  )}
                  {spec.year && (
                    <span className="inline-flex items-center text-xs text-zinc-400 bg-zinc-800/60 border border-zinc-700/60 rounded-full px-3 py-1">
                      {spec.year}
                    </span>
                  )}
                  {spec.dynamics && (
                    <span className="inline-flex items-center text-xs text-zinc-400 bg-zinc-800/60 border border-zinc-700/60 rounded-full px-3 py-1">
                      {spec.dynamics}
                    </span>
                  )}
                  {spec.date && (
                    <span className="ml-auto text-xs text-zinc-600">
                      更新于 {spec.date}
                    </span>
                  )}
                </div>
                {spec.label && (
                  <p className="text-zinc-300 leading-relaxed mb-1">{spec.label}</p>
                )}
                {spec.note && (
                  <p className="text-xs text-zinc-500 leading-relaxed mt-1.5">{spec.note}</p>
                )}
              </div>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}

/**
 * 适配速查块：回答「这个项目适合我的配置吗？」
 * 数据来自供应商适配库（src/lib/fitment/<品牌>.ts），code（供应商编号）默认不展示。
 * - 默认模式：config.models 多个节同名项目合并方案（如 SU7 节 + 「SU7、YU7」全系节）。
 * - groupByModel 模式：品牌页多车型场景，按车型分组渲染，避免跨车型同名项目串方案。
 */
export function FitmentQuickCheck({ config, theme }: Props) {
  const merged = mergeProjects(config.models.flatMap((m) => m.projects));
  if (merged.length === 0) return null;

  const totalSpecs = merged.reduce((n, p) => n + p.specs.length, 0);

  return (
    <section
      aria-labelledby="fitment-title"
      className="py-16 md:py-20 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="fitment-title" className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
          {config.heading ?? "适配速查"}
        </h2>
        <p className="text-center text-sm text-zinc-500 mb-2">
          {config.groupByModel
            ? `${config.models.length} 个车型 · ${totalSpecs} 个适配方案 · 数据来自蓝辉供应商适配库`
            : `${merged.length} 个项目 · ${totalSpecs} 个适配方案 · 数据来自蓝辉供应商适配库`}
        </p>
        <p className="text-center text-xs text-zinc-600 mb-8">
          材质 / 规格 / 年款均为适配库原文，实际适配以门店现场检查为准
        </p>

        {config.groupByModel ? (
          <div className="space-y-3">
            {config.models.map((model) => {
              const projects = mergeProjects(model.projects);
              if (projects.length === 0) return null;
              const modelSpecs = projects.reduce((n, p) => n + p.specs.length, 0);
              return (
                <details
                  key={model.model}
                  className={`group rounded-xl border border-zinc-800 bg-zinc-900 transition-colors ${THEME_BORDER[theme]}`}
                >
                  <summary className="cursor-pointer px-5 md:px-6 py-4 flex items-center justify-between gap-4 min-h-[44px]">
                    <span className="text-white font-medium">{model.model}</span>
                    <span className={`shrink-0 text-xs ${THEME_ACCENT[theme]}`}>
                      {projects.length} 个项目 · {modelSpecs} 个方案
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5">
                    <ProjectAccordions projects={projects} theme={theme} />
                  </div>
                </details>
              );
            })}
          </div>
        ) : (
          <ProjectAccordions projects={merged} theme={theme} />
        )}
      </div>
    </section>
  );
}
