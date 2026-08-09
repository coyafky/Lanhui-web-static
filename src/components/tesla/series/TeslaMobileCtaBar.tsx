import { SeriesMobileCtaBar } from "@/components/product/SeriesMobileCtaBar";

/**
 * Tesla 页移动端底部固定双 CTA 栏（lg:hidden）：按车型咨询 / 咨询适配方案。
 */
export function TeslaMobileCtaBar() {
  return (
    <SeriesMobileCtaBar
      accent="red"
      consultLabel="咨询适配方案"
      primaryLabel="按车型咨询"
      targetId="tesla-models"
    />
  );
}
