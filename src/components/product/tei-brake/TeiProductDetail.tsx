"use client";

import Link from "next/link";
import Image from "next/image";
import type { TeiProduct } from "@/lib/tei-brake";

/** 单一信息行 */
function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5 border-b border-zinc-800/70 last:border-0">
      <span className="text-sm text-zinc-500 shrink-0">{label}</span>
      <span className="text-sm font-medium text-right">{value}</span>
    </div>
  );
}

/** 颜色圆点列表 */
function ColorDots({ colors }: { colors: readonly string[] }) {
  if (colors.length === 0) return <span className="text-sm text-zinc-500">到店选色</span>;
  return (
    <div className="flex flex-wrap gap-2 justify-end">
      {colors.map((c) => (
        <span
          key={c}
          className="text-[11px] px-2 py-1 rounded-full bg-zinc-800 text-zinc-300"
          title={c}
        >
          {c}
        </span>
      ))}
    </div>
  );
}

/**
 * TEI 单产品详情 —— 核心内容区。
 */
export function TeiProductDetail({ product }: { product: TeiProduct }) {
  const relatedHint = `TEI Racing ${product.model}`;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-start">
        {/* 左：产品图 */}
        <div className="relative aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden lg:sticky lg:top-24">
          <Image
            src={`/images/products/tei/${product.slug}.webp`}
            alt={`TEI Racing ${product.model} ${product.description}`}
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-contain p-4"
            priority
          />
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500 text-white font-semibold tracking-wide">
              {product.series}
            </span>
            {product.axle && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300">
                {product.axle}
              </span>
            )}
          </div>
        </div>

        {/* 右：信息 */}
        <div>
          <p className="text-xs tracking-widest mb-3 text-orange-400">TEI RACING · BRAKE</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.model}</h1>
          <p className="text-base text-zinc-400 mb-6">{product.description}</p>

          <div className="bg-zinc-900 rounded-xl border border-zinc-800 px-5 py-2 mb-6">
            <SpecRow label="安装位置" value={product.axle ?? "前后通用"} />
            <SpecRow label="活塞数量" value={product.pistonCount ? `${product.pistonCount} 活塞` : "—"} />
            <SpecRow label="结构工艺" value={product.construction ?? "—"} />
            <div className="flex items-center justify-between gap-4 py-2.5 border-zinc-800/70">
              <span className="text-sm text-zinc-500 shrink-0">可选颜色</span>
              <ColorDots colors={product.colors} />
            </div>
          </div>

          {/* 规格表:轮毂尺寸 × 盘径(不含价格) */}
          {product.fitments.length > 0 && (
            <div className="mb-6">
              <h2 className="text-sm font-semibold mb-2">适配轮毂与碟盘</h2>
              <div className="overflow-x-auto rounded-xl border border-zinc-800">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-zinc-900 text-zinc-400 text-left">
                      <th className="px-4 py-2.5 font-medium">适配轮毂尺寸</th>
                      <th className="px-4 py-2.5 font-medium">碟盘直径</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.fitments.map((f, i) => (
                      <tr key={i} className="border-t border-zinc-800/70">
                        <td className="px-4 py-2.5">{f.wheelInch ? `${f.wheelInch} 寸` : "—"}</td>
                        <td className="px-4 py-2.5">{f.rotorMm ? `${f.rotorMm} mm` : "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-zinc-500 mt-2">
                以上为该套件的轮圈配置，不等同于对您车型的适配承诺。
              </p>
            </div>
          )}

          {product.note && (
            <p className="text-xs text-zinc-500 mb-6 bg-zinc-900/60 rounded-lg px-4 py-3 border border-zinc-800">
              备注：{product.note}
            </p>
          )}

          {/* CTA:到店咨询(不含报价) */}
          <div className="rounded-xl border border-orange-500/30 bg-orange-500/[0.06] p-5">
            <p className="font-semibold mb-1.5">想确认这台车能不能装？</p>
            <p className="text-sm text-zinc-400 mb-4">
              到蓝辉轻改顺德大良店，按实车核对盘型、桥码与电子驻车兼容性，再选颜色与碟盘尺寸。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
            >
              到店咨询
            </Link>
          </div>

          <p className="text-xs text-zinc-600 mt-6">
            型号说明：{relatedHint}，资料整理自品牌公开产品信息。
          </p>
        </div>
      </div>
    </div>
  );
}
