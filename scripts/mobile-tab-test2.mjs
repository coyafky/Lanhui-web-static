// 实测：滚动后 Tab 吸顶位置 vs Header 高度
import { chromium } from "@playwright/test";

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
});

await page.goto("https://lanhuiqinggai.com/product/wenjie/m7/", { waitUntil: "networkidle" });
await page.waitForTimeout(1000);

// 1. 未滚动时 Header 高度
const before = await page.evaluate(() => {
  const header = document.querySelector("header");
  const tabBar = document.querySelector('[role="tablist"]')?.parentElement;
  return {
    headerH: header?.offsetHeight,
    headerTop: header?.getBoundingClientRect().top,
    tabTop: tabBar?.getBoundingClientRect().top,
    tabSticky: getComputedStyle(tabBar).position,
    tabTopVal: getComputedStyle(tabBar).top,
  };
});

// 2. 滚动到 Tab 位置下方（触发 sticky）
await page.evaluate(() => {
  const tabs = document.querySelector('[role="tablist"]');
  const bar = tabs?.parentElement;
  // 滚到 Tab 栏顶部刚好越过视口顶部
  window.scrollTo(0, bar?.getBoundingClientRect().top + window.scrollY + 120);
});
await page.waitForTimeout(800);

const after = await page.evaluate(() => {
  const header = document.querySelector("header");
  const tabBar = document.querySelector('[role="tablist"]')?.parentElement;
  return {
    scrollY: window.scrollY,
    headerH: header?.offsetHeight,
    headerRect: header?.getBoundingClientRect().toJSON(),
    tabRect: tabBar?.getBoundingClientRect().toJSON(),
    tabTopVal: getComputedStyle(tabBar).top,
    gap: tabBar?.getBoundingClientRect().top - header?.getBoundingClientRect().bottom,
  };
});

console.log("滚动前:", JSON.stringify(before, null, 2));
console.log("滚动后:", JSON.stringify(after, null, 2));

// 截图：滚动后的吸顶状态
await page.screenshot({ path: "/tmp/mobile-tab-sticky.png", clip: { x: 0, y: 0, width: 390, height: 500 } });
console.log("截图: /tmp/mobile-tab-sticky.png");

await browser.close();
