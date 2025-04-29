import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';
import AccountPage from './pages/AccountPage';
import NotFoundPage from './pages/NotFoundPage';
import ShippingPolicyPage from './pages/ShippingPolicyPage';
import { CartProvider } from './contexts/CartContext';
import ReturnPolicyPage from './pages/ReturnPolicyPage';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="category/:categorySlug" element={<CategoryPage />} />
          <Route path="product/:productSlug" element={<ProductDetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogListPage />} />
          <Route path="blog/:blogSlug" element={<BlogDetailPage />} />
          <Route path="return-policy" element={<ReturnPolicyPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="account/*" element={<AccountPage />} />
          <Route path="shipping-policy" element={<ShippingPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;