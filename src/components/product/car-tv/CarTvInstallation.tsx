import Image from "next/image";
import { CirclePower, Layers3, MoveVertical, ScanSearch } from "lucide-react";
import { carTvImages } from "@/lib/car-tv-products";

const installationPoints = [
  {
    icon: ScanSearch,
    title: "先检查顶棚空间",
    description: "确认顶棚结构、天窗、遮阳帘活动范围和后排观看位置。",
  },
  {
    icon: Layers3,
    title: "专用支架与布面处理",
    description: "结合车型制作固定与饰面方案，让设备和原车顶棚尽量协调。",
  },
  {
    icon: MoveVertical,
    title: "双电机展开与收起",
    description: "双电机驱动屏幕开合，收起后减少对车内空间和视线的占用。",
  },
  {
    icon: CirclePower,
    title: "锁车自动关屏",
    description: "支持锁车联动关屏，具体联动逻辑以车型适配结果为准。",
  },
] as const;

export function CarTvInstallation() {
  const image = carTvImages.installation;

  return (
    <section id="car-tv-installation" className="scroll-mt-20 border-b border-white/[0.06] bg-zinc-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <figure className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-900">
            <Image
              src={image.publicPath}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="h-auto w-full object-cover"
            />
            <figcaption className="border-t border-white/[0.06] px-5 py-3 text-xs text-zinc-400">
              收起状态与顶棚贴合效果示意，实际结构以车型适配为准
            </figcaption>
          </figure>

          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-orange-400">安装适配</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              好看的收起状态，来自前期检查
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-zinc-300">
              顶置大屏不是通用件直接上车。先确认空间和结构，再确定支架、饰面与功能连接方式。
            </p>

            <ol className="mt-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {installationPoints.map(({ icon: Icon, title, description }, index) => (
                <li key={title} className="grid grid-cols-[auto_1fr] gap-4 py-5">
                  <div className="flex size-10 items-center justify-center rounded-full bg-white/[0.05] text-orange-300">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-medium text-zinc-500">0{index + 1}</span>
                      <h3 className="font-semibold text-white">{title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-zinc-300">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
