"use client";

import { useState, useMemo } from "react";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: products.length };
    products.forEach((p) => {
      c[p.category] = (c[p.category] || 0) + 1;
    });
    return c;
  }, []);

  const filtered = useMemo(
    () =>
      selectedCategory === "All"
        ? products
        : products.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-1">
            Our Collection
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
        </div>
        <p className="text-gray-500 text-sm">
          Showing <span className="font-semibold text-gray-900">{filtered.length}</span> products
        </p>
      </div>

      {/* Category filter */}
      <div id="categories" className="mb-8">
        <CategoryFilter
          selected={selectedCategory}
          onChange={setSelectedCategory}
          counts={counts}
        />
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg font-medium">No products found in this category.</p>
        </div>
      )}
    </section>
  );
}
