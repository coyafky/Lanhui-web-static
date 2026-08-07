import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { getProduct } from "@/lib/products";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { safeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  alternates: { canonical: "/product/chassis" },
  title: "底盘升级 | 蓝辉轻改 LANHUI",
  description:
    "蓝辉轻改底盘升级服务，围绕避震、连杆、加强件等部件的轻度升级，让日常驾驶更稳、更有质感。",
  openGraph: {
    title: "底盘升级 | 蓝辉轻改 LANHUI",
    description:
      "先检查原车底盘状态与驾驶诉求，再围绕避震、连杆和加强件做适度升级。",
    images: [
      {
        url: "/images/producthero/chassis-hero.webp",
        width: 1448,
        height: 1086,
        alt: "新能源车型底盘悬挂与加强件施工检查",
      },
    ],
  },
};

export default async function ChassisPage() {
  const product = getProduct("chassis");
  if (!product) notFound();
  const breadcrumbItems = getProductBreadcrumbs("/product/chassis");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/chassis");
  return (
    <>
      <ProductDetail product={product} breadcrumbItems={breadcrumbItems} />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
        />
      )}
    </>
  );
}
