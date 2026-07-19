import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { stores } from "@/lib/store";
import { xpengLocalAnswer } from "@/lib/xpeng-series-services";

/**
 * 本地问答直接答案段（GEO）：先给结论，再列门店 NAP（数据来自 store.ts 单一来源）。
 */
export function XpengLocalAnswerSection() {
  const store = stores[0];

  return (
    <section
      aria-labelledby="xpeng-local-title"
      className="py-16 sm:py-20 bg-black border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            本地门店
          </p>
          <h2
            id="xpeng-local-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            顺德大良哪里可以做小鹏汽车贴膜和轻改？
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-pretty text-zinc-300">
            {xpengLocalAnswer}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 rounded-3xl bg-zinc-900/60 p-6 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] sm:grid-cols-3 sm:p-8">
          <div className="flex items-start gap-3">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange-400/10">
              <MapPin className="size-5 text-orange-400" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{store.name}</p>
              <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                {store.address}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange-400/10">
              <Phone className="size-5 text-orange-400" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">联系电话</p>
              <a
                href={store.phoneTel}
                className="mt-1 inline-flex min-h-11 items-center text-sm text-zinc-400 transition-colors hover:text-orange-300"
              >
                {store.phone}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange-400/10">
              <Clock className="size-5 text-orange-400" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">营业时间</p>
              <p className="mt-1 text-sm text-zinc-400">{store.businessHours}</p>
            </div>
          </div>
        </div>

        <Link
          href="/agent"
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-white/[0.04] px-5 text-sm font-medium text-orange-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-white/[0.08] active:scale-[0.96]"
        >
          查看门店详情与到店路线
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
