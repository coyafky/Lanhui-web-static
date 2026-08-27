import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  /** 当前页（1 起） */
  currentPage: number;
  /** 总页数 */
  totalPages: number;
  /** 生成 /blog 及分类列表页时；basePath 形如 ""（根列表）或 "/category/改色膜" */
  basePath?: string;
};

/**
 * 文章列表分页器（Server Component）。
 * 纯 Link 静态导航，SEO 友好：
 * - 根列表：/blog/page/2、/blog/page/3 …
 * - 分类列表：/blog/category/<cat>/page/2 …
 * 首页(第1页)使用无分页码的基准 URL，避免 /page/1 重复内容。
 */
export function Pagination({
  currentPage,
  totalPages,
  basePath = "",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  // 钳制到有效范围（避免禁用态出现 /page/0）
  const safePage = (n: number) => Math.min(Math.max(n, 1), totalPages);
  const pageUrl = (page: number) =>
    safePage(page) === 1
      ? `/blog${basePath}`
      : `/blog${basePath}/page/${safePage(page)}`;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="文章分页"
      className="mt-12 flex items-center justify-center gap-2"
    >
      {/* 上一页 */}
      <Link
        href={pageUrl(currentPage - 1)}
        aria-disabled={currentPage === 1}
        tabIndex={currentPage === 1 ? -1 : 0}
        className={`inline-flex items-center gap-1 rounded-xl border px-3.5 py-2 text-sm font-medium transition-colors ${
          currentPage === 1
            ? "pointer-events-none border-zinc-800 text-zinc-600"
            : "border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:border-orange-500/50 hover:text-orange-300"
        }`}
      >
        <ChevronLeft className="w-4 h-4" aria-hidden="true" />
        上一页
      </Link>

      {/* 页码 */}
      <div className="flex items-center gap-1.5">
        {pages.map((page) => (
          <Link
            key={page}
            href={pageUrl(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={`inline-flex items-center justify-center w-9 h-9 rounded-xl border text-sm font-medium transition-colors ${
              page === currentPage
                ? "border-orange-500/50 bg-orange-500/15 text-orange-300"
                : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
            }`}
          >
            {page}
          </Link>
        ))}
      </div>

      {/* 下一页 */}
      <Link
        href={pageUrl(currentPage + 1)}
        aria-disabled={currentPage === totalPages}
        tabIndex={currentPage === totalPages ? -1 : 0}
        className={`inline-flex items-center gap-1 rounded-xl border px-3.5 py-2 text-sm font-medium transition-colors ${
          currentPage === totalPages
            ? "pointer-events-none border-zinc-800 text-zinc-600"
            : "border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:border-orange-500/50 hover:text-orange-300"
        }`}
      >
        下一页
        <ChevronRight className="w-4 h-4" aria-hidden="true" />
      </Link>
    </nav>
  );
}