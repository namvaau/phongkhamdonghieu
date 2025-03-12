import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import IndexCustomer from './layouts/customer/IndexCustomer';
import Footer from './components/Footer';
import NotFound404 from './layouts/NotFound404';
import ContactUs from './layouts/customer/ContactUs';
import BlogDetails from './layouts/customer/BlogDetails';
import PortfolioDetails from './layouts/customer/PortfolioDetails';
import Services from './layouts/customer/Services';
import Doctors from './layouts/customer/Doctors';
import Booking from './layouts/customer/Booking';
import Preloader from './components/Preloader';
import { useEffect, useState } from 'react';
import Blogs from './layouts/customer/Blogs';
import AboutUs from './layouts/customer/AboutUs';
import Urgent from './layouts/customer/Urgent';
import Specialty from './layouts/customer/Specialty';

const CustomerLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Giả lập tải dữ liệu trong 2 giây
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }
  return (
    <Router>
      <Routes>
        {/* Customer Routes */}
        <Route path="/" element={<CustomerLayout><IndexCustomer /></CustomerLayout>} />
        <Route path="/contact" element={<CustomerLayout><ContactUs /></CustomerLayout>} />
        <Route path="/blogs" element={<CustomerLayout><Blogs /></CustomerLayout>} />
        <Route path="/blog/1" element={<CustomerLayout><BlogDetails /></CustomerLayout>} />
        <Route path="/services" element={<CustomerLayout><Services /></CustomerLayout>} />
        <Route path="/portfolio/1" element={<CustomerLayout><PortfolioDetails /></CustomerLayout>} />
        <Route path="/urgent" element={<CustomerLayout><Urgent /></CustomerLayout>} />
        <Route path="/specialty" element={<CustomerLayout><Specialty /></CustomerLayout>} />
        <Route path="/doctors" element={<CustomerLayout><Doctors /></CustomerLayout>} />
        <Route path="/booking" element={<CustomerLayout><Booking /></CustomerLayout>} />
        <Route path="/about" element={<CustomerLayout><AboutUs /></CustomerLayout>} />
        <Route path="*" element={<CustomerLayout><NotFound404 /></CustomerLayout>} />
      </Routes>
    </Router>
  );
};

export default App;
