import { SeriesMobileCtaBar } from "@/components/product/SeriesMobileCtaBar";

/**
 * 小鹏页移动端底部固定双 CTA 栏（lg:hidden）：查看 GX 方案 / 咨询方案。
 */
export function XpengMobileCtaBar() {
  return (
    <SeriesMobileCtaBar
      accent="orange"
      consultLabel="咨询方案"
      primaryIcon="car"
      primaryLabel="查看 GX 方案"
      targetId="xpeng-gx"
    />
  );
}
