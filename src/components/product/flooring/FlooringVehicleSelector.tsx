"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, AlertTriangle, Clock, ChevronDown, MessageCircle } from "lucide-react";
import { flooringVehicleGroups, flooringColors } from "@/lib/flooring-products";
import type { FlooringVehicleGroup, FlooringColorVariant } from "@/lib/flooring-products";
import { openWeChatModal } from "@/lib/wechat-modal";

const FITMENT_LABELS: Record<string, { label: string; className: string }> = {
  confirmed: {
    label: "确认适配",
    className: "bg-emerald-400/10 text-emerald-300 shadow-[0_0_0_1px_oklch(0.55_0.18_160/0.25)]",
  },
  "needs-review": {
    label: "需要复核",
    className: "bg-amber-400/10 text-amber-300 shadow-[0_0_0_1px_oklch(0.8_0.18_90/0.25)]",
  },
  "not-supported": {
    label: "暂未支持",
    className: "bg-zinc-400/10 text-zinc-400 shadow-[0_0_0_1px_oklch(1_0_0/0.1)]",
  },
};

export function FlooringVehicleSelector() {
  const [activeBrand, setActiveBrand] = useState<string>(flooringVehicleGroups[0]?.id ?? "");

  const activeGroup = flooringVehicleGroups.find((g) => g.id === activeBrand);
  const fitment = activeGroup ? FITMENT_LABELS[activeGroup.fitmentStatus] : null;

  return (
    <section
      id="flooring-vehicles"
      aria-labelledby="flooring-vehicles-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-amber-400 uppercase">
            车型适配
          </p>
          <h2
            id="flooring-vehicles-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            选择你的车型查看方案
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            按品牌和车型查看地板总成方案，每个方案包含颜色选择、组件说明和适配状态。
          </p>
        </div>

        {/* 品牌标签 */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 snap-x snap-mandatory scrollbar-none">
          {flooringVehicleGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setActiveBrand(group.id)}
              className={`shrink-0 snap-start inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors ${
                activeBrand === group.id
                  ? "bg-amber-400/15 text-amber-300 shadow-[0_0_0_1px_oklch(0.8_0.18_90/0.25)]"
                  : "bg-white/[0.03] text-zinc-400 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] hover:bg-white/[0.06]"
              }`}
            >
              {group.brandName}
            </button>
          ))}
        </div>

        {/* 当前品牌详情 */}
        {activeGroup && (
          <div className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] overflow-hidden">
            {/* 头部信息 */}
            <div className="p-5 sm:p-6 border-b border-white/[0.05]">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-white">
                  {activeGroup.brandName}
                </h3>
                {fitment && (
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${fitment.className}`}>
                    {activeGroup.fitmentStatus === "confirmed" && <Check className="size-3" aria-hidden />}
                    {activeGroup.fitmentStatus === "needs-review" && <AlertTriangle className="size-3" aria-hidden />}
                    {fitment.label}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
                <div>
                  <span className="text-zinc-500">覆盖车型：</span>
                  <span className="text-zinc-300">{activeGroup.models.join(" / ")}</span>
                </div>
                <div>
                  <span className="text-zinc-500">年款范围：</span>
                  <span className="text-zinc-300">{activeGroup.modelYears}</span>
                </div>
                <div>
                  <span className="text-zinc-500">座椅布局：</span>
                  <span className="text-zinc-300">{activeGroup.seatLayout}</span>
                </div>
                <div>
                  <span className="text-zinc-500">预计施工：</span>
                  <span className="text-zinc-300">{activeGroup.installTime}</span>
                </div>
              </div>

              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                {activeGroup.summary}
              </p>
            </div>

            {/* 颜色方案 + 详情 */}
            <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
              {/* 颜色变体 */}
              <div>
                <p className="text-xs tracking-widest text-amber-400 mb-3">
                  可选颜色
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {activeGroup.colorVariants.map((variant) => (
                    <ColorCard key={variant.id} variant={variant} brandName={activeGroup.brandName} />
                  ))}
                </div>
              </div>

              {/* 详情信息 */}
              <div className="space-y-4">
                {/* 组件清单 */}
                <div>
                  <p className="text-xs tracking-widest text-amber-400 mb-2">
                    包含组件
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["地板主板", "滑轨饰条", "迎宾踏板", "休息脚踏", "尾箱地板"].map((c) => (
                      <span
                        key={c}
                        className="inline-flex rounded-full bg-white/[0.04] px-3 py-1 text-xs text-zinc-300 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 价格与施工 */}
                <div className="rounded-xl bg-white/[0.03] p-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <Clock className="size-4 text-amber-400/60 shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <p className="text-sm font-medium text-zinc-300">施工时间</p>
                      <p className="text-sm text-zinc-400">{activeGroup.installTime}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm font-medium text-zinc-300 shrink-0">价格</span>
                    <p className="text-sm text-zinc-400">{activeGroup.startingPrice}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm font-medium text-zinc-300 shrink-0">安装</span>
                    <p className="text-sm text-zinc-400">
                      {activeGroup.requiresSeatRemoval ? "需拆卸座椅" : "无需拆卸座椅"}
                      {activeGroup.requiresDrilling ? " · 需打孔" : " · 不打孔不改线路"}
                    </p>
                  </div>
                </div>

                {/* 适配说明 */}
                <div className="rounded-xl bg-amber-400/[0.04] border border-amber-400/[0.12] p-4">
                  <p className="text-xs font-semibold text-amber-300 mb-1">
                    适配说明
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {activeGroup.fitmentNote}
                  </p>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => openWeChatModal()}
                  className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 text-sm font-semibold text-white shadow-lg shadow-amber-500/20 transition-transform active:scale-[0.96]"
                >
                  发送车型信息确认适配
                  <MessageCircle className="size-4" aria-hidden />
                </button>

                <p className="text-xs text-zinc-500 text-center">
                  找不到车型？发来车型、年款和座椅布局，我们先帮你确认。
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 车型信息提示 */}
        <div className="mt-6 rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5">
          <p className="text-sm text-zinc-300 font-medium mb-2">
            需要提供哪些信息？
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-zinc-400">
            <span>· 行驶证上的车型和年款</span>
            <span>· 座椅数量与布局</span>
            <span>· 滑轨结构类型</span>
            <span>· 原车后排和尾箱照片</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ColorCard({
  variant,
  brandName,
}: {
  variant: FlooringColorVariant;
  brandName: string;
}) {
  const meta = flooringColors.find((c) => c.id === variant.colorId);
  return (
    <div className="rounded-xl bg-zinc-900/80 shadow-[0_0_0_1px_oklch(1_0_0/0.04)] overflow-hidden">
      <div className="relative aspect-[4/3] bg-zinc-900">
        <Image
          src={variant.assetPath}
          alt={variant.alt}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-contain"
          loading="lazy"
        />
      </div>
      <div className="p-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">
            {brandName} · {variant.colorName}
          </p>
          {meta && (
            <p className="text-xs text-zinc-500 mt-0.5">{meta.description}</p>
          )}
        </div>
        {/* 色板 */}
        <div
          className="size-5 rounded-full shrink-0 shadow-[0_0_0_1px_oklch(1_0_0/0.15)]"
          style={{
            background:
              variant.colorId === "snow-white"
                ? "#f5f0e8"
                : variant.colorId === "neutral-gray"
                  ? "#8c8c8c"
                  : variant.colorId === "rock-black"
                    ? "#2a2a2a"
                    : "#8b6e4e",
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}
