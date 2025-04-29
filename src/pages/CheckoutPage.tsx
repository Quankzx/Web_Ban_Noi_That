import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Info, Lock, AlertCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  district: string;
  ward: string;
  paymentMethod: string;
  saveInfo: boolean;
  notes: string;
};

const CheckoutPage: React.FC = () => {
  const { items, subtotal, clearCart } = useCart();
  const [shippingCost, setShippingCost] = useState(150000);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    watch
  } = useForm<FormData>({
    defaultValues: {
      paymentMethod: 'cod',
      saveInfo: true
    }
  });
  
  // Total cost
  const total = subtotal + shippingCost;
  
  // Check if cart is empty and redirect
  useEffect(() => {
    if (items.length === 0) {
      navigate('/cart');
    }
    
    // Free shipping for orders over 2 million VND
    if (subtotal >= 2000000) {
      setShippingCost(0);
    }
    
    document.title = 'Thanh toán | Nội thất Việt';
  }, [items, navigate, subtotal]);
  
  // Watch payment method
  const paymentMethod = watch('paymentMethod');
  
  // Handle form submission
  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Order submitted:', data);
      alert('Đặt hàng thành công! Cảm ơn bạn đã mua sắm tại Nội thất Việt.');
      clearCart();
      navigate('/');
      setIsSubmitting(false);
    }, 2000);
  };
  
  return (
    <div className="bg-gray-50 py-8">
      <div className="container">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Thanh toán</h1>
          <Link to="/cart" className="text-primary-500 hover:text-primary-600 flex items-center">
            <ArrowLeft size={16} className="mr-1" />
            Quay lại giỏ hàng
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2lg shadow-soft overflow-hidden mb-6">
              {/* Checkout Steps */}
              <div className="border-b border-gray-100">
                <div className="flex">
                  <button
                    onClick={() => setStep(1)}
                    className={`flex-1 py-4 text-center font-medium ${
                      step === 1 ? 'text-primary-500 border-b-2 border-primary-400' : 'text-gray-500'
                    }`}
                  >
                    1. Thông tin giao hàng
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    disabled={step < 2}
                    className={`flex-1 py-4 text-center font-medium ${
                      step === 2 ? 'text-primary-500 border-b-2 border-primary-400' : 'text-gray-500'
                    } ${step < 2 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    2. Phương thức thanh toán
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={step < 3}
                    className={`flex-1 py-4 text-center font-medium ${
                      step === 3 ? 'text-primary-500 border-b-2 border-primary-400' : 'text-gray-500'
                    } ${step < 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    3. Xác nhận đơn hàng
                  </button>
                </div>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Step 1: Shipping Information */}
                {step === 1 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-6"
                  >
                    <h2 className="text-lg font-semibold mb-4">Thông tin giao hàng</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="label">Họ và tên *</label>
                        <input
                          type="text"
                          className={`input w-full ${errors.fullName ? 'border-red-500' : ''}`}
                          placeholder="Nguyễn Văn A"
                          {...register('fullName', { required: 'Vui lòng nhập họ tên' })}
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="label">Email *</label>
                        <input
                          type="email"
                          className={`input w-full ${errors.email ? 'border-red-500' : ''}`}
                          placeholder="example@example.com"
                          {...register('email', { 
                            required: 'Vui lòng nhập email',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Email không hợp lệ'
                            }
                          })}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="label">Số điện thoại *</label>
                      <input
                        type="tel"
                        className={`input w-full ${errors.phone ? 'border-red-500' : ''}`}
                        placeholder="0901234567"
                        {...register('phone', { 
                          required: 'Vui lòng nhập số điện thoại',
                          pattern: {
                            value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                            message: 'Số điện thoại không hợp lệ'
                          }
                        })}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <label className="label">Địa chỉ *</label>
                      <input
                        type="text"
                        className={`input w-full ${errors.address ? 'border-red-500' : ''}`}
                        placeholder="Số nhà, tên đường"
                        {...register('address', { required: 'Vui lòng nhập địa chỉ' })}
                      />
                      {errors.address && (
                        <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="label">Tỉnh/Thành phố *</label>
                        <select
                          className={`input w-full ${errors.city ? 'border-red-500' : ''}`}
                          {...register('city', { required: 'Vui lòng chọn tỉnh/thành phố' })}
                        >
                          <option value="">Chọn tỉnh/thành phố</option>
                          <option value="Hà Nội">Hà Nội</option>
                          <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                          <option value="Đà Nẵng">Đà Nẵng</option>
                          <option value="Hải Phòng">Hải Phòng</option>
                          <option value="Cần Thơ">Cần Thơ</option>
                        </select>
                        {errors.city && (
                          <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="label">Quận/Huyện *</label>
                        <select
                          className={`input w-full ${errors.district ? 'border-red-500' : ''}`}
                          {...register('district', { required: 'Vui lòng chọn quận/huyện' })}
                        >
                          <option value="">Chọn quận/huyện</option>
                          <option value="Quận 1">Quận 1</option>
                          <option value="Quận 2">Quận 2</option>
                          <option value="Quận 3">Quận 3</option>
                        </select>
                        {errors.district && (
                          <p className="text-red-500 text-xs mt-1">{errors.district.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="label">Phường/Xã *</label>
                        <select
                          className={`input w-full ${errors.ward ? 'border-red-500' : ''}`}
                          {...register('ward', { required: 'Vui lòng chọn phường/xã' })}
                        >
                          <option value="">Chọn phường/xã</option>
                          <option value="Phường 1">Phường 1</option>
                          <option value="Phường 2">Phường 2</option>
                          <option value="Phường 3">Phường 3</option>
                        </select>
                        {errors.ward && (
                          <p className="text-red-500 text-xs mt-1">{errors.ward.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="label">Ghi chú</label>
                      <textarea
                        className="input w-full min-h-[100px]"
                        placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                        {...register('notes')}
                      ></textarea>
                    </div>
                    
                    <div className="mb-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="text-primary-400 rounded"
                          {...register('saveInfo')}
                        />
                        <span className="ml-2 text-sm text-gray-700">Lưu thông tin này cho lần sau</span>
                      </label>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="btn-primary"
                      >
                        Tiếp tục
                      </button>
                    </div>
                  </motion.div>
                )}
                
                {/* Step 2: Payment Method */}
                {step === 2 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-6"
                  >
                    <h2 className="text-lg font-semibold mb-4">Phương thức thanh toán</h2>
                    
                    <div className="space-y-3 mb-6">
                      <label className="flex items-center p-4 border rounded-2lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          value="cod"
                          {...register('paymentMethod', { required: true })}
                          className="text-primary-400"
                        />
                        <div className="ml-3">
                          <div className="font-medium">Thanh toán khi nhận hàng (COD)</div>
                          <div className="text-sm text-gray-500">Thanh toán bằng tiền mặt khi nhận hàng</div>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-4 border rounded-2lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          value="credit-card"
                          {...register('paymentMethod', { required: true })}
                          className="text-primary-400"
                        />
                        <div className="ml-3">
                          <div className="font-medium">Thẻ tín dụng / Ghi nợ</div>
                          <div className="text-sm text-gray-500">Thanh toán an toàn với Visa, Mastercard, JCB</div>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-4 border rounded-2lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          value="bank-transfer"
                          {...register('paymentMethod', { required: true })}
                          className="text-primary-400"
                        />
                        <div className="ml-3">
                          <div className="font-medium">Chuyển khoản ngân hàng</div>
                          <div className="text-sm text-gray-500">Thanh toán qua tài khoản ngân hàng</div>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-4 border rounded-2lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          value="momo"
                          {...register('paymentMethod', { required: true })}
                          className="text-primary-400"
                        />
                        <div className="ml-3">
                          <div className="font-medium">Ví MoMo</div>
                          <div className="text-sm text-gray-500">Thanh toán qua ví điện tử MoMo</div>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-4 border rounded-2lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          value="zalopay"
                          {...register('paymentMethod', { required: true })}
                          className="text-primary-400"
                        />
                        <div className="ml-3">
                          <div className="font-medium">ZaloPay</div>
                          <div className="text-sm text-gray-500">Thanh toán qua ví điện tử ZaloPay</div>
                        </div>
                      </label>
                    </div>
                    
                    {paymentMethod === 'credit-card' && (
                      <div className="bg-gray-50 p-4 rounded-2lg mb-6">
                        <div className="flex items-center mb-4">
                          <CreditCard size={20} className="text-gray-500 mr-2" />
                          <h3 className="font-medium">Thông tin thẻ</h3>
                        </div>
                        
                        <div className="mb-4">
                          <label className="label">Số thẻ</label>
                          <input
                            type="text"
                            className="input w-full"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="label">Ngày hết hạn</label>
                            <input
                              type="text"
                              className="input w-full"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <label className="label">Mã CVV</label>
                            <input
                              type="text"
                              className="input w-full"
                              placeholder="123"
                            />
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <label className="label">Tên chủ thẻ</label>
                          <input
                            type="text"
                            className="input w-full"
                            placeholder="NGUYEN VAN A"
                          />
                        </div>
                      </div>
                    )}
                    
                    {paymentMethod === 'bank-transfer' && (
                      <div className="bg-gray-50 p-4 rounded-2lg mb-6">
                        <div className="flex items-center mb-4">
                          <Info size={20} className="text-gray-500 mr-2" />
                          <h3 className="font-medium">Thông tin chuyển khoản</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Vui lòng chuyển khoản theo thông tin sau:</p>
                        <ul className="text-sm text-gray-600 space-y-1 mb-4">
                          <li><strong>Ngân hàng:</strong> Vietcombank</li>
                          <li><strong>Số tài khoản:</strong> 1234567890</li>
                          <li><strong>Chủ tài khoản:</strong> CÔNG TY TNHH NỘI THẤT VIỆT</li>
                          <li><strong>Nội dung:</strong> [Họ tên] thanh toán đơn hàng</li>
                        </ul>
                        <div className="flex items-center text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
                          <AlertCircle size={16} className="mr-2 flex-shrink-0" />
                          <p>Đơn hàng sẽ được xử lý sau khi chúng tôi nhận được thanh toán của bạn.</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="btn-secondary"
                      >
                        Quay lại
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="btn-primary"
                      >
                        Tiếp tục
                      </button>
                    </div>
                  </motion.div>
                )}
                
                {/* Step 3: Order Review */}
                {step === 3 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-6"
                  >
                    <h2 className="text-lg font-semibold mb-4">Xác nhận đơn hàng</h2>
                    
                    <div className="border rounded-2lg overflow-hidden mb-6">
                      <div className="p-4 bg-gray-50 border-b">
                        <h3 className="font-medium">Thông tin giao hàng</h3>
                      </div>
                      <div className="p-4">
                        <p className="font-medium">{watch('fullName')}</p>
                        <p className="text-sm text-gray-600">{watch('phone')}</p>
                        <p className="text-sm text-gray-600">{watch('email')}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          {watch('address')}, {watch('ward')}, {watch('district')}, {watch('city')}
                        </p>
                      </div>
                    </div>
                    
                    <div className="border rounded-2lg overflow-hidden mb-6">
                      <div className="p-4 bg-gray-50 border-b">
                        <h3 className="font-medium">Phương thức thanh toán</h3>
                      </div>
                      <div className="p-4">
                        <p>
                          {paymentMethod === 'cod' && 'Thanh toán khi nhận hàng (COD)'}
                          {paymentMethod === 'credit-card' && 'Thẻ tín dụng / Ghi nợ'}
                          {paymentMethod === 'bank-transfer' && 'Chuyển khoản ngân hàng'}
                          {paymentMethod === 'momo' && 'Ví MoMo'}
                          {paymentMethod === 'zalopay' && 'ZaloPay'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="border rounded-2lg overflow-hidden mb-6">
                      <div className="p-4 bg-gray-50 border-b">
                        <h3 className="font-medium">Sản phẩm đã đặt</h3>
                      </div>
                      <div className="divide-y divide-gray-100">
                        {items.map((item) => (
                          <div key={item.id} className="p-4 flex items-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="ml-4 flex-grow">
                              <p className="font-medium">{item.name}</p>
                              {item.color && (
                                <p className="text-sm text-gray-500">Màu: {item.color}</p>
                              )}
                            </div>
                            <div className="text-right">
                              <p className="font-medium">
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                              </p>
                              <p className="text-sm text-gray-500">x{item.quantity}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-2lg mb-6">
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Tạm tính</span>
                        <span>
                          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(subtotal)}
                        </span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Phí vận chuyển</span>
                        <span>
                          {shippingCost === 0 
                            ? 'Miễn phí' 
                            : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(shippingCost)}
                        </span>
                      </div>
                      <div className="border-t border-gray-200 my-2"></div>
                      <div className="flex justify-between py-2">
                        <span className="font-semibold">Tổng cộng</span>
                        <span className="font-bold text-primary-500">
                          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="btn-secondary"
                      >
                        Quay lại
                      </button>
                      <button
                        type="submit"
                        className="btn-primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Đang xử lý...
                          </>
                        ) : (
                          <>
                            <Lock size={16} className="mr-2" />
                            Đặt hàng
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2lg shadow-soft p-6 sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Đơn hàng của bạn</h2>
              
              <div className="max-h-96 overflow-y-auto mb-4 pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start py-3 border-b border-gray-100 last:border-b-0">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-3 flex-grow">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">Số lượng: {item.quantity}</p>
                    </div>
                    <div className="ml-2 text-right">
                      <p className="font-medium text-primary-500">
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Tạm tính</span>
                  <span>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Phí vận chuyển</span>
                  <span>
                    {shippingCost === 0 
                      ? 'Miễn phí' 
                      : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(shippingCost)}
                  </span>
                </div>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold">Tổng cộng</span>
                  <span className="font-bold text-primary-500">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}
                  </span>
                </div>
              </div>
              
              <div className="text-xs text-gray-500">
                <p className="mb-2">
                  Bằng cách đặt hàng, bạn đồng ý với các{' '}
                  <Link to="/terms" className="text-primary-500 hover:underline">Điều khoản và Điều kiện</Link>
                  {' '}của chúng tôi.
                </p>
                <div className="flex items-center text-green-600">
                  <Lock size={14} className="mr-1" />
                  <span>Thanh toán an toàn và bảo mật</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;