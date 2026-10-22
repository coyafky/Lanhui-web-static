import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Building2,
  Factory,
  Award,
  ShieldCheck,
  Lightbulb,
  Network,
  ArrowRight,
  Phone,
  Package,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  group,
  groupMilestones,
  groupHonors,
  groupCredentials,
  groupPatents,
  groupAdvantages,
  groupChain,
  groupMarkets,
  groupProducts,
} from "@/lib/group";

export const metadata: Metadata = {
  alternates: { canonical: "/brand/group" },
  title: "集团介绍 | 贵州蓝辉集团 · 蓝辉轻改",
  description:
    "贵州蓝辉集团是蓝辉轻改的制造母体，2019 年成立于遵义。国家高新技术企业、省级专精特新，年产改装轮毂 100 万只、新能源核心零部件 50 万套，从铝材料到轮毂一体化制造。",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "贵州蓝辉集团",
  alternateName: ["贵州蓝辉新材料有限公司", "蓝辉集团"],
  foundingDate: "2019",
  address: {
    "@type": "PostalAddress",
    addressLocality: "遵义",
    addressRegion: "贵州",
    addressCountry: "CN",
  },
  areaServed: ["中国", "欧洲", "澳洲", "北美洲"],
  hasCredential: [
    "国家高新技术企业",
    "贵州省专精特新中小企业",
    "装备承制单位资格",
    "IATF16949",
  ],
  knowsAbout: ["汽车轮毂", "新能源汽车核心零部件", "特种合金材料", "电动踏板"],
};

