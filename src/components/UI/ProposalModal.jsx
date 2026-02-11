import React from 'react';
import { Icon } from '@iconify/react';

const ProposalModal = ({ propuesta, isOpen, onClose }) => {
  if (!isOpen || !propuesta) return null;

  const handleDownload = () => {
    if (propuesta.pdfUrl) {
      window.open(propuesta.pdfUrl, '_blank');
    } else {
      alert('PDF disponible próximamente');
    }
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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header del modal */}
        <div className="modal-header">
          <div className="modal-header-content">
            <div className="modal-icon-title">
              <div className="modal-icon">
                <Icon icon={propuesta.icon} width="32" height="32" />
              </div>
              <div>
                <div className="modal-category">
                  <Icon icon="mdi:lightbulb-on" width="16" height="16" />
                  Propuesta Estratégica
                </div>
                <h2 className="modal-title">{propuesta.title}</h2>
                <p className="modal-subtitle">{propuesta.description}</p>
              </div>
            </div>
          </div>
          <button className="modal-close" onClick={onClose} title="Cerrar">
            <Icon icon="mdi:close" width="24" height="24" />
          </button>
        </div>

        {/* Contenido del modal */}
        <div className="modal-content">
          <div className="modal-grid">
            {/* Columna izquierda - Contenido textual */}
            <div className="modal-text-column">
              {/* Análisis de situación */}
              <div className="content-section">
                <h3 className="section-title">
                  <Icon icon="mdi:chart-bar" width="18" height="18" />
                  Análisis de Situación
                </h3>
                <div className="section-content">
                  <p className="section-text">{propuesta.contenidoCompleto}</p>
                </div>
              </div>

              {/* Componente principal */}
              <div className="content-section">
                <h3 className="section-title">
                  <Icon icon="mdi:puzzle" width="18" height="18" />
                  Componente Principal
                </h3>
                <div className="section-content">
                  <p className="section-text">{propuesta.componente}</p>
                </div>
              </div>

              {/* Acciones propuestas */}
              <div className="content-section">
                <h3 className="section-title">
                  <Icon icon="mdi:check-circle" width="18" height="18" />
                  Acciones Propuestas
                </h3>
                <div className="section-content">
                  <ul className="actions-list">
                    {propuesta.acciones && propuesta.acciones.length > 0 ? (
                      propuesta.acciones.map((accion, index) => (
                        <li key={index} className="action-item">
                          <Icon icon="mdi:arrow-right" width="16" height="16" />
                          <span>{accion}</span>
                        </li>
                      ))
                    ) : propuesta.detalles && propuesta.detalles.length > 0 ? (
                      propuesta.detalles.map((detalle, index) => (
                        <li key={index} className="action-item">
                          <Icon icon="mdi:arrow-right" width="16" height="16" />
                          <span>{detalle}</span>
                        </li>
                      ))
                    ) : (
                      <p className="section-text">Detalles específicos disponibles próximamente.</p>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Columna derecha - Galería */}
            <div className="modal-image-column">
              <div className="content-section">
                <h3 className="section-title">
                  <Icon icon="mdi:image-multiple" width="18" height="18" />
                  Galería del Proyecto
                </h3>
                
                {/* Imagen principal */}
                <div className="modal-image-container">
                  <div className="main-image">
                    <div className="image-placeholder" style={{
                      width: '100%',
                      height: '250px',
                      background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#888'
                    }}>
                      <Icon icon="mdi:image-outline" width="48" height="48" />
                      <p style={{ marginTop: '10px' }}>Imágenes del proyecto</p>
                      <p style={{ fontSize: '12px', color: '#aaa' }}>Próximamente</p>
                    </div>
                  </div>
                </div>

                {/* Miniaturas (si hay imágenes) */}
                {propuesta.imagenes && propuesta.imagenes.length > 0 && (
                  <div className="thumbnails">
                    {propuesta.imagenes.map((imagen, index) => (
                      <div key={index} className="thumbnail">
                        <div className="image-placeholder" style={{
                          width: '100%',
                          height: '80px',
                          background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#888'
                        }}>
                          <Icon icon="mdi:image-outline" width="20" height="20" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Información adicional */}
              <div className="content-section">
                <div className="location-info">
                  <Icon icon="mdi:map-marker" width="20" height="20" />
                  <span>Aplicable en todo el departamento de Chuquisaca</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="modal-actions">
          <button className="btn-modal btn-download" onClick={handleDownload}>
            <Icon icon="mdi:file-pdf-box" width="18" height="18" />
            <span>Descargar PDF</span>
          </button>
          
          <button className="btn-modal btn-share" onClick={handleShare}>
            <Icon icon="mdi:share-variant" width="18" height="18" />
            <span>Compartir</span>
          </button>
          
          <button className="btn-modal btn-close" onClick={onClose}>
            <Icon icon="mdi:close-circle" width="18" height="18" />
            <span>Cerrar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProposalModal;