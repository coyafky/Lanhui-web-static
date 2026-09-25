import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getModelRoute, getServiceRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { electricStepImages } from "@/lib/electric-step-products";
import {
  ELECTRIC_STEP_FAQ,
  ELECTRIC_STEP_FITMENT,
  ELECTRIC_STEP_SOURCE,
  ELECTRIC_STEP_UNAVAILABLE,
} from "@/lib/electric-step-fitment";
import { safeJsonLd } from "@/lib/json-ld";
import { getSiteUrl } from "@/lib/site-url";

const SITE_URL = getSiteUrl();

const CANONICAL_PATH = "/product/electric-steps/fitment";
const PAGE_TITLE =
  "电动踏板适配车型总表｜21 个车型年款与取信号方式｜蓝辉轻改 LANHUI";
const PAGE_DESCRIPTION =
  "蓝辉轻改整理电动踏板适配车型总表：覆盖问界、理想、腾势、岚图、魏牌 5 个品牌共 21 个车型，逐条列出适配年款、车身形式与取信号方式（原厂对插 / 对插 / 线夹），并附暂无电动踏板的车型反向清单。";

/** 数据来源标识（与 electric-step-fitment.ts 保持一致）。 */
const SOURCE_LABEL = ELECTRIC_STEP_SOURCE;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "电动踏板适配车型",
    "电动踏板适配年款",
    "电动踏板取信号方式",
    "原厂对插",
    "问界电动踏板",
    "理想电动踏板",
    "魏牌电动踏板",
    "蓝辉轻改",
  ],
  alternates: { canonical: CANONICAL_PATH },
  openGraph: {
    title: "电动踏板适配车型总表｜蓝辉轻改 LANHUI",
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: electricStepImages[0]!.publicPath,
        width: electricStepImages[0]!.width,
        height: electricStepImages[0]!.height,
        alt: electricStepImages[0]!.alt,
      },
    ],
  },
};

/** 按数据顺序求出去重后的品牌列表（保持 问界→理想→腾势→岚图→魏牌 顺序）。 */
function orderedBrands(): string[] {
  const brands: string[] = [];
  for (const record of ELECTRIC_STEP_FITMENT) {
    if (!brands.includes(record.brand)) brands.push(record.brand);
  }
  return brands;
}

