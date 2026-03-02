import React from 'react';
import { Icon } from '@iconify/react';

const timelineItems = [
  {
    year: '2010 – 2015',
    title: 'Activismo Cívico',
    description: 'Inicio del trabajo comunitario y defensa de los derechos regionales de Chuquisaca.',
    icon: 'fluent:people-community-20-filled',
  },
  {
    year: '2016 – 2018',
    title: 'Presidencia de Codeinca',
    description: 'Liderazgo en el Comité Cívico de Defensa de los Intereses de Chuquisaca.',
    icon: 'fluent:target-arrow-20-filled',
  },
  {
    year: '2019 – 2022',
    title: 'Gestión y Liderazgo',
    description: 'Coordinación de proyectos de desarrollo y fortalecimiento institucional departamental.',
    icon: 'fluent:building-government-20-filled',
  },
  {
    year: '2023 – 2025',
    title: 'Preparación para el Cambio',
    description: 'Formulación del plan estratégico "12 Razones para ser Gobernador de Chuquisaca".',
    icon: 'fluent:rocket-20-filled',
  },
];

const stats = [
  { number: '15+', label: 'Años de experiencia', icon: 'fluent:history-20-filled' },
  { number: '12',  label: 'Propuestas concretas', icon: 'fluent:document-bullet-list-20-filled' },
  { number: '2',   label: 'Alianzas estratégicas', icon: 'fluent:handshake-20-filled' },
  { number: '100+', label: 'Comunidades alcanzadas', icon: 'fluent:people-community-20-filled' },
];

const Trayectoria = () => {
  return (
    <section className="tr-section" id="trayectoria">
      <div className="tr-container">

        {/* Header */}
        <div className="tr-header">
          <span className="tr-eyebrow">Trayectoria Comprobada</span>
          <h2 className="tr-title">Liderazgo con Experiencia</h2>
          <p className="tr-subtitle">
            Más de 15 años dedicados al servicio de Chuquisaca, defendiendo los intereses
            de nuestra región y construyendo las bases para un desarrollo sostenible.
          </p>
        </div>

        {/* Main grid */}
        <div className="tr-grid">

          {/* Left — identity card + stats */}
          <div className="tr-left">
            <div className="tr-id-card">
              <div className="tr-id-bg" aria-hidden="true" />
              <div className="tr-id-content">
                <div className="tr-id-avatar">
                  <Icon icon="fluent:person-board-20-filled" width="64" height="64" />
                </div>
                <p className="tr-id-pre">Ing.</p>
                <h3 className="tr-id-name">Wilmar<br />Aguirre</h3>
                <p className="tr-id-role">Gobernador de Chuquisaca<br />Candidato de la Unidad</p>
                <span className="tr-id-tag">#12RazonesParaSerGobernador</span>
              </div>
            </div>

            {/* Stats */}
            <div className="tr-stats">
              {stats.map((s) => (
                <div className="tr-stat" key={s.label}>
                  <div className="tr-stat-icon">
                    <Icon icon={s.icon} width="18" height="18" />
                  </div>
                  <span className="tr-stat-number">{s.number}</span>
                  <span className="tr-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — timeline */}
          <div className="tr-right">
            <h3 className="tr-timeline-heading">Cronología de Liderazgo</h3>

            <div className="tr-timeline">
              {timelineItems.map((item, i) => (
                <div className="tr-tl-item" key={i}>
                  {/* connector */}
                  <div className="tr-tl-track">
                    <div className="tr-tl-dot">
                      <Icon icon={item.icon} width="16" height="16" />
                    </div>
                    {i < timelineItems.length - 1 && <div className="tr-tl-line" />}
                  </div>
                  {/* content */}
                  <div className="tr-tl-body">
                    <span className="tr-tl-year">{item.year}</span>
                    <h4 className="tr-tl-title">{item.title}</h4>
                    <p className="tr-tl-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="tr-cta">
          <div className="tr-cta-text">
            <h4 className="tr-cta-title">¿Listo para el cambio?</h4>
            <p className="tr-cta-sub">Conoce las 12 propuestas concretas para transformar Chuquisaca</p>
          </div>
          <a href="#propuestas" className="tr-cta-btn">
            <Icon icon="fluent:document-bullet-list-20-filled" width="20" height="20" />
            Ver propuestas completas
          </a>
        </div>

      </div>
    </section>
  );
};

export default Trayectoria;