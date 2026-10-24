/**
 * FilmServiceMap — 车膜业务地图（cyan 主题）
 *
 * PRD v3 §4.3.1。视觉差异化：
 * - 背景: linear-gradient(135deg, cyan-400/10 0%, transparent 60%) + backdrop-blur-md
 * - 卡片：半透明膜片 (border cyan-800/50, bg cyan-950/20) + 内嵌 4-6 条光透射线
 * - Hover: backdrop-blur-xl + 1.02 scale, 200ms ease-out-expo
 * - 3 列紧凑网格, P0 live film 服务 (ppf / window-film / color-film)
 *
 * RSC — 不需要 useState, 纯展示
 */

import Link from "next/link";
import { Shield, Sun, Palette } from "lucide-react";
import type { ServiceRoute } from "@/lib/product-routes";
import { getServiceBlurb, getServiceSubtitle } from "@/lib/product-service-blurbs";

type Props = {
  services: readonly ServiceRoute[];
};

const ICON_MAP: Record<string, typeof Shield> = {
  ppf: Shield,
  "window-film": Sun,
  "color-film": Palette,
};

export function FilmServiceMap({ services }: Props) {
  return (
    <section
      aria-labelledby="film-map-title"
      className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/30"
    >
      <div className="p-6 md:p-8">
        {/* Eyebrow + H2 */}
        <div className="mb-6">
          <p className="mb-2 text-xs font-medium tracking-[0.18em] text-orange-400">
            FILM SERIES · 车膜系列
          </p>
          <h2
            id="film-map-title"
            className="text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            漆面与玻璃的膜系方案
          </h2>
          <p className="text-zinc-300 mt-2 text-sm md:text-base">
            根据漆面、玻璃与外观需求选择膜材，具体效果与施工方案以产品资料和实车检查为准。
          </p>
        </div>

        {/* 3 列紧凑网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {services.map((service) => {
            const Icon = ICON_MAP[service.serviceSlug] ?? Shield;
            const subtitle = getServiceSubtitle(service.serviceSlug);
            const blurb = getServiceBlurb(service.serviceSlug);
            return (
              <Link
                key={service.serviceSlug}
                href={service.canonicalPath}
                className="group block rounded-xl border border-white/[0.08] bg-zinc-950/60 p-5 transition-colors hover:border-orange-400/40 hover:bg-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              >
                <div>
                  <div className="flex items-start gap-3 mb-3">
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
                      {/* 副标题：不再回退到 navLabel（与 title 常相同 → 重复），无内容则隐藏 */}
                      {subtitle && (
                        <p className="mt-0.5 text-xs text-zinc-400">
                          {subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  {blurb && (
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {blurb}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
