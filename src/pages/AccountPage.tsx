import React from 'react';
import { Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { User, Package, Settings, Heart, LogOut, ChevronRight, ArrowLeft, Truck, MapPin, Phone } from 'lucide-react';

// Mock data for orders
const mockOrders = [
  {
    id: 'ORD123',
    date: '2024-03-15',
    status: 'Đang giao hàng',
    total: 15900000,
    items: [
      {
        id: 'p1',
        name: 'Sofa góc chữ L',
        price: 8900000,
        quantity: 1,
        image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg'
      },
      {
        id: 'p2',
        name: 'Bàn cà phê gỗ teak',
        price: 7000000,
        quantity: 1,
        image: 'https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg'
      }
    ],
    shippingAddress: '123 Đường ABC, Phường XYZ, Quận 1, TP.HCM',
    shippingMethod: 'Giao hàng tiêu chuẩn',
    paymentMethod: 'Thanh toán khi nhận hàng',
    trackingNumber: 'TN123456789'
  },
  {
    id: 'ORD122',
    date: '2024-03-10',
    status: 'Đã giao',
    total: 8900000,
    items: [
      {
        id: 'p3',
        name: 'Giường ngủ gỗ tự nhiên',
        price: 8900000,
        quantity: 1,
        image: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg'
      }
    ],
    shippingAddress: '123 Đường ABC, Phường XYZ, Quận 1, TP.HCM',
    shippingMethod: 'Giao hàng nhanh',
    paymentMethod: 'Thẻ tín dụng',
    trackingNumber: 'TN123456788'
  }
];

// Mock data for wishlist
const mockWishlist = [
  {
    id: 'p4',
    name: 'Ghế thư giãn',
    price: 4500000,
    image: 'https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg',
    inStock: true
  },
  {
    id: 'p5',
    name: 'Bàn làm việc gỗ',
    price: 3600000,
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg',
    inStock: true
  },
  {
    id: 'p6',
    name: 'Kệ tivi hiện đại',
    price: 5200000,
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
    inStock: false
  }
];

function AccountDashboard() {
  const recentOrders = mockOrders.slice(0, 2);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Tài khoản của tôi</h1>
        <button className="text-gray-600 hover:text-primary-500 flex items-center text-sm">
          <LogOut size={16} className="mr-1" />
          Đăng xuất
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Summary */}
        <div className="bg-white rounded-2lg shadow-soft p-6">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center">
              <User size={32} className="text-primary-500" />
            </div>
            <div className="ml-4">
              <h2 className="font-semibold">Nguyễn Văn A</h2>
              <p className="text-sm text-gray-600">nguyenvana@example.com</p>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-4 mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Số đơn hàng</span>
              <span className="font-medium">12</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tổng chi tiêu</span>
              <span className="font-medium">
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(45900000)}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/account/orders" className="bg-white rounded-2lg shadow-soft p-6 hover:shadow-medium transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Package size={24} className="text-primary-500 mr-3" />
                  <div>
                    <h3 className="font-medium">Đơn hàng của tôi</h3>
                    <p className="text-sm text-gray-600">Xem và theo dõi đơn hàng</p>
                  </div>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </Link>

            <Link to="/account/wishlist" className="bg-white rounded-2lg shadow-soft p-6 hover:shadow-medium transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Heart size={24} className="text-primary-500 mr-3" />
                  <div>
                    <h3 className="font-medium">Danh sách yêu thích</h3>
                    <p className="text-sm text-gray-600">Các sản phẩm đã lưu</p>
                  </div>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </Link>

            <Link to="/account/settings" className="bg-white rounded-2lg shadow-soft p-6 hover:shadow-medium transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Settings size={24} className="text-primary-500 mr-3" />
                  <div>
                    <h3 className="font-medium">Cài đặt tài khoản</h3>
                    <p className="text-sm text-gray-600">Cập nhật thông tin cá nhân</p>
                  </div>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Đơn hàng gần đây</h2>
          <Link to="/account/orders" className="text-primary-500 hover:text-primary-600 text-sm">
            Xem tất cả
          </Link>
        </div>

        <div className="bg-white rounded-2lg shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mã đơn hàng
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ngày đặt
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trạng thái
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tổng tiền
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Chi tiết
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.date).toLocaleDateString('vi-VN')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        order.status === 'Đã giao' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.total)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                      <Link to={`/account/orders/${order.id}`} className="text-primary-500 hover:text-primary-600">
                        Xem chi tiết
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccountOrders() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Đơn hàng của tôi</h1>
      
      <div className="bg-white rounded-2lg shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mã đơn hàng
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ngày đặt
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tổng tiền
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Chi tiết
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(order.date).toLocaleDateString('vi-VN')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      order.status === 'Đã giao' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.total)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <Link to={`/account/orders/${order.id}`} className="text-primary-500 hover:text-primary-600">
                      Xem chi tiết
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function OrderDetail() {
  const { orderId } = useParams();
  const order = mockOrders.find(o => o.id === orderId);

  if (!order) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy đơn hàng</h1>
          <p className="text-gray-600 mb-4">Đơn hàng bạn đang tìm không tồn tại</p>
          <Link to="/account/orders" className="btn-primary">
            Quay lại danh sách đơn hàng
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center mb-6">
        <Link to="/account/orders" className="text-gray-600 hover:text-primary-500 mr-4">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold">Chi tiết đơn hàng {order.id}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Order Items */}
          <div className="bg-white rounded-2lg shadow-soft overflow-hidden mb-6">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Sản phẩm</h2>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">Số lượng: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-100 p-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tạm tính</span>
                <span>
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.total)}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Phí vận chuyển</span>
                <span>Miễn phí</span>
              </div>
              <div className="border-t border-gray-100 mt-2 pt-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Tổng cộng</span>
                  <span className="font-bold text-primary-500">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.total)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tracking Info */}
          {order.status === 'Đang giao hàng' && (
            <div className="bg-white rounded-2lg shadow-soft p-6 mb-6">
              <div className="flex items-center mb-4">
                <Truck size={20} className="text-primary-500 mr-2" />
                <h2 className="text-lg font-semibold">Thông tin vận chuyển</h2>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Mã vận đơn: <span className="font-medium">{order.trackingNumber}</span>
              </p>
              <div className="relative pt-4">
                <div className="flex items-center mb-8">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">1</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Đã xác nhận đơn hàng</p>
                    <p className="text-sm text-gray-500">15/03/2024 08:00</p>
                  </div>
                </div>
                <div className="flex items-center mb-8">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Đang vận chuyển</p>
                    <p className="text-sm text-gray-500">15/03/2024 10:30</p>
                  </div>
                </div>
                <div className="flex items-center opacity-50">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">3</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Giao hàng thành công</p>
                    <p className="text-sm text-gray-500">Dự kiến: 17/03/2024</p>
                  </div>
                </div>
                <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-primary-500"></div>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          {/* Order Info */}
          <div className="bg-white rounded-2lg shadow-soft p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Thông tin đơn hàng</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Mã đơn hàng</p>
                <p className="font-medium">{order.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Ngày đặt</p>
                <p className="font-medium">{new Date(order.date).toLocaleDateString('vi-VN')}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Trạng thái</p>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  order.status === 'Đã giao' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {order.status}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Phương thức thanh toán</p>
                <p className="font-medium">{order.paymentMethod}</p>
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="bg-white rounded-2lg shadow-soft p-6">
            <h2 className="text-lg font-semibold mb-4">Thông tin giao hàng</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Địa chỉ giao hàng</p>
                <div className="flex items-start">
                  <MapPin size={16} className="text-gray-400 mt-1 mr-2" />
                  <p className="font-medium">{order.shippingAddress}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Số điện thoại</p>
                <div className="flex items-center">
                  <Phone size={16} className="text-gray-400 mr-2" />
                  <p className="font-medium">0901234567</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Phương thức vận chuyển</p>
                <div className="flex items-center">
                  <Truck size={16} className="text-gray-400 mr-2" />
                  <p className="font-medium">{order.shippingMethod}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Wishlist() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Danh sách yêu thích</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockWishlist.map((product) => (
          <div key={product.id} className="bg-white rounded-2lg shadow-soft overflow-hidden">
            <div className="aspect-square relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-red-500 hover:text-red-600">
                <Heart size={18} fill="currentColor" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">{product.name}</h3>
              <p className="text-primary-500 font-semibold mb-2">
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
              </p>
              <div className="flex items-center justify-between">
                <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? 'Còn hàng' : 'Hết hàng'}
                </span>
                <Link 
                  to={`/product/${product.id}`}
                  className="btn-primary text-sm"
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AccountSettings() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Cài đặt tài khoản</h1>
      <div className="bg-white rounded-2lg shadow-soft p-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Họ và tên
              </label>
              <input
                type="text"
                className="input w-full"
                defaultValue="Nguyễn Văn A"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="input w-full"
                defaultValue="nguyenvana@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Số điện thoại
              </label>
              <input
                type="tel"
                className="input w-full"
                defaultValue="0901234567"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ngày sinh
              </label>
              <input
                type="date"
                className="input w-full"
                defaultValue="1990-01-01"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Địa chỉ
            </label>
            <textarea
              className="input w-full"
              rows={3}
              defaultValue="123 Đường ABC, Phường XYZ, Quận 1, TP.HCM"
            />
          </div>

          <div className="flex justify-end">
            <button type="submit" className="btn-primary">
              Lưu thay đổi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function AccountPage() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Routes>
        <Route index element={<AccountDashboard />} />
        <Route path="orders" element={<AccountOrders />} />
        <Route path="orders/:orderId" element={<OrderDetail />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="settings" element={<AccountSettings />} />
      </Routes>
    </div>
  );
}