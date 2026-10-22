import { ChevronDown } from "lucide-react";
import type { FilmFaq } from "@/lib/film-products";

/**
 * 车膜页通用 FAQ 折叠块（原生 details，服务端渲染）。
 */
export function FilmFaqSection({
  id = "film-faq",
  eyebrow = "常见问题",
  title,
  intro,
  faqs,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  faqs: FilmFaq[];
}) {
  return (
    <section id={id} className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">{eyebrow}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
          {intro && <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{intro}</p>}
        </div>

        <div className="space-y-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl bg-zinc-900/50 border border-white/[0.06]"
            >
              <summary className="flex items-center justify-between gap-3 cursor-pointer list-none px-5 py-4">
                <span className="text-sm sm:text-base font-medium text-white text-left">
                  {faq.question}
                </span>
                <ChevronDown className="w-4 h-4 flex-shrink-0 text-zinc-500 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-5 pb-4">
                <p className="text-sm text-zinc-400 leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
