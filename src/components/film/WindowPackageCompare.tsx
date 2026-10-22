import Image from "next/image";
import { windowPackages, WINDOW_PRICING_SCOPE } from "@/lib/film-products";

/**
 * 4 款太阳膜套餐参数对比（无价格，参数按产品图原文呈现）。
 * 页面保留原有 7 套组合卡片，本块为资料套餐参数补充。
 */
export function WindowPackageCompare() {
  return (
    <section id="window-package-compare" className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-orange-400 mb-3">套餐参数对比</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            套餐参数适配速查：春分、谷雨、白露、帝王紫（凤凰红）怎么选？
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl leading-relaxed">
            以下为资料套餐的隔热指标、厚度与质保参考，价格不上页面，到店询价；页面上方的 7 套组合仍按侧重点选择。
          </p>
        </div>

        {/* 桌面对比表 */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-zinc-800 mb-10">
          <table className="w-full min-w-[860px] text-sm">
            <thead>
              <tr className="bg-orange-950/30 text-orange-300">
                {["套餐", "膜类组合", "前挡总太阳能阻隔率", "侧后挡总太阳能阻隔率", "厚度", "质保"].map(
                  (h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold border-b border-zinc-800">
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {windowPackages.map((p) => (
                <tr key={p.name} className="border-b border-zinc-800/60 last:border-b-0 hover:bg-zinc-900/40">
                  <td className="px-4 py-3 font-medium text-white">{p.name}</td>
                  <td className="px-4 py-3 text-zinc-300">{p.scheme}</td>
                  <td className="px-4 py-3 text-zinc-300 tabular-nums">{p.frontTser}</td>
                  <td className="px-4 py-3 text-zinc-300 tabular-nums">{p.rearTser}</td>
                  <td className="px-4 py-3 text-zinc-300 tabular-nums">{p.thickness}</td>
                  <td className="px-4 py-3 text-zinc-100 font-semibold">{p.warranty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {windowPackages.map((p) => (
            <article
              key={p.name}
              className="rounded-2xl overflow-hidden border border-white/[0.07] bg-zinc-900/60"
            >
              <div className="relative aspect-[16/9] bg-zinc-900">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 text-[10px] font-medium px-2 py-0.5 rounded-full bg-black/60 text-zinc-300 backdrop-blur-sm">
                  产品图，非本店实拍
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="text-lg font-bold text-white">{p.name}</h3>
                  <span className="text-sm font-semibold text-orange-300">{p.warranty}质保</span>
                </div>
                <p className="text-xs text-orange-300/80 mb-3">{p.seriesLabel}</p>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <dt className="text-zinc-500">前挡</dt>
                  <dd className="text-right text-zinc-200">{p.frontTser}</dd>
                  <dt className="text-zinc-500">侧后挡</dt>
                  <dd className="text-right text-zinc-200">{p.rearTser}</dd>
                  <dt className="text-zinc-500">厚度</dt>
                  <dd className="text-right text-zinc-200">{p.thickness}</dd>
                </dl>
                <p className="mt-3 text-xs text-zinc-400 leading-relaxed">{p.audience}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-zinc-500 leading-relaxed">{WINDOW_PRICING_SCOPE}</p>
      </div>
    </section>
  );
}
