import { windowFilmConstructionProofs } from "@/lib/window-film-experiences";

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
          <p className="mt-4 text-zinc-300 max-w-2xl mx-auto">
            从产品核验到施工环境与车辆保护，每一步都围绕膜材性能的稳定呈现。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {windowFilmConstructionProofs.map((proof) => (
            <div
              key={proof.title}
              className="rounded-2xl bg-zinc-900/50 border border-white/[0.06] p-5 sm:p-6"
            >
              <h3 className="text-base font-semibold text-white mb-1.5">
                {proof.title}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {proof.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
