import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Target, Award, Building, Star, Truck, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Giới thiệu | Nội thất Việt';
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nâng tầm không gian sống của bạn
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Với hơn 10 năm kinh nghiệm, Nội thất Việt tự hào mang đến những sản phẩm chất lượng cao và dịch vụ chuyên nghiệp, góp phần tạo nên không gian sống hoàn hảo cho mọi gia đình Việt.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">10+</div>
              <p className="text-gray-600">Năm kinh nghiệm</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">50k+</div>
              <p className="text-gray-600">Khách hàng hài lòng</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">1000+</div>
              <p className="text-gray-600">Sản phẩm đa dạng</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">20+</div>
              <p className="text-gray-600">Showroom toàn quốc</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Giá trị cốt lõi</h2>
            <p className="text-gray-600">
              Những giá trị định hình nên thương hiệu và cam kết của chúng tôi với khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2lg shadow-soft">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                <Star className="text-primary-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Chất lượng</h3>
              <p className="text-gray-600">
                Cam kết mang đến những sản phẩm chất lượng cao, được tuyển chọn kỹ lưỡng từ các nhà sản xuất uy tín.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2lg shadow-soft">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-primary-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Dịch vụ</h3>
              <p className="text-gray-600">
                Đội ngũ nhân viên chuyên nghiệp, tận tâm, luôn sẵn sàng hỗ trợ và tư vấn cho khách hàng.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2lg shadow-soft">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-primary-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sáng tạo</h3>
              <p className="text-gray-600">
                Không ngừng đổi mới, cập nhật xu hướng và mang đến những giải pháp nội thất hiện đại.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Câu chuyện của chúng tôi</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nội thất Việt được thành lập vào năm 2014 với sứ mệnh mang đến những sản phẩm nội thất chất lượng cao, thiết kế hiện đại và phù hợp với người Việt Nam.
                </p>
                <p>
                  Trải qua hơn một thập kỷ phát triển, chúng tôi đã không ngừng mở rộng và hoàn thiện, từ một cửa hàng nhỏ tại TP.HCM đến hệ thống showroom trải dài khắp cả nước.
                </p>
                <p>
                  Với đội ngũ thiết kế chuyên nghiệp và nhà máy sản xuất hiện đại, chúng tôi tự tin mang đến những sản phẩm nội thất đáp ứng mọi nhu cầu của khách hàng, từ căn hộ, nhà phố đến biệt thự, văn phòng.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                    alt="Showroom Nội thất Việt"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg"
                    alt="Sản phẩm nội thất"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-2lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg"
                    alt="Không gian nội thất"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg"
                    alt="Thiết kế nội thất"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Đội ngũ của chúng tôi</h2>
            <p className="text-gray-600">
              Những con người tài năng và nhiệt huyết, luôn nỗ lực mang đến những sản phẩm và dịch vụ tốt nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Nguyễn Văn A',
                role: 'Giám đốc điều hành',
                image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
              },
              {
                name: 'Trần Thị B',
                role: 'Giám đốc sáng tạo',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
              },
              {
                name: 'Lê Văn C',
                role: 'Trưởng phòng kinh doanh',
                image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg'
              },
              {
                name: 'Phạm Thị D',
                role: 'Trưởng phòng thiết kế',
                image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <div className="absolute inset-0 bg-primary-100 rounded-full transform rotate-6"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Liên hệ với chúng tôi</h2>
            <p className="text-gray-600">
              Hãy ghé thăm showroom hoặc liên hệ với chúng tôi để được tư vấn và hỗ trợ tốt nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary-500" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Địa chỉ</h3>
              <p className="text-gray-600">123 Đường ABC, Quận 1, TP.HCM</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary-500" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Điện thoại</h3>
              <p className="text-gray-600">1900 1234</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary-500" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@noithatviet.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;