import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Trang không tìm thấy | Nội thất Việt';
  }, []);

  return (
    <div className="container">
      <div className="py-16 md:py-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Trang không tìm thấy</h2>
        <p className="text-gray-600 max-w-md mb-8">
          Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <Home size={16} className="mr-2" />
          Quay về trang chủ
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;