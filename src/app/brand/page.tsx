import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Factory, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { brand } from "@/lib/brand";
import { brandValues } from "@/lib/brand-values";
import { group } from "@/lib/group";

export const metadata: Metadata = {
  alternates: { canonical: "/brand" },
  title: "品牌介绍 | 蓝辉轻改 LANHUI",
  description:
    "蓝辉轻改成立于 2026 年，从顺德大良出发，专注汽车轻改装与膜类服务，提供兼顾颜值、功能与保护的升级方案。",
};

export default function BrandPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col">
        {/* Hero */}
        <section
          aria-labelledby="brand-hero-title"
          className="relative bg-zinc-950 text-white overflow-hidden"
        >
          <div className="absolute inset-0" aria-hidden>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-zinc-950 to-zinc-950" />
            <div className="absolute -top-32 left-1/3 w-96 h-96 rounded-full bg-blue-700/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-orange-500/15 blur-3xl" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20 text-center">
            <p className="text-sm tracking-widest text-orange-400 mb-3">ABOUT</p>
            <h1
              id="brand-hero-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            >
              品牌介绍
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto">
              {brand.zh} {brand.en} · {brand.foundedYear} 年成立
            </p>
          </div>
        </section>

        {/* 集团背书条 */}
        <section
          aria-labelledby="group-endorse-title"
          className="py-10 md:py-12 bg-zinc-950 border-t border-zinc-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-zinc-900 rounded-2xl border border-white/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
              <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-xl flex items-center justify-center">
                <Factory className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2
                  id="group-endorse-title"
                  className="text-lg md:text-xl font-bold text-white mb-1.5"
                >
                  背靠{group.name}：你装的产品，来自我们自己工厂
                </h2>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                  {group.foundedYear} 年成立 · {group.city} · 国家高新技术企业 ·
                  年产改装轮毂 {group.capacity[0].value}、新能源核心零部件{" "}
                  {group.capacity[1].value}
                </p>
              </div>
              <Link
                href="/brand/group"
                className="inline-flex items-center justify-center gap-2 shrink-0 text-sm text-blue-400 hover:text-blue-300 border border-blue-800/50 bg-blue-950/40 rounded-full px-5 py-2.5 transition-colors"
              >
                了解集团
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          aria-labelledby="about-title"
          className="py-16 md:py-20 bg-zinc-950"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <p className="text-sm text-blue-400 font-medium uppercase tracking-widest mb-3">
                About {brand.en}
              </p>
              <h2
                id="about-title"
                className="text-3xl md:text-4xl font-bold text-white"
              >
                关于蓝辉轻改
              </h2>
            </div>
            <div className="space-y-5 md:space-y-6 text-zinc-300 leading-relaxed text-base md:text-lg">
              <p>
                蓝辉轻改（{brand.en}）是一家面向汽车轻改装与汽车膜服务的品牌，于
                <span className="text-orange-400 font-semibold mx-1">
                  {brand.foundedYear} 年
                </span>
                成立，从
                <span className="text-blue-400 font-semibold mx-1">
                  顺德大良
                </span>
                出发。
              </p>
              <p>
                我们的目标很简单：为车主提供兼顾颜值、功能与漆面保护的升级方案。无论是电动踏板、轮毂升级、底盘升级这样的轻改装备，还是汽车窗膜、改色膜、隐形车衣这样的汽车膜系服务，蓝辉轻改都希望让流程更清晰、交付更稳妥。
              </p>
              <p>
                当前阶段，我们以
                <span className="text-blue-400 font-semibold mx-1">
                  {brand.currentStore}
                </span>
                为线下服务中心，强调到店沟通、车型确认、规范施工与交付。更多城市门店正在筹备中。
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section
          aria-labelledby="values-title"
          className="py-16 md:py-20 bg-black border-t border-zinc-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2
                id="values-title"
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                品牌理念
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                我们相信&ldquo;轻量、实用、有审美&rdquo;的升级方式更适合大多数车主。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {brandValues.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-zinc-900 p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/[0.06] transition-colors motion-reduce:transition-none"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-950/40 border border-blue-800/50 text-blue-400 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 起点 */}
        <section
          aria-labelledby="origin-title"
          className="py-16 md:py-20 bg-zinc-950 border-t border-zinc-900"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2
                id="origin-title"
                className="text-3xl md:text-4xl font-bold text-white"
              >
                发展起点
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-zinc-900 p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/[0.06] transition-colors motion-reduce:transition-none">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-orange-400" />
                  <span className="text-orange-400 text-sm tracking-widest">
                    {brand.foundedYear}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">品牌成立</h3>
                <p className="text-zinc-400 leading-relaxed">
                  从轻改装与膜系服务双线切入，覆盖电动踏板、轮毂、底盘、窗膜、改色膜、隐形车衣，一站式交付。
                </p>
                <p className="text-xs text-zinc-600 mt-3">
                  轻改装备由{group.name}工厂自研自造。
                </p>
              </div>
              <div className="bg-zinc-900 p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/[0.06] transition-colors motion-reduce:transition-none md:mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span className="text-blue-400 text-sm tracking-widest">
                    SHUNDE
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">顺德大良店启航</h3>
                <p className="text-zinc-400 leading-relaxed">
                  目前可到 {brand.currentStore} 沟通方案，门店提供施工交付与售后跟进。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
