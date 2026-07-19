import { ClipboardList, Car, Gauge, Wrench, AlertTriangle } from "lucide-react";
import { WHEEL_PROCESS_COMPARISON } from "@/lib/wheel-products";

const PROOFS = [
  {
    icon: ClipboardList,
    title: "原车数据记录",
    description:
      "记录车型、年款、原厂轮毂和轮胎规格，查阅原厂维修手册确认可安装参数范围。每一项数据都会在施工前与你确认。",
  },
  {
    icon: Car,
    title: "刹车间隙确认",
    description:
      "对选定轮毂进行试装，检查刹车卡钳间隙、转向极限位置剐蹭情况和轮拱内衬距离。间隙不足的款式不会强行安装。",
  },
  {
    icon: Gauge,
    title: "动平衡校验",
    description:
      "每条轮胎+轮毂组合在安装前完成动平衡校验，确保高速行驶时方向盘不抖动。动平衡数据交付时一并提供。",
  },
  {
    icon: Wrench,
    title: "扭矩工具交付复查",
    description:
      "使用扭力扳手按规范力矩锁紧每颗螺栓，交付时标注复查里程。建议行驶 100-200km 后回店免费复查。",
  },
] as const;

export function WheelConstructionProofs() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
            施工保障
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            每一套轮毂，都经过这四步确认
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            轮毂安装不是简单拆装。从数据记录到交付复查，每一步都关系到你的行驶安全。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-10">
          {PROOFS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-4 sm:gap-5 rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6"
            >
              <div className="flex-shrink-0 size-10 sm:size-11 rounded-xl bg-white/[0.05] flex items-center justify-center">
                <Icon className="size-5 text-orange-400/70" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-white mb-1.5">
                  {title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 铸造 vs 锻造对比表 */}
        <div className="mb-6 rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            铸造 vs 锻造 — 选轮毂前先了解工艺差异
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="py-2.5 pr-4 text-left font-medium text-zinc-400" />
                  <th className="py-2.5 pr-4 text-left font-medium text-orange-400">
                    铸造
                  </th>
                  <th className="py-2.5 text-left font-medium text-orange-400">
                    锻造
                  </th>
                </tr>
              </thead>
              <tbody>
                {WHEEL_PROCESS_COMPARISON.map((row) => (
                  <tr
                    key={row.aspect}
                    className="border-b border-white/[0.04]"
                  >
                    <td className="py-2.5 pr-4 text-zinc-300 font-medium">
                      {row.aspect}
                    </td>
                    <td className="py-2.5 pr-4 text-zinc-400">{row.cast}</td>
                    <td className="py-2.5 text-zinc-400">{row.forged}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 合规提醒 */}
        <div className="rounded-2xl bg-amber-400/[0.06] border border-amber-400/[0.12] p-5 sm:p-6">
          <div className="flex gap-3">
            <AlertTriangle className="size-5 text-amber-400/80 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-amber-300 mb-1.5">
                关于轮毂改装与合规的重要说明
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                轮毂尺寸和规格变更可能影响车辆年检、保险理赔和道路行驶合规性，具体取决于你所在地区的法规要求。我们建议在施工前向当地车管部门或保险公司确认允许的变更范围。蓝辉轻改在施工前会与你确认原车数据，并在可安装范围内给出建议，但不替代官方法规咨询。质保范围以施工前双方确认的检测和安装记录为准。
              </p>
            </div>
          </div>
        </div>

        {/* 售后说明 */}
        <div className="mt-6 rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            质保与售后服务
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "质保范围",
                desc: "轮毂结构质保期内非人为变形、开裂免费处理；表面工艺（漆面/拉丝/电镀）质保涵盖正常使用下的氧化、脱漆。",
              },
              {
                title: "表面养护",
                desc: "建议每 2-4 周清洗轮毂，使用中性清洁剂；避免使用含酸性或研磨成分的清洁产品，防止损伤表面工艺。",
              },
              {
                title: "异常处理",
                desc: "行驶中出现方向盘抖动、异响、胎压异常报警，请尽快回店检查，不建议继续高速行驶。",
              },
              {
                title: "定期复查",
                desc: "建议行驶 100-200km 后回店免费复查螺丝扭矩；每 1 万公里或换胎时检查动平衡状态。",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-sm font-medium text-zinc-300 mb-1">
                  {item.title}
                </p>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
