import React from 'react';

const Modal = ({ isOpen, onClose, title, subtitle, description, details, stats }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000
    }} onClick={onClose}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        maxWidth: '800px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '2rem'
      }} onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
