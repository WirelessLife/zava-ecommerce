# Zava - Modern Ecommerce Frontend

A beautiful, responsive ecommerce frontend built with React, TypeScript, and Tailwind CSS.

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

### Adding Products
Edit `src/data/products.ts` to add or modify products. Each product should follow the `Product` interface defined in `src/types/index.ts`.

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
