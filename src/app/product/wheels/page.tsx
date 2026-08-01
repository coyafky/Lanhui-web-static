import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WheelHero } from "@/components/product/wheel/WheelHero";
import { WheelFitmentChecklist } from "@/components/product/wheel/WheelFitmentChecklist";
import { WheelGallery } from "@/components/product/wheel/WheelGallery";
import { WheelConstructionProofs } from "@/components/product/wheel/WheelConstructionProofs";
import { WheelServiceFlow } from "@/components/product/wheel/WheelServiceFlow";
import { WheelDouyinCta } from "@/components/product/wheel/WheelDouyinCta";
import { getServiceRoute } from "@/lib/product-routes";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { wheelImagesRich } from "@/lib/wheel-products";
import { safeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "轮毂升级与整车姿态方案｜蓝辉轻改 LANHUI",
  description:
    "让轮毂决定整车侧面的气质。蓝辉轻改轮毂升级围绕原车数据确认、刹车间隙、动平衡和扭矩复查，提供21款视觉方案供选择。",
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "轮毂升级与整车姿态方案",
    description: metadata.description,
    url: service.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: wheelImagesRich.map((image, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: image.title,
        image: image.publicPath,
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

        {/* ====== 安全适配清单 ====== */}
        <WheelFitmentChecklist />

        {/* ====== 可筛选/可比较轮毂图库 ====== */}
        <WheelGallery />

        {/* ====== 施工信任 + 铸造/锻造对比 + 合规提醒 ====== */}
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
