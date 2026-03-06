import React from 'react';
import '../../styles/cta.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Construyamos Juntos el Futuro de Chuquisaca</h2>
        <p>
          Tu voz, tu participación y tu voto son fundamentales para el cambio que nuestra región necesita. 
          Únete a nuestro movimiento y sé parte de la transformación.
        </p>
        <div className="hero-buttons">
          <a href="#contacto" className="btn btn-primary">
            Únete al Movimiento
          </a>
          <a href="#donar" className="btn btn-secondary">
            Apoya la Campaña
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
