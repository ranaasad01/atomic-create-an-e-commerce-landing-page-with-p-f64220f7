"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Page header */}
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
              Continue Shopping
            </Link>
            <span className="text-gray-300">|</span>
            <h1 className="text-2xl font-bold text-gray-900">
              Shopping Cart
              {items.length > 0 && (
                <span className="ml-2 text-base font-normal text-gray-400">
                  ({items.length} {items.length === 1 ? "item" : "items"})
                </span>
              )}
            </h1>
          </div>

          {items.length === 0 ? (
            /* Empty cart state */
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                <ShoppingCart size={40} className="text-orange-300" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
              <p className="text-gray-500 mb-8 max-w-sm">
                Looks like you haven&apos;t added anything to your cart yet. Explore our collection and find something you love!
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30"
              >
                <ShoppingCart size={18} />
                Start Shopping
              </Link>

              {/* Suggested categories */}
              <div className="mt-12 w-full max-w-lg">
                <p className="text-sm text-gray-400 mb-4">Popular categories to explore</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Electronics", "Clothing", "Footwear", "Accessories", "Home"].map((cat) => (
                    <Link
                      key={cat}
                      href={"/#categories"}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors shadow-sm"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Cart with items */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-semibold text-gray-900">Cart Items</h2>
                    <Link
                      href="/"
                      className="text-xs text-orange-500 hover:text-orange-600 font-medium transition-colors"
                    >
                      + Add more items
                    </Link>
                  </div>
                  <div>
                    {items.map((item) => (
                      <CartItem key={item.product.id} item={item} />
                    ))}
                  </div>
                </div>

                {/* Trust badges */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    { emoji: "🚚", text: "Free shipping over $50" },
                    { emoji: "🔄", text: "30-day easy returns" },
                    { emoji: "🔒", text: "Secure & encrypted" },
                  ].map((badge) => (
                    <div
                      key={badge.text}
                      className="bg-white rounded-xl border border-gray-100 p-3 text-center shadow-sm"
                    >
                      <div className="text-xl mb-1">{badge.emoji}</div>
                      <p className="text-xs text-gray-500 leading-tight">{badge.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order summary */}
              <div className="lg:col-span-1">
                <OrderSummary />
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
