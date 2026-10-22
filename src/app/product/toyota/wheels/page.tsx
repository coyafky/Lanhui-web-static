import type { Metadata } from "next";
import Link from "next/link";
import { Ruler } from "lucide-react";
import { notFound } from "next/navigation";
import { getBrandRoute } from "@/lib/product-routes";
import { getProductBreadcrumbs } from "@/lib/product-breadcrumbs";
import { toyotaWheelStyles } from "@/lib/toyota-wheels";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";
import { ToyotaWheelsTabs } from "@/components/toyota/wheels/ToyotaWheelsTabs";
import { ToyotaWheelsCta } from "@/components/toyota/wheels/ToyotaWheelsCta";

const PAGE_TITLE = "丰田轮毂升级（旋压 / 锻造）｜佛山顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "丰田全系轮毂升级两线款式：旋压轮毂 7 款、锻造轮毂 9 款。17-21 寸，PCD 覆盖 5×114.3 / 5×120 / 5×150 / 6×139.7。尺寸、孔距、ET、中心孔需与原车核对，到店确认后再装。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/product/toyota/wheels" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "article",
  },
};

export default function ToyotaWheelsPage() {
  const brand = getBrandRoute("toyota");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/toyota/wheels");
  const localStore = stores.find((s) => s.isActive);
  const spunCount = toyotaWheelStyles.filter((s) => s.finish === "spun").length;
  const forgedCount = toyotaWheelStyles.filter(
    (s) => s.finish === "forged",
  ).length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/product/toyota/wheels",
    ...(localStore && {
      provider: generateLocalBusinessSchema(localStore),
    }),
  };

  const checklist = [
    { k: "尺寸", v: "轮毂直径 × 宽度（如 18*8），与原车轮胎规格匹配" },
    { k: "孔距 PCD", v: "螺栓孔数与孔距（如 5×114.3），不匹配装不上" },
    { k: "ET", v: "偏距，影响轮毂是否外抛 / 内缩、是否蹭卡钳与轮眉" },
    { k: "中心孔 CB", v: "中心孔直径，不匹配需变径圈" },
    { k: "胎压监测", v: "确认传感器固定方式与数据兼容" },
    { k: "载荷等级", v: "按车型承载确认轮毂载荷等级" },
  ];

  return (
    <>
      <main id="main-content" tabIndex={-1} className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />

        {/* S0 Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-red-950/40 via-zinc-950 to-zinc-950">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            {breadcrumbItems && breadcrumbItems.length > 0 && (
              <nav aria-label="面包屑" className="mb-6">
                <ol className="flex flex-wrap items-center gap-1.5 text-sm text-zinc-400">
                  {breadcrumbItems.map((item, idx) => (
                    <li key={item.href ?? idx} className="flex items-center gap-1.5">
                      {item.href ? (
                        <>
                          <Link href={item.href} className="hover:text-zinc-200">
                            {item.label}
                          </Link>
                          <span aria-hidden>/</span>
                        </>
                      ) : (
                        <span className="text-zinc-300">{item.label}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <h1 className="max-w-2xl text-balance text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
              丰田轮毂升级：旋压 7 款 · 锻造 9 款
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
              轮毂不能只看样式：尺寸、孔距、ET、载荷等级要与驾驶需求一起确认。
              下面按工艺分两线，款式和参数直接对照。
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400">
              <span>
                <strong className="text-white tabular-nums">{spunCount}</strong> 款旋压
              </span>
              <span aria-hidden className="text-zinc-600">·</span>
              <span>
                <strong className="text-white tabular-nums">{forgedCount}</strong> 款锻造
              </span>
              <span aria-hidden className="text-zinc-600">·</span>
              <span>17-21 寸</span>
              <span aria-hidden className="text-zinc-600">·</span>
              <span>PCD 5×114.3 / 5×120 / 5×150 / 6×139.7</span>
            </div>
          </div>
        </section>

        {/* S1 Tabs 款式表 */}
        <section
          aria-labelledby="toyota-wheels-styles-title"
          className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-xs tracking-widest mb-3 text-red-400 uppercase">
                款式与参数
              </p>
              <h2
                id="toyota-wheels-styles-title"
                className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
              >
                旋压还是锻造，先看款式再确认参数
              </h2>
            </div>
            <ToyotaWheelsTabs />
          </div>
        </section>

        {/* S2 适配说明 */}
        <section
          aria-labelledby="toyota-wheels-fit-title"
          className="py-16 sm:py-20 bg-black border-t border-white/[0.05]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-xs tracking-widest mb-3 text-red-400 uppercase">
                装前核对
              </p>
              <h2
                id="toyota-wheels-fit-title"
                className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
              >
                到店前先过这 6 项
              </h2>
              <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
                把车型、年款、动力版本发来，我们先按轮毂数据筛一遍能上的款式，再约到店检查。
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {checklist.map(({ k, v }) => (
                <div
                  key={k}
                  className="rounded-2xl bg-zinc-900/60 p-5 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
                >
                  <div className="flex items-center gap-2">
                    <Ruler className="size-4 text-red-300" aria-hidden />
                    <h3 className="text-sm font-bold text-white">{k}</h3>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed text-pretty">
                    {v}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-xs text-zinc-500 leading-relaxed">
              适装信息供参考，实际安装以门店现场检查（车型年款、轮毂数据、卡钳空间、轮胎规格）为准。
              库存与价格到店确认，本页不展示。
            </p>
          </div>
        </section>

        <ToyotaWheelsCta />
      </main>
    </>
  );
}
