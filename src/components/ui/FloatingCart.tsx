import React, { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const FloatingCart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, itemCount, subtotal, removeItem } = useCart();
  
  // Close cart drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [window.location.pathname]);
  
  // Don't show floating cart on cart and checkout pages
  if (window.location.pathname === '/cart' || window.location.pathname === '/checkout') {
    return null;
  }
  
  if (itemCount === 0) {
    return null;
  }
  
  return (
    <div className="fixed right-4 bottom-20 z-40 hidden md:block">
      {isOpen ? (
        <div className="bg-white rounded-2lg shadow-medium w-80 overflow-hidden">
          <div className="bg-primary-400 px-4 py-3 text-white flex justify-between items-center">
            <h3 className="font-medium">Giỏ hàng ({itemCount})</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="max-h-80 overflow-y-auto p-4">
            {items.length === 0 ? (
              <p className="text-gray-500 text-center py-4">Giỏ hàng trống</p>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-medium">{item.name}</h4>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-gray-600 text-sm">
                          {item.quantity} x {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                        </p>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex justify-between font-medium mb-4">
              <span>Tổng cộng:</span>
              <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(subtotal)}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <Link 
                to="/cart" 
                className="btn-secondary text-center"
              >
                Xem giỏ hàng
              </Link>
              <Link 
                to="/checkout" 
                className="btn-primary text-center"
              >
                Thanh toán
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary-400 hover:bg-primary-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-medium transition-colors relative"
        >
          <ShoppingBag size={24} />
          <span className="absolute -top-1 -right-1 bg-secondary-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            {itemCount}
          </span>
        </button>
      )}
    </div>
  );
};

export default FloatingCart;