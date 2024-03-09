import { Feature, Theme } from './types';

export const mainThemes: Theme[] = [
  { name: 'Didáctico', keyword: 'didactico' },
  { name: 'Entretenido', keyword: 'entretenido' },
  { name: 'Con buen ambiente', keyword: 'ambiente' },
  { name: 'Equilibrio vida / trabajo', keyword: 'equilibrio' },
  { name: 'Sueldo €', keyword: 'sueldo' },
];
export const featuresContent: Feature[] = [
  { name: 'Reviews de código', theme: 'didactico' },
  { name: 'Comunicación', theme: 'ambiente' },
  { name: 'Buenas prácticas', theme: 'didactico' },
  { name: 'Diferentes frameworks/proyectos', theme: 'entretenido' },
  { name: 'Testing', theme: 'didactico' },
  { name: 'Remoto', theme: 'equilibrio' },
  { name: 'Sin horas extra', theme: 'equilibrio' },
  { name: 'Agile', theme: 'didactico' },
  { name: 'Buenos compañeros', theme: 'ambiente' },
  { name: 'Aprender backend', theme: 'didactico' },
  { name: 'Revisiones salariales', theme: 'sueldo' },
];
