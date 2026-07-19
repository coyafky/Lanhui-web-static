"use client";

import { FileText, ChevronDown } from "lucide-react";
import { electricStepProcess, electricStepWarranties, electricStepFaqs } from "@/lib/electric-step-products";
import { openWeChatModal } from "@/lib/wechat-modal";

export function ElectricStepServiceFlow() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 流程标题 */}
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            到店流程
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            从车型确认到交付复查，每一步都可追溯
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl">
            到店交付，统一规范。施工时长取决于车型和款式，具体以到店评估为准。
          </p>
        </div>

        {/* 4 steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {electricStepProcess.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6"
            >
              <p className="text-3xl font-bold text-orange-400/30 mb-3 tracking-wider tabular-nums">
                {item.step}
              </p>

              <h3 className="text-base font-semibold text-white mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                {item.description}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <FileText className="size-3 text-orange-400/60" aria-hidden />
                {item.deliverable}
              </div>
            </div>
          ))}
        </div>

        {/* 质保信息 */}
        <div className="mb-8 rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            质保覆盖范围
          </h3>
          <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
            不同组件享有不同的质保期限。质保范围以施工前双方确认的检测和安装记录为准。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {electricStepWarranties.map((w) => (
              <div
                key={w.component}
                className="rounded-xl bg-white/[0.03] p-4"
              >
                <p className="text-sm font-medium text-zinc-300 mb-1">
                  {w.component}
                </p>
                <p className="text-xs text-zinc-500 mb-1">{w.coverage}</p>
                <p className="text-xs text-orange-400/80 font-medium">
                  质保 {w.period}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-8 rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            常见问题
          </h3>
          <div className="space-y-2">
            {electricStepFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl bg-white/[0.03]"
              >
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                  <span className="text-sm font-medium text-zinc-300 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className="size-4 text-zinc-500 flex-shrink-0 transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-orange-400/[0.06] border border-orange-400/[0.12] p-6 md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white">
              带上你的车型，到店确认方案
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              建议提前准备车型、年款、主要乘员和用车场景，现场确认底盘固定点、电气接口、灯带方式和离地间隙。
            </p>
          </div>
          <button
            type="button"
            onClick={() => openWeChatModal()}
            className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 active:scale-[0.96] transition-transform md:mt-0"
          >
            携带车型数据咨询
          </button>
        </div>
      </div>
    </section>
  );
}
