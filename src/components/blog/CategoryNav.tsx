import Link from "next/link";
import { getCategorySlug } from "@/lib/blog";

type CategoryNavProps = {
  /** 全部可用分类（不含"全部"） */
  categories: string[];
  /** 当前激活的分类显示名；undefined 表示"全部" */
  active?: string;
};

/**
 * 分类筛选 Tab（Server Component）。
 * 用 Link 静态导航：/blog/category/<slug>，无 JS 也能跳转，SEO 友好。
 */
export function CategoryNav({ categories, active }: CategoryNavProps) {
  const tabs = [
    { label: "全部", href: "/blog", active: active === undefined },
    ...categories.map((cat) => ({
      label: cat,
      href: `/blog/category/${getCategorySlug(cat)}`,
      active: cat === active,
    })),
  ];

  return (
    <nav
      aria-label="文章分类"
      className="flex flex-wrap items-center gap-2 mb-8"
    >
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          aria-current={tab.active ? "page" : undefined}
          className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors border ${
            tab.active
              ? "bg-orange-500/15 border-orange-500/40 text-orange-300"
              : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}