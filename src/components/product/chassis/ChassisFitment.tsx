import { CheckCircle2, ScanSearch, Wrench } from "lucide-react";
import { chassisFitmentSteps } from "@/lib/chassis-products";

export function ChassisFitment() {
  return (
    <section id="chassis-fitment" className="scroll-mt-20 border-b border-white/[0.06] bg-[#0b0c10] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-orange-400">安装适配</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              先确认底盘结构，再决定能不能装
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-300">
              底盘护板属于车型适配件。产品轮廓、固定位置、散热与检修边界，都需要结合具体车辆确认。
            </p>

            <div className="mt-8 border-l-2 border-orange-500/70 pl-5">
              <div className="flex items-center gap-3 text-orange-200">
                <ScanSearch className="size-5" aria-hidden="true" />
                <p className="font-semibold">不把“能放上去”当作“适合安装”</p>
              </div>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                只有版型、固定位置、部件间隙和必要功能区域都确认后，才进入安装环节。
              </p>
            </div>
          </div>

          <ol className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {chassisFitmentSteps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[auto_1fr] gap-4 py-6">
                <div className="flex size-10 items-center justify-center rounded-full bg-white/[0.05] text-orange-300">
                  {index === chassisFitmentSteps.length - 1 ? (
                    <CheckCircle2 className="size-5" aria-hidden="true" />
                  ) : (
                    <Wrench className="size-5" aria-hidden="true" />
                  )}
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-medium text-zinc-500">0{index + 1}</span>
                    <h3 className="font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-zinc-300">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
