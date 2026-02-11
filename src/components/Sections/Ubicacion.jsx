import React, { useRef, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

// IMPORTANTE: Usar variable de entorno de VITE
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

if (!MAPBOX_TOKEN) {
  console.error('❌ ERROR: Token de Mapbox no configurado. Crea un archivo .env.local con VITE_MAPBOX_TOKEN');
}

mapboxgl.accessToken = MAPBOX_TOKEN;

const Ubicacion = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [mapError, setMapError] = useState(false);
  
  // Coordenadas exactas de la ubicación: XQF3+RW9, Sucre
  const [lng] = useState(-65.260833); // Longitud corregida
  const [lat] = useState(-19.047222); // Latitud corregida
  const [zoom] = useState(17); // Zoom más cercano

  useEffect(() => {
    // Si no hay token, mostrar error
    if (!MAPBOX_TOKEN) {
      setMapError(true);
      return;
    }

    if (!mapContainer.current || map.current) return;

    try {
      // Inicializar el mapa
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom,
        pitch: 45,
        bearing: -17.6,
        antialias: true
      });

      // Manejar errores de autenticación
      map.current.on('error', (e) => {
        console.error('Error en el mapa:', e);
        if (e.error && e.error.status === 401) {
          setMapError(true);
          console.error('❌ Token de Mapbox inválido o no autorizado');
        }
      });

      // Esperar a que el mapa cargue
      map.current.on('load', () => {
        // Añadir controles de navegación
        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

        // Añadir marcador personalizado
        const markerElement = document.createElement('div');
        markerElement.className = 'custom-marker';
        
        const markerContent = document.createElement('div');
        markerContent.style.cssText = `
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #006C36 0%, #004422 100%);
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          cursor: pointer;
        `;
        
        markerContent.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        `;
        
        markerElement.appendChild(markerContent);

        // Crear el marcador con popup - DIRECCIÓN CORREGIDA
        const marker = new mapboxgl.Marker({
          element: markerElement,
          anchor: 'bottom'
        })
          .setLngLat([lng, lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25, closeButton: false })
              .setHTML(`
                <div style="padding: 20px; max-width: 280px;">
                  <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                    <div style="
                      width: 48px;
                      height: 48px;
                      background: linear-gradient(135deg, #006C36 0%, #004422 100%);
                      border-radius: 10px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      flex-shrink: 0;
                    ">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 style="margin: 0 0 4px 0; color: #006C36; font-size: 18px; font-weight: 800;">Sede Principal MTS</h3>
                      <p style="margin: 0; color: #666; font-size: 14px; font-weight: 500;">Sucre, Chuquisaca - Bolivia</p>
                    </div>
                  </div>
                  
                  <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #eee;">
                    <p style="margin: 0 0 12px 0; color: #333; font-size: 14px; display: flex; align-items: center; gap: 8px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#006C36">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span><strong>Dirección:</strong> XQF3+RW9, Sucre</span>
                    </p>
                    <p style="margin: 0 0 12px 0; color: #333; font-size: 14px; display: flex; align-items: center; gap: 8px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#CD9869">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                      </svg>
                      <span><strong>Horario:</strong> Lun-Vie 8:00-18:00</span>
                    </p>
                    <p style="margin: 0; color: #333; font-size: 14px; display: flex; align-items: center; gap: 8px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#004422">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span><strong>Código:</strong> XQF3+RW9</span>
                    </p>
                  </div>
                  
                  <div style="margin-top: 16px;">
                    <a href="https://maps.app.goo.gl/f92j8zzRNhg7HSuD8" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style="
                         display: inline-flex;
                         align-items: center;
                         justify-content: center;
                         gap: 8px;
                         padding: 10px 20px;
                         background: #006C36;
                         color: white;
                         border-radius: 8px;
                         text-decoration: none;
                         font-size: 14px;
                         font-weight: 600;
                         transition: all 0.3s ease;
                         width: 100%;
                         border: none;
                         cursor: pointer;
                       "
                       onmouseover="this.style.background='#004422'; this.style.transform='translateY(-2px)';"
                       onmouseout="this.style.background='#006C36'; this.style.transform='translateY(0)';">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                      </svg>
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              `)
          )
          .addTo(map.current);

        // Abrir popup automáticamente
        setTimeout(() => {
          marker.togglePopup();
        }, 1000);

        // Añadir geolocalización
        map.current.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: { enableHighAccuracy: true },
            trackUserLocation: true,
            showUserHeading: true
          }),
          'top-right'
        );

        // Añadir escala
        map.current.addControl(
          new mapboxgl.ScaleControl({ maxWidth: 100, unit: 'metric' }), 
          'bottom-left'
        );

        // AÑADIR GEOCODER CON ESTILO PERSONALIZADO - LUPA CORREGIDA
        const geocoder = new MapboxGeocoder({
          accessToken: MAPBOX_TOKEN,
          mapboxgl: mapboxgl,
          marker: false,
          placeholder: 'Buscar dirección...',
          language: 'es',
          countries: 'bo',
          proximity: { longitude: lng, latitude: lat }
        });

        // Personalizar el input del geocoder
        const geocoderContainer = geocoder.onAdd(map.current);
        
        // Crear un wrapper personalizado para el geocoder
        const geocoderWrapper = document.createElement('div');
        geocoderWrapper.className = 'mapbox-geocoder-custom';
        
        const searchIcon = document.createElement('span');
        searchIcon.className = 'geocoder-icon-search';
        searchIcon.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#666">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        `;
        
        geocoderWrapper.appendChild(searchIcon);
        geocoderWrapper.appendChild(geocoderContainer.querySelector('.mapboxgl-ctrl-geocoder'));
        
        // Reemplazar el contenido
        geocoderContainer.innerHTML = '';
        geocoderContainer.appendChild(geocoderWrapper);
        
        map.current.addControl(geocoder, 'top-left');
      });

    } catch (error) {
      console.error('Error al inicializar el mapa:', error);
      setMapError(true);
    }

    // Limpiar al desmontar
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [lng, lat, zoom]);

  const infoUbicacion = [
    {
      icon: 'fluent:building-24-filled',
      title: 'Sede Principal',
      descripcion: 'XQF3+RW9, Sucre - Bolivia',
      color: '#006C36'
    },
    {
      icon: 'fluent:clock-24-filled',
      title: 'Horario de Atención',
      descripcion: 'Lun-Vie: 8:00-18:00 | Sáb: 9:00-13:00',
      color: '#CD9869'
    },
    {
      icon: 'fluent:phone-24-filled',
      title: 'Teléfono',
      descripcion: '+591 7453 6806',
      color: '#004422'
    },
    {
      icon: 'fluent:mail-24-filled',
      title: 'Email',
      descripcion: 'info@wilmaraguirre.bo',
      color: '#B8835A'
    }
  ];

  return (
    <section className="section-ubicacion" id="ubicacion">
      <div className="container-ubicacion">
        <div className="ubicacion-header">
          <div className="ubicacion-badge">
            <Icon icon="fluent:location-24-filled" width="20" height="20" />
            <span>Nuestra Ubicación</span>
          </div>
          <h2 className="ubicacion-title">Visítanos en Sucre</h2>
          <p className="ubicacion-subtitle">
            Encuentra nuestra sede principal en el corazón de Chuquisaca
          </p>
        </div>

        <div className="ubicacion-content">
          {/* Mapa */}
          <div className="mapa-container">
            <div className="mapa-card">
              <div className="mapa-header">
                <div className="mapa-header-content">
                  <Icon icon="fluent:map-24-filled" width="24" height="24" />
                  <h3 className="mapa-title">Ubicación Exacta</h3>
                </div>
                <div className="mapa-controls-info">
                  <span className="mapa-control-info">
                    <Icon icon="fluent:zoom-in-24-regular" width="16" height="16" />
                    <span>Acerca/aleja</span>
                  </span>
                  <span className="mapa-control-info">
                    <Icon icon="fluent:hand-draw-24-regular" width="16" height="16" />
                    <span>Mover mapa</span>
                  </span>
                </div>
              </div>
              
              <div className="mapa-wrapper">
                {mapError ? (
                  <div className="mapa-error">
                    <Icon icon="fluent:error-circle-24-regular" width="48" height="48" />
                    <h4>Error al cargar el mapa</h4>
                    <p>No se pudo conectar con Mapbox. Verifica tu token.</p>
                  </div>
                ) : (
                  <>
                    <div ref={mapContainer} className="mapa" />
                    <div className="mapa-overlay-info">
                      <div className="mapa-coordenadas">
                        <Icon icon="fluent:globe-24-regular" width="16" height="16" />
                        <span>XQF3+RW9, Sucre</span>
                      </div>
                      <a 
                        href="https://maps.app.goo.gl/f92j8zzRNhg7HSuD8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-abrir-gmaps"
                      >
                        <Icon icon="fluent:open-24-regular" width="16" height="16" />
                        <span>Abrir en Google Maps</span>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Información de la ubicación */}
          <div className="ubicacion-info-container">
            <div className="ubicacion-info-card">
              <div className="ubicacion-info-header">
                <Icon icon="fluent:info-24-filled" width="24" height="24" />
                <h3 className="ubicacion-info-title">Información de Contacto</h3>
              </div>
              
              <div className="ubicacion-info-grid">
                {infoUbicacion.map((item, index) => (
                  <div key={index} className="ubicacion-info-item">
                    <div className="ubicacion-info-icon" style={{ backgroundColor: `${item.color}15` }}>
                      <Icon icon={item.icon} width="24" height="24" style={{ color: item.color }} />
                    </div>
                    <div className="ubicacion-info-content">
                      <h4 className="ubicacion-info-item-title">{item.title}</h4>
                      <p className="ubicacion-info-item-desc">{item.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="instrucciones-llegar">
                <div className="instrucciones-header">
                  <Icon icon="fluent:arrow-routing-24-filled" width="20" height="20" />
                  <h4>¿Cómo llegar?</h4>
                </div>
                <div className="instrucciones-pasos">
                  <div className="paso">
                    <span className="paso-numero">1</span>
                    <p>Ubicados en el centro histórico de Sucre, código XQF3+RW9</p>
                  </div>
                  <div className="paso">
                    <span className="paso-numero">2</span>
                    <p>A una cuadra de la Plaza 25 de Mayo</p>
                  </div>
                  <div className="paso">
                    <span className="paso-numero">3</span>
                    <p>Fácil acceso desde cualquier punto de la ciudad</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="notas-importantes">
              <div className="notas-header">
                <Icon icon="fluent:info-24-regular" width="20" height="20" />
                <h4>Notas Importantes</h4>
              </div>
              <div className="notas-content">
                <div className="nota-item">
                  <Icon icon="fluent:warning-24-regular" width="16" height="16" />
                  <span>Estacionamiento disponible en calles aledañas</span>
                </div>
                <div className="nota-item">
                  <Icon icon="fluent:accessibility-24-regular" width="16" height="16" />
                  <span>Acceso para personas con movilidad reducida</span>
                </div>
                <div className="nota-item">
                  <Icon icon="fluent:calendar-arrow-right-24-regular" width="16" height="16" />
                  <span>Se recomienda agendar cita previa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;