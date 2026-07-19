"use client";

import { MessageCircle, CarFront } from "lucide-react";
import { openWeChatModal } from "@/lib/wechat-modal";

/**
 * 腾势页移动端底部固定双 CTA 栏（lg:hidden）：查看 D9 方案 / 咨询方案。
 */
export function DenzaMobileCtaBar() {
  const scrollToD9 = () => {
    document
      .getElementById("denza-d9")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden pb-[env(safe-area-inset-bottom,0px)]">
      <div className="flex gap-3 bg-zinc-950/95 backdrop-blur border-t border-white/[0.08] px-4 py-3">
        <button
          type="button"
          onClick={scrollToD9}
          className="flex-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white/[0.06] px-4 text-sm font-medium text-white shadow-[0_0_0_1px_oklch(1_0_0/0.1)] active:scale-[0.97] transition-transform"
        >
          <CarFront className="size-4" aria-hidden />
          查看 D9 方案
        </button>
        <button
          type="button"
          onClick={() => openWeChatModal()}
          className="flex-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 active:scale-[0.97] transition-transform"
        >
          <MessageCircle className="size-4" aria-hidden />
          咨询方案
        </button>
      </div>
    </div>
  );
}
