import React, { useState } from 'react';
import Topbar from './components/Layout/Topbar';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import StatsBanner from './components/Sections/StatsBanner';
import Propuestas from './components/Sections/Propuestas';
import Trayectoria from './components/Sections/Trayectoria';
import Noticias from './components/Sections/Noticias';
import Contacto from './components/Sections/Contacto';
import CTASection from './components/Sections/CTASection';
import Footer from './components/Layout/Footer';
import './styles/global.css';
import './styles/navbar.css';
import './styles/propuestas.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="App">
      <Topbar />
      <Navbar onMobileMenuToggle={toggleMobileMenu} />
      <Hero />
      <StatsBanner />
      <Propuestas />
      <Trayectoria />
      <Noticias />
      <Contacto />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
