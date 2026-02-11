import React from 'react';
import { Icon } from '@iconify/react';

const Trayectoria = () => {
  const timelineItems = [
    {
      year: '2010-2015',
      title: 'Activismo Cívico',
      description: 'Inicio del trabajo comunitario y defensa de los derechos regionales',
      icon: 'fluent:people-community-20-filled',
      color: '#006C36'
    },
    {
      year: '2016-2018',
      title: 'Presidencia de Codeinca',
      description: 'Liderazgo en el Comité Cívico de Defensa de los Intereses de Chuquisaca',
      icon: 'fluent:target-arrow-20-filled',
      color: '#004422'
    },
    {
      year: '2019-2022',
      title: 'Gestión y Liderazgo',
      description: 'Coordinación de proyectos de desarrollo y fortalecimiento institucional',
      icon: 'fluent:building-government-20-filled',
      color: '#CD9869'
    },
    {
      year: '2023-2025',
      title: 'Preparación para el Cambio',
      description: 'Formulación del plan estratégico "12 Razones para ser Gobernador"',
      icon: 'fluent:rocket-20-filled',
      color: '#B8835A'
    }
  ];

  const principios = [
    {
      icon: 'fluent:target-arrow-16-filled',
      title: 'Visión Estratégica',
      description: '12 propuestas concretas para transformar Chuquisaca',
      number: '12',
      color: '#006C36'
    },
    {
      icon: 'fluent:handshake-20-filled',
      title: 'Alianzas Sólidas',
      description: 'En alianza con Morena y Evo Pueblo',
      number: '2',
      color: '#004422'
    },
    {
      icon: 'fluent:people-community-20-filled',
      title: 'Participación',
      description: 'Gobierno cercano y participativo',
      number: '100+',
      color: '#CD9869'
    },
    {
      icon: 'fluent:history-20-filled',
      title: 'Experiencia',
      description: '15+ años al servicio de Chuquisaca',
      number: '15+',
      color: '#B8835A'
    }
  ];

  return (
    <section className="section-trayectoria" id="trayectoria">
      <div className="container-trayectoria">
        <div className="trayectoria-header">
          <div className="trayectoria-badge">Trayectoria Comprobada</div>
          <h2 className="trayectoria-title">Liderazgo con Experiencia</h2>
          <p className="trayectoria-description">
            Más de 15 años dedicados al servicio de Chuquisaca, defendiendo los intereses 
            de nuestra región y construyendo las bases para un desarrollo sostenible.
          </p>
        </div>

        <div className="trayectoria-content">
          {/* COLUMNA IZQUIERDA: IMAGEN Y PRINCIPIOS */}
          <div className="trayectoria-columna-izquierda">
            {/* Imagen */}
            <div className="trayectoria-image-container">
              <div className="trayectoria-image-content">
                <div className="image-overlay">
                  <Icon icon="fluent:person-board-20-filled" width="80" height="80" />
                  <div className="image-text">
                    <h3>ING. WILMAR</h3>
                    <h2>AGUIRRE</h2>
                    <p>Gobernador de Chuquisaca<br />Candidato de la Unidad</p>
                    <div className="image-badge">
                      #12RazonesParaSerGobernador
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Principios debajo de la imagen */}
            <div className="principios-debajo-imagen">
              <div className="principios-cards-horizontal">
                {principios.map((principio, index) => (
                  <div key={index} className="principio-card-horizontal">
                    <div className="principio-numero-grande">{principio.number}</div>
                    <div className="principio-contenido">
                      <h4 className="principio-titulo">{principio.title}</h4>
                      <p className="principio-descripcion">{principio.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: TIMELINE */}
          <div className="trayectoria-columna-derecha">
            <div className="timeline-container">
              <h3 className="timeline-title">Cronología de Liderazgo</h3>
              <div className="timeline">
                {timelineItems.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker" style={{ backgroundColor: item.color }}>
                      <Icon icon={item.icon} width="20" height="20" />
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-year">{item.year}</div>
                      <h4 className="timeline-item-title">{item.title}</h4>
                      <p className="timeline-item-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA CENTRADO DEBAJO DE AMBAS COLUMNAS */}
        <div className="trayectoria-cta-centrado">
          <h4 className="trayectoria-cta-titulo">¿Listo para el cambio?</h4>
          <p className="trayectoria-cta-texto">
            Conoce nuestras 12 propuestas concretas para transformar Chuquisaca
          </p>
          <a href="#propuestas" className="btn-trayectoria-ver-propuestas">
            <Icon icon="fluent:document-bullet-list-20-filled" width="20" height="20" />
            Ver Propuestas Completas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Trayectoria;