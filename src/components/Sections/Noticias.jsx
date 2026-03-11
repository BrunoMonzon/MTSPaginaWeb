import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import NoticiaModal from '../UI/NoticiaModal';

const Noticias = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const noticias = [
    {
      id: 1,
      title: 'Wilmar Aguirre, del MTS, ofrece reclamar compensación',
      excerpt: 'El candidato a gobernador de Chuquisaca del Movimiento Tercer Sistema (MTS) remarca que no responderá a sus detractores y presenta su plan de 12 ejes para el desarrollo departamental.',
      fecha: '6 de Febrero, 2026',
      autor: 'Correo del Sur',
      categoria: 'Política',
      lugar: 'Sucre, Chuquisaca',
      fuente: 'Correo del Sur',
      imagenPrincipal: '/images/noticias/noticia1img.jpg',
      imagenDescripcion: 'Wilmar Aguirre, candidato a gobernador del MTS',
      contenidoCompleto: `
        <p>El candidato a gobernador de Chuquisaca del Movimiento Tercer Sistema (MTS), Wilmar Aguirre, remarca que no responderá a sus detractores. Justifica su pasado en el MAS en la necesidad de gestionar proyectos, recuerda su labor cívica el tiempo que el comité tuvo dos presidentes y plantea hablar de su plan.</p>

        <p>El ingeniero civil tiene una oferta con 12 ejes: desarrollo productivo, medio ambiente y agua, infraestructura vial y carreteras, energía e hidrocarburos, minería, turismo y culturas, seguridad ciudadana, salud, educación, deporte, austeridad y reactivación.</p>

        <p>Reconoce el elevado déficit del Gobierno departamental y recuerda que cuando él trabajó en la institución, durante la gestión de Esteban Urquizu, también se encontró con una situación difícil y falta de planificación; pone de ejemplo que algunos proyectos tenían anotados apenas 1.000 bolivianos.</p>

        <p><em>"Tenemos que hacer gestión, tenemos que planificar una inversión en Chuquisaca en base a créditos a fondo pérdido (...) Para nosotros va a ser bien complicada la gestión, pero no imposible"</em>, señala en Correo del Sur Radio. Apunta que su equipo ya está estudiando los mecanismos y los canales, entre ellos, la cooperación internacional.</p>

        <p>Como sus rivales, propone reestructurar la Gobernación al considerar que tiene un aparato administrativo sobredimensionado; ofrece achicarla hasta un 30%. Respecto a los salarios, promete establecer un tope de 12.000 bolivianos, en base al cual tendría que generarse otra escala salarial.</p>

        <p>Aguirre cuenta para esta candidatura con el apoyo de la dirigencia de la Federación Única de Trabajadores de Pueblos Originarios (Futpoch), que en varias oportunidades, desde que comenzó la crisis durante el gobierno de Luis Arce, exigió, sin éxito, austeridad.</p>

        <h3>PROYECTOS PARALIZADOS</h3>
        <p>El candidato del MTS señala que los proyectos que incluye en su plan recuperan la agenda cívica. Reclama por proyectos paralizados: la cárcel de Duraznillos, la ciudadela judicial y la gran circunvalación en Sucre, y en Chuquisaca, por la Ruta Diagonal Jaime Mendoza, la Transversal Juana Azurduy, la carretera a Toro Toro, Héroes del Chaco, entre otras.</p>

        <p>Asegura que como dirigente cívico gestionó planes y leyes para captar recursos del Gobierno nacional o liberar de obligaciones al departamento y, así, ahorrar dinero.</p>

        <p><em>"El MAS, con el poder que ha tenido en su momento, nosotros pensamos que nuestras autoridades iban a responder al departamento"</em>, manifiesta.</p>

        <p>El excívico se inscribió al MAS en 2008 y renunció a él hace más de una década.</p>

        <p>Finalmente, en lo que toca al desarrollo productivo, recuerda que hay infraestructura, pero abandonada, por lo que propone una administración mixta con productores y privados.</p>

        <h3>COMPENSACIÓN HIDROCARBURÍFERA</h3>
        <p>El candidato a gobernador del MTS plantea exigir una compensación por la explotación de recursos hidrocarburíferos de Chuquisaca por más de 40 años.</p>

        <p>Indica que el departamento no recibió regalías de Vuelta Grande y Piraimiri por su uso en el consumo interno.</p>

        <p>Además de esta compensación, propone exigir recursos adicionales para Sucre por su condición de capital, recuperando una propuesta planteada por diferentes actores en años pasados.</p>
      `,
      colorCategoria: '#006C36'
    },
    {
      id: 2,
      title: 'MTS presenta plan integral para el desarrollo de Chuquisaca',
      excerpt: 'Wilmar Aguirre detalla las 12 propuestas que transformarán el departamento en los próximos años, con énfasis en desarrollo productivo e infraestructura.',
      fecha: '28 de Enero, 2026',
      autor: 'Equipo de Prensa MTS',
      categoria: 'Propuestas',
      lugar: 'Sucre, Chuquisaca',
      fuente: 'MTS',
      imagenPrincipal: '/images/noticias/noticia2.png',
      imagenDescripcion: 'Presentación del plan de gobierno',
      contenidoCompleto: `
        <p>En un acto realizado en el Teatro Gran Mariscal, el candidato a gobernador del Movimiento Tercer Sistema (MTS), Wilmar Aguirre, presentó su plan integral de desarrollo para Chuquisaca, que abarca 12 ejes estratégicos diseñados para transformar el departamento.</p>

        <h3>DESARROLLO PRODUCTIVO</h3>
        <p>El plan incluye el fortalecimiento de la producción agropecuaria con tecnología moderna, la formación de asociaciones productivas priorizando a mujeres, y el desarrollo de la cadena productiva regional. Se contempla la construcción de presas y represas, centros de investigación de semillas, y la implementación de riego tecnificado.</p>

        <h3>INFRAESTRUCTURA VIAL</h3>
        <p>Se propone la gestión de inversión en tramos de la red vial fundamental, incluyendo carreteras estratégicas como Sucre-Poroma-Toro Toro, la conclusión de Salto-Monteagudo, la Transversal Juana Azurduy de Padilla, y la Gran Circunvalación de la Ciudad de Sucre.</p>

        <h3>COMPROMISO CON LA REGIÓN</h3>
        <p>"Estas propuestas no son solo promesas, son compromisos concretos basados en nuestra experiencia y conocimiento del departamento", afirmó Aguirre ante los asistentes.</p>
      `,
      colorCategoria: '#CD9869'
    },
    {
      id: 3,
      title: 'Wilmar Aguirre recorre comunidades escuchando necesidades ciudadanas',
      excerpt: 'El candidato visitó diversas comunidades rurales para conocer de primera mano las necesidades y propuestas de los ciudadanos en su recorrido por el departamento.',
      fecha: '15 de Enero, 2026',
      autor: 'Equipo de Prensa MTS',
      categoria: 'Visitas',
      lugar: 'Comunidades rurales de Chuquisaca',
      fuente: 'MTS',
      imagenPrincipal: '/images/noticias/noticias3.jpg',
      imagenDescripcion: 'Reunión con líderes comunales',
      contenidoCompleto: `
        <p>En un recorrido de cinco días por comunidades rurales de Chuquisaca, el candidato a gobernador Wilmar Aguirre mantuvo reuniones con líderes comunales, productores agrícolas y mujeres emprendedoras para escuchar sus necesidades y propuestas.</p>

        <h3>DIÁLOGO DIRECTO</h3>
        <p>"Estoy aquí para escuchar, aprender y comprometerme con soluciones reales. Cada comunidad tiene necesidades específicas y nuestro plan de gobierno debe reflejar esa diversidad", señaló el candidato durante su visita a Poroma.</p>

        <h3>COMPROMISO CON LAS COMUNIDADES</h3>
        <p>Durante el recorrido, Aguirre visitó comunidades en las provincias de Oropeza, Yamparáez, Tomina y Azurduy, donde se reunió con más de 50 organizaciones sociales y productivas.</p>

        <p>Los principales temas abordados fueron: acceso al agua, mejoramiento de caminos vecinales, apoyo a la producción agrícola, educación rural y salud comunitaria.</p>
      `,
      colorCategoria: '#004422'
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

  // Función mejorada para manejar errores de imagen
  const handleImageError = (e, noticia) => {
    e.target.style.display = 'none';
    const container = e.target.parentElement;
    if (container) {
      container.classList.add('image-error');
      
      // Crear placeholder personalizado
      const placeholder = document.createElement('div');
      placeholder.className = 'image-placeholder';
      placeholder.innerHTML = `
        <div class="placeholder-content">
          <Icon icon="mdi:newspaper-variant" width="64" height="64" />
          <span class="placeholder-category">${noticia.categoria}</span>
        </div>
      `;
      
      container.appendChild(placeholder);
    }
  };

  return (
    <>
      <section className="section-noticias" id="noticias">
        <div className="container-noticias">
          <div className="noticias-header">
            <div className="noticias-badge">
              <Icon icon="mdi:newspaper-variant" width="18" height="18" />
              <span>Actualidad</span>
            </div>
            <h2 className="noticias-title">Últimas Noticias</h2>
            <p className="noticias-description">
              Mantente informado sobre nuestras actividades, propuestas y el avance de la campaña 
              para el desarrollo de Chuquisaca
            </p>
          </div>

          <div className="noticias-grid-container">
            <div className="noticias-grid">
              {noticias.map((noticia) => (
                <div key={noticia.id} className="noticia-item" onClick={() => handleNewsClick(noticia)}>
                  <div className="noticia-image-container">
                    <img
                      src={noticia.imagenPrincipal}
                      alt={noticia.imagenDescripcion}
                      className="noticia-image"
                      onError={(e) => handleImageError(e, noticia)}
                      loading="lazy"
                    />
                    <div className="noticia-category" style={{ backgroundColor: noticia.colorCategoria }}>
                      <Icon icon="mdi:tag" width="14" height="14" />
                      <span>{noticia.categoria}</span>
                    </div>
                    {noticia.fuente === 'Correo del Sur' && (
                      <div className="noticia-fuente-badge">
                        <Icon icon="mdi:newspaper" width="12" height="12" />
                        <span>Correo del Sur</span>
                      </div>
                    )}
                  </div>

                  <div className="noticia-content-container">
                    <div className="noticia-meta-info">
                      <div className="meta-item">
                        <Icon icon="mdi:calendar-outline" width="16" height="16" />
                        <span className="meta-text">{noticia.fecha}</span>
                      </div>
                      <div className="meta-item">
                        <Icon icon="mdi:account-edit-outline" width="16" height="16" />
                        <span className="meta-text">{noticia.autor}</span>
                      </div>
                    </div>

                    <h3 className="noticia-item-title">{noticia.title}</h3>
                    <p className="noticia-excerpt-text">{noticia.excerpt}</p>

                    <div className="noticia-footer-info">
                      <div className="noticia-location">
                        <Icon icon="mdi:map-marker-outline" width="16" height="16" />
                        <span>{noticia.lugar}</span>
                      </div>
                    </div>
                  </div>

                  <div className="noticia-actions-container">
                    <button
                      className="btn-noticia-ver"
                      onClick={() => handleNewsClick(noticia)}
                    >
                      <Icon icon="mdi:book-open-page-variant-outline" width="18" height="18" />
                      <span>Leer noticia completa</span>
                      <Icon icon="mdi:arrow-right" width="18" height="18" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="noticias-cta">
            <div className="cta-content">
              <Icon icon="mdi:bullhorn" width="40" height="40" />
              <div className="cta-text">
                <h3>Mantente Informado</h3>
                <p>Síguenos en nuestras redes sociales para no perderte ninguna actualización</p>
              </div>
              <div className="cta-socials">
                <a href="https://www.facebook.com/profile.php?id=61581741286125" className="social-btn facebook" target="_blank" rel="noopener noreferrer">
                  <Icon icon="mdi:facebook" width="20" height="20" />
                </a>
                <a href="https://www.tiktok.com/@wilmar.aguirre.of?_r=1&_t=ZS-94RxvMEs9i5" className="social-btn tiktok" target="_blank" rel="noopener noreferrer">
                  <Icon icon="mdi:music-note" width="20" height="20" />
                </a>
                <a href="https://wa.me/59177249319" className="social-btn whatsapp" target="_blank" rel="noopener noreferrer">
                  <Icon icon="mdi:whatsapp" width="20" height="20" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NoticiaModal
        noticia={selectedNews}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Noticias;