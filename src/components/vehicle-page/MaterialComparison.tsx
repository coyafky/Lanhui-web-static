import type { MaterialComparisonConfig, VehicleTheme } from "./vehicle-page.schema";

/** H2 主题色装饰条（参照 FaqSection 的 THEME_ACCENT 按主题取色思路） */
const THEME_ACCENT_BAR: Record<VehicleTheme, string> = {
  orange: "bg-orange-500",
  cyan: "bg-cyan-500",
  amber: "bg-amber-500",
  blue: "bg-blue-500",
  green: "bg-emerald-500",
  red: "bg-red-500",
  neutral: "bg-zinc-500",
};

interface Props {
  config: MaterialComparisonConfig;
  theme: VehicleTheme;
}

/**
 * 材质对比块：回答「不同材质手感 / 打理 / 耐用差在哪」
 * 表格：材质 | 质感 | 打理 | 耐用 | 典型项目（素材）；移动端横向滚动。
 */
export function MaterialComparison({ config, theme }: Props) {
  return (
    <section className="py-16 md:py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-3">
          <span className={`w-12 h-1 rounded-full mb-4 ${THEME_ACCENT_BAR[theme]}`} />
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center">{config.heading}</h2>
        </div>
        {config.intro && (
          <p className="text-center text-sm text-zinc-500 mb-8 leading-relaxed">{config.intro}</p>
        )}

        <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 text-left">
                <th className="px-4 py-3 font-medium">材质</th>
                <th className="px-4 py-3 font-medium">质感</th>
                <th className="px-4 py-3 font-medium">打理</th>
                <th className="px-4 py-3 font-medium">耐用</th>
                <th className="px-4 py-3 font-medium">典型项目（素材）</th>
              </tr>
            </thead>
            <tbody>
              {config.rows.map((row, i) => (
                <tr key={i} className="border-b border-zinc-800/60 last:border-b-0">
                  <td className="px-4 py-3 font-medium text-white">{row.material}</td>
                  <td className="px-4 py-3 text-zinc-300">{row.texture}</td>
                  <td className="px-4 py-3 text-zinc-300">{row.care}</td>
                  <td className="px-4 py-3 text-zinc-300">{row.durability}</td>
                  <td className="px-4 py-3 text-zinc-400">{row.typicalProjects}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
