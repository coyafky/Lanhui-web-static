import { MapPin, Phone, Wrench } from "lucide-react";
import { stores } from "@/lib/store";
import { getAmapNavigationUrl } from "@/lib/store-map";

/**
 * 本地服务锚点（G0）：回答「佛山/顺德哪里能装底盘护板」。
 * 门店实体、服务品类声明、服务区域与自然语言覆盖句。
 */
export function SkidPlateLocalStore() {
  const store = stores[0];
  const navUrl = getAmapNavigationUrl(store);

  return (
    <section
      id="skid-plate-local-store"
      className="scroll-mt-20 border-b border-white/[0.06] bg-[#0b0c10] py-16 text-white sm:py-20"
      aria-labelledby="skid-plate-local-store-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-orange-400">
              <MapPin className="size-4" aria-hidden="true" />
              到店安装
            </p>
            <h2
              id="skid-plate-local-store-title"
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              佛山顺德哪里能装底盘护板？
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-300">
              佛山底盘护板安装店可到蓝辉轻改顺德大良店评估安装；顺德哪里能装底盘护板、广州新能源车护板哪家好，都可先电话沟通车型与年款，再预约到店检查。
            </p>

            <div className="mt-8 rounded-2xl border border-white/[0.08] bg-zinc-900/60 p-6">
              <h3 className="text-xl font-semibold text-white">{store.name}</h3>
              <address className="mt-3 not-italic leading-7 text-zinc-300">
                {store.address}
              </address>
              <a
                href={store.phoneTel}
                className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-orange-300 hover:text-orange-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              >
                <Phone className="size-5" aria-hidden="true" />
                {store.phone}
              </a>
              <p className="mt-2 text-xs text-zinc-500">营业时间 {store.businessHours}</p>
              <a
                href={navUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center rounded-full bg-orange-500 px-6 text-sm font-semibold text-zinc-950 transition-colors hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              >
                导航到店
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/[0.08] bg-zinc-900/60 p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                <Wrench className="size-5 text-orange-300" aria-hidden="true" />
                承接底盘护板安装
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                承接底盘护板安装：锰钢 / 铝镁合金 / 碳钢 / 塑钢 / 碳纤，新能源与燃油车均可到店评估。
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-zinc-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">服务区域</h3>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-300">
                <li>佛山：顺德（大良、容桂、北滘、乐从等片区）可到店安装</li>
                <li>广州：全城可预约上门评估，到店施工以预约为准</li>
                <li>周边珠三角城市可先电话沟通车型情况</li>
              </ul>
            </div>

            <p className="text-xs leading-6 text-zinc-500">
              适配信息以门店现场检查为准，不同批次与配置存在差异；页面不标注价格，方案与费用到店按实车评估后沟通。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
