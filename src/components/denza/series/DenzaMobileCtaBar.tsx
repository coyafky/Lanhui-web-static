import { SeriesMobileCtaBar } from "@/components/product/SeriesMobileCtaBar";

/**
 * 腾势页移动端底部固定双 CTA 栏（lg:hidden）：查看 D9 方案 / 咨询方案。
 */
export function DenzaMobileCtaBar() {
  return (
    <SeriesMobileCtaBar
      accent="orange"
      consultLabel="咨询方案"
      primaryIcon="car"
      primaryLabel="查看 D9 方案"
      targetId="denza-d9"
    />
  );
}
