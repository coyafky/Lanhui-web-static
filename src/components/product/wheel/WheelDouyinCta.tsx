import Image from "next/image";
import {
  ExternalLink,
  Search,
  ScanLine,
  Video,
  Car,
  MapPin,
} from "lucide-react";

const DOUYIN_ACCOUNT = "67511088579";
const DOUYIN_PROFILE_URL = "https://v.douyin.com/74FaQlDoAaM/";

const DOUYIN_HIGHLIGHTS = [
  { icon: Video, label: "实拍上车案例" },
  { icon: Car, label: "轮毂细节特写" },
  { icon: MapPin, label: "顺德大良门店" },
] as const;

export function WheelDouyinCta() {
  return (
    <section
      aria-labelledby="wheel-douyin-title"
      className="relative overflow-hidden bg-zinc-950 py-16 text-white sm:py-20 border-t border-white/[0.05]"
    >
      <div
        aria-hidden
        className="absolute -left-24 top-1/2 size-72 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-20 -top-24 size-80 rounded-full bg-amber-400/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16 lg:px-8">
        <div>
          <p className="mb-4 inline-flex min-h-10 items-center gap-2 rounded-full bg-orange-400/10 px-4 text-sm font-medium text-orange-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
            <Video className="size-4" aria-hidden />
            官方抖音 · 蓝辉轻改
          </p>

          <h2
            id="wheel-douyin-title"
            className="max-w-2xl text-balance text-3xl font-bold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl"
          >
            先看真实上车姿态，再决定选哪一款
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            不同轮毂在同一车型上的侧面对比、施工细节和动平衡实拍，到蓝辉轻改官方抖音查看。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={DOUYIN_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 select-none items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 pl-5 pr-[18px] text-base font-semibold text-white shadow-lg shadow-orange-500/20 transition-[scale,box-shadow,filter] duration-150 ease-out hover:brightness-110 hover:shadow-orange-400/30 active:scale-[0.96]"
              aria-label="打开蓝辉轻改官方抖音主页"
            >
              打开官方抖音
              <ExternalLink className="size-4" aria-hidden />
            </a>

            <div className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white/[0.04] px-5 text-sm text-zinc-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] sm:justify-start">
              <Search className="size-4 text-orange-300" aria-hidden />
              抖音号
              <span className="whitespace-nowrap font-semibold tabular-nums text-white">
                {DOUYIN_ACCOUNT}
              </span>
            </div>
          </div>

          <ul className="mt-8 grid gap-3 text-sm text-zinc-300 sm:grid-cols-3">
            {DOUYIN_HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex min-h-11 items-center gap-2">
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                  <Icon className="size-4 text-orange-300" aria-hidden />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-[18rem] lg:max-w-none">
          <div className="rounded-[1.75rem] bg-white/[0.05] p-2 shadow-[0_0_0_1px_oklch(1_0_0/0.08),0_24px_64px_-24px_oklch(0_0_0/0.75)]">
            <Image
              src="/images/social/douyin-lanhui.png"
              width={856}
              height={1070}
              sizes="(max-width: 1024px) 288px, 320px"
              alt="蓝辉轻改官方抖音码，抖音号 67511088579"
              className="h-auto w-full rounded-[1.25rem] outline outline-1 -outline-offset-1 outline-white/10"
              unoptimized
            />
          </div>
          <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-zinc-400">
            <ScanLine className="size-4" aria-hidden />
            使用抖音 App 扫码关注
          </p>
        </div>
      </div>
    </section>
  );
}
