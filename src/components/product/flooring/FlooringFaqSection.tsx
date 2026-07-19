"use client";

import { ChevronDown, AlertTriangle, Shield, Wrench } from "lucide-react";
import {
  flooringFaqs,
  flooringInstallNotes,
  flooringWarranties,
  flooringMaintenance,
} from "@/lib/flooring-products";
import { openWeChatModal } from "@/lib/wechat-modal";
import { MessageCircle } from "lucide-react";

export function FlooringFaqSection() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── 施工边界 ─── */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance leading-[1.08] tracking-[-0.025em]">
            施工边界与保护措施
          </h2>
          <p className="text-zinc-400 max-w-xl mb-8 text-base leading-relaxed text-pretty">
            安装过程中如何保护你的原车部件，哪些事情我们不做。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {flooringInstallNotes.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 flex gap-3"
              >
                <Shield className="size-5 text-amber-400/60 shrink-0 mt-0.5" aria-hidden />
                <div>
                  <h3 className="text-base font-semibold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── FAQ ─── */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance leading-[1.08] tracking-[-0.025em]">
            常见问题
          </h2>
          <p className="text-zinc-400 max-w-xl mb-6 text-base leading-relaxed text-pretty">
            关于地板改装的常见疑虑和解答，如果没找到答案可以直接咨询。
          </p>

          <div className="space-y-2 mb-6">
            {flooringFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
              >
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                  <span className="text-sm font-medium text-zinc-300 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className="size-4 text-zinc-500 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
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

        {/* ─── 质保信息 ─── */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-2">
            质保范围
          </h3>
          <p className="text-sm text-zinc-400 mb-4 max-w-xl">
            以下质保以交付时双方共同确认的状态为准。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {flooringWarranties.map((w) => (
              <div
                key={w.component}
                className="rounded-xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-4"
              >
                <p className="text-sm font-medium text-zinc-300 mb-1">
                  {w.component}
                </p>
                <p className="text-xs text-zinc-500 mb-1">{w.coverage}</p>
                <p className="text-xs text-amber-400 font-medium">
                  质保 {w.period}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 日常维护 ─── */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-2">
            日常维护建议
          </h3>
          <p className="text-sm text-zinc-400 mb-4 max-w-xl">
            正确维护可以延长地板总成的使用寿命。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {flooringMaintenance.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5"
              >
                <div className="size-9 rounded-lg bg-amber-400/10 flex items-center justify-center mb-3">
                  <Wrench className="size-4 text-amber-400" aria-hidden />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 底部 CTA ─── */}
        <div className="rounded-2xl bg-amber-400/[0.06] border border-amber-400/[0.12] p-6 md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white">
              不确定你的车型能不能装？
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              发来车型、年款和座椅布局，我们先帮你确认适配，再决定是否到店。
            </p>
          </div>
          <button
            type="button"
            onClick={() => openWeChatModal()}
            className="mt-5 inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 text-sm font-semibold text-white shadow-lg shadow-amber-500/20 active:scale-[0.96] transition-transform md:mt-0"
          >
            发车型信息确认适配
            <MessageCircle className="size-4" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}
