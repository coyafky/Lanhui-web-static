"use client";

import { MapPin, MessageCircle } from "lucide-react";
import { MobileCtaDock } from "@/components/product/SeriesMobileCtaBar";
import { openWeChatModal } from "@/lib/wechat-modal";
import { stores } from "@/lib/store";
import { getAmapNavigationUrl } from "@/lib/store-map";

/**
 * PPF 页面移动端底部固定双 CTA 栏。
 * 仅在 `lg:hidden` 时显示（桌面端 Hero 已有 CTA）。
 */
export function PpfMobileCtaBar() {
  const navigationUrl = getAmapNavigationUrl(stores[0]);

  return (
    <MobileCtaDock>
      <button
        type="button"
        onClick={() => openWeChatModal()}
        className="flex-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 active:scale-[0.97] transition-transform motion-reduce:transition-none"
      >
        <MessageCircle className="w-4 h-4" aria-hidden />
        微信咨询
      </button>
      <a
        href={navigationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white/[0.06] px-4 text-sm font-medium text-white shadow-[0_0_0_1px_oklch(1_0_0/0.1)] active:scale-[0.97] transition-transform motion-reduce:transition-none"
      >
        <MapPin className="w-4 h-4" aria-hidden />
        高德导航
      </a>
    </MobileCtaDock>
  );
}
