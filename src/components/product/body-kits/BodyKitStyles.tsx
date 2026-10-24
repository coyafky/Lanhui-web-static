import Image from "next/image";
import { ImageOff, Package } from "lucide-react";

type StyleCard = {
  name: string;
  image: string;
  alt: string;
  audience: string;
  sourceType: "效果图" | "产品图";
};

const STYLE_CARDS: StyleCard[] = [
  {
    name: "黑武士",
    image: "/images/products/body-kits/理想/理想L6/理想_理想L6_黑武士_前视_01.webp",
    alt: "理想 L6 黑武士风格包围前视效果图",
    audience: "全黑金属质感，适合偏好运动风格的车主。",
    sourceType: "效果图",
  },
  {
    name: "熊猫配色",
    image: "/images/products/body-kits/理想/理想L6/理想_理想L6_熊猫配色_01.webp",
    alt: "理想 L6 熊猫配色整车效果图",
    audience: "黑白撞色，个性向、喜欢醒目外观的车主。",
    sourceType: "效果图",
  },
  {
    name: "小象灰冷光漆",
    image: "/images/products/body-kits/理想/理想L6/理想_理想L6_小象灰冷光漆_图1.webp",
    alt: "理想 L6 小象灰冷光漆整车效果图",
    audience: "低调质感，商务向、看重沉稳气质的车主。",
    sourceType: "效果图",
  },
  {
    name: "黑色 / 灰色金属",
    image: "/images/products/body-kits/理想/理想L6/理想_理想L6_黑色金属_01.webp",
    alt: "理想 L6 黑色金属质感整车效果图",
    audience: "贴近原厂升级感，不张扬又有细节。",
    sourceType: "效果图",
  },
  {
    name: "白色珍珠漆",
    image: "/images/products/body-kits/理想/理想L6/理想_理想L6_白色珍珠漆_01.webp",
    alt: "理想 L6 白色珍珠漆整车效果图",
    audience: "车漆同色融合，追求自然一体感的车主。",
    sourceType: "效果图",
  },
  {
    name: "流光 / 星际 / 星驰 / 星澜 运动系列",
    image: "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列03_01.webp",
    alt: "特斯拉 Model Y 运动系列包围产品参考图",
    audience: "流线运动款，喜欢线条感与战斗姿态的车主。",
    sourceType: "产品图",
  },
];

/**
 * S1 风格款式库（G2）：每卡 = 风格名 + 效果图/产品图 + 一句话适用人群。
 * 效果图统一标注「效果图，非实拍」；产品图为系列参考图。
 */
export function BodyKitStyles() {
  return (
    <section
      id="body-kit-styles"
      aria-labelledby="body-kit-styles-title"
      className="scroll-mt-20 border-b border-white/[0.06] bg-[#0b0c10] py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-amber-400">风格款式库</p>
          <h2 id="body-kit-styles-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            先选风格，再看你的车适不适合
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            风格决定第一眼印象：黑武士压姿态，熊猫配色走个性，小象灰走商务，金属与珍珠白走原厂融合，运动系列走线条感。
            图为风格效果图或系列产品参考图，具体装车效果以门店现场实车评估为准。
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STYLE_CARDS.map((card) => (
            <figure
              key={card.name}
              className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900"
            >
              <div className="relative aspect-[4/3] bg-zinc-950">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/65 px-2.5 py-1 text-[11px] text-zinc-200 backdrop-blur-md">
                  {card.sourceType === "效果图" ? (
                    <>
                      <ImageOff className="size-3" aria-hidden="true" />
                      效果图，非实拍
                    </>
                  ) : (
                    <>
                      <Package className="size-3" aria-hidden="true" />
                      产品图（系列参考图）
                    </>
                  )}
                </span>
              </div>
              <figcaption className="border-t border-white/[0.06] px-4 py-4">
                <p className="text-base font-semibold text-white">{card.name}</p>
                <p className="mt-1.5 text-sm leading-6 text-zinc-400">{card.audience}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
