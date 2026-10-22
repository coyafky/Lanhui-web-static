import { volkswagenProjects, VOLKSWAGEN_PROJECT_ORDER } from "@/lib/volkswagen-all-models-products";

/**
 * 大众品牌页 S2「适配件功能特性」— 5 类项目卡。
 *
 * 用户意见（2026-10-05）：车型列表模式下，项目卡要说清「这个项目是做什么的」，
 * 让第一次来的用户先理解功能，再决定去哪个车型。
 * 型号编号不上页面，仅留档数据层；「360°」指全包工艺，非品牌名。
 */
export function VolkswagenProjectGrid() {
  return (
    <section
      id="volkswagen-projects"
      aria-labelledby="volkswagen-projects-title"
      className="py-16 sm:py-20 bg-black border-t border-white/[0.05] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-blue-400 uppercase">
            专车适配件
          </p>
          <h2
            id="volkswagen-projects-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            2 类项目，分别解决什么问题
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            先看每个项目是做什么的，再回上面对照你的车型支持哪些。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {VOLKSWAGEN_PROJECT_ORDER.map((key) => {
            const project = volkswagenProjects.find((p) => p.id === key);
            if (!project) return null;
            return (
              <article
                key={project.id}
                className="flex flex-col rounded-3xl bg-zinc-900/60 p-5 sm:p-6 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
              >
                <h3 className="text-lg font-bold text-white">{project.name}</h3>
                <p className="mt-3 flex-1 text-base text-zinc-400 leading-relaxed text-pretty">
                  {project.feature}
                </p>
                <div className="mt-4 border-t border-white/[0.05] pt-4">
                  <p className="text-xs text-zinc-500">
                    覆盖 {project.modelCount} 款车型
                  </p>
                  <p className="mt-1 text-xs text-zinc-400 text-pretty">
                    {project.topModels.join(" / ")}
                    {project.modelCount > 3 ? " 等" : ""}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-xs text-zinc-500 leading-relaxed">
          适装信息供参考，实际安装以门店现场检查（车型年款、底盘结构、电路走向）为准。
          型号编号不上页面，仅留档数据层，到店按实车确认。
        </p>
      </div>
    </section>
  );
}
