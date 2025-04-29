import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, X, Plus, Minus, ChevronLeft, Truck, ShieldCheck, RotateCw } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { motion } from 'framer-motion';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [shippingMethod, setShippingMethod] = useState('standard');
  
  // Shipping cost based on method
  const shippingCosts = {
    standard: 150000,
    express: 300000,
    free: 0
  };
  
  // Get shipping cost
  const shippingCost = subtotal >= 2000000 ? 0 : shippingCosts[shippingMethod as keyof typeof shippingCosts];
  
  // Calculate total
  const total = subtotal - discount + shippingCost;
  
  // Apply coupon code
  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'giamgia10') {
      const discountAmount = subtotal * 0.1;
      setDiscount(discountAmount);
      alert('Áp dụng mã giảm giá thành công!');
    } else {
      setDiscount(0);
      alert('Mã giảm giá không hợp lệ!');
    }
  };
  
  // Update document title
  useEffect(() => {
    document.title = 'Giỏ hàng | Nội thất Việt';
  }, []);
  
  return (
    <div className="bg-gray-50 py-8">
      <div className="container">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Giỏ hàng</h1>
        
        {items.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2lg shadow-soft p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <ShoppingCart size={64} className="text-gray-300" />
            </div>
            <h2 className="text-xl font-semibold mb-4">Giỏ hàng của bạn đang trống</h2>
            <p className="text-gray-600 mb-6">
              Hãy thêm sản phẩm vào giỏ hàng và quay lại để tiến hành thanh toán.
            </p>
            <Link to="/" className="btn-primary">
              Tiếp tục mua sắm
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2lg shadow-soft overflow-hidden mb-6">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Sản phẩm ({items.length})</h2>
                    <button 
                      onClick={clearCart}
                      className="text-sm text-gray-500 hover:text-primary-500"
                    >
                      Xóa tất cả
                    </button>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {items.map((item) => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-6 flex flex-col sm:flex-row items-center"
                    >
                      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 mb-4 sm:mb-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-grow sm:ml-6">
                        <div className="flex flex-col sm:flex-row justify-between">
                          <div>
                            <h3 className="font-medium text-gray-800 mb-1">{item.name}</h3>
                            {item.color && (
                              <p className="text-sm text-gray-500 mb-2">Màu: {item.color}</p>
                            )}
                            <p className="font-semibold text-primary-500">
                              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                            </p>
                          </div>
                          
                          <div className="flex items-center mt-4 sm:mt-0">
                            <div className="flex items-center border border-gray-300 rounded-2lg">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="w-10 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-2 text-gray-500 hover:text-gray-700"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="ml-4 text-gray-400 hover:text-red-500"
                            >
                              <X size={20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2lg shadow-soft p-6">
                <h2 className="text-lg font-semibold mb-4">Phương thức vận chuyển</h2>
                
                <div className="space-y-3">
                  <label className="flex items-center p-3 border rounded-2lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="shipping"
                      value="standard"
                      checked={shippingMethod === 'standard'}
                      onChange={() => setShippingMethod('standard')}
                      className="text-primary-400"
                    />
                    <div className="ml-3 flex-grow">
                      <div className="font-medium">Giao hàng tiêu chuẩn</div>
                      <div className="text-sm text-gray-500">3-5 ngày làm việc</div>
                    </div>
                    <span className="font-medium">
                      {subtotal >= 2000000 ? 'Miễn phí' : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(shippingCosts.standard)}
                    </span>
                  </label>
                  
                  <label className="flex items-center p-3 border rounded-2lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="shipping"
                      value="express"
                      checked={shippingMethod === 'express'}
                      onChange={() => setShippingMethod('express')}
                      className="text-primary-400"
                    />
                    <div className="ml-3 flex-grow">
                      <div className="font-medium">Giao hàng nhanh</div>
                      <div className="text-sm text-gray-500">1-2 ngày làm việc</div>
                    </div>
                    <span className="font-medium">
                      {subtotal >= 2000000 ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(150000) : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(shippingCosts.express)}
                    </span>
                  </label>
                </div>
                
                {subtotal >= 2000000 && (
                  <div className="mt-4 flex items-center text-sm text-green-600">
                    <Truck size={16} className="mr-2" />
                    Bạn đủ điều kiện nhận miễn phí vận chuyển tiêu chuẩn!
                  </div>
                )}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2lg shadow-soft p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Tóm tắt đơn hàng</h2>
                
                <div className="mb-4">
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Tạm tính</span>
                    <span className="font-medium">
                      {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(subtotal)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Phí vận chuyển</span>
                    <span className="font-medium">
                      {shippingCost === 0 
                        ? 'Miễn phí' 
                        : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(shippingCost)}
                    </span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Giảm giá</span>
                      <span className="font-medium text-green-600">
                        -{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(discount)}
                      </span>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 my-2"></div>
                  
                  <div className="flex justify-between py-2">
                    <span className="font-semibold">Tổng cộng</span>
                    <span className="font-bold text-primary-500">
                      {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Nhập mã giảm giá"
                      className="input flex-grow text-sm"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button 
                      onClick={applyCoupon}
                      className="btn-secondary"
                    >
                      Áp dụng
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Mã giảm giá test: "GIAMGIA10" (giảm 10%)
                  </p>
                </div>
                
                <Link 
                  to="/checkout"
                  className="btn-primary w-full mb-4"
                >
                  Tiến hành thanh toán
                </Link>
                
                <Link 
                  to="/"
                  className="flex items-center justify-center text-primary-500 hover:text-primary-600 text-sm font-medium"
                >
                  <ChevronLeft size={16} className="mr-1" />
                  Tiếp tục mua sắm
                </Link>
                
                <div className="border-t border-gray-200 mt-6 pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <ShieldCheck size={16} className="text-primary-400 mt-0.5 mr-2" />
                      <span className="text-xs text-gray-600">Thanh toán an toàn và bảo mật</span>
                    </div>
                    <div className="flex items-start">
                      <RotateCw size={16} className="text-primary-400 mt-0.5 mr-2" />
                      <span className="text-xs text-gray-600">Đổi trả trong vòng 30 ngày</span>
                    </div>
                    <div className="flex items-start">
                      <Truck size={16} className="text-primary-400 mt-0.5 mr-2" />
                      <span className="text-xs text-gray-600">Miễn phí vận chuyển cho đơn hàng từ 2 triệu đồng</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;