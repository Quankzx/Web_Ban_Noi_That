import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, Facebook, Twitter, Linkedin, ArrowLeft, Share2, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

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
    content: `
      <p>Phòng khách là không gian quan trọng nhất trong ngôi nhà, nơi gia đình sum họp và tiếp đón khách khứa. Với những căn hộ có diện tích khiêm tốn, việc trang trí phòng khách sao cho vừa đẹp vừa thoải mái là một thách thức không nhỏ.</p>

      <h2>1. Sử dụng gương trang trí</h2>
      <p>Gương không chỉ có tác dụng trang trí mà còn giúp không gian trở nên rộng rãi hơn nhờ khả năng phản chiếu ánh sáng và tạo chiều sâu cho căn phòng.</p>

      <h2>2. Chọn nội thất đa năng</h2>
      <p>Những món đồ nội thất có thể sử dụng nhiều mục đích như bàn trà có ngăn kéo, ghế sofa có ngăn chứa đồ sẽ giúp tiết kiệm không gian hiệu quả.</p>

      <h2>3. Tối ưu ánh sáng tự nhiên</h2>
      <p>Tận dụng tối đa ánh sáng tự nhiên bằng cách sử dụng rèm cửa mỏng, nhẹ và có màu sáng. Điều này sẽ giúp căn phòng trông rộng rãi và thoáng đãng hơn.</p>

      <h2>4. Sử dụng màu sắc hợp lý</h2>
      <p>Nên chọn tông màu chủ đạo sáng cho tường và trần nhà, kết hợp với các điểm nhấn màu sắc từ phụ kiện trang trí để tạo sự sinh động mà không gây rối mắt.</p>

      <h2>5. Bố trí nội thất thông minh</h2>
      <p>Sắp xếp nội thất sát tường để tạo lối đi rộng rãi ở giữa. Tránh đặt quá nhiều đồ đạc làm cho không gian trở nên chật chội.</p>

      <h2>6. Trang trí tường hợp lý</h2>
      <p>Sử dụng tranh ảnh, kệ treo tường để tận dụng không gian theo chiều dọc mà không chiếm diện tích sàn.</p>

      <h2>7. Chọn sofa phù hợp</h2>
      <p>Nên chọn sofa có kích thước vừa phải, thiết kế đơn giản và màu sắc hài hòa với không gian chung.</p>

      <h2>8. Sử dụng cây xanh</h2>
      <p>Đặt một vài chậu cây cảnh nhỏ sẽ giúp không gian trở nên tươi mát và gần gũi với thiên nhiên hơn.</p>

      <h2>9. Tạo điểm nhấn</h2>
      <p>Chọn một vật dụng nổi bật như đèn trang trí, thảm trải sàn hay gối trang trí để tạo điểm nhấn cho căn phòng.</p>

      <h2>10. Giữ gọn gàng và ngăn nắp</h2>
      <p>Thường xuyên sắp xếp và dọn dẹp để không gian luôn gọn gàng, tránh tình trạng bừa bộn làm căn phòng trông chật chội.</p>

      <p>Với những ý tưởng trên, hy vọng bạn sẽ có thêm nhiều gợi ý hay để trang trí phòng khách nhỏ của mình trở nên đẹp và tiện nghi hơn.</p>
    `,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    category: 'Trang trí nội thất',
    author: 'Nguyễn Văn A',
    date: '2024-03-15',
    readTime: 5
  }
];

const BlogDetailPage: React.FC = () => {
  const { blogSlug } = useParams<{ blogSlug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundPost = blogPosts.find(p => p.slug === blogSlug);
    if (foundPost) {
      setPost(foundPost);
      document.title = `${foundPost.title} | Nội thất Việt`;
    }
  }, [blogSlug]);

  if (!post) {
    return (
      <div className="container py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy bài viết</h1>
          <p className="text-gray-600 mb-6">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link to="/blog" className="btn-primary">
            Quay lại trang Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <article className="container max-w-4xl">
        {/* Back Button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-gray-600 hover:text-primary-500 mb-8 group"
        >
          <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Quay lại Blog
        </Link>

        {/* Featured Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-2lg overflow-hidden mb-8 aspect-[21/9]"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <span className="inline-block bg-primary-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                {new Date(post.date).toLocaleDateString('vi-VN')}
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                {post.readTime} phút đọc
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2lg shadow-soft overflow-hidden"
            >
              <div className="p-8">
                <div className="prose prose-lg">
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div 
                    className="prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-p:text-gray-600 prose-p:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content }} 
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Author Bio */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2lg shadow-soft p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center">
                    <User size={32} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{post.author}</h3>
                    <p className="text-gray-500 text-sm">Chuyên gia thiết kế nội thất</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Chuyên gia thiết kế nội thất với hơn 10 năm kinh nghiệm trong ngành. 
                  Đã thực hiện hơn 200 dự án thiết kế cho các căn hộ và biệt thự.
                </p>
              </motion.div>

              {/* Share & Actions */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2lg shadow-soft p-6"
              >
                <h4 className="font-semibold mb-4">Chia sẻ bài viết</h4>
                <div className="flex flex-wrap gap-2">
                  <button className="flex-1 btn-secondary flex items-center justify-center">
                    <Facebook size={18} className="mr-2" />
                    Facebook
                  </button>
                  <button className="flex-1 btn-secondary flex items-center justify-center">
                    <Twitter size={18} className="mr-2" />
                    Twitter
                  </button>
                  <button 
                    onClick={() => setIsLiked(!isLiked)}
                    className={`w-full btn-secondary flex items-center justify-center mt-2 ${
                      isLiked ? 'bg-red-50 text-red-500 border-red-200' : ''
                    }`}
                  >
                    <Heart 
                      size={18} 
                      className={`mr-2 ${isLiked ? 'fill-current' : ''}`} 
                    />
                    {isLiked ? 'Đã thích' : 'Thích bài viết'}
                  </button>
                  <button className="w-full btn-secondary flex items-center justify-center">
                    <Share2 size={18} className="mr-2" />
                    Chia sẻ liên kết
                  </button>
                </div>
              </motion.div>

              {/* Related Posts */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2lg shadow-soft p-6"
              >
                <h4 className="font-semibold mb-4">Bài viết liên quan</h4>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map(relatedPost => (
                    <Link 
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="flex gap-4 group"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium text-sm group-hover:text-primary-500 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h5>
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(relatedPost.date).toLocaleDateString('vi-VN')}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetailPage;