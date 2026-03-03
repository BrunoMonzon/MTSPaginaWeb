// App.jsx - Versión final con todos los CSS correctos
import React from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import StatsBanner from './components/Sections/StatsBanner';
import Propuestas from './components/Sections/Propuestas';
import Trayectoria from './components/Sections/Trayectoria';
import Equipo from './components/Sections/equipo';
import Noticias from './components/Sections/Noticias';
import Contacto from './components/Sections/Contacto';
import Ubicacion from './components/Sections/Ubicacion';
import Footer from './components/Layout/Footer';


// Imports de CSS
import './styles/news-modal.css';
import './styles/proposal-modal.css';
import './styles/global.css';
import './styles/navbar.css';
import './styles/mobile-menu.css';   // ⬅️ NUEVO
import './styles/hero.css';
import './styles/stats.css';
import './styles/propuestas.css';
import './styles/trayectoria.css';
import './styles/noticias.css';
import './styles/contacto.css';
import './styles/ubicacion.css';
import './styles/modals.css';
import './styles/footer.css';

function App() {
  return (
    <div className="App">
      {/* Navbar ahora incluye el MobileMenu integrado */}
      <Navbar />

      <main>
        <section id="inicio">
          <Hero />
        </section>
        
        <StatsBanner />
        
        <section id="propuestas">
          <Propuestas />
        </section>
        
        <section id="trayectoria">
          <Trayectoria />
        </section>

        {/* Equipo de trabajo — después de Trayectoria */}
        <section id="equipo">
          <Equipo />
        </section>
        
        <section id="noticias">
          <Noticias />
        </section>
        
        <section id="ubicacion">
          <Ubicacion />
        </section>
        
        <section id="contacto">
          <Contacto />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;