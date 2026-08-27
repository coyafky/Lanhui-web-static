import { renderMarkdownToHtml } from "@/lib/markdown-render";

/**
 * 文章正文渲染（Server Component）。
 *
 * 基于 markdown-it（成熟解析器），支持 GFM 表格/删除线/任务列表/代码块等。
 * markdown-it 配置 html:false，只输出自身生成的 HTML（无原始 HTML 注入），
 * 因此 dangerouslySetInnerHTML 在此场景安全（全程无用户输入原样透传）。
 *
 * 样式由 src/app/globals.css 中的 .prose-article 类提供（全站深色 + 品牌橙）。
 */
export function ArticleContent({ content }: { content: string }) {
  return (
    <div
      className="prose-article text-base md:text-lg"
      dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(content) }}
    />
  );
}