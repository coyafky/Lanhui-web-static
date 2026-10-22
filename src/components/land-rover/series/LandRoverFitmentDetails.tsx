import { landRoverFitmentEntries } from "@/lib/land-rover-all-models-products";
import {
  LAND_ROVER_MODEL_GROUPS,
  LAND_ROVER_MODEL_GROUP_LABELS,
} from "@/lib/land-rover-model-groups";

/**
 * 路虎品牌页 S3「车型适配明细」— 车型 → 支持年款 / 版本 / 结构说明。
 * 数据量小（每车型 1-7 条），直接品牌页内展示，不开子页（PageSpec §S3）。
 */
export function LandRoverFitmentDetails() {
  return (
    <section
      id="land-rover-fitment"
      aria-labelledby="land-rover-fitment-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-teal-400 uppercase">
            适配明细
          </p>
          <h2
            id="land-rover-fitment-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            你的车型支持什么年款、什么版本
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            按年款对号入座；版本变体与拆装要点到店按实车确认。
          </p>
        </div>

        <div className="space-y-12">
          {LAND_ROVER_MODEL_GROUPS.map((group) => {
            const entries = landRoverFitmentEntries.filter(
              (e) => e.group === group
            );
            if (entries.length === 0) return null;
            return (
              <section key={group} aria-labelledby={`land-rover-fit-group-${group}`}>
                <h3
                  id={`land-rover-fit-group-${group}`}
                  className="sticky top-16 z-40 -mx-4 flex min-h-12 items-center gap-3 bg-zinc-950/95 px-4 py-2 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
                >
                  <span className="text-lg font-bold text-white">
                    {LAND_ROVER_MODEL_GROUP_LABELS[group]}
                  </span>
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {entries.map((entry) => (
                    <article
                      key={entry.slug}
                      className="flex flex-col rounded-2xl bg-zinc-900/60 p-5 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
                    >
                      <h4 className="text-base font-bold text-white">
                        {entry.name}
                      </h4>
                      <div className="mt-3 space-y-3">
                        {entry.rows.map((proj, i) => (
                          <div key={`${proj.projectName}-${i}`}>
                            <p className="text-sm font-semibold text-teal-300">
                              {proj.projectName}
                            </p>
                            <ul className="mt-2 space-y-2">
                              {proj.rows.map((row, j) => (
                                <li
                                  key={j}
                                  className="text-sm leading-relaxed text-zinc-400 text-pretty"
                                >
                                  {row.version && (
                                    <span className="block font-medium text-zinc-200">
                                      {row.version}
                                    </span>
                                  )}
                                  <span className="text-zinc-300">
                                    {row.years || "通用"}
                                  </span>
                                  {row.note && (
                                    <span className="block text-zinc-500">
                                      {row.note}
                                    </span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <p className="mt-10 text-xs text-zinc-500 leading-relaxed">
          适装信息供参考，实际安装以门店现场检查（车型年款、动力类型、底盘结构、电路走向）为准。
          版本变体与拆装要点到店按实车确认；同车型多版本按座椅布局（5座/7座做5座/7座做7座/四座/8位）与年份段区分。
        </p>
      </div>
    </section>
  );
}
