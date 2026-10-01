import { IconName } from '../shared/icon/icon';

export interface NavLink {
  id: string;
  label: string;
}

export interface ClubValue {
  icon: IconName;
  lines: [string, string];
}

export interface Player {
  number: number;
  name: string;
  position: string;
  /** id de foto de Unsplash, resuelto por el IMAGE_LOADER */
  photo: string;
  alt: string;
  focus: string;
}

export interface Category {
  tag: string;
  name: string;
  ages: string;
}

export interface Match {
  home: string;
  away: string;
  kickoff: string;
  dateLabel: string;
  timeLabel: string;
  venue: string;
  round: string;
}

export interface GalleryPhoto {
  photo: string;
  alt: string;
  caption: string;
  tall: boolean;
}

/** Número del club en formato internacional, sin "+" ni espacios. */
const WHATSAPP_NUMBER = '59100000000';
const WHATSAPP_TEXT = '¡Hola Real Progreso F.C.! Quiero más información sobre el club.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

export const NAV_LINKS: readonly NavLink[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'club', label: 'El Club' },
  { id: 'equipo', label: 'Equipo' },
  { id: 'categorias', label: 'Categorías' },
  { id: 'galeria', label: 'Galería' },
  { id: 'contacto', label: 'Contacto' },
];

export const CLUB_VALUES: readonly ClubValue[] = [
  { icon: 'grad', lines: ['Formación', 'integral'] },
  { icon: 'team', lines: ['Trabajo', 'en equipo'] },
  { icon: 'shield', lines: ['Disciplina', 'y respeto'] },
  { icon: 'ball', lines: ['Pasión por', 'el fútbol'] },
];

export const PLAYERS: readonly Player[] = [
  { number: 10, name: 'Gabriel Cáceres', position: 'Delantero', photo: 'photo-1560272564-c83b66b1ad12', alt: 'Gabriel Cáceres rematando el balón', focus: '40% center' },
  { number: 7, name: 'Nicolás Rojas', position: 'Mediocampista', photo: 'photo-1517466787929-bc90951d0974', alt: 'Nicolás Rojas conduciendo el balón', focus: '55% 30%' },
  { number: 5, name: 'Mateo López', position: 'Defensa', photo: 'photo-1551280857-2b9bbe52acf4', alt: 'Mateo López despejando el balón', focus: '52% center' },
  { number: 1, name: 'Santiago Torres', position: 'Arquero', photo: 'photo-1600250395178-40fe752e5189', alt: 'Santiago Torres atajando un remate', focus: '35% center' },
];

export const CATEGORIES: readonly Category[] = [
  { tag: 'Sub-8', name: 'Semillero', ages: '5 a 7 años' },
  { tag: 'Sub-10', name: 'Infantil', ages: '8 a 9 años' },
  { tag: 'Sub-13', name: 'Pre-juvenil', ages: '10 a 12 años' },
  { tag: 'Sub-16', name: 'Juvenil', ages: '13 a 15 años' },
];

export const NEXT_MATCH: Match = {
  home: 'Real Progreso',
  away: 'Rival FC',
  kickoff: '2026-10-17T10:00:00',
  dateLabel: 'Sábado 17 de octubre',
  timeLabel: '10:00 AM',
  venue: 'Estadio Municipal — Cancha 2',
  round: 'Jornada 8 · Liga Juvenil',
};

export const GALLERY: readonly GalleryPhoto[] = [
  { photo: 'photo-1587329310686-91414b8e3cb7', alt: 'Balón entrando en la red', caption: '¡Gooool!', tall: true },
  { photo: 'photo-1526232761682-d26e03ac148e', alt: 'Niños entrenando con su entrenador', caption: 'Entrenamiento', tall: false },
  { photo: 'photo-1543326727-cf6c39e8f84c', alt: 'Jugadores disputando el balón en un partido', caption: 'Día de partido', tall: true },
  { photo: 'photo-1431324155629-1a6deb1dec8d', alt: 'Equipo completo en la cancha de noche', caption: 'Todo el equipo', tall: false },
  { photo: 'photo-1579952363873-27f3bade9f55', alt: 'Jugador con el pie sobre el balón', caption: 'El balón', tall: true },
  { photo: 'photo-1600679472829-3044539ce8ed', alt: 'Jugador conduciendo el balón', caption: 'Celebramos juntos', tall: false },
];

export const TICKER_WORDS: readonly string[] = ['Pasión', 'Unión', 'Fútbol', 'Esfuerzo', 'Respeto'];
