import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { CategoryNav } from "@/components/blog/CategoryNav";
import { Pagination } from "@/components/blog/Pagination";
import {
  BLOG_PAGE_SIZE,
  getAllArticles,
  getAllCategories,
  getTotalPages,
  paginateArticles,
} from "@/lib/blog";

type Params = { page: string };

/** 构建时枚举分页（文章足够多时才会超过 1 页） */
export function generateStaticParams(): Params[] {
  const totalPages = getTotalPages(getAllArticles().length, BLOG_PAGE_SIZE);
  return Array.from({ length: totalPages }, (_, i) => ({ page: String(i + 1) }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `品牌资讯 · 第${page}页 | 蓝辉轻改 LANHUI`,
    description: `蓝辉轻改品牌资讯列表第 ${page} 页：改色膜、窗膜、轮毂与门店动态。`,
    alternates: { canonical: `/blog/page/${page}` },
  };
}

export default async function BlogPageIndex({ params }: { params: Promise<Params> }) {
  const { page } = await params;
  const pageNum = Number(page);
  const totalPages = getTotalPages(getAllArticles().length, BLOG_PAGE_SIZE);

  // 第 1 页用 /blog 而不是 /blog/page/1，避免重复内容
  if (pageNum === 1) redirect("/blog");
  if (!Number.isInteger(pageNum) || pageNum < 1 || pageNum > totalPages) notFound();

  const articles = paginateArticles(getAllArticles(), pageNum);
  const categories = getAllCategories();

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col">
        <section className="relative bg-zinc-950 text-white overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-zinc-950 to-zinc-950" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
            <p className="text-sm tracking-[0.2em] text-orange-400 mb-3 font-medium">
              BLOG · 第 {pageNum} 页
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              品牌资讯
            </h1>
            <p className="text-zinc-400">更多选膜干货与门店动态，持续更新中。</p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CategoryNav categories={categories} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
            <Pagination currentPage={pageNum} totalPages={totalPages} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}