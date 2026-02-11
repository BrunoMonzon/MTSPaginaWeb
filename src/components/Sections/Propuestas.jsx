import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { propuestas } from '../../data/propuestas';
import ProposalModal from '../UI/ProposalModal';

const Propuestas = () => {
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para obtener contenido completo basado en ID
  const getContenidoCompleto = (id) => {
    const contenidos = {
      'desarrollo-productivo': 'Chuquisaca cuenta con más de 40 presas construidas y 18 plantas de transformación, con diversidad climática para potencialidades productivas y diversidad territorial en agricultura y pecuaria, que no es aprovechado para su crecimiento y sostenibilidad inclusiva.',
      'medio-ambiente': 'Chuquisaca cuenta con infraestructura hídrica (presas construidas), plantas de transformación productiva, así como una alta diversidad de microclimas y ecosistemas, que le otorgan un alto potencial en actividades agrícolas y pecuarias, que no son aprovechadas para su crecimiento y sostenibilidad inclusiva.',
      'infraestructura-vial': 'Chuquisaca diversa en sus regiones productivas se encuentra desvinculada con los centros de producción como el chaco y cintis, falta de mantenimiento y mejoramiento de los caminos de la red departamental vial.',
      'energia': 'Fortalecimiento energético productivo con gas domiciliario para todo Chuquisaca, energía trifásica para todos los municipios y reducción de costo energético para productores.',
      'mineria': 'Fortalecimiento de la actividad minera con integración, valor agregado local y regalías departamentales para el desarrollo económico regional.',
      'turismo': 'Desarrollo del turismo con enfoque regional, integración del Sur y promoción de los 12 destinos turísticos departamentales.',
      'seguridad': 'Fortalecimiento de la seguridad ciudadana mediante gestión integral y coordinación interinstitucional para garantizar paz y tranquilidad.',
      'salud': 'Fortalecimiento de redes de salud con modernización y equipamiento de centros de salud para atención integral a todos los chuquisaqueños.',
      'educacion': 'Educación de calidad, inclusiva y equitativa con acceso efectivo a tecnología y formación técnica vinculada al desarrollo productivo.',
      'deporte': 'Fortalecimiento del deporte como eje de desarrollo humano e inclusión social, identificando y proyectando el talento chuquisaqueño.',
      'austeridad': 'Restructuración del aparato administrativo y ajuste salarial acorde a la realidad económica departamental para optimizar recursos.',
      'reactivacion': 'Reactivación de proyectos estratégicos postergados para el desarrollo integral y sostenible de Chuquisaca.'
    };
    return contenidos[id] || `Plan estratégico para ${id.replace('-', ' ')} en Chuquisaca.`;
  };

  // Función para obtener componente principal
  const getComponente = (id) => {
    const componentes = {
      'desarrollo-productivo': 'Fortalecimiento de la producción agropecuaria con enfoque sostenible y de valor agregado.',
      'medio-ambiente': 'Cuidado del medio ambiente mediante políticas de gestión responsable con los recursos naturales con enfoque de sostenibilidad y armonía con la naturaleza',
      'infraestructura-vial': 'Gestión de inversión en tramos de la red vial fundamental para permitir el acceso a mercados y centros de comercialización de otros departamentos. Construcción, mejoramiento y mantenimiento de los caminos de la red vial departamental.',
      'energia': 'Gestión de compensación por explotación de recursos naturales y fortalecimiento energético productivo para el desarrollo industrial.',
      'mineria': 'Integración minera con valor agregado local, respeto ambiental y beneficios directos para las comunidades.',
      'turismo': 'Desarrollo integral del turismo como motor económico, preservando patrimonio cultural y natural.',
      'seguridad': 'Implementación de sistema integral de seguridad ciudadana con participación comunitaria.',
      'salud': 'Red departamental de salud eficiente, moderna y accesible para toda la población.',
      'educacion': 'Sistema educativo pertinente, tecnológico y vinculado al desarrollo productivo regional.',
      'deporte': 'Política deportiva integral que promueva salud, valores y desarrollo del talento.',
      'austeridad': 'Gestión pública eficiente, transparente y al servicio de la ciudadanía.',
      'reactivacion': 'Recuperación y ejecución de proyectos estratégicos para el desarrollo departamental.'
    };
    return componentes[id] || `Componente estratégico para ${id.replace('-', ' ')}.`;
  };

  // Función para obtener imágenes (usando placeholders por ahora)
  const getImagenes = (id) => {
    return [
      `/images/propuestas/${id}-1.jpg`,
      `/images/propuestas/${id}-2.jpg`,
      `/images/propuestas/${id}-3.jpg`
    ];
  };

  // Datos completos para las 12 propuestas
  const propuestasCompletas = propuestas.map((propuesta, index) => ({
    ...propuesta,
    contenidoCompleto: getContenidoCompleto(propuesta.id),
    componente: getComponente(propuesta.id),
    acciones: propuesta.detalles || [],
    imagenes: getImagenes(propuesta.id),
    pdfUrl: `/pdfs/propuestas/${propuesta.id}.pdf`
  }));

  const handleProposalClick = (propuesta) => {
    setSelectedProposal(propuesta);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProposal(null), 300);
  };

  return (
    <>
      <section className="section-propuestas" id="propuestas">
        <div className="container-propuestas">
          <div className="propuestas-header">
            <div className="propuestas-badge">Plan de Gobierno 2026-2030</div>
            <h1 className="propuestas-title">
              <span style={{ color: '#006c36' }}>Ing. WILMAR AGUIRRE</span><br />
              <span style={{ fontSize: '1.8rem', color: '#333' }}>GOBERNADOR DE CHUQUISACA</span><br />
              <span style={{ fontSize: '1.5rem', color: '#b8860b' }}>CANDIDATO DE LA UNIDAD</span>
            </h1>
            <h2 className="propuestas-subtitle">#12 RAZONES PARA SER GOBERNADOR DE CHUQUISACA</h2>
            <p className="propuestas-description">
              experiencia, compromiso y resultados
            </p>
          </div>

          <div className="propuestas-grid-container">
            <div className="propuestas-grid">
              {propuestasCompletas.map((propuesta, index) => (
                <div key={propuesta.id} className="propuesta-item">
                  <div className="propuesta-item-header">
                    <div className="propuesta-number">{index + 1}</div>
                    <div className="propuesta-icon-container">
                      <div className="propuesta-icon-wrapper">
                        <Icon icon={propuesta.icon} width="28" height="28" />
                      </div>
                      <div>
                        <h3 className="propuesta-item-title">{propuesta.title}</h3>
                        <p className="propuesta-item-description">{propuesta.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="propuesta-badge-container">
                    <div className="propuesta-verified-badge">
                      <Icon icon="fluent:checkmark-12-filled" width="14" height="14" />
                      Propuesta Verificada
                    </div>
                  </div>

                  <div className="propuesta-preview-container">
                    <p className="preview-info-text">Haz clic para ver propuesta completa con análisis detallado y acciones específicas</p>
                  </div>

                  <div className="propuesta-actions-container">
                    <button 
                      className="btn-propuesta-detalles"
                      onClick={() => handleProposalClick(propuesta)}
                    >
                      <Icon icon="mdi:eye-outline" width="16" height="16" />
                      <span>Ver detalles completos</span>
                      <Icon icon="mdi:arrow-right" width="16" height="16" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="propuestas-info-section">
            <div className="info-card-propuestas">
              <div className="info-card-icon">
                <Icon icon="fluent:target-arrow-16-filled" width="48" height="48" color="#006C36" />
              </div>
              <div className="info-card-content">
                <h3 className="info-card-title">Compromiso Total con Chuquisaca</h3>
                <p className="info-card-text">
                  Estas 12 propuestas representan un plan integral para el desarrollo sostenible de nuestro departamento.
                  Cada propuesta incluye un análisis completo, acciones concretas y documentos descargables para 
                  garantizar transparencia y participación ciudadana en la construcción de un Chuquisaca próspero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProposalModal
        propuesta={selectedProposal}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Propuestas;