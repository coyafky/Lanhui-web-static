import { ChevronDown, MessageCircle } from "lucide-react";
import {
  zeekrProducts,
  type ZeekrProduct,
  type ZeekrProductCategory,
} from "@/lib/zeekr-products";

function groupByCategory(products: readonly ZeekrProduct[]) {
  const groups = new Map<ZeekrProductCategory, ZeekrProduct[]>();
  for (const p of products) {
    const list = groups.get(p.category) ?? [];
    list.push(p);
    groups.set(p.category, list);
  }
  return groups;
}

/**
 * 更多可咨询配件 —— 23 款极氪配件按类别折叠清单。
 * 零散配件（桌板、垃圾桶、门槛条等）不与基础服务同级展示，
 * 条目带车型标签（9X / 8X / 009），均需按车型复核。
 */
export function ZeekrMoreProjectsList() {
  const groups = groupByCategory(zeekrProducts);

  return (
    <section
      aria-labelledby="zeekr-more-title"
      className="py-16 sm:py-20 bg-black border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            更多配件
          </p>
          <h2
            id="zeekr-more-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            更多可咨询配件
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            以下配件均需结合车型、年款和配置复核后确认方案。展开查看，或直接咨询你关注的项目。
          </p>
        </div>

        <div className="space-y-2">
          {[...groups.entries()].map(([category, products]) => (
            <details
              key={category}
              className="group rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between p-5">
                <span className="flex items-center gap-3">
                  <span className="text-base font-semibold text-white">
                    {category}
                  </span>
                  <span className="text-xs text-zinc-500">
                    {products.length} 项
                  </span>
                </span>
                <ChevronDown
                  className="size-4 text-zinc-500 transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-2 px-5 pb-5 sm:grid-cols-2">
                {products.map((p) => (
                  <li
                    key={p.id}
                    className="flex items-baseline justify-between gap-3 border-b border-white/[0.04] py-2 last:border-b-0"
                  >
                    <span className="flex items-baseline gap-2 text-sm text-zinc-200">
                      {p.name}
                      <span className="text-xs text-zinc-500">{p.model}</span>
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1 text-xs text-zinc-500">
                      <MessageCircle className="size-3" aria-hidden />
                      需车型复核
                    </span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
