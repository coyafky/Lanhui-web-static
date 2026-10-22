import { ChevronDown } from "lucide-react";
import { landRoverSeriesFaq } from "@/lib/land-rover-series-services";

/**
 * 路虎品牌页 S4 FAQ 手风琴（PageSpec §S4）。
 */
export function LandRoverFaqSection() {
  return (
    <section
      aria-labelledby="land-rover-faq-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-teal-400 uppercase">
            常见问题
          </p>
          <h2
            id="land-rover-faq-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            路虎车主最常问的问题
          </h2>
        </div>

        <div className="space-y-2 max-w-3xl">
          {landRoverSeriesFaq.map((item) => (
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
