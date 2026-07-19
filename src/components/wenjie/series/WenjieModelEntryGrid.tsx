"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { openWeChatModal } from "@/lib/wechat-modal";
import { getWenjieModelHeroImage } from "@/lib/wenjie-preview-images";

export type WenjieModelEntry = {
  modelKey: "M6" | "M7" | "M8";
  modelName: string;
  canonicalPath: string;
  /** 主打使用场景 */
  scenario: string;
  /** 最常见的三项需求 */
  topNeeds: readonly [string, string, string];
};

type WenjieModelEntryGridProps = {
  entries: readonly WenjieModelEntry[];
};

/**
 * M6/M7/M8 车型专属子页入口（整卡可点）。
 * 主打车型使用场景 + 三项常见需求；底部提供"没有找到车型"咨询入口。
 */
export function WenjieModelEntryGrid({ entries }: WenjieModelEntryGridProps) {
  return (
    <section
      id="wenjie-models"
      aria-labelledby="wenjie-models-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-cyan-400 uppercase">
            按车型选
          </p>
          <h2
            id="wenjie-models-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            M6 / M7 / M8 车型专属方案
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            子页包含该车型的专属项目、适配提示、真实案例和组合建议。进入后按年款与配置继续确认。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {entries.map((m) => {
            const heroImage = getWenjieModelHeroImage(m.modelKey);
            return (
              <Link
                key={m.modelKey}
                href={m.canonicalPath}
                className="group flex flex-col overflow-hidden rounded-3xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] transition-transform active:scale-[0.98]"
              >
                <div className="relative aspect-[4/3] bg-zinc-900">
                  <Image
                    src={
                      heroImage.publicPath ??
                      "/images/products/wenjie/preview.webp"
                    }
                    alt={`问界 ${m.modelName} 升级方案预览图`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="text-lg font-bold text-white">
                    {m.modelName}
                  </h3>
                  <p className="text-base text-zinc-400 leading-relaxed text-pretty flex-1">
                    {m.scenario}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {m.topNeeds.map((need) => (
                      <span
                        key={need}
                        className="inline-flex items-center rounded-full bg-white/[0.04] px-3 py-1 text-xs text-zinc-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]"
                      >
                        {need}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-zinc-500">
                    进入后按年款与配置继续确认
                  </p>
                  <span className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors group-hover:text-cyan-300">
                    查看 {m.modelName} 专属方案
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* 未覆盖车型咨询入口 */}
        <div className="mt-6 flex flex-col items-start gap-3 rounded-3xl bg-zinc-900/60 p-6 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-zinc-300 leading-relaxed text-pretty">
            没有找到你的车型？发来车型、年款和配置，我们先帮你确认能做什么。
          </p>
          <button
            type="button"
            onClick={() => openWeChatModal()}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform active:scale-[0.96]"
          >
            <MessageCircle className="size-4" aria-hidden />
            提交车型确认
          </button>
        </div>
      </div>
    </section>
  );
}
