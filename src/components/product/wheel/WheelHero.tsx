"use client";

import Image from "next/image";
import { ArrowDown, MessageCircle, Ruler, ShieldCheck, Gauge, Car } from "lucide-react";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/Breadcrumbs";
import { openWeChatModal } from "@/lib/wechat-modal";

const TRUST_TAGS = [
  { icon: Ruler, label: "原车数据匹配" },
  { icon: Car, label: "刹车间隙确认" },
  { icon: Gauge, label: "动平衡交付" },
  { icon: ShieldCheck, label: "扭矩复查" },
] as const;

export function WheelHero({
  breadcrumbItems,
}: {
  breadcrumbItems?: readonly BreadcrumbItem[];
}) {
  return (
    <section className="relative bg-zinc-950 text-white overflow-hidden">
      <div className="absolute inset-0 -z-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 bg-sky-600" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-10 bg-amber-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-28 lg:pb-20">
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />
        )}

        <div className="grid lg:grid-cols-[1fr_auto] lg:gap-12 items-center">
          {/* 左栏：文字 */}
          <div>
            <p className="inline-block text-xs tracking-widest mb-4 text-orange-400">
              WHEEL UPGRADE · 轮毂升级
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-tight">
              让轮毂，
              <br />
              决定整车侧面的气质
            </h1>
            <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed mb-3">
              先按车型确认尺寸与安装边界，再从辐条、颜色和工艺中选择适合整车气质的方案
            </p>
            <p className="text-sm text-zinc-400 max-w-xl leading-relaxed mb-8">
              施工前完成刹车空间、轮胎规格与胎压系统确认
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => openWeChatModal()}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 active:scale-[0.96] transition-transform sm:text-base"
              >
                <MessageCircle className="w-4 h-4" />
                输入车型，查看适配方向
              </button>
              <a
                href="#wheel-gallery"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white/[0.06] px-6 text-sm font-medium text-white shadow-[0_0_0_1px_oklch(1_0_0/0.1)] hover:bg-white/[0.1] active:scale-[0.96] transition-all sm:text-base"
              >
                先看真实上车案例
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* 信任标签 */}
            <div className="mt-8 flex flex-wrap gap-3">
              {TRUST_TAGS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-4 py-2 text-xs text-zinc-400 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
                >
                  <Icon className="w-3.5 h-3.5 text-orange-400/70" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* 整车侧面主视觉 */}
          <div className="mt-8 mb-6 flex items-center justify-center lg:mt-0 lg:mb-0">
            <div className="relative w-full aspect-[16/10] rounded-xl bg-zinc-900/80 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] overflow-hidden lg:w-[28rem] lg:aspect-[4/3] lg:rounded-2xl xl:w-[32rem]">
              <Image
                src="/images/producthero/wheels-hero.webp"
                alt="新能源轿车轮毂升级后的整车姿态"
                fill
                sizes="(max-width: 1023px) 100vw, (min-width: 1280px) 512px, 448px"
                className="object-cover"
                preload
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
