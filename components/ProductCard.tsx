"use client";

import { useState } from "react";
import { Star, ShoppingCart, Eye, Check } from 'lucide-react';
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={12}
          className={
            star <= Math.round(rating)
              ? "text-orange-400 fill-orange-400"
              : "text-gray-300 fill-gray-300"
          }
        />
      ))}
    </div>
  );
}

const badgeConfig = {
  sale: { label: "SALE", className: "bg-red-500 text-white" },
  new: { label: "NEW", className: "bg-green-500 text-white" },
  hot: { label: "HOT", className: "bg-orange-500 text-white" },
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, items } = useCart();
  const [added, setAdded] = useState(false);
  const inCart = items.some((i) => i.product.id === product.id);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Image container */}
      <div className="relative overflow-hidden bg-gray-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop";
          }}
        />

        {/* Badge */}
        {product.badge && (
          <div
            className={
              "absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-md " +
              badgeConfig[product.badge].className
            }
          >
            {badgeConfig[product.badge].label}
            {discount && product.badge === "sale" ? " -" + discount + "%" : ""}
          </div>
        )}

        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <button className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white text-gray-900 text-xs font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 hover:bg-gray-50">
            <Eye size={13} />
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-orange-500 font-medium uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className={
            "w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 " +
            (added || inCart
              ? "bg-green-500 text-white"
              : "bg-gray-900 hover:bg-orange-500 text-white hover:shadow-md hover:shadow-orange-500/30")
          }
        >
          {added ? (
            <>
              <Check size={15} />
              Added!
            </>
          ) : inCart ? (
            <>
              <Check size={15} />
              In Cart
            </>
          ) : (
            <>
              <ShoppingCart size={15} />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
