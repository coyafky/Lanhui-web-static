import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MaterialSlice, type MaterialKey } from "./MaterialSlice";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/Breadcrumbs";

type Props = { breadcrumbItems?: readonly BreadcrumbItem[] };

const SLICE_TO_HREF: Record<MaterialKey, string> = {
  ppf: "/product/ppf",
  "window-film": "/product/window-film",
  wheel: "/product/wheels",
  step: "/product/electric-steps",
};

const SLICE_KEYS: readonly MaterialKey[] = ["ppf", "window-film", "wheel", "step"];

export function ProductHero({ breadcrumbItems }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#08090c] text-white" aria-labelledby="product-hero-title">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-28 size-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 size-96 rounded-full bg-sky-500/[0.06] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24">
        {breadcrumbItems && breadcrumbItems.length > 0 && <Breadcrumbs items={breadcrumbItems} className="mb-9" />}
        <div className="grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
          <div className="max-w-xl">
            <p className="mb-5 inline-flex min-h-9 items-center border-l-2 border-orange-500 pl-3 text-sm font-medium tracking-[0.18em] text-orange-300">
              PRODUCT CENTER · 产品中心
            </p>
            <h1 id="product-hero-title" className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              产品中心
              <span className="mt-2 block text-zinc-300">从你的车型与需求出发</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-zinc-300 sm:text-lg">
              按车型查看适配方案，或按项目了解汽车膜系、轻改装备与座舱服务。具体产品和施工方式以车型、年款及到店检查为准。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#vehicle-topics" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300">
                按车型找方案 <ArrowDown className="size-4" aria-hidden="true" />
              </Link>
              <Link href="#service-projects" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-white/30 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
                按项目看服务 <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div>
            <div className="grid aspect-[4/3] max-h-[440px] grid-cols-5 grid-rows-2 gap-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900 p-2 shadow-2xl shadow-black/30 sm:aspect-[5/3]">
              <div className="relative col-span-3 row-span-2 overflow-hidden rounded-xl">
                <Image src="/images/producthero/ppf-hero.webp" alt="蓝辉轻改汽车车衣施工" fill preload sizes="(max-width: 1023px) 60vw, 36vw" className="object-cover" />
              </div>
              <div className="relative col-span-2 overflow-hidden rounded-xl">
                <Image src="/images/producthero/window-film-hero.webp" alt="蓝辉轻改汽车窗膜施工" fill sizes="(max-width: 1023px) 40vw, 24vw" className="object-cover" />
              </div>
              <div className="relative col-span-2 overflow-hidden rounded-xl">
                <Image src="/images/producthero/wheels-hero.webp" alt="新能源车轮毂升级效果" fill sizes="(max-width: 1023px) 40vw, 24vw" className="object-cover" />
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {SLICE_KEYS.map((key) => <MaterialSlice key={key} sliceKey={key} href={SLICE_TO_HREF[key]} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
