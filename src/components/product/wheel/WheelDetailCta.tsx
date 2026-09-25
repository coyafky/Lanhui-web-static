"use client";

import Link from "next/link";
import { ArrowLeft, CalendarCheck } from "lucide-react";
import { openWeChatModal } from "@/lib/wechat-modal";
import { WHEEL_CATALOG_PATH, WHEEL_DETAIL_DISCLAIMER } from "@/lib/wheel-catalog";

/**
 * 详情页到店 CTA + 免责口径。
 * 沿用站点既有转化路径（微信咨询 / 返回目录），**不引入询盘表单**。
 */
export function WheelDetailCta({ modelId }: { modelId: string }) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] sm:p-8">
      <h2 className="text-xl font-bold text-white sm:text-2xl">
        把 {modelId} 的规格带到店里确认
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
        {WHEEL_DETAIL_DISCLAIMER}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => openWeChatModal()}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-transform active:scale-[0.96]"
        >
          <CalendarCheck className="size-4" aria-hidden />
          携带车型数据咨询
        </button>

        <Link
          href={WHEEL_CATALOG_PATH}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white/[0.06] px-6 text-sm font-medium text-zinc-200 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-white/[0.1] hover:text-white"
        >
          <ArrowLeft className="size-4" aria-hidden />
          返回轮毂目录
        </Link>
      </div>

      <p className="mt-4 text-xs text-zinc-500">
        本页不提供在线报价与下单，也不收集询盘信息。
      </p>
    </div>
  );
}
