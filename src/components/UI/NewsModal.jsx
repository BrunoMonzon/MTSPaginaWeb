import React from 'react';
import { Icon } from '@iconify/react';

const NewsModal = ({ noticia, isOpen, onClose }) => {
  if (!isOpen || !noticia) return null;

  const handleDownload = () => {
    if (noticia.pdfUrl) {
      window.open(noticia.pdfUrl, '_blank');
    } else {
      alert('PDF disponible próximamente');
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: noticia.titulo,
        text: noticia.excerpt,
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
                <Icon icon={noticia.imagenIcon || 'mdi:newspaper-variant'} width="32" height="32" />
              </div>
              <div>
                <div className="modal-category">
                  <Icon icon="mdi:newspaper-variant" width="16" height="16" />
                  {noticia.categoria || 'Noticia'}
                </div>
                <h2 className="modal-title">{noticia.titulo || noticia.title}</h2>
                <div className="modal-meta">
                  <div className="meta-item">
                    <Icon icon="mdi:calendar" width="16" height="16" />
                    <span>{noticia.fecha}</span>
                  </div>
                  {noticia.autor && (
                    <div className="meta-item">
                      <Icon icon="mdi:account" width="16" height="16" />
                      <span>{noticia.autor}</span>
                    </div>
                  )}
                  {noticia.lugar && (
                    <div className="meta-item">
                      <Icon icon="mdi:map-marker" width="16" height="16" />
                      <span>{noticia.lugar}</span>
                    </div>
                  )}
                </div>
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
            {/* Columna izquierda - Contenido */}
            <div className="modal-text-column" style={{ gridColumn: 'span 2' }}>
              {/* Resumen */}
              <div className="content-section">
                <h3 className="section-title">
                  <Icon icon="mdi:text-box-outline" width="18" height="18" />
                  Resumen
                </h3>
                <div className="section-content">
                  <p className="section-text">{noticia.excerpt}</p>
                </div>
              </div>

              {/* Contenido completo */}
              <div className="content-section">
                <h3 className="section-title">
                  <Icon icon="mdi:file-document-outline" width="18" height="18" />
                  Noticia Completa
                </h3>
                <div className="section-content">
                  {noticia.contenidoCompleto ? (
                    <div className="section-text">
                      <p>{noticia.contenidoCompleto}</p>
                    </div>
                  ) : (
                    <p className="section-text">Contenido detallado de la noticia disponible próximamente.</p>
                  )}
                </div>
              </div>

              {/* Detalles (si existen) */}
              {noticia.detalles && noticia.detalles.length > 0 && (
                <div className="content-section">
                  <h3 className="section-title">
                    <Icon icon="mdi:information" width="18" height="18" />
                    Detalles
                  </h3>
                  <div className="section-content">
                    <ul className="actions-list">
                      {noticia.detalles.map((detalle, index) => (
                        <li key={index} className="action-item">
                          <Icon icon="mdi:checkbox-marked-circle-outline" width="16" height="16" />
                          <span>{detalle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Columna derecha - Imagen destacada */}
            <div className="modal-image-column">
              <div className="content-section">
                <h3 className="section-title">
                  <Icon icon="mdi:image" width="18" height="18" />
                  Imagen Destacada
                </h3>
                <div className="modal-image-container">
                  <div className="image-placeholder" style={{
                    width: '100%',
                    height: '250px',
                    background: noticia.imagenBg || 'linear-gradient(135deg, #006C36 0%, #CD9869 100%)',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <Icon icon={noticia.imagenIcon || 'mdi:newspaper-variant'} width="48" height="48" />
                    <p style={{ marginTop: '10px', fontWeight: '600' }}>{noticia.categoria || 'Noticia'}</p>
                  </div>
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

export default NewsModal;