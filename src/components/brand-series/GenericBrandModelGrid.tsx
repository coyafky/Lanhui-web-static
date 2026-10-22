import type { VehicleTheme } from "@/components/vehicle-page";

const THEME_CARD_BORDER: Record<VehicleTheme, string> = {
  orange: "border-orange-500/20 hover:border-orange-500/40",
  cyan: "border-cyan-500/20 hover:border-cyan-500/40",
  amber: "border-amber-500/20 hover:border-amber-500/40",
  blue: "border-blue-500/20 hover:border-blue-500/40",
  green: "border-emerald-500/20 hover:border-emerald-500/40",
  red: "border-red-500/20 hover:border-red-500/40",
  neutral: "border-zinc-700 hover:border-zinc-600",
};

export type BrandGridModel = {
  /** 适配库节名（主节，去品牌前缀后的原文） */
  name: string;
  /** 网格展示名（未传用 name） */
  display?: string;
  /** 车型深页 slug；缺省则链接到品牌页适配速查锚点 */
  slug?: string;
  projectCount: number;
  projectNames: string[];
};

interface Props {
  models: BrandGridModel[];
  theme: VehicleTheme;
  brandPath: string;
  heading?: string;
}

/** 通用品牌页车型网格：适配库收录车型一览，TOP 车型可进深页 */
export function GenericBrandModelGrid({ models, theme, brandPath, heading }: Props) {
  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {heading ?? "适配库收录车型"}
        </h2>
        <p className="text-sm text-zinc-500 mb-8">
          数据来自蓝辉供应商适配库（{models.length} 款车型），按车型年款对照适配
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((m) => {
            const href = m.slug ? `${brandPath}/${m.slug}` : `${brandPath}#brand-fitment`;
            return (
              <a
                key={m.name}
                href={href}
                className={`rounded-xl border bg-zinc-900 overflow-hidden transition-colors ${THEME_CARD_BORDER[theme]}`}
              >
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">{m.display ?? m.name}</h3>
                    <span className="shrink-0 text-xs text-zinc-500">{m.projectCount} 项</span>
                  </div>
                  {m.projectNames.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {m.projectNames.slice(0, 4).map((n) => (
                        <span key={n} className="px-2 py-0.5 text-xs rounded bg-zinc-800 text-zinc-400">
                          {n}
                        </span>
                      ))}
                      {m.projectNames.length > 4 && (
                        <span className="px-2 py-0.5 text-xs rounded bg-zinc-800/60 text-zinc-600">
                          +{m.projectNames.length - 4}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
