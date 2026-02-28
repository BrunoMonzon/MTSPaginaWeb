import React from 'react';
import { Icon } from '@iconify/react';

const NoticiaModal = ({ noticia, isOpen, onClose }) => {
  if (!isOpen || !noticia) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-noticia-content" onClick={(e) => e.stopPropagation()}>
        {/* Header del modal */}
        <div className="modal-noticia-header">
          <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar">
            <Icon icon="mdi:close" width="24" height="24" />
          </button>
        </div>

        {/* Imagen principal */}
        {noticia.imagenPrincipal && (
          <div className="modal-noticia-image">
            <img 
              src={noticia.imagenPrincipal} 
              alt={noticia.imagenDescripcion || noticia.title}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.style.background = 'linear-gradient(135deg, #006C36 0%, #004422 100%)';
                e.target.parentElement.innerHTML = `
                  <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white;">
                    <div style="text-align: center;">
                      <div style="font-size: 64px; margin-bottom: 10px;">📰</div>
                      <div style="font-weight: bold; font-size: 18px;">${noticia.categoria}</div>
                    </div>
                  </div>
                `;
              }}
            />
            <div className="modal-image-overlay">
              <div className="modal-category-badge" style={{ backgroundColor: noticia.colorCategoria }}>
                <Icon icon="mdi:tag" width="16" height="16" />
                <span>{noticia.categoria}</span>
              </div>
            </div>
          </div>
        )}

        {/* Contenido del modal */}
        <div className="modal-noticia-body">
          {/* Meta información */}
          <div className="modal-meta-header">
            <div className="modal-meta-items">
              <div className="modal-meta-item">
                <Icon icon="mdi:calendar" width="18" height="18" />
                <span>{noticia.fecha}</span>
              </div>
              <div className="modal-meta-item">
                <Icon icon="mdi:account-edit" width="18" height="18" />
                <span>{noticia.autor}</span>
              </div>
              <div className="modal-meta-item">
                <Icon icon="mdi:map-marker" width="18" height="18" />
                <span>{noticia.lugar}</span>
              </div>
            </div>
            {noticia.fuente && (
              <div className="modal-fuente">
                <Icon icon="mdi:newspaper" width="16" height="16" />
                <span>Fuente: {noticia.fuente}</span>
              </div>
            )}
          </div>

          {/* Título */}
          <h1 className="modal-noticia-title">{noticia.title}</h1>

          {/* Extracto destacado */}
          <div className="modal-noticia-excerpt">
            <Icon icon="mdi:format-quote-open" width="24" height="24" />
            <p>{noticia.excerpt}</p>
          </div>

          {/* Contenido completo */}
          <div 
            className="modal-noticia-content"
            dangerouslySetInnerHTML={{ __html: noticia.contenidoCompleto }}
          />

          {/* Footer con acciones */}
          <div className="modal-noticia-footer">
            <div className="modal-tags">
              <div className="modal-tag">
                <Icon icon="mdi:vote" width="16" height="16" />
                <span>Campaña 2026</span>
              </div>
              <div className="modal-tag">
                <Icon icon="mdi:account-group" width="16" height="16" />
                <span>MTS</span>
              </div>
            </div>
            
            <div className="modal-actions">
              <button className="modal-share-btn" onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: noticia.title,
                    text: noticia.excerpt,
                    url: window.location.href
                  });
                } else {
                  alert('Función de compartir no disponible en este navegador');
                }
              }}>
                <Icon icon="mdi:share-variant" width="20" height="20" />
                <span>Compartir</span>
              </button>
            </div>
          </div>

          {/* Créditos de fuente */}
          {noticia.fuente === 'Correo del Sur' && (
            <div className="modal-creditos">
              <Icon icon="mdi:information-outline" width="18" height="18" />
              <p>Noticia publicada originalmente en <strong>Correo del Sur</strong></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoticiaModal;