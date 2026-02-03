import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      icon: 'fluent:target-arrow-16-filled',
      title: 'Liderazgo Comprobado',
      text: 'Con más de 15 años al servicio de Chuquisaca, defendiendo los intereses de nuestra región'
    },
    {
      icon: 'fluent:people-community-16-filled',
      title: 'Compromiso Social',
      text: 'Trabajando directamente con las comunidades para un desarrollo inclusivo y sostenible'
    },
    {
      icon: 'fluent:shield-checkmark-16-filled',
      title: 'Experiencia Cívica',
      text: 'Ex Presidente de Codeinca, luchando por los derechos de todos los chuquisaqueños'
    },
    {
      icon: 'fluent:star-20-filled',
      title: '12 Razones para ser Gobernador',
      text: 'Experiencia, compromiso y resultados para transformar Chuquisaca'
    }
  ];

  const moveCarousel = (direction) => {
    setCurrentSlide(prev => {
      let next = prev + direction;
      if (next < 0) next = slides.length - 1;
      if (next >= slides.length) next = 0;
      return next;
    });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveCarousel(1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge">Elecciones Subnacionales 2026</span>
          <h1 className="hero-title">Ing. WILMAR AGUIRRE</h1>
          <p className="hero-subtitle">
            <strong>GOBERNADOR DE CHUQUISACA</strong><br />
            CANDIDATO DE LA UNIDAD<br />
            <span style={{ color: 'var(--dorado-mts)', fontWeight: 'bold', fontSize: '1.2rem' }}>
              #12 RAZONES PARA SER GOBERNADOR DE CHUQUISACA
            </span><br />
            <em>experiencia, compromiso y resultados</em>
          </p>
          <div className="hero-buttons">
            <a href="#propuestas" className="btn btn-primary">
              <Icon icon="fluent:document-bullet-list-20-filled" width="20" height="20" style={{ marginRight: '0.5rem' }} />
              Conoce las 12 propuestas
            </a>
            <a href="#trayectoria" className="btn btn-secondary">
              <Icon icon="fluent:history-20-filled" width="20" height="20" style={{ marginRight: '0.5rem' }} />
              Nuestra trayectoria
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="carousel-container">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="carousel-slide">
                  <div className="carousel-slide-content">
                    <div className="carousel-slide-icon">
                      <Icon icon={slide.icon} width="80" height="80" />
                    </div>
                    <h3 className="carousel-slide-title">{slide.title}</h3>
                    <p className="carousel-slide-text">{slide.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-arrow prev" onClick={() => moveCarousel(-1)} aria-label="Anterior">
              ‹
            </button>
            <button className="carousel-arrow next" onClick={() => moveCarousel(1)} aria-label="Siguiente">
              ›
            </button>
            <div className="carousel-controls">
              {slides.map((_, index) => (
                <span 
                  key={index}
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
