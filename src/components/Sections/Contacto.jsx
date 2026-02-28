import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    interes: 'voluntario'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío real
    alert('¡Gracias por unirte! Pronto nos pondremos en contacto contigo.');
    setFormData({ 
      nombre: '', 
      email: '', 
      telefono: '', 
      mensaje: '',
      interes: 'voluntario'
    });
  };

  const whatsappNumber = "59174536806";
  const whatsappMessage = "Hola, quiero unirme al Movimiento Tercer Sistema y apoyar la candidatura de Wilmar Aguirre";

  return (
    <section className="section-contacto" id="contacto">
      <div className="container-contacto">
        
        {/* Header con Call to Action */}
        <div className="contacto-header">
          <div className="contacto-badge">
            <Icon icon="mdi:hand-heart" width="20" height="20" />
            <span>Sé parte del cambio</span>
          </div>
          <h2>Únete al Movimiento</h2>
          <p className="contacto-descripcion">
            Juntos construiremos el Chuquisaca que todos merecemos. Tu apoyo es fundamental 
            para lograr el cambio que nuestra región necesita.
          </p>
        </div>

        <div className="contacto-grid">
          
          {/* COLUMNA PRINCIPAL - FORMULARIO DE REGISTRO */}
          <div className="contacto-form-section">
            <div className="form-card">
              <div className="form-card-header">
                <Icon icon="mdi:account-plus" width="32" height="32" />
                <div>
                  <h3>Regístrate como Voluntario</h3>
                  <p>Completa el formulario y forma parte de nuestro equipo</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="contacto-form">
                <div className="form-group">
                  <label className="form-label">
                    <Icon icon="mdi:account" width="18" height="18" />
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Escribe tu nombre completo"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      <Icon icon="mdi:email" width="18" height="18" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Icon icon="mdi:phone" width="18" height="18" />
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="+591 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Icon icon="mdi:hand-heart" width="18" height="18" />
                    ¿Cómo quieres apoyar?
                  </label>
                  <select
                    name="interes"
                    value={formData.interes}
                    onChange={handleChange}
                    className="form-input form-select"
                  >
                    <option value="voluntario">Quiero ser voluntario</option>
                    <option value="difusion">Ayudar en redes sociales</option>
                    <option value="eventos">Participar en eventos</option>
                    <option value="propuestas">Contribuir con ideas</option>
                    <option value="otro">Otra forma de apoyo</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Icon icon="mdi:message-text" width="18" height="18" />
                    Mensaje (opcional)
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="3"
                    className="form-input form-textarea"
                    placeholder="Cuéntanos más sobre ti y cómo te gustaría ayudar..."
                  />
                </div>

                <button type="submit" className="btn-enviar-principal">
                  <Icon icon="mdi:send" width="20" height="20" />
                  <span>Unirme al Movimiento</span>
                  <Icon icon="mdi:arrow-right" width="20" height="20" />
                </button>
              </form>
            </div>
          </div>

          {/* COLUMNA LATERAL - CONTACTO Y ACCIONES */}
          <div className="contacto-sidebar">
            
            {/* Tarjeta de WhatsApp destacada */}
            <div className="whatsapp-card">
              <div className="whatsapp-card-content">
                <Icon icon="logos:whatsapp-icon" width="48" height="48" />
                <div className="whatsapp-text">
                  <h4>Contáctanos por WhatsApp</h4>
                  <p>Respuesta inmediata a tus consultas</p>
                </div>
              </div>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                className="btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="mdi:whatsapp" width="22" height="22" />
                <span>Enviar mensaje</span>
              </a>
            </div>

            {/* Información de contacto */}
            <div className="info-card">
              <div className="info-card-header">
                <Icon icon="mdi:information" width="24" height="24" />
                <h4>Información de Contacto</h4>
              </div>
              <div className="info-list">
                <a href="tel:+59174536806" className="info-item">
                  <div className="info-icon">
                    <Icon icon="mdi:phone" width="20" height="20" />
                  </div>
                  <div className="info-text">
                    <span className="info-label">Teléfono</span>
                    <span className="info-value">+591 7453 6806</span>
                  </div>
                </a>

                <a href="mailto:info@wilmaraguirre.bo" className="info-item">
                  <div className="info-icon">
                    <Icon icon="mdi:email" width="20" height="20" />
                  </div>
                  <div className="info-text">
                    <span className="info-label">Email</span>
                    <span className="info-value">info@wilmaraguirre.bo</span>
                  </div>
                </a>

                <a 
                  href="https://maps.app.goo.gl/f92j8zzRNhg7HSuD8" 
                  className="info-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="info-icon">
                    <Icon icon="mdi:map-marker" width="20" height="20" />
                  </div>
                  <div className="info-text">
                    <span className="info-label">Ubicación</span>
                    <span className="info-value">Sucre, Chuquisaca</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="redes-card">
              <div className="redes-card-header">
                <Icon icon="mdi:share-variant" width="24" height="24" />
                <h4>Síguenos en Redes</h4>
              </div>
              <div className="redes-grid">
                <a href="#" className="red-social facebook" title="Facebook">
                  <Icon icon="mdi:facebook" width="24" height="24" />
                </a>
                <a href="#" className="red-social twitter" title="Twitter">
                  <Icon icon="mdi:twitter" width="24" height="24" />
                </a>
                <a href="#" className="red-social instagram" title="Instagram">
                  <Icon icon="mdi:instagram" width="24" height="24" />
                </a>
                <a href="#" className="red-social youtube" title="YouTube">
                  <Icon icon="mdi:youtube" width="24" height="24" />
                </a>
                <a href="#" className="red-social tiktok" title="TikTok">
                  <Icon icon="mdi:music-note" width="24" height="24" />
                </a>
              </div>
            </div>

            {/* Call to action adicional */}
            <div className="cta-card">
              <Icon icon="mdi:vote" width="40" height="40" />
              <h4>Tu Voz Importa</h4>
              <p>Juntos construiremos el futuro que Chuquisaca merece</p>
              <div className="cta-stats">
                <div className="stat-item">
                  <strong>12</strong>
                  <span>Propuestas</span>
                </div>
                <div className="stat-item">
                  <strong>15+</strong>
                  <span>Años de experiencia</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer de sección */}
        <div className="contacto-footer">
          <Icon icon="mdi:shield-check" width="24" height="24" />
          <p>
            Tus datos están protegidos y serán utilizados únicamente para comunicarnos contigo 
            sobre el Movimiento Tercer Sistema y la campaña de Wilmar Aguirre.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacto;