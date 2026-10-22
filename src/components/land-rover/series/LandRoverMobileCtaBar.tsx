import { SeriesMobileCtaBar } from "@/components/product/SeriesMobileCtaBar";

/**
 * 路虎页移动端底部固定双 CTA 栏（lg:hidden）：按车型查看 / 咨询适配方案。
 */
export function LandRoverMobileCtaBar() {
  return (
    <SeriesMobileCtaBar
      accent="teal"
      consultLabel="咨询适配方案"
      primaryLabel="按车型查看"
      targetId="land-rover-models"
    />
  );
}
