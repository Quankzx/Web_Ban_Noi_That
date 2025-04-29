import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, SlidersHorizontal, X } from 'lucide-react';
import { getProductsByCategory, Product } from '../data/productData';
import { motion } from 'framer-motion';

const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOrder, setSortOrder] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    priceRange: [0, 20000000],
    colors: [] as string[],
    materials: [] as string[],
  });
  
  // Products per page
  const productsPerPage = 9;
  
  // Update document title and fetch products
  useEffect(() => {
    // Get products based on category
    if (categorySlug) {
      let categoryName = '';
      switch (categorySlug) {
        case 'sofa':
          categoryName = 'Sofa';
          break;
        case 'ban-an':
          categoryName = 'Bàn ăn';
          break;
        case 'giuong-ngu':
          categoryName = 'Giường ngủ';
          break;
        case 'ghe':
          categoryName = 'Ghế';
          break;
        case 'ban-lam-viec':
          categoryName = 'Bàn làm việc';
          break;
        case 'ke-tivi':
          categoryName = 'Kệ tivi';
          break;
        case 'tu-quan-ao':
          categoryName = 'Tủ quần áo';
          break;
        case 'ban-ca-phe':
          categoryName = 'Bàn cà phê';
          break;
        case 'ghe-bar':
          categoryName = 'Ghế bar';
          break;
        default:
          categoryName = categorySlug.replace(/-/g, ' ');
          // Capitalize first letter of each word
          categoryName = categoryName
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
      }
      
      document.title = `${categoryName} | Nội thất Việt`;
      
      // Fetch products
      const fetchedProducts = getProductsByCategory(categorySlug);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
      setLoading(false);
      
      // Extract unique colors and materials for filters
      const allColors = Array.from(new Set(fetchedProducts.flatMap(p => p.colors.map(c => c.name))));
      const allMaterials = Array.from(new Set(fetchedProducts.flatMap(p => p.materials)));
      
      // Update max price range
      const maxPrice = Math.max(...fetchedProducts.map(p => p.price));
      setFilters(prev => ({
        ...prev,
        priceRange: [0, maxPrice]
      }));
    }
  }, [categorySlug]);
  
  // Apply filters and sorting
  useEffect(() => {
    if (products.length > 0) {
      let result = [...products];
      
      // Apply price filter
      result = result.filter(product => {
        const productPrice = product.salePrice || product.price;
        return productPrice >= filters.priceRange[0] && productPrice <= filters.priceRange[1];
      });
      
      // Apply color filter
      if (filters.colors.length > 0) {
        result = result.filter(product => 
          product.colors.some(color => filters.colors.includes(color.name))
        );
      }
      
      // Apply material filter
      if (filters.materials.length > 0) {
        result = result.filter(product => 
          product.materials.some(material => filters.materials.includes(material))
        );
      }
      
      // Apply sorting
      switch (sortOrder) {
        case 'price-asc':
          result.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
          break;
        case 'price-desc':
          result.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
          break;
        case 'name-asc':
          result.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-desc':
          result.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          // Default sorting (newest or featured)
          break;
      }
      
      setFilteredProducts(result);
      setCurrentPage(1); // Reset to first page when filters change
    }
  }, [products, filters, sortOrder]);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  
  // Handle filter changes
  const handlePriceChange = (value: [number, number]) => {
    setFilters(prev => ({
      ...prev,
      priceRange: value
    }));
  };
  
  const handleColorToggle = (color: string) => {
    setFilters(prev => {
      const newColors = prev.colors.includes(color)
        ? prev.colors.filter(c => c !== color)
        : [...prev.colors, color];
      
      return {
        ...prev,
        colors: newColors
      };
    });
  };
  
  const handleMaterialToggle = (material: string) => {
    setFilters(prev => {
      const newMaterials = prev.materials.includes(material)
        ? prev.materials.filter(m => m !== material)
        : [...prev.materials, material];
      
      return {
        ...prev,
        materials: newMaterials
      };
    });
  };
  
  const resetFilters = () => {
    setFilters({
      priceRange: [0, Math.max(...products.map(p => p.price))],
      colors: [],
      materials: []
    });
    setSortOrder('default');
  };
  
  // Dummy data for filter options
  const colorOptions = [
    { name: 'Trắng', value: '#ffffff' },
    { name: 'Đen', value: '#212121' },
    { name: 'Xám đậm', value: '#424242' },
    { name: 'Xám nhạt', value: '#9e9e9e' },
    { name: 'Xanh navy', value: '#1a237e' },
    { name: 'Nâu', value: '#795548' },
    { name: 'Gỗ tự nhiên', value: '#d7bc91' },
    { name: 'Gỗ nâu đậm', value: '#5d4037' },
  ];
  
  const materialOptions = [
    'Gỗ tự nhiên',
    'Gỗ sồi tự nhiên',
    'Gỗ teak tự nhiên',
    'Vải bọc polyester cao cấp',
    'Đệm mút D40',
    'Đệm mút cao su non',
    'Da PU cao cấp',
    'Khung gỗ tự nhiên',
    'Khung kim loại',
    'Ván gỗ công nghiệp cao cấp',
    'Gỗ công nghiệp cao cấp',
    'Mặt kệ phủ melamine chống xước',
    'Chân ghế sắt sơn tĩnh điện',
  ];
  
  if (loading) {
    return (
      <div className="container py-16">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Đang tải sản phẩm...</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50">
      <div className="container py-6">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-primary-500">Trang chủ</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="font-medium">{categorySlug?.replace(/-/g, ' ')}</li>
          </ol>
        </nav>
        
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            {categorySlug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} sản phẩm
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="block lg:hidden">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="w-full btn-secondary flex items-center justify-center"
            >
              <SlidersHorizontal size={18} className="mr-2" />
              {showFilters ? 'Ẩn bộ lọc' : 'Hiện bộ lọc'}
            </button>
          </div>
          
          {/* Sidebar Filters */}
          <aside className={`w-full lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2lg shadow-soft p-5 sticky top-24">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Bộ lọc</h2>
                <button 
                  onClick={resetFilters}
                  className="text-sm text-primary-500 hover:underline"
                >
                  Đặt lại
                </button>
              </div>
              
              {/* Price Range Filter */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                <h3 className="font-medium mb-3">Giá</h3>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 text-sm">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(filters.priceRange[0])}
                  </span>
                  <span className="text-gray-600 text-sm">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(filters.priceRange[1])}
                  </span>
                </div>
                <input 
                  type="range"
                  min={0}
                  max={Math.max(...products.map(p => p.price))}
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceChange([filters.priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
              
              {/* Color Filter */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                <h3 className="font-medium mb-3">Màu sắc</h3>
                <div className="flex flex-wrap gap-2">
                  {colorOptions.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorToggle(color.name)}
                      className={`w-8 h-8 rounded-full border ${filters.colors.includes(color.name) ? 'ring-2 ring-primary-400 ring-offset-2' : 'ring-1 ring-gray-300'}`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
              
              {/* Materials Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Chất liệu</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                  {materialOptions.map((material, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.materials.includes(material)}
                        onChange={() => handleMaterialToggle(material)}
                        className="w-4 h-4 text-primary-400 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">{material}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          
          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Controls */}
            <div className="bg-white rounded-2lg p-4 mb-6 flex justify-between items-center">
              <div className="hidden sm:block">
                <span className="text-gray-600 text-sm">Hiển thị {Math.min(filteredProducts.length, productsPerPage)} / {filteredProducts.length} sản phẩm</span>
              </div>
              
              <div className="ml-auto">
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="input text-sm"
                >
                  <option value="default">Sắp xếp theo</option>
                  <option value="price-asc">Giá: Thấp đến cao</option>
                  <option value="price-desc">Giá: Cao đến thấp</option>
                  <option value="name-asc">Tên: A-Z</option>
                  <option value="name-desc">Tên: Z-A</option>
                </select>
              </div>
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2lg p-8 text-center">
                <p className="text-gray-600 mb-4">Không tìm thấy sản phẩm phù hợp với bộ lọc.</p>
                <button 
                  onClick={resetFilters}
                  className="btn-primary"
                >
                  Đặt lại bộ lọc
                </button>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {currentProducts.map((product) => (
                  <Link 
                    to={`/product/${product.slug}`} 
                    key={product.id}
                    className="product-card block"
                  >
                    <div className="aspect-square overflow-hidden bg-gray-100 relative">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="product-card-img"
                      />
                      {product.salePrice && (
                        <div className="absolute top-3 left-3 bg-secondary-500 text-white text-xs font-semibold px-2 py-1 rounded">
                          Giảm {Math.round((product.price - product.salePrice) / product.price * 100)}%
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
                      <div className="flex items-center">
                        {product.salePrice ? (
                          <>
                            <p className="text-primary-500 font-semibold">
                              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                            </p>
                            <p className="text-gray-500 line-through text-sm ml-2">
                              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                            </p>
                          </>
                        ) : (
                          <p className="text-primary-500 font-semibold">
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-1">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="btn-secondary p-2"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-2lg flex items-center justify-center ${
                        currentPage === page
                          ? 'bg-primary-400 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="btn-secondary p-2"
                  >
                    <ChevronRight size={16} />
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper components for the pagination buttons
const ChevronLeft = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export default CategoryPage;