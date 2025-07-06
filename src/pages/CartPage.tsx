import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <ShoppingBag className="mx-auto h-24 w-24 text-gray-400" />
        <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added any products to your cart yet.
        </p>
        <Link
          to="/products"
          className="btn-primary"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          {cart.map((item) => (
            <div key={item.product.id} className="flex items-center py-6 border-b border-gray-200 last:border-b-0">
              <div className="flex-shrink-0">
                <img
                  className="h-24 w-24 rounded-md object-cover"
                  src={item.product.image}
                  alt={item.product.name}
                />
              </div>
              
              <div className="ml-6 flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      <Link
                        to={`/product/${item.product.id}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {item.product.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.product.category}
                    </p>
                    <p className="text-lg font-medium text-gray-900 mt-2">
                      ${item.product.price.toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-2">
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                    
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="p-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 text-gray-600 hover:text-gray-800"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <p className="text-lg font-semibold text-gray-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              Clear Cart
            </button>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">
                Total: ${getCartTotal().toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">
                {cart.reduce((total, item) => total + item.quantity, 0)} items
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="btn-secondary flex-1"
            >
              Continue Shopping
            </Link>
            <button className="btn-primary flex-1">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
