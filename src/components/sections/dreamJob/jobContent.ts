import { Feature, Theme } from './types';

export const mainThemes: Theme[] = [
  { name: 'Didáctico', keyword: 'didactico' },
  { name: 'Entretenido', keyword: 'entretenido' },
  { name: 'Con buen ambiente', keyword: 'ambiente' },
  { name: 'Equilibrio vida / trabajo', keyword: 'equilibrio' },
  { name: 'Sueldo €', keyword: 'sueldo' },
];
export const featuresContent: Feature[] = [
  { name: 'Remoto/Híbrido', themes: ['equilibrio'] , type:'need'},
  { name: 'Sin horas extra', themes: ['equilibrio', 'ambiente'] , type:'need'},
  { name: 'Horario flexible', themes: ['equilibrio'] , type:'need'},
  { name: 'Revisiones salariales', themes: ['sueldo', 'equilibrio'] , type:'need'},
  { name: 'Buenos compañeros', themes: ['ambiente', 'entretenido'] , type:'need'},
  { name: 'Seguro médico', themes: [ 'equilibrio','sueldo'] , type:'plus'},
  { name: 'Reviews de código', themes: ['didactico'] , type:'plus'},
  { name: 'Comunicación', themes: ['ambiente', 'entretenido'] , type:'need'},
  { name: 'Buenas prácticas', themes: ['didactico', 'entretenido'] , type:'need'},
  { name: 'Retribución flexible', themes: ['sueldo'] , type:'plus'},
  { name: 'Diferentes frameworks/proyectos', themes: ['entretenido', 'didactico'], type:'plus'},
  { name: 'Testing', themes: ['didactico'] , type:'plus'},
  { name: 'Agile', themes: ['didactico', 'equilibrio'] , type:'plus'},
  { name: 'Aprender backend', themes: ['didactico', 'entretenido'] , type:'plus'},
  { name: 'Salario muy competitivo', themes: ['sueldo', 'equilibrio'] , type:'dream'},
  { name: 'Jornada intensiva diaria', themes: [ 'equilibrio'] , type:'dream'},
  { name: 'Equipo joven', themes: [ 'ambiente', 'entretenido'] , type:'plus'},
  { name: 'Bonus', themes: ['sueldo'] , type:'plus'},
  { name: 'Formación', themes: ['didactico'] , type:'plus'},
  { name: 'Libertad para decidir tecnologías usadas', themes: ['entretenido', 'didactico'] , type:'dream'},
];
