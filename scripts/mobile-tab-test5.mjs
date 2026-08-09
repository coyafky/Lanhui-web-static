// 线上实测：4+1 Tab 移动端表现
import { chromium } from "@playwright/test";
const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
await page.goto("https://lanhuiqinggai.com/product/wenjie/m7/", { waitUntil: "networkidle" });
await page.waitForTimeout(1200);

// 滚到 Tab 区
await page.evaluate(() => {
  const bar = document.querySelector('[role="tablist"]')?.parentElement;
  window.scrollTo(0, bar?.getBoundingClientRect().top + window.scrollY + 120);
});
await page.waitForTimeout(600);

const r = await page.evaluate(() => {
  const tablist = document.querySelector('[role="tablist"]');
  const btns = [...(tablist?.querySelectorAll('button') || [])];
  return {
    tabCount: btns.length,
    tabLabels: btns.map(b => b.textContent?.trim()),
    totalTabWidth: Math.round(btns.reduce((a,b)=>a+b.getBoundingClientRect().width,0) + btns.length*8),
    viewport: document.documentElement.clientWidth,
    tablistScrollable: (tablist?.scrollWidth || 0) > (tablist?.clientWidth || 0),
    docOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    stickyTop: Math.round(tablist?.parentElement?.getBoundingClientRect().top || 0),
  };
});
console.log(JSON.stringify(r, null, 2));
await browser.close();
