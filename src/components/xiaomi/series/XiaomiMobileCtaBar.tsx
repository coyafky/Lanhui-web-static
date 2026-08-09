import { SeriesMobileCtaBar } from "@/components/product/SeriesMobileCtaBar";

/**
 * 小米页移动端底部固定双 CTA 栏（lg:hidden）：按车型查看 / 咨询适配方案。
 */
export function XiaomiMobileCtaBar() {
  return (
    <SeriesMobileCtaBar
      accent="orange"
      consultLabel="咨询适配方案"
      primaryLabel="按车型查看"
      targetId="xiaomi-models"
    />
  );
}
