import { flooringCoreValues, flooringProDetails } from "@/lib/flooring-products";

export function FlooringStructureGrid() {
  return (
    <section
      aria-labelledby="flooring-structure-title"
      className="py-16 sm:py-20 bg-zinc-900/50 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── 3 个核心价值 ─── */}
        <div className="mb-16">
          <p className="text-xs tracking-widest mb-3 text-amber-400 uppercase">
            核心价值
          </p>
          <h2
            id="flooring-structure-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            地板总成能带来什么改变
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty mb-8">
            三项最直接的变化，让你判断是否值得为后排做一次升级。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {flooringCoreValues.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-zinc-400 leading-relaxed text-pretty">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 产品组成说明 ─── */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-2">
            地板总成包含哪些部分
          </h3>
          <p className="text-sm text-zinc-400 mb-6 max-w-xl">
            五个组件共同构成完整的后排地板方案，具体组合根据车型结构与使用需求确认。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "地板主板", desc: "后排地板主体视觉件，是颜色和整体质感的核心展示区域。", primary: true },
              { name: "滑轨饰条", desc: "围绕座椅滑轨区域做视觉整合，减少缝隙积灰，不影响座椅移动。" },
              { name: "中门迎宾踏板", desc: "承接上下车区域，强化进出后排的便利性和整体观感。" },
              { name: "休息脚踏", desc: "服务后排脚部停放和舒适体验，是否带灯光以具体款式为准。" },
              { name: "尾箱地板", desc: "与后排地板统一材质和颜色，兼顾收纳、清洁和高频装卸场景。" },
            ].map((item) => (
              <div
                key={item.name}
                className={`rounded-xl p-4 ${
                  item.primary
                    ? "bg-amber-400/[0.06] shadow-[0_0_0_1px_oklch(0.8_0.18_90/0.2)]"
                    : "bg-white/[0.03]"
                }`}
              >
                <h4 className="text-base font-semibold text-white mb-1">
                  {item.name}
                  {item.primary && (
                    <span className="ml-2 inline-flex rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-medium text-amber-300">
                      核心
                    </span>
                  )}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 4 个专业细节 ─── */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            施工与材质细节
          </h3>
          <p className="text-sm text-zinc-400 mb-6 max-w-xl">
            不只是产品本身，安装方式和材质选择同样影响最终效果。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {flooringProDetails.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5"
              >
                <h4 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed text-pretty">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
