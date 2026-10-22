import { MapPin, Phone, Clock, CarFront, MapPinned, ShieldCheck } from "lucide-react";
import { stores } from "@/lib/store";

/**
 * S7 本地服务锚点（G0：佛山 / 顺德哪里能改包围）。
 * 门店实体 + 服务品类声明 + 服务区域 + 自然语言覆盖句，供本地 GEO 引用。
 */
export function BodyKitLocalStore() {
  const store = stores.find((s) => s.isActive) ?? stores[0];

  return (
    <section
      id="body-kit-local-store"
      aria-labelledby="body-kit-local-store-title"
      className="scroll-mt-20 border-b border-white/[0.06] bg-[#0b0c10] py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-amber-400">本地服务</p>
          <h2 id="body-kit-local-store-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            佛山包围改装店：到店评估，再定方案
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            佛山哪里能改包围、顺德哪里能改包围、广州车身包围哪家好——蓝辉轻改顺德大良店承接车身包围改装，
            新能源与燃油车均可到店评估。
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* 门店实体 */}
          <div className="rounded-2xl border border-amber-500/25 bg-amber-500/[0.05] p-6 sm:p-8">
            <p className="text-xs font-medium tracking-[0.14em] text-amber-300">门店实体</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{store.name}</h3>
            <ul className="mt-5 space-y-3.5 text-sm leading-7 text-zinc-300">
              <li className="flex gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-amber-300" aria-hidden="true" />
                <span>{store.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-1 size-4 shrink-0 text-amber-300" aria-hidden="true" />
                <a href={store.phoneTel} className="font-semibold text-white underline-offset-4 hover:underline">
                  {store.phone}（点击直拨）
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-1 size-4 shrink-0 text-amber-300" aria-hidden="true" />
                <span>营业时间 {store.businessHours}</span>
              </li>
            </ul>
            <a
              href="/contact"
              className="mt-7 inline-flex min-h-11 items-center rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              预约到店检查
            </a>
          </div>

          {/* 服务品类 / 区域 / 合规 */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/[0.08] bg-zinc-900 p-6 sm:p-7">
              <p className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-zinc-400">
                <CarFront className="size-4 text-amber-300" aria-hidden="true" />
                服务品类声明
              </p>
              <p className="mt-3 text-base leading-8 text-zinc-200">
                承接车身包围改装：前包围 / 后包围 / 侧裙 / 尾翼 / 整套，新能源与燃油车均可到店评估。
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-zinc-900 p-6 sm:p-7">
              <p className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-zinc-400">
                <MapPinned className="size-4 text-amber-300" aria-hidden="true" />
                服务区域
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                佛山（顺德大良 / 容桂 / 北滘 / 乐从等）到店施工；广州全城可预约上门评估；周边珠三角地区可先电话沟通车型年款。
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-zinc-900 p-6 sm:p-7">
              <p className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-zinc-400">
                <ShieldCheck className="size-4 text-amber-300" aria-hidden="true" />
                合规与适装说明
              </p>
              <ul className="mt-3 space-y-2.5 text-sm leading-7 text-zinc-300">
                <li>· 车身包围涉及外观变更，改装后按当地交管规定办理，页面不做备案承诺，到店评估说明合规边界。</li>
                <li>· 适配信息以门店现场检查为准，不同批次与配置存在差异。</li>
                <li>· 适配库未收录的车型不代表不能装，也不打包票，需到店按实车结构评估。</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
