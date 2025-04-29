import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Package, Shield, RefreshCw, Clock, AlertCircle, Phone, Mail } from 'lucide-react';

const ReturnPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Chính sách đổi trả | Nội thất Việt';
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Chính sách đổi trả</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cam kết đảm bảo sự hài lòng của quý khách với các sản phẩm mua tại Nội thất Việt.
            </p>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2lg shadow-soft p-6 text-center">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-primary-500" size={24} />
            </div>
            <h3 className="font-semibold mb-2">30 ngày đổi trả</h3>
            <p className="text-sm text-gray-600">Kể từ ngày nhận hàng</p>
          </div>

          <div className="bg-white rounded-2lg shadow-soft p-6 text-center">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="text-primary-500" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Miễn phí đổi trả</h3>
            <p className="text-sm text-gray-600">Cho sản phẩm lỗi</p>
          </div>

          <div className="bg-white rounded-2lg shadow-soft p-6 text-center">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-primary-500" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Bảo hành 24 tháng</h3>
            <p className="text-sm text-gray-600">Cho sản phẩm chính hãng</p>
          </div>

          <div className="bg-white rounded-2lg shadow-soft p-6 text-center">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="text-primary-500" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Đổi mới 100%</h3>
            <p className="text-sm text-gray-600">Nếu sản phẩm lỗi</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2lg shadow-soft overflow-hidden">
          <div className="p-8">
            {/* Return Conditions */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Điều kiện đổi trả</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <Clock size={24} className="text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Thời gian đổi trả</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 30 ngày đổi trả cho tất cả sản phẩm</li>
                      <li>• 7 ngày đổi mới cho sản phẩm lỗi do nhà sản xuất</li>
                      <li>• Thời gian tính từ ngày nhận hàng</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <Package size={24} className="text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Điều kiện sản phẩm</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Còn nguyên tem, nhãn và chưa qua sử dụng</li>
                      <li>• Không bị hư hỏng, trầy xước do người dùng</li>
                      <li>• Có đầy đủ phụ kiện và quà tặng kèm theo (nếu có)</li>
                      <li>• Có hóa đơn mua hàng hoặc phiếu bảo hành</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg bg-amber-50">
                  <AlertCircle size={24} className="text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Các trường hợp không áp dụng</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Sản phẩm đã qua sử dụng hoặc lắp đặt</li>
                      <li>• Sản phẩm bị hư hỏng do người dùng</li>
                      <li>• Sản phẩm không còn đầy đủ tem, nhãn, phụ kiện</li>
                      <li>• Sản phẩm trong chương trình khuyến mãi đặc biệt</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Return Process */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Quy trình đổi trả</h2>
              
              <div className="relative">
                <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200"></div>
                
                <div className="space-y-8">
                  <div className="relative flex gap-6">
                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary-500">1</span>
                    </div>
                    <div className="pt-4">
                      <h3 className="font-semibold mb-2">Liên hệ với chúng tôi</h3>
                      <p className="text-gray-600">
                        Gọi hotline 1900 1234 hoặc gửi email để thông báo yêu cầu đổi trả. 
                        Cung cấp mã đơn hàng và lý do đổi trả.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex gap-6">
                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary-500">2</span>
                    </div>
                    <div className="pt-4">
                      <h3 className="font-semibold mb-2">Nhận mã đổi trả</h3>
                      <p className="text-gray-600">
                        Sau khi xác nhận yêu cầu hợp lệ, chúng tôi sẽ gửi mã đổi trả và 
                        hướng dẫn đóng gói sản phẩm.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex gap-6">
                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary-500">3</span>
                    </div>
                    <div className="pt-4">
                      <h3 className="font-semibold mb-2">Gửi trả sản phẩm</h3>
                      <p className="text-gray-600">
                        Đóng gói sản phẩm cẩn thận và gửi về địa chỉ được cung cấp. 
                        Chúng tôi sẽ chi trả phí vận chuyển cho sản phẩm lỗi.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex gap-6">
                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary-500">4</span>
                    </div>
                    <div className="pt-4">
                      <h3 className="font-semibold mb-2">Kiểm tra và xử lý</h3>
                      <p className="text-gray-600">
                        Chúng tôi sẽ kiểm tra sản phẩm và thông báo kết quả trong vòng 3 ngày làm việc.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex gap-6">
                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary-500">5</span>
                    </div>
                    <div className="pt-4">
                      <h3 className="font-semibold mb-2">Hoàn tất đổi trả</h3>
                      <p className="text-gray-600">
                        Hoàn tiền hoặc gửi sản phẩm mới trong vòng 7 ngày làm việc sau khi 
                        xác nhận yêu cầu đổi trả hợp lệ.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Warranty Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Chính sách bảo hành</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <Shield size={24} className="text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Thời gian bảo hành</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 24 tháng cho sản phẩm chính hãng</li>
                      <li>• 12 tháng cho phụ kiện đi kèm</li>
                      <li>• Bảo hành tại nhà cho sản phẩm lớn</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <RefreshCw size={24} className="text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Điều kiện bảo hành</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Sản phẩm còn trong thời hạn bảo hành</li>
                      <li>• Tem bảo hành còn nguyên vẹn</li>
                      <li>• Lỗi kỹ thuật do nhà sản xuất</li>
                      <li>• Sử dụng đúng hướng dẫn</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Info */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Thông tin liên hệ</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <Phone size={24} className="text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Hotline hỗ trợ</h3>
                    <p className="text-gray-600">1900 1234</p>
                    <p className="text-sm text-gray-500 mt-1">
                      8:00 - 20:00 (Thứ 2 - Chủ nhật)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <Mail size={24} className="text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email hỗ trợ</h3>
                    <p className="text-gray-600">support@noithatviet.com</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Phản hồi trong vòng 24 giờ
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicyPage;