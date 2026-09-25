"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@base-ui/react/dialog";
import { ImageOff, Maximize2, X } from "lucide-react";

const THUMBNAIL_CLASS =
  "relative aspect-square overflow-hidden rounded-xl bg-zinc-900 transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400";

/**
 * 详情页主图：大图 + 放大 Dialog（Base UI Dialog：Escape 关闭 + 焦点管理）。
 *
 * - 有角度图才出缩略图；**只有一张时不造假缩略图**。
 * - 缺图编号渲染中性占位块；**不用其它编号的图片顶替**。
 */
export function WheelDetailHero({
  modelId,
  images,
}: {
  modelId: string;
  images: readonly string[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage: string | undefined = images[activeIndex];

  if (activeImage === undefined) {
    return (
      <div className="flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/15 px-6 text-center">
        <ImageOff className="size-8 text-zinc-600" aria-hidden />
        <p className="text-base text-zinc-300">暂无产品图片</p>
        <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
          {modelId} 的源数据里没有图片，本页不做替代展示；实物外观与颜色请到店确认。
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-900 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]">
        <Image
          src={activeImage}
          alt={`${modelId} 轮毂产品图（第 ${activeIndex + 1} 张）`}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
          preload={activeIndex === 0}
        />

        <Dialog.Root>
          <Dialog.Trigger
            className="absolute bottom-3 right-3 inline-flex min-h-11 items-center gap-2 rounded-full bg-zinc-950/80 px-4 text-sm font-medium text-zinc-100 shadow-[0_0_0_1px_oklch(1_0_0/0.12)] backdrop-blur transition-colors hover:bg-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            aria-label={`放大查看 ${modelId} 当前图片`}
          >
            <Maximize2 className="size-4" aria-hidden />
            放大
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Backdrop className="fixed inset-0 z-40 bg-black/85 backdrop-blur-sm" />
            <Dialog.Popup className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 p-4 focus:outline-none">
              <Dialog.Title className="sr-only">
                {modelId} 轮毂大图
              </Dialog.Title>
              <Dialog.Description className="sr-only">
                按 Escape 键或点击关闭按钮退出放大视图。
              </Dialog.Description>

              <div className="relative aspect-square w-full max-w-3xl">
                <Image
                  src={activeImage}
                  alt={`${modelId} 轮毂大图`}
                  fill
                  sizes="(min-width: 1024px) 768px, 100vw"
                  className="object-contain"
                />
              </div>

              <Dialog.Close
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white/[0.08] px-5 text-sm font-medium text-zinc-100 shadow-[0_0_0_1px_oklch(1_0_0/0.12)] transition-colors hover:bg-white/[0.14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                aria-label="关闭放大视图"
              >
                <X className="size-4" aria-hidden />
                关闭
              </Dialog.Close>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </div>

      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-5">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={index === activeIndex}
              aria-label={`查看 ${modelId} 第 ${index + 1} 张图片`}
              className={`${THUMBNAIL_CLASS} ${
                index === activeIndex
                  ? "shadow-[0_0_0_2px_oklch(0.75_0.15_60)]"
                  : "shadow-[0_0_0_1px_oklch(1_0_0/0.08)] hover:shadow-[0_0_0_1px_oklch(1_0_0/0.2)]"
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 640px) 20vw, 25vw"
                className="object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
