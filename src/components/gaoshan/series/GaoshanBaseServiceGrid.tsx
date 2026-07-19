import Link from "next/link";
import {
  Shield,
  CircleDot,
  Footprints,
  Layers,
  Car,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { gaoshanBaseServices } from "@/lib/gaoshan-series-services";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  CircleDot,
  Footprints,
  Layers,
  Car,
  Sparkles,
};

/**
 * 6 类基础服务（高山全系均可咨询）：解决什么 / 适合谁 / 进入对应产品页。
 * 车膜类卡片包含车衣、隔热膜、改色膜 3 个子入口。
 */
export function GaoshanBaseServiceGrid() {
  return (
    <section
      aria-labelledby="gaoshan-services-title"
      className="py-16 sm:py-20 bg-black border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-teal-400 uppercase">
            基础服务
          </p>
          <h2
            id="gaoshan-services-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            高山全系可以做哪些基础服务？
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            这些是高山车主最常做的方向。每类都链接到独立的专业页面，先了解清楚再决定。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gaoshanBaseServices.map((svc) => {
            const Icon = ICON_MAP[svc.iconName];
            return (
              <div
                key={svc.id}
                className="flex flex-col rounded-3xl bg-zinc-900/60 p-6 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
              >
                <div className="size-10 rounded-xl bg-teal-400/10 flex items-center justify-center mb-4">
                  {Icon && <Icon className="size-5 text-teal-400" aria-hidden />}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {svc.title}
                </h3>
                <p className="text-base text-zinc-400 leading-relaxed text-pretty flex-1">
                  {svc.painPoint}
                </p>
                <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                  适合：{svc.suitableFor}
                </p>

                {svc.subLinks ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {svc.subLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-white/[0.04] px-4 text-sm font-medium text-zinc-200 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-white/[0.08] active:scale-[0.96]"
                      >
                        {sub.label}
                        <ArrowRight className="size-3.5 text-teal-400" aria-hidden />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={svc.href}
                    className="mt-4 inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-white/[0.04] px-5 text-sm font-medium text-teal-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-white/[0.08] active:scale-[0.96]"
                  >
                    了解{svc.title}
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
