import type { Metadata } from "next";
import { ColorFilmHero } from "@/components/color-film/ColorFilmHero";
import { ColorFilmPageClient } from "@/components/color-film/ColorFilmPageClient";
import { ColorFilmHotCases } from "@/components/color-film/ColorFilmHotCases";
import { ColorFilmConstructionProofs } from "@/components/color-film/ColorFilmConstructionProofs";
import { ColorFilmWarranty } from "@/components/color-film/ColorFilmWarranty";
import { ColorFilmProcess } from "@/components/color-film/ColorFilmProcess";
import { ColorFilmDouyinCta } from "@/components/color-film/ColorFilmDouyinCta";
import { WeChatConsultButton } from "@/components/WeChatConsultButton";
import {
  ColorCardGallery,
  FilmComparison,
  FilmLocalStore,
  FilmFaqSection,
} from "@/components/film";
import { colorFilmFaqs } from "@/lib/film-products";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { safeJsonLd } from "@/lib/json-ld";
import { productSchema } from "@/lib/schema";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { stores } from "@/lib/store";

export const metadata: Metadata = {
  alternates: { canonical: "/product/color-film" },
  title: "汽车改色膜 | 蓝辉轻改 LANHUI",
  description:
    "让颜色成为你的车型表达。蓝辉轻改改色膜覆盖亮光、哑光、金属、珠光、变色等15大系列，施工前漆面检测、色板确认、专车包边，到店交付；佛山顺德大良可到店看色板。",
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

  const localStore = stores.find((s) => s.isActive);
  const localBusiness = localStore ? generateLocalBusinessSchema(localStore) : null;

  const productJsonLd = productSchema({
    name: "汽车改色膜",
    slug: "color-film",
    description:
      "按车型、原车颜色和个人风格选择整车改色方案，施工前漆面检测、色板确认、专车包边，到店交付。",
    category: "汽车膜系",
  });

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: colorFilmFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <ColorFilmHero breadcrumbItems={breadcrumbItems} />

      <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col bg-zinc-950">
        {/* ====== 你喜欢哪种整车气质？ + 可筛选颜色图库 ====== */}
        <ColorFilmPageClient />

        {/* ====== 色卡库（A-D 分组 + 幻彩/金属系列） ====== */}
        <ColorCardGallery />

        {/* ====== 改色备案合规提示 ====== */}
        <section className="py-10 bg-zinc-900/40 border-t border-white/[0.05]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold text-white mb-2">改色备案合规提示</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              改色膜涉及车身颜色变更，需按当地交管规定办理车身颜色变更备案；本页面不做备案承诺，
              到店评估时说明合规边界与办理流程。隐形车衣与太阳膜不改车身外观色，不涉及备案。
              施工方案以门店现场评估为准，不同车型与车况存在差异。
            </p>
          </div>
        </section>

        {/* ====== 6 款热门颜色实车案例 ====== */}
        <ColorFilmHotCases />

        {/* ====== 施工保障 + 边界条件说明 ====== */}
        <ColorFilmConstructionProofs />

        {/* ====== 验收标准 + 质保与养护 ====== */}
        <ColorFilmWarranty />

        {/* ====== 四步流程（含预估时长） ====== */}
        <ColorFilmProcess />

        {/* ====== 三品类对比 ====== */}
        <FilmComparison active="color" />

        {/* ====== 本地服务锚点 ====== */}
        <FilmLocalStore />

        {/* ====== 改色常见问题 ====== */}
        <FilmFaqSection
          title="改色膜常见问题：要备案吗？色卡和实车一样吗？"
          intro="备案边界、漆面影响、色卡差异与哑光修补，到店看实物色板后再决定。"
          faqs={colorFilmFaqs}
        />

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd) }}
      />
      {localBusiness && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusiness) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
    </>
  );
}
