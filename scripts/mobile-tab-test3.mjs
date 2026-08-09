// 验证：Tab 栏 sticky 时是否导致整页横向滚动
import { chromium } from "@playwright/test";

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

await page.goto("https://lanhuiqinggai.com/product/wenjie/m7/", { waitUntil: "networkidle" });
await page.waitForTimeout(1000);

// 滚动到 Tab 吸顶
await page.evaluate(() => {
  const bar = document.querySelector('[role="tablist"]')?.parentElement;
  window.scrollTo(0, bar?.getBoundingClientRect().top + window.scrollY + 150);
});
await page.waitForTimeout(600);

const result = await page.evaluate(() => {
  return {
    // 整页横向滚动检测
    docScrollWidth: document.documentElement.scrollWidth,
    docClientWidth: document.documentElement.clientWidth,
    hasHorizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    // Tab 容器
    tabBarWidth: document.querySelector('[role="tablist"]')?.parentElement?.getBoundingClientRect().width,
    tabBarLeft: document.querySelector('[role="tablist"]')?.parentElement?.getBoundingClientRect().left,
    // 滚动条可见性（scrollbar-hide 是否生效）
    tabListScrollWidth: document.querySelector('[role="tablist"]')?.scrollWidth,
    tabListClientWidth: document.querySelector('[role="tablist"]')?.clientWidth,
  };
});

console.log(JSON.stringify(result, null, 2));

// 尝试整页横向滚动
await page.evaluate(() => window.scrollTo(100, window.scrollY));
await page.waitForTimeout(300);
const afterX = await page.evaluate(() => window.scrollX);
console.log("横向滚动尝试后 scrollX =", afterX, afterX > 0 ? "← 页面可以横向滚动！问题确认" : "← 页面无法横向滚动（OK）");

await browser.close();
