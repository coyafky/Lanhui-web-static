"use client";

import Link from "next/link";
import { ChevronDown, MessageCircle, Store } from "lucide-react";
import { openWeChatModal } from "@/lib/wechat-modal";
import { wenjieSeriesFaq } from "@/lib/wenjie-series-upgrade-projects";

/**
 * FAQ 手风琴 + 底部车型咨询 CTA。
 */
export function WenjieFaqSectionV2() {
  return (
    <section
      aria-labelledby="wenjie-faq-title"
      className="py-16 sm:py-20 bg-black border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-cyan-400 uppercase">
            常见问题
          </p>
          <h2
            id="wenjie-faq-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            问界车主最常问的问题
          </h2>
        </div>

        <div className="space-y-2 max-w-3xl">
          {wenjieSeriesFaq.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 p-5">
                <span className="text-base font-semibold text-white">
                  {item.question}
                </span>
                <ChevronDown
                  className="size-4 shrink-0 text-zinc-500 transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="px-5 pb-5 text-base text-zinc-400 leading-relaxed text-pretty">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        {/* 底部咨询 CTA */}
        <div className="mt-10 rounded-3xl bg-gradient-to-br from-cyan-950/40 to-zinc-900/60 p-8 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] text-center sm:p-10">
          <h3 className="text-xl font-bold text-white text-balance sm:text-2xl">
            告诉我们车型和需求，先帮你判断从哪项开始
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-zinc-400 leading-relaxed text-pretty">
            发来问界车型、年款和你关心的方向，先做初步确认再决定是否到店，不盲目叠加项目。
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openWeChatModal()}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform active:scale-[0.96]"
            >
              <MessageCircle className="size-4" aria-hidden />
              提交车型咨询
            </button>
            <Link
              href="/agent"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white/[0.04] px-6 text-base font-medium text-zinc-200 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-white/[0.08] active:scale-[0.96]"
            >
              <Store className="size-4" aria-hidden />
              查看门店案例
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
