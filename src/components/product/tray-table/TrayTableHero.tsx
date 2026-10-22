import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";
import { trayTableImagePath, trayTableProducts } from "@/lib/tray-table-products";

export function TrayTableHero({ breadcrumbItems }: { breadcrumbItems: readonly BreadcrumbItem[] }) {
  const image = trayTableProducts[0]!;
  return <section className="relative overflow-hidden border-b border-zinc-900 bg-zinc-950 text-white" aria-labelledby="tray-table-title">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(245,158,11,0.16),transparent_32%),linear-gradient(135deg,#09090b,#1c1917_60%,#09090b)]" aria-hidden />
    <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 md:pb-20 md:pt-12 lg:px-8">
      <Breadcrumbs items={breadcrumbItems} className="mb-10" />
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_440px]">
        <div><p className="mb-5 inline-flex rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium tracking-[0.2em] text-amber-300">座舱实用升级</p>
          <h1 id="tray-table-title" className="max-w-2xl text-balance text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">小桌板<span className="text-amber-400">，</span><br />给后排一个随时展开的临时工作台</h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">围绕移动办公、途中用餐、带娃和后排置物，按车型与座椅结构评估适配方案。</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="#tray-table-cta" className="inline-flex min-h-12 items-center justify-center rounded-full bg-amber-500 px-6 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300">预约车型评估</Link><Link href="#tray-table-gallery" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white/[0.06] px-6 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10">查看适配车型</Link></div>
          <p className="mt-5 text-xs text-zinc-500">适配、尺寸、安装方式和使用边界均以车型年款与实车评估为准。</p>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-zinc-900/80 p-3 ring-1 ring-white/10"><div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-stone-100"><Image src={trayTableImagePath(image.filename)} alt={image.alt} fill priority sizes="(min-width: 1024px) 440px, 100vw" className="object-contain" /></div><p className="px-2 pb-1 pt-4 text-sm font-medium text-zinc-200">{image.title} · 展开状态示意</p></div>
      </div>
    </div>
  </section>;
}
