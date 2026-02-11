import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  const redesSociales = [
    { icon: 'ri:facebook-fill', url: '#', name: 'Facebook' },
    { icon: 'ri:twitter-x-fill', url: '#', name: 'Twitter' },
    { icon: 'ri:instagram-fill', url: '#', name: 'Instagram' },
    { icon: 'ri:youtube-fill', url: '#', name: 'YouTube' },
    { icon: 'ri:tiktok-fill', url: '#', name: 'TikTok' }
  ];

  const navegacion = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Propuestas', href: '#propuestas' },
    { label: 'Trayectoria', href: '#trayectoria' },
    { label: 'Noticias', href: '#noticias' },
    { label: 'Únete', href: '#contacto' }
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          
          {/* COLUMNA 1 - INFORMACIÓN MTS */}
          <div className="footer-col footer-col-main">
            <div className="footer-logo">
              <h3>Movimiento Tercer Sistema</h3>
              <span className="footer-siglas">M.T.S</span>
            </div>
            <p className="footer-descripcion">
              Compromiso con el desarrollo sostenible, justicia social y transparencia en la gestión pública.
            </p>
            
            <div className="footer-candidatos">
              <div className="candidato-item">
                <Icon icon="fluent:person-star-20-filled" width="18" height="18" />
                <div>
                  <strong>Wilmar Aguirre</strong>
                  <span>Gobernación de Chuquisaca</span>
                </div>
              </div>
              <div className="candidato-item">
                <Icon icon="fluent:person-star-20-filled" width="18" height="18" />
                <div>
                  <strong>Jeyson Auza</strong>
                  <span>Alcaldía de Sucre</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA 2 - NAVEGACIÓN RÁPIDA */}
          <div className="footer-col">
            <h4 className="footer-titulo">Navegación</h4>
            <ul className="footer-lista">
              {navegacion.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>
                    <Icon icon="fluent:chevron-right-20-filled" width="14" height="14" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3 - CONTACTO */}
          <div className="footer-col">
            <h4 className="footer-titulo">Contacto</h4>
            <ul className="footer-lista footer-contacto">
              <li>
                <Icon icon="fluent:location-20-filled" width="18" height="18" />
                <span>Sucre, Chuquisaca</span>
              </li>
              <li>
                <a href="mailto:info@wilmaraguirre.bo">
                  <Icon icon="fluent:mail-20-filled" width="18" height="18" />
                  <span>info@wilmaraguirre.bo</span>
                </a>
              </li>
              <li>
                <a href="tel:+59174536806">
                  <Icon icon="fluent:call-20-filled" width="18" height="18" />
                  <span>+591 7453 6806</span>
                </a>
              </li>
            </ul>

            {/* REDES SOCIALES */}
            <div className="footer-redes">
              <h4 className="footer-titulo">Síguenos</h4>
              <div className="footer-redes-iconos">
                {redesSociales.map((red, index) => (
                  <a 
                    key={index} 
                    href={red.url} 
                    className="red-icono"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={red.name}
                  >
                    <Icon icon={red.icon} width="20" height="20" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © 2026 Movimiento Tercer Sistema (M.T.S) - Todos los derechos reservados
          </p>
          <div className="footer-legal">
            <a href="#">Aviso Legal</a>
            <span className="separator">•</span>
            <a href="#">Privacidad</a>
            <span className="separator">•</span>
            <a href="#">Cookies</a>
            <span className="separator">•</span>
            <a href="#">Transparencia</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;