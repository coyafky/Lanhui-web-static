// 验证 4+1 Tab 移动端表现
import { chromium } from "@playwright/test";
const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
await page.goto("https://lanhuiqinggai.com/product/wenjie/m7/", { waitUntil: "networkidle" });
await page.waitForTimeout(1000);

// 滚到 Tab 区
await page.evaluate(() => {
  const bar = document.querySelector('[role="tablist"]')?.parentElement;
  window.scrollTo(0, bar?.getBoundingClientRect().top + window.scrollY + 120);
});
await page.waitForTimeout(600);

const r = await page.evaluate(() => {
  const tablist = document.querySelector('[role="tablist"]');
  const bar = tablist?.parentElement;
  const btns = [...(tablist?.querySelectorAll('button') || [])];
  return {
    docOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    tabCount: btns.length,
    tabWidths: btns.map(b => Math.round(b.getBoundingClientRect().width)),
    totalTabWidth: btns.reduce((a,b)=>a+b.getBoundingClientRect().width,0) + btns.length*8,
    barWidth: Math.round(bar?.getBoundingClientRect().width || 0),
    viewport: document.documentElement.clientWidth,
    tablistScrollable: (tablist?.scrollWidth || 0) > (tablist?.clientWidth || 0),
    stickyTop: bar ? Math.round(bar.getBoundingClientRect().top) : null,
    headerBottom: document.querySelector('header') ? Math.round(document.querySelector('header').getBoundingClientRect().bottom) : null,
  };
});
console.log(JSON.stringify(r, null, 2));
await browser.close();
