"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import {
  carMatCategoryFilterLabels,
  carMatFeaturedImages,
  carMatGalleryImages,
} from "@/lib/carmat-products";
import type { CarMatCategory } from "@/lib/carmat-products";
import { openWeChatModal } from "@/lib/wechat-modal";

const FILTER_CATEGORIES: (CarMatCategory | "all")[] = [
  "all",
  "full-wrap",
  "trunk",
  "texture",
  "detail",
];

const FILTER_LABELS: Record<CarMatCategory | "all", string> = {
  all: "全部案例",
  "full-wrap": "主驾",
  trunk: "尾箱",
  texture: "材质",
  detail: "边角",
};

export function CarMatGallery() {
  const [activeFilter, setActiveFilter] = useState<CarMatCategory | "all">("all");

  const displayImages =
    activeFilter === "all"
      ? carMatFeaturedImages
      : carMatGalleryImages.filter((img) => img.category === activeFilter).slice(0, 8);

  return (
    <section
      id="carmat-gallery"
      className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]"
      aria-labelledby="carmat-gallery-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-xs tracking-widest mb-3 text-amber-400 uppercase">
            安装案例
          </p>
          <h2
            id="carmat-gallery-title"
            className="text-2xl md:text-3xl font-bold text-white"
          >
            按位置查看真实安装效果
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            点击筛选查看不同区域的覆盖方式，遇到感兴趣的案例可直接咨询。
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`inline-flex min-h-9 items-center rounded-full px-4 text-sm font-medium transition-all active:scale-[0.96] ${
                cat === activeFilter
                  ? "bg-amber-400/10 text-amber-300 shadow-[0_0_0_1px_oklch(0.7_0.12_70/0.3)]"
                  : "bg-white/[0.04] text-zinc-400 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] hover:text-zinc-200"
              }`}
            >
              {FILTER_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {displayImages.map((image, index) => (
            <div
              key={image.id}
              className="group rounded-2xl bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden">
                <Image
                  src={image.publicPath}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover outline outline-1 -outline-offset-1 outline-white/10 transition-transform duration-300 group-hover:scale-[1.03]"
                  loading={index < 4 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-zinc-800 animate-pulse -z-10" />
              </div>

              {/* Info */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-white truncate">
                    {image.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-medium text-amber-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                    {carMatCategoryFilterLabels[image.category]}
                  </span>
                </div>

                <p className="text-xs text-zinc-500 mb-3">
                  适合：{image.recommendFor}
                </p>

                <button
                  type="button"
                  onClick={() => openWeChatModal()}
                  className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full bg-amber-400/10 px-4 text-sm font-medium text-amber-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)] transition-all hover:bg-amber-400/20 active:scale-[0.97]"
                >
                  咨询此款
                  <MessageCircle className="size-3.5" aria-hidden />
                </button>
              </div>
            </div>
          ))}
        </div>

        {displayImages.length === 0 && (
          <p className="text-center text-sm text-zinc-400 py-12">
            该分类暂无案例，请查看其他区域。
          </p>
        )}

        <p className="mt-6 text-center text-xs text-zinc-500">
          * 展示图片用于说明覆盖思路和安装效果；具体车型适配、颜色和覆盖区域以到店确认结果为准。
        </p>
      </div>
    </section>
  );
}
