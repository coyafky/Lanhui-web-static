import Image from "next/image";
import type { ProjectConfig, VehicleTheme } from "./vehicle-page.schema";

const THEME_CARD_BORDER: Record<VehicleTheme, string> = {
  orange: "border-orange-500/20 hover:border-orange-500/40",
  cyan: "border-cyan-500/20 hover:border-cyan-500/40",
  amber: "border-amber-500/20 hover:border-amber-500/40",
  blue: "border-blue-500/20 hover:border-blue-500/40",
  green: "border-emerald-500/20 hover:border-emerald-500/40",
  red: "border-red-500/20 hover:border-red-500/40",
  neutral: "border-zinc-700 hover:border-zinc-600",
};

/** 车型 badge 边框：SU7/YU7 用主题色，双车型用中性色；文字统一白色 */
const THEME_BADGE_BORDER: Record<VehicleTheme, string> = {
  orange: "border-orange-500/50",
  cyan: "border-cyan-500/50",
  amber: "border-amber-500/50",
  blue: "border-blue-500/50",
  green: "border-emerald-500/50",
  red: "border-red-500/50",
  neutral: "border-zinc-500/50",
};

/** 1x1 灰图 base64 placeholder */
const BLUR_DATA_URL =
  "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/v3AgAA=";

interface Props {
  projects: ProjectConfig[];
  theme: VehicleTheme;
  /** 项目区 H2（问答式文案），缺省回退「升级项目」 */
  heading?: string;
}

/** 车型 badge chip：SU7/YU7 白色文字 + 主题色边框；双车型中性色 */
function modelBadgeClass(modelBadge: NonNullable<ProjectConfig["modelBadge"]>, theme: VehicleTheme) {
  if (modelBadge === "双车型") {
    return "border-zinc-500/50 text-zinc-300 bg-zinc-800/60";
  }
  return `${THEME_BADGE_BORDER[theme]} text-white bg-zinc-800/60`;
}

function ProjectImage({ p }: { p: ProjectConfig }) {
  if (!p.imagePublicPath) return null;

  return (
    <div className="relative aspect-[4/3] mb-4 rounded-lg overflow-hidden bg-zinc-800">
      <Image
        src={p.imagePublicPath}
        alt={p.imageAlt ?? p.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
      {p.imageStatus && p.imageStatus !== "matched" && (
        <span className="absolute top-2 right-2 px-2 py-0.5 text-xs rounded bg-amber-900/80 text-amber-400 border border-amber-700/50">
          {p.imageStatus === "product-preview" ? "预览图" : "待复核"}
        </span>
      )}
    </div>
  );
}

export function ProjectGrid({ projects, theme, heading }: Props) {
  return (
    <section className="py-16 md:py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">{heading ?? "升级项目"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`rounded-xl border bg-zinc-900 overflow-hidden transition-colors ${THEME_CARD_BORDER[theme]}`}
            >
              <ProjectImage p={p} />
              <div className="p-5 pt-0">
                {p.imagePublicPath && <div className="h-0" />}
                {/* 图注：图片下方可见文本（同时存在图片与图注时渲染，不能只放 alt） */}
                {p.imagePublicPath && p.imageCaption && (
                  <p className="text-xs text-zinc-500 mt-1.5 mb-2">{p.imageCaption}</p>
                )}
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                  {p.modelBadge && (
                    <span
                      className={`inline-flex items-center px-2 py-0.5 text-xs rounded-full border ${modelBadgeClass(p.modelBadge, theme)}`}
                    >
                      {p.modelBadge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-400 mb-3">{p.summary}</p>
                {p.suitableFor.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {p.suitableFor.map((s) => (
                      <span key={s} className="px-2 py-0.5 text-xs rounded bg-zinc-800 text-zinc-400">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
                {p.caution && (
                  <p className="mt-3 text-xs text-amber-400">⚠ {p.caution}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
