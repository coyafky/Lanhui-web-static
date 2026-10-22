"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { openWeChatModal } from "@/lib/wechat-modal";
import type { ToyotaModelDetail } from "@/lib/toyota-model-detail";
import { toyotaModels } from "@/lib/toyota-model-groups";

/**
 * 丰田车型详情子页通用视图（PageSpec §4.2）。
 *
 * S0 Hero（车型名 + 覆盖项目数 + 主打需求标签）
 * S1 项目功能特性列表（项目卡：项目名 + 功能特性 + 适配年款）
 * S2 适配明细表（每项目：适用年款 | 材质 / 结构说明；型号不上页面）
 * S3 同系车型推荐（同分组车型卡）
 * S4 CTA
 */
export function ToyotaModelDetailView({
  slug,
  detail,
}: {
  slug: string;
  detail: ToyotaModelDetail;
}) {
  const current = toyotaModels.find((m) => m.slug === slug);
  const siblings = toyotaModels.filter(
    (m) => m.group === current?.group && m.slug !== slug,
  );
  const recommended = [
    ...siblings.filter((m) => m.subpage),
    ...siblings.filter((m) => !m.subpage),
  ].slice(0, 4);
  const yearsPerProject = detail.projects.map(
    (p) => [...new Set(p.rows.map((r) => r.year))].join(" / "),
  );

  return (
    <>
      {/* S0 Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-red-950/40 via-zinc-950 to-zinc-950">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <Link
            href="/product/toyota"
            className="inline-flex min-h-9 items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
          >
            <ArrowLeft className="size-4" aria-hidden />
            返回丰田全系页
          </Link>
          <h1 className="mt-4 max-w-2xl text-balance text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            丰田{detail.name} 适配件明细
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            覆盖 {detail.projects.length} 类项目
            {detail.projects.length > 0 && (
              <>
                ：{detail.projects.map((p) => p.name).join("、")}
              </>
            )}
            。按项目对照年款与材质，到店前把车型年款发来确认。
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {detail.projects.map((p) => (
              <span
                key={p.name}
                className="inline-flex items-center rounded-full bg-red-400/10 px-3 py-1 text-sm text-red-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]"
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* S1 项目功能特性列表 */}
      <section
        aria-labelledby="toyota-model-projects-title"
        className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs tracking-widest mb-3 text-red-400 uppercase">
              能装什么
            </p>
            <h2
              id="toyota-model-projects-title"
              className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
            >
              每个项目是做什么的
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {detail.projects.map((p, idx) => (
              <article
                key={p.name}
                className="flex flex-col rounded-3xl bg-zinc-900/60 p-5 sm:p-6 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
              >
                <h3 className="text-lg font-bold text-white">{p.name}</h3>
                <p className="mt-3 flex-1 text-base text-zinc-400 leading-relaxed text-pretty">
                  {p.feature}
                </p>
                <p className="mt-4 border-t border-white/[0.05] pt-3 text-xs text-zinc-500">
                  适配：{yearsPerProject[idx] || "按年款到店确认"}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* S2 适配明细表 */}
      <section
        aria-labelledby="toyota-model-detail-title"
        className="py-16 sm:py-20 bg-black border-t border-white/[0.05]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs tracking-widest mb-3 text-red-400 uppercase">
              按年款对照
            </p>
            <h2
              id="toyota-model-detail-title"
              className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
            >
              {detail.name} 适配明细
            </h2>
            <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
              适用年款与材质说明；具体型号编号留档门店对表，到店确认。
            </p>
          </div>

          <div className="space-y-8">
            {detail.projects.map((p) => (
              <div
                key={p.name}
                className="rounded-3xl bg-zinc-900/60 p-5 sm:p-6 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
              >
                <h3 className="text-lg font-bold text-white">{p.name}</h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[28rem] border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-white/[0.08] text-left">
                        <th scope="col" className="py-2.5 pr-4 font-semibold text-zinc-300">
                          适用年款
                        </th>
                        <th scope="col" className="py-2.5 font-semibold text-zinc-300">
                          材质 / 结构说明
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {p.rows.map((r, idx) => (
                        <tr
                          key={`${p.name}-${idx}`}
                          className="border-b border-white/[0.04] last:border-b-0"
                        >
                          <td className="py-3 pr-4 align-top text-zinc-300 tabular-nums whitespace-nowrap">
                            {r.year}
                          </td>
                          <td className="py-3 align-top text-zinc-400 leading-relaxed text-pretty">
                            {r.note}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs text-zinc-500 leading-relaxed">
            适装信息供参考，实际安装以门店现场检查（车型年款、座椅布局、底盘结构、电路走向）为准。
            同一车型不同配置对应型号可能不同，请按实车确认。
          </p>
        </div>
      </section>

      {/* S3 同系车型推荐 */}
      <section
        aria-labelledby="toyota-model-siblings-title"
        className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs tracking-widest mb-3 text-red-400 uppercase">
              同系车型
            </p>
            <h2
              id="toyota-model-siblings-title"
              className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
            >
              同系的其他丰田车型
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {recommended.map((m) => (
              <Link
                key={m.slug}
                href={m.subpage ? `/product/toyota/${m.slug}` : "/product/toyota#toyota-models"}
                className="group flex flex-col rounded-2xl bg-zinc-900/60 p-5 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] transition-colors hover:bg-zinc-900/80"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-bold text-white">{m.name}</h3>
                  <span className="shrink-0 rounded-full bg-white/[0.06] px-2.5 py-0.5 text-xs text-zinc-300">
                    {m.projects.length} 类
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-400 text-pretty flex-1">
                  {m.projects.join(" · ")}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-red-400 group-hover:text-red-300">
                  {m.subpage ? "查看明细" : "返回品牌页"}
                  <ArrowRight className="size-4" aria-hidden />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S4 CTA */}
      <section
        aria-labelledby="toyota-model-cta-title"
        className="py-16 sm:py-20 bg-black border-t border-white/[0.05]"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto mb-6 flex justify-center">
            <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-red-400/10 text-red-300">
              <ShieldCheck className="size-7" aria-hidden />
            </span>
          </div>
          <h2
            id="toyota-model-cta-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            {detail.name} 车主，拿不准装哪款
          </h2>
          <p className="mt-4 text-zinc-400 text-base leading-relaxed text-pretty">
            把车型、年款、动力版本发来，我们按适装表先筛一遍，再约到店检查实车。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <button
              type="button"
              onClick={() => openWeChatModal()}
              className="inline-flex min-h-12 select-none items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-7 text-base font-semibold text-white shadow-lg shadow-red-500/20 transition-transform active:scale-[0.96]"
            >
              <MessageCircle className="size-4" aria-hidden />
              咨询适配
            </button>
            <Link
              href="/product/toyota"
              className="inline-flex min-h-12 select-none items-center justify-center gap-2 rounded-full bg-white/[0.04] px-6 text-base font-medium text-zinc-200 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-colors hover:bg-white/[0.08] active:scale-[0.96]"
            >
              <ArrowLeft className="size-4" aria-hidden />
              返回丰田全系页
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
