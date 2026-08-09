import { Car, ChevronDown, ClipboardList, Gauge, Wrench } from "lucide-react";

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

const WHEEL_FAQS = [
  {
    question: "铸造和锻造有什么区别？",
    answer:
      "铸造轮毂通常更适合日常通勤和外观升级；锻造轮毂通常重量更低、强度余量更高，预算也相对更高。具体选择还需要结合车型、尺寸、使用场景和预算确认。",
  },
  {
    question: "更换轮毂需要注意哪些合规问题？",
    answer:
      "轮毂尺寸或规格变化可能影响车辆年检、保险和道路行驶要求，各地执行规则可能不同。确定方案前可向当地车管部门和保险公司确认，蓝辉提供车型适配与安装建议，不替代官方意见。",
  },
  {
    question: "售后与复查如何安排？",
    answer:
      "安装完成后会说明轮毂及表面工艺的售后范围，并约定首次扭矩复查。具体项目、期限和处理方式以施工前双方确认的内容为准。",
  },
  {
    question: "轮毂风格和颜色怎么选？",
    answer:
      "可以先看车身比例和整车气质。五辐与 Y 字结构通常更显运动，多辐与网状结构更偏精致；亮黑对比更强，银色更清爽，枪灰和古铜更有层次。页面先按结构选款，具体颜色以实物和车型搭配确认。",
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

        <div className="rounded-2xl bg-zinc-900/50 p-5 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] sm:p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">常见问题</h3>
          <div className="space-y-2">
            {WHEEL_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl bg-white/[0.03]"
              >
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 p-4 text-sm font-medium text-zinc-100 marker:content-none">
                  {faq.question}
                  <ChevronDown
                    className="size-4 flex-shrink-0 text-orange-400 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="px-4 pb-4 text-sm leading-relaxed text-zinc-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
