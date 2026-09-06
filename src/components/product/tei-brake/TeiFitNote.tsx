/**
 * TEI 刹车卡钳 —— 适配说明模块。
 * 素材原始提示:轮毂尺寸为该套件所列轮圈配置,不等同对所有车型的适配承诺。
 */
export function TeiFitNote() {
  const notes: { title: string; desc: string }[] = [
    {
      title: "轮毂尺寸 ≠ 车型适配",
      desc: "页面上每个套件的轮毂尺寸与碟盘直径，是该套件可供选择的轮圈配置，不代表它适配所有同尺寸轮毂的车型。",
    },
    {
      title: "上车前需要确认四件事",
      desc: "车型年份与配置、盘型与桥码、油管接口、电子驻车（EPB）兼容性，均需按具体车辆到店核对。",
    },
    {
      title: "颜色与工艺可定制",
      desc: "多数系列可选红色、黄色、淡绿、银色等卡钳配色；GT 系列提供一体式 MONO 阳极氧化灰工艺。",
    },
  ];

  return (
    <section className="bg-zinc-900/40 border-y border-zinc-900">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <p className="inline-block text-xs tracking-widest mb-3 text-orange-400">BEFORE ORDER</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">选购前，先看适配</h2>
        <p className="text-sm text-zinc-400 mb-8 max-w-2xl">
          刹车是安全件，我们不建议只看型号就下单——把决定权交给到店数据确认。
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {notes.map((n) => (
            <div key={n.title} className="bg-zinc-900 rounded-xl border border-zinc-800 p-5">
              <h3 className="font-semibold mb-2 text-orange-300">{n.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{n.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
