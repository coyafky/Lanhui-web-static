import Link from "next/link";
import { Armchair, Ruler, ShieldCheck } from "lucide-react";

const checks = [[Armchair, "座椅结构"], [Ruler, "展开空间"], [ShieldCheck, "固定与保护"]] as const;
export function TrayTableCta() {
  return <section id="tray-table-cta" className="relative overflow-hidden bg-amber-500 py-16 text-zinc-950 sm:py-20"><div className="absolute -right-24 -top-32 size-96 rounded-full bg-white/20 blur-3xl" aria-hidden /><div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700">预约车型评估</p><div className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end"><div><h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl">先确认车型，再确定小桌板方案</h2><p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-800">提交品牌、车型、年款、座椅配置和使用场景，门店会根据实车条件进一步确认。</p><Link href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white transition hover:bg-zinc-800">提交车型信息</Link></div><div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">{checks.map(([Icon, label]) => <div key={label} className="flex items-center gap-3 rounded-2xl bg-black/10 p-4"><Icon className="size-5" aria-hidden /><span className="text-sm font-semibold">现场逐项确认 {label}</span></div>)}</div></div></div></section>;
}
