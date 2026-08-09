import { SeriesMobileCtaBar } from "@/components/product/SeriesMobileCtaBar";

/**
 * 极氪页移动端底部固定双 CTA 栏（lg:hidden）：按车型查看 / 咨询方案。
 */
export function ZeekrMobileCtaBar() {
  return (
    <SeriesMobileCtaBar
      accent="orange"
      consultLabel="咨询方案"
      primaryLabel="按车型查看"
      targetId="zeekr-models"
    />
  );
}