export default function GroupPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />

        {/* Hero */}
        <section className="relative bg-zinc-950 text-white overflow-hidden">
          <div className="absolute inset-0" aria-hidden>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-zinc-950 to-zinc-950" />
            <div className="absolute -top-32 left-1/3 w-96 h-96 rounded-full bg-blue-700/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-orange-500/15 blur-3xl" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14 md:pt-28 md:pb-16 text-center">
            <nav className="flex items-center justify-center text-sm text-zinc-500 mb-6">
              <Link href="/brand" className="hover:text-white transition-colors">
                品牌介绍
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-zinc-300">集团介绍</span>
            </nav>
            <p className="text-sm tracking-widest text-blue-400 mb-3">
              GUIZHOU LANHUI GROUP
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">贵州蓝辉集团</h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
              {group.role} · {group.foundedYear} 年成立 · {group.city}
            </p>
            <p className="inline-flex items-center gap-2 text-orange-300 border border-orange-500/30 bg-orange-500/10 rounded-full px-4 py-1.5 text-sm">
              <Lightbulb className="w-4 h-4" />
              {group.tagline}
            </p>
          </div>
        </section>

        {/* 概览 + 产能 */}
        <section aria-labelledby="overview-title" className="py-16 md:py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-sm text-blue-400 font-medium uppercase tracking-widest mb-3">Overview</p>
              <h2 id="overview-title" className="text-3xl md:text-4xl font-bold text-white">
                集团概览
              </h2>
            </div>
            <div className="max-w-3xl mx-auto text-zinc-300 leading-relaxed text-base md:text-lg space-y-4 mb-12">
              <p>
                贵州蓝辉集团是蓝辉轻改的制造母体，2019 年成立于遵义市红花岗区，是国家高新技术企业、省级“专精特新”中小企业，控股贵州蓝辉新材料、贵州航鹏新材料、遵义华鸿精密三家公司。
              </p>
              <p>
                公司依托遵义铝资源优势，响应贵州省“富矿精开”政策，聚焦新能源汽车核心零部件精密制造与特种合金材料研发生产，已建成从材料生产、模具开发、精密铸造到精深加工、成品的完整产业链。
              </p>
            </div>

            {/* 产能三连卡 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              {group.capacity.map((c) => (
                <div key={c.label} className="bg-zinc-900 rounded-2xl border border-white/5 p-6 md:p-8 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{c.value}</div>
                  <div className="text-sm text-zinc-400">{c.label}</div>
                </div>
              ))}
            </div>

            {/* 高亮徽章 */}
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {group.highlights.map((h) => (
                <span key={h} className="inline-flex items-center gap-2 text-sm text-zinc-300 bg-zinc-900 border border-white/10 rounded-full px-4 py-2">
                  <Award className="w-4 h-4 text-orange-400" />
                  {h}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 大事记 */}
        <section aria-labelledby="milestones-title" className="py-16 md:py-20 bg-black border-t border-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm text-orange-400 font-medium uppercase tracking-widest mb-3">Milestones</p>
              <h2 id="milestones-title" className="text-3xl md:text-4xl font-bold text-white">
                发展大事记
              </h2>
            </div>
            <ol className="relative">
              <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-blue-700/40 via-zinc-800 to-orange-700/40" aria-hidden />
              {groupMilestones.map((m) => (
                <li key={`${m.year}-${m.title}`} className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8 mb-10 last:mb-0">
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 shadow-lg shadow-blue-900/50" aria-hidden />
                  <div className="md:pr-10 md:text-right">
                    <div className="text-xs text-zinc-500 mb-1">
                      <span className="text-blue-400 font-semibold tracking-wider">{m.year}</span>
                      {m.month && <span className="text-zinc-600"> · {m.month}</span>}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1.5">{m.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{m.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 荣誉墙 */}
        <section aria-labelledby="honors-title" className="py-16 md:py-20 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm text-blue-400 font-medium uppercase tracking-widest mb-3">Honors</p>
              <h2 id="honors-title" className="text-3xl md:text-4xl font-bold text-white">
                蓝辉荣誉
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
              {groupHonors.map((h) => (
                <figure key={h.title} className="bg-zinc-900 rounded-2xl border border-white/5 p-3 md:p-4 hover:border-white/10 transition-colors">
                  <img
                    src={h.image}
                    alt={`${h.title}证书`}
                    loading="lazy"
                    className="w-full h-auto rounded-lg bg-white object-contain"
                  />
                  <figcaption className="mt-3 text-center">
                    <div className="text-sm font-semibold text-white">{h.title}</div>
                    {h.issuer && <div className="text-xs text-zinc-500 mt-1">{h.issuer}</div>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 资质与专利 */}
        <section aria-labelledby="credentials-title" className="py-16 md:py-20 bg-black border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm text-orange-400 font-medium uppercase tracking-widest mb-3">Credentials</p>
              <h2 id="credentials-title" className="text-3xl md:text-4xl font-bold text-white">
                资质与专利
              </h2>
            </div>

            {/* 4 张资质证书 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14">
              {groupCredentials.map((c) => (
                <figure key={c.title} className="bg-zinc-900 rounded-2xl border border-white/5 p-3 hover:border-white/10 transition-colors">
                  <img
                    src={c.image}
                    alt={`${c.title}`}
                    loading="lazy"
                    className="w-full h-auto rounded-lg bg-white object-contain"
                  />
                  <figcaption className="mt-3 text-center">
                    <div className="text-sm font-semibold text-white">{c.title}</div>
                    <div className="text-xs text-zinc-500 mt-1 leading-relaxed">{c.note}</div>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* 体系认证 + 专利计数 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-5xl mx-auto">
              <div className="bg-zinc-900 rounded-2xl border border-white/5 p-6 md:p-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  体系认证
                </h3>
                <div className="flex flex-wrap gap-2">
                  {groupPatents.systems.map((s) => (
                    <span key={s} className="text-sm text-zinc-300 bg-zinc-800 border border-white/10 rounded-full px-3 py-1.5">{s}</span>
                  ))}
                </div>
                <p className="text-xs text-zinc-500 mt-4">
                  已获中央军委装备发展部武器装备承制资格，通过武器装备、国军标质量管理体系认证。
                </p>
              </div>
              <div className="bg-zinc-900 rounded-2xl border border-white/5 p-6 md:p-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-orange-400" />
                  知识产权
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {groupPatents.counts.map((c) => (
                    <div key={c.label} className="text-center">
                      <div className="text-2xl font-bold text-white">{c.value}</div>
                      <div className="text-xs text-zinc-500 mt-1">{c.label}</div>
                    </div>
                  ))}
                </div>
                <img
                  src={groupPatents.wallImage}
                  alt="专利证书墙"
                  loading="lazy"
                  className="w-full h-auto rounded-lg mt-5 bg-white object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 核心优势 */}
        <section aria-labelledby="advantages-title" className="py-16 md:py-20 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm text-blue-400 font-medium uppercase tracking-widest mb-3">Advantages</p>
              <h2 id="advantages-title" className="text-3xl md:text-4xl font-bold text-white">
                为什么选蓝辉
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {groupAdvantages.map((a) => (
                <div key={a.index} className="bg-zinc-900 rounded-2xl border border-white/5 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-9 h-9 rounded-xl bg-blue-950/40 border border-blue-800/50 text-blue-400 flex items-center justify-center font-bold">
                      {a.index}
                    </span>
                    <h3 className="text-lg font-bold text-white">{a.title}</h3>
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 产业链 */}
        <section aria-labelledby="chain-title" className="py-16 md:py-20 bg-black border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm text-orange-400 font-medium uppercase tracking-widest mb-3">Value Chain</p>
              <h2 id="chain-title" className="text-3xl md:text-4xl font-bold text-white">
                产业链布局
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
                材料 → 模具 → 铸造 → 精深加工 → 产品，完整闭环
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {groupChain.map((c, i) => (
                <div key={c.company} className="relative bg-zinc-900 rounded-2xl border border-white/5 p-5 md:p-6 text-center">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/40 border border-blue-800/50 text-blue-400 flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-semibold text-white mb-1.5">{c.step}</div>
                  <div className="text-xs text-zinc-500 leading-relaxed">{c.company}</div>
                  {i < groupChain.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -right-5 w-5 h-5 text-zinc-700 -translate-y-1/2" aria-hidden />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 朋友圈 */}
        <section aria-labelledby="markets-title" className="py-16 md:py-20 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm text-blue-400 font-medium uppercase tracking-widest mb-3">Network</p>
              <h2 id="markets-title" className="text-3xl md:text-4xl font-bold text-white">
                蓝辉的朋友圈
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="bg-zinc-900 rounded-2xl border border-white/5 p-6 md:p-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Network className="w-5 h-5 text-blue-400" />
                  国内市场
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {groupMarkets.domestic.map((m) => (
                    <span key={m} className="text-sm text-zinc-300 bg-zinc-800 border border-white/10 rounded-full px-3 py-1.5">{m}</span>
                  ))}
                </div>
                <h4 className="text-sm font-semibold text-zinc-300 mb-2">海外市场</h4>
                <div className="flex flex-wrap gap-2">
                  {groupMarkets.overseas.map((m) => (
                    <span key={m} className="text-sm text-zinc-300 bg-zinc-800 border border-white/10 rounded-full px-3 py-1.5">{m}</span>
                  ))}
                </div>
              </div>
              <div className="bg-zinc-900 rounded-2xl border border-white/5 p-6 md:p-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-orange-400" />
                  合作企业
                </h3>
                <div className="flex flex-wrap gap-2">
                  {groupMarkets.partners.map((p) => (
                    <span key={p} className="text-sm text-zinc-300 bg-zinc-800 border border-white/10 rounded-full px-3 py-1.5">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 产品矩阵 */}
        <section aria-labelledby="products-title" className="py-16 md:py-20 bg-black border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm text-orange-400 font-medium uppercase tracking-widest mb-3">Products</p>
              <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-white">
                集团产品
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
              {groupProducts.map((p) => (
                <Link key={p.title} href={p.href} className="group bg-zinc-900 rounded-2xl border border-white/5 p-6 md:p-7 hover:border-white/10 hover:bg-white/[0.06] transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    {p.tag && (
                      <span className="text-xs text-blue-300 bg-blue-950/40 border border-blue-800/50 rounded-full px-2.5 py-0.5">{p.tag}</span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{p.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-blue-400 mt-4 group-hover:gap-2 transition-all">
                    了解详情 <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 回到门店 CTA */}
        <section aria-labelledby="cta-title" className="py-16 md:py-20 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-title" className="text-2xl md:text-3xl font-bold text-white mb-4">
              集团的产品，在门店等你装
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              蓝辉轻改顺德大良店承接集团轮毂、电动踏板等产品的到店评估与安装，
              <br />
              到店沟通 → 车型确认 → 方案推荐 → 施工交付。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:18825425068"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-zinc-950 font-semibold rounded-full px-7 py-3 transition-colors"
              >
                <Phone className="w-5 h-5" />
                188 2542 5068
              </a>
              <Link
                href="/brand"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white rounded-full px-7 py-3 transition-colors"
              >
                回到品牌介绍
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
