"use client";

import { categories } from "@/lib/products";

interface CategoryFilterProps {
  selected: string;
  onChange: (category: string) => void;
  counts: Record<string, number>;
}

export default function CategoryFilter({ selected, onChange, counts }: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={
            "flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 " +
            (selected === cat
              ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900")
          }
        >
          {cat}
          <span
            className={
              "text-xs px-1.5 py-0.5 rounded-full font-semibold " +
              (selected === cat ? "bg-white/20 text-white" : "bg-gray-200 text-gray-500")
            }
          >
            {counts[cat] ?? 0}
          </span>
        </button>
      ))}
    </div>
  );
}
