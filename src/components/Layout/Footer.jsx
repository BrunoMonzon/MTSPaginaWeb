import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Movimiento Tercer Sistema</h3>
          <p>
            Un proyecto político comprometido con el desarrollo sostenible, la justicia social y la transparencia en la gestión pública.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            <strong>Wilmar Aguirre</strong> - Gobernación de Chuquisaca<br />
            <strong>Jeyson Auza</strong> - Alcaldía de Sucre
          </p>
        </div>
        <div className="footer-section">
          <h3>Navegación</h3>
          <ul className="footer-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#propuestas">Propuestas</a></li>
            <li><a href="#trayectoria">Trayectoria</a></li>
            <li><a href="#noticias">Noticias</a></li>
            <li><a href="#contacto">Únete</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <ul className="footer-links">
            <li><Icon icon="fluent:location-20-filled" width="16" height="16" style={{ marginRight: '0.5rem' }} /> Sucre, Chuquisaca - Bolivia</li>
            <li><a href="mailto:info@wilmaraguirre.bo"><Icon icon="fluent:mail-20-filled" width="16" height="16" style={{ marginRight: '0.5rem' }} /> info@wilmaraguirre.bo</a></li>
            <li><a href="tel:+59146000000"><Icon icon="fluent:call-20-filled" width="16" height="16" style={{ marginRight: '0.5rem' }} /> +591 (4) 600-0000</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Síguenos</h3>
          <ul className="footer-links">
            <li><a href="#"><Icon icon="ri:facebook-fill" width="16" height="16" style={{ marginRight: '0.5rem' }} /> Facebook</a></li>
            <li><a href="#"><Icon icon="ri:twitter-x-fill" width="16" height="16" style={{ marginRight: '0.5rem' }} /> Twitter</a></li>
            <li><a href="#"><Icon icon="ri:instagram-fill" width="16" height="16" style={{ marginRight: '0.5rem' }} /> Instagram</a></li>
            <li><a href="#"><Icon icon="ri:youtube-fill" width="16" height="16" style={{ marginRight: '0.5rem' }} /> YouTube</a></li>
            <li><a href="#"><Icon icon="ri:tiktok-fill" width="16" height="16" style={{ marginRight: '0.5rem' }} /> TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Movimiento Tercer Sistema (M.T.S) - Todos los derechos reservados</p>
        <div className="footer-legal">
          <a href="#">Aviso Legal</a>
          <a href="#">Política de Privacidad</a>
          <a href="#">Política de Cookies</a>
          <a href="#">Transparencia</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
