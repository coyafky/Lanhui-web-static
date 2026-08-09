"use client";

import { useEffect, useState, type ReactNode } from "react";
import { CarFront, LayoutGrid, MessageCircle } from "lucide-react";
import { openWeChatModal } from "@/lib/wechat-modal";

type Accent =
  | "amber"
  | "blue"
  | "cyan"
  | "orange"
  | "red"
  | "sky"
  | "teal"
  | "violet";

type PrimaryIcon = "car" | "grid";

const ACCENT_CLASS: Record<Accent, string> = {
  amber:
    "bg-gradient-to-r from-amber-500 to-amber-600 shadow-amber-500/20",
  blue: "bg-gradient-to-r from-blue-500 to-blue-600 shadow-blue-500/20",
  cyan: "bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-cyan-500/20",
  orange:
    "bg-gradient-to-r from-orange-500 to-orange-600 shadow-orange-500/20",
  red: "bg-gradient-to-r from-red-500 to-red-600 shadow-red-500/20",
  sky: "bg-gradient-to-r from-sky-500 to-sky-600 shadow-sky-500/20",
  teal: "bg-gradient-to-r from-teal-500 to-teal-600 shadow-teal-500/20",
  violet:
    "bg-gradient-to-r from-violet-500 to-violet-600 shadow-violet-500/20",
};

type MobileCtaDockProps = {
  children: ReactNode;
};

/**
 * Shared mobile CTA shell. It leaves the viewport when the footer appears so
 * legal and contact information remain reachable without an overlay.
 */
export function MobileCtaDock({ children }: MobileCtaDockProps) {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.01 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={isFooterVisible}
      className={`fixed bottom-0 inset-x-0 z-40 lg:hidden pb-[env(safe-area-inset-bottom,0px)] transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none ${
        isFooterVisible
          ? "invisible translate-y-full opacity-0 pointer-events-none"
          : "visible translate-y-0 opacity-100"
      }`}
    >
      <div className="flex gap-3 bg-zinc-950/95 backdrop-blur border-t border-white/[0.08] px-4 py-3">
        {children}
      </div>
    </div>
  );
}

type SeriesMobileCtaBarProps = {
  accent: Accent;
  consultLabel: string;
  primaryIcon?: PrimaryIcon;
  primaryLabel: string;
  targetId: string;
};

export function SeriesMobileCtaBar({
  accent,
  consultLabel,
  primaryIcon = "grid",
  primaryLabel,
  targetId,
}: SeriesMobileCtaBarProps) {
  const PrimaryIcon = primaryIcon === "car" ? CarFront : LayoutGrid;

  const scrollToTarget = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    document.getElementById(targetId)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <MobileCtaDock>
      <button
        type="button"
        onClick={scrollToTarget}
        className="flex-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white/[0.06] px-4 text-sm font-medium text-white shadow-[0_0_0_1px_oklch(1_0_0/0.1)] active:scale-[0.97] transition-transform motion-reduce:transition-none"
      >
        <PrimaryIcon className="size-4" aria-hidden />
        {primaryLabel}
      </button>
      <button
        type="button"
        onClick={() => openWeChatModal()}
        className={`flex-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold text-white shadow-lg active:scale-[0.97] transition-transform motion-reduce:transition-none ${ACCENT_CLASS[accent]}`}
      >
        <MessageCircle className="size-4" aria-hidden />
        {consultLabel}
      </button>
    </MobileCtaDock>
  );
}
