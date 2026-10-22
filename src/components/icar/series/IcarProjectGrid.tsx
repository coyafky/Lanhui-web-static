import { icarProjects } from "@/lib/icar-all-models-products";

/**
 * 日产品牌页 S2 项目卡（PageSpec §S2）— 6 类项目功能说明。
 */
export function IcarProjectGrid() {
  return (
    <section
      id="icar-projects"
      aria-labelledby="icar-projects-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-red-400 uppercase">
            专车适配件
          </p>
          <h2
            id="icar-projects-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            1 类项目，解决什么问题
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            先看每个项目是做什么的，再回上面对照你的车型支持哪些。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
          {icarProjects.map((project) => (
            <article
              key={project.key}
              className="flex flex-col rounded-2xl bg-zinc-900/60 p-5 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
            >
              <h3 className="text-lg font-bold text-white">{project.name}</h3>
              <p className="mt-1 text-sm font-medium text-red-300">
                {project.tagline}
              </p>
              <p className="mt-3 text-base leading-relaxed text-zinc-400 text-pretty">
                {project.description}
              </p>
              <div className="mt-4 flex items-center justify-between gap-3 text-sm">
                <span className="text-white">{project.coverage}</span>
                <span className="text-zinc-500 text-right">
                  {project.examples}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xs text-zinc-500 leading-relaxed">
          适装信息供参考，实际安装以门店现场检查（车型年款、动力类型、座椅布局、底盘结构、电路走向）为准，到店按实车确认。
        </p>
      </div>
    </section>
  );
}
