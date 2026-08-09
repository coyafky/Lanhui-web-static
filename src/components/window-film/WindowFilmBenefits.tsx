import {
  AirVent,
  Eye,
  EyeOff,
  ScanEye,
  Shield,
  ShieldCheck,
  Sun,
} from "lucide-react";

const supportingBenefits = [
  {
    title: "紫外线阻隔",
    description: "减少紫外线进入，帮助保护乘员皮肤并延缓内饰老化。",
    icon: ShieldCheck,
  },
  {
    title: "减少眩光干扰",
    description: "让强光与逆光更柔和，同时保留观察路况所需的亮度。",
    icon: ScanEye,
  },
  {
    title: "玻璃安全辅助",
    description: "玻璃破损时，膜层可辅助黏附部分碎片，减少飞散风险。",
    icon: Shield,
  },
] as const;

export function WindowFilmBenefits() {
  return (
    <section className="border-t border-white/[0.05] bg-zinc-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl lg:mb-12">
          <p className="mb-3 text-xs uppercase tracking-widest text-orange-400">
            窗膜核心作用
          </p>
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            为什么要贴一张好窗膜？
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-300">
            不是单看颜色深浅。合适的窗膜组合，需要同时处理热量、光线、紫外线、隐私与玻璃安全辅助。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-12">
          <article className="relative overflow-hidden rounded-2xl border border-orange-400/20 bg-[linear-gradient(135deg,oklch(0.21_0.035_45),oklch(0.17_0.015_30))] p-6 sm:p-8 md:col-span-7">
            <div className="absolute -right-16 -top-16 size-52 rounded-full bg-orange-400/[0.07] blur-3xl" />
            <div className="relative">
              <Sun className="size-8 text-orange-300" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-semibold text-white sm:mt-8">
                隔热，是减少热量进入
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-zinc-300">
                高效隔热膜层可减少太阳热量进入车内，降低长时间曝晒后的闷热感。
              </p>

              <div className="mt-6 border-t border-orange-200/10 pt-5 sm:mt-8 sm:flex sm:items-start sm:gap-4">
                <AirVent
                  className="size-5 shrink-0 text-orange-300"
                  aria-hidden="true"
                />
                <div className="mt-3 sm:mt-0">
                  <p className="font-medium text-zinc-100">空调更快进入舒适区</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    热量输入减少后，空调更容易把车内带回舒适温度。
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-white/[0.08] bg-zinc-900/55 p-6 sm:p-8 md:col-span-5">
            <EyeOff className="size-8 text-orange-300" aria-hidden="true" />
            <h3 className="mt-6 text-2xl font-semibold text-white sm:mt-8">
              隐私，是减少车外直视感
            </h3>
            <p className="mt-3 leading-relaxed text-zinc-300">
              合理的侧后挡组合可降低车外对车内的直视感，为乘员与随车物品增加一层视觉遮蔽。
            </p>

            <div className="mt-6 border-t border-white/[0.08] pt-5 sm:mt-8 sm:flex sm:items-start sm:gap-4">
              <Eye
                className="size-5 shrink-0 text-orange-300"
                aria-hidden="true"
              />
              <div className="mt-3 sm:mt-0">
                <p className="font-medium text-zinc-100">车内向外仍要清晰</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  隐私不等于一味压暗，仍需兼顾白天、夜间和雨天视野。
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/35 md:grid md:grid-cols-3">
          {supportingBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className={`p-6 sm:p-7 ${
                  index > 0
                    ? "border-t border-white/[0.08] md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <Icon className="size-6 text-orange-300" aria-hidden="true" />
                <h3 className="mt-5 text-base font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-5 text-xs leading-relaxed text-zinc-500">
          实际体验会受膜材参数、玻璃面积、车型结构与施工质量影响，具体以产品规格和实车效果为准。
        </p>
      </div>
    </section>
  );
}
