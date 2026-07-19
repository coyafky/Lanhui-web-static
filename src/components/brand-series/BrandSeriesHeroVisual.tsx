import Image from "next/image";

type BrandSeriesHeroVisualProps = {
  image: {
    src: string;
    alt: string;
  };
};

export function BrandSeriesHeroVisual({
  image,
}: BrandSeriesHeroVisualProps) {
  return (
    <div
      data-brand-series-hero
      className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-zinc-900/60 shadow-2xl shadow-black/30 ring-1 ring-white/[0.08]"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
        preload
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-white/[0.03]"
      />
    </div>
  );
}
