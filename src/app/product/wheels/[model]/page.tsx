import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WheelDetailAnchorNav } from "@/components/product/wheel/WheelDetailAnchorNav";
import { WheelDetailHero } from "@/components/product/wheel/WheelDetailHero";
import { WheelDetailSummary } from "@/components/product/wheel/WheelDetailSummary";
import { WheelDetailSpecs } from "@/components/product/wheel/WheelDetailSpecs";
import { WheelDetailCta } from "@/components/product/wheel/WheelDetailCta";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import {
  WHEEL_CATALOG_PATH,
  WHEEL_DETAIL_SECTION_IDS,
  type WheelDetailSection,
} from "@/lib/wheel-catalog";
import { getWheelDetailContent } from "@/lib/wheel-catalog-projection";
import { wheelModels } from "@/lib/wheels.data";
import { safeJsonLd } from "@/lib/json-ld";

type Props = { params: Promise<{ model: string }> };

/** 静态导出：只预生成生成物里的编号，其余编号一律 404。 */
export function generateStaticParams(): { model: string }[] {
  return wheelModels.map((model) => ({ model: model.modelId }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { model } = await params;
  const content = getWheelDetailContent(model);
  if (content === undefined) return { title: "轮毂编号未找到" };

  const { summary, model: wheel } = content;
  const title = `${model} 轮毂规格与图片（${summary.process}）｜蓝辉轻改 LANHUI`;
  const description = `${model}：${summary.process}工艺，直径 ${summary.diameter}，宽度 ${summary.width}，PCD ${summary.pcd}，ET ${summary.offset}，中心孔 ${summary.centerBore}，颜色 ${summary.colors}。规格取自供应商产品表，适配边界以到店确认结果为准。`;
  const primaryImage: string | undefined = wheel.images[0];

  return {
    title,
    description,
    alternates: { canonical: `${WHEEL_CATALOG_PATH}/${model}` },
    openGraph: {
      title,
      description,
      ...(primaryImage !== undefined
        ? { images: [{ url: primaryImage, alt: `${model} 轮毂产品图` }] }
        : {}),
    },
  };
}

export default async function WheelDetailPage({ params }: Props) {
  const { model } = await params;
  const content = getWheelDetailContent(model);
  if (content === undefined) notFound();

  const { model: wheel, summary, sections } = content;
  const breadcrumbItems = getProductBreadcrumbs(`${WHEEL_CATALOG_PATH}/${model}`);
  const breadcrumbSchema = getProductBreadcrumbSchema(`${WHEEL_CATALOG_PATH}/${model}`);

  const hasSection = (id: WheelDetailSection["id"]) =>
    sections.some((section) => section.id === id);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex-grow flex flex-col bg-zinc-950 pb-14"
    >
      <div className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
        <WheelDetailAnchorNav modelId={model} sections={sections} />

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {hasSection(WHEEL_DETAIL_SECTION_IDS.gallery) && (
            <div id={WHEEL_DETAIL_SECTION_IDS.gallery} className="scroll-mt-24">
              <WheelDetailHero modelId={model} images={wheel.images} />
            </div>
          )}

          {hasSection(WHEEL_DETAIL_SECTION_IDS.summary) && (
            <div id={WHEEL_DETAIL_SECTION_IDS.summary} className="scroll-mt-24">
              <WheelDetailSummary
                modelId={model}
                carSeries={wheel.carSeries}
                summary={summary}
              />
            </div>
          )}
        </div>
      </div>

      {hasSection(WHEEL_DETAIL_SECTION_IDS.specs) && (
        <section
          id={WHEEL_DETAIL_SECTION_IDS.specs}
          className="mt-14 scroll-mt-24 border-t border-white/[0.05] py-14"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white">完整规格表</h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">
              每条规格对应一道独立明细行。可按直径筛表、勾选整理清单；具体适配边界仍需到店确认。
            </p>
            <div className="mt-6">
              <WheelDetailSpecs modelId={model} variants={wheel.variants} />
            </div>
          </div>
        </section>
      )}

      {hasSection(WHEEL_DETAIL_SECTION_IDS.cta) && (
        <section id={WHEEL_DETAIL_SECTION_IDS.cta} className="scroll-mt-24">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <WheelDetailCta modelId={model} />
          </div>
        </section>
      )}

      {/* 详情页只给 BreadcrumbList：无价格，不加 Product / Offer 结构化数据 */}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
        />
      )}
    </main>
  );
}
