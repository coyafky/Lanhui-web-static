import Link from "next/link";
import type { WheelDetailSection } from "@/lib/wheel-catalog";

/**
 * 页内锚点导航。
 *
 * 段落列表由 `getWheelDetailSections()` 依据**实际内容**给出，
 * 因此不存在「有锚点、无内容」的空锚点。
 */
export function WheelDetailAnchorNav({
  modelId,
  sections,
}: {
  modelId: string;
  sections: readonly WheelDetailSection[];
}) {
  if (sections.length === 0) return null;

  return (
    <nav aria-label={`${modelId} 页面段落`} className="mt-4">
      <ul className="flex flex-wrap gap-2">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className="inline-flex min-h-11 items-center rounded-full bg-white/[0.06] px-4 text-sm text-zinc-300 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] transition-colors hover:bg-white/[0.1] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
