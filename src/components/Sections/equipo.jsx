import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import '../../styles/equipo.css';
/* ═══════════════════════════════════════════════════
   DATOS REALES DEL EQUIPO MTS
   photo: coloca imagen en /images/equipo/<id>.jpg
   Si no hay foto, se muestran las iniciales automáticamente
═══════════════════════════════════════════════════ */

const GOBERNADOR = [
  {
    id: 'wa',
    nombre: 'Jose Wilmar Aguirre Velasquez',
    cargo: 'Candidato a Gobernador de Chuquisaca',
    grupo: 'Gobernador',
    photo: '/Candidato a Gobernador-20260303T221746Z-3-001/Candidato a Gobernador/Jose Wilmar Aguirre Velasquez - Candidato a Gobernador de Chuquisaca.jpg',
  },
];

const ASAMBLEISTAS = [
  {
    id: 'asm-1',
    nombre: 'Alejandra Salazar Mancilla',
    cargo: 'Asamblea Departamental',
    zona: 'Provincia Oropeza',
    grupo: 'Asambleísta',
    photo: '/Asambleistas territorio-20260303T221133Z-3-001/Asambleistas territorio/Alejandra Salazar Mancilla - Candidata Asamblea Departamental por territorio Provincia Oropeza.jpg',
  },
  {
    id: 'asm-2',
    nombre: 'Ana María Durán Núñez',
    cargo: 'Asamblea Departamental',
    zona: 'Provincia Zudáñez',
    grupo: 'Asambleísta',
    photo: '/Asambleistas territorio-20260303T221133Z-3-001/Asambleistas territorio/Ana Maria Duran Nuñez - Candidato Asamblea Departamental por Territorio provincia Zudañez.jpg',
  },
  {
    id: 'asm-3',
    nombre: 'Bladimir Flores Ferrufino',
    cargo: 'Asamblea Departamental',
    zona: 'Provincia Azurduy',
    grupo: 'Asambleísta',
    photo: '/Asambleistas territorio-20260303T221133Z-3-001/Asambleistas territorio/BLADIMIR FLORES FERRUFINO - candidato Asamblea Departamental por territorio provincia Azurduy.jpg',
  },
  {
    id: 'asm-4',
    nombre: 'Estanislao Yarwi Carrillo',
    cargo: 'Asamblea Departamental',
    zona: 'Provincia Yamparáez',
    grupo: 'Asambleísta',
    photo: '/Asambleistas territorio-20260303T221133Z-3-001/Asambleistas territorio/Estanislao Yarwi Carrillo - Candidato Asamblea Departamental por Territorio Provincia Yamparaez.jpg',
  },
  {
    id: 'asm-5',
    nombre: 'Jose Luis Carmona Ortega',
    cargo: 'Asamblea Departamental',
    zona: 'Provincia Nor Cinti',
    grupo: 'Asambleísta',
    photo: '/Asambleistas territorio-20260303T221133Z-3-001/Asambleistas territorio/Jose Luis Carmona Ortega - Candidato Asamblea Departamental por Territorio Provincia Nor Cinti.jpg',
  },
  {
    id: 'asm-6',
    nombre: 'Lavinia Herrera Tapia',
    cargo: 'Asamblea Departamental',
    zona: 'Provincia Belisario Boeto',
    grupo: 'Asambleísta',
    photo: '/Asambleistas territorio-20260303T221133Z-3-001/Asambleistas territorio/Lavinia Herrera Tapia - Candidato Asamblea Departamental por Territorio Provincia Belisario Boeto.jpg',
  },
  {
    id: 'asm-7',
    nombre: 'Lidia Zardan',
    cargo: 'Asamblea Departamental',
    zona: 'Provincia Tomina',
    grupo: 'Asambleísta',
    photo: '/Asambleistas territorio-20260303T221133Z-3-001/Asambleistas territorio/Lidia Zardan - Asamblea territorial provincia tomima.jpg',
  },
  {
    id: 'asm-8',
    nombre: 'Nancy Rojas García',
    cargo: 'Asamblea Departamental',
    zona: 'Provincia Luis Calvo',
    grupo: 'Asambleísta',
    photo: '/Asambleistas territorio-20260303T221133Z-3-001/Asambleistas territorio/ROJAS GARCIA NANCY Candidato Asamblea Departamental por Territorio Provincia Luis Calvo.jpg',
  },
  {
    id: 'asm-9',
    nombre: 'Rolando Paniagua Martínez',
    cargo: 'Asamblea Departamental',
    zona: 'Provincia Hernando Siles',
    grupo: 'Asambleísta',
    photo: '/Asambleistas territorio-20260303T221133Z-3-001/Asambleistas territorio/Rolando Paniagua Martinez - Candidato Asamblea Departamental por Territorio Provincia Hernando Siles.jpg',
  },
  {
    id: 'asm-10',
    nombre: 'Victor Gallardo Rivera',
    cargo: 'Asamblea Departamental',
    zona: 'Provincia Sud Cinti',
    grupo: 'Asambleísta',
    photo: '/Asambleistas territorio-20260303T221133Z-3-001/Asambleistas territorio/Victor Gallardo Rivera - Candidato Asamblea Departamental por Territorio Provincia Sud Cinti.jpg',
  },
];

