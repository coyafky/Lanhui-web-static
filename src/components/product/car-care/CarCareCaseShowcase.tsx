import { carCareBeforeAfters } from "@/lib/car-care-products";

export function CarCareCaseShowcase() {
  return (
    <section
      id="car-care-cases"
      aria-labelledby="carcare-cases-title"
      className="py-16 sm:py-20 bg-zinc-900/50 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-emerald-400 uppercase">
            常见车况
          </p>
          <h2
            id="carcare-cases-title"
            className="text-2xl md:text-3xl font-bold text-white"
          >
            不同车况，对应不同处理方法
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            每台车的脏污程度和内饰材质不同，以下内容帮助你理解常见问题与处理方向。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {carCareBeforeAfters.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
            >
              <div className="p-5">
                <h3 className="text-base font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="shrink-0 rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-medium text-amber-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                      问题
                    </span>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item.problem}
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="shrink-0 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                      处理
                    </span>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {item.treatment}
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="shrink-0 rounded-full bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-zinc-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                      结果
                    </span>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-zinc-500">
          * 内容用于说明处理思路；实际项目和效果以到店检查确认结果为准。
        </p>
      </div>
    </section>
  );
}
