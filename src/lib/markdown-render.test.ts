import { describe, expect, it } from "vitest";
import {
  renderMarkdownInline,
  renderMarkdownToHtml,
} from "./markdown-render";

describe("renderMarkdownToHtml", () => {
  it("renders headings with levels", () => {
    const html = renderMarkdownToHtml("# 大标题\n\n## 小标题\n\n### 三级");
    expect(html).toContain("<h1>大标题</h1>");
    expect(html).toContain("<h2>小标题</h2>");
    expect(html).toContain("<h3>三级</h3>");
  });

  it("renders GFM tables (核心能力)", () => {
    const html = renderMarkdownToHtml(
      "| 材质 | 寿命 |\n| --- | --- |\n| PVC | 2~3年 |\n| TPU | 3~5年 |",
    );
    expect(html).toContain("<table>");
    expect(html).toContain("<thead>");
    expect(html).toContain("<th>材质</th>");
    expect(html).toContain("<td>PVC</td>");
    expect(html).toContain("<td>TPU</td>");
  });

  it("renders ordered & unordered lists", () => {
    const html = renderMarkdownToHtml("- 前挡\n- 侧后挡\n\n1. 到店\n2. 接车");
    expect(html).toContain("<ul>");
    expect(html).toContain("<li>前挡</li>");
    expect(html).toContain("<ol>");
    expect(html).toContain("<li>到店</li>");
  });

  it("renders fenced code blocks with language class", () => {
    const html = renderMarkdownToHtml("```ts\nconst a = 1;\n```");
    expect(html).toContain('<pre><code class="language-ts">');
    expect(html).not.toContain("```");
  });

  it("renders strikethrough & task lists", () => {
    const html = renderMarkdownToHtml("~~删除~~\n\n- [x] 已完成\n- [ ] 未完成");
    expect(html).toContain("<s>删除</s>");
    expect(html).toContain('type="checkbox"');
  });

  it("renders inline inline code / bold / italic / link", () => {
    const html = renderMarkdownToHtml("**粗** *斜* `码` [链接](https://x.com)");
    expect(html).toContain("<strong>粗</strong>");
    expect(html).toContain("<em>斜</em>");
    expect(html).toContain("<code>码</code>");
    expect(html).toContain('<a href="https://x.com">链接</a>');
  });

  it("escapes raw HTML (防 XSS)", () => {
    const html = renderMarkdownToHtml('<script>alert("x")</script>');
    expect(html).not.toContain("<script>");
    expect(html).toContain("&lt;script&gt;");
  });

  it("handles empty / undefined safely", () => {
    expect(renderMarkdownToHtml("")).toBe("");
    expect(renderMarkdownToHtml(undefined as unknown as string)).toBe("");
  });
});

describe("renderMarkdownInline", () => {
  it("renders inline markup without block wrappers", () => {
    const html = renderMarkdownInline("**粗**和*斜*");
    expect(html).toContain("<strong>粗</strong>");
    expect(html).not.toContain("<p>");
  });
});