import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import MegaMenu from './MegaMenu';
import { cn } from '../../utils/cn';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const { itemCount } = useCart();
  const location = useLocation();
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  // Add scroll event listener to change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMegaMenu = (category: string) => {
    if (activeMegaMenu === category) {
      setActiveMegaMenu(null);
    } else {
      setActiveMegaMenu(category);
    }
  };
  
  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
  };
  
  return (
    <header className={cn(
      "sticky top-0 z-40 w-full transition-all duration-200",
      isScrolled ? "bg-white shadow-soft" : "bg-transparent"
    )}>
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Nội thất Việt
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div 
              className="relative"
              onMouseEnter={() => toggleMegaMenu('living')}
              onMouseLeave={closeMegaMenu}
            >
              <button className="nav-link flex items-center">
                Phòng khách
                <ChevronDown size={16} className="ml-1" />
              </button>
              {activeMegaMenu === 'living' && (
                <MegaMenu 
                  category="living"
                  onClose={closeMegaMenu}
                />
              )}
            </div>
            
            <div 
              className="relative"
              onMouseEnter={() => toggleMegaMenu('bedroom')}
              onMouseLeave={closeMegaMenu}
            >
              <button className="nav-link flex items-center">
                Phòng ngủ
                <ChevronDown size={16} className="ml-1" />
              </button>
              {activeMegaMenu === 'bedroom' && (
                <MegaMenu 
                  category="bedroom"
                  onClose={closeMegaMenu}
                />
              )}
            </div>
            
            <div 
              className="relative"
              onMouseEnter={() => toggleMegaMenu('dining')}
              onMouseLeave={closeMegaMenu}
            >
              <button className="nav-link flex items-center">
                Phòng ăn
                <ChevronDown size={16} className="ml-1" />
              </button>
              {activeMegaMenu === 'dining' && (
                <MegaMenu 
                  category="dining"
                  onClose={closeMegaMenu}
                />
              )}
            </div>
            
            <div 
              className="relative"
              onMouseEnter={() => toggleMegaMenu('office')}
              onMouseLeave={closeMegaMenu}
            >
              <button className="nav-link flex items-center">
                Văn phòng
                <ChevronDown size={16} className="ml-1" />
              </button>
              {activeMegaMenu === 'office' && (
                <MegaMenu 
                  category="office"
                  onClose={closeMegaMenu}
                />
              )}
            </div>
            
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
            
            <Link to="/about" className="nav-link">
              Giới thiệu
            </Link>
            
            <Link to="/contact" className="nav-link">
              Liên hệ
            </Link>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button onClick={() => setSearchOpen(!searchOpen)} className="text-gray-700 hover:text-primary-500">
              <Search size={20} />
            </button>
            <Link to="/account" className="text-gray-700 hover:text-primary-500">
              <User size={20} />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-primary-500 relative">
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-400 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-4">
            <Link to="/cart" className="text-gray-700 hover:text-primary-500 relative">
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-400 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary-500"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-md">
          <nav className="container py-4 flex flex-col space-y-4">
            <Link to="/category/phong-khach" className="nav-link py-2 border-b border-gray-100">
              Phòng khách
            </Link>
            <Link to="/category/phong-ngu" className="nav-link py-2 border-b border-gray-100">
              Phòng ngủ
            </Link>
            <Link to="/category/phong-an" className="nav-link py-2 border-b border-gray-100">
              Phòng ăn
            </Link>
            <Link to="/category/van-phong" className="nav-link py-2 border-b border-gray-100">
              Văn phòng
            </Link>
            <Link to="/blog" className="nav-link py-2 border-b border-gray-100">
              Blog
            </Link>
            <Link to="/about" className="nav-link py-2 border-b border-gray-100">
              Giới thiệu
            </Link>
            <Link to="/contact" className="nav-link py-2 border-b border-gray-100">
              Liên hệ
            </Link>
            <Link to="/account" className="nav-link py-2 flex items-center">
              <User size={18} className="mr-2" />
              Tài khoản
            </Link>
          </nav>
        </div>
      )}
      
      {/* Search Overlay */}
      {searchOpen && (
        <div className="absolute inset-x-0 top-full bg-white shadow-md p-4">
          <div className="container">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full input pr-10"
                autoFocus
              />
              <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <Search size={20} className="text-gray-500" />
              </button>
            </div>
            <button 
              onClick={() => setSearchOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;