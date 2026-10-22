import Image from "next/image";
import { heatTestShots } from "@/lib/film-products";

/**
 * 现场隔热实测记录展示。图片未标注所测膜型号，仅作施工与检测场景参考，
 * 不替代对应型号的标准检测报告。
 */
export function HeatTestGallery() {
  return (
    <section id="heat-test" className="py-16 sm:py-20 bg-black border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs tracking-widest text-orange-400 mb-3">现场记录</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">隔热实测现场记录参考</h2>
          <p className="mt-3 text-zinc-400 max-w-2xl leading-relaxed">
            以下为门店施工与红外功率测试现场照片，记录了直接测试、未贴膜与贴膜后的仪器读数；
            图片未标注所测膜型号，仅作施工与检测场景参考，不能视为具体套餐的型号检测报告。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {heatTestShots.map((shot) => (
            <figure
              key={shot.image}
              className="rounded-2xl overflow-hidden border border-white/[0.07] bg-zinc-900/50"
            >
              <div className="relative aspect-[4/3] bg-zinc-900">
                <Image
                  src={shot.image}
                  alt={shot.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="p-3 text-xs text-zinc-400 leading-relaxed">
                <p>{shot.caption}</p>
                {shot.reading && (
                  <p className="mt-1 text-orange-300 tabular-nums">{shot.reading}</p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-xs text-zinc-500 leading-relaxed">
          现场照片未提供膜型号、光源距离、测试位置、环境温度、仪器校准与重复测试次数；不同玻璃、膜型号、测试位置与设备条件均会影响读数。具体产品性能以对应参数页、检测报告及施工后规范测试为准。
        </p>
      </div>
    </section>
  );
}
