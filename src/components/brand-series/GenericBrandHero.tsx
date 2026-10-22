import type { BreadcrumbItemConfig, VehicleTheme } from "@/components/vehicle-page";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrandSeriesHeroVisual } from "@/components/brand-series/BrandSeriesHeroVisual";

const THEME_BADGE: Record<VehicleTheme, string> = {
  orange: "border-orange-600/60 bg-orange-500/10 text-orange-400",
  cyan: "border-cyan-600/60 bg-cyan-500/10 text-cyan-400",
  amber: "border-amber-600/60 bg-amber-500/10 text-amber-400",
  blue: "border-blue-600/60 bg-blue-500/10 text-blue-400",
  green: "border-emerald-600/60 bg-emerald-500/10 text-emerald-400",
  red: "border-red-600/60 bg-red-500/10 text-red-400",
  neutral: "border-zinc-600 bg-zinc-700/40 text-zinc-300",
};

const THEME_GLOW: Record<VehicleTheme, string> = {
  orange: "from-orange-950/30 via-zinc-950 to-zinc-950",
  cyan: "from-cyan-950/30 via-zinc-950 to-zinc-950",
  amber: "from-amber-950/30 via-zinc-950 to-zinc-950",
  blue: "from-blue-950/40 via-zinc-950 to-zinc-950",
  green: "from-emerald-950/30 via-zinc-950 to-zinc-950",
  red: "from-red-950/30 via-zinc-950 to-zinc-950",
  neutral: "from-zinc-900 via-zinc-950 to-zinc-950",
};

const THEME_STAT_BORDER: Record<VehicleTheme, string> = {
  orange: "border-orange-500/30",
  cyan: "border-cyan-500/30",
  amber: "border-amber-500/30",
  blue: "border-blue-500/30",
  green: "border-emerald-500/30",
  red: "border-red-500/30",
  neutral: "border-zinc-700",
};

export type BrandHeroStats = {
  models?: number;
  projects?: number;
};

interface Props {
  breadcrumbItems?: BreadcrumbItemConfig[];
  badge: string;
  title: string;
  subtitle: string;
  description?: string;
  theme: VehicleTheme;
  stats?: BrandHeroStats;
  heroImage?: { src: string; alt: string } | null;
}

/** 通用品牌系列 Hero：面包屑 + 徽标 + 标题 + 统计 + 可选主视觉 */
export function GenericBrandHero({
  breadcrumbItems,
  badge,
  title,
  subtitle,
  description,
  theme,
  stats,
  heroImage,
}: Props) {
  const hasImage = !!heroImage;
  return (
    <>
      {breadcrumbItems && breadcrumbItems.length > 0 && (
        <div className="pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Breadcrumbs
            items={breadcrumbItems.map((b) => ({ label: b.label, href: b.href ?? "#" }))}
          />
        </div>
      )}
      <section className="relative bg-zinc-950 text-white overflow-hidden">
        <div className="absolute inset-0 -z-0" aria-hidden>
          <div className={`absolute inset-0 bg-gradient-to-br ${THEME_GLOW[theme]}`} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 md:pt-20 md:pb-16">
          <div className={`grid ${hasImage ? "grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center" : ""}`}>
            <div>
              <p
                className={`inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border text-xs tracking-widest ${THEME_BADGE[theme]}`}
              >
                {badge}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
              <p className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed mb-6">
                {subtitle}
              </p>
              {description && (
                <p className="text-sm text-zinc-500 max-w-xl leading-relaxed mb-6">
                  {description}
                </p>
              )}
              {stats && (stats.models !== undefined || stats.projects !== undefined) && (
                <div className="flex flex-wrap gap-3">
                  {stats.models !== undefined && (
                    <div className={`rounded-lg border ${THEME_STAT_BORDER[theme]} bg-zinc-900/70 px-4 py-2.5`}>
                      <p className="text-2xl font-bold text-white">{stats.models}</p>
                      <p className="text-xs text-zinc-500">款车型</p>
                    </div>
                  )}
                  {stats.projects !== undefined && (
                    <div className={`rounded-lg border ${THEME_STAT_BORDER[theme]} bg-zinc-900/70 px-4 py-2.5`}>
                      <p className="text-2xl font-bold text-white">{stats.projects}</p>
                      <p className="text-xs text-zinc-500">项适配件</p>
                    </div>
                  )}
                </div>
              )}
            </div>
            {heroImage && <BrandSeriesHeroVisual image={heroImage} />}
          </div>
        </div>
      </section>
    </>
  );
}
