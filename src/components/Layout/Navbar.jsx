import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detectar sección activa
      const sections = ['inicio', 'propuestas', 'trayectoria', 'noticias', 'ubicacion', 'contacto'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      window.history.pushState(null, '', `#${id}`);
      setActiveSection(id);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: 'mdi:home' },
    { id: 'propuestas', label: 'Propuestas', icon: 'mdi:lightbulb-on' },
    { id: 'trayectoria', label: 'Trayectoria', icon: 'mdi:chart-timeline-variant' },
    { id: 'noticias', label: 'Noticias', icon: 'mdi:newspaper-variant' },
    { id: 'ubicacion', label: 'Ubicación', icon: 'mdi:map-marker' },
    { id: 'contacto', label: 'Únete', icon: 'mdi:account-plus' }
  ];

  return (
    <>
      {/* Topbar profesional */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-content">
            <div className="topbar-left">
              <div className="topbar-item">
                <Icon icon="mdi:calendar-check" width="18" height="18" />
                <span>Elecciones Departamentales 2026</span>
              </div>
              <div className="topbar-item">
                <Icon icon="mdi:map-marker" width="18" height="18" />
                <span>Chuquisaca - Bolivia</span>
              </div>
            </div>
            
            <div className="topbar-right">
              <div className="topbar-item">
                <Icon icon="mdi:phone" width="18" height="18" />
                <span>+591 7453 6806</span>
              </div>
              <div className="topbar-social">
                <a href="#" className="social-icon" aria-label="Facebook" onClick={(e) => e.preventDefault()}>
                  <Icon icon="mdi:facebook" width="18" height="18" />
                </a>
                <a href="#" className="social-icon" aria-label="TikTok" onClick={(e) => e.preventDefault()}>
                  <Icon icon="mdi:music-note" width="18" height="18" />
                </a>
                <a href="https://wa.me/59174536806" className="social-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                  <Icon icon="mdi:whatsapp" width="18" height="18" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar principal */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            {/* Logo */}
            <div className="navbar-brand">
              <a href="#inicio" className="logo" onClick={(e) => scrollToSection('inicio', e)}>
                <div className="logo-image">
                  <div className="logo-fallback">
                    <div className="logo-circle">
                      <span className="logo-text-mts">MTS</span>
                    </div>
                  </div>
                </div>
                <div className="logo-text">
                  <span className="logo-title">MOVIMIENTO TERCER SISTEMA</span>
                  <span className="logo-subtitle">Wilmar Aguirre - Gobernación 2026</span>
                </div>
              </a>
            </div>

            {/* Menú principal de escritorio */}
            <div className="navbar-menu">
              <ul className="nav-menu">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a 
                      href={`#${item.id}`}
                      className={`nav-link ${activeSection === item.id ? 'active' : ''}`} 
                      onClick={(e) => scrollToSection(item.id, e)}
                    >
                      <Icon icon={item.icon} width="20" height="20" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botón de menú móvil */}
            <button 
              className="mobile-toggle" 
              onClick={toggleMobileMenu} 
              aria-label="Abrir menú"
              aria-expanded={isMobileMenuOpen}
            >
              <Icon icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"} width="28" height="28" />
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil como componente separado */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

export default Navbar;