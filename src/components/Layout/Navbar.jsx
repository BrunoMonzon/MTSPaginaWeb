import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import MobileMenu from './MobileMenu';

/* ─── Topbar inline (candidato + redes) ─── */
const SOCIAL = [
  { icon: 'ic:baseline-whatsapp', href: 'https://wa.me/59174536806', label: 'WhatsApp' },
  { icon: 'ic:baseline-facebook',  href: 'https://facebook.com/',       label: 'Facebook'  },
  { icon: 'ic:baseline-tiktok',    href: 'https://tiktok.com/',         label: 'TikTok'    },
];

const Topbar = () => (
  <div className="tb-bar">
    <div className="tb-inner">
      {/* Candidate info */}
      <div className="tb-info">
        <span className="tb-info-item">
          <Icon icon="fluent:person-star-20-filled" width="15" height="15" />
          Ing. Wilmar Aguirre — Candidato a Gobernador de Chuquisaca 2026
        </span>
        <span className="tb-separator" aria-hidden="true" />
        <span className="tb-info-item tb-info-item--phone">
          <Icon icon="fluent:call-20-filled" width="15" height="15" />
          +591 7453 6806
        </span>
      </div>

      {/* Social */}
      <div className="tb-social">
        {SOCIAL.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="tb-social-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
          >
            <Icon icon={s.icon} width="15" height="15" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

/* ─── Navbar ─── */
const NAV_ITEMS = [
  { id: 'inicio',      label: 'Inicio',      icon: 'fluent:home-20-filled'              },
  { id: 'propuestas',  label: 'Propuestas',  icon: 'fluent:lightbulb-20-filled'         },
  { id: 'trayectoria', label: 'Trayectoria', icon: 'fluent:timeline-20-filled'           },
  { id: 'equipo',      label: 'Equipo',      icon: 'fluent:people-20-filled'            },
  { id: 'noticias',    label: 'Noticias',    icon: 'fluent:news-20-filled'              },
  { id: 'ubicacion',   label: 'Ubicación',   icon: 'fluent:location-20-filled'          },
  { id: 'contacto',    label: 'Únete',       icon: 'fluent:person-add-20-filled'        },
];

const SECTIONS = NAV_ITEMS.map((n) => n.id);

const Navbar = () => {
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [activeSection,    setActiveSection]    = useState('inicio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const active = SECTIONS.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 130 && bottom >= 130;
      });
      if (active) setActiveSection(active);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const scrollTo = (id, e) => {
    e?.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
      setActiveSection(id);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <Topbar />

      <nav className={`nb-nav${isScrolled ? ' nb-nav--scrolled' : ''}`}>
        <div className="nb-inner">

          {/* Logo */}
          <a href="#inicio" className="nb-logo" onClick={(e) => scrollTo('inicio', e)}>
            <div className="nb-logo-circle">
              <span className="nb-logo-mts">MTS</span>
            </div>
            <div className="nb-logo-text">
              <span className="nb-logo-title">Movimiento Tercer Sistema</span>
              <span className="nb-logo-sub">Wilmar Aguirre · Gobernación 2026</span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="nb-menu" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nb-link${activeSection === item.id ? ' nb-link--active' : ''}`}
                  onClick={(e) => scrollTo(item.id, e)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA button (desktop) */}
          <a
            href="#contacto"
            className="nb-cta"
            onClick={(e) => scrollTo('contacto', e)}
          >
            Únete
          </a>

          {/* Hamburger */}
          <button
            className="nb-hamburger"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
          >
            <Icon
              icon={isMobileMenuOpen ? 'fluent:dismiss-24-regular' : 'fluent:line-horizontal-3-20-filled'}
              width="26"
              height="26"
            />
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;