export default function ElectricStepFitmentPage() {
  const service = getServiceRoute("electric-steps");
  if (!service || service.type !== "service_category") notFound();

  const breadcrumbItems = getProductBreadcrumbs(CANONICAL_PATH);
  const breadcrumbSchema = getProductBreadcrumbSchema(CANONICAL_PATH);

  const brands = orderedBrands();
  const brandSummary = brands
    .map(
      (brand) =>
        `${brand} ${ELECTRIC_STEP_FITMENT.filter((r) => r.brand === brand).length} 个`
    )
    .join("、");

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "电动踏板适配车型总表",
    description: PAGE_DESCRIPTION,
    numberOfItems: ELECTRIC_STEP_FITMENT.length,
    itemListElement: ELECTRIC_STEP_FITMENT.map((record, index) => {
      const modelRoute =
        record.brandSlug && record.modelSlug
          ? getModelRoute(record.brandSlug, record.modelSlug)
          : undefined;

      return {
        "@type": "ListItem",
        position: index + 1,
        name: `${record.model}（${record.years}）`,
        url: modelRoute
          ? `${SITE_URL}${modelRoute.canonicalPath}`
          : `${SITE_URL}${CANONICAL_PATH}#${record.key}`,
      };
    }),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ELECTRIC_STEP_FAQ.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-grow bg-zinc-950 text-white"
      >
        {/* ① 一句话结论 */}
        <section className="border-t border-zinc-900">
          <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 md:pt-20 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} className="mb-6" />
            <p className="mb-3 text-xs uppercase tracking-widest text-orange-400">
              ELECTRIC STEP · 适配总表
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              电动踏板适配车型总表
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400 md:text-base">
              蓝辉轻改已核实的电动踏板适配覆盖
              <span className="font-semibold text-white">
                {" "}
                {brands.length} 个品牌、{ELECTRIC_STEP_FITMENT.length} 个车型
              </span>
              ：{brandSummary}。下表逐条列出每个车型的适配年款、车身形式与取信号方式，可被搜索与 AI 直接引用。
            </p>
          </div>
        </section>

        {/* ② 21 行适配表 */}
        <section className="pb-12 md:pb-16" aria-labelledby="fitment-table-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              id="fitment-table-title"
              className="mb-4 text-2xl font-bold md:text-3xl"
            >
              21 个车型适配明细
            </h2>
            <div className="overflow-hidden rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] text-left text-sm">
                  <caption className="sr-only">
                    蓝辉轻改电动踏板适配车型、年款、车身形式、取信号方式与备注明细
                  </caption>
                  <thead>
                    <tr className="border-b border-white/[0.08] text-xs uppercase tracking-wider text-zinc-400">
                      <th scope="col" className="px-4 py-3 font-medium">
                        品牌
                      </th>
                      <th scope="col" className="px-4 py-3 font-medium">
                        车型
                      </th>
                      <th scope="col" className="px-4 py-3 font-medium">
                        适配年款
                      </th>
                      <th scope="col" className="px-4 py-3 font-medium">
                        车身形式
                      </th>
                      <th scope="col" className="px-4 py-3 font-medium">
                        取信号方式
                      </th>
                      <th scope="col" className="px-4 py-3 font-medium">
                        备注
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ELECTRIC_STEP_FITMENT.map((record) => {
                      const modelRoute =
                        record.brandSlug && record.modelSlug
                          ? getModelRoute(record.brandSlug, record.modelSlug)
                          : undefined;

                      return (
                        <tr
                          key={record.key}
                          id={record.key}
                          className="scroll-mt-24 border-b border-white/[0.04] align-top last:border-b-0"
                        >
                          <td className="whitespace-nowrap px-4 py-3 text-zinc-300">
                            {record.brand}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 font-medium text-white">
                            {modelRoute ? (
                              <Link
                                href={modelRoute.canonicalPath}
                                className="underline-offset-4 hover:text-orange-300 hover:underline"
                              >
                                {record.model}
                              </Link>
                            ) : (
                              record.model
                            )}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 text-zinc-300">
                            {record.years}
                          </td>
                          <td className="px-4 py-3 text-zinc-400">
                            {record.body}
                          </td>
                          <td className="px-4 py-3">
                            <span className="inline-flex whitespace-nowrap rounded-full bg-orange-400/10 px-2.5 py-0.5 text-xs font-medium text-orange-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                              {record.signal}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-zinc-500">
                            {record.note ?? "—"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              窄屏可左右滑动查看完整表格。
            </p>
          </div>
        </section>

        {/* ③ 暂无电动踏板反向清单 */}
        <section
          className="border-t border-zinc-900 py-12 md:py-16"
          aria-labelledby="fitment-unavailable-title"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              id="fitment-unavailable-title"
              className="mb-3 text-2xl font-bold md:text-3xl"
            >
              暂无电动踏板的车型
            </h2>
            <p className="mb-6 max-w-3xl text-sm leading-relaxed text-zinc-400 md:text-base">
              以下品牌 / 车型目前没有已核实的电动踏板适配方案，用于反向排除，避免无效到店咨询。清单原样来自资料库文档。
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ELECTRIC_STEP_UNAVAILABLE.map((item) => (
                <div
                  key={`${item.brand}-${item.models ?? "all"}`}
                  className="rounded-2xl bg-zinc-900/50 p-4 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
                >
                  <p className="font-medium text-white">
                    {item.brand}
                    {item.models ? `（${item.models}）` : ""}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                    {item.note ?? "暂无电动踏板适配记录"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ④ FAQ */}
        <section
          className="border-t border-zinc-900 py-12 md:py-16"
          aria-labelledby="fitment-faq-title"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2
              id="fitment-faq-title"
              className="mb-3 text-2xl font-bold md:text-3xl"
            >
              电动踏板常见问题
            </h2>
            <p className="mb-6 text-sm text-zinc-400">
              关于破线、施工时长、收起后通过性和适配确认的 4 个问题。
            </p>
            <dl className="space-y-4">
              {ELECTRIC_STEP_FAQ.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-zinc-900/50 p-5 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
                >
                  <dt className="font-medium text-white">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ⑤ 免责口径 + 数据来源 */}
        <section className="border-t border-zinc-900 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-3 text-xl font-bold text-white md:text-2xl">
              适配确认说明
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-zinc-400 md:text-base">
              数据来源：{SOURCE_LABEL}。具体适配车型、安装方案和价格以到店确认结果为准。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/product/electric-steps"
                className="inline-flex items-center rounded-full bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-orange-400/20"
              >
                返回电动踏板方案
              </Link>
              <Link
                href="/product"
                className="inline-flex items-center rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
              >
                返回产品中心
              </Link>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(itemListJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
        />
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
