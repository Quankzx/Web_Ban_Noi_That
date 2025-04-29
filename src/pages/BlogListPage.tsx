import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Calendar, Clock, User } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 ý tưởng trang trí phòng khách nhỏ',
    slug: '10-y-tuong-trang-tri-phong-khach-nho',
    excerpt: 'Khám phá những ý tưởng sáng tạo để biến phòng khách nhỏ trở nên rộng rãi và ấm cúng hơn.',
    content: 'Nội dung chi tiết về các ý tưởng trang trí phòng khách...',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    category: 'Trang trí nội thất',
    author: 'Nguyễn Văn A',
    date: '2024-03-15',
    readTime: 5
  },
  {
    id: '2',
    title: 'Cách chọn nội thất phù hợp với phong cách Scandinavian',
    slug: 'cach-chon-noi-that-phong-cach-scandinavian',
    excerpt: 'Hướng dẫn chi tiết về cách lựa chọn nội thất để tạo nên không gian sống theo phong cách Bắc Âu tinh tế.',
    content: 'Nội dung chi tiết về phong cách Scandinavian...',
    image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg',
    category: 'Phong cách nội thất',
    author: 'Trần Thị B',
    date: '2024-03-10',
    readTime: 7
  },
  {
    id: '3',
    title: 'Xu hướng nội thất 2024: Những điều bạn cần biết',
    slug: 'xu-huong-noi-that-2024',
    excerpt: 'Cập nhật những xu hướng nội thất mới nhất trong năm 2024 để không gian sống của bạn luôn thời thượng.',
    content: 'Nội dung chi tiết về xu hướng nội thất 2024...',
    image: 'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg',
    category: 'Xu hướng',
    author: 'Lê Văn C',
    date: '2024-03-05',
    readTime: 6
  },
  {
    id: '4',
    title: '5 lời khuyên khi chọn mua sofa cho phòng khách',
    slug: '5-loi-khuyen-khi-chon-mua-sofa',
    excerpt: 'Những điều cần lưu ý để chọn được chiếc sofa phù hợp với không gian và nhu cầu sử dụng của gia đình.',
    content: 'Nội dung chi tiết về cách chọn sofa...',
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg',
    category: 'Mẹo mua sắm',
    author: 'Phạm Thị D',
    date: '2024-03-01',
    readTime: 4
  },
  {
    id: '5',
    title: 'Cách bố trí phòng ngủ theo phong thủy',
    slug: 'cach-bo-tri-phong-ngu-theo-phong-thuy',
    excerpt: 'Hướng dẫn chi tiết về cách sắp xếp phòng ngủ để mang lại năng lượng tích cực và giấc ngủ ngon.',
    content: 'Nội dung chi tiết về phong thủy phòng ngủ...',
    image: 'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg',
    category: 'Phong thủy',
    author: 'Hoàng Văn E',
    date: '2024-02-28',
    readTime: 8
  }
];

const BlogListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá những bài viết hữu ích về trang trí nội thất, xu hướng thiết kế và các mẹo hay cho không gian sống của bạn.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2lg shadow-soft p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
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
                <option value="all">Tất cả danh mục</option>
                {categories.filter(cat => cat !== 'all').map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <article key={post.id} className="bg-white rounded-2lg shadow-soft overflow-hidden group">
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="inline-flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(post.date).toLocaleDateString('vi-VN')}
                    </span>
                    <span className="inline-flex items-center">
                      <Clock size={16} className="mr-1" />
                      {post.readTime} phút đọc
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User size={16} className="text-gray-400 mr-2" />
                      <span className="text-sm text-gray-500">{post.author}</span>
                    </div>
                    <span className="text-sm font-medium text-primary-500 group-hover:text-primary-600 inline-flex items-center">
                      Đọc thêm
                      <ArrowRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;