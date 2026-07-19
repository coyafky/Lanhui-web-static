import { ShieldCheck, SprayCan, Car, PaintBucket } from "lucide-react";
import { windowFilmConstructionProofs } from "@/lib/window-film-experiences";

const ICONS = [ShieldCheck, SprayCan, Car, PaintBucket] as const;

export function WindowFilmConstructionProofs() {
  return (
    <section
      id="construction-proofs"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            施工保障
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            好膜，也要贴得好
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            正品现场核验 · 无尘空间施工 · 新能源车型适配 · 内饰遮蔽保护
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {windowFilmConstructionProofs.map((proof, i) => {
            const Icon = ICONS[i] ?? ShieldCheck;
            return (
              <div
                key={proof.title}
                className="flex gap-4 sm:gap-5 rounded-2xl bg-zinc-900/50 border border-white/[0.06] p-5 sm:p-6"
              >
                {/* 图片占位 */}
                <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-zinc-900/80 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <Icon className="w-5 h-5 text-zinc-700 mx-auto mb-1" />
                    <p className="text-[10px] text-zinc-700 leading-tight px-1">
                      {proof.imageLabel}
                    </p>
                  </div>
                </div>

                {/* 文字 */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-white mb-1.5">
                    {proof.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {proof.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
