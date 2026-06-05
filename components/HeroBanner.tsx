"use client";

import Link from "next/link";
import { ArrowRight, Star } from 'lucide-react';

const avatarColors = ["bg-orange-400", "bg-blue-400", "bg-green-400", "bg-purple-400"];

export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6">
            <Star size={14} className="text-orange-400 fill-orange-400" />
            <span className="text-orange-300 text-sm font-medium">Summer Collection 2024 is Here</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Discover Products{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
              You&apos;ll Love
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
            Shop our curated collection of premium electronics, fashion, and lifestyle products — all at prices that make sense. Free shipping on orders over $50.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#products"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Shop Now
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/#categories"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              Browse Categories
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {avatarColors.map((color, i) => (
                  <div key={i} className={"w-7 h-7 rounded-full border-2 border-gray-800 " + color} />
                ))}
              </div>
              <span>50,000+ happy customers</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} className="text-orange-400 fill-orange-400" />
              ))}
              <span className="ml-1">4.9/5 average rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
