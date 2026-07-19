"use client";

import { useState } from "react";
import { Search, Check, HelpCircle, MessageCircle } from "lucide-react";
import { carMatFitmentTags, carMatHotModels } from "@/lib/carmat-products";
import { openWeChatModal } from "@/lib/wechat-modal";

export function CarMatModelSelector() {
  const [query, setQuery] = useState("");

  const filtered =
    query.trim() === ""
      ? carMatHotModels
      : carMatFitmentTags.filter((t) =>
          t.name.toLowerCase().includes(query.toLowerCase().trim()),
        );

  return (
    <section
      className="py-16 sm:py-20 bg-zinc-900/50 border-t border-white/[0.05]"
      aria-labelledby="carmat-model-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-amber-400 uppercase">
            车型适配
          </p>
          <h2
            id="carmat-model-title"
            className="text-2xl md:text-3xl font-bold text-white"
          >
            选择车型，查看是否有成熟案例
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            不同车型的座椅布局、滑轨位置和门槛结构各有不同，先确认车型再匹配方案。
          </p>
        </div>

        {/* Search bar */}
        <div className="relative mb-8 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-zinc-500" aria-hidden />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索车型，如 理想 L9、问界 M7…"
            className="w-full min-h-11 rounded-full bg-white/[0.04] pl-11 pr-4 text-sm text-white placeholder:text-zinc-500 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] focus:outline-none focus:shadow-[0_0_0_2px_oklch(0.7_0.12_70/0.5)] transition-shadow"
          />
        </div>

        {/* Model grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {filtered.map((tag) => {
            const isMature = tag.weight === "hero" || tag.weight === "strong";
            return (
              <button
                key={tag.name}
                type="button"
                onClick={() => openWeChatModal()}
                className="text-left rounded-2xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-4 hover:bg-zinc-800/60 active:scale-[0.97] transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-sm font-semibold text-white truncate">
                    {tag.name}
                  </span>
                  {isMature ? (
                    <Check className="size-3.5 text-emerald-400 flex-shrink-0" aria-hidden />
                  ) : (
                    <HelpCircle className="size-3.5 text-amber-400 flex-shrink-0" aria-hidden />
                  )}
                </div>
                <p className="text-xs text-zinc-400 mb-2">{tag.note}</p>
                <span
                  className={`inline-flex items-center gap-1 text-[10px] font-medium ${
                    isMature ? "text-emerald-300" : "text-amber-300"
                  }`}
                >
                  {isMature ? "有成熟案例" : "需现场确认"}
                </span>
              </button>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-sm text-zinc-400 py-12">
            未找到匹配的车型，建议直接
            <button
              type="button"
              onClick={() => openWeChatModal()}
              className="text-amber-400 underline underline-offset-2 mx-1"
            >
              微信咨询
            </button>
          </p>
        )}

        <p className="mt-6 text-center text-xs text-zinc-500">
          绿色标识表示已有成熟安装案例；橙色标识表示需要到店实车确认。
        </p>
      </div>
    </section>
  );
}