const ALCALDES = [
  { id: 'alc-1',  nombre: 'Alberto Melendres Condori',      zona: 'Icla',          grupo: 'Alcalde', photo: '/candidatos alcaldias-20260303T221759Z-3-001/candidatos alcaldias/ALBERTO MELENDRES CONDORI - CANDIDATO ALCALDIA ICLA.jpg' },
  { id: 'alc-2',  nombre: 'Antonio Vidales Quispe',         zona: 'Tarvita',        grupo: 'Alcalde', photo: '/candidatos alcaldias-20260303T221759Z-3-001/candidatos alcaldias/ANTONIO VIDALES QUISPE - CANDIDATO A ALCALDE DE TARVITA.jpg' },
  { id: 'alc-3',  nombre: 'Benito Quintanilla Gonzales',    zona: 'Poroma',         grupo: 'Alcalde', photo: '/candidatos alcaldias-20260303T221759Z-3-001/candidatos alcaldias/BENITO QUINTANILLA GONZALES - CANDIDATO A ALCALDE POROMA.jpg' },
  { id: 'alc-4',  nombre: 'Carla Faviola Flores Aguirre',   zona: 'Villa Abecia',   grupo: 'Alcalde', photo: '/candidatos alcaldias-20260303T221759Z-3-001/candidatos alcaldias/Carla Faviola Flores Aguirre - CANDIDATA ALCALDIA VILLA ABECIA.jpg' },
  { id: 'alc-5',  nombre: 'Carlos Carrillo Laime',          zona: 'Presto',         grupo: 'Alcalde', photo: '/candidatos alcaldias-20260303T221759Z-3-001/candidatos alcaldias/CARLOS CARRILLO LAIME - CANDIDATO ALCALDIA PRESTO.jpg' },
  { id: 'alc-6',  nombre: 'Alcides Chavarría Flores',       zona: 'Sopachui',       grupo: 'Alcalde', photo: '/candidatos alcaldias-20260303T221759Z-3-001/candidatos alcaldias/CHAVARRIA FLORES ALCIDES - CANDIDATO ALCALDIA SOPACHUI.jpg' },
  { id: 'alc-7',  nombre: 'Ramiro Daza Zárate',             zona: 'Mojocoya',       grupo: 'Alcalde', photo: '/candidatos alcaldias-20260303T221759Z-3-001/candidatos alcaldias/DAZA ZARATE RAMIRO - CANDIDATO ALCALDIA MOJOCOYA.jpg' },
  { id: 'alc-8',  nombre: 'Fermín Orias Montero',           zona: 'Tomina',         grupo: 'Alcalde', photo: '/candidatos alcaldias-20260303T221759Z-3-001/candidatos alcaldias/FERMIN ORIAS MONTERO CANDIDATO A ALCALDE DE  TOMINA.jpg' },
  { id: 'alc-9',  nombre: 'Guiver Aymuro Valda',            zona: 'Yamparáez',      grupo: 'Alcalde', photo: '/candidatos alcaldias-20260303T221759Z-3-001/candidatos alcaldias/GUIVER AYMURO VALDA - CANDIDATO ALCALDIA YAMPARAEZ.jpg' },
  { id: 'alc-10', nombre: 'Juan Miguel Gomez Aldana',       zona: 'San Lucas',      grupo: 'Alcalde', photo: '/candidatos alcaldias-20260303T221759Z-3-001/candidatos alcaldias/JUAN MIGUEL GOMEZ ALDANA - CANDIDATO ALCALDIA SAN LUCAS.jpg' },
  { id: 'alc-11', nombre: 'Juan Ríos Ibarra',               zona: 'Azurduy',        grupo: 'Alcalde', photo: '/candidatos alcaldias-20260303T221759Z-3-001/candidatos alcaldias/JUAN RIOS IBARRA - CANDIDATO A LA ALCALDIA AZURDUY.jpg' },
  { id: 'alc-12', nombre: 'Mijael Mamani Avilés',           zona: 'Incahuasi',      grupo: 'Alcalde', photo: '/candidatos alcaldias-20260303T221759Z-3-001/candidatos alcaldias/MIJAEL MAMANI AVILES -  CANDIDATO ALCALDE INCAHUASI.jpg' },
  { id: 'alc-13', nombre: 'Rayner Tolaba Cohanqui',         zona: 'Villa Charcas',  grupo: 'Alcalde', photo: '/candidatos alcaldias-20260303T221759Z-3-001/candidatos alcaldias/RAYNER TOLABA COHANQUI - CANDIDATO ALCALDIA VILLA CHARCAS.jpg' },
  { id: 'alc-14', nombre: 'Richard Moscoso Paredes',        zona: 'Sucre',          grupo: 'Alcalde', photo: '/candidatos alcaldias-20260303T221759Z-3-001/candidatos alcaldias/RICHARD MOSCOSO PAREDES - CANDIDATO A ALCALDE SUCRE.jpg' },
  { id: 'alc-15', nombre: 'Richar Jhonny Rocha Escalante',  zona: 'Yotala',         grupo: 'Alcalde', photo: '/candidatos alcaldias-20260303T221759Z-3-001/candidatos alcaldias/ROCHA ESCALANTE RICHAR JHONNY - CANDIDATO ALCALDIA YOTALA.jpg' },
  { id: 'alc-16', nombre: 'Said Cabrita Ovando',            zona: 'Padilla',        grupo: 'Alcalde', photo: '/candidatos alcaldias-20260303T221759Z-3-001/candidatos alcaldias/SAID CABRITA OVANDO - CANDIDATO ALCALDIA DE PADILLA.jpg' },
  { id: 'alc-17', nombre: 'Wilber Flores Torres',           zona: 'Zudáñez',        grupo: 'Alcalde', photo: '/candidatos alcaldias-20260303T221759Z-3-001/candidatos alcaldias/WILBER FLORES TORRES -CANDIDATO ALCALDE DEL MUNICIPIO DE ZUDAÑEZ.jpg' },
];

