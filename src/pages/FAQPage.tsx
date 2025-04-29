import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, Search, Package, Truck, CreditCard, RotateCw, Shield, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Làm thế nào để đặt hàng trên website?',
    answer: 'Để đặt hàng trên website, bạn có thể thực hiện theo các bước sau:\n1. Chọn sản phẩm và thêm vào giỏ hàng\n2. Kiểm tra giỏ hàng và nhấn "Thanh toán"\n3. Điền thông tin giao hàng\n4. Chọn phương thức thanh toán\n5. Xác nhận đơn hàng',
    category: 'Đặt hàng'
  },
  {
    question: 'Các phương thức thanh toán được chấp nhận?',
    answer: 'Chúng tôi chấp nhận nhiều phương thức thanh toán khác nhau:\n- Thanh toán khi nhận hàng (COD)\n- Chuyển khoản ngân hàng\n- Thẻ tín dụng/ghi nợ (Visa, Mastercard, JCB)\n- Ví điện tử (Momo, ZaloPay)',
    category: 'Thanh toán'
  },
  {
    question: 'Thời gian giao hàng là bao lâu?',
    answer: 'Thời gian giao hàng phụ thuộc vào khu vực:\n- Nội thành: 3-5 ngày làm việc\n- Ngoại thành: 5-7 ngày làm việc\n- Các tỉnh khác: 7-10 ngày làm việc\nLưu ý: Thời gian có thể thay đổi tùy thuộc vào điều kiện thời tiết và giao thông.',
    category: 'Vận chuyển'
  },
  {
    question: 'Chính sách đổi trả như thế nào?',
    answer: 'Chúng tôi áp dụng chính sách đổi trả trong vòng 30 ngày với các điều kiện:\n- Sản phẩm còn nguyên tem, nhãn\n- Chưa qua sử dụng hoặc lắp đặt\n- Có đầy đủ hóa đơn mua hàng\n- Sản phẩm không bị hư hỏng do người dùng',
    category: 'Đổi trả'
  },
  {
    question: 'Có được kiểm tra hàng trước khi nhận không?',
    answer: 'Có, bạn được quyền kiểm tra hàng trước khi nhận và thanh toán. Nếu phát hiện sản phẩm bị hư hỏng hoặc không đúng mẫu, bạn có thể từ chối nhận hàng và không phải thanh toán.',
    category: 'Vận chuyển'
  },
  {
    question: 'Làm thế nào để theo dõi đơn hàng?',
    answer: 'Bạn có thể theo dõi đơn hàng bằng các cách sau:\n1. Đăng nhập vào tài khoản và xem trong mục "Đơn hàng của tôi"\n2. Sử dụng mã vận đơn được gửi qua email\n3. Liên hệ hotline 1900 1234 để được hỗ trợ',
    category: 'Đặt hàng'
  },
  {
    question: 'Có được miễn phí vận chuyển không?',
    answer: 'Chúng tôi áp dụng miễn phí vận chuyển cho:\n- Đơn hàng từ 2 triệu đồng\n- Khu vực nội thành các thành phố lớn\n- Các chương trình khuyến mãi đặc biệt',
    category: 'Vận chuyển'
  },
  {
    question: 'Làm thế nào để hủy đơn hàng?',
    answer: 'Để hủy đơn hàng, bạn có thể:\n1. Đăng nhập và hủy trực tiếp trên website (nếu đơn hàng chưa được xử lý)\n2. Liên hệ hotline 1900 1234\n3. Gửi yêu cầu qua email support@noithatviet.com',
    category: 'Đặt hàng'
  },
  {
    question: 'Chính sách bảo hành như thế nào?',
    answer: 'Chính sách bảo hành của chúng tôi:\n- Thời gian: 12-24 tháng tùy sản phẩm\n- Bảo hành tại nhà cho sản phẩm lớn\n- Đổi mới trong 7 ngày đầu nếu sản phẩm lỗi\n- Bảo hành không áp dụng cho các trường hợp hư hỏng do người dùng',
    category: 'Bảo hành'
  },
  {
    question: 'Có dịch vụ lắp đặt tại nhà không?',
    answer: 'Có, chúng tôi cung cấp dịch vụ lắp đặt tại nhà:\n- Miễn phí lắp đặt cho các sản phẩm lớn\n- Đội ngũ kỹ thuật chuyên nghiệp\n- Bảo hành lắp đặt 12 tháng\n- Đặt lịch lắp đặt linh hoạt',
    category: 'Dịch vụ'
  },
  {
    question: 'Làm thế nào để tạo tài khoản?',
    answer: 'Để tạo tài khoản, bạn có thể:\n1. Nhấn vào nút "Đăng ký" trên website\n2. Điền thông tin cá nhân\n3. Xác nhận email\n4. Đăng nhập và bắt đầu mua sắm',
    category: 'Tài khoản'
  },
  {
    question: 'Có thể thay đổi địa chỉ giao hàng sau khi đặt không?',
    answer: 'Có, bạn có thể thay đổi địa chỉ giao hàng:\n- Trước khi đơn hàng được xử lý\n- Liên hệ hotline 1900 1234\n- Có thể phát sinh phí vận chuyển mới',
    category: 'Vận chuyển'
  }
];

