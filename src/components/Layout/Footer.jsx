import React from 'react';
import { Icon } from '@iconify/react';

const SOCIAL = [
  { icon: 'ic:baseline-whatsapp', href: 'https://wa.me/59174536806', label: 'WhatsApp' },
  { icon: 'ic:baseline-facebook',  href: 'https://facebook.com/',        label: 'Facebook' },
  { icon: 'ic:baseline-tiktok',    href: 'https://tiktok.com/',          label: 'TikTok' },
];

const NAV = [
  { label: 'Inicio',       href: '#inicio' },
  { label: 'Propuestas',   href: '#propuestas' },
  { label: 'Trayectoria',  href: '#trayectoria' },
  { label: 'Noticias',     href: '#noticias' },
  { label: 'Únete',        href: '#contacto' },
  { label: 'Ubicación',    href: '#ubicacion' },
];

const CONTACT = [
  { icon: 'fluent:location-20-filled', text: 'Manuel Durán entre Adrián Camacho y Mairana, Sucre', href: 'https://maps.app.goo.gl/f92j8zzRNhg7HSuD8' },
  { icon: 'fluent:mail-20-filled',     text: 'info@wilmaraguirre.bo', href: 'mailto:info@wilmaraguirre.bo' },
  { icon: 'fluent:call-20-filled',     text: '+591 7453 6806',        href: 'tel:+59174536806' },
];

const Footer = () => (
  <footer className="ft-footer">
    <div className="ft-main">
      <div className="ft-grid">

        {/* Col 1 — Brand */}
        <div className="ft-col ft-col--brand">
          <div className="ft-brand">
            <span className="ft-brand-name">Movimiento Tercer Sistema</span>
            <span className="ft-brand-sigla">M.T.S</span>
          </div>
          <p className="ft-brand-desc">
            Compromiso con el desarrollo sostenible, la justicia social y la transparencia en la gestión pública de Chuquisaca.
          </p>

          <div className="ft-candidates">
            {[
              { name: 'Wilmar Aguirre',  role: 'Gobernación de Chuquisaca' },
              { name: 'Jeyson Auza',     role: 'Alcaldía de Sucre' },
            ].map((c) => (
              <div className="ft-candidate" key={c.name}>
                <Icon icon="fluent:person-star-20-filled" width="16" height="16" />
                <div>
                  <strong>{c.name}</strong>
                  <span>{c.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Col 2 — Nav */}
        <div className="ft-col">
          <h4 className="ft-col-title">Navegación</h4>
          <ul className="ft-nav">
            {NAV.map((n) => (
              <li key={n.label}>
                <a href={n.href}>
                  <Icon icon="fluent:chevron-right-20-filled" width="13" height="13" />
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact + Social */}
        <div className="ft-col">
          <h4 className="ft-col-title">Contacto</h4>
          <ul className="ft-contact">
            {CONTACT.map((c) => (
              <li key={c.text}>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    <Icon icon={c.icon} width="16" height="16" />
                    <span>{c.text}</span>
                  </a>
                ) : (
                  <>
                    <Icon icon={c.icon} width="16" height="16" />
                    <span>{c.text}</span>
                  </>
                )}
              </li>
            ))}
          </ul>

          <h4 className="ft-col-title ft-col-title--social">Síguenos</h4>
          <div className="ft-social">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="ft-social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                <Icon icon={s.icon} width="18" height="18" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>

    {/* Bottom bar */}
    <div className="ft-bottom">
      <div className="ft-bottom-inner">
        <div className="ft-copyright-container">
          <p className="ft-copyright">© 2026 Movimiento Tercer Sistema (M.T.S) · Todos los derechos reservados</p>
          <span className="ft-developer">Developed by <strong>Bruno Monzón</strong></span>
        </div>
        <nav className="ft-legal" aria-label="Legal">
          {['Aviso Legal', 'Privacidad', 'Cookies', 'Transparencia'].map((l, i, arr) => (
            <React.Fragment key={l}>
              <a href="#">{l}</a>
              {i < arr.length - 1 && <span aria-hidden="true">·</span>}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;