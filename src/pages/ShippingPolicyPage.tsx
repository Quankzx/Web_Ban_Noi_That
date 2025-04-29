import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Package, Clock, Shield, ArrowLeft, CreditCard, RefreshCw, AlertCircle } from 'lucide-react';

const ShippingPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Chính sách vận chuyển | Nội thất Việt';
  }, []);

  return (
    <div className="bg-gray-50 py-12">
      <div className="container max-w-4xl">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 hover:text-primary-500 mb-8 group"
        >
          <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Quay lại trang chủ
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2lg shadow-soft overflow-hidden mb-8">
          <div className="p-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Chính sách vận chuyển</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến dịch vụ vận chuyển an toàn, nhanh chóng và tiện lợi cho khách hàng trên toàn quốc.
            </p>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2lg shadow-soft p-6 text-center">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="text-primary-500" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Miễn phí vận chuyển</h3>
            <p className="text-sm text-gray-600">Cho đơn hàng từ 2 triệu đồng</p>
          </div>

          <div className="bg-white rounded-2lg shadow-soft p-6 text-center">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-primary-500" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Thời gian giao hàng</h3>
            <p className="text-sm text-gray-600">3-7 ngày làm việc</p>
          </div>

          <div className="bg-white rounded-2lg shadow-soft p-6 text-center">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-primary-500" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Bảo hiểm hàng hóa</h3>
            <p className="text-sm text-gray-600">100% giá trị đơn hàng</p>
          </div>

          <div className="bg-white rounded-2lg shadow-soft p-6 text-center">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="text-primary-500" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Đóng gói cẩn thận</h3>
            <p className="text-sm text-gray-600">An toàn & chuyên nghiệp</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2lg shadow-soft overflow-hidden">
          <div className="p-8">
            {/* Shipping Methods */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Phương thức vận chuyển</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <Truck size={24} className="text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Giao hàng tiêu chuẩn</h3>
                    <p className="text-gray-600 mb-2">
                      Áp dụng cho tất cả đơn hàng trong phạm vi toàn quốc.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Thời gian: 3-5 ngày (nội thành), 5-7 ngày (ngoại thành)</li>
                      <li>• Phí vận chuyển: 150.000đ - 300.000đ tùy khu vực</li>
                      <li>• Miễn phí cho đơn hàng từ 2.000.000đ</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <Clock size={24} className="text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Giao hàng nhanh</h3>
                    <p className="text-gray-600 mb-2">
                      Áp dụng cho các đơn hàng cần giao gấp trong nội thành.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Thời gian: 1-2 ngày làm việc</li>
                      <li>• Phụ phí: 200.000đ - 400.000đ tùy khu vực</li>
                      <li>• Chỉ áp dụng cho một số khu vực nội thành</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Shipping Areas */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Khu vực giao hàng</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-3">Khu vực 1 (Nội thành)</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• TP. Hồ Chí Minh: Tất cả quận, huyện</li>
                    <li>• Hà Nội: Tất cả quận nội thành</li>
                    <li>• Đà Nẵng: Tất cả quận nội thành</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-3">Khu vực 2 (Ngoại thành)</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Các tỉnh thành phố khác</li>
                    <li>• Khu vực ngoại thành các thành phố lớn</li>
                    <li>• Thời gian giao hàng có thể kéo dài hơn</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Payment Methods */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Phương thức thanh toán</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <CreditCard size={24} className="text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Thanh toán trước</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Chuyển khoản ngân hàng</li>
                      <li>• Thẻ tín dụng/ghi nợ</li>
                      <li>• Ví điện tử (Momo, ZaloPay)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <Package size={24} className="text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Thanh toán khi nhận hàng</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• COD (Cash On Delivery)</li>
                      <li>• Áp dụng cho đơn hàng dưới 10 triệu</li>
                      <li>• Kiểm tra hàng trước khi thanh toán</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Return Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Chính sách đổi trả</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <RefreshCw size={24} className="text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Điều kiện đổi trả</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Thời gian: trong vòng 7 ngày kể từ ngày nhận hàng</li>
                      <li>• Sản phẩm còn nguyên tem, nhãn và chưa qua sử dụng</li>
                      <li>• Có đầy đủ hóa đơn, chứng từ kèm theo</li>
                      <li>• Không áp dụng cho sản phẩm đã được lắp đặt</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg bg-amber-50">
                  <AlertCircle size={24} className="text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Lưu ý quan trọng</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Kiểm tra kỹ sản phẩm trước khi nhận hàng</li>
                      <li>• Từ chối nhận hàng nếu phát hiện hư hỏng, không đúng mẫu</li>
                      <li>• Giữ lại toàn bộ bao bì, hộp đựng cho đến khi hết thời gian đổi trả</li>
                      <li>• Liên hệ hotline để được hướng dẫn quy trình đổi trả</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Info */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Thông tin liên hệ</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  Nếu bạn có bất kỳ thắc mắc nào về chính sách vận chuyển, vui lòng liên hệ với chúng tôi qua:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Hotline: 1900 1234</li>
                  <li>• Email: shipping@noithatviet.com</li>
                  <li>• Thời gian làm việc: 8:00 - 20:00 (Thứ 2 - Chủ nhật)</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicyPage;