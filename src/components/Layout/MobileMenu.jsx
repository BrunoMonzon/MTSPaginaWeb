import React, { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const menuItems = [
    { href: '#inicio', text: 'Inicio' },
    { href: '#propuestas', text: 'Propuestas' },
    { href: '#trayectoria', text: 'Trayectoria' },
    { href: '#noticias', text: 'Noticias' },
    { href: '#equipo', text: 'Equipo' },
    { href: '#contacto', text: 'Únete' }
  ];

  return (
    <>
      <div className={`mobile-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`} id="mobileMenu">
        <div className="mobile-menu-header">
          <div className="logo">M.T.S</div>
          <button className="mobile-menu-close" onClick={closeMenu}>✕</button>
        </div>
        <ul className="mobile-menu-links">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                className={index === 0 ? 'active' : ''}
                onClick={closeMenu}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-cta">
          <a href="#contacto" className="btn-nav btn-outline" onClick={closeMenu}>Únete</a>
          <a href="#donar" className="btn-nav btn-solid" onClick={closeMenu}>Apóyanos</a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
