import { Link, SkillCategory } from './types';

export const selectContent = [
  { index: '0', label: 'usedTech' },
  { index: '1', label: 'argElec' },
  {
    index: '2',
    label: 'esElec',
  },
];

export const selectContent2 = [
  { index: '0', label: 'usedTech' },
  { index: '1', label: 'rrhh' },
];

export const selectContent3 = [
  { index: '0', label: 'techSkills' },
  { index: '1', label: 'softSkills' },
];

export const argPoints = ['argP1', 'argP2', 'argP3', 'argP4'];

export const esPoints = ['esP1', 'esP2', 'esP3'];

export const ustPoints = ['ustP1', 'ustP2', 'ustP3'];

export const categories: SkillCategory[] = [
  {
    title: 'language',
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
    title: 'tools',
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
    title: 'libraries',
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
    title: 'tech',
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
    title: 'tools',
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
    title: 'techSkills',
    skills: [
      { name: 'wordpress', highlighted: true },
      { name: 'elementor', highlighted: false },
      { name: 'adobe', highlighted: true },
      {
        name: 'emailMarketing',
        highlighted: true,
      },
      { name: 'ads', highlighted: false },
      { name: 'copy', highlighted: true },
      { name: 'rrss', highlighted: false },
      { name: 'salesCalls', highlighted: false },
    ],
  },
];

export const categories3_2: SkillCategory[] = [
  {
    title: 'learnSoftSkills',
    skills: [
      { name: 'stress', highlighted: true },
      {
        name: 'oratory',
        highlighted: true,
      },
      { name: 'adapt', highlighted: false },
    ],
  },
  {
    title: 'teachSoftSkills',
    skills: [
      { name: 'learnFast', highlighted: true },
      { name: 'nerves', highlighted: false },
      { name: 'concentration', highlighted: true },
      {
        name: 'organization',
        highlighted: true,
      },
      { name: 'discipline', highlighted: false },
    ],
  },
];

export const esLinks: Link[] = [
  {
    name: 'difuMunis',
    url: 'https://resultados.locales2023.es/',
  },
];
