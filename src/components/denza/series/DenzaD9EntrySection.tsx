"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, CheckCircle2, RotateCcw } from "lucide-react";
import { openWeChatModal } from "@/lib/wechat-modal";
import { DENZA_D9_ENTRY } from "@/lib/denza-series-services";

type DenzaD9EntrySectionProps = {
  image: { src: string; alt: string };
};

/**
 * 腾势 D9 专属子页入口（整卡可点）+ 未覆盖车型咨询入口。
 * 完整 23 项清单在 /product/denza/d9，品牌页只放摘要卡。
 * D9 主图为生成效果图，卡片角标注明「效果预览」。
 */
export function DenzaD9EntrySection({ image }: DenzaD9EntrySectionProps) {
  const d9 = DENZA_D9_ENTRY;

  return (
    <section
      id="denza-d9"
      aria-labelledby="denza-d9-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            按车型选
          </p>
          <h2
            id="denza-d9-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            腾势 D9 有哪些需要专车适配的升级项目？
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            吸顶电视、平衡杆、铝地板等涉及座椅、滑轨和原车结构的项目按车型整理在 D9 专属子页。
            目前已整理 D9 专属方案，其他腾势车型可咨询确认。
          </p>
        </div>

        {/* D9 车型卡（整卡可点） */}
        <Link
          href={d9.canonicalPath}
          className="group grid grid-cols-1 overflow-hidden rounded-3xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] transition-transform active:scale-[0.99] md:grid-cols-2"
        >
          <div className="relative aspect-[4/3] bg-zinc-900">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-zinc-950/80 px-3 py-1 text-xs text-zinc-300 shadow-[0_0_0_1px_oklch(1_0_0/0.1)] backdrop-blur">
              效果预览
            </span>
          </div>
          <div className="flex flex-col gap-4 p-6 md:p-8">
            <h3 className="text-xl font-bold text-white">{d9.modelName}</h3>
            <p className="text-base text-zinc-400 leading-relaxed text-pretty">
              {d9.scenario}
            </p>
            <div className="flex flex-wrap gap-2">
              {d9.topNeeds.map((need) => (
                <span
                  key={need}
                  className="inline-flex items-center rounded-full bg-white/[0.04] px-3 py-1 text-xs text-zinc-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]"
                >
                  {need}
                </span>
              ))}
            </div>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="flex items-start gap-2 text-zinc-400">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-orange-400" aria-hidden />
                {d9.confirmedScope}
              </li>
              <li className="flex items-start gap-2 text-zinc-400">
                <RotateCcw className="mt-0.5 size-4 shrink-0 text-zinc-500" aria-hidden />
                {d9.reviewScope}
              </li>
            </ul>
            <span className="mt-auto inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-orange-400 transition-colors group-hover:text-orange-300">
              查看腾势 D9 专属方案
              <ArrowRight className="size-4" aria-hidden />
            </span>
          </div>
        </Link>

        {/* 未覆盖车型咨询入口 */}
        <div className="mt-6 flex flex-col items-start gap-3 rounded-3xl bg-zinc-900/60 p-6 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-zinc-300 leading-relaxed text-pretty">
            没有找到你的车型？发来车型、年款和配置，我们先帮你确认能做什么。
          </p>
          <button
            type="button"
            onClick={() => openWeChatModal()}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-transform active:scale-[0.96]"
          >
            <MessageCircle className="size-4" aria-hidden />
            提交车型确认
          </button>
        </div>
      </div>
    </section>
  );
}
