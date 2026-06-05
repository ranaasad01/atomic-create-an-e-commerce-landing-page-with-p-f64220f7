import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    price: 79.99,
    originalPrice: 129.99,
    image: "https://m.media-amazon.com/images/I/71YM2N5whtL.jpg",
    category: "Electronics",
    rating: 4.8,
    reviewCount: 2341,
    badge: "sale",
    description: "Premium sound with 30-hour battery life and active noise cancellation.",
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    price: 149.00,
    image: "https://www.peugeotwatches.com/cdn/shop/products/2059G-FV.jpg?v=1633106380&width=1500",
    category: "Accessories",
    rating: 4.7,
    reviewCount: 876,
    badge: "new",
    description: "Slim profile with genuine leather strap and sapphire crystal glass.",
  },
  {
    id: 3,
    name: "Ultralight Running Sneakers",
    price: 89.95,
    originalPrice: 119.95,
    image: "https://hips.hearstapps.com/hmg-prod/images/run-lightweight-running-shoes-682b51023eccc.jpg?crop=0.670xw:1.00xh;0.0994xw,0&resize=1200:*",
    category: "Footwear",
    rating: 4.6,
    reviewCount: 1543,
    badge: "sale",
    description: "Breathable mesh upper with responsive foam cushioning for all-day comfort.",
  },
  {
    id: 4,
    name: "Portable Bluetooth Speaker",
    price: 59.99,
    image: "https://cdn.thewirecutter.com/wp-content/media/2024/11/portablebluetoothspeakers-2048px-9130.jpg?width=2048&quality=60&crop=2048:1365&auto=webp",
    category: "Electronics",
    rating: 4.5,
    reviewCount: 987,
    badge: "hot",
    description: "360° surround sound with waterproof design and 12-hour playtime.",
  },
  {
    id: 5,
    name: "Organic Cotton Crew Tee",
    price: 34.00,
    image: "https://matethelabel.com/cdn/shop/files/20250128_LightWork_MateTheLabel_ApparelFlats_SetB_OrganicCottonClassicTee_BON_0410_dc0fb29d-4da1-44bb-b35a-b6bf8b3b3e1e.jpg?v=1743097086",
    category: "Clothing",
    rating: 4.4,
    reviewCount: 654,
    description: "Sustainably sourced 100% organic cotton in a relaxed everyday fit.",
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    price: 28.00,
    originalPrice: 38.00,
    image: "http://www.gymreapers.com/cdn/shop/files/32-oz-bottle-pink-with-caps.jpg?v=1714666627&width=2048",
    category: "Home",
    rating: 4.9,
    reviewCount: 3210,
    badge: "sale",
    description: "Double-wall vacuum insulation keeps drinks cold 24h or hot 12h.",
  },
  {
    id: 7,
    name: "Smart Fitness Tracker Band",
    price: 49.99,
    image: "https://m.media-amazon.com/images/I/71KwGt+7qSL.jpg",
    category: "Electronics",
    rating: 4.3,
    reviewCount: 1120,
    badge: "new",
    description: "Track steps, heart rate, sleep, and calories with a 7-day battery.",
  },
  {
    id: 8,
    name: "Canvas Backpack 30L",
    price: 64.00,
    image: "https://asroutdoor.com/cdn/shop/files/Untitled-20.jpg?v=1760299672&width=1946",
    category: "Accessories",
    rating: 4.6,
    reviewCount: 432,
    description: "Durable waxed canvas with padded laptop sleeve and ergonomic straps.",
  },
  {
    id: 9,
    name: "Merino Wool Beanie",
    price: 22.00,
    image: "https://www.gigipip.com/cdn/shop/files/beanies-burgundy-gigi-merino-wool-beanie-41548091490435.jpg?v=1760644226",
    category: "Clothing",
    rating: 4.7,
    reviewCount: 289,
    badge: "new",
    description: "Soft, itch-free merino wool that regulates temperature in any weather.",
  },
  {
    id: 10,
    name: "Ceramic Pour-Over Coffee Set",
    price: 45.00,
    originalPrice: 60.00,
    image: "https://m.media-amazon.com/images/I/7159+ELcEOL._AC_UF894,1000_QL80_.jpg",
    category: "Home",
    rating: 4.8,
    reviewCount: 567,
    badge: "sale",
    description: "Handcrafted ceramic dripper and carafe for the perfect morning brew.",
  },
  {
    id: 11,
    name: "Leather Card Wallet",
    price: 39.00,
    image: "https://buffalojackson.com/cdn/shop/files/roosevekt-buffalo-leather-grain-ID-wallet-1-lifestyle_2000x.jpg?v=1755630456",
    category: "Accessories",
    rating: 4.5,
    reviewCount: 743,
    description: "Slim full-grain leather wallet with RFID blocking and 6 card slots.",
  },
  {
    id: 12,
    name: "Trail Hiking Boots",
    price: 119.00,
    originalPrice: 159.00,
    image: "https://cdn.thewirecutter.com/wp-content/media/2021/12/hikingboots-2048px-DSCF7462.jpg?auto=webp&quality=75&crop=1:1,smart&width=1024",
    category: "Footwear",
    rating: 4.7,
    reviewCount: 891,
    badge: "sale",
    description: "Waterproof Gore-Tex lining with Vibram outsole for rugged terrain.",
  },
];

export const categories = ["All", "Electronics", "Clothing", "Footwear", "Accessories", "Home"];
