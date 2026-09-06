import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TeiProductDetail } from "@/components/product/tei-brake/TeiProductDetail";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { getTeiProduct, getTeiRelated, TEI_PRODUCTS } from "@/lib/tei-brake";
import { safeJsonLd } from "@/lib/json-ld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams(): { slug: string }[] {
  return TEI_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getTeiProduct(slug);
  if (!product) return { title: "产品未找到" };

  const title = `${product.model} ${product.description}｜TEI 刹车卡钳 - 蓝辉轻改`;
  return {
    title,
    description: `TEI Racing ${product.model}，${product.axle ?? "前后"}适用，${
      product.pistonCount ? `${product.pistonCount} 活塞，` : ""
    }${product.construction ?? ""}。适配配置与颜色详见页面，适配方案请到店确认。`,
    alternates: { canonical: `/product/tei-brake/${product.slug}` },
    openGraph: {
      title,
      description: `TEI Racing ${product.model} 刹车卡钳产品详情。`,
      images: [
        {
          url: `/images/products/tei/${product.slug}.webp`,
          alt: `TEI Racing ${product.model} 刹车卡钳`,
        },
      ],
    },
  };
}

export default async function TeiBrakeDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getTeiProduct(slug);
  if (!product) notFound();

  const breadcrumbItems = getProductBreadcrumbs(`/product/tei-brake/${slug}`);
  const breadcrumbSchema = getProductBreadcrumbSchema(`/product/tei-brake/${slug}`);
  const related = getTeiRelated(slug);

  // 单产品 JSON-LD：刻意不含 offers / 价格字段
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `TEI Racing ${product.model}`,
    description: `${product.description}。${product.axle ?? "前后通用"}，${
      product.pistonCount ? `${product.pistonCount} 活塞` : ""
    }，${product.construction ?? ""}。`,
    image: `/images/products/tei/${product.slug}.webp`,
    brand: { "@type": "Brand", name: "TEI Racing" },
    additionalProperty: [
      ...(product.axle ? [{ "@type": "PropertyValue", name: "安装位置", value: product.axle }] : []),
      ...(product.pistonCount
        ? [{ "@type": "PropertyValue", name: "活塞数量", value: String(product.pistonCount) }]
        : []),
      ...(product.construction
        ? [{ "@type": "PropertyValue", name: "结构工艺", value: product.construction }]
        : []),
    ],
  };

  return (
    <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col bg-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={breadcrumbItems} className="mb-2" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />

      {/* ====== 核心内容 ====== */}
      <TeiProductDetail product={product} />

      {/* ====== 同系列推荐 ====== */}
      {related.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-14">
          <h2 className="text-lg font-bold mb-4">同系列其它选择</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/product/tei-brake/${r.slug}`}
                className="group bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden transition-all hover:border-orange-500/50"
              >
                <div className="relative aspect-square bg-zinc-800/60">
                  <Image
                    src={`/images/products/tei/${r.slug}.webp`}
                    alt={`TEI Racing ${r.model}`}
                    fill
                    sizes="(max-width: 767px) 50vw, 25vw"
                    className="object-contain p-2 transition-transform group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold truncate">{r.model}</p>
                  <p className="text-xs text-zinc-500 mt-1 truncate">{r.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
        />
      )}
    </main>
  );
}
