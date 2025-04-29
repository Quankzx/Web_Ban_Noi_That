import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Thumbs } from 'swiper/modules';
import { ShoppingCart, Heart, Share2, Truck, ArrowLeft, ArrowRight, RotateCw, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { getProductBySlug, getRelatedProducts, Product } from '../data/productData';

const ProductDetailPage: React.FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const { addItem } = useCart();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (productSlug) {
      const fetchedProduct = getProductBySlug(productSlug);
      
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        setSelectedColor(fetchedProduct.colors[0]?.name || '');
        document.title = `${fetchedProduct.name} | Nội thất Việt`;
        
        // Get related products
        const fetchedRelatedProducts = getRelatedProducts(fetchedProduct.id);
        setRelatedProducts(fetchedRelatedProducts);
      }
      
      setLoading(false);
    }
  }, [productSlug]);
  
  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.salePrice || product.price,
        image: product.images[0],
        quantity: quantity,
        color: selectedColor
      });
      
      // Show success toast (simplified)
      alert(`Đã thêm ${quantity} ${product.name} vào giỏ hàng`);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };
  
  if (loading) {
    return (
      <div className="container py-16">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Đang tải thông tin sản phẩm...</p>
          </div>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy sản phẩm</h1>
          <p className="text-gray-600 mb-6">Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link to="/" className="btn-primary">
            Quay về trang chủ
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 py-6">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-primary-500">Trang chủ</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link to={`/category/${product.categorySlug}`} className="text-gray-500 hover:text-primary-500">
                {product.category}
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="font-medium text-gray-800">{product.name}</li>
          </ol>
        </nav>
        
        {/* Product Info */}
        <div className="bg-white rounded-2lg shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
            {/* Product Images */}
            <div className="lg:col-span-3 p-4">
              <div className="sticky top-24">
                <Swiper
                  modules={[Navigation, Pagination, Thumbs]}
                  thumbs={{ swiper: thumbsSwiper }}
                  pagination={{ clickable: true }}
                  navigation
                  loop
                  className="rounded-2lg overflow-hidden mb-4"
                >
                  {product.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="aspect-square">
                        <img 
                          src={image} 
                          alt={`${product.name} - Hình ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                <Swiper
                  modules={[Navigation, Thumbs]}
                  watchSlidesProgress
                  slidesPerView={4}
                  spaceBetween={10}
                  onSwiper={setThumbsSwiper}
                  className="product-thumbs"
                >
                  {product.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="cursor-pointer rounded-lg overflow-hidden aspect-square border border-gray-200 hover:border-primary-400 transition-colors">
                        <img 
                          src={image} 
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            
            {/* Product Details */}
            <div className="lg:col-span-2 p-6 border-t md:border-t-0 md:border-l border-gray-100">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">{product.name}</h1>
              
              {/* Price */}
              <div className="mb-4">
                {product.salePrice ? (
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-primary-500">
                      {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                    </span>
                    <span className="ml-2 text-gray-500 line-through">
                      {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                    </span>
                    <span className="ml-2 bg-secondary-500 text-white text-xs px-2 py-1 rounded">
                      -{Math.round((product.price - product.salePrice) / product.price * 100)}%
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-primary-500">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                  </span>
                )}
              </div>
              
              {/* Short Description */}
              <p className="text-gray-600 mb-6">{product.shortDescription}</p>
              
              {/* Divider */}
              <div className="border-t border-gray-100 my-6"></div>
              
              {/* Color Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Màu sắc: <span className="text-primary-500">{selectedColor}</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`w-10 h-10 rounded-full ${selectedColor === color.name ? 'ring-2 ring-primary-400 ring-offset-2' : 'ring-1 ring-gray-300'}`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => setSelectedColor(color.name)}
                      title={color.name}
                    ></button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Số lượng:
                </label>
                <div className="flex w-32">
                  <button 
                    onClick={decreaseQuantity}
                    className="btn-secondary px-3 py-2 rounded-l-2lg rounded-r-none"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-full text-center border-y border-gray-300"
                  />
                  <button 
                    onClick={increaseQuantity}
                    className="btn-secondary px-3 py-2 rounded-r-2lg rounded-l-none"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button 
                  onClick={handleAddToCart}
                  className="btn-primary btn-lg flex-1"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Thêm vào giỏ hàng
                </button>
                <button className="btn-secondary">
                  <Heart size={20} />
                </button>
                <button className="btn-secondary">
                  <Share2 size={20} />
                </button>
              </div>
              
              {/* Availability */}
              <div className="flex items-center mb-4">
                <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                <span className="text-sm text-gray-700">
                  {product.inStock ? 'Còn hàng' : 'Hết hàng'}
                </span>
              </div>
              
              {/* Benefits */}
              <div className="border-t border-gray-100 pt-6 space-y-4">
                <div className="flex items-start">
                  <Truck size={18} className="text-primary-400 mt-0.5 mr-3" />
                  <div>
                    <h4 className="text-sm font-semibold">Miễn phí vận chuyển</h4>
                    <p className="text-sm text-gray-600">Cho đơn hàng từ 2 triệu đồng</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <RotateCw size={18} className="text-primary-400 mt-0.5 mr-3" />
                  <div>
                    <h4 className="text-sm font-semibold">Đổi trả trong 30 ngày</h4>
                    <p className="text-sm text-gray-600">Nếu sản phẩm có lỗi hoặc không như mô tả</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Info size={18} className="text-primary-400 mt-0.5 mr-3" />
                  <div>
                    <h4 className="text-sm font-semibold">Bảo hành chính hãng</h4>
                    <p className="text-sm text-gray-600">Bảo hành 24 tháng tại cửa hàng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Tabs */}
          <div className="border-t border-gray-100 px-6 py-8">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                <button 
                  onClick={() => setActiveTab('description')}
                  className={`pb-4 text-sm font-medium ${
                    activeTab === 'description'
                      ? 'border-b-2 border-primary-400 text-primary-500'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Mô tả
                </button>
                <button 
                  onClick={() => setActiveTab('specifications')}
                  className={`pb-4 text-sm font-medium ${
                    activeTab === 'specifications'
                      ? 'border-b-2 border-primary-400 text-primary-500'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Thông số kỹ thuật
                </button>
                <button 
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-4 text-sm font-medium ${
                    activeTab === 'reviews'
                      ? 'border-b-2 border-primary-400 text-primary-500'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Đánh giá
                </button>
                <button 
                  onClick={() => setActiveTab('shipping')}
                  className={`pb-4 text-sm font-medium ${
                    activeTab === 'shipping'
                      ? 'border-b-2 border-primary-400 text-primary-500'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Vận chuyển & Đổi trả
                </button>
              </nav>
            </div>
            
            <div className="py-6">
              {activeTab === 'description' && (
                <div>
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                  <h3 className="font-semibold text-lg mt-6 mb-3">Tính năng nổi bật</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'specifications' && (
                <div>
                  <h3 className="font-semibold text-lg mb-4">Thông số kỹ thuật</h3>
                  <div className="border rounded-2lg overflow-hidden">
                    <div className="grid grid-cols-3 border-b">
                      <div className="col-span-1 bg-gray-50 p-3 font-medium text-gray-700">Kích thước</div>
                      <div className="col-span-2 p-3">
                        Rộng: {product.dimensions.width}cm x Cao: {product.dimensions.height}cm x Sâu: {product.dimensions.depth}cm
                      </div>
                    </div>
                    <div className="grid grid-cols-3 border-b">
                      <div className="col-span-1 bg-gray-50 p-3 font-medium text-gray-700">Màu sắc</div>
                      <div className="col-span-2 p-3">
                        {product.colors.map(color => color.name).join(', ')}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 border-b">
                      <div className="col-span-1 bg-gray-50 p-3 font-medium text-gray-700">Chất liệu</div>
                      <div className="col-span-2 p-3">
                        {product.materials.join(', ')}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 border-b">
                      <div className="col-span-1 bg-gray-50 p-3 font-medium text-gray-700">Tình trạng</div>
                      <div className="col-span-2 p-3">
                        {product.inStock ? 'Còn hàng' : 'Hết hàng'}
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="col-span-1 bg-gray-50 p-3 font-medium text-gray-700">Xuất xứ</div>
                      <div className="col-span-2 p-3">
                        Việt Nam
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">Đánh giá từ khách hàng</h3>
                    <button className="btn-primary">Viết đánh giá</button>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-2lg text-center">
                    <p className="text-gray-600 mb-4">Chưa có đánh giá nào cho sản phẩm này.</p>
                    <p className="text-sm text-gray-500">Hãy trở thành người đầu tiên đánh giá sản phẩm này!</p>
                  </div>
                </div>
              )}
              
              {activeTab === 'shipping' && (
                <div>
                  <h3 className="font-semibold text-lg mb-4">Thông tin vận chuyển</h3>
                  <p className="text-gray-700 mb-4">
                    Chúng tôi cung cấp dịch vụ vận chuyển đến tất cả các tỉnh thành trên toàn quốc.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                    <li>Miễn phí vận chuyển cho đơn hàng từ 2,000,000đ trở lên.</li>
                    <li>Phí vận chuyển sẽ được tính dựa trên khoảng cách và kích thước sản phẩm.</li>
                    <li>Thời gian giao hàng thông thường: 3-5 ngày làm việc tại thành phố lớn và 5-7 ngày làm việc tại các tỉnh khác.</li>
                  </ul>
                  
                  <h3 className="font-semibold text-lg mb-4">Chính sách đổi trả</h3>
                  <p className="text-gray-700 mb-4">
                    Chúng tôi cam kết đảm bảo sự hài lòng của quý khách với các sản phẩm mua tại Nội thất Việt.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Đổi trả miễn phí trong vòng 30 ngày nếu sản phẩm bị lỗi hoặc không đúng như mô tả.</li>
                    <li>Sản phẩm đổi trả phải còn nguyên vẹn, không bị hư hỏng, còn đầy đủ tem nhãn và hóa đơn mua hàng.</li>
                    <li>Không áp dụng đổi trả cho các sản phẩm đã được sử dụng, lắp đặt hoặc có dấu hiệu hư hỏng do người dùng.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Sản phẩm liên quan</h2>
            
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              slidesPerView={1}
              spaceBetween={16}
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
              className="relative"
            >
              {relatedProducts.map((relatedProduct) => (
                <SwiperSlide key={relatedProduct.id}>
                  <Link 
                    to={`/product/${relatedProduct.slug}`} 
                    className="product-card block"
                  >
                    <div className="aspect-square overflow-hidden bg-gray-100 relative">
                      <img 
                        src={relatedProduct.images[0]} 
                        alt={relatedProduct.name}
                        className="product-card-img"
                      />
                      {relatedProduct.salePrice && (
                        <div className="absolute top-3 left-3 bg-secondary-500 text-white text-xs font-semibold px-2 py-1 rounded">
                          Giảm {Math.round((relatedProduct.price - relatedProduct.salePrice) / relatedProduct.price * 100)}%
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 mb-2">{relatedProduct.name}</h3>
                      <div className="flex items-center">
                        {relatedProduct.salePrice ? (
                          <>
                            <p className="text-primary-500 font-semibold">
                              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(relatedProduct.salePrice)}
                            </p>
                            <p className="text-gray-500 line-through text-sm ml-2">
                              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(relatedProduct.price)}
                            </p>
                          </>
                        ) : (
                          <p className="text-primary-500 font-semibold">
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(relatedProduct.price)}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
              
              <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center">
                <ArrowLeft size={16} />
              </div>
              <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center">
                <ArrowRight size={16} />
              </div>
            </Swiper>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;