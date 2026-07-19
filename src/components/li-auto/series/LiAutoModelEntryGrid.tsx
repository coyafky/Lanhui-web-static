"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { openWeChatModal } from "@/lib/wechat-modal";
import type { LiAutoModelEntryKey } from "@/lib/li-auto-series-services";

export type LiAutoModelEntry = {
  modelKey: LiAutoModelEntryKey;
  modelName: string;
  canonicalPath: string;
  /** 车型定位（Badge） */
  positioning: string;
  /** 主打使用场景 */
  scenario: string;
  /** 最常见的三项需求 */
  topNeeds: readonly [string, string, string];
  projectCount: number;
  image: { src: string; alt: string };
};

type LiAutoModelEntryGridProps = {
  entries: readonly LiAutoModelEntry[];
};

/**
 * 理想 ONE / i6 / i8 / L9 / MEGA 五车型专属子页入口（整卡可点）。
 * 品牌页只保留入口，完整专车项目在各自子页展示。
 * 第 6 格提供 L6 / L7 / L8 等其他车型咨询入口，不暗示只服务 5 款。
 */
export function LiAutoModelEntryGrid({ entries }: LiAutoModelEntryGridProps) {
  return (
    <section
      id="li-auto-models"
      aria-labelledby="li-auto-models-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-amber-400 uppercase">
            按车型选
          </p>
          <h2
            id="li-auto-models-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            ONE、i6、i8、L9、MEGA — 5 个车型专属方案
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            五个车型已各自整理独立专车方案。进入子页查看完整项目清单，按年款与座椅布局继续确认。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {entries.map((m) => (
            <Link
              key={m.modelKey}
              href={m.canonicalPath}
              className="group flex flex-col overflow-hidden rounded-3xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] transition-transform active:scale-[0.98]"
            >
              <div className="relative aspect-[4/3] bg-zinc-900">
                <Image
                  src={m.image.src}
                  alt={m.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-zinc-950/80 px-3 py-1 text-xs text-zinc-300 shadow-[0_0_0_1px_oklch(1_0_0/0.1)]">
                  效果预览图
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <span className="self-start rounded-full bg-amber-400/10 px-2.5 py-0.5 text-xs font-medium text-amber-300">
                  {m.positioning}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {m.modelName} 专属升级方案
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
                  {m.projectCount} 项适配参考 · 进入后按年款继续确认
                </p>
                <span className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-amber-400 transition-colors group-hover:text-amber-300">
                  查看 {m.modelName} 专属方案
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </div>
            </Link>
          ))}

          {/* 其他理想车型咨询入口 */}
          <div className="flex flex-col justify-center gap-4 rounded-3xl bg-zinc-900/60 p-6 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]">
            <h3 className="text-lg font-bold text-white">
              开的是 L6、L7、L8 或其他理想车型？
            </h3>
            <p className="text-base text-zinc-400 leading-relaxed text-pretty">
              车膜、脚垫、轮毂和洗美养护等基础服务同样可约。
              发来车型、年款和座椅布局，我们先帮你确认哪些服务通用、哪些需要专车适配。
            </p>
            <button
              type="button"
              onClick={() => openWeChatModal()}
              className="inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-5 text-sm font-semibold text-white shadow-lg shadow-amber-500/20 transition-transform active:scale-[0.96]"
            >
              <MessageCircle className="size-4" aria-hidden />
              提交车型确认
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
