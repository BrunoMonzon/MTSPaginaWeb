import React from 'react';
import { Icon } from '@iconify/react';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-content">
        <div className="topbar-links">
          <a href="#transparencia">Transparencia</a>
          <a href="#contacto">Contacto</a>
          <a href="#prensa">Sala de Prensa</a>
        </div>
        <div className="social-top">
          <a href="#" aria-label="Facebook">
            <Icon icon="ri:facebook-fill" width="18" height="18" />
          </a>
          <a href="#" aria-label="Twitter">
            <Icon icon="ri:twitter-x-fill" width="18" height="18" />
          </a>
          <a href="#" aria-label="Instagram">
            <Icon icon="ri:instagram-fill" width="18" height="18" />
          </a>
          <a href="#" aria-label="YouTube">
            <Icon icon="ri:youtube-fill" width="18" height="18" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
