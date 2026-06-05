"use client";

import { useState } from "react";
import { X } from 'lucide-react';

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="bg-gray-900 text-white text-sm py-2.5 px-4 flex items-center justify-center relative">
      <p className="text-center">
        🎉 <span className="font-semibold">Summer Sale is LIVE</span> — Up to{" "}
        <span className="text-orange-400 font-bold">40% OFF</span> sitewide. Use code{" "}
        <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded font-mono text-xs font-bold tracking-wide">
          WAVE40
        </span>{" "}
        at checkout.
      </p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
        aria-label="Dismiss banner"
      >
        <X size={16} />
      </button>
    </div>
  );
}
