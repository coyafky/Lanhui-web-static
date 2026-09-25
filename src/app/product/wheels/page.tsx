import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WheelHero } from "@/components/product/wheel/WheelHero";
import { WheelCatalog } from "@/components/product/wheel/WheelCatalog";
import { WheelCatalogView } from "@/components/product/wheel/WheelCatalogView";
import { WheelConstructionProofs } from "@/components/product/wheel/WheelConstructionProofs";
import { WheelServiceFlow } from "@/components/product/wheel/WheelServiceFlow";
import { WheelDouyinCta } from "@/components/product/wheel/WheelDouyinCta";
import { getServiceRoute } from "@/lib/product-routes";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import {
  DEFAULT_WHEEL_CATALOG_FILTERS,
  WHEEL_CATALOG_ANCHOR,
  WHEEL_CATALOG_DISCLAIMER,
  WHEEL_CATALOG_PATH,
} from "@/lib/wheel-catalog";
import { wheelCatalogItems } from "@/lib/wheel-catalog-projection";
import { getSiteUrl } from "@/lib/site-url";
import { safeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "轮毂升级与整车姿态方案｜蓝辉轻改 LANHUI",
  description:
    "让轮毂决定整车侧面的气质。蓝辉轻改轮毂升级围绕原车数据确认、刹车间隙、动平衡和扭矩复查，提供21款视觉方案供选择。",
  alternates: { canonical: "/product/wheels" },
  openGraph: {
    title: "轮毂升级与整车姿态方案｜蓝辉轻改 LANHUI",
    description:
      "查看蓝辉轻改现有轮毂图库，先判断外观风格，再到店确认原车数据和安装边界。",
    images: [
      {
        url: "/images/producthero/wheels-hero.webp",
        width: 1448,
        height: 1086,
        alt: "新能源轿车轮毂升级后的整车姿态",
      },
    ],
  },
};

export default function WheelsPage() {
  const service = getServiceRoute("wheels");
  if (!service || service.type !== "service_category") notFound();
  const breadcrumbItems = getProductBreadcrumbs("/product/wheels");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/wheels");

  // ItemList 用真实编号条目（每条 = 一个详情页 URL）。
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "轮毂升级与整车姿态方案",
    description: metadata.description,
    url: service.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: wheelCatalogItems.length,
      itemListElement: wheelCatalogItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.id,
        url: `${siteUrl}${WHEEL_CATALOG_PATH}/${item.id}`,
        ...(item.cardImage !== null
          ? { image: `${siteUrl}${item.cardImage}` }
          : {}),
      })),
    },
  };

  return (
    <>
      <WheelHero breadcrumbItems={breadcrumbItems} />

      <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col bg-zinc-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />

        {/* ====== 可筛选轮毂目录（默认按工艺分组，筛选后退化为平铺） ====== */}
        <section
          id={WHEEL_CATALOG_ANCHOR}
          className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05] scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 lg:mb-10">
              <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
                轮毂选款
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {wheelCatalogItems.length} 个编号，按工艺与规格挑选
              </h2>
              <p className="mt-3 text-zinc-400 max-w-xl">
                默认按工艺分组浏览；按工艺、直径、PCD 筛选后可缩小范围，点开任一编号查看完整规格明细与产品图。
              </p>
            </div>

            <Suspense
              fallback={
                <WheelCatalogView
                  items={wheelCatalogItems}
                  filters={DEFAULT_WHEEL_CATALOG_FILTERS}
                />
              }
            >
              <WheelCatalog items={wheelCatalogItems} />
            </Suspense>

            <p className="mt-8 text-center text-xs leading-relaxed text-zinc-500">
              * {WHEEL_CATALOG_DISCLAIMER}
            </p>
          </div>
        </section>

        {/* ====== 施工信任 + 常见问题 ====== */}
        <WheelConstructionProofs />

        {/* ====== 图文流程 + 质保售后 ====== */}
        <WheelServiceFlow />

        {/* ====== 抖音真实上车案例 CTA ====== */}
        <WheelDouyinCta />
      </main>

      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
        />
      )}
    </>
  );
}
