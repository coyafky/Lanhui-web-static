import type { ComplianceConfig, VehicleTheme } from "./vehicle-page.schema";

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
  config: ComplianceConfig;
  theme: VehicleTheme;
}

/**
 * 合规告知块：改装合规 / 法规提示 / 免责说明
 * items 逐条渲染：title 加粗 + description 小字。
 */
export function ComplianceNotice({ config, theme }: Props) {
  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-3">
          <span className={`w-12 h-1 rounded-full mb-4 ${THEME_ACCENT_BAR[theme]}`} />
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center">{config.heading}</h2>
        </div>
        {config.intro && (
          <p className="text-center text-sm text-zinc-500 mb-8 leading-relaxed">{config.intro}</p>
        )}

        <div className="space-y-3">
          {config.items.map((item, i) => (
            <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
              <h3 className="text-white font-semibold mb-1.5">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
