"use client";

import { ArrowRight, Tag, Truck, Shield } from 'lucide-react';
import { useCart } from "@/context/CartContext";

export default function OrderSummary() {
  const { subtotal, totalItems } = useCart();
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
      <h2 className="text-lg font-bold text-gray-900 mb-5">Order Summary</h2>

      <div className="space-y-3 mb-5">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})</span>
          <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Truck size={13} />
            Shipping
          </span>
          <span className={shipping === 0 ? "text-green-600 font-medium" : "font-medium text-gray-900"}>
            {shipping === 0 ? "FREE" : "$" + shipping.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Estimated Tax (8%)</span>
          <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
        </div>
      </div>

      {shipping > 0 && (
        <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3 mb-5 text-xs text-orange-700 flex items-center gap-2">
          <Truck size={13} />
          Add <span className="font-bold">${(50 - subtotal).toFixed(2)}</span> more for free shipping!
        </div>
      )}

      <div className="border-t border-gray-100 pt-4 mb-5">
        <div className="flex justify-between font-bold text-gray-900">
          <span>Total</span>
          <span className="text-xl">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Promo code */}
      <div className="flex gap-2 mb-5">
        <div className="flex-1 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5">
          <Tag size={14} className="text-gray-400" />
          <input
            type="text"
            placeholder="Promo code"
            className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
          />
        </div>
        <button className="bg-gray-900 hover:bg-orange-500 text-white text-sm font-semibold px-4 rounded-xl transition-colors">
          Apply
        </button>
      </div>

      <button className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 mb-4">
        Proceed to Checkout
        <ArrowRight size={16} />
      </button>

      <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <Shield size={12} />
          Secure checkout
        </span>
        <span>|</span>
        <span>30-day returns</span>
        <span>|</span>
        <span>Free exchanges</span>
      </div>
    </div>
  );
}
