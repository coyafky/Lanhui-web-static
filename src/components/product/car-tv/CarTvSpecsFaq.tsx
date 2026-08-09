import { ChevronDown } from "lucide-react";
import { carTvFaqs, carTvSpecGroups } from "@/lib/car-tv-products";

export function CarTvSpecsFaq() {
  return (
    <>
      <section id="car-tv-specs" className="scroll-mt-20 border-b border-white/[0.06] bg-[#0b0c10] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.18em] text-orange-400">产品参数</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              关键规格，一屏看清
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-300">
              参数根据现有产品资料整理，具体配置、接口与兼容能力以到店确认的产品批次为准。
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {carTvSpecGroups.map((group) => (
              <article key={group.title} className="min-w-0 border border-white/[0.08] bg-zinc-950 p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <dl className="mt-5 divide-y divide-white/[0.07]">
                  {group.items.map((item) => (
                    <div key={item.label} className="grid min-w-0 grid-cols-[6.5rem_minmax(0,1fr)] gap-3 py-3 first:pt-0 last:pb-0">
                      <dt className="text-sm text-zinc-400">{item.label}</dt>
                      <dd className="min-w-0 break-words text-sm leading-6 text-zinc-200">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-medium tracking-[0.18em] text-orange-400">常见问题</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">安装前需要了解什么</h2>
          </div>

          <div className="mt-9 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {carTvFaqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-medium text-white">
                  {faq.question}
                  <ChevronDown className="size-5 shrink-0 text-zinc-400 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="max-w-2xl pb-5 pr-9 text-sm leading-7 text-zinc-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
