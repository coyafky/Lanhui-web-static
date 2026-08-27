import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { CategoryNav } from "@/components/blog/CategoryNav";
import { Pagination } from "@/components/blog/Pagination";
import {
  BLOG_PAGE_SIZE,
  getAllCategories,
  getArticlesByCategory,
  getCategoryBySlug,
  getCategorySlug,
  getTotalPages,
  paginateArticles,
} from "@/lib/blog";

type Params = { category: string; page: string };

export function generateStaticParams(): Params[] {
  const params: Params[] = [];
  for (const category of getAllCategories()) {
    const totalPages = getTotalPages(
      getArticlesByCategory(category).length,
      BLOG_PAGE_SIZE,
    );
    for (let page = 1; page <= totalPages; page++) {
      params.push({ category: getCategorySlug(category), page: String(page) });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) {
    return { title: "分类不存在 | 蓝辉轻改 LANHUI" };
  }
  return {
    title: `${category} · 品牌资讯 | 蓝辉轻改 LANHUI`,
    description: `${category} 分类文章列表。`,
    alternates: { canonical: `/blog/category/${getCategorySlug(category)}` },
  };
}

export default async function BlogCategoryPageIndex({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category: slug, page } = await params;
  const pageNum = Number(page);
  const category = getCategoryBySlug(slug);
  if (!category || !getAllCategories().includes(category)) notFound();

  const all = getArticlesByCategory(category);
  const totalPages = getTotalPages(all.length, BLOG_PAGE_SIZE);

  if (pageNum === 1) redirect(`/blog/category/${getCategorySlug(category)}`);
  if (!Number.isInteger(pageNum) || pageNum < 1 || pageNum > totalPages) notFound();

  const articles = paginateArticles(all, pageNum);

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
              BLOG · {getCategorySlug(category)} · 第 {pageNum} 页
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              {category}
            </h1>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CategoryNav categories={getAllCategories()} active={category} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
            <Pagination
              currentPage={pageNum}
              totalPages={totalPages}
              basePath={`/category/${getCategorySlug(category)}`}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}