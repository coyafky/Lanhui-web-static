import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrayTableHero } from "@/components/product/tray-table/TrayTableHero";
import { TrayTableContent } from "@/components/product/tray-table/TrayTableContent";
import { TrayTableCta } from "@/components/product/tray-table/TrayTableCta";
import { trayTableImagePath, trayTableProducts } from "@/lib/tray-table-products";
import { getServiceRoute } from "@/lib/product-routes";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { safeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "小桌板｜给后排一个随时展开的临时工作台｜蓝辉轻改 LANHUI",
  description: "蓝辉轻改小桌板，面向移动办公、途中用餐、带娃和后排置物，按车型、年款与座椅结构确认适配方案。",
  alternates: { canonical: "/product/tray-table" },
  openGraph: { title: "小桌板｜蓝辉轻改 LANHUI", description: "按车型与座椅结构确认后排小桌板方案。", images: [{ url: trayTableImagePath(trayTableProducts[0]!.filename), width: 1254, height: 1254, alt: trayTableProducts[0]!.alt }] },
};

export default function TrayTablePage() {
  const service = getServiceRoute("tray-table");
  if (!service || service.type !== "service_category") notFound();
  const breadcrumbs = getProductBreadcrumbs(service.canonicalPath);
  const breadcrumbSchema = getProductBreadcrumbSchema(service.canonicalPath);
  const jsonLd = { "@context": "https://schema.org", "@type": "CollectionPage", name: "小桌板", description: metadata.description, url: service.canonicalPath, mainEntity: { "@type": "ItemList", numberOfItems: trayTableProducts.length, itemListElement: trayTableProducts.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, image: trayTableImagePath(item.filename) })) } };
  return <><main id="main-content" tabIndex={-1} className="flex-grow"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} /><TrayTableHero breadcrumbItems={breadcrumbs} /><TrayTableContent /><TrayTableCta /></main>{breadcrumbSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />}</>;
}
