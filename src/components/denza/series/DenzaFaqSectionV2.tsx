import { ChevronDown } from "lucide-react";
import { denzaSeriesFaq } from "@/lib/denza-series-services";

/**
 * FAQ 手风琴。H2 使用问题型标题（GEO）。
 */
export function DenzaFaqSectionV2() {
  return (
    <section
      aria-labelledby="denza-faq-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            常见问题
          </p>
          <h2
            id="denza-faq-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            腾势贴膜、踏板和地板会影响原车结构吗？
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            施工前逐项核对影响范围，涉及拆装、线路或座椅滑轨的项目书面告知后才动工。更多问题见下方解答。
          </p>
        </div>

        <div className="space-y-2 max-w-3xl">
          {denzaSeriesFaq.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 p-5">
                <span className="text-base font-semibold text-white">
                  {item.question}
                </span>
                <ChevronDown
                  className="size-4 shrink-0 text-zinc-500 transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="px-5 pb-5 text-base text-zinc-400 leading-relaxed text-pretty">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
