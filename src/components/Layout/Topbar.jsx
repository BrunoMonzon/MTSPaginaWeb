import React from 'react';
import { Icon } from '@iconify/react';

const SOCIAL = [
  { icon: 'ic:baseline-whatsapp', href: 'https://wa.me/59174536806', label: 'WhatsApp' },
  { icon: 'ic:baseline-facebook',  href: 'https://facebook.com/',        label: 'Facebook' },
  { icon: 'ic:baseline-tiktok',    href: 'https://tiktok.com/',          label: 'TikTok' },
];

const LINKS = [
  { label: 'Transparencia', href: '#transparencia' },
  { label: 'Contacto',      href: '#contacto' },
  { label: 'Sala de Prensa', href: '#prensa' },
];

const Topbar = () => (
  <div className="tb-bar">
    <div className="tb-inner">
      <nav className="tb-links" aria-label="Links rápidos">
        {LINKS.map((l) => (
          <a key={l.label} href={l.href} className="tb-link">
            {l.label}
          </a>
        ))}
      </nav>

      <div className="tb-social" aria-label="Redes sociales">
        {SOCIAL.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="tb-social-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
          >
            <Icon icon={s.icon} width="16" height="16" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Topbar;