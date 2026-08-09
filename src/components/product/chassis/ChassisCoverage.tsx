import { BatteryCharging, Cable, CarFront, ShieldCheck } from "lucide-react";
import { chassisBenefits, chassisCoverageZones } from "@/lib/chassis-products";

const ZONE_ICONS = [CarFront, Cable, BatteryCharging, BatteryCharging, CarFront] as const;

export function ChassisCoverage() {
  return (
    <>
      <section id="chassis-coverage" className="scroll-mt-20 border-b border-white/[0.06] bg-zinc-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.18em] text-orange-400">五段分区</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              从前电机到后电机，按区域覆盖
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-300">
              护板不是一整块通用金属板。不同区域分别成型，再按照对应车型的底盘结构组合安装。
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            {chassisCoverageZones.map((zone, index) => {
              const Icon = ZONE_ICONS[index] ?? ShieldCheck;
              const isPrimary = zone.emphasis === "primary";

              return (
                <article
                  key={zone.code}
                  className={`relative min-w-0 overflow-hidden border border-white/[0.08] bg-zinc-900/60 p-6 ${
                    isPrimary ? "lg:col-span-6 lg:min-h-56 lg:p-8" : "lg:col-span-4"
                  }`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-300 ring-1 ring-orange-400/20">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-semibold tracking-[0.16em] text-zinc-600">{zone.code}</span>
                  </div>
                  <h3 className={`mt-7 font-semibold text-white ${isPrimary ? "text-2xl" : "text-xl"}`}>
                    {zone.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-300 sm:text-base">{zone.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06] bg-[#0b0c10] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:px-8">
          <div className="lg:sticky lg:top-24">
            <ShieldCheck className="size-8 text-orange-300" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              安装护板后，车主能得到什么
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-300">
              它的价值不是让车辆变得“撞不坏”，而是为日常路况增加一层可以检查、维护和更换的外部隔护。
            </p>
          </div>

          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {chassisBenefits.map((benefit, index) => (
              <article key={benefit.title} className="grid gap-4 py-7 sm:grid-cols-[3.5rem_1fr] sm:py-8">
                <span className="text-sm font-semibold tracking-[0.14em] text-orange-300">0{index + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-300 sm:text-base">{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
