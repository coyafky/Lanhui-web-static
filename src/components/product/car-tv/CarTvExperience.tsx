import {
  Cast,
  Cpu,
  Mic2,
  MonitorUp,
  Network,
  Volume2,
} from "lucide-react";
import { carTvFeatures } from "@/lib/car-tv-products";

const FEATURE_ICONS = [MonitorUp, Cast, Network, Mic2] as const;

const capabilityItems = [
  {
    icon: Cpu,
    title: "车规级八核平台",
    description: "4 GB 运行内存与 64 GB 存储空间，兼顾常用影音应用和本地媒体。",
  },
  {
    icon: Volume2,
    title: "独立声音输出",
    description: "双扬声器与蓝牙音频输出，按车内使用场景选择播放方式。",
  },
];

export function CarTvExperience() {
  return (
    <>
      <section className="border-b border-white/[0.06] bg-zinc-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.18em] text-orange-400">核心体验</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              大屏不只负责播放，也要好用
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-300">
              从清晰画面、移动设备连接到联网和语音操作，把后排高频使用能力放在同一块屏幕里。
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            {carTvFeatures.map((feature, index) => {
              const Icon = FEATURE_ICONS[index] ?? MonitorUp;
              const isPrimary = index === 0;

              return (
                <article
                  key={feature.title}
                  className={`relative overflow-hidden border border-white/[0.08] bg-zinc-900/60 p-6 ${
                    isPrimary
                      ? "md:col-span-2 lg:col-span-7 lg:row-span-2 lg:min-h-[360px] lg:p-9"
                      : "lg:col-span-5"
                  }`}
                >
                  {isPrimary && (
                    <div aria-hidden="true" className="absolute -right-14 -top-14 text-[10rem] font-black leading-none text-white/[0.025]">
                      18.5
                    </div>
                  )}
                  <div className="relative">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-300 ring-1 ring-orange-400/20">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <p className={`mt-6 font-semibold text-white ${isPrimary ? "text-3xl sm:text-4xl" : "text-xl"}`}>
                      {feature.title}
                    </p>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
                      {feature.description}
                    </p>
                    {feature.metric && (
                      <p className={`mt-6 font-medium text-orange-300 ${isPrimary ? "text-2xl" : "text-sm"}`}>
                        {feature.metric}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06] bg-[#0b0c10] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-orange-400">系统能力</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              后排娱乐，也可以与原车协同
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-300">
              支持影音播放、应用使用和多种操控方式。部分车型可进一步协同空调、座椅、音乐与导航，实际功能取决于车型、年款和车机协议。
            </p>
            <p className="mt-4 border-l-2 border-orange-500/70 pl-4 text-sm leading-7 text-zinc-300">
              原车功能控制属于适配能力，不作为所有车型的统一承诺，安装前会逐项确认。
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
            {capabilityItems.map(({ icon: Icon, title, description }) => (
              <article key={title} className="bg-zinc-950 p-6 sm:p-8">
                <Icon className="size-6 text-orange-300" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
