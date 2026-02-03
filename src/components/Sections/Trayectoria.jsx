import React from 'react';
import { Icon } from '@iconify/react';

const Trayectoria = () => {
  const puntosTrayectoria = [
    'Ex Presidente del Comité Cívico Codeinca',
    'Líder en la defensa de los derechos regionales',
    'Experiencia en gestión pública y privada',
    'Compromiso con la transparencia y la participación ciudadana',
    '15+ años de servicio a Chuquisaca',
    'Candidato de la Unidad para Gobernación 2026',
    'Impulsor del desarrollo productivo sostenible',
    'Defensor de los recursos naturales del departamento'
  ];

  const principios = [
    {
      icon: 'fluent:target-arrow-16-filled',
      title: 'Visión Estratégica',
      description: '12 propuestas concretas para transformar Chuquisaca'
    },
    {
      icon: 'fluent:handshake-20-filled',
      title: 'Trabajo en Equipo',
      description: 'En alianza con Morena y Evo Pueblo'
    },
    {
      icon: 'fluent:people-community-20-filled',
      title: 'Participación Ciudadana',
      description: 'Gobierno cercano a la gente'
    }
  ];

  return (
    <section className="trayectoria" id="trayectoria">
      <div className="container">
        <div className="trayectoria-content">
          <div className="trayectoria-image">
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--blanco)',
              padding: '2rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, var(--verde-mts) 0%, var(--verde-oscuro) 100%)'
            }}>
              <Icon icon="fluent:person-board-20-filled" width="80" height="80" />
              <div style={{ marginTop: '1rem' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>ING. WILMAR</h3>
                <h3 style={{ fontSize: '2.5rem', fontWeight: '900' }}>AGUIRRE</h3>
                <p style={{ marginTop: '1rem', fontSize: '1.2rem', opacity: 0.9 }}>
                  GOBERNADOR DE CHUQUISACA<br />
                  CANDIDATO DE LA UNIDAD
                </p>
                <div style={{
                  marginTop: '1.5rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '30px',
                  fontSize: '0.9rem'
                }}>
                  #12RazonesParaSerGobernador
                </div>
              </div>
            </div>
          </div>
          <div className="trayectoria-text">
            <span className="section-badge">Experiencia y Compromiso</span>
            <h2>Una Trayectoria al Servicio de Chuquisaca</h2>
            <p>
              Con más de <strong>15 años de servicio cívico</strong> y un profundo compromiso por el desarrollo de nuestra región, 
              el <strong>Ing. Wilmar Aguirre</strong> ha demostrado su capacidad de liderazgo y su dedicación incansable 
              por defender los intereses de todos los chuquisaqueños.
            </p>
            <p>
              Como <strong>ex presidente del Comité Cívico de Defensa de los Intereses de Chuquisaca (Codeinca)</strong>, 
              lideró importantes luchas por los derechos de nuestra región y trabajó de cerca con comunidades 
              urbanas y rurales para identificar y resolver sus necesidades más urgentes.
            </p>
            <p>
              Hoy, desde el <strong>Movimiento Tercer Sistema (M.T.S)</strong>, con el respaldo de <strong>Morena</strong> y 
              en alianza con <strong>Evo Pueblo</strong>, presentamos un proyecto renovador, transparente y participativo 
              para transformar Chuquisaca con nuestras <strong>#12Razones para ser Gobernador</strong>.
            </p>
            
            <ul className="trayectoria-list">
              {puntosTrayectoria.map((punto, index) => (
                <li key={index}>
                  <Icon icon="fluent:checkmark-12-filled" width="20" height="20" style={{ marginRight: '0.5rem', color: 'var(--verde-mts)' }} />
                  {punto}
                </li>
              ))}
            </ul>
            
            <div style={{
              marginTop: '2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem'
            }}>
              {principios.map((principio, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  padding: '1rem',
                  border: '2px solid var(--gris-200)',
                  borderRadius: '8px'
                }}>
                  <Icon icon={principio.icon} width="32" height="32" style={{ color: 'var(--dorado-mts)' }} />
                  <h4 style={{ margin: '0.5rem 0', color: 'var(--verde-mts)' }}>{principio.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--gris-700)' }}>{principio.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trayectoria;
