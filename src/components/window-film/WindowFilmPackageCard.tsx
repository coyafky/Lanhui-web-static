import Link from "next/link";
import { ArrowRight, Shield, Sun } from "lucide-react";
import type { WindowFilmPackageDetails } from "@/lib/window-film-details";
import type { ProductPackage } from "@/lib/products";

type Props = {
  pkg: ProductPackage;
  details: WindowFilmPackageDetails;
  /** 主推卡片用橙色 CTA，次要卡片用安静的文字箭头 */
  variant?: "featured" | "secondary";
  /** 套餐名下方的稳定定位标签 */
  positioningLabel?: string;
  /** 锚点 ID，用于场景选择器的滚动定位 */
  id?: string;
};

export function WindowFilmPackageCard({
  pkg,
  details,
  variant = "featured",
  positioningLabel,
  id,
}: Props) {
  const isFeatured = variant === "featured";

  return (
    <article
      id={id}
      className={`group relative flex flex-col rounded-2xl border transition-all overflow-hidden ${
        isFeatured
          ? "bg-zinc-900/60 border-white/[0.06] hover:border-orange-500/40"
          : "bg-zinc-900/30 border-white/[0.04] hover:border-white/[0.08]"
      }`}
    >
      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        {/* 套餐名 + 定位标签 */}
        <div className="mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
            {positioningLabel && (
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  isFeatured
                    ? "bg-orange-400/10 text-orange-300 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
                    : "bg-zinc-800 text-zinc-400"
                }`}
              >
                {positioningLabel}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
            {details.positioning}
          </p>
        </div>

        {/* 搭配速览 */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="rounded-lg bg-zinc-950/60 border border-white/[0.05] p-3">
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
              前挡
            </p>
            <p className="text-sm font-medium text-white leading-tight">
              {pkg.frontProduct}
            </p>
          </div>
          <div className="rounded-lg bg-zinc-950/60 border border-white/[0.05] p-3">
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
              侧后挡
            </p>
            <p className="text-sm font-medium text-white leading-tight">
              {pkg.rearProduct}
            </p>
          </div>
        </div>

        {/* 关键参数（仅前 2 项） */}
        <div className="grid grid-cols-2 gap-2 mb-5 text-xs">
          <div className="flex items-center gap-1.5 text-zinc-300">
            <Sun className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
            <span>TSER 前 {extractFirstPercent(pkg.frontParams, "TSER")}</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-300">
            <Shield className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
            <span>质保 {pkg.warranty}</span>
          </div>
        </div>

        {/* CTA */}
        {isFeatured ? (
          <Link
            href={`/product/window-film/${pkg.slug}`}
            className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 shadow-lg shadow-orange-500/20 transition-all duration-300 group-hover:scale-[1.02]"
          >
            查看套餐详情
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        ) : (
          <Link
            href={`/product/window-film/${pkg.slug}`}
            className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
          >
            查看套餐详情
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        )}
      </div>
    </article>
  );
}

/** 从 `可见光阻隔率 30%；紫外线阻隔率 99%...` 字符串中抽取指定字段的第一个百分比。 */
function extractFirstPercent(params: string, label: string): string {
  const idx = params.indexOf(label);
  if (idx < 0) return "\u2014";
  const tail = params.slice(idx + label.length);
  const match = tail.match(/(\d+(?:\s*-\s*\d+)?\s*%)/);
  return match ? match[1].replace(/\s+/g, "") : "\u2014";
}
