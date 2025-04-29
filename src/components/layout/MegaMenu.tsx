import React from 'react';
import { Link } from 'react-router-dom';

interface MegaMenuProps {
  category: string;
  onClose: () => void;
}

const categoryContent = {
  living: {
    title: 'Phòng khách',
    subcategories: [
      { name: 'Sofa', link: '/category/sofa' },
      { name: 'Ghế thư giãn', link: '/category/ghe-thu-gian' },
      { name: 'Bàn cà phê', link: '/category/ban-ca-phe' },
      { name: 'Kệ tivi', link: '/category/ke-tivi' },
      { name: 'Bàn bên', link: '/category/ban-ben' },
      { name: 'Kệ sách', link: '/category/ke-sach' },
    ],
    featured: [
      { name: 'Sofa da thật', image: 'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg', link: '/category/sofa-da-that' },
      { name: 'Bàn cà phê gỗ sồi', image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg', link: '/category/ban-go-soi' },
    ]
  },
  bedroom: {
    title: 'Phòng ngủ',
    subcategories: [
      { name: 'Giường ngủ', link: '/category/giuong-ngu' },
      { name: 'Tủ quần áo', link: '/category/tu-quan-ao' },
      { name: 'Bàn đầu giường', link: '/category/ban-dau-giuong' },
      { name: 'Tủ trang điểm', link: '/category/tu-trang-diem' },
      { name: 'Bàn làm việc', link: '/category/ban-lam-viec-phong-ngu' },
      { name: 'Nệm', link: '/category/nem' },
    ],
    featured: [
      { name: 'Giường gỗ tự nhiên', image: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg', link: '/category/giuong-go-tu-nhien' },
      { name: 'Tủ quần áo hiện đại', image: 'https://images.pexels.com/photos/4210342/pexels-photo-4210342.jpeg', link: '/category/tu-quan-ao-hien-dai' },
    ]
  },
  dining: {
    title: 'Phòng ăn',
    subcategories: [
      { name: 'Bàn ăn', link: '/category/ban-an' },
      { name: 'Ghế ăn', link: '/category/ghe-an' },
      { name: 'Tủ rượu', link: '/category/tu-ruou' },
      { name: 'Tủ bếp', link: '/category/tu-bep' },
      { name: 'Kệ bếp', link: '/category/ke-bep' },
      { name: 'Xe đẩy', link: '/category/xe-day' },
    ],
    featured: [
      { name: 'Bộ bàn ăn 6 người', image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg', link: '/category/bo-ban-an-6-nguoi' },
      { name: 'Ghế ăn Scandinavian', image: 'https://images.pexels.com/photos/3747137/pexels-photo-3747137.jpeg', link: '/category/ghe-an-scandinavian' },
    ]
  },
  office: {
    title: 'Văn phòng',
    subcategories: [
      { name: 'Bàn làm việc', link: '/category/ban-lam-viec' },
      { name: 'Ghế văn phòng', link: '/category/ghe-van-phong' },
      { name: 'Kệ hồ sơ', link: '/category/ke-ho-so' },
      { name: 'Tủ hồ sơ', link: '/category/tu-ho-so' },
      { name: 'Bàn họp', link: '/category/ban-hop' },
      { name: 'Bàn máy tính', link: '/category/ban-may-tinh' },
    ],
    featured: [
      { name: 'Bàn làm việc đứng', image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg', link: '/category/ban-lam-viec-dung' },
      { name: 'Ghế ergonomic', image: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg', link: '/category/ghe-ergonomic' },
    ]
  }
};

const MegaMenu: React.FC<MegaMenuProps> = ({ category, onClose }) => {
  const content = categoryContent[category as keyof typeof categoryContent];
  
  if (!content) return null;
  
  return (
    <div className="absolute top-full left-0 w-screen bg-white shadow-medium py-6 mega-menu z-50">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <h3 className="text-lg font-medium mb-4">{content.title}</h3>
            <ul className="space-y-2">
              {content.subcategories.map((subcategory, index) => (
                <li key={index}>
                  <Link 
                    to={subcategory.link} 
                    className="text-gray-600 hover:text-primary-500 hover:underline block py-1"
                    onClick={onClose}
                  >
                    {subcategory.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-9">
            <div className="grid grid-cols-2 gap-6">
              {content.featured.map((item, index) => (
                <div key={index} className="group">
                  <Link to={item.link} onClick={onClose}>
                    <div className="relative overflow-hidden rounded-2lg aspect-[4/3]">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                        <div className="w-full p-4 bg-white bg-opacity-90">
                          <h4 className="font-medium text-gray-800">{item.name}</h4>
                          <p className="text-primary-500 text-sm mt-1">Xem thêm</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;