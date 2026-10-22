import { rearComparisonRows } from "@/lib/car-tv-products";

export function CarTvComparison() {
  return (
    <section className="border-b border-white/[0.06] bg-[#0b0c10] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-orange-400">怎么选</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            三个方案，差在安装位置和使用场景
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            参数可以慢慢比，先看这八条能不能对上你的用车情况。
          </p>
        </div>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">吸顶式、座椅背装式与流媒体后视镜三方案对比</caption>
            <thead>
              <tr className="border-b border-white/[0.12]">
                <th scope="col" className="py-4 pr-4 text-sm font-medium text-zinc-400">对比项</th>
                <th scope="col" className="py-4 pr-4 text-sm font-semibold text-white">吸顶式后排电视</th>
                <th scope="col" className="py-4 pr-4 text-sm font-semibold text-white">座椅背装式后排电视</th>
                <th scope="col" className="py-4 text-sm font-semibold text-white">流媒体后视镜</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.07]">
              {rearComparisonRows.map((row) => (
                <tr key={row.dimension}>
                  <th scope="row" className="py-4 pr-4 align-top text-sm text-zinc-400">{row.dimension}</th>
                  <td className="py-4 pr-4 align-top text-sm leading-6 text-zinc-200">{row.roof}</td>
                  <td className="py-4 pr-4 align-top text-sm leading-6 text-zinc-200">{row.seatback}</td>
                  <td className="py-4 align-top text-sm leading-6 text-zinc-200">{row.rearview}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 border-l-2 border-orange-500/70 pl-4 text-sm leading-7 text-zinc-300">
          表格按厂方适装表整理，具体到某台车的安装条件（天窗、头枕结构、供电接口）以到店检查为准。
        </p>
      </div>
    </section>
  );
}
