import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Subscribe to newsletter logic
    alert(`Cảm ơn bạn đã đăng ký nhận bản tin với email: ${email}`);
    setEmail('');
  };
  
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nội thất Việt</h3>
            <p className="text-gray-600 mb-6">
              Đồ nội thất hiện đại, phong cách và giá cả phải chăng cho mọi không gian sống.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-500">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-500">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-500">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary-500">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary-500">Blog</Link>
              </li>
              <li>
                <Link to="/category/ban-giam-gia" className="text-gray-600 hover:text-primary-500">Khuyến mãi</Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="text-gray-600 hover:text-primary-500">Chính sách vận chuyển</Link>
              </li>
              <li>
                <Link to="/return-policy" className="text-gray-600 hover:text-primary-500">Chính sách đổi trả</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary-500">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="text-primary-400 shrink-0 mr-2" />
                <span className="text-gray-600">123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex">
                <Phone size={20} className="text-primary-400 shrink-0 mr-2" />
                <span className="text-gray-600">028 3827 9274</span>
              </li>
              <li className="flex">
                <Mail size={20} className="text-primary-400 shrink-0 mr-2" />
                <span className="text-gray-600">info@noithatviet.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Đăng ký nhận tin</h3>
            <p className="text-gray-600 mb-4">
              Cập nhật thông tin về sản phẩm mới và khuyến mãi.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                placeholder="Địa chỉ email của bạn"
                className="input w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary w-full">
                Đăng ký
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Nội thất Việt. Tất cả các quyền được bảo lưu.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-600 hover:text-primary-500 text-sm">
                Chính sách bảo mật
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-primary-500 text-sm">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;