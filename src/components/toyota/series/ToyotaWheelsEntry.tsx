import Link from "next/link";
import { ArrowRight, CircleDot, Hammer } from "lucide-react";
import { toyotaWheelStyles } from "@/lib/toyota-wheels";

/**
 * 丰田品牌页 S4「轮毂入口」— 旋压 / 锻造 双卡，指向轮毂子页。
 * 390 单列堆叠，md+ 双卡并排。
 */
export function ToyotaWheelsEntry() {
  const spunCount = toyotaWheelStyles.filter((s) => s.finish === "spun").length;
  const forgedCount = toyotaWheelStyles.filter(
    (s) => s.finish === "forged",
  ).length;

  const entries = [
    {
      icon: CircleDot,
      name: "旋压轮毂",
      count: spunCount,
      desc: "旋压成型，兼顾强度与重量，日常走街与轻度越野够用；ET、PCD、CB 按车型核对。",
    },
    {
      icon: Hammer,
      name: "锻造轮毂",
      count: forgedCount,
      desc: "整块铝锭锻压成型，强度更高、更轻；部分款式区分平口 / 锥口，装车前确认原车轮毂数据。",
    },
  ] as const;

  return (
    <section
      aria-labelledby="toyota-wheels-title"
      className="py-16 sm:py-20 bg-black border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-red-400 uppercase">
            轮毂两线
          </p>
          <h2
            id="toyota-wheels-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            轮毂升级，先按数据筛款再谈样式
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            尺寸、孔距（PCD）、ET、中心孔（CB）要与原车核对；把车型年款发来，
            先筛出能上的款式，再约到店确认。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6">
          {entries.map(({ icon: Icon, name, count, desc }) => (
            <article
              key={name}
              className="flex flex-col rounded-3xl bg-zinc-900/60 p-5 sm:p-6 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-red-400/10 text-red-300">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-lg font-bold text-white">{name}</h3>
                <span className="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-xs font-medium text-zinc-300">
                  {count} 款
                </span>
              </div>
              <p className="mt-3 flex-1 text-base text-zinc-400 leading-relaxed text-pretty">
                {desc}
              </p>
              <Link
                href="/product/toyota/wheels"
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-red-400 transition-colors hover:text-red-300"
              >
                看轮毂参数
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
