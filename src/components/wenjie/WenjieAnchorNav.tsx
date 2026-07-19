"use client";
import { cn } from "@/lib/utils";

type AnchorItem = { id: string; label: string };

type WenjieAnchorNavProps = {
  models: AnchorItem[];
};

/**
 * 车型锚点导航（桌面端）
 * PRD §8.2：使用锚点跳转到对应车型区域。
 */
export function WenjieAnchorNav({ models }: WenjieAnchorNavProps) {
  return (
    <nav
      aria-label="车型锚点导航"
      className="hidden md:flex items-center gap-2 sticky top-20 z-20 bg-zinc-950/80 backdrop-blur border-y border-zinc-900 py-3"
    >
      <span className="text-xs tracking-widest text-zinc-500 mr-2">
        MODEL
      </span>
      {models.map((m, idx) => (
        <a
          key={m.id}
          href={`#${m.id}`}
          className={cn(
            "inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium",
            "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors",
          )}
        >
          {m.label}
        </a>
      ))}
    </nav>
  );
}
