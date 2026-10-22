import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { toyotaModels } from "@/lib/toyota-model-groups";

/**
 * 丰田品牌页 S3「车型适配入口」— 6 个主力车型卡（数据量 ≥15 条，进子页）。
 *
 * 卡内容：车型名 + 支持项目列表 + [查看完整适配明细] → /product/toyota/<slug>。
 * 视口规则：390 纵向 / md 双列 / xl 三列。
 */
export function ToyotaSubpageCards() {
  const featured = toyotaModels.filter((m) => m.subpage);

  return (
    <section
      aria-labelledby="toyota-subpages-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-red-400 uppercase">
            数据量大的车型
          </p>
          <h2
            id="toyota-subpages-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            6 款主力车型，看完整适配明细
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            这几款车适配件数据量大，单独开页，按项目对照年款、型号与材质。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {featured.map((m) => (
            <article
              key={m.slug}
              className="flex flex-col rounded-3xl bg-zinc-900/60 p-5 sm:p-6 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
            >
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-white">{m.name}</h3>
                <span className="rounded-full bg-red-400/10 px-2.5 py-0.5 text-xs font-medium text-red-300">
                  {m.projects.length} 类适配件
                </span>
              </div>
              <ul className="mt-4 flex-1 space-y-2.5">
                {m.projects.map((name) => (
                  <li key={name} className="flex items-start gap-2 text-sm text-zinc-400 leading-relaxed">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-red-400/70" aria-hidden />
                    {name}
                  </li>
                ))}
              </ul>
              <Link
                href={`/product/toyota/${m.slug}`}
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-red-400 transition-colors hover:text-red-300"
              >
                查看完整适配明细
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
