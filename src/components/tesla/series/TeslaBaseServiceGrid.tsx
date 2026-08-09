"use client";

import Link from "next/link";
import {
  Shield,
  CircleDot,
  Car,
  Sparkles,
  Footprints,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { openWeChatModal } from "@/lib/wechat-modal";
import { teslaBaseServices } from "@/lib/tesla-series-services";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  CircleDot,
  Car,
  Sparkles,
  Footprints,
};

/**
 * 5 类基础服务（Tesla 车型需结合年款与原车结构确认）。
 * 车膜保护含 3 个子入口；无产品页的服务保留微信咨询兜底。
 */
export function TeslaBaseServiceGrid() {
  return (
    <section
      id="tesla-services"
      aria-labelledby="tesla-services-title"
      className="py-16 sm:py-20 bg-black border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-red-400 uppercase">
            基础服务
          </p>
          <h2
            id="tesla-services-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            Tesla Model 3 和 Model Y 可以做哪些基础服务？
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            这些是 Tesla 车主最常做的方向。每类都链接到独立的专业页面，先了解清楚再决定。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {teslaBaseServices.map((svc) => {
            const Icon = ICON_MAP[svc.iconName];
            return (
              <div
                key={svc.id}
                className="flex flex-col rounded-3xl bg-zinc-900/60 p-6 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
              >
                <div className="size-10 rounded-xl bg-red-400/10 flex items-center justify-center mb-4">
                  {Icon && (
                    <Icon className="size-5 text-red-400" aria-hidden />
                  )}
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
                        <ArrowRight
                          className="size-3.5 text-red-400"
                          aria-hidden
                        />
                      </Link>
                    ))}
                  </div>
                ) : svc.href ? (
                  <Link
                    href={svc.href}
                    className="mt-4 inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-white/[0.04] px-5 text-sm font-medium text-red-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-white/[0.08] active:scale-[0.96]"
                  >
                    了解{svc.title}
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => openWeChatModal()}
                    className="mt-4 inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-gradient-to-r from-red-500 to-red-600 px-5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition-transform active:scale-[0.96]"
                  >
                    <MessageCircle className="size-4" aria-hidden />
                    咨询{svc.title}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
