import { SeriesMobileCtaBar } from "@/components/product/SeriesMobileCtaBar";

/**
 * 问界页移动端底部固定双 CTA 栏（lg:hidden）：按车型查看 / 咨询方案。
 */
export function WenjieMobileCtaBar() {
  return (
    <SeriesMobileCtaBar
      accent="cyan"
      consultLabel="咨询方案"
      primaryLabel="按车型查看"
      targetId="wenjie-models"
    />
  );
}
