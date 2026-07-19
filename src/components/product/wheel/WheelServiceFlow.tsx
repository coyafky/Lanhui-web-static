"use client";

import { FileText } from "lucide-react";
import { wheelProcess } from "@/lib/wheel-products";
import { openWeChatModal } from "@/lib/wechat-modal";

export function WheelServiceFlow() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-900/50 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            服务流程
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            从数据确认到交付复查，每一步都可追溯
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl">
            到店交付，统一规范。施工时长取决于车型和轮毂数量，具体以到店评估为准。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {wheelProcess.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6"
            >
              {/* 步骤编号 */}
              <p className="text-3xl font-bold text-orange-400/30 mb-3 tracking-wider tabular-nums">
                {item.step}
              </p>

              <h3 className="text-base font-semibold text-white mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                {item.description}
              </p>

              {/* 可交付结果 */}
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <FileText className="size-3 text-orange-400/60" />
                {item.deliverable}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-orange-400/[0.06] border border-orange-400/[0.12] p-6 md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white">
              轮毂数据需要实车确认
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              建议提前准备车型、年款、当前轮胎规格和想要的视觉方向，到店后现场确认可安装范围。
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
