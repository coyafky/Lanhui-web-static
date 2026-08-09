// 用 Playwright 在 390px 移动端视口验证 Tab 栏
import { chromium } from "@playwright/test";
import { execSync } from "node:child_process";

// 优先用系统 Chrome
const chromePaths = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
];
const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
});

await page.goto("https://lanhuiqinggai.com/product/wenjie/m7/", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);

// 检查 tablist 是否存在
const tablist = await page.locator('[role="tablist"]').count();
console.log("tablist 数量:", tablist);

// 检查 Tab 栏的滚动属性
const tabInfo = await page.evaluate(() => {
  const tabs = document.querySelector('[role="tablist"]');
  if (!tabs) return null;
  const style = getComputedStyle(tabs);
  const bar = tabs.parentElement;
  const barStyle = getComputedStyle(bar);
  return {
    tabOverflowX: style.overflowX,
    tabScrollbarWidth: tabs.scrollWidth - tabs.clientWidth,
    barOverflowX: barStyle.overflowX,
    barTop: barStyle.top,
    barPosition: barStyle.position,
    // 滚动条是否可见
    scrollbarVisible: tabs.scrollWidth > tabs.clientWidth,
  };
});
console.log("Tab 栏信息:", JSON.stringify(tabInfo, null, 2));

// 截屏
await page.screenshot({ path: "/tmp/mobile-tab-top.png", clip: { x: 0, y: 0, width: 390, height: 400 } });
console.log("截图已保存 /tmp/mobile-tab-top.png");

await browser.close();
