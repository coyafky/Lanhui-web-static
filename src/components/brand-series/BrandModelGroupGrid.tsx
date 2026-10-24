import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CuratedModelCardShape } from "@/lib/brand-curated-types";
import type { VehicleTheme } from "@/components/vehicle-page";

interface Props {
  cards: readonly CuratedModelCardShape[];
  /** 分组顺序（由各品牌数据层传入） */
  groupOrder: readonly string[];
  groupLabels: Record<string, string>;
  theme: VehicleTheme;
  headingId?: string;
  /** 小标题（默认「适配库收录车型」） */
  eyebrow?: string;
  /** 对账信息：适配库原始数据行数 / 归并后车系数 / 可用产品图数（三者均由数据层常量传入，不手写） */
  reconciliation?: { rows: number; cards: number; images: number };
}

const THEME_LINK: Record<VehicleTheme, string> = {
  orange: "text-orange-300 group-hover:text-orange-200",
  cyan: "text-cyan-300 group-hover:text-cyan-200",
  amber: "text-amber-300 group-hover:text-amber-200",
  blue: "text-blue-300 group-hover:text-blue-200",
  green: "text-emerald-300 group-hover:text-emerald-200",
  red: "text-red-300 group-hover:text-red-200",
  neutral: "text-zinc-300 group-hover:text-zinc-200",
};

/**
 * 车系速览网格（PageSpec S1）
 *
 * 与旧的 `GenericBrandModelGrid` 的差别：
 * - 卡片单位是**车系**，不是 fitment 数据行 → 不会再出现「网格 22 个 / 数据 41 行」的口径错位
 * - 有已登记产品图时**渲染缩略图**（图上带文字，故按可读尺寸呈现）
 * - 子页入口只在页真实存在时出现
 */
export function BrandModelGroupGrid({
  cards,
  groupOrder,
  groupLabels,
  theme,
  headingId = "brand-model-groups-title",
  eyebrow = "适配库收录车型",
  reconciliation,
}: Props) {
  const groups = groupOrder
    .map((key) => ({ key, cards: cards.filter((c) => c.group === key) }))
    .filter((g) => g.cards.length > 0);

  return (
    <section
      aria-labelledby={headingId}
      className="scroll-mt-32 border-t border-white/[0.06] bg-zinc-950 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-amber-400">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            按车系找到你的车
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-300">
            共 {cards.length} 个车系。同一车系下的年款与配置差异已合并成备注，不用逐条翻。
          </p>
          {reconciliation && (
            <p className="mt-2 text-xs leading-6 text-zinc-500">
              适配库原始数据 {reconciliation.rows} 行 → 归并后 {reconciliation.cards} 个车系，
              无数据丢失；当前可展示适配产品图 {reconciliation.images} 张。
            </p>
          )}
        </div>

        <div className="mt-10 space-y-10">
          {groups.map((group) => (
            <div key={group.key}>
              <h3 className="sticky top-16 z-20 -mx-4 mb-3 bg-zinc-950/95 px-4 py-2 text-sm font-semibold text-white backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                {groupLabels[group.key] ?? group.key}
                <span className="ml-2 font-normal text-zinc-500">
                  {group.cards.length} 车系
                </span>
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.cards.map((card) => (
                  <li
                    key={card.displayName}
                    className="flex gap-3 rounded-xl border border-white/[0.08] bg-zinc-900/60 p-3.5 sm:gap-4 sm:p-4"
                  >
                    {/* 缩略图作「产品长什么样」的识别用；图上文字在此尺寸不可读，
                        权威描述在右侧文字里（不靠图传信息） */}
                    {card.images[0] && (
                      <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-zinc-950/60 ring-1 ring-white/[0.06] sm:size-24">
                        <Image
                          src={card.images[0].path}
                          alt={`${card.displayName} ${card.images[0].project} 产品图`}
                          fill
                          sizes="96px"
                          className="object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="text-lg font-semibold text-white">
                          {card.displayName}
                        </h4>
                        <span className="shrink-0 text-xs text-zinc-500">
                          {card.projects.length} 项
                        </span>
                      </div>

                      {card.note && (
                        <p className="mt-1 text-xs leading-6 text-zinc-400">
                          {card.note}
                        </p>
                      )}

                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {card.projects.slice(0, 3).map((name) => (
                          <span
                            key={name}
                            className="rounded bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400"
                          >
                            {name}
                          </span>
                        ))}
                        {card.projects.length > 3 && (
                          <span className="rounded bg-zinc-800/60 px-2 py-0.5 text-xs text-zinc-600">
                            +{card.projects.length - 3}
                          </span>
                        )}
                      </div>

                      {card.subpage && (
                        <Link
                          href={card.subpage}
                          className={`group/link mt-3 inline-flex items-center gap-1.5 text-sm font-medium ${THEME_LINK[theme]} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400`}
                        >
                          查看完整适配
                          <ArrowRight
                            className="size-4 transition-transform group-hover/link:translate-x-1"
                            aria-hidden="true"
                          />
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
