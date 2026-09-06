"use client";

import { useState } from "react";

type TeiFaqItem = { q: string; a: string };

const FAQS: readonly TeiFaqItem[] = [
  {
    q: "TEI 刹车卡钳是正品吗？",
    a: "蓝辉轻改门店销售的 TEI Racing 套件均来自品牌授权渠道，可提供配套质保与安装服务。",
  },
  {
    q: "我的车能装吗？",
    a: "需要结合车型年份与配置到店确认：轮毂尺寸、盘型、桥码、油管与电子驻车兼容性缺一不可，不建议仅凭型号自行判断。",
  },
  {
    q: "换刹车需要备案吗？",
    a: "刹车系统升级属性能改装，各地年检口径不同。到店我们会说明当地常见做法，并建议保留原车件以备查验。",
  },
  {
    q: "卡钳颜色可以换吗？",
    a: "可以。多数系列出厂可选红、黄、淡绿、银等配色，部分系列支持阳极氧化灰；颜色不影响性能参数。",
  },
  {
    q: "电动车的电子驻车（EPB）兼容吗？",
    a: "支持电子驻车的车型需要配套电子驻车小卡钳或机电一体方案（如 T-Small、P4-Explore 系列），具体请到店按车型核对。",
  },
];

/**
 * TEI 刹车卡钳 —— FAQ(手风琴)。
 */
export function TeiFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-10 md:py-14 bg-zinc-950">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="inline-block text-xs tracking-widest mb-3 text-orange-400">FAQ</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">常见问题</h2>
        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.q}
                className={`rounded-xl border transition-colors ${
                  open ? "border-orange-500/40 bg-zinc-900" : "border-zinc-800 bg-zinc-900/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-medium">{item.q}</span>
                  <span
                    aria-hidden
                    className={`text-orange-400 transition-transform ${open ? "rotate-45" : ""}`}
                  >
                    ＋
                  </span>
                </button>
                {open && (
                  <p className="px-5 pb-4 text-sm text-zinc-400 leading-relaxed">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
