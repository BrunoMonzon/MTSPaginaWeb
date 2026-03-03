import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const INTEREST_OPTIONS = [
  { value: 'voluntario',   label: 'Quiero ser voluntario' },
  { value: 'difusion',     label: 'Ayudar en redes sociales' },
  { value: 'eventos',      label: 'Participar en eventos' },
  { value: 'propuestas',   label: 'Contribuir con ideas' },
  { value: 'otro',         label: 'Otra forma de apoyo' },
];

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    interes: 'voluntario',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '', interes: 'voluntario' });
    }, 4000);
  };

  const whatsappNumber  = "59174536806";
  const whatsappMessage = "Hola, quiero unirme al Movimiento Tercer Sistema y apoyar la candidatura de Wilmar Aguirre";

  return (
    <section className="ct-section" id="contacto">
      {/* Header */}
      <div className="ct-header">
        <span className="ct-eyebrow">Sé parte del cambio</span>
        <h2 className="ct-title">Únete al Movimiento</h2>
        <p className="ct-subtitle">
          Juntos construiremos el Chuquisaca que todos merecemos.
          Tu apoyo es fundamental para el cambio que nuestra región necesita.
        </p>
      </div>

      <div className="ct-grid">

        {/* ── Form ── */}
        <div className="ct-form-wrap">
          {submitted ? (
            <div className="ct-success">
              <div className="ct-success-icon">
                <Icon icon="fluent:checkmark-24-filled" width="32" height="32" />
              </div>
              <h3>¡Gracias por unirte!</h3>
              <p>Pronto nos pondremos en contacto contigo.</p>
            </div>
          ) : (
            <form className="ct-form" onSubmit={handleSubmit} noValidate>
              <div className="ct-form-group">
                <label className="ct-label" htmlFor="nombre">Nombre completo</label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="ct-input"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="ct-form-row">
                <div className="ct-form-group">
                  <label className="ct-label" htmlFor="email">Correo electrónico</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="ct-input"
                    placeholder="tu@correo.com"
                  />
                </div>
                <div className="ct-form-group">
                  <label className="ct-label" htmlFor="telefono">Teléfono / WhatsApp</label>
                  <input
                    id="telefono"
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="ct-input"
                    placeholder="+591 XXX XXX XXX"
                  />
                </div>
              </div>

              <div className="ct-form-group">
                <label className="ct-label" htmlFor="interes">¿Cómo quieres apoyar?</label>
                <select
                  id="interes"
                  name="interes"
                  value={formData.interes}
                  onChange={handleChange}
                  className="ct-input ct-select"
                >
                  {INTEREST_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              <div className="ct-form-group">
                <label className="ct-label" htmlFor="mensaje">
                  Mensaje <span className="ct-optional">(opcional)</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  className="ct-input ct-textarea"
                  placeholder="Cuéntanos cómo te gustaría colaborar..."
                />
              </div>

              <button type="submit" className="ct-btn-submit">
                <Icon icon="fluent:person-add-24-filled" width="20" height="20" />
                Unirme al Movimiento
              </button>
            </form>
          )}
        </div>

        {/* ── Sidebar ── */}
        <div className="ct-sidebar">

          {/* WhatsApp CTA */}
          <a
            className="ct-whatsapp"
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="ic:baseline-whatsapp" width="32" height="32" className="ct-wa-icon" />
            <div className="ct-wa-text">
              <span className="ct-wa-title">Escríbenos por WhatsApp</span>
              <span className="ct-wa-sub">Respuesta inmediata</span>
            </div>
            <Icon icon="fluent:arrow-right-24-regular" width="20" height="20" className="ct-wa-arrow" />
          </a>

          {/* Contact data */}
          <div className="ct-info-card">
            <h4 className="ct-info-title">Contacto directo</h4>
            <div className="ct-info-list">
              <a href="tel:+59174536806" className="ct-info-item">
                <div className="ct-info-icon">
                  <Icon icon="fluent:phone-28-filled" width="18" height="18" />
                </div>
                <div>
                  <span className="ct-info-label">Teléfono</span>
                  <span className="ct-info-value">+591 63757802</span>
                </div>
              </a>
              <a href="mailto:info@wilmaraguirre.bo" className="ct-info-item">
                <div className="ct-info-icon">
                  <Icon icon="fluent:mail-28-filled" width="18" height="18" />
                </div>
                <div>
                  <span className="ct-info-label">Correo</span>
                  <span className="ct-info-value">info@wilmaraguirre.bo</span>
                </div>
              </a>
              <a
                href="https://maps.app.goo.gl/f92j8zzRNhg7HSuD8"
                className="ct-info-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="ct-info-icon">
                  <Icon icon="fluent:location-28-filled" width="18" height="18" />
                </div>
                <div>
                  <span className="ct-info-label">Sede</span>
                  <span className="ct-info-value">Manuel Durán entre Adrián Camacho y Mairana, Sucre</span>
                </div>
              </a>
            </div>
          </div>

          {/* Privacy note */}
          <p className="ct-privacy">
            <Icon icon="fluent:shield-checkmark-24-regular" width="15" height="15" />
            Tus datos serán usados únicamente para comunicarte sobre el Movimiento Tercer Sistema.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacto;