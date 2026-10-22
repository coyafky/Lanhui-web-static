import {
  VOYAH_MODEL_ORDER,
  VOYAH_MODEL_NAMES,
  type VoyahFitmentCategory,
  type VoyahModelKey,
} from "@/lib/voyah-all-models-products";

type VoyahFitmentMatrixProps = {
  categories: readonly VoyahFitmentCategory[];
};

/**
 * 岚图品牌页 S3「适配件明细」— 车型列表（list 形式）。
 *
 * 组织方式（2026-10-05 按用户意见调整）：以「车型」为主，每个车型一张卡，
 * 卡内列出该车型支持的项目 + 项目功能特性（说清这个产品是做什么的），
 * 不展示型号编号（L2xxxS 等仅留档数据层，页面不列）。
 * 视口规则：390 单列 / 768+ 双列。
 */

/** 该车型在某项目的适配范围小字：普通项目=年款集合，护板=件套集合 */
function fitRange(cat: VoyahFitmentCategory, modelKey: VoyahModelKey): string {
  const group = cat.models.find((g) => g.modelKey === modelKey);
  if (!group || group.rows.length === 0) return "";
  if (cat.id === "skid-plate") {
    const sets = [...new Set(group.rows.map((r) => r.setCount ?? r.year))];
    return `件套：${sets.join(" / ")}`;
  }
  const years = [...new Set(group.rows.map((r) => r.year))];
  return `适配：${years.join(" / ")}`;
}

export function VoyahFitmentMatrix({ categories }: VoyahFitmentMatrixProps) {
  return (
    <section
      id="voyah-fitment"
      aria-labelledby="voyah-fitment-title"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-violet-400 uppercase">
            专车适配件
          </p>
          <h2
            id="voyah-fitment-title"
            className="text-2xl md:text-3xl font-bold text-white text-balance leading-[1.08] tracking-[-0.025em]"
          >
            按车型查适配明细
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-base leading-relaxed text-pretty">
            先选你的岚图，看支持哪些项目、每个项目是做什么用的。到店前把车型和年款发来，我们再按实车确认型号。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {VOYAH_MODEL_ORDER.map((modelKey) => (
            <ModelCard key={modelKey} modelKey={modelKey} categories={categories} />
          ))}
        </div>

        <p className="mt-10 text-xs text-zinc-500 leading-relaxed">
          适装信息供参考，实际安装以门店现场检查（车型年款、座椅布局、底盘结构、电路走向）为准。
          同一车型不同配置（动力形式、续航、座椅排数）对应型号可能不同，请按实车确认。
        </p>
      </div>
    </section>
  );
}

function ModelCard({
  modelKey,
  categories,
}: {
  modelKey: VoyahModelKey;
  categories: readonly VoyahFitmentCategory[];
}) {
  const supported = categories.filter(
    (cat) =>
      cat.models.some(
        (g) => g.modelKey === modelKey && g.rows.length > 0,
      ),
  );

  return (
    <article
      aria-labelledby={`voyah-model-${modelKey}-title`}
      className="rounded-3xl bg-zinc-900/60 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] p-5 sm:p-6"
    >
      <div className="flex flex-wrap items-baseline gap-3">
        <h3
          id={`voyah-model-${modelKey}-title`}
          className="text-xl font-bold text-white"
        >
          {VOYAH_MODEL_NAMES[modelKey]}
        </h3>
        <span className="rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-300">
          {supported.length} 类适配件
        </span>
      </div>

      <ul className="mt-4 space-y-4">
        {supported.map((cat) => (
          <li key={cat.id} className="border-t border-white/[0.05] pt-4 first:border-t-0 first:pt-0">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <span className="font-bold text-violet-200">{cat.name}</span>
              {cat.scope === "partial" && cat.scopeNote && (
                <span className="text-xs text-zinc-500">{cat.scopeNote}</span>
              )}
            </div>
            <p className="mt-1 text-sm leading-relaxed text-zinc-400 text-pretty">
              {cat.feature}
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              {fitRange(cat, modelKey)}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
