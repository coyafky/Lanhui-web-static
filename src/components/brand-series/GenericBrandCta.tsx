interface Props {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

/** 通用到店评估 CTA 条（品牌页 / 车型深页共用） */
export function GenericBrandCta({ title, description, primary, secondary }: Props) {
  return (
    <section className="py-16 md:py-20 bg-black border-t border-zinc-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm tracking-widest text-zinc-500 mb-3">NEXT STEP</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={primary.href}
            className="inline-flex items-center px-4 py-2 rounded-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 text-sm transition-colors"
          >
            {primary.label}
          </a>
          {secondary && (
            <a
              href={secondary.href}
              className="inline-flex items-center px-4 py-2 rounded-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 text-sm transition-colors"
            >
              {secondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
