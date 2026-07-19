import { Check, Clock, AlertTriangle } from "lucide-react";
import {
  carCareServiceDetails,
} from "@/lib/car-care-products";
import type { CarCareServiceDetail } from "@/lib/car-care-products";
import { ChevronDown } from "lucide-react";

function ServiceCardDesktop({
  title,
  subtitle,
  description,
  suitableFor,
  timeRange,
  priceNote,
  highlights,
  exclusions,
}: CarCareServiceDetail) {
  return (
    <div className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-6 flex flex-col">
      <p className="text-xs tracking-widest text-emerald-400 mb-2">
        {subtitle}
      </p>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed mb-4">
        {description}
      </p>

      {/* 适合车况 */}
      <div className="mb-4">
        <p className="text-xs font-medium text-zinc-500 mb-1.5">适合车况</p>
        <p className="text-sm text-zinc-300 leading-relaxed">{suitableFor}</p>
      </div>

      {/* 时间 / 价格 */}
      <div className="flex flex-col gap-1.5 mb-4 p-3 rounded-xl bg-white/[0.03]">
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <Clock className="size-3 text-emerald-400/60 shrink-0" aria-hidden />
          {timeRange}
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <span className="size-3 shrink-0 flex items-center justify-center text-[10px] font-bold text-emerald-400/60">
            ¥
          </span>
          {priceNote}
        </div>
      </div>

      {/* 服务内容 */}
      <ul className="space-y-2 mb-4 flex-1">
        {highlights.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
            <Check className="size-4 text-emerald-400 mt-0.5 shrink-0" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* 不包含 */}
      <div className="rounded-xl bg-amber-400/[0.06] border border-amber-400/[0.12] p-3">
        <p className="text-xs font-medium text-amber-200/80 mb-1.5">
          不包含以下内容
        </p>
        <ul className="space-y-1">
          {exclusions.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-zinc-400">
              <AlertTriangle className="size-3 text-amber-400/60 mt-0.5 shrink-0" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ServiceCardMobile({
  title,
  subtitle,
  description,
  suitableFor,
  timeRange,
  priceNote,
  highlights,
  exclusions,
}: CarCareServiceDetail) {
  return (
    <details className="group rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]">
      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
        <div>
          <p className="text-xs tracking-widest text-emerald-400 mb-1">
            {subtitle}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-white">{title}</span>
            <span className="text-xs text-zinc-500">{timeRange}</span>
          </div>
          <p className="text-xs text-zinc-500 mt-0.5">{priceNote}</p>
        </div>
        <ChevronDown className="size-4 text-zinc-500 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
      </summary>
      <div className="px-5 pb-5 space-y-4">
        <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>

        <div>
          <p className="text-xs font-medium text-zinc-500 mb-1.5">适合车况</p>
          <p className="text-sm text-zinc-300 leading-relaxed">{suitableFor}</p>
        </div>

        <ul className="space-y-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
              <Check className="size-4 text-emerald-400 mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="rounded-xl bg-amber-400/[0.06] border border-amber-400/[0.12] p-3">
          <p className="text-xs font-medium text-amber-200/80 mb-1.5">
            不包含以下内容
          </p>
          <ul className="space-y-1">
            {exclusions.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-zinc-400">
                <AlertTriangle className="size-3 text-amber-400/60 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </details>
  );
}

export function CarCareServiceGrid() {
  return (
    <section
      id="car-care-services"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
      aria-labelledby="carcare-services-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-emerald-400 uppercase">
            服务方案
          </p>
          <h2
            id="carcare-services-title"
            className="text-2xl md:text-3xl font-bold text-white"
          >
            范围、时间和价格，在施工前说清楚
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            不盲目叠加项目。选需要的清洁，不需要的不建议做。
          </p>
        </div>

        {/* 普通洗车 vs 精洗对比 */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-zinc-900/40 shadow-[0_0_0_1px_oklch(1_0_0/0.04)] p-5">
            <p className="text-xs tracking-widest text-zinc-500 mb-2">
              普通洗车
            </p>
            <h4 className="text-base font-semibold text-zinc-300 mb-2">
              表面清洁
            </h4>
            <p className="text-sm text-zinc-500 leading-relaxed">
              单桶水、重复用毛巾，主要处理表面浮尘。门缝、轮毂、玻璃油膜等死角通常不在范围内。
            </p>
          </div>
          <div className="rounded-2xl bg-emerald-400/[0.04] shadow-[0_0_0_1px_oklch(0.7_0.12_80/0.15)] p-5">
            <p className="text-xs tracking-widest text-emerald-400 mb-2">
              蓝辉精洗
            </p>
            <h4 className="text-base font-semibold text-white mb-2">
              分区深度清洁
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              两桶水法 + 砂石隔离网降低划痕风险，分区毛巾和刷具，清洁门缝、轮毂、玻璃油膜等死角。
            </p>
          </div>
        </div>

        {/* Desktop: 2×2 grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-5">
          {carCareServiceDetails.map((service) => (
            <ServiceCardDesktop key={service.id} {...service} />
          ))}
        </div>

        {/* Mobile: accordion */}
        <div className="md:hidden space-y-2">
          {carCareServiceDetails.map((service) => (
            <ServiceCardMobile key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
