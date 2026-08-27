import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Newspaper } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { CategoryNav } from "@/components/blog/CategoryNav";
import { Pagination } from "@/components/blog/Pagination";
import { PhoneCta } from "@/components/cta/PhoneCta";
import {
  BLOG_PAGE_SIZE,
  getAllCategories,
  getArticlesByCategory,
  getCategoryBySlug,
  getCategorySlug,
  getTotalPages,
  paginateArticles,
} from "@/lib/blog";

type Params = { category: string };

const CATEGORY_DESC: Record<string, string> = {
  改色膜:
    "汽车改色膜材质、工艺与避坑指南：PVC 与 TPU 怎么选、贴膜备案流程，帮顺德车主改色前心里有数。",
  窗膜:
    "汽车窗膜隔热参数解读：总太阳能阻隔率、透光率与选购建议，新能源车主选膜必读。",
  轮毂:
    "轮毂升级硬知识：尺寸、J 值、ET 值、PCD 与中心孔参数解析，以及现场避坑清单。",
  门店服务:
    "蓝辉轻改门店施工流程、质保规则与到店须知，让每一步都透明可追溯。",
  车主案例:
    "蓝辉轻改真实施工案例与改装前后效果展示，看见升级后的真实样子。",
};

/** 构建时枚举全部分类（用英文 slug 作为 param） */
export function generateStaticParams(): Params[] {
  return getAllCategories().map((category) => ({
    category: getCategorySlug(category),
  }));
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
  const desc = CATEGORY_DESC[category] ?? `${category}相关文章与选购指南。`;
  return {
    title: `${category} | 蓝辉轻改 LANHUI`,
    description: desc,
    alternates: { canonical: `/blog/category/${getCategorySlug(category)}` },
    openGraph: {
      title: `${category} | 蓝辉轻改 LANHUI`,
      description: desc,
      type: "website",
    },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  const categories = getAllCategories();
  if (!category || !categories.includes(category)) notFound();

  // /blog/category/[category] 始终是第 1 页
  const all = getArticlesByCategory(category);
  const articles = paginateArticles(all, 1);
  const totalPages = getTotalPages(all.length, BLOG_PAGE_SIZE);

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col">
        <section className="relative bg-zinc-950 text-white overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-zinc-950 to-zinc-950" />
            <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-orange-600/15 blur-[100px]" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14">
            <p className="text-sm tracking-[0.2em] text-orange-400 mb-4 font-medium">
              BLOG / {getCategorySlug(category)}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              {category}
            </h1>
            <p className="text-zinc-400 max-w-2xl leading-relaxed">
              {CATEGORY_DESC[category] ?? `${category}相关文章，帮助升级决策更透明。`}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-orange-500/10">
                <Newspaper className="w-5 h-5 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">{category}</h2>
              <span className="text-sm text-zinc-500">共 {all.length} 篇</span>
            </div>

            <CategoryNav categories={categories} active={category} />

            {articles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 rounded-2xl border border-zinc-800 bg-zinc-900">
                <p className="text-zinc-400">该分类暂无文章，敬请期待。</p>
              </div>
            )}

            <Pagination
              currentPage={1}
              totalPages={totalPages}
              basePath={`/category/${getCategorySlug(category)}`}
            />
          </div>
        </section>

        <section className="py-16 md:py-20 bg-black border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              想为爱车升级，但不知道从哪开始？
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              电话咨询顺德大良店，报上车型和需求，获取初步方案与报价
            </p>
            <PhoneCta label="18825425068 电话咨询" size="lg" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}