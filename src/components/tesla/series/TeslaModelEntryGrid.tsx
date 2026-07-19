"use client";

import { MessageCircle } from "lucide-react";
import { openWeChatModal } from "@/lib/wechat-modal";
import {
  TESLA_MODEL_COPY,
  type TeslaModelEntryKey,
} from "@/lib/tesla-series-services";

const MODEL_KEYS: readonly TeslaModelEntryKey[] = [
  "model-3",
  "model-y",
  "model-y-l",
  "model-s",
  "model-x",
];

/**
 * Tesla Model 3 / Y / Y L / S / X 五车型信息卡（非链接，无子页）。
 * 每张卡展示车型定位、使用场景和 Top 3 需求，附带微信咨询按钮。
 * Tesla 在 product-routes.ts 中 modelSlugs: []，无车型子页——
 * 卡片为纯信息展示 + 咨询入口，不放假链接、不写项目数。
 */
export function TeslaModelEntryGrid() {
  return (
    <section
      id="tesla-models"
      aria-labelledby="tesla-models-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-red-400 uppercase">
            按车型选
          </p>
          <h2
            id="tesla-models-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            你的特斯拉是哪一款？
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            Model 3、Model Y、Model Y L、Model S、Model X
            均可提供基础服务咨询。发来车型、年款和需求，先确认方案与适配边界。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {MODEL_KEYS.map((key) => {
            const m = TESLA_MODEL_COPY[key];
            return (
              <div
                key={key}
                className="flex flex-col rounded-3xl bg-zinc-900/60 p-6 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
              >
                <span className="self-start rounded-full bg-red-400/10 px-2.5 py-0.5 text-xs font-medium text-red-300">
                  {m.positioning}
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">
                  {m.modelName}
                </h3>
                <p className="mt-2 text-base text-zinc-400 leading-relaxed text-pretty flex-1">
                  {m.scenario}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {m.topNeeds.map((need) => (
                    <span
                      key={need}
                      className="inline-flex items-center rounded-full bg-white/[0.04] px-3 py-1 text-xs text-zinc-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]"
                    >
                      {need}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => openWeChatModal()}
                  className="mt-4 inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-gradient-to-r from-red-500 to-red-600 px-5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition-transform active:scale-[0.96]"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  咨询 {m.modelName} 适配
                </button>
              </div>
            );
          })}

          {/* 其他 Tesla 车型咨询入口 */}
          <div className="flex flex-col justify-center gap-4 rounded-3xl bg-zinc-900/60 p-6 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]">
            <h3 className="text-lg font-bold text-white">
              开的是其他 Tesla 版本或年份？
            </h3>
            <p className="text-base text-zinc-400 leading-relaxed text-pretty">
              车膜、脚垫、轮毂和洗美养护等基础服务同样可约。
              发来车型、年款和 VIN 后 8 位，我们先帮你确认配件适配性和施工边界。
            </p>
            <button
              type="button"
              onClick={() => openWeChatModal()}
              className="inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-gradient-to-r from-red-500 to-red-600 px-5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition-transform active:scale-[0.96]"
            >
              <MessageCircle className="size-4" aria-hidden />
              提交车型确认
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-zinc-500">
          车型子页整理中，当前按车型现场确认方案与适配边界。
        </p>
      </div>
    </section>
  );
}
