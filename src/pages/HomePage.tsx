import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomePage: React.FC = () => {
  // Update document title
  useEffect(() => {
    document.title = 'Nội thất Việt - Đồ nội thất hiện đại cho không gian sống';
  }, []);
  
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-[400px] sm:h-[500px] md:h-[600px]"
        >
          <SwiperSlide>
            <div className="relative h-full">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                alt="Giảm giá mùa hè" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white p-6 max-w-4xl">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">Giảm giá mùa hè</h1>
                  <p className="text-lg md:text-xl mb-6">Tiết kiệm đến 50% cho bộ sưu tập mùa hè</p>
                  <Link to="/category/sale" className="btn-primary btn-lg">
                    Mua ngay
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full">
              <img 
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
                alt="Bộ sưu tập mới" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white p-6 max-w-4xl">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">Bộ sưu tập mới</h1>
                  <p className="text-lg md:text-xl mb-6">Khám phá những thiết kế mới nhất cho không gian của bạn</p>
                  <Link to="/category/new-arrivals" className="btn-primary btn-lg">
                    Khám phá
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      
      {/* Featured Categories */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Danh mục nổi bật</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { name: 'Sofa', image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg', link: '/category/sofa' },
              { name: 'Bàn', image: 'https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg', link: '/category/ban' },
              { name: 'Ghế', image: 'https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg', link: '/category/ghe' },
              { name: 'Phòng ngủ', image: 'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg', link: '/category/phong-ngu' },
              { name: 'Văn phòng', image: 'https://images.pexels.com/photos/3759073/pexels-photo-3759073.jpeg', link: '/category/van-phong' },
            ].map((category, index) => (
              <Link to={category.link} key={index} className="group">
                <div className="rounded-2lg overflow-hidden">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                      <div className="w-full p-3 md:p-4 bg-white bg-opacity-90">
                        <h3 className="font-medium text-gray-800">{category.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Best Selling Products */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold">Sản phẩm bán chạy</h2>
            <Link to="/category/best-sellers" className="text-primary-500 hover:text-primary-600 hidden sm:flex items-center">
              Xem tất cả
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="product-slider"
          >
            {[
              { 
                id: 'p1', 
                name: 'Sofa góc chữ L', 
                price: 15900000, 
                image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg',
                link: '/product/sofa-goc-chu-l'
              },
              { 
                id: 'p2', 
                name: 'Bàn ăn gỗ sồi 6 ghế', 
                price: 12500000, 
                image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
                link: '/product/ban-an-go-soi-6-ghe'
              },
              { 
                id: 'p3', 
                name: 'Giường ngủ gỗ tự nhiên', 
                price: 8900000, 
                image: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg',
                link: '/product/giuong-ngu-go-tu-nhien'
              },
              { 
                id: 'p4', 
                name: 'Ghế thư giãn', 
                price: 4500000, 
                image: 'https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg',
                link: '/product/ghe-thu-gian'
              },
              { 
                id: 'p5', 
                name: 'Bàn làm việc gỗ', 
                price: 3600000, 
                image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg',
                link: '/product/ban-lam-viec-go'
              },
            ].map((product) => (
              <SwiperSlide key={product.id}>
                <Link to={product.link} className="product-card block">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="product-card-img"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-primary-500 font-semibold">
                      {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="mt-6 text-center sm:hidden">
            <Link to="/category/best-sellers" className="btn-secondary inline-flex items-center">
              Xem tất cả
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="section">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold">Hàng mới về</h2>
            <Link to="/category/new-arrivals" className="text-primary-500 hover:text-primary-600 hidden sm:flex items-center">
              Xem tất cả
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { 
                id: 'p6', 
                name: 'Kệ tivi hiện đại', 
                price: 5200000, 
                image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
                link: '/product/ke-tivi-hien-dai'
              },
              { 
                id: 'p7', 
                name: 'Tủ quần áo 3 cánh', 
                price: 7400000, 
                image: 'https://images.pexels.com/photos/4273433/pexels-photo-4273433.jpeg',
                link: '/product/tu-quan-ao-3-canh'
              },
              { 
                id: 'p8', 
                name: 'Bàn cà phê gỗ teak', 
                price: 2900000, 
                image: 'https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg',
                link: '/product/ban-ca-phe-go-teak'
              },
              { 
                id: 'p9', 
                name: 'Ghế bar chân sắt', 
                price: 1800000, 
                image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
                link: '/product/ghe-bar-chan-sat'
              }
            ].map((product) => (
              <Link to={product.link} key={product.id} className="product-card block">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-card-img"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-primary-500 font-semibold">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link to="/category/new-arrivals" className="btn-secondary inline-flex items-center">
              Xem tất cả
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">Khách hàng nói gì về chúng tôi</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Nguyễn Thị Mai',
                avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
                role: 'Khách hàng',
                quote: 'Tôi rất hài lòng với chất lượng và dịch vụ của Nội thất Việt. Sofa mà tôi mua đã được sử dụng hơn 2 năm và vẫn giữ được dáng vẻ như mới.'
              },
              {
                name: 'Trần Văn Hùng',
                avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
                role: 'Khách hàng',
                quote: 'Đội ngũ nhân viên rất nhiệt tình và chuyên nghiệp. Họ đã tư vấn cho tôi những sản phẩm phù hợp với không gian nhà tôi.'
              },
              {
                name: 'Lê Thị Hương',
                avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
                role: 'Khách hàng',
                quote: 'Giá cả hợp lý, sản phẩm đa dạng và thời gian giao hàng nhanh chóng. Tôi sẽ tiếp tục mua sắm tại Nội thất Việt trong tương lai.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2lg shadow-soft">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Preview */}
      <section className="section">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold">Bài viết mới nhất</h2>
            <Link to="/blog" className="text-primary-500 hover:text-primary-600 hidden sm:flex items-center">
              Xem tất cả
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '10 ý tưởng trang trí phòng khách nhỏ',
                date: '10/06/2024',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
                excerpt: 'Khám phá những ý tưởng sáng tạo để biến phòng khách nhỏ trở nên rộng rãi và ấm cúng hơn.',
                link: '/blog/10-y-tuong-trang-tri-phong-khach-nho'
              },
              {
                title: 'Cách chọn nội thất phù hợp với phong cách Scandinavian',
                date: '05/06/2024',
                image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg',
                excerpt: 'Hướng dẫn chi tiết về cách lựa chọn nội thất để tạo nên không gian sống theo phong cách Bắc Âu tinh tế.',
                link: '/blog/cach-chon-noi-that-phong-cach-scandinavian'
              },
              {
                title: 'Xu hướng nội thất 2024: Những điều bạn cần biết',
                date: '01/06/2024',
                image: 'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg',
                excerpt: 'Cập nhật những xu hướng nội thất mới nhất trong năm 2024 để không gian sống của bạn luôn thời thượng.',
                link: '/blog/xu-huong-noi-that-2024'
              }
            ].map((post, index) => (
              <Link to={post.link} key={index} className="group">
                <article className="bg-white rounded-2lg shadow-soft overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-500 transition-colors">{post.title}</h3>
                    <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link to="/blog" className="btn-secondary inline-flex items-center">
              Xem tất cả
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;