# 🛒 Zava E-Commerce

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-38bdf8.svg)](https://tailwindcss.com/)

A modern, responsive e-commerce web application built with React, TypeScript, and Tailwind CSS. Zava provides a seamless shopping experience with features like product browsing, detailed product views, shopping cart management, and persistent local storage.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Usage & Development](#-usage--development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

Zava is a fully-functional e-commerce platform that demonstrates modern web development practices. Built with a focus on user experience and performance, it showcases:

- **Clean Architecture**: Well-organized component structure with separation of concerns
- **Type Safety**: Full TypeScript implementation for robust code
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **State Management**: Efficient state handling using React Context API
- **Persistent Data**: Shopping cart data persists across sessions using local storage
- **Optimized Performance**: Fast loading and smooth interactions powered by Vite

---

## ✨ Features

### 🏪 Core Shopping Features
- **Product Catalog**: Browse a wide selection of products across multiple categories
- **Advanced Search**: Real-time search functionality to find products quickly
- **Product Filtering**: Filter products by category, price range, and availability
- **Product Sorting**: Sort by price (low to high, high to low) or by name
- **Product Details**: Comprehensive product pages with descriptions, ratings, and reviews
- **Shopping Cart**: Add, remove, and update product quantities in your cart
- **Cart Persistence**: Cart data is saved to local storage and persists across browser sessions

### 🎨 User Experience
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Intuitive Navigation**: Easy-to-use navigation with React Router
- **Visual Feedback**: Smooth transitions and interactive elements
- **Product Ratings**: Display of product ratings with star reviews
- **Stock Indicators**: Clear indication of product availability
- **Featured Products**: Highlighted products on the homepage

### 🛠️ Technical Features
- **TypeScript**: Full type safety throughout the application
- **Component-Based**: Modular, reusable components
- **Context API**: Global state management for cart functionality
- **Modern Icons**: Beautiful icons from Lucide React
- **Fast Builds**: Lightning-fast development and production builds with Vite

---

## 🚀 Technology Stack

### Frontend
- **React 18.2.0** - UI library for building interactive user interfaces
- **TypeScript 5.0.2** - Static type checking for JavaScript
- **React Router DOM 6.8.1** - Client-side routing and navigation
- **Vite 4.4.5** - Next-generation frontend build tool

### Styling
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **PostCSS 8.4.24** - CSS transformations and optimizations
- **Autoprefixer 10.4.14** - Automatic vendor prefixing

### Icons & UI
- **Lucide React 0.263.1** - Beautiful, consistent icon set

### Development Tools
- **ESLint 8.45.0** - Code linting and quality assurance
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vite Plugin React** - React fast refresh and JSX support

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 16.x or higher
- **npm**: Version 8.x or higher (comes with Node.js)

To check your current versions:

```bash
node --version
npm --version
```

---

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/WirelessLife/zava-ecommerce.git
cd zava-ecommerce
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies listed in `package.json`.

### 3. Start the Development Server

```bash
npm run dev
```

The application will start and automatically open in your default browser at `http://localhost:3000`.

---

## 📁 Project Structure

```
zava-ecommerce/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductFilters.tsx
│   │   └── SimpleHeader.tsx
│   ├── context/         # React Context providers
│   │   └── CartContext.tsx
│   ├── data/            # Static data and mock data
│   │   └── products.ts
│   ├── pages/           # Page components (routes)
│   │   ├── HomePage.tsx
│   │   ├── ProductsPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   └── CartPage.tsx
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── README.md            # Project documentation
```

### Key Directories

- **`components/`**: Reusable UI components used across different pages
- **`context/`**: React Context API implementation for global state management
- **`data/`**: Product data and other static data sources
- **`pages/`**: Top-level page components that correspond to routes
- **`types/`**: TypeScript interfaces and type definitions

---

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with hot module replacement (HMR).
- Opens at [http://localhost:3000](http://localhost:3000)
- Page automatically reloads when you make changes
- You'll see lint errors in the console

### `npm run build`

Builds the app for production to the `dist` folder.
- Compiles TypeScript code
- Bundles and minifies JavaScript and CSS
- Optimizes assets for best performance
- Ready for deployment

### `npm run preview`

Locally preview the production build before deploying.
- Runs a local static web server
- Serves the production build from `dist/`
- Useful for testing the production build locally

### `npm run lint`

Runs ESLint to check code quality and style.
- Checks for code errors and warnings
- Enforces consistent code style
- Reports unused directives

---

## 💻 Usage & Development

### Adding New Products

Products are defined in `src/data/products.ts`. To add a new product:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  price: 99.99,
  description: 'Product description',
  category: 'Category',
  image: 'image-url',
  rating: 4.5,
  reviews: 100,
  inStock: true
}
```

### Customizing Styles

The project uses Tailwind CSS for styling. You can customize:

1. **Colors**: Edit `tailwind.config.js` to modify the color palette
2. **Global Styles**: Edit `src/index.css` for global CSS
3. **Component Styles**: Use Tailwind utility classes in components

### Working with the Cart

The shopping cart uses React Context for state management:

```typescript
import { useCart } from '../context/CartContext';

function YourComponent() {
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useCart();
  // Use cart methods
}
```

### Development Workflow

1. **Make Changes**: Edit files in the `src/` directory
2. **Hot Reload**: Changes appear automatically in the browser
3. **Check Console**: Watch for TypeScript or lint errors
4. **Test Locally**: Navigate through the app to test changes
5. **Build**: Run `npm run build` before committing major changes

---

## 🌐 Deployment

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deployment Options

#### Vercel (Recommended)

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts

Or connect your GitHub repository to Vercel for automatic deployments.

#### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy via Netlify CLI or drag-and-drop

#### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/zava-ecommerce",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

### Environment Configuration

For production deployments, ensure:
- Base URL is correctly configured in `vite.config.ts`
- Asset paths are correct
- Any environment variables are properly set

---

## 🤝 Contributing

We welcome contributions to Zava! Here's how you can help:

### Getting Started

1. **Fork the Repository**: Click the 'Fork' button at the top right
2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/your-username/zava-ecommerce.git
   ```
3. **Create a Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Making Changes

1. Make your changes in your feature branch
2. Follow the existing code style and conventions
3. Write clear, concise commit messages
4. Test your changes thoroughly

### Submitting a Pull Request

1. **Push to Your Fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Open a Pull Request**: Go to the original repository and click 'New Pull Request'
3. **Describe Your Changes**: Provide a clear description of what you've changed and why
4. **Wait for Review**: Maintainers will review your PR and may request changes

### Code Style Guidelines

- Use TypeScript for all new code
- Follow the existing component structure
- Use functional components with hooks
- Use Tailwind CSS for styling (avoid inline styles)
- Keep components small and focused
- Write descriptive variable and function names
- Add comments for complex logic

### Reporting Issues

Found a bug or have a suggestion? Please open an issue:

1. Check if the issue already exists
2. Use a clear, descriptive title
3. Provide detailed steps to reproduce (for bugs)
4. Include screenshots if applicable
5. Specify your environment (browser, OS, Node version)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**MIT License Summary:**
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

---

## 📧 Contact

**Project Maintainer**: Anthony Bartolo

**GitHub**: [WirelessLife](https://github.com/WirelessLife)

**Repository**: [zava-ecommerce](https://github.com/WirelessLife/zava-ecommerce)

For questions, suggestions, or feedback, please open an issue on GitHub.

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React library
- **Tailwind Labs** - For Tailwind CSS
- **Lucide** - For the beautiful icon set
- **Vite Team** - For the blazing-fast build tool
- **Open Source Community** - For inspiration and support

---

## 🗺️ Future Roadmap

Potential features and improvements for future releases:

- [ ] User authentication and accounts
- [ ] Backend API integration
- [ ] Payment processing integration
- [ ] Order history and tracking
- [ ] Product reviews and ratings system
- [ ] Wishlist functionality
- [ ] Advanced product recommendations
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Progressive Web App (PWA) support

---

<div align="center">

**Made with ❤️ by the Zava Team**

If you find this project helpful, please consider giving it a ⭐ on GitHub!

</div>