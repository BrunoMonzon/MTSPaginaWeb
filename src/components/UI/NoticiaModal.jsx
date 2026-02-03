import React from 'react';
import { Icon } from '@iconify/react';

const NoticiaModal = ({ noticia, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal active" onClick={(e) => e.target.className === 'modal active' && onClose()}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px' }}>
        <div className="modal-header">
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: noticia.imagenBg || 'linear-gradient(135deg, var(--verde-mts) 0%, var(--dorado-mts) 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              <Icon icon={noticia.imagenIcon || 'fluent:news-20-filled'} width="32" height="32" />
            </div>
            <div>
              <h2 className="modal-title">{noticia.titulo}</h2>
              <p className="modal-subtitle">
                <Icon icon="fluent:calendar-20-filled" width="16" height="16" />
                {noticia.fecha}
              </p>
            </div>
          </div>
        </div>
        <div className="modal-body">
          {noticia.imagenGrande && (
            <div style={{
              width: '100%',
              height: '300px',
              background: noticia.imagenBg || 'linear-gradient(135deg, var(--verde-mts) 0%, var(--dorado-mts) 100%)',
              borderRadius: '8px',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '3rem'
            }}>
              {noticia.imagenGrande}
            </div>
          )}
          
          <div className="modal-description">
            {noticia.contenidoCompleto || noticia.excerpt}
          </div>
          
          {noticia.detalles && (
            <div className="modal-details">
              <h4>Detalles de la Noticia</h4>
              <ul className="modal-details-list">
                {noticia.detalles.map((detalle, index) => (
                  <li key={index}>{detalle}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div style={{
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--gris-200)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--gris-100)',
                borderRadius: '20px',
                fontSize: '0.875rem',
                color: 'var(--gris-700)'
              }}>
                <Icon icon="fluent:tag-20-filled" width="14" height="14" style={{ marginRight: '0.5rem' }} />
                Campaña 2026
              </span>
              <span style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--gris-100)',
                borderRadius: '20px',
                fontSize: '0.875rem',
                color: 'var(--gris-700)'
              }}>
                <Icon icon="fluent:location-20-filled" width="14" height="14" style={{ marginRight: '0.5rem' }} />
                Chuquisaca
              </span>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--verde-mts)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Icon icon="fluent:share-20-filled" width="16" height="16" />
                Compartir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticiaModal;
