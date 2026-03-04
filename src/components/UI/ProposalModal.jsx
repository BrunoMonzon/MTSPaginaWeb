import React from 'react';
import { Icon } from '@iconify/react';

// Ruta al PDF único con todas las propuestas (archivo en /public)
const PDF_PROPUESTAS = '/pdfs/propuestas/PROPUESTAS ING WILMAR 2026-comprimido.pdf';

const ProposalModal = ({ propuesta, isOpen, onClose }) => {
  if (!isOpen || !propuesta) return null;

  // Descarga directa del PDF general de propuestas
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PDF_PROPUESTAS;
    link.download = 'Propuestas-Ing-Wilmar-Aguirre-2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Propuesta: ${propuesta.title}`,
        text: propuesta.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  return (
    <div className="pm-overlay" onClick={onClose}>
      <div className="pm-modal" onClick={(e) => e.stopPropagation()}>

        {/* ── Header ── */}
        <div className="pm-header">
          <div className="pm-header-left">
            <div className="pm-icon">
              <Icon icon={propuesta.icon} width="28" height="28" />
            </div>
            <div className="pm-header-text">
              <h2 className="pm-title">{propuesta.title}</h2>
              <p className="pm-subtitle">{propuesta.description}</p>
            </div>
          </div>
          <button className="pm-close" onClick={onClose} aria-label="Cerrar">
            <Icon icon="fluent:dismiss-24-regular" width="22" height="22" />
          </button>
        </div>

        {/* ── Body ── */}
        <div className="pm-body">
          <div className="pm-grid">

            {/* Columna izquierda */}
            <div className="pm-col-text">

              {propuesta.contenidoCompleto && (
                <div className="pm-section">
                  <h3 className="pm-section-title">
                    <Icon icon="fluent:data-bar-vertical-24-regular" width="18" height="18" />
                    Análisis de situación
                  </h3>
                  <p>{propuesta.contenidoCompleto}</p>
                </div>
              )}

              {propuesta.componente && (
                <div className="pm-section">
                  <h3 className="pm-section-title">
                    <Icon icon="fluent:puzzle-piece-24-regular" width="18" height="18" />
                    Componente principal
                  </h3>
                  <p>{propuesta.componente}</p>
                </div>
              )}

              {(() => {
                const items = propuesta.acciones?.length
                  ? propuesta.acciones
                  : propuesta.detalles?.length
                  ? propuesta.detalles
                  : null;

                return items ? (
                  <div className="pm-section">
                    <h3 className="pm-section-title">
                      <Icon icon="fluent:checkmark-circle-24-regular" width="18" height="18" />
                      Acciones propuestas
                    </h3>
                    <ul className="pm-actions-list">
                      {items.map((accion, i) => (
                        <li key={i}>{accion}</li>
                      ))}
                    </ul>
                  </div>
                ) : null;
              })()}
            </div>

            {/* Columna derecha */}
            <div className="pm-col-side">
              <div className="pm-gallery-container">
                <img src={propuesta.imagenModal} alt={`Imagen detallada de ${propuesta.title}`} className="pm-modal-img" loading="lazy" />
              </div>

              <div className="pm-location-note">
                <Icon icon="fluent:location-24-regular" width="18" height="18" />
                <span>Aplicable en todo el departamento de Chuquisaca</span>
              </div>

              {/* Download CTA en sidebar (visible en desktop) */}
              <div className="pm-pdf-cta">
                <Icon icon="fluent:document-pdf-24-filled" width="32" height="32" />
                <p>Descarga el plan completo de propuestas de Wilmar Aguirre 2026–2030</p>
                <button className="pm-btn-download" onClick={handleDownload}>
                  <Icon icon="fluent:arrow-download-24-filled" width="17" height="17" />
                  Descargar PDF completo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="pm-footer">
          <button className="pm-btn-download pm-btn-download--footer" onClick={handleDownload}>
            <Icon icon="fluent:arrow-download-24-filled" width="17" height="17" />
            Descargar PDF completo
          </button>
          <button className="pm-btn-share" onClick={handleShare}>
            <Icon icon="fluent:share-24-regular" width="17" height="17" />
            Compartir
          </button>
          <button className="pm-btn-close" onClick={onClose}>
            <Icon icon="fluent:dismiss-24-regular" width="17" height="17" />
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProposalModal;