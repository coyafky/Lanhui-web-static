"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { openWeChatModal } from "@/lib/wechat-modal";

/**
 * 轮毂子页 S3 CTA（client：含微信咨询按钮）。
 */
export function ToyotaWheelsCta() {
  return (
    <section
      aria-labelledby="toyota-wheels-cta-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="toyota-wheels-cta-title"
          className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
        >
          拿不准哪款能上，先发车型年款过来
        </h2>
        <p className="mt-4 text-zinc-400 text-base leading-relaxed text-pretty">
          我们按适装数据先筛一遍，再约到店检查轮毂与轮胎匹配。
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <button
            type="button"
            onClick={() => openWeChatModal()}
            className="inline-flex min-h-12 select-none items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-7 text-base font-semibold text-white shadow-lg shadow-red-500/20 transition-transform active:scale-[0.96]"
          >
            <MessageCircle className="size-4" aria-hidden />
            咨询适配
          </button>
          <Link
            href="/product/toyota"
            className="inline-flex min-h-12 select-none items-center justify-center gap-2 rounded-full bg-white/[0.04] px-6 text-base font-medium text-zinc-200 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-white/[0.08] active:scale-[0.96]"
          >
            <ArrowLeft className="size-4" aria-hidden />
            返回丰田全系页
          </Link>
        </div>
      </div>
    </section>
  );
}
