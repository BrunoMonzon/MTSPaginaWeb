import React from 'react';
import { Icon } from '@iconify/react';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      {/* Fondo dividido diagonalmente */}
      <div className="hero-background">
        <div className="hero-bg-green"></div>
        <div className="hero-bg-gold"></div>
      </div>

      <div className="hero-content">
        {/* Columna izquierda - Texto */}
        <div className="hero-text">
          <span className="hero-badge">
            <Icon icon="mdi:vote" width="16" height="16" />
            Elecciones Subnacionales 2026
          </span>
          
          <h1 className="hero-title">
            Ing. WILMAR AGUIRRE
          </h1>
          
          <div className="hero-subtitle-container">
            <p className="hero-subtitle">
              <strong>GOBERNADOR DE CHUQUISACA</strong>
              <span className="hero-subtitle-line">CANDIDATO DE LA UNIDAD</span>
            </p>
          </div>

          <div className="hero-hashtag">
            <Icon icon="mdi:pound" width="24" height="24" />
            <span>12 RAZONES PARA SER GOBERNADOR DE CHUQUISACA</span>
          </div>

          <p className="hero-tagline">
            experiencia, compromiso y resultados
          </p>

          <div className="hero-buttons">
            <a href="#propuestas" className="btn btn-primary">
              <Icon icon="mdi:lightbulb-on-outline" width="20" height="20" />
              <span>Ver las 12 Propuestas</span>
            </a>
            <a href="#trayectoria" className="btn btn-secondary">
              <Icon icon="mdi:account-star" width="20" height="20" />
              <span>Conoce mi Trayectoria</span>
            </a>
          </div>

          {/* Destacados */}
          <div className="hero-highlights">
            <div className="highlight-item">
              <Icon icon="mdi:shield-check" width="28" height="28" />
              <div>
                <strong>Experiencia</strong>
                <span>15+ años sirviendo a Chuquisaca</span>
              </div>
            </div>
            <div className="highlight-item">
              <Icon icon="mdi:hand-heart" width="28" height="28" />
              <div>
                <strong>Compromiso</strong>
                <span>Con todas las regiones</span>
              </div>
            </div>
            <div className="highlight-item">
              <Icon icon="mdi:chart-line" width="28" height="28" />
              <div>
                <strong>Resultados</strong>
                <span>Historial comprobado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha - Imagen del candidato */}
        <div className="hero-image">
          <div className="hero-image-container">
            <img 
              src="/images/WilmarFoto/wilmarfotosinfondo.png" 
              alt="Ing. Wilmar Aguirre - Candidato a Gobernador de Chuquisaca"
              className="hero-candidate-image"
            />
            
            {/* Badge flotante */}
            <div className="hero-badge-float">
              <Icon icon="mdi:check-decagram" width="32" height="32" />
              <div>
                <strong>MTS</strong>
                <span>Movimiento Tercer Sistema</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="hero-decorations">
        <div className="decoration-circle decoration-1"></div>
        <div className="decoration-circle decoration-2"></div>
        <div className="decoration-circle decoration-3"></div>
      </div>
    </section>
  );
};

export default Hero;