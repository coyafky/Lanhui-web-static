type Column = { key: string; label: string };

export function SpecsTable({
  columns,
  data,
  title,
}: {
  columns: Column[];
  data: Record<string, string>[];
  title?: string;
}) {
  return (
    <section className="py-16 bg-black border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {title}
            </h2>
          </div>
        )}
        <div className="hidden max-w-full overflow-x-auto overscroll-x-contain md:block">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="bg-orange-950/40 text-orange-300">
                {columns.map((col) => (
                  <th key={col.key} className="px-4 py-3 text-left font-semibold border border-zinc-800">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={row.model ?? i} className="border-b border-zinc-800">
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-3 border-x border-zinc-800 text-zinc-300">
                      {row[col.key] ?? "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 md:hidden">
          {data.map((row, i) => (
            <article
              key={row.model ?? i}
              className="min-w-0 rounded-2xl border border-white/[0.07] bg-zinc-900/55 p-5"
            >
              <div className="flex min-w-0 items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">
                  {row.model ?? `产品 ${i + 1}`}
                </h3>
                {row.position && (
                  <span className="shrink-0 text-sm text-orange-300">
                    {row.position}
                  </span>
                )}
              </div>

              <dl className="mt-5 grid min-w-0 grid-cols-2 gap-x-4 gap-y-5">
                {columns
                  .filter((column) => !["model", "position"].includes(column.key))
                  .map((column) => (
                    <div key={column.key} className="min-w-0">
                      <dt className="text-xs leading-5 text-zinc-400">
                        {column.label}
                      </dt>
                      <dd className="mt-1 break-words text-sm leading-6 text-zinc-100">
                        {row[column.key] ?? "-"}
                      </dd>
                    </div>
                  ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
