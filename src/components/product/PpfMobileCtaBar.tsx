"use client";

import { MessageCircle, MapPin } from "lucide-react";
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
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden pb-[env(safe-area-inset-bottom,0px)]">
      <div className="flex gap-3 bg-zinc-950/95 backdrop-blur border-t border-white/[0.08] px-4 py-3">
        <button
          type="button"
          onClick={() => openWeChatModal()}
          className="flex-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 active:scale-[0.97] transition-transform"
        >
          <MessageCircle className="w-4 h-4" />
          微信咨询
        </button>
        <a
          href={navigationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white/[0.06] px-4 text-sm font-medium text-white shadow-[0_0_0_1px_oklch(1_0_0/0.1)] active:scale-[0.97] transition-transform"
        >
          <MapPin className="w-4 h-4" />
          高德导航
        </a>
      </div>
    </div>
  );
}
