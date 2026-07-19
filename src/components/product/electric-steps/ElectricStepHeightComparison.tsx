import { ArrowDown, ArrowUp } from "lucide-react";

export function ElectricStepHeightComparison() {
  return (
    <section
      id="electric-step-height"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
      aria-labelledby="electric-step-height-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            展开与收起
          </p>
          <h2
            id="electric-step-height-title"
            className="text-2xl md:text-3xl font-bold text-white"
          >
            降低跨步高度，同时保留原车姿态
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            踏板展开后提供一个中间落脚位置，显著降低上下车的实际跨步高度；收起后尽量贴合车侧，不影响原车外观。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 收起状态 */}
          <div className="rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="size-10 rounded-xl bg-white/[0.05] flex items-center justify-center">
                <ArrowUp className="size-5 text-zinc-400" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">收起状态</h3>
                <p className="text-sm text-zinc-400">关门后踏板自动收回</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              踏板收回后紧贴车侧底部，尽量保留原车侧面线条，不会让车辆显得笨重或改变整体外观。
            </p>
          </div>

          {/* 展开状态 */}
          <div className="rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="size-10 rounded-xl bg-orange-400/10 flex items-center justify-center">
                <ArrowDown className="size-5 text-orange-400" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">展开状态</h3>
                <p className="text-sm text-orange-400">开门即展开</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              踏板展开后提供一个宽大、防滑的落脚平台，降低上下车实际跨步高度，老人、小孩和穿正装的乘客都能更从容地进出。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
