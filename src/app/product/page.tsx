import type { Metadata } from "next";
import {
  ALL_SERVICES,
  getLiveBrands,
  getLiveServices,
} from "@/lib/product-routes";
import type { ServiceRoute } from "@/lib/product-routes";
import { ProductHero } from "@/components/product/ProductHero";
import { FilmServiceMap } from "@/components/product/FilmServiceMap";
import { LightModMap } from "@/components/product/LightModMap";
import { VehicleTopicMap } from "@/components/product/VehicleTopicMap";
import { MobileProductContent } from "@/components/product/MobileProductContent";
import { PracticalAccessoryMap } from "@/components/product/PracticalAccessoryMap";
import { CarCareServiceMap } from "@/components/product/CarCareServiceMap";
import { BusinessComfortMap } from "@/components/product/BusinessComfortMap";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { safeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "产品中心 | 蓝辉轻改 LANHUI",
  description:
    "蓝辉轻改产品中心，按车型找方案，按项目看服务。覆盖汽车膜系、轻改装备、车载电视、座舱实用配件与热门新能源车型升级方案。",
  alternates: { canonical: "/product" },
};

export default function ProductCenter() {
  const breadcrumbItems = getProductBreadcrumbs("/product");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product");
  const liveBrands = getLiveBrands();
  const liveServices = getLiveServices();

  // P0 三大地图分组
  const filmServices = liveServices.filter(
    (s: ServiceRoute) => s.group === "film"
  );
  const lightModServices = liveServices.filter(
    (s: ServiceRoute) => s.group === "light_mod"
  );
  const practicalAccessoryServices = liveServices.filter(
    (s: ServiceRoute) => s.group === "practical_accessory"
  );
  const businessComfortServices = liveServices.filter(
    (s: ServiceRoute) => s.group === "business_comfort"
  );
  const carCareServices = liveServices.filter(
    (s: ServiceRoute) => s.group === "car_care"
  );

  // 移动端 sticky tab — 车型 / 项目内容切换
  const mobileTabs = [
    { id: "vehicle", label: "按车型", accentColor: "violet" as const },
    { id: "project", label: "按项目", accentColor: "cyan" as const },
  ];

  // JSON-LD: CollectionPage + ItemList (PRD §7.6 SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "产品中心 | 蓝辉轻改 LANHUI",
    description:
      "蓝辉轻改产品中心，按车型找方案，按项目看服务。覆盖汽车膜系、轻改装备、后排影音、座舱配件与 12 个热门新能源品牌升级方案。",
    url: "/product",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        ...liveBrands.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.title,
          url: b.canonicalPath,
        })),
        ...liveServices.map((s, i) => ({
          "@type": "ListItem",
          position: liveBrands.length + i + 1,
          name: s.title,
          url: s.canonicalPath,
        })),
      ],
    },
  };

  return (
    <>
      <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col">
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />

        {/* Phase 1: ProductHero，真实服务画廊 + 4 材质切片 + 品牌矩阵 */}
        <ProductHero
          liveBrands={liveBrands}
          plannedCount={ALL_SERVICES.length}
          breadcrumbItems={breadcrumbItems}
        />

        {/* Phase 3-4: 移动端三段切换 / 桌面端平铺 */}
        <MobileProductContent tabs={mobileTabs}>
          {/* Tab 1: 按车型 — violet 主题 11 品牌矩阵 + 3 重点品牌放大 */}
          <section
            id="vehicle-topics"
            className="py-12 md:py-16 bg-zinc-950 border-t border-zinc-900"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <VehicleTopicMap brands={liveBrands} />
            </div>
          </section>

          {/* Tab 2: 按项目 — FilmServiceMap + LightModMap */}
          <section
            id="service-projects"
            className="py-12 md:py-16 bg-zinc-950 border-t border-zinc-900"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">
              <FilmServiceMap services={filmServices} />
              <LightModMap services={lightModServices} />
              <BusinessComfortMap services={businessComfortServices} />
              <PracticalAccessoryMap services={practicalAccessoryServices} />

              {carCareServices.length > 0 && (
                <CarCareServiceMap services={carCareServices} />
              )}
            </div>
          </section>
        </MobileProductContent>
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
