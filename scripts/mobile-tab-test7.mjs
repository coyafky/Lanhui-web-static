// 用 npx serve 起真实静态服务再测
import { chromium } from "@playwright/test";
import { execSync, spawn } from "node:child_process";

// 起 serve
const serve = spawn("npx", ["serve", "out", "-l", "8898", "--no-clipboard"], { stdio: "pipe" });
await new Promise(r => setTimeout(r, 4000));

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
await page.goto("http://localhost:8898/product/wenjie/m7/", { waitUntil: "networkidle" });
await page.waitForTimeout(2500); // 等 hydrate

// 滚到 Tab 区
await page.evaluate(() => {
  const bar = document.querySelector('[role="tablist"]')?.parentElement;
  if (bar) window.scrollTo(0, bar.getBoundingClientRect().top + window.scrollY + 120);
});
await page.waitForTimeout(800);

const r = await page.evaluate(() => {
  const tablist = document.querySelector('[role="tablist"]');
  const btns = tablist ? [...(tablist.querySelectorAll('button'))] : [];
  const bar = tablist?.parentElement;
  return {
    tabCount: btns.length,
    tabLabels: btns.map(b => b.textContent?.trim()),
    viewport: document.documentElement.clientWidth,
    tablistScrollable: tablist ? tablist.scrollWidth > tablist.clientWidth : null,
    docOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    barHeight: bar ? Math.round(bar.getBoundingClientRect().height) : 0,
    stickyTop: bar ? Math.round(bar.getBoundingClientRect().top) : null,
    tabRows: btns.length ? [...new Set(btns.map(b => Math.round(b.getBoundingClientRect().top)))].length : 0,
  };
});
console.log(JSON.stringify(r, null, 2));
await browser.close();
serve.kill();
