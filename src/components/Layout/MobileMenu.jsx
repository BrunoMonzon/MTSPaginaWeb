import React from 'react';
import { Icon } from '@iconify/react';

const MobileMenu = ({ isOpen, onClose }) => {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    onClose();
    
    // Scroll suave a la sección
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  const menuItems = [
    { href: '#inicio', text: 'Inicio', icon: 'mdi:home' },
    { href: '#propuestas', text: 'Propuestas', icon: 'mdi:lightbulb-on' },
    { href: '#trayectoria', text: 'Trayectoria', icon: 'mdi:chart-timeline-variant' },
    { href: '#equipo', text: 'Equipo', icon: 'mdi:account-group' },
    { href: '#noticias', text: 'Noticias', icon: 'mdi:newspaper-variant' },
    { href: '#ubicacion', text: 'Ubicación', icon: 'mdi:map-marker' },
    { href: '#contacto', text: 'Únete', icon: 'mdi:account-plus' }
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className={`mobile-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
      />
      
      {/* Menú */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`} id="mobileMenu">
        <div className="mobile-menu-header">
          <div className="mobile-logo">
            <img src="/images/logo/Logo_mts.png" alt="MTS Logo" className="mobile-logo-image" />
            <div className="mobile-logo-text-wrapper">
              <span className="mobile-logo-title">MOVIMIENTO TERCER SISTEMA</span>
            </div>
          </div>
          <button className="mobile-menu-close" onClick={onClose} aria-label="Cerrar menú">
            <Icon icon="mdi:close" width="24" height="24" />
          </button>
        </div>
        
        <nav className="mobile-menu-nav">
          <ul className="mobile-menu-links">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  <Icon icon={item.icon} width="22" height="22" />
                  <span>{item.text}</span>
                  <Icon icon="mdi:chevron-right" width="20" height="20" className="chevron" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="mobile-menu-footer">
          <div className="mobile-menu-cta">
            <a 
              href="#contacto" 
              className="mobile-btn mobile-btn-primary"
              onClick={(e) => handleLinkClick(e, '#contacto')}
            >
              <Icon icon="mdi:account-plus" width="22" height="22" />
              <span>Únete al Movimiento</span>
            </a>
          </div>
          
          <div className="mobile-menu-social">
            <a href="https://www.facebook.com/profile.php?id=61581741286125" className="mobile-social-icon facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Icon icon="mdi:facebook" width="22" height="22" />
            </a>
            <a href="https://www.tiktok.com/@wilmar.aguirre.of?_r=1&_t=ZS-94RxvMEs9i5" className="mobile-social-icon tiktok" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              <Icon icon="mdi:music-note" width="22" height="22" />
            </a>
            <a href="https://wa.me/59177249319" className="mobile-social-icon whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <Icon icon="mdi:whatsapp" width="22" height="22" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;