import React from 'react';
import { Icon } from '@iconify/react';

const StatsBanner = () => {
  const stats = [
    { 
      number: '12', 
      label: 'Propuestas Estratégicas', 
      icon: 'mdi:lightbulb-on-outline' 
    },
    { 
      number: '15+', 
      label: 'Años de servicio cívico', 
      icon: 'mdi:clock-outline' 
    },
    { 
      number: '100%', 
      label: 'Compromiso con Chuquisaca', 
      icon: 'mdi:heart-outline' 
    },
    { 
      number: '2026', 
      label: 'Un nuevo futuro', 
      icon: 'mdi:calendar-star' 
    }
  ];

  return (
    <section className="stats-banner">
      <div className="container-stats">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <Icon icon={stat.icon} width="32" height="32" /> {/* Más pequeño */}
              </div>
              <div className="stat-content">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;