const categories = ['Tất cả', 'Đặt hàng', 'Thanh toán', 'Vận chuyển', 'Đổi trả', 'Bảo hành', 'Dịch vụ', 'Tài khoản'];

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  useEffect(() => {
    document.title = 'Câu hỏi thường gặp | Nội thất Việt';
  }, []);
  
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tất cả' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Câu hỏi thường gặp</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tìm hiểu thêm về sản phẩm và dịch vụ của chúng tôi qua những câu hỏi thường gặp từ khách hàng.
            </p>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2lg shadow-soft p-4 text-center">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <Package className="text-primary-500" size={24} />
            </div>
            <h3 className="font-medium">Đặt hàng</h3>
          </div>
          
          <div className="bg-white rounded-2lg shadow-soft p-4 text-center">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <Truck className="text-primary-500" size={24} />
            </div>
            <h3 className="font-medium">Vận chuyển</h3>
          </div>
          
          <div className="bg-white rounded-2lg shadow-soft p-4 text-center">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <RotateCw className="text-primary-500" size={24} />
            </div>
            <h3 className="font-medium">Đổi trả</h3>
          </div>
          
          <div className="bg-white rounded-2lg shadow-soft p-4 text-center">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="text-primary-500" size={24} />
            </div>
            <h3 className="font-medium">Bảo hành</h3>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-white rounded-2lg shadow-soft p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm câu hỏi..."
                  className="input w-full pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
            <div className="w-full md:w-48">
              <select
                className="input w-full"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* FAQ List */}
        <div className="bg-white rounded-2lg shadow-soft overflow-hidden">
          <div className="divide-y divide-gray-100">
            {filteredFAQs.length === 0 ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h3 className="font-medium mb-2">Không tìm thấy kết quả</h3>
                <p className="text-gray-600">
                  Không tìm thấy câu hỏi phù hợp với tìm kiếm của bạn.
                  Vui lòng thử lại với từ khóa khác.
                </p>
              </div>
            ) : (
              filteredFAQs.map((faq, index) => (
                <div key={index} className="border-b last:border-b-0">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full text-left px-6 py-4 focus:outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium pr-8">{faq.question}</h3>
                      {expandedIndex === index ? (
                        <ChevronUp size={20} className="text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <div className="text-gray-600 whitespace-pre-line">
                            {faq.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            )}
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="mt-12 bg-white rounded-2lg shadow-soft p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Vẫn chưa tìm được câu trả lời?</h2>
            <p className="text-gray-600">
              Đừng ngần ngại liên hệ với chúng tôi nếu bạn cần hỗ trợ thêm.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary-500" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Gọi cho chúng tôi</h3>
              <p className="text-gray-600 mb-2">Thứ 2 - Chủ nhật, 8:00 - 20:00</p>
              <a href="tel:19001234" className="text-primary-500 font-medium hover:underline">
                1900 1234
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-primary-500" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Gửi email</h3>
              <p className="text-gray-600 mb-2">Phản hồi trong vòng 24 giờ</p>
              <a href="mailto:support@noithatviet.com" className="text-primary-500 font-medium hover:underline">
                support@noithatviet.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;