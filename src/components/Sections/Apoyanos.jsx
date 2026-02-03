import React, { useState } from 'react';

const Apoyanos = () => {
  const [monto, setMonto] = useState('');

  const montosSugeridos = [
    { valor: '50', label: '50 Bs.' },
    { valor: '100', label: '100 Bs.' },
    { valor: '200', label: '200 Bs.' },
    { valor: '500', label: '500 Bs.' },
    { valor: '1000', label: '1,000 Bs.' },
    { valor: 'otro', label: 'Otro monto' }
  ];

  const handleDonacion = (e) => {
    e.preventDefault();
    if (!monto) {
      alert('Por favor seleccione un monto');
      return;
    }
    alert(`¡Gracias por su donación de ${monto} Bs.! Le enviaremos los detalles de pago.`);
    setMonto('');
  };

  return (
    <section className="apoyanos" id="donar">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Apoya la Campaña</span>
          <h2 className="section-title">Apóyanos para Transformar Chuquisaca</h2>
          <p className="section-description">
            Tu contribución nos ayuda a llevar nuestro mensaje a cada rincón de Chuquisaca. 
            Juntos construiremos el futuro que nuestra región merece.
          </p>
        </div>

        <div style={{
          background: 'var(--blanco)',
          padding: '2.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          maxWidth: '600px',
          margin: '3rem auto'
        }}>
          <h3 style={{
            marginBottom: '2rem',
            color: 'var(--verde-mts)',
            fontSize: '1.5rem',
            textAlign: 'center'
          }}>
            Realizar una Donación
          </h3>
          
          <form onSubmit={handleDonacion}>
            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '1rem',
                fontSize: '1.1rem',
                textAlign: 'center'
              }}>
                Selecciona un monto sugerido
              </label>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}>
                {montosSugeridos.map((item) => (
                  <button
                    key={item.valor}
                    type="button"
                    onClick={() => item.valor === 'otro' ? setMonto('') : setMonto(item.valor)}
                    style={{
                      padding: '1rem',
                      background: monto === item.valor ? 'var(--dorado-mts)' : 'var(--gris-100)',
                      border: `2px solid ${monto === item.valor ? 'var(--dorado-mts)' : 'var(--gris-300)'}`,
                      borderRadius: '8px',
                      color: monto === item.valor ? 'white' : 'var(--gris-800)',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  textAlign: 'center'
                }}>
                  O ingresa otro monto (Bs.)
                </label>
                <input
                  type="number"
                  value={monto}
                  onChange={(e) => setMonto(e.target.value)}
                  placeholder="Ej: 150"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid var(--gris-300)',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '1rem',
                background: 'var(--verde-mts)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
              onMouseOver={(e) => e.target.style.background = 'var(--verde-hover)'}
              onMouseOut={(e) => e.target.style.background = 'var(--verde-mts)'}
            >
              Contribuir Ahora
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Apoyanos;
