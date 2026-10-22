import { ChevronDown } from "lucide-react";

/**
 * S6 常见问题（G5/G6/G7）：H2 问答式，答案与 FAQPage JSON-LD 共用同一份数组。
 */
export const SKID_PLATE_FAQS = [
  {
    question: "装底盘护板会影响通过性吗？",
    answer:
      "护板贴附在原车底盘下方，会略微增加底部厚度，具体减少多少离地间隙与车型版型、材质厚度有关。安装前会举升实车核对最低点与通过角，日常地库、坡道是否通行需要结合实车判断，页面不做「无影响」承诺。",
  },
  {
    question: "装了会不会有异响？",
    answer:
      "异响多来自固定点松动、护板与部件间隙不足。施工按标准点位紧固并复查间隙，交付前检查异常声响；若后期出现托底后异响或松动感，应尽快回店检查固定点。",
  },
  {
    question: "会影响电池或电机散热吗？",
    answer:
      "安装前结合实车确认必要的散热口、排水口与检修区域不被不当遮挡。不同车型结构差异较大，能否保持原有散热与检修便利性，需要到店逐项核对，不笼统承诺。",
  },
  {
    question: "装护板会影响质保吗？",
    answer:
      "底盘护板属底盘加装件，不改车身外观与结构，不涉及车辆备案。是否影响整车质保以厂家条款与经销商判定为准，建议安装前向车辆品牌方确认；施工不改动原车线路与关键部件。",
  },
  {
    question: "新能源车必须装底盘护板吗？",
    answer:
      "不是必须。是否加装取决于用车路况：常走烂路、施工路段或有托底经历的车主，防护需求更明显；城市平整道路通勤可按需选择，不建议为装而装。",
  },
  {
    question: "施工一台要多久？",
    answer:
      "施工时长随套件数量、车型结构与对位难度不同，到店评估后给出预计时间；流程含举升检查、对位安装、紧固复查与交车检查，具体以门店排期为准。",
  },
  {
    question: "一个车型有多个方案，怎么选？",
    answer:
      "多方案来自不同年款、动力、配置与材质组合，按方案罗列差异，不能互换。选择时先核对自己车辆的年款、动力与续航版本，再结合用车路况选材质，拿不准的由门店对照实车确认。",
  },
  {
    question: "适配库没列到的车型能装吗？",
    answer:
      "适配库未收录不等于不能安装。没列到的车型以门店现场检查为准，可先电话告知品牌、车型、年款与配置，到店举升核对底盘结构后再判断。",
  },
] as const;

export function SkidPlateFaq() {
  return (
    <section
      id="skid-plate-faq"
      className="scroll-mt-20 bg-[#0b0c10] py-16 text-white sm:py-20"
      aria-labelledby="skid-plate-faq-title"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.18em] text-orange-400">常见问题</p>
          <h2
            id="skid-plate-faq-title"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            装底盘护板前，车主常问的问题
          </h2>
        </div>

        <div className="mt-9 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {SKID_PLATE_FAQS.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-medium text-white">
                {faq.question}
                <ChevronDown
                  className="size-5 shrink-0 text-zinc-400 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-2xl pb-5 pr-9 text-sm leading-7 text-zinc-300">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
