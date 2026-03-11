import React, { useRef, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

if (MAPBOX_TOKEN) {
  mapboxgl.accessToken = MAPBOX_TOKEN;
}

const SOCIAL_LINKS = [
  {
    name: 'WhatsApp',
    icon: 'ic:baseline-whatsapp',
    href: 'https://wa.me/59177249319',
    label: '+591 7724 9319',
  },
  {
    name: 'Facebook',
    icon: 'ic:baseline-facebook',
    href: 'https://www.facebook.com/profile.php?id=61581741286125',
    label: 'MTS Bolivia',
  },
  {
    name: 'TikTok',
    icon: 'ic:baseline-tiktok',
    href: 'https://www.tiktok.com/@wilmar.aguirre.of?_r=1&_t=ZS-94RxvMEs9i5',
    label: '@mtssucre',
  },
];

const CONTACT_INFO = [
  {
    icon: 'fluent:location-28-filled',
    label: 'Dirección',
    value: 'Manuel Durán entre Adrián Camacho y Mairana, Sucre',
  },
  {
    icon: 'fluent:clock-28-filled',
    label: 'Horario',
    value: 'Lun–Vie 8:00–18:00 · Sáb 9:00–13:00',
  },
  {
    icon: 'fluent:phone-28-filled',
    label: 'Teléfono',
    value: '+591 7724 9319',
  },
  {
    icon: 'fluent:mail-28-filled',
    label: 'Correo',
    value: 'wilmaraguirre133@gmail.com',
  },
];

const Ubicacion = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [mapError, setMapError] = useState(!MAPBOX_TOKEN);

  const LNG = -65.260833;
  const LAT = -19.047222;

  useEffect(() => {
    if (!MAPBOX_TOKEN || !mapContainer.current || map.current) return;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [LNG, LAT],
        zoom: 16.5,
        pitch: 40,
        bearing: -10,
        antialias: true,
        attributionControl: false,
      });

      map.current.on('error', (e) => {
        if (e.error?.status === 401) setMapError(true);
      });

      map.current.on('load', () => {
        map.current.addControl(
          new mapboxgl.NavigationControl({ showCompass: false }),
          'top-right'
        );
        map.current.addControl(
          new mapboxgl.AttributionControl({ compact: true }),
          'bottom-right'
        );

        const el = document.createElement('div');
        el.className = 'ub-marker';
        el.innerHTML = `
          <div class="ub-marker__pulse"></div>
          <div class="ub-marker__pin">
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
        `;

        const popup = new mapboxgl.Popup({
          offset: 56,
          closeButton: false,
          className: 'ub-popup',
          maxWidth: '270px',
          focusAfterOpen: false,
        }).setHTML(`
          <div class="ub-popup__inner">
            <p class="ub-popup__name">Sede Principal MTS</p>
            <p class="ub-popup__addr">Manuel Durán entre Adrián Camacho y Mairana — Sucre, Bolivia</p>
            <a class="ub-popup__btn" href="https://maps.app.goo.gl/f92j8zzRNhg7HSuD8" target="_blank" rel="noopener noreferrer">
              Ver en Google Maps
            </a>
          </div>
        `);

        new mapboxgl.Marker({ element: el, anchor: 'bottom' })
          .setLngLat([LNG, LAT])
          .setPopup(popup)
          .addTo(map.current);

        setTimeout(() => popup.addTo(map.current).setLngLat([LNG, LAT]), 800);
      });
    } catch {
      setMapError(true);
    }

    return () => {
      if (map.current) { map.current.remove(); map.current = null; }
    };
  }, []);

  return (
    <section className="ub-section" id="ubicacion">
      <div className="ub-header">
        <span className="ub-eyebrow">Nuestra Ubicación</span>
        <h2 className="ub-title">Encuéntranos en Sucre</h2>
        <p className="ub-subtitle">Sede principal en el corazón de Chuquisaca, Bolivia</p>
      </div>

      <div className="ub-grid">

        {/* Map */}
        <div className="ub-map-wrap">
          {mapError ? (
            <div className="ub-map-fallback">
              <Icon icon="fluent:map-24-regular" width="48" height="48" />
              <p>No se pudo cargar el mapa.<br />Verifica tu token de Mapbox.</p>
              <a className="ub-gmaps-btn" href="https://maps.app.goo.gl/f92j8zzRNhg7HSuD8" target="_blank" rel="noopener noreferrer">
                Abrir en Google Maps
              </a>
            </div>
          ) : (
            <div ref={mapContainer} className="ub-map" />
          )}
          <a className="ub-map-badge" href="https://maps.app.goo.gl/f92j8zzRNhg7HSuD8" target="_blank" rel="noopener noreferrer">
            <Icon icon="fluent:open-24-regular" width="15" height="15" />
            Abrir en Google Maps
          </a>
        </div>

        {/* Info panel */}
        <div className="ub-panel">
          <div className="ub-info-list">
            {CONTACT_INFO.map((item) => (
              <div className="ub-info-row" key={item.label}>
                <div className="ub-info-icon">
                  <Icon icon={item.icon} width="20" height="20" />
                </div>
                <div>
                  <span className="ub-info-label">{item.label}</span>
                  <p className="ub-info-value">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="ub-divider" />

          <div className="ub-directions">
            <h3 className="ub-directions-title">
              <Icon icon="fluent:arrow-routing-24-filled" width="18" height="18" />
              Cómo llegar
            </h3>
            <ol className="ub-steps">
              <li>Calle Manuel Durán, entre Adrián Camacho y Mairana</li>
              <li>A pocas cuadras de la Rotonda Rotari</li>
              {/* <li>Fácil acceso desde cualquier punto de la ciudad</li> */}
            </ol>
          </div>

          <div className="ub-divider" />

          <div className="ub-social">
            <h3 className="ub-social-title">Síguenos</h3>
            <div className="ub-social-list">
              {SOCIAL_LINKS.map((s) => (
                <a key={s.name} className="ub-social-item" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                  <span className="ub-social-icon">
                    <Icon icon={s.icon} width="22" height="22" />
                  </span>
                  <span className="ub-social-info">
                    <span className="ub-social-name">{s.name}</span>
                    <span className="ub-social-handle">{s.label}</span>
                  </span>
                  <Icon icon="fluent:arrow-right-24-regular" width="16" height="16" className="ub-social-arrow" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;