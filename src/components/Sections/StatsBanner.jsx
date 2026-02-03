import React from 'react';

const StatsBanner = () => {
  const stats = [
    { number: "12", label: "Propuestas Estratégicas" },
    { number: "15+", label: "Años de servicio cívico" },
    { number: "100%", label: "Compromiso con Chuquisaca" },
    { number: "2026", label: "Un nuevo futuro" }
  ];

  return (
    <section className="stats-banner">
      <div className="stats-content">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;
