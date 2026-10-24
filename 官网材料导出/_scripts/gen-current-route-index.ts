/** 从当前源码生成路由快照；不会读取 out/，也不会修改页面源码。 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ALL_BRANDS, ALL_MODELS, ALL_SERVICES } from "../../src/lib/product-routes";
import { getAllArticles } from "../../src/lib/blog";
import { listStores, listPublishedCities, listPublishedProvinces } from "../../src/lib/store-query";
import sitemap from "../../src/app/sitemap";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "../..");
process.chdir(root);
const appDir = path.join(root, "src/app");
const output = path.join(root, "官网材料导出/00-网站架构与说明/03-页面清单与路由地图.md");
const date = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Shanghai", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());

function pageFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return pageFiles(full);
    return entry.name === "page.tsx" ? [full] : [];
  });
}
function routeOf(file: string): string {
  const rel = path.relative(appDir, path.dirname(file)).split(path.sep).join("/");
  return rel ? `/${rel}` : "/";
}
function clean(s: string): string { return s.replaceAll("|", "\\|").replaceAll("\n", " "); }
function row(route: string, name: string, state: string, source: string): string {
  return `| \`${route}\` | ${clean(name)} | ${state} | \`${source}\` |`;
}

async function main() {
  const files = pageFiles(appDir).sort();
  const actual = new Map(files.map((file) => [routeOf(file), path.relative(root, file).split(path.sep).join("/")]));
  const registered = new Set([...ALL_BRANDS, ...ALL_MODELS, ...ALL_SERVICES].map((entry) => entry.canonicalPath));
  const other = [...actual.keys()].filter((route) => !registered.has(route));
  const fixed = other.filter((route) => !route.includes("["));
  const dynamic = other.filter((route) => route.includes("["));
  const missing = [...registered].filter((route) => !actual.has(route));
  const sitemapEntries = await sitemap();
  const uniqueSitemap = new Set(sitemapEntries.map((entry) => entry.url));
  const lines = [
    "# 页面清单与路由地图",
    "",
    `> 自动生成：${date}，依据当前本地源码（含未提交改动）。运行 \`./node_modules/.bin/tsx 官网材料导出/_scripts/gen-current-route-index.ts\` 可刷新。这里是源码快照，非线上页面清单；构建与线上状态须另行验收。`,
    "",
    `- \`page.tsx\` 入口：**${files.length}**（其中动态模板 ${dynamic.length}）；注册表：**${ALL_BRANDS.length} 品牌、${ALL_MODELS.length} 车型、${ALL_SERVICES.length} 服务**。`,
    `- 已发布文章 **${getAllArticles().length}** 篇；开放门店 **${listStores().length}** 家；有门店的省/市页面各 **${listPublishedProvinces().length}/${listPublishedCities().length}** 个。`,
    `- 当前 \`sitemap()\` 返回 **${sitemapEntries.length}** 条，去重后 **${uniqueSitemap.size}** 条。动态轮毂详情页等会生成多个网址，不能用入口文件数代替页面数。`,
    `- 注册表缺少对应 \`page.tsx\`：**${missing.length}**${missing.length ? `（${missing.join("、")}）` : ""}。`,
    "",
    "## 固定入口（注册表以外）", "",
    "| 路径 | 用途 | 状态 | 页面入口 |", "|---|---|---|---|",
    ...fixed.map((route) => row(route, route === "/" ? "首页" : "固定页面/专题", "文件存在；内容需验收", actual.get(route)!)),
    "", "## 动态模板（构建时生成具体网址）", "",
    "| 路径模式 | 用途 | 状态 | 页面入口 |", "|---|---|---|---|",
    ...dynamic.map((route) => row(route, "静态参数生成模板", "文件存在；生成数量以数据/构建为准", actual.get(route)!)),
    "", "## 服务页", "",
    "| 路径 | 名称 | 注册状态 | 页面入口 |", "|---|---|---|---|",
    ...ALL_SERVICES.map((entry) => row(entry.canonicalPath, entry.title, entry.status, actual.get(entry.canonicalPath) ?? "缺失")),
    "", "## 品牌系列页", "",
    "| 路径 | 名称 | 注册状态 | 页面入口 |", "|---|---|---|---|",
    ...ALL_BRANDS.map((entry) => row(entry.canonicalPath, entry.brandName, entry.status, actual.get(entry.canonicalPath) ?? "缺失")),
    "", "## 车型页", "",
    "| 路径 | 名称 | 注册状态 | 页面入口 |", "|---|---|---|---|",
    ...ALL_MODELS.map((entry) => row(entry.canonicalPath, entry.modelName, entry.status, actual.get(entry.canonicalPath) ?? "缺失")),
    "", "## 使用说明", "",
    "- `planned` 是路由注册状态，不等于页面未构建。当前问界 M6/M7/M8 虽为 `planned`，但有页面文件，也进入 sitemap；应核对内容质量。",
    "- `business-comfort` 页面是占位实现，服务注册状态 `planned`，不进入服务 sitemap。",
    "- 本目录 `01-页面说明/` 中旧逐页材料未覆盖全部当前路由；使用前先核对页面源码和本表。",
    "- 新增路由时先核对注册表、实际页面、导航、canonical、sitemap、llms.txt 与图片，再执行静态门禁。",
    "",
  ];
  fs.writeFileSync(output, lines.join("\n"));
  console.log(`WROTE ${output} pages=${files.length} sitemap=${sitemapEntries.length} missing=${missing.length}`);
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
