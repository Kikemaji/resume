import { Link, SkillCategory } from './types';

export const selectContent = [
  { index: '0', label: 'Tecnología usada' },
  { index: '1', label: 'Proyecto destacable - Elecciones argentinas' },
  {
    index: '2',
    label: 'Proyecto destacable - Elecciones autonómicas españolas',
  },
];

export const selectContent2 = [
  { index: '0', label: 'Tecnología usada' },
  { index: '1', label: 'Proyecto destacable - Plataforma de RRHH' },
];

export const selectContent3 = [
  { index: '0', label: 'Habilidades técnicas' },
  { index: '1', label: 'Soft skills' },
  { index: '2', label: 'Destacable' },
];

export const argPoints = [
  'Rediseño completo de la aplicación de captura y monitorización de votos en React.',
  '*Resolución de más de 100 incidencias* para actualizar app antigua a la nueva versión.',
  'Implementación de nuevas funcionalidades en un *código de alta complejidad.*',
  'Creación de una aplicación de gestión de usuarios usando Next 13 (Api routes, server components), *reduciendo un proceso de 4 horas a 30 minutos*',
];

export const esPoints = [
  '*Desarrollo en múltiples aplicaciones a la vez* para dar apoyo dónde fuera necesario, manteniendo al mismo tiempo un rol principal en la aplicación de difusión de votos.',
  'Creación de una *web multilingüe* con React para descargar datos de prensa electoral.',
  '*Implementación de diseño responsive* con animaciones usando Tailwind, framer motion, eChárts, Rádix…',
];

export const ustPoints = [
  '*Creación desde 0* de la aplicación con *Angular y Firebase.*',
  'Implementación de *diseño responsive* con SCSS.',
  'Foco en funcionalidades y conexión con la BBDD de firestore.',
];

export const categories: SkillCategory[] = [
  {
    title: 'Lenguajes/frameworks:',
    skills: [
      { name: 'JavaScript/TypeScript', highlighted: true },
      { name: 'React.js', highlighted: true },
      { name: 'Next.js(v.13+)', highlighted: true },
      { name: 'CSS3', highlighted: false },
      { name: 'Tailwind', highlighted: false },
      { name: 'HTML5', highlighted: false },
    ],
  },
  {
    title: 'Herramientas:',
    skills: [
      { name: 'Git', highlighted: false },
      { name: 'Postman', highlighted: false },
      { name: 'Mockoon', highlighted: false },
      { name: 'NVM', highlighted: false },
      { name: 'Figma', highlighted: false },
      { name: 'VS Code', highlighted: false },
    ],
  },
  {
    title: 'Librerías:',
    skills: [
      { name: 'eCharts', highlighted: true },
      { name: 'axios', highlighted: false },
      { name: 'SWR', highlighted: false },
      { name: 'framer motion', highlighted: false },
      { name: 'react-hook-forms', highlighted: true },
      { name: 'react-select', highlighted: false },
      { name: 'tanstack table', highlighted: false },
      { name: 'clsx', highlighted: false },
      { name: 'styled components', highlighted: true },
      { name: 'class variance authority', highlighted: false },
      { name: 'radix', highlighted: true },
      { name: 'i18n', highlighted: false },
    ],
  },
];

export const categories2: SkillCategory[] = [
  {
    title: 'Tecnologías:',
    skills: [
      { name: 'TypeScript', highlighted: true },
      { name: 'Angular', highlighted: true },
      { name: 'CSS3', highlighted: false },
      { name: 'Bootstrap', highlighted: false },
      { name: 'SCSS', highlighted: true },
      { name: 'HTML5', highlighted: false },
      { name: 'Firebase', highlighted: false },
    ],
  },
  {
    title: 'Herramientas:',
    skills: [
      { name: 'Git', highlighted: false },
      { name: 'Postman', highlighted: false },
      { name: 'Figma', highlighted: false },
      { name: 'VS Code', highlighted: false },
    ],
  },
];

export const categories3_1: SkillCategory[] = [
  {
    title: 'Habilidades técnicas:',
    skills: [
      { name: 'Wordpress', highlighted: true },
      { name: 'Elementor Pro', highlighted: false },
      { name: 'Adobe Premiere (Edición de vídeo)', highlighted: true },
      {
        name: 'Email marketing (Active Campaign)',
        highlighted: true,
      },
      { name: 'Meta Bussiness manager (Anuncios)', highlighted: false },
      { name: 'Copywriting', highlighted: true },
      { name: 'Gestión de RRSS', highlighted: false },
      { name: 'Llamadas de ventas', highlighted: false },
    ],
  },
];

export const categories3_2: SkillCategory[] = [
  {
    title: 'Soft skills adquiridas:',
    skills: [
      { name: 'Gestión del estrés', highlighted: true },
      {
        name: 'Oratoria',
        highlighted: true,
      },
      { name: 'Adaptabilidad', highlighted: false },
    ],
  },
  {
    title: 'Soft skills enseñadas:',
    skills: [
      { name: 'Rapidez para aprender', highlighted: true },
      { name: 'Gestión de los nervios', highlighted: false },
      { name: 'Concentración', highlighted: true },
      {
        name: 'Alta capacidad de organización',
        highlighted: true,
      },
      { name: 'Disciplina', highlighted: false },
    ],
  },
];

export const esLinks: Link[] = [
  {
    name: 'Difusión elecciones autonómicas',
    url: 'https://resultados.locales2023.es/',
  },
];
