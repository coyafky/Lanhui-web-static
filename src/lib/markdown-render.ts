/**
 * 基于 markdown-it 的内容渲染层（升级版）。
 *
 * 替代原 src/lib/markdown.ts 的手写 4 块解析器，改用成熟 markdown-it：
 * - 内置 GFM 表格 / 删除线 / 任务列表
 * - html: false → 原始 HTML 被转义，天然防 XSS（无需额外 sanitize）
 * - linkify → URL 自动转链接
 * - 构建时在 Node 端渲染成静态 HTML，兼容 output: export
 *
 * 输出 HTML 字符串，由组件用容器样式渲染。
 */

import MarkdownIt from "markdown-it";
import taskLists from "markdown-it-task-lists";

const md: InstanceType<typeof MarkdownIt> = new MarkdownIt({
  html: false, // 不执行原始 HTML，防止注入
  linkify: true, // 裸 URL 自动转 <a>
  breaks: false, // 保持 Markdown 段落规则（单换行不折行）
  typographer: true, // 智能标点
}).use(taskLists); // GFM 任务列表 - [x] / - [ ]

/** 渲染整篇 Markdown 为 HTML 字符串 */
export function renderMarkdownToHtml(source: string): string {
  return md.render(source ?? "");
}

/** 渲染单段为行内 HTML（Element 内容用，如描述摘要） */
export function renderMarkdownInline(source: string): string {
  return md.renderInline(source ?? "");
}