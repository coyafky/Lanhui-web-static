import { ArrowRight } from "lucide-react";

/**
 * 大众品牌页 S3「主力车型入口」— 途锐 / 途昂 / 途观系三卡。
 *
 * 大众单车型数据均 <15 条，不开子页；这三卡锚点跳回 S1 车型区定位。
 * 卡内容：车型 + 支持项目 + 代表年款一句话。
 */
const FEATURED = [
  {
    name: "途锐",
    projects: ["底盘护板", "电动踏板"],
    note: "护板含差速器、双油箱铝镁合金单件；踏板 2011-2018、2019+ 两代年款",
    anchor: "#volkswagen-models",
  },
  {
    name: "途昂",
    projects: ["底盘护板", "电动踏板"],
    note: "护板分大板/小板方案；踏板 2017+ 与 2025（PRO）",
    anchor: "#volkswagen-models",
  },
  {
    name: "途观系",
    projects: ["底盘护板", "电动踏板"],
    note: "途观 / 途观L / 途观X 三款，护板覆盖 2010-2024 各代年款",
    anchor: "#volkswagen-models",
  },
] as const;

export function VolkswagenFeaturedModels() {
  return (
    <section
      aria-labelledby="volkswagen-featured-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-blue-400 uppercase">
            常来店的主力车型
          </p>
          <h2
            id="volkswagen-featured-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            途锐 / 途昂 / 途观系，装得比较多
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            这三款车到店装护板、踏板的比较多，适配细节相对完整。选好车型后在上方车型速览里定位。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6">
          {FEATURED.map((m) => (
            <a
              key={m.name}
              href={m.anchor}
              className="group flex flex-col rounded-3xl bg-zinc-900/60 p-5 sm:p-6 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] transition-colors hover:bg-zinc-900/80"
            >
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-white">{m.name}</h3>
                <span className="rounded-full bg-blue-400/10 px-2.5 py-0.5 text-xs font-medium text-blue-300">
                  {m.projects.length} 类适配件
                </span>
              </div>
              <ul className="mt-4 flex-1 space-y-2.5">
                {m.projects.map((name) => (
                  <li key={name} className="flex items-start gap-2 text-sm text-zinc-400 leading-relaxed">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-blue-400/70" aria-hidden />
                    {name}
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-white/[0.05] pt-4 text-xs text-zinc-500 leading-relaxed text-pretty">
                {m.note}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors group-hover:text-blue-300">
                去车型区定位
                <ArrowRight className="size-4" aria-hidden />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
