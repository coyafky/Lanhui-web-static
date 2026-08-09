"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import {
  electricStepImages,
  electricStepVariantLabels,
  electricStepVariantComparison,
} from "@/lib/electric-step-products";
import { openWeChatModal } from "@/lib/wechat-modal";

export function ElectricStepGallery() {
  return (
    <section
      id="electric-step-gallery"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
      aria-labelledby="electric-step-gallery-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            方案选择
          </p>
          <h2
            id="electric-step-gallery-title"
            className="text-2xl md:text-3xl font-bold text-white"
          >
            三款方案，找到适合你的那一款
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            无灯、单流光、大灯带，从实用到氛围，每款都有明确的适用场景和车型限制。具体款式以到店沟通为准。
          </p>
        </div>

        {/* 产品卡片 */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 mb-12">
          {electricStepImages.map((image) => (
            <div
              key={image.id}
              className="group rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
                <Image
                  src={image.publicPath}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain p-3 outline outline-1 -outline-offset-1 outline-white/10"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-zinc-800 animate-pulse -z-10" />
              </div>

              {/* Info */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-semibold text-white">
                    {image.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-orange-400/10 px-2.5 py-0.5 text-[10px] font-medium text-orange-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                    {electricStepVariantLabels[image.variant]}
                  </span>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                  {image.note}
                </p>

                {/* Positioning badge */}
                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                  <span className="text-[10px] text-zinc-400 bg-white/[0.06] px-1.5 py-0.5 rounded-full">
                    {image.positioning}
                  </span>
                </div>

                {/* Recommend for */}
                <p className="text-xs text-zinc-500 mb-4 leading-relaxed">
                  适合：{image.recommendFor}
                </p>

                <button
                  type="button"
                  onClick={() => openWeChatModal()}
                  className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full bg-orange-400/10 px-4 text-sm font-medium text-orange-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-all hover:bg-orange-400/20 active:scale-[0.97]"
                >
                  咨询此款
                  <MessageCircle className="size-3.5" aria-hidden />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 方案对比表 */}
        <div className="rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            三款方案快速对比
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="py-2.5 pr-4 text-left font-medium text-zinc-400" />
                  <th className="py-2.5 pr-4 text-left font-medium text-zinc-400">
                    无灯款
                  </th>
                  <th className="py-2.5 pr-4 text-left font-medium text-orange-400">
                    单流光灯
                  </th>
                  <th className="py-2.5 text-left font-medium text-orange-400">
                    大灯带款
                  </th>
                </tr>
              </thead>
              <tbody>
                {electricStepVariantComparison.map((row) => (
                  <tr
                    key={row.aspect}
                    className="border-b border-white/[0.04]"
                  >
                    <td className="py-2.5 pr-4 text-zinc-300 font-medium">
                      {row.aspect}
                    </td>
                    <td className="py-2.5 pr-4 text-zinc-400">{row.noLight}</td>
                    <td className="py-2.5 pr-4 text-zinc-400">{row.singleLight}</td>
                    <td className="py-2.5 text-zinc-400">{row.largeLight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-500">
          * 具体适配车型、安装方案和价格以到店确认结果为准。
        </p>
      </div>
    </section>
  );
}
