import { Puzzle, Layers, Sparkles } from "lucide-react";
import { BODY_KIT_PRODUCT_LINE_STATS } from "@/lib/body-kit-fitment";

const CARDS = [
  {
    icon: Puzzle,
    title: "单件改装",
    count: `${BODY_KIT_PRODUCT_LINE_STATS.singlePartRecords} 条单件记录`,
    points: [
      "前包围（前唇）、后包围（后唇）、侧裙、尾翼可单独选装",
      "适合先改一处看效果，再决定是否加其他部件",
      "不表示单件之间可任意组合互换，具体到店对表",
    ],
    audience: "想先小范围调整外观、预算灵活的车主。",
  },
  {
    icon: Layers,
    title: "整套包围",
    count: `${BODY_KIT_PRODUCT_LINE_STATS.kitRecords} 套套件`,
    points: [
      "前唇 + 后唇 + 侧裙成套，外观统一性优先",
      "按车型年款分系列记录，不据同号合并适配",
      "成套施工在贴合度与整体线条上更完整",
    ],
    audience: "想一次性把姿态改完整、看重整体感的车主。",
  },
  {
    icon: Sparkles,
    title: "材质分级",
    count: "ABS / PP / 碳纤维 / 干碳",
    points: [
      "ABS 吸塑实用款为主流，可上漆、性价比高",
      "PP 注塑贴近原厂工艺，弹性好耐剐蹭",
      "碳纤维轻量质感、干碳竞技向，按用途选择",
    ],
    audience: "按使用场景选材质，不盲目追高端。",
  },
];

/**
 * S3 产品线：单件 56 / 整套 16 / 材质分级三卡；价格一律到店询价，页面不标价。
 */
export function BodyKitProductLines() {
  return (
    <section
      id="body-kit-product-lines"
      aria-labelledby="body-kit-product-lines-title"
      className="scroll-mt-20 border-b border-white/[0.06] bg-[#0b0c10] py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-amber-400">产品线</p>
          <h2 id="body-kit-product-lines-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            单件分开装，还是上整套？先看清区别
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            前唇、侧裙、尾翼可以单独选装，也可以前 + 后 + 侧成套；材质按使用场景分四级。具体方案与费用到店询价，页面不标价格。
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-white/[0.08] bg-zinc-900 p-6 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-300">
                  <card.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="text-xs text-zinc-400">{card.count}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm leading-6 text-zinc-300">
                {card.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-400/70" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl border border-white/[0.06] bg-zinc-950/60 p-3.5 text-xs leading-6 text-zinc-400">
                适合：{card.audience}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
