import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Propuestas = () => {
  const [expandedId, setExpandedId] = useState(null);

  const propuestas = [
    {
      id: 'desarrollo-productivo',
      icon: 'game-icons:wheat',
      title: 'Desarrollo Productivo',
      description: 'Fortalecer la producción agropecuaria con tecnología, formar asociaciones productivas y desarrollar la cadena productiva regional.',
      contenidoCompleto: `Chuquisaca cuenta con más de 40 presas construidas y 18 plantas de transformación, con diversidad climática para potencialidades productivas y diversidad territorial en agricultura y pecuaria, que no es aprovechado para su crecimiento y sostenibilidad inclusiva.`,
      acciones: [
        'Fortalecer aspectos técnicos y tecnológicos para maximizar la producción agropecuaria',
        'Conformación de asociaciones productivas priorizando a grupos de mujeres',
        'Fortalecer la cadena productiva focalizando el potencial productivo de cada región',
        'Agricultura sostenible amigable con el medio ambiente',
        'Construcción de Presas y Represas en todo el departamento',
        'Centros de Investigación de semillas',
        'Implementación de Programa en gestión, acompañamiento de Riego y mecanización de la agroindustria',
        'Implementación de Riego Tecnificado',
        'Producción de lácteos, hortalizas, frutas y otros',
        'Proyectar industrias de Cerámica y Ruta de la Ceda'
      ],
      imagenes: [
        'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800',
        'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800',
        'https://images.unsplash.com/photo-1599423423927-a2c777b40f35?w=800'
      ]
    },
    {
      id: 'medio-ambiente',
      icon: 'mdi:leaf',
      title: 'Medio Ambiente y Agua',
      description: 'Programa "Agua para Chuquisaca" con tratamiento de residuos y forestación con plantas nativas.',
      contenidoCompleto: `Chuquisaca cuenta con infraestructura hídrica (presas construidas), plantas de transformación productiva, así como una alta diversidad de microclimas y ecosistemas, que le otorgan un alto potencial en actividades agrícolas y pecuarias, que no son aprovechadas para su crecimiento y sostenibilidad inclusiva.`,
      componente: 'Cuidado del medio ambiente mediante políticas de gestión responsable con los recursos naturales con enfoque de sostenibilidad y armonía con la naturaleza',
      acciones: [
        'Programa departamental "Agua para Chuquisaca", plan maestro para Sucre',
        'Tratamiento y valorización de residuos solidos mediante la implementación de reciclaje industrial',
        'Forestación con plantas nativas a las cabeceras de ríos y ojos de agua'
      ],
      imagenes: [
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
        'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?w=800',
        'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800'
      ]
    },
    {
      id: 'infraestructura-vial',
      icon: 'mdi:road',
      title: 'Infraestructura Vial y Carreteras',
      description: 'Gestión de inversión en red vial fundamental para vincular regiones productivas con mercados.',
      contenidoCompleto: `Chuquisaca diversa en sus regiones productivas se encuentra desvinculada con los centros de producción como el chaco y cintis, falta de mantenimiento y mejoramiento de los caminos de la red departamental vial.`,
      componente: 'Gestión de inversión en tramos de la red vial fundamental para permitir el acceso a mercados y centros de comercialización de otros departamentos. Construcción, mejoramiento y mantenimiento de los caminos de la red vial departamental.',
      acciones: [
        'Gestión de recursos carreteras Sucre – Poroma - Toro Toro',
        'Conclusión Salto-Monteagudo',
        'Transversal Juana Azurduy de Padilla',
        'Ruta Héroes del Chaco',
        'Ruta Kochas – San Lucas-Padcoyo',
        'Doble Vía Sucre-Potosi (Sucre – Yotala)',
        'Doble Vía Sucre-Aiquile (Sucre-El Valle)',
        'Gran Circunvalación Ciudad de Sucre',
        'Equipar el SEDCAM (revolución caminera)'
      ],
      imagenes: [
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800',
        'https://images.unsplash.com/photo-1547582201-04c01c6097c8?w=800'
      ]
    },
    {
      id: 'energia',
      icon: 'mdi:lightning-bolt',
      title: 'Energía e Hidrocarburos',
      description: 'Gestión de compensación por explotación de recursos naturales y fortalecimiento energético productivo.',
      contenidoCompleto: `Chuquisca ha sido productor histórico de hidrocarburos por más de 40 años (Vuelta Grande y Piryamiri), abasteciendo el mercado interno sin recibir regalías departamentales, lo que refleja una distribución desigual de beneficios. Campos como Sauce Mayu, Acero Norte y Huacareta, pese a tener reservas certificadas, sufren falta de inversión en exploración y desarrollo, limitando la reposición de reservas y el crecimiento del sector. Las hidroeléctricas El Carrizal, Las Rositas y Parapetí son claves para diversificar la matriz energética con fuentes renovables. La línea de alta tensión Sucre–Padilla–Muyupampa–Ipati es estratégica, pero la falta de conexiones trifásicas municipales impide aprovechar plenamente su potencial productivo.`,
      componente: 'Gestión de recursos de compensación por la explotación de nuestros recursos naturales. Fortalecer la gestión energética para el departamento con enfoque productivo.',
      acciones: [
        'Coordinación con YPFB para consolidar el plan de Exploración en mega campos y gas domiciliario para todo Chuquisaca 2.5mmSus',
        'Energía Trifásica para todos los municipios y zonas productivas con la vinculación de la línea de alta tensión Sucre-Ipati',
        'Reducción de costo energético para productores y apoyo a industrialización local',
        'Promoción de energía solar en comunidades dispersas y/o zonas de difícil acceso'
      ],
      imagenes: [
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800',
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800'
      ]
    },
    {
      id: 'mineria',
      icon: 'mdi:pickaxe',
      title: 'Minería',
      description: 'Fortalecimiento de actividad minera con integración, valor agregado local y regalías departamentales.',
      contenidoCompleto: `Chuquisaca posee un importante potencial minero aún no desarrollado, debido a deficiencias en inversión, planificación estratégica y mecanismos de control.`,
      componente: 'Fortalecer la actividad minera en el Departamento con integración, minería-producción y empleo. Generación de Valor Agregado local y regalías mineras para el departamento de Chuquisaca.',
      acciones: [
        'Elaborar y actualizar el mapa minero departamental, con identificación de áreas y cuadrículas mineras, en coordinación con las instancias competentes',
        'Desarrollar un plan de explotación minera responsable, articulado con el ordenamiento territorial y criterios de sostenibilidad ambiental',
        'Promover la construcción de un ingenio minero en la región de los Cintis, que permita el procesamiento local de minerales y mayor valor agregado'
      ],
      imagenes: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
        'https://images.unsplash.com/photo-1541414778236-f051d974d61c?w=800',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
      ]
    },
    {
      id: 'turismo',
      icon: 'mdi:beach',
      title: 'Turismo y Culturas',
      description: 'Turismo con enfoque regional, integración del Sur y promoción de los 12 destinos turísticos.',
      contenidoCompleto: `Chuquisaca cuenta con un alto potencial turístico basado en su patrimonio histórico-cultural, turismo natural y ecológico, así como en culturas vivas, identidad y saberes ancestrales; no obstante, estos no se encuentran articulados de manera efectiva al desarrollo económico ni a la generación de empleo sostenible.`,
      componente: 'Turismo con enfoque Regional e Integración del Sur (Chuquisaca, Potosi y Tarija). Cadenas Turísticas con el sistema nacional e internacional. Promoción de los 12 destinos turísticos de Chuquisaca.',
      acciones: [
        'Feria artesanal y cultural permanente (Centro Matilde Casasola y centro artesanal) con la articulación Gobernación-municipios y sector privado',
        'Desarrollo de rutas ecoturísticas con protección y promoción de áreas naturales, señalización y acceso destinos turísticos, marca turística, campañas de promoción, uso de plataformas y redes sociales',
        'Alianzas con operadores turísticos y países objetivos para captar recursos en desarrollo turístico',
        'Gestionar la operatividad aeroportuaria las 24 horas para integrar a Chuquisaca a la red de conexiones aéreas nacionales e internacionales',
        'Apoyo a emprendimientos turísticos, artesanos y productores culturales en generación de empleo juvenil y femenino'
      ],
      imagenes: [
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
        'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800',
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'
      ]
    },
    {
      id: 'seguridad',
      icon: 'mdi:shield-check',
      title: 'Seguridad Ciudadana',
      description: 'Fortalecimiento de seguridad mediante gestión integral y coordinación interinstitucional.',
      contenidoCompleto: `Chuquisaca requiere una seguridad ciudadana moderna y cercana a la población, articulada con la Policía y el Órgano Judicial, complementada con programas eficaces de prevención del delito.`,
      componente: 'Fortalecer la seguridad ciudadana en Chuquisaca, mediante la Gestión integral y preventiva, orientada al fortalecimiento de la coordinación interinstitucional entre la Policía Boliviana, el Órgano Judicial, los municipios y la sociedad civil, con enfoque moderno, cercano a la población y de prevención del delito. Coordinación interinstitucional para la administración de justicia y prevención del delito.',
      acciones: [
        'Implementación de programas integrales de prevención del delito y fortalecimiento del patrullaje preventivo y comunitario, con énfasis en poblaciones vulnerables y uso de equipamiento y tecnología de seguridad',
        'Articulación operativa entre la Policía Boliviana, el Órgano Judicial y los gobiernos Municipales, orientada a mejorar la respuesta institucional, el acceso a la justicia y la reducción de la impunidad'
      ],
      imagenes: [
        'https://images.unsplash.com/photo-1583339793403-3d9b001b6008?w=800',
        'https://images.unsplash.com/photo-1533450958643-1ce81c5dfd53?w=800',
        'https://images.unsplash.com/photo-1586446918901-93c5e2425c94?w=800'
      ]
    },
    {
      id: 'salud',
      icon: 'healthicons:health',
      title: 'Salud para Chuquisaca',
      description: 'Fortalecimiento de redes de salud con modernización y equipamiento de centros de salud.',
      contenidoCompleto: `Chuquisaca cuenta con un sistema de atención en salud obsoleto, burocrático y desactualizado, Sin uso de tecnología y una gestión ineficiente.`,
      componente: 'Fortalecer las redes de Salud en el departamento con la modernización y equipamiento de centros de salud en zonas urbanas y rurales. Fortalecer el SUS para la atención integral con tecnología medica moderna y la implementación sistematizada de archivos.',
      acciones: [
        'Modernización y equipamiento de centros de salud urbanos y rurales',
        'Implementación de tecnología médica moderna',
        'Sistematización de archivos médicos',
        'Fortalecimiento del Sistema Único de Salud (SUS)'
      ],
      imagenes: [
        'https://images.unsplash.com/photo-1516549655669-df6654e447de?w=800',
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800',
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800'
      ]
    },
    {
      id: 'educacion',
      icon: 'fluent:book-20-filled',
      title: 'Educación',
      description: 'Educación de calidad, inclusiva y equitativa con acceso efectivo a tecnología.',
      contenidoCompleto: `Chuquisaca requiere una educación de calidad, inclusiva y equitativa, con acceso efectivo a la tecnología, que garantice el desarrollo integral y la igualdad de oportunidades a nivel regional.`,
      componente: 'Fortalecer la formación técnica y en oficios en los ámbitos agropecuario, turístico y tecnológico, mediante talleres prácticos vinculados a empresas y emprendimientos, así como convenios con sectores productivos para prácticas y pasantías. Fortalecer los institutos tecnológicos, articulando la educación técnica con programas de innovación y proyectos de desarrollo local. Implementar bibliotecas virtuales en los municipios, facilitando la conectividad a internet y el acceso a recursos educativos digitales.',
      acciones: [
        'Fortalecer formación técnica en agropecuario, turístico y tecnológico',
        'Talleres prácticos vinculados a empresas y emprendimientos',
        'Convenios con sectores productivos para prácticas y pasantías',
        'Fortalecer institutos tecnológicos con programas de innovación',
        'Bibliotecas virtuales en municipios con conectividad a internet'
      ],
      imagenes: [
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800'
      ]
    },
    {
      id: 'deporte',
      icon: 'mdi:soccer-field',
      title: 'Deporte',
      description: 'Fortalecimiento del deporte como eje de desarrollo humano e inclusión social.',
      contenidoCompleto: `Chuquisaca requiere fortalecer el deporte como eje de desarrollo humano e inclusión social, promoviendo la formación deportiva de niñas, niños y jóvenes, el acceso equitativo a espacios e infraestructura deportiva, y la identificación y proyección del talento hacia el alto rendimiento y la práctica comunitaria.`,
      componente: 'Fortalecer la formación deportiva en los jóvenes chuquisaqueños con visión de desarrollo humano.',
      acciones: [
        'Consolidar las escuelas municipales en diferentes disciplinas deportivas en coordinación con los gobiernos municipales',
        'Consolidar centro de alto rendimiento de formación educativo/deportiva de los mejores deportistas elegidos en juegos estudiantiles',
        'Aperturar campos deportivos en horarios específicos para la práctica libre del deporte'
      ],
      imagenes: [
        'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800',
        'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
        'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'
      ]
    },
    {
      id: 'austeridad',
      icon: 'mdi:chart-line',
      title: 'Austeridad',
      description: 'Restructuración del aparato administrativo y ajuste salarial acorde a la economía departamental.',
      contenidoCompleto: `La gobernación de Chuquisaca cuenta con un aparato administrativo sobredimensionado en relación a la actividad que desarrolla.`,
      componente: 'Restructuración del aparato administrativo de la Gobernación de Chuquisaca. Ajuste salarios a la realidad actual de la economía departamental.',
      acciones: [
        'Ajustar el organigrama institucional de acuerdo al plan programático de la institución',
        'Establecer como salario máximo 12,000Bs. en base a la cual se debe generar una nueva escala salarial por el 2026'
      ],
      imagenes: [
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
        'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800'
      ]
    },
    {
      id: 'reactivacion',
      icon: 'mdi:rocket-launch',
      title: 'Reactivación',
      description: 'Reactivar proyectos estratégicos postergados para el desarrollo de Chuquisaca.',
      contenidoCompleto: `Chuquisaca no puede ser castigada y debemos reactivar en gestión directa los siguientes proyectos que se encuentran postergados.`,
      componente: 'Reactivación de proyectos estratégicos postergados para el desarrollo de Chuquisaca.',
      acciones: [
        'Carretera Sucre – Poroma - Toro Toro',
        'Conclusión Salto-Monteagudo',
        'Transversal Juana Azurduy de Padilla',
        'Ruta Héroes del Chaco',
        'Ruta Kochas – San Lucas-Padcoyo',
        'Doble Vía Sucre-Potosi (Sucre – Yotala)',
        'Doble Vía Sucre-Aiquile (Sucre-El Valle)',
        'Gran Circunvalación Ciudad de Sucre',
        'Cárcel de Duraznillos',
        'Ciudadela Judicial',
        'Aeropuertos Juana Azurduy y Apaguayki Tumpa',
        'Hidroeléctricas de El Carrizal, Las Rositas y Parapeti',
        'Gestión ante el gobierno nacional por que son proyectos estratégicos para el escenario nacional'
      ],
      imagenes: [
        'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800'
      ]
    }
  ];

  return (
    <section className="propuestas" id="propuestas">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Plan de Gobierno 2026-2030</span>
          <h1 className="section-title">
            <span style={{ color: '#006c36' }}>Ing. WILMAR AGUIRRE</span><br />
            <span style={{ fontSize: '1.8rem', color: '#333' }}>GOBERNADOR DE CHUQUISACA</span><br />
            <span style={{ fontSize: '1.5rem', color: '#b8860b' }}>CANDIDATO DE LA UNIDAD</span>
          </h1>
          <h2 className="section-subtitle">#12 RAZONES PARA SER GOBERNADOR DE CHUQUISACA</h2>
          <p className="section-description">
            experiencia, compromiso y resultados
          </p>
        </div>

        <div className="propuestas-grid">
          {propuestas.map((propuesta) => (
            <div
              key={propuesta.id}
              className={`propuesta-card ${expandedId === propuesta.id ? 'expanded' : ''}`}
            >
              <div 
                className="propuesta-card-header"
                onClick={() => setExpandedId(expandedId === propuesta.id ? null : propuesta.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="propuesta-icon">
                  <Icon icon={propuesta.icon} width="32" height="32" />
                </div>
                <div className="propuesta-header-content">
                  <h3 className="propuesta-title">{propuesta.title}</h3>
                  <p className="propuesta-description">{propuesta.description}</p>
                </div>
                <div className="propuesta-expand-btn">
                  <Icon 
                    icon={expandedId === propuesta.id ? "mdi:chevron-up" : "mdi:chevron-down"} 
                    width="24" 
                    height="24" 
                  />
                </div>
              </div>

              <div className="propuesta-badge">
                <Icon icon="fluent:checkmark-12-filled" width="14" height="14" />
                Propuesta Verificada
              </div>

              {/* Contenido expandido */}
              {expandedId === propuesta.id && (
                <div className="propuesta-detalles">
                  <div className="detalles-contenido">
                    <h4 className="detalles-titulo">Análisis de Situación</h4>
                    <p className="contenido-completo">{propuesta.contenidoCompleto}</p>
                    
                    {propuesta.componente && (
                      <>
                        <h4 className="detalles-titulo">Componente</h4>
                        <p className="componente">{propuesta.componente}</p>
                      </>
                    )}
                    
                    <h4 className="detalles-titulo">Acciones Propuestas</h4>
                    <div className="detalles-lista">
                      <ul>
                        {propuesta.acciones.map((accion, index) => (
                          <li key={index}>
                            <Icon icon="mdi:check-circle" width="16" height="16" />
                            {accion}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Galería de imágenes */}
                    <div className="propuesta-galeria">
                      <h4 className="galeria-titulo">Visualización del Proyecto</h4>
                      <div className="galeria-grid">
                        {propuesta.imagenes.map((imagen, index) => (
                          <div key={index} className="galeria-item">
                            <img 
                              src={imagen} 
                              alt={`${propuesta.title} - Imagen ${index + 1}`}
                              loading="lazy"
                              className="galeria-imagen"
                            />
                            <div className="galeria-overlay">
                              <Icon icon="mdi:eye" width="20" height="20" />
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="galeria-descripcion">
                        Imágenes ilustrativas del proyecto {propuesta.title}
                      </p>
                    </div>
                  </div>

                  {/* Botones alineados */}
                  <div className="propuesta-botones">
                    <button 
                      className="btn-ver-mas"
                      onClick={() => setExpandedId(null)}
                    >
                      <Icon icon="mdi:chevron-up" />
                      Cerrar detalles
                    </button>
                    
                    <button className="btn-compartir">
                      <Icon icon="mdi:share-variant" />
                      Compartir esta propuesta
                    </button>
                    
                    <button className="btn-descargar">
                      <Icon icon="mdi:download" />
                      Descargar PDF
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="propuestas-info">
          <div className="info-card">
            <Icon icon="fluent:target-arrow-16-filled" width="32" height="32" />
            <div className="info-content">
              <h3>Compromiso Total con Chuquisaca</h3>
              <p>
                Estas 12 propuestas representan un plan integral para el desarrollo sostenible de nuestro departamento.
                Cada propuesta ha sido cuidadosamente diseñada basada en estudios técnicos y diseñada para generar
                resultados medibles y transformadores en beneficio de todas las familias chuquisaqueñas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Propuestas;
