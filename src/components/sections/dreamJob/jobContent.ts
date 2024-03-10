import { Feature, Theme } from './types';

export const mainThemes: Theme[] = [
  { name: 'Didáctico', keyword: 'didactico' },
  { name: 'Entretenido', keyword: 'entretenido' },
  { name: 'Con buen ambiente', keyword: 'ambiente' },
  { name: 'Equilibrio vida / trabajo', keyword: 'equilibrio' },
  { name: 'Sueldo €', keyword: 'sueldo' },
];
export const featuresContent: Feature[] = [
  { name: 'Reviews de código', themes: ['didactico'] },
  { name: 'Comunicación', themes: ['ambiente', 'entretenido'] },
  { name: 'Buenas prácticas', themes: ['didactico', 'entretenido'] },
  {
    name: 'Diferentes frameworks/proyectos',
    themes: ['entretenido', 'didactico'],
  },
  { name: 'Testing', themes: ['didactico'] },
  { name: 'Remoto', themes: ['equilibrio'] },
  { name: 'Sin horas extra', themes: ['equilibrio', 'ambiente'] },
  { name: 'Agile', themes: ['didactico', 'equilibrio'] },
  { name: 'Buenos compañeros', themes: ['ambiente', 'entretenido'] },
  { name: 'Aprender backend', themes: ['didactico', 'entretenido'] },
  { name: 'Revisiones salariales', themes: ['sueldo', 'equilibrio'] },
];
