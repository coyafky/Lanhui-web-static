"use client";

import { useState } from "react";
import { Search, Check, HelpCircle, MessageCircle } from "lucide-react";
import { electricStepHotModels, electricStepFitmentTags } from "@/lib/electric-step-products";
import { openWeChatModal } from "@/lib/wechat-modal";

export function ElectricStepModelSelector() {
  const [search, setSearch] = useState("");

  const filtered = search.trim()
    ? electricStepFitmentTags.filter((m) =>
        m.name.toLowerCase().includes(search.toLowerCase())
      )
    : electricStepHotModels;

  return (
    <section
      id="electric-step-models"
      className="py-16 sm:py-20 bg-zinc-900/50 border-t border-white/[0.05]"
      aria-labelledby="electric-step-models-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            车型适配
          </p>
          <h2
            id="electric-step-models-title"
            className="text-2xl md:text-3xl font-bold text-white"
          >
            确认你的车型能否安装
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            以下是蓝辉轻改有成熟案例或可到店确认的车型。选择车型后直接发起咨询，会携带车型名称。
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-zinc-500" aria-hidden />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索车型名称..."
            className="w-full min-h-11 rounded-full bg-white/[0.06] pl-11 pr-4 text-sm text-white placeholder:text-zinc-500 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] focus:outline-none focus:shadow-[0_0_0_2px_oklch(0.7_0.13_55/0.5)]"
          />
        </div>

        {/* Model grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {filtered.map((model) => {
            const isMature = "status" in model && model.status === "mature";
            return (
              <button
                key={model.name}
                type="button"
                onClick={() => openWeChatModal()}
                className="group flex flex-col gap-2 rounded-2xl bg-zinc-900/60 p-4 text-left shadow-[0_0_0_1px_oklch(1_0_0/0.06)] transition-all hover:shadow-[0_0_0_1px_oklch(1_0_0/0.12)] active:scale-[0.97]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">
                    {model.name}
                  </span>
                  {"status" in model ? (
                    isMature ? (
                      <Check className="size-4 text-green-400" aria-label="有成熟案例" />
                    ) : (
                      <HelpCircle className="size-4 text-amber-400" aria-label="需现场确认" />
                    )
                  ) : (
                    <HelpCircle className="size-4 text-zinc-500" aria-label="需咨询确认" />
                  )}
                </div>
                <p className="text-xs text-zinc-500">{model.note}</p>
                <div className="mt-1 flex items-center gap-1 text-xs text-orange-400">
                  <MessageCircle className="size-3" />
                  咨询此车型
                </div>
              </button>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-zinc-500 py-8">
            未找到匹配的车型，建议直接微信咨询
          </p>
        )}

        <p className="mt-6 text-xs text-zinc-500 text-center">
          * “有成熟案例”表示蓝辉曾为该车型安装过电动踏板；“需现场确认”表示需要到店检查底盘结构、安装位和电气接口后方可确定方案。
        </p>
      </div>
    </section>
  );
}
