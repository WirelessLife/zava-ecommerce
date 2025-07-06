import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    category: "Electronics",
    rating: 4.5,
    reviews: 128,
    inStock: true
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description: "Advanced fitness tracking with heart rate monitor, GPS, and 7-day battery life.",
    category: "Electronics",
    rating: 4.3,
    reviews: 89,
    inStock: true
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    description: "Comfortable and sustainable organic cotton t-shirt in various colors.",
    category: "Clothing",
    rating: 4.7,
    reviews: 203,
    inStock: true
  },
  {
    id: 4,
    name: "Premium Coffee Beans",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop",
    description: "Single-origin arabica coffee beans, medium roast. Perfect for espresso or drip coffee.",
    category: "Food",
    rating: 4.8,
    reviews: 156,
    inStock: true
  },
  {
    id: 5,
    name: "Leather Wallet",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop",
    description: "Handcrafted genuine leather wallet with RFID blocking technology.",
    category: "Accessories",
    rating: 4.4,
    reviews: 67,
    inStock: true
  },
  {
    id: 6,
    name: "Portable Phone Charger",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
    description: "10,000mAh portable power bank with fast charging and multiple ports.",
    category: "Electronics",
    rating: 4.2,
    reviews: 94,
    inStock: false
  },
  {
    id: 7,
    name: "Yoga Mat",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop",
    description: "Non-slip yoga mat with alignment lines and carrying strap included.",
    category: "Sports",
    rating: 4.6,
    reviews: 178,
    inStock: true
  },
  {
    id: 8,
    name: "Ceramic Coffee Mug",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=500&fit=crop",
    description: "Handmade ceramic coffee mug with unique glazed finish. Microwave and dishwasher safe.",
    category: "Home",
    rating: 4.5,
    reviews: 42,
    inStock: true
  },
  {
    id: 9,
    name: "Running Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    description: "Lightweight running shoes with breathable mesh and responsive cushioning.",
    category: "Sports",
    rating: 4.4,
    reviews: 112,
    inStock: true
  },
  {
    id: 10,
    name: "Wireless Mouse",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    description: "Ergonomic wireless mouse with precision tracking and 18-month battery life.",
    category: "Electronics",
    rating: 4.1,
    reviews: 85,
    inStock: true
  }
];

export const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Food",
  "Accessories",
  "Sports",
  "Home"
];
