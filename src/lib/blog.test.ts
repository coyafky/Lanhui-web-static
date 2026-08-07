import { describe, expect, it } from "vitest";
import {
  formatArticleDate,
  getAdjacentArticles,
  getAllArticles,
  getArticleBySlug,
  parseArticleFile,
  parseFrontmatter,
  sortAndFilterArticles,
} from "./blog";

const SAMPLE = `---
title: 测试文章
slug: test-article
description: 这是一篇测试用的描述。
category: 窗膜
publishedAt: 2026-08-08
featuredImage: /images/producthero/window-film-hero.webp
draft: false
---

# 正文标题

正文内容，包含**粗体**和[链接](/blog)。
`;

describe("parseFrontmatter", () => {
  it("parses key-value pairs and separates content", () => {
    const { data, content } = parseFrontmatter(SAMPLE);
    expect(data.title).toBe("测试文章");
    expect(data.slug).toBe("test-article");
    expect(data.publishedAt).toBe("2026-08-08");
    expect(data.draft).toBe("false");
    expect(content).toContain("# 正文标题");
  });

  it("strips surrounding quotes from values", () => {
    const { data } = parseFrontmatter('---\ntitle: "带引号标题"\n---\n正文');
    expect(data.title).toBe("带引号标题");
  });

  it("returns empty data when no frontmatter exists", () => {
    const { data, content } = parseFrontmatter("纯正文没有 frontmatter");
    expect(data).toEqual({});
    expect(content).toBe("纯正文没有 frontmatter");
  });
});

describe("parseArticleFile", () => {
  it("parses a full article with all fields", () => {
    const article = parseArticleFile("test.md", SAMPLE);
    expect(article.slug).toBe("test-article");
    expect(article.title).toBe("测试文章");
    expect(article.description).toBe("这是一篇测试用的描述。");
    expect(article.category).toBe("窗膜");
    expect(article.publishedAt).toBe("2026-08-08");
    expect(article.featuredImage).toBe("/images/producthero/window-film-hero.webp");
    expect(article.draft).toBe(false);
    expect(article.content).toContain("正文内容");
    expect(article.readingMinutes).toBeGreaterThanOrEqual(1);
  });

  it("falls back to filename slug when slug is missing", () => {
    const raw = SAMPLE.replace("slug: test-article\n", "");
    const article = parseArticleFile("fallback-name.md", raw);
    expect(article.slug).toBe("fallback-name");
  });

  it("marks draft articles", () => {
    const raw = SAMPLE.replace("draft: false", "draft: true");
    expect(parseArticleFile("draft.md", raw).draft).toBe(true);
  });

  it("throws when title is missing", () => {
    const raw = SAMPLE.replace("title: 测试文章\n", "");
    expect(() => parseArticleFile("bad.md", raw)).toThrow(/title/);
  });

  it("throws when publishedAt is invalid", () => {
    const raw = SAMPLE.replace("publishedAt: 2026-08-08", "publishedAt: 2026/08/08");
    expect(() => parseArticleFile("bad.md", raw)).toThrow(/publishedAt/);
  });
});

describe("sortAndFilterArticles", () => {
  function makeArticle(slug: string, publishedAt: string, draft = false) {
    return parseArticleFile(
      `${slug}.md`,
      `---\ntitle: ${slug}\nslug: ${slug}\npublishedAt: ${publishedAt}\ndraft: ${draft}\n---\n正文`,
    );
  }

  it("sorts by publishedAt descending", () => {
    const articles = sortAndFilterArticles([
      makeArticle("a", "2026-08-01"),
      makeArticle("b", "2026-08-08"),
      makeArticle("c", "2026-08-05"),
    ]);
    expect(articles.map((a) => a.slug)).toEqual(["b", "c", "a"]);
  });

  it("filters out drafts", () => {
    const articles = sortAndFilterArticles([
      makeArticle("published", "2026-08-08"),
      makeArticle("draft", "2026-08-01", true),
    ]);
    expect(articles.map((a) => a.slug)).toEqual(["published"]);
  });

  it("rejects duplicate slugs", () => {
    expect(() =>
      sortAndFilterArticles([
        makeArticle("dup", "2026-08-01"),
        makeArticle("dup", "2026-08-02"),
      ]),
    ).toThrow(/重复 slug/);
  });

  it("does not mutate the input array", () => {
    const input = [makeArticle("a", "2026-08-01"), makeArticle("b", "2026-08-08")];
    sortAndFilterArticles(input);
    expect(input.map((a) => a.slug)).toEqual(["a", "b"]);
  });
});

describe("formatArticleDate", () => {
  it("formats ISO date to Chinese style", () => {
    expect(formatArticleDate("2026-08-08")).toBe("2026年8月8日");
  });

  it("returns input unchanged for invalid values", () => {
    expect(formatArticleDate("unknown")).toBe("unknown");
  });
});

describe("real articles (integration)", () => {
  it("reads 3 published articles from src/content/articles", () => {
    const articles = getAllArticles();
    expect(articles).toHaveLength(3);
  });

  it("orders real articles newest first", () => {
    const articles = getAllArticles();
    const dates = articles.map((a) => a.publishedAt);
    expect([...dates].sort().reverse()).toEqual(dates);
  });

  it("resolves every article by slug and finds adjacent ones", () => {
    const articles = getAllArticles();
    for (const article of articles) {
      expect(getArticleBySlug(article.slug)?.title).toBe(article.title);
      const { prev, next } = getAdjacentArticles(article.slug);
      expect(prev?.publishedAt ?? "none").toBeDefined();
      expect(next?.publishedAt ?? "none").toBeDefined();
    }
  });

  it("returns undefined for unknown slug", () => {
    expect(getArticleBySlug("not-exist")).toBeUndefined();
    expect(getAdjacentArticles("not-exist")).toEqual({});
  });

  it("every real article has required metadata", () => {
    for (const article of getAllArticles()) {
      expect(article.title.length).toBeGreaterThan(0);
      expect(article.description.length).toBeGreaterThan(0);
      expect(article.category.length).toBeGreaterThan(0);
      expect(article.publishedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(article.featuredImage).toBeTruthy();
      expect(article.content.length).toBeGreaterThan(200);
    }
  });
});
