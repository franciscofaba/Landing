import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactPixel from 'react-facebook-pixel'; 
import Home from "./pages/Home/home";
import DataDeletion from "./pages/DataDeletionPolicy/DataDeletion";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Facebook from "./pages/Tracking/Facebook";
// 1. IMPORTA LA NUEVA PÁGINA
import PaymentSuccess from "./pages/Successful/Successful"; 
import Clarity from '@microsoft/clarity';
function App() {
  useEffect(() => {
    const options = {
      autoConfig: true, 
      debug: false, 
    };
    
    ReactPixel.init('1423837609316786', options);
    ReactPixel.pageView(); 
    // 2. INICIALIZAR MICROSOFT CLARITY
    // Reemplaza "TU_PROJECT_ID" con el ID que encontrarás en:
    // Clarity Project > Settings > Overview
    Clarity.init("vcyg0513zk");
  }, []);

  return (
    <BrowserRouter>
      <Facebook/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/data-Policy" element={<DataDeletion />} />
        
        {/* 2. AGREGA LA RUTA DE ÉXITO */}
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;