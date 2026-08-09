import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Shield } from "lucide-react";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/Breadcrumbs";
import { chassisImages } from "@/lib/chassis-products";

type Props = {
  breadcrumbItems: readonly BreadcrumbItem[];
};

export function ChassisHero({ breadcrumbItems }: Props) {
  const image = chassisImages.hero;

  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#08090c] text-white">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -left-28 top-28 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-sky-500/[0.06] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24">
        <Breadcrumbs items={breadcrumbItems} className="mb-9" />

        <div className="grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
          <div className="max-w-xl">
            <div className="mb-5 inline-flex min-h-9 items-center gap-2 border-l-2 border-orange-500 pl-3 text-sm font-medium tracking-[0.18em] text-orange-300">
              <Shield className="size-4" aria-hidden="true" />
              底盘升级
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              铝镁合金底盘护板
              <span className="mt-2 block text-zinc-300">五段分区覆盖关键部位</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-zinc-300 sm:text-lg">
              覆盖前后电机、电池与线束区域，为日常碎石、泥沙和轻微刮碰增加一道外部隔护。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#chassis-coverage"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              >
                查看五段结构
                <ArrowDown className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="#chassis-fitment"
                className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-white/30 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                了解安装适配
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 border-t border-white/10 pt-5">
              <div>
                <dt className="text-xs text-zinc-400">材质</dt>
                <dd className="mt-1 text-base font-semibold text-white sm:text-lg">铝镁合金</dd>
              </div>
              <div className="border-l border-white/10 pl-4">
                <dt className="text-xs text-zinc-400">结构</dt>
                <dd className="mt-1 text-base font-semibold text-white sm:text-lg">五段分区</dd>
              </div>
              <div className="border-l border-white/10 pl-4">
                <dt className="text-xs text-zinc-400">外观</dt>
                <dd className="mt-1 text-base font-semibold text-white sm:text-lg">黑色 / 银色</dd>
              </div>
            </dl>
          </div>

          <figure className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900 shadow-2xl shadow-black/40">
            <div className="relative aspect-[4/3]">
              <Image
                src={image.publicPath}
                alt={image.alt}
                fill
                loading="eager"
                sizes="(max-width: 1023px) 100vw, 56vw"
                className="object-cover"
              />
            </div>
            <figcaption className="border-t border-white/[0.06] px-5 py-3 text-xs leading-5 text-zinc-400">
              安装前需要举升检查原车底盘结构、固定位置与部件间隙
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
