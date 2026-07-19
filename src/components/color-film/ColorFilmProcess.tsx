import { Clock } from "lucide-react";

const PROCESS_WITH_DURATION = [
  {
    step: "01",
    title: "到店沟通",
    description: "到蓝辉轻改顺德大良店，面对面沟通用车场景与改色偏好。",
    duration: "约 20 分钟",
  },
  {
    step: "02",
    title: "漆面检测 + 色板确认",
    description: "检测原车漆面状态，在日光和室内光线下确认色板质感与颜色。",
    duration: "约 30 分钟",
  },
  {
    step: "03",
    title: "方案推荐 + 排期",
    description: "结合车型、预算与风格偏好，推荐适合的改色方案并安排施工时间。",
    duration: "约 15 分钟",
  },
  {
    step: "04",
    title: "施工交付 + 复检",
    description: "专车专用电脑裁膜 + 手工包边收口，交付前逐项复检并提示养护要点。",
    duration: "1-3 天（视车型与面积）",
  },
];

export function ColorFilmProcess() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-900/50 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            服务流程
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            从到店到交付，每一步都清晰
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl">
            到店交付，统一规范。施工时长取决于车型与面积，具体以到店评估为准。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PROCESS_WITH_DURATION.map((p) => (
            <div
              key={p.step}
              className="relative rounded-2xl bg-zinc-900/60 border border-white/[0.06] p-5 sm:p-6 group"
            >
              {/* 步骤编号 */}
              <p className="text-3xl font-bold text-orange-400/30 mb-3 tracking-wider tabular-nums">
                {p.step}
              </p>

              <h3 className="text-base font-semibold text-white mb-1.5">
                {p.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                {p.description}
              </p>

              {/* 预估时长 */}
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <Clock className="size-3" />
                {p.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
