"use client";

import { useState } from "react";
import {
  Droplets,
  SprayCan,
  Wind,
  Eye,
  CircleDot,
  Clock,
  AlertTriangle,
  MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  carCareConditionOptions,
  getRecommendedServices,
} from "@/lib/car-care-products";
import type { CarCareConditionOption } from "@/lib/car-care-products";
import { openWeChatModal } from "@/lib/wechat-modal";

const ICON_MAP: Record<CarCareConditionOption["icon"], LucideIcon> = {
  Droplets,
  SprayCan,
  Wind,
  Eye,
  CircleDot,
};

export function CarCareConditionSelector() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const recommendedServices = selectedId
    ? getRecommendedServices(selectedId)
    : [];

  return (
    <section
      id="car-care-condition"
      aria-labelledby="carcare-condition-title"
      className="py-16 sm:py-20 bg-zinc-900/50 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-emerald-400 uppercase">
            先看车况，再选服务
          </p>
          <h2
            id="carcare-condition-title"
            className="text-2xl md:text-3xl font-bold text-white"
          >
            你现在最困扰的是？
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl">
            选择最接近你车况的选项，我们会推荐匹配的清洁方案。
          </p>
        </div>

        {/* 选择按钮 */}
        <div className="flex flex-nowrap gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
          {carCareConditionOptions.map((option) => {
            const Icon = ICON_MAP[option.icon];
            const isSelected = selectedId === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() =>
                  setSelectedId(isSelected ? null : option.id)
                }
                className={`inline-flex shrink-0 min-h-11 items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors active:scale-[0.96] ${
                  isSelected
                    ? "bg-emerald-400/10 text-emerald-300 shadow-[0_0_0_1px_oklch(0.7_0.12_80/0.3)]"
                    : "bg-white/[0.04] text-zinc-400 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] hover:text-zinc-200"
                }`}
              >
                <Icon className="size-4" aria-hidden />
                {option.label}
              </button>
            );
          })}
        </div>

        {/* 推荐服务 */}
        {selectedId && (
          <div className="mt-8">
            {recommendedServices.length > 0 ? (
              <>
                <p className="text-sm text-zinc-400 mb-4">
                  根据你的车况，推荐以下服务——具体项目以到店检查后确认为准。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recommendedServices.map((service) => (
                    <div
                      key={service.id}
                      className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6"
                    >
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {service.title}
                      </h3>
                      <p className="text-xs text-emerald-400 mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-xs text-zinc-500">
                          <Clock className="size-3 text-emerald-400/60" aria-hidden />
                          {service.timeRange}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-zinc-500">
                          <AlertTriangle className="size-3 text-amber-400/60" aria-hidden />
                          {service.priceNote}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => openWeChatModal()}
                        className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full bg-emerald-400/10 px-4 text-sm font-medium text-emerald-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-emerald-400/20 active:scale-[0.97]"
                      >
                        咨询此项目
                        <MessageCircle className="size-3.5" aria-hidden />
                      </button>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-sm text-zinc-400 py-4">
                该选项暂无匹配服务，建议直接到店检查车况后获取方案。
              </p>
            )}

            <p className="mt-4 text-xs text-zinc-500 flex items-center gap-1.5">
              <AlertTriangle className="size-3 text-amber-400/60" aria-hidden />
              建议到店检查后确认，不需要的项目不建议做
            </p>
          </div>
        )}

        {!selectedId && (
          <p className="mt-6 text-sm text-zinc-500">
            不确定选哪个？直接微信咨询，发车况照片给蓝辉判断。
          </p>
        )}
      </div>
    </section>
  );
}
