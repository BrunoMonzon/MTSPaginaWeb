import React, { useState } from 'react';
import { Icon } from '@iconify/react';

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
    alert('¡Gracias por contactarnos! Te responderemos a la brevedad.');
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  const whatsappNumber = "59174536806";
  const whatsappMessage = "Hola MTS, me interesa saber más sobre el movimiento...";

  const contactosDirectos = [
    {
      icon: 'fluent:call-24-filled',
      title: 'TELÉFONO',
      value: '+591 7453 6806',
      link: 'tel:+59174536806',
      color: '#006C36'
    },
    {
      icon: 'logos:whatsapp-icon',
      title: 'WHATSAPP',
      value: '+591 7453 6806',
      link: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      color: '#25D366'
    },
    {
      icon: 'fluent:mail-24-filled',
      title: 'EMAIL',
      value: 'info@wilmaraguirre.bo',
      link: 'mailto:info@wilmaraguirre.bo',
      color: '#EA4335'
    },
    {
      icon: 'fluent:location-24-filled',
      title: 'UBICACIÓN',
      value: 'XQF3+RW9, Sucre',
      link: 'https://maps.app.goo.gl/f92j8zzRNhg7HSuD8',
      color: '#CD9869'
    }
  ];

  const redesSociales = [
    { icon: 'logos:facebook', name: 'Facebook', url: '#', color: '#1877F2' },
    { icon: 'logos:twitter', name: 'Twitter', url: '#', color: '#1DA1F2' },
    { icon: 'logos:instagram-icon', name: 'Instagram', url: '#', color: '#E4405F' },
    { icon: 'logos:youtube-icon', name: 'YouTube', url: '#', color: '#FF0000' },
    { icon: 'logos:tiktok-icon', name: 'TikTok', url: '#', color: '#000000' }
  ];

  return (
    <section className="section-contacto" id="contacto">
      <div className="container-contacto">
        <div className="contacto-header">
          <h2>Ponte en Contacto</h2>
          <p>
            Escríbenos para más información, sugerencias o para unirte a nuestro movimiento.
            Te responderemos en menos de 24 horas.
          </p>
        </div>

        <div className="contacto-grid">
          {/* COLUMNA IZQUIERDA - FORMULARIO */}
          <div className="contacto-form-card">
            <div className="contacto-form-header">
              <div className="contacto-form-icon">
                <Icon icon="fluent:mail-edit-24-filled" width="28" height="28" />
              </div>
              <div>
                <h3>Envía tu Mensaje</h3>
                <p>Completa el formulario y te contactaremos</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="contacto-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">NOMBRE *</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">EMAIL *</label>
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
              </div>

              <div className="form-group">
                <label className="form-label">TELÉFONO</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="+591 XXX XXX XXX"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">MENSAJE *</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="form-input form-textarea"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              
              <button type="submit" className="btn-enviar">
                <span>Enviar Mensaje</span>
                <Icon icon="fluent:send-24-filled" width="18" height="18" />
              </button>
            </form>
          </div>

          {/* COLUMNA DERECHA - INFORMACIÓN */}
          <div className="contacto-sidebar">
            
            {/* TARJETA DE CONTACTO DIRECTO */}
            <div className="contacto-card">
              <div className="contacto-card-header">
                <div className="contacto-card-icon">
                  <Icon icon="fluent:contact-card-24-filled" width="24" height="24" />
                </div>
                <h4>Contacto Directo</h4>
              </div>
              
              <div className="contacto-card-content">
                {contactosDirectos.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="contacto-item"
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <div className="contacto-item-icon" style={{ backgroundColor: `${item.color}10` }}>
                      <Icon icon={item.icon} width="20" height="20" style={{ color: item.color }} />
                    </div>
                    <div className="contacto-item-info">
                      <span className="contacto-item-title">{item.title}</span>
                      <span className="contacto-item-text">{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* TARJETA COMBINADA - HORARIO Y REDES */}
            <div className="info-doble-card">
              {/* HORARIO */}
              <div className="horario-section">
                <div className="section-mini-header">
                  <div className="section-mini-icon">
                    <Icon icon="fluent:clock-24-filled" width="20" height="20" />
                  </div>
                  <h5>Horario de Atención</h5>
                </div>
                
                <div className="horario-list">
                  <div className="horario-item">
                    <span className="horario-dias">Lun - Vie</span>
                    <span className="horario-horas">8:00 - 18:00</span>
                  </div>
                  <div className="horario-item">
                    <span className="horario-dias">Sábados</span>
                    <span className="horario-horas">9:00 - 13:00</span>
                  </div>
                </div>
              </div>

              {/* REDES SOCIALES */}
              <div className="redes-section">
                <div className="section-mini-header">
                  <div className="section-mini-icon">
                    <Icon icon="fluent:people-community-24-filled" width="20" height="20" />
                  </div>
                  <h5>Síguenos</h5>
                </div>
                
                <div className="redes-grid">
                  {redesSociales.map((red, index) => (
                    <a
                      key={index}
                      href={red.url}
                      className="red-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ '--social-color': red.color }}
                      title={red.name}
                    >
                      <Icon icon={red.icon} width="24" height="24" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* NOTA INFORMATIVA */}
            <div className="contacto-note">
              <Icon icon="fluent:info-24-filled" width="18" height="18" />
              <span>Respondemos todos los mensajes en menos de 24 horas hábiles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;