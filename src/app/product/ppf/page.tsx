import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { getProduct } from "@/lib/products";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { safeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  alternates: { canonical: "/product/ppf" },
  title: "隐形车衣 | 蓝辉轻改 LANHUI",
  description:
    "蓝辉轻改隐形车衣服务，以透明膜覆盖原车漆面，应对日常剐蹭、碎石冲击与洗车划痕等使用场景。",
  openGraph: {
    title: "隐形车衣 | 蓝辉轻改 LANHUI",
    description:
      "以透明保护膜覆盖原车漆面，按车型与用车场景选择方案，并通过规范施工完整交付。",
    images: [
      {
        url: "/images/producthero/ppf-hero.webp",
        width: 1448,
        height: 1086,
        alt: "蓝辉隐形车衣透明保护膜施工效果",
      },
    ],
  },
};

export default async function PpfPage() {
  const product = getProduct("ppf");
  if (!product) notFound();
  const breadcrumbItems = getProductBreadcrumbs("/product/ppf");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/ppf");
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
