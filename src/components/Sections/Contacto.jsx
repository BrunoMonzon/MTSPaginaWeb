import React, { useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import emailjs from '@emailjs/browser';

/* ══════════════════════════════════════════════════════
   CONFIGURACIÓN EMAILJS
   Valores tomados de tu cuenta emailjs.com
   ⚠️ Si sigue fallando: verifica el Template ID en
   https://dashboard.emailjs.com/admin/templates
   El ID real aparece en la URL al abrir el template
══════════════════════════════════════════════════════ */
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'service_q8ryv4h';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_wlmadwg';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'yGgkdBVC6E8tiV6e8';

const INTEREST_OPTIONS = [
  { value: 'voluntario', label: 'Quiero ser voluntario'    },
  { value: 'difusion',   label: 'Ayudar en redes sociales' },
  { value: 'eventos',    label: 'Participar en eventos'    },
  { value: 'propuestas', label: 'Contribuir con ideas'     },
  { value: 'otro',       label: 'Otra forma de apoyo'      },
];

const INITIAL = { nombre: '', email: '', telefono: '', mensaje: '', interes: 'voluntario' };

const Contacto = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(INITIAL);
  const [status, setStatus]     = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      /* emailjs.sendForm lee los campos del <form> por su atributo name=""  */
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );

      console.log('EmailJS OK:', result.text);
      setStatus('success');
      setFormData(INITIAL);
      setTimeout(() => setStatus('idle'), 6000);

    } catch (err) {
      console.error('EmailJS error completo:', err);
      console.error('Status:', err?.status);
      console.error('Text:', err?.text);

      /* Mensaje de error específico según el código */
      let msg = 'No se pudo enviar el mensaje. ';

      if (err?.status === 409) {
        msg = '⚠️ Error de configuración: Template ID incorrecto. Revisa EMAILJS_SETUP.md paso 4B.';
      } else if (err?.status === 401) {
        msg = '⚠️ Error de autenticación: Public Key inválida. Revisa tu cuenta de EmailJS.';
      } else if (err?.status === 400) {
        msg = '⚠️ Datos inválidos. Verifica que las variables del template coincidan.';
      } else {
        msg += 'Intenta de nuevo o escríbenos por WhatsApp.';
      }

      setErrorMsg(msg);
      setStatus('error');
    }
  };

  const whatsappNumber  = "59163757802";
  const whatsappMessage = "Hola, quiero unirme al Movimiento Tercer Sistema y apoyar la candidatura de Wilmar Aguirre";

  return (
    <section className="ct-section" id="contacto">

      <div className="ct-header">
        <span className="ct-eyebrow">Sé parte del cambio</span>
        <h2 className="ct-title">Únete al Movimiento</h2>
        <p className="ct-subtitle">
          Juntos construiremos el Chuquisaca que todos merecemos.
          Tu apoyo es fundamental para el cambio que nuestra región necesita.
        </p>
      </div>

      <div className="ct-grid">

        {/* ── Formulario ── */}
        <div className="ct-form-wrap">

          {status === 'success' ? (
            <div className="ct-success">
              <div className="ct-success-icon">
                <Icon icon="fluent:checkmark-24-filled" width="32" height="32" />
              </div>
              <h3>¡Gracias por unirte!</h3>
              <p>Recibimos tu mensaje. Pronto nos pondremos en contacto contigo.</p>
            </div>
          ) : (
            <form ref={formRef} className="ct-form" onSubmit={handleSubmit} noValidate>

              <div className="ct-form-group">
                <label className="ct-label" htmlFor="nombre">Nombre completo</label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
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
                    disabled={status === 'sending'}
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
                    disabled={status === 'sending'}
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
                  disabled={status === 'sending'}
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
                  disabled={status === 'sending'}
                  className="ct-input ct-textarea"
                  placeholder="Cuéntanos cómo te gustaría colaborar..."
                />
              </div>

              {status === 'error' && (
                <div className="ct-error-banner">
                  <Icon icon="fluent:warning-24-regular" width="18" height="18" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button type="submit" className="ct-btn-submit" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <><span className="ct-spinner" /> Enviando...</>
                ) : (
                  <><Icon icon="fluent:person-add-24-filled" width="20" height="20" /> Unirme al Movimiento</>
                )}
              </button>

            </form>
          )}
        </div>

        {/* ── Sidebar ── */}
        <div className="ct-sidebar">
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

          <div className="ct-info-card">
            <h4 className="ct-info-title">Contacto directo</h4>
            <div className="ct-info-list">
              <a href="tel:+59163757802" className="ct-info-item">
                <div className="ct-info-icon">
                  <Icon icon="fluent:phone-28-filled" width="18" height="18" />
                </div>
                <div>
                  <span className="ct-info-label">Teléfono</span>
                  <span className="ct-info-value">+591 6375 7802</span>
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