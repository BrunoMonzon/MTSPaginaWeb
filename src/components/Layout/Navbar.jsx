import React from 'react';
import { Icon } from '@iconify/react';

const Navbar = ({ onMobileMenuToggle }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="logo">
            <span className="logo-text">MTS</span>
          </a>
        </div>

        {/* Menú Desktop - visible en pantallas grandes */}
        <div className="navbar-menu desktop-menu">
          <ul className="navbar-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#propuestas">Propuestas</a></li>
            <li><a href="#trayectoria">Trayectoria</a></li>
            <li><a href="#noticias">Noticias</a></li>
            <li><a href="#contacto">Únete</a></li>
          </ul>
        </div>

        {/* Botón Mobile Toggle - solo visible en móvil */}
        <button 
          className="mobile-toggle" 
          onClick={onMobileMenuToggle}
          aria-label="Abrir menú"
        >
          <Icon icon="mdi:menu" width="24" height="24" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
