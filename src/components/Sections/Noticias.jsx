import React from 'react';
import { Icon } from '@iconify/react';

const Noticias = () => {
  const noticias = [
    {
      id: 1,
      fecha: '2 de Febrero, 2026',
      titulo: 'Morena confirma candidaturas para Chuquisaca',
      excerpt: 'El Movimiento de Renovación Nacional confirma a Wilmar Aguirre para la Gobernación de Chuquisaca y Jeyson Auza para la Alcaldía de Sucre.',
      icon: 'fluent:people-community-20-filled'
    },
    {
      id: 2,
      fecha: '30 de Enero, 2026',
      titulo: 'Presentación del Plan de Salud Departamental',
      excerpt: 'Wilmar Aguirre presenta su propuesta integral para fortalecer el sistema de salud en todas las comunidades de Chuquisaca.',
      icon: 'healthicons:health'
    },
    {
      id: 3,
      fecha: '28 de Enero, 2026',
      titulo: 'Recorrido por comunidades rurales',
      excerpt: 'El candidato visitó diversas comunidades rurales para escuchar de primera mano las necesidades y propuestas de los ciudadanos.',
      icon: 'fluent:people-community-20-filled'
    }
  ];

  return (
    <section className="actualidad" id="noticias">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Últimas Noticias</span>
          <h2 className="section-title">Noticias de Campaña</h2>
          <p className="section-description">
            Mantente informado sobre nuestras actividades, eventos y propuestas para Chuquisaca
          </p>
        </div>

        <div className="noticias-grid">
          {noticias.map((noticia) => (
            <div key={noticia.id} className="noticia-card">
              <div className="noticia-image">
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--blanco)',
                  fontSize: '2rem',
                  background: 'linear-gradient(135deg, var(--verde-mts) 0%, var(--dorado-mts) 100%)'
                }}>
                  <Icon icon={noticia.icon} width="60" height="60" />
                </div>
              </div>
              <div className="noticia-content">
                <div className="noticia-date">
                  <Icon icon="fluent:calendar-20-filled" width="14" height="14" style={{ marginRight: '0.5rem' }} />
                  {noticia.fecha}
                </div>
                <h3 className="noticia-title">{noticia.titulo}</h3>
                <p className="noticia-excerpt">{noticia.excerpt}</p>
                <a href="#" className="noticia-link" onClick={(e) => {
                  e.preventDefault();
                  alert(`Noticia completa: ${noticia.titulo}`);
                }}>
                  Leer más 
                  <Icon icon="fluent:arrow-right-20-filled" width="16" height="16" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Noticias;
