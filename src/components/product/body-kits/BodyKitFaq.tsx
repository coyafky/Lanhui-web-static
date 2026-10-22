import { ChevronDown, Handshake } from "lucide-react";

export const bodyKitFaqs = [
  {
    question: "装包围要多久？会不会破原车、要打孔吗？",
    answer:
      "施工时长按车型与方案不同，到店评估后给具体排期。安装以卡扣、原位贴合为主，是否需要局部打孔或附加固定，施工前会按实车结构确认并说明，不承诺所有车型都完全不动原车结构。",
  },
  {
    question: "改包围要备案吗？年检怎么办？",
    answer:
      "车身包围属于外观变更，按当地交管规定办理；页面不做备案承诺，到店评估时说明合规边界。年检前建议先确认外观变更要求，必要时咨询当地车管所。",
  },
  {
    question: "适配库没列到的车型，能装吗？",
    answer:
      "适配库未收录不代表不能装，也不打包票。把车型、年款、配置发到门店，以门店现场检查为准；不同批次与配置存在差异，到店按实车结构评估后再定方案。",
  },
  {
    question: "效果图和实拍有什么区别？",
    answer:
      "页面上的风格图为效果图，系列图为产品参考图，均非本店实拍；效果图用于确认风格方向，真实贴合度、色差与装车效果以门店现场实车评估为准。",
  },
  {
    question: "单件改装和整套包围怎么选？",
    answer:
      "只想先改一处看效果，可选前唇、侧裙、尾翼等单件；想一次把姿态改完整、看重整体线条，选前 + 后 + 侧成套。单件不表示可任意组合互换，具体到店对表。",
  },
];

const FLOW = [
  {
    step: "01",
    title: "车型与款式确认",
    desc: "报车型、年款、配置，先核对适配范围与风格方向。",
  },
  {
    step: "02",
    title: "材质与方案选择",
    desc: "按用车场景选 ABS / PP / 碳纤维 / 干碳，单件或整套定方案。",
  },
  {
    step: "03",
    title: "安装施工",
    desc: "卡扣与原位贴合为主，打孔或附加固定方案施工前确认。",
  },
  {
    step: "04",
    title: "交付复查与备案指引",
    desc: "交付前复查贴合度，说明外观变更合规边界与年检注意事项。",
  },
];

/**
 * S6 FAQ（G6 / G7）+ S5 到店流程四步。
 */
export function BodyKitFaq() {
  return (
    <section className="bg-zinc-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.18em] text-amber-400">常见问题</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            装之前先把这几件事问清楚
          </h2>
        </div>

        <div className="mt-9 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {bodyKitFaqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-medium text-white">
                {faq.question}
                <ChevronDown className="size-5 shrink-0 text-zinc-400 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="max-w-2xl pb-5 pr-9 text-sm leading-7 text-zinc-300">{faq.answer}</p>
            </details>
          ))}
        </div>

        {/* S5 到店流程 */}
        <div className="mt-14">
          <p className="text-center text-xs font-medium tracking-[0.18em] text-amber-400">到店流程</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FLOW.map((item) => (
              <div key={item.step} className="rounded-2xl border border-white/[0.08] bg-zinc-900 p-5">
                <p className="text-2xl font-bold text-amber-400/80">{item.step}</p>
                <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-6 text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-zinc-500">
            <Handshake className="size-4 text-amber-400" aria-hidden="true" />
            佛山包围改装店咨询可先电话沟通车型年款，再预约到店检查
          </div>
        </div>
      </div>
    </section>
  );
}
