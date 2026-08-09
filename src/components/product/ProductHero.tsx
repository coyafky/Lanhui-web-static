/**
 * ProductHero — /product 入口页 Hero 容器
 *
 * 视觉构成：
 * - 左侧 60%（desktop）：真实服务画廊 + 4 材质切片
 * - 右侧 40%（desktop）：文案（eyebrow + H1 + 副标题）+ 11 品牌矩阵
 *
 * 移动端：垂直堆叠（文案 → 真实服务画廊 → 材质切片）
 *
 * 这是 PRD v3 Phase 1 的入口视觉块。后续 phase 会接 StickyTabBar 和三大业务地图。
 */

import Image from "next/image";
import Link from "next/link";
import { MaterialSlice, type MaterialKey } from "./MaterialSlice";
import { BrandMatrixMap } from "./BrandMatrixMap";
import type { VehicleBrandRoute } from "@/lib/product-routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";

type Props = {
  liveBrands: readonly VehicleBrandRoute[];
  plannedCount: number;
  breadcrumbItems?: readonly BreadcrumbItem[];
};

const SLICE_TO_HREF: Record<MaterialKey, string> = {
  ppf: "/product/ppf",
  "window-film": "/product/window-film",
  wheel: "/product/wheels",
  step: "/product/electric-steps",
};

const SLICE_KEYS: readonly MaterialKey[] = ["ppf", "window-film", "wheel", "step"];

export function ProductHero({ liveBrands, breadcrumbItems }: Props) {
  return (
    <section
      className="relative bg-zinc-950 text-white overflow-hidden border-b border-zinc-900"
      aria-labelledby="product-hero-title"
    >
      {/* 背景纹理 — 深空感 + 微光 */}
      <div className="absolute inset-0 -z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-orange-500/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/6 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-20 md:pb-16">
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />
        )}
        {/* Eyebrow */}
        <p className="text-xs tracking-widest text-orange-400 mb-3 text-center md:text-left">
          PRODUCT CENTER · 产品中心
        </p>

        {/* Desktop 双栏 / Mobile 单栏 */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* 左侧：真实服务画廊 + 4 材质切片 */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="grid aspect-[4/3] max-h-[420px] grid-cols-5 grid-rows-2 gap-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900 p-2 shadow-2xl shadow-black/30 sm:aspect-[5/2]">
              <div className="relative col-span-3 row-span-2 overflow-hidden rounded-xl">
                <Image
                  src="/images/producthero/ppf-hero.webp"
                  alt="蓝辉轻改汽车车衣施工"
                  fill
                  preload
                  sizes="(max-width: 1023px) 60vw, 36vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-2 overflow-hidden rounded-xl">
                <Image
                  src="/images/producthero/window-film-hero.webp"
                  alt="蓝辉轻改汽车窗膜施工"
                  fill
                  sizes="(max-width: 1023px) 40vw, 24vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-2 overflow-hidden rounded-xl">
                <Image
                  src="/images/producthero/wheels-hero.webp"
                  alt="新能源车轮毂升级效果"
                  fill
                  sizes="(max-width: 1023px) 40vw, 24vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* 4 材质切片 */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
              {SLICE_KEYS.map((key) => (
                <MaterialSlice
                  key={key}
                  sliceKey={key}
                  href={SLICE_TO_HREF[key]}
                />
              ))}
            </div>
          </div>

          {/* 右侧：文案 + 11 品牌矩阵 */}
          <div className="lg:col-span-2 order-1 lg:order-2 text-center lg:text-left">
            <h1
              id="product-hero-title"
              className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            >
              产品中心
            </h1>
            <p className="text-base md:text-lg text-zinc-300 mb-8 leading-relaxed">
              按车型匹配方案，按项目选择服务。
              <br className="hidden md:block" />
              蓝辉轻改专注新能源车型的汽车膜系与轻改装备，
              <br className="hidden md:block" />
              提供产品选型、车型适配、专业施工一站式升级服务。
            </p>

            {/* 11 品牌矩阵 */}
            <div className="mb-4">
              <p className="text-xs tracking-widest text-zinc-500 mb-3 uppercase">
                车型方案地图 · {liveBrands.length} 品牌
              </p>
              <BrandMatrixMap brands={liveBrands} />
            </div>

            {/* 双入口提示 */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-zinc-300 lg:hidden">
              <Link
                href="#vehicle-topics"
                className="inline-flex min-h-11 items-center gap-1 rounded-full border border-zinc-700 px-4 py-2 transition-colors hover:border-zinc-600 hover:text-white"
              >
                按车型找
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="#service-projects"
                className="inline-flex min-h-11 items-center gap-1 rounded-full border border-zinc-700 px-4 py-2 transition-colors hover:border-zinc-600 hover:text-white"
              >
                按项目看
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
