import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

/**
 * robots.txt — URL Contract 附录
 *
 * 原则：
 * 1. 绝不写 Disallow: / （那等于告诉搜索引擎别抓我们）
 * 2. Allow: / 放行全站（当前是纯静态站，无后端敏感路径）
 * 3. 预声明 Disallow 敏感路径：未来若引入 /api/ /admin/ /preview/ 等，
 *    蜘蛛不会误抓；当前无这些目录，规则无害但规范
 * 4. AI 爬虫（GPTBot/ClaudeBot/PerplexityBot/Google-Extended）明确放行——
 *    蓝辉做 GEO（AI 搜索可见度），AI 引用 = 免费流量
 * 5. Sitemap + Host 统一用裸域（与 URL Contract 一致）
 */
export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/preview/"],
      },
      // AI 爬虫：放行（GEO 战略：让 AI 能读到我们）
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "Bytespider",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
