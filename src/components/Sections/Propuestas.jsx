import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { propuestas } from '../../data/propuestas';
import ProposalModal from '../UI/ProposalModal';

const Propuestas = () => {
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Preparar propuestas completas con imágenes y PDF
  const propuestasCompletas = propuestas.map((propuesta, index) => ({
    ...propuesta,
    imagenes: [
      `/images/propuestas/${propuesta.id}-1.jpg`,
      `/images/propuestas/${propuesta.id}-2.jpg`,
      `/images/propuestas/${propuesta.id}-3.jpg`
    ],
    pdfUrl: `/pdfs/propuestas/${propuesta.id}.pdf`,
    acciones: propuesta.detalles || []
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
                  <div className="propuesta-item-cover">
                    <img src={propuesta.imagen} alt={propuesta.title} className="propuesta-cover-img" loading="lazy" />
                  </div>
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
                    <p className="preview-info-text">
                      Haz clic para ver propuesta completa con análisis detallado y acciones específicas
                    </p>
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
                  Cada propuesta incluye un análisis completo de la situación actual, componentes estratégicos y acciones 
                  concretas para garantizar transparencia y participación ciudadana en la construcción de un Chuquisaca próspero.
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