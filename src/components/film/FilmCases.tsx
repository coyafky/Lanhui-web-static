import Image from "next/image";

export type FilmCaseItem = {
  image: string;
  alt: string;
  caption: string;
};

/**
 * 过渡案例块：真实到店施工案例持续整理中，当前以产品图占位，
 * 每张图标注「产品图，非本店实拍」，不编造车主反馈。
 */
export function FilmCases({
  items,
  title = "产品图参考，非本店实拍",
}: {
  items: FilmCaseItem[];
  title?: string;
}) {
  return (
    <section className="py-16 sm:py-20 bg-black border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs tracking-widest text-orange-400 mb-3">案例展示</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            贴过哪些车？真实施工案例持续整理中
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl leading-relaxed">
            以下为产品资料图，仅用于呈现膜面与套餐外观，非本店实车实拍；真实到店施工车型与照片以门店记录为准，施工方案以门店现场检查为准。
          </p>
        </div>

        {items.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <figure
                key={item.image}
                className="rounded-2xl overflow-hidden border border-white/[0.07] bg-zinc-900/50"
              >
                <div className="relative aspect-[4/3] bg-zinc-900">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <span className="absolute top-2 left-2 text-[10px] font-medium px-2 py-0.5 rounded-full bg-black/60 text-zinc-300 backdrop-blur-sm">
                    产品图，非本店实拍
                  </span>
                </div>
                <figcaption className="p-3 text-xs text-zinc-400 leading-relaxed">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <p className="mt-6 text-xs text-zinc-500 leading-relaxed">
          {title}。页面不展示未经核实的车主反馈，实车效果请到店查看。
        </p>
      </div>
    </section>
  );
}
