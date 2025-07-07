# Zava - Modern Ecommerce Frontend

A beautiful, responsive ecommerce frontend demo built with React, TypeScript, and Tailwind CSS. This is a complete sample application showcasing modern ecommerce functionality with a curated set of demo products.

## About This Demo

Zava is a fully functional ecommerce frontend demonstration that showcases modern web development practices. It includes:

- **Sample Product Catalog**: 10 diverse demo products across multiple categories (Electronics, Clothing, Sports, etc.)
- **Complete Shopping Experience**: Browse, search, filter, view details, and manage cart items
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Tech Stack**: Built with the latest React ecosystem tools and best practices

This repository serves as an excellent starting point for building real ecommerce applications or as a reference for modern React development patterns.

## Features

### 🛍️ Core Functionality
- **Product Catalog**: Browse products with search and filtering
- **Shopping Cart**: Add, remove, and manage cart items
- **Product Details**: Detailed product pages with images and descriptions
- **Responsive Design**: Optimized for mobile, tablet, and desktop

### 🎨 User Interface
- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Intuitive Navigation**: Easy-to-use header with search and cart
- **Interactive Elements**: Hover effects and transitions
- **Accessibility**: Built with accessibility best practices

### 🔧 Technical Features
- **React 18**: Latest React with TypeScript support
- **State Management**: Context API for cart functionality
- **Local Storage**: Cart persistence across sessions
- **Routing**: React Router for navigation
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for beautiful, consistent icons

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with search
│   ├── ProductCard.tsx # Product card component
│   └── ProductFilters.tsx # Product filtering sidebar
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page with featured products
│   ├── ProductsPage.tsx # Product listing with filters
│   ├── ProductDetailPage.tsx # Individual product details
│   └── CartPage.tsx    # Shopping cart management
├── context/            # React context providers
│   └── CartContext.tsx # Cart state management
├── data/              # Static data and configurations
│   └── products.ts    # Sample product data
├── types/             # TypeScript type definitions
│   └── index.ts       # Shared interfaces and types
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Customization

### Customizing Products

This demo includes sample product data in `src/data/products.ts`. You can easily add, modify, or remove products by editing this file. Each product must follow the `Product` interface defined in `src/types/index.ts`.

#### Product Structure

Each product object has the following properties:

```typescript
{
  id: number;           // Unique identifier (must be unique across all products)
  name: string;         // Product display name
  price: number;        // Price in dollars (e.g., 29.99)
  image: string;        // Product image URL (preferably 500x500px)
  description: string;  // Detailed product description
  category: string;     // Category name (must match available categories)
  rating: number;       // Product rating (1.0 to 5.0)
  reviews: number;      // Number of customer reviews
  inStock: boolean;     // Product availability status
}
```

#### Adding a New Product

1. Open `src/data/products.ts`
2. Add a new product object to the `products` array:

```typescript
{
  id: 11, // Use the next available ID
  name: "New Product Name",
  price: 49.99,
  image: "https://images.unsplash.com/your-image-url?w=500&h=500&fit=crop",
  description: "Detailed description of your new product features and benefits.",
  category: "Electronics", // Must match an existing category
  rating: 4.5,
  reviews: 25,
  inStock: true
}
```

3. Save the file and restart the development server (`npm run dev`)

#### Modifying Existing Products

To modify a product, simply edit its properties in the `products` array:

```typescript
// Example: Update price and stock status
{
  id: 1,
  name: "Wireless Bluetooth Headphones",
  price: 69.99, // Changed from 79.99
  // ... other properties
  inStock: false // Changed from true
}
```

#### Removing Products

Remove a product by deleting its entire object from the `products` array. Make sure to maintain proper array syntax (commas between objects).

#### Managing Categories

Available categories are defined in the `categories` array at the bottom of `src/data/products.ts`:

```typescript
export const categories = [
  "All",        // Don't remove - used for "show all" filter
  "Electronics",
  "Clothing",
  "Food",
  "Accessories",
  "Sports",
  "Home"
];
```

To add a new category:
1. Add the category name to the `categories` array
2. Use the exact same spelling when assigning products to this category

#### Image Guidelines

- **Recommended size**: 500x500 pixels for optimal display
- **Format**: JPEG or PNG
- **Sources**: You can use Unsplash URLs (as in the examples) or your own hosted images
- **Unsplash URL format**: `https://images.unsplash.com/photo-[ID]?w=500&h=500&fit=crop`

#### Best Practices

- **Unique IDs**: Always use unique, sequential ID numbers
- **Consistent Categories**: Ensure category names exactly match those in the categories array
- **Realistic Data**: Use reasonable ratings (1.0-5.0) and review counts
- **Price Format**: Use decimal numbers (e.g., 29.99, not "29.99" or "$29.99")
- **Descriptions**: Write clear, compelling product descriptions
- **Stock Status**: Set `inStock: false` for products you want to show as unavailable

#### Testing Your Changes

After modifying products:
1. Save the file
2. The development server will automatically reload
3. Check the products page to see your changes
4. Verify filtering and search work correctly with new products/categories

### Styling
The application uses Tailwind CSS. You can:
- Modify colors in `tailwind.config.js`
- Add custom components in `src/index.css`
- Update the design system in the Tailwind config

### Features to Add
- User authentication
- Payment integration
- Order history
- Product reviews
- Wishlist functionality
- Real backend integration

## License

MIT License - feel free to use this project as a starting point for your own ecommerce application!