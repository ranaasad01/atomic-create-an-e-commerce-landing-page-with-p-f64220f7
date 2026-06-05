export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  badge?: "sale" | "new" | "hot";
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
