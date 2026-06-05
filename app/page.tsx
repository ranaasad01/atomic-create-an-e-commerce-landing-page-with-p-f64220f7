import PromoBanner from "@/components/PromoBanner";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import ProductGrid from "@/components/ProductGrid";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";
import { Truck, RotateCcw, Shield, Headphones } from 'lucide-react';

const perks = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On all orders over $50. Fast delivery in 2-5 business days.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day hassle-free returns. No questions asked.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Your payment info is always encrypted and protected.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our team is here to help you any time, day or night.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <HeroBanner />

        {/* Perks bar */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk) => (
                <div key={perk.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                    <perk.icon size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-0.5">{perk.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product grid with category filter */}
        <ProductGrid />

        {/* Newsletter */}
        <NewsletterSignup />
      </main>

      <Footer />
    </div>
  );
}
