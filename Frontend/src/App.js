import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';
import AnaSayfa from './Pages/AnaSayfa/index';
import CalismaOrtaklari from './Pages/CalismaOrtaklari/index';
import Urunler from './Pages/Ürünler/index';
import Iletisim from './Pages/Iletisim/index';
import Hakkimizda from './Pages/Kurumsal';
import NotFound from './Pages/NotFound';
import Admin from './Pages/Admin/index';
import ToTop from './Components/ToTop';
import AdminUrunler from './Pages/Admin/Urunler/index';
import axios from 'axios';
import Notification from './Components/Notification';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [showLoginNotification, setShowLoginNotification] = useState(false);
  const ip = 'https://185.87.252.210:5001'
  const fetchAdmins = async () => {
    try {
      const response = await axios.get(`${ip}/api/urunler/admin`);
      setAdmins(response.data);
    } catch (error) {
      console.error("Error fetching urunler:");
    }
  }
  useEffect(() => {
    fetchAdmins();
  }, []);
  useEffect(() => {
    // Yerel depolamadan authenticated durumunu al
    const isAuthenticated = sessionStorage.getItem('authenticated');
    // Eğer yerel depolamada authenticated true olarak işaretlendi ise oturumu yenile
    if (isAuthenticated === 'true') {
      setAuthenticated(true);
    }
  }, []);
  const authenticate = (username, password) => {
    // Girilen kullanıcı adı ve şifreyi yönetici bilgileriyle karşılaştırıyoruz
    const isAdmin = admins.some(
      (admin) => admin.username === username && admin.password === password
    );
    if (!isAdmin) {
      setShowLoginNotification(true);

      // Bildirimi 2 saniye sonra kapat
      setTimeout(() => {
        setShowLoginNotification(false);
      }, 2000);
    }
    // Eğer giriş yapılan kullanıcı bir yönetici ise authenticated durumunu true yapıyoruz
    setAuthenticated(isAdmin);
    // Oturumu yerel depolamada sakla
    sessionStorage.setItem('authenticated', isAdmin);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {!authenticated && <ToTop />}
        {showLoginNotification && <Notification color={"bg-red-500"} message={"Kullanıcı adı veya şifre yanlış!"} />}
        <Routes>
          <Route path="/" element={<Urunler />} />
          <Route path="/anasayfa" element={<AnaSayfa />} />
          <Route path="/kurumsal" element={<Hakkimizda />} />
          <Route path="/calisma-ortaklari" element={<CalismaOrtaklari />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/admin" element={authenticated ? <Navigate to="/admin/urunler" /> : <Admin authenticate={authenticate} />} />
          <Route path="/admin/urunler" element={authenticated ? <AdminUrunler /> : <Navigate to="/admin" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
