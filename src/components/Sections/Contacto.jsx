import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  return (
    <section className="contacto" id="contacto">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Participa</span>
          <h2 className="section-title">Únete a Nuestra Causa</h2>
          <p className="section-description">
            Sé parte del cambio que Chuquisaca necesita. Contáctanos y únete a nuestro movimiento.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginTop: '3rem'
        }}>
          <div style={{
            background: 'var(--blanco)',
            padding: '2.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{
              marginBottom: '2rem',
              color: 'var(--verde-mts)',
              fontSize: '1.5rem'
            }}>
              Formulario de Contacto
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--gris-700)',
                  fontWeight: '500'
                }}>
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid var(--gris-300)',
                    borderRadius: '4px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--gris-700)',
                  fontWeight: '500'
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid var(--gris-300)',
                    borderRadius: '4px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--gris-700)',
                  fontWeight: '500'
                }}>
                  Mensaje *
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid var(--gris-300)',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'var(--verde-mts)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div>
            <h3 style={{
              marginBottom: '1.5rem',
              color: 'var(--verde-mts)',
              fontSize: '1.5rem'
            }}>
              Contacto Directo
            </h3>
            
            <div style={{
              background: 'var(--blanco)',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Teléfono:</strong><br />
                +591 7453 6806
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong>WhatsApp:</strong><br />
                <a href="https://wa.me/59174536806" target="_blank" rel="noopener noreferrer">
                  Enviar mensaje por WhatsApp
                </a>
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Email:</strong><br />
                info@wilmaraguirre.bo
              </p>
              <p>
                <strong>Dirección:</strong><br />
                Sucre, Chuquisaca - Bolivia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
