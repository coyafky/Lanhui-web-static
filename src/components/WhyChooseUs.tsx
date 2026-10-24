import { Shield, Award, BadgeCheck } from "lucide-react";

const FEATURES = [
  {
    icon: Shield,
    title: "专业工艺标准",
    description:
      "施工前核对车型与项目，按流程记录关键步骤，交付时检查施工结果与使用提示。",
    color: "blue",
  },
  {
    icon: Award,
    title: "优质材料保障",
    description:
      "按产品资料核对膜材、涂层与适用场景，车衣和窗膜的具体表现以对应产品及实车条件为准。",
    color: "orange",
  },
  {
    icon: BadgeCheck,
    title: "品牌质保承诺",
    description:
      "施工记录与产品信息便于后续核对；质保范围、期限和服务方式以书面条款为准。",
    color: "yellow",
  },
];

const COLOR_MAP: Record<string, { ring: string; bg: string; text: string }> = {
  blue: {
    ring: "border-blue-800/50",
    bg: "bg-blue-950/50",
    text: "text-blue-400",
  },
  orange: {
    ring: "border-orange-800/50",
    bg: "bg-orange-950/50",
    text: "text-orange-400",
  },
  yellow: {
    ring: "border-yellow-800/50",
    bg: "bg-yellow-950/50",
    text: "text-yellow-400",
  },
};

export function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm tracking-widest text-orange-400 mb-3">WHY LANHUI</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            为什么选择蓝辉轻改？
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            从工艺标准到材料品质，再到品牌质保——层层保障，让每次升级更安心。
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map(({ icon: Icon, title, description, color }) => {
            const palette = COLOR_MAP[color]!;
            return (
              <div
                key={title}
                className="bg-zinc-900 p-5 sm:p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 hover:shadow-xl transition-all"
              >
                <div
                  className={`w-14 h-14 ${palette.bg} ${palette.text} rounded-xl flex items-center justify-center mb-6 border ${palette.ring}`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-zinc-400 leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
