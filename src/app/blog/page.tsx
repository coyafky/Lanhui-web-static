import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { PhoneCta } from "@/components/cta/PhoneCta";
import { getAllArticles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "品牌资讯 | 蓝辉轻改 LANHUI",
  description:
    "蓝辉轻改官方博客：汽车改色膜、窗膜、隐形车衣选购指南，新能源轻改干货，以及门店施工流程与质保说明。",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "品牌资讯 | 蓝辉轻改 LANHUI",
    description:
      "蓝辉轻改官方博客：汽车改色膜、窗膜、隐形车衣选购指南，新能源轻改干货，以及门店施工流程与质保说明。",
    type: "website",
  },
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col">
        {/* ── Hero ── */}
        <section className="relative bg-zinc-950 text-white overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-zinc-950 to-zinc-950" />
            <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-orange-600/15 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-700/10 blur-[80px]" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-center">
            <p className="text-sm tracking-[0.2em] text-orange-400 mb-4 font-medium">
              BLOG
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight">
              品牌资讯
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              选膜干货、轻改科普与门店动态，让升级决策更透明
            </p>
          </div>
        </section>

        {/* ── 文章列表 ── */}
        <section className="py-16 md:py-20 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-orange-500/10">
                <Newspaper className="w-5 h-5 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">最新文章</h2>
              <span className="text-sm text-zinc-500">
                共 {articles.length} 篇
              </span>
            </div>

            {articles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 rounded-2xl border border-zinc-800 bg-zinc-900">
                <p className="text-zinc-400">暂无文章，敬请期待。</p>
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
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
