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
        title: noticia.title,
        text: noticia.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  return (
    <div className="news-modal-overlay" onClick={onClose}>
      <div className="news-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header del modal */}
        <div className="news-modal-header">
          <div className="news-modal-header-content">
            <div className="news-category-badge">
              <Icon icon="mdi:newspaper-variant" width="16" height="16" />
              {noticia.categoria || 'Noticia'}
            </div>
            <h2 className="news-modal-title">{noticia.title}</h2>
            <div className="news-meta">
              <span>
                <Icon icon="mdi:calendar" width="16" height="16" />
                {noticia.fecha}
              </span>
              {noticia.autor && (
                <span>
                  <Icon icon="mdi:account" width="16" height="16" />
                  {noticia.autor}
                </span>
              )}
              {noticia.lugar && (
                <span>
                  <Icon icon="mdi:map-marker" width="16" height="16" />
                  {noticia.lugar}
                </span>
              )}
            </div>
          </div>
          <button className="news-modal-close" onClick={onClose} title="Cerrar">
            <Icon icon="mdi:close" width="24" height="24" />
          </button>
        </div>

        {/* Contenido del modal */}
        <div className="news-modal-content">
          {/* Imagen destacada */}
          {noticia.imagenPrincipal && (
            <div className="news-featured-image">
              <img 
                src={noticia.imagenPrincipal} 
                alt={noticia.imagenDescripcion || noticia.title}
                className="featured-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              {noticia.imagenDescripcion && (
                <p className="image-caption">{noticia.imagenDescripcion}</p>
              )}
            </div>
          )}

          <div className="news-content">
            {/* Resumen */}
            <div className="news-excerpt">
              <h3>Resumen</h3>
              <p>{noticia.excerpt}</p>
            </div>

            {/* Contenido completo */}
            {noticia.contenidoCompleto && (
              <div className="news-full-content">
                <h3>Noticia Completa</h3>
                <div dangerouslySetInnerHTML={{ __html: noticia.contenidoCompleto }} />
              </div>
            )}

            {/* Ubicación */}
            {noticia.lugar && (
              <div className="news-location">
                <Icon icon="mdi:map-marker" width="20" height="20" />
                <span>{noticia.lugar}</span>
              </div>
            )}

            {/* Galería (si existe) */}
            {noticia.galeria && noticia.galeria.length > 0 && (
              <div className="news-gallery">
                <h3>Galería de Imágenes</h3>
                <div className="gallery-grid">
                  {noticia.galeria.map((imagen, index) => (
                    <div key={index} className="gallery-item">
                      <img 
                        src={imagen.url} 
                        alt={imagen.alt || `Imagen ${index + 1}`}
                        className="gallery-image"
                        onError={(e) => {
                          e.target.parentElement.innerHTML = `
                            <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #999;">
                              <span>📷</span>
                            </div>
                          `;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Botones de acción */}
          <div className="news-modal-actions">
            <button className="btn-download-news" onClick={handleDownload}>
              <Icon icon="mdi:file-pdf-box" width="18" height="18" />
              <span>Descargar PDF</span>
            </button>
            
            <button className="btn-share-news" onClick={handleShare}>
              <Icon icon="mdi:share-variant" width="18" height="18" />
              <span>Compartir</span>
            </button>
            
            <button className="btn-close-news-modal" onClick={onClose}>
              <Icon icon="mdi:close-circle" width="18" height="18" />
              <span>Cerrar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;