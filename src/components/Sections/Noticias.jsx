import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import NewsModal from '../UI/NewsModal';

const Noticias = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const noticias = [
    {
      id: 1,
      title: 'Wilmar Aguirre presenta plan integral de salud para Chuquisaca',
      excerpt: 'El candidato a Gobernador presentó su propuesta para fortalecer el sistema de salud en todas las comunidades del departamento.',
      fecha: '15 de Enero, 2026',
      autor: 'Equipo de Prensa MTS',
      categoria: 'Salud',
      lugar: 'Sucre, Chuquisaca',
      contenidoCompleto: 'En un acto realizado en el salón principal de la Gobernación, el Ing. Wilmar Aguirre presentó su plan integral de salud para Chuquisaca. La propuesta incluye la modernización de 20 centros de salud, capacitación para 500 profesionales médicos y la implementación de telemedicina en comunidades rurales. "Nuestra prioridad es garantizar acceso a salud de calidad para todos los chuquisaqueños, sin importar dónde vivan", afirmó el candidato durante su presentación.',
      imagenPrincipal: '/images/noticias/salud-chuquisaca.jpg',
      imagenDescripcion: 'Wilmar Aguirre presentando el plan de salud para Chuquisaca',
      galeria: [
        { url: '/images/noticias/salud-1.jpg', alt: 'Presentación del plan', descripcion: 'Presentación ante autoridades' },
        { url: '/images/noticias/salud-2.jpg', alt: 'Reunión con médicos', descripcion: 'Reunión con profesionales de salud' },
        { url: '/images/noticias/salud-3.jpg', alt: 'Visita a centro de salud', descripcion: 'Visita a centro de salud rural' }
      ],
      pdfUrl: '/pdfs/noticias/plan-salud.pdf',
      colorCategoria: '#006C36' // Verde MTS para Salud
    },
    {
      id: 2,
      title: 'Recorrido por comunidades rurales escuchando necesidades ciudadanas',
      excerpt: 'El candidato visitó diversas comunidades para conocer de primera mano las necesidades y propuestas de los ciudadanos.',
      fecha: '10 de Enero, 2026',
      autor: 'Equipo de Prensa MTS',
      categoria: 'Visitas',
      lugar: 'Comunidades rurales de Chuquisaca',
      contenidoCompleto: 'En un recorrido de tres días por comunidades rurales, el Ing. Wilmar Aguirre mantuvo reuniones con líderes comunales, productores agrícolas y mujeres emprendedoras. "Estoy aquí para escuchar, aprender y comprometerme con soluciones reales. Cada comunidad tiene necesidades específicas y nuestro plan de gobierno debe reflejar esa diversidad", señaló el candidato durante su visita a Poroma.',
      imagenPrincipal: '/images/noticias/comunidades-rurales.jpg',
      imagenDescripcion: 'Reunión con líderes comunales en Poroma',
      galeria: [
        { url: '/images/noticias/comunidad-1.jpg', alt: 'Reunión comunal' },
        { url: '/images/noticias/comunidad-2.jpg', alt: 'Diálogo con productores' },
        { url: '/images/noticias/comunidad-3.jpg', alt: 'Visita a escuela rural' }
      ],
      pdfUrl: '/pdfs/noticias/visita-comunidades.pdf',
      colorCategoria: '#CD9869' // Dorado MTS para Visitas
    },
    {
      id: 3,
      title: 'Propuesta de infraestructura vial para conectar todo Chuquisaca',
      excerpt: 'Presentación del plan de carreteras que conectará todas las regiones productivas del departamento.',
      fecha: '5 de Enero, 2026',
      autor: 'Equipo Técnico MTS',
      categoria: 'Infraestructura',
      lugar: 'Sucre, Chuquisaca',
      contenidoCompleto: 'El plan incluye la construcción de 500 km de caminos nuevos, el mejoramiento de 1,000 km existentes y la construcción de puentes vehiculares en zonas críticas. "La conectividad vial es fundamental para el desarrollo económico. No puede haber comunidades aisladas en el siglo XXI", afirmó Aguirre durante la presentación técnica del proyecto.',
      imagenPrincipal: '/images/noticias/infraestructura-vial.jpg',
      imagenDescripcion: 'Presentación del plan de infraestructura vial',
      galeria: [
        { url: '/images/noticias/vial-1.jpg', alt: 'Mapa de carreteras' },
        { url: '/images/noticias/vial-2.jpg', alt: 'Reunión técnica' }
      ],
      pdfUrl: '/pdfs/noticias/plan-vial.pdf',
      colorCategoria: '#004422' // Verde oscuro para Infraestructura
    },
    {
      id: 4,
      title: 'Compromiso con la educación tecnológica para jóvenes',
      excerpt: 'Presentación del programa de formación tecnológica para estudiantes de secundaria y universitarios.',
      fecha: '20 de Diciembre, 2025',
      autor: 'Equipo Educación MTS',
      categoria: 'Educación',
      lugar: 'Universidad San Francisco Xavier',
      contenidoCompleto: 'El programa incluye becas para estudios tecnológicos, equipamiento de laboratorios de computación y convenios con empresas del sector. "Queremos que los jóvenes chuquisaqueños estén preparados para los empleos del futuro", señaló el candidato durante el acto de presentación en la USFX.',
      imagenPrincipal: '/images/noticias/educacion-tecnologica.jpg',
      imagenDescripcion: 'Presentación en la Universidad San Francisco Xavier',
      galeria: [
        { url: '/images/noticias/educacion-1.jpg', alt: 'Presentación universitaria' },
        { url: '/images/noticias/educacion-2.jpg', alt: 'Laboratorio de computación' }
      ],
      pdfUrl: '/pdfs/noticias/programa-educacion.pdf',
      colorCategoria: '#B8835A' // Dorado oscuro para Educación
    }
  ];

  const handleNewsClick = (noticia) => {
    setSelectedNews(noticia);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedNews(null), 300);
  };

  // Función para manejar errores de imagen
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const container = e.target.closest('.noticia-image-container');
    if (container) {
      container.style.background = 'linear-gradient(135deg, #006C36 0%, #004422 100%)';
      container.style.display = 'flex';
      container.style.alignItems = 'center';
      container.style.justifyContent = 'center';
      
      const iconContainer = document.createElement('div');
      iconContainer.className = 'image-placeholder';
      iconContainer.innerHTML = `
        <div style="text-align: center; color: white;">
          <span style="font-size: 48px; display: block; margin-bottom: 10px;">📰</span>
          <span style="font-weight: bold;">${noticias.find(n => n.id === parseInt(container.dataset.id))?.categoria || 'Noticia'}</span>
        </div>
      `;
      
      // Limpiar contenido existente y añadir placeholder
      container.innerHTML = '';
      container.appendChild(iconContainer);
    }
  };

  return (
    <>
      <section className="section-noticias" id="noticias">
        <div className="container-noticias">
          <div className="noticias-header">
            <div className="noticias-badge">Actualidad</div>
            <h2 className="noticias-title">Últimas Noticias</h2>
            <p className="noticias-description">
              Mantente informado sobre nuestras actividades, eventos y propuestas para el desarrollo de Chuquisaca
            </p>
          </div>

          <div className="noticias-grid-container">
            <div className="noticias-grid">
              {noticias.map((noticia) => (
                <div key={noticia.id} className="noticia-item">
                  <div className="noticia-image-container" data-id={noticia.id}>
                    <img
                      src="https://marketplace.canva.com/EAGQZFGdAX4/3/0/1600w/canva-presentaci%C3%B3n-seguimiento-de-noticias-en-medios-escritos-newspaper-blanco-y-negro-pLEn7AqlMis.jpg"
                      alt={noticia.title}
                      className="noticia-image"
                      onError={handleImageError}
                    />
                    <div className="noticia-category" style={{ backgroundColor: noticia.colorCategoria }}>
                      <span>{noticia.categoria}</span>
                    </div>
                  </div>

                  <div className="noticia-content-container">
                    <div className="noticia-meta-info">
                      <div className="meta-item">
                        <Icon icon="mdi:calendar" width="14" height="14" />
                        <span className="meta-text">{noticia.fecha}</span>
                      </div>
                      {noticia.autor && (
                        <div className="meta-item">
                          <Icon icon="mdi:account" width="14" height="14" />
                          <span className="meta-text">{noticia.autor}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="noticia-item-title">{noticia.title}</h3>
                    <p className="noticia-excerpt-text">{noticia.excerpt}</p>

                    <div className="noticia-location">
                      <Icon icon="mdi:map-marker" width="14" height="14" />
                      <span>{noticia.lugar}</span>
                    </div>
                  </div>

                  <div className="noticia-actions-container">
                    <button
                      className="btn-noticia-ver"
                      onClick={() => handleNewsClick(noticia)}
                    >
                      <Icon icon="mdi:newspaper-variant-outline" width="16" height="16" />
                      <span>Leer noticia completa</span>
                      <Icon icon="mdi:arrow-right" width="16" height="16" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsModal
        noticia={selectedNews}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Noticias;