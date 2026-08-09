import { SeriesMobileCtaBar } from "@/components/product/SeriesMobileCtaBar";

/**
 * 理想页移动端底部固定双 CTA 栏（lg:hidden）：按车型查看 / 咨询适配方案。
 */
export function LiAutoMobileCtaBar() {
  return (
    <SeriesMobileCtaBar
      accent="amber"
      consultLabel="咨询适配方案"
      primaryLabel="按车型查看"
      targetId="li-auto-models"
    />
  );
}
