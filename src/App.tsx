import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { AllNewsPage } from "./components/AllNewsPage";
import {
  AvisoLegal,
  PoliticaPrivacidad,
  PoliticaCookies,
} from "./pages/legalPages";

const App: React.FC = () => {
  return (
    <Router>
      <main className="w-full min-h-screen bg-slate-950">
        <Navbar />

        <Routes>
          {/* Ruta para la portada */}
          <Route path="/" element={<Home />} />

          {/* Ruta para ver todas las noticias */}
          <Route path="/noticias" element={<AllNewsPage />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/cookies" element={<PoliticaCookies />} />
        </Routes>

        <Footer />
      </main>
    </Router>
  );
};

export default App;
