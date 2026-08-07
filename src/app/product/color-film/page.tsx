import type { Metadata } from "next";
import { ColorFilmHero } from "@/components/color-film/ColorFilmHero";
import { ColorFilmPageClient } from "@/components/color-film/ColorFilmPageClient";
import { ColorFilmHotCases } from "@/components/color-film/ColorFilmHotCases";
import { ColorFilmConstructionProofs } from "@/components/color-film/ColorFilmConstructionProofs";
import { ColorFilmWarranty } from "@/components/color-film/ColorFilmWarranty";
import { ColorFilmProcess } from "@/components/color-film/ColorFilmProcess";
import { ColorFilmDouyinCta } from "@/components/color-film/ColorFilmDouyinCta";
import { WeChatConsultButton } from "@/components/WeChatConsultButton";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { safeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  alternates: { canonical: "/product/color-film" },
  title: "汽车改色膜 | 蓝辉轻改 LANHUI",
  description:
    "让颜色成为你的车型表达。蓝辉轻改改色膜覆盖亮光、哑光、金属、珠光、变色等15大系列，施工前漆面检测、色板确认、专车包边，到店交付。",
  openGraph: {
    title: "汽车改色膜 | 蓝辉轻改 LANHUI",
    description:
      "从低调哑光到高光幻彩，按车型、原车颜色和个人风格选择适合的整车改色方案。",
    images: [
      {
        url: "/images/producthero/color-film-hero.webp",
        width: 1448,
        height: 1086,
        alt: "金属质感汽车改色膜整车效果",
      },
    ],
  },
};

export default function ColorFilmPage() {
  const breadcrumbItems = getProductBreadcrumbs("/product/color-film");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/color-film");

  return (
    <>
      <ColorFilmHero breadcrumbItems={breadcrumbItems} />

      <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col bg-zinc-950">
        {/* ====== 你喜欢哪种整车气质？ + 可筛选颜色图库 ====== */}
        <ColorFilmPageClient />

        {/* ====== 6 款热门颜色实车案例 ====== */}
        <ColorFilmHotCases />

        {/* ====== 施工保障 + 边界条件说明 ====== */}
        <ColorFilmConstructionProofs />

        {/* ====== 验收标准 + 质保与养护 ====== */}
        <ColorFilmWarranty />

        {/* ====== 四步流程（含预估时长） ====== */}
        <ColorFilmProcess />

        {/* ====== 抖音真实案例 CTA ====== */}
        <ColorFilmDouyinCta />

        {/* ====== 底部车型咨询 CTA ====== */}
        <section className="py-16 sm:py-20 bg-zinc-900 border-t border-white/[0.05]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              告诉我们你的车型和年款
            </h2>
            <p className="text-base text-zinc-400 mb-8 max-w-lg mx-auto">
              获取适合你车型的改色方案建议，到店看色板确认颜色和质感再决定。
            </p>
            <div className="flex justify-center">
              <WeChatConsultButton />
            </div>
          </div>
        </section>
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
