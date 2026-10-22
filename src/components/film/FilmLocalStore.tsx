import { MapPin, Phone, Clock, Wrench } from "lucide-react";
import { stores } from "@/lib/store";
import { brand } from "@/lib/brand";
import { PhoneCta } from "@/components/cta/PhoneCta";
import { WeChatConsultButton } from "@/components/WeChatConsultButton";

const SERVICE_AREAS = [
  "佛山顺德大良、容桂、北滘、乐从等周边镇街",
  "广州全城可预约上门评估",
  "珠三角周边按需安排",
];

const NATURAL_LANGUAGE = [
  "佛山隐形车衣施工店",
  "顺德贴膜店",
  "广州改色膜哪里贴",
  "佛山太阳膜门店",
  "顺德大良汽车贴膜到店评估",
];

/**
 * 本地服务锚点块（G0）：门店实体 + 服务品类声明 + 服务区域 + 自然语言覆盖。
 */
export function FilmLocalStore() {
  const store = stores.find((s) => s.isActive);

  return (
    <section id="film-local-store" className="py-16 sm:py-20 bg-zinc-900/40 border-t border-white/[0.05]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs tracking-widest text-orange-400 mb-3">到店服务</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            佛山、顺德哪里能贴隐形车衣 / 改色膜 / 太阳膜？
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl leading-relaxed">
            蓝辉轻改（顺德大良店）承接隐形车衣、改色膜、太阳膜施工，全车贴膜到店评估，施工方案以门店现场检查为准。
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
          {/* 门店实体 */}
          <div className="rounded-2xl border border-white/[0.07] bg-zinc-900/60 p-6">
            {store && (
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{store.name}</p>
                    <p className="text-zinc-300 mt-1 leading-relaxed">{store.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="size-5 text-orange-400 shrink-0 mt-0.5" />
                  <a
                    href={store.phoneTel}
                    className="text-zinc-200 hover:text-orange-300 transition-colors tabular-nums"
                    aria-label={`电话咨询：${store.phone}`}
                  >
                    {store.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="size-5 text-orange-400 shrink-0 mt-0.5" />
                  <p className="text-zinc-300">营业时间 {store.businessHours}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Wrench className="size-5 text-orange-400 shrink-0 mt-0.5" />
                  <p className="text-zinc-300 leading-relaxed">
                    服务品类：承接隐形车衣 / 改色膜 / 太阳膜施工，全车贴膜到店评估。
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <PhoneCta label="电话咨询贴膜方案" />
              <WeChatConsultButton />
            </div>
          </div>

          {/* 服务区域 + 自然语言覆盖 */}
          <div className="rounded-2xl border border-white/[0.07] bg-zinc-900/60 p-6">
            <h3 className="text-base font-semibold text-white mb-3">服务区域</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-orange-400 shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
            <h3 className="text-base font-semibold text-white mt-6 mb-3">常见找店说法</h3>
            <div className="flex flex-wrap gap-2">
              {NATURAL_LANGUAGE.map((phrase) => (
                <span
                  key={phrase}
                  className="text-xs text-zinc-400 bg-white/[0.05] px-3 py-1.5 rounded-full"
                >
                  {phrase}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs text-zinc-500 leading-relaxed">
              门店位于{brand.city}，不同车型与车况存在差异，适装方案以门店现场评估为准。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
