import { Check, Clock, ChevronDown } from "lucide-react";
import { carCareServiceDetails } from "@/lib/car-care-products";
import type { CarCareServiceDetail } from "@/lib/car-care-products";

function ServiceCardDesktop({
  title,
  subtitle,
  description,
  suitableFor,
  timeRange,
  priceNote,
  highlights,
}: CarCareServiceDetail) {
  return (
    <div className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-6 flex flex-col">
      <p className="text-xs tracking-widest text-emerald-400 mb-2">
        {subtitle}
      </p>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-sm text-zinc-300 leading-relaxed mb-4">
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
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-zinc-300"
          >
            <Check className="size-4 text-emerald-400 mt-0.5 shrink-0" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
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
}: CarCareServiceDetail) {
  return (
    <details className="group rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]">
      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
        <div className="min-w-0">
          <p className="text-xs tracking-widest text-emerald-400 mb-1">
            {subtitle}
          </p>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-zinc-400">
            {timeRange}
          </p>
          <p className="mt-0.5 text-xs text-zinc-400">{priceNote}</p>
        </div>
        <ChevronDown className="size-4 text-zinc-500 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
      </summary>
      <div className="px-5 pb-5 space-y-4">
        <p className="text-sm text-zinc-300 leading-relaxed">{description}</p>

        <div>
          <p className="text-xs font-medium text-zinc-400 mb-1.5">适合车况</p>
          <p className="text-sm text-zinc-300 leading-relaxed">{suitableFor}</p>
        </div>

        <ul className="space-y-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-zinc-300"
            >
              <Check
                className="size-4 text-emerald-400 mt-0.5 shrink-0"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
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
            服务范围、预计时间与费用，会在施工前与您确认
          </h2>
          <p className="mt-3 text-zinc-300 max-w-2xl leading-relaxed">
            我们会先了解车况和清洁需求，再说明适合的项目；没有必要增加的内容，也会如实告知。
          </p>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-5">
          {carCareServiceDetails.map((service) => (
            <ServiceCardDesktop key={service.id} {...service} />
          ))}
        </div>

        {/* Mobile: accordion */}
        <div className="space-y-2 lg:hidden">
          {carCareServiceDetails.map((service) => (
            <ServiceCardMobile key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
