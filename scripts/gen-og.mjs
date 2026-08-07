import sharp from "sharp";
import { existsSync } from "node:fs";

const W = 1200, H = 630;
// 品牌深蓝渐变底 + 橙色点缀
const svg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#10253F"/>
      <stop offset="100%" style="stop-color:#164B8C"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#F58220"/>
      <stop offset="100%" style="stop-color:#FF9A3D"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="${H-8}" width="${W}" height="8" fill="url(#accent)"/>
  <circle cx="${W-140}" cy="120" r="220" fill="#ffffff" opacity="0.04"/>
  <circle cx="${W-80}" cy="180" r="140" fill="#ffffff" opacity="0.05"/>
  <text x="90" y="250" font-family="PingFang SC, Microsoft YaHei, sans-serif" font-size="72" font-weight="700" fill="#FFFFFF">蓝辉轻改 LANHUI</text>
  <text x="92" y="330" font-family="PingFang SC, Microsoft YaHei, sans-serif" font-size="30" fill="#A8C5E8">汽车轻改装 · 车膜服务</text>
  <text x="92" y="400" font-family="PingFang SC, Microsoft YaHei, sans-serif" font-size="24" fill="#7BA3D1">让爱车更有型，也更好用</text>
  <rect x="92" y="470" width="160" height="6" rx="3" fill="url(#accent)"/>
  <text x="90" y="560" font-family="PingFang SC, Microsoft YaHei, sans-serif" font-size="20" fill="#5B83B0">www.lanhuiqinggai.com</text>
</svg>`);

const out = "public/images/social/og-default.png";
await sharp(svg).png().resize(W, H).toFile(out);
console.log("OG 图已生成:", out);
const meta = await sharp(out).metadata();
console.log(`尺寸: ${meta.width}x${meta.height}, ${meta.size} bytes`);
