import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { PhoneCta } from "@/components/cta/PhoneCta";
import {
  formatArticleDate,
  getAdjacentArticles,
  getArticleBySlug,
  getAllArticles,
} from "@/lib/blog";
import type { Article } from "@/lib/blog";
import { safeJsonLd } from "@/lib/json-ld";
import { generateBreadcrumbSchema } from "@/lib/geo";
import { getSiteUrl } from "@/lib/site-url";

type Params = { slug: string };

const SITE_URL = getSiteUrl();

/** 构建时枚举全部已发布文章 */
export async function generateStaticParams(): Promise<Params[]> {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

/** 每篇文章独立 metadata（title/description/canonical/openGraph） */
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: "文章未找到 | 蓝辉轻改 LANHUI" };
  }
  const url = `${SITE_URL}/blog/${article.slug}`;
  return {
    title: `${article.title} | 蓝辉轻改 LANHUI`,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      url,
      ...(article.featuredImage
        ? { images: [{ url: `${SITE_URL}${article.featuredImage}` }] }
        : {}),
    },
  };
}

/** 详情页相邻文章导航卡片（上一篇=更新，下一篇=更旧） */
function AdjacentLink({
  direction,
  article,
}: {
  direction: "prev" | "next";
  article: Article;
}) {
  const isPrev = direction === "prev";
  return (
    <Link
      href={`/blog/${article.slug}`}
      className={`group flex flex-1 flex-col gap-1.5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition-all duration-300 hover:border-orange-500/50 hover:bg-zinc-900 ${
        isPrev ? "items-start" : "items-end text-right"
      }`}
    >
      <span
        className={`inline-flex items-center gap-1 text-xs text-zinc-500 ${
          isPrev ? "" : "flex-row-reverse"
        }`}
      >
        {isPrev ? (
          <>
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            上一篇
          </>
        ) : (
          <>
            下一篇
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </>
        )}
      </span>
      <span className="text-sm font-medium text-zinc-300 leading-snug line-clamp-2 transition-colors group-hover:text-orange-300">
        {article.title}
      </span>
    </Link>
  );
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const { prev, next } = getAdjacentArticles(slug);
  const articleUrl = `${SITE_URL}/blog/${article.slug}`;
  const breadcrumbItems = [
    { label: "首页", href: "/" },
    { label: "品牌资讯", href: "/blog" },
    { label: article.title },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "首页", url: "/" },
    { name: "品牌资讯", url: "/blog" },
    { name: article.title, url: articleUrl },
  ]);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    ...(article.featuredImage
      ? { image: `${SITE_URL}${article.featuredImage}` }
      : {}),
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: { "@type": "Organization", name: "蓝辉轻改 LANHUI" },
    publisher: {
      "@type": "Organization",
      name: "蓝辉轻改 LANHUI",
      url: SITE_URL,
    },
    mainEntityOfPage: articleUrl,
  };

  return (
    <>
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-grow flex flex-col bg-zinc-950"
      >
        {/* 面包屑 */}
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* 文章头部 */}
        <article className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
          <header className="mb-8">
            <span className="inline-block rounded-md bg-orange-500/10 border border-orange-500/30 px-2.5 py-1 text-xs font-medium text-orange-300 mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5 leading-snug">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4 text-orange-400" aria-hidden="true" />
                <time dateTime={article.publishedAt}>
                  {formatArticleDate(article.publishedAt)}
                </time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-orange-400" aria-hidden="true" />
                {article.readingMinutes} 分钟阅读
              </span>
            </div>
          </header>

          {/* 封面图 */}
          {article.featuredImage && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-800 mb-10">
              <Image
                src={article.featuredImage}
                alt={article.title}
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          )}

          {/* 正文 */}
          <ArticleContent content={article.content} />

          {/* 上一篇 / 下一篇 */}
          {(prev || next) && (
            <nav
              aria-label="文章导航"
              className="mt-12 flex flex-col sm:flex-row gap-4 border-t border-zinc-900 pt-8"
            >
              {prev && <AdjacentLink direction="prev" article={prev} />}
              {next && <AdjacentLink direction="next" article={next} />}
            </nav>
          )}
        </article>

        {/* CTA */}
        <section className="bg-black border-t border-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              关于文章内容，想进一步了解？
            </h2>
            <p className="text-zinc-400 mb-7 max-w-xl mx-auto">
              蓝辉轻改顺德大良店提供方案咨询与施工预约，营业时间 09:00-18:00
            </p>
            <PhoneCta label="18825425068 电话咨询" />
          </div>
        </section>
      </main>
      <Footer />

      {/* JSON-LD：Article + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
    </>
  );
}
