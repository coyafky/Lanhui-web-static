import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TeiHero } from "@/components/product/tei-brake/TeiHero";
import { TeiProductGrid } from "@/components/product/tei-brake/TeiProductGrid";
import { TeiFitNote } from "@/components/product/tei-brake/TeiFitNote";
import { TeiFaq } from "@/components/product/tei-brake/TeiFaq";
import { getServiceRoute } from "@/lib/product-routes";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { TEI_PRODUCTS, TEI_SERIES } from "@/lib/tei-brake";
import { safeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "TEI Racing 刹车卡钳｜赛道基因，街道到越野 - 蓝辉轻改",
  description:
    "蓝辉轻改门店在售 TEI Racing 高性能刹车套件：街道特调 P/S 系列、赛事 GT 系列、越野 T 系列，一体与分体锻造工艺，活塞数 4-10 可选。适配方案请到店确认。",
  alternates: { canonical: "/product/tei-brake" },
  openGraph: {
    title: "TEI Racing 刹车卡钳｜蓝辉轻改",
    description: "33 款刹车套件一览：工艺、活塞数、颜色与适配配置。",
    images: [
      {
        url: "/images/products/tei/p40ns.webp",
        width: 499,
        height: 540,
        alt: "TEI Racing P40NS 刹车卡钳",
      },
    ],
  },
};

export default function TeiBrakePage() {
  const service = getServiceRoute("tei-brake");
  if (!service || service.type !== "service_category") notFound();
  const breadcrumbItems = getProductBreadcrumbs("/product/tei-brake");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/tei-brake");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "TEI Racing 刹车卡钳产品线",
    description: metadata.description,
    url: service.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: TEI_PRODUCTS.map((p, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${p.model} ${p.description}`,
        url: `${service.canonicalPath}/${p.slug}`,
        image: `/images/products/tei/${p.slug}.webp`,
      })),
    },
  };

  return (
    <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col bg-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />

      {/* ====== 头部 ====== */}
      <TeiHero breadcrumbItems={breadcrumbItems} />

      {/* ====== 产品网格(系列分组 + 前后轮过滤) ====== */}
      <TeiProductGrid products={TEI_PRODUCTS} series={TEI_SERIES} />

      {/* ====== 适配说明 ====== */}
      <TeiFitNote />

      {/* ====== 常见问题 ====== */}
      <TeiFaq />

      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
        />
      )}
    </main>
  );
}
