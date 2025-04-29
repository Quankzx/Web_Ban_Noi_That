import React from 'react';
import { X } from 'lucide-react';

interface NewsletterPopupProps {
  onClose: () => void;
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ onClose }) => {
  const [email, setEmail] = React.useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic
    alert(`Cảm ơn bạn đã đăng ký nhận bản tin với email: ${email}`);
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative bg-white rounded-2lg overflow-hidden shadow-lg max-w-md w-full animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        
        <div className="flex">
          <div className="w-full p-6">
            <h3 className="text-2xl font-bold mb-2">Đăng ký nhận ưu đãi</h3>
            <p className="text-gray-600 mb-4">
              Nhận thông tin về sản phẩm mới nhất và giảm giá lên đến 20% cho lần mua hàng đầu tiên.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Địa chỉ email của bạn"
                className="input w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary w-full">
                Đăng ký ngay
              </button>
            </form>
            
            <p className="text-gray-500 text-xs mt-3">
              Bằng cách đăng ký, bạn đồng ý với chính sách bảo mật của chúng tôi. Bạn có thể hủy đăng ký bất kỳ lúc nào.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;