import Image from "next/image";
import { ScanSearch, Layers3, Cable, CirclePower, ArrowRight, Camera } from "lucide-react";
import Link from "next/link";
import { rearFitment, fitmentGallery } from "@/lib/car-tv-products";

const installationSteps = [
  {
    icon: ScanSearch,
    title: "先报车型年款",
    description: "方案跟着车型走：顶棚结构、座椅头枕、后排接口，每台车都不一样。",
  },
  {
    icon: Layers3,
    title: "确认结构与空间",
    description: "吸顶式看天窗和遮阳帘轨迹；座椅式看头枕结构和 LINK 接口；后视镜看原车后视规格。",
  },
  {
    icon: Cable,
    title: "定供电与走线",
    description: "吸顶式顶棚取电、座椅式后排接口取电、后视镜替换原车线束，尽量隐藏走线。",
  },
  {
    icon: CirclePower,
    title: "装完逐项确认",
    description: "展开收起、显示、投屏、声音、锁车联动，逐项试一遍再交车。",
  },
] as const;

const typeChecks = [
  {
    name: "吸顶式",
    check: "顶棚空间 · 天窗 / 遮阳帘轨迹 · 后排观看距离",
  },
  {
    name: "座椅背装式",
    check: "头枕结构 · 后排 LINK 接口 · 座椅材质",
  },
  {
    name: "流媒体后视镜",
    check: "原车后视规格 · 线束对接 · 前后摄像头位",
  },
] as const;

export function CarTvInstallation() {
  return (
    <section id="rear-installation" className="scroll-mt-20 border-b border-white/[0.06] bg-zinc-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-orange-400">安装适配</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            三套方案，安装前检查的点不一样
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            不是通用件直接上车，先报车型年款，再按方案做对应的检查，最后逐项验收。
          </p>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {installationSteps.map(({ icon: Icon, title, description }, index) => (
            <li key={title} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6">
              <div className="flex size-10 items-center justify-center rounded-full bg-white/[0.05] text-orange-300">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-xs font-medium text-zinc-500">0{index + 1}</span>
                <h3 className="font-semibold text-white">{title}</h3>
              </div>
              <p className="mt-2 text-sm leading-7 text-zinc-300">{description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0c10]">
          <div className="grid gap-px bg-white/[0.08] md:grid-cols-3">
            {typeChecks.map((item) => (
              <div key={item.name} className="bg-[#0b0c10] p-5 sm:p-6">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">{item.check}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-zinc-500">已覆盖车型（节选）</p>
            <div className="mt-4 space-y-4">
              {(Object.keys(rearFitment) as (keyof typeof rearFitment)[]).map((type) => (
                <div key={type}>
                  <p className="text-sm font-semibold text-white">
                    {type === "roof" ? "吸顶式" : type === "seatback" ? "座椅背装式" : "流媒体后视镜"}
                  </p>
                  <p className="mt-1.5 text-sm leading-7 text-zinc-400">{rearFitment[type].summary}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {rearFitment[type].models.slice(0, 5).map((model) => (
                      <span key={model} className="rounded-full border border-white/[0.1] bg-zinc-900 px-3 py-1 text-xs text-zinc-300">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-zinc-500">
              上表为厂方适装表节选，完整清单按车型年款到店确认。
            </p>
          </div>

          <div className="rounded-2xl border border-orange-500/30 bg-orange-500/[0.06] p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">不知道自己的车型能不能装？</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-300">
              把车型、年款和想装的方案发过来，先帮你判断安装条件，能装再约到店。
            </p>
            <Link
              href="#rear-cta"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            >
              问车型适配
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <p className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-zinc-500">
            <Camera className="size-4 text-orange-400" aria-hidden="true" />
            装车实拍（节选）
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fitmentGallery.map((photo) => (
              <figure
                key={photo.src}
                className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900"
              >
                <Image
                  src={photo.src}
                  alt={photo.label}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="h-auto w-full object-cover"
                />
                <figcaption className="border-t border-white/[0.06] px-4 py-2.5 text-xs text-zinc-400">
                  {photo.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-xs leading-6 text-zinc-500">
            实拍图来源为厂方适装表，已去除品牌水印；具体装车效果以实际车型与年款为准。
          </p>
        </div>
      </div>
    </section>
  );
}
