"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { roofSpecGroups, seatbackSpecGroups, rearviewSpecGroups, carTvFaqs } from "@/lib/car-tv-products";

const TABS = [
  { id: "roof", label: "吸顶式后排电视", groups: roofSpecGroups },
  { id: "seatback", label: "座椅背装式后排电视", groups: seatbackSpecGroups },
  { id: "rearview", label: "流媒体后视镜", groups: rearviewSpecGroups },
] as const;

export function CarTvSpecsFaq() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["id"]>("roof");
  const active = TABS.find((tab) => tab.id === activeTab) ?? TABS[0];

  return (
    <>
      <section id="car-tv-specs" className="scroll-mt-20 border-b border-white/[0.06] bg-[#0b0c10] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.18em] text-orange-400">产品参数</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              按方案看规格，别混在一起比
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-300">
              参数根据现有产品资料整理，具体配置、接口与兼容能力以到店确认的产品批次为准。
            </p>
          </div>

          <div role="tablist" aria-label="选择产品方案查看规格" className="mt-10 flex flex-wrap gap-2">
            {TABS.map((tab) => {
              const selected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 ${
                    selected
                      ? "border-orange-500 bg-orange-500 text-zinc-950"
                      : "border-white/15 text-zinc-300 hover:border-white/30 hover:bg-white/[0.05]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            className="mt-8 grid gap-5 lg:grid-cols-3"
          >
            {active.groups.map((group) => (
              <article key={group.title} className="min-w-0 border border-white/[0.08] bg-zinc-950 p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <dl className="mt-5 divide-y divide-white/[0.07]">
                  {group.items.map((item) => (
                    <div key={item.label} className="grid min-w-0 grid-cols-[6.5rem_minmax(0,1fr)] gap-3 py-3 first:pt-0 last:pb-0">
                      <dt className="text-sm text-zinc-400">{item.label}</dt>
                      <dd className="min-w-0 break-words text-sm leading-6 text-zinc-200">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-medium tracking-[0.18em] text-orange-400">常见问题</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">装之前先把这几件事问清楚</h2>
          </div>

          <div className="mt-9 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {carTvFaqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-medium text-white">
                  {faq.question}
                  <ChevronDown className="size-5 shrink-0 text-zinc-400 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="max-w-2xl pb-5 pr-9 text-sm leading-7 text-zinc-300">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div id="rear-cta" className="mt-14 scroll-mt-20 rounded-2xl border border-white/[0.08] bg-[#0b0c10] p-8 text-center sm:p-12">
            <p className="text-xs font-medium tracking-[0.18em] text-orange-400">下一步</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">把车型年款发过来，先判断能不能装</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-zinc-300">
              报上车型、年款和想装的方案，我们确认安装条件后，再约到店看实物、定具体型号。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              >
                预约到店检查
              </Link>
              <Link
                href="#rear-installation"
                className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-white/30 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                先看安装适配
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
