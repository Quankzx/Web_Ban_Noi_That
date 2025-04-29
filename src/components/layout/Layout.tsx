import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingChat from '../ui/FloatingChat';
import FloatingCart from '../ui/FloatingCart';
import NewsletterPopup from '../ui/NewsletterPopup';

const Layout: React.FC = () => {
  const [showNewsletter, setShowNewsletter] = React.useState(false);
  
  React.useEffect(() => {
    // Check if the user has already seen the newsletter popup
    const hasSeenPopup = localStorage.getItem('hasSeenNewsletterPopup');
    
    if (!hasSeenPopup) {
      // Show the newsletter popup after 5 seconds
      const timer = setTimeout(() => {
        setShowNewsletter(true);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const closeNewsletter = () => {
    setShowNewsletter(false);
    // Set flag in localStorage to prevent showing the popup again
    localStorage.setItem('hasSeenNewsletterPopup', 'true');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingChat />
      <FloatingCart />
      {showNewsletter && <NewsletterPopup onClose={closeNewsletter} />}
    </div>
  );
};

export default Layout;