import Link from "next/link";
import { ChevronLeft, Shield, Sun } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";
import type { WindowFilmPackageFull } from "@/lib/window-film-details";

/**
 * 套餐详情页主体
 *
 * 只保留套餐搭配、产品特性与规格参数。
 */

type Props = {
  pkg: WindowFilmPackageFull;
  breadcrumbItems?: readonly BreadcrumbItem[];
};

export function WindowFilmPackageDetail({ pkg, breadcrumbItems }: Props) {
  const frontNote = pkg.parameterNotes.find((n) => n.position === "front");
  const rearNote = pkg.parameterNotes.find((n) => n.position === "rear");

  return (
    <main className="bg-zinc-950 text-white">
      {/* ====== Hero ====== */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 -z-0" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900" />
          <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full blur-3xl opacity-25 bg-orange-500" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          {/* Breadcrumb */}
          {breadcrumbItems && breadcrumbItems.length > 0 && (
            <Breadcrumbs items={breadcrumbItems} className="mb-6" />
          )}

          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            套餐详情
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">{pkg.name}</h1>
          <p className="mt-4 text-base md:text-lg text-zinc-300 max-w-3xl leading-relaxed">
            前挡采用 {pkg.frontProduct}，侧后挡采用 {pkg.rearProduct}。以下集中展示组合特性、膜材参数与质保信息。
          </p>

          {/* 搭配 + 质保速览 */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl bg-zinc-900/60 border border-white/5 p-4">
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1.5">
                前挡
              </p>
              <p className="text-sm font-semibold text-white">
                {pkg.frontProduct}
              </p>
            </div>
            <div className="rounded-xl bg-zinc-900/60 border border-white/5 p-4">
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1.5">
                侧后挡
              </p>
              <p className="text-sm font-semibold text-white">
                {pkg.rearProduct}
              </p>
            </div>
            <div className="rounded-xl bg-zinc-900/60 border border-white/5 p-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1.5">
                  质保
                </p>
                <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-orange-400" />
                  {pkg.warranty}
                </p>
              </div>
              <Sun className="w-6 h-6 text-orange-400/40" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* ====== 产品特性 ====== */}
      <section className="py-12 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            产品特性
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            前挡与侧后挡的组合特点
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {pkg.benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl bg-zinc-900/60 border border-white/5 p-5 sm:p-6"
              >
                <p className="text-base font-semibold text-white">{b.title}</p>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 产品规格 ====== */}
      <section className="py-12 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            产品规格
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            前挡与侧后挡参数
          </h2>

          {/* 桌面表格 */}
          <div className="mt-6 hidden sm:block overflow-x-auto rounded-xl border border-white/5">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="bg-orange-950/40 text-orange-300">
                  <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">
                    位置
                  </th>
                  <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">
                    产品
                  </th>
                  <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">
                    参数
                  </th>
                  <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">
                    用户理解
                  </th>
                </tr>
              </thead>
              <tbody>
                {pkg.parameterNotes.map((note, i) => (
                  <tr
                    key={note.position}
                    className={
                      i % 2 === 0 ? "bg-zinc-900/30" : "bg-zinc-950/30"
                    }
                  >
                    <td className="px-4 py-3 border-b border-zinc-800/60 text-zinc-200 align-top">
                      {note.position === "front" ? "前挡" : "侧后挡"}
                    </td>
                    <td className="px-4 py-3 border-b border-zinc-800/60 text-white align-top">
                      {note.product}
                    </td>
                    <td className="px-4 py-3 border-b border-zinc-800/60 text-zinc-300 text-xs leading-relaxed align-top">
                      {note.params}
                    </td>
                    <td className="px-4 py-3 border-b border-zinc-800/60 text-zinc-400 leading-relaxed align-top">
                      {note.userMeaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 移动端信息块 */}
          <div className="sm:hidden mt-6 space-y-3">
            {[frontNote, rearNote]
              .filter(Boolean)
              .map((note) => (
                <div
                  key={note!.position}
                  className="rounded-xl border border-white/5 bg-zinc-900/40 p-4"
                >
                  <p className="text-xs uppercase tracking-widest text-orange-400">
                    {note!.position === "front" ? "前挡" : "侧后挡"}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {note!.product}
                  </p>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                    {note!.params}
                  </p>
                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                    {note!.userMeaning}
                  </p>
                </div>
              ))}
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            注：当前资料口径下，前挡与侧后挡均按「可见光阻隔率」标注，
            与行业常见的可见光透过率 VLT 含义不同，以品牌资料为准。
          </p>
        </div>
      </section>

      {/* ====== 返回 ====== */}
      <section className="py-12 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/product/window-film"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-zinc-200 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            返回汽车窗膜
          </Link>
        </div>
      </section>
    </main>
  );
}
