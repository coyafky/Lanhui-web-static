import { SeriesMobileCtaBar } from "@/components/product/SeriesMobileCtaBar";

/**
 * 奇瑞页移动端底部固定双 CTA 栏（lg:hidden）：按车型查看 / 咨询适配方案。
 */
export function CheryMobileCtaBar() {
  return (
    <SeriesMobileCtaBar
      accent="cyan"
      consultLabel="咨询适配方案"
      primaryLabel="按车型查看"
      targetId="chery-models"
    />
  );
}
