import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import IndexCustomer from './layouts/customer/IndexCustomer';
import Footer from './components/Footer';
import NotFound404 from './layouts/NotFound404';
import ContactUs from './layouts/customer/ContactUs';
import ServicesDetails from './layouts/customer/ServicesDetails';
import Services from './layouts/customer/Services';
import Doctors from './layouts/customer/Doctors';
import Booking from './layouts/customer/Booking';
import AboutUs from './layouts/customer/AboutUs';
import Urgent from './layouts/customer/Urgent';
import Specialty from './layouts/customer/Specialty';
import Specialties from './layouts/customer/Specialties';
import NewsDetail from './layouts/customer/NewsDetail';
import News from './layouts/customer/News';
import ScrollToTop from './components/ScrollToTop';
import Video from './layouts/customer/Video';
import NewsForm from './layouts/admin/NewsForm';
import Login from './layouts/admin/Login';
import ProtectedRoute from './layouts/admin/ProtectedRoute';
import DoctorManagement from './layouts/admin/DoctorsForm';

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
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Customer Routes */}
        <Route path="/" element={<CustomerLayout><IndexCustomer /></CustomerLayout>} />
        <Route path="/contact" element={<CustomerLayout><ContactUs /></CustomerLayout>} />
        <Route path="/news" element={<CustomerLayout><News /></CustomerLayout>} />
        <Route path="/news/details/:id" element={<CustomerLayout><NewsDetail /></CustomerLayout>} />
        <Route path="/services" element={<CustomerLayout><Services /></CustomerLayout>} />
        <Route path="/specialties" element={<CustomerLayout><Specialties /></CustomerLayout>} />
        <Route path="/services/details/:id" element={<CustomerLayout><ServicesDetails /></CustomerLayout>} />
        <Route path="/urgent" element={<CustomerLayout><Urgent /></CustomerLayout>} />
        <Route path="/specialty" element={<CustomerLayout><Specialty /></CustomerLayout>} />
        <Route path="/doctors" element={<CustomerLayout><Doctors /></CustomerLayout>} />
        <Route path="/booking" element={<CustomerLayout><Booking /></CustomerLayout>} />
        <Route path="/about" element={<CustomerLayout><AboutUs /></CustomerLayout>} />
        <Route path="/video" element={<CustomerLayout><Video /></CustomerLayout>} />


        <Route
          path="/admin/newsmanagement"
          element={
            <ProtectedRoute>
              <CustomerLayout>
                <NewsForm />
              </CustomerLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/doctormanagement"
          element={
            <ProtectedRoute>
              <CustomerLayout>
                <DoctorManagement />
              </CustomerLayout>
            </ProtectedRoute>
          }
        />


        <Route path="/login" element={<CustomerLayout><Login /></CustomerLayout>} />
        <Route path="*" element={<CustomerLayout><NotFound404 /></CustomerLayout>} />
      </Routes>
    </Router>
  );
};

export default App;
