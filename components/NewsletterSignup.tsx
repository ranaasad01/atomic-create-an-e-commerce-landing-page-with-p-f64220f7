"use client";

import { useState } from "react";
import { Mail, Check, ArrowRight } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
          <Mail size={24} className="text-orange-400" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Get Exclusive Deals First
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
          Join 50,000+ shoppers who get early access to sales, new arrivals, and members-only discounts delivered straight to their inbox.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 bg-green-500/20 border border-green-500/30 text-green-400 px-6 py-4 rounded-xl">
            <Check size={20} />
            <span className="font-medium">You&apos;re in! Check your inbox for a welcome gift.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:bg-white/15 transition-colors"
              />
              {error && <p className="text-red-400 text-xs mt-1.5 text-left">{error}</p>}
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        <p className="text-gray-600 text-xs mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
