import {
  Droplets,
  Layers3,
  ShieldCheck,
  Sparkles,
  SunMedium,
  ThermometerSun,
} from "lucide-react";

const FEATURE_GROUPS = [
  {
    id: "paint-protection",
    title: "漆面保护表现",
    features: [
      {
        icon: ThermometerSun,
        title: "轻微划痕修复",
        description:
          "在适宜温度下，表层涂层可逐渐减轻洗车细纹和日常轻微划痕。深划痕、破膜或露漆不属于修复范围。",
      },
      {
        icon: ShieldCheck,
        title: "柔韧缓冲",
        description:
          "TPU 基材能够缓冲部分碎石飞溅与轻微剐蹭，降低日常行驶对原厂漆面的直接损耗。",
      },
      {
        icon: SunMedium,
        title: "耐候防护",
        description:
          "帮助减缓紫外线、酸雨、鸟粪和树胶等环境因素对漆面产生的长期影响。",
      },
    ],
  },
  {
    id: "daily-use",
    title: "日常使用体验",
    features: [
      {
        icon: Sparkles,
        title: "保持漆面光泽",
        description:
          "透明膜层减少洗车细纹与轻微摩擦带来的观感损耗，让原厂漆更容易保持通透和光泽。",
      },
      {
        icon: Droplets,
        title: "疏水耐污",
        description:
          "降低水滴、泥污和道路污染物的附着，减少污渍长期停留，后续清洁更加轻松。",
      },
      {
        icon: Layers3,
        title: "稳定贴合",
        description:
          "压敏胶层贴合车身曲面，配合规范施工和拆除，降低翘边、残胶及漆面损伤风险。",
      },
    ],
  },
] as const;

export function PpfProtectionPrinciples() {
  return (
    <div aria-labelledby="ppf-protection-title">
      <div className="mb-7 max-w-3xl">
        <h3
          id="ppf-protection-title"
          className="text-xl font-bold text-white text-balance sm:text-2xl"
        >
          一层透明保护，降低日常用车对原厂漆的损耗
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300 text-pretty sm:text-base">
          隐形车衣覆盖在原厂漆表面，通过功能涂层、TPU 基材与胶层协同作用，减少细小划痕、道路污染和环境物质对漆面的直接影响。
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start lg:gap-10">
        <figure className="overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-orange-950/25 p-5 shadow-[inset_0_0_0_1px_oklch(1_0_0/0.07)] sm:p-7">
          <figcaption className="mb-6">
            <span className="text-sm font-semibold text-white">车衣与原厂漆保护关系</span>
            <span className="mt-1 block text-xs leading-5 text-zinc-400">保护关系示意，实际膜层厚度不按比例展示</span>
          </figcaption>

          <div className="space-y-3" aria-hidden="true">
            <div className="relative ml-auto w-full overflow-hidden rounded-2xl border border-sky-300/20 bg-gradient-to-r from-sky-300/18 via-white/12 to-sky-200/8 px-5 py-5 shadow-[0_14px_40px_oklch(0.58_0.14_230/0.08)]">
              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
              <p className="text-sm font-semibold text-sky-100">透明车衣层</p>
              <p className="mt-1 text-xs text-sky-100/70">承受日常细纹、污渍与轻微冲击</p>
            </div>
            <div className="mx-auto w-[92%] rounded-2xl border border-amber-300/15 bg-gradient-to-r from-amber-700/20 via-amber-400/15 to-amber-200/8 px-5 py-5">
              <p className="text-sm font-semibold text-amber-100">原厂车漆层</p>
              <p className="mt-1 text-xs text-amber-100/65">保持原车色泽与漆面完整度</p>
            </div>
            <div className="mx-auto w-[84%] rounded-2xl border border-zinc-500/20 bg-gradient-to-r from-zinc-700/60 to-zinc-800 px-5 py-5">
              <p className="text-sm font-semibold text-zinc-100">车身钢板层</p>
              <p className="mt-1 text-xs text-zinc-400">车身结构基础</p>
            </div>
          </div>
        </figure>

        <div className="grid gap-8 md:grid-cols-2 md:gap-7">
          {FEATURE_GROUPS.map((group) => (
            <section key={group.id} aria-labelledby={`ppf-${group.id}`}>
              <h4
                id={`ppf-${group.id}`}
                className="mb-5 text-sm font-semibold text-orange-300"
              >
                {group.title}
              </h4>
              <div className="space-y-5">
                {group.features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="grid grid-cols-[auto_1fr] gap-3">
                      <span className="mt-0.5 inline-flex size-9 items-center justify-center rounded-xl bg-orange-950/35 shadow-[inset_0_0_0_1px_oklch(0.7_0.16_55/0.16)]">
                        <Icon className="size-4 text-orange-300" aria-hidden="true" />
                      </span>
                      <div>
                        <h5 className="text-sm font-semibold text-white">{feature.title}</h5>
                        <p className="mt-1 text-sm leading-6 text-zinc-300 text-pretty">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      <p className="mt-7 text-xs leading-5 text-zinc-400">
        具体表现因产品系列、使用环境和养护方式而异。材质、涂层、胶水与质保信息以对应产品参数为准。
      </p>
    </div>
  );
}
