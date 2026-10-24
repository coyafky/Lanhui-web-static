import Link from "next/link";
import { Layers, Sparkles } from "lucide-react";
import type { ServiceRoute } from "@/lib/product-routes";
import { getServiceBlurb } from "@/lib/product-service-blurbs";

type Props = {
  services: readonly ServiceRoute[];
};

const ICON_MAP: Record<string, typeof Sparkles> = {
  flooring: Layers,
  "floor-mats": Sparkles,
};

// 卡片文案集中在 product-service-blurbs 中维护。

export function PracticalAccessoryMap({ services }: Props) {
  if (services.length === 0) return null;

  return (
    <section
      aria-labelledby="practical-accessory-title"
      className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/30"
    >
      <div className="p-6 md:p-8">
        <div className="mb-6">
          <p className="mb-2 text-xs font-medium tracking-[0.18em] text-orange-400">
            PRACTICAL ACCESSORIES · 实用配件
          </p>
          <h2
            id="practical-accessory-title"
            className="text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            围绕座舱日常使用的保护与质感升级
          </h2>
          <p className="text-zinc-300 mt-2 text-sm md:text-base">
            从汽车地板到汽车垫，优先解决清洁维护、空间整洁和内饰统一感。
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
          {services.map((service) => {
            const Icon = ICON_MAP[service.serviceSlug] ?? Sparkles;
            // 不再用 service.title 兜底（会把标题重复成描述）；缺文案则隐藏该行
            const blurb = getServiceBlurb(service.serviceSlug);

            return (
              <Link
                key={service.serviceSlug}
                href={service.canonicalPath}
                className="group block rounded-xl border border-white/[0.08] bg-zinc-950/60 p-5 transition-colors hover:border-orange-400/40 hover:bg-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-orange-400/20 bg-orange-500/10">
                    <Icon className="size-5 text-orange-300" aria-hidden="true" />
                  </div>
                  <span className="text-xs text-zinc-500">{service.status === "live" ? "已上线" : "整理中"}</span>
                </div>
                <h3 className="text-base font-semibold text-white md:text-lg">{service.title}</h3>
                {blurb && <p className="mt-2 text-sm leading-7 text-zinc-300">{blurb}</p>}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
