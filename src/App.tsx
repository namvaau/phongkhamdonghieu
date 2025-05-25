import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import IndexCustomer from './layouts/customer/IndexCustomer';
import Footer from './components/Footer';
import NotFound404 from './layouts/NotFound404';
import ScrollToTop from './components/ScrollToTop';
import Video from './layouts/customer/Video';
import NewsForm from './layouts/admin/NewsForm';
import Login from './layouts/admin/Login';
import ProtectedRoute from './layouts/admin/ProtectedRoute';
import DoctorManagement from './layouts/admin/DoctorsForm';
import LienHe from './layouts/customer/LienHe';
import CacTinTuc from './layouts/customer/CacTinTuc';
import TinTucChiTiet from './layouts/customer/TinTucChiTiet';
import CacDichVu from './layouts/customer/CacDichVu';
import CacChuyenKhoa from './layouts/customer/CacChuyenKhoa';
import DichVuChiTiet from './layouts/customer/DichVuChiTiet';
import ChuyenKhoaChiTiet from './layouts/customer/ChuyenKhoaChiTiet';
import CacBacSy from './layouts/customer/CacBacSy';
import DatLichHen from './layouts/customer/DatLichHen';
import VeChungToi from './layouts/customer/VeChungToi';
import KhamBenhBHYT from './layouts/customer/KhamBenhBHYT';
import AI from './layouts/customer/AI';
import DienThoai from './components/DienThoai';

const CustomerLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
      <DienThoai/>
    </>
  );
};

const CustomerAILayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
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
        <Route path="/lien-he" element={<CustomerLayout><LienHe /></CustomerLayout>} />
        <Route path="/tin-tuc" element={<CustomerLayout><CacTinTuc /></CustomerLayout>} />
        <Route path="/tin-tuc/chi-tiet/:id" element={<CustomerLayout><TinTucChiTiet /></CustomerLayout>} />
        <Route path="/dich-vu" element={<CustomerLayout><CacDichVu /></CustomerLayout>} />
        <Route path="/chuyen-khoa" element={<CustomerLayout><CacChuyenKhoa /></CustomerLayout>} />
        <Route path="/dich-vu/chi-tiet/:id" element={<CustomerLayout><DichVuChiTiet /></CustomerLayout>} />
        <Route path="/chuyen-khoa/chi-tiet/:id" element={<CustomerLayout><ChuyenKhoaChiTiet /></CustomerLayout>} />
        <Route path="/bac-sy" element={<CustomerLayout><CacBacSy /></CustomerLayout>} />
        <Route path="/dat-lich" element={<CustomerLayout><DatLichHen /></CustomerLayout>} />
        <Route path="/ve-chung-toi" element={<CustomerLayout><VeChungToi /></CustomerLayout>} />
        <Route path="/video" element={<CustomerLayout><Video /></CustomerLayout>} />
        <Route path="/kham-benh-bhyt" element={<CustomerLayout><KhamBenhBHYT /></CustomerLayout>} />
        <Route path="/hoi-dap-ai" element={<CustomerAILayout><AI /></CustomerAILayout>} />


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
