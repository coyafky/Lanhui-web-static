import { describe, expect, it } from "vitest";
import { parseInline, parseMarkdown } from "./markdown";

describe("parseInline", () => {
  it("plain text stays as a single text token", () => {
    expect(parseInline("普通文本")).toEqual([{ type: "text", value: "普通文本" }]);
  });

  it("parses bold", () => {
    expect(parseInline("前挡**透光率**很重要")).toEqual([
      { type: "text", value: "前挡" },
      { type: "bold", value: "透光率" },
      { type: "text", value: "很重要" },
    ]);
  });

  it("parses italic", () => {
    expect(parseInline("这是*斜体*内容")).toEqual([
      { type: "text", value: "这是" },
      { type: "italic", value: "斜体" },
      { type: "text", value: "内容" },
    ]);
  });

  it("parses inline code", () => {
    expect(parseInline("用 `npm run build` 构建")).toEqual([
      { type: "text", value: "用 " },
      { type: "code", value: "npm run build" },
      { type: "text", value: " 构建" },
    ]);
  });

  it("parses links", () => {
    expect(parseInline("电话 [18825425068](tel:18825425068) 咨询")).toEqual([
      { type: "text", value: "电话 " },
      { type: "link", href: "tel:18825425068", label: "18825425068" },
      { type: "text", value: " 咨询" },
    ]);
  });

  it("keeps unmatched characters as text", () => {
    expect(parseInline("1 * 2")).toEqual([{ type: "text", value: "1 * 2" }]);
  });
});

describe("parseMarkdown", () => {
  it("parses headings with levels", () => {
    const blocks = parseMarkdown("# 大标题\n\n## 小标题\n\n### 三级");
    expect(blocks).toEqual([
      { type: "heading", level: 1, content: "大标题" },
      { type: "heading", level: 2, content: "小标题" },
      { type: "heading", level: 3, content: "三级" },
    ]);
  });

  it("parses paragraphs separated by blank lines", () => {
    const blocks = parseMarkdown("第一段\n\n第二段");
    expect(blocks).toEqual([
      { type: "paragraph", content: "第一段" },
      { type: "paragraph", content: "第二段" },
    ]);
  });

  it("preserves newlines inside a paragraph", () => {
    const blocks = parseMarkdown("第一行\n第二行");
    expect(blocks).toEqual([{ type: "paragraph", content: "第一行\n第二行" }]);
  });

  it("merges consecutive unordered list items", () => {
    const blocks = parseMarkdown("- 前挡\n- 侧后挡\n- 天幕");
    expect(blocks).toEqual([
      {
        type: "list",
        ordered: false,
        items: ["前挡", "侧后挡", "天幕"],
      },
    ]);
  });

  it("merges consecutive ordered list items", () => {
    const blocks = parseMarkdown("1. 到店\n2. 接车\n3. 施工");
    expect(blocks).toEqual([
      {
        type: "list",
        ordered: true,
        items: ["到店", "接车", "施工"],
      },
    ]);
  });

  it("parses quote blocks", () => {
    const blocks = parseMarkdown("> 施工当天要仔细检查\n> 当场发现问题当场处理");
    expect(blocks).toEqual([
      {
        type: "quote",
        content: "施工当天要仔细检查\n当场发现问题当场处理",
      },
    ]);
  });

  it("handles a mixed document", () => {
    const blocks = parseMarkdown(
      "# 标题\n\n段落一\n\n- 列表一\n- 列表二\n\n> 引用",
    );
    expect(blocks.map((b) => b.type)).toEqual([
      "heading",
      "paragraph",
      "list",
      "quote",
    ]);
  });

  it("handles windows line endings", () => {
    const blocks = parseMarkdown("# 标题\r\n\r\n段落\r\n");
    expect(blocks).toEqual([
      { type: "heading", level: 1, content: "标题" },
      { type: "paragraph", content: "段落" },
    ]);
  });
});
