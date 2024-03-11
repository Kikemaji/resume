import { Feature, Theme } from './types';

export const mainThemes: Theme[] = [
  { name: 'Didáctico', keyword: 'didactico' },
  { name: 'Entretenido', keyword: 'entretenido' },
  { name: 'Con buen ambiente', keyword: 'ambiente' },
  { name: 'Equilibrio vida / trabajo', keyword: 'equilibrio' },
  { name: 'Sueldo €', keyword: 'sueldo' },
];
export const featuresContent: Feature[] = [
  { name: 'Reviews de código', themes: ['didactico'] , type:'plus'},
  { name: 'Comunicación', themes: ['ambiente', 'entretenido'] , type:'need'},
  { name: 'Buenas prácticas', themes: ['didactico', 'entretenido'] , type:'need'},
  {name: 'Diferentes frameworks/proyectos', themes: ['entretenido', 'didactico'], type:'plus'},
  { name: 'Testing', themes: ['didactico'] , type:'plus'},
  { name: 'Remoto/Híbrido', themes: ['equilibrio'] , type:'need'},
  { name: 'Sin horas extra', themes: ['equilibrio', 'ambiente'] , type:'need'},
  { name: 'Agile', themes: ['didactico', 'equilibrio'] , type:'plus'},
  { name: 'Buenos compañeros', themes: ['ambiente', 'entretenido'] , type:'plus'},
  { name: 'Aprender backend', themes: ['didactico', 'entretenido'] , type:'plus'},
  { name: 'Revisiones salariales', themes: ['sueldo', 'equilibrio'] , type:'need'},
  { name: 'Salario muy competitivo', themes: ['sueldo', 'equilibrio'] , type:'dream'},
];
