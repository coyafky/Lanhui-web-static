import { Search, Palette, Scissors, ShieldCheck, AlertTriangle } from "lucide-react";

const PROOFS = [
  {
    icon: Search,
    title: "漆面施工前检测",
    description:
      "施工前全面检测原车漆面状态。原厂漆、补漆、老化漆面的附着力和施工方案不同，我们会根据检测结果选择适合的处理方式。",
  },
  {
    icon: Palette,
    title: "实物色板确认",
    description:
      "到店后先看真实色板，在不同光线下确认颜色质感。屏幕显示与实际膜面色差不可避免，实物确认是选色的最后一道保障。",
  },
  {
    icon: Scissors,
    title: "专车包边方案",
    description:
      "每款车型的门边、翼子板、保险杠弧度不同，我们使用专车数据裁膜并手工包边收口，确保边缘服帖不留白边。",
  },
  {
    icon: ShieldCheck,
    title: "交付复检",
    description:
      "施工完成后逐块检查包边、气泡、色差和边角贴合度，发现问题当场修正。交付前确保每个角度都经得起细看。",
  },
] as const;

export function ColorFilmConstructionProofs() {
  return (
    <section
      id="construction-proofs"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            施工保障
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            好膜，也要贴得好
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            改色膜最终效果取决于施工质量。从漆面检测到交付复检，每一步都不能省。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {PROOFS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-4 sm:gap-5 rounded-2xl bg-zinc-900/50 border border-white/[0.06] p-5 sm:p-6"
            >
              <div className="flex-shrink-0 size-10 sm:size-11 rounded-xl bg-white/[0.05] flex items-center justify-center">
                <Icon className="size-5 text-orange-400/70" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-white mb-1.5">
                  {title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 边界条件说明 */}
        <div className="mt-6 rounded-2xl bg-amber-400/[0.06] border border-amber-400/[0.12] p-5 sm:p-6">
          <div className="flex gap-3">
            <AlertTriangle className="size-5 text-amber-400/80 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-amber-300 mb-1.5">
                关于撕除与漆面影响的重要说明
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                改色膜撕除时对原车漆面的影响取决于漆面原始状态。原厂漆面在正常施工和标准操作下撕除，通常不会损伤漆面；补漆、老化漆面或已有损伤的漆面，撕除时可能存在局部脱漆风险。我们会在施工前检测漆面状态并与你确认，不建议在已知漆面问题区域直接覆膜。质保范围以施工前双方确认的检测记录为准。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
