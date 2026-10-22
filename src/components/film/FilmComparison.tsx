import Link from "next/link";
import { Shield, Palette, Sun } from "lucide-react";

type ComparisonRow = {
  dimension: string;
  ppf: string;
  color: string;
  window: string;
};

const ROWS: ComparisonRow[] = [
  {
    dimension: "解决什么",
    ppf: "保护原厂漆面：日常划痕、石子冲击、鸟粪树胶与耐候老化",
    color: "更换车身颜色与质感：亮光、哑光、幻彩、金属等方向",
    window: "隔热防晒、车内隐私与玻璃安全辅助",
  },
  {
    dimension: "主要材质",
    ppf: "TPU 脂肪族膜体，厚度 6.5–10mil",
    color: "PVC / TPU 色膜",
    window: "陶瓷膜 / 金属膜",
  },
  {
    dimension: "质保参考",
    ppf: "3–12 年，按所选系列",
    color: "3–5 年，按所选系列",
    window: "5–10 年，按所选套餐",
  },
  {
    dimension: "改色备案",
    ppf: "不涉及，透明保护层",
    color: "涉及车身颜色变更，需按当地交管规定办理备案",
    window: "不涉及",
  },
  {
    dimension: "适合谁",
    ppf: "新车、高价值车辆、计划长期持有",
    color: "追求个性外观与颜色表达",
    window: "怕晒、商务通勤、家庭用车",
  },
];

const LINKS = [
  {
    href: "/product/ppf",
    icon: Shield,
    title: "隐形车衣",
    desc: "透明保护原厂漆，查看 6 款产品线对比",
  },
  {
    href: "/product/color-film",
    icon: Palette,
    title: "改色膜",
    desc: "颜色与质感选择，查看色卡库",
  },
  {
    href: "/product/window-film",
    icon: Sun,
    title: "太阳膜",
    desc: "隔热防晒与隐私，查看套餐对比",
  },
];

/**
 * 三品类对比（车衣 / 改色 / 太阳膜），回答「我的车该贴哪个」。
 */
export function FilmComparison({ active }: { active?: "ppf" | "color" | "window" }) {
  return (
    <section id="film-comparison" className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-orange-400 mb-3">品类对比</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            隐形车衣、改色膜、太阳膜有什么区别？我的车该贴哪个？
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl leading-relaxed">
            三类膜解决的问题不同，可以单独贴，也可以组合施工；先看清各自用途，再按车型与用车场景选择。
          </p>
        </div>

        {/* 桌面表格 */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-white/[0.07]">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="bg-orange-950/30 text-orange-300">
                <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">维度</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">隐形车衣</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">改色膜</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">太阳膜</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.dimension} className="border-b border-zinc-800/60 last:border-b-0">
                  <td className="px-4 py-3 font-medium text-zinc-200 bg-zinc-900/40">{row.dimension}</td>
                  <td className="px-4 py-3 text-zinc-300 leading-relaxed">{row.ppf}</td>
                  <td className="px-4 py-3 text-zinc-300 leading-relaxed">{row.color}</td>
                  <td className="px-4 py-3 text-zinc-300 leading-relaxed">{row.window}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 移动卡片 */}
        <div className="md:hidden space-y-4">
          {(["ppf", "color", "window"] as const).map((key, i) => (
            <article key={key} className="rounded-2xl border border-white/[0.07] bg-zinc-900/50 p-5">
              <h3 className="text-lg font-semibold text-white mb-3">
                {["隐形车衣", "改色膜", "太阳膜"][i]}
              </h3>
              <dl className="space-y-2 text-sm">
                {ROWS.map((row) => (
                  <div key={row.dimension}>
                    <dt className="text-zinc-500 text-xs">{row.dimension}</dt>
                    <dd className="text-zinc-300 leading-relaxed mt-0.5">
                      {key === "ppf" ? row.ppf : key === "color" ? row.color : row.window}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        {/* 三品类互链 */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {LINKS.map(({ href, icon: Icon, title, desc }) => {
            const isActive =
              (active === "ppf" && href === "/product/ppf") ||
              (active === "color" && href === "/product/color-film") ||
              (active === "window" && href === "/product/window-film");
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`group rounded-2xl p-5 border transition-colors ${
                  isActive
                    ? "border-orange-500/40 bg-orange-950/15"
                    : "border-white/[0.07] bg-zinc-900/50 hover:bg-zinc-900/80"
                }`}
              >
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-orange-950/40 text-orange-400 mb-3">
                  <Icon className="size-4" />
                </span>
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
