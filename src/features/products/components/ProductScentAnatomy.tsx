import type { ProductScentAnatomy as ScentAnatomy } from "@/features/products/types/product.types";

type ProductScentAnatomyProps = {
  anatomy: ScentAnatomy;
};

export function ProductScentAnatomy({ anatomy }: ProductScentAnatomyProps) {
  const notes = [
    { label: "Top Notes", value: anatomy.topNotes },
    { label: "Heart Notes", value: anatomy.heartNotes },
    { label: "Base Notes", value: anatomy.baseNotes },
  ];

  return (
    <section className="space-y-4 border-t border-[#ebe6de] pt-8">
      <h2 className="font-[family-name:var(--font-instrument-serif)] text-[28px] text-[#1a1a1a] sm:text-[32px]">
        Scent Anatomy
      </h2>
      <p className="max-w-xl text-[14px] leading-relaxed text-[#605a54]">
        {anatomy.story}
      </p>
      <dl className="divide-y divide-[#ebe6de]">
        {notes.map((note) => (
          <div
            key={note.label}
            className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <dt className="text-[11px] font-semibold tracking-[0.14em] text-[#1a1a1a] uppercase">
              {note.label}
            </dt>
            <dd className="text-[13px] text-[#605a54] sm:text-right">
              {note.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
