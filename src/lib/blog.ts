/**
 * 博客数据层
 *
 * 从 src/content/articles/*.md 读取文章（frontmatter + Markdown 正文），
 * 构建时解析、按 publishedAt 倒序排列、过滤 draft。
 *
 * frontmatter 使用简单的前置注释语法：
 *   ---
 *   title: ...
 *   slug: ...
 *   description: ...
 *   category: ...
 *   publishedAt: 2026-08-08
 *   featuredImage: /images/...
 *   draft: false
 *   ---
 */

import fs from "node:fs";
import path from "node:path";

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  /** ISO 日期，如 2026-08-08 */
  publishedAt: string;
  /** 封面图，站点内路径，如 /images/producthero/color-film-hero.webp */
  featuredImage?: string;
  draft: boolean;
};

export type Article = ArticleMeta & {
  /** Markdown 正文（由渲染组件负责转 JSX） */
  content: string;
  /** 估算阅读时长（分钟），按中文约 400 字/分钟 */
  readingMinutes: number;
};

const ARTICLES_DIR = path.join(
  process.cwd(),
  "src",
  "content",
  "articles",
);

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

/** 去掉 frontmatter 值两侧的引号（兼容 JSON 风格写法） */
function unquote(value: string): string {
  if (value.length >= 2) {
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      return value.slice(1, -1);
    }
  }
  return value;
}

/**
 * 解析 YAML 风格 frontmatter。
 * 仅支持 `key: value` 单行键值对（本仓库文章均为此格式）。
 */
export function parseFrontmatter(raw: string): {
  data: Record<string, string>;
  content: string;
} {
  const match = FRONTMATTER_RE.exec(raw);
  if (!match) {
    return { data: {}, content: raw };
  }
  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    const value = unquote(line.slice(colonIndex + 1).trim());
    if (key) {
      data[key] = value;
    }
  }
  return { data, content: raw.slice(match[0].length) };
}

/** 从 Markdown 正文提取纯文本摘要（用于缺失 description 时兜底） */
function summarize(markdown: string, max = 60): string {
  const text = markdown
    .replace(/[#*`>]/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > max ? `${text.slice(0, max)}…` : text;
}

/** 估算中文阅读时长（分钟），最少 1 分钟 */
function estimateReadingMinutes(markdown: string): number {
  const text = markdown.replace(/[#*`>_\-\d.\[\]()]/g, "").replace(/\s/g, "");
  return Math.max(1, Math.round(text.length / 400));
}

/** 从单个 Markdown 文件内容解析文章（纯函数，便于测试） */
export function parseArticleFile(fileName: string, raw: string): Article {
  const { data, content } = parseFrontmatter(raw);

  const title = data.title?.trim() ?? "";
  const publishedAt = data.publishedAt?.trim() ?? "";
  if (!title) {
    throw new Error(`[blog] 文章缺少必填字段 title: ${fileName}`);
  }
  if (!publishedAt || !/^\d{4}-\d{2}-\d{2}$/.test(publishedAt)) {
    throw new Error(
      `[blog] 文章 publishedAt 必须是 YYYY-MM-DD 格式: ${fileName}`,
    );
  }

  const slug = data.slug?.trim() || fileName.replace(/\.md$/, "");

  return {
    slug,
    title,
    description:
      data.description?.trim() || summarize(content),
    category: data.category?.trim() || "品牌资讯",
    publishedAt,
    featuredImage: data.featuredImage?.trim() || undefined,
    draft: data.draft?.trim().toLowerCase() === "true",
    content,
    readingMinutes: estimateReadingMinutes(content),
  };
}

function readArticleFile(fileName: string): Article {
  const filePath = path.join(ARTICLES_DIR, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  return parseArticleFile(fileName, raw);
}

/**
 * 过滤 draft、查重 slug、按 publishedAt 倒序（纯函数，便于测试）。
 * 重复 slug 会被拒绝（防止静默覆盖）。
 */
export function sortAndFilterArticles(articles: readonly Article[]): Article[] {
  const published = articles.filter((article) => !article.draft);

  const seen = new Set<string>();
  for (const article of published) {
    if (seen.has(article.slug)) {
      throw new Error(`[blog] 存在重复 slug: ${article.slug}`);
    }
    seen.add(article.slug);
  }

  return [...published].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
}

/**
 * 全部已发布文章，按 publishedAt 倒序（最新在前）。
 * draft 文章会被过滤，重复 slug 会被拒绝（防止静默覆盖）。
 */
export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) {
    console.error(`[blog] 文章目录不存在: ${ARTICLES_DIR}`);
    return [];
  }

  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".md"))
    .sort();

  const articles = files.map(readArticleFile);

  return sortAndFilterArticles(articles);
}

/** 按 slug 查找文章 */
export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}

/**
 * 上一篇 / 下一篇（基于 publishedAt 倒序列表）：
 * - prev：比当前更新的文章
 * - next：比当前更旧的文章
 */
export function getAdjacentArticles(slug: string): {
  prev?: Article;
  next?: Article;
} {
  const articles = getAllArticles();
  const index = articles.findIndex((article) => article.slug === slug);
  if (index === -1) return {};
  return {
    prev: index > 0 ? articles[index - 1] : undefined,
    next: index < articles.length - 1 ? articles[index + 1] : undefined,
  };
}

/** 把 2026-08-08 格式化为 2026年8月8日 */
export function formatArticleDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  if (!year || !month || !day) return isoDate;
  return `${Number(year)}年${Number(month)}月${Number(day)}日`;
}
