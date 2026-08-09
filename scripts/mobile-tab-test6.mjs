// 本地静态服务实测：4+1 Tab 换行后移动端表现
import { chromium } from "@playwright/test";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = join(process.cwd(), "out");
const server = createServer(async (req, res) => {
  try {
    let p = new URL(req.url, "http://localhost").pathname;
    if (p === "/") p = "/product/wenjie/m7/"; // 直接测车型页
    if (p.endsWith("/")) p += "index.html";
    const data = await readFile(join(root, p));
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.end(data);
  } catch {
    res.writeHead(404); res.end("not found");
  }
});
await new Promise(r => server.listen(8899, r));

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
await page.goto("http://localhost:8899/product/wenjie/m7/", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

// 滚到 Tab 区
await page.evaluate(() => {
  const bar = document.querySelector('[role="tablist"]')?.parentElement;
  window.scrollTo(0, bar?.getBoundingClientRect().top + window.scrollY + 120);
});
await page.waitForTimeout(500);

const r = await page.evaluate(() => {
  const tablist = document.querySelector('[role="tablist"]');
  const btns = [...(tablist?.querySelectorAll('button') || [])];
  const bar = tablist?.parentElement;
  return {
    tabCount: btns.length,
    totalTabWidth: Math.round(btns.reduce((a,b)=>a+b.getBoundingClientRect().width,0) + btns.length*8),
    viewport: document.documentElement.clientWidth,
    tablistScrollable: (tablist?.scrollWidth || 0) > (tablist?.clientWidth || 0),
    docOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    barHeight: bar ? Math.round(bar.getBoundingClientRect().height) : 0,
    stickyTop: bar ? Math.round(bar.getBoundingClientRect().top) : null,
    // 换行后 tab 的排列（y 坐标分组）
    tabRows: [...new Set(btns.map(b => Math.round(b.getBoundingClientRect().top)))].length,
  };
});
console.log(JSON.stringify(r, null, 2));
await browser.close();
server.close();
