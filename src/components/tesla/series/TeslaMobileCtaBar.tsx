import { SeriesMobileCtaBar } from "@/components/product/SeriesMobileCtaBar";

/**
 * Tesla 页移动端底部固定双 CTA 栏（lg:hidden）：查看基础服务 / 咨询适配方案。
 */
export function TeslaMobileCtaBar() {
  return (
    <SeriesMobileCtaBar
      accent="red"
      consultLabel="咨询适配方案"
      primaryLabel="查看基础服务"
      targetId="tesla-services"
    />
  );
}
