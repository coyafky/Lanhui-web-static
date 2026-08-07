/**
 * 轻量 Markdown 解析器（纯函数，无 JSX / 无第三方依赖）。
 *
 * 仅支持博客文章所需的最小语法子集：
 * - 块级：标题（#~######）、段落、无序列表、有序列表、引用
 * - 行内：**粗体**、*斜体*、`行内代码`、[文字](链接)
 *
 * 输出结构化数据，由渲染组件负责转成 JSX，便于单元测试。
 */

export type InlineToken =
  | { type: "text"; value: string }
  | { type: "bold"; value: string }
  | { type: "italic"; value: string }
  | { type: "code"; value: string }
  | { type: "link"; href: string; label: string };

export type MarkdownBlock =
  | { type: "heading"; level: number; content: string }
  | { type: "paragraph"; content: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "quote"; content: string };

/** 行内语法：**粗体** / *斜体* / `代码` / [文字](链接) */
const INLINE_RE =
  /(\*\*([^*\n]+)\*\*|\*([^*\n]+)\*|`([^`\n]+)`|\[([^\]\n]+)\]\(([^)\s]+)\))/;

/**
 * 解析行内语法为 token 数组。
 * 不支持嵌套（粗体里的链接等场景不会出现），文本按原文保留。
 */
export function parseInline(source: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  let rest = source;

  while (rest.length > 0) {
    const match = INLINE_RE.exec(rest);
    if (!match) {
      tokens.push({ type: "text", value: rest });
      break;
    }
    const full = match[0];
    const [, , bold, italic, code, linkLabel, linkHref] = match;
    const before = rest.slice(0, match.index);
    if (before) {
      tokens.push({ type: "text", value: before });
    }
    if (bold !== undefined) {
      tokens.push({ type: "bold", value: bold });
    } else if (italic !== undefined) {
      tokens.push({ type: "italic", value: italic });
    } else if (code !== undefined) {
      tokens.push({ type: "code", value: code });
    } else {
      tokens.push({ type: "link", href: linkHref, label: linkLabel ?? "" });
    }
    rest = rest.slice(match.index + full.length);
  }

  return tokens;
}

const HEADING_RE = /^(#{1,6})\s+(.*)$/;
const UNORDERED_RE = /^[-*]\s+(.*)$/;
const ORDERED_RE = /^(\d+)\.\s+(.*)$/;

/**
 * 解析整篇 Markdown 为块级结构。
 * - 连续同类列表项合并为一个 list 块
 * - 连续引用行合并为一个 quote 块
 * - 段落内换行保留（由渲染组件转 <br/>）
 */
export function parseMarkdown(source: string): MarkdownBlock[] {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: MarkdownBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const trimmed = lines[i].trim();

    if (trimmed === "") {
      i++;
      continue;
    }

    // 标题
    const heading = HEADING_RE.exec(trimmed);
    if (heading) {
      blocks.push({
        type: "heading",
        level: heading[1].length,
        content: heading[2],
      });
      i++;
      continue;
    }

    // 引用（连续 > 行合并）
    if (trimmed === ">" || trimmed.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length) {
        const t = lines[i].trim();
        if (t === ">") {
          quoteLines.push("");
          i++;
        } else if (t.startsWith("> ")) {
          quoteLines.push(t.slice(2));
          i++;
        } else {
          break;
        }
      }
      blocks.push({ type: "quote", content: quoteLines.join("\n") });
      continue;
    }

    // 无序列表
    const unordered = UNORDERED_RE.exec(trimmed);
    if (unordered) {
      const items: string[] = [];
      while (i < lines.length) {
        const m = UNORDERED_RE.exec(lines[i].trim());
        if (m) {
          items.push(m[1]);
          i++;
        } else {
          break;
        }
      }
      blocks.push({ type: "list", ordered: false, items });
      continue;
    }

    // 有序列表
    const ordered = ORDERED_RE.exec(trimmed);
    if (ordered) {
      const items: string[] = [];
      while (i < lines.length) {
        const m = ORDERED_RE.exec(lines[i].trim());
        if (m) {
          items.push(m[2]);
          i++;
        } else {
          break;
        }
      }
      blocks.push({ type: "list", ordered: true, items });
      continue;
    }

    // 普通段落：累积到空行或下一个块级语法
    const paragraphLines: string[] = [lines[i]];
    i++;
    while (i < lines.length) {
      const t = lines[i];
      const tt = t.trim();
      if (
        tt === "" ||
        HEADING_RE.test(tt) ||
        tt === ">" ||
        tt.startsWith("> ") ||
        UNORDERED_RE.test(tt) ||
        ORDERED_RE.test(tt)
      ) {
        break;
      }
      paragraphLines.push(t);
      i++;
    }
    blocks.push({ type: "paragraph", content: paragraphLines.join("\n") });
  }

  return blocks;
}
