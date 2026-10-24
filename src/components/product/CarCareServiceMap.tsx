import Link from "next/link";
import { ArrowRight, Droplets } from "lucide-react";
import type { ServiceRoute } from "@/lib/product-routes";

type Props = { services: readonly ServiceRoute[] };

export function CarCareServiceMap({ services }: Props) {
  if (services.length === 0) return null;
  const service = services[0]!;
  return (
    <section className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/30">
      <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-500/10">
          <Droplets className="size-5 text-orange-300" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="mb-1 text-xs font-medium tracking-[0.18em] text-orange-400">CAR CARE · 洗美养护</p>
          <h3 className="text-xl font-semibold text-white md:text-2xl">{service.title}</h3>
          <p className="text-sm text-zinc-300 mt-1">
            提供洗车与内饰清洁等日常养护服务，具体项目可到店沟通。
          </p>
        </div>
        <Link href={service.canonicalPath} className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-orange-400/40 hover:text-orange-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">
          查看详情<ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
