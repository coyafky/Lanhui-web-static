import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { formatArticleDate } from "@/lib/blog";
import type { Article } from "@/lib/blog";

type ArticleCardProps = {
  article: Article;
};

/**
 * 博客文章卡片（Server Component）。
 * 封面图 + 分类徽标 + 日期/阅读时长 + 标题 + 描述，用于列表页响应式网格。
 */
export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 hover:shadow-xl hover:shadow-black/30"
    >
      {/* 封面图 */}
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
        {article.featuredImage ? (
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950">
            <span className="text-sm tracking-[0.3em] text-zinc-600 uppercase">
              蓝辉轻改
            </span>
          </div>
        )}
        <span className="absolute top-3 left-3 rounded-md bg-black/70 px-2.5 py-1 text-xs font-medium text-orange-300 border border-orange-500/30 backdrop-blur-sm">
          {article.category}
        </span>
      </div>

      {/* 内容 */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2.5">
          <time dateTime={article.publishedAt}>
            {formatArticleDate(article.publishedAt)}
          </time>
          <span className="w-1 h-1 rounded-full bg-zinc-700" aria-hidden="true" />
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3 h-3" aria-hidden="true" />
            {article.readingMinutes} 分钟阅读
          </span>
        </div>

        <h3 className="mb-2 text-lg font-bold text-white leading-snug transition-colors group-hover:text-orange-300 line-clamp-2">
          {article.title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-zinc-400 line-clamp-3">
          {article.description}
        </p>

        <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-orange-400 transition-all duration-200 group-hover:gap-2">
          阅读全文
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
