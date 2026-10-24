/** 产品中心的轻改装备入口，与其他服务地图共用卡片层级。 */

import Link from "next/link";
import { Wrench, CircleDot, Settings2 } from "lucide-react";
import type { ServiceRoute } from "@/lib/product-routes";
import { getServiceBlurb, getServiceSubtitle } from "@/lib/product-service-blurbs";

type Props = {
  services: readonly ServiceRoute[];
};

const ICON_MAP: Record<string, typeof Wrench> = {
  "electric-steps": Wrench,
  wheels: CircleDot,
  chassis: Settings2,
};

// 卡片文案集中在 product-service-blurbs 中维护。

export function LightModMap({ services }: Props) {
  return (
    <section
      aria-labelledby="lightmod-map-title"
      className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/30"
    >
      <div className="p-6 md:p-8">
        <div className="mb-6">
          <p className="mb-2 text-xs font-medium tracking-[0.18em] text-orange-400">
            LIGHT MOD · 轻改装
          </p>
          <h2
            id="lightmod-map-title"
            className="text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            围绕姿态与上下车的金属升级
          </h2>
          <p className="text-zinc-300 mt-2 text-sm md:text-base">
            按车型核对原车结构与安装条件，再选择合适的轻改装备。
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
          {services.map((service) => {
            const Icon = ICON_MAP[service.serviceSlug] ?? Wrench;
            const subtitle = getServiceSubtitle(service.serviceSlug);
            const blurb = getServiceBlurb(service.serviceSlug);

            return (
              <Link
                key={service.serviceSlug}
                href={service.canonicalPath}
                className="group block rounded-xl border border-white/[0.08] bg-zinc-950/60 p-5 transition-colors hover:border-orange-400/40 hover:bg-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              >
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-orange-400/20 bg-orange-500/10">
                    <Icon
                      className="size-5 text-orange-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-white md:text-lg">
                      {service.title}
                    </h3>
                    {/* 副标题：不再回退到 navLabel（与 title 常相同 → 「电动踏板 / 电动踏板」），无内容则隐藏 */}
                    {subtitle && (
                      <p className="mt-0.5 mb-2 text-xs text-zinc-400">
                        {subtitle}
                      </p>
                    )}
                    {blurb && (
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {blurb}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
