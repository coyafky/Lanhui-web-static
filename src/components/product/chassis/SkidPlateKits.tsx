import { Package } from "lucide-react";

/**
 * 套装构成说明（G4）：四/五/六件套按防护部位划分，原文口径，不换算不推断。
 */
const KITS = [
  {
    name: "四件套",
    zones: "发动机、线路（左右）、三元催化等燃油车核心防护部位",
    note: "常见于燃油车发动机舱与底盘前部防护方案。",
  },
  {
    name: "五件套",
    zones: "前电机、前电池、后电池、后电机等新能源核心部位",
    note: "纯电/增程车型电池与电驱区域的主流套装构成。",
  },
  {
    name: "六件套",
    zones: "发动机、线束、电池、油箱、后电机等增程车型扩展部位",
    note: "增程车型在五件套基础上增加油箱或更多线路防护。",
  },
] as const;

export function SkidPlateKits() {
  return (
    <section
      id="skid-plate-kits"
      className="scroll-mt-20 border-b border-white/[0.06] bg-[#0b0c10] py-16 text-white sm:py-20"
      aria-labelledby="skid-plate-kits-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-orange-400">
            <Package className="size-4" aria-hidden="true" />
            套装构成
          </p>
          <h2
            id="skid-plate-kits-title"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            四件套、五件套、六件套区别在哪
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            套装按防护部位划分，不同年款、动力与配置对应的套件数量可能不同，以适配库原文为准。
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {KITS.map((kit) => (
            <article
              key={kit.name}
              className="rounded-2xl border border-white/[0.08] bg-zinc-900/60 p-6"
            >
              <h3 className="text-xl font-semibold text-white">{kit.name}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-200">{kit.zones}</p>
              <p className="mt-3 text-xs leading-6 text-zinc-400">{kit.note}</p>
            </article>
          ))}
        </div>

        <p className="mt-6 rounded-xl border border-orange-500/20 bg-orange-500/[0.06] px-5 py-4 text-sm leading-7 text-orange-100/90">
          套件构成以适配库原文为准，到店按实车核对；同一车型不同方案的套件数、年款与材质差异会在适配库中按方案分别罗列。
        </p>
      </div>
    </section>
  );
}
