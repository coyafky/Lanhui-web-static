"use client";

import { useState } from "react";
import { toyotaWheelStyles } from "@/lib/toyota-wheels";
import type { ToyotaWheelFinish } from "@/lib/toyota-wheels";

/**
 * 轮毂子页 S1「款式 Tabs」— 旋压 / 锻造 两线款式表。
 *
 * 款式表列：款式 | 尺寸 / 颜色 | ET / PCD / CB | 适配提示（锻造含平口 / 锥口）。
 * 库存与价格不上页面（门店内部数据）；型号编号留档数据层，页面不展示。
 * 视口规则：390 表格纵向折叠（卡片化），md+ 双列，xl 通栏。
 */
export function ToyotaWheelsTabs() {
  const [finish, setFinish] = useState<ToyotaWheelFinish>("spun");
  const styles = toyotaWheelStyles.filter((s) => s.finish === finish);

  return (
    <div>
      {/* Tab 切换 */}
      <div
        role="tablist"
        aria-label="轮毂工艺选择"
        className="inline-flex rounded-full bg-zinc-900/80 p-1 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]"
      >
        {(
          [
            { key: "spun", label: "旋压轮毂" },
            { key: "forged", label: "锻造轮毂" },
          ] as const
        ).map(({ key, label }) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={finish === key}
            onClick={() => setFinish(key)}
            className={`inline-flex min-h-10 select-none items-center rounded-full px-5 text-sm font-semibold transition-colors ${
              finish === key
                ? "bg-red-500 text-white shadow"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {label}
            <span
              className={`ml-2 rounded-full px-2 py-0.5 text-xs tabular-nums ${
                finish === key ? "bg-white/20" : "bg-white/[0.06]"
              }`}
            >
              {toyotaWheelStyles.filter((s) => s.finish === key).length} 款
            </span>
          </button>
        ))}
      </div>

      {/* 款式网格 */}
      <div
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
        role="tabpanel"
      >
        {styles.map((style) => (
          <article
            key={`${finish}-${style.styleNo}`}
            className="rounded-3xl bg-zinc-900/60 p-5 sm:p-6 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-bold text-white">{style.styleNo}</h3>
              <span className="rounded-full bg-red-400/10 px-2.5 py-0.5 text-xs font-medium text-red-300">
                {style.specs.length} 个尺寸
              </span>
            </div>
            <ul className="mt-4 space-y-3">
              {style.specs.map((spec, idx) => (
                <li
                  key={`${style.styleNo}-${idx}`}
                  className="rounded-xl bg-white/[0.03] px-4 py-3 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <span className="text-sm font-semibold text-white tabular-nums">
                      {spec.sizeColor}
                    </span>
                    {spec.port && (
                      <span className="text-xs text-red-300">{spec.port}</span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-zinc-400 tabular-nums">
                    {spec.params}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
