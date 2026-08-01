import { FileText, ChevronDown } from "lucide-react";
import { carMatProcess, carMatFaqs } from "@/lib/carmat-products";

export function CarMatServiceFlow() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 流程标题 */}
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-amber-400 uppercase">
            到店流程
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            从车型确认到交付检查，每一步都有记录
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl">
            到店安装，统一规范。施工时长取决于车型和覆盖范围，具体以到店评估为准。
          </p>
        </div>

        {/* 4 steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {carMatProcess.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6"
            >
              <p className="text-3xl font-bold text-amber-400/30 mb-3 tracking-wider tabular-nums">
                {item.step}
              </p>

              <h3 className="text-base font-semibold text-white mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                {item.description}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <FileText className="size-3 text-amber-400/60" aria-hidden />
                {item.deliverable}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mb-8 rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            常见问题
          </h3>
          <div className="space-y-2">
            {carMatFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl bg-white/[0.03]"
              >
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                  <span className="text-sm font-medium text-zinc-300 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className="size-4 text-zinc-500 flex-shrink-0 transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
