import { MapPin, Phone, Clock, Wrench } from "lucide-react";
import { stores } from "@/lib/store";
import { getAmapNavigationUrl } from "@/lib/store-map";
import { PhoneCta } from "@/components/cta/PhoneCta";
import { WeChatConsultButton } from "@/components/WeChatConsultButton";

const SERVICE_AREAS = [
  "佛山：顺德（大良、容桂、北滘、乐从等片区）可到店评估施工",
  "广州：全城可预约上门评估，到店施工以预约为准",
  "周边珠三角城市可先电话沟通车型情况",
];

const NATURAL_LANGUAGE = [
  "佛山地板改装店",
  "顺德哪里能装地板",
  "广州汽车地板哪家好",
  "MPV 地板改装到店",
  "SUV 地板到店评估",
  "GL8 / 腾势 D9 地板方案",
];

/**
 * 本地服务锚点（G0）：门店实体 + 服务品类声明 + 服务区域 + 自然语言覆盖。
 * 回答「佛山 / 顺德哪里能装汽车地板」。
 */
export function FlooringLocalStore() {
  const store = stores[0];
  const navUrl = getAmapNavigationUrl(store);

  return (
    <section
      id="flooring-local-store"
      className="scroll-mt-20 border-t border-white/[0.05] bg-zinc-950 py-16 text-white sm:py-20"
      aria-labelledby="flooring-local-store-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-amber-400">
            <MapPin className="size-4" aria-hidden="true" />
            到店安装
          </p>
          <h2
            id="flooring-local-store-title"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            佛山、顺德哪里能装汽车地板？
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            蓝辉轻改（顺德大良店）承接汽车地板改装：地板总成 + 脚托 / 风口件 / 迎宾踏板，MPV 与 SUV 均可到店评估；佛山地板改装店、顺德哪里能装地板、广州汽车地板哪家好，都可先电话沟通车型与年款，再预约到店检查。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* 门店实体 */}
          <div className="rounded-2xl border border-white/[0.08] bg-zinc-900/60 p-6">
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 mt-0.5 text-amber-400" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">{store.name}</p>
                  <address className="mt-1 not-italic leading-relaxed text-zinc-300">
                    {store.address}
                  </address>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="size-5 shrink-0 mt-0.5 text-amber-400" aria-hidden="true" />
                <a
                  href={store.phoneTel}
                  className="text-zinc-200 hover:text-amber-300 transition-colors tabular-nums"
                  aria-label={`电话咨询：${store.phone}`}
                >
                  {store.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="size-5 shrink-0 mt-0.5 text-amber-400" aria-hidden="true" />
                <p className="text-zinc-300">营业时间 {store.businessHours}</p>
              </div>
              <div className="flex items-start gap-3">
                <Wrench className="size-5 shrink-0 mt-0.5 text-amber-400" aria-hidden="true" />
                <p className="leading-7 text-zinc-300">
                  服务品类：承接汽车地板改装，地板总成 + 脚托 / 风口件 / 迎宾踏板，MPV 与 SUV 均可到店评估。
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PhoneCta label="电话咨询地板方案" />
              <WeChatConsultButton />
              <a
                href={navUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white/[0.05] px-6 text-sm font-semibold text-zinc-200 ring-1 ring-white/[0.1] transition-colors hover:bg-white/[0.08]"
              >
                导航到店
              </a>
            </div>
          </div>

          {/* 服务区域 + 自然语言覆盖 */}
          <div className="rounded-2xl border border-white/[0.08] bg-zinc-900/60 p-6">
            <h3 className="text-base font-semibold text-white">服务区域</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-300">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="size-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-base font-semibold text-white">常见找店说法</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {NATURAL_LANGUAGE.map((phrase) => (
                <span
                  key={phrase}
                  className="rounded-full bg-white/[0.05] px-3 py-1.5 text-xs text-zinc-400"
                >
                  {phrase}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs leading-6 text-zinc-500">
              适配信息以门店现场检查为准，不同批次与配置存在差异；页面不标注价格，方案与费用到店按实车评估后沟通。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
