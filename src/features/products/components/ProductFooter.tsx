import Link from "next/link";
import { productPaths } from "@/features/products/paths";

const columns = [
  {
    title: "Collections",
    links: ["La Maison", "Private Reserve", "Scented Candles", "Discovery Sets"],
  },
  {
    title: "Customer Care",
    links: [
      "Olfactory Consultation",
      "Shipping & Returns",
      "Atelier Appointments",
      "Care Guide",
    ],
  },
  {
    title: "About Us",
    links: [
      "Our Philosophy",
      "Sourcing Standards",
      "Sustainability Commitments",
      "Journal",
    ],
  },
];

export function ProductFooter() {
  return (
    <footer className="bg-[#141311] text-[#f7f4ef]">
      <div className="grid gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-20 lg:py-16">
        <div className="max-w-xs">
          <Link
            href={productPaths.list}
            className="font-[family-name:var(--font-instrument-serif)] text-[28px] tracking-[0.18em] uppercase"
          >
            Odoratus
          </Link>
          <p className="mt-4 text-[13px] leading-relaxed text-[#b7b1aa]">
            An independent olfactory house cultivating slow-luxury liquid
            narratives. Every bottle is hand-poured in small batches using
            sustainably sourced botanicals.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-[11px] font-semibold tracking-[0.16em] uppercase">
              {column.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {column.links.map((label) => (
                <li key={label}>
                  <Link
                    href={productPaths.list}
                    className="text-[13px] text-[#b7b1aa] hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 border-t border-white/10 px-4 py-4 text-[11px] text-[#8d877f] sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-10 lg:px-20">
        <p>© 2026 Odoratus. All rights reserved.</p>
        <p className="tracking-[0.12em] uppercase">
          Secured checkout via Visa · Mastercard · Amex
        </p>
      </div>
    </footer>
  );
}