"use client";

import { FileText, ChevronDown, MessageCircle } from "lucide-react";
import {
  carCareProcess,
  carCareWarranties,
  carCareFaqs,
} from "@/lib/car-care-products";
import { openWeChatModal } from "@/lib/wechat-modal";

export function CarCareServiceFlow() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── 施工专业度 ─── */}
        <div className="mb-16">
          <p className="text-xs tracking-widest mb-3 text-emerald-400 uppercase">
            施工专业度
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            不只是洗得干净，更关注怎么洗
          </h2>
          <p className="text-zinc-400 max-w-xl mb-8">
            相同的清洁效果背后，是工具、用料和分区流程的差别。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "两桶水法 + 砂石隔离网",
                description:
                  "一个桶装清水、一个桶装洗车液，配合砂石隔离网防止手套和毛巾从桶底带回泥沙，降低细小划痕风险。",
              },
              {
                title: "毛巾与刷具分区使用",
                description:
                  "车身上部、下部、轮毂、内饰分别使用不同颜色和材质的毛巾，避免交叉污染。细节刷具按区域分盒存放。",
              },
              {
                title: "材质分区处理",
                description:
                  "皮革、织物、翻毛皮和钢琴漆面分别使用对应的清洁剂和护理产品，施工前在不显眼处做小面积测试。",
              },
            ].map((detail) => (
              <div
                key={detail.title}
                className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5"
              >
                <h4 className="text-base font-semibold text-white mb-1.5">
                  {detail.title}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 施工流程 ─── */}
        <div className="mb-16">
          <p className="text-xs tracking-widest mb-3 text-emerald-400 uppercase">
            到店流程
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            从车况检查到交付确认，每一步都有记录
          </h2>
          <p className="text-zinc-400 max-w-xl mb-8">
            到店安装，统一规范。施工时长取决于车型和项目组合，具体以到店评估为准。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {carCareProcess.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6"
              >
                <p className="text-3xl font-bold text-emerald-400/30 mb-3 tracking-wider tabular-nums">
                  {item.step}
                </p>

                <h3 className="text-base font-semibold text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                  {item.description}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <FileText className="size-3 text-emerald-400/60" aria-hidden />
                  {item.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 质保信息 ─── */}
        <div className="mb-8 rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            交付标准
          </h3>
          <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
            以下项目以交付时双方共同确认的状态为准。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {carCareWarranties.map((w) => (
              <div
                key={w.component}
                className="rounded-xl bg-white/[0.03] p-4"
              >
                <p className="text-sm font-medium text-zinc-300 mb-1">
                  {w.component}
                </p>
                <p className="text-xs text-zinc-500 mb-1">{w.coverage}</p>
                <p className="text-xs text-emerald-400/80 font-medium">
                  质保 {w.period}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── FAQ ─── */}
        <div className="mb-8 rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            常见问题
          </h3>
          <div className="space-y-2">
            {carCareFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl bg-white/[0.03]"
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

        {/* ─── CTA ─── */}
        <div className="rounded-2xl bg-emerald-400/[0.06] border border-emerald-400/[0.12] p-6 md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white">
              不确定该选哪一项？发车况照片给蓝辉
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              微信发几张车身、轮毂、内饰和玻璃的近照，帮你看车况并推荐匹配的项目组合。
            </p>
          </div>
          <button
            type="button"
            onClick={() => openWeChatModal()}
            className="mt-5 inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 active:scale-[0.96] transition-transform md:mt-0"
          >
            发车况照片咨询
            <MessageCircle className="size-4" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}
