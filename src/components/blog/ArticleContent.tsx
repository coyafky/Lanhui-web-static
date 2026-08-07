import { parseInline, parseMarkdown } from "@/lib/markdown";
import type { InlineToken, MarkdownBlock } from "@/lib/markdown";

/** 行内 token 渲染（粗体 / 斜体 / 代码 / 链接） */
function Inline({ tokens }: { tokens: InlineToken[] }) {
  return (
    <>
      {tokens.map((token, index) => {
        switch (token.type) {
          case "text":
            return <span key={index}>{token.value}</span>;
          case "bold":
            return (
              <strong key={index} className="font-semibold text-white">
                {token.value}
              </strong>
            );
          case "italic":
            return <em key={index}>{token.value}</em>;
          case "code":
            return (
              <code
                key={index}
                className="rounded-md border border-zinc-800 bg-zinc-900 px-1.5 py-0.5 text-sm text-orange-300"
              >
                {token.value}
              </code>
            );
          case "link": {
            const isExternal = token.href.startsWith("http");
            return (
              <a
                key={index}
                href={token.href}
                className="font-medium text-orange-400 underline-offset-4 hover:text-orange-300 hover:underline"
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {token.label}
              </a>
            );
          }
        }
      })}
    </>
  );
}

/** 单行内容（段落行 / 列表项 / 标题）转行内 JSX */
function InlineLine({ content }: { content: string }) {
  return <Inline tokens={parseInline(content)} />;
}

function renderBlock(block: MarkdownBlock, index: number) {
  switch (block.type) {
    case "heading": {
      const HeadingTag = `h${Math.min(Math.max(block.level, 2), 4)}` as
        | "h2"
        | "h3"
        | "h4";
      const headingClass =
        HeadingTag === "h2"
          ? "mt-10 mb-4 text-2xl font-bold text-white"
          : HeadingTag === "h3"
            ? "mt-8 mb-3 text-xl font-bold text-white"
            : "mt-6 mb-2 text-lg font-semibold text-white";
      return (
        <HeadingTag key={index} className={headingClass}>
          <InlineLine content={block.content} />
        </HeadingTag>
      );
    }
    case "paragraph":
      return (
        <p key={index} className="my-5 leading-8 text-zinc-300">
          {block.content.split("\n").map((line, lineIndex, lines) => (
            <span key={lineIndex}>
              <InlineLine content={line} />
              {lineIndex < lines.length - 1 && <br />}
            </span>
          ))}
        </p>
      );
    case "list":
      return block.ordered ? (
        <ol
          key={index}
          className="my-5 space-y-2 pl-6 list-decimal text-zinc-300 leading-7"
        >
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex} className="pl-1">
              <InlineLine content={item} />
            </li>
          ))}
        </ol>
      ) : (
        <ul
          key={index}
          className="my-5 space-y-2 pl-6 list-disc text-zinc-300 leading-7 marker:text-orange-400"
        >
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex} className="pl-1">
              <InlineLine content={item} />
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="my-6 border-l-4 border-orange-500 bg-zinc-900/60 rounded-r-xl px-5 py-4 text-zinc-400 leading-7"
        >
          {block.content.split("\n").map((line, lineIndex, lines) => (
            <span key={lineIndex}>
              <InlineLine content={line} />
              {lineIndex < lines.length - 1 && <br />}
            </span>
          ))}
        </blockquote>
      );
  }
}

/**
 * 文章正文渲染（Server Component）。
 * 基于内置轻量 Markdown 解析器，样式与全站深色 + 品牌橙风格一致。
 */
export function ArticleContent({ content }: { content: string }) {
  const blocks = parseMarkdown(content);
  return <div className="text-base md:text-lg">{blocks.map(renderBlock)}</div>;
}