/* ─── helpers ─── */
const getInitials = (nombre) =>
  nombre
    .split(' ')
    .filter((_, i) => i < 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

const GROUP_CONFIG = {
  Gobernador:  { color: '#006938', bg: '#edf5f0', icon: 'fluent:person-star-24-filled',    label: 'Gobernador'    },
  Asambleísta: { color: '#2d6a8f', bg: '#e8f2f9', icon: 'fluent:building-government-20-filled', label: 'Asambleísta' },
  Alcalde:     { color: '#c98040', bg: '#fdf3e9', icon: 'fluent:building-24-filled',        label: 'Alcalde'       },
};

/* ─── Card ─── */
const Card = ({ member, featured = false }) => {
  const cfg = GROUP_CONFIG[member.grupo];
  const initials = getInitials(member.nombre);

  return (
    <div className={`eq-card${featured ? ' eq-card--featured' : ''}`}>
      {/* Group pill */}
      <span className="eq-card-group" style={{ background: cfg.bg, color: cfg.color }}>
        <Icon icon={cfg.icon} width="13" height="13" />
        {cfg.label}
      </span>

      {/* Avatar */}
      <div className="eq-card-avatar" style={{ borderColor: cfg.color }}>
        {member.photo ? (
          <img src={member.photo} alt={member.nombre} className="eq-card-photo" loading="lazy" />
        ) : (
          <span className="eq-card-initials" style={{ background: cfg.color }}>
            {initials}
          </span>
        )}
      </div>

      {/* Text */}
      <div className="eq-card-body">
        <h3 className="eq-card-name">{member.nombre}</h3>
        {member.cargo && (
          <p className="eq-card-role" style={{ color: cfg.color }}>{member.cargo}</p>
        )}
        {member.zona && (
          <p className="eq-card-zona">
            <Icon icon="fluent:location-16-regular" width="13" height="13" />
            {member.zona}
          </p>
        )}
      </div>
    </div>
  );
};

/* ─── Section block ─── */
const SectionBlock = ({ title, icon, color, children, count }) => (
  <div className="eq-block">
    <div className="eq-block-header">
      <div className="eq-block-icon" style={{ background: `${color}18`, color }}>
        <Icon icon={icon} width="22" height="22" />
      </div>
      <div>
        <h3 className="eq-block-title" style={{ color }}>{title}</h3>
        <span className="eq-block-count">{count} candidato{count !== 1 ? 's' : ''}</span>
      </div>
    </div>
    {children}
  </div>
);

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════ */
const TABS = ['Todos', 'Gobernador', 'Asambleístas', 'Alcaldes'];

const Equipo = () => {
  const [activeTab, setActiveTab] = useState('Todos');

  const showGobernador  = activeTab === 'Todos' || activeTab === 'Gobernador';
  const showAsambleistas = activeTab === 'Todos' || activeTab === 'Asambleístas';
  const showAlcaldes    = activeTab === 'Todos' || activeTab === 'Alcaldes';

  return (
    <section className="eq-section" id="equipo">

      {/* Header */}
      <div className="eq-header">
        <span className="eq-eyebrow">Candidatos MTS 2026</span>
        <h2 className="eq-title">Nuestro Equipo de Trabajo</h2>
        <p className="eq-subtitle">
          El Movimiento Tercer Sistema presenta a sus candidatos comprometidos
          con la transformación de Chuquisaca en todas sus provincias y municipios.
        </p>
      </div>

      {/* Stat strip */}
      <div className="eq-stats">
        <div className="eq-stat">
          <span className="eq-stat-num">1</span>
          <span className="eq-stat-lbl">Gobernador</span>
        </div>
        <div className="eq-stat-sep" />
        <div className="eq-stat">
          <span className="eq-stat-num">{ASAMBLEISTAS.length}</span>
          <span className="eq-stat-lbl">Asambleístas</span>
        </div>
        <div className="eq-stat-sep" />
        <div className="eq-stat">
          <span className="eq-stat-num">{ALCALDES.length}</span>
          <span className="eq-stat-lbl">Alcaldes</span>
        </div>
        <div className="eq-stat-sep" />
        <div className="eq-stat">
          <span className="eq-stat-num">{1 + ASAMBLEISTAS.length + ALCALDES.length}</span>
          <span className="eq-stat-lbl">Total candidatos</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="eq-tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={activeTab === t}
            className={`eq-tab${activeTab === t ? ' eq-tab--active' : ''}`}
            onClick={() => setActiveTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="eq-content">

        {/* Gobernador */}
        {showGobernador && (
          <SectionBlock
            title="Candidato a Gobernador"
            icon="fluent:person-star-24-filled"
            color="#006938"
            count={GOBERNADOR.length}
          >
            <div className="eq-grid eq-grid--featured">
              {GOBERNADOR.map((m) => <Card key={m.id} member={m} featured />)}
            </div>
          </SectionBlock>
        )}

        {/* Asambleístas */}
        {showAsambleistas && (
          <SectionBlock
            title="Asambleístas Departamentales"
            icon="fluent:building-government-20-filled"
            color="#2d6a8f"
            count={ASAMBLEISTAS.length}
          >
            <div className="eq-grid eq-grid--asm">
              {ASAMBLEISTAS.map((m) => <Card key={m.id} member={m} />)}
            </div>
          </SectionBlock>
        )}

        {/* Alcaldes */}
        {showAlcaldes && (
          <SectionBlock
            title="Candidatos a Alcaldes"
            icon="fluent:building-24-filled"
            color="#c98040"
            count={ALCALDES.length}
          >
            <div className="eq-grid eq-grid--alc">
              {ALCALDES.map((m) => <Card key={m.id} member={m} />)}
            </div>
          </SectionBlock>
        )}

      </div>

      {/* CTA */}
      <div className="eq-cta">
        <Icon icon="fluent:people-add-20-filled" width="28" height="28" />
        <div className="eq-cta-text">
          <h4>¿Quieres ser parte del cambio?</h4>
          <p>Únete como voluntario y ayúdanos a construir el Chuquisaca que todos merecemos</p>
        </div>
        <a href="#contacto" className="eq-cta-btn">Únete ahora</a>
      </div>

    </section>
  );
};

export default Equipo;